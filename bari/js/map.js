/* Бәрі — map helpers on top of Leaflet + OpenStreetMap tiles.
   If tiles can't load (offline, blocked), a schematic Almaty map is drawn instead. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const TILE = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

  function schematic(m) {
    m.getContainer().classList.add('map-schematic');
    L.polygon(D.mountains, { className: 'mt-poly', interactive: false }).addTo(m);
    L.tooltip({ permanent: true, direction: 'center', className: 'st-label mt-label' })
      .setLatLng([43.175, 76.93]).setContent('Іле Алатауы').addTo(m);
    D.streets.forEach((s) => {
      L.polyline(s.pts, { className: 'st-line', interactive: false }).addTo(m);
      L.tooltip({ permanent: true, direction: 'center', className: 'st-label' })
        .setLatLng(s.at).setContent(s.v ? `<span class="v">${s.n}</span>` : s.n).addTo(m);
    });
  }

  const CAR = `<svg viewBox="0 0 24 40" width="18" height="30" aria-hidden="true">
      <rect x="2" y="2" width="20" height="36" rx="7" class="car-body"/>
      <rect x="5" y="9" width="14" height="8" rx="2.5" class="car-glass"/>
      <rect x="5" y="27" width="14" height="5" rx="2" class="car-glass"/>
    </svg>`;

  B.map = {
    create(el, opts) {
      opts = opts || {};
      const m = L.map(el, {
        zoomControl: false,
        attributionControl: true,
        center: opts.center || D.center,
        zoom: opts.zoom || 13,
        zoomSnap: 0.25,
        dragging: opts.dragging !== false,
        scrollWheelZoom: opts.scrollWheelZoom !== false,
      });
      m.attributionControl.setPrefix(false);
      const layer = L.tileLayer(TILE, { maxZoom: 19, attribution: '© OpenStreetMap' });
      let ok = false, failed = false, errors = 0;
      const fail = () => {
        if (ok || failed || !m._loaded) return;
        failed = true;
        m.removeLayer(layer);
        schematic(m);
      };
      layer.on('tileload', () => { ok = true; });
      layer.on('tileerror', () => { errors += 1; if (errors >= 2) fail(); });
      layer.addTo(m);
      const timer = setTimeout(fail, 8000);
      m.on('unload', () => clearTimeout(timer));
      return m;
    },

    pin(kind, html) {
      return L.divIcon({ className: 'pin-wrap', html: `<span class="pin pin-${kind}">${html || ''}</span>`, iconSize: [28, 28], iconAnchor: [14, 14] });
    },
    pulse() {
      return L.divIcon({ className: 'pin-wrap', html: '<span class="pulse"></span>', iconSize: [140, 140], iconAnchor: [70, 70] });
    },
    car() {
      return L.divIcon({ className: 'car-wrap', html: `<span class="car-mk">${CAR}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] });
    },
    rotate(marker, deg) {
      const el = marker && marker.getElement();
      const mk = el && el.querySelector('.car-mk');
      if (mk) mk.style.transform = `rotate(${deg}deg)`;
    },

    bearing(a, b) {
      const dx = (b[1] - a[1]) * Math.cos((a[0] * Math.PI) / 180);
      const dy = b[0] - a[0];
      return (Math.atan2(dx, dy) * 180) / Math.PI;
    },

    // Point at fraction t (0..1) along a polyline, with heading.
    along(pts, t) {
      const seg = [];
      let total = 0;
      for (let i = 1; i < pts.length; i++) {
        const d = B.hav(pts[i - 1], pts[i]);
        seg.push(d);
        total += d;
      }
      let target = Math.max(0, Math.min(1, t)) * total;
      for (let i = 0; i < seg.length; i++) {
        if (target <= seg[i] || i === seg.length - 1) {
          const f = seg[i] ? Math.min(1, target / seg[i]) : 1;
          const a = pts[i], b = pts[i + 1];
          return { ll: [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f], deg: B.map.bearing(a, b) };
        }
        target -= seg[i];
      }
      return { ll: pts[pts.length - 1], deg: 0 };
    },

    route(m, pts) {
      const g = L.layerGroup().addTo(m);
      L.polyline(pts, { className: 'route-casing', interactive: false }).addTo(g);
      L.polyline(pts, { className: 'route-line', interactive: false }).addTo(g);
      return g;
    },
  };
})();
