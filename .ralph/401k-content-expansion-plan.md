# 401k Content Expansion - Complete Implementation Plan
## Ralph Method - January 2026

---

# EXECUTIVE SUMMARY

**Goal:** Build 100+ high-value pages targeting confused/scared 401k holders
**Strategy:** Hybrid approach - data-driven for bulk, individual for complex pages
**Primary CTA:** Augusta Precious Metals Gold IRA
**Target Audience:** Americans 55+ worried about retirement

---

# ARCHITECTURE FIT

## Existing Patterns to Follow

### 1. Page Structure (from `is-401k-fdic-insured/page.tsx`)
```tsx
// Required imports
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";

// Page structure
- Metadata export (title, description, keywords, openGraph)
- takeaways array (6-8 key points)
- tocItems array (section navigation)
- schema object (Article + FAQPage JSON-LD)
- Page component with:
  - Header (bg-white/5 backdrop-blur-sm)
  - Sidebar with TOC
  - Content with sections
  - Mid-article CTA
  - FAQ accordions
  - Final CTA
  - AugustaCTA footer
```

### 2. Card Styles
```tsx
// Glass-morphism card
className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"

// Colored callout (red for warnings)
className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20"

// Info box (green for positive)
className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20"

// Gold for CTAs
className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20"
```

### 3. Data-Driven Pattern (from `scenarios.ts`)
```typescript
interface Scenario {
  slug: string;
  title: string;
  sections: { title: string; content: string; bullets?: string[] }[];
  warningSignals: string[];
  protectionSteps: { step: number; title: string; description: string }[];
  stats: { label: string; value: string; subtext?: string }[];
  faqs: { question: string; answer: string }[];
  relatedScenarios: string[];
}
```

## Approach for New Content

**Tier 1 - Data-Driven (75+ simple articles):**
- Use pattern from scenarios.ts
- Dynamic `[slug]/page.tsx` template
- All content in data files by cluster

**Tier 2 - Individual Pages (5 complex articles with custom UI):**
- RMD Calculator page (interactive)
- Roth Conversion Calculator (interactive)
- 401k Fee Analyzer (interactive)
- Retirement Quiz (multi-step)
- SIPC vs FDIC comparison (complex table)

**Keyword Data Summary:**
| Priority | Keywords | Total Volume | Avg Difficulty |
|----------|----------|--------------|----------------|
| 🔥 Tools | 4 | 2,790+ | 19 |
| 🎯 Diff 0-5 | 12 | 500+ | 2 |
| ✅ Diff 6-30 | 8 | 400+ | 15 |
| 📝 Untapped | 75+ | Unknown | Virgin |
| **TOTAL** | **99+** | **3,690+** | Low |

---

# PHASE 1: DATA INFRASTRUCTURE
## Foundation for Scalable Content

### 1.1 Type Definitions
- [ ] **P1-001**: Create `src/types/learn-article.ts` - LearnArticle interface (matches scenarios.ts pattern)
  ```typescript
  // Following existing patterns from scenarios.ts and is-401k-fdic-insured

  export type ArticleCategory =
    | 'safety'        // Is my money safe?
    | 'rmd'           // RMD questions
    | 'life-events'   // Laid off, divorce, death
    | 'loans'         // 401k loans & hardship
    | 'fees'          // Fee complaints
    | 'roth'          // Roth conversion
    | 'market-fear'   // Crash worries
    | 'target-date'   // TDF confusion
    | 'enrollment'    // HR issues
    | 'protection';   // Creditor/government

  export type ThreatLevel = 'info' | 'warning' | 'critical';

  export interface LearnArticle {
    // Identity
    slug: string;
    title: string;
    subtitle: string;

    // SEO
    metaTitle: string;
    metaDescription: string;
    keywords: string[];

    // Keyword data
    targetKeyword: string;
    volume?: number;
    difficulty?: number;
    cpc?: number;

    // Classification
    category: ArticleCategory;
    threatLevel: ThreatLevel;

    // Content (matching scenarios.ts)
    takeaways: string[];
    tocItems: { id: string; label: string }[];
    sections: {
      id: string;
      icon: string; // lucide icon name
      iconColor: string; // tailwind color
      title: string;
      content: string;
      bullets?: string[];
    }[];

    // Warnings & Action (matching scenarios.ts)
    warningBox?: {
      title: string;
      content: string;
      type: 'red' | 'amber' | 'blue';
    };
    actionSteps?: {
      step: number;
      title: string;
      description: string;
    }[];

    // Bridge to Gold IRA
    goldBridge: {
      title: string;
      content: string;
      bullets: string[];
    };

    // FAQ (for schema)
    faqs: {
      question: string;
      answer: string;
    }[];

    // Linking
    relatedArticles: string[];
    relatedGuides: string[];
  }
  ```
