/* FluentPath — public settings for the browser: which Supabase project to use and the push public key.
   Only public values live here (the anon key is meant for browsers; Row Level Security protects the data).
   Set SUPABASE_URL, SUPABASE_ANON_KEY and VAPID_PUBLIC_KEY in Netlify → Site configuration → Environment variables. */
exports.handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" },
  body: JSON.stringify({
    supabaseUrl: process.env.SUPABASE_URL || "",
    supabaseKey: process.env.SUPABASE_ANON_KEY || "",
    vapidKey: process.env.VAPID_PUBLIC_KEY || "",
    ai: !!process.env.GEMINI_API_KEY,
  }),
});
