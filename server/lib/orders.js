'use strict';
// Order lifecycle for rides, parcels and food/shop deliveries.
//
//   ride:     searching → accepted → arrived → riding → done
//   parcel:   searching → accepted → picked → done
//   delivery: new → cooking → ready → delivering → done     (venue accepts, courier delivers)
//   any:      → cancelled
const { fail } = require('./http');
const P = require('./pricing');

const ACTIVE = {
  ride: ['searching', 'accepted', 'arrived', 'riding'],
  parcel: ['searching', 'accepted', 'picked'],
  delivery: ['new', 'cooking', 'ready', 'delivering'],
};
const isActive = (o) => ACTIVE[o.kind].includes(o.status);
const ACTIVE_SQL = "status NOT IN ('done', 'cancelled')";

// Next status a worker may set, by kind and current status.
const WORKER_NEXT = {
  ride: { accepted: 'arrived', arrived: 'riding', riding: 'done' },
  parcel: { accepted: 'picked', picked: 'done' },
  delivery: { ready: 'delivering', delivering: 'done' },
};
const CLIENT_CANCEL = {
  ride: ['searching', 'accepted', 'arrived'],
  parcel: ['searching', 'accepted'],
  delivery: ['new'],
};

const OFFER_RADIUS_KM = 15;
const SEARCH_TIMEOUT = 15 * 60e3;
const VENUE_TIMEOUT = 15 * 60e3;

const tariffOf = (kind, id) => (P.TARIFFS[kind] || []).find((t) => t.id === id);
const avg = (sum, count) => (count ? Math.round((sum / count) * 100) / 100 : 5);

