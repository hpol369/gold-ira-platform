# Sprint 7 — GEO Deepening: Answer-First + FAQ + Schema Across All High-Value Pages

**Date:** 2026-03-20
**Architect:** Cowork | **Dev Lead:** Claude Code
**Focus:** Systematically add GEO optimization (AnswerFirst, FAQSection, schema markup) to the 50 highest-value pages that currently have NONE.

---

## THE GAP

| GEO Component | Pages That Have It | Total Pages | Coverage |
|--------------|-------------------|-------------|----------|
| AnswerFirst | 11 | 340 | 3% |
| FAQSection | 1 | 340 | 0.3% |
| Schema markup | 23 | 340 | 7% |

**Translation:** 97% of our pages are invisible to AI models. When someone asks ChatGPT "what are Gold IRA fees?" or Perplexity "best Gold IRA companies," our pages don't have the structured, answer-first format that AI models prefer to cite. This sprint fixes that — starting with the 50 pages that drive the most commercial value.

---

## STRATEGY: TIERED GEO PASS

Not all pages deserve equal effort. We tier by commercial intent and traffic potential:

### Tier A — FULL GEO TREATMENT (15 pages)
These are the money pages. Full AnswerFirst paragraph, 5 contextual FAQs with schema, Article/Review schema, breadcrumbs.

### Tier B — STANDARD GEO (20 pages)
Important content pages. AnswerFirst paragraph, 3 FAQs with schema, Article schema.

### Tier C — SCHEMA ONLY (15 pages)
Lower-priority pages that still need machine-readable markup. Add Article/FAQPage schema and breadcrumbs, no content rewriting needed.

---

## TIER A: FULL GEO TREATMENT (15 Pages)

These pages need: AnswerFirst + 5 FAQs + full schema + breadcrumbs

### A1. Key Hub Pages (8 pages)

| # | Page | Target Query | Answer-First Opening |
|---|------|-------------|---------------------|
| 1 | `/what-is-a-gold-ira` | "what is a gold IRA" | "A Gold IRA is a self-directed Individual Retirement Account that holds physical gold, silver, platinum, or palladium instead of paper assets like stocks and bonds. It offers the same tax advantages as a traditional IRA — tax-deferred growth or tax-free withdrawals (Roth) — but with the added security of tangible precious metals stored in an IRS-approved depository." |
| 2 | `/best-gold-ira-companies` | "best gold IRA companies 2026" | "The best Gold IRA companies in 2026 are Augusta Precious Metals (#1 — zero fees for 10 years, $50k minimum), Noble Gold (#2 — lowest minimum at $2,000), and Goldco (#3 — best customer service). We analyzed 20+ companies across fees, BBB ratings, complaint history, and customer reviews." |
| 3 | `/gold-ira-rules` | "gold IRA rules" | "Gold IRA rules require that metals be at least 99.5% pure (.995 fineness), stored in an IRS-approved depository (not at home), and held by a licensed custodian. Contribution limits for 2026 are $7,000 ($8,000 if 50+). Withdrawals before 59½ incur a 10% penalty plus income tax." |
| 4 | `/best-silver-ira-companies` | "best silver IRA companies" | "The best Silver IRA companies in 2026 are Augusta Precious Metals (widest silver selection, $50k min), Noble Gold (lowest minimum at $2,000), and American Hartford Gold (price match guarantee, $10k min). Silver must be .999 fine to qualify for an IRA." |
| 5 | `/why-gold` | "why invest in gold for retirement" | "Gold protects retirement savings because it moves inversely to stocks and the dollar. During the 2008 financial crisis, gold gained 25.5% while the S&P 500 lost 37%. Central banks bought 1,037 tons of gold in 2023 alone — the third consecutive year of record purchases — signaling that institutions see gold as essential protection against currency devaluation." |
| 6 | `/faq` | "gold IRA FAQ" | Direct Q&A format — already structured for GEO. Add FAQPage schema. |
| 7 | `/scams` | "gold IRA scams" | "The most common Gold IRA scams include home storage schemes (illegal — IRS requires approved depositories), excessive premiums (15%+ over spot price), bait-and-switch from numismatic coins, high-pressure sales tactics, and fake reviews. Here are the red flags to watch for and how to verify a company is legitimate." |
| 8 | `/rollover` | "gold IRA rollover" | "A Gold IRA rollover transfers funds from your existing 401(k), IRA, TSP, or other retirement account into a self-directed IRA that holds physical gold. Direct rollovers are 100% tax-free with zero penalties. The process takes 2-3 weeks and your current custodian handles the transfer." |

