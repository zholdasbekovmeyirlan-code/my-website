-- EntryX — hourly trigger for the Telegram bot's daily wrap-up.
-- 1) Supabase → Database → Extensions: enable "pg_cron" and "pg_net".
-- 2) Replace FUNCTION_SLUG and WEBHOOK_SECRET below, then Run.
select cron.unschedule('entryx-tg-remind') where exists (select 1 from cron.job where jobname = 'entryx-tg-remind');
select cron.schedule('entryx-tg-remind', '0 * * * *', $$
  select net.http_post(
    url     := 'https://cxxlikhearnbirqnnhmn.supabase.co/functions/v1/FUNCTION_SLUG',
    headers := '{"Content-Type": "application/json", "x-entryx-cron": "WEBHOOK_SECRET"}'::jsonb,
    body    := '{"cron": "remind"}'::jsonb
  );
$$);
