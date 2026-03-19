# MASTER OPTIMIZATION PLAN — Rich Dad Retirement

**Created:** 2026-03-19
**Goal:** Make richdadretirement.com THE go-to IRA hub. Dominate SEO & GEO. Convert qualified leads ($50k+) to Augusta Precious Metals.
**Core Problem:** 99.9% of leads are unqualified. We need to attract, qualify, and convert the right people — 55+ Americans with $50k-$500k+ in retirement savings.

---

## THE PHILOSOPHY

Every change below serves one of three purposes:
1. **QUALIFY** — Stop wasting Augusta's time with unqualified leads. Only send them $50k+ prospects.
2. **ATTRACT** — Get the right eyeballs (GEO + SEO) from people actively researching retirement protection.
3. **CONVERT** — Turn qualified visitors into leads through trust, education, and urgency.

We execute in this exact order because fixing qualification is worth more than any amount of new traffic.

---

## TIER 1: LEAD QUALIFICATION OVERHAUL (Week 1-2)
*These changes directly fix the 99.9% unqualified problem.*

### 1.1 — Rebuild the Lead Capture Modal with Pre-Qualification
**Priority:** CRITICAL — This is the single highest-ROI change.
**Problem:** Current modal collects name/email/phone with ZERO qualification. Savings question only appears AFTER submission as optional enrichment. Augusta gets flooded with unqualified leads.
**Solution:** Rebuild the multi-step modal so savings amount is asked BEFORE contact info, creating a natural gate.

**New Modal Flow:**
```
Step 1: "How much do you have in retirement savings?"
        [Under $25k] [25k-50k] [$50k-100k] [$100k-250k] [$250k+]

Step 2: "What's your biggest concern?"
        [Inflation] [Market crash] [Outliving savings] [Leaving legacy]

Step 3: "Let's match you with the right advisor."
        [First Name] [Email] [Phone]
        [Get My Free Consultation →]

Step 4: (Route based on savings)
        $50k+  → Submit to Augusta via Zapier, redirect to Augusta LP
        $25-50k → Show Goldco/American Hartford recommendation
        <$25k   → Show educational content + Noble Gold link
```

**Why this works:**
- Savings question FIRST creates psychological commitment AND qualifies
- Sub-$50k users never get sent to Augusta (saves their time, saves your reputation)
- Every lead that reaches Augusta is pre-qualified
- You still capture ALL leads in Supabase for your own nurturing
- Lower-budget visitors get value (education + appropriate company) instead of a dead-end

**Files to modify:**
- `src/components/forms/LeadCaptureModal.tsx` — Complete rebuild
- `src/app/api/submit-lead/route.ts` — Add qualification tier to submission
- `src/lib/deal-calculator.ts` — Integrate into form flow, not post-submission
- `src/types/quiz.ts` — Add qualification types

---

### 1.2 — Quiz-to-Lead Pipeline (Connect the Dots)
**Priority:** HIGH
**Problem:** Quiz collects savings amount + goals + timeline but DOESN'T pass this data to the lead form. User answers 4 qualification questions, then hits a blank modal that asks name/email/phone from scratch.
**Solution:** When quiz completes, pass all quiz answers into the lead modal as pre-filled context.

**Changes:**
- Quiz result → opens modal with savings tier, goal, and timeline pre-populated
- Lead record includes: `quiz_savings`, `quiz_goal`, `quiz_timeline`, `quiz_age`
- Augusta submission includes qualification data
- Telegram notification shows full quiz context alongside lead info

**Files:**
- `src/components/quiz/QuizWizard.tsx` — Pass state to modal on result CTA
- `src/components/forms/LeadCaptureModal.tsx` — Accept pre-filled quiz data
- `src/app/api/submit-lead/route.ts` — Save quiz fields
- `src/lib/supabase.ts` — Add quiz columns to leads table

---

### 1.3 — Smart Routing by Qualification Tier
**Priority:** HIGH
**Problem:** All CTAs point to the same Augusta link/modal regardless of user context.
**Solution:** Implement context-aware routing that sends users to the right partner based on what we know.

