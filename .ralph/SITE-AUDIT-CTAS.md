# CTA Coverage Audit Report

**Date:** January 27, 2026
**Total Pages:** 301
**Pages with AugustaCTA:** 197 (65%)
**Pages without AugustaCTA:** 104 (35%)

---

## Executive Summary

The site has a solid CTA strategy with multiple CTA types available:
1. **AugustaCTA** - Primary affiliate CTA component (5 variants: default, sidebar, inline, footer, banner)
2. **StickyMobileCTA** - Mobile-only sticky bar for review pages
3. **QuizCTA** - Quiz/audit discovery CTA
4. **LeadCaptureForm** - Full lead capture form
5. **NewsletterSignup** - Email newsletter signup

However, **104 pages (35%) do not import the AugustaCTA component**. While some pages have valid reasons (legal pages, admin pages), many content pages are missing CTAs and represent lost conversion opportunities.

---

## Pages with PROPER CTAs

### Category 1: Dynamic Templates with Built-in CTAs
These templates automatically include CTAs for all generated pages:

| Template | CTA Type | Count | Notes |
|----------|----------|-------|-------|
| `/reviews/[company]/page.tsx` | AugustaCTA (inline, sidebar, footer) + StickyMobileCTA | ~30+ pages | Excellent - multiple CTAs |
| `/learn/[slug]/page.tsx` | AugustaCTA (footer) + InContentCTA + MobileStickyBar | ~25+ pages | Excellent coverage |
| `/rollover/[slug]/page.tsx` | AugustaCTA | Variable | Good |
| `/scenarios/[slug]/page.tsx` | AugustaCTA | Variable | Good |
| `/grandchildren/[slug]/page.tsx` | AugustaCTA | Variable | Good |
| `/widow-guide/[slug]/page.tsx` | AugustaCTA | Variable | Good |
| `/senior-protection/[slug]/page.tsx` | AugustaCTA | Variable | Good |
| `/medicaid-planning/[slug]/page.tsx` | AugustaCTA | Variable | Good |
| `/best-gold-ira-for/[audience]/page.tsx` | AugustaCTA | Variable | Good |

### Category 2: High-Value Pages with Strong CTAs

| Page | CTA Types | Notes |
|------|-----------|-------|
| `/best-gold-ira-companies` | AugustaCTA (footer) + StickyMasterSidebar | Primary money page - good |
| `/silver-ira` | AugustaCTA (footer) with silver context | Good silver-specific CTA |
| `/silver-squeeze` | AugustaCTA (footer) with silver context | Good |
| `/silver-price/*` | AugustaCTA | Good coverage |
| `/silver-retirement/*` | AugustaCTA | Good coverage |
| `/guide/*` (most pages) | AugustaCTA | Good |
| `/learn/*` (most pages) | AugustaCTA | Good |
| `/tools/*` (most pages) | AugustaCTA | Good |

### Category 3: Homepage
| Page | CTA Types | Notes |
|------|-----------|-------|
| `/` (homepage) | QuizCTA + FeaturedPartner + NewsletterSignup + ComparisonTable | Multiple CTAs, no direct AugustaCTA but FeaturedPartner serves same purpose |

---

## CRITICAL: Pages MISSING CTAs

### Priority 1: HIGH-VALUE CONTENT PAGES (Must Fix)

These pages have substantial content but NO CTAs - highest priority:

