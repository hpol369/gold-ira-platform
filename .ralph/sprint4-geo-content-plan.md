# Sprint 4: GEO + Content — Execution Plan

**Date:** 2026-03-20
**Sprint:** 4 of 8
**Focus:** Generative Engine Optimization + Content Expansion
**Depends on:** Sprints 1-3 (complete)

---

## PHASE 1: Schema Infrastructure (Foundation)

- [ ] P1-001: Create `src/lib/schema.ts` — Centralized schema generators for all page types
- [ ] P1-002: Create `src/components/seo/FAQSection.tsx` — Reusable FAQ component with auto JSON-LD

## PHASE 2: Schema Markup Expansion (Apply to all page types)

- [ ] P2-001: Enhance learn article template with BreadcrumbList schema
- [ ] P2-002: Enhance news article template with BreadcrumbList + author schema
- [ ] P2-003: Add HowTo + Article + FAQ schema to guide pages (22 pages — template approach)
- [ ] P2-004: Add WebApplication + FAQ schema to calculator/tool pages
- [ ] P2-005: Enhance homepage with WebSite + SiteNavigationElement schema
- [ ] P2-006: Add Review + AggregateRating schema to company review pages

## PHASE 3: Answer-First Content Pass (Top 20 Pages)

- [ ] P3-001: Create answer-first hero component `src/components/seo/AnswerFirst.tsx`
- [ ] P3-002: Apply to homepage (page.tsx)
- [ ] P3-003: Apply to top guide pages (gold-ira-guide, gold-ira-fees, 401k-to-gold-rollover, etc.)
- [ ] P3-004: Apply to key hub pages (best-gold-ira-companies, rollover, silver-ira, etc.)

## PHASE 4: "Is $X Enough to Retire?" Content Hub

- [ ] P4-001: Create hub page at `/is-enough-to-retire/page.tsx`
- [ ] P4-002: Cross-link existing retire-with-amount learn articles
- [ ] P4-003: Add hub to sitemap, footer, and internal linking

## PHASE 5: Blue Ocean Pages (6 Low-Competition Pages)

- [ ] P5-001: Research and define 6 blue ocean pages (no existing spec found)
- [ ] P5-002: Build pages as learn article clusters or standalone guides

## PHASE 6: Verification

- [ ] P6-001: Run `npm run build` — zero errors
- [ ] P6-002: Spot-check JSON-LD output in browser
