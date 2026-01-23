# Rich Dad Retirement - Implementation Task List
## Ralph @fix_plan.md

---

# PHASE 1: COMPANY REVIEWS & COMPARISONS
## Timeline: Week 1-2 | 25 pages | HIGHEST ROI

### 1.1 Data Infrastructure
- [ ] **P1-001**: Create `src/data/companies/index.ts` with Company interface and types
- [ ] **P1-002**: Create company data for augusta-precious-metals (featured partner)
- [ ] **P1-003**: Create company data for goldco (5,200 vol)
- [ ] **P1-004**: Create company data for american-hartford-gold (6,400 vol)
- [ ] **P1-005**: Create company data for noble-gold (4,500 vol)
- [ ] **P1-006**: Create company data for birch-gold-group (3,100 vol)
- [ ] **P1-007**: Create company data for lear-capital (4,500 vol)
- [ ] **P1-008**: Create company data for oxford-gold-group (2,100 vol)
- [ ] **P1-009**: Create company data for rosland-capital (1,700 vol)
- [ ] **P1-010**: Create company data for priority-gold (1,600 vol)
- [ ] **P1-011**: Create company data for patriot-gold-group (1,000 vol)
- [ ] **P1-012**: Create company data for advantage-gold (1,300 vol)
- [ ] **P1-013**: Create company data for orion-metal-exchange (700 vol)
- [ ] **P1-014**: Create company data for blanchard-gold (500 vol)
- [ ] **P1-015**: Create company data for monetary-gold (450 vol)
- [ ] **P1-016**: Create company data for regal-assets (200 vol)

### 1.2 Review Components
- [ ] **P1-017**: Create `src/components/reviews/CompanyCard.tsx` - company preview card
- [ ] **P1-018**: Create `src/components/reviews/CompanyRating.tsx` - star rating display
- [ ] **P1-019**: Create `src/components/reviews/FeesTable.tsx` - fees comparison table
- [ ] **P1-020**: Create `src/components/reviews/ProsConsList.tsx` - pros/cons display
- [ ] **P1-021**: Create `src/components/reviews/CompanyHero.tsx` - review page hero
- [ ] **P1-022**: Create `src/components/reviews/VerdictSection.tsx` - final verdict
- [ ] **P1-023**: Create `src/components/reviews/BestForSection.tsx` - who is this for
- [ ] **P1-024**: Create `src/components/reviews/CompanyComparison.tsx` - side-by-side

### 1.3 Review Pages
- [ ] **P1-025**: Create `src/app/reviews/page.tsx` - reviews hub with rankings
- [ ] **P1-026**: Create `src/app/reviews/[company]/page.tsx` - dynamic review template
- [ ] **P1-027**: Add generateStaticParams for all company review pages
- [ ] **P1-028**: Add generateMetadata for SEO on review pages
- [ ] **P1-029**: Add JSON-LD structured data for reviews (Review schema)

### 1.4 Comparison Components
- [ ] **P1-030**: Create `src/components/compare/ComparisonHero.tsx`
- [ ] **P1-031**: Create `src/components/compare/ComparisonTable.tsx`
- [ ] **P1-032**: Create `src/components/compare/WinnerSection.tsx`
- [ ] **P1-033**: Create `src/data/comparisons/index.ts` - comparison configurations

### 1.5 Comparison Pages
- [ ] **P1-034**: Create `src/app/compare/page.tsx` - comparisons hub
- [ ] **P1-035**: Create `src/app/compare/[comparison]/page.tsx` - dynamic comparison template
- [ ] **P1-036**: Create comparison: gold-ira-vs-physical-gold (600 vol)
- [ ] **P1-037**: Create comparison: gold-ira-vs-roth-ira (200 vol)
- [ ] **P1-038**: Create comparison: gold-ira-vs-401k (150 vol)
- [ ] **P1-039**: Create comparison: gold-ira-vs-etf (90 vol)
- [ ] **P1-040**: Create comparison: goldco-vs-noble-gold (90 vol)
- [ ] **P1-041**: Create comparison: augusta-vs-goldco (80 vol)
- [ ] **P1-042**: Create comparison: goldco-vs-birch-gold
- [ ] **P1-043**: Create comparison: augusta-vs-noble-gold
- [ ] **P1-044**: Add generateStaticParams for comparison pages
- [ ] **P1-045**: Add generateMetadata for SEO on comparison pages

