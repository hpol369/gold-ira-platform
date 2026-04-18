# Session 3 Handover — 2026-03-23

## CRITICAL CONTEXT: Read This First

This site has a **fundamental problem** that previous sessions missed:
- **DR 0** (zero domain rating)
- **3 indexed keywords**, all position 50+ (invisible)
- **90 pages indexed** out of 2,500+ (3.6% indexation rate)
- **2,323 pages "Discovered but not indexed"** — Google doesn't trust the content
- **7 total clicks from Google Search** in 3 months
- **All 6 referring domains are SEO spam** (seonexi.com, fiverr-affordable-seo-services.site, etc.) — zero real backlinks
- **955 weekly GA visitors are NOT from organic search** — they're from paid/direct/social

The site is essentially invisible to Google. Until this is fixed, everything else (email sequences, conversion funnels, admin dashboards) is wasted effort.

---

## What Sessions 2-3 Shipped

### Session 2 (previous)
- GEO optimization on 409 learn articles
- Metadata + schema on 62 pages
- 14 new content pages (comparisons, sub-guides)
- Internal linking (29 hub clusters)

### Session 3 (this session)

**SEO Content:**
- 6 new authority pages (gold-ira-rollover, is-gold-a-good-investment, how-does-a-gold-ira-work, is-a-gold-ira-a-good-idea, gold-ira-pros-and-cons, gold-ira-statistics)
- 3 existing page upgrades (gold-ira-fees, ira-approved-gold-coins, gold-ira-rules)

**Content Quality (THE BIG FIX):**
- Restored 1,242 deleted news articles (previous session deleted them → caused 404s)
- Stripped 4,738 formulaic AI phrases from all 1,359 articles
- Upgraded 46 Tier A articles with real data (IRS, SSA, BLS citations, comparison tables)
- Noindexed 123 Tier C articles (quality score < 40)
- Built quality scoring infrastructure (scripts/news/score-quality.ts)
- Fixed AI pipeline prompts for better future content

**Email System (complete rebuild):**
- 13-email content-nurture sequence (newsletter subscribers, 60 days)
- 11-email high-intent sequence (Augusta leads, 28 days)
- 7-email mid-nurture (Goldco, $25-50k leads)
- 7-email starter-nurture (Noble Gold, <$25k leads)
- 8 personalized email themes based on signup source
- Weekly digest (52 tips, gold price, top article)
- SMS reminder at 18h for high-intent leads

**Conversion Overhaul:**
- Newsletter capture on 381 learn pages
- Fixed homepage blank section (Framer Motion → FadeIn)
- Curated social proof ticker (25 entries)
- TrustBadgeBar, funnel testimonials, progress indicator
- Fact-checker byline, dynamic dates

**Admin Dashboard:**
- Compact pipeline display, humanized labels
- Duplicate lead detection, test filter
- Revenue pipeline funnel

**GSC Actions:**
- Sitemap resubmitted
- 6 priority pages submitted for indexing (gold-ira-pros-and-cons, is-gold-a-good-investment, gold-ira-rollover, how-does-a-gold-ira-work, gold-ira-statistics, best-gold-ira-companies)

---

## Current Ahrefs Data (as of 2026-03-23)

| Metric | Value |
|--------|-------|
| Domain Rating | 0 |
| Organic Keywords | 3 |
| Organic Traffic | 0 |
| Live Backlinks | 7 |
| Referring Domains | 6 (all SEO spam) |
| Real Backlinks | 0 |

### 3 Ranked Keywords
| Keyword | Position | Volume | URL |
|---------|----------|--------|-----|
| how much is life alert per month | 53 | 250 | /learn/life-alert-cost-per-month |
| can i lose my 401k if the market crashes | 67 | 300 | /guide/protect-401k-from-crash |
| tsp to gold ira | 96 | 80 | /guide/tsp-to-gold-ira-rollover |

