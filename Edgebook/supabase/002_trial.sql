-- EntryX — 7-day free Pro trial.
-- Run once in Supabase → SQL Editor → New query → Run (after schema.sql).

-- New column: every new profile gets 7 days of Pro automatically.
alter table public.profiles add column if not exists trial_until timestamptz;
alter table public.profiles alter column trial_until set default (now() + interval '7 days');

-- Give the trial to everyone who already signed up and never paid.
update public.profiles
   set trial_until = now() + interval '7 days'
 where trial_until is null and plan = 'free';

-- Pro = paid plan still active, OR trial still running.
create or replace function public.is_pro(uid uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
    where id = uid
      and (
        (plan = 'pro' and (plan_until is null or plan_until > now()))
        or (trial_until is not null and trial_until > now())
      )
  );
$$;