### A2. Review Pages (5 pages — highest commercial intent)

| # | Page | Target Query | Schema Type |
|---|------|-------------|-------------|
| 9 | `/reviews/augusta-precious-metals` | "Augusta Precious Metals review" | Review + AggregateRating + Organization |
| 10 | `/reviews/noble-gold` | "Noble Gold review" | Review + AggregateRating + Organization |
| 11 | `/reviews/goldco` | "Goldco review" | Review + AggregateRating + Organization |
| 12 | `/reviews/american-hartford-gold` | "American Hartford Gold review" | Review + AggregateRating + Organization |
| 13 | `/reviews/birch-gold` | "Birch Gold review" | Review + AggregateRating + Organization |

**Each review needs:**
- AnswerFirst: "Augusta Precious Metals is rated 4.9/5 based on 1,000+ verified reviews. They're our #1 pick for investors with $50,000+ due to their education-first approach, zero fees for up to 10 years, and A+ BBB rating with zero complaints in 7+ years."
- 5 FAQs: "Is Augusta Precious Metals legit?", "What are Augusta's fees?", "What is Augusta's minimum investment?", "How long does Augusta setup take?", "Is Augusta better than Goldco?"
- Review schema with rating, author, datePublished
- AggregateRating schema with reviewCount

### A3. Comparison Pages (2 pages)

| # | Page | Target Query |
|---|------|-------------|
| 14 | `/compare` | "compare gold IRA companies" |
| 15 | `/compare/augusta-vs-goldco` (or highest-traffic comparison) | "Augusta vs Goldco" |

**Each comparison needs:**
- AnswerFirst with direct comparison verdict
- ItemList schema
- 3-5 comparison FAQs

---

## TIER B: STANDARD GEO (20 Pages)

These need: AnswerFirst + 3 FAQs + Article schema

### B1. Guide Pages Without AnswerFirst (12 pages)
The following guide pages exist but DON'T have AnswerFirst yet:

```
/guide/gold-ira-rollover-guide
/guide/best-gold-ira-for-seniors
/guide/gold-vs-silver-ira
/guide/ira-contribution-limits-2026
/guide/roth-gold-ira
/guide/gold-ira-storage-options
/guide/gold-ira-custodians
/guide/gold-ira-tax-advantages
/guide/how-to-buy-gold
/guide/gold-backed-ira
/guide/precious-metals-ira
/guide/gold-ira-vs-traditional-ira
```

Claude Code should verify which of these actually exist, then add AnswerFirst + 3 FAQs + schema to each.

### B2. High-Value Learn Static Pages (8 pages)

```
/learn/gold-ira-scams (already has great content — needs GEO wrap)
/learn/gold-ira-tax-rules
/learn/gold-ira-benefits
/learn/recession-proof-investments
/learn/stock-market-crash-protection
/learn/is-silver-a-good-investment
/learn/home-storage-gold-ira
/learn/ira-approved-gold-coins
```

---

## TIER C: SCHEMA ONLY (15 Pages)

Add Article + BreadcrumbList schema to these pages. No content changes, just structured data injection.

```
/learn/safe-haven-investments
/learn/why-401k-losing-money
/learn/is-my-money-safe-in-bank
/learn/is-401k-fdic-insured
/learn/sequence-of-returns-risk
/learn/retirement-planning-mistakes
/learn/too-late-to-save-retirement
/learn/indirect-vs-direct-rollover
/learn/precious-metals-ira-rules
/learn/checkbook-ira
/learn/checkbook-ira-rules
/learn/self-directed-ira-gold
/learn/self-directed-roth-ira
/learn/bitcoin-ira
/learn/platinum-ira
```

---

## IMPLEMENTATION APPROACH

### For Tier A (hub + review pages) — Manual per page
Each Tier A page is unique and needs a custom AnswerFirst paragraph and custom FAQs. Claude Code should:
1. Read the existing page content
2. Write an answer-first paragraph that directly answers the primary search query
3. Write 5 FAQs based on real People Also Ask queries
4. Add SchemaScript components with appropriate schema types
5. Add Breadcrumbs component

### For Tier B (guides + learn statics) — Semi-templated
These follow a pattern. Claude Code should:
1. Create a data file with answer-first paragraphs and FAQs per page
2. Add AnswerFirst + FAQSection + schema to each page using the data

### For Tier C (schema only) — Automated
Just inject SchemaScript + Breadcrumbs. No content changes. Quick pass.

