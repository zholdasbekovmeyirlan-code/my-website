'use strict';
// All HTTP API endpoints. Each handler returns a JSON-able value or throws HttpError.
const V = require('../lib/validate');
const P = require('../lib/pricing');
const { fail } = require('../lib/http');
const { avg } = require('../lib/orders');
const { createIdempotency } = require('../lib/idempotency');

const SOCIAL = ['none', 'pension', 'disability', 'large'];
const VEHICLES = ['walk', 'bike', 'scooter', 'car', 'truck'];
const CAR_CLASSES = ['econom', 'comfort', 'business'];
const VENUE_TYPES = ['food', 'shop', 'pharm'];
const CATS = ['doner', 'fast', 'pizza', 'sushi', 'national', 'coffee', 'dessert', 'healthy', 'grill', 'bakery'];

module.exports = function register(r, { db, auth, orders, config, uploads }) {
  const idem = createIdempotency(db);
  /* ---------- shared views ---------- */
  const workerView = (w) => w && ({
    kind: w.kind, status: w.status, online: !!w.online,
    car_model: w.car_model, car_color: w.car_color, car_plate: w.car_plate, car_class: w.car_class,
    child_seat: !!w.child_seat, vehicle: w.vehicle, rating: avg(w.rating_sum, w.rating_count), rating_count: w.rating_count,
    lat: w.lat, lng: w.lng,
  });
  const me = (u) => ({
    user: { id: u.id, phone: '+' + u.phone, name: u.name, is_admin: !!u.is_admin, social_status: u.social_status, social_verified: !!u.social_verified },
    worker: workerView(db.one('SELECT * FROM workers WHERE user_id = ?', u.id)),
    venues: db.all('SELECT id, name, name_ru, type, status, is_open, emoji FROM venues WHERE owner_id = ? ORDER BY id', u.id),
  });
  const venueCard = (v) => {
    const box = db.one('SELECT id, name, name_ru, descr, descr_ru, price, old_price, stock FROM items WHERE venue_id = ? AND available = 1 AND old_price IS NOT NULL AND (stock IS NULL OR stock > 0) ORDER BY sort LIMIT 1', v.id);
    return {
      id: v.id, type: v.type, name: v.name, name_ru: v.name_ru, note: v.note, note_ru: v.note_ru,
      cats: v.cats ? v.cats.split(',') : [], emoji: v.emoji, hue: v.hue, address: v.address, lat: v.lat, lng: v.lng,
      rating: avg(v.rating_sum, v.rating_count), rating_count: v.rating_count, eta: [v.eta_min, v.eta_max], delivery_fee: v.delivery_fee, min_order: v.min_order,
      local: !!v.local, grid: !!v.grid, is_open: !!v.is_open, status: v.status, commission: v.commission, box: box || null,
      cover_url: v.cover_url || null,
    };
  };
  const menuOf = (venueId, all) => {
    const sections = db.all('SELECT id, name, name_ru, sort FROM sections WHERE venue_id = ? ORDER BY sort, id', venueId);
    const items = db.all(`SELECT * FROM items WHERE venue_id = ? ${all ? '' : 'AND available = 1 AND (stock IS NULL OR stock > 0)'} ORDER BY sort, id`, venueId);
    return { sections, items };
  };

  /* ---------- public ---------- */
  r.add('GET', '/api/config', () => ({
    tariffs: P.TARIFFS, workerShare: P.WORKER_SHARE, simulate: config.simulate, smsMode: config.smsMode, cats: CATS,
  }));

  r.add('GET', '/api/stats/public', () => {
    const d = db.one("SELECT COALESCE(SUM(donation), 0) AS donated FROM orders WHERE status != 'cancelled'");
    const w = db.one("SELECT COUNT(*) AS n FROM workers WHERE status = 'approved' AND online = 1");
    return { donated: d.donated, online: w.n };
  });

  r.add('GET', '/api/venues', ({ query }) => {
    const type = query.type && VENUE_TYPES.includes(query.type) ? query.type : null;
    const rows = type
      ? db.all("SELECT * FROM venues WHERE status = 'approved' AND type = ? ORDER BY is_open DESC, rating_sum * 1.0 / MAX(rating_count, 1) DESC", type)
      : db.all("SELECT * FROM venues WHERE status = 'approved' ORDER BY is_open DESC, id");
    return rows.map(venueCard);
  });

  r.add('GET', '/api/venues/:id', ({ params, user }) => {
    const v = db.one('SELECT * FROM venues WHERE id = ?', V.int(params.id, 'id'));
    if (!v || (v.status !== 'approved' && !(user && (user.is_admin || user.id === v.owner_id)))) fail(404, 'not_found');
    return { ...venueCard(v), ...menuOf(v.id, false) };
  }, { auth: 'optional' });

  /* ---------- auth ---------- */
  r.add('POST', '/api/auth/code', ({ body, ip }) => auth.requestCode(V.phone(body.phone), ip));

  r.add('POST', '/api/auth/verify', ({ body, ip }) => {
    const phone = V.phone(body.phone);
    const name = V.str(body.name, 'name', { max: 40, optional: true });
    const { token, userId } = auth.verify(phone, body.code, name, ip);
    return { token, ...me(db.one('SELECT * FROM users WHERE id = ?', userId)) };
  });

  r.add('POST', '/api/auth/logout', ({ token }) => { auth.logout(token); return { ok: true }; }, { auth: 'user' });

  r.add('GET', '/api/me', ({ user }) => me(user), { auth: 'user' });

  r.add('PATCH', '/api/me', ({ user, body }) => {
    if (body.name !== undefined) db.run('UPDATE users SET name = ? WHERE id = ?', V.str(body.name, 'name', { min: 1, max: 40 }), user.id);
    if (body.social_status !== undefined) {
      const s = V.oneOf(body.social_status, 'social_status', SOCIAL);
      if (s !== user.social_status) db.run('UPDATE users SET social_status = ?, social_verified = 0 WHERE id = ?', s, user.id);
    }
    return me(db.one('SELECT * FROM users WHERE id = ?', user.id));
  }, { auth: 'user' });

  /* ---------- client orders ---------- */
  const tripBody = (body) => ({
    from: V.point(body.from, 'from'),
    to: V.point(body.to, 'to'),
    tariff: V.str(body.tariff, 'tariff', { min: 1, max: 20 }),
    pay: V.oneOf(body.pay || 'cash', 'pay', ['cash']),
    comment: V.str(body.comment, 'comment', { max: 120, optional: true }),
    pkg: V.str(body.pkg, 'pkg', { max: 80, optional: true }),
  });

  r.add('GET', '/api/orders', ({ user }) => orders.listForClient(user), { auth: 'user' });
  r.add('GET', '/api/orders/:id', ({ user, params }) => orders.getFor(user, V.int(params.id, 'id')), { auth: 'user' });
  // Order creation accepts an Idempotency-Key header: a retried request returns the order created the first time.
  const current = (user) => (o) => orders.getFor(user, o.id);
  r.add('POST', '/api/orders/ride', ({ user, body, idemKey }) =>
    idem.run(user, idemKey, body, () => orders.createTrip(user, 'ride', tripBody(body)), current(user)), { auth: 'user' });
  r.add('POST', '/api/orders/parcel', ({ user, body, idemKey }) =>
    idem.run(user, idemKey, body, () => orders.createTrip(user, 'parcel', tripBody(body)), current(user)), { auth: 'user' });

  r.add('POST', '/api/orders/delivery', ({ user, body, idemKey }) => idem.run(user, idemKey, body, () => {
    if (!Array.isArray(body.items) || !body.items.length || body.items.length > 40) fail(400, 'invalid', 'items');
    const seen = new Set();
    const lines = body.items.map((l, i) => {
      const id = V.int(l && l.id, `items.${i}.id`, { min: 1 });
      if (seen.has(id)) fail(400, 'invalid', `items.${i}.id`);
      seen.add(id);
      return { id, q: V.int(l.q, `items.${i}.q`, { min: 1, max: 50 }) };
    });
    return orders.createDelivery(user, {
      venueId: V.int(body.venue_id, 'venue_id', { min: 1 }),
      lines,
      to: V.point(body.to, 'to'),
      pay: V.oneOf(body.pay || 'cash', 'pay', ['cash']),
      comment: V.str(body.comment, 'comment', { max: 120, optional: true }),
      roundUp: V.bool(body.round_up),
    });
  }, current(user)), { auth: 'user' });

  r.add('POST', '/api/orders/:id/cancel', ({ user, params }) => orders.cancelByClient(user, V.int(params.id, 'id')), { auth: 'user' });
  r.add('POST', '/api/orders/:id/rate', ({ user, params, body }) =>
    orders.rate(user, V.int(params.id, 'id'), V.int(body.stars, 'stars', { min: 1, max: 5 }), V.int(body.tip || 0, 'tip', { min: 0, max: 5000 })),
  { auth: 'user' });

  /* ---------- workers (Бәрі Pro) ---------- */
  r.add('POST', '/api/worker/apply', ({ user, body }) => {
    const existing = orders.workerOf(user);
    if (existing && existing.status === 'approved') fail(409, 'already_worker');
    const kind = V.oneOf(body.kind, 'kind', ['driver', 'courier']);
    const f = kind === 'driver'
      ? {
          car_model: V.str(body.car_model, 'car_model', { min: 2, max: 40 }),
          car_color: V.str(body.car_color, 'car_color', { min: 2, max: 20 }),
          car_plate: V.str(String(body.car_plate || '').toUpperCase(), 'car_plate', { min: 5, max: 12 }),
          car_class: V.oneOf(body.car_class || 'econom', 'car_class', CAR_CLASSES),
          child_seat: V.bool(body.child_seat) ? 1 : 0,
          vehicle: 'car',
        }
      : { car_model: '', car_color: '', car_plate: '', car_class: 'econom', child_seat: 0, vehicle: V.oneOf(body.vehicle, 'vehicle', VEHICLES) };
    if (body.name) db.run('UPDATE users SET name = ? WHERE id = ?', V.str(body.name, 'name', { min: 1, max: 40 }), user.id);
    db.run(
      `INSERT INTO workers (user_id, kind, status, car_model, car_color, car_plate, car_class, child_seat, vehicle, created_at)
       VALUES (?, ?, 'pending', ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(user_id) DO UPDATE SET kind = excluded.kind, status = 'pending', car_model = excluded.car_model, car_color = excluded.car_color,
         car_plate = excluded.car_plate, car_class = excluded.car_class, child_seat = excluded.child_seat, vehicle = excluded.vehicle, online = 0`,
      user.id, kind, f.car_model, f.car_color, f.car_plate, f.car_class, f.child_seat, f.vehicle, Date.now()
    );
    return me(db.one('SELECT * FROM users WHERE id = ?', user.id));
  }, { auth: 'user' });

  r.add('GET', '/api/worker', ({ user }) => {
    const w = orders.workerOf(user);
    if (!w) return { worker: null, current: null, stats: null };
    const cur = orders.currentFor(user.id);
    return { worker: workerView(w), current: cur ? orders.view(cur, user.id) : null, stats: orders.workerStats(user) };
  }, { auth: 'user' });

  r.add('POST', '/api/worker/online', ({ user, body }) => workerView(orders.setOnline(user, V.bool(body.online))), { auth: 'user' });
  r.add('POST', '/api/worker/location', ({ user, body }) => {
    const p = V.point({ lat: body.lat, lng: body.lng }, 'location');
    return orders.setLocation(user, p.lat, p.lng);
  }, { auth: 'user' });
  r.add('GET', '/api/worker/offers', ({ user }) => orders.offers(user), { auth: 'user' });
  r.add('GET', '/api/worker/history', ({ user }) => orders.listForWorker(user), { auth: 'user' });
  r.add('POST', '/api/worker/orders/:id/accept', ({ user, params }) => orders.accept(user, V.int(params.id, 'id')), { auth: 'user' });
  r.add('POST', '/api/worker/orders/:id/release', ({ user, params }) => orders.release(user, V.int(params.id, 'id')), { auth: 'user' });
  r.add('POST', '/api/worker/orders/:id/status', ({ user, params, body }) =>
    orders.advanceByWorker(user, V.int(params.id, 'id'), V.oneOf(body.status, 'status', ['arrived', 'riding', 'picked', 'delivering', 'done'])),
  { auth: 'user' });

  /* ---------- partners (Бәрі Бизнес) ---------- */
  const venueFields = (body, partial) => {
    const f = {};
    if (!partial || body.type !== undefined) f.type = V.oneOf(body.type, 'type', VENUE_TYPES);
    if (!partial || body.name !== undefined) f.name = V.str(body.name, 'name', { min: 2, max: 50 });
    if (body.name_ru !== undefined) f.name_ru = V.str(body.name_ru, 'name_ru', { max: 50, optional: true }) || null;
    if (body.note !== undefined) f.note = V.str(body.note, 'note', { max: 160, optional: true }) || null;
    if (!partial || body.address !== undefined) f.address = V.str(body.address, 'address', { min: 3, max: 120 });
    if (!partial || body.lat !== undefined) {
      const p = V.point({ lat: body.lat, lng: body.lng }, 'location');
      f.lat = p.lat;
      f.lng = p.lng;
    }
    if (body.emoji !== undefined) f.emoji = V.emoji(body.emoji, 'emoji');
    if (body.cover_url !== undefined) f.cover_url = photo(body.cover_url, 'cover_url');
    if (body.hue !== undefined) f.hue = V.int(body.hue, 'hue', { min: 0, max: 359 });
    if (body.cats !== undefined) {
      if (!Array.isArray(body.cats)) fail(400, 'invalid', 'cats');
      f.cats = body.cats.filter((c) => CATS.includes(c)).slice(0, 3).join(',');
    }
    if (body.eta_min !== undefined) f.eta_min = V.int(body.eta_min, 'eta_min', { min: 5, max: 180 });
    if (body.eta_max !== undefined) f.eta_max = V.int(body.eta_max, 'eta_max', { min: 5, max: 240 });
    if (body.delivery_fee !== undefined) f.delivery_fee = V.int(body.delivery_fee, 'delivery_fee', { min: 0, max: 5000 });
    if (body.min_order !== undefined) f.min_order = V.int(body.min_order, 'min_order', { min: 0, max: 100000 });
    if (body.is_open !== undefined) f.is_open = V.bool(body.is_open) ? 1 : 0;
    return f;
  };
  const updateRow = (table, id, f) => {
    const keys = Object.keys(f);
    if (keys.length) db.run(`UPDATE ${table} SET ${keys.map((k) => `${k} = ?`).join(', ')} WHERE id = ?`, ...keys.map((k) => f[k]), id);
  };

  // Admins see every venue here, so they can enter menus for restaurants they sign up.
  r.add('GET', '/api/partner/venues', ({ user, query }) =>
    (user.is_admin && query.all === '1'
      ? db.all('SELECT * FROM venues ORDER BY (owner_id = ?) DESC, id DESC', user.id)
      : db.all('SELECT * FROM venues WHERE owner_id = ? ORDER BY id', user.id)
    ).map(venueCard), { auth: 'user' });

  r.add('POST', '/api/partner/venues', ({ user, body }) => {
    const n = db.one('SELECT COUNT(*) AS n FROM venues WHERE owner_id = ?', user.id).n;
    if (n >= 5 && !user.is_admin) fail(409, 'too_many_venues');
    const f = venueFields(body, false);
    const res = db.run(
      `INSERT INTO venues (owner_id, type, name, name_ru, note, address, lat, lng, emoji, hue, cats, local, grid, status, created_at, commission)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, 0)`,
      user.id, f.type, f.name, f.name_ru || null, f.note || null, f.address, f.lat, f.lng,
      f.emoji || (f.type === 'food' ? '🍽️' : f.type === 'shop' ? '🛒' : '💊'), f.hue ?? 30, f.cats || '', f.type === 'food' ? 0 : 1,
      user.is_admin ? 'approved' : 'pending', Date.now()
    );
    const id = Number(res.lastInsertRowid);
    const rest = { ...f };
    ['type', 'name', 'name_ru', 'note', 'address', 'lat', 'lng', 'emoji', 'hue', 'cats'].forEach((k) => delete rest[k]);
    updateRow('venues', id, rest);
    return venueCard(db.one('SELECT * FROM venues WHERE id = ?', id));
  }, { auth: 'user' });

  r.add('PATCH', '/api/partner/venues/:id', ({ user, params, body }) => {
    const v = orders.ownVenue(user, V.int(params.id, 'id'));
    const f = venueFields(body, true);
    delete f.type;
    updateRow('venues', v.id, f);
    return venueCard(db.one('SELECT * FROM venues WHERE id = ?', v.id));
  }, { auth: 'user' });

  r.add('GET', '/api/partner/venues/:id/menu', ({ user, params }) => {
    const v = orders.ownVenue(user, V.int(params.id, 'id'));
    return { ...venueCard(v), ...menuOf(v.id, true) };
  }, { auth: 'user' });

  r.add('POST', '/api/partner/venues/:id/sections', ({ user, params, body }) => {
    const v = orders.ownVenue(user, V.int(params.id, 'id'));
    const sort = db.one('SELECT COALESCE(MAX(sort), 0) + 1 AS s FROM sections WHERE venue_id = ?', v.id).s;
    const res = db.run('INSERT INTO sections (venue_id, name, name_ru, sort) VALUES (?, ?, ?, ?)', v.id,
      V.str(body.name, 'name', { min: 1, max: 40 }), V.str(body.name_ru, 'name_ru', { max: 40, optional: true }) || null, sort);
    return db.one('SELECT * FROM sections WHERE id = ?', Number(res.lastInsertRowid));
  }, { auth: 'user' });

  const ownSection = (user, id) => {
    const s = db.one('SELECT * FROM sections WHERE id = ?', id);
    if (!s) fail(404, 'not_found');
    orders.ownVenue(user, s.venue_id);
    return s;
  };
  r.add('PATCH', '/api/partner/sections/:id', ({ user, params, body }) => {
    const s = ownSection(user, V.int(params.id, 'id'));
    const f = {};
    if (body.name !== undefined) f.name = V.str(body.name, 'name', { min: 1, max: 40 });
    if (body.name_ru !== undefined) f.name_ru = V.str(body.name_ru, 'name_ru', { max: 40, optional: true }) || null;
    updateRow('sections', s.id, f);
    return db.one('SELECT * FROM sections WHERE id = ?', s.id);
  }, { auth: 'user' });
  r.add('DELETE', '/api/partner/sections/:id', ({ user, params }) => {
    const s = ownSection(user, V.int(params.id, 'id'));
    db.run('DELETE FROM sections WHERE id = ?', s.id);
    return { ok: true };
  }, { auth: 'user' });

  // A photo must be one uploaded here (or bundled with the app); null removes it.
  const photo = (url, field) => {
    if (url === null || url === '') return null;
    if (!uploads || !uploads.isOwnUrl(url)) fail(400, 'invalid', field);
    return url;
  };

  r.add('POST', '/api/partner/upload', ({ user, body }) => {
    const partner = user.is_admin || db.one('SELECT id FROM venues WHERE owner_id = ? LIMIT 1', user.id);
    if (!partner) fail(403, 'forbidden');
    return { url: uploads.saveImage(body.image) };
  }, { auth: 'user', maxBody: 3 * 1024 * 1024 });

  const itemFields = (body, partial) => {
    const f = {};
    if (!partial || body.name !== undefined) f.name = V.str(body.name, 'name', { min: 1, max: 60 });
    if (body.name_ru !== undefined) f.name_ru = V.str(body.name_ru, 'name_ru', { max: 60, optional: true }) || null;
    if (body.descr !== undefined) f.descr = V.str(body.descr, 'descr', { max: 140, optional: true });
    if (body.descr_ru !== undefined) f.descr_ru = V.str(body.descr_ru, 'descr_ru', { max: 140, optional: true }) || null;
    if (!partial || body.price !== undefined) f.price = V.int(body.price, 'price', { min: 1, max: 1000000 });
    if (body.old_price !== undefined) f.old_price = V.int(body.old_price, 'old_price', { min: 1, max: 1000000, optional: true });
    if (body.stock !== undefined) f.stock = V.int(body.stock, 'stock', { min: 0, max: 10000, optional: true });
    if (body.emoji !== undefined) f.emoji = V.emoji(body.emoji, 'emoji');
    if (body.photo_url !== undefined) f.photo_url = photo(body.photo_url, 'photo_url');
    if (body.available !== undefined) f.available = V.bool(body.available) ? 1 : 0;
    if (body.section_id !== undefined) f.section_id = V.int(body.section_id, 'section_id', { min: 1, optional: true });
    return f;
  };
  const ownItem = (user, id) => {
    const it = db.one('SELECT * FROM items WHERE id = ?', id);
    if (!it) fail(404, 'not_found');
    orders.ownVenue(user, it.venue_id);
    return it;
  };
  const checkSection = (venueId, sectionId) => {
    if (sectionId && !db.one('SELECT id FROM sections WHERE id = ? AND venue_id = ?', sectionId, venueId)) fail(400, 'invalid', 'section_id');
  };

  r.add('POST', '/api/partner/venues/:id/items', ({ user, params, body }) => {
    const v = orders.ownVenue(user, V.int(params.id, 'id'));
    const f = itemFields(body, false);
    checkSection(v.id, f.section_id);
    const sort = db.one('SELECT COALESCE(MAX(sort), 0) + 1 AS s FROM items WHERE venue_id = ?', v.id).s;
    const res = db.run(
      `INSERT INTO items (venue_id, section_id, name, name_ru, descr, descr_ru, price, old_price, stock, emoji, available, sort, photo_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      v.id, f.section_id || null, f.name, f.name_ru || null, f.descr || '', f.descr_ru || null, f.price,
      f.old_price ?? null, f.stock ?? null, f.emoji || '🍽️', f.available ?? 1, sort, f.photo_url || null
    );
    return db.one('SELECT * FROM items WHERE id = ?', Number(res.lastInsertRowid));
  }, { auth: 'user' });

  r.add('PATCH', '/api/partner/items/:id', ({ user, params, body }) => {
    const it = ownItem(user, V.int(params.id, 'id'));
    const f = itemFields(body, true);
    if (f.section_id) checkSection(it.venue_id, f.section_id);
    updateRow('items', it.id, f);
    return db.one('SELECT * FROM items WHERE id = ?', it.id);
  }, { auth: 'user' });

  r.add('DELETE', '/api/partner/items/:id', ({ user, params }) => {
    const it = ownItem(user, V.int(params.id, 'id'));
    db.run('UPDATE items SET available = 0 WHERE id = ?', it.id);
    db.run('DELETE FROM items WHERE id = ?', it.id);
    return { ok: true };
  }, { auth: 'user' });

  r.add('GET', '/api/partner/venues/:id/orders', ({ user, params }) => orders.listForVenue(user, V.int(params.id, 'id')), { auth: 'user' });

  r.add('POST', '/api/partner/orders/:id/status', ({ user, params, body }) =>
    orders.advanceByVenue(user, V.int(params.id, 'id'), V.oneOf(body.status, 'status', ['cooking', 'ready', 'cancelled']),
      V.str(body.reason, 'reason', { max: 80, optional: true })),
  { auth: 'user' });

  r.add('GET', '/api/partner/venues/:id/stats', ({ user, params }) => {
    const v = orders.ownVenue(user, V.int(params.id, 'id'));
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const rows = db.all("SELECT subtotal FROM orders WHERE venue_id = ? AND status = 'done' AND updated_at >= ?", v.id, start.getTime());
    const sales = rows.reduce((a, o) => a + o.subtotal, 0);
    return { orders: rows.length, sales, payout: sales - Math.round(sales * v.commission), commission: v.commission };
  }, { auth: 'user' });

  /* ---------- admin ---------- */
  r.add('GET', '/api/admin/overview', () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const t = start.getTime();
    const one = (sql, ...p) => db.one(sql, ...p).n;
    return {
      stats: {
        users: one('SELECT COUNT(*) AS n FROM users'),
        drivers: one("SELECT COUNT(*) AS n FROM workers WHERE kind = 'driver' AND status = 'approved'"),
        couriers: one("SELECT COUNT(*) AS n FROM workers WHERE kind = 'courier' AND status = 'approved'"),
        online: one("SELECT COUNT(*) AS n FROM workers WHERE online = 1"),
        venues: one("SELECT COUNT(*) AS n FROM venues WHERE status = 'approved'"),
        ordersToday: one('SELECT COUNT(*) AS n FROM orders WHERE created_at >= ?', t),
        doneToday: one("SELECT COUNT(*) AS n FROM orders WHERE status = 'done' AND updated_at >= ?", t),
        revenueToday: one("SELECT COALESCE(SUM(total), 0) AS n FROM orders WHERE status = 'done' AND updated_at >= ?", t),
        donated: one("SELECT COALESCE(SUM(donation), 0) AS n FROM orders WHERE status != 'cancelled'"),
        active: one("SELECT COUNT(*) AS n FROM orders WHERE status NOT IN ('done', 'cancelled')"),
      },
      workers: db.all(
        `SELECT u.id, u.name, u.phone, w.kind, w.status, w.car_model, w.car_color, w.car_plate, w.car_class, w.child_seat, w.vehicle, w.online, w.created_at
         FROM workers w JOIN users u ON u.id = w.user_id ORDER BY (w.status = 'pending') DESC, w.created_at DESC LIMIT 200`
      ).map((w) => ({ ...w, phone: '+' + w.phone })),
      venues: db.all('SELECT * FROM venues ORDER BY (status = \'pending\') DESC, id DESC LIMIT 200').map((v) => {
        const owner = v.owner_id ? db.one('SELECT name, phone FROM users WHERE id = ?', v.owner_id) : null;
        return { ...venueCard(v), demo: !!v.demo, owner: owner ? { name: owner.name, phone: '+' + owner.phone } : null };
      }),
      inviteOnly: !!config.inviteOnly,
      smsMode: config.smsMode,
      people: db.all('SELECT id, name, phone, is_admin, created_at FROM users ORDER BY id DESC LIMIT 50').map((u) => ({ ...u, phone: '+' + u.phone })),
      social: db.all("SELECT id, name, phone, social_status FROM users WHERE social_status != 'none' AND social_verified = 0 ORDER BY id DESC LIMIT 100")
        .map((u) => ({ ...u, phone: '+' + u.phone })),
      orders: db.all('SELECT * FROM orders ORDER BY created_at DESC LIMIT 40').map((o) => orders.view(o, -1)),
    };
  }, { auth: 'admin' });

  r.add('POST', '/api/admin/workers/:id', ({ params, body }) => {
    const id = V.int(params.id, 'id');
    const status = V.oneOf(body.status, 'status', ['approved', 'blocked', 'pending']);
    const res = db.run('UPDATE workers SET status = ?, online = CASE WHEN ? = \'approved\' THEN online ELSE 0 END WHERE user_id = ?', status, status, id);
    if (!res.changes) fail(404, 'not_found');
    return { ok: true };
  }, { auth: 'admin' });

  r.add('POST', '/api/admin/venues/:id', ({ params, body }) => {
    const id = V.int(params.id, 'id');
    const f = {};
    // Hand a venue over to its real owner: they sign in with this phone and see it in Бәрі Бизнес.
    if (body.owner_phone !== undefined) {
      const phone = V.phone(body.owner_phone);
      let owner = db.one('SELECT id FROM users WHERE phone = ?', phone);
      if (!owner) {
        db.run('INSERT INTO users (phone, name, created_at) VALUES (?, ?, ?)', phone, '', Date.now());
        owner = db.one('SELECT id FROM users WHERE phone = ?', phone);
      }
      f.owner_id = owner.id;
      f.demo = 0;
    }
    if (body.status !== undefined) f.status = V.oneOf(body.status, 'status', ['approved', 'blocked', 'pending']);
    if (body.commission !== undefined) {
      const c = Number(body.commission);
      if (!(c >= 0 && c <= 0.3)) fail(400, 'invalid', 'commission');
      f.commission = c;
    }
    if (!db.one('SELECT id FROM venues WHERE id = ?', id)) fail(404, 'not_found');
    updateRow('venues', id, f);
    return { ok: true };
  }, { auth: 'admin' });

  // Invite a tester, driver or restaurant owner: their phone can then sign in (also in INVITE_ONLY mode).
  r.add('POST', '/api/admin/invite', ({ body }) => {
    const phone = V.phone(body.phone);
    const name = V.str(body.name, 'name', { max: 40, optional: true });
    const existing = db.one('SELECT id FROM users WHERE phone = ?', phone);
    if (!existing) db.run('INSERT INTO users (phone, name, created_at) VALUES (?, ?, ?)', phone, name, Date.now());
    else if (name) db.run("UPDATE users SET name = ? WHERE id = ? AND name = ''", name, existing.id);
    return { ok: true, existed: !!existing };
  }, { auth: 'admin' });

  r.add('POST', '/api/admin/users/:id/social', ({ params, body }) => {
    const id = V.int(params.id, 'id');
    const ok = V.bool(body.verified);
    const res = ok
      ? db.run('UPDATE users SET social_verified = 1 WHERE id = ?', id)
      : db.run("UPDATE users SET social_verified = 0, social_status = 'none' WHERE id = ?", id);
    if (!res.changes) fail(404, 'not_found');
    return { ok: true };
  }, { auth: 'admin' });
};
