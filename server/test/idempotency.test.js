'use strict';
// Retrying an order after a network timeout must not create a second order or take stock twice.
const test = require('node:test');
const assert = require('node:assert/strict');
const { start } = require('../index');

let app, base;
test.before(async () => {
  app = await start({ port: 0, dbPath: ':memory:', smsMode: 'demo', seedDemo: true, adminPhones: [], kitchenDelays: [60000, 120000] });
  base = `http://127.0.0.1:${app.port}`;
});
test.after(() => app.close());

async function call(method, path, token, body, key) {
  const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token };
  if (key !== undefined) headers['Idempotency-Key'] = key;
  const res = await fetch(base + path, { method, headers, body: body ? JSON.stringify(body) : undefined });
  return { status: res.status, data: await res.json() };
}
async function login(phone) {
  const c = await (await fetch(base + '/api/auth/code', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone }) })).json();
  const v = await (await fetch(base + '/api/auth/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone, code: c.demoCode }) })).json();
  return v.token;
}
const TO = { n: 'Mega', lat: 43.2016, lng: 76.8926 };
const FROM = { n: 'Абай 44', lat: 43.2405, lng: 76.925 };

test('delivery: the same key twice creates one order and takes stock once', async () => {
  const token = await login('+77071110001');
  const venue = (await (await fetch(base + '/api/venues?type=food')).json()).find((v) => v.box);
  const menu = await (await fetch(base + '/api/venues/' + venue.id)).json();
  const box = menu.items.find((i) => i.old_price);
  const main = menu.items.find((i) => !i.old_price && i.price >= venue.min_order);
  const body = { venue_id: venue.id, items: [{ id: main.id, q: 1 }, { id: box.id, q: 1 }], to: TO };

  const first = await call('POST', '/api/orders/delivery', token, body, 'order-key-0001');
  const again = await call('POST', '/api/orders/delivery', token, body, 'order-key-0001');
  assert.equal(first.status, 200);
  assert.equal(again.status, 200);
  assert.equal(again.data.id, first.data.id, 'the retry returns the first order');

  const mine = (await call('GET', '/api/orders', token)).data;
  assert.equal(mine.length, 1, 'only one order exists');
  const after = await (await fetch(base + '/api/venues/' + venue.id)).json();
  assert.equal(after.items.find((i) => i.id === box.id).stock, box.stock - 1, 'stock taken once');

  // Same key with a different order is refused instead of silently returning the old one.
  const changed = await call('POST', '/api/orders/delivery', token, { ...body, items: [{ id: main.id, q: 2 }] }, 'order-key-0001');
  assert.equal(changed.status, 422);
  assert.equal(changed.data.error, 'idempotency_mismatch');
});

test('ride: a retry returns the same ride instead of an error', async () => {
  const token = await login('+77071110002');
  const body = { from: FROM, to: TO, tariff: 'econom' };
  const first = await call('POST', '/api/orders/ride', token, body, 'ride-key-0001');
  const again = await call('POST', '/api/orders/ride', token, body, 'ride-key-0001');
  assert.equal(first.status, 200);
  assert.equal(again.status, 200);
  assert.equal(again.data.id, first.data.id);
  // Without a key the old rule still applies: one active ride at a time.
  assert.equal((await call('POST', '/api/orders/ride', token, body)).status, 409);
  // A late retry shows the ride as it is now, not as it was when created.
  await call('POST', `/api/orders/${first.data.id}/cancel`, token);
  const late = await call('POST', '/api/orders/ride', token, body, 'ride-key-0001');
  assert.equal(late.data.id, first.data.id);
  assert.equal(late.data.status, 'cancelled');
  assert.equal((await call('GET', '/api/orders', token)).data.length, 1);
});

test('keys are per user and must look like keys', async () => {
  const a = await login('+77071110003');
  const b = await login('+77071110004');
  const body = { from: FROM, to: TO, tariff: 'econom' };
  const ra = await call('POST', '/api/orders/ride', a, body, 'shared-key-0001');
  const rb = await call('POST', '/api/orders/ride', b, body, 'shared-key-0001');
  assert.notEqual(ra.data.id, rb.data.id, 'another user with the same key gets their own ride');
  assert.equal((await call('POST', '/api/orders/parcel', a, { ...body, tariff: 'walk' }, 'bad key!')).status, 400);
});