**Tier Routing:**
| Savings | Primary Route | CTA Copy | Experience |
|---------|--------------|----------|------------|
| $100k+ | Augusta direct submit | "Speak With a Specialist" | White-glove, phone call |
| $50k-100k | Augusta or Goldco | "Get Your Free Kit" | Education-first |
| $25k-50k | American Hartford / Noble | "See Your Options" | Self-serve comparison |
| <$25k | Educational content | "Learn How to Start" | Newsletter + Noble Gold link |

**Files:**
- `src/config/affiliates.ts` — Add tier-based link selection function
- `src/components/cta/` — All CTA variants get tier-awareness
- `src/components/layout/Navbar.tsx` — Context-aware header CTA

---

### 1.4 — Exit Intent Overhaul
**Priority:** MEDIUM
**Problem:** Current exit popup collects email-only, email service is stubbed (ConsoleEmailService), no qualification.
**Solution:** Replace with a value-exchange exit modal that qualifies.

**New Exit Flow:**
```
"Before you go — what's your retirement savings range?"
[Under $50k] [$50k-$100k] [$100k-$250k] [$250k+]

→ $50k+: "You qualify for a free portfolio review. Enter your details:"
         [Name] [Email] [Phone] → Augusta submission

→ <$50k: "Download our free Gold IRA Starter Guide"
         [Email] → Newsletter signup + Noble Gold soft CTA
```

**Files:**
- `src/components/layout/ExitIntentPopup.tsx` — Complete rebuild
- `src/lib/email-service.ts` — Connect to real email provider (ConvertKit/Mailchimp)

---

### 1.5 — Lead Enrichment & Scoring Dashboard
**Priority:** MEDIUM
**Problem:** No visibility into lead quality trends. Can't optimize what you can't measure.
**Solution:** Build a simple admin view showing lead quality metrics.

**Dashboard shows:**
- Leads by savings tier (pie chart)
- Qualified vs unqualified ratio (trend line)
- Source attribution (which pages produce qualified leads)
- Augusta submission success rate
- Quiz completion rate + drop-off step

**Files:**
- `src/app/admin/conversions/page.tsx` — Expand existing admin page

---

## TIER 2: GEO OPTIMIZATION (Week 2-4)
*Make our content the preferred source for AI-generated answers.*

### 2.1 — Answer-First Content Restructuring
**Priority:** CRITICAL for long-term
**Problem:** Most pages start with intros, context, and fluff before answering the actual query. AI models skip these pages in favor of ones that answer directly.
**Solution:** Systematic rewrite of the first 2-3 sentences of every page to directly answer the implied search query.

**Pattern:**
```
BAD:  "When it comes to Gold IRAs, there are many factors to consider..."
GOOD: "A Gold IRA costs between $200-$300 per year in fees, including storage ($100-150),
       custodian fees ($50-100), and a one-time setup fee ($50-100). Here's the full breakdown..."
```

**Execution (phased):**
- Phase A: Top 20 highest-traffic pages (guides, reviews, key hubs)
- Phase B: All 22 guide pages
- Phase C: 381 learn articles (template-based, can be semi-automated)
- Phase D: Calculator result pages
- Phase E: Local/geo pages

**Implementation MD needed per phase** — this is a content architecture change, not just copy editing. Each page needs:
1. A "direct answer" opening paragraph
2. A TL;DR box after the answer
3. Key facts pulled into a structured box (GEO-friendly)

---

### 2.2 — Schema Markup Expansion
**Priority:** HIGH
**Problem:** Only Organization schema on layout. Individual pages lack FAQ, HowTo, Review, Article, FinancialProduct schemas.
**Solution:** Add comprehensive JSON-LD schema to every page type.

