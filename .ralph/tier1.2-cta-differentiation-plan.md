# Tier 1.2 — Strategic CTA Differentiation

**Date:** 2026-03-19
**Priority:** HIGH — Stop sending every click to the same Augusta LP
**Architect:** Cowork | **Dev Lead:** Claude Code

---

## THE PROBLEM

`src/context/LeadModalContext.tsx` line 21:
```typescript
const openModal = useCallback((newVariant: string, newSource: string) => {
    window.location.href = "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908";
}, []);
```

Every `openModal()` call across the ENTIRE site — 16 call sites — ignores the `variant` and `source` parameters and redirects to the SAME Augusta Gold IRA LP. This means:

- Silver content pages → Augusta Gold LP (wrong product)
- Noble Gold review page → Augusta LP (wrong company!)
- Quiz results recommending iTrustCapital → Augusta LP (wrong company!)
- Educational learn articles → high-intent Augusta LP (wrong intent level)
- Comparison/fee pages → generic Augusta LP (missed opportunity for checklist LP)
- Scam/investigative content → generic Augusta LP (missed buyer-beware LP)

Meanwhile, `src/config/affiliates.ts` already has 9 Augusta LP variants AND affiliate links for Noble, Goldco, American Hartford, Birch, iTrustCapital, etc. — all unused.

---

## THE SOLUTION

Transform `openModal()` from a dumb redirect into a smart router that:
1. Uses the `variant` parameter to select the right Augusta LP
2. Uses the `source` parameter for click tracking via `/api/track-click`
3. Routes company review page CTAs to the appropriate affiliate
4. All clicks go through `getTrackedLink()` for Telegram notifications

**We keep the direct redirect approach** — no modal, no form. Just smarter routing.

---

## PHASE 1: Rebuild LeadModalContext as a Smart Router

### P1-001: Rewrite `src/context/LeadModalContext.tsx`

Replace the hardcoded redirect with context-aware routing that uses the existing affiliate infrastructure.

```typescript
"use client";

import { createContext, useContext, useCallback, ReactNode } from "react";
import {
  getTrackedLink,
  getTrackedAugustaLink,
  AFFILIATE_LINKS,
  AugustaContext,
} from "@/config/affiliates";

interface LeadModalContextType {
  isOpen: false; // Modal stays off — kept for interface compatibility
  variant: string;
  source: string;
  openModal: (variant: string, source: string) => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

/**
 * CTA Routing Map
 *
 * Maps variant strings to their destination.
 * Augusta variants use getTrackedAugustaLink() for the right LP.
 * Non-Augusta variants use getTrackedLink() with partner URLs.
 */
function getDestinationUrl(variant: string, source: string): string {
  // --- AUGUSTA CONTEXT VARIANTS ---
  // These map to different Augusta landing pages
  const augustaVariantMap: Record<string, AugustaContext> = {
    // High intent
    "default": "default",
    "fees": "fees",
    "compare": "comparison",
    "comparison": "comparison",
    "silver": "silver",
    "silver-fees": "silver",
    "scam": "scam",
    "buyer-beware": "buyer-beware",
    // Mid intent (educational content)
    "mid-intent": "mid-intent",
    "educational": "mid-intent",
    "learn": "mid-intent",
    "fees-mid": "fees-mid",
    "silver-mid": "silver-mid",
  };

  // Check if this is an Augusta variant
  const augustaContext = augustaVariantMap[variant];
  if (augustaContext) {
    return getTrackedAugustaLink(augustaContext, source);
  }

  // --- NON-AUGUSTA COMPANY VARIANTS ---
  // For company review pages and quiz results
  const companyVariantMap: Record<string, { url: string; company: string }> = {
    "noble": { url: AFFILIATE_LINKS.noble, company: "noble" },
    "goldco": { url: AFFILIATE_LINKS.goldco, company: "goldco" },
    "american-hartford": { url: AFFILIATE_LINKS.americanHartford, company: "americanHartford" },
    "birch": { url: AFFILIATE_LINKS.birch, company: "birch" },
    "oxford": { url: AFFILIATE_LINKS.oxford, company: "oxford" },
    "lear": { url: AFFILIATE_LINKS.lear, company: "lear" },
    "advantage": { url: AFFILIATE_LINKS.advantage, company: "advantage" },
    // Crypto
    "itrustcapital": { url: AFFILIATE_LINKS.itrustcapital, company: "itrustcapital" },
    "alto-ira": { url: AFFILIATE_LINKS.altoIra, company: "altoIra" },
    "bitcoin-ira": { url: AFFILIATE_LINKS.bitcoinIra, company: "bitcoinIra" },
    // SDIRA
    "rocket-dollar": { url: AFFILIATE_LINKS.rocketDollar, company: "rocketDollar" },
    "equity-trust": { url: AFFILIATE_LINKS.equityTrust, company: "equityTrust" },
    // ROBS
    "guidant": { url: AFFILIATE_LINKS.guidantFinancial, company: "guidantFinancial" },
    "benetrends": { url: AFFILIATE_LINKS.benetrends, company: "benetrends" },
  };

  const companyMatch = companyVariantMap[variant];
  if (companyMatch) {
    return getTrackedLink(companyMatch.url, source, companyMatch.company);
  }

  // --- FALLBACK ---
  // Unknown variant → default Augusta high-intent LP
  return getTrackedAugustaLink("default", source);
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const openModal = useCallback((variant: string, source: string) => {
    const url = getDestinationUrl(variant, source);
    window.location.href = url;
  }, []);

  const closeModal = useCallback(() => {
    // No-op — modal is off
  }, []);

  return (
    <LeadModalContext.Provider value={{
      isOpen: false,
      variant: "default",
      source: "",
      openModal,
      closeModal
    }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (context === undefined) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
```