### 6 Referring Domains (all spam/SEO services)
| Domain | DR | Dofollow | Notes |
|--------|-----|----------|-------|
| seo-backlink.agency | 71 | 0 | Spam |
| grow-your.website | 71 | 0 | Spam |
| primeseo.xyz | 71 | 0 | Spam |
| fiverr-affordable-seo-services.site | 70 | 0 | Spam |
| seodaro.com | 54 | 0 | Spam |
| seonexi.com | 11 | 0 | Spam |

---

## Google Search Console Data (as of 2026-03-23)

| Metric | Value |
|--------|-------|
| Indexed pages | 90 |
| Not indexed | 2,430 |
| "Discovered, not indexed" | 2,323 |
| "Crawled, not indexed" | 79 |
| 404 errors | 5 (should decrease after restore) |
| Duplicate without canonical | 11 |
| Redirects | 11 |
| Blocked by robots | 1 |
| Total clicks (3 months) | 7 |

---

## THE #1 PRIORITY: Backlink Acquisition

### Why Nothing Else Matters Until This Is Fixed

Google's ranking algorithm has two primary signals:
1. **Content quality** — we've fixed this (upgraded articles, schema, AnswerFirst)
2. **Authority (backlinks)** — we have ZERO real backlinks

Without backlinks, Google won't trust our content enough to index it, let alone rank it. The 2,323 "discovered but not indexed" pages are Google saying "I see your content but I don't trust your domain enough to show it to anyone."

### Backlink Strategy for Claude to Execute

**Phase 1: Foundation (Week 1-2) — Build Citation Links**

These are easy, free, and establish basic domain presence:

1. **Business directories** — Submit to:
   - Google Business Profile (financial education service)
   - Bing Places
   - Apple Maps Connect
   - BBB (if applicable)
   - Crunchbase
   - LinkedIn company page

2. **Industry directories** — Submit to:
   - FinancialAdvisor.com directory
   - RetirementLiving.com
   - Investopedia contributor program
   - Financial planning association directories

3. **Social profiles** (with links back to site):
   - X: @TheIRAAdvisor (already exists)
   - LinkedIn company page
   - YouTube channel (even if empty — create and link)
   - Reddit: u/TheIRAAdvisor (participate in r/retirement, r/personalfinance, r/GoldIRA)
   - Quora: Answer retirement questions with links to articles

**Phase 2: Content-Based Links (Week 2-4)**

4. **HARO / Connectively / Qwoted** — Sign up as a source for retirement/gold IRA topics. Respond to journalist queries. This is the #1 way to get high-DR backlinks.

5. **Guest posts** — Reach out to:
   - Retirement planning blogs
   - Personal finance blogs (MoneySavingExpert, Clark Howard, etc.)
   - Blue-collar-focused financial sites
   - Offer our /gold-ira-statistics page as a citation source

6. **Statistics outreach** — Our /gold-ira-statistics page was built specifically as a linkable asset. Outreach to:
   - Personal finance bloggers who cite gold data
   - Retirement planning content creators
   - Financial comparison sites
   - "Gold IRA statistics" is a data gap — no authoritative single page exists

7. **Broken link building** — Find gold IRA / retirement sites with broken outbound links. Offer our content as a replacement.

**Phase 3: Relationship-Based Links (Week 4-8)**

8. **Podcast appearances** — The IRA Advisor persona should pitch:
   - Retirement planning podcasts
   - Blue-collar finance podcasts
   - Precious metals / alternative investment podcasts
   - Offer unique data from our 1,359 article archive

9. **Content partnerships** — Find complementary (non-competing) sites:
   - Estate planning sites (we cover inheritance/widows)
   - Medicare/healthcare sites (we cover healthcare costs in retirement)
   - Tax planning sites (we cover RMDs, Roth conversions, IRA rules)

10. **Forum participation** — Genuine, helpful participation (not spam):
    - Reddit r/retirement, r/personalfinance, r/GoldIRA
    - Bogleheads forums
    - Early-retirement.org forums

**Phase 4: Automated Monitoring (Ongoing)**

11. **Set up scheduled tasks** for:
    - Weekly Ahrefs backlink check (track new/lost links)
    - Weekly GSC indexing progress check
    - Monthly competitor backlink analysis
    - Daily HARO/Connectively monitoring for relevant queries

