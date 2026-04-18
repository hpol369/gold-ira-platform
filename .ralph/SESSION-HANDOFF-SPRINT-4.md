# Session Handoff Brief — Sprint 4+

**Date:** 2026-03-20
**Previous session:** Sprints 1-3 complete + audit fixes
**Branch:** All work pushed directly to `main` (Vercel auto-deploys)
**Worktree:** `.claude/worktrees/pedantic-lovelace`

---

## WHAT'S BEEN BUILT (Sprints 1-3)

### Sprint 1 — Qualification Funnel ✅
- **`/get-started` page** (`src/app/get-started/page.tsx`) — 2-question guided kit request (savings tier → concern → personalized result → contact form → submit → redirect to partner LP)
- **Types:** `src/types/funnel.ts` — SavingsTier, Concern, QualificationResult, FunnelState
- **Routing logic:** $50k+ → Augusta, $25-50k → Goldco, <$25k → Noble Gold
- **LeadModalContext** (`src/context/LeadModalContext.tsx`) — Two-path CTA system:
  - Path A: `openModal("default", source)` → navigates to `/get-started?ref=<source>`
  - Path B: `directToAugusta` prop on AugustaCTA → goes directly to Augusta LP
- **Lead API** (`src/app/api/submit-lead/route.ts`) — Stores in Supabase, sends Telegram, submits to Augusta via Zapier, enrolls in email sequence. Phone is optional for sub-$50k leads.
- **Supabase `leads` table** has columns: savings_tier, concern, qualification_tier, routed_to, email_sequence, ab_variant

### Sprint 2 — Conversion Optimization ✅
- **AugustaCTA** (`src/components/cta/AugustaCTA.tsx`) — Two-path: `directToAugusta` prop bypasses funnel for high-intent pages
- **ComparisonTable** (`src/components/home/ComparisonTable.tsx`) — Per-company tracked affiliate links
- **MobileStickyBar** (`src/components/widgets/MobileStickyBar.tsx`) — Red bottom bar on mobile, appears after 600px scroll. Rendered globally in `layout.tsx`.
- **SidebarAuditWidget** (`src/components/widgets/SidebarAuditWidget.tsx`) — Gold kit CTA for learn article sidebars
- **InContentCTA** (`src/components/widgets/InContentCTA.tsx`) — Mid-article CTA component
- **ExitIntentPopup** (`src/components/layout/ExitIntentPopup.tsx`) — Email capture popup, posts to `/api/newsletter`, stores in Supabase `email_subscribers` table

### Sprint 3 — Email + Analytics + A/B Testing ✅
- **Resend integration** (`src/lib/resend.ts`) — SDK client, lazy singleton
- **Email templates** (`src/lib/email-templates.ts`) — Branded HTML layout (navy header, red CTAs, unsubscribe footer)
- **3 nurture sequences** (`src/lib/email-sequences.ts`):
  - Sequence A "Gold IRA Primer" — 7 emails over 20 days for $50k+ leads (Augusta CTAs)
  - Sequence B "Starter Path" — 4 emails over 14 days for sub-$50k leads (Noble Gold CTAs)
  - Sequence C "Newsletter Welcome" — instant confirmation for subscribers
- **Email queue** (`src/lib/email-queue.ts`) — Enrollment, queue processing, unsubscribe, stats
- **Cron endpoint** (`src/app/api/email/send-sequence/route.ts`) — Processes due emails daily at 10 AM ET
- **Unsubscribe** (`src/app/api/email/unsubscribe/route.ts`) — One-click with styled confirmation page
- **Postback events** now persist to Supabase `postback_events` table (was in-memory)
- **Lead quality dashboard** at `/admin/dashboard` (PIN: 6903):
  - KPI cards, 14-day trend charts, breakdown panels
  - Email sequence stats, postback stats, A/B test results
  - Recent leads table with tier badges and status
- **A/B test** on `/get-started`:
  - Control (50%): savings first → concern second
  - Variant (50%): concern first (emotional hook) → savings second
  - Tracked per lead in `ab_variant` column, visible in dashboard
- **`vercel.json`** — Daily cron at `0 14 * * *`

---

## ENVIRONMENT & TOOLING

- **Node.js:** v24.14.0 via nvm (`source ~/.nvm/nvm.sh` before any npm/node commands)
- **GitHub:** `hpol369/gold-ira-platform` — push directly to `main`, no PRs needed
- **Auth:** Fine-grained PAT (starts with `github_pat_11BNF7HAY0...`) — configured in git
- **Vercel:** Auto-deploys from `main`. CLI linked. Project: `gold-ira-platform`
- **Supabase:** Project ref `sxnwjpjqzegfweohzifi`, access token in `.env.local` (DO NOT commit tokens)
  - To run SQL: `curl -X POST "https://api.supabase.com/v1/projects/sxnwjpjqzegfweohzifi/database/query" -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" -H "Content-Type: application/json" -d '{"query": "YOUR SQL HERE"}'`
  - Load token from `.env.local`: `source .env.local` first
- **Working directory:** `/Users/boef/Documents/projects/gold-ira-platform-main/.claude/worktrees/pedantic-lovelace`