### 1.6 Navigation Updates
- [ ] **P1-046**: Add Reviews link to main navigation
- [ ] **P1-047**: Add Compare link to main navigation
- [ ] **P1-048**: Create mega menu dropdown for "Take Action" section

---

# PHASE 2: ROLLOVER PROVIDER PAGES
## Timeline: Week 3-4 | 35 pages | HIGH INTENT

### 2.1 Data Infrastructure
- [ ] **P2-001**: Create `src/data/providers/index.ts` with Provider interface
- [ ] **P2-002**: Create provider data for fidelity (1,100 vol)
- [ ] **P2-003**: Create provider data for schwab (600 vol)
- [ ] **P2-004**: Create provider data for vanguard (500 vol)
- [ ] **P2-005**: Create provider data for empower (350 vol)
- [ ] **P2-006**: Create provider data for t-rowe-price (200 vol)
- [ ] **P2-007**: Create provider data for principal (200 vol)
- [ ] **P2-008**: Create provider data for john-hancock (150 vol)
- [ ] **P2-009**: Create provider data for tiaa (150 vol)
- [ ] **P2-010**: Create provider data for transamerica (100 vol)
- [ ] **P2-011**: Create provider data for merrill-lynch (90 vol)
- [ ] **P2-012**: Create provider data for prudential
- [ ] **P2-013**: Create provider data for nationwide
- [ ] **P2-014**: Create provider data for lincoln-financial
- [ ] **P2-015**: Create provider data for wells-fargo
- [ ] **P2-016**: Create provider data for mass-mutual

### 2.2 Rollover Components
- [ ] **P2-017**: Create `src/components/rollover/RolloverHero.tsx`
- [ ] **P2-018**: Create `src/components/rollover/RolloverSteps.tsx` - step-by-step process
- [ ] **P2-019**: Create `src/components/rollover/ProviderDetails.tsx`
- [ ] **P2-020**: Create `src/components/rollover/FeesComparison.tsx`
- [ ] **P2-021**: Create `src/components/rollover/ProviderFAQ.tsx`
- [ ] **P2-022**: Create `src/components/rollover/RolloverTypeCard.tsx`

### 2.3 Rollover Type Pages
- [ ] **P2-023**: Create `src/app/rollover/page.tsx` - rollover hub
- [ ] **P2-024**: Create `src/app/rollover/401k-to-gold/page.tsx`
- [ ] **P2-025**: Create `src/app/rollover/ira-to-gold/page.tsx`
- [ ] **P2-026**: Create `src/app/rollover/403b-to-gold/page.tsx`
- [ ] **P2-027**: Create `src/app/rollover/tsp-to-gold/page.tsx` (150 vol, $17 CPC!)
- [ ] **P2-028**: Create `src/app/rollover/roth-to-gold/page.tsx`

### 2.4 Provider-Specific Pages
- [ ] **P2-029**: Create `src/app/rollover/from/[provider]/page.tsx` - dynamic template
- [ ] **P2-030**: Add generateStaticParams for all provider pages
- [ ] **P2-031**: Add generateMetadata for SEO on provider pages
- [ ] **P2-032**: Add JSON-LD structured data (HowTo schema)

### 2.5 Navigation Updates
- [ ] **P2-033**: Add Rollover section to main navigation
- [ ] **P2-034**: Create rollover dropdown with provider links
- [ ] **P2-035**: Add internal links from reviews to rollover pages

---

# PHASE 3: CORE GOLD IRA CONTENT
## Timeline: Week 5-6 | 30 pages | FOUNDATION

