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

  async function req(method, path, body) {
    let res;
    try {
      res = await fetch(path, {
        method,
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
        body: body ? JSON.stringify(body) : undefined,
      });
    } catch (e) {
      throw new ApiError(0, 'network');
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
    post: (p, b) => req('POST', p, b || {}),
    patch: (p, b) => req('PATCH', p, b || {}),
    del: (p) => req('DELETE', p),
  };

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
