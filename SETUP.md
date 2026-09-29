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

## Қауіпсіздік

- `anon` кілті ашық болуға арналған. Оның қорғанысы — `schema.sql` ішіндегі RLS ережелері.
- Пайдаланушы өзіне Pro бере алмайды: `profiles` кестесіне тек webhook (service_role) жаза алады.
- Бұлтқа оқу/жазу дерекқор деңгейінде тек белсенді Pro-ға рұқсат етіледі.
- Webhook әр сұраныстың HMAC қолтаңбасын тексереді.

## Сатуға дейін қосу керек

- Terms of Service, Privacy Policy, Refund Policy беттері (Lemon Squeezy оларды талап етеді)
- Жеке домен (мысалы `edgebook.kz`) — Netlify → Domain management
- Қазақстандағы клиенттер үшін Kaspi Pay / CloudPayments (келесі кезең)