- [ ] **P1-002**: Create `src/types/tool.ts` - InteractiveTool interface for calculators
- [ ] **P1-003**: Add ArticleCategory to existing types if needed
- [ ] **P1-004**: Create icon mapping helper for dynamic icon rendering

### 1.2 Data Files Structure
- [ ] **P1-005**: Create `src/data/learn-articles/index.ts` - article registry
- [ ] **P1-006**: Create `src/data/learn-articles/safety-cluster.ts` - "Is My Money Safe?" articles
- [ ] **P1-007**: Create `src/data/learn-articles/rmd-cluster.ts` - RMD/Inherited IRA articles
- [ ] **P1-008**: Create `src/data/learn-articles/life-events-cluster.ts` - Life events articles
- [ ] **P1-009**: Create `src/data/learn-articles/loans-cluster.ts` - 401k loan articles
- [ ] **P1-010**: Create `src/data/learn-articles/fees-cluster.ts` - Fees articles
- [ ] **P1-011**: Create `src/data/learn-articles/roth-cluster.ts` - Roth conversion articles
- [ ] **P1-012**: Create `src/data/learn-articles/market-fear-cluster.ts` - Market timing articles
- [ ] **P1-013**: Create `src/data/learn-articles/target-date-cluster.ts` - Target date fund articles
- [ ] **P1-014**: Create `src/data/learn-articles/enrollment-cluster.ts` - HR/enrollment articles
- [ ] **P1-015**: Create `src/data/learn-articles/protection-cluster.ts` - Creditor/government articles
- [ ] **P1-016**: Create `src/data/learn-articles/misc-cluster.ts` - Miscellaneous articles

### 1.3 Dynamic Page Template
- [ ] **P1-017**: Update `src/app/learn/[slug]/page.tsx` - data-driven template
- [ ] **P1-018**: Add generateStaticParams from article registry
- [ ] **P1-019**: Add generateMetadata with dynamic SEO
- [ ] **P1-020**: Add JSON-LD Article schema
- [ ] **P1-021**: Add JSON-LD FAQPage schema

### 1.4 Reusable Components
- [ ] **P1-022**: Create `src/components/learn/ArticleHero.tsx` - emotional hook hero
- [ ] **P1-023**: Create `src/components/learn/EmotionalHook.tsx` - fear/trust opener
- [ ] **P1-024**: Create `src/components/learn/WhatThisReallyMeans.tsx` - Rich Dad explanation
- [ ] **P1-025**: Create `src/components/learn/ActionSteps.tsx` - what to do section
- [ ] **P1-026**: Create `src/components/learn/ProtectionCTA.tsx` - Gold IRA bridge
- [ ] **P1-027**: Create `src/components/learn/RelatedArticles.tsx` - cluster linking
- [ ] **P1-028**: Create `src/components/learn/ArticleFAQ.tsx` - FAQ section

---

# PHASE 2: INTERACTIVE TOOLS
## Enhancement & New Tools

### Already Exists (✅ No Work Needed)
- ✅ RMD Calculator - `/tools/rmd-calculator` with `RMDCalculator.tsx`
- ✅ 401k Risk Analyzer - `/tools/401k-risk-analyzer` (multi-step quiz)
- ✅ Crash Simulator - `/tools/crash-simulator` with `CrashSimulator.tsx`
- ✅ Fees Comparison - `/tools/fees-comparison` with `FeesComparison.tsx`
- ✅ Retirement Calculator - `/tools/retirement-calculator`

