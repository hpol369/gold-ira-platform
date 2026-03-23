# Session 4 Handover — 2026-03-23

## READ THIS FIRST

This session made massive infrastructure changes. The site is transitioning from "Gold IRA only" to "Gold + Silver Precious Metals" positioning to exploit a Bing Ads arbitrage opportunity. The data layer is done. The UI work is NOT done yet.

---

## What Session 4 Shipped

### Backlink Automation (6 new scheduled tasks)
| Task | Schedule | Status |
|------|----------|--------|
| `weekly-substack-post` | Tue 9am | LIVE — first post published |
| `haro-response-bot` | M-F 10:22am | LIVE — auto-sends responses to journalist queries |
| `broken-link-outreach` | Wed 11:17am | LIVE — auto-emails broken link targets |
| `daily-gsc-url-submit` | M-F 8:47am | LIVE — submits 10 priority URLs/day to Google |
| `weekly-medium-syndication` | Thu 10:13am | LIVE — publishes on Medium weekly |
| `weekly-quora-answers` | Fri 2:37pm | LIVE — answers 3-5 Quora questions weekly |

### Accounts Created
- **Substack:** theiraadvisor.substack.com — first post live: "Gold Just Crossed $3,000"
- **HARO:** remy@cc-community.com registered as source
- **Medium:** Account created (needs first article — automated task handles this)
- **Quora:** Account created, profile set up with credentials + topics (Retirement Planning, Gold, Investing, 401k, Personal Finance US)

### SEO Damage Control (deployed to production)
- **Disavowed 6 spam backlink domains** in GSC (seo-backlink.agency, grow-your.website, primeseo.xyz, fiverr-affordable-seo-services.site, seodaro.com, seonexi.com)
- **Noindexed 1,313 news articles** (Tier B+C, score < 70) — only 46 Tier A remain indexed
- **Noindexed 100+ city pages** in /local/[state]/[city]/ (thin content)
- **Added admin layout** with noindex for dashboard/leads/conversions pages
- **Added GSC URL-prefix verification file** (google970eeb7532341ac0.html)
- **Net effect:** Indexable pages reduced from ~2,500 to ~500 quality pages

### Data Layer Changes (committed, NOT deployed yet)
- `metal_preference` field added to:
  - `LeadData` interface in `/src/app/api/submit-lead/route.ts`
  - `Lead` interface in `/src/lib/supabase.ts`
  - Augusta webhook payload in `/src/lib/augusta.ts`
  - Lead enrichment flow for existing leads
- Values: `"gold" | "silver" | "both"`
- Augusta specialist notes now include "Metal Interest: Gold/Silver/Gold & Silver"

---

## THE #1 PRIORITY: Silver IRA Site Pivot + Bing Ads Launch

### Why Silver IRA?

| Metric | Gold IRA | Silver IRA |
|--------|----------|------------|
| Bing CPC | $2.50+ | $1.70 |
| Paid competition | Multiple advertisers | ZERO advertisers |
| Monthly search volume | 6,100 | 1,100 |
| Target audience | 55+ retirement savers | SAME audience |
| Augusta payout | Standard | SAME payout |

Silver IRA ads are 50% cheaper and have zero competition on Bing. The audience is identical — 55+ Americans rolling over retirement savings. Augusta handles both gold and silver IRAs. The lead payout is the same.

**Strategy:** Drive cheap silver traffic → educate on precious metals → convert to Augusta gold+silver lead.

### What's DONE (Data Layer)
- [x] `metal_preference` field in lead API, Supabase type, Augusta payload
- [x] Augusta specialist notes include metal preference
- [x] Lead enrichment supports metal preference updates
- [x] Bing Ads campaign plan saved in `.ralph/BING-ADS-CAMPAIGN-PLAN.md`

### What NEEDS TO BE BUILT (UI — Priority Order)

#### 1. Update Quiz with Metal Preference (CRITICAL)
**File:** Quiz component (find via `src/data/quiz-routing.ts` — quiz already has `silver-ira` product type)
**Change:** When user selects `gold-ira` (now labeled "Precious Metals IRA"), add a follow-up question: "Which metals interest you most?" → Gold / Silver / Both
**Pass:** `metalPreference` to lead form submission
**Why:** Augusta needs to know what to pitch on the call. "Both" is the ideal answer.

