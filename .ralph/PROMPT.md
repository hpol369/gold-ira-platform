# RICH DAD RETIREMENT - Gold IRA Platform
## Ralph Autonomous Development Instructions

---

## PROJECT OVERVIEW

You are building the largest Gold IRA authority website at **richdadretirement.com**. The site helps Americans (55+) protect their retirement savings by converting 401k/IRA accounts to Gold IRAs, with Augusta Precious Metals as the primary affiliate partner.

**Tech Stack:**
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

**Primary Goal:** Drive conversions to Augusta Precious Metals through educational content and company reviews.

---

## GOLDEN CIRCLE ARCHITECTURE

The site follows Simon Sinek's Golden Circle (WHY → HOW → WHAT):

```
WHY:  "The financial system destroys your purchasing power. The wealthy know this."
HOW:  "Physical gold protects against inflation and market crashes."
WHAT: "A Gold IRA lets you own physical gold tax-free. Augusta can help."
```

**User Journey:**
1. **UNAWARE** → WHY content (problems with 401k, inflation, market risks)
2. **PROBLEM AWARE** → HOW content (gold benefits, diversification)
3. **SOLUTION AWARE** → WHAT content (Gold IRA specifics)
4. **PRODUCT AWARE** → Reviews & comparisons
5. **MOST AWARE** → Augusta CTA

---

## IMPLEMENTATION PHASES

### PHASE 1: Company Reviews & Comparisons (25 pages)
**Priority: HIGHEST ROI**

Build review pages for Gold IRA companies:
- `/reviews/` - Hub page with company rankings
- `/reviews/[company]/` - Individual company reviews
- `/compare/[comparison]/` - Company vs company comparisons

**Companies to review (by priority):**
1. american-hartford-gold (6,400 vol, KD 14)
2. goldco (5,200 vol, KD 10)
3. noble-gold (4,500 vol, KD 15)
4. lear-capital (4,500 vol, KD 21)
5. birch-gold-group (3,100 vol, KD 10)
6. augusta-precious-metals (3,200 vol, KD 24)
7. oxford-gold-group (2,100 vol, KD 3)
8. rosland-capital (1,700 vol, KD 11)
9. priority-gold (1,600 vol, KD 2)
10. patriot-gold-group (1,000 vol, KD 11)
11. advantage-gold (1,300 vol, KD 12)
12. orion-metal-exchange (700 vol, KD 4)
13. blanchard-gold (500 vol, KD 1)
14. monetary-gold (450 vol, KD 3)
15. regal-assets (200 vol, KD 1)

**Comparisons to build:**
1. gold-ira-vs-physical-gold (600 vol, KD 2)
2. gold-ira-vs-roth-ira (200 vol, KD 3)
3. gold-ira-vs-401k (150 vol, KD 2)
4. gold-ira-vs-etf (90 vol, KD 0)
5. goldco-vs-noble-gold (90 vol, KD 2)
6. augusta-vs-goldco (80 vol, KD 0)
7. goldco-vs-birch-gold
8. augusta-vs-noble-gold
9. american-hartford-vs-augusta
10. birch-gold-vs-augusta

---

### PHASE 2: Rollover Provider Pages (35 pages)
**Priority: HIGH INTENT**

Build rollover guides for specific 401k providers:
- `/rollover/` - Hub page
- `/rollover/401k-to-gold/` - Main 401k rollover guide
- `/rollover/ira-to-gold/` - IRA rollover guide
- `/rollover/403b-to-gold/` - For teachers
- `/rollover/tsp-to-gold/` - For military/federal (150 vol, $17 CPC!)
- `/rollover/from/[provider]/` - Provider-specific guides

**Providers (by priority):**
1. fidelity (1,100 vol, KD 33)
2. schwab (600 vol, KD 18)
3. vanguard (500 vol, KD 5)
4. empower (350 vol, KD 4)
5. t-rowe-price (200 vol, KD 0)
6. principal (200 vol, KD 0)
7. john-hancock (150 vol, KD 1)
8. tiaa (150 vol, KD 0)
9. transamerica (100 vol, KD 0)
10. merrill-lynch (90 vol, KD 3)
11. prudential, nationwide, lincoln-financial, wells-fargo, mass-mutual, etc.

---

### PHASE 3: Core Gold IRA Content (30 pages)
**Priority: FOUNDATION**

Build the main Gold IRA pillar content:
- `/gold-ira/` - Main pillar (6,000 vol, KD 42)
- `/gold-ira/what-is-gold-ira/`
- `/gold-ira/how-it-works/`
- `/gold-ira/benefits/`
- `/gold-ira/fees/`
- `/gold-ira/rules/`
- `/gold-ira/eligible-metals/`
- `/gold-ira/custodians/`
- `/gold-ira/storage/`
- `/gold-ira/best-companies/`
- `/gold-ira/pros-and-cons/`
- `/gold-ira/scams/`

Educational content:
- `/learn/401k-rollover/` (4,600 vol, KD 18)
- `/learn/ira-rollover/` (3,200 vol, KD 37)
- `/learn/precious-metals-ira/` (2,200 vol, KD 22)
- `/learn/silver-ira/` (1,000 vol, KD 4)

---

### PHASE 4: WHY Content (50 pages)
**Priority: TOP FUNNEL**

