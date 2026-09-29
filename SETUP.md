# EntryX Pro — іске қосу нұсқаулығы

Pro нұсқасы үш сервисті қажет етеді: **Supabase** (аккаунт + бұлт), **Lemon Squeezy** (төлем), **Netlify** (сайт + webhook).
Барлығы басында тегін. Кілттерсіз сайт бұрынғыдай Free режимде жұмыс істей береді.

```
Пайдаланушы ── тіркеледі ──► Supabase Auth
     │
     └─ «Pro-ға өту» ──► Lemon Squeezy checkout (user_id-мен)
                              │ төлем өтті
                              ▼
                   Netlify функциясы (webhook)
                              │ service_role кілтімен
                              ▼
                   Supabase: profiles.plan = 'pro'
                              │
     Қолданба ◄── RLS тек Pro-ға бұлтқа жазуға рұқсат береді
```

---

## 1. Supabase (≈5 минут)

1. https://supabase.com → **Start your project** → GitHub арқылы кіріңіз.
2. **New project**: атауы `edgebook`, құпиясөз ойлап табыңыз, аймақ — **Frankfurt** (Қазақстанға жақын).
3. Сол жақ мәзір → **SQL Editor** → **New query** → `supabase/schema.sql` файлының ішіндегісін толық қойып → **Run**.
   Сосын дәл солай `supabase/002_trial.sql` файлын да іске қосыңыз (7 күн тегін Pro сынағы).
4. **Authentication → URL Configuration**:
   - *Site URL*: сайтыңыздың мекенжайы (мысалы `https://edgebook.netlify.app`).
   - *Redirect URLs*: `https://edgebook.netlify.app/app.html`
5. **Project Settings → API** бетінен көшіріңіз:
   - `Project URL` → `js/config.js` ішіндегі `supabaseUrl`
   - `anon public` кілті → `supabaseAnonKey`
   - `service_role` кілті → **тек** Netlify-ға (3-қадам). ⚠️ Оны ешқашан кодқа немесе браузерге қоймаңыз.

## 2. Lemon Squeezy (≈10 минут)

1. https://lemonsqueezy.com → тіркеліп, **Store** ашыңыз. Төлем алу үшін дүкенді активтендіру (жеке мәлімет, банк/PayPal) керек.
   Қазақстанға төлем жасайтынын тіркелу кезінде тексеріңіз.
2. **Products → New product**: `EntryX Pro`, түрі **Subscription**, екі вариант:
   - *Monthly* — $12 / ай
   - *Yearly* — $99 / жыл
3. Әр варианттың **Share → Checkout link** сілтемесін көшіріп, `js/config.js` ішіндегі `checkout.monthly` және `checkout.yearly`-ге қойыңыз.
4. **Settings → Webhooks → +**:
   - *Callback URL*: `https://СІЗДІҢ-САЙТ/.netlify/functions/lemonsqueezy-webhook`
   - *Signing secret*: кез келген ұзын құпия сөз ойлап табыңыз (оны 3-қадамда қолданамыз)
   - *Events*: барлық `subscription_*` оқиғаларын белгілеңіз.

Бағаны өзгертсеңіз, `js/config.js` ішіндегі `pricing` бөлімін де жаңартыңыз (басты бет пен қолданба сол жерден оқиды).

## 3. Netlify (≈5 минут)

1. https://app.netlify.com → **Add new site → Import an existing project → GitHub** → `my-website`.
2. Баптау:
   - *Branch*: `claude/eager-einstein-rak9yq` (немесе main-ге біріктіргеннен кейін `main`)
   - *Base directory*: `EntryX`
   - *Build command*: бос
   - *Publish directory*: `EntryX`
3. **Site configuration → Environment variables**:

   | Кілт | Мәні |
   |---|---|
   | `SUPABASE_URL` | Supabase Project URL |
   | `SUPABASE_SERVICE_ROLE_KEY` | Supabase service_role кілті |
   | `LEMONSQUEEZY_WEBHOOK_SECRET` | 2-қадамдағы signing secret |

4. **Deploys → Trigger deploy**.

## 4. `js/config.js`-ті толтыру

