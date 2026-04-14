# Google Recovery Plan: richdadretirement.com

**Date:** 2026-04-14
**Status:** CRITICAL - Site flagged for scaled content abuse
**Current state:** 82 indexed / 2,584 total pages (3.2% index rate), 7 total organic clicks in 3 months

---

## DIAGNOSIS

Google's systems have identified richdadretirement.com as a **scaled content abuse** site. The evidence:

1. **96.8% non-indexation rate** — Google is actively refusing to index the vast majority of pages
2. **Traffic died after February 2026** — Aligns with Google's continued enforcement of March 2024+ HCU/core updates
3. **Publishing velocity spike** — 1,230 AI-generated news articles published in a short window triggers Google's "Firefly" velocity detection
4. **Template fingerprints** — SpamBrain detects identical page structures across hundreds of pages

### Root Causes (Ranked by Severity)

| # | Issue | Pages Affected | Severity |
|---|-------|---------------|----------|
| 1 | AI-generated news articles with no real authors | 1,230 | CRITICAL |
| 2 | Templated city/state local pages | 550+ | CRITICAL |
| 3 | Keyword-clustered learn articles (same topic split 5-10 ways) | 381 | HIGH |
| 4 | Algorithmic company comparison permutations | 380+ | HIGH |
| 5 | Templated audience pages ("best gold IRA for X") | 26 | MEDIUM |
| 6 | Silver hub pages (repetitive structure) | 93 | MEDIUM |
| 7 | Bidirectional comparison duplicates in sitemap | ~190 | MEDIUM |
| 8 | News noindex list not excluded from sitemap | ~50+ | LOW |

---

## RECOVERY STRATEGY

Recovery requires proving to Google that the site has **changed its process**, not just edited pages. Google's systems need to see:
- Massive reduction in low-value page count
- Remaining pages demonstrate genuine expertise
- Publishing pattern shifts from volume to quality
- Clear E-E-A-T signals on every indexed page

**Expected timeline:** 3-6 months after implementing changes, tied to next core update

---

## PHASE 1: EMERGENCY TRIAGE (Week 1-2)
**Goal:** Stop the bleeding. Remove the worst offenders from Google's view immediately.

### 1.1 Noindex ALL AI-generated news articles
- Add `<meta name="robots" content="noindex, follow">` to every `/news/*` page
- Remove all `/news/*` URLs from sitemap.ts
- **Why:** These 1,230 pages are the single biggest red flag. AI-generated, no real author, rigid template, fake case studies. They alone could be causing a site-wide quality demotion.
- **Keep the pages live** for direct/social traffic, just hide from Google

### 1.2 Noindex ALL city pages
- Add noindex to every `/local/[state]/[city]` page (note: some already have this but are still in sitemap)
- Remove from sitemap.ts
- **Why:** 500+ pages with city names swapped into identical templates is textbook scaled content abuse

### 1.3 Noindex audience pages
- Noindex `/best-gold-ira-for/*` pages
- Remove from sitemap
- **Why:** 26 pages with identical template, just audience name swapped

### 1.4 Consolidate comparison duplicates
- Redirect `/compare/B-vs-A` to `/compare/A-vs-B` (alphabetical canonical)
- Remove duplicates from sitemap
- **Why:** Bidirectional comparisons create near-duplicate content

### 1.5 Clean the sitemap
- Target: Reduce sitemap from ~2,100 URLs to ~200-300 high-quality URLs
- Only include pages that have unique, substantial, expert content
- Remove all noindexed pages from sitemap (sitemap + noindex = mixed signal)

### 1.6 Fix robots.txt
- Add `Crawl-delay: 1` for non-Google bots
- Consider blocking `/local/` and `/best-gold-ira-for/` directories entirely

**After Phase 1, indexed-eligible pages should drop from ~2,100 to ~300**

---

## PHASE 2: CONTENT CONSOLIDATION (Week 2-4)
**Goal:** Merge thin/duplicate content into fewer, better pages.

### 2.1 Consolidate learn article clusters
Current: 75 clusters generating 381 articles, many targeting keyword variations of the same topic.

**Action:** Merge each cluster into 1-2 comprehensive articles instead of 5-10 thin ones.

Examples:
- 72t-sepp cluster: 10 articles → 1 definitive "72(t) SEPP Distribution Guide"
- Checkbook IRA cluster: 8 articles → 1 comprehensive guide
- Self-directed IRA cluster: merge overlapping articles

**Target:** 381 articles → ~80-100 substantial articles (1 per cluster + major subtopics)

Set up 301 redirects from old URLs to consolidated pages.

### 2.2 Consolidate silver hubs
Current: 93 pages across 9 silver hubs, many with thin/repetitive content.

**Action:**
- Keep the strongest 20-30 silver pages
- Merge thin sub-pages into their parent hub pages
- 301 redirect merged pages

