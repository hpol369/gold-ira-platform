# FINAL EXECUTION PLAN - Ralph's Method
## Parallel Agent Deployment

**Created**: January 26, 2026
**Manager**: Claude Opus 4.5
**Goal**: Complete all remaining SEO phases

---

## AGENT DEPLOYMENT STRATEGY

Launch 5 parallel agents, each handling one phase:

| Agent | Phase | Focus | Articles | Priority |
|-------|-------|-------|----------|----------|
| Agent 1 | P14 | WEP/GPO Content | 4 articles | 🔥 DIFF 0 |
| Agent 2 | P15 | Company 401k Rollovers | 4 articles | 🔥 HIGH CPC |
| Agent 3 | P11 | State Pensions | 4 articles | 🔥 DIFF 0 |
| Agent 4 | P21 | Influencer Expansion | 4 articles | MEDIUM |
| Agent 5 | P10 | Federal Employee Hub | 3 articles | MEDIUM |

---

## AGENT 1: WEP/GPO CONTENT (P14)

**Cluster File**: `src/data/learn-articles/wep-gpo-expansion-cluster.ts`

### Articles to Create:
1. `wep-reform-2026` - Windfall Elimination Provision Reform 2026
   - Volume: 200, Diff: 0, CPC: $0.70
   - Keywords: wep reform 2026, social security fairness act

2. `wep-exemptions` - WEP Exemptions Guide
   - Volume: 150, Diff: 2, CPC: $0.50
   - Keywords: wep exemptions, who is exempt from wep

3. `gpo-social-security` - GPO and Social Security Explained
   - Volume: 500, Diff: 5, CPC: $1.00
   - Keywords: government pension offset, gpo social security

4. `wep-calculator-guide` - Understanding WEP Calculations
   - Volume: 300, Diff: 3, CPC: $0.80
   - Keywords: wep calculator, windfall elimination provision calculator

---

## AGENT 2: COMPANY 401K ROLLOVERS (P15)

**Cluster File**: `src/data/learn-articles/company-401k-expansion-cluster.ts`

### Articles to Create:
1. `empower-401k-rollover` - Empower 401k Rollover Guide
   - Volume: 150, Diff: 0, CPC: $5.00
   - Keywords: empower 401k rollover, empower retirement rollover

2. `adp-401k-rollover` - ADP 401k Rollover Guide
   - Volume: 120, Diff: 0, CPC: $4.00
   - Keywords: adp 401k rollover, adp retirement rollover

3. `john-hancock-401k-rollover` - John Hancock 401k Rollover
   - Volume: 100, Diff: 0, CPC: $3.50
   - Keywords: john hancock 401k rollover, john hancock retirement

4. `voya-401k-rollover` - Voya 401k Rollover Guide
   - Volume: 80, Diff: 0, CPC: $4.50
   - Keywords: voya 401k rollover, voya financial rollover

---

## AGENT 3: STATE PENSIONS (P11)

**Cluster File**: `src/data/learn-articles/state-pensions-expansion-cluster.ts`

### Articles to Create:
1. `calpers-retirement-guide` - CalPERS Retirement Complete Guide
   - Volume: 2,900, Diff: 0, CPC: $0.70
   - Keywords: calpers retirement, calpers pension

2. `calstrs-retirement-guide` - CalSTRS Retirement Guide for Teachers
   - Volume: 1,200, Diff: 0, CPC: $1.00
   - Keywords: calstrs retirement, california teacher retirement

3. `texas-trs-retirement` - Texas TRS Retirement Guide
   - Volume: 800, Diff: 0, CPC: $2.00
   - Keywords: texas trs retirement, texas teacher retirement

4. `nycers-pension-guide` - NYCERS Pension Guide
   - Volume: 400, Diff: 1, CPC: $1.50
   - Keywords: nycers pension, nyc employee retirement

---

## AGENT 4: INFLUENCER EXPANSION (P21)

**Cluster File**: `src/data/learn-articles/influencer-final-cluster.ts`

### Articles to Create:
1. `kiyosaki-vs-suze-orman` - Kiyosaki vs Suze Orman on Gold
   - Volume: 200, Diff: 5, CPC: $1.00
   - Keywords: kiyosaki vs suze orman, rich dad vs suze orman

2. `jim-rickards-dollar-collapse` - Jim Rickards Dollar Collapse Prediction
   - Volume: 150, Diff: 3, CPC: $0.80
   - Keywords: jim rickards, dollar collapse prediction

3. `lynette-zang-gold-predictions` - Lynette Zang Gold Predictions
   - Volume: 100, Diff: 2, CPC: $0.70
   - Keywords: lynette zang, lynette zang gold

4. `rich-dad-investment-strategy` - Rich Dad Investment Strategy Explained
   - Volume: 300, Diff: 4, CPC: $1.50
   - Keywords: rich dad investment strategy, kiyosaki investment advice

---

## AGENT 5: FEDERAL EMPLOYEE HUB (P10)

**Cluster File**: `src/data/learn-articles/federal-expansion-cluster.ts`

### Articles to Create:
1. `tsp-vs-gold-ira` - TSP vs Gold IRA Comparison
   - Volume: 200, Diff: 2, CPC: $3.00
   - Keywords: tsp vs gold ira, thrift savings plan gold

2. `fehb-retirement-guide` - FEHB in Retirement Guide
   - Volume: 500, Diff: 4, CPC: $2.50
   - Keywords: fehb retirement, federal employee health benefits retirement

3. `fers-supplement-explained` - FERS Supplement Explained
   - Volume: 800, Diff: 2, CPC: $1.40
   - Keywords: fers supplement, fers special retirement supplement

---

## ARTICLE STRUCTURE TEMPLATE

Each article MUST follow this LearnArticle structure:

```typescript
{
  slug: string,
  title: string,
  subtitle: string,
  metaTitle: string,
  metaDescription: string,
  keywords: string[],
  targetKeyword: string,
  volume: number,
  difficulty: number,
  cpc: number,
  category: ArticleCategory, // 'safety' | 'rmd' | 'life-events' | 'fees' | 'roth' | 'market-fear' | 'protection' | etc.
  threatLevel: 'low' | 'medium' | 'high',
  takeaways: string[], // 3-5 key takeaways
  tocItems: TocItem[], // Table of contents
  sections: ArticleSection[], // Main content sections
  goldBridge: {
    title: string,
    content: string,
    bullets: string[]
  },
  faqs: FAQ[], // 3-5 FAQs
  relatedArticles: string[],
  relatedGuides: string[]
}
```

---

## SUCCESS CRITERIA

Each agent must:
1. Create cluster file with all articles
2. Add cluster to `src/data/learn-articles/index.ts`
3. Verify build passes with `npm run build`
4. Report completion with article count

---

## POST-COMPLETION

After all agents complete:
1. Run final `npm run build`
2. Commit all changes
3. Push to GitHub
4. Update MASTER-SEO-PLAN.md status

---

*RALPH'S METHOD - Parallel Execution Plan*