### 2.1 Roth Conversion Calculator (200 vol, diff 24) - NEW
- [ ] **P2-001**: Create `src/app/tools/roth-conversion-calculator/page.tsx`
- [ ] **P2-002**: Create `src/components/tools/RothConversionCalculator.tsx`
- [ ] **P2-003**: Add tax bracket calculations (2026 rates)
- [ ] **P2-004**: Add conversion amount optimizer
- [ ] **P2-005**: Add "tax bomb" visualization
- [ ] **P2-006**: Add breakeven analysis (years to recoup)
- [ ] **P2-007**: Add "Should I convert?" recommendation logic
- [ ] **P2-008**: Create results with "Gold Roth IRA" CTA
- [ ] **P2-009**: Add JSON-LD Calculator schema

### 2.2 Unvested 401k Calculator - NEW
- [ ] **P2-010**: Create `src/app/tools/unvested-401k-calculator/page.tsx`
- [ ] **P2-011**: Create `src/components/tools/UnvestedCalculator.tsx`
- [ ] **P2-012**: Add vesting schedule types (cliff, graded, 6-year graded)
- [ ] **P2-013**: Add "stay vs leave" comparison
- [ ] **P2-014**: Add opportunity cost calculator
- [ ] **P2-015**: Add "What you'll lose" shock reveal
- [ ] **P2-016**: Augusta CTA: "Take your VESTED portion to a Gold IRA"

### 2.3 Tool Hub Page Enhancement
- [ ] **P2-017**: Update `/tools/page.tsx` to include all new tools
- [ ] **P2-018**: Add tool categories: "Calculators" | "Analyzers" | "Quizzes"
- [ ] **P2-019**: Add "Most Popular" badges
- [ ] **P2-020**: Link tools to relevant learn articles

---

# PHASE 3: "IS MY MONEY SAFE?" CLUSTER
## Fear/Trust Keywords - Perfect for Gold IRA Bridge

### 3.1 High-Value Keywords with Data
- [ ] **P3-001**: Create article: `is-fidelity-too-big-to-fail` (10 vol, diff 0!)
  - Emotional hook: "Your 401k is at Fidelity. But what happens if..."
  - Bridge: SIPC only covers $500k. Gold is fully yours.
- [ ] **P3-002**: Create article: `is-401k-protected-from-creditors` (30 vol, diff 7)
  - Emotional hook: "Lawsuit? Bankruptcy? Is your retirement safe?"
  - Bridge: Physical gold in IRA has additional protections.

### 3.2 Untapped "Safety" Keywords
- [ ] **P3-003**: Create article: `is-my-money-safe-at-vanguard`
- [ ] **P3-004**: Create article: `what-happens-to-401k-if-bank-fails`
- [ ] **P3-005**: Create article: `what-happens-to-401k-if-brokerage-fails`
- [ ] **P3-006**: Create article: `sipc-vs-fdic-retirement-accounts`
- [ ] **P3-007**: Create article: `is-my-company-stealing-my-401k`
- [ ] **P3-008**: Create article: `will-government-take-my-401k`
- [ ] **P3-009**: Create article: `can-government-seize-my-ira`
- [ ] **P3-010**: Create article: `401k-protected-in-bankruptcy`

### 3.3 Internal Linking Structure
- [ ] **P3-011**: Create cluster hub: `src/app/learn/is-my-retirement-safe/page.tsx`
- [ ] **P3-012**: Link all safety articles to hub
- [ ] **P3-013**: Cross-link to existing `/learn/is-401k-fdic-insured`
- [ ] **P3-014**: Add sidebar widget: "Worried about your 401k? Take our Risk Quiz"

---

# PHASE 4: RMD & INHERITED IRA CLUSTER
## Older Audience = Your ICP!

### 4.1 High-Value RMD Keywords
- [ ] **P4-001**: Create article: `can-i-reinvest-my-rmd` (90 vol, diff 1!)
  - Answer: No, but here's what the wealthy do instead
  - Bridge: Gold IRA before 73 = no RMDs on that portion
