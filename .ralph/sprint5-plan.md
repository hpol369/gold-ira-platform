# Sprint 5 — Quality Fixes + Internal Linking + Static Page CTAs

**Date:** 2026-03-20
**Architect:** Cowork | **Dev Lead:** Claude Code
**Scope:** Fix critical/high issues from Sprint 1-4 audit, add internal linking system, add CTAs to 37 static learn pages

---

## CONTEXT: Sprint 1-4 Quality Audit Results

A full code audit found **28 issues** across Sprints 1-4. This sprint fixes the critical and high items first, then moves to the two highest-ROI feature additions (internal linking + static page CTAs).

---

## PART A: CRITICAL & HIGH FIXES (Do These First)

### FIX-001: Email Queue Has No Scheduler (CRITICAL)
**Problem:** `email-queue.ts` has a `processEmailQueue()` function that reads queued emails from Supabase and sends via Resend. But NOTHING calls it. Emails are queued but never sent. The entire nurture system is dead.

**Solution:** Create a Vercel Cron job that runs every 15 minutes to process the queue.

**Files:**
- CREATE: `src/app/api/cron/process-emails/route.ts`
  ```typescript
  import { NextResponse } from "next/server";
  import { processEmailQueue } from "@/lib/email-queue";

  // Vercel Cron: runs every 15 minutes
  export const dynamic = "force-dynamic";

  export async function GET(request: Request) {
    // Verify cron secret to prevent unauthorized access
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      const result = await processEmailQueue();
      return NextResponse.json({ success: true, processed: result });
    } catch (error) {
      console.error("[CRON] Email queue processing failed:", error);
      return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
  }
  ```
- CREATE or EDIT: `vercel.json`
  ```json
  {
    "crons": [
      {
        "path": "/api/cron/process-emails",
        "schedule": "*/15 * * * *"
      }
    ]
  }
  ```
- ADD env var: `CRON_SECRET` — random string for auth. Add to Vercel env vars.

**Note:** Vercel Cron is available on Pro plan ($20/mo). If on Hobby plan, use an alternative: GitHub Actions cron that hits the endpoint, or use Supabase Edge Functions with pg_cron.

---

### FIX-002: 37 Static Learn Pages Missing CTAs (HIGH)
**Problem:** 37 static learn pages in `src/app/learn/*/page.tsx` have zero conversion elements. The dynamic `[slug]/page.tsx` has both `SidebarAuditWidget` and `InContentCTA` — but static pages were built before these components existed and never updated.

**37 pages missing CTAs:**
```
are-gold-iras-safe, bitcoin-ira, buy-rental-property-with-ira,
checkbook-ira-rules, checkbook-ira, gold-bullion-vs-gold-coins,
gold-ira-benefits, gold-ira-scams, gold-ira-tax-rules,
gold-price-prediction-2026, home-storage-gold-ira,
how-much-gold-in-portfolio, indirect-vs-direct-rollover,
ira-approved-gold-coins, is-401k-fdic-insured,
is-my-money-safe-in-bank, is-silver-a-good-investment,
platinum-ira, precious-metals-ira-rules, real-estate-ira-custodians,
real-estate-ira-rules, recession-proof-investments,
retirement-planning-mistakes, robs-401k-rules,
safe-haven-investments, self-directed-ira-gold,
self-directed-roth-ira, sequence-of-returns-risk,
silver-coins-vs-bars, solo-401k-contribution-limits,
solo-401k-providers, solo-401k-vs-sep-ira,
stock-market-alternatives, stock-market-crash-protection,
too-late-to-save-retirement, why-401k-losing-money,
why-is-gold-valuable
```
(Note: `/learn/page.tsx` is the index page — skip it)

**Solution:** Add `SidebarAuditWidget` and `InContentCTA` to each page. Since these are static pages with various layouts, use a systematic approach:

1. Check how the dynamic `[slug]/page.tsx` renders these components
2. For each static page: add `SidebarAuditWidget` in the sidebar (or after first section if no sidebar layout) and `InContentCTA` after the 2nd or 3rd content section
3. Each page should pass a unique `trackSource` matching its slug (e.g., `trackSource="learn-gold-ira-scams"`)

