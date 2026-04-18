# THE FUNNEL BLUEPRINT — Rich Dad Retirement Revenue Engine

**Date:** 2026-03-19
**Goal:** $50,000/month recurring revenue
**Current state:** 1 qualified lead, ~0 revenue
**This document:** The complete business system, not just a code plan

---

## CONFIRMED ACCOUNTS & CREDENTIALS

### Affiliate Accounts (Active)
- **Augusta Precious Metals** — Primary partner. Affiliate ID: `5129`. Zapier webhook connected.
- **Goldco** — Active affiliate account. Update `AFFILIATE_LINKS.goldco` in `src/config/affiliates.ts` with real affiliate URL (currently placeholder).

### Email Provider: Resend
- **Provider:** [Resend](https://resend.com) (NOT ConvertKit/Mailchimp)
- **Why Resend:** Developer-first, great API, cheap at scale, works well with Next.js
- **Env vars needed:**
  - `RESEND_API_KEY` — from Resend dashboard → API Keys
  - `RESEND_FROM_EMAIL` — the verified sender (e.g. `hello@richdadretirement.com` or a subdomain like `mail.richdadretirement.com`)
- **DNS setup:** Resend requires domain verification (SPF/DKIM records). Remy needs to add these to the domain DNS.
- **Package:** `npm install resend`

### Database: Supabase
Already integrated. Current env vars in production (Vercel):
- `NEXT_PUBLIC_SUPABASE_URL` — the Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — public anon key (read-only)
- `SUPABASE_SERVICE_ROLE_KEY` — service role key (full access, used server-side)

**For Claude Code to add new columns to the `leads` table, we need:**
- Access to run SQL on the Supabase dashboard, OR
- The `SUPABASE_SERVICE_ROLE_KEY` to run migrations via the API

**New columns needed on `leads` table:**
```sql
ALTER TABLE leads ADD COLUMN IF NOT EXISTS savings_tier TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS concern TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS qualification_tier TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS routed_to TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS email_sequence TEXT;
```

**Remy:** Run this SQL in your Supabase dashboard (SQL Editor), or share the service role key so Claude Code can run it via API. The service role key is already in your Vercel env vars — Claude Code can read it from `.env.local` if you create that file locally.

### Notifications: Telegram
Already working. Bot token + chat ID in env vars.

### Analytics: Google
- GA4 + Google Ads conversion tracking already configured
- Google Ads conversion pixel: `AW-17807049464/b4n5CImJ3O4bEPiFiKtC`

### Hosting: Vercel
Auto-deploys from `main` branch on GitHub (`hpol369/gold-ira-platform`)

---

## PART 1: THE REVENUE MATH

### What $50k/mo Actually Requires

**Augusta Commission Structure (verified from affiliate portal + industry sources):**
- $200-$500 per qualified lead submitted
- Up to 12% commission on premium products (coins), lower on bullion
- Lifetime commission on repeat purchases
- Average Gold IRA customer invests $50k-$200k
- Augusta's lead-to-sale conversion: reportedly 30-60%

**Revenue per converted customer (conservative estimates):**
| Deal Size | Commission (est. 6% blended) | Per-lead payout | Total per conversion |
|-----------|------------------------------|-----------------|---------------------|
| $50,000 | $3,000 | $200 | $3,200 |
| $100,000 | $6,000 | $200 | $6,200 |
| $200,000 | $12,000 | $200 | $12,200 |

**Paths to $50k/mo:**

| Scenario | Avg Revenue/Conversion | Conversions Needed/Mo | Qualified Leads Needed (40% close) | Monthly Visitors Needed (2% lead rate) |
|----------|----------------------|----------------------|-----------------------------------|---------------------------------------|
| Conservative | $3,200 | 16 | 40 | 2,000 |
| Moderate | $5,000 | 10 | 25 | 1,250 |
| Aggressive | $8,000 | 7 | 18 | 900 |

**Add secondary partners (Noble, Goldco, American Hartford, iTrustCapital):**
- These handle the sub-$50k traffic that Augusta won't take
- Lower commission per deal ($500-$2,000) but higher volume
- Estimated additional $5-10k/mo from non-Augusta traffic

**Realistic target: 25-40 qualified Augusta leads/month + 50+ secondary partner leads/month = $50k+/mo**

### What We Need to Get There

1. **2,000-5,000 monthly visitors with retirement savings intent** (not students, not crypto bros)
2. **2-5% of visitors enter our funnel** (industry benchmark for financial services)
3. **50-70% of funnel entrants complete qualification** (savings question + contact)
4. **Route $50k+ leads to Augusta, sub-$50k to secondary partners**
5. **Email nurture for the 80% who aren't ready today**

---

## PART 2: THE FUNNEL — THREE-LAYER SYSTEM

### Layer 1: The Qualification Micro-Funnel (On-Site)

This is NOT the old 840-line broken modal. This is a clean, fast, proven pattern used by every successful financial services lead gen site.

**The concept: "Guided Kit Request"**

Instead of a raw redirect to Augusta, we create a 2-step guided experience that feels helpful, not salesy:

```
┌──────────────────────────────────────────┐
│                                          │
│   🏅 Get Your Personalized              │
│      Gold IRA Kit                        │
│                                          │
│   Answer 2 quick questions so we can     │
│   match you with the right company       │
│   and kit for your situation.            │
│                                          │
│   Q1: How much do you have in            │
│       retirement savings (IRA/401k)?     │
│                                          │
│   [ Under $25k    ] [ $25k–$50k  ]      │
│   [ $50k–$100k    ] [ $100k–$250k]      │
│   [ $250k–$500k   ] [ $500k+     ]      │
│                                          │
│   Q2: What concerns you most?            │
│                                          │
│   [ Inflation     ] [ Market crash]      │
│   [ Outliving $   ] [ Legacy      ]      │
│                                          │
│   ─────────────────────────────────      │
│                                          │
│   Based on your answers:                 │
│   "You qualify for Augusta's Private     │
│    Client Program ($50k min)"            │
│                                          │
│   [First Name] [Email] [Phone]           │
│                                          │
│   [ Get Your Free Kit → ]                │
│                                          │
│   🔒 SSL | No spam | A+ BBB Partners    │
│                                          │
└──────────────────────────────────────────┘
```

**Why this is NOT more friction — it's BETTER conversion:**

1. **Personalization increases conversion.** "We'll match you with the right company" feels like a service, not a form. Augusta's own LP is a generic form. Our guided experience is better.

2. **The savings question is a micro-commitment.** Behavioral psychology: once someone answers one question, they're 60-70% more likely to complete the next steps. This is the "foot in the door" technique.

3. **We show them a personalized result.** "$100k-$250k? You qualify for Augusta's Private Client Program with their Harvard economist." This is more compelling than "Download the Free Guide."

4. **Sub-$50k visitors get something too.** Instead of landing on Augusta's page and getting rejected (or wasting Augusta's time), they see: "Great news — Noble Gold has options starting at $2,000. [Get Your Kit →]". We monetize ALL traffic.

