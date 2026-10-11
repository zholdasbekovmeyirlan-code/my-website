'use strict';
// Pilot launch settings: invite-only sign-in and a real SMS provider that is not configured yet.
const test = require('node:test');
const assert = require('node:assert/strict');
const { start } = require('../index');

async function call(base, method, path, token, body) {
  const res = await fetch(base + path, {
    method,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, data: await res.json() };
}

test('invite-only: strangers are refused until the admin invites them', async () => {
  const app = await start({ port: 0, dbPath: ':memory:', smsMode: 'demo', seedDemo: false, inviteOnly: true, adminPhones: ['77010000000'] });
  const base = `http://127.0.0.1:${app.port}`;
  try {
    const refused = await call(base, 'POST', '/api/auth/code', null, { phone: '+77075550000' });
    assert.equal(refused.status, 403);
    assert.equal(refused.data.error, 'not_invited');

    const code = await call(base, 'POST', '/api/auth/code', null, { phone: '+77010000000' });
    assert.equal(code.status, 200);
    const admin = (await call(base, 'POST', '/api/auth/verify', null, { phone: '+77010000000', code: code.data.demoCode })).data;
    assert.equal(admin.user.is_admin, true);

    assert.equal((await call(base, 'POST', '/api/admin/invite', admin.token, { phone: '7075550000', name: 'Тестер' })).status, 200);
    assert.equal((await call(base, 'POST', '/api/auth/code', null, { phone: '+77075550000' })).status, 200);
    const ov = (await call(base, 'GET', '/api/admin/overview', admin.token)).data;
    assert.equal(ov.inviteOnly, true);
    assert.ok(ov.people.some((p) => p.name === 'Тестер'));
    assert.equal((await call(base, 'GET', '/api/venues?type=food')).data.length, 0, 'no demo venues when SEED_DEMO=0');
  } finally {
    await app.close();
  }
});

test('a provider without credentials reports sms_failed and keeps no code', async () => {
  const app = await start({ port: 0, dbPath: ':memory:', smsMode: 'mobizon', seedDemo: false, adminPhones: [] });
  const base = `http://127.0.0.1:${app.port}`;
  try {
    const r = await call(base, 'POST', '/api/auth/code', null, { phone: '+77075550001' });
    assert.equal(r.status, 502);
    assert.equal(r.data.error, 'sms_failed');
    assert.equal(r.data.demoCode, undefined);
    // Nothing was stored, so the user may retry right away instead of waiting 30 s.
    assert.equal((await call(base, 'POST', '/api/auth/code', null, { phone: '+77075550001' })).status, 502);
  } finally {
    await app.close();
  }
});