**Approach:** Don't manually edit 37 files. Instead:
- Check if these pages use a shared layout component. If yes, add CTAs to the layout.
- If they're all standalone, create a wrapper component `LearnPageWrapper` that injects the CTAs, and refactor each page to use it.
- Or at minimum, do a systematic find-and-replace pattern.

**Verification:** After changes, `grep -rL "SidebarAuditWidget" src/app/learn/*/page.tsx` should return only `/learn/page.tsx` (the index).

---

### FIX-003: Postback Endpoint Security (HIGH)
**Problem:** `/api/postback/route.ts` accepts POST from anyone. No origin validation.

**Solution:** Add basic security:
- Check for a `secret` query parameter or header that matches `POSTBACK_SECRET` env var
- If Augusta uses HMAC signatures, validate them
- At minimum, log the IP and add rate limiting

**File:** `src/app/api/postback/route.ts`

Add at the top of the POST handler:
```typescript
const secret = new URL(request.url).searchParams.get("secret");
if (secret !== process.env.POSTBACK_SECRET) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
```

Add env var: `POSTBACK_SECRET` — share with Augusta for their postback URL config.

---

### FIX-004: Admin PIN to Env Var (HIGH)
**Problem:** Admin PIN `6903` is hardcoded in client-side code and visible in the repo.

**Solution:** Move to a server-side API check.
- Create `/api/admin/auth` that validates PIN against `ADMIN_PIN` env var
- Admin page calls this API instead of checking client-side
- Add `ADMIN_PIN` env var to Vercel

**Files:**
- CREATE: `src/app/api/admin/auth/route.ts`
- EDIT: `src/app/admin/conversions/page.tsx` — call API instead of client-side check

---

### FIX-005: Keyword Cannibalization (HIGH — SEO)
**Problem:** Multiple pages competing for same keywords (identified in original audit).

**Changes:**
1. `/guide/silver-ira-rules` already redirects to `/silver-ira/rules` — verify content is merged, not duplicated
2. `/guide/silver-ira-rollover` already redirects to `/silver-ira/rollover` — same check
3. `/guide/gold-ira-guide` vs `/learn/self-directed-ira-gold`:
   - `/guide/gold-ira-guide` → Focus title: "How to Open a Gold IRA in 2026: Step-by-Step Guide"
   - `/learn/self-directed-ira-gold` → Focus title: "Self-Directed IRA Gold Investing: Rules, Benefits & How It Works"
   - Ensure meta descriptions + H1s are clearly differentiated
   - Add canonical URLs if needed

**Files:**
- Check `next.config.ts` redirects are working
- EDIT: `/guide/gold-ira-guide/page.tsx` — update title/H1
- EDIT: `/learn/self-directed-ira-gold/page.tsx` — update title/H1

---

## PART B: INTERNAL LINKING SYSTEM

### LINK-001: Create Internal Links Data Structure
**Problem:** 1,000+ pages exist in silos. No systematic internal linking. This hurts SEO because link equity doesn't flow between pages.

**Solution:** Create a hub-and-spoke data file + auto-generated related content blocks.

**File:** CREATE `src/data/internal-links.ts`

