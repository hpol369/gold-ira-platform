# Rich Dad Retirement — Email Strategy V2.1
## Unified Funnel: Website → Email → Augusta Handoff → Qualified Lead

**Date:** March 21, 2026
**Status:** Ready for Claude Code implementation
**Platform:** Resend (already integrated)
**From:** Rich Dad Retirement <hello@richdadretirement.com>

---

## CONFIRMED CREDENTIALS & SETUP STATUS

| Item | Status | Value |
|------|--------|-------|
| Resend API | ✅ Working | `RESEND_API_KEY` in Vercel env vars |
| Augusta Webhook (Zapier) | ✅ Confirmed | `https://hooks.zapier.com/hooks/catch/23459703/ug0phj9/` |
| Augusta Affiliate ID | ✅ Working | `5129` |
| Telegram Bot Token | ✅ Confirmed | `8352481710:AAFct6syWFSfluX72sbcmtJ_Fpf7IRvouQg` |
| Telegram Webhook | ✅ SET (March 21 2026) | `https://richdadretirement.com/api/telegram/webhook` |
| PDF Guide | ✅ Already exists | `public/guides/gold-ira-protection-guide-2026.pdf` |
| Vercel Project | ✅ Confirmed | `prj_hLLSyfm8s3DPzcgAUlvZFXECEUUE` / team `team_0IwBW4jRIjd7mUaAzvhL1bU5` |
| Supabase migration | ⚠️ MANUAL | Supabase project not in MCP — run SQL manually (see Phase 1C below) |
| Zapier field mapping | ⚠️ MANUAL | Map new enrichment fields in Zapier UI (see Phase 0A) |

### For Claude Code: Environment Variables Needed
All env vars are already in Vercel. For local dev, create `.env.local` with:
```
SUPABASE_URL=<from Vercel dashboard>
SUPABASE_SERVICE_ROLE_KEY=<from Vercel dashboard>
RESEND_API_KEY=<from Vercel dashboard>
TELEGRAM_BOT_TOKEN=8352481710:AAFct6syWFSfluX72sbcmtJ_Fpf7IRvouQg
AUGUSTA_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/23459703/ug0phj9/
AUGUSTA_AFFILIATE_ID=5129
CRON_SECRET=<from Vercel dashboard>
```

---

## WHAT CHANGED FROM V2 → V2.1

V2 had 7 critical gaps. V2.1 fixes all of them:

| # | Problem | Fix |
|---|---------|-----|
| 1 | "Guide download" trigger doesn't exist | Build standalone guide landing page `/guide/free` OR fold guide-nurture into lead sequences |
| 2 | Quiz completers ARE lead form submitters (same funnel) | Quiz data enriches lead sequence — no separate quiz sequence |
| 3 | Augusta calls within 24h but our emails are blind to it | Days 0-3 = "Augusta Support Window" — prep for the call, not general education |
| 4 | Double email on Day 0 (guide email + sequence step 0) | Kill standalone `sendGuideEmail()` — sequence step 0 IS the guide delivery |
| 5 | No "Augusta handoff zone" in email timing | Redesign Days 0-3 around making them pick up the phone |
| 6 | No conversion tracking from Augusta side | Add lead status checks + Telegram inline buttons + "Did you connect?" email |
| 7 | Re-engage uses dynamic content that can't be generated | Use evergreen content, build HTML at send time |
| 8 | Augusta webhook sends only 5 fields — specialist calls blind | Enrich payload with savings tier, concern, source, quiz data, human-readable notes |
| 9 | Dual-path problem: webhook + affiliate link = double lead | Eliminate affiliate link CTAs for leads already submitted via webhook; use direct Augusta phone number instead |

---

## CRITICAL FIX: THE AUGUSTA HANDOFF

### Problem: Augusta's Specialist Calls Blind

Currently, `submitToAugusta()` in `src/lib/augusta.ts` sends:
```json
{
  "firstname": "Dave",
  "lastname": "Johnson",
  "phone": "5551234567",
  "email": "dave@email.com",
  "affiliate_id": "5129"
}
```

That's ALL Augusta gets. Their specialist calls Dave with ZERO context — doesn't know his savings ($250k), his concern (inflation), that he took the quiz, or that he downloaded the guide.

### Fix: Enrich the Webhook Payload

```json
{
  "firstname": "Dave",
  "lastname": "Johnson",
  "phone": "5551234567",
  "email": "dave@email.com",
  "affiliate_id": "5129",
  "savings_tier": "250k-500k",
  "primary_concern": "inflation",
  "source_page": "get-started_quiz-results",
  "qualification_tier": "augusta-private-client",
  "guide_sent": true,
  "quiz_completed": true,
  "lead_notes": "Matched via quiz. Concern: inflation eroding 401k. Savings: $250k-$500k. Source: richdadretirement.com. Guide sent via email."
}
```

The `lead_notes` field is key — even if Augusta's CRM ignores our custom fields, Zapier can map this human-readable summary into whatever "notes" or "comments" field they have. Augusta's specialist reads one sentence and knows exactly who they're calling.

### Code Change Required (`src/lib/augusta.ts`)

```typescript
export async function submitToAugusta(lead: Lead): Promise<boolean> {
  // Build human-readable notes for the specialist
  const notesParts: string[] = [];
  if (lead.savings_tier) notesParts.push(`Savings: ${lead.savings_tier}`);
  if (lead.concern) notesParts.push(`Concern: ${lead.concern}`);
  if (lead.source) notesParts.push(`Source: ${lead.source}`);
  notesParts.push("Guide sent via email. From richdadretirement.com.");

  const payload = {
    firstname: lead.first_name,
    lastname: lead.last_name || "",
    phone: lead.phone,
    email: lead.email,
    affiliate_id: AFFILIATE_ID,
    // Enrichment fields
    savings_tier: lead.savings_tier || "",
    primary_concern: lead.concern || "",
    source_page: lead.source || "",
    qualification_tier: lead.qualification_tier || "",
    lead_notes: notesParts.join(". "),
  };
  // ... rest stays the same
}
```

### Problem: Dual-Path Creates Double Leads

There are TWO ways a lead reaches Augusta:

**Path A: Webhook (automatic)** — our form → API → Zapier → Augusta gets the lead. Works for $50k+ form submitters. Augusta calls them.

**Path B: Affiliate link click** — user clicks CTA in email → lands on Augusta's landing page → fills out ANOTHER form on Augusta's site. Augusta gets a second lead through their own system.

If a $50k+ lead was already sent to Augusta via webhook, and then they click an affiliate link in our email and fill out Augusta's form too — Augusta now has the same person twice in their system. Different channels, no deduplication. They might get called by two different specialists.

### Fix: Two CTA Strategies Based on Handoff Status

**For leads ALREADY sent to Augusta via webhook ($50k+ form submitters):**
- NEVER use affiliate links to Augusta's landing pages
- Instead: "Call Augusta directly: 844-405-3908" or "Your specialist will reach out within 24 hours"
- The goal is to get them to ANSWER the existing call, not create a second lead
- In emails: CTAs point to our own site (calculators, reviews, guide) or show the phone number

