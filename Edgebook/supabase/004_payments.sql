-- EntryX — crypto payments (Cryptomus).
-- Run once in Supabase → SQL Editor → New query → Run (after schema.sql).
-- Only the `pay` Edge Function (service role) can grant Pro; each order is applied once.

create table if not exists public.payments (
  order_id    text primary key,
  user_id     uuid not null references auth.users on delete cascade,
  plan        text not null check (plan in ('monthly', 'yearly')),
  amount      numeric not null,
  currency    text not null,
  provider    text not null default 'cryptomus',
  created_at  timestamptz not null default now()
);

alter table public.payments enable row level security;

drop policy if exists "payments: read own" on public.payments;
create policy "payments: read own" on public.payments
  for select using (auth.uid() = user_id);
-- No write policies: only pay_grant() below records payments.

-- Records a paid order and extends Pro. Returns false if the order was already applied.
create or replace function public.pay_grant(p_order text, p_user uuid, p_plan text, p_amount numeric, p_currency text)
returns boolean language plpgsql security definer set search_path = public as $$
declare
  days int := case p_plan when 'yearly' then 365 else 30 end;
begin
  insert into public.payments (order_id, user_id, plan, amount, currency)
  values (p_order, p_user, p_plan, p_amount, p_currency)
  on conflict (order_id) do nothing;
  if not found then return false; end if;

  insert into public.profiles (id) values (p_user) on conflict (id) do nothing;
  update public.profiles
     set plan = 'pro',
         plan_until = greatest(coalesce(plan_until, now()), now()) + make_interval(days => days),
         updated_at = now()
   where id = p_user;
  return true;
end;
$$;

revoke all on function public.pay_grant(text, uuid, text, numeric, text) from public, anon, authenticated;
grant execute on function public.pay_grant(text, uuid, text, numeric, text) to service_role;