### 3.1 Gold IRA Pillar Content
- [ ] **P3-001**: Create `src/app/gold-ira/page.tsx` - main pillar (6,000 vol)
- [ ] **P3-002**: Create `src/app/gold-ira/what-is-gold-ira/page.tsx` (800 vol)
- [ ] **P3-003**: Create `src/app/gold-ira/how-it-works/page.tsx` (250 vol)
- [ ] **P3-004**: Create `src/app/gold-ira/benefits/page.tsx` (90 vol, $12 CPC)
- [ ] **P3-005**: Create `src/app/gold-ira/fees/page.tsx` (150 vol)
- [ ] **P3-006**: Create `src/app/gold-ira/rules/page.tsx` (150 vol)
- [ ] **P3-007**: Create `src/app/gold-ira/taxes/page.tsx`
- [ ] **P3-008**: Create `src/app/gold-ira/eligible-metals/page.tsx` (450 vol)
- [ ] **P3-009**: Create `src/app/gold-ira/custodians/page.tsx` (200 vol)
- [ ] **P3-010**: Create `src/app/gold-ira/storage/page.tsx` (70 vol)
- [ ] **P3-011**: Create `src/app/gold-ira/best-companies/page.tsx` (1,100 vol)
- [ ] **P3-012**: Create `src/app/gold-ira/pros-and-cons/page.tsx` (500 vol)
- [ ] **P3-013**: Create `src/app/gold-ira/scams/page.tsx` (200 vol)
- [ ] **P3-014**: Create `src/app/gold-ira/guide/page.tsx` (250 vol)

### 3.2 Learn Section Content
- [ ] **P3-015**: Create `src/app/learn/page.tsx` - learn hub
- [ ] **P3-016**: Create `src/app/learn/401k-rollover/page.tsx` (4,600 vol)
- [ ] **P3-017**: Create `src/app/learn/ira-rollover/page.tsx` (3,200 vol)
- [ ] **P3-018**: Create `src/app/learn/how-to-rollover-401k/page.tsx` (1,300 vol)
- [ ] **P3-019**: Create `src/app/learn/401k-rollover-options/page.tsx` (1,000 vol)
- [ ] **P3-020**: Create `src/app/learn/401k-rollover-rules/page.tsx` (350 vol)
- [ ] **P3-021**: Create `src/app/learn/ira-rollover-rules/page.tsx` (900 vol)
- [ ] **P3-022**: Create `src/app/learn/gold-ira-rollover/page.tsx` (500 vol)
- [ ] **P3-023**: Create `src/app/learn/gold-ira-transfer/page.tsx` (600 vol)
- [ ] **P3-024**: Create `src/app/learn/precious-metals-ira/page.tsx` (2,200 vol)
- [ ] **P3-025**: Create `src/app/learn/silver-ira/page.tsx` (1,000 vol)
- [ ] **P3-026**: Create `src/app/learn/self-directed-gold-ira/page.tsx` (300 vol)
- [ ] **P3-027**: Create `src/app/learn/physical-gold-ira/page.tsx` (400 vol)
- [ ] **P3-028**: Create `src/app/learn/gold-backed-ira/page.tsx` (250 vol)

### 3.3 Content Components
- [ ] **P3-029**: Create `src/components/content/PillarHero.tsx`
- [ ] **P3-030**: Create `src/components/content/TableOfContents.tsx`
- [ ] **P3-031**: Create `src/components/content/ContentSection.tsx`
- [ ] **P3-032**: Create `src/components/content/LinkCard.tsx`
- [ ] **P3-033**: Create `src/components/content/FAQSection.tsx`

---

# PHASE 4: WHY CONTENT (Problem Awareness)
## Timeline: Week 7-9 | 50 pages | TOP FUNNEL

### 4.1 WHY Hub & Infrastructure
- [ ] **P4-001**: Create `src/app/why/page.tsx` - WHY hub page
- [ ] **P4-002**: Create `src/data/why-topics/index.ts` - WHY topic data
- [ ] **P4-003**: Create `src/app/why/[topic]/page.tsx` - dynamic WHY template

### 4.2 WHY Components
- [ ] **P4-004**: Create `src/components/why/ArticleHero.tsx` - with emotional hook
- [ ] **P4-005**: Create `src/components/why/ProblemSection.tsx`
- [ ] **P4-006**: Create `src/components/why/StatisticCards.tsx`
- [ ] **P4-007**: Create `src/components/why/DataChart.tsx`
- [ ] **P4-008**: Create `src/components/why/PersonalImpactSection.tsx`
- [ ] **P4-009**: Create `src/components/why/WealthyStrategySection.tsx`
- [ ] **P4-010**: Create `src/components/why/SolutionPreview.tsx`
- [ ] **P4-011**: Create `src/components/why/SoftCTA.tsx`