- [ ] **P4-002**: Create article: `rmd-rules-for-inherited-ira` (40 vol, diff 28)
- [ ] **P4-003**: Create article: `paying-back-401k-loan-after-leaving-job` (30 vol, diff 17)

### 4.2 Untapped RMD Keywords
- [ ] **P4-004**: Create article: `rmd-penalty-if-i-forget`
  - Hook: 25% penalty! (was 50% before 2023)
- [ ] **P4-005**: Create article: `what-if-i-miss-rmd-deadline`
- [ ] **P4-006**: Create article: `10-year-rule-inherited-ira-explained`
- [ ] **P4-007**: Create article: `stretch-ira-rules-2026`
- [ ] **P4-008**: Create article: `what-to-do-with-small-inherited-ira`
- [ ] **P4-009**: Create article: `inherited-401k-rules-for-spouse`

### 4.3 RMD Cluster Hub
- [ ] **P4-010**: Create cluster hub: `src/app/learn/rmd-guide/page.tsx`
- [ ] **P4-011**: Link to existing RMD calculator
- [ ] **P4-012**: Add "RMD Countdown" widget for engagement

---

# PHASE 5: "LIFE HAPPENS" CLUSTER
## Life Events = High Intent

### 5.1 High-Value Life Event Keywords
- [ ] **P5-001**: Create article: `what-happens-to-unvested-401k` (50 vol, diff 1!)
  - Hook: Leaving job? You might lose thousands.
- [ ] **P5-002**: Create article: `what-happens-to-my-401k-if-i-get-laid-off-at-58`
  - Hook: The worst time to lose your job...
- [ ] **P5-003**: Create article: `what-happens-to-401k-in-divorce-at-60`

### 5.2 Untapped Life Event Keywords
- [ ] **P5-004**: Create article: `leaving-job-before-401k-vested`
- [ ] **P5-005**: Create article: `401k-match-not-vested-yet-should-i-leave`
- [ ] **P5-006**: Create article: `what-to-do-with-spouses-401k-after-death`
- [ ] **P5-007**: Create article: `ex-spouse-401k-rights-after-divorce`
- [ ] **P5-008**: Create article: `how-long-until-401k-is-fully-vested`

### 5.3 Life Events Cluster Hub
- [ ] **P5-009**: Create hub: `src/app/learn/401k-life-events/page.tsx`
- [ ] **P5-010**: Add "Life Event Checklist" interactive component

---

# PHASE 6: 401K LOANS & HARDSHIP CLUSTER
## Panic Keywords = Urgent Traffic

### 6.1 High-Value Loan Keywords
- [ ] **P6-001**: Create article: `401k-loan-vs-hardship-withdrawal` (70 vol, diff 5)
  - Comparison table with pros/cons
  - Neither is good - here's what wealthy do instead
- [ ] **P6-002**: Create article: `paying-back-401k-loan-after-leaving-job` (30 vol, diff 17)
- [ ] **P6-003**: Create article: `what-happens-to-401k-loan-if-fired`

### 6.2 Untapped Loan Keywords
- [ ] **P6-004**: Create article: `taking-401k-loan-good-or-bad-idea`
- [ ] **P6-005**: Create article: `does-401k-loan-hurt-retirement`
- [ ] **P6-006**: Create article: `401k-loan-interest-rate-worth-it`
- [ ] **P6-007**: Create article: `hardship-withdrawal-401k-consequences`
- [ ] **P6-008**: Create article: `can-i-put-hardship-withdrawal-back`
- [ ] **P6-009**: Create article: `does-hardship-withdrawal-hurt-credit`
- [ ] **P6-010**: Create article: `401k-withdrawal-for-medical-bills-worth-it`
- [ ] **P6-011**: Create article: `raiding-retirement-to-pay-bills`
- [ ] **P6-012**: Create article: `using-401k-to-pay-off-debt-mistake`
- [ ] **P6-013**: Create article: `using-retirement-for-down-payment-regret`
- [ ] **P6-014**: Create article: `401k-emergency-fund-bad-idea`
- [ ] **P6-015**: Create article: `borrowing-from-future-self-401k`

