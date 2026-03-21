# Sprint 8 — Federal Employee Content Hub + Comparison Page GEO Pass

**Date:** 2026-03-20
**Architect:** Cowork | **Dev Lead:** Claude Code
**Focus:** Two parallel workstreams — (A) Build out the federal employee / government pension content hub that targets a completely underserved high-value audience, and (B) GEO-optimize all existing comparison pages that already have URLs but lack answer-first paragraphs, FAQ schema, and structured data.

---

## WHY THESE TWO

**Federal employee content** targets an audience that's almost perfectly aligned with Augusta: government workers (GS-12+) with $100k-$500k in TSP accounts, approaching retirement, anxious about whether their FERS pension + SS + TSP is enough. They're the definition of "serious savers who distrust Wall Street." Almost no Gold IRA affiliate site writes specifically for them.

**Comparison page GEO** is pure leverage. We already have 20+ `/compare/*` pages built and indexed. But based on the Sprint 7 audit, most of these lack AnswerFirst, FAQSection, and proper schema. Adding GEO optimization to existing indexed pages is the fastest path to AI citations — no new URLs needed, just making existing content machine-readable.

---

## PART A: FEDERAL EMPLOYEE CONTENT HUB

### What Exists
- `/guide/tsp-to-gold-ira-rollover` — TSP rollover guide (already GEO-optimized in Sprint 4)
- `/guide/457b-to-gold-ira-rollover` — 457(b) rollover guide
- `/tools/tsp-calculator` — TSP calculator
- Various rollover pages reference TSP

### What's Missing
A cohesive content hub targeting federal employees with interconnected pages covering their complete retirement picture: FERS pension, TSP, Social Security, healthcare (FEHB), and how gold fits into that picture.

### New Pages to Build (6 pages)

**Page 1: `/federal-retirement/` (Hub page)**
- Title: "Federal Employee Retirement Guide: FERS, TSP & Gold IRA Protection (2026)"
- Audience: Federal employees GS-9+ approaching retirement (age 50-65)
- Content: Overview of the 3-legged FERS stool (pension + TSP + SS), why each leg has risks, how gold fits as a 4th leg
- Links to all spoke pages
- Schema: Article + FAQPage + BreadcrumbList
- AnswerFirst: "Federal employees under FERS receive a retirement pension, Thrift Savings Plan (TSP) benefits, and Social Security — the 'three-legged stool.' But each leg carries risk: TSP is 100% market-exposed, FERS pensions don't keep up with inflation after retirement, and Social Security faces a 2033 trust fund shortfall. Diversifying 10-15% of your TSP into a Gold IRA after separation protects against all three risks."

**Page 2: `/federal-retirement/fers-pension-and-gold`**
- Title: "FERS Pension + Gold IRA: How Federal Employees Can Protect Their Retirement"
- Content: FERS pension calculation (1.1% × high-3 × years), FERS COLA adjustments (diet COLA — only partial CPI match after 62), how inflation erodes FERS purchasing power over 20-30 years, why gold hedges the gap
- Target query: "FERS pension gold IRA", "federal pension inflation protection"
- AnswerFirst: "A FERS pension provides 1% to 1.1% of your high-3 salary per year of service — a 30-year federal employee earning $95,000 receives roughly $31,350/year. But FERS cost-of-living adjustments (COLAs) are capped at CPI minus 1% when inflation exceeds 3%, meaning your pension loses purchasing power every year in a high-inflation environment. A Gold IRA can hedge this gap."

**Page 3: `/federal-retirement/tsp-to-gold-diversification`**
- Title: "TSP to Gold IRA: Why Federal Employees Are Diversifying Beyond the G, F, C, S, I Funds"
- Content: TSP fund analysis (G Fund = low return, C Fund = market-exposed, L Funds = no gold option), why TSP has zero precious metals exposure, in-service withdrawal rules vs. post-separation rollover, step-by-step TSP-to-Gold-IRA process
- Target query: "TSP gold", "TSP precious metals", "TSP alternatives"
- Differentiates from existing `/guide/tsp-to-gold-ira-rollover` by focusing on the WHY (fund analysis, risk exposure) rather than just the HOW (rollover steps)
- AnswerFirst: "The Thrift Savings Plan offers 5 core funds (G, F, C, S, I) and Lifecycle funds — but none include gold, silver, or any precious metals. This means your entire TSP is exposed to stock market risk and dollar devaluation. Federal employees who want gold exposure must roll over TSP funds into a self-directed Gold IRA, which is possible penalty-free after separating from federal service or at age 59½."