The quiz routing already maps gold-ira and silver-ira to the same companies (Augusta, Goldco, etc.) — just need the UI question.

#### 2. Update /get-started Funnel (CRITICAL)
**File:** `src/app/get-started/page.tsx` (client component with multi-step funnel)
**Current steps:** Savings → Concern → Result → Contact
**New steps:** Savings → **Metal Preference** → Concern → Result → Contact
**Also:** Accept `?product=silver` or `?metal=silver` URL param to pre-fill the metal step (for Bing ad traffic)
**Pass:** `metalPreference` to lead form submission

The funnel already accepts `?savings=` and `?concern=` URL params for pre-filling. Add `?metal=` param.

#### 3. Change "Gold IRA Kit" CTAs to "Precious Metals" (IMPORTANT)
**Files to update:**
- All CTA components that say "Gold IRA Kit" → "Precious Metals IRA Kit" or "Gold & Silver IRA Kit"
- OR make it dynamic: if user came from silver page/ad, show "Silver IRA Kit"; otherwise show "Gold & Silver IRA Kit"
- Check: `src/components/cta/`, `src/components/lp/LeadCaptureButton.tsx`, navbar CTA, footer CTA
- The `AFFILIATE_LINKS` in `src/config/affiliates.ts` already has `augustaSilver` and `augustaSilverMid` variants

**Approach:** Use URL param or localStorage to detect silver intent. If `?metal=silver` or referrer is a silver page, show silver-specific CTA. Default to "Precious Metals" (covers both).

#### 4. Build Silver-Specific Bing Ads Landing Pages (IMPORTANT)
**Create new pages:**
- `/lp/silver-ira-kit` — Silver-focused landing page with lead form, silver stats, silver benefits
- `/lp/silver-retirement` — "Protect Your Retirement With Silver" emotional landing page
- `/lp/precious-metals-quiz` — Quiz entry point branded for precious metals (not just gold)

**Template:** Base on existing LP pages in `src/app/lp/` directory (17 landing pages already exist, including `/lp/augusta-silver`, `/lp/silver-ira`, `/lp/silver-ira-rollover`)

**Key requirements:**
- Each LP must have LeadCaptureButton or inline form
- Forms must pass `metalPreference: "silver"` (or "both") to submit-lead API
- UTM params from Bing ads must flow through
- Must include Augusta CTA (silver variant)

#### 5. Add Supabase Column (QUICK)
**Action:** Add `metal_preference` column to `leads` table in Supabase
**Type:** text, nullable
**Values:** 'gold', 'silver', 'both'
**How:** Run SQL in Supabase dashboard: `ALTER TABLE leads ADD COLUMN metal_preference text;`

---

## Bing Ads Campaign Plan (Launch After UI Changes)

Full plan saved at: `.ralph/BING-ADS-CAMPAIGN-PLAN.md`

