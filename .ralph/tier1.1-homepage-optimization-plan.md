# Tier 1.1 — Homepage Copy & Flow Optimization

**Date:** 2026-03-19
**Priority:** HIGH — First thing to ship
**Architect:** Cowork | **Dev Lead:** Claude Code

---

## OBJECTIVE

Optimize the homepage to convert MORE qualified visitors ($50k+ savers) to Augusta clicks by:
1. Adding qualifying language that naturally filters for the right audience
2. Moving the Augusta showcase (FeaturedPartner) up in the page flow
3. Moving the ComparisonTable up for researchers
4. Removing redundancy (DeepWhySection)
5. Adding a mobile sticky CTA bar
6. Removing QuizCTA from homepage (quiz doesn't connect to Augusta)

---

## PHASE 1: Homepage Section Reorder

### P1-001: Update `src/app/page.tsx`

**Current order (14 sections):**
1. WhySection (hero)
2. AuthoritySection (stats)
3. DeepWhySection (our story)
4. WealthCalculator
5. QuizCTA
6. DailyBrief
7. ValueProps (Rich Dad framework)
8. HowSection (3 steps)
9. FeaturedPartner (Augusta)
10. Testimonials
11. UrgencySection
12. Resources (Crisis/Learn/Rollover links)
13. Newsletter
14. ComparisonTable
15. TrustBadges

**New order (13 sections):**
1. WhySection (hero) — **KEEP** (update badge text — see P2-001)
2. AuthoritySection — **KEEP**
3. WealthCalculator — **KEEP** (calculator creates urgency)
4. FeaturedPartner (Augusta) — **MOVED UP from 9 → 4** (show the solution right after the pain)
5. HowSection (3 steps) — **MOVED UP from 8 → 5** (reduce anxiety immediately)
6. ComparisonTable — **MOVED UP from 14 → 6** (for comparison shoppers)
7. Testimonials — **KEEP**
8. DailyBrief — **MOVED DOWN from 6 → 8**
9. ValueProps — **MOVED DOWN from 7 → 9**
10. UrgencySection — **KEEP**
11. Resources links — **KEEP**
12. Newsletter — **KEEP**
13. TrustBadges — **KEEP**

**REMOVED:**
- DeepWhySection (position 3) — redundant with AuthoritySection. The "Our Parents lost 40%" story is good but it slows down the path to the calculator. Key message ("We built this because the system failed our parents") should be absorbed into AuthoritySection as a one-liner.
- QuizCTA (position 5) — quiz doesn't connect to Augusta. Users who take the quiz and get matched to Augusta end up at a dead `openModal()` call. Until we fix the quiz (Tier 6), remove it from the homepage flow. Keep quiz accessible via navbar Learn dropdown.

**New `src/app/page.tsx`:**
```tsx
import Link from "next/link";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhySection } from "@/components/home/GoldenCircle";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { Container } from "@/components/ui/Container";
import { AlertTriangle, BookOpen, RefreshCw, ArrowRight } from "lucide-react";

function SectionSkeleton({ height = "h-64" }: { height?: string }) {
  return <div className={`${height} bg-slate-100 animate-pulse rounded-lg`} />;
}

const WealthCalculator = dynamic(
  () => import("@/components/home/WealthCalculator").then(mod => ({ default: mod.WealthCalculator })),
  { ssr: true, loading: () => <div className="h-96 bg-slate-100 animate-pulse" /> }
);

const FeaturedPartner = dynamic(
  () => import("@/components/home/FeaturedPartner").then(mod => ({ default: mod.FeaturedPartner })),
  { ssr: true, loading: () => <SectionSkeleton height="h-72" /> }
);

const HowSection = dynamic(
  () => import("@/components/home/GoldenCircle").then(mod => ({ default: mod.HowSection })),
  { ssr: true, loading: () => <SectionSkeleton height="h-80" /> }
);

const ComparisonTable = dynamic(
  () => import("@/components/home/ComparisonTable").then(mod => ({ default: mod.ComparisonTable })),
  { ssr: true, loading: () => <SectionSkeleton height="h-96" /> }
);

const Testimonials = dynamic(
  () => import("@/components/home/Testimonials").then(mod => ({ default: mod.Testimonials })),
  { ssr: true, loading: () => <SectionSkeleton height="h-64" /> }
);

const DailyBrief = dynamic(
  () => import("@/components/home/DailyBrief").then(mod => ({ default: mod.DailyBrief })),
  { ssr: true, loading: () => <SectionSkeleton height="h-72" /> }
);

const ValueProps = dynamic(
  () => import("@/components/home/ValueProps").then(mod => ({ default: mod.ValueProps })),
  { ssr: true, loading: () => <SectionSkeleton height="h-64" /> }
);

const UrgencySection = dynamic(
  () => import("@/components/home/UrgencySection").then(mod => ({ default: mod.UrgencySection })),
  { ssr: true, loading: () => <SectionSkeleton height="h-64" /> }
);

const NewsletterSignup = dynamic(
  () => import("@/components/email/NewsletterSignup").then(mod => ({ default: mod.NewsletterSignup })),
  { ssr: true, loading: () => <SectionSkeleton height="h-48" /> }
);

const TrustBadges = dynamic(
  () => import("@/components/home/TrustBadges").then(mod => ({ default: mod.TrustBadges })),
  { ssr: true, loading: () => <SectionSkeleton height="h-32" /> }
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <div className="flex-grow">
        {/* 1. EMOTIONAL HOOK: "Your Retirement Is Under Attack" */}
        <WhySection />

        {/* 2. CREDIBILITY: Instant trust — stats & Rich Dad philosophy */}
        <AuthoritySection />

        {/* 3. AGITATION: Make the pain real — Wealth Calculator */}
        <WealthCalculator />

        {/* 4. THE ANSWER: Augusta showcase — right after the pain */}
        <FeaturedPartner />

        {/* 5. HOW IT WORKS: Reduce anxiety — "3 Simple Steps" */}
        <HowSection />

        {/* 6. COMPARE: For researchers — all companies ranked */}
        <ComparisonTable />

        {/* 7. SOCIAL PROOF: "People like me" — Testimonials */}
        <Testimonials />

        {/* 8. MARKET CONTEXT: Daily Brief — spot prices & headlines */}
        <DailyBrief />

        {/* 9. EDUCATION: Why gold works — Rich Dad framework */}
        <ValueProps />

        {/* 10. URGENCY: Why act NOW — gold prices, central banks */}
        <UrgencySection />

        {/* 11. RESOURCES: Quick nav to key content */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <Container>
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              Explore Our Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/scenarios"
                className="group bg-red-500/10 border border-red-500/20 rounded-xl p-6 hover:bg-red-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="font-bold text-[#000080] group-hover:text-red-500 transition-colors">Crisis Scenarios</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Understand economic threats and how to protect your retirement from dollar collapse, inflation, and market crashes.
                </p>
                <span className="inline-flex items-center gap-1 text-red-500 text-sm font-medium">
                  View Scenarios <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/learn"
                className="group bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 hover:bg-amber-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-6 w-6 text-amber-500" />
                  <h3 className="font-bold text-[#000080] group-hover:text-amber-500 transition-colors">Learning Center</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Expert guides on 401k management, RMDs, fees, withdrawal strategies, and retirement planning.
                </p>
                <span className="inline-flex items-center gap-1 text-amber-500 text-sm font-medium">
                  Browse Articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/rollover"
                className="group bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:bg-blue-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="h-6 w-6 text-blue-500" />
                  <h3 className="font-bold text-[#000080] group-hover:text-blue-500 transition-colors">Rollover Guides</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Step-by-step instructions for rolling over your 401k, IRA, TSP, or other retirement account to gold.
                </p>
                <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium">
                  Start Rollover <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* 12. NEWSLETTER */}
        <section className="py-16 bg-transparent">
          <Container>
            <NewsletterSignup variant="footer" />
          </Container>
        </section>

        {/* 13. TRUST: Final reassurance */}
        <TrustBadges />
      </div>

      <Footer />
    </main>
  );
}
```

**Key difference from current:** Removed DeepWhySection import, removed QuizCTA import, reordered FeaturedPartner and ComparisonTable up, moved DailyBrief and ValueProps down.

---

## PHASE 2: Hero Qualifying Language

### P2-001: Update WhySection badge text
**File:** `src/components/home/GoldenCircle.tsx`

Find the badge/pill element in the WhySection that currently says:
```
"For Hard-Working Americans Who've Done It Right"
```

Change to:
```
"For Americans With $50,000+ in Retirement Savings"
```

This single text change sets the qualification frame for the entire page. A visitor with $5k in savings reads this and self-selects out. A visitor with $200k reads it and thinks "this is for me."

Also find the hero subtext:
```
"You put in the hours. You skipped the vacations. You built a nest egg most people only dream about."
```

Keep this — it reinforces the $50k+ frame. "Nest egg most people only dream about" = real money.

---

## PHASE 3: Mobile Sticky CTA

### P3-001: Create MobileStickyBar component
**File:** CREATE `src/components/widgets/MobileStickyBar.tsx`

A persistent bottom bar on mobile (hidden on desktop) that appears after the user scrolls past the hero. Links directly to Augusta affiliate LP.

```tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 600px)
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const augustaLink = getTrackedLink(AFFILIATE_LINKS.augusta, "mobile-sticky", "augusta");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={augustaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#B22234] text-white font-bold py-3.5 px-6 w-full text-center shadow-lg"
      >
        Get Your Free Gold IRA Kit
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}
```

### P3-002: Add MobileStickyBar to layout
**File:** `src/app/layout.tsx`

Import and add `<MobileStickyBar />` inside the body, after the `LeadModalProvider` children.

Also add bottom padding to the body on mobile to prevent the sticky bar from covering content:
```tsx
<body className="pb-14 md:pb-0">
```

---

## PHASE 4: Verification

### P4-001: Build check
`npm run build` — zero TypeScript errors.

### P4-002: Visual verification
- Homepage loads with new section order
- FeaturedPartner (Augusta) appears right after WealthCalculator
- ComparisonTable appears before Testimonials
- DeepWhySection is gone (no "Why We Do This" section)
- QuizCTA is gone from homepage
- Mobile: sticky bottom bar appears after scrolling past hero
- Mobile: sticky bar links to Augusta LP
- Desktop: no sticky bar visible
- All "Get Free Gold Kit" buttons still work (redirect to Augusta)

### P4-003: Regression check
- Navbar still works on all pages
- Footer links still work
- No layout shifts or broken styling
- DeepWhySection still exists as a component (not deleted) — just not used on homepage

---

## FILES CHANGED

| File | Action | Description |
|------|--------|-------------|
| `src/app/page.tsx` | REWRITE | Section reorder, remove DeepWhy + QuizCTA |
| `src/components/home/GoldenCircle.tsx` | EDIT | Hero badge text → "$50,000+ in Retirement Savings" |
| `src/components/widgets/MobileStickyBar.tsx` | CREATE | Mobile sticky CTA bar |
| `src/app/layout.tsx` | EDIT | Add MobileStickyBar + mobile body padding |

---

## EXPECTED IMPACT

| Change | Effect |
|--------|--------|
| Hero "$50k+" badge | Visitors with <$50k self-select out early, reducing unqualified clicks |
| Augusta at position 4 | More qualified visitors see the Augusta CTA (most bounce before position 9) |
| ComparisonTable at position 6 | Comparison shoppers find what they need without scrolling 80% |
| Mobile sticky CTA | 50%+ of traffic always has Augusta CTA visible |
| Removed DeepWhy | Faster path from pain (calculator) to solution (Augusta) |
| Removed QuizCTA | No more dead-end quiz flow on homepage |

---

RALPH_STATUS:
- PHASE: 1 (Homepage Optimization)
- TASK: Tier 1.1 implementation plan written
- PROGRESS: Plan complete, ready for Claude Code
- BLOCKERS: None