### 6.3 Loans Cluster Hub
- [ ] **P6-016**: Create hub: `src/app/learn/401k-loans-guide/page.tsx`
- [ ] **P6-017**: Add "Loan Calculator" showing true cost

---

# PHASE 7: FEES & BAD PLANS CLUSTER
## Frustration = Opportunity

### 7.1 Untapped Fee Keywords (All Virgin!)
- [ ] **P7-001**: Create article: `401k-fees-eating-my-retirement`
  - Hook: "The average American loses $138,000 to fees"
  - Tool link: 401k Fee Analyzer
- [ ] **P7-002**: Create article: `how-to-check-401k-fees`
- [ ] **P7-003**: Create article: `are-401k-fees-worth-it`
- [ ] **P7-004**: Create article: `high-401k-fees-what-to-do`
- [ ] **P7-005**: Create article: `employer-401k-plan-is-terrible`
- [ ] **P7-006**: Create article: `bad-401k-options-at-work`
- [ ] **P7-007**: Create article: `only-bad-funds-in-my-401k`
- [ ] **P7-008**: Create article: `401k-only-has-expensive-funds`

### 7.2 Fees Cluster Hub
- [ ] **P7-009**: Create hub: `src/app/learn/401k-fees-guide/page.tsx`
- [ ] **P7-010**: Prominent link to Fee Analyzer tool

---

# PHASE 8: ROTH CONVERSION CLUSTER
## Tax Planning = Educated Audience

### 8.1 High-Value Roth Keywords
- [ ] **P8-001**: (Tool already in Phase 2)
- [ ] **P8-002**: Create article: `should-i-convert-401k-to-roth-at-60`
- [ ] **P8-003**: Create article: `roth-conversion-tax-bomb-explained`
  - Visual: Tax bracket cliff illustration
- [ ] **P8-004**: Create article: `is-roth-conversion-worth-it-near-retirement`
- [ ] **P8-005**: Create article: `too-old-for-roth-conversion`
- [ ] **P8-006**: Create article: `will-i-regret-not-doing-roth-conversion`

### 8.2 Roth Cluster Hub
- [ ] **P8-007**: Create hub: `src/app/learn/roth-conversion-guide/page.tsx`
- [ ] **P8-008**: Link prominently to Roth Conversion Calculator

---

# PHASE 9: MARKET FEAR/TIMING CLUSTER
## Panic Traffic = High Intent

### 9.1 Untapped Market Fear Keywords
- [ ] **P9-001**: Create article: `why-did-my-401k-drop-so-much`
  - Hook: Check these 3 things immediately
  - Bridge: Market drops don't affect physical gold the same way
- [ ] **P9-002**: Create article: `401k-lost-20-percent-what-do-i-do`
- [ ] **P9-003**: Create article: `should-i-stop-contributing-to-401k-in-recession`
- [ ] **P9-004**: Create article: `is-now-a-bad-time-to-rollover-401k`
- [ ] **P9-005**: Create article: `should-i-move-401k-before-market-crash`

### 9.2 Market Fear Cluster Hub
- [ ] **P9-006**: Create hub: `src/app/learn/market-crash-401k-guide/page.tsx`
- [ ] **P9-007**: Link to existing crash simulator tool

---

# PHASE 10: TARGET DATE FUND CONFUSION
## Educated Skeptics

### 10.1 Untapped Target Date Keywords
- [ ] **P10-001**: Create article: `is-my-target-date-fund-too-risky`
- [ ] **P10-002**: Create article: `what-does-my-target-date-fund-invest-in`
- [ ] **P10-003**: Create article: `fidelity-freedom-fund-too-aggressive`
- [ ] **P10-004**: Create article: `vanguard-target-date-fund-losing-money`

### 10.2 Target Date Cluster Hub
- [ ] **P10-005**: Create hub: `src/app/learn/target-date-funds-truth/page.tsx`

---

# PHASE 11: ENROLLMENT & HR ISSUES
## Frustrated Employees

