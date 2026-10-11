/* Бәрі — taxi and courier: pick a route, choose a tariff, follow the ride live. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);
  const drafts = {};

  B.screens.taxi = function (p) {
    const mode = p.mode === 'courier' ? 'courier' : 'taxi';
    const S = B.state;
    const tariffs = D.tariffs[mode];
    const dr = drafts[mode] || (drafts[mode] = { from: Object.assign({}, D.here), to: null, tariff: tariffs[0].id, comment: '', pkg: '' });
    const rate = { n: 5, tip: 0 };
    let map = null, lay = {}, pickField = null, addrField = 'to', results = [], panelKey = '';
    let qTimer = null, qSeq = 0;

    const activeOrder = () => S.orders.find((o) => o.type === mode && !B.status(o).done);
    const rateOrder = () => {
      const mine = S.orders.filter((o) => o.type === mode);
      const o = mine[mine.length - 1];
      if (!o || o.rated || o.cancelled) return null;
      return B.status(o).key === 'done' && Date.now() - o.createdAt < 3600e3 ? o : null;
    };
    const view = () => {
      const o = activeOrder();
      if (o) return { k: 'active', o };
      const r = rateOrder();
      return r ? { k: 'rate', o: r } : { k: 'plan' };
    };
    const tariffOf = (id) => tariffs.find((x) => x.id === id) || tariffs[0];

    const html = `<div class="taxi">
        <div class="taxi-map" id="taxi-map" role="application" aria-label="${t('map')}"></div>
        <button class="map-btn map-back" data-act="back" aria-label="${t('back')}">${B.ic('back')}</button>
        <button class="map-btn map-loc" data-act="tx-loc" aria-label="${t('taxi.myloc')}">${B.ic('locate')}</button>
        <div class="map-hint" id="map-hint" hidden>${B.ic('map')}<span>${t('taxi.tapmap')}</span><button class="link" data-act="tx-pick-cancel">${t('cancel')}</button></div>
        <section class="taxi-panel" id="taxi-panel" aria-live="polite"></section>
      </div>`;

    /* ---------- panel ---------- */
    function routeRow(field, pl) {
      return `<button class="route-row" data-act="tx-field" data-field="${field}">
          <span class="dot dot-${field}" aria-hidden="true"></span>
          <span class="rr-text"><small>${t('taxi.' + field)}</small>${pl
            ? `<b>${B.esc(L_(pl.n))}</b>${pl.a ? `<em>${B.esc(L_(pl.a))}</em>` : ''}`
            : `<b class="ph">${t('taxi.to.ph')}</b>`}</span>
        </button>`;
    }

    function tariffCard(x, trip) {
      const on = x.id === dr.tariff;
      const locked = x.social && !B.eligibleSocial();
      const price = trip ? B.money(B.fare(x, trip)) : t('from', { price: B.money(B.fare(x, null)) });
      const sub = x.social ? '−30%' : x.w ? L_(x.w) : t('taxi.eta', { n: x.eta });
      return `<button class="tariff${on ? ' on' : ''}${locked ? ' locked' : ''}" role="radio" aria-checked="${on}" data-act="tx-tariff" data-id="${x.id}">
          <span class="tariff-e" aria-hidden="true">${x.e}</span>
          <span class="tariff-n">${L_(x.n)}</span>
          <span class="tariff-p">${price}</span>
          <span class="tariff-s">${sub}</span>
        </button>`;
    }

    function planHTML() {
      const trip = dr.to ? B.trip(dr.from.ll, dr.to.ll) : null;
      const tar = tariffOf(dr.tariff);
      const locked = tar.social && !B.eligibleSocial();
      const price = trip ? B.fare(tar, trip) : 0;
      const quick = [['home', D.saved.home], ['work', D.saved.work], ['airport', D.places[0]], ['mega', D.places[1]], ['alm2', D.places[4]]];
      return `<div class="grab" aria-hidden="true"></div>
        <h2 class="sr-only">${t('svc.' + mode)}</h2>
        <div class="route-box">
          ${routeRow('from', dr.from)}
          ${routeRow('to', dr.to)}
          <button class="swap-btn" data-act="tx-swap" aria-label="${t('taxi.swap')}" ${dr.to ? '' : 'disabled'}>${B.ic('swap')}</button>
        </div>
        ${dr.to ? '' : `<div class="chips quick">${quick.map(([id, pl]) => `<button class="chip" data-act="tx-quick" data-id="${id}">${B.esc(L_(pl.n))}</button>`).join('')}</div>`}
        <div class="tariffs" role="radiogroup" aria-label="${t('taxi.tariff')}">${tariffs.map((x) => tariffCard(x, trip)).join('')}</div>
        ${trip ? `<p class="trip-meta">${B.ic('clock')}<span>${t('taxi.trip', { km: B.dec(trip.km, 1), min: trip.min })}</span></p>` : ''}
        ${locked ? `<p class="hint-line">${t('taxi.social.lock')} <button class="link" data-act="tab" data-tab="profile">${t('taxi.social.go')}</button></p>` : ''}
        ${mode === 'courier' ? `<label class="field"><span>${t('courier.what')}</span><input id="tx-pkg" data-in="tx-pkg" value="${B.esc(dr.pkg)}" placeholder="${t('courier.what.ph')}" maxlength="80" autocomplete="off"></label>` : ''}
        <div class="opt-row">
          <div class="seg" role="radiogroup" aria-label="${t('pay')}">
            ${['card', 'cash'].map((k) => `<button class="seg-btn${S.pay === k ? ' on' : ''}" role="radio" aria-checked="${S.pay === k}" data-act="tx-pay" data-pay="${k}">${B.ic(k)}<span>${t('pay.' + k)}</span></button>`).join('')}
          </div>
        </div>
        <label class="field"><span>${t(mode === 'courier' ? 'courier.comment' : 'taxi.comment')}</span><input id="tx-comment" data-in="tx-comment" value="${B.esc(dr.comment)}" placeholder="${t(mode === 'courier' ? 'courier.comment.ph' : 'taxi.comment.ph')}" maxlength="120" autocomplete="off"></label>
        <div class="panel-cta">
          <button class="btn btn-primary btn-block btn-lg" data-act="tx-order" ${trip && !locked ? '' : 'disabled'}>
            <span>${t(mode === 'courier' ? 'courier.order' : 'taxi.order')}</span>${trip && !locked ? `<span class="btn-price">${B.money(price)}</span>` : ''}
          </button>
        </div>`;
    }

    function subline(o, st) {
      const tar = tariffOf(o.tariff);
      if (st.key === 'searching') return t('taxi.searching.sub', { n: o.nearby });
      if (st.key === 'coming' || st.key === 'pickup') return t('taxi.arrives', { n: Math.max(1, Math.ceil(tar.eta * (1 - st.t))) });
      if (st.key === 'arrived') return t('taxi.arrived.sub');
      if (st.key === 'riding' || st.key === 'delivering') return t('taxi.left', { n: Math.max(1, Math.ceil(o.min * (1 - st.t))) });
      return '';
    }

    function driverHTML(o) {
      const d = o.driver;
      const vehicle = d.car ? `${B.esc(d.car)} · ${L_(d.color)}` : L_(d.vehicle);
      return `<div class="driver">
          ${B.avatar(d.name, d.h)}
          <div class="driver-info">
            <b>${B.esc(d.name)}</b>
            <span class="meta">${B.ic('star', 'ic-star')}${B.dec(d.rating, 2)} · ${vehicle}</span>
          </div>
          ${d.plate ? B.plate(d.plate) : ''}
        </div>`;
    }

    function activeHTML(o) {
      const st = B.status(o);
      const tar = tariffOf(o.tariff);
      const canCancel = ['searching', 'coming', 'pickup'].includes(st.key);
      return `<div class="grab" aria-hidden="true"></div>
        <div class="ride">
          <div class="ride-head">
            ${st.key === 'searching' ? '<span class="radar" aria-hidden="true"><i></i><i></i></span>' : ''}
            <div>
              <h2 class="ride-title">${B.statusText(o, st)}</h2>
              <p class="ride-sub" id="ride-sub">${subline(o, st)}</p>
            </div>
          </div>
          <div class="bar" aria-hidden="true"><i id="ride-bar" style="width:${Math.round(st.p * 100)}%"></i></div>
          ${st.key !== 'searching' ? driverHTML(o) : ''}
          <ol class="ride-route">
            <li><span class="dot dot-from" aria-hidden="true"></span>${B.esc(L_(o.from.n))}</li>
            <li><span class="dot dot-to" aria-hidden="true"></span>${B.esc(L_(o.to.n))}</li>
          </ol>
          ${o.pkg ? `<p class="muted small">${t('courier.what')}: ${B.esc(o.pkg)}</p>` : ''}
          <div class="ride-sum"><span>${L_(tar.n)} · ${t('pay.' + o.pay)}</span><b>${B.money(o.price)}</b></div>
          <div class="ride-actions">
            ${st.key !== 'searching' ? `<button class="act" data-act="tx-call">${B.ic('phone')}<span>${t('taxi.call')}</span></button>
            <button class="act" data-act="tx-share">${B.ic('share')}<span>${t('taxi.share')}</span></button>` : ''}
            ${canCancel ? `<button class="act act-bad" data-act="tx-cancel">${B.ic('close')}<span>${t('taxi.cancel')}</span></button>` : ''}
          </div>
        </div>`;
    }

    function rateHTML(o) {
      const d = o.driver;
      return `<div class="grab" aria-hidden="true"></div>
        <div class="rate">
          <h2 class="ride-title">${t(mode === 'courier' ? 'courier.done' : 'taxi.done')}</h2>
          <p class="ride-sub">${B.esc(d.name)} · ${d.car ? B.esc(d.car) : L_(d.vehicle)}</p>
          <div class="stars" role="radiogroup" aria-label="${t('taxi.rate')}">
            ${[1, 2, 3, 4, 5].map((n) => `<button class="star${n <= rate.n ? ' on' : ''}" role="radio" aria-checked="${n === rate.n}" aria-label="${n}" data-act="tx-rate" data-n="${n}">${B.ic('star')}</button>`).join('')}
          </div>
          <div class="tip-row">
            <span class="label">${t('taxi.tip')}</span>
            <div class="chips">${[0, 200, 500, 1000].map((n) => `<button class="chip${rate.tip === n ? ' on' : ''}" data-act="tx-tip" data-n="${n}">${n ? B.money(n) : t('taxi.tip.none')}</button>`).join('')}</div>
          </div>
          <div class="ride-sum"><span>${t('taxi.paid')}</span><b>${B.money(o.price + rate.tip)}</b></div>
          ${B.split(o.price, mode === 'courier' ? 'split.courier' : 'split.driver', rate.tip)}
          <div class="panel-cta"><button class="btn btn-primary btn-block" data-act="tx-rate-send">${t('taxi.rate.send')}</button></div>
        </div>`;
    }

    function renderPanel() {
      const panel = document.getElementById('taxi-panel');
      if (!panel) return;
      const v = view();
      panelKey = v.k + ':' + (v.o ? v.o.id + ':' + B.status(v.o).key : '');
      panel.innerHTML = v.k === 'plan' ? planHTML() : v.k === 'active' ? activeHTML(v.o) : rateHTML(v.o);
    }

    /* ---------- map ---------- */
    function carPos(o) {
      const st = B.status(o);
      if (st.key === 'coming' || st.key === 'pickup') return B.map.along(B.routePts(o.start, o.from.ll), st.t);
      if (st.key === 'riding' || st.key === 'delivering') return B.map.along(o.pts || B.routePts(o.from.ll, o.to.ll), st.t);
      if (st.key === 'arrived') return { ll: o.from.ll, deg: 0 };
      return { ll: o.to.ll, deg: 0 };
    }

    function drawMap(fit) {
      if (!map) return;
      Object.values(lay).forEach((l) => map.removeLayer(l));
      lay = {};
      const v = view();
      const from = v.k === 'plan' ? dr.from.ll : v.o.from.ll;
      const to = v.k === 'plan' ? dr.to && dr.to.ll : v.o.to.ll;
      if (to) lay.route = B.map.route(map, B.routePts(from, to));
      if (v.k === 'active') {
        const st = B.status(v.o);
        if (st.key === 'searching') lay.pulse = L.marker(from, { icon: B.map.pulse(), interactive: false, keyboard: false }).addTo(map);
      }
      lay.a = L.marker(from, { icon: B.map.pin('from'), interactive: false, keyboard: false }).addTo(map);
      if (to) lay.b = L.marker(to, { icon: B.map.pin('to'), interactive: false, keyboard: false }).addTo(map);
      if (v.k === 'active' && B.status(v.o).key !== 'searching') {
        const c = carPos(v.o);
        lay.car = L.marker(c.ll, { icon: B.map.car(), interactive: false, keyboard: false }).addTo(map);
        B.map.rotate(lay.car, c.deg);
      }
      if (fit) fitView(from, to, v.k === 'active' ? v.o : null);
    }

    function fitView(from, to, o) {
      if (!map) return;
      const panel = document.getElementById('taxi-panel');
      const ph = panel ? panel.offsetHeight : 320;
      const pts = [from];
      if (to) pts.push(to);
      if (o && B.status(o).key === 'coming') pts.push(o.start);
      if (pts.length > 1) {
        map.fitBounds(L.latLngBounds(pts), { paddingTopLeft: [40, 80], paddingBottomRight: [40, ph + 24], maxZoom: 16, animate: false });
      } else {
        map.setView(from, 15, { animate: false });
        map.panBy([0, ph / 2 - 20], { animate: false });
      }
    }

    function renderAll() {
      renderPanel();
      drawMap(true);
    }

    /* ---------- address search ---------- */
    function match(pl, q) {
      return [L_(pl.n), L_(pl.a), pl.n[0], pl.n[1]].some((s) => s && String(s).toLowerCase().includes(q));
    }
    function renderResults(q, remote) {
      const box = document.getElementById('tx-results');
      if (!box) return;
      const ql = q.trim().toLowerCase();
      results = [];
      [['home', D.saved.home], ['work', D.saved.work]].forEach(([id, pl]) => {
        if (!ql || match(pl, ql)) results.push({ pl, icon: id === 'home' ? 'home' : 'briefcase' });
      });
      D.places.forEach((pl) => { if (!ql || match(pl, ql)) results.push({ pl, icon: 'pin' }); });
      (remote || []).forEach((pl) => results.push({ pl, icon: 'search' }));
      box.innerHTML = results.length
        ? results.map((r, i) => `<button class="list-row" data-act="tx-result" data-i="${i}">
            <span class="icon-box">${B.ic(r.icon)}</span>
            <span class="lr-text"><b>${B.esc(L_(r.pl.n))}</b>${r.pl.a ? `<em>${B.esc(L_(r.pl.a))}</em>` : ''}</span>
          </button>`).join('')
        : `<p class="empty-line">${t('addr.none')}</p>`;
    }
    // OpenStreetMap search (Nominatim), limited to Almaty. Silently skipped when offline.
    function geocode(q) {
      const url = 'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&countrycodes=kz&bounded=1'
        + '&viewbox=76.75,43.40,77.15,43.10&accept-language=' + (S.lang === 'ru' ? 'ru' : 'kk,ru')
        + '&q=' + encodeURIComponent(q);
      return fetch(url).then((r) => (r.ok ? r.json() : [])).then((arr) => arr.map((x) => {
        const parts = String(x.display_name).split(', ');
        return { n: parts[0], a: parts.slice(1, 3).join(', '), ll: [+x.lat, +x.lon] };
      }));
    }
    function openAddr(field) {
      addrField = field;
      pickField = null;
      hint(false);
      const isFrom = field === 'from';
      B.sheet.open(`<div class="sheet-head">
            <h3 class="sheet-title">${t(isFrom ? 'addr.title.from' : 'addr.title.to')}</h3>
            <button class="icon-btn" data-act="sheet-close" aria-label="${t('close')}">${B.ic('close')}</button>
          </div>
          <label class="search">${B.ic('search')}<span class="sr-only">${t('addr.ph')}</span>
            <input id="tx-q" data-in="tx-q" type="search" placeholder="${t('addr.ph')}" autocomplete="off" enterkeyhint="search">
          </label>
          <div class="list">
            ${isFrom ? `<button class="list-row" data-act="tx-loc"><span class="icon-box">${B.ic('locate')}</span><span class="lr-text"><b>${t('taxi.myloc')}</b><em>${t('addr.gps')}</em></span></button>` : ''}
            <button class="list-row" data-act="tx-pickmap"><span class="icon-box">${B.ic('map')}</span><span class="lr-text"><b>${t('taxi.pickmap')}</b></span></button>
          </div>
          <div class="list" id="tx-results"></div>`, { focus: '#tx-q', label: t(isFrom ? 'addr.title.from' : 'addr.title.to') });
      renderResults('');
    }

    function nearestPlace(ll) {
      let best = null, bd = 0.35;
      D.places.forEach((pl) => { const d = B.hav(ll, pl.ll); if (d < bd) { bd = d; best = pl; } });
      return best || { n: ['Картадағы нүкте', 'Точка на карте'], a: B.dec(ll[0], 5) + ', ' + B.dec(ll[1], 5), ll };
    }
    function setField(field, pl) {
      dr[field] = pl;
      pickField = null;
      hint(false);
      B.sheet.close(true);
      renderAll();
    }
    function hint(on) {
      const h = document.getElementById('map-hint');
      if (h) h.hidden = !on;
      const root = document.querySelector('.taxi');
      if (root) root.classList.toggle('picking', !!on);
    }
    function onMapClick(e) {
      if (view().k !== 'plan') return;
      const f = pickField || (dr.to ? null : 'to');
      if (f) setField(f, nearestPlace([e.latlng.lat, e.latlng.lng]));
    }

    /* ---------- actions ---------- */
    Object.assign(B.actions, {
      'tx-field': (el) => openAddr(el.dataset.field),
      'tx-result': (el) => { const r = results[+el.dataset.i]; if (r) setField(addrField, r.pl); },
      'tx-quick': (el) => {
        const id = el.dataset.id;
        setField('to', D.saved[id] || D.places.find((x) => x.id === id));
      },
      'tx-pickmap': () => {
        pickField = addrField;
        B.sheet.close(true);
        hint(true);
      },
      'tx-pick-cancel': () => { pickField = null; hint(false); },
      'tx-swap': () => {
        if (!dr.to) return;
        const f = dr.from;
        dr.from = dr.to;
        dr.to = f;
        renderAll();
      },
      'tx-tariff': (el) => {
        dr.tariff = el.dataset.id;
        renderPanel();
      },
      'tx-pay': (el) => {
        S.pay = el.dataset.pay;
        B.save();
        renderPanel();
      },
      'tx-loc': () => {
        const v = view();
        if (v.k !== 'plan') return drawMap(true);
        if (!navigator.geolocation) return B.toast(t('geo.fail'));
        B.toast(t('geo.wait'));
        navigator.geolocation.getCurrentPosition(
          (pos) => setField('from', { n: D.here.n, a: B.dec(pos.coords.latitude, 5) + ', ' + B.dec(pos.coords.longitude, 5), ll: [pos.coords.latitude, pos.coords.longitude] }),
          () => B.toast(t('geo.fail')),
          { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
        );
      },
      'tx-order': () => {
        if (!dr.to) return;
        const tar = tariffOf(dr.tariff);
        if (tar.social && !B.eligibleSocial()) return B.toast(t('taxi.social.lock'));
        const trip = B.trip(dr.from.ll, dr.to.ll);
        const o = {
          id: B.uid(), type: mode, createdAt: Date.now(),
          from: dr.from, to: dr.to, tariff: tar.id,
          price: B.fare(tar, trip), km: trip.km, min: trip.min,
          pay: S.pay, comment: dr.comment.trim(), pkg: dr.pkg.trim(),
          driver: B.makeDriver(mode, tar), start: B.nearby(dr.from.ll),
          nearby: 6 + Math.floor(Math.random() * 14),
        };
        S.orders.push(o);
        B.save();
        dr.to = null;
        dr.comment = '';
        dr.pkg = '';
        renderAll();
      },
      'tx-cancel': () => {
        const o = activeOrder();
        if (!o) return;
        B.confirm(t('taxi.cancel.q'), t('taxi.cancel.free'), t('taxi.cancel.yes'), () => {
          o.cancelled = true;
          o.notified = true;
          B.save();
          dr.from = o.from;
          renderAll();
          B.toast(t('taxi.cancelled'));
        }, true);
      },
      'tx-call': () => B.toast(t('demo.call')),
      'tx-share': () => {
        const o = activeOrder();
        if (!o) return;
        const d = o.driver;
        const car = d.car ? `${d.car}, ${d.plate.num} ${d.plate.reg}` : L_(d.vehicle);
        B.copy(t('taxi.share.text', { to: L_(o.to.n), car, name: d.name }), t('taxi.share.ok'));
      },
      'tx-rate': (el) => { rate.n = +el.dataset.n; renderPanel(); },
      'tx-tip': (el) => { rate.tip = +el.dataset.n; renderPanel(); },
      'tx-rate-send': () => {
        const o = rateOrder();
        if (!o) return;
        o.rated = true;
        o.stars = rate.n;
        o.tip = rate.tip;
        B.save();
        dr.from = o.to;
        renderAll();
        B.toast(t('taxi.thanks'));
      },
    });

    Object.assign(B.inputs, {
      'tx-comment': (el) => { dr.comment = el.value; },
      'tx-pkg': (el) => { dr.pkg = el.value; },
      'tx-q': (el) => {
        const q = el.value;
        renderResults(q);
        clearTimeout(qTimer);
        if (q.trim().length < 3) return;
        const seq = ++qSeq;
        qTimer = setTimeout(() => {
          geocode(q).then((r) => { if (seq === qSeq) renderResults(q, r); }).catch(() => {});
        }, 700);
      },
    });

    return {
      html,
      full: true,
      mount() {
        map = B.map.create(document.getElementById('taxi-map'), { zoom: 13 });
        map.on('click', onMapClick);
        renderPanel();
        requestAnimationFrame(() => {
          if (!map) return;
          map.invalidateSize();
          drawMap(true);
        });
        if (p.focus === 'to' && view().k === 'plan') openAddr('to');
      },
      unmount() {
        clearTimeout(qTimer);
        if (map) { map.remove(); map = null; }
      },
      tick() {
        const v = view();
        const key = v.k + ':' + (v.o ? v.o.id + ':' + B.status(v.o).key : '');
        if (key !== panelKey) {
          renderPanel();
          drawMap(true);
          return;
        }
        if (v.k !== 'active') return;
        const st = B.status(v.o);
        const sub = document.getElementById('ride-sub');
        if (sub) sub.textContent = subline(v.o, st);
        const bar = document.getElementById('ride-bar');
        if (bar) bar.style.width = Math.round(st.p * 100) + '%';
        if (lay.car) {
          const c = carPos(v.o);
          lay.car.setLatLng(c.ll);
          B.map.rotate(lay.car, c.deg);
        }
      },
    };
  };
})();