function createOrders(db, rt, opts = {}) {
  const kitchen = opts.kitchenDelays || [5000, 25000];
  const OFFLINE_AFTER = opts.offlineAfter || 3 * 60e3;
  const now = () => Date.now();

  /* ---------- reading ---------- */
  const load = (id) => db.one('SELECT * FROM orders WHERE id = ?', id);
  const adminIds = () => db.all('SELECT id FROM users WHERE is_admin = 1').map((r) => r.id);

  function workerEarning(o) {
    if (o.kind === 'delivery') return P.workerShare(o.delivery_fee) + o.tip;
    return P.workerShare(o.price) + o.tip;
  }

  function onlineNearby(o) {
    const from = JSON.parse(o.from_json);
    const kind = o.kind === 'ride' ? 'driver' : 'courier';
    return db.all("SELECT lat, lng FROM workers WHERE kind = ? AND status = 'approved' AND online = 1", kind)
      .filter((w) => w.lat == null || P.hav(from, w) <= OFFER_RADIUS_KM).length;
  }

  // The client's phone goes only to the assigned worker, the venue owner and admins (viewerId -1 = admin screen).
  function seesClient(o, viewerId, ownerId) {
    if (viewerId === o.client_id) return false;
    if (viewerId === -1 || viewerId === o.worker_id || (ownerId && viewerId === ownerId)) return true;
    const u = viewerId > 0 ? db.one('SELECT is_admin FROM users WHERE id = ?', viewerId) : null;
    return !!(u && u.is_admin);
  }

  // What a given user may see of an order. Phone numbers are shared only while the order is active.
  function view(o, viewerId) {
    const active = isActive(o);
    const client = db.one('SELECT id, name, phone FROM users WHERE id = ?', o.client_id);
    let worker = null;
    if (o.worker_id) {
      const w = db.one(
        `SELECT u.id, u.name, u.phone, w.kind, w.car_model, w.car_color, w.car_plate, w.vehicle, w.lat, w.lng, w.rating_sum, w.rating_count
         FROM users u JOIN workers w ON w.user_id = u.id WHERE u.id = ?`, o.worker_id
      );
      if (w) {
        worker = {
          id: w.id, name: w.name, kind: w.kind, rating: avg(w.rating_sum, w.rating_count),
          car_model: w.car_model, car_color: w.car_color, car_plate: w.car_plate, vehicle: w.vehicle,
          phone: active ? '+' + w.phone : null,
          lat: active ? w.lat : null, lng: active ? w.lng : null,
        };
      }
    }
    let venue = null, ownerId = null;
    if (o.venue_id) {
      const v = db.one('SELECT id, owner_id, name, name_ru, emoji, hue, address, lat, lng, eta_min, eta_max, commission FROM venues WHERE id = ?', o.venue_id);
      ownerId = v ? v.owner_id : null;
      if (v) venue = { id: v.id, name: v.name, name_ru: v.name_ru, emoji: v.emoji, hue: v.hue, address: v.address, lat: v.lat, lng: v.lng, eta_min: v.eta_min, eta_max: v.eta_max };
      if (v && viewerId === v.owner_id) venue.payout = o.subtotal - Math.round(o.subtotal * v.commission);
    }
    const out = {
      id: o.id, kind: o.kind, status: o.status, tariff: o.tariff, client_id: o.client_id, worker_id: o.worker_id,
      from: JSON.parse(o.from_json), to: JSON.parse(o.to_json),
      km: o.km, minutes: o.minutes, price: o.price,
      items: o.items_json ? JSON.parse(o.items_json) : null,
      subtotal: o.subtotal, delivery_fee: o.delivery_fee, donation: o.donation, total: o.total,
      pay: o.pay, comment: o.comment, pkg: o.pkg, stars: o.stars, tip: o.tip,
      cancel_reason: o.cancel_reason, created_at: o.created_at, updated_at: o.updated_at,
      events: db.all('SELECT status, at FROM order_events WHERE order_id = ? ORDER BY at, rowid', o.id),
      client: { name: client ? client.name : '', phone: active && client && seesClient(o, viewerId, ownerId) ? '+' + client.phone : null },
      worker, venue,
    };
    if (viewerId === o.worker_id) out.earning = workerEarning(o);
    if (o.status === 'searching') out.nearby = onlineNearby(o);
    return out;
  }

  /* ---------- publishing ---------- */
  function audience(o) {
    const ids = new Set([o.client_id, ...adminIds()]);
    if (o.worker_id) ids.add(o.worker_id);
    if (o.venue_id) {
      const v = db.one('SELECT owner_id FROM venues WHERE id = ?', o.venue_id);
      if (v && v.owner_id) ids.add(v.owner_id);
    }
    return ids;
  }
  function publish(o) {
    for (const uid of audience(o)) rt.send(uid, 'order', view(o, uid));
  }
  function pokeWorkers(kind) {
    const ids = db.all("SELECT user_id FROM workers WHERE kind = ? AND status = 'approved' AND online = 1", kind).map((r) => r.user_id);
    for (const uid of ids) rt.send(uid, 'offers', {});
  }
  const pokeFor = (o) => pokeWorkers(o.kind === 'ride' ? 'driver' : 'courier');

  function setStatus(id, status, extra) {
    const t = now();
    const sets = ['status = ?', 'updated_at = ?'];
    const vals = [status, t];
    for (const [k, v] of Object.entries(extra || {})) { sets.push(`${k} = ?`); vals.push(v); }
    db.run(`UPDATE orders SET ${sets.join(', ')} WHERE id = ?`, ...vals, id);
    db.run('INSERT INTO order_events (order_id, status, at) VALUES (?, ?, ?)', id, status, t);
    return load(id);
  }

  function insert(fields) {
    const t = now();
    const keys = Object.keys(fields);
    const res = db.run(
      `INSERT INTO orders (${keys.join(', ')}, created_at, updated_at) VALUES (${keys.map(() => '?').join(', ')}, ?, ?)`,
      ...keys.map((k) => fields[k]), t, t
    );
    const id = Number(res.lastInsertRowid);
    db.run('INSERT INTO order_events (order_id, status, at) VALUES (?, ?, ?)', id, fields.status, t);
    return load(id);
  }

  function assertNoActive(clientId, kind) {
    const n = db.one(`SELECT COUNT(*) AS n FROM orders WHERE client_id = ? AND kind = ? AND ${ACTIVE_SQL}`, clientId, kind).n;
    if (n >= (kind === 'delivery' ? 3 : 1)) fail(409, 'has_active');
  }

  /* ---------- client actions ---------- */
  function createTrip(user, kind, { from, to, tariff, pay, comment, pkg }) {
    const tar = tariffOf(kind, tariff);
    if (!tar) fail(400, 'invalid', 'tariff');
    if (tar.social && !(user.social_verified && user.social_status !== 'none')) fail(403, 'social_not_verified');
    assertNoActive(user.id, kind);
    const t = P.trip(from, to);
    if (t.km > 120) fail(400, 'too_far');
    const price = P.fare(tar, t);
    const o = insert({
      kind, status: 'searching', client_id: user.id, tariff: tar.id,
      from_json: JSON.stringify(from), to_json: JSON.stringify(to),
      km: t.km, minutes: t.minutes, price, total: price, pay, comment, pkg: pkg || '',
    });
    publish(o);
    pokeFor(o);
    return view(o, user.id);
  }

  function createDelivery(user, { venueId, lines, to, pay, comment, roundUp }) {
    const venue = db.one("SELECT * FROM venues WHERE id = ? AND status = 'approved'", venueId);
    if (!venue) fail(404, 'not_found', 'venue');
    if (!venue.is_open) fail(409, 'venue_closed');
    assertNoActive(user.id, 'delivery');
    if (P.hav(venue, to) > OFFER_RADIUS_KM) fail(400, 'too_far');

    const o = db.tx(() => {
      const items = [];
      let subtotal = 0;
      for (const { id, q } of lines) {
        const it = db.one('SELECT * FROM items WHERE id = ? AND venue_id = ? AND available = 1', id, venue.id);
        if (!it) fail(409, 'item_unavailable', String(id));
        if (it.stock != null) {
          if (it.stock < q) fail(409, 'out_of_stock', String(id));
          db.run('UPDATE items SET stock = stock - ? WHERE id = ?', q, it.id);
        }
        items.push({ id: it.id, name: it.name, name_ru: it.name_ru, emoji: it.emoji, price: it.price, q });
        subtotal += it.price * q;
      }
      if (subtotal < venue.min_order) fail(400, 'min_order', String(venue.min_order - subtotal));
      const fee = venue.delivery_fee;
      const donation = roundUp ? P.roundUp(subtotal + fee) : 0;
      return insert({
        kind: 'delivery', status: 'new', client_id: user.id, venue_id: venue.id,
        from_json: JSON.stringify({ n: venue.name, a: venue.address, lat: venue.lat, lng: venue.lng }),
        to_json: JSON.stringify(to), km: P.trip(venue, to).km,
        items_json: JSON.stringify(items), subtotal, delivery_fee: fee, donation,
        total: subtotal + fee + donation, pay, comment,
      });
    });
    publish(o);
    if (venue.demo) demoKitchen(o.id);
    return view(o, user.id);
  }

  function restoreStock(o) {
    if (o.kind !== 'delivery' || !o.items_json) return;
    for (const l of JSON.parse(o.items_json)) db.run('UPDATE items SET stock = stock + ? WHERE id = ? AND stock IS NOT NULL', l.q, l.id);
  }

  function cancelByClient(user, id) {
    const o = load(id);
    if (!o || o.client_id !== user.id) fail(404, 'not_found');
    if (!CLIENT_CANCEL[o.kind].includes(o.status)) fail(409, 'cannot_cancel');
    const c = db.tx(() => {
      restoreStock(o);
      return setStatus(o.id, 'cancelled', { cancel_reason: 'client' });
    });
    publish(c);
    if (o.status === 'searching') pokeFor(o);
    return view(c, user.id);
  }

  function rate(user, id, stars, tip) {
    const o = load(id);
    if (!o || o.client_id !== user.id) fail(404, 'not_found');
    if (o.status !== 'done') fail(409, 'not_done');
    if (o.stars) fail(409, 'already_rated');
    db.tx(() => {
      db.run('UPDATE orders SET stars = ?, tip = ?, total = total + ?, updated_at = ? WHERE id = ?', stars, tip, tip, now(), o.id);
      if (o.worker_id) db.run('UPDATE workers SET rating_sum = rating_sum + ?, rating_count = rating_count + 1 WHERE user_id = ?', stars, o.worker_id);
      if (o.venue_id) db.run('UPDATE venues SET rating_sum = rating_sum + ?, rating_count = rating_count + 1 WHERE id = ?', stars, o.venue_id);
    });
    const r = load(o.id);
    publish(r);
    return view(r, user.id);
  }

  function listForClient(user) {
    return db.all('SELECT * FROM orders WHERE client_id = ? ORDER BY created_at DESC LIMIT 50', user.id).map((o) => view(o, user.id));
  }

  function getFor(user, id) {
    const o = load(id);
    if (!o) fail(404, 'not_found');
    const v = o.venue_id ? db.one('SELECT owner_id FROM venues WHERE id = ?', o.venue_id) : null;
    const allowed = user.is_admin || o.client_id === user.id || o.worker_id === user.id || (v && v.owner_id === user.id);
    if (!allowed) fail(404, 'not_found');
    return view(o, user.id);
  }

  /* ---------- workers ---------- */
  const workerOf = (user) => db.one('SELECT * FROM workers WHERE user_id = ?', user.id);
  function approvedWorker(user) {
    const w = workerOf(user);
    if (!w) fail(403, 'not_worker');
    if (w.status !== 'approved') fail(403, 'worker_' + w.status);
    return w;
  }
  const currentFor = (userId) => db.one(`SELECT * FROM orders WHERE worker_id = ? AND ${ACTIVE_SQL} ORDER BY created_at DESC`, userId);

  function fits(w, o) {
    if (o.worker_id) return false;
    if (w.kind === 'driver') {
      if (o.kind !== 'ride' || o.status !== 'searching') return false;
      const tar = tariffOf('ride', o.tariff);
      if (!tar.classes.includes(w.car_class)) return false;
      if (tar.childSeat && !w.child_seat) return false;
    } else {
      if (o.kind === 'parcel') {
        if (o.status !== 'searching') return false;
        if (!tariffOf('parcel', o.tariff).vehicles.includes(w.vehicle)) return false;
      } else if (o.kind === 'delivery') {
        if (!['cooking', 'ready'].includes(o.status)) return false;
      } else return false;
    }
    if (w.lat == null) return true;
    return P.hav(JSON.parse(o.from_json), w) <= OFFER_RADIUS_KM;
  }

  function offers(user) {
    const w = approvedWorker(user);
    if (!w.online || currentFor(user.id)) return [];
    const kinds = w.kind === 'driver' ? "('ride')" : "('parcel', 'delivery')";
    const rows = db.all(`SELECT * FROM orders WHERE kind IN ${kinds} AND worker_id IS NULL AND ${ACTIVE_SQL} ORDER BY created_at LIMIT 100`);
    const list = rows.filter((o) => fits(w, o)).map((o) => {
      const v = view(o, user.id);
      v.distance = w.lat == null ? null : Math.round(P.hav(v.from, w) * 10) / 10;
      v.earning = workerEarning(o);
      return v;
    });
    list.sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
    return list;
  }

  function accept(user, id) {
    const w = approvedWorker(user);
    if (!w.online) fail(409, 'offline');
    if (currentFor(user.id)) fail(409, 'busy');
    const o = load(id);
    if (!o || !fits({ ...w, lat: null }, o)) fail(409, 'taken');
    const res = o.kind === 'delivery'
      ? db.run("UPDATE orders SET worker_id = ?, updated_at = ? WHERE id = ? AND worker_id IS NULL AND status IN ('cooking', 'ready')", user.id, now(), o.id)
      : db.run("UPDATE orders SET worker_id = ?, status = 'accepted', updated_at = ? WHERE id = ? AND worker_id IS NULL AND status = 'searching'", user.id, now(), o.id);
    if (!res.changes) fail(409, 'taken');
    if (o.kind !== 'delivery') db.run("INSERT INTO order_events (order_id, status, at) VALUES (?, 'accepted', ?)", o.id, now());
    else db.run("INSERT INTO order_events (order_id, status, at) VALUES (?, 'courier', ?)", o.id, now());
    const a = load(o.id);
    publish(a);
    pokeFor(a);
    return view(a, user.id);
  }

  function release(user, id) {
    const o = load(id);
    if (!o || o.worker_id !== user.id) fail(404, 'not_found');
    let r;
    if (o.kind === 'delivery') {
      if (!['cooking', 'ready'].includes(o.status)) fail(409, 'cannot_release');
      db.run('UPDATE orders SET worker_id = NULL, updated_at = ? WHERE id = ?', now(), o.id);
      db.run("INSERT INTO order_events (order_id, status, at) VALUES (?, 'released', ?)", o.id, now());
      r = load(o.id);
    } else {
      if (o.status !== 'accepted') fail(409, 'cannot_release');
      r = setStatus(o.id, 'searching', { worker_id: null });
    }
    publish(r);
    rt.send(user.id, 'order', view(r, user.id));
    pokeFor(r);
    return view(r, user.id);
  }

  function advanceByWorker(user, id, status) {
    const o = load(id);
    if (!o || o.worker_id !== user.id) fail(404, 'not_found');
    if (WORKER_NEXT[o.kind][o.status] !== status) fail(409, 'bad_status');
    const n = setStatus(o.id, status);
    publish(n);
    return view(n, user.id);
  }

  function setOnline(user, online) {
    const w = approvedWorker(user);
    if (!online && currentFor(user.id)) fail(409, 'busy');
    db.run('UPDATE workers SET online = ?, loc_at = COALESCE(loc_at, ?) WHERE user_id = ?', online ? 1 : 0, now(), user.id);
    return { ...w, online: online ? 1 : 0 };
  }

  function setLocation(user, lat, lng) {
    const w = approvedWorker(user);
    db.run('UPDATE workers SET lat = ?, lng = ?, loc_at = ? WHERE user_id = ?', lat, lng, now(), user.id);
    const o = currentFor(user.id);
    if (o) rt.send(o.client_id, 'loc', { orderId: o.id, lat, lng });
    return { ok: true, kind: w.kind };
  }

  function workerStats(user) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const rows = db.all("SELECT * FROM orders WHERE worker_id = ? AND status = 'done' AND updated_at >= ?", user.id, start.getTime());
    return { today: rows.reduce((a, o) => a + workerEarning(o), 0), trips: rows.length };
  }

  function listForWorker(user) {
    return db.all('SELECT * FROM orders WHERE worker_id = ? ORDER BY created_at DESC LIMIT 30', user.id).map((o) => view(o, user.id));
  }

  /* ---------- venues (partners) ---------- */
  function ownVenue(user, venueId) {
    const v = db.one('SELECT * FROM venues WHERE id = ?', venueId);
    if (!v || (v.owner_id !== user.id && !user.is_admin)) fail(404, 'not_found');
    return v;
  }
  const PARTNER_NEXT = { new: ['cooking', 'cancelled'], cooking: ['ready'] };

  function advanceByVenue(user, id, status, reason) {
    const o = load(id);
    if (!o || o.kind !== 'delivery') fail(404, 'not_found');
    ownVenue(user, o.venue_id);
    if (!(PARTNER_NEXT[o.status] || []).includes(status)) fail(409, 'bad_status');
    const n = db.tx(() => {
      if (status === 'cancelled') restoreStock(o);
      return setStatus(o.id, status, status === 'cancelled' ? { cancel_reason: reason || 'venue' } : {});
    });
    publish(n);
    if (status === 'cooking' || status === 'ready') pokeWorkers('courier');
    return view(n, user.id);
  }

  function listForVenue(user, venueId) {
    ownVenue(user, venueId);
    const since = Date.now() - 24 * 3600e3;
    return db.all(`SELECT * FROM orders WHERE venue_id = ? AND (${ACTIVE_SQL} OR created_at > ?) ORDER BY created_at DESC LIMIT 100`, venueId, since)
      .map((o) => view(o, user.id));
  }

  // Demo venues have no owner, so a simulated kitchen accepts and prepares their orders.
  const kitchenTimers = new Set();
  function demoKitchen(id) {
    const step = (from, to, ms) => {
      const t = setTimeout(() => {
        kitchenTimers.delete(t);
        const o = load(id);
        if (!o || o.status !== from) return;
        const n = setStatus(id, to);
        publish(n);
        pokeWorkers('courier');
      }, ms);
      if (t.unref) t.unref();
      kitchenTimers.add(t);
    };
    const o = load(id);
    if (o.status === 'new') { step('new', 'cooking', kitchen[0]); step('cooking', 'ready', kitchen[1]); }
    else if (o.status === 'cooking') step('cooking', 'ready', kitchen[1] - kitchen[0]);
  }
  function resumeDemoKitchens() {
    db.all(`SELECT o.id FROM orders o JOIN venues v ON v.id = o.venue_id WHERE v.demo = 1 AND o.status IN ('new', 'cooking')`).forEach((r) => demoKitchen(r.id));
  }

  /* ---------- housekeeping ---------- */
  function sweep() {
    const t = now();
    const stale = db.all(
      `SELECT * FROM orders WHERE (kind IN ('ride', 'parcel') AND status = 'searching' AND updated_at < ?)
         OR (kind = 'delivery' AND status = 'new' AND created_at < ?)`, t - SEARCH_TIMEOUT, t - VENUE_TIMEOUT
    );
    for (const o of stale) {
      const c = db.tx(() => {
        restoreStock(o);
        return setStatus(o.id, 'cancelled', { cancel_reason: o.kind === 'delivery' ? 'venue_timeout' : 'no_workers' });
      });
      publish(c);
    }
    // Workers whose app stopped sending location go offline, unless they are on an order.
    db.run(
      `UPDATE workers SET online = 0 WHERE online = 1 AND loc_at < ?
         AND user_id NOT IN (SELECT worker_id FROM orders WHERE worker_id IS NOT NULL AND ${ACTIVE_SQL})`, t - OFFLINE_AFTER
    );
  }

  function stop() {
    for (const t of kitchenTimers) clearTimeout(t);
    kitchenTimers.clear();
  }

  return {
    view, load, isActive, workerEarning,
    createTrip, createDelivery, cancelByClient, rate, listForClient, getFor,
    workerOf, offers, accept, release, advanceByWorker, setOnline, setLocation, workerStats, listForWorker, currentFor,
    ownVenue, advanceByVenue, listForVenue,
    resumeDemoKitchens, sweep, stop,
  };
}

module.exports = { createOrders, ACTIVE, avg };
