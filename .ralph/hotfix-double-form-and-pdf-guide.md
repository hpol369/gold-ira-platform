# Hotfix: Remove Double Form Redirect + Add Free PDF Guide Delivery

**Date:** 2026-03-20
**Priority:** CRITICAL — directly hurts conversions
**Architect:** Cowork | **Dev Lead:** Claude Code

---

## PART A: FIX THE DOUBLE FORM (Bug 5)

### The Problem
After a user completes the `/get-started` funnel (savings tier → concern → name, email, phone), the code:
1. Saves lead to Supabase ✅
2. Submits to Augusta via Zapier ✅
3. Fires Google Ads conversion ✅
4. Shows "success" state for 2 seconds ✅
5. **Auto-redirects to Augusta's LP** (`learn.augustapreciousmetals.com`) ❌

Augusta's LP shows ANOTHER form asking for First Name, Last Name, Email, Phone — the EXACT same info the user just entered. Users either:
- Fill it again (annoying, damages trust)
- Bounce (lost engagement, confused)
- Think something went wrong

### The Fix

**File:** `src/app/get-started/page.tsx` — lines 213-220

**Remove the auto-redirect for Augusta leads.** Augusta already received the lead via Zapier — they'll call the user directly. There's zero reason to send the user to Augusta's form page.

**Current code (REMOVE):**
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

**New code:**
```typescript
// Route based on partner type
const isAugustaLead = result.affiliateKey?.startsWith("augusta");

if (isAugustaLead) {
  // Augusta leads: Stay on our success screen.
  // Lead already submitted via Zapier — Augusta will call them.
  // We send our own PDF guide via Resend (see email trigger below).
  // No redirect needed.
} else {
  // Non-Augusta partners (Noble Gold, Goldco, etc.): redirect to their site
  // since we don't have a Zapier integration with them
  const affiliateUrl = AFFILIATE_LINKS[result.affiliateKey as keyof typeof AFFILIATE_LINKS];
  if (affiliateUrl) {
    const trackedUrl = getTrackedLink(affiliateUrl, `get-started_${ref}`, result.affiliateKey);
    setTimeout(() => {
      window.location.href = trackedUrl;
    }, 3000);
  }
}
```

### Enhanced Success Screen for Augusta Leads

When an Augusta lead submits, instead of redirecting them away, show a rich success experience:

```tsx
{state.step === "success" && isAugustaResult && (
  <div className="text-center">
    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
      <CheckCircle className="h-10 w-10 text-green-400" />
    </div>

    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
      You're All Set, {state.firstName}!
    </h2>

    <p className="text-white/80 text-lg mb-6">
      A Gold IRA specialist from Augusta Precious Metals will reach out shortly
      for your free, no-pressure consultation.
    </p>

    {/* PDF Guide Delivery Confirmation */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6 text-left">
      <div className="flex items-start gap-3 mb-3">
        <Mail className="h-5 w-5 text-[#C5A55A] mt-0.5" />
        <div>
          <p className="text-white font-semibold">Your Free Gold IRA Guide</p>
          <p className="text-white/60 text-sm">
            We just sent the 2026 Gold IRA Protection Guide to {state.email}.
            Check your inbox (and spam folder).
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3 mb-3">
        <Phone className="h-5 w-5 text-green-400 mt-0.5" />
        <div>
          <p className="text-white font-semibold">What to Expect</p>
          <p className="text-white/60 text-sm">
            A friendly specialist will call to answer your questions.
            It's educational, not a sales pitch. Average call: 15 minutes.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Shield className="h-5 w-5 text-blue-400 mt-0.5" />
        <div>
          <p className="text-white font-semibold">Zero Obligation</p>
          <p className="text-white/60 text-sm">
            100% free. No contracts. Your decision, your timeline.
          </p>
        </div>
      </div>
    </div>

    {/* Continue browsing CTA */}
    <a
      href="/learn"
      className="inline-flex items-center gap-2 text-[#C5A55A] hover:text-[#d4b96a] font-medium transition-colors"
    >
      Explore our Learning Center while you wait
      <ArrowRight className="h-4 w-4" />
    </a>
  </div>
)}
```

