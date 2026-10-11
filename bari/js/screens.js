/* Бәрі — client tabs: home, orders, "Бірге" (social impact) and profile. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);
  let publicStats = null;

  const loadStats = () => B.api.get('/api/stats/public').then((s) => { publicStats = s; return s; }).catch(() => null);

  function activeCard(o) {
    return `<button class="active-card" data-act="open-order" data-id="${o.id}">
        <span class="active-e" aria-hidden="true">${B.orderEmoji(o)}</span>
        <span class="lr-text"><small>${B.esc(B.orderTitle(o))}</small><b>${B.statusText(o)}</b></span>
        ${B.ic('chev', 'chev')}
        <span class="bar" aria-hidden="true"><i style="width:${Math.round(B.progress(o) * 100)}%"></i></span>
      </button>`;
  }
  const activeList = () => B.orders.active().map(activeCard).join('');

  /* ---------- home ---------- */
  B.screens.home = function () {
    const name = B.session ? B.session.user.name.trim() : '';

    B.actions.city = () => B.sheet.open(`<div class="sheet-head">
          <h3 class="sheet-title">${t('city.title')}</h3>
          <button class="icon-btn" data-act="sheet-close" aria-label="${t('close')}">${B.ic('close')}</button>
        </div>
        <div class="list">${D.cities.map((c) => `<button class="list-row" data-act="${c.live ? 'sheet-close' : 'soon'}">
            <span class="icon-box">${B.ic('pin')}</span><span class="lr-text"><b>${L_(c.n)}</b>${c.live ? '' : `<em>${t('soon')}</em>`}</span>
            ${c.live ? B.ic('check', 'ok') : ''}
          </button>`).join('')}</div>`, { label: t('city.title') });

    const fair = () => `<span class="fair-head"><span class="h2">${t('home.fair')}</span>${B.ic('chev', 'chev')}</span>
        <span class="fair-stats">
          <span><b>90%</b><small>${t('fair.driver')}</small></span>
          <span><b>−30%</b><small>${t('fair.social')}</small></span>
          <span><b>${publicStats ? B.compactMoney(publicStats.donated) : '—'}</b><small>${t('fair.donated')}</small></span>
        </span>`;

    const fillVenues = (list) => {
      const near = document.getElementById('home-near');
      if (near) near.innerHTML = list.length ? list.slice(0, 4).map(B.restCard).join('') : `<p class="empty-line">${t('food.none')}</p>`;
      const s = document.getElementById('home-surplus');
      if (s) s.innerHTML = B.surplusStrip(list);
    };

    return {
      html: `<div class="screen home">
          <header class="home-top">
            <div class="brand">${B.logo()}<span class="brand-name">Бәрі</span></div>
            <button class="city-chip" data-act="city">${B.ic('pin')}<span>${L_(D.cities[0].n)}</span>${B.ic('down')}</button>
          </header>
          <h1 class="hello">${name ? t('home.hello', { name: B.esc(name) }) : t('home.hello.anon')}</h1>
          <button class="where" data-act="go" data-to="taxi" data-focus="to">${B.ic('search')}<span>${t('home.where')}</span></button>
          <div id="home-active" class="stack">${activeList()}</div>

          <section class="svc-grid" aria-label="${t('home.services')}">
            <button class="svc svc-big svc-taxi" data-act="go" data-to="taxi">
              <span class="svc-name">${t('svc.taxi')}</span>
              <span class="svc-sub">${t('from', { price: B.money(700) })}</span>
              <span class="svc-art" aria-hidden="true">🚕</span>
            </button>
            <button class="svc svc-big svc-food" data-act="go" data-to="food">
              <span class="svc-name">${t('svc.food')}</span>
              <span class="svc-sub">${t('svc.food.sub')}</span>
              <span class="svc-art" aria-hidden="true">🍜</span>
            </button>
            <button class="svc" data-act="go" data-to="shops" data-type="shop"><span class="svc-art" aria-hidden="true">🛒</span><span class="svc-name">${t('svc.shop')}</span></button>
            <button class="svc" data-act="go" data-to="shops" data-type="pharm"><span class="svc-art" aria-hidden="true">💊</span><span class="svc-name">${t('svc.pharm')}</span></button>
            <button class="svc" data-act="go" data-to="taxi" data-mode="courier"><span class="svc-art" aria-hidden="true">📦</span><span class="svc-name">${t('svc.courier')}</span></button>
            <button class="svc svc-soon" data-act="soon"><span class="svc-art" aria-hidden="true">🚌</span><span class="svc-name">${t('svc.intercity')}</span><span class="tag tag-soon">${t('soon')}</span></button>
          </section>

          <button class="fair" data-act="tab" data-tab="together" id="home-fair">${fair()}</button>

          <section class="block">
            <div class="block-head"><h2 class="h2">${t('surplus.title')}</h2><p class="muted small">${t('surplus.sub')}</p></div>
            <div id="home-surplus">${B.loading()}</div>
          </section>

          <section class="block">
            <div class="block-head row"><h2 class="h2">${t('home.near')}</h2><button class="link" data-act="go" data-to="food">${t('all')}</button></div>
            <div class="rest-list" id="home-near">${B.loading()}</div>
          </section>

          <a class="join-banner" href="/pro">${B.ic('briefcase')}<span><b>${t('home.join')}</b><small>${t('home.join.sub')}</small></span>${B.ic('chev', 'chev')}</a>
        </div>`,
      mount() {
        const cached = B.venues.cached('food');
        if (cached) fillVenues(cached);
        B.venues.list('food').then(fillVenues).catch((e) => {
          ['home-near', 'home-surplus'].forEach((id) => { const el = document.getElementById(id); if (el) el.innerHTML = `<p class="empty-line">${B.errText(e)}</p>`; });
        });
        loadStats().then(() => { const f = document.getElementById('home-fair'); if (f) f.innerHTML = fair(); });
      },
      onOrder() {
        const el = document.getElementById('home-active');
        if (el) el.innerHTML = activeList();
      },
      onOrders() { B.refresh(); },
    };
  };

  /* ---------- shops & pharmacies list ---------- */
  B.screens.shops = function (p) {
    const type = p.type === 'pharm' ? 'pharm' : 'shop';
    return {
      html: `<div class="screen">
          ${B.topbar(t(type === 'pharm' ? 'svc.pharm' : 'svc.shop'), B.cartBtn())}
          <div class="rest-list" id="shops-list">${B.loading()}</div>
        </div>`,
      mount() {
        B.venues.list(type).then((list) => {
          const el = document.getElementById('shops-list');
          if (!el) return;
          if (list.length === 1) return B.replace('store', { id: list[0].id });
          el.innerHTML = list.length ? list.map(B.restCard).join('') : `<p class="empty-line">${t('shops.none')}</p>`;
        }).catch((e) => {
          const el = document.getElementById('shops-list');
          if (el) el.innerHTML = `<p class="empty-line">${B.errText(e)}</p>`;
        });
      },
    };
  };

  /* ---------- orders ---------- */
  B.screens.orders = function () {
    const loginCta = () => `<div class="empty">
        <span class="empty-e" aria-hidden="true">🧾</span>
        <h2 class="h2">${t('orders.login')}</h2>
        <p class="muted">${t('orders.login.sub')}</p>
        <button class="btn btn-primary" data-act="login">${t('login.title')}</button>
      </div>`;
    const historyRow = (o) => `<button class="list-row" data-act="open-order" data-id="${o.id}">
        <span class="icon-box emoji" aria-hidden="true">${B.orderEmoji(o)}</span>
        <span class="lr-text"><b>${B.esc(B.orderTitle(o))}</b><em>${B.time(o.created_at)} · ${B.statusText(o)}</em></span>
        <span class="amount${o.status === 'cancelled' ? ' struck' : ''}">${B.money(o.total)}</span>
      </button>`;

    function body() {
      if (!B.session) return loginCta();
      if (!B.orders.loaded) return B.loading();
      const all = B.orders.list();
      if (!all.length) {
        return `<div class="empty">
            <span class="empty-e" aria-hidden="true">🧾</span>
            <h2 class="h2">${t('orders.empty')}</h2>
            <p class="muted">${t('orders.empty.sub')}</p>
            <div class="btn-row">
              <button class="btn btn-primary" data-act="go" data-to="taxi">${t('svc.taxi')}</button>
              <button class="btn btn-soft" data-act="go" data-to="food">${t('svc.food')}</button>
            </div>
          </div>`;
      }
      const active = all.filter(B.isActive);
      const done = all.filter((o) => !B.isActive(o));
      return `${active.length ? `<section class="block"><h2 class="label">${t('orders.active')}</h2><div class="stack">${active.map(activeCard).join('')}</div></section>` : ''}
        <section class="block">
          <h2 class="label">${t('orders.history')}</h2>
          ${done.length ? `<div class="list card">${done.map(historyRow).join('')}</div>` : `<p class="muted">${t('orders.history.empty')}</p>`}
        </section>`;
    }
    const redraw = () => { const el = document.getElementById('orders-body'); if (el) el.innerHTML = body(); };

    return {
      html: `<div class="screen"><h1 class="page-title">${t('nav.orders')}</h1><div id="orders-body" class="stack-16">${body()}</div></div>`,
      onOrder: redraw,
      onOrders: redraw,
    };
  };
  B.actions.login = () => B.login(null);

  /* ---------- Бірге: what makes the app fair ---------- */
  B.screens.together = function () {
    const pillars = [['90%', 'pil.fair'], ['−30%', 'pil.social'], ['500 ₸', 'pil.round'], ['−50%', 'pil.surplus'], ['0%', 'pil.local']];
    const myDonations = () => B.orders.list().filter((o) => o.status !== 'cancelled').reduce((a, o) => a + (o.donation || 0), 0);
    const impact = () => `<div class="impact-main"><small>${t('tg.you')}</small><b>${B.money(myDonations())}</b></div>
        <div class="impact-side"><small>${t('tg.all')}</small><b>${publicStats ? B.compactMoney(publicStats.donated) : '—'}</b></div>
        <p class="muted small">${t('tg.fund')}</p>`;
    return {
      html: `<div class="screen together">
          <header class="tg-hero">
            ${B.logo('logo-lg')}
            <h1 class="page-title">${t('tg.title')}</h1>
            <p class="lead">${t('tg.lead')}</p>
          </header>
          <section class="impact card" id="tg-impact">${impact()}</section>
          <section class="pillars">
            ${pillars.map(([fig, k]) => `<article class="pillar">
                <span class="pillar-fig">${fig}</span>
                <div><h2 class="h3">${t(k)}</h2><p class="muted">${t(k + '.text')}</p></div>
              </article>`).join('')}
          </section>
          <section class="block">
            <h2 class="h2">${t('tg.join')}</h2>
            <div class="list card">
              <a class="list-row" href="/pro"><span class="icon-box emoji" aria-hidden="true">🚗</span><span class="lr-text"><b>${t('apply.driver')}</b><em>${t('apply.sub.driver')}</em></span>${B.ic('chev', 'chev')}</a>
              <a class="list-row" href="/pro"><span class="icon-box emoji" aria-hidden="true">🛵</span><span class="lr-text"><b>${t('apply.courier')}</b><em>${t('apply.sub.courier')}</em></span>${B.ic('chev', 'chev')}</a>
              <a class="list-row" href="/partner"><span class="icon-box emoji" aria-hidden="true">🏪</span><span class="lr-text"><b>${t('apply.partner')}</b><em>${t('apply.sub.partner')}</em></span>${B.ic('chev', 'chev')}</a>
            </div>
          </section>
        </div>`,
      mount() {
        loadStats().then(() => { const el = document.getElementById('tg-impact'); if (el) el.innerHTML = impact(); });
      },
    };
  };

  /* ---------- profile ---------- */
  B.screens.profile = function () {
    const S = B.state;
    const s = B.session;
    const socials = ['none', 'pension', 'disability', 'large'];
    const seg = (act, cur, opts) => `<div class="seg" role="radiogroup">${opts.map(([v, label]) => `<button class="seg-btn${cur === v ? ' on' : ''}" role="radio" aria-checked="${cur === v}" data-act="${act}" data-v="${v}"><span>${label}</span></button>`).join('')}</div>`;
    let nameTimer = null;

    Object.assign(B.actions, {
      'pf-lang': (el) => { S.lang = el.dataset.v; B.save(); B.applyLang(); B.refresh(); },
      'pf-theme': (el) => { S.theme = el.dataset.v; B.save(); B.applyTheme(); B.refresh(); },
      'pf-social': async (el) => {
        try {
          const me = await B.api.patch('/api/me', { social_status: el.dataset.v });
          B.setSession(me);
          B.refresh();
          if (el.dataset.v !== 'none') B.toast(t('pf.social.sent'));
        } catch (e) { B.fail(e); }
      },
      'pf-addr': (el) => {
        const k = el.dataset.k;
        B.addressSheet({
          title: t('addr.' + k), gps: true,
          onPick: (pl) => { S.addresses[k] = { n: L_(pl.n), a: L_(pl.a) || '', lat: pl.lat, lng: pl.lng }; B.save(); B.refresh(); },
        });
      },
      'pf-logout': () => B.confirm(t('pf.logout.q'), '', t('pf.logout'), async () => {
        await B.logout();
        B.tab('home');
      }, true),
    });
    B.inputs['pf-name'] = (el) => {
      clearTimeout(nameTimer);
      const v = el.value.trim();
      if (!v) return;
      nameTimer = setTimeout(async () => {
        try {
          const me = await B.api.patch('/api/me', { name: v });
          B.session.user = me.user;
          const n = document.getElementById('pf-name-view');
          if (n) n.textContent = v;
        } catch (e) { B.fail(e); }
      }, 600);
    };

    const socialNote = () => {
      if (!s || s.user.social_status === 'none') return t('pf.social.note');
      return s.user.social_verified ? t('pf.social.ok') : t('pf.social.pending');
    };
    const appLinks = () => {
      if (!s) return '';
      const rows = [];
      rows.push(`<a class="list-row" href="/pro"><span class="icon-box">${B.ic('briefcase')}</span><span class="lr-text"><b>Бәрі Pro</b><em>${s.worker ? t('pf.pro.' + s.worker.status) : t('pf.pro.join')}</em></span>${B.ic('chev', 'chev')}</a>`);
      rows.push(`<a class="list-row" href="/partner"><span class="icon-box">${B.ic('shop')}</span><span class="lr-text"><b>Бәрі Бизнес</b><em>${s.venues.length ? s.venues.map((v) => B.esc(B.N(v))).join(', ') : t('pf.biz.join')}</em></span>${B.ic('chev', 'chev')}</a>`);
      if (s.user.is_admin) rows.push(`<a class="list-row" href="/admin"><span class="icon-box">${B.ic('shield')}</span><span class="lr-text"><b>${t('pf.admin')}</b></span>${B.ic('chev', 'chev')}</a>`);
      return `<section class="block"><h2 class="label">${t('pf.apps')}</h2><div class="list card">${rows.join('')}</div></section>`;
    };

    return {
      html: `<div class="screen profile">
          <h1 class="page-title">${t('nav.profile')}</h1>
          ${s ? `<section class="profile-card card">
              ${B.avatar(s.user.name || '?', 190)}
              <div class="lr-text"><b id="pf-name-view">${B.esc(s.user.name || t('pf.noname'))}</b><em>${B.esc(B.phone(s.user.phone))}</em></div>
              ${s.user.social_verified ? `<span class="tag tag-local">${t('soc.' + s.user.social_status)}</span>` : ''}
            </section>
            <label class="field"><span>${t('pf.name')}</span><input id="pf-name" data-in="pf-name" value="${B.esc(s.user.name)}" maxlength="40" autocomplete="name"></label>`
          : `<section class="profile-card card">
              <span class="avatar" style="--h:190" aria-hidden="true">?</span>
              <div class="lr-text"><b>${t('pf.guest')}</b><em>${t('pf.guest.sub')}</em></div>
            </section>
            <button class="btn btn-primary btn-block" data-act="login">${t('login.title')}</button>`}

          ${appLinks()}

          <section class="block">
            <h2 class="label">${t('pf.addresses')}</h2>
            <div class="list card">
              ${['home', 'work'].map((k) => {
                const a = B.addressOf(k);
                return `<button class="list-row" data-act="pf-addr" data-k="${k}">
                  <span class="icon-box">${B.ic(k === 'home' ? 'home' : 'briefcase')}</span>
                  <span class="lr-text"><b>${t('addr.' + k)}</b><em>${a ? B.esc(a.a || a.n) : t('pf.addr.set')}</em></span>
                  ${B.ic('edit', 'chev')}
                </button>`;
              }).join('')}
            </div>
          </section>

          <section class="block">
            <h2 class="label">${t('pf.lang')}</h2>
            ${seg('pf-lang', S.lang, [['kk', 'Қазақша'], ['ru', 'Русский']])}
          </section>
          <section class="block">
            <h2 class="label">${t('pf.theme')}</h2>
            ${seg('pf-theme', S.theme, [['system', t('pf.theme.system')], ['light', t('pf.theme.light')], ['dark', t('pf.theme.dark')]])}
          </section>

          ${s ? `<section class="block">
              <h2 class="label">${t('pf.social')}</h2>
              <div class="list card" role="radiogroup" aria-label="${t('pf.social')}">
                ${socials.map((v) => `<button class="list-row" role="radio" aria-checked="${s.user.social_status === v}" data-act="pf-social" data-v="${v}">
                    <span class="radio${s.user.social_status === v ? ' on' : ''}" aria-hidden="true"></span>
                    <span class="lr-text"><b>${t('soc.' + v)}</b></span>
                  </button>`).join('')}
              </div>
              <p class="muted small">${socialNote()}</p>
            </section>` : ''}

          <section class="block about">
            <h2 class="label">${t('pf.about')}</h2>
            <p class="muted">${t('pf.about.text')}</p>
            ${s ? `<button class="btn btn-soft-bad" data-act="pf-logout">${B.ic('logout')}<span>${t('pf.logout')}</span></button>` : ''}
          </section>
        </div>`,
    };
  };
})();
