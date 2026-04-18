# Sprint 9 — Quiz Overhaul + Calculator-to-Lead Pipeline

**Date:** 2026-03-20
**Architect:** Cowork | **Dev Lead:** Claude Code
**Focus:** Turn the quiz and 43 calculators from dead-end tools into lead generation machines.

---

## THE PROBLEM

**Quiz:** Collects savings amount, goals, timeline — then shows a company recommendation. But it NEVER captures email. The UniversalQuiz saves an anonymous lead (no contact info). The QuizResults component with an email form exists but is unused. When someone gets matched to a non-Augusta company, they just get redirected to an affiliate link with zero data capture. We lose them forever.

**Calculators:** 43 calculators exist (RMD, retirement, FIRE, gold allocation, etc.). Every single one has only a generic AugustaCTA footer at the bottom. NONE have a contextual CTA after the calculation result. Someone calculates their RMD is $15,000/year and sees... nothing relevant. Just a generic "Ready to Protect Your Retirement?" below the fold.

**Combined impact:** The quiz and calculators are the most interactive features on the site. They attract engaged, high-intent visitors who are actively calculating and planning their retirement. And we convert approximately zero of them.

---

## PART A: QUIZ → /get-started PIPELINE

### A1: Route Quiz Results Through /get-started

**Problem:** Quiz results open `LeadModal` (which is the raw redirect) for Augusta, or direct affiliate link for non-Augusta. Neither captures email or passes quiz data.

**Solution:** Quiz result CTA links to `/get-started` with quiz answers pre-filled as URL params.

**New flow:**
```
Quiz completes → Shows result card ("You match Augusta Precious Metals")
  → CTA: "Get Your Personalized Kit →"
  → Links to: /get-started?ref=quiz&savings=100k-250k&concern=inflation&product=gold-ira&match=augusta
  → /get-started reads URL params, pre-fills savings + concern steps
  → User only needs to enter contact info (name, email, phone)
  → Submit → route to matched company
```

**Why this is better:**
- Quiz answers don't get lost — they flow into the funnel
- User sees the /get-started page with steps already completed (just contact form)
- We capture email for EVERY quiz completer, not just Augusta matches
- Non-Augusta matches (Noble Gold, Goldco, iTrustCapital) still go through our funnel

**Files to modify:**

1. **`src/components/quiz/QuizWizard.tsx`**
   - Change the result CTA `onClick` from `openModal("default", "quiz-result")` to:
   ```typescript
   const quizParams = new URLSearchParams({
     ref: "quiz-wizard",
     savings: state.savingsAmount,
     concern: state.investmentGoal,
     product: "gold-ira",
     match: recommendedCompany.id,
   });
   window.location.href = `/get-started?${quizParams.toString()}`;
   ```
   - Do the same for non-Augusta results (currently opens affiliate link directly)

2. **`src/components/quiz/UniversalQuiz.tsx`**
   - Same pattern. Change result CTA to link to `/get-started` with params:
   ```typescript
   const quizParams = new URLSearchParams({
     ref: "universal-quiz",
     savings: answers.budget,
     concern: answers["primary-concern"] || answers["crypto-experience"] || "",
     product: selectedProductType,
     match: recommendedCompany.id,
   });
   window.location.href = `/get-started?${quizParams.toString()}`;
   ```

3. **`src/app/get-started/page.tsx`**
   - Already reads `ref` from URL params
   - ADD: Read `savings`, `concern`, `product`, `match` params
   - If `savings` is present: skip the savings question step (pre-filled)
   - If `concern` is present: skip the concern question step (pre-filled)
   - Show the personalized result immediately with the matched company
   - User only sees the contact form step

**Result:** Quiz → 2 questions already answered → contact form → submit → affiliate redirect. From the user's perspective, the quiz led directly to a personalized recommendation and a simple form. Friction is minimal but we capture everything.

---

### A2: Deprecate QuizWizard, Standardize on UniversalQuiz

**Problem:** Two quiz components exist with different flows. QuizWizard is the older one. UniversalQuiz supports multiple product types and already does anonymous lead saving.

