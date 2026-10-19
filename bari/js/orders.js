/* Бәрі — the signed-in client's orders, kept up to date by live events. */
(function () {
  const B = window.Bari;
  const map = new Map();

  const mine = (o) => B.session && o.client_id === B.session.user.id;

  function upsert(o, quiet) {
    const prev = map.get(o.id);
    map.set(o.id, o);
    B.badges.orders = B.orders.active().length > 0;
    if (!quiet && prev && prev.status !== o.status) {
      B.toast(o.status === 'cancelled' ? B.t('st.cancelled') + (o.cancel_reason ? ': ' + B.cancelText(o) : '') : B.statusText(o));
      if (['accepted', 'arrived', 'delivering', 'done'].includes(o.status)) B.beep();
    }
  }

  B.orders = {
    loaded: false,
    async load() {
      map.clear();
      this.loaded = false;
      if (!B.session) return;
      try {
        const list = await B.api.get('/api/orders');
        list.forEach((o) => upsert(o, true));
        this.loaded = true;
      } catch (e) { /* offline: keep empty */ }
      B.renderTabbar();
    },
    get: (id) => map.get(Number(id)),
    list: () => [...map.values()].sort((a, b) => b.created_at - a.created_at),
    active() { return this.list().filter(B.isActive); },
    activeOf(kind) { return this.list().find((o) => o.kind === kind && B.isActive(o)); },
    // The latest finished trip that still waits for a rating (shown once, within an hour).
    toRate(kind) {
      const o = this.list().find((x) => x.kind === kind);
      return o && o.status === 'done' && !o.stars && !o.skipRate && Date.now() - o.updated_at < 3600e3 ? o : null;
    },
    put(o) { upsert(o, true); B.renderTabbar(); },
  };

  B.bus.on('order', (o) => {
    if (!mine(o)) return;
    upsert(o);
    B.renderTabbar();
  });
  B.bus.on('loc', (l) => {
    const o = map.get(l.orderId);
    if (o && o.worker) { o.worker.lat = l.lat; o.worker.lng = l.lng; }
  });
  B.bus.on('session', () => B.orders.load().then(() => {
    const c = B.current();
    if (c && c.inst.onOrders) c.inst.onOrders();
    else B.refresh();
  }));
})();
