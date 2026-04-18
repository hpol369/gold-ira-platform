# Claude Code Instructions for Rich Dad Retirement

## MISSION

Build THE definitive IRA information hub in the US. Dominate organic search AND generative engine optimization (GEO) for all retirement/IRA/precious metals queries. Convert visitors into Augusta Precious Metals leads through trust, authority, and the best content in the market.

**Site:** richdadretirement.com
**Domain:** Active, indexed by Google
**Primary monetization:** Augusta Precious Metals affiliate (lead gen)
**Secondary affiliates:** Noble Gold, Goldco, American Hartford, Birch Gold, iTrust Capital, Alto IRA, Rocket Dollar, Equity Trust, Guidant Financial

---

## ALWAYS USE RALPH'S METHOD

For ANY implementation task, follow this systematic approach:

### 1. CREATE A PLAN FIRST
Before coding, create a task plan in `.ralph/[feature]-plan.md`:
```
## PHASE 1: Data Structures
- [ ] P1-001: Task description
- [ ] P1-002: Task description

## PHASE 2: Components
- [ ] P2-001: Task description
...
```

### 2. DATA STRUCTURES FIRST
Always create types and data utilities before UI components.

### 3. EXECUTE SEQUENTIALLY
Complete each task, mark it done, move to next.

### 4. STATUS TRACKING
End each major response with:
```
RALPH_STATUS:
- PHASE: [current phase]
- TASK: [current task ID]
- PROGRESS: [X/Y completed]
- BLOCKERS: [any issues]
```

---

## TECH STACK

- **Framework:** Next.js 15+ (App Router, React 19)
- **Language:** TypeScript (strict mode, zero `any`)
- **Styling:** Tailwind CSS 4 + Framer Motion
- **Database:** Supabase (leads, source_clicks tables)
- **Notifications:** Telegram bot (real-time lead alerts)
- **Lead submission:** Zapier webhook to Augusta
- **Analytics:** GA4 + Google Ads + Microsoft Clarity + GTM
- **Hosting:** Vercel
- **Content:** MDX for news (1,230 articles), TypeScript data files for learn articles
- **Forms:** react-hook-form + zod validation
- **Charts:** Recharts
- **AI pipeline:** Anthropic SDK for news generation
- **Social:** Twitter API v2 for automated posting

---

## ARCHITECTURE OVERVIEW

### Directory Structure
```
src/
├── app/                    # 60+ route directories, 1000+ generated pages
│   ├── api/                # 10 API routes (leads, tracking, prices, newsletter)
│   ├── tools/              # 43 financial calculators
│   ├── learn/              # 381 dynamic articles from 75 clusters
│   ├── news/               # 1,230 MDX news articles
│   ├── local/              # 50 states + 500 cities geo pages
│   ├── guide/              # 22 conversion-focused guides
│   ├── silver-*/           # 9 silver content hubs (93 pages)
│   ├── rollover/           # Account types + provider pages
│   ├── best-gold-ira-for/  # Dynamic audience targeting
│   └── [20+ more hubs]
├── components/
│   ├── layout/             # Navbar, Footer, PageHeader, ExitIntentPopup
│   ├── home/               # 12+ homepage sections (Golden Circle flow)
│   ├── ui/                 # Button, Card, Badge, FadeIn, Container, etc.
│   ├── forms/              # Lead capture forms
│   ├── quiz/               # Product matching quiz
│   ├── tools/              # Calculator components
│   ├── news/               # News cards, filters
│   ├── reviews/            # Review templates
│   ├── cta/                # CTA variations
│   └── [10+ more categories]
├── config/
│   └── affiliates.ts       # ALL affiliate links + tracking helper
├── data/
│   ├── companies/          # 20+ company profiles with ratings
│   ├── learn-articles/     # 75 article clusters (~381 articles)
│   ├── rollovers/          # Account types + providers
│   ├── scenarios.ts        # Economic crisis scenarios
│   ├── quiz-routing.ts     # Budget to company mapping
│   ├── widow-guide/        # Inheritance planning articles
│   ├── medicaid-planning/  # Senior care strategies
│   ├── grandchildren/      # Legacy planning
│   └── senior-protection/  # Elder fraud prevention
├── lib/
│   ├── supabase.ts         # DB client + CRUD operations
│   ├── news.ts             # News article system
│   ├── metadata.ts         # SEO metadata helper (createPageMetadata)
│   ├── states.ts           # 50 US states data
│   ├── cities.ts           # 500+ major cities
│   ├── notifications.ts    # Telegram alerts
│   ├── augusta.ts          # Zapier webhook
│   ├── deal-calculator.ts  # Lead deal sizing
│   ├── analytics.ts        # Event tracking
│   └── ab-testing.ts       # A/B test framework
└── types/                  # Shared TypeScript interfaces
    ├── news.ts             # News article schema
    ├── quiz.ts             # Quiz state + routing
    ├── learn-article.ts    # Article registry
    ├── content-hubs.ts     # Hub page metadata
    └── tool.ts             # Calculator types
```

