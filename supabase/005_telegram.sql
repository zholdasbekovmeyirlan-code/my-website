-- EntryX — Telegram bot.
-- Run once in Supabase → SQL Editor → New query → Run (after 003_ai_coach.sql).
-- The bot (Edge Function, service role) reads Pro journals; users only link/unlink their own chat.

create table if not exists public.telegram_links (
  user_id      uuid primary key references auth.users on delete cascade,
  chat_id      bigint not null unique,
  username     text,
  remind_hour  int default 21 check (remind_hour is null or remind_hour between 0 and 23),
  tz           text not null default 'Asia/Almaty',
  last_remind  date,
  created_at   timestamptz not null default now()
);
alter table public.telegram_links enable row level security;

drop policy if exists "telegram_links: read own" on public.telegram_links;
create policy "telegram_links: read own" on public.telegram_links
  for select using (auth.uid() = user_id);
drop policy if exists "telegram_links: delete own" on public.telegram_links;
create policy "telegram_links: delete own" on public.telegram_links
  for delete using (auth.uid() = user_id);

-- One-time codes the app hands to the bot through the t.me/<bot>?start=<code> link.
create table if not exists public.telegram_codes (
  code        text primary key,
  user_id     uuid not null references auth.users on delete cascade,
  expires_at  timestamptz not null
);
alter table public.telegram_codes enable row level security;
-- No policies: only the functions below touch this table.

create or replace function public.tg_link_code()
returns text language plpgsql security definer set search_path = public as $$
declare c text;
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  delete from public.telegram_codes where user_id = auth.uid() or expires_at < now();
  c := replace(gen_random_uuid()::text, '-', '');
  insert into public.telegram_codes (code, user_id, expires_at) values (c, auth.uid(), now() + interval '15 minutes');
  return c;
end;
$$;
revoke all on function public.tg_link_code() from public, anon;
grant execute on function public.tg_link_code() to authenticated;

-- Called by the bot: consume a code and attach the chat to that account.
create or replace function public.tg_claim(p_code text, p_chat bigint, p_username text)
returns uuid language plpgsql security definer set search_path = public as $$
declare u uuid;
begin
  delete from public.telegram_codes where code = p_code and expires_at > now() returning user_id into u;
  if u is null then return null; end if;
  delete from public.telegram_links where chat_id = p_chat and user_id <> u;
  insert into public.telegram_links (user_id, chat_id, username) values (u, p_chat, p_username)
  on conflict (user_id) do update set chat_id = excluded.chat_id, username = excluded.username;
  return u;
end;
$$;
revoke all on function public.tg_claim(text, bigint, text) from public, anon, authenticated;
grant execute on function public.tg_claim(text, bigint, text) to service_role;

-- AI quota shared with the in-app coach, for questions asked through the bot.
create or replace function public.ai_take_for(p_user uuid, p_limit int)
returns int language plpgsql security definer set search_path = public as $$
declare
  m text := to_char(now() at time zone 'utc', 'YYYY-MM');
  c int;
begin
  if not public.is_pro(p_user) then return -2; end if;
  insert into public.ai_usage (user_id, month, count) values (p_user, m, 0)
  on conflict (user_id, month) do nothing;
  update public.ai_usage set count = count + 1
   where user_id = p_user and month = m and count < p_limit
  returning count into c;
  return coalesce(c, -1);
end;
$$;
revoke all on function public.ai_take_for(uuid, int) from public, anon, authenticated;
grant execute on function public.ai_take_for(uuid, int) to service_role;

create or replace function public.ai_refund_for(p_user uuid)
returns void language plpgsql security definer set search_path = public as $$
begin
  update public.ai_usage set count = greatest(count - 1, 0)
   where user_id = p_user and month = to_char(now() at time zone 'utc', 'YYYY-MM');
end;
$$;
revoke all on function public.ai_refund_for(uuid) from public, anon, authenticated;
grant execute on function public.ai_refund_for(uuid) to service_role;
