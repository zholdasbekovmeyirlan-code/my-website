/* Edgebook — i18n (Қазақша / English) */
(function () {
  'use strict';

  const kk = {
    brand_sub: 'Trading Journal',
    nav_dashboard: 'Шолу', nav_trades: 'Мәмілелер', nav_calendar: 'Күнтізбе', nav_analytics: 'Аналитика', nav_journal: 'Күнделік', nav_settings: 'Баптаулар',
    title_dashboard: 'Шолу', sub_dashboard: 'Сауда нәтижелеріңіз бір көзқараста',
    title_trades: 'Мәмілелер', sub_trades: 'Барлық позициялар, сүзгі және іздеу',
    title_calendar: 'Күнтізбе', sub_calendar: 'Күндік P&L жылу картасы',
    title_analytics: 'Аналитика', sub_analytics: 'Өз edge-іңізді табыңыз',
    title_journal: 'Күнделік', sub_journal: 'Жоспар, талдау және сабақтар',
    title_settings: 'Баптаулар', sub_settings: 'Профиль, шот және деректер',

    greet_morning: 'Қайырлы таң', greet_day: 'Қайырлы күн', greet_evening: 'Қайырлы кеш', greet_night: 'Қайырлы түн',
    new_trade: 'Жаңа мәміле', log_trade: 'Мәмілені жазу', edit_trade: 'Өңдеу', add_trade: 'Қосу', add: 'Қосу',
    range_all: 'Барлығы', theme: 'Тақырып', shortcuts: 'Пернелер',
    demo_banner: 'Бұл — демо деректер. Өз мәмілелеріңізді жазу үшін оларды тазалаңыз.', demo_clear: 'Демоны тазалау',
    clear_demo_text: 'Барлық демо мәмілелер мен күнделік жазбалары өшіріледі. Баптаулар сақталады.',

    equity: 'Капитал', start: 'Бастапқы', current: 'қазір',
    net_pnl: 'Таза P&L', of_account: 'шоттан', fees: 'Комиссия',
    win_rate: 'Ұтыс үлесі', profit_factor: 'Profit factor', pf_sub: 'Жалпы пайда / жалпы шығын',
    pf_help: 'Барлық пайдалы мәмілелер сомасын барлық шығынды мәмілелер сомасына бөлу. 1.0-ден жоғары — пайдалы жүйе, 1.5+ — күшті.',
    expectancy: 'Күтілетін нәтиже', per_trade: 'Бір мәміледен орташа', total_r: 'Жиынтық R', r_help: 'R — бастапқы тәуекелге шаққандағы нәтиже. +2R = тәуекел етілген соманың екі еселенген пайдасы.', exp_help: 'Бір мәміледен орташа таза нәтиже. Оң болса — жүйеңізде edge бар.',
    avg_r: 'Орт. R', avg_win_loss: 'Орт. ұтыс / шығын', ratio: 'Арақатынас',
    max_dd: 'Макс. құлдырау', dd_help: 'Капиталдың ең жоғары нүктесінен ең төменгі нүктесіне дейінгі ең үлкен құлдырау.',
    streak: 'Серия', trades_n: '{n} мәміле', open_n: '{n} ашық', times_n: '{n} рет',
    equity_curve: 'Капитал қисығы', performance: 'Нәтижелер', perf_sub: 'Негізгі көрсеткіштер',
    best_trade: 'Ең жақсы мәміле', worst_trade: 'Ең нашар мәміле', best_day: 'Ең жақсы күн', worst_day: 'Ең нашар күн',
    green_days: 'Жасыл күндер', max_streaks: 'Макс. серия', avg_hold: 'Орт. ұстау уақыты',
    daily_pnl: 'Күндік P&L', daily_sub: 'Соңғы сауда күндері',
    by_setup: 'Сетап бойынша', by_setup_sub: 'Таза P&L · мәміле · ұтыс үлесі',
    recent_trades: 'Соңғы мәмілелер', view_all: 'Барлығы',
    col_symbol: 'Актив', col_side: 'Бағыт', col_setup: 'Сетап', col_entry: 'Кіру', col_exit: 'Шығу', col_qty: 'Көлем', col_pnl: 'P&L',
    st_win: 'Ұтыс', st_loss: 'Шығын', st_be: 'Нөл', st_open: 'Ашық',
    trades: 'Мәмілелер',

    empty_title: 'Журналыңыз бос', empty_text: 'Бірінші мәмілеңізді жазыңыз немесе мүмкіндіктерді көру үшін демо деректерді жүктеңіз.',
    load_demo: 'Демо деректер', load_demo_sub: '~250 шынайы мәміле және күнделік жазбалары',
    no_data: 'Деректер жоқ', no_trades_found: 'Мәміле табылмады', no_trades_hint: 'Сүзгілерді өзгертіп көріңіз немесе жаңа мәміле қосыңыз.',
    search_ph: 'Актив, сетап, тег, жазба…', all_sides: 'Барлық бағыт', all_status: 'Барлық нәтиже', all_setups: 'Барлық сетап',

    today: 'Бүгін', week: 'Апта', has_note: 'жазба бар',

    analytics_empty: 'Аналитика үшін кемінде бір жабық мәміле қажет.',
    by_weekday: 'Апта күндері бойынша', by_hour: 'Сағат бойынша', by_hour_sub: 'Кіру уақыты',
    r_dist: 'R таралуы', r_dist_sub: 'R-мультипликатор бойынша мәмілелер саны',
    long_short: 'Long vs Short', long_short_sub: 'Бағыт бойынша салыстыру',
    by_symbol: 'Актив бойынша', top_10: 'Үздік 10',
    mistakes_cost: 'Қателер құны', mistakes_sub: 'Белгіленген қателері бар мәмілелердің P&L', no_mistakes: 'Қателер белгіленбеген',
    by_emotion: 'Эмоция бойынша', by_rating: 'Орындау сапасы', by_rating_sub: 'Бағалау бойынша бір мәміледен орташа P&L', avg_per_trade: 'бір мәміледен орташа',
    ins_best_setup: 'Ең мықты сетапыңыз — <b>{s}</b>: орташа {r}, ұтыс үлесі {w}.',
    ins_worst_setup: '<b>{s}</b> сетапы ақша жоғалтып жатыр (орташа {r}). Оны қысқартуды қарастырыңыз.',
    ins_best_day: 'Ең табысты күніңіз — <b>{d}</b> ({v}).',
    ins_worst_day: '<b>{d}</b> күні нәтиже нашар ({v}). Көлемді азайтыңыз.',
    ins_best_hour: 'Ең жақсы уақыт — <b>{h}</b> ({v}).',
    ins_emotion: '<b>{e}</b> күйінде сауда сізге {v} шығын әкелді.',
    ins_mistakes: 'Қателер сізге жалпы <b>{v}</b> тұрды. Бұл — ең оңай табылатын ақша.',

    premarket_plan: 'Нарық алдындағы жоспар', review: 'Күн талдауы', lessons: 'Сабақтар',
    plan_ph: 'Бағыт, негізгі деңгейлер, жаңалықтар, ережелер…', review_ph: 'Не жақсы болды? Не нашар?', lessons_ph: 'Ертеңге бір сабақ…',
    mood: 'Көңіл-күй', focus: 'Фокус', saved: 'Сақталды', day_trades: 'Осы күнгі мәмілелер', no_trades_day: 'Мәміле жоқ', open_journal: 'Күнделікті ашу',

    profile: 'Профиль және шот', profile_sub: 'Капитал осы баланстан есептеледі',
    your_name: 'Атыңыз', start_balance: 'Бастапқы баланс', currency: 'Валюта', language: 'Тіл',
    setups_list: 'Сетаптар', setups_hint: 'Үтір арқылы. Мәміле формасында ұсыныс ретінде шығады.', save: 'Сақтау',
    data: 'Деректер', data_sub: '{n} мәміле · {kb} KB браузерде сақталған',
    export_json: 'Сақтық көшірме (JSON)', export_json_sub: 'Барлық мәмілелер, күнделік және баптаулар',
    import_json: 'Көшірмені қалпына келтіру', import_json_sub: 'Edgebook JSON файлынан',
    export_csv: 'CSV экспорт', export_csv_sub: 'Excel / Google Sheets үшін',
    clear_all: 'Барлығын өшіру', clear_all_sub: 'Мәмілелер мен күнделік толық өшіріледі', clear_all_text: 'Бұл әрекетті қайтару мүмкін емес. Алдымен сақтық көшірме жасаңыз.',
    seed_confirm: 'Қазіргі деректер демо деректермен ауыстырылады.',
    privacy: 'Барлық деректер тек сіздің браузеріңізде сақталады. Ешқандай сервер, тіркелу немесе бақылау жоқ.',
    import_ok: 'Импортталды: {n} мәміле', import_err: 'Файлды оқу мүмкін болмады', exported: 'Экспортталды', cleared: 'Деректер тазаланды', demo_loaded: 'Демо деректер жүктелді',
    quota: 'Браузер жады толды. Скриншоттарды азайтыңыз немесе экспорт жасаңыз.',

    market: 'Нарық', mkt_crypto: 'Крипто', mkt_forex: 'Форекс', mkt_stocks: 'Акциялар', mkt_futures: 'Фьючерс', mkt_options: 'Опциондар', mkt_other: 'Басқа',
    opened: 'Ашылды', closed: 'Жабылды', stop: 'Стоп-лосс', target: 'Тейк-профит', multiplier: 'Мультипликатор', tags: 'Тегтер',
    open_hint: 'бос = ашық', emotion: 'Эмоция', mistakes: 'Қателер', execution: 'Орындау сапасы', notes: 'Жазбалар',
    notes_ph: 'Неге кірдім? Не байқадым? Қалай басқардым?', screenshot: 'Скриншот', shot_hint: 'Сүйреңіз, қойыңыз (Ctrl+V) немесе таңдаңыз',
    em_calm: 'Сабырлы', em_confident: 'Сенімді', em_fomo: 'FOMO', em_fear: 'Қорқыныш', em_greed: 'Ашкөздік', em_revenge: 'Кек', em_bored: 'Жалығу',
    mk_early_exit: 'Ерте шығу', mk_late_entry: 'Кеш кіру', mk_moved_stop: 'Стопты жылжыту', mk_oversize: 'Үлкен көлем', mk_no_plan: 'Жоспарсыз', mk_chased: 'Бағаны қуу',
    preview: 'Алдын ала есеп', risk: 'Тәуекел', planned_rr: 'Жоспар R:R', gross: 'Жалпы', position: 'Позиция', hold: 'Ұстау',
    risk_warn: 'Тәуекел капиталдың {p} құрайды — ұсынылатын 1–2%-дан жоғары.',
    fill_required: 'Актив, кіру бағасы және көлем міндетті', bad_dates: 'Жабылу уақыты ашылудан ерте болмауы керек',
    trade_added: 'Мәміле қосылды', trade_updated: 'Мәміле жаңартылды', trade_deleted: 'Мәміле өшірілді',
    delete: 'Өшіру', delete_q: 'Мәмілені өшіру керек пе?', delete_text: 'Бұл мәміле журналдан біржола өшіріледі.',
    cancel: 'Бас тарту', edit: 'Өңдеу', duplicate: 'Көшірме',
    sc_nav: 'Бөлімдер арасында ауысу', sc_search: 'Мәмілелерден іздеу', sc_close: 'Терезені жабу', sc_save: 'Мәмілені сақтау',
    u_min: 'м', u_h: 'с', u_d: 'к',
    acc_title: 'Аккаунт және Pro', acc_local: 'Бұлттық синхрондау әлі қосылмаған',
    acc_local_note: 'Pro нұсқасы (аккаунт, бұлттық синхрондау, төлем) сайт иесі js/config.js файлына Supabase кілттерін қосқаннан кейін іске қосылады. Оған дейін бәрі осы браузерде тегін жұмыс істейді.',
    acc_signin_sub: 'Барлық құрылғыда бір журнал болуы үшін кіріңіз немесе тіркеліңіз.', loading: 'Жүктелуде…',
    password: 'Құпиясөз', sign_in: 'Кіру', sign_up: 'Тіркелу', sign_out: 'Шығу',
    auth_invalid: 'Дұрыс email және кемінде 6 таңбалы құпиясөз енгізіңіз.', auth_err: 'Қате: {m}',
    check_email: 'Растау хаты жіберілді. Поштаңыздағы сілтемені басыңыз.', signed_in: 'Кірдіңіз', signed_out: 'Шықтыңыз',
    upgrade_title: 'Pro-ға өтіңіз', monthly: 'Айлық', yearly: 'Жылдық', per_month: '/ ай', per_year: '/ жыл',
    pro_f1: 'Барлық құрылғыда бұлттық синхрондау', pro_f2: 'Бұлтта автоматты сақтық көшірме', pro_f3: 'Брокерден импорт (Binance, Bybit, MT5)',
    pro_f4: 'AI коуч — журналыңызды талдайды', pro_f5: 'PDF есептер және prop firm трекері', soon: 'жақында',
    checkout_missing: 'Төлем сілтемесі әлі бапталмаған (js/config.js).', paid_check: 'Төледім — тексеру',
    plan_active: 'Pro белсенді! Синхрондау басталды.', still_free: 'Төлем әлі тіркелмеді. Бір минуттан кейін қайта тексеріңіз.',
    pro_until: '{d} дейін белсенді', last_sync: 'Соңғы: {t}', sync_now: 'Қазір синхрондау', manage_sub: 'Жазылымды басқару',
    sync_idle: 'Күтуде', sync_syncing: 'Синхрондалуда…', sync_synced: 'Синхрондалды', sync_error: 'Синхрондау қатесі', sync_conflict: 'Таңдау күтілуде',
    conflict_title: 'Қай нұсқаны сақтайсыз?', conflict_text: 'Бұлтта да, осы құрылғыда да өзгерістер бар. Біреуін таңдаңыз — екіншісі ауыстырылады.',
    use_cloud: 'Бұлттағы ({n} мәміле)', use_local: 'Осы құрылғы ({n} мәміле)',
    home: 'Басты бет', search_short: 'Іздеу', search_btn: 'Іздеу және командалар', cmd_title: 'Командалар палитрасы', cmd_ph: 'Бөлім, әрекет немесе актив іздеу…',
    cmd_g_nav: 'Бөлімдер', cmd_g_act: 'Әрекеттер', cmd_g_trades: 'Мәмілелер', cmd_theme: 'Тақырыпты ауыстыру', cmd_lang: 'Тілді ауыстыру (KK / EN)',
    cmd_empty: 'Ештеңе табылмады', cmd_move: 'таңдау', cmd_run: 'орындау'
  };

  const en = {
    brand_sub: 'Trading Journal',
    nav_dashboard: 'Overview', nav_trades: 'Trades', nav_calendar: 'Calendar', nav_analytics: 'Analytics', nav_journal: 'Journal', nav_settings: 'Settings',
    title_dashboard: 'Overview', sub_dashboard: 'Your trading performance at a glance',
    title_trades: 'Trades', sub_trades: 'Every position, filterable and searchable',
    title_calendar: 'Calendar', sub_calendar: 'Daily P&L heatmap',
    title_analytics: 'Analytics', sub_analytics: 'Find your edge',
    title_journal: 'Journal', sub_journal: 'Plan, review and lessons',
    title_settings: 'Settings', sub_settings: 'Profile, account and data',

    greet_morning: 'Good morning', greet_day: 'Good afternoon', greet_evening: 'Good evening', greet_night: 'Good night',
    new_trade: 'New trade', log_trade: 'Log a trade', edit_trade: 'Edit', add_trade: 'Add trade', add: 'Add',
    range_all: 'All', theme: 'Theme', shortcuts: 'Shortcuts',
    demo_banner: 'You are viewing demo data. Clear it to start logging your own trades.', demo_clear: 'Clear demo',
    clear_demo_text: 'All demo trades and journal entries will be removed. Your settings are kept.',

    equity: 'Equity', start: 'Start', current: 'now',
    net_pnl: 'Net P&L', of_account: 'of account', fees: 'Fees',
    win_rate: 'Win rate', profit_factor: 'Profit factor', pf_sub: 'Gross profit / gross loss',
    pf_help: 'Sum of all winning trades divided by sum of all losing trades. Above 1.0 is profitable, 1.5+ is strong.',
    expectancy: 'Expectancy', per_trade: 'Average per trade', total_r: 'Total R', r_help: 'R is the result measured in units of initial risk. +2R means you made twice what you risked.', exp_help: 'Average net result per trade. Positive means your system has an edge.',
    avg_r: 'Avg R', avg_win_loss: 'Avg win / loss', ratio: 'Ratio',
    max_dd: 'Max drawdown', dd_help: 'Largest peak-to-trough decline of your equity curve.',
    streak: 'Streak', trades_n: '{n} trades', trades_n_one: '{n} trade', open_n: '{n} open', times_n: '{n}×',
    equity_curve: 'Equity curve', performance: 'Performance', perf_sub: 'Key numbers',
    best_trade: 'Best trade', worst_trade: 'Worst trade', best_day: 'Best day', worst_day: 'Worst day',
    green_days: 'Green days', max_streaks: 'Max streaks', avg_hold: 'Avg hold time',
    daily_pnl: 'Daily P&L', daily_sub: 'Recent trading days',
    by_setup: 'By setup', by_setup_sub: 'Net P&L · trades · win rate',
    recent_trades: 'Recent trades', view_all: 'View all',
    col_symbol: 'Symbol', col_side: 'Side', col_setup: 'Setup', col_entry: 'Entry', col_exit: 'Exit', col_qty: 'Size', col_pnl: 'P&L',
    st_win: 'Win', st_loss: 'Loss', st_be: 'Breakeven', st_open: 'Open',
    trades: 'Trades',

    empty_title: 'Your journal is empty', empty_text: 'Log your first trade, or load demo data to explore every feature.',
    load_demo: 'Demo data', load_demo_sub: '~250 realistic trades and journal entries',
    no_data: 'No data yet', no_trades_found: 'No trades found', no_trades_hint: 'Try adjusting filters or add a new trade.',
    search_ph: 'Symbol, setup, tag, note…', all_sides: 'All sides', all_status: 'All results', all_setups: 'All setups',

    today: 'Today', week: 'Week', has_note: 'note',

    analytics_empty: 'Analytics need at least one closed trade.',
    by_weekday: 'By weekday', by_hour: 'By hour', by_hour_sub: 'Entry time',
    r_dist: 'R distribution', r_dist_sub: 'Trade count by R-multiple',
    long_short: 'Long vs Short', long_short_sub: 'Side comparison',
    by_symbol: 'By symbol', top_10: 'Top 10',
    mistakes_cost: 'Cost of mistakes', mistakes_sub: 'P&L of trades tagged with mistakes', no_mistakes: 'No mistakes tagged',
    by_emotion: 'By emotion', by_rating: 'Execution quality', by_rating_sub: 'Average P&L per trade by self-rating', avg_per_trade: 'avg per trade',
    ins_best_setup: 'Your strongest setup is <b>{s}</b>: avg {r}, {w} win rate.',
    ins_worst_setup: '<b>{s}</b> is losing money (avg {r}). Consider cutting it.',
    ins_best_day: 'Your most profitable day is <b>{d}</b> ({v}).',
    ins_worst_day: '<b>{d}</b> is your weakest day ({v}). Size down.',
    ins_best_hour: 'Your best hour is <b>{h}</b> ({v}).',
    ins_emotion: 'Trading while <b>{e}</b> cost you {v}.',
    ins_mistakes: 'Mistakes cost you <b>{v}</b> in total. That is the easiest money to win back.',

    premarket_plan: 'Pre-market plan', review: 'Daily review', lessons: 'Lessons',
    plan_ph: 'Bias, key levels, news, rules…', review_ph: 'What went well? What didn\'t?', lessons_ph: 'One lesson for tomorrow…',
    mood: 'Mood', focus: 'Focus', saved: 'Saved', day_trades: 'Trades this day', no_trades_day: 'No trades', open_journal: 'Open journal',

    profile: 'Profile & account', profile_sub: 'Equity is calculated from this balance',
    your_name: 'Your name', start_balance: 'Starting balance', currency: 'Currency', language: 'Language',
    setups_list: 'Setups', setups_hint: 'Comma separated. Suggested in the trade form.', save: 'Save',
    data: 'Data', data_sub: '{n} trades · {kb} KB stored in your browser',
    export_json: 'Backup (JSON)', export_json_sub: 'All trades, journal and settings',
    import_json: 'Restore backup', import_json_sub: 'From an Edgebook JSON file',
    export_csv: 'Export CSV', export_csv_sub: 'For Excel / Google Sheets',
    clear_all: 'Delete everything', clear_all_sub: 'Trades and journal are erased', clear_all_text: 'This cannot be undone. Make a backup first.',
    seed_confirm: 'Your current data will be replaced with demo data.',
    privacy: 'All data stays in your browser. No server, no sign-up, no tracking.',
    import_ok: 'Imported {n} trades', import_err: 'Could not read that file', exported: 'Exported', cleared: 'Data cleared', demo_loaded: 'Demo data loaded',
    quota: 'Browser storage is full. Remove screenshots or export your data.',

    market: 'Market', mkt_crypto: 'Crypto', mkt_forex: 'Forex', mkt_stocks: 'Stocks', mkt_futures: 'Futures', mkt_options: 'Options', mkt_other: 'Other',
    opened: 'Opened', closed: 'Closed', stop: 'Stop loss', target: 'Take profit', multiplier: 'Multiplier', tags: 'Tags',
    open_hint: 'empty = open', emotion: 'Emotion', mistakes: 'Mistakes', execution: 'Execution', notes: 'Notes',
    notes_ph: 'Why did I enter? What did I notice? How did I manage it?', screenshot: 'Screenshot', shot_hint: 'Drop, paste (Ctrl+V) or browse',
    em_calm: 'Calm', em_confident: 'Confident', em_fomo: 'FOMO', em_fear: 'Fear', em_greed: 'Greed', em_revenge: 'Revenge', em_bored: 'Bored',
    mk_early_exit: 'Early exit', mk_late_entry: 'Late entry', mk_moved_stop: 'Moved stop', mk_oversize: 'Oversized', mk_no_plan: 'No plan', mk_chased: 'Chased price',
    preview: 'Live preview', risk: 'Risk', planned_rr: 'Planned R:R', gross: 'Gross', position: 'Position', hold: 'Hold',
    risk_warn: 'Risk is {p} of equity — above the recommended 1–2%.',
    fill_required: 'Symbol, entry and size are required', bad_dates: 'Close time cannot be before open time',
    trade_added: 'Trade added', trade_updated: 'Trade updated', trade_deleted: 'Trade deleted',
    delete: 'Delete', delete_q: 'Delete this trade?', delete_text: 'This trade will be permanently removed from your journal.',
    cancel: 'Cancel', edit: 'Edit', duplicate: 'Duplicate',
    sc_nav: 'Switch sections', sc_search: 'Search trades', sc_close: 'Close dialog', sc_save: 'Save trade',
    u_min: 'm', u_h: 'h', u_d: 'd',
    acc_title: 'Account & Pro', acc_local: 'Cloud sync is not connected yet',
    acc_local_note: 'Pro (accounts, cloud sync, payments) turns on once the site owner adds Supabase keys to js/config.js. Until then everything works for free in this browser.',
    acc_signin_sub: 'Sign in or create an account to keep one journal across all your devices.', loading: 'Loading…',
    password: 'Password', sign_in: 'Sign in', sign_up: 'Create account', sign_out: 'Sign out',
    auth_invalid: 'Enter a valid email and a password of at least 6 characters.', auth_err: 'Error: {m}',
    check_email: 'Confirmation email sent. Click the link in your inbox.', signed_in: 'Signed in', signed_out: 'Signed out',
    upgrade_title: 'Upgrade to Pro', monthly: 'Monthly', yearly: 'Yearly', per_month: '/ month', per_year: '/ year',
    pro_f1: 'Cloud sync across all devices', pro_f2: 'Automatic cloud backups', pro_f3: 'Broker import (Binance, Bybit, MT5)',
    pro_f4: 'AI coach that reviews your journal', pro_f5: 'PDF reports & prop firm tracker', soon: 'soon',
    checkout_missing: 'Checkout link is not configured yet (js/config.js).', paid_check: 'I paid — check',
    plan_active: 'Pro is active! Syncing now.', still_free: 'Payment not registered yet. Check again in a minute.',
    pro_until: 'active until {d}', last_sync: 'Last: {t}', sync_now: 'Sync now', manage_sub: 'Manage subscription',
    sync_idle: 'Idle', sync_syncing: 'Syncing…', sync_synced: 'Synced', sync_error: 'Sync error', sync_conflict: 'Waiting for your choice',
    conflict_title: 'Which version should we keep?', conflict_text: 'Both the cloud and this device have changes. Pick one — the other will be replaced.',
    use_cloud: 'Cloud ({n} trades)', use_local: 'This device ({n} trades)',
    home: 'Home', search_short: 'Search', search_btn: 'Search & commands', cmd_title: 'Command palette', cmd_ph: 'Search sections, actions or symbols…',
    cmd_g_nav: 'Navigate', cmd_g_act: 'Actions', cmd_g_trades: 'Trades', cmd_theme: 'Toggle theme', cmd_lang: 'Switch language (KK / EN)',
    cmd_empty: 'Nothing found', cmd_move: 'navigate', cmd_run: 'run'
  };

  const months = {
    kk: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  const wdMon = { kk: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'], en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] };
  const wdLong = {
    kk: ['Жексенбі', 'Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };

  const dict = { kk, en };
  let getLang = () => 'kk';
  const lang = () => (dict[getLang()] ? getLang() : 'kk');

  window.I18N = {
    use(fn) { getLang = fn; },
    t(key, vars) {
      const d = dict[lang()];
      let s = vars && vars.n === 1 && d[key + '_one'] != null ? d[key + '_one'] : d[key];
      if (s == null) s = en[key] != null ? en[key] : key;
      if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
      return s;
    },
    months: () => months[lang()],
    weekdaysMon: () => wdMon[lang()],
    weekdaysLong: () => wdLong[lang()],
    dict
  };
})();
