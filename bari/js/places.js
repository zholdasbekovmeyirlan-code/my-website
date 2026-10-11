/* Бәрі — choosing an address: saved places, search (OpenStreetMap), GPS, or a point on the map. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const t = (k, v) => B.t(k, v);
  const L_ = (v) => B.L(v);

  // OpenStreetMap search (Nominatim), limited to Almaty. For a large launch switch to a paid geocoder (e.g. 2GIS).
  B.geocode = function (q) {
    const url = 'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=6&countrycodes=kz&bounded=1'
      + '&viewbox=76.75,43.40,77.15,43.10&accept-language=' + (B.state.lang === 'ru' ? 'ru' : 'kk,ru')
      + '&q=' + encodeURIComponent(q);
    return fetch(url).then((r) => (r.ok ? r.json() : [])).then((arr) => arr.map((x) => {
      const parts = String(x.display_name).split(', ');
      return { n: parts[0], a: parts.slice(1, 3).join(', '), lat: +x.lat, lng: +x.lon };
    }));
  };

  B.nearestPlace = function (p) {
    let best = null, bd = 0.35;
    D.places.forEach((pl) => { const d = B.hav(p, pl); if (d < bd) { bd = d; best = pl; } });
    return best || { n: ['Картадағы нүкте', 'Точка на карте'], a: B.dec(p.lat, 5) + ', ' + B.dec(p.lng, 5), lat: p.lat, lng: p.lng };
  };

  B.locate = function (onPoint) {
    if (!navigator.geolocation) return B.toast(t('geo.fail'));
    B.toast(t('geo.wait'));
    navigator.geolocation.getCurrentPosition(
      (pos) => onPoint({ n: ['Менің орным', 'Моё местоположение'], a: B.dec(pos.coords.latitude, 5) + ', ' + B.dec(pos.coords.longitude, 5), lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => B.toast(t('geo.fail')),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
  };

  B.addressSheet = function (opts) {
    const { title, gps, mapPick, onPick } = opts;
    let results = [];
    let timer = null, seq = 0;

    const pick = (pl) => { B.sheet.close(true); onPick(pl); };
    const match = (pl, q) => [pl.n, pl.a].flat().some((s) => s && String(s).toLowerCase().includes(q));

    function render(q, remote) {
      const box = document.getElementById('addr-results');
      if (!box) return;
      const ql = q.trim().toLowerCase();
      results = [];
      ['home', 'work'].forEach((k) => {
        const pl = B.addressOf(k);
        if (pl && (!ql || match(pl, ql))) results.push({ pl: Object.assign({}, pl, { n: [t('addr.' + k), t('addr.' + k)] , a: pl.a || L_(pl.n) }), icon: k === 'home' ? 'home' : 'briefcase' });
      });
      D.places.forEach((pl) => { if (!ql || match(pl, ql)) results.push({ pl, icon: 'pin' }); });
      (remote || []).forEach((pl) => results.push({ pl, icon: 'search' }));
      box.innerHTML = results.length
        ? results.map((r, i) => `<button class="list-row" data-act="addr-pick" data-i="${i}">
            <span class="icon-box">${B.ic(r.icon)}</span>
            <span class="lr-text"><b>${B.esc(L_(r.pl.n))}</b>${r.pl.a ? `<em>${B.esc(L_(r.pl.a))}</em>` : ''}</span>
          </button>`).join('')
        : `<p class="empty-line">${t('addr.none')}</p>`;
    }

    B.actions['addr-pick'] = (el) => { const r = results[+el.dataset.i]; if (r) pick(r.pl); };
    B.actions['addr-gps'] = () => B.locate(pick);
    B.actions['addr-map'] = () => { B.sheet.close(true); mapPick(); };
    B.inputs['addr-q'] = (el) => {
      const q = el.value;
      render(q);
      clearTimeout(timer);
      if (q.trim().length < 3) return;
      const my = ++seq;
      timer = setTimeout(() => {
        B.geocode(q).then((r) => { if (my === seq) render(q, r); }).catch(() => {});
      }, 700);
    };

    B.sheet.open(`<div class="sheet-head">
        <h3 class="sheet-title">${title}</h3>
        <button class="icon-btn" data-act="sheet-close" aria-label="${t('close')}">${B.ic('close')}</button>
      </div>
      <label class="search">${B.ic('search')}<span class="sr-only">${t('addr.ph')}</span>
        <input id="addr-q" data-in="addr-q" type="search" placeholder="${t('addr.ph')}" autocomplete="off" enterkeyhint="search">
      </label>
      <div class="list">
        ${gps ? `<button class="list-row" data-act="addr-gps"><span class="icon-box">${B.ic('locate')}</span><span class="lr-text"><b>${t('taxi.myloc')}</b><em>${t('addr.gps')}</em></span></button>` : ''}
        ${mapPick ? `<button class="list-row" data-act="addr-map"><span class="icon-box">${B.ic('map')}</span><span class="lr-text"><b>${t('taxi.pickmap')}</b></span></button>` : ''}
      </div>
      <div class="list" id="addr-results"></div>`, { focus: '#addr-q', label: title, onClose: () => clearTimeout(timer) });
    render('');
  };
})();
