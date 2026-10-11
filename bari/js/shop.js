/* Бәрі — food, grocery and pharmacy: venues from the server, cart, checkout, live tracking. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);

  /* ---------- venue data ---------- */
  const cache = { lists: {}, detail: {} };
  B.venues = {
    async list(type) {
      const key = type || 'all';
      cache.lists[key] = await B.api.get('/api/venues' + (type ? '?type=' + type : ''));
      return cache.lists[key];
    },
    cached: (type) => cache.lists[type || 'all'],
    async get(id) {
      cache.detail[id] = await B.api.get('/api/venues/' + id);
      return cache.detail[id];
    },
    cachedOne: (id) => cache.detail[id],
  };

  /* ---------- shared fragments ---------- */
  const catName = (c) => { const x = D.cats.find((y) => y.id === c); return x ? L_(x.n) : ''; };

  // A restaurant card like in food delivery apps: cover, delivery time, name, rating, price of delivery.
  B.restCard = function (v) {
    const cats = (v.cats || []).map(catName).filter(Boolean).join(' · ');
    const deal = v.box && v.box.old_price ? Math.round((1 - v.box.price / v.box.old_price) * 100) : 0;
    return `<button class="rest${v.is_open ? '' : ' closed'}" data-act="go" data-to="store" data-id="${v.id}">
        <span class="cover rest-cover" style="--h:${v.hue}" aria-hidden="true">
          <span class="cover-e">${v.emoji}</span>
          <span class="rest-time">${v.is_open ? `${v.eta[0]}–${v.eta[1]} ${t('min')}` : t('venue.closed')}</span>
          ${deal ? `<span class="rest-deal">−${deal}% ${t('deal.evening')}</span>` : ''}
        </span>
        <span class="rest-body">
          <span class="rest-name">${B.esc(B.N(v))}${v.local ? `<span class="tag tag-local">${t('local')}</span>` : ''}</span>
          <span class="meta">${B.ic('star', 'ic-star')}<b>${B.dec(v.rating, 1)}</b>${cats ? ` · ${cats}` : ''}</span>
          <span class="meta muted">${t('delivery')} ${v.delivery_fee ? B.money(v.delivery_fee) : t('free')} · ${t('rest.min', { price: B.money(v.min_order) })}</span>
        </span>
      </button>`;
  };

  function itemCtl(it, disabled) {
    const q = B.cartQty(it.id);
    if (disabled) return '';
    return q
      ? `<span class="stepper"><button data-act="dec" data-id="${it.id}" aria-label="${t('less')}">${B.ic('minus')}</button><span class="q" aria-live="polite">${q}</span><button data-act="inc" data-id="${it.id}" aria-label="${t('more')}">${B.ic('plus')}</button></span>`
      : `<button class="add-btn" data-act="inc" data-id="${it.id}" aria-label="${t('add')}: ${B.esc(B.N(it))}">${B.ic('plus')}</button>`;
  }

  function cartBar(venueId) {
    const c = B.state.cart;
    if (!c || c.venue.id !== venueId || !B.cartCount()) return '';
    return `<div class="cartbar-wrap"><button class="cartbar" data-act="go" data-to="cart">
        <span class="cartbar-n">${B.cartCount()}</span><span>${t('cart.open')}</span><b>${B.money(B.cartSubtotal())}</b>
      </button></div>`;
  }

  /* ---------- cart logic ---------- */
  const snapVenue = (v) => ({ id: v.id, type: v.type, name: v.name, name_ru: v.name_ru, emoji: v.emoji, hue: v.hue, eta: v.eta, delivery_fee: v.delivery_fee, min_order: v.min_order, lat: v.lat, lng: v.lng });

  B.cartChange = function (venue, it, d) {
    const S = B.state;
    if (d > 0 && S.cart && S.cart.venue.id !== venue.id && B.cartCount() > 0) {
      B.confirm(t('cart.other.q'), t('cart.other.text'), t('cart.other.yes'), () => {
        S.cart = null;
        B.cartChange(venue, it, d);
      });
      return;
    }
    if (!S.cart) S.cart = { venue: snapVenue(venue), items: {} };
    const line = S.cart.items[it.id] || { q: 0, name: it.name, name_ru: it.name_ru, price: it.price, emoji: it.emoji, stock: it.stock };
    const next = line.q + d;
    if (it.stock != null && next > it.stock) return B.toast(t('box.limit', { n: it.stock }));
    line.q = next;
    if (next > 0) S.cart.items[it.id] = line;
    else delete S.cart.items[it.id];
    if (!B.cartCount()) S.cart = null;
    B.save();
    const cur = B.current();
    if (cur && cur.inst.onCart) cur.inst.onCart(it.id);
    else B.refresh();
  };

  /* ---------- food: restaurants by category ---------- */
  const FILTERS = ['free', 'top', 'local', 'deal'];
  B.screens.food = function (p) {
    const S = B.state;
    let cat = p.cat || 'all';
    let q = '';
    const on = new Set();
    let list = B.venues.cached('food') || null;

    const pass = (v) => {
      if (cat !== 'all' && !v.cats.includes(cat)) return false;
      if (on.has('free') && v.delivery_fee) return false;
      if (on.has('top') && v.rating < 4.8) return false;
      if (on.has('local') && !v.local) return false;
      if (on.has('deal') && !v.box) return false;
      const ql = q.trim().toLowerCase();
      return !ql || [v.name, v.name_ru, ...(v.cats || []).map(catName)].some((x) => x && x.toLowerCase().includes(ql));
    };
    const renderList = () => {
      const el = document.getElementById('food-list');
      const head = document.getElementById('food-count');
      if (!el) return;
      if (!list) { el.innerHTML = B.loading(); return; }
      const arr = list.filter(pass);
      if (head) head.textContent = arr.length ? String(arr.length) : '';
      el.innerHTML = arr.length ? arr.map(B.restCard).join('') : `<div class="empty"><span class="empty-e" aria-hidden="true">🔎</span><p class="muted">${t('food.none')}</p></div>`;
    };
    const destLine = () => {
      const d = S.dest || B.addressOf('home');
      return d ? `<b>${B.esc(L_(d.n))}</b>${d.a ? `<em>${B.esc(L_(d.a))}</em>` : ''}` : `<b>${t('cart.address.pick')}</b>`;
    };

    B.actions['food-cat'] = (el) => {
      cat = el.dataset.cat === cat ? 'all' : el.dataset.cat;
      document.querySelectorAll('[data-act="food-cat"]').forEach((b) => {
        const sel = b.dataset.cat === cat;
        b.classList.toggle('on', sel);
        b.setAttribute('aria-pressed', sel);
      });
      const h = document.getElementById('food-title');
      if (h) h.textContent = cat === 'all' ? t('food.all') : catName(cat);
      renderList();
    };
    B.actions['food-filter'] = (el) => {
      const f = el.dataset.f;
      if (on.has(f)) on.delete(f); else on.add(f);
      el.classList.toggle('on', on.has(f));
      el.setAttribute('aria-pressed', on.has(f));
      renderList();
    };
    B.actions['food-dest'] = () => B.addressSheet({
      title: t('cart.address'), gps: true,
      onPick: (pl) => {
        S.dest = { n: L_(pl.n), a: L_(pl.a) || '', lat: pl.lat, lng: pl.lng };
        B.save();
        const el = document.getElementById('food-dest');
        if (el) el.innerHTML = destLine();
      },
    });
    B.inputs['food-q'] = (el) => { q = el.value; renderList(); };

    return {
      html: `<div class="screen food">
          ${B.topbar(t('svc.food'), B.cartBtn())}
          <button class="dest-row" data-act="food-dest">
            ${B.ic('pin')}<span class="lr-text"><small>${t('food.deliver.to')}</small><span id="food-dest" class="dest-text">${destLine()}</span></span>${B.ic('down', 'chev')}
          </button>
          <label class="search">${B.ic('search')}<span class="sr-only">${t('food.search')}</span>
            <input id="food-q" data-in="food-q" type="search" placeholder="${t('food.search')}" autocomplete="off">
          </label>
          <div class="cat-tiles" role="group" aria-label="${t('food.cats')}">
            ${D.cats.filter((c) => c.id !== 'all').map((c) => `<button class="cat-tile${c.id === cat ? ' on' : ''}" aria-pressed="${c.id === cat}" data-act="food-cat" data-cat="${c.id}">
                <span class="cat-e" aria-hidden="true">${c.e}</span><span>${L_(c.n)}</span>
              </button>`).join('')}
          </div>
          <div class="chips hscroll-chips">
            ${FILTERS.map((f) => `<button class="chip" aria-pressed="false" data-act="food-filter" data-f="${f}">${t('filter.' + f)}</button>`).join('')}
          </div>
          <section class="block">
            <div class="block-head row"><h2 class="h2" id="food-title">${cat === 'all' ? t('food.all') : catName(cat)}</h2><span class="muted small" id="food-count"></span></div>
            <div class="rest-list" id="food-list"></div>
          </section>
        </div>`,
      mount() {
        renderList();
        B.venues.list('food').then((l) => { list = l; renderList(); }).catch((e) => {
          const el = document.getElementById('food-list');
          if (el) el.innerHTML = `<p class="empty-line">${B.errText(e)}</p>`;
        });
      },
      onCart() {
        const tb = document.querySelector('.topbar-right');
        if (tb) tb.innerHTML = B.cartBtn();
      },
    };
  };

  /* ---------- store (restaurant / market / pharmacy) ---------- */
  B.screens.store = function (p) {
    const id = Number(p.id);
    let v = B.venues.cachedOne(id) || null;

    const itemRow = (it, closed) => `<div class="item">
        <span class="cover item-pic" style="--h:${v.hue}" aria-hidden="true">${it.emoji}</span>
        <span class="item-body">
          <b class="item-name">${B.esc(B.N(it))}</b>
          ${it.descr ? `<span class="item-desc">${B.esc(B.N(it, 'descr'))}</span>` : ''}
          <span class="item-price">${B.money(it.price)}${it.old_price ? ` <s>${B.money(it.old_price)}</s>` : ''}</span>
        </span>
        <span class="item-ctl" data-ctl="${it.id}">${itemCtl(it, closed)}</span>
      </div>`;
    const prodCard = (it, closed) => `<div class="prod">
        <span class="cover prod-pic" style="--h:${v.hue}" aria-hidden="true">${it.emoji}</span>
        <b class="prod-price">${B.money(it.price)}</b>
        <span class="prod-name">${B.esc(B.N(it))}</span>
        <span class="prod-unit">${B.esc(B.N(it, 'descr'))}</span>
        <span class="item-ctl" data-ctl="${it.id}">${itemCtl(it, closed)}</span>
      </div>`;

    function body() {
      if (!v) return B.loading();
      const closed = !v.is_open;
      const boxes = v.items.filter((it) => it.old_price);
      const groups = v.sections.map((sec) => ({ sec, items: v.items.filter((it) => it.section_id === sec.id && !it.old_price) })).filter((g) => g.items.length);
      const loose = v.items.filter((it) => !it.section_id && !it.old_price);
      if (loose.length) groups.push({ sec: { id: 0, name: t('menu.other'), name_ru: t('menu.other') }, items: loose });
      const row = v.grid ? prodCard : itemRow;
      return `<div class="store-head">
            <h1 class="store-name">${B.esc(B.N(v))}</h1>
            <p class="meta">${B.ic('star', 'ic-star')}${B.dec(v.rating, 1)} · ${v.eta[0]}–${v.eta[1]} ${t('min')} · ${t('delivery')} ${v.delivery_fee ? B.money(v.delivery_fee) : t('free')}</p>
            ${v.address ? `<p class="meta muted">${B.ic('pin', 'ic-star')}${B.esc(v.address)}</p>` : ''}
            <div class="tags">
              ${v.local ? `<span class="tag tag-local">${t('local')}</span>` : ''}
              <span class="tag">${t('rest.min', { price: B.money(v.min_order) })}</span>
            </div>
            ${B.N(v, 'note') ? `<p class="note">${B.esc(B.N(v, 'note'))}</p>` : ''}
            ${closed ? `<p class="banner-warn">${t('venue.closed.long')}</p>` : ''}
          </div>
          ${groups.length > 1 ? `<nav class="chips hscroll-chips sec-nav" aria-label="${t('menu')}">${groups.map((g, i) => `<button class="chip" data-act="sec" data-i="${i}">${B.esc(B.N(g.sec))}</button>`).join('')}</nav>` : ''}
          ${boxes.length ? `<section class="menu-sec box-sec">
              <div class="block-head"><h2 class="h2">${t('surplus.title')}</h2><p class="muted small">${t('surplus.why')}</p></div>
              <div class="menu-list">${boxes.map((it) => itemRow(it, closed)).join('')}</div>
            </section>` : ''}
          ${groups.map((g, i) => `<section class="menu-sec" id="sec-${i}">
              <h2 class="h2">${B.esc(B.N(g.sec))}</h2>
              <div class="${v.grid ? 'prod-grid' : 'menu-list'}">${g.items.map((it) => row(it, closed)).join('')}</div>
            </section>`).join('')}
          ${!v.items.length ? `<p class="empty-line">${t('menu.empty')}</p>` : ''}
          <div id="cartbar-slot">${cartBar(v.id)}</div>`;
    }

    B.actions.sec = (el) => {
      const target = document.getElementById('sec-' + el.dataset.i);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const findItem = (itemId) => v && v.items.find((x) => x.id === Number(itemId));
    B.actions.inc = (el) => { const it = findItem(el.dataset.id); if (it) B.cartChange(v, it, 1); };
    B.actions.dec = (el) => { const it = findItem(el.dataset.id); if (it) B.cartChange(v, it, -1); };

    const hero = (vv) => `<div class="cover store-hero" style="--h:${vv ? vv.hue : 190}">
        <button class="icon-btn on-hero" data-act="back" aria-label="${t('back')}">${B.ic('back')}</button>
        <span class="store-hero-right">${B.cartBtn()}</span>
        <span class="store-emoji" aria-hidden="true">${vv ? vv.emoji : ''}</span>
      </div>`;

    return {
      html: `<div class="screen store" id="store-root">${hero(v)}<div id="store-body" class="stack-16">${body()}</div></div>`,
      mount() {
        B.venues.get(id).then((d) => {
          v = d;
          const root = document.getElementById('store-root');
          if (root) root.innerHTML = hero(v) + `<div id="store-body" class="stack-16">${body()}</div>`;
        }).catch((e) => {
          const b = document.getElementById('store-body');
          if (b) b.innerHTML = `<p class="empty-line">${B.errText(e)}</p>`;
        });
      },
      onCart(itemId) {
        const it = findItem(itemId);
        if (it) document.querySelectorAll(`[data-ctl="${itemId}"]`).forEach((el) => { el.innerHTML = itemCtl(it, !v.is_open); });
        const slot = document.getElementById('cartbar-slot');
        if (slot) slot.innerHTML = cartBar(v.id);
        const hr = document.querySelector('.store-hero-right');
        if (hr) hr.innerHTML = B.cartBtn();
      },
    };
  };

  /* ---------- cart & checkout ---------- */
  let cartComment = '';
  B.inputs['ct-comment'] = (el) => { cartComment = el.value; };

  B.screens.cart = function () {
    const S = B.state;
    const c = S.cart;
    if (!c || !B.cartCount()) {
      return {
        html: `<div class="screen">
            ${B.topbar(t('cart'))}
            <div class="empty">
              <span class="empty-e" aria-hidden="true">🧺</span>
              <h2 class="h2">${t('cart.empty')}</h2>
              <p class="muted">${t('cart.empty.sub')}</p>
              <button class="btn btn-primary" data-act="go" data-to="food">${t('cart.empty.cta')}</button>
            </div>
          </div>`,
      };
    }
    const v = c.venue;
    const sub = B.cartSubtotal();
    const base = sub + v.delivery_fee;
    const don = S.roundUp ? B.roundUpAmount(base) : 0;
    const short = v.min_order - sub;
    if (!S.dest) S.dest = B.addressOf('home') || null;
    const dest = S.dest;
    let busy = false;

    const changeLine = (id, d) => {
      const line = c.items[id];
      if (!line) return;
      B.cartChange(v, { id: Number(id), name: line.name, name_ru: line.name_ru, price: line.price, emoji: line.emoji, stock: line.stock }, d);
    };
    B.actions.inc = (el) => changeLine(el.dataset.id, 1);
    B.actions.dec = (el) => changeLine(el.dataset.id, -1);
    B.actions['ct-addr'] = (el) => {
      const pl = B.addressOf(el.dataset.id);
      if (pl) { S.dest = pl; B.save(); B.refresh(); }
    };
    B.actions['ct-addr-pick'] = () => B.addressSheet({
      title: t('cart.address'), gps: true,
      onPick: (pl) => { S.dest = pl; B.save(); B.refresh(); },
    });
    B.actions['ct-round'] = () => { S.roundUp = !S.roundUp; B.save(); B.refresh(); };
    B.actions['ct-clear'] = () => B.confirm(t('cart.clear.q'), '', t('cart.clear'), () => {
      S.cart = null;
      B.save();
      B.refresh();
    }, true);
    B.actions['ct-place'] = () => {
      if (sub < v.min_order || busy) return;
      if (!S.dest) return B.actions['ct-addr-pick']();
      B.requireLogin(async () => {
        busy = true;
        const btn = document.querySelector('[data-act="ct-place"]');
        if (btn) btn.disabled = true;
        try {
          const o = await B.api.post('/api/orders/delivery', {
            venue_id: v.id,
            items: Object.entries(c.items).map(([id, l]) => ({ id: Number(id), q: l.q })),
            to: B.toPoint(S.dest), pay: 'cash', comment: cartComment.trim(), round_up: S.roundUp,
          });
          B.orders.put(o);
          S.cart = null;
          cartComment = '';
          B.save();
          B.reset([{ name: 'home', params: {} }, { name: 'order', params: { id: o.id } }]);
          B.toast(t('order.placed'));
        } catch (e) {
          busy = false;
          if (btn) btn.disabled = false;
          B.fail(e);
        }
      }, t('login.why.order'));
    };

    const saved = ['home', 'work'].filter((k) => B.addressOf(k));
    const same = (a, b) => !!(a && b && a.lat === b.lat && a.lng === b.lng);
    return {
      html: `<div class="screen cart">
          ${B.topbar(t('cart'), `<button class="icon-btn" data-act="ct-clear" aria-label="${t('cart.clear')}">${B.ic('trash')}</button>`)}
          <button class="store-line" data-act="go" data-to="store" data-id="${v.id}">
            <span class="cover mini-cover" style="--h:${v.hue}" aria-hidden="true">${v.emoji}</span>
            <span class="lr-text"><b>${B.esc(B.N(v))}</b><em>${v.eta[0]}–${v.eta[1]} ${t('min')}</em></span>
            ${B.ic('chev', 'chev')}
          </button>
          <div class="card lines">
            ${Object.entries(c.items).map(([id, l]) => `<div class="line">
                <span class="line-e" aria-hidden="true">${l.emoji}</span>
                <span class="lr-text"><b>${B.esc(B.N(l))}</b><em>${B.money(l.price)}</em></span>
                <span class="item-ctl"><span class="stepper"><button data-act="dec" data-id="${id}" aria-label="${t('less')}">${B.ic('minus')}</button><span class="q">${l.q}</span><button data-act="inc" data-id="${id}" aria-label="${t('more')}">${B.ic('plus')}</button></span></span>
                <b class="line-sum">${B.money(l.price * l.q)}</b>
              </div>`).join('')}
          </div>

          <section class="block">
            <h2 class="label">${t('cart.address')}</h2>
            ${saved.length ? `<div class="chips">${saved.map((k) => `<button class="chip${same(dest, B.addressOf(k)) ? ' on' : ''}" data-act="ct-addr" data-id="${k}">${B.ic(k === 'home' ? 'home' : 'briefcase')}${t('addr.' + k)}</button>`).join('')}</div>` : ''}
            <button class="toggle-row" data-act="ct-addr-pick">
              <span class="icon-box">${B.ic('pin')}</span>
              <span class="lr-text">${dest ? `<b>${B.esc(L_(dest.n))}</b><em>${B.esc(L_(dest.a) || '')}</em>` : `<b>${t('cart.address.pick')}</b><em>${t('cart.address.none')}</em>`}</span>
              ${B.ic('chev', 'chev')}
            </button>
          </section>

          <section class="block">
            <h2 class="label">${t('pay')}</h2>
            <div class="seg" role="radiogroup" aria-label="${t('pay')}">
              <button class="seg-btn on" role="radio" aria-checked="true">${B.ic('cash')}<span>${t('pay.cash')}</span></button>
              <button class="seg-btn" role="radio" aria-checked="false" data-act="soon-card">${B.ic('card')}<span>${t('pay.card')}</span><span class="tag tag-soon-inline">${t('soon')}</span></button>
            </div>
          </section>

          <label class="field"><span>${t('cart.comment')}</span><input id="ct-comment" data-in="ct-comment" value="${B.esc(cartComment)}" placeholder="${t('cart.comment.ph')}" maxlength="120" autocomplete="off"></label>

          <button class="toggle-row" role="switch" aria-checked="${S.roundUp}" data-act="ct-round">
            <span class="icon-box icon-heart">${B.ic('heart')}</span>
            <span class="lr-text"><b>${t('cart.roundup')}</b><em>${S.roundUp && don ? t('cart.roundup.sub', { price: B.money(don) }) : t('cart.roundup.off')}</em></span>
            <span class="switch${S.roundUp ? ' on' : ''}" aria-hidden="true"><i></i></span>
          </button>

          <dl class="rows totals">
            <div><dt>${t('cart.subtotal')}</dt><dd>${B.money(sub)}</dd></div>
            <div><dt>${t('delivery')}</dt><dd>${v.delivery_fee ? B.money(v.delivery_fee) : t('free')}</dd></div>
            ${don ? `<div><dt>${t('cart.donation')}</dt><dd>${B.money(don)}</dd></div>` : ''}
            <div class="total"><dt>${t('total')}</dt><dd>${B.money(base + don)}</dd></div>
          </dl>
          <p class="muted small">${t('cart.fair')}</p>

          <div class="sticky-cta">
            ${short > 0 ? `<p class="hint-line">${t('cart.minOrder', { price: B.money(short) })}</p>` : ''}
            <button class="btn btn-primary btn-block btn-lg" data-act="ct-place" ${short > 0 ? 'disabled' : ''}>
              <span>${t('cart.place')}</span><span class="btn-price">${B.money(base + don)}</span>
            </button>
          </div>
        </div>`,
    };
  };
  B.actions['soon-card'] = () => B.toast(t('pay.card.soon'));

  /* ---------- order: live tracking or receipt ---------- */
  const STEPS = ['new', 'cooking', 'ready', 'delivering', 'done'];

  B.screens.order = function (p) {
    const id = Number(p.id);
    let map = null, courier = null, key = '';
    const rate = { n: 5 };
    const get = () => B.orders.get(id);

    function liveHTML(o) {
      const idx = STEPS.indexOf(o.status);
      const elapsed = (Date.now() - o.created_at) / 60000;
      const w = o.worker;
      const left = o.status === 'delivering' && w && w.lat != null
        ? B.minutesTo({ lat: w.lat, lng: w.lng }, o.to)
        : o.venue ? Math.max(1, Math.round(o.venue.eta_max - elapsed)) : null;
      return `<h2 class="ride-title">${B.statusText(o)}</h2>
        <p class="ride-sub">${o.status === 'cancelled' ? B.esc(B.cancelText(o)) : B.isActive(o) && left ? t('track.eta', { n: left }) : ''}</p>
        ${o.status === 'cancelled' ? '' : `<ol class="steps">${STEPS.map((k, i) => {
          const state = o.status === 'done' || i < idx ? 'done' : i === idx ? 'now' : '';
          return `<li class="${state}"><span class="step-dot" aria-hidden="true">${state === 'done' ? B.ic('check') : ''}</span><span>${t('step.delivery.' + k)}</span></li>`;
        }).join('')}</ol>`}`;
    }

    function workerCard(o) {
      const w = o.worker;
      if (!w) return o.kind === 'delivery' && B.isActive(o) ? `<div class="card driver-card"><p class="muted">${t('track.nocourier')}</p></div>` : '';
      return `<div class="card driver-card">
          <div class="driver">${B.avatar(w.name)}<div class="driver-info"><b>${B.esc(w.name)}</b><span class="meta">${B.ic('star', 'ic-star')}${B.dec(w.rating, 2)} · ${w.car_model ? B.esc(w.car_model) : t('veh.' + w.vehicle)}</span></div>${w.car_plate ? B.plate(w.car_plate) : ''}</div>
          ${w.phone ? `<button class="btn btn-soft btn-block" data-act="ord-call">${B.ic('phone')}<span>${t('taxi.call')}</span></button>` : ''}
        </div>`;
    }

    function rateHTML(o) {
      if (o.status !== 'done' || o.stars) return o.stars ? `<p class="meta">${t('order.yourRating')}: ${'★'.repeat(o.stars)}</p>` : '';
      return `<section class="card rate-card">
          <h2 class="h3">${t('order.rate')}</h2>
          <div class="stars" role="radiogroup" aria-label="${t('order.rate')}">
            ${[1, 2, 3, 4, 5].map((n) => `<button class="star${n <= rate.n ? ' on' : ''}" role="radio" aria-checked="${n === rate.n}" aria-label="${n}" data-act="ord-star" data-n="${n}">${B.ic('star')}</button>`).join('')}
          </div>
          <button class="btn btn-primary btn-block" data-act="ord-rate">${t('taxi.rate.send')}</button>
        </section>`;
    }

    function html() {
      const o = get();
      if (!o) return `<div class="screen">${B.topbar('')}${B.orders.loaded ? `<p class="empty-line">${t('notfound')}</p>` : B.loading()}</div>`;
      key = o.status + ':' + (o.worker ? o.worker.id : '') + ':' + (o.stars || 0);
      const ride = o.kind !== 'delivery';
      const tar = ride ? B.tariffOf(o.kind, o.tariff) : null;
      const totals = ride
        ? `<div><dt>${tar ? L_(tar.n) : ''} · ${B.dec(o.km, 1)} ${t('km')}</dt><dd>${B.money(o.price)}</dd></div>
           ${o.tip ? `<div><dt>${t('taxi.tip')}</dt><dd>${B.money(o.tip)}</dd></div>` : ''}`
        : `<div><dt>${t('cart.subtotal')}</dt><dd>${B.money(o.subtotal)}</dd></div>
           <div><dt>${t('delivery')}</dt><dd>${o.delivery_fee ? B.money(o.delivery_fee) : t('free')}</dd></div>
           ${o.donation ? `<div><dt>${t('cart.donation')}</dt><dd>${B.money(o.donation)}</dd></div>` : ''}`;
      return `<div class="screen">
          ${B.topbar(B.esc(B.orderTitle(o)))}
          ${ride
            ? `<div class="receipt-head">
                <span class="receipt-e" aria-hidden="true">${B.orderEmoji(o)}</span>
                <div><h2 class="h2">${B.statusText(o)}</h2><p class="muted small">${B.time(o.created_at)}${o.status === 'cancelled' ? ' · ' + B.esc(B.cancelText(o)) : ''}</p></div>
              </div>
              ${B.isActive(o) ? `<button class="btn btn-primary btn-block" data-act="go" data-to="taxi" data-mode="${o.kind === 'parcel' ? 'courier' : 'taxi'}">${t('order.onmap')}</button>` : ''}`
            : `<section class="card track" id="track-live">${liveHTML(o)}</section>
               <div class="mini-map" id="track-map" aria-label="${t('map')}"></div>`}
          ${ride ? `<ol class="ride-route card"><li><span class="dot dot-from" aria-hidden="true"></span>${B.esc(o.from.n)}</li><li><span class="dot dot-to" aria-hidden="true"></span>${B.esc(o.to.n)}</li></ol>` : ''}
          ${workerCard(o)}
          ${rateHTML(o)}
          ${o.items ? `<section class="block">
              <div class="block-head row"><h2 class="label">${t('order.items')}</h2><span class="muted small">${B.time(o.created_at)}</span></div>
              <div class="card lines">${o.items.map((l) => `<div class="line"><span class="line-e" aria-hidden="true">${l.emoji}</span><span class="lr-text"><b>${B.esc(B.N(l))}</b><em>${l.q} × ${B.money(l.price)}</em></span><b class="line-sum">${B.money(l.price * l.q)}</b></div>`).join('')}</div>
              <p class="muted small">${t('cart.address')}: ${B.esc(o.to.n)}${o.to.a ? ', ' + B.esc(o.to.a) : ''}</p>
            </section>` : ''}
          <dl class="rows totals">
            ${totals}
            <div class="total"><dt>${o.status === 'cancelled' ? t('order.nocharge') : t('total') + ' · ' + t('pay.' + o.pay)}</dt><dd>${B.money(o.status === 'cancelled' ? 0 : o.total)}</dd></div>
          </dl>
          ${o.status === 'cancelled' ? '' : ride ? B.split(o.price, o.kind === 'parcel' ? 'split.courier' : 'split.driver', o.tip) : o.delivery_fee ? `<section class="block"><h2 class="label">${t('order.feeSplit')}</h2>${B.split(o.delivery_fee, 'split.courier')}</section>` : ''}
          ${o.kind === 'delivery' && o.status === 'new' ? `<button class="btn btn-soft-bad btn-block" data-act="ord-cancel">${t('order.cancel')}</button>` : ''}
          ${o.kind === 'delivery' && !B.isActive(o) ? `<button class="btn btn-soft btn-block" data-act="go" data-to="store" data-id="${o.venue.id}">${t('order.again')}</button>` : ''}
        </div>`;
    }

    function placeCourier() {
      const o = get();
      if (!map || !o) return;
      const w = o.worker;
      if (!w || w.lat == null) {
        if (courier) { map.removeLayer(courier); courier = null; }
        return;
      }
      if (!courier) courier = L.marker([w.lat, w.lng], { icon: B.map.car(), interactive: false, keyboard: false }).addTo(map);
      else {
        const prev = courier.getLatLng();
        if (prev.lat !== w.lat || prev.lng !== w.lng) B.map.rotate(courier, B.map.bearing([prev.lat, prev.lng], [w.lat, w.lng]));
        courier.setLatLng([w.lat, w.lng]);
      }
    }

    function mountMap() {
      const o = get();
      const el = document.getElementById('track-map');
      if (!o || !el) return;
      map = B.map.create(el, { zoom: 13, scrollWheelZoom: false });
      B.map.route(map, B.routePts(o.from, o.to));
      L.marker(B.ll(o.from), { icon: B.map.pin('store', o.venue ? o.venue.emoji : '🏪'), interactive: false, keyboard: false }).addTo(map);
      L.marker(B.ll(o.to), { icon: B.map.pin('to'), interactive: false, keyboard: false }).addTo(map);
      placeCourier();
      requestAnimationFrame(() => {
        if (!map) return;
        map.invalidateSize();
        map.fitBounds(L.latLngBounds([B.ll(o.from), B.ll(o.to)]), { padding: [36, 36], maxZoom: 15, animate: false });
      });
    }

    function full() {
      if (map) { map.remove(); map = null; courier = null; }
      const v = document.getElementById('view');
      const y = v.scrollTop;
      v.innerHTML = html();
      v.scrollTop = y;
      mountMap();
    }

    Object.assign(B.actions, {
      'ord-call': () => { const o = get(); if (o && o.worker) B.callSheet(o.worker.name, o.worker.phone); },
      'ord-star': (el) => { rate.n = +el.dataset.n; full(); },
      'ord-rate': async () => {
        try { B.orders.put(await B.api.post(`/api/orders/${id}/rate`, { stars: rate.n, tip: 0 })); full(); B.toast(t('taxi.thanks')); }
        catch (e) { B.fail(e); }
      },
      'ord-cancel': () => B.confirm(t('order.cancel.q'), '', t('taxi.cancel.yes'), async () => {
        try { B.orders.put(await B.api.post(`/api/orders/${id}/cancel`)); full(); }
        catch (e) { B.fail(e); }
      }, true),
    });

    return {
      html: html(),
      mount: mountMap,
      unmount() { if (map) { map.remove(); map = null; courier = null; } },
      onOrder(o) {
        if (o.id !== id) return;
        const k = o.status + ':' + (o.worker ? o.worker.id : '') + ':' + (o.stars || 0);
        if (k !== key) full();
        else placeCourier();
      },
      onOrders: full,
      onLoc(l) { if (l.orderId === id) placeCourier(); },
    };
  };

  B.actions['open-order'] = (el) => {
    const o = B.orders.get(el.dataset.id);
    if (!o) return;
    if (o.kind !== 'delivery' && B.isActive(o)) B.go('taxi', { mode: o.kind === 'parcel' ? 'courier' : 'taxi' });
    else B.go('order', { id: o.id });
  };
})();