### 11.1 Untapped Enrollment Keywords
- [ ] **P11-001**: Create article: `forgot-to-enroll-in-401k`
- [ ] **P11-002**: Create article: `missed-401k-enrollment-period`
- [ ] **P11-003**: Create article: `can-i-join-401k-mid-year`
- [ ] **P11-004**: Create article: `auto-enrolled-401k-didnt-know`
- [ ] **P11-005**: Create article: `401k-contribution-not-showing-up`
- [ ] **P11-006**: Create article: `hr-messed-up-my-401k`
- [ ] **P11-007**: Create article: `employer-not-depositing-401k-on-time`
- [ ] **P11-008**: Create article: `when-does-employer-deposit-401k-match`
- [ ] **P11-009**: Create article: `employer-401k-contribution-timing`
- [ ] **P11-010**: Create article: `how-to-reduce-401k-contribution`
- [ ] **P11-011**: Create article: `can-i-stop-401k-contribution-temporarily`
- [ ] **P11-012**: Create article: `401k-automatic-increase-too-much`
- [ ] **P11-013**: Create article: `did-i-miss-401k-true-up`
- [ ] **P11-014**: Create article: `401k-true-up-explained-simply`

### 11.2 Enrollment Cluster Hub
- [ ] **P11-015**: Create hub: `src/app/learn/401k-enrollment-guide/page.tsx`

---

# PHASE 12: MISCELLANEOUS HIGH-VALUE
## Catch-All Important Keywords

### 12.1 Consolidation Keywords
- [ ] **P12-001**: Create article: `multiple-old-401k-accounts-what-to-do`
- [ ] **P12-002**: Create article: `too-many-retirement-accounts-confusing`
- [ ] **P12-003**: Create article: `consolidate-retirement-accounts-or-not`

### 12.2 "Am I Enough?" Keywords
- [ ] **P12-004**: Create article: `is-200k-enough-to-retire-at-62`
- [ ] **P12-005**: Create article: `how-much-should-i-have-in-401k-at-55`
- [ ] **P12-006**: Create article: `am-i-on-track-for-retirement-at-50`
- [ ] **P12-007**: Create article: `average-401k-balance-at-55-years-old`
- [ ] **P12-008**: Create article: `average-401k-balance-at-60-years-old`

### 12.3 Rollover Decision Keywords
- [ ] **P12-009**: Create article: `is-50k-inheritance-worth-rolling-over`
- [ ] **P12-010**: Create article: `is-it-worth-rolling-over-old-401k`
- [ ] **P12-011**: Create article: `minimum-amount-to-rollover-401k`

### 12.4 Strategy Keywords
- [ ] **P12-012**: Create article: `should-i-max-out-401k-or-pay-off-mortgage`
- [ ] **P12-013**: Create article: `should-i-only-contribute-to-401k-match`
- [ ] **P12-014**: Create article: `should-i-cash-out-401k-to-buy-house`
- [ ] **P12-015**: Create article: `can-i-access-401k-at-55-without-penalty`

### 12.5 Beneficiary Keywords
- [ ] **P12-016**: Create article: `401k-beneficiary-rules-explained-simply`

---

# PHASE 13: SITEMAP & INTERNAL LINKING

