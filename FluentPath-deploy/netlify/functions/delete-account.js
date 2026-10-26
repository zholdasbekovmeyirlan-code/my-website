/* FluentPath — deletes the signed-in learner's account. Profile, progress, classes, class memberships,
   submissions and push subscriptions go with it (ON DELETE CASCADE, see supabase/schema.sql).
   Needs SUPABASE_URL, SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY. */
const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { error: "method" });
  const { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) return json(503, { error: "not_configured" });
  const auth = event.headers.authorization || event.headers.Authorization || "";
  if (!/^Bearer\s+\S+$/.test(auth)) return json(401, { error: "auth" });
  const base = SUPABASE_URL.replace(/\/$/, "");

  try {
    // Supabase itself checks the learner's token, so only the owner of an account can delete it.
    const me = await fetch(`${base}/auth/v1/user`, { headers: { apikey: SUPABASE_ANON_KEY, Authorization: auth } });
    if (!me.ok) return json(401, { error: "auth" });
    const { id } = await me.json();
    if (!id) return json(401, { error: "auth" });
    const del = await fetch(`${base}/auth/v1/admin/users/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: { apikey: SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}` },
    });
    if (!del.ok) return json(502, { error: "upstream" });
    return json(200, { ok: true });
  } catch {
    return json(502, { error: "upstream" });
  }
};