```typescript
/**
 * Internal Linking Architecture
 *
 * Hub pages are pillar content that link to all related spoke pages.
 * Spoke pages link back to their hub + cross-link to 2-3 related spokes.
 *
 * This data drives the RelatedContent component rendered on every page.
 */

export interface InternalLink {
  url: string;
  title: string;
  description?: string;
}

export interface HubConfig {
  hub: InternalLink;
  spokes: InternalLink[];
}

export const LINK_HUBS: Record<string, HubConfig> = {
  "gold-ira": {
    hub: { url: "/what-is-a-gold-ira", title: "What Is a Gold IRA?" },
    spokes: [
      { url: "/gold-ira-rules", title: "Gold IRA Rules & Regulations" },
      { url: "/learn/gold-ira-tax-rules", title: "Gold IRA Tax Rules" },
      { url: "/learn/gold-ira-benefits", title: "Gold IRA Benefits" },
      { url: "/learn/gold-ira-scams", title: "Gold IRA Scams to Avoid" },
      { url: "/learn/home-storage-gold-ira", title: "Home Storage Gold IRA" },
      { url: "/learn/ira-approved-gold-coins", title: "IRA-Approved Gold Coins" },
      { url: "/learn/gold-bullion-vs-gold-coins", title: "Gold Bullion vs Gold Coins" },
      { url: "/guide/gold-ira-guide", title: "How to Open a Gold IRA" },
      { url: "/learn/how-much-gold-in-portfolio", title: "How Much Gold in Your Portfolio" },
      { url: "/learn/gold-price-prediction-2026", title: "Gold Price Prediction 2026" },
    ],
  },
  "reviews": {
    hub: { url: "/best-gold-ira-companies", title: "Best Gold IRA Companies" },
    spokes: [
      { url: "/reviews/augusta-precious-metals", title: "Augusta Precious Metals Review" },
      { url: "/reviews/goldco", title: "Goldco Review" },
      { url: "/reviews/noble-gold", title: "Noble Gold Review" },
      { url: "/reviews/american-hartford-gold", title: "American Hartford Gold Review" },
      { url: "/reviews/birch-gold", title: "Birch Gold Review" },
      { url: "/compare", title: "Compare Gold IRA Companies" },
    ],
  },
  "rollover": {
    hub: { url: "/rollover", title: "Gold IRA Rollover Guide" },
    spokes: [
      { url: "/guide/gold-ira-rollover-guide", title: "How to Rollover to Gold IRA" },
      { url: "/learn/indirect-vs-direct-rollover", title: "Indirect vs Direct Rollover" },
      { url: "/rollover/401k", title: "401k to Gold IRA Rollover" },
      { url: "/rollover/tsp", title: "TSP to Gold IRA Rollover" },
      { url: "/rollover/roth-ira", title: "Roth IRA Gold Rollover" },
    ],
  },
  "silver": {
    hub: { url: "/silver-ira", title: "Silver IRA Guide" },
    spokes: [
      { url: "/best-silver-ira-companies", title: "Best Silver IRA Companies" },
      { url: "/silver-price", title: "Silver Price Predictions" },
      { url: "/silver-products", title: "Silver Products Guide" },
      { url: "/learn/is-silver-a-good-investment", title: "Is Silver a Good Investment?" },
      { url: "/learn/silver-coins-vs-bars", title: "Silver Coins vs Bars" },
      { url: "/silver-retirement", title: "Silver Retirement Planning" },
    ],
  },
  "retirement-protection": {
    hub: { url: "/why-gold", title: "Why Gold for Retirement" },
    spokes: [
      { url: "/learn/recession-proof-investments", title: "Recession-Proof Investments" },
      { url: "/learn/safe-haven-investments", title: "Safe Haven Investments" },
      { url: "/learn/stock-market-crash-protection", title: "Stock Market Crash Protection" },
      { url: "/learn/stock-market-alternatives", title: "Stock Market Alternatives" },
      { url: "/learn/why-401k-losing-money", title: "Why Is My 401k Losing Money?" },
      { url: "/learn/is-my-money-safe-in-bank", title: "Is My Money Safe in the Bank?" },
      { url: "/learn/is-401k-fdic-insured", title: "Is 401k FDIC Insured?" },
      { url: "/learn/sequence-of-returns-risk", title: "Sequence of Returns Risk" },
      { url: "/scenarios", title: "Economic Crisis Scenarios" },
    ],
  },
  "self-directed": {
    hub: { url: "/self-directed-ira", title: "Self-Directed IRA Guide" },
    spokes: [
      { url: "/learn/self-directed-ira-gold", title: "Self-Directed IRA Gold" },
      { url: "/learn/self-directed-roth-ira", title: "Self-Directed Roth IRA" },
      { url: "/learn/checkbook-ira", title: "Checkbook IRA" },
      { url: "/learn/checkbook-ira-rules", title: "Checkbook IRA Rules" },
      { url: "/learn/buy-rental-property-with-ira", title: "Buy Rental Property with IRA" },
      { url: "/learn/real-estate-ira-rules", title: "Real Estate IRA Rules" },
      { url: "/learn/real-estate-ira-custodians", title: "Real Estate IRA Custodians" },
    ],
  },
  "solo-401k": {
    hub: { url: "/solo-401k", title: "Solo 401k Guide" },
    spokes: [
      { url: "/learn/solo-401k-contribution-limits", title: "Solo 401k Contribution Limits" },
      { url: "/learn/solo-401k-providers", title: "Solo 401k Providers" },
      { url: "/learn/solo-401k-vs-sep-ira", title: "Solo 401k vs SEP IRA" },
      { url: "/learn/robs-401k-rules", title: "ROBS 401k Rules" },
    ],
  },
  "crypto": {
    hub: { url: "/crypto-ira", title: "Crypto IRA Guide" },
    spokes: [
      { url: "/best-crypto-ira-companies", title: "Best Crypto IRA Companies" },
      { url: "/learn/bitcoin-ira", title: "Bitcoin IRA" },
    ],
  },
  "tools": {
    hub: { url: "/tools", title: "Retirement Calculators" },
    spokes: [
      { url: "/tools/retirement-calculator", title: "Retirement Calculator" },
      { url: "/tools/rmd-calculator", title: "RMD Calculator" },
      { url: "/tools/gold-ira-calculator", title: "Gold IRA Calculator" },
      { url: "/tools/gold-allocation-calculator", title: "Gold Allocation Calculator" },
      { url: "/tools/social-security-calculator", title: "Social Security Calculator" },
      { url: "/tools/fire-calculator", title: "FIRE Calculator" },
    ],
  },
};

/**
 * Get related links for a given page URL.
 * Returns: hub link + 3-5 most relevant spoke links (excluding self).
 */
export function getRelatedLinks(currentUrl: string, maxLinks: number = 5): InternalLink[] {
  const related: InternalLink[] = [];

  for (const hubConfig of Object.values(LINK_HUBS)) {
    const isHub = hubConfig.hub.url === currentUrl;
    const isSpoke = hubConfig.spokes.some(s => s.url === currentUrl);

    if (isHub) {
      // Hub page: show top spokes
      related.push(...hubConfig.spokes.slice(0, maxLinks));
      break;
    }

    if (isSpoke) {
      // Spoke page: show hub + other spokes (excluding self)
      related.push(hubConfig.hub);
      related.push(
        ...hubConfig.spokes
          .filter(s => s.url !== currentUrl)
          .slice(0, maxLinks - 1)
      );
      break;
    }
  }

  return related.slice(0, maxLinks);
}
```