**Page 4: `/federal-retirement/fehb-retirement-healthcare`**
- Title: "Federal Employee Healthcare in Retirement: FEHB Costs & What to Plan For"
- Content: FEHB continuation rules (must be enrolled for 5 continuous years before retirement), FEHB premium costs in retirement, Medicare Part B + FEHB coordination, healthcare cost projections
- Target query: "FEHB in retirement", "federal employee healthcare retirement costs"
- This page builds trust and topical authority — not a direct gold play, but shows we understand the full federal retirement picture. CTA is softer: "Protect your healthcare budget from inflation with a Gold IRA"
- AnswerFirst: "Federal employees can keep their FEHB health insurance into retirement if they've been continuously enrolled for the 5 years before retirement. In retirement, you pay the same premiums as active employees — but without agency contributions, your share increases. Most federal retirees should also enroll in Medicare Part B at 65, adding $174.70+/month. Total healthcare costs often reach $6,000-$12,000/year in retirement."

**Page 5: `/federal-retirement/social-security-fairness-act`**
- Title: "Social Security Fairness Act 2025: What It Means for Federal Retirees"
- Content: WEP/GPO repeal explained, retroactive payments ($17 billion distributed), who's affected (2.8 million beneficiaries), new SS calculation for affected retirees, how increased SS income changes retirement planning, updated projections with gold allocation
- Target query: "Social Security Fairness Act", "WEP repeal", "GPO repeal federal employees"
- TIMELY content — this law was signed January 2025 and retroactive payments are still being processed
- AnswerFirst: "The Social Security Fairness Act, signed into law in January 2025, eliminated both the Windfall Elimination Provision (WEP) and Government Pension Offset (GPO). This means approximately 2.8 million public-sector retirees — including many federal employees — will receive higher Social Security benefits. The SSA has already distributed $17 billion in retroactive payments. For many federal retirees, this extra income creates an opportunity to diversify into gold without reducing their monthly cash flow."

**Page 6: `/federal-retirement/military-tsp-rollover`**
- Title: "Military TSP to Gold IRA: Rollover Guide for Veterans & Service Members"
- Content: Blended Retirement System (BRS) overview, military TSP specifics, combat zone TSP contributions (Roth), VA disability + Gold IRA considerations, TSP rollover after separation/retirement
- Target query: "military TSP gold IRA", "veteran retirement gold"
- AnswerFirst: "Military service members under the Blended Retirement System (BRS) receive matching TSP contributions up to 5% of base pay. After separating from service, you can roll over your military TSP into a self-directed Gold IRA tax-free through a direct rollover. This applies to both traditional and Roth TSP balances, including combat zone contributions."

### Hub Internal Linking
Add to `src/data/internal-links.ts`:
```typescript
"federal-retirement": {
  hub: { url: "/federal-retirement", title: "Federal Employee Retirement Guide" },
  spokes: [
    { url: "/federal-retirement/fers-pension-and-gold", title: "FERS Pension + Gold IRA" },
    { url: "/federal-retirement/tsp-to-gold-diversification", title: "TSP to Gold Diversification" },
    { url: "/federal-retirement/fehb-retirement-healthcare", title: "FEHB Healthcare in Retirement" },
    { url: "/federal-retirement/social-security-fairness-act", title: "Social Security Fairness Act" },
    { url: "/federal-retirement/military-tsp-rollover", title: "Military TSP Rollover" },
    { url: "/guide/tsp-to-gold-ira-rollover", title: "TSP to Gold IRA Rollover Steps" },
    { url: "/guide/457b-to-gold-ira-rollover", title: "457(b) Rollover Guide" },
  ],
},
```

Cross-links FROM existing pages:
- `/guide/tsp-to-gold-ira-rollover` → link to federal-retirement hub
- `/rollover` → add federal retirement section
- `/tools/tsp-calculator` → link to federal-retirement hub
- `/is-enough-to-retire/*` → link to federal-retirement pages where relevant

### Technical Per Page
- Dynamic route: `src/app/federal-retirement/[slug]/page.tsx` with data file
- OR static pages if content varies significantly per page
- AnswerFirst + FAQSection (5 FAQs each) + SchemaScript (Article + FAQPage + BreadcrumbList)
- SidebarAuditWidget + InContentCTA + AugustaCTA footer
- RelatedContent linking to hub + other federal pages

---

## PART B: COMPARISON PAGE GEO PASS

### What Exists (20+ comparison pages, likely no GEO)

Check each of these for AnswerFirst, FAQSection, and schema:
```
/compare/gold-ira-vs-401k
/compare/gold-ira-vs-traditional-ira
/compare/gold-ira-vs-roth-ira
/compare/gold-ira-vs-physical-gold
/compare/gold-ira-vs-crypto
/compare/gold-ira-vs-gold-etf
/compare/gold-etf-vs-physical-gold
/compare/gold-stocks-vs-gold-ira
/compare/gold-vs-silver-ira
/compare/augusta-vs-goldco
/compare/goldco-vs-augusta
/compare/augusta-vs-noble-gold
/compare/goldco-vs-american-hartford-gold
/compare/noble-gold-vs-birch-gold
/compare/goldco-vs-lear-capital
/compare/american-hartford-vs-oxford-gold
/compare/lear-capital-vs-noble-gold
/compare/[comparison] (dynamic route)
/compare/gold-vs/[asset] (dynamic route)
```