**What changes:**
- `openModal(variant, source)` now routes to the right URL based on variant
- Augusta variants → use `getTrackedAugustaLink()` which picks the right LP AND wraps with `/api/track-click`
- Company variants → use `getTrackedLink()` for partner affiliate URLs with tracking
- Unknown variants → fallback to default Augusta LP (safe default)
- Interface stays identical — no changes needed in any component that calls `openModal()`

---

## PHASE 2: Update Existing openModal() Calls

Now that the routing works, we need to update the `openModal()` calls to pass the RIGHT variant instead of `"default"` everywhere.

### P2-001: Update silver content CTAs
Search for `openModal` calls on silver pages/components and change variant from `"default"` to `"silver"`.

**Files to check:**
- Any component used on silver-ira/* pages
- Silver-specific CTA components
- Pages in `src/app/silver-*/**`

For any `openModal("default", ...)` on a silver page, change to `openModal("silver", ...)`.

### P2-002: Update comparison/fee page CTAs
For pages about comparing companies or analyzing fees:
- `/compare/*` pages → `openModal("comparison", ...)`
- `/gold-ira-rules` → `openModal("fees", ...)`
- Fee-related guide pages → `openModal("fees", ...)`

### P2-003: Update learn article CTAs to mid-intent
The AugustaCTA component is used across learn articles. For educational content, the visitor is in research mode — send them to a mid-intent LP, not the high-intent one.

**File:** `src/components/cta/AugustaCTA.tsx`

Change the `handleClick` function to accept and use a `context` prop:

```typescript
interface AugustaCTAProps {
  variant?: "default" | "sidebar" | "inline" | "footer" | "banner";
  headline?: string;
  subheadline?: string;
  linkContext?: string; // NOW USED: maps to Augusta LP context
  trackSource?: string;
  className?: string;
}

// In handleClick:
const handleClick = () => {
  const linkType = variant === "sidebar" ? "sidebar"
    : variant === "inline" ? "inline"
    : variant === "banner" ? "cta"
    : "cta";
  trackAffiliateClick("augusta", trackSource || "direct", linkType);
  // Use linkContext to route to the right Augusta LP
  openModal(linkContext || "default", trackSource || `augusta-cta-${variant}`);
};
```

Then update usages:
- Learn article AugustaCTA: `linkContext="mid-intent"`
- Guide article AugustaCTA: `linkContext="default"` (high intent — they're reading a guide)
- Silver article AugustaCTA: `linkContext="silver"`
- Fee article AugustaCTA: `linkContext="fees"`

### P2-004: Update quiz result CTAs
**Files:** `src/components/quiz/QuizResults.tsx`, `src/components/quiz/UniversalQuiz.tsx`, `src/components/quiz/QuizWizard.tsx`

Quiz results should route based on the recommended company:
- If quiz recommends Augusta → `openModal("default", "quiz-result")`
- If quiz recommends Noble Gold → `openModal("noble", "quiz-result")`
- If quiz recommends iTrustCapital → `openModal("itrustcapital", "quiz-result")`
- If quiz recommends Guidant → `openModal("guidant", "quiz-result")`

Look at the quiz routing logic in `src/data/quiz-routing.ts` — the `getRecommendedCompany()` function already returns the right company. Use the company ID as the variant.

### P2-005: Update review page CTAs
**Files:** `src/components/reviews/VerdictSection.tsx`, `src/components/reviews/VerdictBox.tsx`, `src/components/reviews/CompanyHero.tsx`, `src/components/reviews/CompanyCard.tsx`

Review pages should route to the reviewed company's affiliate link:
- Augusta review → `openModal("default", "augusta-review")`  (stays Augusta)
- Noble Gold review → `openModal("noble", "noble-review")`
- Goldco review → `openModal("goldco", "goldco-review")`
- Birch review → `openModal("birch", "birch-review")`

These components already receive a company slug. Use it as the variant.

### P2-006: Update homepage CTAs
**Files:** `src/components/home/FeaturedPartner.tsx`, `src/components/home/Hero.tsx`

- FeaturedPartner → `openModal("default", "homepage-featured")` (already correct)
- Hero "Protect What You've Built" → `openModal("default", "homepage-hero")` (already correct)

### P2-007: Update investigative/scam page CTAs
For scam-aware content:
- `/scams` page → `openModal("buyer-beware", ...)`
- `/investigative-hub` → `openModal("buyer-beware", ...)`

---

## PHASE 3: ComparisonTable "Visit Site" Links

### P3-001: Update ComparisonTable company links
**File:** `src/components/home/ComparisonTable.tsx` (and any other comparison component)

The comparison table shows 5 companies with "Visit Site" / "Get Free Kit" buttons. These should link to each company's own affiliate URL, not all to Augusta.

- Augusta (#1) → `getTrackedLink(AFFILIATE_LINKS.augusta, "comparison-table", "augusta")`
- Noble Gold (#2) → `getTrackedLink(AFFILIATE_LINKS.noble, "comparison-table", "noble")`
- Goldco (#3) → `getTrackedLink(AFFILIATE_LINKS.goldco, "comparison-table", "goldco")`
- American Hartford (#4) → `getTrackedLink(AFFILIATE_LINKS.americanHartford, "comparison-table", "americanHartford")`
- Birch (#5) → `getTrackedLink(AFFILIATE_LINKS.birch, "comparison-table", "birch")`

Check how ComparisonTable currently renders. If the "Visit Site" buttons use `openModal()`, we can just pass the company slug as variant and the new router handles it. If they use direct `<a>` tags, update the href to use `getTrackedLink()`.

---

## PHASE 4: Verification

### P4-001: Build check
`npm run build` — zero TypeScript errors.

### P4-002: Routing verification
Test these click paths:

| Click Location | Expected Destination |
|---------------|---------------------|
| Navbar "Get Free Gold Kit" | Augusta default LP (via /api/track-click) |
| Homepage FeaturedPartner CTA | Augusta default LP (tracked) |
| Mobile sticky bar | Augusta default LP (tracked) |
| Silver IRA page CTA | Augusta **silver** LP (tracked) |
| Learn article AugustaCTA | Augusta **mid-intent** LP (tracked) |
| Comparison table → Noble Gold "Visit Site" | Noble Gold affiliate (tracked) |
| Comparison table → Augusta "Get Free Kit" | Augusta default LP (tracked) |
| Quiz result → Augusta match | Augusta default LP (tracked) |
| Quiz result → iTrustCapital match | iTrustCapital affiliate (tracked) |
| Noble Gold review CTA | Noble Gold affiliate (tracked) |
| Scams page CTA | Augusta **buyer-beware** LP (tracked) |

### P4-003: Tracking verification
After clicking a CTA, verify the URL goes through `/api/track-click?url=...&source=...&company=...` before redirecting. This ensures Telegram notifications fire with correct source attribution.

---

## FILES CHANGED

| File | Action | Description |
|------|--------|-------------|
| `src/context/LeadModalContext.tsx` | REWRITE | Smart routing based on variant + source |
| `src/components/cta/AugustaCTA.tsx` | EDIT | Use `linkContext` prop for Augusta LP selection |
| `src/components/quiz/QuizResults.tsx` | EDIT | Route to recommended company's affiliate |
| `src/components/quiz/UniversalQuiz.tsx` | EDIT | Route to recommended company's affiliate |
| `src/components/quiz/QuizWizard.tsx` | EDIT | Route to recommended company's affiliate |
| `src/components/reviews/VerdictSection.tsx` | EDIT | Route to reviewed company's affiliate |
| `src/components/reviews/VerdictBox.tsx` | EDIT | Route to reviewed company's affiliate |
| `src/components/reviews/CompanyHero.tsx` | EDIT | Route to reviewed company's affiliate |
| `src/components/reviews/CompanyCard.tsx` | EDIT | Route to reviewed company's affiliate |
| `src/components/home/ComparisonTable.tsx` | EDIT | Per-company affiliate links |
| Various silver page components | EDIT | variant → "silver" |
| Various scam/investigation pages | EDIT | variant → "buyer-beware" |

---

## EXPECTED IMPACT

| Change | Effect |
|--------|--------|
| Silver → silver LP | Visitors on silver content see silver-specific Augusta landing page |
| Learn → mid-intent LP | Educational visitors get softer landing, better conversion |
| Comparison → per-company links | Each company review drives to correct affiliate |
| Quiz → smart routing | Quiz recommendations actually connect to the right company |
| All clicks tracked | Full Telegram + analytics attribution of which pages/CTAs convert |
| Scam → buyer-beware LP | Skeptical visitors get trust-building Augusta page |

This is the highest-leverage change after the homepage optimization. Same number of clicks, dramatically better routing and conversion potential.

---

RALPH_STATUS:
- PHASE: 1 (CTA Differentiation)
- TASK: Tier 1.2 implementation plan written
- PROGRESS: Plan complete, ready for Claude Code
- BLOCKERS: None — all affiliate infrastructure already exists in config/affiliates.ts