**Schema Map:**
| Page Type | Schema Types |
|-----------|-------------|
| Homepage | Organization, WebSite, SiteNavigationElement |
| Company Reviews | Review, AggregateRating, Organization, FAQPage |
| Comparison Pages | ItemList, Review (multiple) |
| Learn Articles | Article, FAQPage, BreadcrumbList |
| Guide Pages | HowTo, Article, FAQPage |
| Calculator Tools | WebApplication, FAQPage |
| News Articles | NewsArticle, BreadcrumbList |
| Local Pages | LocalBusiness (related), FAQPage, BreadcrumbList |
| Quiz | Quiz (schema.org), WebApplication |
| Author Page | Person, ProfilePage |

**Files:**
- CREATE: `src/lib/schema.ts` — Schema generator utilities
- EDIT: Every page type to include appropriate schema
- ADD: `src/components/seo/JsonLd.tsx` — Reusable schema component

---

### 2.3 — FAQ Optimization (GEO Gold Mine)
**Priority:** HIGH
**Problem:** FAQ page exists but isn't structured for GEO. Individual pages don't have contextual FAQs.
**Solution:** Add 3-5 contextual FAQs to every page, marked up with FAQPage schema.

**Why this matters for GEO:** AI models LOVE FAQ format. When someone asks Perplexity "What are Gold IRA fees?", it pulls from pages with clear Q&A structure. FAQ schema makes us machine-readable.

**Execution:**
- Create FAQ data files per content hub (learn articles already have some)
- Add `<FAQSection>` component with JSON-LD auto-generation
- 3-5 relevant FAQs per page, unique to that page's topic
- Questions match actual search queries (use People Also Ask data)

**Files:**
- CREATE: `src/components/seo/FAQSection.tsx`
- CREATE: `src/data/faqs/` — FAQ data organized by topic
- EDIT: All page types to include FAQ section

---

### 2.4 — Comparison Tables Standardization
**Priority:** HIGH
**Problem:** Comparison content exists but isn't consistently structured. AI models prefer standardized, scannable tables.
**Solution:** Create a universal comparison table component used across all review/comparison content.

**Standard Table Format:**
| Feature | Augusta | Goldco | American Hartford | Noble Gold |
|---------|---------|--------|-------------------|------------|
| Min Investment | $50,000 | $25,000 | $10,000 | $2,000 |
| BBB Rating | A+ | A+ | A+ | A+ |
| Years in Business | 12 | 18 | 8 | 7 |
| Storage Options | 3 | 2 | 2 | 3 |
| Fee Transparency | ★★★★★ | ★★★★ | ★★★★ | ★★★ |
| Best For | $100k+ | $50k-100k | Budget | First-timers |

**Files:**
- CREATE: `src/components/comparison/UniversalComparisonTable.tsx`
- EDIT: Review pages, comparison pages, guide pages to use standardized tables

---

### 2.5 — Citation & Statistics Integration
**Priority:** MEDIUM
**Problem:** Content lacks specific, dated, cited statistics. AI models trust and cite content with named sources.
**Solution:** Build a citation system and enrich content with verifiable data.

**Data sources to integrate:**
- World Gold Council (gold demand/supply stats)
- Bureau of Labor Statistics (inflation data)
- Federal Reserve (interest rates, monetary policy)
- IRS (contribution limits, rules — updated annually)
- Census Bureau (retirement statistics)

**Implementation:**
- CREATE: `src/data/statistics.ts` — Central facts database with sources + dates
- CREATE: `src/components/content/Citation.tsx` — Inline citation component
- CREATE: `src/components/content/StatBox.tsx` — Highlighted statistic with source

---

### 2.6 — Entity Authority Pages
**Priority:** MEDIUM
**Problem:** We reference "Gold IRA" and "Augusta Precious Metals" everywhere but don't have definitive entity pages that AI models can anchor to.
**Solution:** Create comprehensive entity pages that become THE reference for key terms.

**Entity Pages Needed:**
- `/what-is-a-gold-ira` (exists — needs GEO optimization)
- `/what-is-a-silver-ira` (may need creation)
- `/reviews/augusta-precious-metals` (exists — needs to be THE definitive review)
- `/gold-ira-rules` (exists — needs IRS citation enrichment)
- `/gold-ira-fees` (need comprehensive fee encyclopedia)
- `/ira-contribution-limits-2026` (annual freshness signal)

