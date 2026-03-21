# SEO & GEO Domination Plan — Handover Brief

## STATUS: In Progress (Phase 3 partially complete)
**Date:** 2026-03-21
**Plan file:** `.claude/plans/greedy-sleeping-goblet.md`

---

## WHAT WAS COMPLETED THIS SESSION

### News Audit (separate PR, merged)
- Deleted 1,242 thin AI news articles, kept 116 quality pieces
- Pipeline: cron fixed to 3x daily, AUTO_PUBLISH set to false (manual GitHub edit done)

### SEO Phase 1: Calculator Metadata
- Created layout.tsx with metadata for 6 calculators missing titles/descriptions:
  - 72t-calculator, fers-calculator, medicaid-calculator
  - money-longevity-calculator, retirement-spending-calculator, social-security-break-even-calculator

### SEO Phase 2: Twitter Cards
- Already in place (root layout + createPageMetadata helper both have twitter config)

### SEO Phase 3: AnswerFirst Rollout (PARTIALLY COMPLETE)
- Added `answerFirst` + `answerFirstFacts` fields to LearnArticle type
- Wired AnswerFirst component into learn article template (renders when data present)
- **31 of 79 cluster files updated** with answerFirst data (~150 articles)

Clusters completed:
- safety, rmd, life-events, loans, fees, roth, market-fear, target-date, enrollment, protection
- gold-ira-decisions, gold-ira-comparison, how-gold-benefits (1&2), how-strategy (1&2)
- fire-movement, healthcare-gap, checkbook-ira, alternative-ira
- federal-retirement, federal-expansion, federal-veterans
- state-pensions (1&2), wep-gpo (1&2), railroad-retirement (1&2)
- couples-psychology, couples-retirement

### SEO Phase 6: Structural Fixes (PARTIALLY COMPLETE)
- 401k rollover cannibalization: 3 redirects added (transfer/convert/move → rollover)
- Footer: Added /silver-experts and /silver-stocks links

---

## WHAT NEEDS DOING NEXT SESSION

### Phase 3 Remaining: AnswerFirst Data (~48 clusters)
Clusters still needing answerFirst data:
```
72t-sepp-cluster, annuity-cluster, company-401k-cluster, company-401k-expansion-cluster,
crash-proof-cluster, custodian-final-cluster, easy-wins-cluster, estate-legal-cluster,
financial-products-cluster, high-volume-cluster, infinite-banking-cluster,
influencer-cluster, influencer-expansion-cluster, influencer-final-cluster,
influencer-market-cluster, inheritance-dollar-articles, inheritance-process-articles,
inheritance-windfall-cluster, layoff-retirement-cluster, legal-beneficiary-cluster,
life-situations-retirement-cluster, market-fear-expansion-cluster,
medicaid-estate-cluster, medicaid-expansion-cluster, medicare-insurance-cluster,
misc-cluster, misc-expansion-cluster, pension-decisions-cluster,
professional-retirement-cluster, professional-retirement-expansion-cluster,
retire-abroad-cluster, retire-with-amount-cluster, retire-with-amount-expansion-cluster,
retirement-communities-cluster, retirement-ira-cluster, retirement-planning-final-cluster,
retirement-psychology-cluster, robs-expansion-cluster, scam-misc-cluster,
senior-care-costs-cluster, senior-living-cluster, state-retirement-taxes-cluster,
super-easy-cluster (1&2), tech-retirement-cluster, technical-expansion-cluster,
technical-retirement-cluster, zero-difficulty-cluster
```

### Phase 3 Remaining: Other Page Types
- Silver hub pages (9): Add AnswerFirst to each hub landing page
- Guide pages: Audit remaining without AnswerFirst
- Review pages template: Add AnswerFirst with rating pattern
- Calculator pages (44): Add brief AnswerFirst above each calculator
- Local/geo state pages: Add AnswerFirst to state template

### Phase 4: FAQ + Schema Expansion
- FAQSection on calculator, silver hub, review, guide pages
- HowTo schema on 44 calculators
- FinancialProduct schema on review pages
- ItemList schema on comparison/best-of pages

### Phase 5: E-E-A-T Rollout
- AuthorBox on learn articles, calculators, silver hubs
- TrustBar/ArticleMeta on guides, reviews, silver hubs
- SourcesSection on guide pages
- Review methodology link

---

## KEY FILES

| Purpose | Path |
|---------|------|
| SEO plan | `.claude/plans/greedy-sleeping-goblet.md` |
| AnswerFirst component | `src/components/seo/AnswerFirst.tsx` |
| Learn article type | `src/types/learn-article.ts` (has answerFirst fields) |
| Learn article template | `src/app/learn/[slug]/page.tsx` (renders AnswerFirst) |
| Learn article clusters | `src/data/learn-articles/*.ts` (79 files) |
| FAQSection component | `src/components/seo/FAQSection.tsx` |
| Schema helpers | `src/lib/schema.ts` (11 types built) |
| AuthorBox | `src/components/guide/AuthorBox.tsx` |
| ArticleMeta | `src/components/content/ArticleMeta.tsx` |
| TrustBar | `src/components/content/TrustBar.tsx` |
| SourcesSection | `src/components/content/SourcesSection.tsx` |
