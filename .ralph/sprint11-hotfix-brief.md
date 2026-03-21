# Sprint 11 Hotfix — Visual Issues from Homepage Review

**Date:** 2026-03-20
**Priority:** HIGH — These are visible on production right now
**Architect:** Cowork | **Dev Lead:** Claude Code

---

## ISSUES FOUND

### BUG 1: Hero Image Not Loading (CRITICAL)
**What:** The hero gold bars image on the right side of the split-layout hero shows a broken image icon. The image file exists at `public/images/homepage/hero-gold-bars.jpg` and is committed to git, but it's not rendering.

**Likely cause:** Check the `<Image>` `src` path in `WhySection.tsx`. It should be `/images/homepage/hero-gold-bars.jpg`. Also check:
- Is the `<Image>` component using `fill` or explicit `width`/`height`? If `fill`, the parent must have `relative` + defined dimensions.
- Is there a Next.js image domain config issue in `next.config.ts`?
- Is the image too large (1.3MB jpg) and hitting a timeout? Consider optimizing to a smaller file size.

**File:** `src/components/home/GoldenCircle/WhySection.tsx` — line 101 (`src="/images/homepage/hero-gold-bars.jpg"`)

**Fix:** Verify the Image component renders. If it's a sizing issue, add explicit width/height or ensure the parent container has proper dimensions. Test locally before pushing.

---

### BUG 2: Testimonial Images Not Loading (CRITICAL)
**What:** All 3 testimonial photos show broken image icons with alt text ("Robert", "James", "Margar...") instead of the actual photos. Same issue as the hero — files exist in `public/images/homepage/` but don't render.

**File:** `src/components/home/Testimonials.tsx` — lines 17, 25, 33

**Fix:** Same diagnosis as Bug 1. Check the `<Image>` component props. For circular testimonial avatars, ensure:
```tsx
<Image
  src="/images/homepage/testimonial-couple.jpg"
  alt="Robert & Sarah M."
  width={96}
  height={96}
  className="rounded-full object-cover"
/>
```
The parent container needs `relative` if using `fill`, or explicit `width`/`height` on the `<Image>` component.

---

### BUG 3: HowSection Text Nearly Invisible
**What:** The "How a Gold IRA Protects Your Retirement" section heading and body text are extremely light — almost white on white. Barely readable.

**Likely cause:** Either:
- Text color classes are too light (e.g., `text-slate-200` instead of `text-slate-800`)
- Framer Motion fade-in animation initial opacity is set to 0 and the scroll trigger isn't firing
- The section has a `text-white` class intended for a dark background that was removed

**File:** `src/components/home/GoldenCircle/HowSection.tsx` (or wherever HowSection is defined)

**Fix:** Check the text color classes. The section should use dark text on light background:
- Heading: `text-[#000080]` (navy) or `text-slate-900`
- Body: `text-slate-600`
- If animation is the issue: set initial opacity to 1 or ensure IntersectionObserver threshold triggers properly

---

### IMPROVEMENT 1: WealthCalculator Slider Max Too High
**What:** The Investable Savings slider goes up to $3M+. While technically valid (wealthy Americans exist), it's out of touch for our core audience of 55+ blue-collar workers with $50k-$500k. Seeing "$3M+" makes the tool feel like it's not for them.

**Fix:** Cap the slider at $1,000,000 (or $1.5M at most). The default of $100,000 is correct. Range should be:
- Min: $50,000
- Max: $1,000,000
- Default: $100,000
- Step: $10,000

**File:** `src/components/home/WealthCalculator.tsx` — find the slider max value and change from 3000000 to 1000000.

---

### BUG 4: Company Logos Missing on /best-gold-ira-companies (HIGH)
**What:** The detailed company review cards on `/best-gold-ira-companies` show literal `[Logo/Image]` placeholder text where company logos should be. No `public/images/companies/` directory exists.

**File:** `src/app/best-gold-ira-companies/page.tsx` — lines 92, 152 (and likely more for each company card)

**Fix:** Claude Code should:
1. Create `public/images/companies/` directory
2. Download logos from each company's official website:
   - Augusta: from augustapreciousmetals.com (gold "APM" logo)
   - Noble Gold: from noblegoldinvestments.com
   - Goldco: from goldco.com
   - American Hartford Gold: from americanhartfordgold.com
   - Birch Gold Group: from birchgold.com