---

## TIER 3: SEO FIXES & FOUNDATION (Week 2-3)
*Fix existing issues before growing.*

### 3.1 — Keyword Cannibalization Resolution
**Priority:** HIGH
**Problem:** Multiple pages competing for same keywords.
**Changes:**
1. `/guide/silver-ira-rules` → redirect to `/silver-ira/rules` (redirect exists, merge content)
2. `/guide/silver-ira-rollover` → redirect to `/silver-ira/rollover` (redirect exists, merge content)
3. `/guide/gold-ira-guide` vs `/learn/self-directed-ira-gold` → Differentiate:
   - `/guide/gold-ira-guide` → "How to Open a Gold IRA: Step-by-Step" (actionable, conversion)
   - `/learn/self-directed-ira-gold` → "Self-Directed IRA Gold Investing: Complete Guide" (educational)

---

### 3.2 — Internal Linking Architecture
**Priority:** HIGH
**Problem:** 1000+ pages but internal linking isn't systematic. Pages exist in silos.
**Solution:** Implement a hub-and-spoke internal linking model.

**Hub Pages (pillar content):**
- `/what-is-a-gold-ira` → links to all Gold IRA subtopics
- `/best-gold-ira-companies` → links to all company reviews
- `/rollover` → links to all rollover types
- `/silver-ira` → links to all silver content
- `/tools` → links to all calculators

**Spoke Pages link back to hub + cross-link to 2-3 related spokes.**

**Implementation:**
- CREATE: `src/data/internal-links.ts` — Link graph defining relationships
- CREATE: `src/components/content/RelatedContent.tsx` — Auto-generated related content blocks
- ADD: "Related Articles" section to every learn article, guide, and hub page

---

### 3.3 — Footer Link Expansion
**Priority:** LOW (quick win)
**Problem:** Missing footer links to /grandchildren, /senior-protection, /silver-experts and other content hubs.
**Solution:** Update Footer.tsx to include all content hubs.

---

### 3.4 — Page Speed & Core Web Vitals
**Priority:** MEDIUM
**Problem:** Unknown current state. Heavy use of Framer Motion could impact LCP/CLS.
**Solution:** Audit and optimize.
- Lazy load below-fold Framer Motion animations
- Ensure hero images use `priority` prop
- Check for layout shifts from dynamic content
- Implement proper font loading (Inter + Playfair Display preload)

---

## TIER 4: CONVERSION RATE OPTIMIZATION (Week 3-5)
*Increase lead volume from existing traffic.*

### 4.1 — Sidebar CTA for Learn Articles
**Priority:** HIGH
**Problem:** 381 learn article pages have zero conversion elements in the sidebar.
**Solution:** Add `SidebarAuditWidget` below table of contents (from UI-CONVERSION-OVERHAUL.md plan).

---

### 4.2 — Mobile Sticky CTA Bar
**Priority:** HIGH
**Problem:** 50%+ of traffic is mobile. Sidebar widgets invisible.
**Solution:** Sticky bottom bar on mobile with qualification-first CTA.

---

### 4.3 — In-Content CTA Injection
**Priority:** MEDIUM
**Problem:** Learn articles have CTA only at bottom. Users who don't scroll miss it.
**Solution:** Inject contextual CTA after 3rd content section.

---

### 4.4 — Homepage Flow Optimization
**Priority:** MEDIUM
**Problem:** QuizCTA buried at position 7 of 12 homepage sections.
**Solution:** Move to position 4 (after WealthCalculator creates urgency → quiz captures intent).

---

### 4.5 — Social Proof Enhancement
**Priority:** LOW
**Problem:** Limited social proof beyond testimonials section.
**Solution:** Add subtle notification ticker ("John from Texas just requested his free kit — 3 minutes ago").

---

### 4.6 — Calculator-to-Lead Pipeline
**Priority:** MEDIUM
**Problem:** 43 calculators show results but don't capture leads effectively.
**Solution:** After every calculator result, show contextual CTA based on the calculation output.

