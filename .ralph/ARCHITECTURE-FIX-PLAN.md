# Architecture Fix Plan - Post Phase 4 Audit

## Critical Issues Found

### 1. ORPHANED CALCULATORS (26 tools hidden)
Built but not visible on /tools page:
- All 5 FIRE calculators
- All California pension calculators (CalPERS x2, CalSTRS)
- All new federal calculators (FERS Supplement, FERS Annuity, TSP)
- All pension decision tools
- All high-CPC tools (Reverse Mortgage, HECM, Inheritance)
- All estate tools (Inherited IRA RMD, CRT, WEP)
- Monte Carlo, Sequence of Returns, Longevity, Solo 401k

### 2. SITEMAP MISSING 29 TOOLS
Only 10 tools in sitemap - devastating for SEO

### 3. BROKEN LINKS IN ARTICLES (10 referenced tools don't exist)
- /tools/gold-ira-calculator (5 refs) - CRITICAL
- /tools/gold-allocation-calculator (5 refs) - CRITICAL
- /tools/fire-calculator (5 refs) - CRITICAL
- /tools/unvested-401k-calculator (3 refs)
- /tools/401k-fee-analyzer (1 ref)
- /tools/roth-ira-calculator (1 ref)
- /tools/retirement-healthcare-calculator (1 ref)
- /tools/pension-buyout-calculator (1 ref)
- /tools/pension-comparison-calculator (1 ref)
- /tools/pension-risk-analyzer (1 ref)

### 4. WEALTH-CALCULATOR LINKS TO ANCHOR
Links to /#wealth-calculator instead of actual tool page

---

## EXECUTION PLAN

### Wave 1: Fix Tools Hub Page (Agent A1)
**File:** `/src/app/tools/page.tsx`

Add ALL 39 calculators organized by category:
```
- FIRE & Wealth Building (6)
- Federal Employee (5)
- State Pensions (3)
- Social Security & Medicare (4)
- Retirement Planning (8)
- Pension Decisions (3)
- Estate & Inheritance (4)
- Risk Analysis (4)
- Special Situations (2)
```

### Wave 2: Fix Sitemap (Agent A2)
**File:** `/src/app/sitemap.ts`

Add all 39 tools to toolsPages array with proper lastmod dates.

### Wave 3: Create Missing Critical Calculators (Agents A3-A5)
Build the 3 most-referenced missing tools:

**Agent A3: Gold IRA Calculator**
- /tools/gold-ira-calculator
- Keywords: gold ira calculator, gold ira investment calculator
- Calculate how gold allocation affects retirement portfolio

**Agent A4: Gold Allocation Calculator**
- /tools/gold-allocation-calculator
- Keywords: gold allocation calculator, portfolio gold percentage
- Optimal gold % based on age, risk tolerance, goals

**Agent A5: FIRE Calculator (General)**
- /tools/fire-calculator
- Keywords: fire calculator, financial independence calculator
- General FIRE number + timeline calculator

### Wave 4: Fix Broken Article References (Agent A6)
Update learn article clusters to:
1. Point to correct existing tools OR
2. Point to newly created tools from Wave 3
3. Remove references to tools that won't be built

Files to update:
- safety-cluster.ts
- market-fear-cluster.ts
- fire-movement-cluster.ts
- pension-decisions-cluster.ts
- Any others with broken refs

### Wave 5: Enhance Navigation (Agent A7)
**Files:**
- `/src/components/layout/Navbar.tsx`
- `/src/components/layout/Footer.tsx`

Add Tools mega-menu with categories in Navbar.
Expand footer tool links by category.

---

## Expected Outcome

| Metric | Before | After |
|--------|--------|-------|
| Tools on hub page | 14 | 42 |
| Tools in sitemap | 10 | 42 |
| Broken article links | 10 | 0 |
| Discoverable tools | 36% | 100% |

---

## Agent Assignments

| Agent | Task | Files |
|-------|------|-------|
| A1 | Update tools hub page | /src/app/tools/page.tsx |
| A2 | Update sitemap | /src/app/sitemap.ts |
| A3 | Build Gold IRA Calculator | /src/app/tools/gold-ira-calculator/* |
| A4 | Build Gold Allocation Calculator | /src/app/tools/gold-allocation-calculator/* |
| A5 | Build FIRE Calculator | /src/app/tools/fire-calculator/* |
| A6 | Fix broken article refs | /src/data/learn-articles/*.ts |
| A7 | Enhance navigation | Navbar.tsx, Footer.tsx |
