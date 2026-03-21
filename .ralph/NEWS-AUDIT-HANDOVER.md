# News Article Audit — Handover Brief

## STATUS: Ready to Execute

**Date:** 2026-03-21
**Priority:** HIGH — SEO health risk

---

## THE PROBLEM

The news pipeline was running every 15 minutes, generating up to 4 articles per run = ~300 thin AI-generated articles per day. Over ~2 months this produced **9,306 articles** in `content/news/`.

Most are ~500-word rewrites of RSS feeds (Reuters, CNBC, Kitco, MarketWatch, etc.) with zero unique value. Google's Helpful Content system specifically targets this pattern.

### What We Already Fixed (this session)
- ✅ Cron schedule: `*/15 * * * *` → 3x daily (**NEEDS MANUAL GITHUB EDIT** — token lacks workflow scope)
- ✅ `maxArticlesPerRun`: 4 → 1
- ✅ `maxTokens`: 2000 → 4000 (deeper articles)
- ✅ `minimumScore`: 3 → 6 (higher relevance bar)
- ⚠️ **CRON CHANGE NOT PUSHED YET** — must edit `.github/workflows/daily-news.yml` directly in GitHub. Change line 6 from `*/15 * * * *` to three separate cron lines: `0 11 * * *`, `0 16 * * *`, `0 21 * * *`

### What Still Needs Doing (this task)
Audit and clean up the existing 9,306 articles.

---

## THE AUDIT TASK

### Phase 1: Assess the Damage
1. Count articles by month/week to understand volume over time
2. Sample 20-30 articles across different dates — assess quality, length, uniqueness
3. Check Google Search Console (if connected) for which news articles actually get impressions/clicks
4. Identify articles that are near-duplicates (same topic covered multiple times in a day)
5. Check if any news articles actually rank for anything in Google

### Phase 2: Triage Categories
Sort all 9,306 articles into:
- **KEEP** — Actually ranks, gets traffic, or covers genuinely important events (Fed decisions, gold price records, major policy changes)
- **NOINDEX** — Low quality but not harmful enough to delete. Add `<meta name="robots" content="noindex">` to prevent Google from wasting crawl budget
- **DELETE** — Near-duplicates, extremely thin (<300 words), or covering topics already better covered by learn articles

### Phase 3: Execute
- Noindex the NOINDEX pile (add metadata to news article template with a list/flag)
- Delete the DELETE pile (remove MDX files, update sitemap)
- Keep the KEEP pile as-is
- Update sitemap.ts to exclude noindexed articles

### Phase 4: Prevent Recurrence
- Consider adding a quality check to the pipeline (minimum word count, uniqueness score)
- Add a "publish gate" — articles go to review queue instead of auto-publishing
- Set `AUTO_PUBLISH` to `false` in the GitHub Action and review manually

---

## KEY FILES

| File | Purpose |
|------|---------|
| `content/news/*.mdx` | All 9,306 news articles |
| `content/news/.processed-urls.json` | Dedup tracker (URLs processed in last 7 days) |
| `scripts/news/config.ts` | Pipeline config (already updated) |
| `scripts/news/run-pipeline.ts` | Main pipeline runner |
| `scripts/news/score-relevance.ts` | Relevance scoring (minimumScore now 6) |
| `scripts/news/generate-article.ts` | Article generation via Anthropic |
| `.github/workflows/daily-news.yml` | Cron schedule (**NEEDS MANUAL EDIT**) |
| `src/app/sitemap.ts` | Sitemap generator (includes all news) |
| `src/app/news/[slug]/page.tsx` | News article template |
| `src/lib/news.ts` | News article loading/parsing |

---

## VOLUME BREAKDOWN (sample)

```
343 articles — Mar 2
308 articles — Mar 3
294 articles — Mar 9
273 articles — Mar 11
252 articles — Mar 18
238 articles — Mar 19
...
9,306 total articles
```

Average: ~200-300/day when pipeline was running at full speed.

---

## RISK ASSESSMENT

**Current risk level: MEDIUM-HIGH**

- Google has NOT penalized the site yet (based on traffic patterns)
- But 9,306 thin AI articles is a ticking time bomb
- The sooner we clean up, the better
- Proactive cleanup looks better to Google than waiting for a penalty

**Estimated effort:** 4-6 hours for full audit + cleanup

---

## DECISIONS NEEDED FROM OWNER

1. **How aggressive to be with deletion?** Conservative (noindex only) vs aggressive (delete 80%+)
2. **Is there GSC access?** Google Search Console data would tell us exactly which articles get traffic
3. **Do you want a review queue going forward?** Set `AUTO_PUBLISH=false` and review articles before they go live
4. **Keep the social posting (Twitter/Facebook)?** Currently tweets are auto-generated for news articles — if we reduce to 2-3/day, each tweet gets more engagement

---

## WHAT ELSE WAS DONE THIS SESSION

For context, here's everything shipped today (so the next session has full picture):

### Email System
- 28 email templates across 6 sequences — all reviewed, copy fixed
- "consultation" → "info call" across entire site (13 components + 28 emails + SMS)
- SMS system (Twilio) — wired in, waiting on A2P registration
- 3-touch call prep: instant + 4hr + Day 1 emails
- Preference center (pause/newsletter-only/unsubscribe)
- SMS missed-call follow-up on Day 3 check-in
- Mid-nurture false promise fixed (Goldco won't call)

### Conversion
- Quiz affiliate links fixed (was losing revenue on non-Augusta completions)
- Golden Circle WhatSection added to homepage
- A/B test live on AugustaCTA across 500+ pages
- Thank-you page dynamic messaging per lead tier

### Mobile UX
- 52+ orphan pages now have Navbar/Footer (via directory layouts)
- Bottom tab bar replacing hamburger menu (Facebook/WhatsApp pattern for 55+ audience)
- Mobile menu: Home, Tools, Learn (submenu), Reviews, Free Kit CTA

### SEO & Security
- HSTS header added
- 2 calculator pages got metadata
- Schema coverage verified at ~70%
- Footer link added for orphan hub page
- News pipeline scaled from 300/day → 2-3/day

### Pending
- ⏳ Twilio A2P registration (1-5 business days)
- ⏳ Cron schedule change (manual GitHub edit needed)
- ⏳ A/B test results (check in 2-4 weeks)
- ⏳ News article audit (THIS TASK)
