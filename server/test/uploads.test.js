'use strict';
// Partners add real photos of their place and dishes; the files are checked and served from /uploads.
const test = require('node:test');
const assert = require('node:assert/strict');
const { start } = require('../index');

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
let app, base;
test.before(async () => {
  app = await start({ port: 0, dbPath: ':memory:', smsMode: 'demo', seedDemo: false, adminPhones: [] });
  base = `http://127.0.0.1:${app.port}`;
});
test.after(() => app.close());

async function call(method, path, token, body) {
  const res = await fetch(base + path, {
    method,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, data: await res.json().catch(() => null) };
}
async function login(phone) {
  const c = (await call('POST', '/api/auth/code', null, { phone })).data;
  return (await call('POST', '/api/auth/verify', null, { phone, code: c.demoCode })).data.token;
}

test('partner uploads a dish photo and a cover; clients see them', async () => {
  const owner = await login('+77081230001');
  const stranger = await login('+77081230002');
  assert.equal((await call('POST', '/api/partner/upload', stranger, { image: PNG })).status, 403, 'only partners upload');

  const v = (await call('POST', '/api/partner/venues', owner, { type: 'food', name: 'Фото асхана', address: 'Абай д-лы, 1', lat: 43.24, lng: 76.95 })).data;
  const up = await call('POST', '/api/partner/upload', owner, { image: PNG });
  assert.equal(up.status, 200);
  assert.match(up.data.url, /^\/uploads\/[a-f0-9]{32}\.png$/);

  const file = await fetch(base + up.data.url);
  assert.equal(file.status, 200);
  assert.equal(file.headers.get('content-type'), 'image/png');
  assert.equal(Buffer.from(await file.arrayBuffer()).subarray(1, 4).toString(), 'PNG');

  const item = (await call('POST', `/api/partner/venues/${v.id}/items`, owner, { name: 'Сорпа', price: 1500, photo_url: up.data.url })).data;
  assert.equal(item.photo_url, up.data.url);
  const cover = await call('PATCH', `/api/partner/venues/${v.id}`, owner, { cover_url: up.data.url });
  assert.equal(cover.data.cover_url, up.data.url);
  // Clearing the photo is allowed.
  assert.equal((await call('PATCH', `/api/partner/items/${item.id}`, owner, { photo_url: null })).data.photo_url, null);
});

test('only real images from this server are accepted', async () => {
  const owner = await login('+77081230003');
  const v = (await call('POST', '/api/partner/venues', owner, { type: 'food', name: 'Тексеру', address: 'Абай д-лы, 2', lat: 43.24, lng: 76.95 })).data;
  const fake = 'data:image/png;base64,' + Buffer.from('<script>alert(1)</script>').toString('base64');
  assert.equal((await call('POST', '/api/partner/upload', owner, { image: fake })).status, 400, 'content must really be an image');
  assert.equal((await call('POST', '/api/partner/upload', owner, { image: 'data:image/svg+xml;base64,PHN2Zz4=' })).status, 400, 'no SVG');
  assert.equal((await call('PATCH', `/api/partner/venues/${v.id}`, owner, { cover_url: 'https://evil.example/x.png' })).status, 400, 'no foreign URLs');
  assert.equal((await call('PATCH', `/api/partner/venues/${v.id}`, owner, { cover_url: '/uploads/../../etc/passwd' })).status, 400);
  assert.equal((await fetch(base + '/uploads/..%2f..%2fpackage.json')).status, 404);
  assert.equal((await fetch(base + '/uploads/00000000000000000000000000000000.png')).status, 404);
  // A phone photo of ~650 KB fits; anything far bigger gets a clear 413 instead of a dropped connection.
  const jpeg = Buffer.concat([Buffer.from([0xff, 0xd8, 0xff, 0xe0]), Buffer.alloc(650 * 1024, 7)]);
  const big = await call('POST', '/api/partner/upload', owner, { image: 'data:image/jpeg;base64,' + jpeg.toString('base64') });
  assert.equal(big.status, 200);
  const huge = await call('POST', '/api/partner/upload', owner, { image: 'data:image/jpeg;base64,' + Buffer.alloc(3 * 1024 * 1024).toString('base64') });
  assert.equal(huge.status, 413);
  assert.equal(huge.data.error, 'too_large');
  assert.equal((await call('PATCH', '/api/me', owner, { name: 'x'.repeat(70 * 1024) })).status, 413, 'other APIs keep the small limit');
});
