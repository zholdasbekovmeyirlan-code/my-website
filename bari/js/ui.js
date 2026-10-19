/* Бәрі — icons, router, event delegation, sheets, toasts. Shared by all apps. */
(function () {
  const B = window.Bari;

  /* ---------- icons (24×24, stroke) ---------- */
  const P = {
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    heart: '<path d="M12 20s-7.5-4.6-9.2-9.4A4.9 4.9 0 0 1 12 6.8a4.9 4.9 0 0 1 9.2 3.8C19.5 15.4 12 20 12 20z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    chev: '<path d="M9 5l7 7-7 7"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    locate: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    star: '<path class="fill" d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
    bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    swap: '<path d="M8 4v16M8 20l-3-3M8 20l3-3M16 20V4M16 4l-3 3M16 4l3 3"/>',
    card: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>',
    cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9v.01M18 15v.01"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
    shop: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9h16v2a3 3 0 0 1-5.3 2 3 3 0 0 1-5.4 0A3 3 0 0 1 4 11z"/><path d="M5 13v7h14v-7"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    power: '<path d="M12 3v8"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',
    wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h15a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-3"/><circle cx="16" cy="13.5" r="1"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    nav: '<path d="M3 11l18-8-8 18-2-8z"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    logout: '<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 16l-4-4 4-4M6 12h11"/>',
  };
  B.ic = (name, cls) => `<svg class="ic${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${P[name] || ''}</svg>`;

  // Brand mark: the "қошқар мүйіз" (ram's horn) motif of Kazakh ornament.
  B.logo = (cls) => `<svg class="logo${cls ? ' ' + cls : ''}" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect width="32" height="32" rx="9" class="logo-bg"/>
    <path class="logo-orn" d="M16 25v-9m0 0c0-4.6-3.3-7.4-7-7.4-2.6 0-4.3 1.9-4.3 4 0 1.9 1.4 3.3 3.2 3.3 1.5 0 2.6-1.1 2.6-2.4M16 16c0-4.6 3.3-7.4 7-7.4 2.6 0 4.3 1.9 4.3 4 0 1.9-1.4 3.3-3.2 3.3-1.5 0-2.6-1.1-2.6-2.4"/>
  </svg>`;

  // 3D pictures for the emoji the app uses (Microsoft Fluent Emoji, MIT, img/art/LICENSE).
  // Files are named by code point; an emoji without a picture stays text.
  const ART = new Set((
    '1f31f 1f321 1f32d 1f32e 1f32f 1f331 1f336 1f337 1f338 1f339 1f33b 1f33d 1f33e 1f344 1f345 1f346 1f347 1f349 ' +
    '1f34a 1f34b 1f34c 1f34d 1f34e 1f34f 1f350 1f351 1f352 1f353 1f354 1f355 1f356 1f357 1f358 1f359 1f35a 1f35b ' +
    '1f35c 1f35d 1f35e 1f35f 1f361 1f362 1f363 1f364 1f366 1f368 1f369 1f36a 1f36b 1f36c 1f36e 1f36f 1f370 1f371 ' +
    '1f372 1f373 1f375 1f376 1f37c 1f37d 1f37f 1f381 1f382 1f383 1f388 1f389 1f393 1f3ab 1f3d9 1f3e0 1f3e2 1f3e5 ' +
    '1f3ea 1f3ec 1f41f 1f43e 1f464 1f475 1f476 1f489 1f48a 1f490 1f49d 1f4a1 1f4a7 1f4ac 1f4b0 1f4b3 1f4b8 1f4bc ' +
    '1f4c8 1f4cb 1f4cd 1f4da 1f4e6 1f4f1 1f4f7 1f50b 1f50e 1f512 1f525 1f552 1f58a 1f5fa 1f637 1f68c 1f690 1f695 ' +
    '1f696 1f697 1f698 1f699 1f69a 1f6b2 1f6b6 1f6cd 1f6d2 1f6e1 1f6f4 1f6f5 1f91d 1f950 1f951 1f952 1f954 1f955 ' +
    '1f956 1f957 1f958 1f959 1f95a 1f95b 1f95c 1f95d 1f95e 1f95f 1f960 1f961 1f963 1f964 1f965 1f966 1f967 1f968 ' +
    '1f969 1f96a 1f96b 1f96c 1f96d 1f96e 1f96f 1f9bd 1f9c0 1f9c1 1f9c2 1f9c3 1f9c4 1f9c5 1f9c6 1f9c7 1f9c8 1f9ca ' +
    '1f9cb 1f9d1-200d-1f373 1f9d1-200d-1f9bd 1f9d3 1f9e6 1f9ea 1f9f4 1f9f7 1f9f8 1f9f9 1f9fa 1f9fb 1f9fc 1f9fd ' +
    '1f9fe 1fa79 1fa7a 1fa7c 1fa99 1faa5 1fab4 1fad0 1fad1 1fad3 1fad5 1fad6 1fad7 1fadb 23f3 2615 267f 26a1 26d4 ' +
    '270f 2728 2764 2b50 '
  ).trim().split(' '));
  // Skin tones and variation selectors are dropped so 🚶🏽 finds the same picture as 🚶.
  B.artKey = (e) => [...String(e || '')].map((c) => c.codePointAt(0))
    .filter((n) => n !== 0xfe0f && n !== 0xfe0e && (n < 0x1f3fb || n > 0x1f3ff)).map((n) => n.toString(16)).join('-');
  // Size comes from the parent's --art; lazy is for long lists (cards, menus, cart lines).
  B.art = (e, cls, lazy) => {
    const k = B.artKey(e);
    const c = cls ? ' ' + cls : '';
    return ART.has(k)
      ? `<img class="art${c}" src="img/art/${k}.webp" width="256" height="256" alt="" draggable="false" decoding="async"${lazy ? ' loading="lazy"' : ''}>`
      : `<span class="art art-emo${c}">${B.esc(e)}</span>`;
  };

  /* ---------- shared fragments ---------- */
  B.topbar = (title, right, noBack) => `<header class="topbar">
      ${noBack ? '<span></span>' : `<button class="icon-btn" data-act="back" aria-label="${B.t('back')}">${B.ic('back')}</button>`}
      <h1 class="topbar-title">${title}</h1>
      <div class="topbar-right">${right || ''}</div>
    </header>`;

  B.cartBtn = function () {
    const n = B.cartCount ? B.cartCount() : 0;
    return `<button class="icon-btn cart-btn" data-act="go" data-to="cart" aria-label="${B.t('cart')}">${B.ic('bag')}${n ? `<span class="count">${n}</span>` : ''}</button>`;
  };

  // Kazakh number plate: "123 ABC 02" → number and region code.
  B.plate = function (s) {
    const parts = String(s || '').trim().toUpperCase().split(/\s+/);
    const reg = parts.length > 1 && /^\d{2}$/.test(parts[parts.length - 1]) ? parts.pop() : '';
    return `<span class="plate" aria-label="${B.esc(s)}"><span class="plate-kz" aria-hidden="true"><i></i>KZ</span><span class="plate-num">${B.esc(parts.join(' '))}</span>${reg ? `<span class="plate-reg">${B.esc(reg)}</span>` : ''}</span>`;
  };

  B.avatar = (name, h) => {
    let hue = h;
    if (hue == null) hue = [...String(name || '?')].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
    return `<span class="avatar" style="--h:${hue}" aria-hidden="true">${B.esc((String(name || '?').trim()[0] || '?'))}</span>`;
  };

  // How a payment is shared between the worker and the service.
  B.split = function (amount, labelKey, tip) {
    const worker = Math.round(amount * 0.9);
    const svc = amount - worker;
    return `<div class="split">
      <div class="split-bar" aria-hidden="true"><i style="flex:9"></i><i style="flex:1"></i></div>
      <dl class="rows">
        <div><dt><span class="sw sw-a"></span>${B.t(labelKey)} · 90%</dt><dd>${B.money(worker)}</dd></div>
        <div><dt><span class="sw sw-b"></span>${B.t('split.service')} · 10%</dt><dd>${B.money(svc)}</dd></div>
        ${tip ? `<div><dt><span class="sw sw-a"></span>${B.t('taxi.tip')} · 100%</dt><dd>${B.money(tip)}</dd></div>` : ''}
      </dl>
    </div>`;
  };

  B.loading = () => `<div class="loading" role="status"><span class="spinner" aria-hidden="true"></span><span>${B.t('loading')}</span></div>`;

  /* ---------- router ---------- */
  B.screens = {};
  B.actions = {};
  B.inputs = {};
  B.tabs = []; // [[screen, icon, labelKey], ...] set by each app
  let stack = [];
  let cur = null;
  const $ = (id) => document.getElementById(id);

  function render(keepScroll) {
    const top = stack[stack.length - 1];
    if (cur && cur.inst.unmount) cur.inst.unmount();
    if (!keepScroll) B.sheet.close(true);
    const inst = B.screens[top.name](top.params || {});
    const v = $('view');
    v.innerHTML = inst.html;
    if (!keepScroll) v.scrollTop = 0;
    const isRoot = stack.length === 1 && B.tabs.some((x) => x[0] === top.name);
    $('app').classList.toggle('no-tabbar', !isRoot || !!inst.full || !B.tabs.length);
    $('app').classList.toggle('is-full', !!inst.full);
    B.renderTabbar(isRoot ? top.name : null);
    cur = { top, inst };
    if (inst.mount) inst.mount(v);
  }

  B.go = (name, params) => { stack.push({ name, params: params || {} }); render(); };
  B.replace = (name, params) => { stack[stack.length - 1] = { name, params: params || {} }; render(); };
  B.back = () => {
    if (stack.length > 1) { stack.pop(); render(); }
    else if (B.tabs.length && stack[0].name !== B.tabs[0][0]) B.tab(B.tabs[0][0]);
  };
  B.tab = (name) => { stack = [{ name, params: {} }]; render(); };
  B.reset = (list) => { stack = list; render(); };
  B.refresh = () => {
    if (!stack.length) return;
    const v = $('view');
    const y = v.scrollTop;
    render(true);
    v.scrollTop = y;
  };
  B.current = () => cur;
  B.badges = {}; // tab name → bool

  B.renderTabbar = function (active) {
    const bar = $('tabbar');
    if (!bar) return;
    if (active === undefined) active = cur && stack.length === 1 ? cur.top.name : null;
    bar.innerHTML = B.tabs.map(([id, icon, key]) => `
      <button class="tab ${active === id ? 'on' : ''}" data-act="tab" data-tab="${id}" ${active === id ? 'aria-current="page"' : ''}>
        ${B.ic(icon)}<span>${B.t(key)}</span>${B.badges[id] ? '<i class="dot-badge" aria-hidden="true"></i>' : ''}
      </button>`).join('');
    bar.style.gridTemplateColumns = `repeat(${B.tabs.length || 1}, 1fr)`;
  };

  /* ---------- delegation ---------- */
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    const fn = B.actions[el.dataset.act];
    if (fn) fn(el, e);
  });
  document.addEventListener('input', (e) => {
    const el = e.target.closest('[data-in]');
    if (!el) return;
    const fn = B.inputs[el.dataset.in];
    if (fn) fn(el, e);
  });
  document.addEventListener('change', (e) => {
    const el = e.target.closest('[data-change]');
    if (!el) return;
    const fn = B.inputs[el.dataset.change];
    if (fn) fn(el, e);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') B.sheet.close();
  });

  B.actions.back = () => B.back();
  B.actions.tab = (el) => B.tab(el.dataset.tab);
  B.actions.go = (el) => B.go(el.dataset.to, Object.assign({}, el.dataset));
  B.actions.soon = () => B.toast(B.t('soon.toast'));

  /* ---------- sheet ---------- */
  B.sheet = {
    onClose: null,
    open(html, opts) {
      opts = opts || {};
      const layer = $('sheet-layer');
      layer.innerHTML = `<div class="sheet-backdrop" data-act="sheet-close"></div>
        <div class="sheet" role="dialog" aria-modal="true" aria-label="${B.esc(opts.label || '')}"><div class="grab" aria-hidden="true"></div>${html}</div>`;
      layer.hidden = false;
      B.sheet.onClose = opts.onClose || null;
      requestAnimationFrame(() => layer.classList.add('open'));
      if (opts.focus) setTimeout(() => { const f = layer.querySelector(opts.focus); if (f) f.focus(); }, 80);
    },
    close(silent) {
      const layer = $('sheet-layer');
      if (!layer || layer.hidden) return;
      layer.classList.remove('open');
      layer.hidden = true;
      layer.innerHTML = '';
      const cb = B.sheet.onClose;
      B.sheet.onClose = null;
      if (cb && !silent) cb();
    },
    isOpen: () => !$('sheet-layer').hidden,
  };
  B.actions['sheet-close'] = () => B.sheet.close();

  B.confirm = function (title, text, yesLabel, onYes, danger) {
    B.sheet.open(`<div class="sheet-body">
        <h3 class="sheet-title">${title}</h3>
        ${text ? `<p class="muted">${text}</p>` : ''}
        <div class="btn-row">
          <button class="btn btn-soft" data-act="sheet-close">${B.t('no')}</button>
          <button class="btn ${danger ? 'btn-bad' : 'btn-primary'}" data-act="confirm-yes">${yesLabel}</button>
        </div>
      </div>`, { label: title });
    B.actions['confirm-yes'] = () => { B.sheet.close(true); onYes(); };
  };

  // Shows a phone number to call (and a tel: link that opens the phone app).
  B.callSheet = function (name, phone) {
    if (!phone) return B.toast(B.t('call.none'));
    B.sheet.open(`<div class="sheet-body">
        <h3 class="sheet-title">${B.esc(name)}</h3>
        <p class="phone-big" id="call-num">${B.esc(B.phone(phone))}</p>
        <div class="btn-row">
          <button class="btn btn-soft" data-act="call-copy">${B.t('copy')}</button>
          <a class="btn btn-primary" href="tel:${B.esc(phone.replace(/\s/g, ''))}">${B.ic('phone')}<span>${B.t('taxi.call')}</span></a>
        </div>
      </div>`, { label: name });
    B.actions['call-copy'] = () => B.copy(phone);
  };

  /* ---------- toast ---------- */
  let toastTimer;
  B.toast = function (msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
  };

  B.copy = function (text, okMsg) {
    const done = () => B.toast(okMsg || B.t('copied'));
    try {
      navigator.clipboard.writeText(text).then(done, () => B.toast(text));
    } catch (e) {
      B.toast(text);
    }
  };

  // Short sound for new orders (restaurants and drivers keep the app open).
  B.beep = function () {
    try {
      const ctx = B._audio || (B._audio = new (window.AudioContext || window.webkitAudioContext)());
      [0, 0.18].forEach((d) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.frequency.value = 880;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + d);
        g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + d + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d + 0.15);
        o.connect(g).connect(ctx.destination);
        o.start(ctx.currentTime + d);
        o.stop(ctx.currentTime + d + 0.16);
      });
      if (navigator.vibrate) navigator.vibrate([120, 60, 120]);
    } catch (e) { /* no audio */ }
  };

  /* ---------- theme & language ---------- */
  let themeSet = false;
  B.applyTheme = function () {
    const r = document.documentElement;
    const th = B.state.theme;
    if (th === 'system') {
      if (themeSet) { r.removeAttribute('data-theme'); themeSet = false; }
    } else {
      r.setAttribute('data-theme', th);
      themeSet = true;
    }
  };
  B.applyLang = function () {
    document.documentElement.lang = B.state.lang === 'ru' ? 'ru' : 'kk';
  };

  /* ---------- ticker & live refresh ---------- */
  setInterval(() => {
    if (cur && cur.inst.tick) cur.inst.tick();
  }, 1000);
  if (B.bus) {
    // Screens hear about changes after the data caches have taken them in (next microtask).
    const later = (fn) => Promise.resolve().then(fn);
    B.bus.on('order', (o) => later(() => { if (cur && cur.inst.onOrder) cur.inst.onOrder(o); }));
    B.bus.on('loc', (l) => later(() => { if (cur && cur.inst.onLoc) cur.inst.onLoc(l); }));
    B.bus.on('offers', () => later(() => { if (cur && cur.inst.onOffers) cur.inst.onOffers(); }));
  }

  B.start = function (first) {
    B.applyTheme();
    B.applyLang();
    stack = [{ name: first, params: {} }];
    render();
  };
})();
