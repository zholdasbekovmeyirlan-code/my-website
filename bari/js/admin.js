/* Бәрі — admin panel: approve workers and venues, verify social status, watch orders. */
(function () {
  const B = window.Bari;
  const t = (k, v) => B.t(k, v);

  B.addStrings({
    'adm.nav.overview': ['Шолу', 'Обзор'],
    'adm.nav.people': ['Жұмысшылар', 'Исполнители'],
    'adm.nav.places': ['Мекемелер', 'Заведения'],
    'adm.nav.orders': ['Тапсырыстар', 'Заказы'],
    'adm.title': ['Әкімші панелі', 'Панель администратора'],
    'adm.denied': ['Бұл бет тек әкімшілерге арналған', 'Эта страница только для администраторов'],
    'adm.denied.sub': ['Сервердің ADMIN_PHONES баптауына телефон нөміріңізді қосып, қайта кіріңіз.', 'Добавьте свой номер в настройку сервера ADMIN_PHONES и войдите снова.'],
    'adm.users': ['Қолданушылар', 'Пользователи'],
    'adm.drivers': ['Жүргізушілер', 'Водители'],
    'adm.couriers': ['Курьерлер', 'Курьеры'],
    'adm.online': ['Қазір желіде', 'Сейчас на линии'],
    'adm.venues': ['Мекемелер', 'Заведения'],
    'adm.ordersToday': ['Бүгінгі тапсырыс', 'Заказов сегодня'],
    'adm.doneToday': ['Бүгін орындалды', 'Выполнено сегодня'],
    'adm.revenue': ['Бүгінгі айналым', 'Оборот сегодня'],
    'adm.donated': ['Қайырымдылық', 'Благотворительность'],
    'adm.active': ['Белсенді тапсырыс', 'Активных заказов'],
    'adm.pending': ['Тексеруді күтуде', 'Ждут проверки'],
    'adm.social': ['Әлеуметтік мәртебе сұраулары', 'Запросы социального статуса'],
    'adm.social.hint': ['Құжатты (зейнеткер куәлігі, анықтама) тексеріп барып растаңыз.', 'Подтверждайте только после проверки документа (удостоверение, справка).'],
    'adm.approve': ['Растау', 'Подтвердить'],
    'adm.block': ['Бұғаттау', 'Заблокировать'],
    'adm.unblock': ['Қайта ашу', 'Разблокировать'],
    'adm.reject': ['Қабылдамау', 'Отклонить'],
    'adm.nothing': ['Бәрі тексерілген.', 'Всё проверено.'],
    'adm.demo': ['демо', 'демо'],
    'adm.owner': ['Иесі', 'Владелец'],
    'adm.commission': ['Комиссия, %', 'Комиссия, %'],
    'adm.set': ['Сақтау', 'Сохранить'],
    'adm.done': ['Дайын', 'Готово'],
    'adm.invite': ['Адам шақыру', 'Пригласить человека'],
    'adm.invite.sub': ['Тестер, жүргізуші немесе мейрамхана иесі. Шақырылған нөмір «тек шақырылғандар» режимінде де кіре алады.', 'Тестировщик, водитель или владелец ресторана. Приглашённый номер сможет войти даже в режиме «только по приглашению».'],
    'adm.invite.go': ['Шақыру', 'Пригласить'],
    'adm.invite.ok': ['Шақырылды. Енді ол осы нөмірмен кіре алады.', 'Приглашение создано. Теперь можно войти с этим номером.'],
    'adm.people.recent': ['Соңғы қолданушылар', 'Последние пользователи'],
    'adm.mode.invite': ['Кіру: тек шақырылғандар', 'Вход: только по приглашению'],
    'adm.mode.open': ['Кіру: барлығына ашық', 'Вход: открыт для всех'],
    'adm.mode.sms.demo': ['SMS: тест режимі (код экранда)', 'SMS: тестовый режим (код на экране)'],
    'adm.mode.sms.real': ['SMS: {p}', 'SMS: {p}'],
    'adm.mode.warn': ['Назар аударыңыз: SMS тест режимінде және кіру барлығына ашық. Кез келген адам кез келген нөмірмен кіре алады. INVITE_ONLY=1 қойыңыз немесе SMS провайдерін қосыңыз.', 'Внимание: SMS в тестовом режиме и вход открыт. Любой может войти под любым номером. Включите INVITE_ONLY=1 или подключите SMS-провайдера.'],
    'adm.owner.phone': ['Иесінің телефоны', 'Телефон владельца'],
    'adm.owner.set': ['Иесіне беру', 'Передать владельцу'],
    'adm.venue.add': ['Мейрамхана қосу', 'Добавить ресторан'],
    'adm.venue.add.sub': ['Келісім жасалған мекемені Бәрі Бизнес арқылы қосыңыз: ол бірден расталады.', 'Добавьте заведение с договором через Бәрі Бизнес: оно сразу подтверждается.'],
    'adm.empty': ['Әзірге жоқ.', 'Пока нет.'],
    'adm.status.pending': ['Тексерілуде', 'На проверке'],
    'adm.status.approved': ['Расталған', 'Подтверждён'],
    'adm.status.blocked': ['Бұғатталған', 'Заблокирован'],
  });

  let data = null;
  async function load() {
    try { data = await B.api.get('/api/admin/overview'); } catch (e) { data = { error: e }; }
  }

  const gate = () => {
    if (!B.session) {
      return `<div class="screen"><header class="tg-hero">${B.logo('logo-lg')}<h1 class="page-title">${t('adm.title')}</h1></header>
        <button class="btn btn-primary btn-block btn-lg-c" data-act="login">${t('login.title')}</button></div>`;
    }
    if (!B.session.user.is_admin) {
      return `<div class="screen"><div class="empty"><span class="empty-e" aria-hidden="true">🔒</span><h1 class="h2">${t('adm.denied')}</h1><p class="muted">${t('adm.denied.sub')}</p>
        <button class="btn btn-soft" data-act="adm-logout">${t('pf.logout')}</button></div></div>`;
    }
    if (!data) return `<div class="screen">${B.loading()}</div>`;
    if (data.error) return `<div class="screen"><p class="empty-line">${B.errText(data.error)}</p></div>`;
    return '';
  };

  const statusTag = (s) => `<span class="tag${s === 'approved' ? ' tag-local' : s === 'blocked' ? ' tag-bad' : ''}">${t('adm.status.' + s)}</span>`;

  function workerRow(w) {
    const what = w.kind === 'driver'
      ? `${B.esc(w.car_model)} · ${B.esc(w.car_color)} · ${B.esc(w.car_class)}${w.child_seat ? ' · 🧸' : ''}`
      : t('veh.' + w.vehicle);
    return `<div class="adm-row">
        <div class="adm-main">
          <b>${w.kind === 'driver' ? '🚗' : '🛵'} ${B.esc(w.name || '—')}</b>
          <span class="muted small">${B.esc(B.phone(w.phone))} · ${what}</span>
          ${w.car_plate ? B.plate(w.car_plate) : ''}
        </div>
        <div class="adm-side">
          ${statusTag(w.status)}${w.online ? '<span class="tag tag-local">online</span>' : ''}
          <div class="btn-row">
            ${w.status !== 'approved' ? `<button class="btn btn-primary btn-sm" data-act="adm-worker" data-id="${w.id}" data-s="approved">${t(w.status === 'blocked' ? 'adm.unblock' : 'adm.approve')}</button>` : ''}
            ${w.status !== 'blocked' ? `<button class="btn btn-soft-bad btn-sm" data-act="adm-worker" data-id="${w.id}" data-s="blocked">${t('adm.block')}</button>` : ''}
          </div>
        </div>
      </div>`;
  }

  function venueRow(v) {
    return `<div class="adm-row">
        <div class="adm-main">
          <b>${v.emoji} ${B.esc(v.name)}${v.demo ? ` <span class="tag">${t('adm.demo')}</span>` : ''}</b>
          <span class="muted small">${B.esc(v.address)} · ${t('biz.type.' + v.type)}</span>
          ${v.owner ? `<span class="muted small">${t('adm.owner')}: ${B.esc(v.owner.name)} · ${B.esc(B.phone(v.owner.phone))}</span>` : ''}
        </div>
        <div class="adm-side">
          ${statusTag(v.status)}
          <label class="adm-commission"><span>${t('adm.commission')}</span><input type="number" min="0" max="30" value="${Math.round(v.commission * 100)}" id="com-${v.id}"></label>
          <label class="adm-commission"><span>${t('adm.owner.phone')}</span><input type="tel" inputmode="tel" placeholder="7XX XXX XX XX" id="own-${v.id}" class="adm-phone"></label>
          <div class="btn-row">
            <button class="btn btn-soft btn-sm" data-act="adm-owner" data-id="${v.id}">${t('adm.owner.set')}</button>
            <button class="btn btn-soft btn-sm" data-act="adm-com" data-id="${v.id}">${t('adm.set')}</button>
            ${v.status !== 'approved' ? `<button class="btn btn-primary btn-sm" data-act="adm-venue" data-id="${v.id}" data-s="approved">${t(v.status === 'blocked' ? 'adm.unblock' : 'adm.approve')}</button>` : ''}
            ${v.status !== 'blocked' ? `<button class="btn btn-soft-bad btn-sm" data-act="adm-venue" data-id="${v.id}" data-s="blocked">${t('adm.block')}</button>` : ''}
          </div>
        </div>
      </div>`;
  }

  async function act(fn) {
    try { await fn(); await load(); B.refresh(); B.toast(t('adm.done')); } catch (e) { B.fail(e); }
  }
  Object.assign(B.actions, {
    'adm-worker': (el) => act(() => B.api.post(`/api/admin/workers/${el.dataset.id}`, { status: el.dataset.s })),
    'adm-venue': (el) => act(() => B.api.post(`/api/admin/venues/${el.dataset.id}`, { status: el.dataset.s })),
    'adm-com': (el) => {
      const v = Number(document.getElementById('com-' + el.dataset.id).value);
      act(() => B.api.post(`/api/admin/venues/${el.dataset.id}`, { commission: Math.max(0, Math.min(30, v)) / 100 }));
    },
    'adm-owner': (el) => {
      const phone = document.getElementById('own-' + el.dataset.id).value.replace(/\D/g, '');
      if (phone.length < 10) return B.toast(t('err.invalid', { field: t('field.phone') }));
      act(() => B.api.post(`/api/admin/venues/${el.dataset.id}`, { owner_phone: '+7' + phone.slice(-10) }));
    },
    'adm-social': (el) => act(() => B.api.post(`/api/admin/users/${el.dataset.id}/social`, { verified: el.dataset.ok === '1' })),
    'adm-logout': async () => { await B.logout(); B.refresh(); },
    login: () => B.login(null),
  });

  B.screens.overview = function () {
    const g = gate();
    if (g) return { html: g, mount: () => { if (B.session && B.session.user.is_admin && !data) load().then(B.refresh); } };
    const s = data.stats;
    const tiles = [
      ['users', s.users], ['drivers', s.drivers], ['couriers', s.couriers], ['online', s.online], ['venues', s.venues],
      ['ordersToday', s.ordersToday], ['doneToday', s.doneToday], ['active', s.active],
      ['revenue', B.money(s.revenueToday)], ['donated', B.money(s.donated)],
    ];
    const pw = data.workers.filter((w) => w.status === 'pending');
    const demoSms = data.smsMode === 'demo';
    const modes = `<div class="tags">
        <span class="tag${data.inviteOnly ? ' tag-local' : ''}">${t(data.inviteOnly ? 'adm.mode.invite' : 'adm.mode.open')}</span>
        <span class="tag${demoSms ? '' : ' tag-local'}">${demoSms ? t('adm.mode.sms.demo') : t('adm.mode.sms.real', { p: B.esc(data.smsMode) })}</span>
      </div>
      ${demoSms && !data.inviteOnly ? `<p class="banner-warn">${t('adm.mode.warn')}</p>` : ''}`;
    const pv = data.venues.filter((v) => v.status === 'pending');
    return {
      html: `<div class="screen">
          <h1 class="page-title">${t('adm.title')}</h1>
          ${modes}
          <div class="adm-tiles">${tiles.map(([k, v]) => `<div class="adm-tile"><small>${t('adm.' + k)}</small><b>${v}</b></div>`).join('')}</div>
          <section class="block">
            <h2 class="h2">${t('adm.pending')}</h2>
            ${pw.length || pv.length ? `<div class="card adm-list">${pw.map(workerRow).join('')}${pv.map(venueRow).join('')}</div>` : `<p class="muted">${t('adm.nothing')}</p>`}
          </section>
          <section class="block">
            <h2 class="h2">${t('adm.social')}</h2>
            <p class="muted small">${t('adm.social.hint')}</p>
            ${data.social.length ? `<div class="card adm-list">${data.social.map((u) => `<div class="adm-row">
                <div class="adm-main"><b>${B.esc(u.name || '—')}</b><span class="muted small">${B.esc(B.phone(u.phone))} · ${t('soc.' + u.social_status)}</span></div>
                <div class="adm-side"><div class="btn-row">
                  <button class="btn btn-primary btn-sm" data-act="adm-social" data-id="${u.id}" data-ok="1">${t('adm.approve')}</button>
                  <button class="btn btn-soft-bad btn-sm" data-act="adm-social" data-id="${u.id}" data-ok="0">${t('adm.reject')}</button>
                </div></div>
              </div>`).join('')}</div>` : `<p class="muted">${t('adm.nothing')}</p>`}
          </section>
        </div>`,
    };
  };

  B.screens.people = function () {
    const g = gate();
    if (g) return { html: g };
    return {
      html: `<div class="screen"><h1 class="page-title">${t('adm.nav.people')}</h1>
        <form class="card pro-card stack-16" id="invite-form" novalidate>
          <div><h2 class="h3">${t('adm.invite')}</h2><p class="muted small">${t('adm.invite.sub')}</p></div>
          <div class="field-row">
            <label class="field"><span>${t('pf.phone')}</span><span class="phone-field"><span class="phone-cc" aria-hidden="true">+7</span><input name="phone" type="tel" inputmode="tel" placeholder="707 123 45 67" required></span></label>
            <label class="field"><span>${t('pf.name')}</span><input name="name" maxlength="40"></label>
          </div>
          <button class="btn btn-primary" type="submit">${t('adm.invite.go')}</button>
        </form>
        ${data.workers.length ? `<div class="card adm-list">${data.workers.map(workerRow).join('')}</div>` : `<p class="muted">${t('adm.empty')}</p>`}
        <section class="block"><h2 class="label">${t('adm.people.recent')}</h2>
          <div class="list card">${data.people.map((u) => `<div class="list-row static">${B.avatar(u.name || '?')}<span class="lr-text"><b>${B.esc(u.name || '—')}${u.is_admin ? ' 🛡️' : ''}</b><em>${B.esc(B.phone(u.phone))} · ${B.time(u.created_at)}</em></span></div>`).join('')}</div>
        </section>
      </div>`,
      mount() {
        const form = document.getElementById('invite-form');
        if (!form) return;
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const digits = form.phone.value.replace(/\D/g, '').slice(-10);
          if (digits.length !== 10) return B.toast(t('err.invalid', { field: t('field.phone') }));
          try {
            await B.api.post('/api/admin/invite', { phone: '+7' + digits, name: form.name.value.trim() });
            B.toast(t('adm.invite.ok'));
            await load();
            B.refresh();
          } catch (err) { B.fail(err); }
        });
      },
    };
  };

  B.screens.places = function () {
    const g = gate();
    if (g) return { html: g };
    return { html: `<div class="screen"><h1 class="page-title">${t('adm.nav.places')}</h1>
      <a class="join-banner" href="/partner">${B.ic('plus')}<span><b>${t('adm.venue.add')}</b><small>${t('adm.venue.add.sub')}</small></span>${B.ic('chev', 'chev')}</a>
      ${data.venues.length ? `<div class="card adm-list">${data.venues.map(venueRow).join('')}</div>` : `<p class="muted">${t('adm.empty')}</p>`}</div>` };
  };

  B.screens.aorders = function () {
    const g = gate();
    if (g) return { html: g };
    return {
      html: `<div class="screen"><h1 class="page-title">${t('adm.nav.orders')}</h1>
        ${data.orders.length ? `<div class="list card">${data.orders.map((o) => `<div class="list-row static">
            <span class="icon-box emoji" aria-hidden="true">${B.orderEmoji(o)}</span>
            <span class="lr-text"><b>№${o.id} · ${B.esc(o.from.n)} → ${B.esc(o.to.n)}</b>
              <em>${B.time(o.created_at)} · ${B.statusText(o)} · ${B.esc(o.client.name || '')}${o.worker ? ' → ' + B.esc(o.worker.name) : ''}</em></span>
            <span class="amount${o.status === 'cancelled' ? ' struck' : ''}">${B.money(o.total)}</span>
          </div>`).join('')}</div>` : `<p class="muted">${t('adm.empty')}</p>`}</div>`,
    };
  };

  // Live: any order change refreshes the numbers (at most once a second).
  let pending = null;
  B.bus.on('order', () => {
    if (pending || !B.session || !B.session.user.is_admin) return;
    pending = setTimeout(async () => {
      pending = null;
      await load();
      if (!B.sheet.isOpen()) B.refresh();
    }, 1000);
  });

  (async function () {
    B.tabs = [['overview', 'chart', 'adm.nav.overview'], ['people', 'user', 'adm.nav.people'], ['places', 'shop', 'adm.nav.places'], ['aorders', 'receipt', 'adm.nav.orders']];
    B.applyTheme();
    B.applyLang();
    await B.loadConfig();
    await B.loadSession();
    if (B.session && B.session.user.is_admin) await load();
    B.start('overview');
    B.bus.on('session', async () => {
      data = null;
      if (B.session && B.session.user.is_admin) await load();
      B.tab('overview');
    });
  })();
})();