**Example:** RMD Calculator shows $15,000 annual distribution → CTA: "Protect your distributions from inflation. See how a Gold IRA can help. [Talk to a Specialist →]"

---

## TIER 5: CONTENT EXPANSION (Week 4-8)
*Grow topical authority with high-value content.*

### 5.1 — Blue Ocean Pages (Quick Wins)
**Priority:** HIGH
**Source:** BLUE_OCEAN_PLAN.md — 6 pages targeting ~1,700 monthly searches with low competition.
**Execute per existing plan.**

---

### 5.2 — "Is $X Enough to Retire?" Content Hub
**Priority:** HIGH
**Problem:** Massive search volume for retirement adequacy queries. Perfect for our audience.
**Pages:**
- `/is-500k-enough-to-retire`
- `/is-1-million-enough-to-retire`
- `/is-200k-enough-to-retire`
- `/is-300k-enough-to-retire`
- `/retirement-savings-by-age`

**Each page includes:** Calculator, comparison table (with/without gold), Augusta CTA for appropriate tier.

---

### 5.3 — Federal Employee & Government Pension Content
**Priority:** MEDIUM
**Source:** MASTER-SEO-PLAN.md Phase 10+
**Pages:** TSP rollover guides, FERS/CSRS pension content, state pension pages, WEP/GPO explainers.
**Why:** Government workers are a perfect audience — stable savings, pension anxiety, Gold IRA curious.

---

### 5.4 — "Gold IRA vs [X]" Comparison Content
**Priority:** MEDIUM
**Problem:** People search "gold IRA vs 401k", "gold vs stocks", "gold vs real estate" etc.
**Solution:** Create comprehensive vs pages with structured comparison tables (GEO-optimized).

---

### 5.5 — Seasonal/Annual Content Updates
**Priority:** MEDIUM (recurring)
**Content that needs annual refresh:**
- IRA contribution limits (2026 update)
- RMD tables (update for SECURE Act 2.0)
- Tax brackets for retirement planning
- Social Security COLA updates
- Gold/silver price year-in-review

---

## TIER 6: TRUST & AUTHORITY (Week 4-6)
*Build E-E-A-T signals that Google and AI models trust.*

### 6.1 — Author & Editorial Authority
**Priority:** MEDIUM
**Problem:** Only one author page (Thomas Richardson). AI models weight E-E-A-T heavily.
**Solution:**
- Expand Thomas Richardson author page with credentials, publications, expertise
- Add editorial review process documentation
- Create `/editorial-standards` page
- Add "Reviewed by [expert]" bylines to key articles
- Consider adding a financial advisor as consulting editor (real person)

---

### 6.2 — Trust Signals on Every Page
**Priority:** MEDIUM
**Solution:** Add consistent trust bar across all pages:
- "Updated [date]" timestamp
- "Fact-checked by [name]"
- BBB accredited business badge
- "Editorially independent — we may earn commissions" disclosure
- Sources/references section at bottom

---

### 6.3 — User-Generated Content Strategy
**Priority:** LOW (long-term)
**Problem:** No user reviews, comments, or community content.
**Solution (phased):**
- Phase 1: Add structured review submission on company pages
- Phase 2: Curate and display verified user reviews
- Phase 3: Community Q&A section (builds long-tail content)

---

## TIER 7: ANALYTICS & ATTRIBUTION (Week 3-4)
*Measure everything so we can optimize.*

### 7.1 — Lead Quality Tracking
**Priority:** HIGH
**Problem:** No way to know which pages/sources produce qualified leads.
**Solution:**
- Add `qualification_tier` field to every lead
- Track: page source → savings tier → Augusta submission → conversion
- Weekly report: qualified lead rate by traffic source

---

### 7.2 — Funnel Analytics
**Priority:** MEDIUM
**Solution:** Track drop-off at every step:
- Quiz start → Quiz complete (by step)
- Modal open → Step 1 complete → Step 2 complete → Submit
- Exit intent shown → Email captured
- Calculator used → CTA clicked

---