### Content Pipeline (scripts/news/)
```
RSS feeds (Reuters, Kitco, Fed, CNBC, MarketWatch)
  → scrape-feeds.ts
  → score-relevance.ts (0-10 scoring)
  → generate-article.ts (Anthropic SDK)
  → review queue / auto-publish
  → generate-tweet.ts + generate-facebook-post.ts
  → post to social
```

---

## DESIGN SYSTEM

- **Theme:** Dark (slate-900) with light sections
- **Cards:** Glass-morphism (bg-white/5 backdrop-blur border-white/10)
- **Accent:** Gold/amber (amber-400/500)
- **Typography:** Inter (body, --font-inter) + Playfair Display (headings, --font-playfair)
- **Color-coded sections:**
  - Purple = Solo 401k
  - Teal = Real Estate IRA
  - Orange = ROBS 401k
  - Green = Self-Directed IRA
  - Blue = Crypto IRA
- **Animations:** Framer Motion (FadeIn, stagger effects)
- **Images:** avif/webp formats, aggressive caching (1yr immutable)

---

## AFFILIATE LINK USAGE

**ALWAYS** use the tracked link helper:
```ts
import { getTrackedLink, AFFILIATE_LINKS } from '@/config/affiliates';
const link = getTrackedLink(AFFILIATE_LINKS.augusta, "source-page", "augusta");
```

**Augusta Intent Tiers:**
- `augusta` — high intent (learn LP)
- `augustaMidIntent` — consideration phase
- `augustaChecklist` — comparison shoppers
- `augustaZeroFees` — fee-conscious
- `augustaSilver` — silver-specific
- `augustaBuyerBeware` — scam-aware visitors

**Every page MUST include at least one Augusta CTA.**

---

## SEO INFRASTRUCTURE

- **Sitemap:** Auto-generated at /sitemap.xml from `src/app/sitemap.ts`
- **Robots:** `src/app/robots.ts` — allows all except /admin/, /api/
- **Metadata:** `createPageMetadata()` from `src/lib/metadata.ts`
- **Schema.org:** Organization markup in layout, FAQ/Article/Review per page
- **Canonical URLs:** `getCanonicalUrl()` helper
- **OG defaults:** 1200x630 image, en_US locale
- **Google verification:** `ieR8rjLZCnl3Cy2YQ_fz9YnSRnPCPdfQA9p6pENdk78`
- **Redirects:** Managed in `next.config.ts` (silver sub-pages consolidated)

### Known SEO Issues (FIX PRIORITY)
1. **Keyword cannibalization:** silver-ira-rules, silver-ira-rollover (redirects exist but content needs merging)
2. **Gold IRA guide overlap:** `/guide/gold-ira-guide` vs `/learn/self-directed-ira-gold`
3. **Missing footer links:** /grandchildren, /senior-protection, /silver-experts
4. **Quiz affiliate placeholders:** 2 TODOs in `/src/types/quiz.ts`

---

## GEO (Generative Engine Optimization) — STRATEGIC PRIORITY

GEO makes our content the preferred source for AI answers (ChatGPT, Perplexity, Google AI Overviews, Claude). Key principles:

1. **Structured data everywhere:** FAQ, HowTo, Article, Review, FinancialProduct schemas
2. **Answer-first format:** First 2-3 sentences of every page must directly answer the query (AI snippet bait)
3. **Comprehensive comparison tables:** AI models love structured, scannable data
4. **Statistics and citations:** Named sources, specific numbers, dated facts
5. **Entity authority:** Be THE definitive source for "Gold IRA," "Silver IRA," "Augusta Precious Metals"
6. **Topical completeness:** Cover every subtopic exhaustively (1000+ pages and growing)
7. **Freshness signals:** Daily news publishing, regular content updates
8. **Clear attribution:** Author pages, editorial policy, about-us with E-E-A-T signals

---

## BRAND VOICE

**Target:** 55+ Americans, blue-collar (factory, trucking, nursing, teaching, government, union, construction)

**DO:** Plain English, job-specific examples, acknowledge physical work reality, validate Wall Street skepticism, Rich Dad philosophy ("savers are losers" due to inflation)

**DON'T:** "It's never too late" (patronizing), "small contributions" (insulting at 55+), Wall Street jargon, generic age brackets, condescending about financial literacy