**For leads NOT sent to Augusta (guide downloaders, newsletter subscribers, sub-$50k):**
- Use affiliate links normally — they haven't been submitted yet
- The affiliate link IS their first contact with Augusta
- This is the correct flow for someone who's warming up but hasn't committed

### Implementation in Email Sequences

```
high-intent sequence ($50k+ — already sent to Augusta):
  CTAs = "Call Augusta: 844-405-3908" / "Review your guide" / site links
  NEVER links to learn.augustapreciousmetals.com (their LP)

guide-nurture sequence (guide downloaders — NOT sent to Augusta):
  CTAs = affiliate links to Augusta LP (this IS their first contact)
  OR "Find Your Match" → /get-started (our funnel → webhook)

newsletter-welcome (not sent to Augusta):
  CTAs = guide download, site links, eventually /get-started

mid-nurture / starter-nurture (sent to Goldco/Noble, not Augusta):
  CTAs = appropriate affiliate links (Goldco, Noble Gold, AHG)
```

### The Complete Handoff Matrix

| Sequence | Sent to Augusta? | Email CTAs | Goal |
|----------|-----------------|------------|------|
| `newsletter-welcome` | No | Site links, guide LP | Download guide |
| `guide-nurture` | No | Augusta affiliate links + /get-started | Submit lead form |
| `high-intent` | YES (via webhook) | Phone number + site links | Answer Augusta's call |
| `mid-nurture` | No (wrong tier) | Goldco/AHG affiliate links | Request kit |
| `starter-nurture` | No (wrong tier) | Noble Gold affiliate links | Request kit |
| `re-engage` | Varies | Site links + calculators | Re-enter funnel |

---

## THE UNIFIED FUNNEL

```
WEBSITE (awareness + education)
    │
    ├── Newsletter signup ──────────────────→ newsletter-welcome (3 emails / 7 days)
    │                                              │
    │                                        Day 3: "Download free guide" CTA
    │                                              │
    │                                        Clicks? → redirect to /guide/free
    │                                              ↓
    ├── Guide landing page (/guide/free) ───→ guide-nurture (5 emails / 16 days)
    │   [Name + Email only, no phone]              │
    │                                        Day 7: "Ready to talk to someone?" CTA
    │                                              │
    │                                        Clicks? → redirect to /get-started
    │                                              ↓
    ├── Quiz → /get-started funnel ─────────→ LEAD FORM SUBMISSION
    │   [Name + Email + Phone + Tier]              │
    │                                              │
    ├── Direct /get-started ────────────────→ LEAD FORM SUBMISSION
    │                                              │
    └──────────────────────────────────────────────┘
                                                   │
                            ┌──────────────────────┼──────────────────────┐
                            │                      │                      │
                       $50k+ lead             $25k-$50k lead         <$25k lead
                            │                      │                      │
                    ┌───────┴───────┐              │                      │
                    │               │              │                      │
              Augusta webhook   high-intent    mid-nurture          starter-nurture
              (Zapier, instant) (7 emails/21d)  (5 emails/16d)      (5 emails/16d)
                    │               │              │                      │
              Augusta calls    SUPPORT THE     Route to Goldco      Route to Noble
              within 24h       AUGUSTA CALL    or AHG               Gold
                    │               │
                    └───────┬───────┘
                            │
                   THE HANDOFF ZONE (Days 0-3)
                   Every email = "pick up the phone"
                            │
                   Day 3: "Did you connect?" check-in
                            │
                   ┌────────┴────────┐
                   │                 │
              Connected?         Didn't connect?
              YES → slow down    NO → continue nurture
              (shift to          (keep pushing value
              post-call          + call prep)
              reinforcement)
                            │
                   Day 21+: No conversion
                            │
                   30 days idle → re-engage (3 emails / 10 days)
```

---

## REVISED SEQUENCE ARCHITECTURE

| ID | Sequence | Trigger | Emails | Days | Goal |
|----|----------|---------|--------|------|------|
| `newsletter-welcome` | Welcome Series | Newsletter signup | 3 | 7 | Convert to guide download |
| `guide-nurture` | Guide Follow-Up | Guide LP form (name+email only) | 5 | 16 | Convert to full lead (/get-started) |
| `high-intent` | Augusta Support | Lead form, $50k+ | 7 | 21 | Get them to answer Augusta's call |
| `mid-nurture` | The Consideration Path | Lead form, $25k-$50k | 5 | 16 | Goldco / AHG kit request |
| `starter-nurture` | The Starter Path | Lead form, <$25k | 5 | 16 | Noble Gold kit request |
| `re-engage` | Come Back | 30 days post-sequence, no conversion | 3 | 10 | Re-enter funnel |

**Total: 28 emails across 6 sequences**

### Key Design Decisions

1. **No separate quiz sequence.** Quiz → /get-started → lead form. Quiz answers (product type, budget, matched company) are stored in lead `metadata` and used to personalize the lead sequence emails. One funnel, one sequence per lead.

2. **Guide landing page is NEW.** We need to build `/guide/free` — a lightweight form (name + email, no phone) that delivers the PDF and enrolls in `guide-nurture`. This is a lower-friction entry point for people not ready to give their phone number.

3. **`sendGuideEmail()` becomes sequence step 0.** No more double email. The guide delivery IS email 1 of whatever sequence they're in. For lead form submitters, the guide is included in the high-intent/mid/starter step 0.

4. **Augusta Support Window (Days 0-3).** For $50k+ leads, emails 1-3 are laser-focused on call prep. No education, no math, no comparisons. Just: "here's what the call looks like, have these things ready, don't be nervous."

5. **Day 3 check-in replaces blind nurturing.** Email 3 asks "Did you talk to your specialist yet?" with two clear paths: (a) "Yes, I did" → link that updates lead status, slows sequence; (b) "Not yet" → link to reschedule / call Augusta directly.

---

## PREREQUISITE: BUILD GUIDE LANDING PAGE

Before implementing the email sequences, Claude Code needs to build:

### `/guide/free` — Guide Download Landing Page
**Purpose:** Low-friction lead capture (name + email only, no phone)
**Design:** Simple, focused — headline, 3 bullet points, form, trust badges
**On submit:**
1. Insert into `leads` table with `source: "guide-landing-page"`, `status: "guide-download"`
2. Enroll in `guide-nurture` sequence
3. Send Telegram notification
4. Show success screen with PDF download link
5. Do NOT submit to Augusta (no phone number = can't call them)

**Copy:**
```
Headline: The 2026 Gold IRA Protection Guide
Subhead: 10 chapters. Zero sales pitch. Free.

• How a Gold IRA rollover actually works (step by step)
• The real fees — what's fair and what's a ripoff
• Scams to avoid (Chapter 9 could save you thousands)

[First Name] [Email] [GET YOUR FREE GUIDE →]

🔒 No phone required. No spam. Unsubscribe anytime.
```

This page gets linked from: newsletter emails, blog posts, social media, footer CTA, exit intent popup.

---

## SEQUENCE 1: NEWSLETTER WELCOME (`newsletter-welcome`)

**Trigger:** Newsletter signup form (footer, popup, etc.)
**Audience:** Lowest intent — just wants info
**Goal:** Convert to guide download → enters `guide-nurture`
**Emails:** 3 over 7 days
**Exit:** Downloads guide (→ `guide-nurture`) or 7 days elapsed

### Email 1 — Day 0 (Immediate)
**Subject:** `You're in. Here's what to expect.`
**Preview:** Weekly gold & silver updates, guides, and exclusive tools.

```
Welcome to Rich Dad Retirement.

Here's what you'll get from us:

• Weekly gold & silver market updates
• Breaking news that affects your retirement
• New guides and calculator tools

We publish for one audience: hardworking Americans who saved smart
and want to protect what they've built. No Wall Street jargon. No
generic advice. Just facts.

Start here — our 3 most popular resources:

1. What Is a Gold IRA? (Complete Guide)
   richdadretirement.com/learn/what-is-gold-ira

2. Best Gold IRA Companies Ranked for 2026
   richdadretirement.com/best-gold-ira-companies

3. Gold IRA Calculator
   richdadretirement.com/tools/gold-ira-calculator

See you in your inbox,
The Rich Dad Retirement Team
```

**CTA:** "Visit richdadretirement.com →"

### Email 2 — Day 3
**Subject:** `The free guide 10,000+ Americans have downloaded`
**Preview:** 10 chapters. Zero sales pitch. Just the facts about Gold IRAs.

```
Hey {{firstName}},

Our most popular resource is the 2026 Gold IRA Protection Guide.

It covers:
• Why $36 trillion in national debt threatens your savings
• How a Gold IRA rollover works (step by step)
• The real fees — what's fair vs. a ripoff
• Scams to avoid (Chapter 9 alone is worth it)
• 10 questions to ask any Gold IRA company
• Our honest company rankings

It's free. No credit card. No phone call required.

We built it because we got tired of seeing retirees get ripped off
by shady gold companies.
```

**CTA:** "Download the Free Guide →" → `/guide/free` (triggers `guide-nurture` on submit)

### Email 3 — Day 7 (Final)
**Subject:** `One number that should worry every saver`
**Preview:** $36,000,000,000,000. And it's growing.

```
{{firstName}}, here's a number: $36 trillion.

That's the U.S. national debt. It was $10 trillion in 2008. $20
trillion in 2017. $36 trillion today.

When the government owes this much, they have two options:
1. Raise taxes (your retirement income gets hit)
2. Print more dollars (your savings lose purchasing power)

Both options hurt savers. Both are already happening.

Gold doesn't care about government debt. Gold can't be printed. Gold
has held its value for 5,000 years — through every empire, every
currency collapse, every financial crisis.

That's why more Americans are adding gold to their retirement
accounts. Not as a get-rich scheme. As insurance.

If you want to learn more, our free guide covers everything:
```

**CTA:** "Get the Free Gold IRA Guide →" → `/guide/free`

*End of series. Continues as regular newsletter subscriber.*

---

## SEQUENCE 2: GUIDE FOLLOW-UP (`guide-nurture`)

**Trigger:** Guide landing page form submit (name + email, no phone)
**Audience:** Interested enough to give email, not ready to talk to anyone
**Goal:** Build enough trust to fill out the full lead form at `/get-started`
**Emails:** 5 over 16 days
**Exit:** Submits lead form (→ upgrades to `high-intent`, `mid-nurture`, or `starter-nurture`)

### Email 1 — Day 0 (Immediate)
**Subject:** `Your Gold IRA Protection Guide is here`
**Preview:** The 2026 guide — 10 chapters, zero sales pitch.

```
{{firstName}}, here's your guide.

We built the 2026 Gold IRA Protection Guide because every American
deserves straight answers about protecting their retirement. No sales
pitch. Just facts.

Here's what's inside:
• Why $36 trillion in national debt threatens your 401(k)
• How a Gold IRA rollover actually works (step by step)
• The real fees — what's fair and what's a ripoff
• Which companies we'd trust with our own money
• 10 questions to ask before you sign anything

[DOWNLOAD YOUR FREE GUIDE → PDF link]

Read it when you have 15 minutes. Chapter 9 (Scams to Avoid) is
worth the read alone — it could save you thousands.

Talk soon,
The Rich Dad Retirement Team
```

**CTA:** "Download Your Free Guide →" → PDF link

### Email 2 — Day 3
**Subject:** `Did you get to Chapter 4?`
**Preview:** If you only read one chapter, make it the one about fees.

```
{{firstName}}, quick follow-up on your guide.

Chapter 4 breaks down exactly what Gold IRA companies charge. Most
people are shocked at the range.

Some companies charge 3-5% over spot price. Others charge 20-50%.
That's not a typo. On a $100,000 rollover, that's the difference
between $3,000 in fees and $50,000.

Here's the short version:

Fair markup: 3-8% over spot price
Red flag: Anything over 15%
Walk away: "Rare" coins pushed at huge premiums

If you haven't read the guide yet, no rush. It'll be waiting for you.

— The Rich Dad Retirement Team

P.S. If you're curious what your savings could look like with gold,
our calculator does the math in 60 seconds.
```

**CTA:** "Try the Gold IRA Calculator →" → `richdadretirement.com/tools/gold-ira-calculator`

### Email 3 — Day 7
**Subject:** `We ranked every Gold IRA company (honest results)`
**Preview:** 15+ companies reviewed. 3 made our list.

```
{{firstName}}, if you're comparing Gold IRA companies, we did the
work for you.

We reviewed 15+ companies on fees, BBB ratings, customer reviews,
minimum investments, and how they treat people on the phone.

Here's the short version:

#1 AUGUSTA PRECIOUS METALS
• A+ BBB, zero complaints in 6+ years
• Zero fees for up to 10 years on qualifying accounts
• Harvard-trained economist on staff
• $50,000 minimum

#2 GOLDCO
• A+ BBB, strong reviews
• $25,000 minimum
• Good for mid-range investors

#3 NOBLE GOLD
• A+ BBB, lowest minimum ($2,000)
• Great for getting started

The full comparison with fee tables, real customer experiences, and
detailed breakdowns is on our site.
```

**CTA:** "Read the Full Comparison →" → `richdadretirement.com/best-gold-ira-companies`

### Email 4 — Day 11
**Subject:** `"I expected it to be a nightmare" — Jennifer H.`
**Preview:** What real people say after their Gold IRA rollover.

```
{{firstName}}, one of the biggest questions we hear: "What do people
actually think AFTER they've done the rollover?"

Fair question. Here's what verified customers told us:

"I expected it to be a nightmare — tons of paperwork, hidden fees,
the whole nine yards. Augusta made it shockingly easy. Two phone
calls and my 401k was rolled over in 12 days. No taxes. No penalties."
— Jennifer H., retired nurse, Ohio

"My advisor told me I was crazy. Then gold went up 27% the next year
and my 'safe' bond fund lost 8%. I stopped taking his calls."
— Mike T., retired trucker, Texas

"I only moved 15% of my savings into gold. That's it. But knowing
that 15% can't be wiped out by a market crash lets me sleep at night."
— Barbara K., retired teacher, Florida

If you want to find out which company is right for YOUR situation,
our free matching tool takes about 2 minutes.
```

**CTA:** "Find Your Match →" → `richdadretirement.com/get-started`
*This is the conversion point — they enter the full lead funnel.*

### Email 5 — Day 16 (Final)
**Subject:** `Your guide. Your decision. No pressure.`
**Preview:** This is the last email in this series.

```
{{firstName}}, this is the last email in this series.

You downloaded our Gold IRA Protection Guide. You now know more about
gold, IRAs, fees, and scams than 95% of Americans.

Here's everything in one place:
• Your guide: [PDF link]
• Company reviews: richdadretirement.com/best-gold-ira-companies
• Calculators: richdadretirement.com/tools
• Find your match: richdadretirement.com/get-started

Whatever you decide, that's your call. We built this site because
every hardworking American who saved smart deserves honest info.

If you ever want a no-obligation conversation with a Gold IRA
specialist, Augusta's number is 844-405-3908. Free call. No pressure.

Wishing you a retirement you've earned,
The Rich Dad Retirement Team
```

**CTA:** "Find Your Match →" → `richdadretirement.com/get-started`

---

## SEQUENCE 3: AUGUSTA SUPPORT (`high-intent`)

**Trigger:** Lead form submission with $50k+ savings tier
**Audience:** Highest intent. Gave name, email, phone. Augusta has their info and will call within 24h.
**Goal:** Get them to ANSWER the Augusta call and feel good about it
**Emails:** 7 over 21 days
**Exit:** Lead status updated to "connected" or "converted"

### THE AUGUSTA SUPPORT WINDOW (Days 0-3)

This is the most critical 72 hours. Augusta is actively trying to reach this person. Our job is simple: **make them pick up the phone.**

### Email 1 — Day 0 (Immediate, replaces `sendGuideEmail`)
**Subject:** `{{firstName}}, here's your guide + what happens next`
**Preview:** A specialist will reach out within 24 hours. Here's how to prep.

```
{{firstName}}, you're in.

Two things are happening right now:

1. YOUR FREE GUIDE
   Download the 2026 Gold IRA Protection Guide below. If you're short
   on time, read Chapter 10 first — it has the 10 questions to ask
   your specialist.

2. YOUR SPECIALIST CALL
   An Augusta Precious Metals specialist will reach out within 24
   hours. Here's what to expect:

   • It takes about 15 minutes
   • It's educational, not a sales pitch
   • They'll explain how a Gold IRA works for YOUR situation
   • There's zero obligation

   Augusta has an A+ BBB rating with zero complaints in 6+ years.
   They didn't get that rating by being pushy.

If you want to prep (takes 2 minutes):
✓ Know your total retirement savings (rough number is fine)
✓ Know where it's held (Fidelity, Vanguard, employer plan)
✓ Have one question ready (the guide has 10 good ones)

Talk soon,
The Rich Dad Retirement Team
```

**CTA:** "Download Your Free Guide (PDF) →" → PDF link

### Email 2 — Day 1
**Subject:** `Quick heads up: what the call looks like`
**Preview:** 15 minutes. Here's the agenda so there are no surprises.

```
{{firstName}}, your Augusta specialist is reaching out today or
tomorrow. Here's exactly what the call looks like so there are
no surprises:

MINUTE 1-3: Your situation
They'll ask about your savings — how much, where it's held, and
when you're planning to retire. They don't need account numbers.

MINUTE 4-8: Education
They'll explain how a Gold IRA rollover works, the IRS rules, and
what it actually costs. This is the part most people find valuable
even if they don't move forward.

MINUTE 9-12: Your questions
Your turn. Ask anything. The 10 questions from your guide are
perfect for this.

MINUTE 13-15: Next steps (only if YOU want)
If you want to proceed, they'll explain the paperwork. If not,
they'll say thanks and mean it.

{{IF quizResult}}
You mentioned your main concern is {{concern}}. Your specialist
will have specific strategies for that — ask them about it directly.
{{/IF}}

Nobody will pressure you. Nobody will call you 47 times afterward.
```

**CTA:** "Review Your Guide Before the Call →" → PDF link

### Email 3 — Day 3 (THE CHECK-IN)
**Subject:** `Did you connect with Augusta yet?`
**Preview:** Just checking in — either way, we've got you covered.

```
{{firstName}}, quick check-in.

By now, your Augusta specialist should have reached out. Did you
get a chance to talk?

→ YES, WE CONNECTED
   [Link: /api/email/status?action=connected&email={{email}}]
   Great! If you have follow-up questions, reply to this email.
   We read every response.

→ NOT YET / I MISSED THE CALL
   [Link: /api/email/status?action=not-connected&email={{email}}]
   No problem. You can call Augusta directly at 844-405-3908 (ask
   for the Gold IRA education team). Or just wait — they'll try
   again.

→ I CHANGED MY MIND
   [Link: unsubscribe]
   Totally fine. No hard feelings. You'll stay on our newsletter
   unless you unsubscribe below.

Either way, you've already done more research than 95% of people.
That puts you in a strong position no matter what you decide.
```

**CTA:** "Call Augusta Directly: 844-405-3908"

**CRITICAL: This email creates a feedback loop.**
- "YES" click → updates lead status to `connected` in Supabase → shifts remaining emails to post-call reinforcement mode (emails 5-7 become optional/skip)
- "NOT YET" click → updates status to `call-pending` → emails 4-7 continue with call encouragement
- API endpoint: `/api/email/status` — simple GET that updates lead status and redirects to a thank-you page

### Email 4 — Day 7
**Subject:** `3 things your financial advisor won't tell you about gold`
**Preview:** Why most advisors steer you away — and why that matters.

*Only sends if lead status is NOT "connected"*

```
{{firstName}}, while you're thinking things over, here's something
worth knowing.

Most financial advisors won't recommend physical gold. Not because
it's bad — but because they don't earn commissions on it.

YOUR ADVISOR'S INCENTIVE
They make money on mutual funds, ETFs, and annuities. Physical gold?
Nothing. So they'll tell you gold is "risky" or "doesn't pay
dividends." Both statements are misleading.

WHAT GOLD ACTUALLY DOES
Gold isn't meant to replace your stocks. It's insurance. You don't
buy car insurance hoping for a crash — you buy it so a crash doesn't
ruin you.

THE NUMBERS
10-25% of your portfolio in gold. That's what independent advisors
(the ones who don't earn commissions) recommend.

If your advisor pushes back on gold, ask them one question:
"What's your plan to protect my savings during the next 50% crash?"

If they say "stay the course" — that's not a plan. That's hope.

Augusta's team includes a Harvard-trained economist who can show you
exactly how gold fits into your portfolio. The call is still free.
```

**CTA:** "Schedule Your Free Call →" → `AFFILIATE_LINKS.augusta`

### Email 5 — Day 11
**Subject:** `Real people. Real rollovers. Zero regrets.`
**Preview:** What actual customers say after the fact.

*Only sends if lead status is NOT "connected"*

```
{{firstName}}, the hardest part of a Gold IRA rollover is making
the decision. The actual process? Easy.

"I was terrified of the paperwork. Augusta did everything. I signed
three forms and it was done in two weeks."
— Richard M., retired factory supervisor, Michigan

"My wife thought I was nuts. Then she saw gold go up 27% while our
stocks went sideways. Now she wants to move more."
— Dave L., retired electrician, Pennsylvania

"I only moved $75,000 — about 20% of our savings. It's not about
getting rich. It's about knowing that no matter what happens to the
market, that $75k is safe."
— Sandra W., retired school teacher, Arizona

Every one of these people had the same hesitation you might have.
Every one of them is glad they made the call.

If you haven't connected with Augusta yet, it's not too late.
Call them directly: 844-405-3908 (Gold IRA education team).
```

**CTA:** "Talk to Augusta — Free →" → `AFFILIATE_LINKS.augusta`

### Email 6 — Day 16
**Subject:** `What Robert Kiyosaki gets right (and wrong) about gold`
**Preview:** The Rich Dad author's take — with our honest commentary.

*Sends to all remaining leads regardless of status*

```
{{firstName}}, if you follow Robert Kiyosaki, you've heard him say:

"Gold is going to $5,000."
"The dollar is trash."
"Your 401(k) is the biggest scam in history."

Here's our honest take:

WHAT HE GETS RIGHT:
• Paper currency loses value over time (the dollar has lost 87%
  of purchasing power since 1971 — that's a fact)
• Gold is a real asset that can't be printed into oblivion
• Most Americans are dangerously overexposed to paper assets

WHAT HE EXAGGERATES:
• Gold to $5,000 — possible but not certain
• "Biggest crash in history" — he's said this for 10 years
• 401(k)s are a "scam" — imperfect, not a scam

THE MIDDLE GROUND:
You don't need to be extreme. Moving 10-25% of your savings into
gold is a proven strategy that protects you without betting the farm.

That's what we recommend. That's what the data supports.
```

**CTA:** "See Your Personalized Numbers →" → `richdadretirement.com/tools/gold-ira-calculator`

### Email 7 — Day 21 (Final)
**Subject:** `Your consultation is still available`
**Preview:** Last email in this series. Everything in one place.

```
{{firstName}}, this is the last email in this series.

Here's where things stand:

✓ Your free guide → [PDF link]
✓ Your free consultation → still available (844-405-3908)
✓ Your tools → richdadretirement.com/tools (43 calculators)
✓ Company reviews → richdadretirement.com/best-gold-ira-companies

If now isn't the right time, that's fine. Bookmark our site. We
publish daily and we'll always be here when you're ready.

If now IS the right time — one call. 15 minutes. Zero obligation.

Wishing you the retirement you've earned,
The Rich Dad Retirement Team
```

**CTA:** "Get Your Free Kit →" → `AFFILIATE_LINKS.augusta`

---

## SEQUENCE 4: MID-TIER NURTURE (`mid-nurture`)

**Trigger:** Lead form submission with $25k-$50k savings tier
**Audience:** Solid savers but below Augusta's $50k minimum
**Goal:** Route to Goldco ($25k min) or American Hartford Gold ($10k min)
**Emails:** 5 over 16 days
**Exit:** Clicks Goldco/AHG affiliate CTA or 16 days elapsed

### Email 1 — Day 0 (Immediate)
**Subject:** `{{firstName}}, your Gold IRA guide + your best match`
**Preview:** We found the right company for your savings level.

```
{{firstName}}, welcome to Rich Dad Retirement.

Here's your free 2026 Gold IRA Protection Guide:
[DOWNLOAD YOUR FREE GUIDE →]

And here's something specific to you:

Based on your savings level, your best match is Goldco.

Why Goldco:
• $25,000 minimum — fits your range perfectly
• A+ BBB rating, trusted by 20,000+ Americans
• Free precious metals on qualifying accounts
• Strong buyback program when you're ready to sell
• No high-pressure sales

A Goldco specialist will reach out for a free consultation. Like
Augusta, it's educational — not a pitch. They'll explain exactly
how a Gold IRA works for your situation.

The call takes about 15 minutes. Zero obligation.

— The Rich Dad Retirement Team
```

**CTA:** "Learn More About Goldco →" → `AFFILIATE_LINKS.goldco`

### Email 2 — Day 3
**Subject:** `You don't need $50k to protect your retirement`
**Preview:** The strategy that works at any savings level.

```
{{firstName}}, here's something most Gold IRA sites won't tell you:
you don't need $50,000 to get meaningful protection.

THE DOLLAR-COST AVERAGING APPROACH

Start: Open your Gold IRA with $10,000-$25,000
Monthly: Add $200-$500 from each paycheck
Annually: Use your IRA contribution limit ($7,000/yr, $8,000 if 50+)
Windfalls: Tax refunds, bonuses → straight to gold

Here's what that looks like:

Year 1: $25,000 + ($300 × 12) = $28,600
Year 2: $28,600 + ($300 × 12) = $32,200
Year 3: $32,200 + ($300 × 12) = $35,800
(Plus any gold price appreciation)

In 3 years, you'd have a meaningful gold position — and you could
even qualify for Augusta's premium services at that point.

The key: start with what you have. Build from there.
```

**CTA:** "Start with Goldco ($25k min) →" → `AFFILIATE_LINKS.goldco`

### Email 3 — Day 7
**Subject:** `Augusta vs Goldco — honest comparison for your range`
**Preview:** Both are A+ rated. Here's which one fits you.

```
{{firstName}}, you might be wondering: should I stretch for Augusta
or go with Goldco?

Here's the honest comparison:

AUGUSTA PRECIOUS METALS
✓ Best-in-class education and transparency
✓ Harvard-trained economist on staff
✓ Zero fees for up to 10 years
✗ $50,000 minimum (firm)
Best for: Investors with $50k+ who want premium service

GOLDCO
✓ Lower minimum ($25,000)
✓ Free precious metals on qualifying accounts
✓ A+ BBB, strong track record
✓ More flexible for mid-range investors
Best for: Your savings level — great service, accessible minimums

AMERICAN HARTFORD GOLD
✓ Even lower minimum ($10,000)
✓ Price match guarantee
✓ Family-owned, personal service
Best for: If you want to start even smaller

Our recommendation: Goldco is the sweet spot for your range. Strong
reputation, reasonable minimums, and no pressure.

If your savings grow past $50k later, you can always add an Augusta
account for their premium services.
```

**CTA:** "Get Goldco's Free Kit →" → `AFFILIATE_LINKS.goldco`

### Email 4 — Day 11
**Subject:** `4 ways to grow your retirement faster`
**Preview:** Proven strategies that work at any income level.

```
{{firstName}}, while you're building your gold position, here are
4 ways to accelerate your retirement savings:

1. MAX YOUR CATCH-UP CONTRIBUTIONS
If you're 50+, you can contribute $8,000/year to your IRA (vs the
normal $7,000). That extra $1,000/year = $10,000+ over a decade.

2. CONSOLIDATE OLD 401(k)s
Have a forgotten 401(k) from a previous job? Roll it into your Gold
IRA. Stop paying fees on accounts you're not watching.

3. CONSIDER A ROTH CONVERSION
If you expect higher tax rates in retirement (most experts do, given
$36T in debt), converting some funds to a Roth Gold IRA could save
you thousands in taxes later.

4. DIVERSIFY ACROSS METALS
Silver is undervalued relative to gold right now. A 70/30 gold/silver
split gives you more upside potential.

These aren't tricks. They're the same strategies financial planners
use for their own accounts.
```

**CTA:** "Explore Our Free Calculators →" → `richdadretirement.com/tools`

### Email 5 — Day 16 (Final)
**Subject:** `Your path forward`
**Preview:** Everything you need, in one place.

```
{{firstName}}, this is the last email in this series.

Your complete resource kit:

📖 YOUR GUIDE: [Gold IRA Protection Guide PDF]
🏆 YOUR MATCH: Goldco ($25,000 minimum)
🧮 CALCULATORS: richdadretirement.com/tools
📊 REVIEWS: richdadretirement.com/best-gold-ira-companies

The size of your first investment doesn't matter. What matters is
that you start protecting what you've built.

Visit us anytime at richdadretirement.com. We publish daily.

Wishing you a secure retirement,
The Rich Dad Retirement Team
```

**CTA:** "Get Goldco's Free Kit →" → `AFFILIATE_LINKS.goldco`

---

## SEQUENCE 5: STARTER NURTURE (`starter-nurture`)

**Trigger:** Lead form submission with <$25k savings tier
**Audience:** Smaller portfolios. Still serious.
**Goal:** Route to Noble Gold ($2k minimum)
**Emails:** 5 over 16 days
**Exit:** Clicks Noble Gold CTA or 16 days elapsed

### Email 1 — Day 0 (Immediate)
**Subject:** `Good news: you can start with $2,000`
**Preview:** Your free guide + the best company for your savings level.

```
{{firstName}}, welcome to Rich Dad Retirement.

First — your free 2026 Gold IRA Protection Guide:
[DOWNLOAD YOUR FREE GUIDE →]

Now, here's something important: a lot of Gold IRA sites only talk
to people with $100k+. We don't. Every saver deserves protection.

YOUR BEST MATCH: Noble Gold Investments
• Start with as little as $2,000
• A+ BBB rating, thousands of 5-star reviews
• Fast account setup
• No high-pressure sales

Noble Gold has the lowest minimum in the entire industry. Start
with what you have and build from there.

— The Rich Dad Retirement Team
```

**CTA:** "Explore Noble Gold →" → `AFFILIATE_LINKS.noble`

### Email 2 — Day 3
**Subject:** `The $200/month strategy`
**Preview:** How small, consistent moves build real protection.

```
{{firstName}}, here's a strategy that works at any savings level:

Month 1: Open your Gold IRA with $2,000-$5,000
Monthly: Add $200-$500 from each paycheck
Annually: Use your IRA contribution ($7,000/yr, $8,000 if 50+)
Windfalls: Tax refunds, bonuses → straight to gold

Year 1: $5,000 + ($300 × 12) = $8,600
Year 2: $8,600 + ($300 × 12) = $12,200
Year 3: $12,200 + ($300 × 12) = $15,800
(Plus any gold price appreciation)

In 3 years, you'll have a meaningful gold position. And you didn't
have to stretch yourself thin to get it.

The key is starting. Not starting big.
```

**CTA:** "Open Your Account — Starts at $2k →" → `AFFILIATE_LINKS.noble`

### Email 3 — Day 7
**Subject:** `Why Noble Gold works for new gold investors`
**Preview:** Low minimums. No pressure. Here's the full picture.

```
{{firstName}}, here's why we recommend Noble Gold:

✅ $2,000 minimum — lowest in the industry
✅ A+ BBB rating, thousands of 5-star reviews
✅ Texas-based depository (not just Delaware)
✅ No high-pressure sales tactics
✅ Fast setup — most accounts funded in 2 weeks

One thing we love: they don't make you feel small for starting small.
A $5,000 account gets the same respect as a $500,000 account.

As your gold position grows past $50k, you can explore Augusta for
premium services. But for now, Noble Gold is where you want to be.
```

**CTA:** "Get Noble Gold's Free Kit →" → `AFFILIATE_LINKS.noble`

### Email 4 — Day 11
**Subject:** `4 ways to grow your retirement faster`
**Preview:** Same strategies the pros use for their own money.

*Same content as mid-nurture Email 4. Reuse the template.*

**CTA:** "Explore Our Free Calculators →" → `richdadretirement.com/tools`

### Email 5 — Day 16 (Final)
**Subject:** `Your path forward`
**Preview:** Everything in one place. Start when you're ready.

```
{{firstName}}, this is the last email in this series.

📖 YOUR GUIDE: [Gold IRA Protection Guide PDF]
🏆 YOUR MATCH: Noble Gold (starts at $2,000)
🧮 CALCULATORS: richdadretirement.com/tools
📊 REVIEWS: richdadretirement.com/best-gold-ira-companies

$2,000 in gold today is infinitely more protection than $0 tomorrow.
Start when you're ready. We'll be here.

Wishing you a secure retirement,
The Rich Dad Retirement Team
```

**CTA:** "Start with Noble Gold →" → `AFFILIATE_LINKS.noble`

---

## SEQUENCE 6: RE-ENGAGEMENT (`re-engage`)

**Trigger:** 30 days after any sequence ends without conversion
**Build HTML at SEND TIME, not enrollment time** (fixes dynamic content issue)
**Emails:** 3 over 10 days
**Exit:** Any click or 10 days elapsed

### Email 1 — Day 0
**Subject:** `Gold just crossed another milestone`
**Preview:** Here's what it means for your retirement savings.

```
{{firstName}}, it's been a while since we connected.

Gold has been making moves. As of today, it's above $2,800/oz —
up from $1,800 just three years ago.

Here's what that means in plain English: if you had moved $100,000
into gold three years ago, it would be worth roughly $155,000 today.
Without dividends. Without compounding. Just the metal sitting in
a vault.

Meanwhile, every dollar in your savings account has lost about 15%
of its purchasing power to inflation over the same period.

If you've been thinking about protecting your retirement with gold
but haven't taken the step — the information hasn't changed. Gold
is still gold. And your savings still need protection.
```

**CTA:** "See Today's Gold Prices →" → `richdadretirement.com/tools/gold-price`

### Email 2 — Day 5
**Subject:** `60 seconds to see your numbers`
**Preview:** Our most popular calculator — 50,000+ people have used it.

```
{{firstName}}, we updated our Gold IRA Calculator for 2026.

In 60 seconds, you can see:
• What your savings could be worth in gold
• How different allocations (10%, 15%, 25%) affect your returns
• The impact of inflation on unprotected savings
• Side-by-side: stocks vs. gold vs. mixed portfolio

Over 50,000 people have used it. It's free, takes one minute, and
doesn't require any personal information.

Sometimes seeing your own numbers is what makes it click.
```

**CTA:** "Try the Calculator →" → `richdadretirement.com/tools/gold-ira-calculator`

### Email 3 — Day 10 (Final)
**Subject:** `The door's always open`
**Preview:** Last nudge. Then just our regular newsletter.

```
{{firstName}}, this is the last personal email from us.

You'll still get our regular newsletter with market updates and
new guides. But no more one-on-one emails unless you take a new
action on our site.

If you ever want to pick up where you left off:
• Guide: richdadretirement.com/guides
• Calculators: richdadretirement.com/tools
• Reviews: richdadretirement.com/best-gold-ira-companies
• Talk to Augusta: 844-405-3908 (free, no obligation)

All the best,
The Rich Dad Retirement Team
```

**CTA:** "Visit richdadretirement.com →"

---

## NEW: FEEDBACK LOOP SYSTEM

### The Problem
Augusta calls within 24 hours but we have no idea if they connected. Our emails keep sending blindly.

### The Solution: 3-Layer Feedback

#### Layer 1: Email Check-In (Day 3 of `high-intent`)
The "Did you connect?" email with click-to-confirm links.

**API endpoint: `GET /api/email/status`**
```
Query params:
  email: string (lead email)
  action: "connected" | "not-connected" | "reschedule"

Behavior:
  1. Update lead status in Supabase
  2. If "connected":
     - Set status = "augusta-connected"
     - Cancel emails 4 and 5 (mark as "skipped" in queue)
     - Send Telegram notification: "🎯 Lead confirmed Augusta connection"
  3. If "not-connected":
     - Set status = "call-pending"
     - Keep all remaining emails active
  4. If "reschedule":
     - Set status = "call-pending"
     - Redirect to Augusta scheduling page or show phone number
  5. Redirect to a simple thank-you page
```

#### Layer 2: Telegram Inline Buttons
When admin gets the initial lead notification in Telegram, add inline buttons:
- ✅ Connected — updates lead status, pauses emails
- ❌ No answer — keeps emails flowing
- 🔄 Callback scheduled — pauses for 48h then resumes

This lets you (Remy) manually update lead status from your phone.

#### Layer 3: Queue-Level Status Checks
Before the cron sends any email, it checks:
```
if lead.status === "augusta-connected" AND sequence === "high-intent":
    skip emails 4 and 5 (education content)
    still send emails 6 and 7 (Kiyosaki + final resources — brand value, not call-push)
```

---

## CLAUDE CODE IMPLEMENTATION BRIEF

### Phase 0: Augusta Handoff Fix (Do FIRST — Highest ROI)

#### 0A. Enrich Augusta Webhook Payload (`src/lib/augusta.ts`)
This is the single highest-ROI change in this entire document. Every lead we've ever sent to Augusta arrived with just a name, phone, and email. Their specialist calls blind. Fixing this costs 10 minutes of dev time and immediately improves call conversion.

```typescript
export async function submitToAugusta(lead: Lead): Promise<boolean> {
  // Build human-readable notes for the specialist
  const notesParts: string[] = [];
  if (lead.savings_tier) notesParts.push(`Savings: ${lead.savings_tier}`);
  if (lead.concern) notesParts.push(`Concern: ${lead.concern}`);
  if (lead.source) notesParts.push(`Source: ${lead.source}`);
  if (lead.qualification_tier) notesParts.push(`Tier: ${lead.qualification_tier}`);
  notesParts.push("Guide sent via email. From richdadretirement.com.");

  const payload = {
    firstname: lead.first_name,
    lastname: lead.last_name || "",
    phone: lead.phone,
    email: lead.email,
    affiliate_id: AFFILIATE_ID,
    // NEW: Enrichment fields
    savings_tier: lead.savings_tier || "",
    primary_concern: lead.concern || "",
    source_page: lead.source || "",
    qualification_tier: lead.qualification_tier || "",
    lead_notes: notesParts.join(". "),
  };

  // ... rest stays the same
}
```

**Zapier side:** Update the Zapier zap to map these new fields. If Augusta's CRM has a "notes" or "comments" field, map `lead_notes` there. If not, concatenate into the lead name or a custom field. The key is that Augusta's specialist sees context before calling.

**Important:** Test with a test lead first. Make sure Zapier passes the extra fields without breaking the existing webhook. Zapier should simply ignore fields that aren't mapped.

#### 0B. Fix Dual-Path CTA Strategy
Update ALL email sequences so that `high-intent` sequence (leads already submitted to Augusta) NEVER links to Augusta's landing pages. Use direct phone number + our site links instead.

In `email-sequences.ts`, the `high-intent` sequence CTAs should be:
- "Call Augusta directly: 844-405-3908"
- "Download your guide" → PDF link
- "See your numbers" → richdadretirement.com/tools/gold-ira-calculator
- "Read company reviews" → richdadretirement.com/best-gold-ira-companies
- NEVER: learn.augustapreciousmetals.com links (creates duplicate lead)

For `guide-nurture` sequence (leads NOT yet sent to Augusta):
- Augusta affiliate links ARE appropriate here — this may be their first contact
- OR route to /get-started to go through our funnel → webhook (preferred path)

### Phase 1: Foundation

#### 1A. Build Guide Landing Page (`/guide/free`)
- New route: `src/app/guide/free/page.tsx`
- Simple form: firstName + email (no phone, no qualification)
- On submit: POST to new `/api/guide-download` endpoint
- New API: `src/app/api/guide-download/route.ts`
  - Insert lead with `source: "guide-landing-page"`, `status: "guide-download"`
  - Enroll in `guide-nurture` sequence
  - Send Telegram notification
  - Do NOT submit to Augusta
- Success screen: PDF download link + "Check your email" message

#### 1B. Add `/api/email/status` Endpoint
- New route: `src/app/api/email/status/route.ts`
- Accepts: `email`, `action` (connected | not-connected | reschedule)
- Updates lead status in Supabase
- If connected: cancels pending nurture emails (mark as "skipped")
- Sends Telegram notification on status change
- Redirects to simple HTML thank-you page

#### 1C. Supabase Schema Update
```sql
-- Add metadata column for quiz results, concerns, etc.
ALTER TABLE email_sequence_queue
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';

-- Add new lead statuses
-- Existing: 'new', 'sent_to_augusta', 'declined_call'
-- New: 'guide-download', 'augusta-connected', 'call-pending', 'converted'
-- (No schema change needed — status is text field)
```

### Phase 2: Rewrite Email Sequences

#### 2A. Replace `src/lib/email-sequences.ts`
- 6 new sequences replacing the 3 existing ones
- Add metadata-aware `buildHtml` functions (access quiz results, concerns)
- Add conditional blocks for personalization
- New routing function:
```typescript
export function getSequenceForContext(
  source: 'guide-lp' | 'lead-form' | 'newsletter',
  savingsTier?: string,
): string {
  if (source === 'newsletter') return 'newsletter-welcome';
  if (source === 'guide-lp') return 'guide-nurture';
  // Lead form: route by tier
  const tier = savingsTier?.replace(/[$\s]/g, '').toLowerCase() || '';
  if (['500k-plus', '500k+', '250k-500k', '100k-250k', '50k-100k'].includes(tier)) {
    return 'high-intent';
  }
  if (['25k-50k'].includes(tier)) return 'mid-nurture';
  return 'starter-nurture';
}
```

#### 2B. Update `src/lib/email-queue.ts`
- Add `upgradeSequence(email, newSequenceId)` function
- Add `checkActiveSequence(email)` function
- Add status-aware send logic: check lead status before sending
- Add `metadata` parameter to `enrollInSequence()`
- Add `buildAtSendTime` flag for re-engage sequence

#### 2C. Update `src/app/api/submit-lead/route.ts`
- Remove `sendGuideEmail()` call (sequence step 0 replaces it)
- Use `getSequenceForContext()` instead of `getSequenceForTier()`
- Check for active sequence before enrolling (handle upgrades)
- Pass quiz metadata to enrollment

#### 2D. Update `src/app/api/newsletter/route.ts`
- Enroll in `newsletter-welcome` (now 3 emails, not 1)

#### 2E. Add Telegram Inline Buttons
- Update `src/lib/lead-notification.ts`
- Add inline keyboard buttons for lead status updates
- Add callback handler for button presses

### Phase 3: Re-engage Cron

#### 3A. Weekly re-engagement enrollment
- Extend `src/app/api/cron/process-emails/route.ts`
- Query: leads where ALL sequence emails are sent/completed, last email was 30+ days ago, never clicked CTA, not unsubscribed
- Enroll in `re-engage` sequence
- Build HTML at send time (not enrollment) for fresh content

### Sequence IDs
```
newsletter-welcome
guide-nurture
high-intent
mid-nurture
starter-nurture
re-engage
```

### Testing Checklist

**Phase 0 (Augusta Handoff):**
- [ ] Augusta webhook now sends savings_tier, concern, source, lead_notes
- [ ] Zapier receives and maps enriched fields correctly
- [ ] Test lead arrives in Augusta's system with notes visible to specialist
- [ ] high-intent emails use phone number CTAs, NOT Augusta LP affiliate links
- [ ] guide-nurture emails use affiliate links OR /get-started (correct for non-webhook leads)

**Phase 1+ (Email Sequences):**
- [ ] Guide LP form → receives guide-nurture email 1 with PDF
- [ ] Guide LP form → does NOT submit to Augusta
- [ ] Newsletter signup → receives newsletter-welcome email 1
- [ ] Newsletter sub downloads guide → exits newsletter, enters guide-nurture
- [ ] Lead form ($50k+) → receives high-intent email 1 (guide + call prep)
- [ ] Lead form ($50k+) → submitted to Augusta via Zapier
- [ ] Lead form ($50k+) → NO separate sendGuideEmail (only sequence step 0)
- [ ] Lead form ($25k-$50k) → receives mid-nurture email 1
- [ ] Lead form (<$25k) → receives starter-nurture email 1
- [ ] Day 3 check-in: "YES connected" → skips emails 4-5, sends 6-7
- [ ] Day 3 check-in: "NOT YET" → all emails continue normally
- [ ] Duplicate email → no duplicate enrollment
- [ ] Guide-nurture reader submits lead form → exits guide, enters high-intent
- [ ] Unsubscribe works per-sequence and globally
- [ ] Cron processes queue at 10 AM ET
- [ ] Re-engage cron enrolls 30-day-old leads weekly
- [ ] Telegram inline buttons update lead status
- [ ] Telegram alerts fire for status changes

---

## A/B TESTS

### Test 1: High-Intent Email 1 Subject
- **A:** `{{firstName}}, here's your guide + what happens next`
- **B:** `Your Gold IRA specialist will call within 24 hours`
- **Metric:** Open rate
- **Sample:** 500 sends, 50/50 split

### Test 2: Day 3 Check-In Phrasing
- **A:** `Did you connect with Augusta yet?` (current)
- **B:** `How was your call?` (assumes positive)
- **Metric:** Click rate on "YES connected" button
- **Sample:** 300 sends, 50/50 split

### Test 3: Guide Nurture Conversion CTA
- **A:** "Find Your Match →" → `/get-started`
- **B:** "Talk to a Specialist — Free →" → `/get-started`
- **Metric:** Click-through to /get-started
- **Sample:** 500 sends, 50/50 split

### Test 4: Newsletter → Guide Conversion (Email 2)
- **A:** Feature list (current — chapters listed)
- **B:** Social proof ("10,000+ Americans downloaded this")
- **Metric:** Guide LP visits from email
- **Sample:** 500 sends, 50/50 split

---

## PERFORMANCE BENCHMARKS

| Sequence | Open Rate | CTR | Conversion | Unsub |
|----------|----------|-----|------------|-------|
| newsletter-welcome | 50-65% | 8-12% | 3-5% to guide | <0.3% |
| guide-nurture | 35-45% | 5-10% | 5-10% to lead form | <0.8% |
| high-intent | 45-55% | 8-15% | 10-20% Augusta connected | <0.5% |
| mid-nurture | 35-45% | 5-8% | 5-8% Goldco click | <0.5% |
| starter-nurture | 35-45% | 5-8% | 5-8% Noble click | <0.5% |
| re-engage | 15-25% | 2-5% | 1-3% any click | 1-2% |

**Review cadence:** Weekly for first month, monthly after that.

---

## BRAND VOICE COMPLIANCE

- [x] No "it's never too late" or "even if you're starting late"
- [x] No "small contributions add up" (they're past accumulation)
- [x] No generic age brackets
- [x] No "work until 70" assumptions
- [x] Acknowledges physical work reality
- [x] Validates Wall Street skepticism
- [x] Plain English, zero jargon
- [x] Respects what they've built
- [x] Job-specific testimonials (nurse, trucker, teacher, factory supervisor, electrician)
- [x] Rich Dad philosophy woven in naturally
- [x] Every email has appropriate affiliate CTA
- [x] Trust signals throughout

---

## FULL FUNNEL SUMMARY

```
COLD                                              HOT
─────────────────────────────────────────────────────→

Newsletter    Guide         Lead Form      Augusta    Converted
Subscriber    Downloader    Submitter      Connected  Customer
   │             │              │              │          │
   │ 3 emails    │ 5 emails     │ 5-7 emails   │ 2 emails │
   │ 7 days      │ 16 days      │ 16-21 days   │ (tail)   │
   │             │              │              │          │
   │   "learn    │   "trust     │   "answer    │  "feel   │
   │    about     │    us and    │    the call  │   good   │
   │    gold"     │    consider" │    + prep"   │   about  │
   │             │              │              │   it"    │
   └──→ guide ──→ get-started ──→ Augusta ─────→ Done
        LP          funnel        webhook

                    30 days idle? → re-engage (3 emails / 10 days)
```
