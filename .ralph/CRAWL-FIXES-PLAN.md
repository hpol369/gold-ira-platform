# Crawl Issues Fix Plan

## Issues Found

### CRITICAL - Orphan Pages (No Internal Links)
1. `/investigative-hub` - Not linked from anywhere
2. `/resources` - Not linked from anywhere

### WARNING - Titles Too Long
1. `/reviews/augusta-precious-metals` - 82 chars (max 60)
2. `/reviews/money-metals-exchange` - 76 chars
3. `/reviews/orion-metal-exchange` - 72 chars
4. `/reviews/american-hartford-gold` - 71 chars

### WARNING - Meta Descriptions Too Long
1. `/reviews/american-bullion` - 176 chars (max 155)
2. `/reviews/augusta-precious-metals` - 169 chars

### NOTICE - Pages with Only 1 Internal Link
~30 pages need more cross-linking for SEO juice distribution

---

## EXECUTION PLAN - 4 PARALLEL AGENTS

### Agent F1: Fix Orphan Pages (Navigation)
**Files:**
- `src/components/layout/Navbar.tsx` - Add links to investigative-hub, resources
- `src/components/layout/Footer.tsx` - Add links to investigative-hub, resources

**Tasks:**
- Add "Resources" link to Navbar
- Add "Investigative Hub" or "Red Flags" link to Navbar (under Reviews or separate)
- Add both to Footer in appropriate sections

### Agent F2: Fix Title Lengths
**Files:**
- `src/app/reviews/augusta-precious-metals/page.tsx`
- `src/app/reviews/money-metals-exchange/page.tsx`
- `src/app/reviews/orion-metal-exchange/page.tsx`
- `src/app/reviews/american-hartford-gold/page.tsx`

**Tasks:**
- Shorten titles to under 60 characters while keeping SEO value
- Keep year (2026) and key info

### Agent F3: Fix Meta Description Lengths
**Files:**
- `src/app/reviews/american-bullion/page.tsx`
- `src/app/reviews/augusta-precious-metals/page.tsx`

**Tasks:**
- Shorten meta descriptions to under 155 characters
- Keep compelling copy and key selling points

### Agent F4: Improve Internal Linking
**Files:**
- `src/components/layout/Footer.tsx` - Add more review/guide links
- Various cluster files - Add more relatedArticles cross-links

**Tasks:**
- Add more review links to Footer
- Add more guide links to Footer
- Ensure key pages have 3+ internal links

---

## Expected Outcome

| Issue | Before | After |
|-------|--------|-------|
| Orphan pages | 2 | 0 |
| Titles too long | 4 | 0 |
| Meta desc too long | 2 | 0 |
| Pages with 1 link | ~30 | <15 |

---

## Title Fixes (Reference)

| Page | Current (chars) | Fixed (target <60) |
|------|-----------------|-------------------|
| augusta-precious-metals | "Augusta Precious Metals Review (2026): Fees, Complaints & Real Customer Experience" (82) | "Augusta Precious Metals Review 2026: Fees & Ratings" |
| money-metals-exchange | "Money Metals Exchange Review (2026): Starter Packs & Investopedia's Top Pick" (76) | "Money Metals Exchange Review 2026: Honest Analysis" |
| orion-metal-exchange | "Orion Metal Exchange Review (2026): $5,000 Minimum & Transparent Pricing" (72) | "Orion Metal Exchange Review 2026: Fees & Ratings" |
| american-hartford-gold | "American Hartford Gold Review (2026): Honest Analysis of Fees & Service" (71) | "American Hartford Gold Review 2026: Fees & Service" |

## Meta Description Fixes (Reference)

| Page | Current | Fixed (target <155) |
|------|---------|---------------------|
| american-bullion | 176 chars | Trim to ~150 chars |
| augusta-precious-metals | 169 chars | Trim to ~150 chars |
