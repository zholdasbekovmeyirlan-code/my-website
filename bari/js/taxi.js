/* Бәрі — taxi and courier: pick a route, choose a tariff, follow the driver live. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);
  const drafts = {};

  B.screens.taxi = function (p) {
    const mode = p.mode === 'courier' ? 'courier' : 'taxi';
    const kind = mode === 'courier' ? 'parcel' : 'ride';
    const tariffs = (B.cfg && B.cfg.tariffs[kind]) || [];
    const dr = drafts[mode] || (drafts[mode] = { from: Object.assign({}, D.here), to: null, tariff: tariffs[0] && tariffs[0].id, comment: '', pkg: '' });
    if (B.taxiPreset && mode === 'taxi') { dr.to = B.taxiPreset; B.taxiPreset = null; }
    const rate = { n: 5, tip: 0 };
    let map = null, lay = {}, pickField = null, panelKey = '', busy = false;

    const view = () => {
      const o = B.orders.activeOf(kind);
      if (o) return { k: 'active', o };
      const r = B.orders.toRate(kind);
      return r ? { k: 'rate', o: r } : { k: 'plan' };
    };
    const tariffOf = (id) => tariffs.find((x) => x.id === id) || tariffs[0];
    const socialOk = () => !!(B.session && B.session.user.social_verified && B.session.user.social_status !== 'none');
    const workerPos = (o) => (o.worker && o.worker.lat != null ? { lat: o.worker.lat, lng: o.worker.lng } : null);

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
      const locked = x.social && !socialOk();
      const price = trip ? B.money(B.fare(x, trip)) : t('from', { price: B.money(B.fare(x, null)) });
      const sub = x.social ? '−30%' : x.w ? L_(x.w) : t('taxi.eta', { n: x.eta });
      return `<button class="tariff${on ? ' on' : ''}${locked ? ' locked' : ''}" role="radio" aria-checked="${on}" data-act="tx-tariff" data-id="${x.id}">
          <span class="tariff-e" aria-hidden="true">${B.art(x.e)}</span>
          <span class="tariff-n">${L_(x.n)}</span>
          <span class="tariff-p">${price}</span>
          <span class="tariff-s">${sub}</span>
        </button>`;
    }

    function planHTML() {
      if (!tariffs.length) return `<div class="grab" aria-hidden="true"></div><p class="empty-line">${t('err.network')}</p>`;
      const trip = dr.to ? B.trip(dr.from, dr.to) : null;
      const tar = tariffOf(dr.tariff);
      const locked = tar.social && !socialOk();
      const price = trip ? B.fare(tar, trip) : 0;
      const quick = [
        ['home', B.addressOf('home')], ['work', B.addressOf('work')],
        ['airport', D.places[0]], ['mega', D.places[1]], ['alm2', D.places[4]],
      ].filter(([, pl]) => pl);
      return `<div class="grab" aria-hidden="true"></div>
        <h2 class="sr-only">${t('svc.' + mode)}</h2>
        <div class="route-box">
          ${routeRow('from', dr.from)}
          ${routeRow('to', dr.to)}
          <button class="swap-btn" data-act="tx-swap" aria-label="${t('taxi.swap')}" ${dr.to ? '' : 'disabled'}>${B.ic('swap')}</button>
        </div>
        ${dr.to ? '' : `<div class="chips quick">${quick.map(([id, pl]) => `<button class="chip" data-act="tx-quick" data-id="${id}">${B.esc(id === 'home' || id === 'work' ? t('addr.' + id) : L_(pl.n))}</button>`).join('')}</div>`}
        <div class="tariffs" role="radiogroup" aria-label="${t('taxi.tariff')}">${tariffs.map((x) => tariffCard(x, trip)).join('')}</div>
        ${trip ? `<p class="trip-meta">${B.ic('clock')}<span>${t('taxi.trip', { km: B.dec(trip.km, 1), min: trip.min })}</span></p>` : ''}
        ${locked ? `<p class="hint-line">${t(B.session && B.session.user.social_status !== 'none' ? 'taxi.social.wait' : 'taxi.social.lock')} <button class="link" data-act="tab" data-tab="profile">${t('taxi.social.go')}</button></p>` : ''}
        ${mode === 'courier' ? `<label class="field"><span>${t('courier.what')}</span><input id="tx-pkg" data-in="tx-pkg" value="${B.esc(dr.pkg)}" placeholder="${t('courier.what.ph')}" maxlength="80" autocomplete="off"></label>` : ''}
        <div class="seg" role="radiogroup" aria-label="${t('pay')}">
          <button class="seg-btn on" role="radio" aria-checked="true">${B.ic('cash')}<span>${t('pay.cash')}</span></button>
          <button class="seg-btn" role="radio" aria-checked="false" data-act="soon-card">${B.ic('card')}<span>${t('pay.card')}</span><span class="tag tag-soon-inline">${t('soon')}</span></button>
        </div>
        <label class="field"><span>${t(mode === 'courier' ? 'courier.comment' : 'taxi.comment')}</span><input id="tx-comment" data-in="tx-comment" value="${B.esc(dr.comment)}" placeholder="${t(mode === 'courier' ? 'courier.comment.ph' : 'taxi.comment.ph')}" maxlength="120" autocomplete="off"></label>
        <div class="panel-cta">
          <button class="btn btn-primary btn-block btn-lg" data-act="tx-order" ${trip && !locked && !busy ? '' : 'disabled'}>
            <span>${t(mode === 'courier' ? 'courier.order' : 'taxi.order')}</span>${trip && !locked ? `<span class="btn-price">${B.money(price)}</span>` : ''}
          </button>
        </div>`;
    }

    function subline(o) {
      const wp = workerPos(o);
      switch (o.status) {
        case 'searching': return o.nearby ? t('taxi.searching.sub', { n: o.nearby }) : t('taxi.searching.none');
        case 'accepted': return wp ? t('taxi.arrives', { n: B.minutesTo(wp, o.from) }) : t('taxi.coming.noloc');
        case 'arrived': return t('taxi.arrived.sub');
        case 'riding':
        case 'picked': return wp ? t('taxi.left', { n: B.minutesTo(wp, o.to) }) : t('taxi.left', { n: o.minutes });
        default: return '';
      }
    }

    function workerHTML(o) {
      const w = o.worker;
      if (!w) return '';
      const vehicle = w.car_model ? `${B.esc(w.car_model)} · ${B.esc(w.car_color)}` : t('veh.' + w.vehicle);
      return `<div class="driver">
          ${B.avatar(w.name)}
          <div class="driver-info">
            <b>${B.esc(w.name)}</b>
            <span class="meta">${B.rating(w, 2)} · ${vehicle}</span>
          </div>
          ${w.car_plate ? B.plate(w.car_plate) : ''}
        </div>`;
    }

    function activeHTML(o) {
      const tar = tariffOf(o.tariff);
      const canCancel = ['searching', 'accepted', 'arrived'].includes(o.status) && !(kind === 'parcel' && o.status === 'arrived');
      return `<div class="grab" aria-hidden="true"></div>
        <div class="ride">
          <div class="ride-head">
            ${o.status === 'searching' ? '<span class="radar" aria-hidden="true"><i></i><i></i></span>' : ''}
            <div>
              <h2 class="ride-title">${B.statusText(o)}</h2>
              <p class="ride-sub" id="ride-sub">${subline(o)}</p>
            </div>
          </div>
          <div class="bar" aria-hidden="true"><i style="width:${Math.round(B.progress(o) * 100)}%"></i></div>
          ${workerHTML(o)}
          <ol class="ride-route">
            <li><span class="dot dot-from" aria-hidden="true"></span>${B.esc(o.from.n)}</li>
            <li><span class="dot dot-to" aria-hidden="true"></span>${B.esc(o.to.n)}</li>
          </ol>
          ${o.pkg ? `<p class="muted small">${t('courier.what')}: ${B.esc(o.pkg)}</p>` : ''}
          <div class="ride-sum"><span>${tar ? L_(tar.n) : ''} · ${t('pay.' + o.pay)}</span><b>${B.money(o.price)}</b></div>
          <div class="ride-actions">
            ${o.worker ? `<button class="act" data-act="tx-call">${B.ic('phone')}<span>${t('taxi.call')}</span></button>
            <button class="act" data-act="tx-share">${B.ic('share')}<span>${t('taxi.share')}</span></button>` : ''}
            ${canCancel ? `<button class="act act-bad" data-act="tx-cancel">${B.ic('close')}<span>${t('taxi.cancel')}</span></button>` : ''}
          </div>
        </div>`;
    }

    function rateHTML(o) {
      const w = o.worker || { name: '' };
      return `<div class="grab" aria-hidden="true"></div>
        <div class="rate">
          <h2 class="ride-title">${t(mode === 'courier' ? 'courier.done' : 'taxi.done')}</h2>
          <p class="ride-sub">${B.esc(w.name)}${w.car_model ? ' · ' + B.esc(w.car_model) : ''}</p>
          <div class="stars" role="radiogroup" aria-label="${t('taxi.rate')}">
            ${[1, 2, 3, 4, 5].map((n) => `<button class="star${n <= rate.n ? ' on' : ''}" role="radio" aria-checked="${n === rate.n}" aria-label="${n}" data-act="tx-rate" data-n="${n}">${B.ic('star')}</button>`).join('')}
          </div>
          <div class="tip-row">
            <span class="label">${t('taxi.tip')}</span>
            <div class="chips">${[0, 200, 500, 1000].map((n) => `<button class="chip${rate.tip === n ? ' on' : ''}" data-act="tx-tip" data-n="${n}">${n ? B.money(n) : t('taxi.tip.none')}</button>`).join('')}</div>
          </div>
          <div class="ride-sum"><span>${t('taxi.paid')}</span><b>${B.money(o.price + rate.tip)}</b></div>
          ${B.split(o.price, mode === 'courier' ? 'split.courier' : 'split.driver', rate.tip)}
          <div class="panel-cta">
            <button class="btn btn-primary btn-block" data-act="tx-rate-send">${t('taxi.rate.send')}</button>
            <button class="link center" data-act="tx-rate-skip">${t('taxi.rate.skip')}</button>
          </div>
        </div>`;
    }

    const keyOf = (v) => v.k + ':' + (v.o ? v.o.id + ':' + v.o.status + ':' + (v.o.worker ? v.o.worker.id : '') : '');
    function renderPanel() {
      const panel = document.getElementById('taxi-panel');
      if (!panel) return;
      const v = view();
      panelKey = keyOf(v);
      panel.innerHTML = v.k === 'plan' ? planHTML() : v.k === 'active' ? activeHTML(v.o) : rateHTML(v.o);
    }

    /* ---------- map ---------- */
    function drawMap(fit) {
      if (!map) return;
      Object.values(lay).forEach((l) => map.removeLayer(l));
      lay = {};
      const v = view();
      const from = v.k === 'plan' ? dr.from : v.o.from;
      const to = v.k === 'plan' ? dr.to : v.o.to;
      if (to) lay.route = B.map.route(map, B.routePts(from, to));
      if (v.k === 'active' && v.o.status === 'searching') lay.pulse = L.marker(B.ll(from), { icon: B.map.pulse(), interactive: false, keyboard: false }).addTo(map);
      lay.a = L.marker(B.ll(from), { icon: B.map.pin('from'), interactive: false, keyboard: false }).addTo(map);
      if (to) lay.b = L.marker(B.ll(to), { icon: B.map.pin('to'), interactive: false, keyboard: false }).addTo(map);
      placeCar(v);
      if (fit) fitView(from, to, v.k === 'active' ? workerPos(v.o) : null);
    }
    function placeCar(v) {
      const wp = v.k === 'active' ? workerPos(v.o) : null;
      if (!wp) {
        if (lay.car) { map.removeLayer(lay.car); delete lay.car; }
        return;
      }
      if (!lay.car) lay.car = L.marker(B.ll(wp), { icon: B.map.car(), interactive: false, keyboard: false }).addTo(map);
      else {
        const prev = lay.car.getLatLng();
        if (prev.lat !== wp.lat || prev.lng !== wp.lng) B.map.rotate(lay.car, B.map.bearing([prev.lat, prev.lng], B.ll(wp)));
        lay.car.setLatLng(B.ll(wp));
      }
    }

    function fitView(from, to, extra) {
      if (!map) return;
      const panel = document.getElementById('taxi-panel');
      const ph = panel ? panel.offsetHeight : 320;
      const pts = [B.ll(from)];
      if (to) pts.push(B.ll(to));
      if (extra) pts.push(B.ll(extra));
      if (pts.length > 1) {
        map.fitBounds(L.latLngBounds(pts), { paddingTopLeft: [40, 80], paddingBottomRight: [40, ph + 24], maxZoom: 16, animate: false });
      } else {
        map.setView(pts[0], 15, { animate: false });
        map.panBy([0, ph / 2 - 20], { animate: false });
      }
    }

    function renderAll() {
      renderPanel();
      drawMap(true);
    }

    /* ---------- choosing addresses ---------- */
    function setField(field, pl) {
      dr[field] = pl;
      pickField = null;
      hint(false);
      renderAll();
    }
    function hint(on) {
      const h = document.getElementById('map-hint');
      if (h) h.hidden = !on;
      const root = document.querySelector('.taxi');
      if (root) root.classList.toggle('picking', !!on);
    }
    function openAddr(field) {
      pickField = null;
      hint(false);
      B.addressSheet({
        title: t(field === 'from' ? 'addr.title.from' : 'addr.title.to'),
        gps: field === 'from',
        mapPick: () => { pickField = field; hint(true); },
        onPick: (pl) => setField(field, pl),
      });
    }
    function onMapClick(e) {
      if (view().k !== 'plan') return;
      const f = pickField || (dr.to ? null : 'to');
      if (f) setField(f, B.nearestPlace({ lat: e.latlng.lat, lng: e.latlng.lng }));
    }

    /* ---------- actions ---------- */
    Object.assign(B.actions, {
      'tx-field': (el) => openAddr(el.dataset.field),
      'tx-quick': (el) => {
        const id = el.dataset.id;
        setField('to', B.addressOf(id) || D.places.find((x) => x.id === id));
      },
      'tx-pick-cancel': () => { pickField = null; hint(false); },
      'tx-swap': () => {
        if (!dr.to) return;
        [dr.from, dr.to] = [dr.to, dr.from];
        renderAll();
      },
      'tx-tariff': (el) => { dr.tariff = el.dataset.id; renderPanel(); },
      'soon-card': () => B.toast(t('pay.card.soon')),
      'tx-loc': () => {
        if (view().k !== 'plan') return drawMap(true);
        B.locate((pl) => setField('from', pl));
      },
      'tx-order': () => {
        if (!dr.to || busy) return;
        B.requireLogin(async () => {
          const tar = tariffOf(dr.tariff);
          if (tar.social && !socialOk()) return renderPanel();
          busy = true;
          renderPanel();
          try {
            const body = {
              from: B.toPoint(dr.from), to: B.toPoint(dr.to), tariff: tar.id, pay: 'cash',
              comment: dr.comment.trim(), pkg: dr.pkg.trim(),
            };
            const o = await B.api.post('/api/orders/' + kind, body, { idem: B.idemKey(kind, body) });
            B.idemDone(kind);
            B.orders.put(o);
            dr.to = null;
            dr.comment = '';
            dr.pkg = '';
          } catch (e) {
            B.fail(e);
          }
          busy = false;
          renderAll();
        }, t('login.why.order'));
      },
      'tx-cancel': () => {
        const o = B.orders.activeOf(kind);
        if (!o) return;
        B.confirm(t('taxi.cancel.q'), t('taxi.cancel.free'), t('taxi.cancel.yes'), async () => {
          try {
            B.orders.put(await B.api.post(`/api/orders/${o.id}/cancel`));
            dr.from = { n: o.from.n, a: o.from.a, lat: o.from.lat, lng: o.from.lng };
            renderAll();
            B.toast(t('taxi.cancelled'));
          } catch (e) {
            B.fail(e);
          }
        }, true);
      },
      'tx-call': () => {
        const o = B.orders.activeOf(kind);
        if (!o || !o.worker) return;
        B.callSheet(o.worker.name, o.worker.phone);
      },
      'tx-share': () => {
        const o = B.orders.activeOf(kind);
        if (!o || !o.worker) return;
        const w = o.worker;
        const car = w.car_model ? `${w.car_model}, ${w.car_plate}` : t('veh.' + w.vehicle);
        B.copy(t('taxi.share.text', { to: o.to.n, car, name: w.name }), t('taxi.share.ok'));
      },
      'tx-rate': (el) => { rate.n = +el.dataset.n; renderPanel(); },
      'tx-tip': (el) => { rate.tip = +el.dataset.n; renderPanel(); },
      'tx-rate-send': async () => {
        const o = B.orders.toRate(kind);
        if (!o) return;
        try {
          B.orders.put(await B.api.post(`/api/orders/${o.id}/rate`, { stars: rate.n, tip: rate.tip }));
          dr.from = { n: o.to.n, a: o.to.a, lat: o.to.lat, lng: o.to.lng };
          renderAll();
          B.toast(t('taxi.thanks'));
        } catch (e) {
          B.fail(e);
        }
      },
      'tx-rate-skip': () => {
        const o = B.orders.toRate(kind);
        if (o) o.skipRate = true;
        renderAll();
      },
    });

    Object.assign(B.inputs, {
      'tx-comment': (el) => { dr.comment = el.value; },
      'tx-pkg': (el) => { dr.pkg = el.value; },
    });

    function sync() {
      const v = view();
      if (keyOf(v) !== panelKey) {
        renderPanel();
        drawMap(true);
        return;
      }
      if (v.k !== 'active') return;
      const sub = document.getElementById('ride-sub');
      if (sub) sub.textContent = subline(v.o);
      placeCar(v);
    }

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
        if (map) { map.remove(); map = null; }
      },
      onOrder: sync,
      onOrders: renderAll,
      onLoc: sync,
      tick() {
        // ETA text follows the driver; refresh every few seconds.
        if (Date.now() % 5000 < 1000) sync();
      },
    };
  };

})();