```js
window.EDGEBOOK_CONFIG = {
  supabaseUrl: 'https://abcd1234.supabase.co',
  supabaseAnonKey: 'eyJhbGciOi...',
  checkout: {
    monthly: 'https://edgebook.lemonsqueezy.com/checkout/buy/...',
    yearly:  'https://edgebook.lemonsqueezy.com/checkout/buy/...'
  },
  billingPortal: 'https://app.lemonsqueezy.com/my-orders',
  pricing: { currency: '$', monthly: 12, yearly: 99 }
};
```

Сақтап, GitHub-қа жүктеңіз. Netlify өзі қайта жариялайды.

## 5. Тексеру

1. Сайт → **Баптаулар** → email + құпиясөз → **Тіркелу** → поштадағы сілтемені басыңыз → **Кіру**.
2. **Жылдық** / **Айлық** → Lemon Squeezy-дің *test mode* картасымен төлеңіз (`4242 4242 4242 4242`).
3. Қолданбада **«Төледім — тексеру»** → PRO белгісі шығып, «Синхрондалды» деп көрсетуі керек.
4. Басқа браузерде сол аккаунтпен кіріңіз, сонда мәмілелер өзі жүктеледі.

Бірдеңе шықпаса: Netlify → **Logs → Functions** бетінен webhook қатесін, ал Supabase → **Table editor → profiles** бетінен `plan` бағанын қараңыз.

## 6. AI коуч (Pro)

Коуч Claude-ды тек серверден (Supabase Edge Function) шақырады. API кілт браузерге ешқашан шықпайды.

1. **SQL:** Supabase → **SQL Editor** → `supabase/002_trial.sql` (бұрын іске қоспаған болсаңыз) және `supabase/003_ai_coach.sql` мазмұнын қойып, **Run** басыңыз.
2. **Anthropic кілт:** [console.anthropic.com](https://console.anthropic.com) → **Billing** бөлімінде баланс толтырыңыз → **API Keys → Create Key**.
   *Тегін нұсқа:* Anthropic орнына [aistudio.google.com](https://aistudio.google.com) сайтынан Gemini кілтін алыңыз (**Get API key**).
3. **Құпиялар:** Supabase → **Edge Functions → Secrets** бөліміне мыналарды қосыңыз:
   - `ANTHROPIC_API_KEY` — Claude кілті, **немесе** тегін нұсқа үшін `GEMINI_API_KEY` (екеуі де тұрса, Claude қолданылады)
   - `GEMINI_MODEL` — міндетті емес, әдепкісі `gemini-2.5-flash`
   - `AI_MODEL` — міндетті емес. Әдепкісі `claude-opus-5-5` (ең ақылдысы). Арзанырақ болсын десеңіз, `claude-haiku-4-5` қойыңыз.
   - `AI_MONTHLY_LIMIT` — бір пайдаланушыға айына берілетін сұрақ саны (әдепкісі `100`)
4. **Функция:** Supabase → **Edge Functions → Deploy a new function → Via Editor** → атын `coach` деп қойыңыз → `supabase/functions/coach/index.ts` мазмұнын қойып, **Deploy** басыңыз.
   CLI арқылы жасасаңыз: `supabase functions deploy coach`.
5. **Тексеру:** Pro немесе trial аккаунтпен **AI коуч** бетін ашып, дайын сұрақтардың бірін басыңыз.

Шығын: әр сұрақ журналдың қысқаша мазмұнын жібереді (≈10–20 мың токен), ал ол кэштеледі. Лимит `ai_usage` кестесінде есептеледі; қате болса, сұрақ лимиттен қайтарылады.

## Қауіпсіздік

- `anon` кілті ашық болуға арналған. Оның қорғанысы — `schema.sql` ішіндегі RLS ережелері.
- Пайдаланушы өзіне Pro бере алмайды: `profiles` кестесіне тек webhook (service_role) жаза алады.
- Бұлтқа оқу/жазу дерекқор деңгейінде тек белсенді Pro-ға рұқсат етіледі.
- Webhook әр сұраныстың HMAC қолтаңбасын тексереді.
- AI коуч JWT арқылы пайдаланушыны тексереді, Pro екенін және лимитті дерекқордың өзі (`ai_take`) бақылайды.

## Сатуға дейін қосу керек

- Terms / Privacy / Payment Terms беттері бар (`legal.html`); `config.legal` ішіне атыңыз бен email-ыңызды жазыңыз
- Жеке домен (мысалы `edgebook.kz`) — Netlify → Domain management
- Қазақстандағы клиенттер үшін Kaspi Pay / CloudPayments (келесі кезең)
