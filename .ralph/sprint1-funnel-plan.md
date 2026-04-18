# Sprint 1 — /get-started Qualification Funnel
**Date:** 2026-03-19
**Blueprint ref:** THE-FUNNEL-BLUEPRINT.md Part 7 + Part 8

---

## PHASE 1: Data Structures & API
- [x] P1-001: Add qualification types (savings_tier, concern, qualification_tier, routed_to)
- [x] P1-002: Update submit-lead API to accept qualification fields
- [x] P1-003: Add partner routing logic (reuse quiz-routing.ts patterns)

## PHASE 2: /get-started Funnel Page
- [x] P2-001: Create /get-started/page.tsx — full-screen qualification funnel
- [x] P2-002: Step 1 — Savings range selector (6 options)
- [x] P2-003: Step 2 — Concern selector (4 options)
- [x] P2-004: Personalized result display (dynamic per tier)
- [x] P2-005: Contact form (adaptive: phone for $50k+, email-only for <$25k)
- [x] P2-006: Submit → route to correct partner LP
- [x] P2-007: Trust footer + trust signals

## PHASE 3: Two-Path CTA System
- [x] P3-001: Update LeadModalContext — general CTAs → /get-started, Augusta-specific → direct LP
- [x] P3-002: Update MobileStickyBar → /get-started (not direct Augusta)
- [x] P3-003: Update AugustaCTA variants with linkContext awareness

## PHASE 4: Notifications
- [x] P4-001: Update Telegram notifications with tier + savings + routing info

## PHASE 5: Verification
- [ ] P5-001: npm run build — zero TS errors
- [ ] P5-002: Visual verification of /get-started flow
- [ ] P5-003: Verify CTA routing on homepage, learn articles

---

## ROUTING TABLE (from blueprint)

| Savings Tier | Qualification | Routed To | Redirect |
|-------------|--------------|-----------|----------|
| $250k+ | augusta-white-glove | Augusta | Augusta LP |
| $100k-$250k | augusta-private | Augusta | Augusta LP |
| $50k-$100k | augusta-standard | Augusta | Augusta LP |
| $25k-$50k | secondary | Goldco/AHG | Goldco or AHG LP |
| Under $25k | starter | Noble Gold | Noble Gold LP |

## FILES CHANGED
- `src/types/funnel.ts` — NEW: qualification types
- `src/app/get-started/page.tsx` — REWRITE: qualification funnel
- `src/app/api/submit-lead/route.ts` — EDIT: accept qualification fields
- `src/context/LeadModalContext.tsx` — REWRITE: two-path routing
- `src/components/widgets/MobileStickyBar.tsx` — EDIT: link to /get-started
- `src/lib/notifications.ts` — EDIT: tier-aware formatting
