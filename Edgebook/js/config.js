/* EntryX — public configuration.
   Everything here is safe to publish (the Supabase anon key is designed to be public;
   access is enforced by Row Level Security in supabase/schema.sql).
   Leave supabaseUrl / supabaseAnonKey empty to run in local-only mode. */
window.EDGEBOOK_CONFIG = {
  // Supabase → Project Settings → API
  supabaseUrl: 'https://cxxlikhearnbirqnnhmn.supabase.co',
  supabaseAnonKey: 'sb_publishable_zGsLEZl74dyA8JxHsGtzuQ_Nw8ey75p',

  // AI coach Edge Function slug — the last part of its URL in Supabase → Edge Functions
  aiFunction: 'clever-processor',

  // Social sign-in buttons. Each must also be enabled in Supabase → Authentication → Providers.
  // Supported here: 'google', 'github', 'apple'
  oauthProviders: ['google', 'github'],
  // false = only the buttons above (no email/password form on the sign-in page)
  emailAuth: false,

  // Crypto payments: slug of the `pay` Edge Function (last part of its URL). Empty = off.
  payFunction: '',

  // Lemon Squeezy → Store → Products → Share (checkout links for each variant; unused when payFunction is set)
  checkout: {
    monthly: '',
    yearly: ''
  },
  // Where subscribers manage or cancel their plan
  billingPortal: '',

  // Shown on legal.html (Terms / Privacy / Refunds). Fill these in before launch.
  legal: { owner: '', email: '', country: 'Kazakhstan' },

  // Prices shown on the landing page and in the app
  pricing: { currency: '$', monthly: 12, yearly: 99 }
};