**Solution:** Keep both for now (don't break existing pages), but ensure BOTH route to `/get-started`. Long-term, the quiz page (`/quiz`) should use UniversalQuiz exclusively.

**Check:** What does `/quiz/page.tsx` render? If it renders QuizWizard, update it to UniversalQuiz.

---

## PART B: CALCULATOR → CONTEXTUAL CTA

### B1: Create `CalculatorCTA` Component

**Problem:** 43 calculators have only a generic footer CTA. No contextual CTA after the result.

**Solution:** Create a new component that renders AFTER a calculation result, with dynamic copy based on the calculator output.

**File:** CREATE `src/components/widgets/CalculatorCTA.tsx`

```tsx
"use client";

import { ArrowRight, Shield, TrendingUp } from "lucide-react";

interface CalculatorCTAProps {
  /** The calculator type — determines the CTA messaging */
  calculatorType: "rmd" | "retirement" | "fire" | "gold-ira" | "gold-allocation" | "social-security" | "fers" | "calpers" | "tsp" | "general";
  /** Key result value to personalize CTA (e.g., "$15,000 RMD", "$500,000 needed") */
  resultValue?: string;
  /** Additional context from the calculation */
  resultContext?: string;
  /** Track source for analytics */
  trackSource: string;
}

const CTA_MESSAGES: Record<string, { headline: string; subtext: string; buttonText: string }> = {
  rmd: {
    headline: "Protect Your RMD Distributions from Inflation",
    subtext: "Your required minimum distributions lose purchasing power every year. A Gold IRA can hedge this risk.",
    buttonText: "See How Gold Protects Your RMDs",
  },
  retirement: {
    headline: "Is Your Retirement on Track?",
    subtext: "If your numbers show a gap, gold can help close it. Historically, gold has returned 8%+ annually over the last 20 years.",
    buttonText: "Get a Free Retirement Protection Plan",
  },
  fire: {
    headline: "Protect Your FIRE Number from Market Crashes",
    subtext: "Sequence-of-returns risk is the #1 threat to early retirement. Gold reduces portfolio volatility by 15-25%.",
    buttonText: "See How Gold Fits Your FIRE Plan",
  },
  "gold-ira": {
    headline: "Ready to Start Your Gold IRA?",
    subtext: "You've seen the numbers. Let us match you with the right company for your situation.",
    buttonText: "Find Your Best Match",
  },
  "gold-allocation": {
    headline: "Get Your Personalized Gold Allocation Plan",
    subtext: "Based on your portfolio, a specialist can help you optimize your precious metals allocation.",
    buttonText: "Speak With a Specialist",
  },
  "social-security": {
    headline: "Protect Your Social Security Purchasing Power",
    subtext: "Social Security COLAs don't keep up with real inflation. Gold has outpaced CPI for 50+ years.",
    buttonText: "See How Gold Protects Your Benefits",
  },
  fers: {
    headline: "Federal Employee? Protect Your FERS + TSP",
    subtext: "Your FERS pension has diet COLAs. Your TSP has zero gold exposure. Both lose to inflation.",
    buttonText: "See TSP to Gold IRA Options",
  },
  calpers: {
    headline: "CalPERS Member? Diversify Beyond Your Pension",
    subtext: "Your pension is one leg of the stool. Gold adds stability that CalPERS investments can't.",
    buttonText: "Explore Gold IRA Protection",
  },
  tsp: {
    headline: "Your TSP Has Zero Gold Exposure",
    subtext: "The G, F, C, S, and I funds don't include precious metals. A Gold IRA fills that gap.",
    buttonText: "See TSP Rollover Options",
  },
  general: {
    headline: "Ready to Protect What You've Built?",
    subtext: "Get matched with the right Gold IRA company for your situation. Free, no-obligation consultation.",
    buttonText: "Find Your Best Option",
  },
};

export function CalculatorCTA({ calculatorType, resultValue, resultContext, trackSource }: CalculatorCTAProps) {
  const message = CTA_MESSAGES[calculatorType] || CTA_MESSAGES.general;

  // Build /get-started link with context
  const params = new URLSearchParams({
    ref: trackSource,
    ...(resultContext && { context: resultContext }),
  });

  return (
    <div className="mt-8 bg-gradient-to-br from-[#000080]/5 to-[#B22234]/5 border border-[#000080]/20 rounded-2xl p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#B22234]/10 rounded-xl flex items-center justify-center">
          <Shield className="h-6 w-6 text-[#B22234]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#000080] mb-2">
            {resultValue ? message.headline.replace("Your", `Your ${resultValue}`) : message.headline}
          </h3>
          <p className="text-slate-600 mb-4">{message.subtext}</p>
          <a
            href={`/get-started?${params.toString()}`}
            className="inline-flex items-center gap-2 bg-[#B22234] hover:bg-[#9a1d2d] text-white font-bold py-3 px-6 rounded-xl transition-all"
          >
            {message.buttonText}
            <ArrowRight className="h-5 w-5" />
          </a>
          {resultValue && (
            <p className="text-slate-500 text-sm mt-3 flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Based on your calculation of {resultValue}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
```

---

### B2: Integrate CalculatorCTA Into Calculator Pages

**Approach:** There are 43 calculator pages. We can't manually edit all of them in one sprint. Instead:

**Phase 1 — Top 10 highest-value calculators (this sprint):**
These are the calculators most likely used by our target audience ($50k+ savers, 55+):

| Calculator | Type Key | Contextual Angle |
|-----------|----------|-----------------|
| `/tools/retirement-calculator` | retirement | "Gap in your number? Gold can help." |
| `/tools/rmd-calculator` | rmd | "Protect distributions from inflation" |
| `/tools/gold-ira-calculator` | gold-ira | "Ready to start? Find your match." |
| `/tools/gold-allocation-calculator` | gold-allocation | "Optimize your allocation" |
| `/tools/social-security-calculator` | social-security | "SS loses to inflation" |
| `/tools/fire-calculator` | fire | "Protect your FIRE number" |
| `/tools/fers-calculator` | fers | "Federal employee? Protect TSP" |
| `/tools/calpers-pension-calculator` | calpers | "Diversify beyond pension" |
| `/tools/tsp-calculator` | tsp | "TSP has zero gold" |
| `/tools/401k-risk-analyzer` | general | "Is your 401k at risk?" |

**For each calculator page:**
1. Import `CalculatorCTA`
2. Add it AFTER the main calculator component, BEFORE the educational content
3. Pass the appropriate `calculatorType` and `trackSource`

**Phase 2 (future sprint):** Add CalculatorCTA to remaining 33 calculators with `calculatorType="general"`.

---

### B3: Add SidebarAuditWidget to Calculator Pages

**Problem:** Calculator pages have no sidebar CTA. The sidebar is empty or nonexistent.

**Solution:** For calculator pages that have a sidebar layout, add `SidebarAuditWidget`. For full-width calculators, add `InContentCTA` between the calculator and the educational content.

Check each of the 10 priority calculators for their layout structure and add the appropriate widget.

---

## PART C: CROSS-FEATURE IMPROVEMENTS

### C1: /get-started Accepts Pre-filled Params

**File:** `src/app/get-started/page.tsx`

Currently reads `ref` from URL params. Extend to read:

| Param | Effect |
|-------|--------|
| `ref` | Source attribution (already works) |
| `savings` | Pre-fills savings step, auto-advances |
| `concern` | Pre-fills concern step, auto-advances |
| `product` | Sets product type context (gold-ira, crypto, etc.) |
| `match` | Pre-selects recommended company in result |
| `context` | Additional context from calculator (displayed in result) |

When `savings` AND `concern` are both provided (from quiz), the funnel page should:
1. Skip both question steps
2. Show the personalized result immediately
3. Display the contact form
4. User just enters name/email/phone and submits

This makes the quiz → funnel transition feel seamless. Two questions in the quiz, zero questions on /get-started, just the form.

---

### C2: Quiz Sidebar CTA on Calculator Pages

Some calculators are relevant to the quiz. Add a small "Not sure which account is right for you?" widget that links to `/quiz` on relevant calculator pages (retirement, 401k risk, FIRE).

---

## EXECUTION ORDER

```
PHASE 1: CalculatorCTA component (reusable)
  1. Create src/components/widgets/CalculatorCTA.tsx
  2. Define CTA messages for 10 calculator types

PHASE 2: Quiz → /get-started pipeline
  3. Update QuizWizard result CTAs to link to /get-started with params
  4. Update UniversalQuiz result CTAs to link to /get-started with params
  5. Update /get-started to accept and pre-fill from URL params (savings, concern, match)

PHASE 3: Calculator page integration (top 10)
  6. Add CalculatorCTA to retirement-calculator
  7. Add CalculatorCTA to rmd-calculator
  8. Add CalculatorCTA to gold-ira-calculator
  9. Add CalculatorCTA to gold-allocation-calculator
  10. Add CalculatorCTA to social-security-calculator
  11. Add CalculatorCTA to fire-calculator
  12. Add CalculatorCTA to fers-calculator
  13. Add CalculatorCTA to calpers-pension-calculator
  14. Add CalculatorCTA to tsp-calculator
  15. Add CalculatorCTA to 401k-risk-analyzer

PHASE 4: Verification
  16. npm run build — zero errors
  17. Test quiz → /get-started flow with pre-filled params
  18. Test calculator → /get-started flow
  19. Verify /get-started skips pre-filled steps correctly
  20. All CTAs tracked via ref param
```

---

## VERIFICATION CHECKLIST

- [ ] Quiz result → links to /get-started with savings, concern, product, match params
- [ ] /get-started with savings+concern params → skips to contact form
- [ ] /get-started with only savings param → skips savings, shows concern
- [ ] /get-started with no params → full flow (unchanged)
- [ ] All 10 priority calculators show CalculatorCTA after result
- [ ] CalculatorCTA links to /get-started with correct ref + context
- [ ] No regression on existing /get-started behavior
- [ ] Build passes with zero errors

---

## EXPECTED IMPACT

| Metric | Before | After |
|--------|--------|-------|
| Quiz → email capture rate | ~0% (no form) | ~40-60% (via /get-started) |
| Calculator → CTA visibility | Footer only (below fold) | Contextual + footer |
| Quiz data passed to funnel | None | Savings, concern, product, match |
| Calculator leads captured | 0 | Tracked via /get-started ref |
| Non-Augusta quiz leads captured | 0% | 100% (all go through /get-started) |

---

RALPH_STATUS:
- PHASE: Sprint 9 (Quiz + Calculator Conversion)
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Audit + plan done
- BLOCKERS: None
