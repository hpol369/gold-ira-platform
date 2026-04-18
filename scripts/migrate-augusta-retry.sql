-- Migration: Augusta retry queue support
-- Run this in Supabase SQL Editor.
--
-- Adds columns to track Augusta webhook retry attempts. The cron job at
-- /api/cron/process-emails picks up leads where the Augusta submission
-- failed (status='new' AND augusta_retry_count < 5 AND augusta_failed_at
-- IS NOT NULL) and retries with exponential backoff. After 5 failures,
-- a Telegram alert flags the lead for manual upload.
--
-- Safe to run multiple times (uses IF NOT EXISTS).

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS augusta_retry_count int NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS augusta_last_attempt_at timestamptz,
  ADD COLUMN IF NOT EXISTS augusta_failed_at timestamptz;

-- Partial index for the retry cron — only scans the small set of leads
-- that need attention, not the entire table.
CREATE INDEX IF NOT EXISTS idx_leads_augusta_retry
  ON leads (augusta_failed_at)
  WHERE status = 'new'
    AND augusta_failed_at IS NOT NULL
    AND augusta_retry_count < 5;
