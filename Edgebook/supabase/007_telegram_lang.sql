-- EntryX — Telegram bot language choice (🇰🇿 / 🇷🇺 / 🇬🇧 buttons in the bot).
-- Run once in Supabase → SQL Editor → New query → Run (after 005_telegram.sql).
alter table public.telegram_links add column if not exists lang text check (lang is null or lang in ('kk', 'ru', 'en'));
