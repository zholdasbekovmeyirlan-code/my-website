/* EntryX — landing page */
(function () {
  'use strict';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const L = {
    kk: {
      nav_features: 'Мүмкіндіктер', nav_analytics: 'Аналитика', nav_how: 'Қалай жұмыс істейді', nav_faq: 'Сұрақтар', nav_open: 'Тегін бастау', nav_login: 'Кіру',
      hero_badge: 'Тегін бастау · Карта қажет емес · 30 секундта тіркелу',
      hero_tag: 'Кәсіби трейдерлердің <em>журналы.</em>',
      hero_sub: 'EntryX әр мәмілені, эмоцияны және қатені нақты сандарға айналдырады. Қай сетап ақша әкелетінін, қай әдет оны ұрлайтынын бір көзқараста көресіз.',
      cta_primary: 'Тегін бастау', cta_secondary: 'Демоны көру',
      hero_note: 'Карта қажет емес &nbsp;·&nbsp; Google арқылы бір басу &nbsp;·&nbsp; Қазақша, Русский, English',
      mock_greet: 'Қайырлы күн', mock_new: '+ Жаңа мәміле', mock_equity: 'Капитал қисығы', mock_calendar: 'Қыркүйек',
      f_trade: 'Мәміле жазылды', f_wr: 'Ұтыс үлесі', f_ins: 'Инсайт', f_ins_text: 'Breakout — ең мықты сетапыңыз',
      marquee: 'Кез келген нарық үшін',
      st1: 'метрика мен көрсеткіш', st2: 'мәміле — тіпті Free нұсқада', st3: 'тіл: қазақша, орысша, ағылшынша', st4: 'жеке, ешқандай бақылау жоқ',
      feat_eyebrow: 'Мүмкіндіктер',
      feat_title: 'Кәсіби трейдерге<br>керектің <em>бәрі</em>.',
      feat_sub: 'Excel кестелері мен дәптерлерді ұмытыңыз. Бүкіл сауда тарихыңыз — бір әдемі жерде.',
      t1_title: 'Капитал қисығы және 30+ метрика', t1_text: 'Profit factor, expectancy, R, drawdown, серия — бәрі нақты уақытта есептеледі.',
      t2_title: 'P&L күнтізбесі', t2_text: 'Табысты және шығынды күндер — бір көзқараста.',
      t3_title: 'Автоматты инсайттар', t3_text: 'EntryX деректеріңізді оқып, нені өзгерту керегін айтады.',
      ti_1: '<b>Breakout</b> — орташа +0.89R', ti_2: '<b>Кек</b> күйі: −$186', ti_3: 'Ең жақсы сағат — <b>10:00</b>',
      t4_title: 'Эмоция мен қателер', t4_text: 'FOMO мен кек саудасы сізге қаншаға түсетінін доллармен көріңіз.',
      e_calm: 'Сабырлы', e_revenge: 'Кек', e_greed: 'Ашкөздік',
      t5_title: 'R таралуы', t5_text: 'Тәуекелге шаққандағы нәтижелеріңіздің шынайы пішіні.',
      t6_title: '100% жеке', t6_text: 'Free: деректер тек браузеріңізде. Pro: тек сізге ғана қолжетімді қорғалған бұлт.',
      t7_title: 'Жылдамдық үшін жасалған', t7_text: 'Пернелер мен ⌘K палитрасы — тінтуірсіз жұмыс.',
      t8_title: 'Сауда күнделігі', t8_text: 'Нарық алдындағы жоспар, күн талдауы, сабақтар — жазған сәтте сақталады.',
      tj_plan: 'Жоспар', tj_plan_text: 'Тек HTF деңгейлердегі A+ сетаптар. Макс 3 мәміле. 2 шығыннан кейін тоқтау.',
      tj_lesson: 'Сабақ', tj_lesson_text: 'Ең жақсы мәмілелер жалықтырады.',
      an_eyebrow: 'Аналитика',
      an_title: 'Деректер<br><em>шындықты</em> айтады.',
      an_sub: 'Көп трейдер неге шығынға батып жатқанын ешқашан білмейді. EntryX әр мәмілені апта күні, сағат, сетап, эмоция және қате бойынша бөліп, нақты себебін көрсетеді.',
      an_li1: 'Апта күні мен сағат бойынша P&L', an_li2: 'Long vs Short салыстыру', an_li3: 'Сетап және эмоция кестелері', an_li4: 'Орындау сапасы мен нәтиже байланысы',
      an_cta: 'Аналитиканы ашу', an_weekday: 'Апта күндері бойынша P&L', example: 'Мысал',
      ins_a: 'Ең табысты күніңіз — <b>Дүйсенбі</b> (+$2,456).', ins_b: '<b>Кек</b> күйінде сауда сізге −$186 шығын әкелді.',
      how_eyebrow: 'Қалай жұмыс істейді', how_title: 'Үш қадам.<br><em>Күн сайын.</em>',
      s1_t: 'Жазыңыз', s1_x: 'Кіру, шығу, стоп — 30 секундта. P&L мен R автоматты есептеледі.',
      s2_t: 'Талдаңыз', s2_x: 'Күнді күнделікте жабыңыз, күнтізбе мен графиктерді қараңыз.',
      s3_t: 'Жетілдіріңіз', s3_x: 'Инсайттар көрсеткен әлсіз сетаптарды қысқартып, күштілерін көбейтіңіз.',
      quote: 'Нарық сізге ештеңе қарыз емес.<br>Бірақ <em>деректеріңіз</em> бәрін айтып береді.',
      pr_eyebrow: 'Баға', pr_title: 'Тегін бастаңыз.<br><em>Pro-мен өсіңіз.</em>',
      pr_monthly: 'Айлық', pr_yearly: 'Жылдық', pr_per_free: 'мәңгі', pr_per_month: '/ ай', pr_per_year: '/ жыл', pr_save: 'Жылдық төлемде {p}% үнемдейсіз',
      pr_free_desc: 'Жеке трейдерге қажеттің бәрі. Деректер тек сіздің браузеріңізде.', pr_free_cta: 'Тегін бастау', pr_popular: 'Ең танымал',
      pf_1: 'Шексіз мәмілелер', pf_2: 'Толық аналитика және инсайттар', pf_3: 'P&L күнтізбесі және күнделік', pf_4: 'Скриншоттар, тегтер, эмоциялар', pf_5: 'JSON / CSV экспорт',
      pr_pro_desc: 'Кәсіби трейдерге арналған. Тіркелгенде 7 күн тегін — ұнаса ғана жалғастырасыз.', pr_pro_cta: '7 күн тегін сынау',
      pp_0: 'Free-дегі барлық мүмкіндік', pp_1: '🛡 Тәуекел қорғаушысы — кек саудасын тоқтатады', pp_2: '🏆 Prop firm трекері (FTMO т.б.)',
      pp_6: '📲 Telegram бот — күндік есеп, тәуекел ескертуі, AI коуч', pp_3: '📸 P&L карточкасы — Instagram, Telegram үшін', pp_4: 'Брокерден импорт және барлық құрылғыда синхрондау', pp_5: '✨ AI коуч — журналыңызды оқып, нақты кеңес береді',
      ai_eyebrow: 'AI коуч · Pro', ai_title: 'Журналыңызды<br><em>оқитын</em> коуч.',
      ai_sub: 'Кез келген сұрақ қойыңыз. AI мәмілелеріңізді, эмоцияларыңызды және қателеріңізді талдап, нақты сандармен жауап береді. Сигнал бермейді, сауда процесіңізді жақсартады.',
      ai_li1: 'Неге шығынға кеткеніңізді бірнеше секундта түсіндіреді', ai_li2: 'Ең жақсы және ең нашар сетаптарыңызды табады', ai_li3: 'Апталық шолу және нақты 3 кеңес',
      ai_cta: 'Коучты сынап көру', ai_online: 'журналыңызды оқыды', ai_ph: 'Сұрағыңызды жазыңыз…',
      ai_q: 'Неге осы айда шығынға кеттім?',
      ai_a: 'Негізгі себеп: <b>жұма күнгі сауда</b>. 9 мәміле, <b class="neg">−$642</b>. Оның 6-уы <b>кек</b> күйінде, 2 шығыннан кейін ашылған.<br><br><b>Кеңес:</b> жұмада 2 мәміледен кейін тоқтаңыз. Бұл айдың нәтижесін <b class="pos">+$410</b>-ға өзгертер еді.',
      q6: 'Pro-ны қалай төлеймін?', a6: 'Криптовалютамен (USDT, BTC, ETH т.б.) NOWPayments арқылы. Төлем расталғанда Pro өзі қосылады, ешқандай кілт енгізудің қажеті жоқ. Алдымен 7 күн тегін сынап көресіз.',
      q7: 'AI коуч не істейді?', a7: 'Pro-да AI коуч журналыңыздың статистикасын оқып, сұрақтарыңызға нақты сандармен жауап береді: неге шығынға кеттіңіз, қай сетап жұмыс істейді, қай сағатта сауда жасамау керек. Сауда сигналын немесе баға болжамын бермейді.',
      faq_title: 'Жиі қойылатын<br><em>сұрақтар</em>',
      q1: 'Деректерім қайда сақталады?', a1: 'Free нұсқада — тек сіздің браузеріңізде. Pro нұсқада — қосымша қорғалған бұлтта, оны тек сіз ғана оқи аласыз.',
      q2: 'Тіркелу керек пе?', a2: 'Иә, бірақ 30 секунд қана: Google немесе GitHub арқылы бір басумен. Free нұсқада мәмілелеріңіз осы құрылғыда сақталады, ал Pro оларды барлық құрылғыға синхрондайды.',
      q3: 'Қандай нарықтарды қолдайды?', a3: 'Крипто, форекс, акциялар, фьючерс, опциондар — кез келген актив. Фьючерс үшін мультипликатор бар.',
      q4: 'Басқа құрылғыға қалай көшіремін?', a4: 'Pro-да бәрі автоматты синхрондалады. Free-де: Баптаулар → Сақтық көшірме (JSON), содан кейін жаңа құрылғыда «Көшірмені қалпына келтіру».',
      q5: 'Телефонда жұмыс істей ме?', a5: 'Иә. Интерфейс телефонға толық бейімделген: төменгі навигация және ыңғайлы формалар.',
      fc_title: 'Келесі мәмілеңізді<br><em>жазыңыз</em>.', fc_sub: 'Бір айдан кейін өз саудаңызды мүлде басқаша көресіз.',
      foot: 'Трейдерлер үшін жасалған.', foot_disc: 'Қаржылық кеңес емес.', l_terms: 'Шарттар', l_privacy: 'Құпиялылық', l_refund: 'Төлем шарттары'
    },
    ru: {
      nav_features: 'Возможности', nav_analytics: 'Аналитика', nav_how: 'Как это работает', nav_faq: 'Вопросы', nav_open: 'Начать', nav_login: 'Войти',
      hero_badge: 'Бесплатный старт · Карта не нужна · Регистрация за 30 секунд',
      hero_tag: 'Дневник <em>профессиональных</em> трейдеров.',
      hero_sub: 'EntryX превращает каждую сделку, эмоцию и ошибку в точные цифры. Видно, какие сетапы приносят деньги, а какие привычки их незаметно забирают.',
      cta_primary: 'Начать бесплатно', cta_secondary: 'Смотреть демо',
      hero_note: 'Карта не нужна &nbsp;·&nbsp; Вход через Google в один клик &nbsp;·&nbsp; Қазақша, Русский, English',
      mock_greet: 'Добрый день', mock_new: '+ Новая сделка', mock_equity: 'Кривая капитала', mock_calendar: 'Сентябрь',
      f_trade: 'Сделка записана', f_wr: 'Винрейт', f_ins: 'Инсайт', f_ins_text: 'Breakout — ваш сильнейший сетап',
      marquee: 'Для любого рынка',
      st1: 'метрик и разрезов', st2: 'сделок — даже на Free', st3: 'языка: казахский, русский, английский', st4: 'приватно, без слежки',
      feat_eyebrow: 'Возможности',
      feat_title: 'Всё, что <em>нужно</em><br>серьёзному трейдеру.',
      feat_sub: 'Забудьте о таблицах и тетрадях. Вся история торговли — в одном красивом месте.',
      t1_title: 'Кривая капитала и 30+ метрик', t1_text: 'Профит-фактор, матожидание, R, просадка, серии — считаются в реальном времени.',
      t2_title: 'Календарь P&L', t2_text: 'Зелёные и красные дни — весь месяц одним взглядом.',
      t3_title: 'Автоматические инсайты', t3_text: 'EntryX читает ваши данные и подсказывает, что изменить.',
      ti_1: '<b>Breakout</b> — в среднем +0.89R', ti_2: 'Торговля на <b>мести</b>: −$186', ti_3: 'Лучший час — <b>10:00</b>',
      t4_title: 'Эмоции и ошибки', t4_text: 'Узнайте, сколько в долларах стоили вам FOMO и торговля на мести.',
      e_calm: 'Спокойствие', e_revenge: 'Месть', e_greed: 'Жадность',
      t5_title: 'Распределение R', t5_text: 'Истинная форма ваших результатов с учётом риска.',
      t6_title: '100% приватно', t6_text: 'Free: данные только в вашем браузере. Pro: защищённое облако, доступное только вам.',
      t7_title: 'Создан для скорости', t7_text: 'Горячие клавиши и палитра ⌘K — без мыши.',
      t8_title: 'Торговый дневник', t8_text: 'План до открытия, разбор дня и уроки — сохраняются по мере ввода.',
      tj_plan: 'План', tj_plan_text: 'Только A+ сетапы на уровнях старшего ТФ. Макс 3 сделки. Стоп после 2 убытков.',
      tj_lesson: 'Урок', tj_lesson_text: 'Лучшие сделки скучные.',
      an_eyebrow: 'Аналитика',
      an_title: 'Данные говорят<br><em>правду</em>.',
      an_sub: 'Большинство трейдеров так и не узнают, почему теряют. EntryX разбирает каждую сделку по дням, часам, сетапам, эмоциям и ошибкам — и показывает настоящую причину.',
      an_li1: 'P&L по дням недели и часам', an_li2: 'Сравнение Long и Short', an_li3: 'Разрезы по сетапам и эмоциям', an_li4: 'Качество исполнения и результат',
      an_cta: 'Открыть аналитику', an_weekday: 'P&L по дням недели', example: 'Пример',
      ins_a: 'Ваш самый прибыльный день — <b>понедельник</b> (+$2,456).', ins_b: 'Торговля на <b>мести</b> стоила вам −$186.',
      how_eyebrow: 'Как это работает', how_title: 'Три шага.<br><em>Каждый день.</em>',
      s1_t: 'Записывайте', s1_x: 'Вход, выход, стоп — за 30 секунд. P&L и R считаются автоматически.',
      s2_t: 'Разбирайте', s2_x: 'Закройте день в дневнике, посмотрите календарь и графики.',
      s3_t: 'Улучшайте', s3_x: 'Убирайте слабые сетапы, которые отмечают инсайты, и усиливайте то, что работает.',
      quote: 'Рынок вам ничего не должен.<br>Но <em>ваши данные</em> расскажут всё.',
      pr_eyebrow: 'Цены', pr_title: 'Начните бесплатно.<br><em>Растите с Pro.</em>',
      pr_monthly: 'Месяц', pr_yearly: 'Год', pr_per_free: 'навсегда', pr_per_month: '/ мес', pr_per_year: '/ год', pr_save: 'Экономия {p}% при оплате за год',
      pr_free_desc: 'Всё, что нужно частному трейдеру. Данные хранятся в вашем браузере.', pr_free_cta: 'Начать бесплатно', pr_popular: 'Популярный',
      pf_1: 'Безлимит сделок', pf_2: 'Полная аналитика и инсайты', pf_3: 'Календарь P&L и дневник', pf_4: 'Скриншоты, теги, эмоции', pf_5: 'Экспорт JSON / CSV',
      pr_pro_desc: 'Для серьёзных трейдеров. 7 дней бесплатно после регистрации — оставайтесь, только если понравится.', pr_pro_cta: '7 дней бесплатно',
      pp_0: 'Всё из Free', pp_1: '🛡 Риск-менеджер — останавливает торговлю на мести', pp_2: '🏆 Трекер проп-челленджа (FTMO и др.)',
      pp_6: '📲 Telegram-бот — дневной отчёт, предупреждения о риске, AI-коуч', pp_3: '📸 Карточки P&L для Instagram и Telegram', pp_4: 'Импорт от брокера и синхронизация на всех устройствах', pp_5: '✨ AI-коуч, который читает ваш дневник и даёт реальные советы',
      ai_eyebrow: 'AI-коуч · Pro', ai_title: 'Коуч, который<br><em>читает</em> ваш дневник.',
      ai_sub: 'Спрашивайте что угодно. AI анализирует ваши сделки, эмоции и ошибки и отвечает реальными цифрами. Без сигналов — он улучшает ваш процесс.',
      ai_li1: 'За секунды объясняет, почему вы потеряли', ai_li2: 'Находит лучшие и худшие сетапы', ai_li3: 'Разбор недели и 3 конкретных совета',
      ai_cta: 'Попробовать коуча', ai_online: 'прочитал ваш дневник', ai_ph: 'Спросите что угодно…',
      ai_q: 'Почему я ушёл в минус в этом месяце?',
      ai_a: 'Главная причина — <b>торговля по пятницам</b>: 9 сделок, <b class="neg">−$642</b>. Шесть из них открыты в состоянии <b>мести</b>, после двух убытков.<br><br><b>Совет:</b> останавливайтесь после 2 сделок по пятницам. Одно это изменило бы месяц на <b class="pos">+$410</b>.',
      q6: 'Как оплатить Pro?', a6: 'Криптовалютой (USDT, BTC, ETH и др.) через NOWPayments. Pro включится автоматически после подтверждения — никаких ключей вводить не нужно. Сначала 7 дней бесплатно.',
      q7: 'Что делает AI-коуч?', a7: 'В Pro AI-коуч читает статистику вашего дневника и отвечает реальными цифрами: почему вы потеряли, какие сетапы работают, в какие часы лучше не торговать. Он никогда не даёт торговых сигналов и прогнозов цены.',
      faq_title: 'Частые<br><em>вопросы</em>',
      q1: 'Где хранятся мои данные?', a1: 'На Free — только в вашем браузере. На Pro — ещё и в защищённом облаке, доступном только вам.',
      q2: 'Нужна ли регистрация?', a2: 'Да, но это 30 секунд — один клик через Google или GitHub. На Free сделки хранятся на этом устройстве; Pro синхронизирует их на всех устройствах.',
      q3: 'Какие рынки поддерживаются?', a3: 'Крипто, форекс, акции, фьючерсы, опционы — любой инструмент. Множители фьючерсов поддерживаются.',
      q4: 'Как перенести данные на другое устройство?', a4: 'В Pro всё синхронизируется автоматически. На Free: Настройки → Резервная копия (JSON), затем «Восстановить копию» на новом устройстве.',
      q5: 'Работает ли на телефоне?', a5: 'Да. Интерфейс полностью адаптирован для телефона: нижняя навигация и удобные формы.',
      fc_title: 'Запишите<br><em>следующую сделку</em>.', fc_sub: 'Через месяц вы увидите свою торговлю совсем иначе.',
      foot: 'Создано для трейдеров.', foot_disc: 'Не является финансовым советом.', l_terms: 'Условия', l_privacy: 'Конфиденциальность', l_refund: 'Условия оплаты'
    },
    en: {
      nav_features: 'Features', nav_analytics: 'Analytics', nav_how: 'How it works', nav_faq: 'FAQ', nav_open: 'Get started', nav_login: 'Sign in',
      hero_badge: 'Free to start · No card required · Sign up in 30 seconds',
      hero_tag: 'The journal <em>serious traders</em> keep.',
      hero_sub: 'EntryX turns every trade, emotion and mistake into hard numbers. See which setups make you money — and which habits quietly take it back.',
      cta_primary: 'Start for free', cta_secondary: 'Explore the demo',
      hero_note: 'No card required &nbsp;·&nbsp; One click with Google &nbsp;·&nbsp; Kazakh, Russian & English',
      mock_greet: 'Good afternoon', mock_new: '+ New trade', mock_equity: 'Equity curve', mock_calendar: 'September',
      f_trade: 'Trade logged', f_wr: 'Win rate', f_ins: 'Insight', f_ins_text: 'Breakout is your strongest setup',
      marquee: 'Built for every market',
      st1: 'metrics & breakdowns', st2: 'trades — even on Free', st3: 'languages: Kazakh, Russian & English', st4: 'private, zero tracking',
      feat_eyebrow: 'Features',
      feat_title: 'Everything a serious<br>trader <em>needs</em>.',
      feat_sub: 'Forget spreadsheets and notebooks. Your entire trading history, in one beautiful place.',
      t1_title: 'Equity curve & 30+ metrics', t1_text: 'Profit factor, expectancy, R-multiples, drawdown, streaks — computed in real time.',
      t2_title: 'P&L calendar', t2_text: 'Green days and red days — the whole month at a glance.',
      t3_title: 'Automatic insights', t3_text: 'EntryX reads your data and tells you what to change.',
      ti_1: '<b>Breakout</b> — avg +0.89R', ti_2: '<b>Revenge</b> trading: −$186', ti_3: 'Best hour — <b>10:00</b>',
      t4_title: 'Emotions & mistakes', t4_text: 'See exactly what FOMO and revenge trading cost you, in dollars.',
      e_calm: 'Calm', e_revenge: 'Revenge', e_greed: 'Greed',
      t5_title: 'R distribution', t5_text: 'The true shape of your risk-adjusted results.',
      t6_title: '100% private', t6_text: 'Free: data stays in your browser. Pro: a protected cloud only you can access.',
      t7_title: 'Built for speed', t7_text: 'Shortcuts and a ⌘K palette — never reach for the mouse.',
      t8_title: 'Trading journal', t8_text: 'Pre-market plan, daily review and lessons — saved as you type.',
      tj_plan: 'Plan', tj_plan_text: 'Only A+ setups at HTF levels. Max 3 trades. Stop after 2 losses.',
      tj_lesson: 'Lesson', tj_lesson_text: 'The best trades feel boring.',
      an_eyebrow: 'Analytics',
      an_title: 'Your data tells<br><em>the truth</em>.',
      an_sub: 'Most traders never learn why they lose. EntryX slices every trade by weekday, hour, setup, emotion and mistake — and shows you the real reason.',
      an_li1: 'P&L by weekday and hour', an_li2: 'Long vs Short comparison', an_li3: 'Setup and emotion breakdowns', an_li4: 'Execution quality vs. results',
      an_cta: 'Open analytics', an_weekday: 'P&L by weekday', example: 'Example',
      ins_a: 'Your most profitable day is <b>Monday</b> (+$2,456).', ins_b: 'Trading while <b>Revenge</b> cost you −$186.',
      how_eyebrow: 'How it works', how_title: 'Three steps.<br><em>Every day.</em>',
      s1_t: 'Log', s1_x: 'Entry, exit, stop — in 30 seconds. P&L and R are calculated for you.',
      s2_t: 'Review', s2_x: 'Close the day in your journal, then scan the calendar and charts.',
      s3_t: 'Improve', s3_x: 'Cut the weak setups the insights flag, and double down on what works.',
      quote: 'The market owes you nothing.<br>But <em>your data</em> tells you everything.',
      pr_eyebrow: 'Pricing', pr_title: 'Start free.<br><em>Grow with Pro.</em>',
      pr_monthly: 'Monthly', pr_yearly: 'Yearly', pr_per_free: 'forever', pr_per_month: '/ month', pr_per_year: '/ year', pr_save: 'Save {p}% with yearly billing',
      pr_free_desc: 'Everything a solo trader needs. Your data stays in your browser.', pr_free_cta: 'Start for free', pr_popular: 'Most popular',
      pf_1: 'Unlimited trades', pf_2: 'Full analytics & insights', pf_3: 'P&L calendar & journal', pf_4: 'Screenshots, tags, emotions', pf_5: 'JSON / CSV export',
      pr_pro_desc: 'For serious traders. 7 days free when you sign up — keep it only if you love it.', pr_pro_cta: 'Try 7 days free',
      pp_0: 'Everything in Free', pp_1: '🛡 Risk guard — stops revenge trading', pp_2: '🏆 Prop firm tracker (FTMO & more)',
      pp_6: '📲 Telegram bot — daily report, risk alerts, AI coach', pp_3: '📸 P&L share cards for Instagram & Telegram', pp_4: 'Broker import and sync across all devices', pp_5: '✨ AI coach that reads your journal and gives real advice',
      ai_eyebrow: 'AI coach · Pro', ai_title: 'A coach that<br><em>reads</em> your journal.',
      ai_sub: 'Ask anything. The AI analyses your trades, emotions and mistakes and answers with real numbers. No signals — it improves your process.',
      ai_li1: 'Explains why you lost money in seconds', ai_li2: 'Finds your best and worst setups', ai_li3: 'Weekly review with 3 concrete tips',
      ai_cta: 'Try the coach', ai_online: 'read your journal', ai_ph: 'Ask anything…',
      ai_q: 'Why did I lose money this month?',
      ai_a: 'The main reason is <b>Friday trading</b>: 9 trades, <b class="neg">−$642</b>. Six of them were taken in a <b>revenge</b> state, after two losses.<br><br><b>Tip:</b> stop after 2 trades on Fridays. That alone would have moved this month by <b class="pos">+$410</b>.',
      q6: 'How do I pay for Pro?', a6: 'With crypto (USDT, BTC, ETH and more) via NOWPayments. Pro turns on automatically once the payment confirms — no keys to enter. You try it free for 7 days first.',
      q7: 'What does the AI coach do?', a7: 'On Pro, the AI coach reads your journal statistics and answers with real numbers: why you lost, which setups work, which hours to avoid. It never gives trade signals or price predictions.',
      faq_title: 'Frequently asked<br><em>questions</em>',
      q1: 'Where is my data stored?', a1: 'On Free, only in your browser. On Pro, also in a protected cloud that only you can read.',
      q2: 'Do I need an account?', a2: 'Yes, but it takes 30 seconds with one click via Google or GitHub. On Free your trades are stored on this device; Pro syncs them across all your devices.',
      q3: 'Which markets are supported?', a3: 'Crypto, forex, stocks, futures, options — any instrument. Futures multipliers are supported.',
      q4: 'How do I move to another device?', a4: 'On Pro it syncs automatically. On Free: Settings → Backup (JSON), then “Restore backup” on the new device.',
      q5: 'Does it work on mobile?', a5: 'Yes. The interface is fully adapted to phones, with bottom navigation and touch-friendly forms.',
      fc_title: 'Log your<br><em>next trade</em>.', fc_sub: 'A month from now, you will see your trading completely differently.',
      foot: 'Crafted for traders.', foot_disc: 'Not financial advice.', l_terms: 'Terms', l_privacy: 'Privacy', l_refund: 'Payment terms'
    }
  };

  /* ---------- language ---------- */
  Store.load();
  const s = Store.state.settings;
  const nl = (navigator.language || '').toLowerCase();
  let lang = s.langChosen || s.seeded ? s.lang : (nl.startsWith('en') ? 'en' : nl.startsWith('ru') ? 'ru' : 'kk');
  if (!L[lang]) lang = 'kk';
  I18N.use(() => lang);

  let bill = 'monthly';
  function paintPrice() {
    const P = (window.EDGEBOOK_CONFIG || {}).pricing || { currency: '$', monthly: 12, yearly: 99 };
    const pe = $('#proPrice'); if (!pe) return;
    pe.textContent = P.currency + (bill === 'yearly' ? P.yearly : P.monthly);
    $('#proPer').textContent = L[lang][bill === 'yearly' ? 'pr_per_year' : 'pr_per_month'];
    const pct = Math.round((1 - P.yearly / (P.monthly * 12)) * 100);
    $('#proSave').textContent = L[lang].pr_save.replace('{p}', pct);
    $('#proSave').classList.toggle('on', bill === 'yearly');
    $$('[data-bill]').forEach(b => b.classList.toggle('on', b.dataset.bill === bill));
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-bill]');
    if (b) { bill = b.dataset.bill; paintPrice(); }
  });

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-l]').forEach(el => { const v = L[lang][el.dataset.l]; if (v != null) el.innerHTML = v; });
    $$('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    const d = new Date();
    $('#mkDate').textContent = d.getDate() + ' ' + I18N.monthsGen()[d.getMonth()] + ' ' + d.getFullYear();
    drawMock();
    paintPrice();
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-lang]');
    if (!b) return;
    lang = b.dataset.lang;
    s.lang = lang; s.langChosen = true;
    Store.save();
    applyLang();
  });

  /* ---------- deterministic sample data ---------- */
  function rng(seed) { let x = seed; return () => { x = (x * 16807) % 2147483647; return (x - 1) / 2147483646; }; }
  function equity(n, seed, start, edge) {
    const r = rng(seed); let y = start; const pts = [{ y, i: 0 }];
    for (let i = 1; i < n; i++) { y += (r() - (0.5 - edge)) * start * 0.012; pts.push({ y, i }); }
    return pts;
  }
  const money = v => (v < 0 ? '−' : '') + '$' + Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function heat(host, weeks, seed) {
    if (!host) return;
    const r = rng(seed);
    let h = '';
    for (let i = 0; i < weeks * 7; i++) {
      const wd = i % 7;
      const trade = wd < 5 ? r() < 0.8 : r() < 0.15;
      if (!trade) { h += '<i></i>'; continue; }
      const v = r();
      const up = v < 0.64;
      h += '<i class="' + (up ? 'up' : 'down') + '" style="--i:' + (0.25 + r() * 0.75).toFixed(2) + '"></i>';
    }
    host.innerHTML = h;
  }

  function drawMock() {
    const kp = [
      [I18N.t('net_pnl'), '+$6,987.88', 'pos'],
      [I18N.t('win_rate'), '58.8%', ''],
      ['Profit factor', '2.47', 'pos'],
      [I18N.t('max_dd'), '−$729.92', 'neg']
    ];
    $('#mockKpis').innerHTML = kp.map((k, i) => '<div class="mock-kpi' + (i === 0 ? ' main' : '') + '"><small>' + k[0] + '</small><b class="mono ' + k[2] + '">' + k[1] + '</b></div>').join('');
    const eq = equity(90, 7, 14370, 0.1);
    Charts.line($('#mockEquity'), eq, {
      height: 190, base: eq[0].y,
      fmt: v => '$' + (v / 1000).toFixed(1) + 'k', label: () => '',
      tip: p => '<b class="mono">' + money(p.y) + '</b>'
    });
    heat($('#mockHeat'), 5, 11);
    $('#f2Ring').innerHTML = Charts.donut([{ value: 63, cls: 'up' }, { value: 3, cls: 'neu' }, { value: 44, cls: 'down' }], 52, 6);

    const eq2 = equity(120, 3, 10000, 0.09);
    Charts.line($('#tileEquity'), eq2, {
      height: window.innerWidth > 760 ? 280 : 200, base: eq2[0].y,
      fmt: v => '$' + (v / 1000).toFixed(1) + 'k', label: () => '',
      tip: p => '<b class="mono">' + money(p.y) + '</b>'
    });
    heat($('#tileHeat'), 5, 29);
    const rItems = [['−1.5', -4], ['−1', -30], ['−0.5', -6], ['0', 3], ['0.5', 12], ['1', 15], ['1.5', 12], ['2', 16], ['3+', 8]]
      .map(x => ({ label: x[0], value: x[1], count: Math.abs(x[1]) }));
    Charts.columns($('#tileR'), rItems, { height: 150, fmt: v => Math.abs(v), labelEvery: 2, tip: it => '<b class="mono">' + it.count + '</b><span>R ' + it.label + '</span>' });
    const wd = I18N.weekdaysMon();
    const wItems = [2456, 640, 290, 2120, 1260, 380, -170].map((v, i) => ({ label: wd[i], value: v, count: 1 }));
    Charts.columns($('#svWeekday'), wItems, {
      height: 230, labelEvery: 1, fmt: v => '$' + (Math.abs(v) >= 1000 ? (v / 1000).toFixed(1) + 'k' : v),
      tip: it => '<b class="mono ' + (it.value >= 0 ? 'pos' : 'neg') + '">' + (it.value >= 0 ? '+' : '') + money(it.value) + '</b><span>' + it.label + '</span>'
    });
  }

  /* ---------- marquee ---------- */
  const markets = ['BTCUSDT', 'ETHUSDT', 'XAUUSD', 'EURUSD', 'NAS100', 'SPX500', 'NVDA', 'TSLA', 'AAPL', 'SOLUSDT', 'GBPJPY', 'USOIL', 'ES', 'NQ', 'USDKZT', 'DAX40'];
  const row = markets.map(m => '<span>' + m + '</span><i>✦</i>').join('');
  $('#marquee').innerHTML = row + row;

  /* ---------- scroll effects ---------- */
  const nav = $('#lpNav'), mock = $('#mock'), stage = $('#stage');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;
  function onScroll() {
    ticking = false;
    nav.classList.toggle('scrolled', window.scrollY > 12);
    if (reduce) return;
    const r = stage.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.9)));
    mock.style.setProperty('--p', p.toFixed(3));
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* reveal on scroll */
  const reveal = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        io.unobserve(en.target);
        $$('[data-count]', en.target).forEach(countUp);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveal.forEach((el, i) => { el.style.setProperty('--d', (el.parentElement.children.length > 1 ? Array.prototype.indexOf.call(el.parentElement.children, el) % 4 : 0) * 80 + 'ms'); io.observe(el); });
  } else reveal.forEach(el => el.classList.add('in'));

  function countUp(el) {
    const target = +el.dataset.count, suf = el.dataset.suffix || '';
    if (!target) return;
    const t0 = performance.now();
    const step = now => {
      const k = Math.min(1, (now - t0) / 1400);
      const e = k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
      el.textContent = Math.round(target * e) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* spotlight on tiles */
  document.addEventListener('pointermove', e => {
    const c = e.target.closest && e.target.closest('.tile, .step, .price-card, .sv-card');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  /* hero parallax on pointer */
  if (!reduce) {
    const hero = $('.hero');
    hero.addEventListener('pointermove', e => {
      const x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
      stage.style.setProperty('--tx', (x * 10).toFixed(2));
      stage.style.setProperty('--ty', (y * 10).toFixed(2));
    });
  }

  let rt, lastW = window.innerWidth;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (Math.abs(window.innerWidth - lastW) > 20) { lastW = window.innerWidth; drawMock(); } }, 150); });

  // Until crypto checkout is configured, don't promise a payment method that isn't live yet.
  if (!(window.EDGEBOOK_CONFIG || {}).payFunction) { const fp = $('#faqPay'); if (fp) fp.remove(); }

  // Hero film: start the video only when it can play smoothly (skip on reduced motion / data saver)
  (function () {
    const v = $('#heroVideo');
    if (!v) return;
    const saver = navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ''));
    if ((window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) || saver) return;
    v.src = v.dataset.src;
    v.addEventListener('playing', () => v.classList.add('on'), { once: true });
    const go = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    v.addEventListener('canplay', go, { once: true });
    v.load();
  })();

  applyLang();
  onScroll();
})();
