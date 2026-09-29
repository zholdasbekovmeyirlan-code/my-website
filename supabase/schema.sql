-- Edgebook — Supabase schema
-- Run once in Supabase → SQL Editor → New query → Run.
-- Users can read their own plan but never change it; only the payment webhook
-- (service role key, server-side) can set plan = 'pro'. Cloud sync is only
-- readable/writable while the plan is active, enforced here in the database.

-- ---------- profiles (one row per user, created automatically) ----------
create table if not exists public.profiles (
  id                  uuid primary key references auth.users on delete cascade,
  email               text,
  plan                text not null default 'free' check (plan in ('free', 'pro')),
  plan_until          timestamptz,
  ls_customer_id      text,
  ls_subscription_id  text,
  updated_at          timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles: read own" on public.profiles;
create policy "profiles: read own" on public.profiles
  for select using (auth.uid() = id);
-- No insert/update/delete policies: clients cannot grant themselves Pro.

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------- Pro check ----------
create or replace function public.is_pro(uid uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
    where id = uid and plan = 'pro' and (plan_until is null or plan_until > now())
  );
$$;

-- ---------- journals (cloud copy of each user's journal) ----------
create table if not exists public.journals (
  user_id     uuid primary key references auth.users on delete cascade,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);

alter table public.journals enable row level security;

drop policy if exists "journals: pro read own" on public.journals;
create policy "journals: pro read own" on public.journals
  for select using (auth.uid() = user_id and public.is_pro(auth.uid()));

drop policy if exists "journals: pro insert own" on public.journals;
create policy "journals: pro insert own" on public.journals
  for insert with check (auth.uid() = user_id and public.is_pro(auth.uid()));

drop policy if exists "journals: pro update own" on public.journals;
create policy "journals: pro update own" on public.journals
  for update using (auth.uid() = user_id and public.is_pro(auth.uid()))
  with check (auth.uid() = user_id);