---

## PART B: CREATE & SEND FREE PDF GUIDE VIA RESEND

### Strategy

Instead of relying on Augusta's guide (which users may or may not receive), we create and send our OWN comprehensive guide immediately upon form submission. This:

1. **Delivers instant value** — user feels rewarded for filling the form
2. **Positions Rich Dad Retirement as the authority** — not just a middleman
3. **Gives Augusta's sales team a warmer lead** — user is already educated
4. **Provides another email touchpoint** — the guide delivery email is our first nurture touch

### The Guide: "The 2026 Gold IRA Protection Guide"

**Format:** PDF, ~15-20 pages, professional design matching our brand (navy + gold)
**Delivery:** Sent immediately via Resend as an email attachment or hosted PDF link

### Content Outline

**Cover Page:**
Rich Dad Retirement logo, "The 2026 Gold IRA Protection Guide", "For Americans With $50,000+ in Retirement Savings", "Free. No Obligation. Just Facts."

**Page 1-2: Why Gold? (The Case)**
- Dollar has lost 95% of value since 1971
- 2008 crash: stocks -37%, gold +25%
- Central banks bought 1,037 tons in 2023
- Inflation erodes purchasing power every year
- Gold's 5,000-year track record
- Include 1-2 key charts (gold vs S&P 500 over 20 years)

**Page 3-4: What Is a Gold IRA?**
- Same tax advantages as regular IRA
- Holds physical gold/silver instead of paper
- IRS rules: 99.5% purity, approved depository, licensed custodian
- 2026 contribution limits ($7,000 / $8,000 if 50+)
- Types: Traditional Gold IRA, Roth Gold IRA, SEP Gold IRA

**Page 5-6: How It Works (3 Steps)**
- Step 1: Choose a company (10-15 minutes)
- Step 2: Fund via rollover — tax-free, no penalties
- Step 3: Select your metals — stored in insured depository
- Diagram/infographic of the flow

**Page 7-8: How Much Gold Should You Own?**
- 5-15% allocation recommendation
- Age-based allocation table
- Example: $250k portfolio → $25k-$37.5k in gold
- Risk reduction math (sequence of returns)

**Page 9-10: Fees — What Gold IRAs Actually Cost**
- Setup fees: $0-$100
- Annual custodian fees: $50-$100
- Storage fees: $100-$150/year
- Transaction/spread: varies
- Comparison table across top 5 companies
- "Augusta waives fees for up to 10 years" callout

**Page 11-12: Top 5 Gold IRA Companies (2026 Rankings)**
- #1 Augusta Precious Metals — Best Overall
- #2 Noble Gold — Lowest Minimum
- #3 Goldco — Best Service
- #4 American Hartford Gold — Best Price Match
- #5 Birch Gold Group — Most Educational
- Comparison table: min investment, BBB, fees, best for

**Page 13-14: Common Scams to Avoid**
- Home storage schemes (illegal)
- Excessive premiums (15%+ over spot)
- High-pressure sales tactics
- Fake reviews
- Red flags checklist

**Page 15: Your Next Steps**
- "You've already taken the first step by requesting this guide"
- "A specialist from Augusta Precious Metals will reach out shortly"
- "Questions to ask on your call" checklist
- Rich Dad Retirement website URL for more resources

**Back Cover:**
Rich Dad Retirement branding, editorial board, disclaimer, website URL

### Technical Implementation

**1. Create the PDF**
Use the `pdf` skill to generate the PDF from a structured template. Store at `public/guides/gold-ira-protection-guide-2026.pdf`.

