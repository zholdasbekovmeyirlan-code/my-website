'use strict';
// Бәрі server: JSON API under /api, live updates at /api/events, and the web apps from ../bari.
const http = require('node:http');
const config = require('./lib/config');
const { open } = require('./lib/db');
const { createRouter, readJson, sendJson, serveStatic, HttpError } = require('./lib/http');
const { createAuth } = require('./lib/auth');
const { createOrders } = require('./lib/orders');
const rt = require('./lib/realtime');
const { seed } = require('./seed');
const registerApi = require('./routes/api');
const { createIdempotency } = require('./lib/idempotency');

function start(opts = {}) {
  const cfg = { ...config, ...opts };
  const db = open(cfg.dbPath);
  if (cfg.seedDemo && seed(db)) console.log('Demo venues added');
  const auth = createAuth(db, cfg);
  const orders = createOrders(db, rt, { kitchenDelays: cfg.kitchenDelays });
  const router = createRouter();
  registerApi(router, { db, auth, orders, config: cfg });
  orders.resumeDemoKitchens();

  const bearer = (req, url) => {
    const h = req.headers.authorization || '';
    if (h.startsWith('Bearer ')) return h.slice(7).trim();
    return url.searchParams.get('token');
  };

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || '';
    if (!url.pathname.startsWith('/api/')) {
      if ((req.method === 'GET' || req.method === 'HEAD') && serveStatic(cfg.staticDir, req, res)) return;
      return sendJson(res, 404, { error: 'not_found' });
    }
    try {
      const token = bearer(req, url);
      if (url.pathname === '/api/events' && req.method === 'GET') {
        const user = auth.userFromToken(token);
        if (!user) throw new HttpError(401, 'auth');
        return rt.attach(req, res, user.id);
      }
      const m = router.match(req.method, url.pathname);
      if (!m) throw new HttpError(404, 'not_found');
      if (m.notAllowed) throw new HttpError(405, 'method');
      const { route, params } = m;
      let user = null;
      if (route.opts.auth) {
        user = auth.userFromToken(token);
        if (!user && route.opts.auth !== 'optional') throw new HttpError(401, 'auth');
        if (route.opts.auth === 'admin' && !user.is_admin) throw new HttpError(403, 'forbidden');
      }
      const body = ['POST', 'PATCH', 'PUT', 'DELETE'].includes(req.method) ? await readJson(req, 64 * 1024) : {};
      const query = Object.fromEntries(url.searchParams);
      const idemKey = req.headers['idempotency-key'];
      const out = await route.handler({ req, res, params, query, body, user, ip, token, idemKey });
      sendJson(res, 200, out === undefined ? { ok: true } : out);
    } catch (e) {
      if (e instanceof HttpError) return sendJson(res, e.status, { error: e.code, detail: e.message !== e.code ? e.message : undefined });
      console.error(e);
      sendJson(res, 500, { error: 'server' });
    }
  });

  const idem = createIdempotency(db);
  const sweeper = setInterval(() => {
    try { orders.sweep(); idem.sweep(); } catch (e) { console.error(e); }
  }, 30000);
  sweeper.unref();

  return new Promise((resolve) => {
    server.listen(cfg.port, () => {
      const port = server.address().port;
      resolve({
        port, db, server,
        async close() {
          clearInterval(sweeper);
          orders.stop();
          rt.closeAll();
          await new Promise((r) => server.close(r));
          db.close();
        },
      });
    });
  });
}

if (require.main === module) {
  start().then(({ port }) => {
    console.log(`Бәрі is running: http://localhost:${port}`);
    console.log(`  client   http://localhost:${port}/`);
    console.log(`  drivers  http://localhost:${port}/pro`);
    console.log(`  partners http://localhost:${port}/partner`);
    console.log(`  admin    http://localhost:${port}/admin`);
    if (config.smsMode === 'demo') {
      console.log('  SMS_MODE=demo: login codes are shown on screen.');
      if (!config.inviteOnly) console.log('  WARNING: anyone can sign in with any phone number. Use INVITE_ONLY=1 or an SMS provider for real users.');
    }
    if (!process.env.OTP_SECRET) console.log('  OTP_SECRET is not set: using a development secret. Set your own before going live.');
    if (!config.adminPhones.length) console.log('  ADMIN_PHONES is empty: nobody can open the admin panel.');
  });
}

module.exports = { start };
