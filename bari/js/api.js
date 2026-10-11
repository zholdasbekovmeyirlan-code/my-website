/* Бәрі — talking to the server: requests, session, live events, sign-in sheet. */
(function () {
  const B = window.Bari;
  const TOKEN_KEY = 'bari:token';
  const t = (k, v) => B.t(k, v);

  /* ---------- tiny event bus ---------- */
  const handlers = {};
  B.bus = {
    on(type, fn) {
      (handlers[type] = handlers[type] || new Set()).add(fn);
      return () => handlers[type].delete(fn);
    },
    emit(type, data) {
      (handlers[type] || []).forEach((fn) => {
        try { fn(data); } catch (e) { console.error(e); }
      });
    },
  };

  /* ---------- requests ---------- */
  let token = null;
  try { token = localStorage.getItem(TOKEN_KEY); } catch (e) { /* ignore */ }

  class ApiError extends Error {
    constructor(status, code, detail) {
      super(code);
      this.status = status;
      this.code = code;
      this.detail = detail;
    }
  }

  // opts.idem: an Idempotency-Key. Such requests are safe to send again, so a lost connection is retried once.
  async function req(method, path, body, opts) {
    opts = opts || {};
    const headers = { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) };
    if (opts.idem) headers['Idempotency-Key'] = opts.idem;
    let res;
    for (let attempt = 0; ; attempt++) {
      try {
        res = await fetch(path, { method, headers, body: body ? JSON.stringify(body) : undefined });
        break;
      } catch (e) {
        if (!opts.idem || attempt >= 1) throw new ApiError(0, 'network');
        await new Promise((r) => setTimeout(r, 1500));
      }
    }
    let data = null;
    try { data = await res.json(); } catch (e) { /* empty */ }
    if (!res.ok) {
      if (res.status === 401 && token) signedOut();
      throw new ApiError(res.status, (data && data.error) || 'server', data && data.detail);
    }
    return data;
  }
  B.api = {
    get: (p) => req('GET', p),
    post: (p, b, o) => req('POST', p, b || {}, o),
    patch: (p, b) => req('PATCH', p, b || {}),
    del: (p) => req('DELETE', p),
  };

  // One key per order the user is placing: the same order (same body) keeps its key until it succeeds,
  // so pressing the button again after a timeout cannot create a second order.
  const pendingKeys = {};
  const newKey = () => {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    const a = new Uint8Array(16);
    crypto.getRandomValues(a);
    return Array.from(a, (b) => b.toString(16).padStart(2, '0')).join('');
  };
  B.idemKey = (slot, body) => {
    const sig = JSON.stringify(body);
    const p = pendingKeys[slot];
    if (p && p.sig === sig) return p.key;
    const key = newKey();
    pendingKeys[slot] = { key, sig };
    return key;
  };
  B.idemDone = (slot) => { delete pendingKeys[slot]; };

  // A readable message for any API error.
  B.errText = function (e) {
    if (!e || !e.code) return t('err.server');
    const k = 'err.' + e.code;
    if (e.code === 'wait') return t('err.wait', { n: e.detail });
    if (e.code === 'min_order') return t('err.min_order', { price: B.money(Number(e.detail)) });
    if (e.code === 'invalid' && e.detail) {
      const f = 'field.' + String(e.detail).split('.')[0];
      return t('err.invalid', { field: B.has(f) ? t(f) : e.detail });
    }
    return B.has(k) ? t(k) : t('err.server');
  };
  B.fail = (e) => B.toast(B.errText(e));

  /* ---------- session ---------- */
  B.session = null;
  function setToken(v) {
    token = v;
    try {
      if (v) localStorage.setItem(TOKEN_KEY, v);
      else localStorage.removeItem(TOKEN_KEY);
    } catch (e) { /* ignore */ }
  }
  function signedOut() {
    setToken(null);
    B.session = null;
    stopLive();
    B.bus.emit('session', null);
  }
  B.hasToken = () => !!token;

  B.loadSession = async function () {
    if (!token) return null;
    try {
      B.session = await B.api.get('/api/me');
      startLive();
      B.bus.emit('session', B.session);
    } catch (e) {
      if (e.status !== 401) B.session = null;
    }
    return B.session;
  };
  B.setSession = function (me) {
    B.session = { user: me.user, worker: me.worker, venues: me.venues };
    B.bus.emit('session', B.session);
  };
  B.logout = async function () {
    try { await B.api.post('/api/auth/logout'); } catch (e) { /* already gone */ }
    signedOut();
  };

  /* ---------- live events (Server-Sent Events) ---------- */
  let es = null;
  function startLive() {
    if (es || !token || typeof EventSource === 'undefined') return;
    es = new EventSource('/api/events?token=' + encodeURIComponent(token));
    ['order', 'loc', 'offers'].forEach((type) => {
      es.addEventListener(type, (ev) => {
        try { B.bus.emit(type, JSON.parse(ev.data)); } catch (e) { /* bad event */ }
      });
    });
    es.onopen = () => B.bus.emit('live', true);
    es.onerror = () => {
      B.bus.emit('live', false);
      // A closed stream usually means the session ended; check once.
      if (es && es.readyState === 2) {
        es = null;
        B.loadSession();
      }
    };
  }
  function stopLive() {
    if (es) es.close();
    es = null;
  }
  B.startLive = startLive;

  /* ---------- photos ---------- */
  // Opens the photo picker, shrinks the picture on the phone (long side ≤ max px) and uploads it as JPEG.
  B.pickPhoto = function (max) {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/jpeg,image/png,image/webp';
      input.addEventListener('change', () => {
        const file = input.files && input.files[0];
        if (!file) return reject(new ApiError(0, 'cancelled'));
        // Read as a data: URL (allowed by the page's security policy, unlike blob: URLs).
        const reader = new FileReader();
        const img = new Image();
        img.onload = async () => {
          const k = Math.min(1, (max || 1200) / Math.max(img.naturalWidth, img.naturalHeight));
          const c = document.createElement('canvas');
          c.width = Math.round(img.naturalWidth * k);
          c.height = Math.round(img.naturalHeight * k);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          try {
            const r = await B.api.post('/api/partner/upload', { image: c.toDataURL('image/jpeg', 0.82) });
            resolve(r.url);
          } catch (e) { reject(e); }
        };
        img.onerror = () => reject(new ApiError(400, 'invalid', 'image'));
        reader.onload = () => { img.src = reader.result; };
        reader.onerror = () => reject(new ApiError(400, 'invalid', 'image'));
        reader.readAsDataURL(file);
      });
      input.click();
    });
  };

  /* ---------- config ---------- */
  B.cfg = null;
  B.loadConfig = async function () {
    try { B.cfg = await B.api.get('/api/config'); } catch (e) { B.cfg = null; }
    return B.cfg;
  };

  /* ---------- sign-in sheet ---------- */
  // The field holds the 10-digit national number; "+7" is shown before it.
  // Autofill and paste may bring "+7 707…" or "8 707…": the leading 7/8 is dropped.
  function formatPhone(v) {
    let d = String(v || '').replace(/\D/g, '');
    if (d.length === 11 && (d[0] === '7' || d[0] === '8')) d = d.slice(1);
    d = d.slice(0, 10);
    return [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)].filter(Boolean).join(' ');
  }
  const fullPhone = (v) => '+7 ' + formatPhone(v);

  B.login = function (onDone, opts) {
    opts = opts || {};
    let phone = '';
    const step1 = () => `<form class="sheet-body" id="login-form" novalidate>
        <h3 class="sheet-title">${t('login.title')}</h3>
        <p class="muted">${opts.why || t('login.sub')}</p>
        <label class="field"><span>${t('pf.phone')}</span>
          <span class="phone-field"><span class="phone-cc" aria-hidden="true">+7</span><input id="login-phone" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="707 123 45 67" value="${B.esc(formatPhone(phone))}" maxlength="16"></span>
        </label>
        <p class="form-err" id="login-err" hidden></p>
        <button class="btn btn-primary btn-block" type="submit">${t('login.getcode')}</button>
        <p class="muted small">${t('login.terms')}</p>
      </form>`;
    const step2 = (demoCode) => `<form class="sheet-body" id="code-form" novalidate>
        <h3 class="sheet-title">${t('login.code')}</h3>
        <p class="muted">${t('login.sent', { phone: B.esc(phone) })}</p>
        ${demoCode ? `<p class="demo-code">${t('login.demo')} <b>${demoCode}</b></p>` : ''}
        <label class="field"><span>${t('login.code4')}</span>
          <input id="login-code" inputmode="numeric" autocomplete="one-time-code" maxlength="4" pattern="[0-9]*" class="code-input">
        </label>
        <label class="field"><span>${t('login.name')}</span>
          <input id="login-name" autocomplete="given-name" maxlength="40" placeholder="${t('login.name.ph')}">
        </label>
        <p class="form-err" id="login-err" hidden></p>
        <button class="btn btn-primary btn-block" type="submit">${t('login.enter')}</button>
        <button class="link" type="button" id="login-back">${t('login.change')}</button>
      </form>`;
    const showErr = (msg) => {
      const el = document.getElementById('login-err');
      if (el) { el.textContent = msg; el.hidden = false; }
    };

    function bind1() {
      const input = document.getElementById('login-phone');
      input.addEventListener('input', () => { input.value = formatPhone(input.value); });
      document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        phone = fullPhone(input.value);
        if (!/^\+7 7\d\d \d{3} \d\d \d\d$/.test(phone)) return showErr(t('err.invalid', { field: t('field.phone') }));
        const btn = e.target.querySelector('button[type=submit]');
        btn.disabled = true;
        try {
          const r = await B.api.post('/api/auth/code', { phone });
          B.sheet.open(step2(r.demoCode), { focus: '#login-code', label: t('login.code') });
          bind2();
        } catch (err) {
          btn.disabled = false;
          showErr(B.errText(err));
        }
      });
    }
    function bind2() {
      document.getElementById('login-back').addEventListener('click', () => {
        B.sheet.open(step1(), { focus: '#login-phone', label: t('login.title') });
        bind1();
      });
      document.getElementById('code-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const code = document.getElementById('login-code').value.trim();
        const name = document.getElementById('login-name').value.trim();
        const btn = e.target.querySelector('button[type=submit]');
        btn.disabled = true;
        try {
          const r = await B.api.post('/api/auth/verify', { phone, code, name });
          setToken(r.token);
          B.setSession(r);
          startLive();
          B.sheet.close(true);
          B.toast(t('login.ok'));
          if (onDone) onDone(B.session);
        } catch (err) {
          btn.disabled = false;
          showErr(B.errText(err));
        }
      });
    }
    B.sheet.open(step1(), { focus: '#login-phone', label: t('login.title') });
    bind1();
  };

  B.requireLogin = function (fn, why) {
    if (B.session) return fn(B.session);
    B.login(() => fn(B.session), { why });
  };
})();
