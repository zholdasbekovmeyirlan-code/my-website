/* Edgebook — public configuration.
   Everything here is safe to publish (the Supabase anon key is designed to be public;
   access is enforced by Row Level Security in supabase/schema.sql).
   Leave supabaseUrl / supabaseAnonKey empty to run in local-only mode. */
window.EDGEBOOK_CONFIG = {
  // Supabase → Project Settings → API
  supabaseUrl: 'https://cxxlikhearnbirqnnhmn.supabase.co',
  supabaseAnonKey: 'sb_publishable_zGsLEZl74dyA8JxHsGtzuQ_Nw8ey75p',

  // Lemon Squeezy → Store → Products → Share (checkout links for each variant)
  checkout: {
    monthly: '',
    yearly: ''
  },
  // Where subscribers manage or cancel their plan
  billingPortal: 'https://app.lemonsqueezy.com/my-orders',

  // Prices shown on the landing page and in the app
  pricing: { currency: '$', monthly: 12, yearly: 99 }
};
