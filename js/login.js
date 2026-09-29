/* EntryX — sign in / sign up / password reset page */
(function () {
  'use strict';

  const C = window.EDGEBOOK_CONFIG || {};
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const SDK = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

  const L = {
    kk: {
      art_title: 'Әр мәміле —<br><em>сабақ.</em>', art_sub: 'Сауда тарихыңызды нақты edge-ке айналдырыңыз.', art_equity: 'Капитал · 90 күн',
      pt1: 'Автоматты P&L, R және 30+ метрика', pt2: 'Эмоция мен қателердің нақты құны', pt3: 'Pro: барлық құрылғыда бір журнал',
      in_title: 'Қайта қош келдіңіз', in_sub: 'Журналыңызға кіріңіз.',
      up_title: 'Аккаунт ашыңыз', up_sub: 'Тегін. Карта қажет емес.',
      forgot_title: 'Құпиясөзді қалпына келтіру', forgot_sub: 'Email-іңізді жазыңыз, сілтеме жібереміз.',
      reset_title: 'Жаңа құпиясөз', reset_sub: 'Кемінде 6 таңба.',
      or_email: 'немесе email арқылы', password: 'Құпиясөз', forgot: 'Ұмыттыңыз ба?',
      btn_in: 'Кіру', btn_up: 'Тіркелу', btn_forgot: 'Сілтеме жіберу', btn_reset: 'Сақтау',
      sw_in: 'Аккаунтыңыз жоқ па? <a href="#" data-mode="up">Тіркелу</a>', sw_up: 'Аккаунтыңыз бар ма? <a href="#" data-mode="in">Кіру</a>',
      sw_back: '<a href="#" data-mode="in">← Кіруге оралу</a>',
      cont: '{p} арқылы жалғастыру',
      err_email: 'Дұрыс email енгізіңіз.', err_pw: 'Құпиясөз кемінде 6 таңба болуы керек.',
      err_creds: 'Email немесе құпиясөз қате.', err_confirm: 'Алдымен поштаңыздағы растау сілтемесін басыңыз.',
      err_exists: 'Бұл email тіркелген. Кіріп көріңіз.', err_provider: 'Бұл кіру тәсілі әлі қосылмаған.', err_generic: 'Қате: {m}',
      ok_check: 'Растау хаты <b>{e}</b> мекенжайына жіберілді. Сілтемені басыңыз.', ok_reset_sent: 'Сілтеме жіберілді. Поштаңызды тексеріңіз.',
      ok_reset: 'Құпиясөз жаңартылды. Журнал ашылуда…', redirecting: 'Журнал ашылуда…', offline: 'Сервермен байланыс жоқ. Интернетті тексеріңіз.',
      legal: 'Жалғастыру арқылы сіз <a href="legal.html#terms">Шарттармен</a> және <a href="legal.html#privacy">Құпиялылық саясатымен</a> келісесіз. Қаржылық кеңес емес.'
    },
    en: {
      art_title: 'Every trade is<br>a <em>lesson.</em>', art_sub: 'Turn your trading history into a real edge.', art_equity: 'Equity · 90 days',
      pt1: 'Automatic P&L, R and 30+ metrics', pt2: 'The real cost of emotions and mistakes', pt3: 'Pro: one journal on every device',
      in_title: 'Welcome back', in_sub: 'Sign in to your journal.',
      up_title: 'Create your account', up_sub: 'Free. No card required.',
      forgot_title: 'Reset your password', forgot_sub: 'Enter your email and we will send a link.',
      reset_title: 'New password', reset_sub: 'At least 6 characters.',
      or_email: 'or with email', password: 'Password', forgot: 'Forgot?',
      btn_in: 'Sign in', btn_up: 'Create account', btn_forgot: 'Send link', btn_reset: 'Save',
      sw_in: 'No account yet? <a href="#" data-mode="up">Sign up</a>', sw_up: 'Already have an account? <a href="#" data-mode="in">Sign in</a>',
      sw_back: '<a href="#" data-mode="in">← Back to sign in</a>',
      cont: 'Continue with {p}',
      err_email: 'Enter a valid email.', err_pw: 'Password must be at least 6 characters.',
      err_creds: 'Wrong email or password.', err_confirm: 'Please click the confirmation link in your email first.',
      err_exists: 'This email is already registered. Try signing in.', err_provider: 'This sign-in method is not enabled yet.', err_generic: 'Error: {m}',
      ok_check: 'We sent a confirmation link to <b>{e}</b>. Click it to continue.', ok_reset_sent: 'Link sent. Check your inbox.',
      ok_reset: 'Password updated. Opening your journal…', redirecting: 'Opening your journal…', offline: 'Cannot reach the server. Check your connection.',
      legal: 'By continuing you agree to the <a href="legal.html#terms">Terms</a> and <a href="legal.html#privacy">Privacy Policy</a>. Not financial advice.'
    }
  };

  const LOGOS = {
    google: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z"/><path fill="#FBBC05" d="M5.84 14.09a6.6 6.6 0 010-4.18V7.07H2.18a11 11 0 000 9.86l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 002.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>',
    github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.37 12.62c-.03-2.68 2.19-3.97 2.29-4.03-1.25-1.82-3.19-2.07-3.88-2.1-1.65-.17-3.22.97-4.06.97-.84 0-2.13-.95-3.5-.92-1.8.03-3.46 1.05-4.39 2.66-1.87 3.25-.48 8.06 1.34 10.7.89 1.29 1.95 2.74 3.34 2.69 1.34-.05 1.85-.87 3.47-.87 1.62 0 2.08.87 3.5.84 1.44-.02 2.36-1.31 3.24-2.61 1.02-1.5 1.44-2.95 1.47-3.02-.03-.01-2.81-1.08-2.82-4.31zM13.7 4.74c.74-.9 1.24-2.14 1.1-3.38-1.06.04-2.35.71-3.12 1.6-.68.79-1.28 2.06-1.12 3.27 1.18.09 2.39-.6 3.14-1.49z"/></svg>'
  };
  const NAMES = { google: 'Google', github: 'GitHub', apple: 'Apple' };

  /* ---------- state ---------- */
  Store.load();
  const s = Store.state.settings;
  let lang = s.langChosen || s.seeded ? s.lang : ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'kk');
  if (!L[lang]) lang = 'kk';
  const params = new URLSearchParams(location.search);
  let mode = params.get('mode') === 'up' ? 'up' : 'in';
  if (params.get('reset')) mode = 'reset';
  const next = /^#\/[a-z]+(\/[\w-]+)?$/.test(params.get('next') || '') ? params.get('next') : '#/dashboard';
  const appUrl = new URL('app.html', location.href).href;
  const selfUrl = new URL('login.html', location.href).href;
  const T = (k, v) => { let x = L[lang][k] || k; if (v) Object.keys(v).forEach(n => { x = x.split('{' + n + '}').join(v[n]); }); return x; };
  const esc = x => String(x).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Local-only build: nothing to sign in to
  if (!C.supabaseUrl || !C.supabaseAnonKey) { location.replace(appUrl + next); return; }

  let sb = null, busy = false;
  const go = () => { msg(T('redirecting'), 'ok'); location.replace(appUrl + next); };

  /* ---------- rendering ---------- */
  function paint() {
    document.documentElement.lang = lang;
    $$('[data-l]').forEach(el => { const v = L[lang][el.dataset.l]; if (v != null) el.innerHTML = v; });
    $$('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    const titles = { in: 'in_title', up: 'up_title', forgot: 'forgot_title', reset: 'reset_title' };
    $('#title').textContent = T(titles[mode]);
    $('#subtitle').textContent = T(mode + '_sub');
    $('#submitText').textContent = T({ in: 'btn_in', up: 'btn_up', forgot: 'btn_forgot', reset: 'btn_reset' }[mode]);
    const providers = (C.oauthProviders || []).filter(p => LOGOS[p]);
    const showSocial = (mode === 'in' || mode === 'up') && providers.length;
    $('#social').innerHTML = showSocial ? providers.map(p => '<button type="button" class="btn btn-ghost social-btn" data-oauth="' + p + '">' + LOGOS[p] + '<span>' + T('cont', { p: NAMES[p] }) + '</span></button>').join('') : '';
    $('#social').hidden = !showSocial; $('#orLine').hidden = !showSocial;
    $('#fEmail').hidden = mode === 'reset';
    $('#fPass').hidden = mode === 'forgot';
    $('#forgotLink').hidden = mode !== 'in';
    const pw = $('[name=password]');
    pw.autocomplete = mode === 'in' ? 'current-password' : 'new-password';
    $('#switchLine').innerHTML = mode === 'in' ? T('sw_in') : mode === 'up' ? T('sw_up') : T('sw_back');
    $('#card').classList.remove('swap'); void $('#card').offsetWidth; $('#card').classList.add('swap');
  }
  function setMode(m) { mode = m; msg(''); paint(); const f = mode === 'reset' ? $('[name=password]') : $('[name=email]'); if (f) f.focus(); }
  function msg(text, kind) { const m = $('#msg'); m.innerHTML = text || ''; m.className = 'auth-msg' + (kind ? ' ' + kind : ''); }
  function setBusy(b) { busy = b; $('#submit').classList.toggle('loading', b); $$('button').forEach(x => { if (!x.dataset.lang) x.disabled = b; }); }
  function friendly(err) {
    const m = (err && err.message) || '';
    if (/invalid login credentials/i.test(m)) return T('err_creds');
    if (/email not confirmed/i.test(m)) return T('err_confirm');
    if (/already registered|already exists/i.test(m)) return T('err_exists');
    if (/provider is not enabled|unsupported provider/i.test(m)) return T('err_provider');
    if (/failed to fetch|network/i.test(m)) return T('offline');
    return T('err_generic', { m: esc(m) });
  }

  /* ---------- events ---------- */
  document.addEventListener('click', async e => {
    const lb = e.target.closest('[data-lang]');
    if (lb) { lang = lb.dataset.lang; s.lang = lang; s.langChosen = true; Store.save(); paint(); return; }
    const mb = e.target.closest('[data-mode]');
    if (mb) { e.preventDefault(); setMode(mb.dataset.mode); return; }
    if (e.target.closest('#forgotLink')) { e.preventDefault(); setMode('forgot'); return; }
    if (e.target.closest('#pwToggle')) { const p = $('[name=password]'); p.type = p.type === 'password' ? 'text' : 'password'; return; }
    const ob = e.target.closest('[data-oauth]');
    if (ob && sb && !busy) {
      setBusy(true);
      const { error } = await sb.auth.signInWithOAuth({ provider: ob.dataset.oauth, options: { redirectTo: appUrl } });
      if (error) { msg(friendly(error), 'err'); setBusy(false); }
    }
  });

  $('#form').addEventListener('submit', async e => {
    e.preventDefault();
    if (busy || !sb) return;
    const email = e.target.email.value.trim(), password = e.target.password.value;
    if (mode !== 'reset' && !/^\S+@\S+\.\S+$/.test(email)) return msg(T('err_email'), 'err');
    if (mode !== 'forgot' && password.length < 6) return msg(T('err_pw'), 'err');
    setBusy(true); msg('');
    try {
      if (mode === 'in') {
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw error;
        go();
      } else if (mode === 'up') {
        const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: appUrl } });
        if (error) throw error;
        if (data.session) go();
        else if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) msg(T('err_exists'), 'err');
        else msg(T('ok_check', { e: esc(email) }), 'ok');
      } else if (mode === 'forgot') {
        const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: selfUrl + '?reset=1' });
        if (error) throw error;
        msg(T('ok_reset_sent'), 'ok');
      } else if (mode === 'reset') {
        const { error } = await sb.auth.updateUser({ password });
        if (error) throw error;
        msg(T('ok_reset'), 'ok');
        setTimeout(go, 900);
      }
    } catch (err) { msg(friendly(err), 'err'); }
    finally { setBusy(false); }
  });

  /* ---------- boot ---------- */
  paint();
  function loadSdk() {
    return new Promise((resolve, reject) => {
      if (window.supabase && window.supabase.createClient) return resolve();
      const el = document.createElement('script');
      el.src = SDK; el.onload = resolve; el.onerror = () => reject(new Error('Failed to fetch'));
      document.head.appendChild(el);
    });
  }
  loadSdk().then(async () => {
    sb = window.supabase.createClient(C.supabaseUrl, C.supabaseAnonKey, { auth: { flowType: 'pkce', detectSessionInUrl: true, persistSession: true } });
    sb.auth.onAuthStateChange(evt => { if (evt === 'PASSWORD_RECOVERY') setMode('reset'); });
    const { data } = await sb.auth.getSession();
    if (data.session && mode !== 'reset') go();
  }).catch(err => msg(friendly(err), 'err'));
})();
