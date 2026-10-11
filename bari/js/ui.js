/* Бәрі — icons, router, event delegation, sheets, toasts, live ticker. */
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
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-7 10-9"/>',
    hand: '<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L3.5 14a1.5 1.5 0 0 1 2.4-1.8L7 13.5"/>',
    shop: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9h16v2a3 3 0 0 1-5.3 2 3 3 0 0 1-5.4 0A3 3 0 0 1 4 11z"/><path d="M5 13v7h14v-7"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  };
  B.ic = (name, cls) => `<svg class="ic${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${P[name] || ''}</svg>`;

  // Brand mark: the "қошқар мүйіз" (ram's horn) motif of Kazakh ornament.
  B.logo = (cls) => `<svg class="logo${cls ? ' ' + cls : ''}" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect width="32" height="32" rx="9" class="logo-bg"/>
    <path class="logo-orn" d="M16 25v-9m0 0c0-4.6-3.3-7.4-7-7.4-2.6 0-4.3 1.9-4.3 4 0 1.9 1.4 3.3 3.2 3.3 1.5 0 2.6-1.1 2.6-2.4M16 16c0-4.6 3.3-7.4 7-7.4 2.6 0 4.3 1.9 4.3 4 0 1.9-1.4 3.3-3.2 3.3-1.5 0-2.6-1.1-2.6-2.4"/>
  </svg>`;

  /* ---------- shared fragments ---------- */
  B.topbar = (title, right) => `<header class="topbar">
      <button class="icon-btn" data-act="back" aria-label="${B.t('back')}">${B.ic('back')}</button>
      <h1 class="topbar-title">${title}</h1>
      <div class="topbar-right">${right || ''}</div>
    </header>`;

  B.cartBtn = function () {
    const n = B.cartCount();
    return `<button class="icon-btn cart-btn" data-act="go" data-to="cart" aria-label="${B.t('cart')}">${B.ic('bag')}${n ? `<span class="count">${n}</span>` : ''}</button>`;
  };

  B.plate = (p) => `<span class="plate" aria-label="${B.esc(p.num + ' ' + p.reg)}"><span class="plate-kz" aria-hidden="true"><i></i>KZ</span><span class="plate-num">${B.esc(p.num)}</span><span class="plate-reg">${B.esc(p.reg)}</span></span>`;

  B.avatar = (name, h) => `<span class="avatar" style="--h:${h}" aria-hidden="true">${B.esc((name || '?').trim()[0] || '?')}</span>`;

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

  /* ---------- router ---------- */
  B.screens = {};
  B.actions = {};
  B.inputs = {};
  let stack = [{ name: 'home', params: {} }];
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
    const isRoot = stack.length === 1;
    $('app').classList.toggle('no-tabbar', !isRoot || !!inst.full);
    $('app').classList.toggle('is-full', !!inst.full);
    renderTabbar(isRoot ? top.name : null);
    cur = { top, inst };
    if (inst.mount) inst.mount(v);
  }

  B.go = (name, params) => { stack.push({ name, params: params || {} }); render(); };
  B.replace = (name, params) => { stack[stack.length - 1] = { name, params: params || {} }; render(); };
  B.back = () => {
    if (stack.length > 1) { stack.pop(); render(); }
    else if (stack[0].name !== 'home') B.tab('home');
  };
  B.tab = (name) => { stack = [{ name, params: {} }]; render(); };
  B.reset = (list) => { stack = list; render(); };
  B.refresh = () => {
    const v = $('view');
    const y = v.scrollTop;
    render(true);
    v.scrollTop = y;
  };
  B.current = () => cur;

  const TABS = [['home', 'home', 'nav.home'], ['orders', 'receipt', 'nav.orders'], ['together', 'heart', 'nav.together'], ['profile', 'user', 'nav.profile']];
  function renderTabbar(active) {
    const n = B.activeOrders().length;
    $('tabbar').innerHTML = TABS.map(([id, icon, key]) => `
      <button class="tab ${active === id ? 'on' : ''}" data-act="tab" data-tab="${id}" ${active === id ? 'aria-current="page"' : ''}>
        ${B.ic(icon)}<span>${B.t(key)}</span>${id === 'orders' && n ? `<i class="dot-badge" aria-label="${n}"></i>` : ''}
      </button>`).join('');
  }

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

  /* ---------- toast ---------- */
  let toastTimer;
  B.toast = function (msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
  };

  B.copy = function (text, okMsg) {
    const done = () => B.toast(okMsg || B.t('copied'));
    try {
      navigator.clipboard.writeText(text).then(done, () => B.toast(text));
    } catch (e) {
      B.toast(text);
    }
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

  /* ---------- live ticker ---------- */
  setInterval(() => {
    let changed = false;
    B.state.orders.forEach((o) => {
      if (o.notified) return;
      const st = B.status(o);
      if (!st.done) return;
      o.notified = true;
      changed = true;
      if (st.key === 'done') B.toast(B.t('notify.' + B.textType(o)));
    });
    if (changed) {
      B.save();
      renderTabbar(stack.length === 1 ? stack[0].name : null);
    }
    if (cur && cur.inst.tick) cur.inst.tick();
  }, 1000);

  B.boot = function () {
    B.applyTheme();
    B.applyLang();
    // Orders that finished while the app was closed should not toast on open.
    B.state.orders.forEach((o) => { if (B.status(o).done) o.notified = true; });
    render();
  };
})();
