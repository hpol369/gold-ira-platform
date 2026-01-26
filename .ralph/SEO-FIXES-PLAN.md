# SEO Fixes & Tone of Voice Overhaul Plan

## AHREFS AUDIT SUMMARY (January 26, 2026)

**Health Score:** 80/100 (Good)
**Total Issues:** 625 (51 Errors, 271 Warnings, 303 Notices)

### Critical Issues Breakdown:

| Category | Issue | Count | Priority |
|----------|-------|-------|----------|
| ERROR | Orphan pages (no internal links) | 50 | 🔴 Critical |
| ERROR | Noindex page in sitemap | 1 | 🔴 Critical |
| WARNING | Open Graph tags incomplete | 826 | 🟠 High |
| WARNING | Meta description too long (>160) | 55 | 🟠 High |
| WARNING | Title too long (>60) | 35 | 🟠 High |
| WARNING | H1 tag missing | 5 | 🟠 High |
| NOTICE | Pages with only 1 internal link | 51 | 🟡 Medium |
| NOTICE | Mixed nofollow/dofollow links | 45 | 🟡 Medium |

---

## PHASE 1: CRITICAL ERRORS (Blocking SEO)

### P1-001: Fix Orphan Pages - Internal Linking
**Problem:** 50 pages have zero internal links pointing to them
**Solution:** Create internal linking system that automatically links related content

**Files to modify:**
- Create `src/components/seo/RelatedLinks.tsx` - Auto-generate related page links
- Update learn article pages to include related links
- Update guide pages to include related links
- Create footer "Popular Pages" section

**Orphan pages include:**
- `/learn/transamerica-401k-rollover`
- `/learn/paychex-401k-rollover`
- `/learn/wells-fargo-401k-rollover`
- `/learn/nationwide-401k-rollover`
- `/scenarios` (hub page!)
- Multiple calculator and learn pages

---

### P1-002: Fix Noindex Page in Sitemap
**Problem:** `/thank-you` page is noindex but in sitemap
**Solution:** Remove from sitemap OR remove noindex

**File:** `src/app/sitemap.ts`
**Action:** Exclude `/thank-you` from sitemap generation

---

## PHASE 2: HIGH PRIORITY WARNINGS

### P2-001: Fix Open Graph Tags (826 pages)
**Problem:** Most pages missing `og:image` and `og:url`
**Solution:** Create default OG image and add to layout metadata

**Files to modify:**
- `src/app/layout.tsx` - Add default OG tags
- Create `/public/og-default.jpg` (1200x630px)
- Update page metadata patterns across all pages

---

### P2-002: Fix Meta Descriptions Too Long (55 pages)
**Problem:** Meta descriptions exceed 160 characters
**Solution:** Shorten descriptions to 150-160 chars

**Pages affected:** (from CSV)
- `/tools/gold-ira-calculator` (198 chars)
- `/tools/rmd-calculator` (193 chars)
- `/tools/calpers-retirement-calculator` (186 chars)
- `/learn/why-401k-losing-money` (200 chars)
- And 51 more...

---

### P2-003: Fix Titles Too Long (35 pages)
**Problem:** Titles exceed 60 characters (Google truncates)
**Solution:** Shorten titles, remove "| Rich Dad Retirement" suffix

**Pages affected:**
- `/learn/is-401k-fdic-insured` (93 chars)
- `/learn/recession-proof-investments` (91 chars)
- `/learn/buy-rental-property-with-ira` (87 chars)
- And 32 more...

---

### P2-004: Fix Missing H1 Tags (5 pages)
**Problem:** Calculator pages missing H1 elements
**Solution:** Add proper H1 to calculator pages

**Pages affected:**
- `/tools/rmd-calculator`
- `/tools/fees-comparison`
- `/tools/fers-supplement-calculator`
- `/tools/fers-annuity-calculator`
- `/tools/tsp-calculator`

---

## PHASE 3: MEDIUM PRIORITY (Internal Linking)

### P3-001: Improve Pages with Only 1 Internal Link
**Problem:** 51 pages have only one link pointing to them
**Solution:** Add contextual links from related content

**Approach:**
- Create "Related Articles" component for all content pages
- Add cross-links in article bodies
- Create topic hub pages that link to related content

---

### P3-002: Fix Mixed Nofollow/Dofollow Links
**Problem:** 45 pages have inconsistent link attributes
**Solution:** Audit and standardize internal links (all should be dofollow)

---

## PHASE 4: TONE OF VOICE OVERHAUL

### P4-001: Create Tone of Voice Guide
**Target Audience:** 55+ blue collar workers with $500k-1M in 401k
**Characteristics:**
- Worked 30+ years (factory, trades, union, government)
- Physically demanding jobs - CAN'T work until 70
- Saved consistently but worried it's not enough
- Not "late starters" - they HAVE savings
- Skeptical of financial industry
- Value straight talk, no BS

**Current Issues:**
- Too generic ("Whether you're 50, 55, or 60...")
- Missing job-specific language
- Missing acknowledgment of physical work limitations
- Too much "late starter" framing when audience HAS saved

**New Voice Guidelines:**
```
DON'T: "It's never too late to start saving!"
DO: "You've worked hard for 30 years. Let's make sure
    the market doesn't take it away in your final stretch."

DON'T: Generic examples
DO: "Mike, a retired steelworker from Ohio, added $127k..."

DON'T: "Work until 70" advice
DO: "If your body says it's time to retire at 62, here's how
    to make your savings last without working another decade."
```

---

### P4-002: Rewrite Key Landing Pages
**Priority pages to rewrite:**
1. Homepage hero copy
2. `/learn/too-late-to-save-retirement`
3. `/what-is-a-gold-ira`
4. `/guide/gold-ira-guide`
5. `/best-gold-ira-companies`

---

### P4-003: Update Article Templates
**Changes needed:**
- Add job-specific examples (teacher, nurse, factory worker, trucker)
- Add "physical job" retirement considerations
- Change "late starter" framing to "wealth protection" framing
- Add union pension integration advice
- Add "$500k-1M specific" advice sections

---

## EXECUTION ORDER

```
PHASE 1 (Critical):     P1-001 + P1-002 in parallel
PHASE 2 (High):         P2-001 → P2-002 → P2-003 → P2-004
PHASE 3 (Medium):       P3-001 + P3-002 in parallel
PHASE 4 (Tone):         P4-001 → P4-002 → P4-003
```

**Total Tasks:** 9
**Estimated Agents:** 9-12 (some tasks need multiple agents)

---

## VERIFICATION CHECKLIST

- [ ] Build passes: `npm run build`
- [ ] No orphan pages in Ahrefs re-crawl
- [ ] All pages have complete OG tags
- [ ] All meta descriptions < 160 chars
- [ ] All titles < 60 chars
- [ ] All pages have H1 tags
- [ ] Internal linking improved
- [ ] Tone of voice matches target audience

---

## AGENT ASSIGNMENTS

| Task | Agent Description |
|------|-------------------|
| P1-001 | Fix orphan pages internal linking |
| P1-002 | Fix sitemap noindex issue |
| P2-001 | Fix Open Graph tags site-wide |
| P2-002 | Fix meta descriptions too long |
| P2-003 | Fix titles too long |
| P2-004 | Fix H1 missing on calculators |
| P3-001 | Create RelatedLinks component |
| P4-001 | Create tone of voice guide |
| P4-002 | Rewrite key landing pages |