### Quick Summary
- **1 campaign, 3 ad groups** (Silver IRA arbitrage, Cheap Gold, Fear/Protection)
- **Budget:** $500-1,000/month ($17-33/day)
- **Target CPA:** $50/lead
- **Silver IRA keywords:** $1.70 CPC, zero competition
- **Cheap gold keywords:** $0.07-$0.45 CPC (anomalies competitors miss)
- **Fear keywords:** $0.50-$1.90 CPC (emotional triggers for 55+)
- **LinkedIn targeting:** Blue-collar job titles (Bing's unique advantage)
- **Expected:** 20-35 leads/month at $29-50 CPL

### Campaign Setup Steps (after UI is ready)
1. Create Microsoft Advertising account
2. Install UET tag on site
3. Set up conversion goals
4. Create campaign + 3 ad groups
5. Add keywords + negatives
6. Write 7 RSAs (ad copy in plan)
7. Configure audience targeting
8. Launch at 50% budget

---

## Current Ahrefs Data (as of 2026-03-23)

| Metric | Value |
|--------|-------|
| Domain Rating | 0 |
| Organic Keywords | 3 (all position 50+) |
| Organic Traffic | 0 |
| Real Backlinks | 0 (6 spam domains disavowed) |

### Actual Traffic Sources (GA4, 28 days)
| Source | Sessions | Real? |
|--------|----------|-------|
| Direct (SG/CN bots) | ~1,600 | No |
| Bing Organic | ~1,700 | Yes |
| Google Organic | 2 clicks | Yes but dead |
| AI referrals (Copilot, ChatGPT, Claude) | ~87 | Yes, best engagement |

### Top Pages by Real Traffic
1. `/` (homepage) — 303 views
2. `/silver-squeeze/comex-silver-inventory` — 169 views, 1m52s engagement
3. `/learn/voya-401k-rollover` — 93 views
4. `/learn/60-day-ira-rollover-rule` — 84 views
5. `/tools/calpers-retirement-calculator` — 74 views

---

## Automated Monitoring Already Running (6 tasks from earlier sessions)
| Task | Schedule |
|------|----------|
| `weekly-seo-scorecard` | Mon 9:24am |
| `weekly-backlink-monitor` | Wed 9:55am |
| `weekly-competitor-gap` | Thu 9:43am |
| `x-engagement-morning` | M-F 9:20am |
| `x-engagement-afternoon` | M-F 2:17pm |
| `x-brand-monitor` | M-F 11:39am |

**Total: 12 scheduled tasks running.**

---

## Key Files Quick Reference

| Purpose | Path |
|---------|------|
| Lead API (metal_preference added) | `src/app/api/submit-lead/route.ts` |
| Augusta webhook (metal_preference added) | `src/lib/augusta.ts` |
| Lead type (metal_preference added) | `src/lib/supabase.ts` |
| Quiz routing | `src/data/quiz-routing.ts` |
| Get-started funnel | `src/app/get-started/page.tsx` |
| Funnel types | `src/types/funnel.ts` |
| Affiliate links | `src/config/affiliates.ts` |
| Lead capture button | `src/components/lp/LeadCaptureButton.tsx` |
| Existing silver LPs | `src/app/lp/augusta-silver/`, `src/app/lp/silver-ira/` |
| Silver IRA hub | `src/app/silver-ira/page.tsx` |
| Noindex news list | `src/data/news-noindex.ts` |
| Bing Ads plan | `.ralph/BING-ADS-CAMPAIGN-PLAN.md` |
| Authority Rescue Plan | `.ralph/AUTHORITY-RESCUE-PLAN.md` |
| Outreach templates | `scripts/outreach/outreach-templates.md` |
| Broken link targets | `scripts/outreach/broken-link-targets.json` |

---

## Execution Order for Next Session

1. **Add Supabase column** — `ALTER TABLE leads ADD COLUMN metal_preference text;` (5 min)
2. **Update quiz** — Add metal preference question after product selection (30 min)
3. **Update /get-started funnel** — Add metal preference step + URL param support (45 min)
4. **Update CTAs** — Change "Gold IRA Kit" to "Precious Metals IRA Kit" dynamically (30 min)
5. **Build silver landing pages** — 2-3 new LPs for Bing ad traffic (1-2 hours)
6. **Deploy + test** — Verify full flow: silver ad → silver LP → form → Supabase → Telegram → Augusta (30 min)
7. **Launch Bing Ads** — Follow plan in `.ralph/BING-ADS-CAMPAIGN-PLAN.md` (1 hour in browser)

**Estimated time:** 4-5 hours total

---

## Critical Rules (from CLAUDE.md)

- **Every page MUST include at least one Augusta CTA**
- **Always use `getTrackedLink()`** from `src/config/affiliates.ts`
- **TypeScript strict mode** — zero `any` types
- **Dark theme** consistency (slate-900, glass-morphism cards, amber accents)
- **Brand voice:** Plain English for 55+ blue-collar Americans. No Wall Street jargon.
- **Mobile-first** responsive design
- **Push to production** after every successful build (user preference)