3. Save as PNG/JPG, reasonably sized (~200px wide)
4. Replace all `[Logo/Image]` placeholders with proper `<Image>` components
5. Also check `src/data/companies/index.ts` — the company data has an optional `logo?: string` field that's likely empty. Populate it with the correct paths.

**Note:** These logos are used for editorial/review purposes (fair use). They should be the company's wordmark/logo, not marketing imagery.

Also check: the `src/data/quiz-routing.ts` references `logo` paths for each company (like `/images/companies/augusta-logo.png`) — these are all currently non-existent files. Fix those paths too once logos are in place.

---

### BUG 5: Double Form — Users Fill Info Twice (CRITICAL UX)
**What:** After a user completes the `/get-started` funnel (savings, concern, name, email, phone), their lead is saved to Supabase and submitted to Augusta via Zapier. Then after a 2-second delay, the user is auto-redirected to Augusta's LP (`learn.augustapreciousmetals.com`) where they see ANOTHER form asking for the SAME name, email, and phone. This is terrible UX — users either fill it twice (annoying) or bounce (lost conversion).

**File:** `src/app/get-started/page.tsx` — lines 213-220

**Current code:**
```typescript
// Redirect to partner LP after brief success message
const affiliateUrl = AFFILIATE_LINKS[result.affiliateKey as keyof typeof AFFILIATE_LINKS];
if (affiliateUrl) {
  const trackedUrl = getTrackedLink(affiliateUrl, `get-started_${ref}`, result.affiliateKey);
  setTimeout(() => {
    window.location.href = trackedUrl;
  }, 2000);
}
```

**Fix:** Remove the auto-redirect for Augusta leads. The lead was already sent to Augusta via Zapier — there's no reason to send the user to Augusta's form page.

**New logic:**
```typescript
// Only redirect to partner LP for non-Augusta companies
// Augusta leads are already submitted via Zapier — keep user on our success screen
const isAugustaLead = result.affiliateKey === "augusta" ||
  result.affiliateKey === "augustaComparison" ||
  result.affiliateKey === "augustaZeroFees" ||
  result.affiliateKey === "augustaSilver";

if (!isAugustaLead) {
  // Non-Augusta: redirect to partner site (user still needs to engage there)
  const affiliateUrl = AFFILIATE_LINKS[result.affiliateKey as keyof typeof AFFILIATE_LINKS];
  if (affiliateUrl) {
    const trackedUrl = getTrackedLink(affiliateUrl, `get-started_${ref}`, result.affiliateKey);
    setTimeout(() => {
      window.location.href = trackedUrl;
    }, 2000);
  }
}
// Augusta leads: stay on success screen. Augusta calls them from Zapier submission.
```

**Also:** Improve the success screen for Augusta leads. Instead of a generic "You're all set", show:
- "A specialist from Augusta Precious Metals will call you shortly"
- "What to expect: A free, no-pressure educational consultation"
- "While you wait, explore our [Learning Center →]"
- This keeps the user engaged on our site instead of bouncing to Augusta's redundant form

---

## EXECUTION ORDER

1. Fix double-form redirect (Bug 5) — CRITICAL, directly hurts conversions
2. Fix hero image (Bug 1) — most visible visual issue
3. Fix testimonial images (Bug 2) — same root cause
4. Fix HowSection text (Bug 3) — readability
5. Download and add company logos (Bug 4) — affects multiple pages
6. Adjust slider max (Improvement 1) — quick change

## VERIFICATION

- [ ] Augusta leads: NO redirect after form submit — stays on success screen with "specialist will call" message
- [ ] Non-Augusta leads (Noble, Goldco): still redirect to partner LP after 2 seconds
- [ ] Hero gold bars image renders on desktop (right side of split layout)
- [ ] Hero image has proper opacity/blend with navy background
- [ ] All 3 testimonial photos render as circular avatars
- [ ] HowSection heading + body text clearly readable (dark on light)
- [ ] Company logos render on /best-gold-ira-companies (no more [Logo/Image] text)
- [ ] Company logos render in quiz results
- [ ] WealthCalculator slider max is $1M (not $3M)
- [ ] npm run build — zero errors
- [ ] Test on mobile viewport (390px)
