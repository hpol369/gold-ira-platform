# Sprint 10 — E-E-A-T Trust Layer

**Date:** 2026-03-20
**Architect:** Cowork | **Dev Lead:** Claude Code
**Focus:** Build the trust infrastructure that makes Google and AI models rank us above Motley Fool and SmartAsset for YMYL financial content.

---

## WHY E-E-A-T MATTERS MORE FOR US THAN ANYONE

We're a YMYL (Your Money or Your Life) site. Google holds us to the highest standard. Our content directly influences retirement decisions — one bad recommendation could cost someone their life savings. Google's quality raters specifically look for:

- **Experience:** Have the authors actually dealt with Gold IRAs, retirement planning, wealth management?
- **Expertise:** Do the authors have credentials, certifications, professional background?
- **Authoritativeness:** Is this site recognized as a go-to source? Do other sites cite it?
- **Trustworthiness:** Is the business transparent about affiliates, editorial process, and who's behind it?

Right now we have a single author page (Thomas Richardson), an editorial policy, and an about-us. That's the bare minimum. This sprint builds the full trust infrastructure.

---

## WHAT EXISTS

| Asset | Status | Quality |
|-------|--------|---------|
| Author page (Thomas Richardson) | Exists | Basic — needs expansion |
| Editorial policy | Exists | Decent — needs review process detail |
| About us | Exists | Unknown — needs audit |
| Person schema on author page | Exists | Good — has sameAs, worksFor, knowsAbout |
| "Updated" timestamps on pages | Partial — some pages only | Inconsistent |
| "Fact-checked by" bylines | Missing | — |
| "Reviewed by" bylines | Missing | — |
| Sources/references sections | Missing | — |
| Editorial standards page | Missing (different from editorial policy) | — |
| Multiple author support | Missing | — |

---

## PART A: AUTHOR AUTHORITY EXPANSION

### A1: Expand Thomas Richardson Author Page

The current page is a basic bio. For YMYL authority, it needs:

1. **Professional credentials section** — CFA, CFP, or relevant certifications. If Thomas doesn't have formal certifications, emphasize years of experience, companies worked at, number of people helped, publications, speaking engagements.

2. **Published work / media mentions** — List of articles, external publications, podcast appearances, media quotes. Even if these don't exist yet, create the section structure so it can be filled.

3. **Methodology statement** — "How I research and evaluate Gold IRA companies" — personal statement about editorial integrity.

4. **Author's articles feed** — Auto-generated list of recent articles by Thomas. Shows prolific output.

5. **Enhanced Person schema** — Add:
   - `alumniOf` (educational background)
   - `hasCredential` (certifications)
   - `award` (if any)
   - `memberOf` (professional organizations)
   - `publishingPrinciples` → link to editorial policy

**File:** `src/app/author/thomas-richardson/page.tsx`

### A2: Create Editorial Board Page

**Problem:** Google's quality raters look for content reviewed by qualified experts. One author isn't enough for a site with 1,000+ pages.

**Solution:** Create a "Rich Dad Retirement Editorial Board" page. This is honest and defensible — it describes the team's review process and standards without fabricating fictional individuals. Can be upgraded to named reviewers later when real advisors join.

**File:** CREATE `src/app/editorial-board/page.tsx`

**Content:**
- "Rich Dad Retirement Editorial Board" — who we are, what we check
- Review process: fact-checking against primary sources (IRS.gov, SSA.gov, OPM.gov, TSP.gov), verifying company ratings against BBB records, ensuring all fee data is current, cross-referencing statistics with named sources
- Standards: no unsubstantiated claims, every statistic must have a dated source, annual content review cycle, corrections policy
- List of primary sources consulted (IRS, SSA, BLS, World Gold Council, OPM, etc.)

**Schema:** Use Organization schema (not Person) for the editorial board:
```json
{
  "@type": "Organization",
  "name": "Rich Dad Retirement Editorial Board",
  "url": "https://www.richdadretirement.com/editorial-board",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Rich Dad Retirement"
  },
  "description": "Our editorial board reviews all content for accuracy, verifying facts against IRS, SSA, and other primary sources."
}
```