---

### LINK-002: Create RelatedContent Component
**File:** CREATE `src/components/content/RelatedContent.tsx`

Renders a "Related Articles" section at the bottom of every page, driven by the internal links data.

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedLinks, type InternalLink } from "@/data/internal-links";

interface RelatedContentProps {
  currentUrl: string;
  title?: string;
  maxLinks?: number;
}

export function RelatedContent({ currentUrl, title = "Related Articles", maxLinks = 5 }: RelatedContentProps) {
  const links = getRelatedLinks(currentUrl, maxLinks);

  if (links.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <h2 className="text-xl font-bold text-[#000080] mb-4">{title}</h2>
      <div className="grid gap-3">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <span className="text-slate-700 group-hover:text-[#000080] font-medium">
              {link.title}
            </span>
            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#B22234] group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
}
```

---

### LINK-003: Integrate RelatedContent Across Pages

**Integration targets (in priority order):**
1. `src/app/learn/[slug]/page.tsx` — Add `<RelatedContent currentUrl={"/learn/" + slug} />` before footer CTA
2. All 37 static learn pages — Add `<RelatedContent currentUrl="/learn/[page-slug]" />` (can be done in the same pass as FIX-002 CTA additions)
3. `src/app/guide/*/page.tsx` — All guide pages
4. Hub pages (`/what-is-a-gold-ira`, `/silver-ira`, `/rollover`, etc.)
5. Review pages

**Verification:** Every learn article and guide page should render a "Related Articles" section with 3-5 contextual links.

---

## PART C: MEDIUM FIXES (If Time Permits)

### FIX-006: Missing `.env.example`
**File:** CREATE `.env.example` at project root with all required env vars (no values):
```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Augusta
AUGUSTA_WEBHOOK_URL=
AUGUSTA_AFFILIATE_ID=

# Resend (Email)
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# Telegram
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# Admin
ADMIN_PIN=
POSTBACK_SECRET=
CRON_SECRET=

# Analytics
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=

# AI (News Pipeline)
ANTHROPIC_API_KEY=
```

### FIX-007: Google Ads Conversion ID to Config
Move hardcoded `"AW-17807049464/b4n5CImJ3O4bEPiFiKtC"` from `get-started/page.tsx` and `postback/route.ts` to a central config:
- CREATE: `src/config/google-ads.ts`
- UPDATE: Both files to import from config

### FIX-008: Phone Formatting on Get-Started
Add a phone input formatter in `src/app/get-started/page.tsx` that auto-formats as user types: `(555) 123-4567`. The dynamic learn page's modal already has `formatPhone()` — reuse it.

### FIX-009: FAQSection Component Usage
Replace manual FAQ rendering in `src/app/learn/[slug]/page.tsx` with the `<FAQSection>` component for consistency and proper schema generation. Also add `<FAQSection>` to `is-enough-to-retire/page.tsx`.

### FIX-010: Mobile Grid on Get-Started
Change savings tier buttons from `grid-cols-2` to `grid-cols-1 sm:grid-cols-2` on the get-started page for small phones (375px wide).

---

## EXECUTION ORDER

```
PHASE 1 — Critical Fixes (do first, get to production fast)
  FIX-001: Email queue cron scheduler
  FIX-003: Postback security
  FIX-004: Admin PIN to env var

PHASE 2 — Static Page CTAs + Internal Linking (high ROI)
  FIX-002: Add CTAs to 37 static learn pages
  LINK-001: Create internal-links.ts data structure
  LINK-002: Create RelatedContent component
  LINK-003: Integrate RelatedContent across learn pages

PHASE 3 — SEO Fix
  FIX-005: Keyword cannibalization (3 pages)

PHASE 4 — Medium Fixes (polish)
  FIX-006 through FIX-010
```

---

## VERIFICATION CHECKLIST

- [ ] `npm run build` passes with zero errors
- [ ] Email queue cron: test by inserting a test email in queue, wait 15 min, verify it sends
- [ ] Postback: test with curl — unauthorized requests get 401
- [ ] Admin: PIN from env var works, old hardcoded PIN no longer accepted
- [ ] All 37 static learn pages have SidebarAuditWidget + InContentCTA
- [ ] RelatedContent renders on learn articles with contextual links
- [ ] Related links are hub-and-spoke (spoke links back to hub, hub links to spokes)
- [ ] No broken internal links (all URLs in internal-links.ts are valid routes)
- [ ] Gold IRA guide vs Self-Directed IRA Gold have differentiated titles/H1s
- [ ] Silver IRA redirects still work (test /guide/silver-ira-rules → /silver-ira/rules)

---

## FILES SUMMARY

| File | Action | Phase |
|------|--------|-------|
| `src/app/api/cron/process-emails/route.ts` | CREATE | 1 |
| `vercel.json` | CREATE/EDIT | 1 |
| `src/app/api/postback/route.ts` | EDIT | 1 |
| `src/app/api/admin/auth/route.ts` | CREATE | 1 |
| `src/app/admin/conversions/page.tsx` | EDIT | 1 |
| 37 × `src/app/learn/*/page.tsx` | EDIT | 2 |
| `src/data/internal-links.ts` | CREATE | 2 |
| `src/components/content/RelatedContent.tsx` | CREATE | 2 |
| `src/app/learn/[slug]/page.tsx` | EDIT | 2 |
| `src/app/guide/gold-ira-guide/page.tsx` | EDIT | 3 |
| `src/app/learn/self-directed-ira-gold/page.tsx` | EDIT | 3 |
| `.env.example` | CREATE | 4 |
| `src/config/google-ads.ts` | CREATE | 4 |
| `src/app/get-started/page.tsx` | EDIT | 4 |

---

RALPH_STATUS:
- PHASE: Sprint 5
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Audit done, plan written
- BLOCKERS: Vercel plan must be Pro for cron jobs; alternatively use GitHub Actions cron