### 4.3 Retirement Crisis Content
- [ ] **P4-012**: Create topic data: social-security-running-out (1,400 vol)
- [ ] **P4-013**: Create topic data: market-crash-coming (1,100 vol, KD 3)
- [ ] **P4-014**: Create topic data: sequence-of-returns-risk (2,100 vol, KD 12)
- [ ] **P4-015**: Create topic data: retirement-crisis (300 vol)
- [ ] **P4-016**: Create topic data: pension-crisis (90 vol)
- [ ] **P4-017**: Create topic data: dollar-devaluation (450 vol)
- [ ] **P4-018**: Create topic data: dollar-losing-value (200 vol)
- [ ] **P4-019**: Create topic data: is-my-401k-safe (250 vol)
- [ ] **P4-020**: Create topic data: 401k-risks (50 vol)
- [ ] **P4-021**: Create topic data: 401k-fees-too-high
- [ ] **P4-022**: Create topic data: 401k-not-enough
- [ ] **P4-023**: Create topic data: mutual-fund-fees (700 vol)
- [ ] **P4-024**: Create topic data: protect-401k-from-crash
- [ ] **P4-025**: Create topic data: stock-market-crash-retirement

### 4.4 Wealth Psychology Content
- [ ] **P4-026**: Create topic data: wealth-preservation (700 vol)
- [ ] **P4-027**: Create topic data: protect-wealth (80 vol)
- [ ] **P4-028**: Create topic data: guaranteed-retirement-income (700 vol)
- [ ] **P4-029**: Create topic data: safe-retirement-investments (300 vol)
- [ ] **P4-030**: Create topic data: safe-haven-assets (400 vol)
- [ ] **P4-031**: Create topic data: hedge-against-inflation (250 vol)
- [ ] **P4-032**: Create topic data: retirement-protection (80 vol)
- [ ] **P4-033**: Create topic data: inflation-destroying-savings
- [ ] **P4-034**: Create topic data: purchasing-power-retirement
- [ ] **P4-035**: Create topic data: financial-security-retirement

### 4.5 What The Rich Know Content
- [ ] **P4-036**: Create topic data: ray-dalio-gold (400 vol)
- [ ] **P4-037**: Create topic data: warren-buffett-gold (400 vol)
- [ ] **P4-038**: Create topic data: billionaires-buying-gold (10 vol, KD 0)
- [ ] **P4-039**: Create topic data: central-banks-gold (60 vol)
- [ ] **P4-040**: Create topic data: institutional-gold-buying
- [ ] **P4-041**: Create topic data: family-office-gold
- [ ] **P4-042**: Create topic data: rich-invest-in-gold
- [ ] **P4-043**: Create topic data: generational-wealth-secrets

### 4.6 Economic Education Content
- [ ] **P4-044**: Create topic data: gold-outlook (800 vol)
- [ ] **P4-045**: Create topic data: gold-performance (600 vol)
- [ ] **P4-046**: Create topic data: gold-demand (150 vol)
- [ ] **P4-047**: Create topic data: gold-supply (100 vol)
- [ ] **P4-048**: Create topic data: gold-bull-market (50 vol)
- [ ] **P4-049**: Create topic data: gold-store-of-value
- [ ] **P4-050**: Create topic data: inflation-retirement

### 4.7 Navigation Updates
- [ ] **P4-051**: Add "The Problem" section to main navigation
- [ ] **P4-052**: Create WHY mega menu dropdown

---

# PHASE 5: HOW CONTENT (Solution Education)
## Timeline: Week 10-12 | 40 pages | MID FUNNEL

### 5.1 HOW Hub & Infrastructure
- [ ] **P5-001**: Create `src/app/how/page.tsx` - HOW hub page
- [ ] **P5-002**: Create `src/data/how-topics/index.ts` - HOW topic data
- [ ] **P5-003**: Create `src/app/how/[topic]/page.tsx` - dynamic HOW template

### 5.2 HOW Components
- [ ] **P5-004**: Create `src/components/how/MechanismSection.tsx`
- [ ] **P5-005**: Create `src/components/how/EvidenceSection.tsx`
- [ ] **P5-006**: Create `src/components/how/HistoricalChart.tsx`
- [ ] **P5-007**: Create `src/components/how/CaseStudies.tsx`
- [ ] **P5-008**: Create `src/components/how/ApplicationSection.tsx`
- [ ] **P5-009**: Create `src/components/how/BridgeSection.tsx`

