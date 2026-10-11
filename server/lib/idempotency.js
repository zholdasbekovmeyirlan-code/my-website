'use strict';
// Repeating a request with the same Idempotency-Key returns the first result instead of doing the work again,
// for example when a phone lost the response after a network timeout and the app sends the order once more.
const crypto = require('node:crypto');
const { fail } = require('./http');

const TTL = 24 * 3600e3;
const KEY_RE = /^[A-Za-z0-9_-]{8,80}$/;

function createIdempotency(db) {
  const hash = (body) => crypto.createHash('sha256').update(JSON.stringify(body || {})).digest('hex');

  return {
    // fn must be synchronous: the lookup, the work and the stored result then happen without another request in between.
    // refresh(storedResult) may return a fresher view of the same thing for a replayed request.
    run(user, key, body, fn, refresh) {
      if (key === undefined || key === null || key === '') return fn();
      if (typeof key !== 'string' || !KEY_RE.test(key)) fail(400, 'invalid', 'idempotency_key');
      const h = hash(body);
      const prev = db.one('SELECT request_hash, response FROM idempotency_keys WHERE user_id = ? AND key = ?', user.id, key);
      if (prev) {
        if (prev.request_hash !== h) fail(422, 'idempotency_mismatch');
        const stored = JSON.parse(prev.response);
        return refresh ? refresh(stored) : stored;
      }
      const out = fn();
      db.run(
        'INSERT INTO idempotency_keys (user_id, key, request_hash, response, created_at) VALUES (?, ?, ?, ?, ?)',
        user.id, key, h, JSON.stringify(out), Date.now()
      );
      return out;
    },
    sweep() {
      db.run('DELETE FROM idempotency_keys WHERE created_at < ?', Date.now() - TTL);
    },
  };
}

module.exports = { createIdempotency };