| Page | Issue | Recommendation |
|------|-------|----------------|
| `/compare/gold-ira-vs-401k` | No AugustaCTA, only quiz link | ADD AugustaCTA footer |
| `/compare/gold-ira-vs-roth-ira` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/gold-ira-vs-physical-gold` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/gold-ira-vs-gold-etf` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/gold-ira-vs-crypto` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/gold-ira-vs-traditional-ira` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/augusta-vs-goldco` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/augusta-vs-noble-gold` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/goldco-vs-lear-capital` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/goldco-vs-american-hartford-gold` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/lear-capital-vs-noble-gold` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/noble-gold-vs-birch-gold` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/american-hartford-vs-oxford-gold` | No AugustaCTA | ADD AugustaCTA footer |
| `/compare/page.tsx` (hub) | No AugustaCTA | ADD AugustaCTA footer |

### Priority 2: REVIEW PAGES WITHOUT AUGUSTA CTA

Static review pages that have StickyMasterSidebar but may lack proper CTAs:

| Page | Current CTAs | Recommendation |
|------|--------------|----------------|
| `/reviews/augusta-precious-metals` | VerdictBox + Button | Has custom CTA, OK |
| `/reviews/goldco` | VerdictBox + Button + StickyMobileCTA | Has custom CTA, OK |
| `/reviews/noble-gold` | Check if AugustaCTA inline/footer | Verify |
| `/reviews/birch-gold` | Check if AugustaCTA inline/footer | Verify |
| `/reviews/american-hartford-gold` | Check if AugustaCTA inline/footer | Verify |
| All `/reviews/*-complaints` pages | Usually have CTAs | Verify |

### Priority 3: TOOL PAGES MISSING CTAs

These calculator pages have high engagement but no direct CTA:

| Page | Issue | Recommendation |
|------|-------|----------------|
| `/tools/gold-ira-calculator` | No AugustaCTA | ADD - perfect conversion point |
| `/tools/gold-allocation-calculator` | No AugustaCTA | ADD |
| `/tools/fire-calculator` | No AugustaCTA | ADD |
| `/tools/fire-number-calculator` | No AugustaCTA | ADD |
| `/tools/fat-fire-calculator` | No AugustaCTA | ADD |
| `/tools/lean-fire-calculator` | No AugustaCTA | ADD |
| `/tools/coast-fire-calculator` | No AugustaCTA | ADD |
| `/tools/barista-fire-calculator` | No AugustaCTA | ADD |
| `/tools/401k-risk-analyzer` | No AugustaCTA | ADD - high relevance |

### Priority 4: ALTERNATIVE IRA PAGES

These pages discuss alternatives but should still have a Gold/Silver IRA CTA:

| Page | Issue | Recommendation |
|------|-------|----------------|
| `/crypto-ira` | No AugustaCTA | ADD - many readers also want gold |
| `/real-estate-ira` | No AugustaCTA | ADD |
| `/self-directed-ira` | No AugustaCTA | ADD |
| `/solo-401k` | No AugustaCTA | ADD |
| `/robs-401k` | No AugustaCTA | ADD |
| `/best-crypto-ira-companies` | No AugustaCTA | ADD diversification angle |

### Priority 5: SILVER PAGES MISSING SILVER-SPECIFIC CTAs

Some silver pages lack any CTA:

| Page | Issue | Recommendation |
|------|-------|----------------|
| `/silver-squeeze/banks-shorting-silver` | No CTA | ADD AugustaCTA (silver context) |
| `/silver-squeeze/paper-silver-vs-physical` | No CTA | ADD AugustaCTA (silver context) |
| `/silver-squeeze/silver-manipulation` | No CTA | ADD AugustaCTA (silver context) |

---

## ACCEPTABLE: Pages Appropriately Without CTAs

These pages should NOT have aggressive CTAs:

| Page | Reason |
|------|--------|
| `/privacy-policy` | Legal page - no CTA appropriate |
| `/terms-of-service` | Legal page - no CTA appropriate |
| `/editorial-policy` | Trust page - no CTA appropriate |
| `/about-us` | Has soft CTA to Academy/Top Picks - OK |
| `/contact` | Contact page - no hard CTA appropriate |
| `/thank-you` | Post-conversion page - no additional CTA needed |
| `/admin/conversions` | Admin page - no CTA needed |
| `/quiz` | IS the CTA destination - no additional CTA needed |
| `/audit` | IS a CTA destination - no additional CTA needed |
| `/get-started` | LeadCaptureForm IS the CTA |

---

## MISMATCHED CTAs

### Issue: Gold CTAs on Silver Content

Most silver pages correctly use `linkContext="silver"` for the AugustaCTA, which is good. However, verify these silver-focused pages have appropriate silver messaging:

| Page | Current State | Recommendation |
|------|---------------|----------------|
| `/silver-ira/*` | Uses `linkContext="silver"` | GOOD |
| `/silver-squeeze/*` | Uses `linkContext="silver"` | GOOD |
| `/silver-price/*` | Uses `linkContext="silver"` | GOOD |
| `/silver-retirement/*` | Verify linkContext | CHECK |
| `/silver-products/*` | Verify linkContext | CHECK |
| `/silver-coin-values/*` | Verify linkContext | CHECK |
| `/silver-dealer-reviews/*` | Verify linkContext | CHECK - may not need Augusta CTA |
| `/buy-sell-silver/*` | Verify linkContext | CHECK - may not need Augusta CTA |

---

## Recommendations

### Immediate Actions (High Priority)

1. **Add AugustaCTA to ALL `/compare/*` pages** - These are high-intent comparison pages where readers are evaluating options. Every one should have a footer CTA.

2. **Add AugustaCTA to tool calculators** - Users engaging with calculators are high-intent. Add CTA below calculator results.

3. **Add AugustaCTA to alternative IRA pages** - `/crypto-ira`, `/real-estate-ira`, `/self-directed-ira`, `/solo-401k`, `/robs-401k` - readers interested in alternatives often want gold too.

4. **Fix missing silver page CTAs** - Ensure `/silver-squeeze/banks-shorting-silver`, `/silver-squeeze/paper-silver-vs-physical`, `/silver-squeeze/silver-manipulation` have CTAs.

### Medium Priority

5. **Verify all silver pages use `linkContext="silver"`** for appropriate messaging.

6. **Create a standard "calculator results" CTA component** that appears after users complete calculations.

7. **Consider adding inline CTAs mid-content** on longer compare pages.

### Low Priority

8. **Audit news pages** - `/news/[slug]` has a custom CTA box but doesn't use AugustaCTA. Consider standardizing.

9. **Consider adding a soft CTA to `/about-us`** - Currently links to Academy but could have subtle Augusta mention.

---

## Summary Statistics

| Category | Count | Percentage |
|----------|-------|------------|
| Pages with AugustaCTA | 197 | 65% |
| Pages needing AugustaCTA added | ~40 | 13% |
| Pages appropriately without CTA | ~15 | 5% |
| Pages with alternative CTAs (quiz, newsletter) | ~10 | 3% |
| Dynamic template pages (auto-include CTA) | ~40 | 13% |

**Key Finding:** The `/compare/*` section is the biggest gap. All 14+ comparison pages lack the AugustaCTA component despite being high-conversion intent pages.

---

## Implementation Checklist

- [ ] Add AugustaCTA to `/compare/gold-ira-vs-401k`
- [ ] Add AugustaCTA to `/compare/gold-ira-vs-roth-ira`
- [ ] Add AugustaCTA to `/compare/gold-ira-vs-physical-gold`
- [ ] Add AugustaCTA to `/compare/gold-ira-vs-gold-etf`
- [ ] Add AugustaCTA to `/compare/gold-ira-vs-crypto`
- [ ] Add AugustaCTA to `/compare/gold-ira-vs-traditional-ira`
- [ ] Add AugustaCTA to all company comparison pages
- [ ] Add AugustaCTA to `/compare/page.tsx` hub
- [ ] Add AugustaCTA to `/tools/gold-ira-calculator`
- [ ] Add AugustaCTA to `/tools/401k-risk-analyzer`
- [ ] Add AugustaCTA to all FIRE calculator pages
- [ ] Add AugustaCTA to `/crypto-ira`
- [ ] Add AugustaCTA to `/real-estate-ira`
- [ ] Add AugustaCTA to `/self-directed-ira`
- [ ] Add AugustaCTA to `/solo-401k`
- [ ] Add AugustaCTA to `/robs-401k`
- [ ] Fix CTAs on missing silver-squeeze pages
- [ ] Verify silver pages use `linkContext="silver"`