### 5.3 Gold Benefits Content
- [ ] **P5-010**: Create topic data: gold-vs-inflation (150 vol)
- [ ] **P5-011**: Create topic data: gold-during-recession (100 vol)
- [ ] **P5-012**: Create topic data: gold-vs-dollar (200 vol)
- [ ] **P5-013**: Create topic data: gold-vs-stocks (150 vol)
- [ ] **P5-014**: Create topic data: gold-vs-sp500 (100 vol)
- [ ] **P5-015**: Create topic data: gold-inflation-hedge (150 vol)
- [ ] **P5-016**: Create topic data: gold-safe-haven (50 vol)
- [ ] **P5-017**: Create topic data: why-buy-gold (300 vol)
- [ ] **P5-018**: Create topic data: why-invest-in-gold (250 vol)
- [ ] **P5-019**: Create topic data: when-to-buy-gold (250 vol)
- [ ] **P5-020**: Create topic data: gold-vs-silver-investment (350 vol)
- [ ] **P5-021**: Create topic data: gold-vs-platinum (1,100 vol)
- [ ] **P5-022**: Create topic data: gold-investment-benefits
- [ ] **P5-023**: Create topic data: physical-gold-benefits
- [ ] **P5-024**: Create topic data: gold-wealth-protection
- [ ] **P5-025**: Create topic data: tangible-assets-retirement

### 5.4 Comparison & Strategy Content
- [ ] **P5-026**: Create topic data: physical-gold-vs-paper-gold (90 vol)
- [ ] **P5-027**: Create topic data: gold-etf-vs-physical-gold (250 vol)
- [ ] **P5-028**: Create topic data: gold-coins-vs-gold-bars (60 vol)
- [ ] **P5-029**: Create topic data: bullion-vs-numismatic (40 vol)
- [ ] **P5-030**: Create topic data: allocated-vs-unallocated-gold
- [ ] **P5-031**: Create topic data: diversify-retirement-portfolio (70 vol)
- [ ] **P5-032**: Create topic data: how-much-gold-to-own
- [ ] **P5-033**: Create topic data: gold-allocation-portfolio
- [ ] **P5-034**: Create topic data: gold-percentage-portfolio
- [ ] **P5-035**: Create topic data: ways-to-own-gold

### 5.5 Age-Based Content
- [ ] **P5-036**: Create topic data: retirement-planning-at-50 (20 vol)
- [ ] **P5-037**: Create topic data: retirement-planning-at-55 (10 vol)
- [ ] **P5-038**: Create topic data: retirement-planning-at-60 (10 vol)
- [ ] **P5-039**: Create topic data: pre-retirement-planning (300 vol)
- [ ] **P5-040**: Create topic data: late-retirement-planning (80 vol)

### 5.6 Navigation Updates
- [ ] **P5-041**: Add "The Solution" section to main navigation
- [ ] **P5-042**: Create HOW mega menu dropdown

---

# PHASE 6: LOCAL & AUDIENCE PAGES
## Timeline: Week 13-16 | 200+ pages | SCALE

### 6.1 Location Data Infrastructure
- [ ] **P6-001**: Create `src/data/locations/states.ts` - all 50 states
- [ ] **P6-002**: Create `src/data/locations/cities.ts` - top 100 cities
- [ ] **P6-003**: Create state tax info data
- [ ] **P6-004**: Create local dealers data structure

### 6.2 Location Components
- [ ] **P6-005**: Create `src/components/local/LocalHero.tsx`
- [ ] **P6-006**: Create `src/components/local/StateOverview.tsx`
- [ ] **P6-007**: Create `src/components/local/StateTaxInfo.tsx`
- [ ] **P6-008**: Create `src/components/local/LocalDealers.tsx`
- [ ] **P6-009**: Create `src/components/local/CitiesGrid.tsx`
- [ ] **P6-010**: Create `src/components/local/CityCard.tsx`

