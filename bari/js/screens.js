/* Бәрі — home, orders, "Бірге" (social impact) and profile tabs. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);

  function activeCard(o) {
    const st = B.status(o);
    return `<button class="active-card" data-act="open-order" data-id="${o.id}">
        <span class="active-e" aria-hidden="true">${B.orderEmoji(o)}</span>
        <span class="lr-text"><small>${B.esc(B.orderTitle(o))}</small><b>${B.statusText(o, st)}</b></span>
        ${B.ic('chev', 'chev')}
        <span class="bar" aria-hidden="true"><i style="width:${Math.round(st.p * 100)}%"></i></span>
      </button>`;
  }
  function activeList() {
    return B.activeOrders().map(activeCard).join('');
  }

  /* ---------- home ---------- */
  B.screens.home = function () {
    const S = B.state;
    const name = S.profile.name.trim();
    const food = D.stores.filter((s) => s.type === 'food');

    B.actions.city = () => B.sheet.open(`<div class="sheet-head">
          <h3 class="sheet-title">${t('city.title')}</h3>
          <button class="icon-btn" data-act="sheet-close" aria-label="${t('close')}">${B.ic('close')}</button>
        </div>
        <div class="list">${D.cities.map((c) => `<button class="list-row" data-act="${c.live ? 'sheet-close' : 'soon'}">
            <span class="icon-box">${B.ic('pin')}</span><span class="lr-text"><b>${L_(c.n)}</b>${c.live ? '' : `<em>${t('soon')}</em>`}</span>
            ${c.live ? B.ic('check', 'ok') : ''}
          </button>`).join('')}</div>`, { label: t('city.title') });

    return {
      html: `<div class="screen home">
          <header class="home-top">
            <div class="brand">${B.logo()}<span class="brand-name">Бәрі</span><span class="tag tag-demo">${t('demo')}</span></div>
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
            <button class="svc" data-act="go" data-to="store" data-id="bari-market"><span class="svc-art" aria-hidden="true">🛒</span><span class="svc-name">${t('svc.shop')}</span></button>
            <button class="svc" data-act="go" data-to="store" data-id="darihana"><span class="svc-art" aria-hidden="true">💊</span><span class="svc-name">${t('svc.pharm')}</span></button>
            <button class="svc" data-act="go" data-to="taxi" data-mode="courier"><span class="svc-art" aria-hidden="true">📦</span><span class="svc-name">${t('svc.courier')}</span></button>
            <button class="svc svc-soon" data-act="soon"><span class="svc-art" aria-hidden="true">🚌</span><span class="svc-name">${t('svc.intercity')}</span><span class="tag tag-soon">${t('soon')}</span></button>
          </section>

          <button class="fair" data-act="tab" data-tab="together">
            <span class="fair-head"><span class="h2">${t('home.fair')}</span>${B.ic('chev', 'chev')}</span>
            <span class="fair-stats">
              <span><b>90%</b><small>${t('fair.driver')}</small></span>
              <span><b>−30%</b><small>${t('fair.social')}</small></span>
              <span><b>${B.compactMoney(B.communityDonated())}</b><small>${t('fair.donated')}</small></span>
            </span>
          </button>

          <section class="block">
            <div class="block-head"><h2 class="h2">${t('surplus.title')}</h2><p class="muted small">${t('surplus.sub')}</p></div>
            ${B.surplusStrip()}
          </section>

          <section class="block">
            <div class="block-head row"><h2 class="h2">${t('home.near')}</h2><button class="link" data-act="go" data-to="food">${t('all')}</button></div>
            <div class="rest-list">${food.slice(0, 4).map(B.restCard).join('')}</div>
          </section>
        </div>`,
      tick() {
        const el = document.getElementById('home-active');
        if (el) el.innerHTML = activeList();
      },
    };
  };

  /* ---------- orders ---------- */
  B.screens.orders = function () {
    const S = B.state;
    const historyRow = (o) => {
      const st = B.status(o);
      return `<button class="list-row" data-act="open-order" data-id="${o.id}">
          <span class="icon-box emoji" aria-hidden="true">${B.orderEmoji(o)}</span>
          <span class="lr-text"><b>${B.esc(B.orderTitle(o))}</b><em>${B.time(o.createdAt)} · ${B.statusText(o, st)}</em></span>
          <span class="amount${o.cancelled ? ' struck' : ''}">${B.money(B.orderTotal(o))}</span>
        </button>`;
    };
    const historyHTML = () => {
      const done = S.orders.filter((o) => B.status(o).done).slice().reverse();
      return done.length ? `<div class="list card">${done.map(historyRow).join('')}</div>` : `<p class="muted">${t('orders.history.empty')}</p>`;
    };
    let activeCount = B.activeOrders().length;

    if (!S.orders.length) {
      return {
        html: `<div class="screen">
            <h1 class="page-title">${t('nav.orders')}</h1>
            <div class="empty">
              <span class="empty-e" aria-hidden="true">🧾</span>
              <h2 class="h2">${t('orders.empty')}</h2>
              <p class="muted">${t('orders.empty.sub')}</p>
              <div class="btn-row">
                <button class="btn btn-primary" data-act="go" data-to="taxi">${t('svc.taxi')}</button>
                <button class="btn btn-soft" data-act="go" data-to="food">${t('svc.food')}</button>
              </div>
            </div>
          </div>`,
      };
    }
    return {
      html: `<div class="screen">
          <h1 class="page-title">${t('nav.orders')}</h1>
          <section class="block" id="orders-active-wrap" ${activeCount ? '' : 'hidden'}>
            <h2 class="label">${t('orders.active')}</h2>
            <div class="stack" id="orders-active">${activeList()}</div>
          </section>
          <section class="block">
            <h2 class="label">${t('orders.history')}</h2>
            <div id="orders-history">${historyHTML()}</div>
          </section>
        </div>`,
      tick() {
        const n = B.activeOrders().length;
        const el = document.getElementById('orders-active');
        if (el) el.innerHTML = activeList();
        if (n !== activeCount) {
          activeCount = n;
          const wrap = document.getElementById('orders-active-wrap');
          if (wrap) wrap.hidden = !n;
          const h = document.getElementById('orders-history');
          if (h) h.innerHTML = historyHTML();
        }
      },
    };
  };

  /* ---------- Бірге: what makes the app fair ---------- */
  B.screens.together = function () {
    const S = B.state;
    const pillars = [
      ['90%', 'pil.fair'],
      ['−30%', 'pil.social'],
      ['500 ₸', 'pil.round'],
      ['−50%', 'pil.surplus'],
      ['0%', 'pil.local'],
    ];
    const roles = [['driver', '🚗'], ['courier', '🛵'], ['partner', '🏪']];

    B.actions['tg-apply'] = (el) => {
      const role = el.dataset.role;
      B.sheet.open(`<form class="sheet-body" id="apply-form" novalidate>
          <h3 class="sheet-title">${t('apply.' + role)}</h3>
          <p class="muted small">${t('apply.sub.' + role)}</p>
          <label class="field"><span>${t('pf.name')}</span><input id="ap-name" required maxlength="60" value="${B.esc(S.profile.name)}" autocomplete="name"></label>
          <label class="field"><span>${t('pf.phone')}</span><input id="ap-phone" required type="tel" inputmode="tel" maxlength="20" value="${B.esc(S.profile.phone)}" autocomplete="tel"></label>
          <label class="field"><span>${t('apply.extra.' + role)}</span><input id="ap-extra" maxlength="80" placeholder="${t('apply.extra.ph.' + role)}" autocomplete="off"></label>
          <p class="form-err" id="ap-err" hidden>${t('apply.err')}</p>
          <button class="btn btn-primary btn-block" type="submit">${t('apply.send')}</button>
        </form>`, { focus: '#ap-extra', label: t('apply.' + role) });
      const form = document.getElementById('apply-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#ap-name').value.trim();
        const phone = form.querySelector('#ap-phone').value.trim();
        if (!name || phone.replace(/\D/g, '').length < 10) {
          form.querySelector('#ap-err').hidden = false;
          return;
        }
        S.apps.push({ role, name, phone, extra: form.querySelector('#ap-extra').value.trim(), at: Date.now() });
        B.save();
        B.sheet.close(true);
        B.toast(t('apply.saved'));
      });
    };

    return {
      html: `<div class="screen together">
          <header class="tg-hero">
            ${B.logo('logo-lg')}
            <h1 class="page-title">${t('tg.title')}</h1>
            <p class="lead">${t('tg.lead')}</p>
          </header>

          <section class="impact card">
            <div class="impact-main">
              <small>${t('tg.you')}</small>
              <b>${B.money(S.donated)}</b>
            </div>
            <div class="impact-side">
              <small>${t('tg.all')}</small>
              <b>${B.compactMoney(B.communityDonated())}</b>
            </div>
            <p class="muted small">${t('tg.fund')}</p>
          </section>

          <section class="pillars">
            ${pillars.map(([fig, k]) => `<article class="pillar">
                <span class="pillar-fig">${fig}</span>
                <div><h2 class="h3">${t(k)}</h2><p class="muted">${t(k + '.text')}</p></div>
              </article>`).join('')}
          </section>

          <section class="block">
            <h2 class="h2">${t('tg.join')}</h2>
            <div class="list card">
              ${roles.map(([r, e]) => `<button class="list-row" data-act="tg-apply" data-role="${r}">
                  <span class="icon-box emoji" aria-hidden="true">${e}</span>
                  <span class="lr-text"><b>${t('apply.' + r)}</b><em>${t('apply.sub.' + r)}</em></span>
                  ${B.ic('chev', 'chev')}
                </button>`).join('')}
            </div>
          </section>
        </div>`,
    };
  };

  /* ---------- profile ---------- */
  B.screens.profile = function () {
    const S = B.state;
    const socials = ['none', 'pension', 'disability', 'large'];
    const seg = (act, cur, opts) => `<div class="seg" role="radiogroup">${opts.map(([v, label]) => `<button class="seg-btn${cur === v ? ' on' : ''}" role="radio" aria-checked="${cur === v}" data-act="${act}" data-v="${v}"><span>${label}</span></button>`).join('')}</div>`;

    Object.assign(B.actions, {
      'pf-lang': (el) => { S.lang = el.dataset.v; B.save(); B.applyLang(); B.refresh(); },
      'pf-theme': (el) => { S.theme = el.dataset.v; B.save(); B.applyTheme(); B.refresh(); },
      'pf-social': (el) => {
        S.profile.social = el.dataset.v;
        B.save();
        B.refresh();
        if (el.dataset.v !== 'none') B.toast(t('pf.social.on'));
      },
      'pf-reset': () => B.confirm(t('pf.reset.q'), t('pf.reset.text'), t('pf.reset.yes'), () => {
        B.resetState();
        B.applyTheme();
        B.tab('home');
        B.toast(t('pf.reset.done'));
      }, true),
    });
    Object.assign(B.inputs, {
      'pf-name': (el) => {
        S.profile.name = el.value;
        B.save();
        const a = document.querySelector('.profile-card .avatar');
        if (a) a.textContent = (el.value.trim()[0] || '?');
        const n = document.getElementById('pf-name-view');
        if (n) n.textContent = el.value;
      },
      'pf-phone': (el) => {
        S.profile.phone = el.value;
        B.save();
        const n = document.getElementById('pf-phone-view');
        if (n) n.textContent = el.value;
      },
    });

    return {
      html: `<div class="screen profile">
          <h1 class="page-title">${t('nav.profile')}</h1>
          <section class="profile-card card">
            ${B.avatar(S.profile.name, 190)}
            <div class="lr-text"><b id="pf-name-view">${B.esc(S.profile.name)}</b><em id="pf-phone-view">${B.esc(S.profile.phone)}</em></div>
            ${S.profile.social !== 'none' ? `<span class="tag tag-local">${t('soc.' + S.profile.social)}</span>` : ''}
          </section>

          <section class="block">
            <label class="field"><span>${t('pf.name')}</span><input id="pf-name" data-in="pf-name" value="${B.esc(S.profile.name)}" maxlength="40" autocomplete="name"></label>
            <label class="field"><span>${t('pf.phone')}</span><input id="pf-phone" data-in="pf-phone" type="tel" inputmode="tel" value="${B.esc(S.profile.phone)}" maxlength="20" autocomplete="tel"></label>
          </section>

          <section class="block">
            <h2 class="label">${t('pf.lang')}</h2>
            ${seg('pf-lang', S.lang, [['kk', 'Қазақша'], ['ru', 'Русский']])}
          </section>

          <section class="block">
            <h2 class="label">${t('pf.theme')}</h2>
            ${seg('pf-theme', S.theme, [['system', t('pf.theme.system')], ['light', t('pf.theme.light')], ['dark', t('pf.theme.dark')]])}
          </section>

          <section class="block">
            <h2 class="label">${t('pf.social')}</h2>
            <div class="list card" role="radiogroup" aria-label="${t('pf.social')}">
              ${socials.map((v) => `<button class="list-row" role="radio" aria-checked="${S.profile.social === v}" data-act="pf-social" data-v="${v}">
                  <span class="radio${S.profile.social === v ? ' on' : ''}" aria-hidden="true"></span>
                  <span class="lr-text"><b>${t('soc.' + v)}</b></span>
                </button>`).join('')}
            </div>
            <p class="muted small">${t('pf.social.note')}</p>
          </section>

          <section class="block">
            <h2 class="label">${t('pf.addresses')}</h2>
            <div class="list card">
              ${['home', 'work'].map((k) => `<div class="list-row static">
                  <span class="icon-box">${B.ic(k === 'home' ? 'home' : 'briefcase')}</span>
                  <span class="lr-text"><b>${L_(D.saved[k].n)}</b><em>${L_(D.saved[k].a)}</em></span>
                </div>`).join('')}
            </div>
          </section>

          <section class="block about">
            <h2 class="label">${t('pf.about')}</h2>
            <p class="muted">${t('pf.about.text')}</p>
            <button class="btn btn-soft-bad" data-act="pf-reset">${B.ic('trash')}<span>${t('pf.reset')}</span></button>
          </section>
        </div>`,
    };
  };
})();
