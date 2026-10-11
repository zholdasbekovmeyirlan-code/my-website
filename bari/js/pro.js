/* Бәрі Pro — the app for drivers and couriers: apply, go online, take orders, earn. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);

  B.addStrings({
    'pro.nav.work': ['Жұмыс', 'Работа'],
    'pro.nav.history': ['Тарих', 'История'],
    'pro.nav.me': ['Профиль', 'Профиль'],
    'pro.welcome': ['Бәрі Pro', 'Бәрі Pro'],
    'pro.welcome.sub': ['Жүргізушілер мен курьерлерге арналған қосымша. Табыстың 90%-ы сізде қалады, шай-пұлдың бәрі сізге.', 'Приложение для водителей и курьеров. 90% дохода остаётся у вас, чаевые целиком ваши.'],
    'pro.apply.title': ['Жұмысқа өтінім', 'Заявка на работу'],
    'pro.apply.sub': ['Өтінімді әкімші тексереді. Құжаттарыңызды (куәлік, техпаспорт) бірінші кездесуде көрсетесіз.', 'Заявку проверит администратор. Документы (права, техпаспорт) покажете при первой встрече.'],
    'pro.kind.driver': ['Жүргізуші', 'Водитель'],
    'pro.kind.courier': ['Курьер', 'Курьер'],
    'pro.car_model': ['Көлік маркасы мен моделі', 'Марка и модель авто'],
    'pro.car_model.ph': ['Мысалы: Toyota Camry', 'Например: Toyota Camry'],
    'pro.car_color': ['Түсі', 'Цвет'],
    'pro.car_color.ph': ['Мысалы: ақ', 'Например: белый'],
    'pro.car_plate': ['Мемлекеттік нөмір', 'Госномер'],
    'pro.car_class': ['Көлік сыныбы', 'Класс авто'],
    'pro.child_seat': ['Балалар креслосы бар', 'Есть детское кресло'],
    'pro.vehicle': ['Немен жеткізесіз?', 'На чём доставляете?'],
    'pro.apply.send': ['Өтінім жіберу', 'Отправить заявку'],
    'pro.pending': ['Өтінім қаралуда', 'Заявка на проверке'],
    'pro.pending.sub': ['Әкімші тексерген соң желіге шыға аласыз. Әдетте бір күн ішінде.', 'После проверки администратором вы сможете выйти на линию. Обычно в течение дня.'],
    'pro.blocked': ['Аккаунт бұғатталған', 'Аккаунт заблокирован'],
    'pro.blocked.sub': ['Сұрақтар болса, қолдау қызметіне жазыңыз.', 'Если есть вопросы, напишите в поддержку.'],
    'pro.check': ['Тексеру', 'Проверить'],
    'pro.reapply': ['Деректерді өзгерту', 'Изменить данные'],
    'pro.offline': ['Желіден тыссыз', 'Вы не на линии'],
    'pro.offline.sub': ['Тапсырыс алу үшін желіге шығыңыз.', 'Выйдите на линию, чтобы получать заказы.'],
    'pro.go.online': ['Желіге шығу', 'Выйти на линию'],
    'pro.go.offline': ['Желіден шығу', 'Уйти с линии'],
    'pro.online': ['Желідесіз', 'Вы на линии'],
    'pro.waiting': ['Жаңа тапсырыстар осында шығады.', 'Новые заказы появятся здесь.'],
    'pro.offers': ['Тапсырыстар', 'Заказы'],
    'pro.today': ['Бүгін', 'Сегодня'],
    'pro.trips': ['{n} тапсырыс', '{n} заказов'],
    'pro.rating': ['Рейтинг', 'Рейтинг'],
    'pro.accept': ['Қабылдау', 'Принять'],
    'pro.you.get': ['Сізге', 'Вам'],
    'pro.away': ['{km} км қашықта', '{km} км от вас'],
    'pro.new.offer': ['Жаңа тапсырыс!', 'Новый заказ!'],
    'pro.step.ride.accepted': ['Келдім', 'Я на месте'],
    'pro.step.ride.arrived': ['Сапарды бастау', 'Начать поездку'],
    'pro.step.ride.riding': ['Сапарды аяқтау', 'Завершить поездку'],
    'pro.step.parcel.accepted': ['Сәлемдемені алдым', 'Посылку забрал'],
    'pro.step.parcel.picked': ['Жеткіздім', 'Доставил'],
    'pro.step.delivery.cooking': ['Дайындалуын күтіңіз', 'Ждите приготовления'],
    'pro.step.delivery.ready': ['Тапсырысты алдым', 'Заказ забрал'],
    'pro.step.delivery.delivering': ['Жеткіздім', 'Доставил'],
    'pro.cur.ride.accepted': ['Клиентке барыңыз', 'Едьте к клиенту'],
    'pro.cur.ride.arrived': ['Клиентті күтіңіз', 'Ожидайте клиента'],
    'pro.cur.ride.riding': ['Клиентті жеткізіңіз', 'Везите клиента'],
    'pro.cur.parcel.accepted': ['Сәлемдемені алыңыз', 'Заберите посылку'],
    'pro.cur.parcel.picked': ['Сәлемдемені жеткізіңіз', 'Доставьте посылку'],
    'pro.cur.delivery.cooking': ['Мекемеге барыңыз, тапсырыс дайындалуда', 'Езжайте в заведение, заказ готовится'],
    'pro.cur.delivery.ready': ['Тапсырыс дайын, алыңыз', 'Заказ готов, заберите'],
    'pro.cur.delivery.delivering': ['Тапсырысты клиентке жеткізіңіз', 'Доставьте заказ клиенту'],
    'pro.release': ['Бас тарту', 'Отказаться'],
    'pro.release.q': ['Тапсырыстан бас тартасыз ба?', 'Отказаться от заказа?'],
    'pro.release.text': ['Тапсырыс басқа жүргізушілерге қайта ұсынылады.', 'Заказ снова предложат другим.'],
    'pro.navigate': ['Маршрут', 'Маршрут'],
    'pro.call.client': ['Клиент', 'Клиент'],
    'pro.pickup': ['Алу орны', 'Откуда забрать'],
    'pro.dropoff': ['Жеткізу орны', 'Куда доставить'],
    'pro.done.toast': ['Аяқталды! Табыс: {sum}', 'Готово! Заработок: {sum}'],
    'pro.client.cancel': ['Клиент тапсырыстан бас тартты', 'Клиент отменил заказ'],
    'pro.gps.off': ['GPS қолжетімсіз. Картаны басып, орныңызды белгілеңіз.', 'GPS недоступен. Отметьте своё место, нажав на карту.'],
    'pro.gps.set': ['Орныңыз белгіленді', 'Местоположение отмечено'],
    'pro.sim': ['Тест: маршрутпен автоматты жүру', 'Тест: ехать по маршруту автоматически'],
    'pro.history.empty': ['Аяқталған тапсырыстар осында көрінеді.', 'Завершённые заказы появятся здесь.'],
    'pro.earned': ['Табыс', 'Заработок'],
    'pro.items': ['Тапсырыс құрамы', 'Состав заказа'],
    'pro.class.econom': ['Эконом', 'Эконом'],
    'pro.class.comfort': ['Комфорт', 'Комфорт'],
    'pro.class.business': ['Бизнес', 'Бизнес'],
    'kind.ride': ['Сапар', 'Поездка'],
    'kind.parcel': ['Сәлемдеме', 'Посылка'],
    'kind.delivery': ['Жеткізу', 'Доставка'],
  });

  /* ---------- worker state ---------- */
  const W = {
    info: null, // { worker, current, stats }
    offers: [],
    pos: null,
    gps: 'unknown', // 'on' | 'off' | 'unknown'
    sim: false,
  };
  B.pro = W;

  async function loadWorker() {
    if (!B.session) { W.info = null; return; }
    try { W.info = await B.api.get('/api/worker'); } catch (e) { W.info = null; }
    if (W.info && W.info.worker && W.info.worker.lat != null && !W.pos) W.pos = { lat: W.info.worker.lat, lng: W.info.worker.lng };
  }
  async function loadOffers() {
    const w = W.info && W.info.worker;
    if (!w || w.status !== 'approved' || !w.online || W.info.current) { W.offers = []; return; }
    const before = new Set(W.offers.map((o) => o.id));
    const first = !W.offersLoaded;
    try { W.offers = await B.api.get('/api/worker/offers'); } catch (e) { W.offers = []; }
    W.offersLoaded = true;
    if (!first && W.offers.some((o) => !before.has(o.id))) { B.beep(); B.toast(t('pro.new.offer')); }
  }

  /* ---------- location ---------- */
  let watchId = null, lastSent = 0;
  function sendLoc(force) {
    if (!W.pos || !W.info || !W.info.worker || !W.info.worker.online) return;
    const now = Date.now();
    if (!force && now - lastSent < 3000) return;
    lastSent = now;
    B.api.post('/api/worker/location', W.pos).catch(() => {});
  }
  function startGps() {
    if (watchId != null || !navigator.geolocation) { if (!navigator.geolocation) W.gps = 'off'; return; }
    watchId = navigator.geolocation.watchPosition(
      (p) => {
        W.gps = 'on';
        if (W.sim) return;
        W.pos = { lat: p.coords.latitude, lng: p.coords.longitude };
        sendLoc();
        B.bus.emit('pro-pos', W.pos);
      },
      () => { W.gps = 'off'; B.bus.emit('pro-pos', W.pos); },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
    );
  }
  function stopGps() {
    if (watchId != null && navigator.geolocation) navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
  // Keep the server informed even when standing still, so the worker stays online.
  setInterval(() => sendLoc(true), 60000);

  function targetOf(o) {
    if (!o) return null;
    if (o.kind === 'delivery') return ['cooking', 'ready'].includes(o.status) ? o.from : o.to;
    return ['accepted', 'arrived'].includes(o.status) ? o.from : o.to;
  }
  // Test mode: move along the route so the client sees the car driving.
  setInterval(() => {
    if (!W.sim || !W.pos || !W.info || !W.info.current) return;
    const target = targetOf(W.info.current);
    if (!target) return;
    const pts = B.routePts(W.pos, target);
    let total = 0;
    for (let i = 1; i < pts.length; i++) total += B.hav(pts[i - 1], pts[i]);
    if (total < 0.02) return;
    const step = Math.max(0.08, total / 10);
    const p = B.map.along(pts, Math.min(1, step / total)).ll;
    W.pos = { lat: p[0], lng: p[1] };
    sendLoc(true);
    B.bus.emit('pro-pos', W.pos);
  }, 2000);

  /* ---------- screens ---------- */
  const card = (inner, cls) => `<section class="card pro-card${cls ? ' ' + cls : ''}">${inner}</section>`;

  function welcomeHTML() {
    return `<div class="screen">
        <header class="tg-hero">${B.logo('logo-lg')}<h1 class="page-title">${t('pro.welcome')}</h1><p class="lead">${t('pro.welcome.sub')}</p></header>
        <button class="btn btn-primary btn-block btn-lg-c" data-act="login">${t('login.title')}</button>
        <a class="link center" href="/">${t('app.client')}</a>
      </div>`;
  }

  function applyHTML(w) {
    const f = Object.assign({ kind: 'driver', car_class: 'econom', vehicle: 'bike' }, w || {});
    const segBtn = (name, v, label, cur) => `<button type="button" class="seg-btn${cur === v ? ' on' : ''}" role="radio" aria-checked="${cur === v}" data-act="ap-set" data-name="${name}" data-v="${v}"><span>${label}</span></button>`;
    return `<div class="screen">
        <h1 class="page-title">${t('pro.apply.title')}</h1>
        <p class="muted">${t('pro.apply.sub')}</p>
        <form id="apply-form" class="stack-16" novalidate>
          <div class="seg" role="radiogroup">${segBtn('kind', 'driver', '🚗 ' + t('pro.kind.driver'), f.kind)}${segBtn('kind', 'courier', '🛵 ' + t('pro.kind.courier'), f.kind)}</div>
          <input type="hidden" name="kind" value="${f.kind}">
          <label class="field"><span>${t('pf.name')}</span><input name="name" required maxlength="40" value="${B.esc(B.session.user.name)}" autocomplete="name"></label>
          ${f.kind === 'driver' ? `
            <label class="field"><span>${t('pro.car_model')}</span><input name="car_model" required maxlength="40" value="${B.esc(f.car_model || '')}" placeholder="${t('pro.car_model.ph')}"></label>
            <div class="field-row">
              <label class="field"><span>${t('pro.car_color')}</span><input name="car_color" required maxlength="20" value="${B.esc(f.car_color || '')}" placeholder="${t('pro.car_color.ph')}"></label>
              <label class="field"><span>${t('pro.car_plate')}</span><input name="car_plate" required maxlength="12" value="${B.esc(f.car_plate || '')}" placeholder="123 ABC 02" autocapitalize="characters"></label>
            </div>
            <div class="block"><h2 class="label">${t('pro.car_class')}</h2>
              <div class="seg" role="radiogroup">${['econom', 'comfort', 'business'].map((c) => segBtn('car_class', c, t('pro.class.' + c), f.car_class)).join('')}</div>
              <input type="hidden" name="car_class" value="${f.car_class}">
            </div>
            <label class="check-row"><input type="checkbox" name="child_seat" ${f.child_seat ? 'checked' : ''}><span>${t('pro.child_seat')}</span></label>`
          : `<div class="block"><h2 class="label">${t('pro.vehicle')}</h2>
              <div class="chips">${['walk', 'bike', 'scooter', 'car', 'truck'].map((v) => `<button type="button" class="chip${f.vehicle === v ? ' on' : ''}" data-act="ap-set" data-name="vehicle" data-v="${v}">${t('veh.' + v)}</button>`).join('')}</div>
              <input type="hidden" name="vehicle" value="${f.vehicle}">
            </div>`}
          <p class="form-err" id="ap-err" hidden></p>
          <button class="btn btn-primary btn-block btn-lg-c" type="submit">${t('pro.apply.send')}</button>
        </form>
      </div>`;
  }

  function statusHTML(w) {
    const pending = w.status === 'pending';
    return `<div class="screen">
        <div class="empty">
          <span class="empty-e" aria-hidden="true">${pending ? '⏳' : '⛔'}</span>
          <h1 class="h2">${t(pending ? 'pro.pending' : 'pro.blocked')}</h1>
          <p class="muted">${t(pending ? 'pro.pending.sub' : 'pro.blocked.sub')}</p>
          ${card(`<dl class="rows">
              <div><dt>${t('pf.name')}</dt><dd>${B.esc(B.session.user.name)}</dd></div>
              <div><dt>${t('pf.phone')}</dt><dd>${B.esc(B.phone(B.session.user.phone))}</dd></div>
              <div><dt>${t('pro.kind.' + w.kind)}</dt><dd>${w.kind === 'driver' ? B.esc(w.car_model + ', ' + w.car_plate) : t('veh.' + w.vehicle)}</dd></div>
            </dl>`)}
          ${pending ? `<div class="btn-row"><button class="btn btn-primary" data-act="pro-check">${t('pro.check')}</button><button class="btn btn-soft" data-act="pro-reapply">${t('pro.reapply')}</button></div>` : ''}
        </div>
      </div>`;
  }

  B.screens.work = function () {
    let map = null, me = null, lay = {}, offerLayers = [];
    let reapply = false;
    const html = () => {
      if (!B.session) return welcomeHTML();
      if (!W.info) return `<div class="screen">${B.loading()}</div>`;
      const w = W.info.worker;
      if (!w || reapply || w.status === 'draft') return applyHTML(w);
      if (w.status !== 'approved') return statusHTML(w);
      return `<div class="taxi pro">
          <div class="taxi-map" id="pro-map" role="application" aria-label="${t('map')}"></div>
          <div class="pro-top">
            <span class="pro-status ${w.online ? 'on' : ''}"><i></i>${t(w.online ? 'pro.online' : 'pro.offline')}</span>
            <span class="pro-earn">${t('pro.today')}: <b>${B.money(W.info.stats ? W.info.stats.today : 0)}</b></span>
          </div>
          <button class="map-btn map-loc" data-act="pro-center" aria-label="${t('taxi.myloc')}">${B.ic('locate')}</button>
          <section class="taxi-panel" id="pro-panel" aria-live="polite"></section>
        </div>`;
    };

    function offerCard(o) {
      const tar = B.tariffOf(o.kind, o.tariff);
      const label = o.kind === 'delivery' ? `${o.venue ? B.art(o.venue.emoji, 'art-inline') + ' ' + B.esc(B.N(o.venue)) : ''}` : `${tar ? B.art(tar.e, 'art-inline') + ' ' + B.L(tar.n) : ''}`;
      return `<article class="offer">
          <div class="offer-head">
            <span class="tag">${t('kind.' + o.kind)}</span>
            <span class="offer-label">${label}</span>
            ${o.distance != null ? `<span class="muted small">${t('pro.away', { km: B.dec(o.distance, 1) })}</span>` : ''}
          </div>
          <ol class="ride-route">
            <li><span class="dot dot-from" aria-hidden="true"></span><span class="lr-text"><b>${B.esc(o.from.n)}</b>${o.from.a ? `<em>${B.esc(o.from.a)}</em>` : ''}</span></li>
            <li><span class="dot dot-to" aria-hidden="true"></span><span class="lr-text"><b>${B.esc(o.to.n)}</b>${o.to.a ? `<em>${B.esc(o.to.a)}</em>` : ''}</span></li>
          </ol>
          <div class="offer-foot">
            <span class="offer-money"><small>${t('pro.you.get')}</small><b>${B.money(o.earning)}</b></span>
            <span class="muted small">${B.dec(o.km, 1)} ${t('km')}${o.kind === 'delivery' ? ' · ' + B.statusText(o) : ''}</span>
            <button class="btn btn-primary" data-act="pro-accept" data-id="${o.id}">${t('pro.accept')}</button>
          </div>
        </article>`;
    }

    function currentHTML(o, note) {
      const stepKey = `pro.step.${o.kind}.${o.status}`;
      const canStep = !(o.kind === 'delivery' && o.status === 'cooking');
      const canRelease = (o.kind !== 'delivery' && o.status === 'accepted') || (o.kind === 'delivery' && ['cooking', 'ready'].includes(o.status));
      const target = targetOf(o);
      const nav = target ? `https://www.google.com/maps/dir/?api=1&destination=${target.lat},${target.lng}` : '';
      return `<div class="grab" aria-hidden="true"></div>
        ${note || ''}
        <div class="ride">
          <div>
            <span class="tag">${t('kind.' + o.kind)}</span>
            <h2 class="ride-title">${t(`pro.cur.${o.kind}.${o.status}`)}</h2>
          </div>
          <ol class="ride-route">
            <li><span class="dot dot-from" aria-hidden="true"></span><span class="lr-text"><small>${t('pro.pickup')}</small><b>${B.esc(o.from.n)}</b>${o.from.a ? `<em>${B.esc(o.from.a)}</em>` : ''}</span></li>
            <li><span class="dot dot-to" aria-hidden="true"></span><span class="lr-text"><small>${t('pro.dropoff')}</small><b>${B.esc(o.to.n)}</b>${o.to.a ? `<em>${B.esc(o.to.a)}</em>` : ''}</span></li>
          </ol>
          ${o.comment ? `<p class="note">💬 ${B.esc(o.comment)}</p>` : ''}
          ${o.pkg ? `<p class="note">📦 ${B.esc(o.pkg)}</p>` : ''}
          ${o.items ? `<details class="items-box"><summary>${t('pro.items')} · ${o.items.reduce((a, l) => a + l.q, 0)}</summary><ul>${o.items.map((l) => `<li>${B.art(l.emoji, 'art-inline')} ${B.esc(B.N(l))} × ${l.q}</li>`).join('')}</ul></details>` : ''}
          <div class="ride-sum"><span>${B.esc(o.client.name || '')} · ${t('pay.' + o.pay)}${o.kind === 'delivery' ? ' · ' + B.money(o.total) : ''}</span><b>${B.money(o.earning)}</b></div>
          <div class="ride-actions">
            ${nav ? `<a class="act" href="${nav}" target="_blank" rel="noopener">${B.ic('nav')}<span>${t('pro.navigate')}</span></a>` : ''}
            ${o.client.phone ? `<button class="act" data-act="pro-call">${B.ic('phone')}<span>${t('pro.call.client')}</span></button>` : ''}
            ${canRelease ? `<button class="act act-bad" data-act="pro-release">${B.ic('close')}<span>${t('pro.release')}</span></button>` : ''}
          </div>
          ${B.cfg && B.cfg.simulate ? `<label class="check-row small"><input type="checkbox" data-change="pro-sim" ${W.sim ? 'checked' : ''}><span>${t('pro.sim')}</span></label>` : ''}
          <div class="panel-cta">
            <button class="btn btn-primary btn-block btn-lg-c" data-act="pro-step" ${canStep ? '' : 'disabled'}>${t(stepKey)}</button>
          </div>
        </div>`;
    }

    function panelHTML() {
      const w = W.info.worker;
      const cur = W.info.current;
      const gpsNote = W.gps === 'off' && !W.manual ? `<p class="banner-warn">${t('pro.gps.off')}</p>` : '';
      if (cur) return currentHTML(cur, gpsNote);
      if (!w.online) {
        return `<div class="grab" aria-hidden="true"></div>
          <h2 class="ride-title">${t('pro.offline')}</h2>
          <p class="muted">${t('pro.offline.sub')}</p>
          <div class="pro-stats">
            <span><small>${t('pro.today')}</small><b>${B.money(W.info.stats.today)}</b><em>${t('pro.trips', { n: W.info.stats.trips })}</em></span>
            <span><small>${t('pro.rating')}</small><b>${B.rating(w, 2)}</b><em>${w.kind === 'driver' ? B.esc(w.car_model) : t('veh.' + w.vehicle)}</em></span>
          </div>
          <div class="panel-cta"><button class="btn btn-primary btn-block btn-lg-c" data-act="pro-online" data-v="1">${B.ic('power')}<span>${t('pro.go.online')}</span></button></div>`;
      }
      return `<div class="grab" aria-hidden="true"></div>
        ${gpsNote}
        <div class="block-head row"><h2 class="h2">${t('pro.offers')}</h2><span class="muted small">${W.offers.length}</span></div>
        ${W.offers.length ? W.offers.map(offerCard).join('') : `<div class="waiting"><span class="radar" aria-hidden="true"><i></i><i></i></span><p class="muted">${t('pro.waiting')}</p></div>`}
        <div class="panel-cta"><button class="btn btn-soft btn-block" data-act="pro-online" data-v="0">${B.ic('power')}<span>${t('pro.go.offline')}</span></button></div>`;
    }

    function renderPanel() {
      const p = document.getElementById('pro-panel');
      if (p) p.innerHTML = panelHTML();
    }

    function drawMap(fit) {
      if (!map) return;
      Object.values(lay).forEach((l) => map.removeLayer(l));
      offerLayers.forEach((l) => map.removeLayer(l));
      lay = {};
      offerLayers = [];
      const cur = W.info.current;
      const pts = [];
      if (cur) {
        lay.route = B.map.route(map, B.routePts(cur.from, cur.to));
        lay.a = L.marker(B.ll(cur.from), { icon: B.map.pin(cur.kind === 'delivery' ? 'store' : 'from', cur.kind === 'delivery' && cur.venue ? B.art(cur.venue.emoji) : ''), interactive: false }).addTo(map);
        lay.b = L.marker(B.ll(cur.to), { icon: B.map.pin('to'), interactive: false }).addTo(map);
        pts.push(B.ll(cur.from), B.ll(cur.to));
      } else {
        W.offers.forEach((o) => offerLayers.push(L.marker(B.ll(o.from), { icon: B.map.pin('from'), interactive: false }).addTo(map)));
        W.offers.forEach((o) => pts.push(B.ll(o.from)));
      }
      placeMe();
      if (W.pos) pts.push(B.ll(W.pos));
      if (fit) {
        const panel = document.getElementById('pro-panel');
        const ph = panel ? panel.offsetHeight : 300;
        if (pts.length > 1) map.fitBounds(L.latLngBounds(pts), { paddingTopLeft: [40, 90], paddingBottomRight: [40, ph + 24], maxZoom: 16, animate: false });
        else if (pts.length === 1) { map.setView(pts[0], 15, { animate: false }); map.panBy([0, ph / 2 - 20], { animate: false }); }
      }
    }
    function placeMe() {
      if (!map || !W.pos) return;
      if (!me) me = L.marker(B.ll(W.pos), { icon: B.map.car(), interactive: false, zIndexOffset: 1000 }).addTo(map);
      else {
        const prev = me.getLatLng();
        if (prev.lat !== W.pos.lat || prev.lng !== W.pos.lng) B.map.rotate(me, B.map.bearing([prev.lat, prev.lng], B.ll(W.pos)));
        me.setLatLng(B.ll(W.pos));
      }
    }

    async function reload(fit) {
      await loadWorker();
      await loadOffers();
      const w = W.info && W.info.worker;
      if (w && w.status === 'approved' && w.online) startGps();
      if (!map) return B.refresh();
      const top = document.querySelector('.pro-top');
      if (top) top.outerHTML = `<div class="pro-top"><span class="pro-status ${w.online ? 'on' : ''}"><i></i>${t(w.online ? 'pro.online' : 'pro.offline')}</span><span class="pro-earn">${t('pro.today')}: <b>${B.money(W.info.stats.today)}</b></span></div>`;
      renderPanel();
      drawMap(fit);
    }

    Object.assign(B.actions, {
      'pro-check': () => reload(true),
      'pro-reapply': () => { reapply = true; B.refresh(); },
      'ap-set': (el) => {
        const form = document.getElementById('apply-form');
        const name = el.dataset.name;
        if (name === 'kind') {
          W.info.worker = Object.assign({}, W.info.worker || {}, { kind: el.dataset.v, status: 'draft' });
          reapply = true;
          B.refresh();
          return;
        }
        form.querySelector(`input[name="${name}"]`).value = el.dataset.v;
        form.querySelectorAll(`[data-act="ap-set"][data-name="${name}"]`).forEach((b) => {
          const on = b.dataset.v === el.dataset.v;
          b.classList.toggle('on', on);
          if (b.hasAttribute('aria-checked')) b.setAttribute('aria-checked', on);
        });
      },
      'pro-online': async (el) => {
        const online = el.dataset.v === '1';
        try {
          await B.api.post('/api/worker/online', { online });
          if (online) {
            startGps();
            if (!W.pos) W.pos = Object.assign({}, D.center);
            sendLoc(true);
          } else stopGps();
          await reload(true);
        } catch (e) { B.fail(e); }
      },
      'pro-accept': async (el) => {
        el.disabled = true;
        try {
          W.info.current = await B.api.post(`/api/worker/orders/${el.dataset.id}/accept`);
          W.offers = [];
          renderPanel();
          drawMap(true);
        } catch (e) {
          B.fail(e);
          await reload(false);
        }
      },
      'pro-step': async (el) => {
        const o = W.info.current;
        if (!o) return;
        const next = { ride: { accepted: 'arrived', arrived: 'riding', riding: 'done' }, parcel: { accepted: 'picked', picked: 'done' }, delivery: { ready: 'delivering', delivering: 'done' } }[o.kind][o.status];
        if (!next) return;
        el.disabled = true;
        try {
          const n = await B.api.post(`/api/worker/orders/${o.id}/status`, { status: next });
          if (n.status === 'done') {
            B.toast(t('pro.done.toast', { sum: B.money(n.earning) }));
            W.sim = false;
            await reload(true);
          } else {
            W.info.current = n;
            renderPanel();
            drawMap(true);
          }
        } catch (e) {
          B.fail(e);
          await reload(false);
        }
      },
      'pro-release': () => B.confirm(t('pro.release.q'), t('pro.release.text'), t('pro.release'), async () => {
        try {
          await B.api.post(`/api/worker/orders/${W.info.current.id}/release`);
          W.sim = false;
          await reload(true);
        } catch (e) { B.fail(e); }
      }, true),
      'pro-call': () => { const o = W.info.current; if (o) B.callSheet(o.client.name, o.client.phone); },
      'pro-center': () => drawMap(true),
    });
    B.inputs['pro-sim'] = (el) => { W.sim = el.checked; };

    function bindApply() {
      const form = document.getElementById('apply-form');
      if (!form) return;
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const body = Object.fromEntries(fd.entries());
        body.child_seat = fd.get('child_seat') === 'on';
        try {
          const me2 = await B.api.post('/api/worker/apply', body);
          B.setSession(me2);
          reapply = false;
          await loadWorker();
          B.refresh();
        } catch (err) {
          const el = document.getElementById('ap-err');
          if (el) { el.textContent = B.errText(err); el.hidden = false; }
        }
      });
    }

    let unsubPos = null;
    return {
      html: html(),
      full: !!(B.session && W.info && W.info.worker && W.info.worker.status === 'approved' && !reapply),
      mount() {
        bindApply();
        const el = document.getElementById('pro-map');
        if (el) {
          map = B.map.create(el, { zoom: 13 });
          map.on('click', (e) => {
            if (W.gps === 'on' && !W.sim) return;
            W.pos = { lat: e.latlng.lat, lng: e.latlng.lng };
            W.manual = true;
            sendLoc(true);
            placeMe();
            renderPanel();
            B.toast(t('pro.gps.set'));
          });
          renderPanel();
          requestAnimationFrame(() => { if (map) { map.invalidateSize(); drawMap(true); } });
          if (W.info.worker.online) startGps();
          unsubPos = B.bus.on('pro-pos', () => { placeMe(); if (W.gps === 'off') renderPanel(); });
        } else if (B.session && !W.info) {
          reload(false);
        }
      },
      unmount() {
        if (unsubPos) unsubPos();
        if (map) { map.remove(); map = null; me = null; }
      },
      async onOrder(o) {
        if (!W.info || !B.session) return;
        if (o.worker_id === B.session.user.id) {
          if (o.status === 'cancelled') {
            B.toast(t('pro.client.cancel'));
            B.beep();
            W.sim = false;
            await reload(true);
            return;
          }
          const prev = W.info.current;
          W.info.current = B.isActive(o) ? o : null;
          if (o.kind === 'delivery' && prev && prev.status === 'cooking' && o.status === 'ready') B.beep();
          renderPanel();
          drawMap(!prev || prev.status !== o.status);
        }
      },
      async onOffers() {
        if (!map || (W.info && W.info.current)) return;
        await loadOffers();
        renderPanel();
        drawMap(false);
      },
      tick() {
        // Fallback when live events are not reaching us: refresh offers every 15 s.
        if (map && W.info && W.info.worker && W.info.worker.online && !W.info.current && Date.now() % 15000 < 1000) this.onOffers();
      },
    };
  };

  B.screens.history = function () {
    let list = null;
    const body = () => {
      if (!B.session) return welcomeHTML();
      if (!list) return B.loading();
      const s = W.info && W.info.stats;
      return `${s ? `<div class="pro-stats card"><span><small>${t('pro.today')}</small><b>${B.money(s.today)}</b><em>${t('pro.trips', { n: s.trips })}</em></span></div>` : ''}
        ${list.length ? `<div class="list card">${list.map((o) => `<div class="list-row static">
            <span class="icon-box emoji" aria-hidden="true">${B.art(B.orderEmoji(o))}</span>
            <span class="lr-text"><b>${B.esc(o.from.n)} → ${B.esc(o.to.n)}</b><em>${B.time(o.created_at)} · ${B.statusText(o)}</em></span>
            <span class="amount${o.status === 'cancelled' ? ' struck' : ''}">${B.money(o.earning || 0)}</span>
          </div>`).join('')}</div>` : `<p class="muted">${t('pro.history.empty')}</p>`}`;
    };
    return {
      html: `<div class="screen"><h1 class="page-title">${t('pro.nav.history')}</h1><div id="hist" class="stack-16">${body()}</div></div>`,
      async mount() {
        if (!B.session) return;
        try { list = await B.api.get('/api/worker/history'); } catch (e) { list = []; }
        await loadWorker();
        const el = document.getElementById('hist');
        if (el) el.innerHTML = body();
      },
    };
  };

  B.screens.me = function () {
    const s = B.session;
    const w = W.info && W.info.worker;
    const seg = (act, cur, opts) => `<div class="seg" role="radiogroup">${opts.map(([v, label]) => `<button class="seg-btn${cur === v ? ' on' : ''}" role="radio" aria-checked="${cur === v}" data-act="${act}" data-v="${v}"><span>${label}</span></button>`).join('')}</div>`;
    Object.assign(B.actions, {
      'pf-lang': (el) => { B.state.lang = el.dataset.v; B.save(); B.applyLang(); B.refresh(); },
      'pf-theme': (el) => { B.state.theme = el.dataset.v; B.save(); B.applyTheme(); B.refresh(); },
      'pf-logout': () => B.confirm(t('pf.logout.q'), '', t('pf.logout'), async () => {
        if (w && w.online) { try { await B.api.post('/api/worker/online', { online: false }); } catch (e) { /* busy */ } }
        stopGps();
        await B.logout();
        W.info = null;
        B.tab('work');
      }, true),
    });
    return {
      html: `<div class="screen profile">
          <h1 class="page-title">${t('pro.nav.me')}</h1>
          ${s ? `<section class="profile-card card">${B.avatar(s.user.name)}<div class="lr-text"><b>${B.esc(s.user.name)}</b><em>${B.esc(B.phone(s.user.phone))}</em></div></section>
            ${w ? card(`<dl class="rows">
                <div><dt>${t('pro.kind.' + w.kind)}</dt><dd>${w.kind === 'driver' ? B.esc(w.car_model) : t('veh.' + w.vehicle)}</dd></div>
                ${w.car_plate ? `<div><dt>${t('pro.car_plate')}</dt><dd>${B.plate(w.car_plate)}</dd></div>` : ''}
                ${w.kind === 'driver' ? `<div><dt>${t('pro.car_class')}</dt><dd>${t('pro.class.' + w.car_class)}</dd></div>` : ''}
                <div><dt>${t('pro.rating')}</dt><dd>${B.rating(w, 2)}${w.rating_count ? ` (${w.rating_count})` : ''}</dd></div>
              </dl>`) : ''}` : `<button class="btn btn-primary btn-block" data-act="login">${t('login.title')}</button>`}
          <section class="block"><h2 class="label">${t('pf.lang')}</h2>${seg('pf-lang', B.state.lang, [['kk', 'Қазақша'], ['ru', 'Русский']])}</section>
          <section class="block"><h2 class="label">${t('pf.theme')}</h2>${seg('pf-theme', B.state.theme, [['system', t('pf.theme.system')], ['light', t('pf.theme.light')], ['dark', t('pf.theme.dark')]])}</section>
          <a class="join-banner" href="/">${B.ic('home')}<span><b>${t('app.client')}</b></span>${B.ic('chev', 'chev')}</a>
          ${s ? `<button class="btn btn-soft-bad" data-act="pf-logout">${B.ic('logout')}<span>${t('pf.logout')}</span></button>` : ''}
        </div>`,
    };
  };

  B.actions.login = () => B.login(null, { why: t('pro.welcome.sub') });

  /* ---------- start ---------- */
  (async function () {
    B.tabs = [['work', 'power', 'pro.nav.work'], ['history', 'list', 'pro.nav.history'], ['me', 'user', 'pro.nav.me']];
    B.applyTheme();
    B.applyLang();
    await B.loadConfig();
    await B.loadSession();
    await loadWorker();
    await loadOffers();
    B.start('work');
    B.bus.on('session', async () => {
      await loadWorker();
      await loadOffers();
      B.tab('work');
    });
  })();
})();