5. **We own the data.** Every lead is in Supabase. We can email them. We can retarget them. We can follow up in 30 days. We can sell the same lead to multiple partners where terms allow.

**Implementation: It's a page, not a modal.**

The old approach was a modal overlay. Modals feel interruptive. Instead, we create a dedicated funnel page at `/get-started` that IS the guided kit request. All CTAs across the site link to `/get-started?ref=homepage-hero` (or whatever the source is).

The page is a single scrolling experience:
- Hero with "Get Your Personalized Gold IRA Kit"
- The 2 qualification questions (savings + concern)
- Personalized result based on answers
- Contact form (adapted per tier)
- Trust signals throughout
- No navigation, no distractions — pure conversion page

For users who land on Augusta-specific content (Augusta review, FeaturedPartner section), they still go directly to Augusta's LP. The `/get-started` funnel is for the general CTAs ("Get Free Gold Kit," "Protect Your Retirement," etc.).

**Routing table:**

| Savings Tier | What They See | Where Lead Goes | What They're Redirected To |
|-------------|--------------|-----------------|---------------------------|
| $250k+ | "You qualify for Augusta's White Glove program" | Supabase + Augusta via Zapier | Augusta LP |
| $100k-$250k | "You qualify for Augusta's Private Client program" | Supabase + Augusta via Zapier | Augusta LP |
| $50k-$100k | "You qualify for Augusta — or compare with Goldco" | Supabase + Augusta via Zapier | Augusta LP |
| $25k-$50k | "Great options: Goldco ($25k min) or American Hartford ($10k min)" | Supabase only (NOT Augusta) | Goldco or AHG affiliate page |
| Under $25k | "Start building with Noble Gold ($2k min)" | Supabase only (NOT Augusta) | Noble Gold affiliate page |
| Crypto interest | "iTrustCapital: 24/7 crypto IRA trading" | Supabase only | iTrustCapital affiliate page |