### Env vars in Vercel (confirmed working):
- `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_IDS`
- `AUGUSTA_WEBHOOK_URL`, `AUGUSTA_AFFILIATE_ID`
- `GA4` + Google Ads conversion tracking

### Env vars NEEDED (user setting up):
- `RESEND_API_KEY` — from resend.com dashboard (user has account, fixing DKIM/SPF)
- `RESEND_FROM_EMAIL` — e.g. `hello@richdadretirement.com`
- `CRON_SECRET` — any random string, for cron auth

---

## SUPABASE TABLES

| Table | Purpose |
|-------|---------|
| `leads` | Full lead data with qualification fields, ab_variant |
| `source_clicks` | Affiliate click tracking |
| `email_subscribers` | Newsletter signups (exit intent popup) |
| `email_sequence_queue` | Drip email scheduling (sequence, step, status, next_send_at) |
| `postback_events` | Augusta postback persistence (type, sub_id, lead_id, raw_params) |

---

## KNOWN ISSUES (from audit — not yet fixed)

1. **Goldco/Noble Gold affiliate URLs are placeholders** in `src/config/affiliates.ts` (lines 36-38). Real URLs needed when those affiliate accounts are active.
2. **Non-Augusta leads captured but never forwarded** — no Zapier/webhook for Goldco or Noble Gold. Leads sit in Supabase for manual follow-up.
3. **Admin PIN `6903` hardcoded in client bundle** — visible in page source. Should move to server-side auth or env var.
4. **37+ static learn pages** (`src/app/learn/gold-ira-benefits/`, etc.) missing SidebarAuditWidget and InContentCTA — only the dynamic `[slug]` template has them. Some also missing Navbar/Footer imports.
5. **track-click ALLOWED_DOMAINS** (`src/app/api/track-click/route.ts`) missing 14+ affiliate domains (Oxford, Lear, iTrustCapital, etc.). Will block tracked redirects to those sites.
6. **ExitIntentModal** (`src/components/widgets/ExitIntentModal.tsx`) is dead code — never rendered anywhere. Can be deleted.
7. **Theoretical email queue race condition** — step 0 is inserted as "pending" then immediately processed. If cron fires at that exact moment, a double-send is possible (very unlikely with daily cron).

---

## WHAT'S NEXT (from THE-FUNNEL-BLUEPRINT.md)

### Sprint 4 (Week 4): GEO + Content
16. **Answer-first content pass** on top 20 pages
17. **Schema markup expansion** (FAQ, Article, Review, HowTo)
18. **Blue Ocean pages** (6 low-competition pages, ~1,700 searches/mo)
19. **"Is $X Enough to Retire?" content hub**

### Sprint 5-8: Scale
20. Internal linking architecture overhaul
21. Content expansion (federal employee, government pension, WEP/GPO)
22. Quiz overhaul — connect to funnel with pre-filled data
23. Google Ads — when organic proves the funnel converts

### Backlog (from .ralph/ strategy docs)
- Fix keyword cannibalization (2 merges + 1 differentiation)
- Add sidebar CTAs to the 37+ static learn pages
- Universal quiz upgrade (multi-product finder)
- Weekly email digest automation (Sequence C ongoing)

---

## KEY FILES QUICK REFERENCE

| Purpose | File |
|---------|------|
| Master blueprint | `.ralph/THE-FUNNEL-BLUEPRINT.md` |
| Homepage | `src/app/page.tsx` |
| Funnel page | `src/app/get-started/page.tsx` |
| Funnel types | `src/types/funnel.ts` |
| Lead API | `src/app/api/submit-lead/route.ts` |
| Newsletter API | `src/app/api/newsletter/route.ts` |
| Email sequences | `src/lib/email-sequences.ts` |
| Email queue | `src/lib/email-queue.ts` |
| Email templates | `src/lib/email-templates.ts` |
| Resend client | `src/lib/resend.ts` |
| Postback handler | `src/app/api/postback/route.ts` |
| Dashboard page | `src/app/admin/dashboard/page.tsx` |
| Dashboard API | `src/app/api/admin/stats/route.ts` |
| Conversions page | `src/app/admin/conversions/page.tsx` |
| Affiliate links | `src/config/affiliates.ts` |
| A/B testing hook | `src/lib/ab-testing.ts` |
| Supabase client | `src/lib/supabase.ts` |
| CTA component | `src/components/cta/AugustaCTA.tsx` |
| Exit intent popup | `src/components/layout/ExitIntentPopup.tsx` |
| Mobile sticky bar | `src/components/widgets/MobileStickyBar.tsx` |
| Lead modal context | `src/context/LeadModalContext.tsx` |
| Cron config | `vercel.json` |
| Root layout | `src/app/layout.tsx` |
| Notifications | `src/lib/notifications.ts` |
| Augusta webhook | `src/lib/augusta.ts` |

---

## USER PREFERENCES

- Push directly to `main`, no PRs
- Full autonomy — only ask when input is genuinely needed
- Use Ralph's Method (plan → types → components → sequential)
- Dutch timezone (Europe/Amsterdam) for Telegram timestamps
- Target audience: 55+ Americans, blue-collar, $50k+ retirement savings
- Always follow CLAUDE.md instructions in project root