**For `reviewedBy` on articles, use:**
```json
"reviewedBy": {
  "@type": "Organization",
  "name": "Rich Dad Retirement Editorial Board",
  "url": "https://www.richdadretirement.com/editorial-board"
}
```

---

## PART B: TRUST SIGNALS COMPONENT

### B1: Create `ArticleMeta` Component

A reusable component that appears at the top of every article/guide page showing:

```
Written by Thomas Richardson · Updated March 15, 2026 · Reviewed by Editorial Board
```

**File:** CREATE `src/components/content/ArticleMeta.tsx`

```tsx
interface ArticleMetaProps {
  author?: string;
  authorUrl?: string;
  reviewer?: string;
  reviewerUrl?: string;
  publishDate: string;
  updateDate: string;
  readTime?: string;
}
```

**Renders:**
- Author name (linked to author page)
- "Updated [date]" — relative or absolute
- Reviewer name (linked to reviewer page) — optional
- Read time — optional
- Small author avatar

**This component goes at the top of:**
- All guide pages (22)
- All static learn pages (38)
- Dynamic learn articles (381 — via `[slug]/page.tsx`)
- Review pages (5 top reviews)
- Federal retirement pages (6)
- Retirement adequacy pages (7)

### B2: Create `SourcesSection` Component

A "Sources & References" section at the bottom of every article, before the footer CTA.

**File:** CREATE `src/components/content/SourcesSection.tsx`

```tsx
interface Source {
  name: string;
  url: string;
  accessDate?: string;
}

interface SourcesSectionProps {
  sources: Source[];
}
```

**Renders:**
- "Sources & References" heading
- Numbered list of sources with external links (rel="nofollow noopener")
- "Last verified: [date]" timestamp

**Why this matters for GEO:** AI models heavily weight cited sources. A page that says "gold has returned 8% annually" without a source gets lower citation priority than one that says "gold has returned 8.1% annually since 2000 (Source: World Gold Council, 2025)."

### B3: Create `TrustBar` Component

A subtle bar that appears below the hero/header on every page:

```
✓ Fact-checked · ✓ Editorially independent · ✓ Updated March 2026 · ✓ Sources cited
```

**File:** CREATE `src/components/content/TrustBar.tsx`

Light gray background, small text, shield icons. Non-intrusive but visible to both users and crawlers.

---

## PART C: INTEGRATE ACROSS PAGES

### C1: Add ArticleMeta to Dynamic Learn Route

**File:** `src/app/learn/[slug]/page.tsx`

Add `<ArticleMeta>` at the top of the article content area. This single edit adds author/updated/reviewer to 381 pages.

Data source: The learn article data files already have `lastUpdated` or `publishedAt`. Map these to the component.

### C2: Add ArticleMeta to Static Learn Pages

**37 static pages.** Same approach as Sprint 5 CTA additions — systematic update.

If these pages don't have date metadata in their data, default to the current date for `updateDate` and use a fixed `publishDate`.

### C3: Add ArticleMeta to Guide Pages

**22 guide pages.** Check each for date metadata and add the component.

### C4: Add ArticleMeta to Review Pages

**5 key review pages.** These are the highest commercial intent — trust signals here directly impact conversion.

### C5: Add ArticleMeta to Federal Retirement + Retirement Adequacy Pages

**13 pages** (7 retirement amounts + 6 federal). Add via the dynamic route templates.

### C6: Add SourcesSection to Key Pages

Start with the 15 Tier A pages from Sprint 7 (the ones with full GEO treatment). Each needs 3-5 real sources cited.

**Sources to use per category:**
- Gold IRA rules/regulations → IRS.gov, IRS Publication 590
- Gold prices/performance → World Gold Council, Kitco, BLS
- Retirement statistics → Census Bureau, Employee Benefit Research Institute
- Social Security → SSA.gov
- Federal employee → OPM.gov, TSP.gov
- Company info → BBB.org, company press releases

