/* Бәрі Бизнес — panel for restaurants and shops: register, manage the menu, take orders. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);
  const VID_KEY = 'bari:venue';

  B.addStrings({
    'biz.nav.orders': ['Тапсырыстар', 'Заказы'],
    'biz.nav.menu': ['Мәзір', 'Меню'],
    'biz.nav.venue': ['Мекеме', 'Заведение'],
    'biz.welcome': ['Бәрі Бизнес', 'Бәрі Бизнес'],
    'biz.welcome.sub': ['Мейрамханаңызды, кафеңізді немесе дүкеніңізді қосып, жеткізу арқылы сатыңыз. Жергілікті бизнес алғашқы 3 ай комиссиясыз жұмыс істейді.', 'Подключите ресторан, кафе или магазин и продавайте с доставкой. Местный бизнес первые 3 месяца работает без комиссии.'],
    'biz.register': ['Мекемені тіркеу', 'Регистрация заведения'],
    'biz.register.sub': ['Тексерілгеннен кейін мекеме клиенттерге көрінеді. Оған дейін мәзірді толтырып қоюға болады.', 'После проверки заведение увидят клиенты. До этого можно заполнить меню.'],
    'biz.type': ['Түрі', 'Тип'],
    'biz.name': ['Атауы', 'Название'],
    'biz.name_ru': ['Атауы орысша (міндетті емес)', 'Название на русском (необязательно)'],
    'biz.note': ['Қысқаша сипаттама', 'Короткое описание'],
    'biz.address': ['Мекенжай', 'Адрес'],
    'biz.address.find': ['Мекенжайды табу', 'Найти адрес'],
    'biz.location': ['Картадағы орны: картаны басып белгілеңіз', 'Место на карте: нажмите на карту'],
    'biz.cats': ['Ас түрі', 'Кухня'],
    'biz.fee': ['Жеткізу бағасы, ₸', 'Доставка, ₸'],
    'biz.min': ['Ең аз тапсырыс, ₸', 'Мин. заказ, ₸'],
    'biz.eta': ['Дайындау және жеткізу, мин', 'Готовка и доставка, мин'],
    'biz.emoji': ['Белгі', 'Значок'],
    'biz.save': ['Сақтау', 'Сохранить'],
    'biz.create': ['Тіркеу', 'Зарегистрировать'],
    'biz.saved': ['Сақталды', 'Сохранено'],
    'biz.pending': ['Мекеме тексерілуде. Клиенттер оны әкімші растағаннан кейін көреді.', 'Заведение на проверке. Клиенты увидят его после подтверждения.'],
    'biz.blocked': ['Мекеме бұғатталған. Қолдау қызметіне жазыңыз.', 'Заведение заблокировано. Напишите в поддержку.'],
    'biz.open': ['Тапсырыс қабылдау', 'Приём заказов'],
    'biz.open.on': ['Ашық, тапсырыс қабылдаймыз', 'Открыто, принимаем заказы'],
    'biz.open.off': ['Жабық', 'Закрыто'],
    'biz.today': ['Бүгін', 'Сегодня'],
    'biz.sales': ['Сатылым', 'Продажи'],
    'biz.payout': ['Сізге', 'Вам'],
    'biz.commission': ['Комиссия {p}%', 'Комиссия {p}%'],
    'biz.col.new': ['Жаңа', 'Новые'],
    'biz.col.cooking': ['Дайындалуда', 'Готовятся'],
    'biz.col.ready': ['Курьерді күтуде', 'Ждут курьера'],
    'biz.col.delivering': ['Жолда', 'В пути'],
    'biz.col.closed': ['Бүгін аяқталған', 'Завершённые сегодня'],
    'biz.accept': ['Қабылдау', 'Принять'],
    'biz.reject': ['Бас тарту', 'Отклонить'],
    'biz.ready': ['Дайын', 'Готово'],
    'biz.reject.q': ['Неге бас тартасыз?', 'Почему отказываете?'],
    'biz.reason.out': ['Тағам бітіп қалды', 'Закончилось блюдо'],
    'biz.reason.busy': ['Тапсырыс тым көп', 'Слишком много заказов'],
    'biz.reason.closing': ['Жабылып жатырмыз', 'Закрываемся'],
    'biz.no.orders': ['Әзірге тапсырыс жоқ. Жаңа тапсырыс келгенде дыбыс шығады.', 'Пока заказов нет. Когда придёт новый, прозвучит сигнал.'],
    'biz.new.order': ['Жаңа тапсырыс!', 'Новый заказ!'],
    'biz.courier': ['Курьер', 'Курьер'],
    'biz.courier.wait': ['Курьер іздестірілуде', 'Ищем курьера'],
    'biz.section.add': ['Бөлім қосу', 'Добавить раздел'],
    'biz.section.name': ['Бөлім атауы', 'Название раздела'],
    'biz.section.del': ['Бөлімді өшіру', 'Удалить раздел'],
    'biz.item.add': ['Тағам қосу', 'Добавить позицию'],
    'biz.item.edit': ['Өзгерту', 'Изменить'],
    'biz.item.name': ['Атауы', 'Название'],
    'biz.item.name_ru': ['Атауы орысша', 'Название на русском'],
    'biz.item.descr': ['Құрамы / сипаттама', 'Состав / описание'],
    'biz.item.price': ['Бағасы, ₸', 'Цена, ₸'],
    'biz.item.section': ['Бөлім', 'Раздел'],
    'biz.item.available': ['Сатылымда', 'В продаже'],
    'biz.item.surplus': ['Кешкі жеңілдік (қалдықсыз тамақ)', 'Вечерняя скидка (еда без отходов)'],
    'biz.item.old': ['Бұрынғы бағасы, ₸', 'Старая цена, ₸'],
    'biz.item.stock': ['Неше дана қалды', 'Сколько осталось'],
    'biz.item.del': ['Өшіру', 'Удалить'],
    'biz.item.del.q': ['Позицияны өшіресіз бе?', 'Удалить позицию?'],
    'biz.menu.empty': ['Мәзір бос. Бөлім мен тағам қосудан бастаңыз.', 'Меню пустое. Начните с раздела и блюд.'],
    'biz.no.section': ['Бөлімсіз', 'Без раздела'],
    'biz.status': ['Күйі', 'Статус'],
    'biz.photo': ['Фото', 'Фото'],
    'biz.photo.add': ['Фото қосу', 'Добавить фото'],
    'biz.photo.change': ['Ауыстыру', 'Заменить'],
    'biz.photo.remove': ['Алып тастау', 'Убрать'],
    'biz.photo.hint': ['Тағамның өз фотосы. Жарық жерде, жоғарыдан түсірілгені жақсы.', 'Настоящее фото блюда. Лучше при хорошем свете и сверху.'],
    'biz.cover': ['Мұқаба фотосы', 'Фото обложки'],
    'biz.cover.hint': ['Мекеменің немесе ең танымал тағамның фотосы. Тізімде осы көрінеді.', 'Фото заведения или самого популярного блюда. Его видно в списке.'],
    'biz.photo.uploading': ['Жүктеліп жатыр…', 'Загрузка…'],
    'biz.commission.l': ['Комиссия', 'Комиссия'],
    'pro.rating': ['Рейтинг', 'Рейтинг'],
    'biz.status.pending': ['Тексерілуде', 'На проверке'],
    'biz.status.approved': ['Расталды', 'Подтверждено'],
    'biz.status.blocked': ['Бұғатталған', 'Заблокировано'],
    'biz.add.venue': ['Тағы бір мекеме қосу', 'Добавить ещё заведение'],
    'biz.add.short': ['Жаңа мекеме', 'Новое заведение'],
    'biz.admin.mode': ['Әкімші режимі: барлық мекеме көрінеді. Келісім жасалған мейрамхананы осында қосып, мәзірін енгізіңіз, кейін әкімші панелінде иесінің телефонына беріңіз.', 'Режим администратора: видны все заведения. Добавьте ресторан, с которым есть договор, заполните меню, затем передайте его владельцу в панели администратора.'],
    'biz.order.n': ['Тапсырыс №{n}', 'Заказ №{n}'],
  });

  const P = { venues: null, vid: null, orders: [], menu: null, stats: null };
  try { P.vid = Number(localStorage.getItem(VID_KEY)) || null; } catch (e) { /* ignore */ }
  const venue = () => (P.venues || []).find((v) => v.id === P.vid) || null;
  const selectVenue = (id) => {
    P.vid = id;
    try { localStorage.setItem(VID_KEY, String(id)); } catch (e) { /* ignore */ }
  };

  async function loadVenues() {
    if (!B.session) { P.venues = null; return; }
    const all = B.session.user.is_admin ? '?all=1' : '';
    try { P.venues = await B.api.get('/api/partner/venues' + all); } catch (e) { P.venues = []; }
    if (P.venues.length && !venue()) selectVenue(P.venues[0].id);
  }
  async function loadOrders() {
    const v = venue();
    if (!v) { P.orders = []; P.stats = null; return; }
    try {
      [P.orders, P.stats] = await Promise.all([B.api.get(`/api/partner/venues/${v.id}/orders`), B.api.get(`/api/partner/venues/${v.id}/stats`)]);
    } catch (e) { P.orders = []; }
  }
  async function loadMenu() {
    const v = venue();
    P.menu = v ? await B.api.get(`/api/partner/venues/${v.id}/menu`) : null;
  }

  const welcome = () => `<div class="screen">
      <header class="tg-hero">${B.logo('logo-lg')}<h1 class="page-title">${t('biz.welcome')}</h1><p class="lead">${t('biz.welcome.sub')}</p></header>
      <button class="btn btn-primary btn-block btn-lg-c" data-act="login">${t('login.title')}</button>
      <a class="link center" href="/">${t('app.client')}</a>
    </div>`;
  const gate = () => {
    if (!B.session) return welcome();
    if (!P.venues) return `<div class="screen">${B.loading()}</div>`;
    if (!P.venues.length) return null;
    return '';
  };
  const statusBanner = (v) => (v.status === 'pending' ? `<p class="banner-info">${t('biz.pending')}</p>` : v.status === 'blocked' ? `<p class="banner-warn">${t('biz.blocked')}</p>` : '');
  const isAdmin = () => !!(B.session && B.session.user.is_admin);
  const switcher = () => (P.venues.length > 1 || isAdmin()
    ? `${isAdmin() ? `<p class="banner-info">${t('biz.admin.mode')}</p>` : ''}
      <div class="chips hscroll-chips">${P.venues.map((v) => `<button class="chip${v.id === P.vid ? ' on' : ''}" data-act="biz-pick" data-id="${v.id}">${B.art(v.emoji, 'art-inline')} ${B.esc(B.N(v))}</button>`).join('')}
      ${isAdmin() ? `<button class="chip" data-act="go" data-to="register">${B.ic('plus')}${t('biz.add.short')}</button>` : ''}</div>`
    : '');

  /* ---------- venue form (register and settings) ---------- */
  const EMOJIS = ['🍽️', '🥙', '🍔', '🍕', '🍣', '🍜', '🍲', '🥟', '🍢', '🍗', '🥩', '🥗', '☕', '🧋', '🍰', '🧁', '🍩', '🥐', '🥖', '🛒', '🧺', '💊', '🌸', '🧃'];
  function venueForm(v, isNew) {
    const f = Object.assign({ type: 'food', name: '', name_ru: '', note: '', address: '', lat: D.center.lat, lng: D.center.lng, cats: [], delivery_fee: 390, min_order: 2000, eta: [30, 45], emoji: '🍽️', hue: 30 }, v || {});
    const seg = (name, val, label) => `<button type="button" class="seg-btn${f[name] === val ? ' on' : ''}" data-act="vf-set" data-name="${name}" data-v="${val}"><span>${label}</span></button>`;
    return `<form id="venue-form" class="stack-16" novalidate>
        ${isNew ? `<div class="block"><h2 class="label">${t('biz.type')}</h2><div class="seg seg-wrap">${['food', 'shop', 'pharm'].map((x) => seg('type', x, t('biz.type.' + x))).join('')}</div><input type="hidden" name="type" value="${f.type}"></div>` : ''}
        ${photoField('cover_url', f.cover_url, t('biz.cover'), t('biz.cover.hint'), f.emoji, 'wide')}
        <label class="field"><span>${t('biz.name')}</span><input name="name" required maxlength="50" value="${B.esc(f.name)}"></label>
        <label class="field"><span>${t('biz.name_ru')}</span><input name="name_ru" maxlength="50" value="${B.esc(f.name_ru || '')}"></label>
        <label class="field"><span>${t('biz.note')}</span><input name="note" maxlength="160" value="${B.esc(f.note || '')}"></label>
        <label class="field"><span>${t('biz.address')}</span><input name="address" required maxlength="120" value="${B.esc(f.address)}"></label>
        <button type="button" class="btn btn-soft" data-act="vf-find">${B.ic('search')}<span>${t('biz.address.find')}</span></button>
        <div class="block"><p class="muted small">${t('biz.location')}</p><div class="mini-map" id="vf-map"></div></div>
        <input type="hidden" name="lat" value="${f.lat}"><input type="hidden" name="lng" value="${f.lng}">
        ${f.type === 'food' ? `<div class="block"><h2 class="label">${t('biz.cats')}</h2><div class="chips">${D.cats.filter((c) => c.id !== 'all').map((c) => `<button type="button" class="chip${f.cats.includes(c.id) ? ' on' : ''}" data-act="vf-cat" data-v="${c.id}">${B.art(c.e, 'art-inline')} ${L_(c.n)}</button>`).join('')}</div></div>` : ''}
        <div class="field-row">
          <label class="field"><span>${t('biz.fee')}</span><input name="delivery_fee" type="number" inputmode="numeric" min="0" max="5000" value="${f.delivery_fee}"></label>
          <label class="field"><span>${t('biz.min')}</span><input name="min_order" type="number" inputmode="numeric" min="0" value="${f.min_order}"></label>
        </div>
        <div class="field-row">
          <label class="field"><span>${t('biz.eta')}</span><input name="eta_min" type="number" inputmode="numeric" min="5" max="180" value="${f.eta[0]}"></label>
          <label class="field"><span>&nbsp;</span><input name="eta_max" type="number" inputmode="numeric" min="5" max="240" value="${f.eta[1]}" aria-label="${t('biz.eta')}"></label>
        </div>
        <div class="block"><h2 class="label">${t('biz.emoji')}</h2><div class="chips emoji-chips">${EMOJIS.map((e) => `<button type="button" class="chip${f.emoji === e ? ' on' : ''}" data-act="vf-emoji" data-v="${e}" aria-label="${e}">${B.art(e)}</button>`).join('')}</div><input type="hidden" name="emoji" value="${f.emoji}"></div>
        <p class="form-err" id="vf-err" hidden></p>
        <button class="btn btn-primary btn-block btn-lg-c" type="submit">${t(isNew ? 'biz.create' : 'biz.save')}</button>
      </form>`;
  }
  // A photo picker inside a form: preview, add/replace, remove. The URL travels in a hidden input.
  function photoField(name, url, label, hint, emoji, shape) {
    return `<div class="block photo-field" data-photo="${name}">
        <h2 class="label">${label}</h2>
        <div class="photo-row">
          <span class="photo-prev ${shape || ''}" aria-hidden="true">${url ? `<img src="${B.esc(url)}" alt="">` : B.art(emoji || '📷')}</span>
          <span class="photo-btns">
            <button type="button" class="btn btn-soft btn-sm" data-act="photo-pick" data-name="${name}" data-max="${shape === 'wide' ? 1600 : 1000}">${B.ic('plus')}<span>${t(url ? 'biz.photo.change' : 'biz.photo.add')}</span></button>
            ${url ? `<button type="button" class="btn btn-soft-bad btn-sm" data-act="photo-clear" data-name="${name}">${t('biz.photo.remove')}</button>` : ''}
          </span>
        </div>
        <p class="muted small">${hint}</p>
        <input type="hidden" name="${name}" value="${B.esc(url || '')}">
      </div>`;
  }
  const photoBox = (name) => document.querySelector(`[data-photo="${name}"]`);
  function setPhoto(name, url) {
    const box = photoBox(name);
    if (!box) return;
    box.querySelector('input[type=hidden]').value = url || '';
    box.querySelector('.photo-prev').innerHTML = url ? `<img src="${B.esc(url)}" alt="">` : B.art('📷');
    const btns = box.querySelector('.photo-btns');
    const pick = btns.querySelector('[data-act="photo-pick"]');
    btns.innerHTML = `<button type="button" class="btn btn-soft btn-sm" data-act="photo-pick" data-name="${name}" data-max="${pick.dataset.max}">${B.ic('plus')}<span>${t(url ? 'biz.photo.change' : 'biz.photo.add')}</span></button>`
      + (url ? `<button type="button" class="btn btn-soft-bad btn-sm" data-act="photo-clear" data-name="${name}">${t('biz.photo.remove')}</button>` : '');
  }
  B.actions['photo-pick'] = async (el) => {
    const label = el.querySelector('span');
    const old = label.textContent;
    try {
      const pending = B.pickPhoto(Number(el.dataset.max));
      label.textContent = t('biz.photo.uploading');
      el.disabled = true;
      setPhoto(el.dataset.name, await pending);
    } catch (e) {
      if (e.code !== 'cancelled') B.fail(e);
      label.textContent = old;
      el.disabled = false;
    }
  };
  B.actions['photo-clear'] = (el) => setPhoto(el.dataset.name, null);
  const photoValue = (form, name) => (form.querySelector(`input[name="${name}"]`) ? form.querySelector(`input[name="${name}"]`).value || null : undefined);

  function bindVenueForm(v, onSaved) {
    const form = document.getElementById('venue-form');
    if (!form) return () => {};
    const cats = new Set((v && v.cats) || []);
    const mapEl = document.getElementById('vf-map');
    const map = B.map.create(mapEl, { zoom: 14, center: { lat: +form.lat.value, lng: +form.lng.value }, scrollWheelZoom: false });
    let pin = L.marker([+form.lat.value, +form.lng.value], { icon: B.map.pin('store', B.art(form.emoji.value)), interactive: false }).addTo(map);
    const setPos = (lat, lng) => {
      form.lat.value = lat;
      form.lng.value = lng;
      pin.setLatLng([lat, lng]);
      map.setView([lat, lng], Math.max(map.getZoom(), 15));
    };
    map.on('click', (e) => setPos(e.latlng.lat, e.latlng.lng));
    requestAnimationFrame(() => map.invalidateSize());

    Object.assign(B.actions, {
      'vf-set': (el) => {
        form[el.dataset.name].value = el.dataset.v;
        form.querySelectorAll(`[data-act="vf-set"][data-name="${el.dataset.name}"]`).forEach((b) => b.classList.toggle('on', b === el));
      },
      'vf-cat': (el) => {
        const c = el.dataset.v;
        if (cats.has(c)) cats.delete(c); else if (cats.size < 3) cats.add(c);
        el.classList.toggle('on', cats.has(c));
      },
      'vf-emoji': (el) => {
        form.emoji.value = el.dataset.v;
        form.querySelectorAll('[data-act="vf-emoji"]').forEach((b) => b.classList.toggle('on', b === el));
        pin.setIcon(B.map.pin('store', B.art(el.dataset.v)));
      },
      'vf-find': () => B.addressSheet({
        title: t('biz.address'), gps: true,
        onPick: (pl) => {
          form.address.value = [L_(pl.n), L_(pl.a)].filter(Boolean).join(', ').slice(0, 120);
          setPos(pl.lat, pl.lng);
        },
      }),
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(form).entries());
      const body = {
        name: fd.name, name_ru: fd.name_ru, note: fd.note, address: fd.address,
        lat: Number(fd.lat), lng: Number(fd.lng), emoji: fd.emoji,
        delivery_fee: Number(fd.delivery_fee), min_order: Number(fd.min_order),
        eta_min: Number(fd.eta_min), eta_max: Number(fd.eta_max), cats: [...cats],
        cover_url: photoValue(form, 'cover_url'),
      };
      if (fd.type) body.type = fd.type;
      try {
        const saved = v ? await B.api.patch(`/api/partner/venues/${v.id}`, body) : await B.api.post('/api/partner/venues', body);
        B.toast(t('biz.saved'));
        onSaved(saved);
      } catch (err) {
        const el = document.getElementById('vf-err');
        if (el) { el.textContent = B.errText(err); el.hidden = false; }
      }
    });
    return () => map.remove();
  }

  B.screens.register = function () {
    let cleanup = () => {};
    return {
      html: `<div class="screen">
          ${P.venues && P.venues.length ? B.topbar(t('biz.register')) : `<h1 class="page-title">${t('biz.register')}</h1>`}
          <p class="muted">${t('biz.register.sub')}</p>
          ${venueForm(null, true)}
        </div>`,
      mount() {
        cleanup = bindVenueForm(null, async (v) => {
          selectVenue(v.id);
          await loadVenues();
          B.reset([{ name: 'menu', params: {} }]);
        });
      },
      unmount: () => cleanup(),
    };
  };

  /* ---------- orders ---------- */
  function orderCard(o) {
    const items = (o.items || []).map((l) => `<li><span>${B.art(l.emoji, 'art-inline')} ${B.esc(B.N(l))}</span><b>× ${l.q}</b></li>`).join('');
    const actions = {
      new: `<button class="btn btn-soft-bad" data-act="biz-reject" data-id="${o.id}">${t('biz.reject')}</button><button class="btn btn-primary" data-act="biz-status" data-id="${o.id}" data-s="cooking">${t('biz.accept')}</button>`,
      cooking: `<button class="btn btn-primary btn-block" data-act="biz-status" data-id="${o.id}" data-s="ready">${t('biz.ready')}</button>`,
    }[o.status] || '';
    return `<article class="biz-order${o.status === 'new' ? ' is-new' : ''}">
        <div class="biz-order-head">
          <b>${t('biz.order.n', { n: o.id })}</b>
          <span class="muted small">${B.hm(o.created_at)}</span>
          <span class="tag">${B.has('biz.col.' + o.status) ? t('biz.col.' + o.status) : B.statusText(o)}</span>
        </div>
        <ul class="biz-items">${items}</ul>
        ${o.comment ? `<p class="note">💬 ${B.esc(o.comment)}</p>` : ''}
        <dl class="rows">
          <div><dt>${B.esc(o.client.name || '—')}${o.client.phone ? ` · <button class="link" data-act="biz-call" data-id="${o.id}">${B.esc(B.phone(o.client.phone))}</button>` : ''}</dt><dd>${B.money(o.subtotal)}</dd></div>
          ${o.venue && o.venue.payout != null ? `<div><dt>${t('biz.payout')}</dt><dd><b>${B.money(o.venue.payout)}</b></dd></div>` : ''}
          ${['cooking', 'ready', 'delivering'].includes(o.status) ? `<div><dt>${t('biz.courier')}</dt><dd>${o.worker ? B.esc(o.worker.name) + (o.worker.phone ? ' · ' + B.esc(B.phone(o.worker.phone)) : '') : t('biz.courier.wait')}</dd></div>` : ''}
          ${o.status === 'cancelled' && o.cancel_reason ? `<div><dt>${t('st.cancelled')}</dt><dd>${B.esc(B.cancelText(o))}</dd></div>` : ''}
        </dl>
        ${actions ? `<div class="btn-row">${actions}</div>` : ''}
      </article>`;
  }

  B.screens.porders = function () {
    const g = gate();
    if (g === null) return { html: '', mount: () => B.replace('register') };
    if (g) return { html: g };
    let v = venue();
    const cols = ['new', 'cooking', 'ready', 'delivering'];
    const body = () => {
      v = venue() || v;
      const s = P.stats;
      const groups = cols.map((c) => [c, P.orders.filter((o) => o.status === c)]).filter(([, l]) => l.length);
      const closed = P.orders.filter((o) => !B.isActive(o));
      return `${statusBanner(v)}
        <button class="toggle-row" role="switch" aria-checked="${v.is_open}" data-act="biz-open">
          <span class="icon-box">${B.ic('shop')}</span>
          <span class="lr-text"><b>${t('biz.open')}</b><em>${t(v.is_open ? 'biz.open.on' : 'biz.open.off')}</em></span>
          <span class="switch${v.is_open ? ' on' : ''}" aria-hidden="true"><i></i></span>
        </button>
        ${s ? `<div class="pro-stats">
            <span><small>${t('biz.today')}</small><b>${s.orders}</b><em>${t('nav.orders').toLowerCase()}</em></span>
            <span><small>${t('biz.sales')}</small><b>${B.money(s.sales)}</b><em>${t('biz.commission', { p: Math.round(s.commission * 100) })}</em></span>
            <span><small>${t('biz.payout')}</small><b>${B.money(s.payout)}</b></span>
          </div>` : ''}
        ${groups.length ? groups.map(([c, l]) => `<section class="block"><h2 class="label">${t('biz.col.' + c)} · ${l.length}</h2>${l.map(orderCard).join('')}</section>`).join('')
          : `<div class="waiting card pro-card"><span class="radar" aria-hidden="true"><i></i><i></i></span><p class="muted">${t('biz.no.orders')}</p></div>`}
        ${closed.length ? `<details class="block"><summary class="label">${t('biz.col.closed')} · ${closed.length}</summary>${closed.map(orderCard).join('')}</details>` : ''}`;
    };
    const redraw = () => { const el = document.getElementById('biz-body'); if (el) el.innerHTML = body(); };

    Object.assign(B.actions, {
      'biz-pick': async (el) => { selectVenue(Number(el.dataset.id)); await loadOrders(); B.refresh(); },
      'biz-open': async () => {
        try {
          const nv = await B.api.patch(`/api/partner/venues/${v.id}`, { is_open: !v.is_open });
          Object.assign(v, nv);
          redraw();
        } catch (e) { B.fail(e); }
      },
      'biz-status': async (el) => {
        el.disabled = true;
        try {
          await B.api.post(`/api/partner/orders/${el.dataset.id}/status`, { status: el.dataset.s });
          await loadOrders();
          redraw();
        } catch (e) { B.fail(e); el.disabled = false; }
      },
      'biz-reject': (el) => {
        const id = el.dataset.id;
        B.sheet.open(`<div class="sheet-body">
            <h3 class="sheet-title">${t('biz.reject.q')}</h3>
            <div class="list card">${['out', 'busy', 'closing'].map((r) => `<button class="list-row" data-act="biz-reject-go" data-id="${id}" data-r="${t('biz.reason.' + r)}"><span class="lr-text"><b>${t('biz.reason.' + r)}</b></span></button>`).join('')}</div>
            <button class="btn btn-soft" data-act="sheet-close">${t('cancel')}</button>
          </div>`, { label: t('biz.reject.q') });
      },
      'biz-reject-go': async (el) => {
        B.sheet.close(true);
        try {
          await B.api.post(`/api/partner/orders/${el.dataset.id}/status`, { status: 'cancelled', reason: el.dataset.r });
          await loadOrders();
          redraw();
        } catch (e) { B.fail(e); }
      },
      'biz-call': (el) => {
        const o = P.orders.find((x) => x.id === Number(el.dataset.id));
        if (o) B.callSheet(o.client.name, o.client.phone);
      },
    });

    return {
      html: `<div class="screen"><h1 class="page-title">${B.art(v.emoji, 'art-inline')} ${B.esc(B.N(v))}</h1>${switcher()}<div id="biz-body" class="stack-16">${body()}</div></div>`,
      async mount() { await loadVenues(); await loadOrders(); redraw(); },
      async onOrder(o) {
        if (!o.venue || o.venue.id !== P.vid) return;
        const known = P.orders.some((x) => x.id === o.id);
        await loadOrders();
        redraw();
        if (!known && o.status === 'new') { B.beep(); B.toast(t('biz.new.order')); }
      },
    };
  };

  /* ---------- menu ---------- */
  function itemForm(it, sections) {
    const f = Object.assign({ name: '', name_ru: '', descr: '', price: '', emoji: '🍽️', section_id: sections[0] ? sections[0].id : '', available: 1, old_price: null, stock: null }, it || {});
    const surplus = f.old_price != null;
    return `<form class="sheet-body" id="item-form" novalidate>
        <h3 class="sheet-title">${t(it ? 'biz.item.edit' : 'biz.item.add')}</h3>
        ${photoField('photo_url', f.photo_url, t('biz.photo'), t('biz.photo.hint'), f.emoji)}
        <label class="field"><span>${t('biz.item.name')}</span><input name="name" required maxlength="60" value="${B.esc(f.name)}"></label>
        <label class="field"><span>${t('biz.item.name_ru')}</span><input name="name_ru" maxlength="60" value="${B.esc(f.name_ru || '')}"></label>
        <label class="field"><span>${t('biz.item.descr')}</span><input name="descr" maxlength="140" value="${B.esc(f.descr || '')}"></label>
        <div class="field-row">
          <label class="field"><span>${t('biz.item.price')}</span><input name="price" type="number" inputmode="numeric" min="1" required value="${f.price}"></label>
          <label class="field"><span>${t('biz.emoji')}</span><input name="emoji" maxlength="8" value="${B.esc(f.emoji)}"></label>
        </div>
        ${sections.length ? `<label class="field"><span>${t('biz.item.section')}</span><select name="section_id">${sections.map((s) => `<option value="${s.id}" ${s.id === f.section_id ? 'selected' : ''}>${B.esc(B.N(s))}</option>`).join('')}</select></label>` : ''}
        <label class="check-row"><input type="checkbox" name="available" ${f.available ? 'checked' : ''}><span>${t('biz.item.available')}</span></label>
        <label class="check-row"><input type="checkbox" name="surplus" id="if-surplus" ${surplus ? 'checked' : ''}><span>${t('biz.item.surplus')}</span></label>
        <div class="field-row" id="if-surplus-fields" ${surplus ? '' : 'hidden'}>
          <label class="field"><span>${t('biz.item.old')}</span><input name="old_price" type="number" inputmode="numeric" min="1" value="${f.old_price || ''}"></label>
          <label class="field"><span>${t('biz.item.stock')}</span><input name="stock" type="number" inputmode="numeric" min="0" value="${f.stock != null ? f.stock : ''}"></label>
        </div>
        <p class="form-err" id="if-err" hidden></p>
        <div class="btn-row">
          ${it ? `<button type="button" class="btn btn-soft-bad" data-act="item-del" data-id="${it.id}">${t('biz.item.del')}</button>` : ''}
          <button class="btn btn-primary" type="submit">${t('biz.save')}</button>
        </div>
      </form>`;
  }

  B.screens.menu = function () {
    const g = gate();
    if (g === null) return { html: '', mount: () => B.replace('register') };
    if (g) return { html: g };
    let v = venue();

    const body = () => {
      if (!P.menu || P.menu.id !== v.id) return B.loading();
      const { sections, items } = P.menu;
      const groups = sections.map((s) => ({ s, items: items.filter((i) => i.section_id === s.id) }));
      const loose = items.filter((i) => !i.section_id || !sections.some((s) => s.id === i.section_id));
      if (loose.length) groups.push({ s: { id: 0, name: t('biz.no.section') }, items: loose });
      const row = (it) => `<div class="item">
          <span class="cover item-pic" style="--h:${v.hue}" aria-hidden="true">${it.photo_url ? `<img class="cover-img" src="${B.esc(it.photo_url)}" alt="" loading="lazy">` : B.art(it.emoji)}</span>
          <button class="item-body as-btn" data-act="item-edit" data-id="${it.id}">
            <b class="item-name">${B.esc(it.name)}</b>
            ${it.descr ? `<span class="item-desc">${B.esc(it.descr)}</span>` : ''}
            <span class="item-price">${B.money(it.price)}${it.old_price ? ` <s>${B.money(it.old_price)}</s> · ${it.stock ?? '∞'}` : ''}</span>
          </button>
          <button class="switch${it.available ? ' on' : ''}" role="switch" aria-checked="${!!it.available}" aria-label="${t('biz.item.available')}" data-act="item-toggle" data-id="${it.id}"><i></i></button>
        </div>`;
      return `${statusBanner(v)}
        ${!items.length && !sections.length ? `<p class="muted">${t('biz.menu.empty')}</p>` : ''}
        ${groups.map((gr) => `<section class="menu-sec">
            <div class="block-head row"><h2 class="h2">${B.esc(B.N(gr.s))}</h2>${gr.s.id ? `<button class="icon-btn" data-act="sec-del" data-id="${gr.s.id}" aria-label="${t('biz.section.del')}">${B.ic('trash')}</button>` : ''}</div>
            ${gr.items.length ? `<div class="menu-list">${gr.items.map(row).join('')}</div>` : ''}
          </section>`).join('')}
        <div class="btn-row">
          <button class="btn btn-soft" data-act="sec-add">${B.ic('plus')}<span>${t('biz.section.add')}</span></button>
          <button class="btn btn-primary" data-act="item-add">${B.ic('plus')}<span>${t('biz.item.add')}</span></button>
        </div>`;
    };
    const redraw = () => { const el = document.getElementById('menu-body'); if (el) el.innerHTML = body(); };
    const reloadMenu = async () => { await loadMenu(); redraw(); };
    const firstLoad = async () => { await loadVenues(); v = venue() || v; await reloadMenu(); };

    function openItem(it) {
      B.sheet.open(itemForm(it, P.menu.sections), { label: t(it ? 'biz.item.edit' : 'biz.item.add'), focus: it ? null : '#item-form input[name=name]' });
      const form = document.getElementById('item-form');
      form.querySelector('#if-surplus').addEventListener('change', (e) => { form.querySelector('#if-surplus-fields').hidden = !e.target.checked; });
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const surplus = fd.get('surplus') === 'on';
        const body = {
          name: fd.get('name'), name_ru: fd.get('name_ru'), descr: fd.get('descr'),
          price: Number(fd.get('price')), emoji: fd.get('emoji') || '🍽️',
          available: fd.get('available') === 'on',
          old_price: surplus && fd.get('old_price') ? Number(fd.get('old_price')) : null,
          stock: surplus && fd.get('stock') !== '' ? Number(fd.get('stock')) : null,
          photo_url: fd.get('photo_url') || null,
        };
        if (fd.get('section_id')) body.section_id = Number(fd.get('section_id'));
        try {
          if (it) await B.api.patch(`/api/partner/items/${it.id}`, body);
          else await B.api.post(`/api/partner/venues/${v.id}/items`, body);
          B.sheet.close(true);
          B.toast(t('biz.saved'));
          reloadMenu();
        } catch (err) {
          const el = document.getElementById('if-err');
          if (el) { el.textContent = B.errText(err); el.hidden = false; }
        }
      });
    }

    Object.assign(B.actions, {
      'item-add': () => openItem(null),
      'item-edit': (el) => openItem(P.menu.items.find((i) => i.id === Number(el.dataset.id))),
      'item-toggle': async (el) => {
        const it = P.menu.items.find((i) => i.id === Number(el.dataset.id));
        try {
          await B.api.patch(`/api/partner/items/${it.id}`, { available: !it.available });
          reloadMenu();
        } catch (e) { B.fail(e); }
      },
      'item-del': (el) => B.confirm(t('biz.item.del.q'), '', t('biz.item.del'), async () => {
        try { await B.api.del(`/api/partner/items/${el.dataset.id}`); reloadMenu(); } catch (e) { B.fail(e); }
      }, true),
      'sec-add': () => {
        B.sheet.open(`<form class="sheet-body" id="sec-form" novalidate>
            <h3 class="sheet-title">${t('biz.section.add')}</h3>
            <label class="field"><span>${t('biz.section.name')}</span><input name="name" required maxlength="40"></label>
            <label class="field"><span>${t('biz.name_ru')}</span><input name="name_ru" maxlength="40"></label>
            <button class="btn btn-primary btn-block" type="submit">${t('biz.save')}</button>
          </form>`, { focus: '#sec-form input[name=name]', label: t('biz.section.add') });
        document.getElementById('sec-form').addEventListener('submit', async (e) => {
          e.preventDefault();
          const fd = new FormData(e.target);
          try {
            await B.api.post(`/api/partner/venues/${v.id}/sections`, { name: fd.get('name'), name_ru: fd.get('name_ru') });
            B.sheet.close(true);
            reloadMenu();
          } catch (err) { B.fail(err); }
        });
      },
      'sec-del': (el) => B.confirm(t('biz.section.del') + '?', '', t('biz.item.del'), async () => {
        try { await B.api.del(`/api/partner/sections/${el.dataset.id}`); reloadMenu(); } catch (e) { B.fail(e); }
      }, true),
      'biz-pick': async (el) => { selectVenue(Number(el.dataset.id)); P.menu = null; B.refresh(); },
    });

    return {
      html: `<div class="screen"><h1 class="page-title">${t('biz.nav.menu')}</h1>${switcher()}<div id="menu-body" class="stack-16">${body()}</div></div>`,
      mount: firstLoad,
    };
  };

  /* ---------- venue settings ---------- */
  B.screens.venue = function () {
    const g = gate();
    if (g === null) return { html: '', mount: () => B.replace('register') };
    if (g) return { html: g };
    const v = venue();
    let cleanup = () => {};
    const seg = (act, cur, opts) => `<div class="seg" role="radiogroup">${opts.map(([val, label]) => `<button class="seg-btn${cur === val ? ' on' : ''}" role="radio" aria-checked="${cur === val}" data-act="${act}" data-v="${val}"><span>${label}</span></button>`).join('')}</div>`;
    Object.assign(B.actions, {
      'pf-lang': (el) => { B.state.lang = el.dataset.v; B.save(); B.applyLang(); B.refresh(); },
      'pf-logout': () => B.confirm(t('pf.logout.q'), '', t('pf.logout'), async () => { await B.logout(); P.venues = null; B.tab('porders'); }, true),
      'biz-new': () => B.go('register'),
      'biz-pick': async (el) => { selectVenue(Number(el.dataset.id)); B.refresh(); },
    });
    return {
      html: `<div class="screen">
          <h1 class="page-title">${t('biz.nav.venue')}</h1>
          ${switcher()}
          <section class="card pro-card"><dl class="rows">
            <div><dt>${t('biz.type')}</dt><dd>${t('biz.type.' + v.type)}</dd></div>
            <div><dt>${t('biz.status')}</dt><dd><span class="tag${v.status === 'approved' ? ' tag-local' : ''}">${t('biz.status.' + v.status)}</span></dd></div>
            <div><dt>${t('biz.commission.l')}</dt><dd>${Math.round(v.commission * 100)}%</dd></div>
            <div><dt>${t('pro.rating')}</dt><dd>${B.ic('star', 'ic-star')}${B.dec(v.rating, 1)}</dd></div>
          </dl></section>
          ${venueForm(v, false)}
          <button class="btn btn-soft" data-act="biz-new">${B.ic('plus')}<span>${t('biz.add.venue')}</span></button>
          <section class="block"><h2 class="label">${t('pf.lang')}</h2>${seg('pf-lang', B.state.lang, [['kk', 'Қазақша'], ['ru', 'Русский']])}</section>
          <a class="join-banner" href="/">${B.ic('home')}<span><b>${t('app.client')}</b></span>${B.ic('chev', 'chev')}</a>
          <button class="btn btn-soft-bad" data-act="pf-logout">${B.ic('logout')}<span>${t('pf.logout')}</span></button>
        </div>`,
      mount() {
        cleanup = bindVenueForm(v, async () => { await loadVenues(); B.refresh(); });
      },
      unmount: () => cleanup(),
    };
  };

  B.actions.login = () => B.login(null, { why: t('biz.welcome.sub') });

  (async function () {
    B.tabs = [['porders', 'receipt', 'biz.nav.orders'], ['menu', 'list', 'biz.nav.menu'], ['venue', 'settings', 'biz.nav.venue']];
    B.applyTheme();
    B.applyLang();
    await B.loadConfig();
    await B.loadSession();
    await loadVenues();
    B.start('porders');
    B.bus.on('session', async () => { await loadVenues(); B.tab('porders'); });
  })();
})();