---

## CONVERSION ARCHITECTURE

### Lead Flow
```
Visitor → Content/Quiz/Calculator → Lead Form → Supabase → Telegram alert → Zapier → Augusta
```

### Lead Qualification
- $100k+ savings → Augusta (primary)
- $50-100k → Goldco
- $25-50k → American Hartford
- <$25k → Noble Gold

### Conversion Touchpoints
- Homepage: QuizCTA, WealthCalculator, FeaturedPartner
- Every page: Navbar CTA, Footer CTA
- Exit intent: ExitIntentPopup
- Social proof: SocialProofTicker
- Quiz: Multi-step product matcher
- Calculators: Embedded CTAs after results

---

## ACTIVE PLANS & PRIORITIES

### Completed
- 22 content hub architectures (verified)
- 75 learn article clusters (381 articles)
- 43 calculator tools built
- 93 silver content pages across 9 hubs
- News pipeline (1,230 articles, daily cadence)
- OG metadata system
- Lead capture + Telegram + Zapier integration
- Google Ads tracking infrastructure
- Tone of voice guide

### Ready to Execute (Priority Order)
1. Fix keyword cannibalization (2 merges + 1 differentiation)
2. Blue Ocean pages — 6 low-competition pages (~1,700/mo searches)
3. UI conversion overhaul — 8 components (sidebar CTA, mobile sticky, exit modal)
4. Master SEO Phase 10+ — Federal employee, state pensions, WEP/GPO
5. Universal quiz upgrade — Multi-product finder
6. Golden Circle homepage redesign — Emotional WHY/HOW/WHAT flow
7. Google Ads launch — "Is $X enough to retire?" campaigns
8. GEO optimization pass — Schema markup, answer-first format, entity optimization

### Strategy Docs (in .ralph/)
- `MASTER-SEO-PLAN.md` — 300+ keywords, 22 phases (phases 1-3 complete)
- `TONE-OF-VOICE-GUIDE.md` — Brand voice bible
- `SITE-AUDIT-*.md` — Structure, CTAs, calculators, cannibalization audits
- `UI-CONVERSION-OVERHAUL.md` — 8 conversion improvements
- `UNIVERSAL-QUIZ-SYSTEM.md` — Multi-product quiz architecture
- `GOLDEN_CIRCLE_IMPLEMENTATION_PLAN.md` — Homepage redesign
- `BLUE_OCEAN_PLAN.md` — 6 quick-win pages
- `GOOGLE_ADS_STRATEGY.md` — Paid acquisition campaigns

---

## QUALITY STANDARDS

1. **Mobile-first** responsive design
2. **TypeScript strict** — zero `any` types
3. **Reuse** existing components before creating new ones
4. **Every page** gets Augusta CTA
5. **Dark theme** consistency
6. **Schema markup** for SEO (FAQ, Article, Review, HowTo)
7. **Performance:** avif/webp images, lazy loading, code splitting
8. **Accessibility:** Semantic HTML, alt text, keyboard navigation
9. **GEO-ready:** Answer-first paragraphs, structured data, citation-worthy content
10. **Security:** X-Frame-Options DENY, X-XSS-Protection, strict referrer policy

---

## KEY FILE QUICK REFERENCE

| Purpose | File |
|---------|------|
| Homepage | `src/app/page.tsx` |
| Root layout | `src/app/layout.tsx` |
| Affiliate links | `src/config/affiliates.ts` |
| Company data | `src/data/companies/index.ts` |
| Learn articles | `src/data/learn-articles/index.ts` |
| SEO metadata | `src/lib/metadata.ts` |
| Sitemap | `src/app/sitemap.ts` |
| Robots | `src/app/robots.ts` |
| Navbar | `src/components/layout/Navbar.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Lead API | `src/app/api/submit-lead/route.ts` |
| Click tracking | `src/app/api/track-click/route.ts` |
| News system | `src/lib/news.ts` |
| News pipeline | `scripts/news/run-pipeline.ts` |
| Quiz routing | `src/data/quiz-routing.ts` |
| Supabase client | `src/lib/supabase.ts` |
| Next.js config | `next.config.ts` |
| Task plans dir | `.ralph/` |

---

## WORKFLOW: COWORK (Architect) + CLAUDE CODE (Dev Lead)

1. **Cowork** analyzes, researches, plans, and writes implementation MDs
2. **Claude Code** receives the MD and executes code changes
3. All plans go in `.ralph/[feature]-plan.md`
4. All code changes follow Ralph's Method (plan → types → components → sequential)
5. Status tracked with RALPH_STATUS blocks

# currentDate
Today's date is 2026-03-19.