### 2.3 State pages audit
Current: 50 state pages with ~300-400 words of templated content.

**Action:**
- Keep only states with genuinely unique content (tax advantages, specific regulations)
- Add substantial unique content to top 10-15 states (CA, TX, FL, NY, etc.)
- Noindex or remove the remaining thin state pages

### 2.4 Rollover pages audit
Current: ~450 pages from account type × provider permutations.

**Action:**
- Keep 15 account type overview pages (401k, IRA, TSP, etc.)
- Keep 10-15 top provider pages
- Noindex the rest (every permutation of account × provider is thin)

---

## PHASE 3: QUALITY UPGRADE (Week 4-8)
**Goal:** Make remaining pages genuinely the best content on the internet for their topics.

### 3.1 Real author attribution
- Create real author pages with photos, credentials, LinkedIn profiles
- Assign specific authors to specific topic areas (not "Editorial Team" on everything)
- Add "Reviewed by [CPA/CFP name]" with real credentials
- **This is non-negotiable for E-E-A-T recovery**

### 3.2 Add original value to every remaining page
For each page that stays indexed, ensure it has at least ONE of:
- Original data/research not available elsewhere
- Expert quotes or interviews
- Unique analysis or calculator
- Real user case studies (not AI-fabricated "Patricia, 67")
- Original comparison methodology

### 3.3 Answer-first content structure
- First 2-3 sentences directly answer the page's core question
- Use FAQ schema with genuine questions (not keyword-stuffed)
- Add "Key Takeaways" box at top of long articles

### 3.4 Remove aggressive CTA density
- Reduce from 4-5 CTAs per page to 1-2 max
- Remove exit-intent popups (signals desperation, not authority)
- Make CTAs contextual, not interrupting

### 3.5 Editorial policy page
- Create a real editorial policy explaining content creation process
- Disclose AI assistance transparently ("AI-assisted research, human-edited and fact-checked")
- Link from every article

---

## PHASE 4: REBUILD TRUST (Week 8-16)
**Goal:** Signal to Google that this is now a quality-first site.

### 4.1 Slow, high-quality publishing cadence
- Stop daily AI news generation immediately
- Publish 2-3 genuinely researched articles per week max
- Each article must have: real author, original angle, expert review

### 4.2 Build real backlinks
- Guest posts on financial education sites
- HARO/Connectively responses from "Thomas Richardson"
- Create genuinely linkable assets (original research, calculators with unique data)

### 4.3 Google Search Console actions
- Use URL Removal tool for the worst offenders if they're still cached
- Submit updated sitemap
- Request re-crawl of key pages after improvements
- Monitor indexing status weekly

### 4.4 Consider a reconsideration request
- If there's a manual action in Search Console, file a reconsideration
- Document all changes made with before/after examples
- Show the process change, not just content changes

---

## PAGE BUDGET: BEFORE vs AFTER

| Category | Before | After (Target) |
|----------|--------|----------------|
| News articles | 1,230 | 0 indexed (keep for direct traffic) |
| Learn articles | 381 | ~80-100 |
| City pages | 500+ | 0 indexed |
| State pages | 50 | 10-15 |
| Company comparisons | 380+ | ~30-40 (top matchups only) |
| Audience pages | 26 | 0 indexed |
| Silver pages | 93 | 20-30 |
| Rollover pages | 450+ | 25-30 |
| Tools/calculators | 44 | 44 (these are fine - genuinely useful) |
| Guides | 22 | 22 |
| Core pages | 33 | 33 |
| **TOTAL** | **~2,100+** | **~280-350** |

---

## IMPLEMENTATION PRIORITY

```
WEEK 1:  Phase 1.1-1.5 (noindex + sitemap cleanup)     ← HIGHEST IMPACT
WEEK 2:  Phase 1.6 + Phase 2.1 (robots + learn merges)
WEEK 3:  Phase 2.2-2.4 (silver + state + rollover)
WEEK 4:  Phase 3.1-3.2 (authors + original value)
WEEK 5-6: Phase 3.3-3.5 (content structure + editorial)
WEEK 7-8: Phase 4.1-4.2 (publishing cadence + backlinks)
WEEK 8+: Phase 4.3-4.4 (GSC actions + monitoring)
```

---

## METRICS TO TRACK

- **Indexed pages** in GSC (target: steady increase of quality pages)
- **Impressions** (leading indicator of recovery)
- **Clicks per indexed page** (quality signal)
- **Crawl stats** in GSC (pages crawled per day, response codes)
- **Coverage report** — watch "Discovered but not indexed" decrease

---

## KEY PRINCIPLE

> Google's systems don't care if content is AI-generated or human-written.
> They care if it's **helpful, original, and created for people** rather than
> created to manipulate search rankings.
>
> The fix isn't "make AI content look more human."
> The fix is "publish fewer, genuinely better pages."

**280 excellent pages will outperform 2,100 thin ones every time.**