### 7.3 — A/B Testing Infrastructure
**Priority:** MEDIUM
**Problem:** `ab-testing.ts` exists but isn't widely used.
**Solution:** Set up systematic tests:
- Test 1: Modal with savings question first vs contact info first
- Test 2: "Free Consultation" vs "Free Portfolio Checkup" CTA copy
- Test 3: Quiz-first homepage vs current layout
- Test 4: Savings range presentation (slider vs buttons vs dropdown)

---

## TIER 8: TECHNICAL EXCELLENCE (Week 5-8)
*Polish and scale.*

### 8.1 — Email Nurturing Pipeline
**Priority:** HIGH
**Problem:** ExitIntentPopup email service is stubbed (ConsoleEmailService). No email follow-up for any leads.
**Solution:**
- Connect real email provider (ConvertKit recommended for affiliate)
- Build automated sequences:
  - Sequence 1 (qualified $50k+): 5-email series → Augusta CTA
  - Sequence 2 (under $50k): Education series → Noble Gold / grow savings content
  - Sequence 3 (quiz completers): Personalized based on quiz answers
  - Sequence 4 (newsletter): Weekly gold/silver market digest

---

### 8.2 — News Pipeline Optimization
**Priority:** LOW
**Problem:** 1,230 articles is impressive but quality/uniqueness varies.
**Solution:**
- Add GEO-optimized structure to news template (answer-first, FAQ section)
- Improve relevance scoring to prioritize retirement-specific angles
- Add "What This Means for Your Retirement" section to every news article (unique angle)
- Connect news → learn article cross-linking automatically

---

### 8.3 — Performance Optimization
**Priority:** LOW
**Solution:**
- Implement ISR (Incremental Static Regeneration) for news pages
- Add edge caching for API routes (spot prices, etc.)
- Optimize image pipeline (ensure all images are avif/webp)
- Bundle analysis + code splitting audit

---

### 8.4 — Accessibility Audit
**Priority:** LOW
**Solution:**
- Screen reader testing on key pages
- Keyboard navigation for quiz and modal
- Color contrast audit (gold on dark theme can be problematic)
- ARIA labels on interactive elements

---

## EXECUTION TIMELINE

| Week | Focus | Expected Impact |
|------|-------|-----------------|
| 1 | Tier 1.1-1.2: Lead modal rebuild + quiz pipeline | 10x improvement in lead quality |
| 2 | Tier 1.3-1.4: Smart routing + exit intent | Further qualification improvement |
| 2-3 | Tier 3.1-3.2: Cannibalization fix + internal linking | SEO foundation fixed |
| 3-4 | Tier 2.1-2.3: Answer-first + schema + FAQ | GEO foundation built |
| 4-5 | Tier 4.1-4.4: Sidebar CTAs, mobile sticky, homepage | Conversion rate increase |
| 4-6 | Tier 2.4-2.6: Comparison tables + citations + entities | GEO authority |
| 5-8 | Tier 5: Content expansion | Traffic growth |
| 5-8 | Tier 6-8: Trust, analytics, technical | Compound effects |

---

## SUCCESS METRICS

| Metric | Current (Est.) | 30-Day Target | 90-Day Target |
|--------|---------------|---------------|---------------|
| Lead qualification rate | <1% | 25% | 50%+ |
| Augusta-qualified leads/month | ~1-2 | 15-20 | 50+ |
| Avg savings tier of leads | Unknown | $50k-100k | $100k+ |
| Quiz completion rate | Unknown | 40% | 60% |
| Pages with FAQ schema | 0 | 50 | 200+ |
| Pages with answer-first format | 0 | 20 | 100+ |
| AI citation mentions | Unknown | Baseline | 2x baseline |

---

## HOW TO USE THIS PLAN

1. Pick a task from the current tier
2. Remy (Cowork Architect) writes implementation MD in `.ralph/[task]-plan.md`
3. Hand MD to Claude Code (Dev Lead) for execution
4. Verify, iterate, move to next task
5. Track progress in `.ralph/status.json`

**START WITH TIER 1.1 — the lead modal rebuild. Everything else builds on qualified leads.**