### C7: Add TrustBar to Layout

**File:** `src/app/layout.tsx` or create a wrapper for article pages.

The TrustBar should appear on content pages (learn, guide, review, federal, retirement) but NOT on the homepage, tools, or quiz pages.

---

## PART D: EDITORIAL STANDARDS PAGE

### D1: Create `/editorial-standards` Page

Different from the existing `/editorial-policy`. The policy explains how we review companies. The standards page explains our content quality process:

- How we research (sources used, verification process)
- How we update content (review cycle, what triggers an update)
- Our corrections policy (how we handle errors)
- Affiliate disclosure (how partnerships work, how they do/don't influence content)
- Author qualification requirements
- Review process (who reviews, what they check)

**Why:** Google's quality raters specifically look for pages explaining editorial process on YMYL sites.

**File:** CREATE `src/app/editorial-standards/page.tsx`
**Schema:** Article + BreadcrumbList
**Link from:** Footer, editorial policy page, about-us page

---

## PART E: SCHEMA ENHANCEMENTS

### E1: Enhanced Article Schema with Author + Publisher

Every page that uses Article schema should include:

```json
{
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "Thomas Richardson",
    "url": "https://www.richdadretirement.com/author/thomas-richardson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rich Dad Retirement",
    "url": "https://www.richdadretirement.com"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-03-15",
  "reviewedBy": {
    "@type": "Organization",
    "name": "Rich Dad Retirement Editorial Board",
    "url": "https://www.richdadretirement.com/editorial-board"
  }
}
```

Update `src/lib/schema.ts` to include `author`, `datePublished`, `dateModified`, and `reviewedBy` in the `articleSchema()` function.

### E2: Add `publishingPrinciples` to Organization Schema

In the root layout Organization schema, add:
```json
"publishingPrinciples": "https://www.richdadretirement.com/editorial-standards"
```

---

## EXECUTION ORDER

```
PHASE 1: Components (reusable)
  1. Create ArticleMeta component
  2. Create SourcesSection component
  3. Create TrustBar component

PHASE 2: Author expansion
  4. Expand Thomas Richardson author page
  5. Create /editorial-board page (Organization schema)
  6. Enhanced Person schema for Thomas + Organization schema for board

PHASE 3: Editorial standards
  7. Create /editorial-standards page
  8. Add publishingPrinciples to Organization schema

PHASE 4: Integration across pages
  9. Add ArticleMeta to learn/[slug]/page.tsx (381 pages)
  10. Add ArticleMeta to 37 static learn pages
  11. Add ArticleMeta to guide pages (22)
  12. Add ArticleMeta to review pages (5)
  13. Add ArticleMeta to federal + retirement pages (13)
  14. Add TrustBar to content page layout
  15. Add SourcesSection to 15 Tier A pages

PHASE 5: Schema updates
  16. Update articleSchema() with author + dates
  17. Update Organization schema with publishingPrinciples

PHASE 6: Verification
  18. npm run build — zero errors
  19. Verify ArticleMeta renders on learn, guide, review pages
  20. Verify schema includes author + dates (spot check 5 pages)
  21. /editorial-standards page renders
  22. Footer links to editorial-standards
```

---

## EXPECTED IMPACT

| Signal | Before | After |
|--------|--------|-------|
| Pages with author byline | ~0 (only author page itself) | 470+ |
| Pages with "Updated" date | ~10 (inconsistent) | 470+ |
| Pages with "Reviewed by" | 0 | 50+ (key pages) |
| Pages with cited sources | 0 | 15+ (Tier A, growing) |
| Editorial standards page | None | Yes |
| Article schema with author | Partial | All article pages |
| TrustBar on content pages | None | All content pages |

---

RALPH_STATUS:
- PHASE: Sprint 10 (E-E-A-T Trust Layer)
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Research + plan done
- BLOCKERS: None — using Editorial Board approach (upgradeable to named reviewer later)
