/* Бәрі demo: the real server code (server/lib, server/routes) running inside the browser.
   SQLite comes from sql.js; the database is kept in this browser's localStorage.
   Requests to /api/… and the live event stream are answered here instead of over the network. */
(function () {
  'use strict';
  const DB_KEY = 'bari:demo-db';
  const sources = window.__BARI_MODULES__ || {};

  /* ---------- small helpers ---------- */
  const toHex = (bytes) => Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  const randomBytes = (n) => { const a = new Uint8Array(n); crypto.getRandomValues(a); return a; };

  // SHA-256 (synchronous, as the server code expects).
  function sha256(text) {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    const data = new TextEncoder().encode(text);
    const len = data.length;
    const words = new Uint32Array(((len + 9 + 63) >> 6) << 4);
    for (let i = 0; i < len; i++) words[i >> 2] |= data[i] << (24 - (i % 4) * 8);
    words[len >> 2] |= 0x80 << (24 - (len % 4) * 8);
    words[words.length - 1] = len * 8;
    const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const w = new Uint32Array(64);
    const rot = (x, n) => (x >>> n) | (x << (32 - n));
    for (let j = 0; j < words.length; j += 16) {
      for (let i = 0; i < 64; i++) {
        if (i < 16) w[i] = words[j + i];
        else {
          const s0 = rot(w[i - 15], 7) ^ rot(w[i - 15], 18) ^ (w[i - 15] >>> 3);
          const s1 = rot(w[i - 2], 17) ^ rot(w[i - 2], 19) ^ (w[i - 2] >>> 10);
          w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
        }
      }
      let [a, b, c, d, e, f, g, h] = H;
      for (let i = 0; i < 64; i++) {
        const t1 = (h + (rot(e, 6) ^ rot(e, 11) ^ rot(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0;
        const t2 = ((rot(a, 2) ^ rot(a, 13) ^ rot(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    return H.map((x) => (x >>> 0).toString(16).padStart(8, '0')).join('');
  }

  const b64encode = (bytes) => {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  };
  const b64decode = (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));

  /* ---------- Node built-ins the server code touches ---------- */
  const builtins = {
    'node:fs': {},
    'node:sqlite': {},
    'node:path': { sep: '/', resolve: (...a) => a.join('/'), extname: (p) => (String(p).match(/\.[^./]+$/) || [''])[0], relative: () => '', dirname: () => '' },
    'node:crypto': {
      createHash() {
        let s = '';
        return { update(x) { s += x; return this; }, digest() { return sha256(s); } };
      },
      randomInt(min, max) {
        const a = randomBytes(4);
        const n = ((a[0] << 24) >>> 0) + (a[1] << 16) + (a[2] << 8) + a[3];
        return min + Math.floor((n / 2 ** 32) * (max - min));
      },
      randomBytes(n) { const a = randomBytes(n); return { toString: () => toHex(a) }; },
    },
  };

  /* ---------- tiny CommonJS loader for the bundled server modules ---------- */
  const loaded = {};
  const overrides = {};
  function resolve(from, req) {
    if (builtins[req]) return req;
    const parts = from.split('/').slice(0, -1);
    for (const seg of req.split('/')) {
      if (seg === '.' || seg === '') continue;
      if (seg === '..') parts.pop();
      else parts.push(seg);
    }
    return parts.join('/').replace(/\.js$/, '');
  }
  function load(id) {
    if (builtins[id]) return builtins[id];
    if (overrides[id]) return overrides[id];
    if (loaded[id]) return loaded[id].exports;
    if (!sources[id]) throw new Error('Demo: module not bundled: ' + id);
    const m = { exports: {} };
    loaded[id] = m;
    sources[id]((r) => load(resolve(id, r)), m, m.exports);
    return m.exports;
  }

  /* ---------- live events ---------- */
  const streams = new Map(); // userId -> Set<DemoEventSource>
  overrides['lib/realtime'] = {
    attach() {},
    send(userId, type, data) {
      const set = streams.get(userId);
      if (!set) return;
      const payload = JSON.stringify(data);
      setTimeout(() => set.forEach((es) => es._emit(type, payload)), 0);
    },
    isConnected: (id) => streams.has(id),
    closeAll() {},
  };

  /* ---------- SQLite in the browser ---------- */
  function makeDb(SQL, bytes, schema) {
    let raw = bytes ? new SQL.Database(bytes) : new SQL.Database();
    let dirty = !bytes;
    const prep = () => raw.exec('PRAGMA foreign_keys = ON;');
    prep();
    raw.exec(schema);
    const norm = (p) => p.map((v) => (v === undefined ? null : typeof v === 'boolean' ? (v ? 1 : 0) : v));
    return {
      one(sql, ...p) {
        const st = raw.prepare(sql);
        try { st.bind(norm(p)); return st.step() ? st.getAsObject() : undefined; } finally { st.free(); }
      },
      all(sql, ...p) {
        const st = raw.prepare(sql);
        const rows = [];
        try { st.bind(norm(p)); while (st.step()) rows.push(st.getAsObject()); } finally { st.free(); }
        return rows;
      },
      run(sql, ...p) {
        raw.run(sql, norm(p));
        dirty = true;
        const changes = raw.getRowsModified();
        const id = raw.exec('SELECT last_insert_rowid()')[0].values[0][0];
        return { changes, lastInsertRowid: id };
      },
      tx(fn) {
        raw.exec('BEGIN IMMEDIATE');
        try {
          const out = fn();
          raw.exec('COMMIT');
          dirty = true;
          return out;
        } catch (e) {
          raw.exec('ROLLBACK');
          throw e;
        }
      },
      close() {},
      exportBytes() { const b = raw.export(); prep(); return b; },
      replace(b) { raw.close(); raw = new SQL.Database(b); prep(); dirty = false; },
      isDirty: () => dirty,
      clean() { dirty = false; },
    };
  }

  /* ---------- boot the "server" ---------- */
  const config = {
    smsMode: 'demo',
    adminPhones: { includes: () => true }, // in the demo everyone may open the admin panel
    seedDemo: true,
    simulate: true,
    otpSecret: 'bari-demo',
  };
  let db, auth, orders, router, HttpError, lastSync = Date.now();

  function save() {
    if (!db || !db.isDirty()) return;
    db.clean();
    try {
      localStorage.setItem(DB_KEY, b64encode(db.exportBytes()));
      lastSync = Date.now();
    } catch (e) { /* storage full or blocked: keep working in memory */ }
  }

  const ready = (async () => {
    const SQL = await window.initSqlJs();
    let bytes = null;
    try { const s = localStorage.getItem(DB_KEY); if (s) bytes = b64decode(s); } catch (e) { /* no storage */ }
    const http = load('lib/http');
    HttpError = http.HttpError;
    try {
      db = makeDb(SQL, bytes, load('lib/db').SCHEMA);
    } catch (e) {
      db = makeDb(SQL, null, load('lib/db').SCHEMA);
    }
    load('seed').seed(db);
    auth = load('lib/auth').createAuth(db, config);
    orders = load('lib/orders').createOrders(db, overrides['lib/realtime'], { offlineAfter: 24 * 3600e3 });
    router = http.createRouter();
    load('routes/api')(router, { db, auth, orders, config });
    orders.resumeDemoKitchens();
    setInterval(() => { try { orders.sweep(); } catch (e) { console.error(e); } }, 30000);
    setInterval(save, 800);
    window.addEventListener('pagehide', save);
    document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
    save();
  })();
  window.__bariDemoReady = ready;

  // Another tab saved: take its data and tell this page what changed.
  window.addEventListener('storage', (e) => {
    if (e.key !== DB_KEY || !e.newValue || !db) return;
    try { db.replace(b64decode(e.newValue)); } catch (err) { return; }
    const since = lastSync - 2000;
    lastSync = Date.now();
    for (const uid of streams.keys()) {
      db.all(
        `SELECT o.* FROM orders o LEFT JOIN venues v ON v.id = o.venue_id
         WHERE o.updated_at > ? AND (o.client_id = ? OR o.worker_id = ? OR v.owner_id = ?)`, since, uid, uid, uid
      ).forEach((o) => overrides['lib/realtime'].send(uid, 'order', orders.view(o, uid)));
      overrides['lib/realtime'].send(uid, 'offers', {});
    }
  });

  async function handle(method, url, headers, bodyText) {
    await ready;
    const auth_ = headers.get('Authorization') || '';
    const token = auth_.startsWith('Bearer ') ? auth_.slice(7) : url.searchParams.get('token');
    try {
      const m = router.match(method, url.pathname);
      if (!m) throw new HttpError(404, 'not_found');
      if (m.notAllowed) throw new HttpError(405, 'method');
      const { route, params } = m;
      let user = null;
      if (route.opts.auth) {
        user = auth.userFromToken(token);
        if (!user && route.opts.auth !== 'optional') throw new HttpError(401, 'auth');
        if (route.opts.auth === 'admin' && !user.is_admin) throw new HttpError(403, 'forbidden');
      }
      let body = {};
      if (bodyText) {
        try { body = JSON.parse(bodyText); } catch (e) { throw new HttpError(400, 'bad_json'); }
      }
      const out = await route.handler({ req: {}, res: {}, params, query: Object.fromEntries(url.searchParams), body, user, ip: 'demo-' + Math.random(), token });
      return [200, out === undefined ? { ok: true } : out];
    } catch (e) {
      if (HttpError && e instanceof HttpError) return [e.status, { error: e.code, detail: e.message !== e.code ? e.message : undefined }];
      console.error(e);
      return [500, { error: 'server' }];
    }
  }

  const realFetch = window.fetch.bind(window);
  window.fetch = async function (input, init) {
    init = init || {};
    const url = new URL(typeof input === 'string' ? input : input.url, location.href);
    if (url.origin !== location.origin || !url.pathname.startsWith('/api/')) return realFetch(input, init);
    const [status, data] = await handle((init.method || 'GET').toUpperCase(), url, new Headers(init.headers || {}), init.body || '');
    return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
  };

  class DemoEventSource {
    constructor(url) {
      this.readyState = 0;
      this.listeners = {};
      this.onopen = null;
      this.onerror = null;
      const token = new URL(url, location.href).searchParams.get('token');
      ready.then(() => {
        const user = auth.userFromToken(token);
        if (!user) {
          this.readyState = 2;
          if (this.onerror) this.onerror(new Event('error'));
          return;
        }
        this.userId = user.id;
        if (!streams.has(user.id)) streams.set(user.id, new Set());
        streams.get(user.id).add(this);
        this.readyState = 1;
        if (this.onopen) this.onopen(new Event('open'));
      });
    }
    addEventListener(type, fn) { (this.listeners[type] = this.listeners[type] || []).push(fn); }
    removeEventListener(type, fn) { this.listeners[type] = (this.listeners[type] || []).filter((f) => f !== fn); }
    _emit(type, data) { (this.listeners[type] || []).forEach((fn) => fn({ type, data })); }
    close() {
      this.readyState = 2;
      const set = streams.get(this.userId);
      if (set) set.delete(this);
    }
  }
  window.EventSource = DemoEventSource;

  /* ---------- demo chrome: role switcher and a first-visit guide ---------- */
  const ROLES = [['app.html', '👤', 'Клиент'], ['pro.html', '🚗', 'Pro'], ['partner.html', '🏪', 'Бизнес'], ['admin.html', '🛡️', 'Әкімші']];
  document.addEventListener('DOMContentLoaded', () => {
    const role = document.body.dataset.role || 'app.html';
    const bar = document.createElement('nav');
    bar.className = 'demo-bar';
    bar.setAttribute('aria-label', 'Демо рөлдері');
    bar.innerHTML = `<span class="demo-tag">ДЕМО</span>${ROLES.map(([href, e, name]) => `<a href="${href}"${href === role ? ' aria-current="page"' : ''}><span aria-hidden="true">${e}</span>${name}</a>`).join('')}`;
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.classList.add('demo');

    let seen = false;
    try { seen = localStorage.getItem('bari:demo-guide') === '1'; } catch (e) { /* ignore */ }
    if (seen || role !== 'app.html') return;
    setTimeout(() => {
      if (!window.Bari || !window.Bari.sheet) return;
      window.Bari.sheet.open(`<div class="sheet-body demo-guide">
          <h3 class="sheet-title">Бәрі: демо</h3>
          <p class="muted">Бұл нұсқада сервер телефоныңыздың ішінде жұмыс істейді. Сондықтан барлық рөлді өзіңіз ойнай аласыз. Жоғарыдағы жолақпен рөлдер арасында ауысыңыз.</p>
          <ol>
            <li><b>Pro</b>: жүргізуші ретінде өтінім беріңіз.</li>
            <li><b>Әкімші</b>: өтінімді растаңыз.</li>
            <li><b>Pro</b>: «Желіге шығу» батырмасын басыңыз.</li>
            <li><b>Клиент</b>: такси шақырыңыз немесе тамақ тапсырыс етіңіз.</li>
            <li><b>Pro</b>: тапсырысты қабылдап, орындаңыз. Клиент экраны жаңарып отырады.</li>
          </ol>
          <p class="muted small">Кіру коды SMS-сіз, экранда көрсетіледі. Кез келген нөмірді жаза беріңіз: 7XX XXX XX XX.</p>
          <button class="btn btn-primary btn-block" data-act="demo-ok">Түсінікті</button>
        </div>`, { label: 'Бәрі: демо' });
      window.Bari.actions['demo-ok'] = () => {
        try { localStorage.setItem('bari:demo-guide', '1'); } catch (e) { /* ignore */ }
        window.Bari.sheet.close(true);
      };
    }, 900);
  });
})();