### What to Add Per Comparison Page

1. **AnswerFirst paragraph** — Direct verdict in first 2 sentences
   - Example for `/compare/gold-ira-vs-401k`: "A Gold IRA and a 401(k) are both tax-advantaged retirement accounts, but they hold fundamentally different assets. A 401(k) holds paper investments (stocks, bonds, mutual funds) and is employer-sponsored, while a Gold IRA holds physical precious metals and is self-directed. For investors concerned about market crashes and inflation, a Gold IRA provides protection that a 401(k) cannot."

2. **FAQSection** with 3-5 comparison FAQs per page
   - "Can I have both a Gold IRA and a 401k?"
   - "Is a Gold IRA better than a 401k for retirement?"
   - "How do I move my 401k to a Gold IRA?"

3. **Schema:** ItemList (for ranked comparisons) or Article + FAQPage

4. **Check:** Do these pages use `directToAugusta` on their CTAs? Company-vs-company comparisons should link to the winner's affiliate. Product-vs-product comparisons should link to `/get-started`.

### Dynamic Routes
The `/compare/[comparison]/page.tsx` and `/compare/gold-vs/[asset]/page.tsx` dynamic routes handle many of these. If GEO components can be added to the template, it applies to ALL dynamic comparison pages at once — similar to the `learn/[slug]` win from Sprint 7.

**Priority:** Check the dynamic route templates first. If they already render structured data, we just need AnswerFirst + FAQSection added. If not, one edit covers 20+ pages.

---

## PART C: SITEMAP & NAVIGATION UPDATES

1. Add `/federal-retirement` and all sub-pages to `src/app/sitemap.ts`
2. Add federal retirement to footer links under "Guides" or "Resources"
3. Add to navbar "Learn" dropdown if appropriate
4. Update `src/data/internal-links.ts` with federal retirement hub

---

## EXECUTION ORDER

```
PHASE 1: Federal Retirement Hub (biggest new content)
  1. Create data structure for federal retirement pages
  2. Build hub page /federal-retirement
  3. Build 5 sub-pages (FERS pension, TSP diversification, FEHB healthcare, SS Fairness Act, Military TSP)
  4. Add internal linking + sitemap entries

PHASE 2: Comparison Page GEO Pass
  5. Audit /compare/[comparison]/page.tsx and /compare/gold-vs/[asset]/page.tsx templates
  6. Add AnswerFirst + FAQSection + schema to dynamic templates
  7. Create FAQ data for top 10 static comparison pages
  8. Verify schema renders on comparison pages

PHASE 3: Cross-linking + Navigation
  9. Update internal-links.ts with federal hub
  10. Add federal retirement to footer/nav
  11. Cross-link from existing TSP, rollover, retirement pages

PHASE 4: Verification
  12. npm run build — zero errors
  13. All 6 federal pages render with full GEO markup
  14. Comparison pages show AnswerFirst + FAQs
  15. Schema validates (spot check with Google Rich Results Test)
  16. All internal links work
  17. Sitemap includes new pages
```

---

## CONTENT QUALITY STANDARD

### Federal Retirement Pages Must:
- Reference specific FERS formulas (1.1% × high-3 × years)
- Include actual TSP fund names (G, F, C, S, I, L funds)
- Cite OPM, TSP.gov, and SSA.gov as sources
- Use GS pay scale examples ($75k, $95k, $120k)
- Address real federal employee concerns (RIF anxiety, sequestration impact, FERS supplement)
- Written in brand voice — blue-collar government workers, not policy wonks
- 2,000-3,500 words per page
- Include comparison: "Federal employee with $300k TSP at age 60" scenarios

### Comparison Pages Must:
- Open with a clear verdict, not "it depends"
- Include a structured comparison table (features side by side)
- Answer the "which is better for me?" question
- 3-5 FAQs matching People Also Ask queries

---

## EXPECTED IMPACT

| Metric | Before Sprint 8 | After Sprint 8 |
|--------|-----------------|----------------|
| Federal retirement pages | 2 (TSP rollover + 457b) | 8 (hub + 6 spokes + existing 2) |
| Comparison pages with GEO | ~0 | 20+ |
| Federal employee keyword coverage | Low (just "TSP rollover") | Comprehensive (FERS, TSP, FEHB, WEP/GPO, military) |
| Pages targeting federal workers | 2 | 8 |
| Comparison pages with FAQ schema | ~0 | 20+ |

---

RALPH_STATUS:
- PHASE: Sprint 8 (Federal Content + Comparison GEO)
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Research done, plan written
- BLOCKERS: None