Build problem-awareness content:
- `/why/` - WHY hub page
- `/why/social-security-running-out/` (1,400 vol)
- `/why/market-crash-coming/` (1,100 vol, KD 3)
- `/why/sequence-of-returns-risk/` (2,100 vol, KD 12)
- `/why/retirement-crisis/`
- `/why/dollar-devaluation/`
- `/why/is-my-401k-safe/`
- `/why/wealth-preservation/`
- `/why/ray-dalio-gold/`
- `/why/billionaires-buying-gold/`
- etc.

---

### PHASE 5: HOW Content (40 pages)
**Priority: MID FUNNEL**

Build solution-education content:
- `/how/` - HOW hub page
- `/how/gold-vs-inflation/`
- `/how/gold-during-recession/`
- `/how/gold-vs-stocks/`
- `/how/why-invest-in-gold/`
- `/how/physical-gold-vs-paper-gold/`
- `/how/gold-etf-vs-physical-gold/`
- `/how/diversify-retirement-portfolio/`
- `/how/retirement-planning-at-50/`
- etc.

---

### PHASE 6: Local & Audience Pages (200+ pages)
**Priority: SCALE**

Build programmatic SEO pages:
- `/local/[state]/` - 50 state pages
- `/local/[state]/[city]/` - 100+ city pages
- `/for/[audience]/` - 25 audience pages (seniors, teachers, military, etc.)

---

## DATA STRUCTURES TO CREATE

### 1. Company Data (`src/data/companies/`)
```typescript
interface Company {
  name: string
  slug: string
  rating: number
  bbbRating: string
  minInvestment: number
  founded: number
  headquarters: string
  fees: { setup: number; annual: number; storage: number }
  pros: string[]
  cons: string[]
  bestFor: string
  featured: boolean
  affiliateLink?: string
}
```

### 2. Provider Data (`src/data/providers/`)
```typescript
interface Provider {
  name: string
  slug: string
  type: '401k' | '403b' | 'tsp' | 'ira'
  rolloverProcess: string
  contactPhone: string
  forms: string[]
  timeline: string
  specialConsiderations: string[]
}
```

### 3. Location Data (`src/data/locations/`)
- States with cities, population, tax info
- Cities with local dealers

### 4. Audience Data (`src/data/audiences/`)
- Audience profiles with specific needs

---

## COMPONENT STRUCTURE

### Review Components
- `CompanyCard.tsx` - Company preview card
- `CompanyRating.tsx` - Star rating display
- `FeesTable.tsx` - Fees comparison table
- `ProsConsList.tsx` - Pros/cons display
- `CompanyComparison.tsx` - Side-by-side comparison

### Content Components
- `ArticleHero.tsx` - Article header with hook
- `DataChart.tsx` - Charts and graphs
- `StatisticCard.tsx` - Key statistics display
- `ExpertQuote.tsx` - Expert quotes with attribution
- `ComparisonTable.tsx` - Feature comparison tables

### CTA Components
- `AugustaCTA.tsx` - Primary Augusta conversion CTA
- `QuizCTA.tsx` - Quiz funnel CTA
- `GuideCTA.tsx` - Free guide download CTA
- `ConsultationCTA.tsx` - Free consultation CTA

### Layout Components
- `GoldenCircleNav.tsx` - New navigation with WHY/HOW/WHAT
- `Sidebar.tsx` - Sidebar with CTAs
- `BreadcrumbNav.tsx` - Breadcrumb navigation

---

## AFFILIATE LINKS

All CTAs should link to Augusta Precious Metals affiliate link:
```typescript
export const AFFILIATE_LINKS = {
  augusta: "https://www.augustapreciousmetals.com/aff/..."  // Use existing link from codebase
}
```

---

## SEO REQUIREMENTS

### Meta Tags
- Dynamic titles: "[Topic] | Rich Dad Retirement"
- Meta descriptions with target keywords
- Open Graph tags for social sharing

### Structured Data
- Review schema for company reviews
- FAQ schema for Q&A sections
- Article schema for educational content
- BreadcrumbList schema for navigation

### Internal Linking
- WHY pages → link to HOW pages
- HOW pages → link to WHAT pages
- WHAT pages → link to Reviews/Augusta CTA
- All pages → sidebar Augusta CTA

---

## QUALITY STANDARDS

1. **Mobile-first responsive design**
2. **Accessible (WCAG 2.1 AA)**
3. **Fast loading (Core Web Vitals)**
4. **TypeScript strict mode**
5. **No hardcoded content - use data files**
6. **Consistent styling with existing components**
7. **All pages have Augusta CTA**

---

## EXISTING CODEBASE

Check existing files before creating new ones:
- `src/components/` - Existing components
- `src/lib/constants.ts` - Affiliate links
- `src/app/` - Existing pages
- Tailwind config for design tokens

---

## RALPH STATUS BLOCK

At the end of each response, output:

```
RALPH_STATUS:
- PHASE: [current phase number]
- TASK: [current task from @fix_plan.md]
- PROGRESS: [X/Y tasks completed in current phase]
- BLOCKERS: [any blockers or issues]
- EXIT_SIGNAL: [true only when ALL phases complete]
```

---

## START HERE

1. Read the current codebase structure
2. Check `@fix_plan.md` for next task
3. Implement the task
4. Mark task complete in `@fix_plan.md`
5. Update RALPH_STATUS
6. Continue to next task

**Begin with Phase 1, Task 1: Create company data structure**
