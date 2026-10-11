/* Бәрі — food, grocery and pharmacy: browse, cart, checkout, live tracking. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);

  /* ---------- shared fragments ---------- */
  B.restCard = function (s) {
    const cats = (s.cat || []).map((c) => L_(D.cats.find((x) => x.id === c).n)).join(' · ');
    return `<button class="rest" data-act="go" data-to="store" data-id="${s.id}">
        <span class="cover rest-cover" style="--h:${s.h}" aria-hidden="true"><span class="cover-e">${s.e}</span></span>
        <span class="rest-body">
          <span class="rest-name">${L_(s.n)}${s.local ? `<span class="tag tag-local">${t('local')}</span>` : ''}</span>
          <span class="meta">${B.ic('star', 'ic-star')}${B.dec(s.rating, 1)} · ${s.eta[0]}–${s.eta[1]} ${t('min')} · ${s.fee ? B.money(s.fee) : t('free')}</span>
          ${cats ? `<span class="meta muted">${cats}</span>` : ''}
        </span>
      </button>`;
  };

  B.surplusStrip = function () {
    const boxes = D.stores.filter((s) => s.box);
    return `<div class="hscroll">${boxes.map((s) => `
        <button class="box-card" data-act="go" data-to="store" data-id="${s.id}">
          <span class="cover box-cover" style="--h:${s.h}" aria-hidden="true"><span class="cover-e">${s.e}</span><span class="box-off">−${Math.round((1 - s.box.price / s.box.old) * 100)}%</span></span>
          <span class="box-store">${L_(s.n)}</span>
          <span class="box-name">${L_(s.box.n)}</span>
          <span class="box-price"><b>${B.money(s.box.price)}</b><s>${B.money(s.box.old)}</s></span>
          <span class="meta muted">${t('box.left', { n: s.box.left })}</span>
        </button>`).join('')}</div>`;
  };

  function itemCtl(it) {
    const q = B.state.cart.items[it.id] || 0;
    return q
      ? `<span class="stepper"><button data-act="dec" data-id="${it.id}" aria-label="${t('less')}">${B.ic('minus')}</button><span class="q" aria-live="polite">${q}</span><button data-act="inc" data-id="${it.id}" aria-label="${t('more')}">${B.ic('plus')}</button></span>`
      : `<button class="add-btn" data-act="inc" data-id="${it.id}" aria-label="${t('add')}: ${B.esc(L_(it.n))}">${B.ic('plus')}</button>`;
  }

  function cartBar(storeId) {
    const S = B.state;
    if (S.cart.store !== storeId || !B.cartCount()) return '';
    return `<div class="cartbar-wrap"><button class="cartbar" data-act="go" data-to="cart">
        <span class="cartbar-n">${B.cartCount()}</span><span>${t('cart.open')}</span><b>${B.money(B.cartSubtotal())}</b>
      </button></div>`;
  }

  /* ---------- cart logic ---------- */
  B.cartChange = function (id, d) {
    const S = B.state;
    const it = D.itemById[id];
    if (!it) return;
    const c = S.cart;
    if (d > 0 && c.store && c.store !== it.store && B.cartCount() > 0) {
      B.confirm(t('cart.other.q'), t('cart.other.text'), t('cart.other.yes'), () => {
        S.cart = { store: null, items: {} };
        B.cartChange(id, d);
      });
      return;
    }
    const next = (c.items[id] || 0) + d;
    if (it.box && next > it.left) return B.toast(t('box.limit', { n: it.left }));
    c.store = it.store;
    if (next > 0) c.items[id] = next;
    else delete c.items[id];
    if (!B.cartCount()) c.store = null;
    B.save();
    const cur = B.current();
    if (cur && cur.inst.onCart) cur.inst.onCart(id);
    else B.refresh();
  };
  B.actions.inc = (el) => B.cartChange(el.dataset.id, 1);
  B.actions.dec = (el) => B.cartChange(el.dataset.id, -1);

  /* ---------- food list ---------- */
  B.screens.food = function (p) {
    let cat = p.cat || 'all';
    let q = '';
    const list = () => {
      const ql = q.trim().toLowerCase();
      return D.stores.filter((s) => s.type === 'food').filter((s) => {
        if (cat !== 'all' && !s.cat.includes(cat)) return false;
        if (!ql) return true;
        if (L_(s.n).toLowerCase().includes(ql)) return true;
        return s.sections.some((sec) => sec.items.some((it) => L_(it.n).toLowerCase().includes(ql)));
      });
    };
    const renderList = () => {
      const el = document.getElementById('food-list');
      if (!el) return;
      const arr = list();
      el.innerHTML = arr.length ? arr.map(B.restCard).join('') : `<p class="empty-line">${t('food.none')}</p>`;
    };
    B.actions['food-cat'] = (el) => {
      cat = el.dataset.cat;
      document.querySelectorAll('[data-act="food-cat"]').forEach((b) => {
        const on = b.dataset.cat === cat;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on);
      });
      renderList();
    };
    B.inputs['food-q'] = (el) => { q = el.value; renderList(); };

    return {
      html: `<div class="screen">
          ${B.topbar(t('svc.food'), B.cartBtn())}
          <label class="search">${B.ic('search')}<span class="sr-only">${t('food.search')}</span>
            <input id="food-q" data-in="food-q" type="search" placeholder="${t('food.search')}" autocomplete="off">
          </label>
          <div class="chips hscroll-chips">${D.cats.map((c) => `<button class="chip${c.id === cat ? ' on' : ''}" aria-pressed="${c.id === cat}" data-act="food-cat" data-cat="${c.id}">${c.e ? `<span aria-hidden="true">${c.e}</span>` : ''}${L_(c.n)}</button>`).join('')}</div>
          <section class="block">
            <div class="block-head"><h2 class="h2">${t('surplus.title')}</h2><p class="muted small">${t('surplus.sub')}</p></div>
            ${B.surplusStrip()}
          </section>
          <section class="block">
            <h2 class="h2">${t('food.all')}</h2>
            <div class="rest-list" id="food-list"></div>
          </section>
        </div>`,
      mount: renderList,
      onCart() {
        const tb = document.querySelector('.topbar-right');
        if (tb) tb.innerHTML = B.cartBtn();
      },
    };
  };

  /* ---------- store (restaurant / market / pharmacy) ---------- */
  B.screens.store = function (p) {
    const s = D.storeById[p.id];
    if (!s) return { html: `<div class="screen">${B.topbar('')}<p class="empty-line">${t('notfound')}</p></div>` };
    const itemRow = (it) => `<div class="item">
        <span class="cover item-pic" style="--h:${s.h}" aria-hidden="true">${it.e}</span>
        <span class="item-body">
          <b class="item-name">${L_(it.n)}</b>
          ${it.d ? `<span class="item-desc">${L_(it.d)}</span>` : ''}
          <span class="item-price">${B.money(it.p)}${it.old ? ` <s>${B.money(it.old)}</s>` : ''}</span>
        </span>
        <span class="item-ctl" data-ctl="${it.id}">${itemCtl(it)}</span>
      </div>`;
    const prodCard = (it) => `<div class="prod">
        <span class="cover prod-pic" style="--h:${s.h}" aria-hidden="true">${it.e}</span>
        <b class="prod-price">${B.money(it.p)}</b>
        <span class="prod-name">${L_(it.n)}</span>
        <span class="prod-unit">${L_(it.d)}</span>
        <span class="item-ctl" data-ctl="${it.id}">${itemCtl(it)}</span>
      </div>`;

    B.actions.sec = (el) => {
      const target = document.getElementById('sec-' + el.dataset.i);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return {
      html: `<div class="screen store">
          <div class="cover store-hero" style="--h:${s.h}">
            <button class="icon-btn on-hero" data-act="back" aria-label="${t('back')}">${B.ic('back')}</button>
            <span class="store-hero-right">${B.cartBtn()}</span>
            <span class="store-emoji" aria-hidden="true">${s.e}</span>
          </div>
          <div class="store-head">
            <h1 class="store-name">${L_(s.n)}</h1>
            <p class="meta">${B.ic('star', 'ic-star')}${B.dec(s.rating, 1)} · ${s.eta[0]}–${s.eta[1]} ${t('min')} · ${t('delivery')} ${s.fee ? B.money(s.fee) : t('free')}</p>
            <div class="tags">
              ${s.local ? `<span class="tag tag-local">${t('local')}</span>` : ''}
              <span class="tag">${t('rest.min', { price: B.money(s.minOrder) })}</span>
            </div>
            ${s.note ? `<p class="note">${L_(s.note)}</p>` : ''}
          </div>
          <nav class="chips hscroll-chips sec-nav" aria-label="${t('menu')}">${s.sections.map((sec, i) => `<button class="chip" data-act="sec" data-i="${i}">${L_(sec.n)}</button>`).join('')}</nav>
          ${s.box ? `<section class="menu-sec box-sec">
              <div class="block-head"><h2 class="h2">${t('surplus.title')}</h2><p class="muted small">${t('box.left', { n: s.box.left })} · ${t('surplus.why')}</p></div>
              <div class="menu-list">${itemRow(s.box.item)}</div>
            </section>` : ''}
          ${s.sections.map((sec, i) => `<section class="menu-sec" id="sec-${i}">
              <h2 class="h2">${L_(sec.n)}</h2>
              <div class="${s.grid ? 'prod-grid' : 'menu-list'}">${sec.items.map(s.grid ? prodCard : itemRow).join('')}</div>
            </section>`).join('')}
          <div id="cartbar-slot">${cartBar(s.id)}</div>
        </div>`,
      onCart(id) {
        const it = D.itemById[id];
        document.querySelectorAll(`[data-ctl="${CSS.escape(id)}"]`).forEach((el) => { el.innerHTML = itemCtl(it); });
        const slot = document.getElementById('cartbar-slot');
        if (slot) slot.innerHTML = cartBar(s.id);
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
    const s = D.storeById[S.cart.store];
    const lines = B.cartLines();
    if (!s || !lines.length) {
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
    const sub = B.cartSubtotal();
    const base = sub + s.fee;
    const don = S.roundUp ? B.roundUpAmount(base) : 0;
    const short = s.minOrder - sub;

    B.actions['ct-addr'] = (el) => { S.addr = el.dataset.id; B.save(); B.refresh(); };
    B.actions['ct-pay'] = (el) => { S.pay = el.dataset.pay; B.save(); B.refresh(); };
    B.actions['ct-round'] = () => { S.roundUp = !S.roundUp; B.save(); B.refresh(); };
    B.actions['ct-clear'] = () => B.confirm(t('cart.clear.q'), '', t('cart.clear'), () => {
      S.cart = { store: null, items: {} };
      B.save();
      B.refresh();
    }, true);
    B.actions['ct-place'] = () => {
      if (sub < s.minOrder) return;
      const comment = cartComment;
      const o = {
        id: B.uid(), type: s.type, createdAt: Date.now(), store: s.id,
        items: B.cartLines().map((l) => ({ id: l.it.id, q: l.q, p: l.it.p })),
        subtotal: sub, fee: s.fee, donation: don, total: base + don,
        pay: S.pay, addr: S.addr, to: D.saved[S.addr], from: { ll: s.ll },
        courier: B.makeCourier(), comment: comment.trim(),
      };
      S.orders.push(o);
      S.donated += don;
      S.cart = { store: null, items: {} };
      cartComment = '';
      B.save();
      B.reset([{ name: 'home', params: {} }, { name: 'order', params: { id: o.id } }]);
      B.toast(t('order.placed'));
    };

    return {
      html: `<div class="screen cart">
          ${B.topbar(t('cart'), `<button class="icon-btn" data-act="ct-clear" aria-label="${t('cart.clear')}">${B.ic('trash')}</button>`)}
          <button class="store-line" data-act="go" data-to="store" data-id="${s.id}">
            <span class="cover mini-cover" style="--h:${s.h}" aria-hidden="true">${s.e}</span>
            <span class="lr-text"><b>${L_(s.n)}</b><em>${s.eta[0]}–${s.eta[1]} ${t('min')}</em></span>
            ${B.ic('chev', 'chev')}
          </button>
          <div class="card lines">
            ${lines.map((l) => `<div class="line">
                <span class="line-e" aria-hidden="true">${l.it.e}</span>
                <span class="lr-text"><b>${L_(l.it.n)}</b><em>${B.money(l.it.p)}</em></span>
                <span class="item-ctl">${itemCtl(l.it)}</span>
                <b class="line-sum">${B.money(l.it.p * l.q)}</b>
              </div>`).join('')}
          </div>

          <section class="block">
            <h2 class="label">${t('cart.address')}</h2>
            <div class="seg seg-wide" role="radiogroup" aria-label="${t('cart.address')}">
              ${['home', 'work'].map((k) => `<button class="seg-btn${S.addr === k ? ' on' : ''}" role="radio" aria-checked="${S.addr === k}" data-act="ct-addr" data-id="${k}">${B.ic(k === 'home' ? 'home' : 'briefcase')}<span class="lr-text"><b>${L_(D.saved[k].n)}</b><em>${L_(D.saved[k].a)}</em></span></button>`).join('')}
            </div>
          </section>

          <section class="block">
            <h2 class="label">${t('pay')}</h2>
            <div class="seg" role="radiogroup" aria-label="${t('pay')}">
              ${['card', 'cash'].map((k) => `<button class="seg-btn${S.pay === k ? ' on' : ''}" role="radio" aria-checked="${S.pay === k}" data-act="ct-pay" data-pay="${k}">${B.ic(k)}<span>${t('pay.' + k)}</span></button>`).join('')}
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
            <div><dt>${t('delivery')}</dt><dd>${s.fee ? B.money(s.fee) : t('free')}</dd></div>
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

  /* ---------- order: live tracking or receipt ---------- */
  const STEPS = { food: ['accepted', 'cooking', 'delivering', 'done'], shop: ['accepted', 'picking', 'delivering', 'done'] };

  B.screens.order = function (p) {
    const o = B.findOrder(p.id);
    if (!o) return { html: `<div class="screen">${B.topbar('')}<p class="empty-line">${t('notfound')}</p></div>` };
    const ride = o.type === 'taxi' || o.type === 'courier';
    let map = null, courier = null, key = '';

    function liveHTML() {
      const st = B.status(o);
      key = st.key;
      const steps = STEPS[B.textType(o)];
      const s = D.storeById[o.store];
      const left = Math.max(1, Math.ceil(s.eta[1] * (1 - st.p)));
      return `<h2 class="ride-title">${B.statusText(o, st)}</h2>
        <p class="ride-sub">${st.done ? '' : t('track.eta', { n: left })}</p>
        <ol class="steps">${steps.map((k, i) => {
          const state = st.done || i < st.idx ? 'done' : i === st.idx ? 'now' : '';
          return `<li class="${state}"><span class="step-dot" aria-hidden="true">${state === 'done' ? B.ic('check') : ''}</span><span>${t('st.' + B.textType(o) + '.' + k)}</span></li>`;
        }).join('')}</ol>`;
    }

    function courierPos() {
      const st = B.status(o);
      if (st.key === 'delivering') return B.map.along(B.routePts(o.from.ll, o.to.ll), st.t);
      return { ll: st.done ? o.to.ll : o.from.ll, deg: 0 };
    }
    // The courier appears on the map once the order leaves the kitchen.
    function placeCourier() {
      if (!map) return;
      const st = B.status(o);
      const show = st.key === 'delivering' || st.key === 'done';
      if (!show) {
        if (courier) { map.removeLayer(courier); courier = null; }
        return;
      }
      const cp = courierPos();
      if (!courier) courier = L.marker(cp.ll, { icon: B.map.car(), interactive: false, keyboard: false }).addTo(map);
      else courier.setLatLng(cp.ll);
      B.map.rotate(courier, cp.deg);
    }

    if (ride) {
      const tar = D.tariffs[o.type].find((x) => x.id === o.tariff);
      const st = B.status(o);
      const d = o.driver;
      return {
        html: `<div class="screen">
            ${B.topbar(B.orderTitle(o))}
            <div class="receipt-head">
              <span class="receipt-e" aria-hidden="true">${B.orderEmoji(o)}</span>
              <div><h2 class="h2">${B.statusText(o, st)}</h2><p class="muted small">${B.time(o.createdAt)}</p></div>
            </div>
            ${st.done ? '' : `<button class="btn btn-primary btn-block" data-act="go" data-to="taxi" data-mode="${o.type}">${t('order.onmap')}</button>`}
            <ol class="ride-route card">
              <li><span class="dot dot-from" aria-hidden="true"></span>${B.esc(L_(o.from.n))}</li>
              <li><span class="dot dot-to" aria-hidden="true"></span>${B.esc(L_(o.to.n))}</li>
            </ol>
            <div class="card driver-card">
              <div class="driver">${B.avatar(d.name, d.h)}<div class="driver-info"><b>${B.esc(d.name)}</b><span class="meta">${d.car ? B.esc(d.car) : L_(d.vehicle)}</span></div>${d.plate ? B.plate(d.plate) : ''}</div>
              ${o.stars ? `<p class="meta">${t('order.yourRating')}: ${'★'.repeat(o.stars)}</p>` : ''}
            </div>
            <dl class="rows totals">
              <div><dt>${L_(tar.n)} · ${B.dec(o.km, 1)} ${t('km')}</dt><dd>${B.money(o.price)}</dd></div>
              ${o.tip ? `<div><dt>${t('taxi.tip')}</dt><dd>${B.money(o.tip)}</dd></div>` : ''}
              <div class="total"><dt>${o.cancelled ? t('order.nocharge') : t('total')}</dt><dd>${B.money(o.cancelled ? 0 : B.orderTotal(o))}</dd></div>
            </dl>
            ${o.cancelled ? '' : B.split(o.price, o.type === 'courier' ? 'split.courier' : 'split.driver', o.tip)}
          </div>`,
      };
    }

    const s = D.storeById[o.store];
    const c = o.courier;
    B.actions['order-repeat'] = () => {
      const S = B.state;
      S.cart = { store: o.store, items: {} };
      o.items.forEach((l) => { if (D.itemById[l.id] && !D.itemById[l.id].box) S.cart.items[l.id] = l.q; });
      if (!B.cartCount()) S.cart.store = null;
      B.save();
      B.go('cart');
    };

    return {
      html: `<div class="screen">
          ${B.topbar(L_(s.n))}
          <section class="card track" id="track-live">${liveHTML()}</section>
          <div class="mini-map" id="track-map" aria-label="${t('map')}"></div>
          <div class="card driver-card">
            <div class="driver">${B.avatar(c.name, c.h)}<div class="driver-info"><b>${B.esc(c.name)}</b><span class="meta">${B.ic('star', 'ic-star')}${B.dec(c.rating, 2)} · ${t('courier')} · ${L_(c.vehicle)}</span></div></div>
          </div>
          <section class="block">
            <div class="block-head row"><h2 class="label">${t('order.items')}</h2><span class="muted small">${B.time(o.createdAt)}</span></div>
            <div class="card lines">
              ${o.items.map((l) => { const it = D.itemById[l.id]; return it ? `<div class="line"><span class="line-e" aria-hidden="true">${it.e}</span><span class="lr-text"><b>${L_(it.n)}</b><em>${l.q} × ${B.money(l.p)}</em></span><b class="line-sum">${B.money(l.p * l.q)}</b></div>` : ''; }).join('')}
            </div>
          </section>
          <dl class="rows totals">
            <div><dt>${t('cart.subtotal')}</dt><dd>${B.money(o.subtotal)}</dd></div>
            <div><dt>${t('delivery')} · ${L_(o.to.a)}</dt><dd>${o.fee ? B.money(o.fee) : t('free')}</dd></div>
            ${o.donation ? `<div><dt>${t('cart.donation')}</dt><dd>${B.money(o.donation)}</dd></div>` : ''}
            <div class="total"><dt>${t('total')} · ${t('pay.' + o.pay)}</dt><dd>${B.money(o.total)}</dd></div>
          </dl>
          ${o.fee ? `<section class="block"><h2 class="label">${t('order.feeSplit')}</h2>${B.split(o.fee, 'split.courier')}</section>` : ''}
          <button class="btn btn-soft btn-block" data-act="order-repeat">${t('order.repeat')}</button>
        </div>`,
      mount() {
        map = B.map.create(document.getElementById('track-map'), { zoom: 13, scrollWheelZoom: false });
        B.map.route(map, B.routePts(o.from.ll, o.to.ll));
        L.marker(o.from.ll, { icon: B.map.pin('store', s.e), interactive: false, keyboard: false }).addTo(map);
        L.marker(o.to.ll, { icon: B.map.pin('to'), interactive: false, keyboard: false }).addTo(map);
        placeCourier();
        requestAnimationFrame(() => {
          if (!map) return;
          map.invalidateSize();
          map.fitBounds(L.latLngBounds([o.from.ll, o.to.ll]), { padding: [36, 36], maxZoom: 15, animate: false });
        });
      },
      unmount() { if (map) { map.remove(); map = null; courier = null; } },
      tick() {
        const st = B.status(o);
        if (st.key !== key) {
          const el = document.getElementById('track-live');
          if (el) el.innerHTML = liveHTML();
        } else if (!st.done) {
          const sub = document.querySelector('#track-live .ride-sub');
          const left = Math.max(1, Math.ceil(s.eta[1] * (1 - st.p)));
          if (sub) sub.textContent = t('track.eta', { n: left });
        }
        placeCourier();
      },
    };
  };

  B.actions['open-order'] = (el) => {
    const o = B.findOrder(el.dataset.id);
    if (!o) return;
    if ((o.type === 'taxi' || o.type === 'courier') && !B.status(o).done) B.go('taxi', { mode: o.type });
    else B.go('order', { id: o.id });
  };
})();