### 6.3 Location Pages
- [ ] **P6-011**: Update `src/app/local/page.tsx` - local hub
- [ ] **P6-012**: Update `src/app/local/[state]/page.tsx` - state template
- [ ] **P6-013**: Create `src/app/local/[state]/[city]/page.tsx` - city template
- [ ] **P6-014**: Add generateStaticParams for states
- [ ] **P6-015**: Add generateStaticParams for cities
- [ ] **P6-016**: Add generateMetadata with LocalBusiness schema

### 6.4 Audience Data Infrastructure
- [ ] **P6-017**: Create `src/data/audiences/index.ts` - all audiences
- [ ] **P6-018**: Create audience data: seniors (90 vol, $30 CPC!)
- [ ] **P6-019**: Create audience data: retirees
- [ ] **P6-020**: Create audience data: age-50
- [ ] **P6-021**: Create audience data: age-55
- [ ] **P6-022**: Create audience data: age-60
- [ ] **P6-023**: Create audience data: age-65
- [ ] **P6-024**: Create audience data: age-70
- [ ] **P6-025**: Create audience data: firefighters (150 vol)
- [ ] **P6-026**: Create audience data: teachers
- [ ] **P6-027**: Create audience data: nurses
- [ ] **P6-028**: Create audience data: police
- [ ] **P6-029**: Create audience data: federal-employees
- [ ] **P6-030**: Create audience data: military
- [ ] **P6-031**: Create audience data: government-employees (30 vol)
- [ ] **P6-032**: Create audience data: small-business-owners ($4.50 CPC)
- [ ] **P6-033**: Create audience data: doctors
- [ ] **P6-034**: Create audience data: self-employed
- [ ] **P6-035**: Create audience data: high-net-worth
- [ ] **P6-036**: Create audience data: conservative-investors
- [ ] **P6-037**: Create audience data: near-retirement ($3 CPC)
- [ ] **P6-038**: Create audience data: first-responders

### 6.5 Audience Components
- [ ] **P6-039**: Create `src/components/audience/AudienceHero.tsx`
- [ ] **P6-040**: Create `src/components/audience/AudienceNeeds.tsx`
- [ ] **P6-041**: Create `src/components/audience/AccountTypes.tsx`
- [ ] **P6-042**: Create `src/components/audience/AudienceRolloverProcess.tsx`
- [ ] **P6-043**: Create `src/components/audience/AudienceCaseStudies.tsx`
- [ ] **P6-044**: Create `src/components/audience/AudienceFAQ.tsx`

### 6.6 Audience Pages
- [ ] **P6-045**: Create `src/app/for/page.tsx` - audience hub
- [ ] **P6-046**: Create `src/app/for/[audience]/page.tsx` - audience template
- [ ] **P6-047**: Add generateStaticParams for audiences
- [ ] **P6-048**: Add generateMetadata for audience pages

### 6.7 Final Navigation Updates
- [ ] **P6-049**: Implement full Golden Circle navigation
- [ ] **P6-050**: Create footer with all section links
- [ ] **P6-051**: Add breadcrumb navigation to all pages
- [ ] **P6-052**: Create sitemap.xml generator
- [ ] **P6-053**: Create robots.txt

---

# FINAL QUALITY CHECKS

- [ ] **QC-001**: Run TypeScript type check on all files
- [ ] **QC-002**: Run ESLint on all files
- [ ] **QC-003**: Test all dynamic routes generate correctly
- [ ] **QC-004**: Verify all Augusta CTAs are working
- [ ] **QC-005**: Test mobile responsiveness on all page types
- [ ] **QC-006**: Verify internal linking structure
- [ ] **QC-007**: Check Core Web Vitals on sample pages
- [ ] **QC-008**: Validate all JSON-LD structured data
- [ ] **QC-009**: Test navigation on all screen sizes
- [ ] **QC-010**: Final build test and deploy

---

## PROGRESS TRACKING

| Phase | Total Tasks | Completed | Percentage |
|-------|-------------|-----------|------------|
| 1     | 48          | 0         | 0%         |
| 2     | 35          | 0         | 0%         |
| 3     | 33          | 0         | 0%         |
| 4     | 52          | 0         | 0%         |
| 5     | 42          | 0         | 0%         |
| 6     | 53          | 0         | 0%         |
| QC    | 10          | 0         | 0%         |
| **TOTAL** | **273** | **0**     | **0%**     |

---

*Last Updated: January 2026*
