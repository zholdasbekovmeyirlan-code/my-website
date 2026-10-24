-- FluentPath — Supabase schema for accounts, cloud sync, weekly leaderboard, classes and reminders.
-- Run once in Supabase → SQL Editor → New query → Run. Safe to run again.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default 'Learner' check (char_length(name) between 1 and 40),
  xp integer not null default 0,
  week_xp integer not null default 0,
  week_start date,
  streak integer not null default 0,
  last_active date,
  lessons_done integer not null default 0,
  words integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique default upper(substr(md5(random()::text), 1, 6)),
  name text not null check (char_length(name) between 1 and 60),
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.class_members (
  class_id uuid not null references public.classes (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id, user_id)
);

create table if not exists public.assignments (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 120),
  kind text not null default 'other',
  due date,
  created_at timestamptz not null default now()
);

create table if not exists public.submissions (
  assignment_id uuid not null references public.assignments (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  done_at timestamptz not null default now(),
  primary key (assignment_id, user_id)
);

create table if not exists public.push_subscriptions (
  endpoint text primary key,
  user_id uuid not null references public.profiles (id) on delete cascade,
  sub jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists profiles_week_idx on public.profiles (week_start, week_xp desc);
create index if not exists class_members_user_idx on public.class_members (user_id);
create index if not exists assignments_class_idx on public.assignments (class_id);

-- Helpers run as the owner so policies can check membership without recursive RLS.
create or replace function public.is_teacher(c uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (select 1 from classes where id = c and teacher_id = auth.uid());
$$;

create or replace function public.is_member(c uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (select 1 from class_members where class_id = c and user_id = auth.uid());
$$;

create or replace function public.assignment_class(a uuid) returns uuid
  language sql security definer stable set search_path = public as $$
  select class_id from assignments where id = a;
$$;

-- Students join with a 6-letter code; they cannot read other classes, so this runs as the owner.
create or replace function public.join_class(p_code text) returns json
  language plpgsql security definer set search_path = public as $$
declare c classes;
begin
  select * into c from classes where code = upper(trim(p_code));
  if c.id is null then
    raise exception 'class_not_found';
  end if;
  insert into class_members (class_id, user_id) values (c.id, auth.uid()) on conflict do nothing;
  return json_build_object('id', c.id, 'name', c.name, 'code', c.code);
end;
$$;

revoke all on function public.join_class(text) from public, anon;
grant execute on function public.join_class(text) to authenticated;

alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.classes enable row level security;
alter table public.class_members enable row level security;
alter table public.assignments enable row level security;
alter table public.submissions enable row level security;
alter table public.push_subscriptions enable row level security;

-- profiles: everyone signed in can see names and weekly XP (leaderboard); you edit only your own row.
drop policy if exists "profiles read" on public.profiles;
create policy "profiles read" on public.profiles for select to authenticated using (true);
drop policy if exists "profiles insert own" on public.profiles;
create policy "profiles insert own" on public.profiles for insert to authenticated with check (id = auth.uid());
drop policy if exists "profiles update own" on public.profiles;
create policy "profiles update own" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

-- progress: private to its owner.
drop policy if exists "progress own" on public.progress;
create policy "progress own" on public.progress for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- classes: the teacher manages; members can read.
drop policy if exists "classes read" on public.classes;
create policy "classes read" on public.classes for select to authenticated using (teacher_id = auth.uid() or public.is_member(id));
drop policy if exists "classes insert" on public.classes;
create policy "classes insert" on public.classes for insert to authenticated with check (teacher_id = auth.uid());
drop policy if exists "classes update" on public.classes;
create policy "classes update" on public.classes for update to authenticated using (teacher_id = auth.uid());
drop policy if exists "classes delete" on public.classes;
create policy "classes delete" on public.classes for delete to authenticated using (teacher_id = auth.uid());

-- class_members: you see your own memberships, the teacher sees the class list. Joining goes through join_class().
drop policy if exists "members read" on public.class_members;
create policy "members read" on public.class_members for select to authenticated using (user_id = auth.uid() or public.is_teacher(class_id) or public.is_member(class_id));
drop policy if exists "members leave" on public.class_members;
create policy "members leave" on public.class_members for delete to authenticated using (user_id = auth.uid() or public.is_teacher(class_id));

-- assignments: the teacher writes, members read.
drop policy if exists "assignments read" on public.assignments;
create policy "assignments read" on public.assignments for select to authenticated using (public.is_teacher(class_id) or public.is_member(class_id));
drop policy if exists "assignments write" on public.assignments;
create policy "assignments write" on public.assignments for all to authenticated using (public.is_teacher(class_id)) with check (public.is_teacher(class_id));

-- submissions: a student marks their own work done; the teacher sees the class's submissions.
drop policy if exists "submissions read" on public.submissions;
create policy "submissions read" on public.submissions for select to authenticated using (user_id = auth.uid() or public.is_teacher(public.assignment_class(assignment_id)));
drop policy if exists "submissions insert" on public.submissions;
create policy "submissions insert" on public.submissions for insert to authenticated with check (user_id = auth.uid() and public.is_member(public.assignment_class(assignment_id)));
drop policy if exists "submissions delete" on public.submissions;
create policy "submissions delete" on public.submissions for delete to authenticated using (user_id = auth.uid());

-- push subscriptions: private to their owner (the reminders function uses the service role key).
drop policy if exists "push own" on public.push_subscriptions;
create policy "push own" on public.push_subscriptions for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