### Layer 2: Direct Augusta Links (High-Intent Pages)

For pages where the visitor is ALREADY Augusta-intent, we keep the direct redirect. No qualification needed — they've already qualified themselves by being on that page.

**Direct-to-Augusta pages (NO funnel):**
- Augusta review page → Augusta LP
- FeaturedPartner CTA on homepage → Augusta LP
- Augusta-specific guide pages → Augusta LP
- "Get Free Kit" buttons in Augusta sidebar CTAs → Augusta LP
- ComparisonTable → Augusta "Get Free Kit" (other companies get their own links)

**These use the existing `openModal()` redirect**, but routed through `/api/track-click` for analytics.

### Layer 3: Email Nurture System

**The 80% problem:** 80% of your qualified visitors aren't ready to open a Gold IRA today. They're researching. They'll come back in 2-6 weeks. If you don't capture their email, you lose them forever.

**Email provider:** Resend (developer-first transactional + marketing email, integrates natively with Next.js)

**Sequences:**

**Sequence A — "The Gold IRA Primer" (for $50k+ who didn't call yet)**
- Day 0: Welcome + "Here's your free guide" (PDF attachment)
- Day 2: "3 things your financial advisor won't tell you about gold"
- Day 5: "How $100k in a 401k becomes $215k in a Gold IRA (real math)"
- Day 8: "Augusta vs Goldco vs Noble Gold — our honest comparison"
- Day 12: "The 2026 IRA contribution deadline is approaching"
- Day 15: "Still on the fence? Here's what Robert Kiyosaki says"
- Day 20: "[Name], your free consultation is still available"

Every email has a CTA to Augusta. This is where the REAL conversions happen — the drip builds trust over weeks.

**Sequence B — "The Starter Path" (for sub-$50k)**
- Day 0: Welcome + starter guide
- Day 3: "You don't need $50k to start — here's how"
- Day 7: "Noble Gold: start with just $2,000"
- Day 14: "How to grow your IRA balance faster"

**Sequence C — "Weekly Market Digest" (for newsletter subscribers)**
- Weekly: Gold/silver prices, Fed news, retirement tips
- Each issue soft-sells Augusta with a "Protect Your Savings" CTA
- This is your long-term nurture — some people need 6 months

---

## PART 3: TRAFFIC STRATEGY — WHERE THE 2,000-5,000 VISITORS COME FROM

### Channel 1: Organic Search (SEO) — 60% of target traffic

**Current state:** 1,000+ pages indexed. Unknown traffic volume (need GA4 data).

**High-intent money keywords to own:**
- "best gold IRA companies" (12,000 searches/mo, high competition)
- "gold IRA rollover" (5,400/mo)
- "is a gold IRA a good investment" (3,600/mo)
- "gold IRA fees" (2,900/mo)
- "401k to gold IRA rollover" (2,400/mo)
- "Augusta precious metals review" (1,900/mo)
- "is $500k enough to retire" (4,400/mo)
- "how to protect retirement from inflation" (1,600/mo)

**The SEO work we already planned (Tiers 2-4) still applies.** Answer-first content, schema markup, FAQ sections, internal linking, content expansion. This drives the organic traffic.

### Channel 2: GEO (AI Search) — 20% of target traffic (growing)

When someone asks ChatGPT "what's the best Gold IRA company?" or Perplexity "how do I roll over my 401k to gold?" — we need to be the cited source. This is the schema markup + answer-first + citation work from Tier 2.

### Channel 3: Email List — 10% of target traffic (compounds)

Once we have 1,000+ emails (achievable in 2-3 months), each weekly digest drives 100-200 clicks back to the site. These are warm visitors who already trust us.

### Channel 4: Paid (Google Ads) — 10% of target traffic (when ready)

Not yet. Build the funnel first, prove it converts organically, then add paid traffic. The Google Ads strategy doc already exists in `.ralph/GOOGLE_ADS_STRATEGY.md`.

---

## PART 4: ANALYTICS — WHAT TO MEASURE

### Lead Quality Dashboard

Build a simple dashboard (or use Supabase + Telegram) showing:

| Metric | Target |
|--------|--------|
| Monthly funnel visitors (/get-started) | 500+ |
| Qualification completion rate | 50-70% |
| $50k+ qualified leads/month | 25-40 |
| Augusta submissions/month | 25-40 |
| Augusta conversions/month (from postback) | 10-16 |
| Secondary partner leads/month | 50+ |
| Email list size | Growing 200+/mo |
| Revenue/month | $50k+ |

### Source Attribution

Track which pages drive qualified leads:
- Homepage hero → /get-started
- Learn articles → /get-started
- Calculator results → /get-started
- News articles → /get-started
- Direct Augusta links (review pages, FeaturedPartner)

This tells us which content to double down on.

---

## PART 5: IMPLEMENTATION ROADMAP

### Sprint 1 (This Week): Foundation
1. **Build `/get-started` qualification funnel page** — The 2-question guided kit request
2. **Update LeadModalContext** — General CTAs route to `/get-started`, Augusta-specific CTAs route directly to Augusta LP
3. **Update API** — Accept savings_tier, concern, qualification_tier fields
4. **Supabase schema** — Add qualification columns
5. **Telegram notifications** — Show tier + savings + source prominently

### Sprint 2 (Next Week): Conversion Optimization
6. **Mobile sticky bar** → links to `/get-started` (not directly to Augusta)
7. **Sidebar CTAs for 381 learn articles** — link to `/get-started?ref=learn-[slug]`
8. **In-content CTAs** — mid-article CTA linking to `/get-started`
9. **Exit intent** → captures email, enters nurture sequence
10. **ComparisonTable** — per-company links (Augusta direct, others to their affiliates)

### Sprint 3 (Week 3): Email + Analytics
11. **Connect Resend** for transactional + nurture emails
12. **Build email sequences A, B, C**
13. **Build lead quality dashboard** in admin
14. **Set up Augusta postback** tracking for conversion attribution
15. **A/B test** funnel page copy (savings question first vs concern first)

### Sprint 4 (Week 4): GEO + Content
16. **Answer-first content pass** on top 20 pages
17. **Schema markup** expansion (FAQ, Article, Review, HowTo)
18. **Blue Ocean pages** (6 low-competition pages)
19. **"Is $X Enough to Retire?" content hub**

### Sprint 5-8: Scale
20. **Internal linking architecture** overhaul
21. **Content expansion** (federal employee, government pension, WEP/GPO)
22. **Quiz overhaul** — connect to funnel page with pre-filled data
23. **Google Ads** — when organic proves the funnel converts

---

## PART 6: THE TWO-PATH CTA SYSTEM

Every page on the site will have one of two CTA types:

### Path A: General CTA → `/get-started` (Qualification Funnel)
Used on: Homepage (most buttons), learn articles, guides, calculators, news articles, resource pages, tool pages, local/state pages, quiz results (general)

**CTA copy examples:**
- "Get Your Free Gold IRA Kit"
- "Find Your Best Option"
- "See Which Company Is Right for You"
- "Protect Your Retirement — Free Kit"

### Path B: Direct Affiliate → Partner LP
Used on: Augusta review → Augusta LP, Noble Gold review → Noble Gold, Goldco review → Goldco, FeaturedPartner homepage section → Augusta, ComparisonTable per-company buttons → each company's LP

**CTA copy examples:**
- "Get Free Kit" (Augusta)
- "Visit Noble Gold"
- "Visit Goldco"
- "Start Crypto IRA" (iTrustCapital)

### How to decide which path:
- **Is the visitor already on a specific company's content?** → Path B (direct link)
- **Is the visitor on general educational/research content?** → Path A (funnel)
- **Is the CTA in a comparison table?** → Path B per company
- **Is the CTA in the navbar?** → Path A (general intent)
- **Is the CTA on mobile sticky bar?** → Path A

---

## PART 7: THE /get-started PAGE SPEC

### URL: `/get-started`
### Query params: `?ref=[source-page]&tier=[savings-tier]&product=[gold|silver|crypto]`

### Design:
- Full-screen, no navigation (conversion page)
- Rich Dad Retirement branding
- Dark navy header with trust signals
- White content area with the guided questions
- Mobile-optimized (large tap targets)

### Sections:
1. **Hero:** "Get Your Personalized Gold IRA Kit" + "Answer 2 quick questions so we can match you with the best company for YOUR situation"
2. **Question 1:** Savings range (6 buttons)
3. **Question 2:** Primary concern (4 buttons)
4. **Personalized Result:** Dynamic based on Q1 + Q2 answers
5. **Contact Form:** Adaptive per tier (phone for $50k+, email-only for <$25k)
6. **Submit → Route:** To the right partner
7. **Trust Footer:** BBB, SSL, "10,000+ Americans educated", testimonial quote

### Technical:
- Client-side state management (useState, no server round-trips until submit)
- Framer Motion transitions between questions
- Submit → POST /api/submit-lead with all qualification data
- Redirect to appropriate partner LP after submission
- Google Ads conversion pixel fires on $50k+ submissions
- Source tracking via `ref` URL parameter

---

## WHY THIS BEATS THE CURRENT APPROACH

| Metric | Current (raw redirect) | New (qualification funnel) |
|--------|----------------------|---------------------------|
| Data captured | Zero | Savings, concern, name, email, phone |
| Lead ownership | Augusta owns the lead | WE own the lead, share with Augusta |
| Sub-$50k monetization | $0 | Revenue from Noble, Goldco, AHG |
| Email list | 0 subscribers | Growing 200+/mo |
| Retargeting ability | None | Full email retargeting |
| Analytics | "Someone clicked" | Full attribution by source, tier, concern |
| Augusta relationship | Sending junk | Sending only $50k+ qualified leads |
| Monthly revenue potential | ~$0 | $50k+ at scale |

---

---

## PART 8: INSTRUCTIONS FOR CLAUDE CODE

This blueprint is the business strategy. Claude Code's job is to analyze the current codebase against this blueprint and create an execution plan.

### What Claude Code Should Do

1. **Read this entire blueprint** to understand the business goals
2. **Audit the current codebase** against the requirements — what exists, what's missing, what needs changing
3. **Create a phased execution plan** in `.ralph/` following Ralph's Method (plan → types → components → sequential)
4. **Start with Sprint 1** — the `/get-started` qualification funnel page

### Key Files to Analyze
- `src/context/LeadModalContext.tsx` — Currently hardcoded redirect. Needs smart routing (two-path system)
- `src/config/affiliates.ts` — Has 9 Augusta LP variants + partner links. All unused. Wire them up.
- `src/app/api/submit-lead/route.ts` — Needs to accept savings_tier, concern, qualification_tier, routed_to
- `src/lib/supabase.ts` — Lead type needs new columns
- `src/lib/lead-notification.ts` — Telegram notifications need tier-aware formatting
- `src/lib/augusta.ts` — Zapier webhook submission (only for $50k+ qualified leads)
- `src/components/lp/LeadCaptureModal.tsx` — 840 lines of dead code. Can be gutted or repurposed.
- `src/lib/email-service.ts` — Currently a stub (ConsoleEmailService). Replace with Resend integration.
- `src/app/get-started/page.tsx` — The new funnel page (may already exist, check and rebuild)
- `src/components/cta/AugustaCTA.tsx` — Used across 381+ learn articles, needs linkContext awareness
- `src/components/home/ComparisonTable.tsx` — Needs per-company affiliate links
- `src/data/quiz-routing.ts` — Already has routing logic, needs to connect to affiliate links

### Environment Variables Needed
Add to `.env.local` for development and to Vercel for production:
```
# Resend (email)
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=hello@richdadretirement.com

# Already exists:
NEXT_PUBLIC_SUPABASE_URL=xxxxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxx
AUGUSTA_WEBHOOK_URL=xxxxx
AUGUSTA_AFFILIATE_ID=5129
TELEGRAM_BOT_TOKEN=xxxxx
TELEGRAM_CHAT_ID=xxxxx
```

### Packages to Install
```bash
npm install resend
```

### Database Migration
Run in Supabase SQL Editor:
```sql
ALTER TABLE leads ADD COLUMN IF NOT EXISTS savings_tier TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS concern TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS qualification_tier TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS routed_to TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS email_sequence TEXT;
```

### Priority Order for Claude Code
1. Build `/get-started` funnel page (the revenue engine)
2. Update LeadModalContext with two-path routing
3. Update submit-lead API with qualification fields
4. Wire Resend for confirmation + nurture emails
5. Update AugustaCTA component with linkContext
6. Update ComparisonTable with per-company links
7. Connect quiz results to affiliate routing
8. Build lead quality dashboard in admin

### Quality Standards
- TypeScript strict, zero `any`
- Mobile-first (60%+ of traffic is mobile)
- Follow existing design system (dark navy + amber accents for conversion elements)
- Every CTA click tracked via `/api/track-click` for Telegram + analytics
- Framer Motion transitions on the funnel page
- Test with `npm run build` before pushing

---

This is the complete system. Not a code change — a business engine.
