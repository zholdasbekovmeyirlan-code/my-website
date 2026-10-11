'use strict';
// Sign-in with a phone number and a one-time SMS code. Sessions are random tokens.
const crypto = require('node:crypto');
const sms = require('./sms');
const { fail } = require('./http');

const CODE_TTL = 5 * 60e3;
const RESEND_AFTER = 30e3;
const MAX_ATTEMPTS = 5;
const SESSION_TTL = 90 * 24 * 3600e3;


// Simple in-memory limiter per IP: at most `max` hits per `windowMs`.
function limiter(max, windowMs) {
  const hits = new Map();
  return (key) => {
    const now = Date.now();
    const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
    if (arr.length >= max) return false;
    arr.push(now);
    hits.set(key, arr);
    return true;
  };
}
const ipLimit = limiter(12, 3600e3);
const verifyLimit = limiter(40, 3600e3);

function createAuth(db, config) {
  const hash = (s) => crypto.createHash('sha256').update(config.otpSecret + ':' + s).digest('hex');

  async function requestCode(phone, ip) {
    const now = Date.now();
    const prev = db.one('SELECT sent_at FROM otps WHERE phone = ?', phone);
    if (prev && now - prev.sent_at < RESEND_AFTER) fail(429, 'wait', String(Math.ceil((RESEND_AFTER - (now - prev.sent_at)) / 1000)));
    if (!ipLimit(ip)) fail(429, 'too_many');
    const user = db.one('SELECT blocked FROM users WHERE phone = ?', phone);
    if (user && user.blocked) fail(403, 'blocked');
    const code = String(crypto.randomInt(1000, 10000));
    db.run(
      `INSERT INTO otps (phone, code_hash, expires_at, attempts, sent_at) VALUES (?, ?, ?, 0, ?)
       ON CONFLICT(phone) DO UPDATE SET code_hash = excluded.code_hash, expires_at = excluded.expires_at, attempts = 0, sent_at = excluded.sent_at`,
      phone, hash(phone + ':' + code), now + CODE_TTL, now
    );
    const out = await sms.sendCode(phone, code, config.smsMode);
    return { ok: true, ...(out.demoCode ? { demoCode: out.demoCode } : {}) };
  }

  function verify(phone, code, name, ip) {
    if (!verifyLimit(ip)) fail(429, 'too_many');
    const row = db.one('SELECT * FROM otps WHERE phone = ?', phone);
    const now = Date.now();
    if (!row || row.expires_at < now) fail(400, 'code_expired');
    if (row.attempts >= MAX_ATTEMPTS) fail(429, 'too_many');
    if (row.code_hash !== hash(phone + ':' + String(code || '').trim())) {
      db.run('UPDATE otps SET attempts = attempts + 1 WHERE phone = ?', phone);
      fail(400, 'code_wrong');
    }
    db.run('DELETE FROM otps WHERE phone = ?', phone);

    let user = db.one('SELECT * FROM users WHERE phone = ?', phone);
    if (!user) {
      db.run('INSERT INTO users (phone, name, created_at) VALUES (?, ?, ?)', phone, name || '', now);
      user = db.one('SELECT * FROM users WHERE phone = ?', phone);
    } else if (name && !user.name) {
      db.run('UPDATE users SET name = ? WHERE id = ?', name, user.id);
    }
    if (user.blocked) fail(403, 'blocked');
    if (config.adminPhones.includes(phone) && !user.is_admin) db.run('UPDATE users SET is_admin = 1 WHERE id = ?', user.id);

    const token = crypto.randomBytes(32).toString('hex');
    db.run('INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)', hash(token), user.id, now, now + SESSION_TTL);
    return { token, userId: user.id };
  }

  function userFromToken(token) {
    if (!token || typeof token !== 'string' || token.length > 100) return null;
    const row = db.one(
      `SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id
       WHERE s.token_hash = ? AND s.expires_at > ?`, hash(token), Date.now()
    );
    return row && !row.blocked ? row : null;
  }

  function logout(token) {
    db.run('DELETE FROM sessions WHERE token_hash = ?', hash(token || ''));
  }

  return { requestCode, verify, userFromToken, logout };
}

module.exports = { createAuth };