### For Dynamic [slug] Route (381 articles)
The `src/app/learn/[slug]/page.tsx` dynamic route already renders for 381 articles. Check if it already has:
- SchemaScript with Article schema → if not, add it (applies to all 381 at once)
- FAQSection → add if article data includes faqs
- AnswerFirst → check if article data structure supports it

**This is the biggest single-file win** — one edit to `[slug]/page.tsx` can add schema to 381 pages simultaneously.

---

## FAQ DATA STRUCTURE

Create a central FAQ data file that can be imported per page:

**File:** `src/data/faqs/index.ts`

```typescript
export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: Record<string, FAQ[]> = {
  "what-is-a-gold-ira": [
    { question: "Is a Gold IRA a good investment?", answer: "A Gold IRA can be a good investment for diversification and inflation protection. Gold has historically maintained purchasing power — $100 of gold in 1971 would be worth over $5,000 today. However, gold doesn't pay dividends and has storage costs. Most advisors recommend allocating 5-15% of your portfolio to precious metals." },
    { question: "What is the minimum investment for a Gold IRA?", answer: "Minimum investments vary by company: Augusta Precious Metals requires $50,000, Goldco requires $25,000, American Hartford Gold requires $10,000, and Noble Gold has the industry's lowest at $2,000." },
    // ... 3 more FAQs
  ],
  "best-gold-ira-companies": [ /* ... */ ],
  // etc.
};
```

---

## REVIEW SCHEMA TEMPLATE

For company review pages, use this Review + AggregateRating schema:

```typescript
import { reviewSchema, aggregateRatingSchema } from "@/lib/schema";

// In the review page:
<SchemaScript schema={reviewSchema({
  name: "Augusta Precious Metals",
  ratingValue: 4.9,
  reviewCount: 1247,
  author: "Thomas Richardson",
  datePublished: "2026-01-15",
  description: "Comprehensive review of Augusta Precious Metals...",
})} />
```

Claude Code needs to check if `reviewSchema` and `aggregateRatingSchema` exist in `src/lib/schema.ts`. If not, add them.

---

## EXECUTION ORDER

```
PHASE 1: Dynamic [slug] route (biggest bang — 381 pages at once)
  1. Add Article schema to learn/[slug]/page.tsx
  2. Add BreadcrumbList schema
  3. Check if FAQSection can be auto-rendered from article data

PHASE 2: Tier A hub pages (8 pages)
  4. Create FAQ data for 8 hub pages
  5. Add AnswerFirst + FAQSection + schema to each

PHASE 3: Tier A review pages (5 pages)
  6. Add Review + AggregateRating schema
  7. Add AnswerFirst + 5 FAQs per review
  8. Add Breadcrumbs

PHASE 4: Tier A comparison pages (2 pages)
  9. Add ItemList schema + FAQs

PHASE 5: Tier B guide + learn pages (20 pages)
  10. Add AnswerFirst + 3 FAQs + Article schema

PHASE 6: Tier C schema-only pass (15 pages)
  11. Add Article + Breadcrumbs schema only

PHASE 7: Verification
  12. npm run build — zero errors
  13. Validate schema with Google Rich Results Test (spot check 5 pages)
  14. Verify FAQSection renders with proper JSON-LD
```

---

## EXPECTED IMPACT

| Metric | Before Sprint 7 | After Sprint 7 |
|--------|-----------------|----------------|
| Pages with AnswerFirst | 11 | 46+ |
| Pages with FAQSection | 1 | 50+ |
| Pages with schema markup | 23 | 430+ (381 dynamic + 50 static) |
| GEO coverage (% of pages) | 3% | ~85% |
| Pages citeable by AI models | ~10 | ~400+ |

---

## CONTENT QUALITY STANDARD FOR ANSWER-FIRST

Every AnswerFirst paragraph must:
- Directly answer the primary search query in the first sentence
- Include a specific number, stat, or fact (not vague generalizations)
- Be 2-4 sentences maximum
- Be self-contained (makes sense without reading the rest of the page)
- Include the primary keyword naturally
- Use present tense and active voice

**Good:** "A Gold IRA costs $200-$300 per year in fees, including storage ($100-150/year), custodian fees ($50-100/year), and a one-time setup fee ($50-100). Augusta Precious Metals waives fees for up to 10 years on qualifying accounts."

**Bad:** "In this comprehensive guide, we'll explore everything you need to know about Gold IRA fees and help you understand the costs involved in setting up and maintaining your precious metals retirement account."

---

RALPH_STATUS:
- PHASE: Sprint 7 (GEO Deepening)
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Research + plan done
- BLOCKERS: Sprint 6 needs to be pushed to main first