**2. Create Resend Email Template**
**File:** Add to `src/lib/email-sequences.ts` or create `src/lib/guide-email.ts`

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendGuideEmail(
  email: string,
  firstName: string,
  savingsTier: string
): Promise<boolean> {
  try {
    const guideUrl = "https://www.richdadretirement.com/guides/gold-ira-protection-guide-2026.pdf";

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "hello@richdadretirement.com",
      to: email,
      subject: `${firstName}, Your 2026 Gold IRA Protection Guide`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #000060; padding: 30px; text-align: center;">
            <h1 style="color: #C5A55A; font-size: 24px; margin: 0;">
              Rich Dad Retirement
            </h1>
          </div>

          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #000080; font-size: 22px;">
              Hi ${firstName},
            </h2>

            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for requesting your free Gold IRA guide.
              Here's everything you need to know about protecting your
              retirement with precious metals.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${guideUrl}"
                 style="background: #C5A55A; color: #000080; font-weight: bold;
                        padding: 15px 30px; border-radius: 8px; text-decoration: none;
                        font-size: 18px; display: inline-block;">
                Download Your Free Guide (PDF)
              </a>
            </div>

            <div style="background: #f8f8f8; border-left: 4px solid #C5A55A;
                        padding: 15px; margin: 20px 0;">
              <p style="color: #333; font-size: 14px; margin: 0;">
                <strong>What happens next:</strong> A specialist from Augusta
                Precious Metals will reach out for a free, no-pressure
                consultation. They'll answer any questions you have about
                Gold IRAs — including the ones you didn't know to ask.
              </p>
            </div>

            <p style="color: #666; font-size: 14px;">
              In the meantime, you can explore our
              <a href="https://www.richdadretirement.com/learn" style="color: #000080;">
                Learning Center
              </a>
              for more retirement protection strategies.
            </p>
          </div>

          <div style="background: #f0f0f0; padding: 20px; text-align: center;
                      font-size: 12px; color: #999;">
            Rich Dad Retirement · richdadretirement.com<br>
            <a href="https://www.richdadretirement.com/privacy-policy"
               style="color: #999;">Privacy Policy</a>
          </div>
        </div>
      `,
    });

    console.log(`[GUIDE] Sent guide email to ${email}`);
    return true;
  } catch (error) {
    console.error("[GUIDE] Failed to send guide email:", error);
    return false;
  }
}
```

**3. Trigger on Lead Submission**
**File:** `src/app/api/submit-lead/route.ts`

After the lead is saved to Supabase and submitted to Augusta, send the guide email:

```typescript
// After Augusta submission (or for all qualified leads)
if (body.email && body.firstName) {
  try {
    await sendGuideEmail(body.email, body.firstName, body.savingsTier || "unknown");
  } catch (err) {
    console.error("[GUIDE EMAIL ERROR]", err);
    // Don't fail the lead submission if email fails
  }
}
```

---

## EXECUTION ORDER

```
PHASE 1: Fix the redirect (immediate)
  1. Remove auto-redirect for Augusta leads in get-started/page.tsx
  2. Build enhanced success screen for Augusta leads
  3. Keep redirect for non-Augusta partners
  4. Test: submit form → stays on success screen → no redirect to Augusta LP

PHASE 2: Create & send PDF guide
  5. Create the PDF guide (use pdf skill or build programmatically)
  6. Place at public/guides/gold-ira-protection-guide-2026.pdf
  7. Create sendGuideEmail() function in src/lib/guide-email.ts
  8. Wire into submit-lead API route
  9. Test: submit form → receive email with PDF link within 30 seconds

PHASE 3: Verification
  10. Augusta leads: NO redirect, stays on enhanced success screen
  11. Success screen shows "guide sent to your email" message
  12. Email arrives with working PDF download link
  13. Non-Augusta leads: still redirect to partner site after 3 seconds
  14. npm run build — zero errors
```

---

## EXPECTED IMPACT

| Metric | Before | After |
|--------|--------|-------|
| Post-form UX | Redirect to duplicate form | Clean success screen + instant guide delivery |
| User trust | Confusion ("I already filled this?") | Delight ("I got a guide instantly!") |
| Email engagement | No immediate follow-up | Guide email within 30 seconds |
| Augusta call readiness | Cold lead | Warm lead (already read our guide) |
| User retention on site | Lost to Augusta's LP | Stays on our success screen + Learning Center link |

---

RALPH_STATUS:
- PHASE: Hotfix + PDF Guide
- TASK: Plan complete — ready for Claude Code
- PROGRESS: Brief written
- BLOCKERS: PDF guide content needs to be created (Claude Code can use pdf skill or generate programmatically)
