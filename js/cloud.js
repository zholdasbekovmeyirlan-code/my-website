/* EntryX — accounts, Pro plan and cloud sync (Supabase).
   Inactive unless js/config.js has supabaseUrl + supabaseAnonKey. Pro status is
   read from the `profiles` table, which only the payment webhook can write; the
   `journals` table rejects reads/writes from non-Pro users via RLS. */
(function () {
  'use strict';

  const C = window.EDGEBOOK_CONFIG || {};
  const META_KEY = 'edgebook:sync';
  const SDK = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

  const metaKey = () => META_KEY + (Cloud.user ? ':' + Cloud.user.id : '');
  const readMeta = () => { try { return JSON.parse(localStorage.getItem(metaKey())) || {}; } catch (e) { return {}; } };
  const writeMeta = m => { try { localStorage.setItem(metaKey(), JSON.stringify(m)); } catch (e) { /* storage blocked */ } };

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (window.supabase && window.supabase.createClient) return resolve();
      const s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = resolve; s.onerror = () => reject(new Error('sdk'));
      document.head.appendChild(s);
      setTimeout(() => reject(new Error('timeout')), 15000);
    });
  }

  const Cloud = {
    enabled: !!(C.supabaseUrl && C.supabaseAnonKey),
    ready: false,
    user: null,
    profile: null,
    status: 'idle',          // idle | syncing | synced | error | conflict
    error: '',
    lastSync: null,
    conflict: null,
    _client: null,
    _subs: [],
    _suppress: false,
    _timer: null,

    on(fn) { this._subs.push(fn); },
    emit() { this._subs.forEach(fn => { try { fn(this); } catch (e) { console.error(e); } }); },

    get isPaid() {
      const p = this.profile;
      return !!(this.user && p && p.plan === 'pro' && (!p.plan_until || new Date(p.plan_until) > new Date()));
    },
    get isTrial() {
      const p = this.profile;
      return !!(this.user && p && !this.isPaid && p.trial_until && new Date(p.trial_until) > new Date());
    },
    get isPro() { return this.isPaid || this.isTrial; },
    get trialDaysLeft() {
      const p = this.profile;
      if (!this.isTrial) return 0;
      return Math.max(1, Math.ceil((new Date(p.trial_until) - new Date()) / 864e5));
    },

    async init() {
      Store.onSave(() => this._queue());
      if (!this.enabled) { this.ready = true; return; }
      try {
        await loadScript(SDK);
        this._client = window.supabase.createClient(C.supabaseUrl, C.supabaseAnonKey, {
          auth: { flowType: 'pkce', detectSessionInUrl: true, persistSession: true }
        });
        const { data } = await this._client.auth.getSession();
        await this._setUser(data.session ? data.session.user : null);
        this._client.auth.onAuthStateChange((evt, session) => {
          const u = session ? session.user : null;
          if ((u && u.id) !== (this.user && this.user.id)) this._setUser(u);
        });
        window.addEventListener('online', () => { if (this.isPro && readMeta().dirty) this.push(); });
      } catch (e) {
        this.status = 'error'; this.error = e.message;
      }
      this.ready = true;
      this.emit();
    },

    async _setUser(u) {
      this.user = u; this.profile = null; this.conflict = null;
      // Each account gets its own local journal; a brand-new one starts with demo data.
      this._suppress = true;
      try {
        Store.setUser(u ? u.id : null);
        if (u && !Store.state.settings.seeded) Store.seedDemo(Store.state.settings.lang || 'kk');
      } finally { this._suppress = false; }
      this.lastSync = u ? readMeta().lastSync || null : null;
      if (u) {
        await this.refreshProfile();
        if (this.isPro) await this.syncNow();
      } else this.status = 'idle';
      this.emit();
    },

    async refreshProfile() {
      if (!this.user) return null;
      const { data, error } = await this._client.from('profiles').select('*').eq('id', this.user.id).maybeSingle();
      if (!error) this.profile = data || { plan: 'free' };
      this.emit();
      return this.profile;
    },

    async signIn(email, password) {
      const { error } = await this._client.auth.signInWithPassword({ email, password });
      if (error) throw error;
    },
    async signUp(email, password) {
      const { data, error } = await this._client.auth.signUp({
        email, password,
        options: { emailRedirectTo: location.origin + location.pathname + '#/settings' }
      });
      if (error) throw error;
      return !!data.session;   // false → email confirmation required
    },
    async signInWith(provider) {
      const { error } = await this._client.auth.signInWithOAuth({
        provider,
        options: { redirectTo: location.origin + location.pathname }
      });
      if (error) throw error;
    },
    providers() { return (C.oauthProviders || []).filter(p => ['google', 'github', 'apple'].indexOf(p) >= 0); },
    async accessToken() {
      if (!this._client) return null;
      const { data } = await this._client.auth.getSession();
      return data.session ? data.session.access_token : null;
    },
    async signOut() { await this._client.auth.signOut(); },

    /* Telegram bot link (see supabase/005_telegram.sql) */
    async tgStatus() {
      const { data } = await this._client.from('telegram_links').select('username, remind_hour').eq('user_id', this.user.id).maybeSingle();
      return data || null;
    },
    async tgCode() {
      const { data, error } = await this._client.rpc('tg_link_code');
      if (error) throw error;
      return data;
    },
    async tgUnlink() { await this._client.from('telegram_links').delete().eq('user_id', this.user.id); },

    /* NOWPayments: the `pay` Edge Function creates an invoice and returns its URL */
    async startCheckout(interval) {
      const token = await this.accessToken();
      if (!token) throw new Error('auth');
      const res = await fetch(C.supabaseUrl.replace(/\/$/, '') + '/functions/v1/' + C.payFunction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token, apikey: C.supabaseAnonKey },
        body: JSON.stringify({ plan: interval === 'yearly' ? 'yearly' : 'monthly', returnUrl: location.origin + location.pathname })
      });
      let data = {};
      try { data = await res.json(); } catch (e) { /* non-json */ }
      if (!res.ok || !data.url) throw new Error(data.error || 'http_' + res.status);
      return data.url;
    },
    checkoutUrl(interval) {
      const base = (C.checkout || {})[interval];
      if (!base || !this.user) return '';
      return base + (base.indexOf('?') >= 0 ? '&' : '?') +
        'checkout[email]=' + encodeURIComponent(this.user.email || '') +
        '&checkout[custom][user_id]=' + encodeURIComponent(this.user.id);
    },

    /* Called on every local save */
    _queue() {
      if (this._suppress) return;
      const m = readMeta(); m.dirty = true; writeMeta(m);
      if (!this.isPro) return;
      clearTimeout(this._timer);
      this._timer = setTimeout(() => this.push(), 1500);
    },

    async push() {
      if (!this.isPro) return false;
      this.status = 'syncing'; this.emit();
      const { data, error } = await this._client.from('journals')
        .upsert({ user_id: this.user.id, data: Store.state, updated_at: new Date().toISOString() })
        .select('updated_at').single();
      if (error) { this.status = 'error'; this.error = error.message; this.emit(); return false; }
      this.lastSync = data.updated_at;
      writeMeta({ userId: this.user.id, lastSync: data.updated_at, dirty: false });
      this.status = 'synced'; this.emit();
      return true;
    },

    /* Decide direction: pull, push, or ask the user */
    async syncNow() {
      if (!this.isPro) return;
      this.status = 'syncing'; this.emit();
      const { data, error } = await this._client.from('journals').select('data, updated_at').eq('user_id', this.user.id).maybeSingle();
      if (error) { this.status = 'error'; this.error = error.message; this.emit(); return; }
      const m = readMeta();
      const same = m.userId === this.user.id;
      const lastSync = same ? m.lastSync : null;
      const dirty = same ? !!m.dirty : true;
      const localEmpty = !Store.state.trades.length || Store.state.settings.demo;
      if (!data) return this.push();
      if (localEmpty || !dirty) return this.apply(data);
      if (lastSync && new Date(data.updated_at) <= new Date(lastSync)) return this.push();
      this.conflict = data; this.status = 'conflict'; this.emit();
    },

    apply(row) {
      const keep = { lang: Store.state.settings.lang, theme: Store.state.settings.theme, langChosen: Store.state.settings.langChosen };
      this._suppress = true;
      try {
        Store.importJSON(JSON.stringify(row.data));
        Object.assign(Store.state.settings, keep);
        Store.save();
      } finally { this._suppress = false; }
      this.lastSync = row.updated_at;
      writeMeta({ userId: this.user.id, lastSync: row.updated_at, dirty: false });
      this.conflict = null; this.status = 'synced';
      this.emit();
    },

    resolve(choice) {
      const row = this.conflict;
      this.conflict = null;
      if (!row) return;
      if (choice === 'cloud') this.apply(row); else this.push();
    }
  };

  window.Cloud = Cloud;
})();
