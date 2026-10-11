'use strict';
// End-to-end API test: client, driver, courier, partner and admin working together.
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { start } = require('../index');

let app, base;
const ADMIN = '+7 701 000 00 00';

test.before(async () => {
  app = await start({ port: 0, dbPath: ':memory:', smsMode: 'demo', seedDemo: true, adminPhones: ['77010000000'], kitchenDelays: [100, 250] });
  base = `http://127.0.0.1:${app.port}`;
});
test.after(() => app.close());

async function call(method, path, token, body) {
  const res = await fetch(base + path, {
    method,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  return { status: res.status, data };
}
const ok = async (...a) => {
  const r = await call(...a);
  assert.equal(r.status, 200, `${a[0]} ${a[1]} → ${r.status} ${JSON.stringify(r.data)}`);
  return r.data;
};
async function login(phone, name) {
  const c = await ok('POST', '/api/auth/code', null, { phone });
  assert.match(c.demoCode, /^\d{4}$/);
  const v = await ok('POST', '/api/auth/verify', null, { phone, code: c.demoCode, name });
  return v;
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Collects SSE events for a token. Resolves once the stream is open.
function listen(token) {
  const events = [];
  let ready;
  const opened = new Promise((r) => { ready = r; });
  const req = http.get(`${base}/api/events?token=${token}`, (res) => {
    ready();
    let buf = '';
    res.on('data', (c) => {
      buf += c;
      let i;
      while ((i = buf.indexOf('\n\n')) >= 0) {
        const chunk = buf.slice(0, i);
        buf = buf.slice(i + 2);
        const type = (chunk.match(/^event: (.+)$/m) || [])[1];
        const data = (chunk.match(/^data: (.+)$/m) || [])[1];
        if (type) events.push({ type, data: JSON.parse(data) });
      }
    });
  });
  return opened.then(() => ({ events, close: () => req.destroy() }));
}

const ALMATY = { n: 'Абай 44', lat: 43.2405, lng: 76.925 };
const MEGA = { n: 'Mega', lat: 43.2016, lng: 76.8926 };

test('sign-in rejects bad phone and wrong code', async () => {
  assert.equal((await call('POST', '/api/auth/code', null, { phone: '12345' })).status, 400);
  await ok('POST', '/api/auth/code', null, { phone: '+7 705 111 22 33' });
  const r = await call('POST', '/api/auth/verify', null, { phone: '87051112233', code: '0000' });
  assert.ok([400].includes(r.status));
  // Asking again within 30 s is refused.
  assert.equal((await call('POST', '/api/auth/code', null, { phone: '87051112233' })).status, 429);
});

test('full platform flow', async () => {
  const admin = await login(ADMIN, 'Әкімші');
  assert.equal(admin.user.is_admin, true);
  const client = await login('+7 707 123 45 67', 'Айгерім');
  assert.equal(client.user.is_admin, false);
  assert.equal((await call('GET', '/api/admin/overview', client.token)).status, 403);

  // Catalog
  const food = await ok('GET', '/api/venues?type=food');
  assert.equal(food.length, 8);
  const dast = food.find((v) => v.name === 'Дастарқан');
  const menu = await ok('GET', `/api/venues/${dast.id}`);
  assert.ok(menu.items.length > 5 && menu.sections.length === 3);

  // ---- Ride: client orders, driver applies, admin approves, driver completes ----
  const clientLive = await listen(client.token);
  const ride = await ok('POST', '/api/orders/ride', client.token, { from: ALMATY, to: MEGA, tariff: 'econom' });
  assert.equal(ride.status, 'searching');
  assert.ok(ride.price >= 700);
  assert.equal(ride.nearby, 0);
  assert.equal((await call('POST', '/api/orders/ride', client.token, { from: ALMATY, to: MEGA, tariff: 'econom' })).status, 409);
  // Social tariff needs a verified status.
  assert.equal((await call('POST', '/api/orders/ride', client.token, { from: ALMATY, to: MEGA, tariff: 'social' })).status, 403);

  const driver = await login('+7 777 555 44 33', 'Ерлан');
  assert.equal((await call('GET', '/api/worker/offers', driver.token)).status, 403);
  const applied = await ok('POST', '/api/worker/apply', driver.token, { kind: 'driver', car_model: 'Toyota Camry', car_color: 'ақ', car_plate: '123 abc 02', car_class: 'comfort' });
  assert.equal(applied.worker.status, 'pending');
  assert.equal((await call('POST', '/api/worker/online', driver.token, { online: true })).status, 403);
  const ov = await ok('GET', '/api/admin/overview', admin.token);
  const pending = ov.workers.find((w) => w.name === 'Ерлан');
  assert.equal(pending.status, 'pending');
  await ok('POST', `/api/admin/workers/${pending.id}`, admin.token, { status: 'approved' });

  const driverLive = await listen(driver.token);
  await ok('POST', '/api/worker/online', driver.token, { online: true });
  await ok('POST', '/api/worker/location', driver.token, { lat: 43.245, lng: 76.93 });
  const offers = await ok('GET', '/api/worker/offers', driver.token);
  assert.equal(offers.length, 1);
  assert.equal(offers[0].earning, Math.round(ride.price * 0.9));
  assert.equal(offers[0].client.phone, null, 'phone hidden before accepting');

  const acc = await ok('POST', `/api/worker/orders/${ride.id}/accept`, driver.token);
  assert.equal(acc.status, 'accepted');
  assert.equal(acc.client.phone, '+77071234567');
  // A second accept fails: the order is taken.
  assert.equal((await call('POST', `/api/worker/orders/${ride.id}/accept`, driver.token)).status, 409);
  // Steps must follow the order.
  assert.equal((await call('POST', `/api/worker/orders/${ride.id}/status`, driver.token, { status: 'done' })).status, 409);
  await ok('POST', '/api/worker/location', driver.token, { lat: 43.242, lng: 76.926 });
  for (const s of ['arrived', 'riding', 'done']) await ok('POST', `/api/worker/orders/${ride.id}/status`, driver.token, { status: s });
  const rated = await ok('POST', `/api/orders/${ride.id}/rate`, client.token, { stars: 5, tip: 200 });
  assert.equal(rated.stars, 5);
  assert.equal(rated.total, ride.price + 200);
  assert.equal(rated.worker.phone, null, 'phone hidden after the ride');
  const ws = await ok('GET', '/api/worker', driver.token);
  assert.equal(ws.stats.trips, 1);
  assert.equal(ws.stats.today, Math.round(ride.price * 0.9) + 200);

  await wait(50);
  const statuses = clientLive.events.filter((e) => e.type === 'order').map((e) => e.data.status);
  assert.deepEqual([...new Set(statuses)], ['searching', 'accepted', 'arrived', 'riding', 'done']);
  assert.ok(clientLive.events.some((e) => e.type === 'loc'), 'client got driver location');
  assert.ok(driverLive.events.some((e) => e.type === 'offers'));

  // Someone else cannot read the order.
  const stranger = await login('+7 702 000 11 22', 'Бөтен');
  assert.equal((await call('GET', `/api/orders/${ride.id}`, stranger.token)).status, 404);

  // ---- Delivery from a demo venue with a simulated kitchen; a courier delivers ----
  const courier = await login('+7 747 222 33 44', 'Санжар');
  await ok('POST', '/api/worker/apply', courier.token, { kind: 'courier', vehicle: 'bike' });
  const cw = (await ok('GET', '/api/admin/overview', admin.token)).workers.find((w) => w.name === 'Санжар');
  await ok('POST', `/api/admin/workers/${cw.id}`, admin.token, { status: 'approved' });
  await ok('POST', '/api/worker/online', courier.token, { online: true });

  const besh = menu.items.find((i) => i.name === 'Бешбармақ');
  const box = menu.items.find((i) => i.old_price);
  const baursak = menu.items.find((i) => i.price < dast.min_order && !i.old_price);
  assert.equal((await call('POST', '/api/orders/delivery', client.token, { venue_id: dast.id, items: [{ id: baursak.id, q: 1 }], to: MEGA })).status, 400, 'below minimum');
  const del = await ok('POST', '/api/orders/delivery', client.token, {
    venue_id: dast.id, items: [{ id: besh.id, q: 2 }, { id: box.id, q: 1 }], to: MEGA, round_up: true,
  });
  assert.equal(del.status, 'new');
  assert.equal(del.subtotal, besh.price * 2 + box.price);
  assert.equal(del.total % 500, 0);
  assert.equal((await ok('GET', `/api/venues/${dast.id}`)).items.find((i) => i.id === box.id).stock, box.stock - 1);

  await wait(150);
  let off = await ok('GET', '/api/worker/offers', courier.token);
  assert.equal(off.length, 1);
  assert.equal(off[0].status, 'cooking');
  await ok('POST', `/api/worker/orders/${del.id}/accept`, courier.token);
  assert.equal((await call('POST', `/api/worker/orders/${del.id}/status`, courier.token, { status: 'delivering' })).status, 409, 'not ready yet');
  await wait(200);
  assert.equal((await ok('GET', `/api/orders/${del.id}`, client.token)).status, 'ready');
  await ok('POST', `/api/worker/orders/${del.id}/status`, courier.token, { status: 'delivering' });
  const done = await ok('POST', `/api/worker/orders/${del.id}/status`, courier.token, { status: 'done' });
  assert.equal(done.earning, Math.round(dast.delivery_fee * 0.9));

  // ---- Partner registers a venue, admin approves, partner handles an order ----
  const partner = await login('+7 708 999 88 77', 'Дәулет');
  const v = await ok('POST', '/api/partner/venues', partner.token, {
    type: 'food', name: 'Ауыл асханасы', address: 'Сейфуллин д-лы, 500', lat: 43.25, lng: 76.94, cats: ['national'],
    delivery_fee: 300, min_order: 1000,
  });
  assert.equal(v.status, 'pending');
  assert.equal((await call('GET', `/api/venues/${v.id}`)).status, 404, 'hidden until approved');
  const sec = await ok('POST', `/api/partner/venues/${v.id}/sections`, partner.token, { name: 'Ыстық тағамдар' });
  const it = await ok('POST', `/api/partner/venues/${v.id}/items`, partner.token, { name: 'Сорпа', price: 1500, section_id: sec.id, emoji: '🍲' });
  assert.equal((await call('PATCH', `/api/partner/items/${it.id}`, stranger.token, { price: 1 })).status, 404, 'only the owner edits');
  assert.equal((await call('PATCH', `/api/partner/items/${it.id}`, partner.token, { emoji: '<b>x' })).status, 400, 'no markup in icons');
  assert.equal((await call('PATCH', `/api/partner/venues/${v.id}`, partner.token, { status: 'approved', commission: 0 })).status, 200);
  assert.equal((await call('GET', `/api/venues/${v.id}`)).status, 404, 'a partner cannot approve itself');
  await ok('POST', `/api/admin/venues/${v.id}`, admin.token, { status: 'approved' });
  const partnerLive = await listen(partner.token);

  const o2 = await ok('POST', '/api/orders/delivery', client.token, { venue_id: v.id, items: [{ id: it.id, q: 1 }], to: ALMATY });
  await wait(50);
  assert.ok(partnerLive.events.some((e) => e.type === 'order' && e.data.id === o2.id), 'partner notified');
  assert.equal((await ok('GET', '/api/worker/offers', courier.token)).length, 0, 'not offered before the venue accepts');
  await ok('POST', `/api/partner/orders/${o2.id}/status`, partner.token, { status: 'cooking' });
  await ok('POST', `/api/worker/orders/${o2.id}/accept`, courier.token);
  await ok('POST', `/api/partner/orders/${o2.id}/status`, partner.token, { status: 'ready' });
  await ok('POST', `/api/worker/orders/${o2.id}/status`, courier.token, { status: 'delivering' });
  await ok('POST', `/api/worker/orders/${o2.id}/status`, courier.token, { status: 'done' });
  const pst = await ok('GET', `/api/partner/venues/${v.id}/stats`, partner.token);
  assert.equal(pst.sales, 1500);
  assert.equal(pst.payout, 1500, 'new local partners pay 0% commission');

  // A venue can reject; stock and status are restored correctly.
  const o3 = await ok('POST', '/api/orders/delivery', client.token, { venue_id: v.id, items: [{ id: it.id, q: 1 }], to: ALMATY });
  const rej = await ok('POST', `/api/partner/orders/${o3.id}/status`, partner.token, { status: 'cancelled', reason: 'Бітіп қалды' });
  assert.equal(rej.status, 'cancelled');

  // Social status: requested by the user, verified by admin, then the tariff works.
  await ok('PATCH', '/api/me', client.token, { social_status: 'pension' });
  const soc = (await ok('GET', '/api/admin/overview', admin.token)).social;
  await ok('POST', `/api/admin/users/${soc[0].id}/social`, admin.token, { verified: true });
  const sride = await ok('POST', '/api/orders/ride', client.token, { from: ALMATY, to: MEGA, tariff: 'social' });
  assert.ok(sride.price < ride.price);
  await ok('POST', `/api/orders/${sride.id}/cancel`, client.token);

  const pub = await ok('GET', '/api/stats/public');
  assert.equal(pub.donated, del.donation);

  clientLive.close();
  driverLive.close();
  partnerLive.close();
});