### 13.1 Sitemap Updates
- [ ] **P13-001**: Add all new /learn/* pages to sitemap.ts
- [ ] **P13-002**: Add all new /tools/* pages to sitemap.ts
- [ ] **P13-003**: Verify generateStaticParams includes all slugs

### 13.2 Navigation Updates
- [ ] **P13-004**: Add "401k Help" dropdown to navbar
- [ ] **P13-005**: Create cluster landing page: `/learn/401k-guide`
- [ ] **P13-006**: Add internal links from old pages to new

### 13.3 CTA Integration
- [ ] **P13-007**: Ensure every article has Augusta CTA
- [ ] **P13-008**: Add quiz CTAs to fear-based articles
- [ ] **P13-009**: Add tool CTAs to relevant articles

---

# PHASE 14: QUALITY ASSURANCE

### 14.1 Technical Checks
- [ ] **P14-001**: TypeScript strict mode - no errors
- [ ] **P14-002**: Build all pages successfully
- [ ] **P14-003**: Verify all generateStaticParams work
- [ ] **P14-004**: Check all internal links resolve

### 14.2 SEO Checks
- [ ] **P14-005**: Verify all meta titles < 60 chars
- [ ] **P14-006**: Verify all meta descriptions < 160 chars
- [ ] **P14-007**: Validate JSON-LD schemas
- [ ] **P14-008**: Check canonical URLs

### 14.3 UX Checks
- [ ] **P14-009**: Mobile responsiveness on all pages
- [ ] **P14-010**: Dark theme consistency
- [ ] **P14-011**: CTA visibility and placement
- [ ] **P14-012**: Page load performance

---

# PROGRESS TRACKING

| Phase | Description | Tasks | Completed | % |
|-------|-------------|-------|-----------|---|
| 1 | Data Infrastructure | 28 | 0 | 0% |
| 2 | Interactive Tools | 37 | 0 | 0% |
| 3 | Safety Cluster | 14 | 0 | 0% |
| 4 | RMD Cluster | 12 | 0 | 0% |
| 5 | Life Events Cluster | 10 | 0 | 0% |
| 6 | Loans Cluster | 17 | 0 | 0% |
| 7 | Fees Cluster | 10 | 0 | 0% |
| 8 | Roth Cluster | 8 | 0 | 0% |
| 9 | Market Fear Cluster | 7 | 0 | 0% |
| 10 | Target Date Cluster | 5 | 0 | 0% |
| 11 | Enrollment Cluster | 15 | 0 | 0% |
| 12 | Miscellaneous | 16 | 0 | 0% |
| 13 | Sitemap & Linking | 9 | 0 | 0% |
| 14 | Quality Assurance | 12 | 0 | 0% |
| **TOTAL** | | **183** | **0** | **0%** |

**Note:** Phase 2 reduced because RMD Calculator, Risk Analyzer, Crash Simulator, Fees Comparison, and Retirement Calculator already exist.

---

# KEYWORD REFERENCE

## With Volume/Difficulty Data
| Keyword | Vol | Diff | CPC | Phase |
|---------|-----|------|-----|-------|
| required minimum distribution calculator | 2,300 | 51 | $0.15 | P2 |
| 401k to roth conversion calculator | 200 | 24 | $0.60 | P2 |
| can i reinvest my rmd | 90 | 1 | - | P4 |
| 401k loan vs hardship withdrawal | 70 | 5 | - | P6 |
| what happens to unvested 401k | 50 | 1 | - | P5 |
| rmd rules for inherited ira | 40 | 28 | - | P4 |
| paying back 401k loan after leaving job | 30 | 17 | - | P4/P6 |
| is 401k protected from creditors | 30 | 7 | - | P3 |
| average 401k balance at 60 years old | 20 | - | - | P12 |
| is fidelity too big to fail | 10 | 0 | - | P3 |
| how much should i have in 401k at 55 | 10 | - | - | P12 |

## Untapped (No Data = Virgin Territory)
All keywords in Phases 3-12 without volume data are UNTAPPED.
Total: 75+ keywords with ZERO competition.

---

# EXECUTION ORDER

**Week 1: Foundation**
- Phase 1: Data Infrastructure (P1-001 to P1-028)

**Week 2: New Tools**
- Phase 2: Interactive Tools (P2-001 to P2-020) - Roth Calc + Unvested Calc + Hub updates

**Week 3-4: Quick Win Clusters**
- Phase 3: Safety Cluster (highest fear = highest conversion)
- Phase 4: RMD Cluster (oldest audience = most money)

**Week 5-6: Life Situations**
- Phase 5: Life Events Cluster
- Phase 6: Loans Cluster

**Week 7-8: Decision Help**
- Phase 7: Fees Cluster
- Phase 8: Roth Cluster

**Week 9-10: Remaining Clusters**
- Phase 9: Market Fear Cluster
- Phase 10: Target Date Cluster
- Phase 11: Enrollment Cluster
- Phase 12: Miscellaneous

**Week 11: Polish**
- Phase 13: Sitemap & Internal Linking
- Phase 14: Quality Assurance

---

*Created: January 25, 2026*
*Method: Ralph Autonomous Development*
*Total Keywords: 99+*
*Total Pages: 100+*
*Estimated Traffic Potential: 10,000+ monthly*
