-- EntryX — AI coach monthly quota.
-- Run once in Supabase → SQL Editor → New query → Run (after 002_trial.sql).

create table if not exists public.ai_usage (
  user_id  uuid not null references auth.users on delete cascade,
  month    text not null,              -- 'YYYY-MM' (UTC)
  count    int  not null default 0,
  primary key (user_id, month)
);

alter table public.ai_usage enable row level security;

drop policy if exists "ai_usage: read own" on public.ai_usage;
create policy "ai_usage: read own" on public.ai_usage
  for select using (auth.uid() = user_id);
-- No write policies: only the functions below (security definer) change counts.

-- Take one question from this month's quota.
-- Returns the new count, -1 when the limit is reached, -2 when the user is not Pro.
create or replace function public.ai_take(p_limit int)
returns int language plpgsql security definer set search_path = public as $$
declare
  m text := to_char(now() at time zone 'utc', 'YYYY-MM');
  c int;
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if not public.is_pro(auth.uid()) then return -2; end if;
  insert into public.ai_usage (user_id, month, count) values (auth.uid(), m, 0)
  on conflict (user_id, month) do nothing;
  update public.ai_usage set count = count + 1
   where user_id = auth.uid() and month = m and count < p_limit
  returning count into c;
  return coalesce(c, -1);
end;
$$;

-- Give a question back when the AI call failed.
create or replace function public.ai_refund()
returns void language plpgsql security definer set search_path = public as $$
begin
  update public.ai_usage set count = greatest(count - 1, 0)
   where user_id = auth.uid() and month = to_char(now() at time zone 'utc', 'YYYY-MM');
end;
$$;

revoke execute on function public.ai_take(int) from public, anon;
revoke execute on function public.ai_refund() from public, anon;
grant execute on function public.ai_take(int) to authenticated;
grant execute on function public.ai_refund() to authenticated;