### What Claude Can Actually Automate

- **X/Twitter engagement** via @TheIRAAdvisor (Chrome extension) — engage with retirement/gold conversations, share articles
- **Weekly Ahrefs monitoring** — scheduled task checking DR, keywords, backlinks
- **Weekly GSC monitoring** — scheduled task checking indexation progress
- **Content pipeline** — daily news articles with improved quality
- **HARO monitoring** — daily check for relevant journalist queries
- **Reddit monitoring** — find relevant threads to contribute to

### What Requires Human Action

- Business directory submissions (need real business address, phone)
- HARO responses (journalist will verify human)
- Podcast pitching (relationship-based, needs human voice)
- Guest post outreach (editors will verify)
- Forum participation (needs authentic human voice)

---

## Technical State Summary

### Key Files Modified This Session
| Purpose | Path |
|---------|------|
| Email sequences | src/lib/email-sequences.ts |
| Email templates | src/lib/email-templates.ts |
| Email content blocks | src/lib/email-content-blocks.ts |
| Email topic resolver | src/lib/email-topic-resolver.ts |
| Email queue | src/lib/email-queue.ts |
| SMS functions | src/lib/sms.ts |
| News quality scorer | scripts/news/score-quality.ts |
| Formulaic phrase cleaner | scripts/news/clean-formulaic.ts |
| Quality scores | scripts/news/quality-scores.json |
| Noindex list | src/data/news-noindex.ts |
| News page template | src/app/news/[slug]/page.tsx |
| Get-started funnel | src/app/get-started/page.tsx |
| Homepage hero | src/components/home/GoldenCircle/WhySection.tsx |
| AuthorBox | src/components/guide/AuthorBox.tsx |
| SocialProofTicker | src/components/widgets/SocialProofTicker.tsx |
| Admin leads | src/app/admin/leads/page.tsx |
| Admin dashboard | src/app/admin/dashboard/page.tsx |

### Content Stats
| Content Type | Count |
|--------------|-------|
| News articles (total) | 1,359 |
| News articles (noindexed) | 123 |
| News articles (Tier A upgraded) | 46 |
| Learn articles | 409 (79 clusters) |
| Static pages | 60+ |
| Calculator tools | 43 |
| Total site pages | ~2,500+ |

### Email Sequences
| Sequence | Emails | Duration | Trigger |
|----------|--------|----------|---------|
| content-nurture | 13 | 60 days | Newsletter signup |
| high-intent | 11 | 28 days | $50k+ lead |
| mid-nurture | 7 | 28 days | $25-50k lead |
| starter-nurture | 7 | 28 days | <$25k lead |
| weekly-digest | 1/week | Forever | Post-sequence |

---

## Mistakes Made This Session (Be Warned)

1. **Previous session deleted 1,242 indexed articles** claiming it would help SEO. It created 1,242 404s that actively damaged the site. NEVER delete indexed URLs without redirects.

2. **Spent 2 days on email/conversion/admin** before checking GSC. The site has 7 total clicks from Google — optimizing conversion is pointless without traffic.

3. **Built features for leads that don't exist** — email nurture sequences, admin dashboard, quiz improvements — all for a site with 0 leads/month from organic.

### Lesson for Next Session
**Check GSC and Ahrefs FIRST.** Understand the actual traffic and authority situation before building anything. The #1 priority is always: get indexed → get ranked → get traffic → THEN optimize conversion.

---

## Immediate Next Steps (Priority Order)

1. **Backlink acquisition** — Execute Phase 1 (directories + social profiles) immediately
2. **Monitor GSC** — Check if the 6 submitted pages get indexed within 1-2 weeks
3. **Submit more pages for indexing** — GSC allows ~10/day, submit our best pages daily
4. **Set up automated Ahrefs + GSC monitoring** as scheduled tasks
5. **X/Twitter engagement** — Start posting from @TheIRAAdvisor, engage with retirement community
6. **HARO signup** — Register as a source for retirement/gold IRA journalist queries
7. **Continue upgrading Tier B articles** — improve the remaining 1,190 articles gradually
