# UI Conversion Overhaul - Ralph Implementation Plan

## Goal
Improve user experience and conversion rates across all 901 pages without changing URLs or site structure.

---

## PHASE 1: HIGH-IMPACT COMPONENTS (5 Agents)

### Agent U1: Sidebar Conversion Widget
**Problem:** Learn pages (391 pages) have only TOC in sidebar - zero conversion elements
**Solution:** Create `SidebarAuditWidget` component that stacks below TOC

**Files:**
- CREATE: `src/components/widgets/SidebarAuditWidget.tsx`
- EDIT: `src/components/guide/TableOfContents.tsx` → Export as separate component
- EDIT: `src/app/learn/[slug]/page.tsx` → Add widget below TOC

**Widget Design:**
```
┌─────────────────────────┐
│ 🎯 Is Your 401(k)       │
│    at Risk?             │
│                         │
│ Take the 60-second      │
│ Sovereign Wealth Audit  │
│                         │
│ [Get Your Free Score →] │
│                         │
│ ✓ 12,847 audits today   │
└─────────────────────────┘
```

---

### Agent U2: Mobile Sticky CTA Bar
**Problem:** Sidebar widgets invisible on mobile (50%+ of traffic)
**Solution:** Create sticky bottom bar for mobile only

**Files:**
- CREATE: `src/components/widgets/MobileStickyBar.tsx`
- EDIT: `src/app/learn/[slug]/page.tsx` → Add mobile bar
- EDIT: `src/app/guide/[slug]/page.tsx` → Add mobile bar (if exists)

**Design:**
```
┌──────────────────────────────────────┐
│ 🛡️ Free Portfolio Audit  [Start →] │
└──────────────────────────────────────┘
```

---

### Agent U3: Homepage Flow Optimization
**Problem:** QuizCTA buried at position 7 of 12 sections
**Solution:** Move QuizCTA earlier + add mini-CTA after hero

**Files:**
- EDIT: `src/app/page.tsx`
  - Move QuizCTA to position 4 (after WealthCalculator)
  - Add inline mini-CTA after AuthoritySection

**New Flow:**
1. WhySection (emotional hook)
2. AuthoritySection (credibility)
3. DeepWhySection (mission)
4. WealthCalculator (pain)
5. **QuizCTA (solution) ← MOVED UP**
6. DailyBrief
7. ValueProps
8. HowSection
9. FeaturedPartner
10. Testimonials
11. UrgencySection
12. Newsletter
13. ComparisonTable
14. TrustBadges

---

### Agent U4: Navbar CTA Improvement
**Problem:** "Get Free Consultation" is generic and salesy
**Solution:** More benefit-focused, trust-building CTA

**Files:**
- EDIT: `src/components/layout/Navbar.tsx`

**Change:**
- FROM: "Get Your Free Consultation"
- TO: "Free Portfolio Checkup" or "Check Your Retirement Risk"
- Keep linking to Augusta (high-intent users), not audit

---

### Agent U5: In-Content CTA Injection
**Problem:** Learn articles have CTA only at bottom
**Solution:** Add contextual mid-article CTA after 3rd section

**Files:**
- CREATE: `src/components/widgets/InContentCTA.tsx`
- EDIT: `src/app/learn/[slug]/page.tsx` → Inject after section 3

**Design:** Subtle, native-looking card that doesn't break reading flow

---

## PHASE 2: TRUST & ENGAGEMENT (3 Agents)

### Agent U6: Exit Intent Modal
**Problem:** Users leave without converting
**Solution:** Exit intent popup offering free guide download

**Files:**
- CREATE: `src/components/widgets/ExitIntentModal.tsx`
- EDIT: `src/app/layout.tsx` → Add modal provider

**Trigger:** Mouse leaving viewport (desktop) or back button (mobile)
**Offer:** "Before you go - Download our free Gold IRA Guide"

---

### Agent U7: Social Proof Ticker
**Problem:** No real-time social proof
**Solution:** Subtle notification showing recent activity

**Files:**
- CREATE: `src/components/widgets/SocialProofTicker.tsx`
- EDIT: `src/app/layout.tsx` → Add ticker

**Example:**
```
"Sarah from Texas just requested her free kit" (fades in/out bottom left)
```

---

### Agent U8: Review Page Optimization
**Problem:** Review pages (highest intent) lack urgency
**Solution:** Add "limited time" and comparison CTAs

**Files:**
- EDIT: `src/app/reviews/[company]/page.tsx`
  - Add "Compare with top alternative" link
  - Add sticky sidebar with quick facts + CTA

---

## Expected Impact

| Metric | Before | After (Est.) |
|--------|--------|--------------|
| Sidebar CTA visibility | 0% | 100% desktop |
| Mobile CTA visibility | 0% | 100% mobile |
| Avg. CTA position (homepage) | Section 7 | Section 4 |
| Exit captures | 0% | ~3-5% |
| Social proof touchpoints | 1 | 4+ |

---

## Execution Order

1. **U1 + U2 + U3** in parallel (highest impact, independent)
2. **U4 + U5** in parallel (medium impact)
3. **U6 + U7 + U8** in parallel (engagement layer)

---

## Verification Checklist

- [ ] Build passes: `npm run build`
- [ ] All widgets render on mobile
- [ ] No layout shift (CLS) issues
- [ ] Exit intent doesn't trigger on internal navigation
- [ ] All CTAs track properly with source params
