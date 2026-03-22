// Email nurture sequence definitions — V2.1
// 6 sequences: newsletter-welcome, guide-nurture, high-intent, mid-nurture, starter-nurture, re-engage
//
// CRITICAL DESIGN DECISIONS:
// 1. high-intent CTAs use Augusta PHONE NUMBER (844-405-3908), NEVER affiliate LP links
//    (leads already submitted via webhook — affiliate link creates duplicate lead)
// 2. guide-nurture + mid-nurture + starter-nurture use affiliate links (first contact)
// 3. No separate sendGuideEmail() — sequence step 0 IS the guide delivery
// 4. Days 0-3 of high-intent = Augusta Support Window (prep for the call)

import { emailLayout, p, h2, ul, hr, trustBadge, utmLink, callout, quote, statRow, secondaryCta } from "./email-templates";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { getThemeFromMetadata } from "./email-topic-resolver";
import { getWelcomeResources, getTopicDeepDive, getTopicExpansion, getRelevantCalculator } from "./email-content-blocks";

const SITE = "https://richdadretirement.com";
const GUIDE_PDF = `${SITE}/guides/gold-ira-protection-guide-2026.pdf`;
const AUGUSTA_PHONE = "844-405-3908";
const NOBLE_LP = AFFILIATE_LINKS.noble;
const GOLDCO_LP = AFFILIATE_LINKS.goldco;
const AHG_LP = AFFILIATE_LINKS.americanHartford;
// Augusta affiliate links — ONLY for leads NOT already sent via webhook
const AUGUSTA_LP = AFFILIATE_LINKS.augusta;

export interface SequenceEmail {
  step: number;
  delayDays: number;
  subject: string;
  /** If true, only send when lead status is NOT "augusta-connected" */
  skipIfConnected?: boolean;
  buildHtml: (email: string, firstName?: string, metadata?: Record<string, unknown>) => string;
}

export interface Sequence {
  id: string;
  name: string;
  description: string;
  emails: SequenceEmail[];
}

// ============================================
// SEQUENCE 1 — Newsletter Welcome
// Trigger: Newsletter signup (footer, popup)
// Goal: Convert to guide download → guide-nurture
// 3 emails over 7 days
// ============================================

const newsletterWelcome: Sequence = {
  id: "newsletter-welcome",
  name: "Newsletter Welcome",
  description: "Converts newsletter subscribers to guide downloaders",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "Welcome — 3 free resources inside",
      buildHtml: (email) => emailLayout({
        email,
        sequence: "newsletter-welcome",
        preheader: "3 resources most retirees never find. You just got them free.",
        body: `
          ${h2("Welcome to Rich Dad Retirement.")}
          ${p("Here's what you'll get from us:")}
          ${ul([
            "Weekly gold & silver market updates",
            "Breaking news that affects your retirement",
            "New guides and calculator tools",
          ])}
          ${p("We publish for one audience: hardworking Americans who saved smart and want to protect what they've built. No Wall Street jargon. No generic advice. Just facts.")}
          ${hr()}
          ${p("<strong>Start here</strong> — our 3 most popular resources:")}
          ${ul([
            `<a href="${SITE}/learn/what-is-gold-ira" style="color:#B22234;text-decoration:underline;">What Is a Gold IRA? (Complete Guide)</a>`,
            `<a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Best Gold IRA Companies Ranked for 2026</a>`,
            `<a href="${SITE}/tools/gold-ira-calculator" style="color:#B22234;text-decoration:underline;">Gold IRA Calculator</a>`,
          ])}
          ${p("See you in your inbox,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Visit richdadretirement.com →",
        ctaUrl: utmLink(SITE, "newsletter-welcome", 0),
      }),
    },
    {
      step: 1,
      delayDays: 3,
      subject: "The guide Wall Street hopes you never read",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "newsletter-welcome",
        preheader: "Chapter 9 alone could save you $10,000+. It's free.",
        body: `
          ${h2(`${firstName ? `Hey ${firstName}` : "Hey"},`)}
          ${p("Our most popular resource is the 2026 Gold IRA Protection Guide.")}
          ${p("It covers:")}
          ${ul([
            "Why $36 trillion in national debt threatens your savings",
            "How a Gold IRA rollover works (step by step)",
            "The real fees — what's fair vs. a ripoff",
            "Scams to avoid (Chapter 9 alone is worth it)",
            "10 questions to ask any Gold IRA company",
            "Our honest company rankings",
          ])}
          ${p("It's free. No credit card. No phone call required.")}
          ${p("We built it because we got tired of seeing retirees get ripped off by shady gold companies.")}
        `,
        ctaText: "Download the Free Guide →",
        ctaUrl: utmLink(`${SITE}/guide/free`, "newsletter-welcome", 1),
      }),
    },
    {
      step: 2,
      delayDays: 7,
      subject: "$36,000,000,000,000",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "newsletter-welcome",
        preheader: "This number just hit a record. Here's what it means for your 401(k).",
        body: `
          ${p(`${firstName || "Hey"}, here's a number: <strong>$36 trillion.</strong>`)}
          ${p("That's the U.S. national debt. It was $10 trillion in 2008. $20 trillion in 2017. $36 trillion today.")}
          ${p("When the government owes this much, they have two options:")}
          ${ul([
            "Raise taxes (your retirement income gets hit)",
            "Print more dollars (your savings lose purchasing power)",
          ])}
          ${p("Both options hurt savers. Both are already happening.")}
          ${p("Gold doesn't care about government debt. Gold can't be printed. Gold has held its value for 5,000 years — through every empire, every currency collapse, every financial crisis.")}
          ${p("That's why more Americans are adding gold to their retirement accounts. Not as a get-rich scheme. As insurance.")}
          ${p("If you want to learn more, our free guide covers everything:")}
        `,
        ctaText: "Get the Free Gold IRA Guide →",
        ctaUrl: utmLink(`${SITE}/guide/free`, "newsletter-welcome", 2),
      }),
    },
  ],
};

// ============================================
// SEQUENCE 2 — Guide Follow-Up
// Trigger: Guide LP form submit (name + email, no phone)
// Goal: Build trust → convert to full lead at /get-started
// 5 emails over 16 days
// ============================================

const guideNurture: Sequence = {
  id: "guide-nurture",
  name: "Guide Follow-Up",
  description: "Nurtures guide downloaders toward full lead submission",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "Your guide is ready (start with Ch. 9)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "guide-nurture",
        preheader: "The chapter on scams alone could save you thousands.",
        body: `
          ${p(`${firstName || "Hey"}, here's your guide.`)}
          ${p("We built the 2026 Gold IRA Protection Guide because every American deserves straight answers about protecting their retirement. No sales pitch. Just facts.")}
          ${p("<strong>Here's what's inside:</strong>")}
          ${ul([
            "Why $36 trillion in national debt threatens your 401(k)",
            "How a Gold IRA rollover actually works (step by step)",
            "The real fees — what's fair and what's a ripoff",
            "Which companies we'd trust with our own money",
            "10 questions to ask before you sign anything",
          ])}
          ${p("Read it when you have 15 minutes. Chapter 9 (Scams to Avoid) is worth the read alone — it could save you thousands.")}
          ${p("Talk soon,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Download Your Free Guide →",
        ctaUrl: GUIDE_PDF,
      }),
    },
    {
      step: 1,
      delayDays: 3,
      subject: "The $47,000 difference nobody talks about",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "guide-nurture",
        preheader: "Some companies charge 3%. Others charge 50%. Same gold.",
        body: `
          ${p(`${firstName || "Hey"}, quick follow-up on your guide.`)}
          ${p("Chapter 4 breaks down exactly what Gold IRA companies charge. Most people are shocked at the range.")}
          ${p("Some companies charge 3-5% over spot price. Others charge 20-50%. That's not a typo. On a $100,000 rollover, that's the difference between $3,000 in fees and $50,000.")}
          ${p("<strong>Here's the short version:</strong>")}
          ${ul([
            "<strong>Fair markup:</strong> 3-8% over spot price",
            "<strong>Red flag:</strong> Anything over 15%",
            "<strong>Walk away:</strong> \"Rare\" coins pushed at huge premiums",
          ])}
          ${p("If you haven't read the guide yet, no rush. It'll be waiting for you.")}
          ${p("— The Rich Dad Retirement Team")}
          ${p("P.S. If you're curious what your savings could look like with gold, our calculator does the math in 60 seconds.")}
        `,
        ctaText: "Try the Gold IRA Calculator →",
        ctaUrl: utmLink(`${SITE}/tools/gold-ira-calculator`, "guide-nurture", 1),
      }),
    },
    {
      step: 2,
      delayDays: 7,
      subject: "15 companies reviewed. 3 made our list.",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "guide-nurture",
        preheader: "We called every one. Here's who passed.",
        body: `
          ${p(`${firstName || "Hey"}, if you're comparing Gold IRA companies, we did the work for you.`)}
          ${p("We reviewed 15+ companies on fees, BBB ratings, customer reviews, minimum investments, and how they treat people on the phone.")}
          ${p("<strong>Here's the short version:</strong>")}
          ${h2("#1 Augusta Precious Metals")}
          ${ul([
            "A+ BBB, zero complaints in 6+ years",
            "Zero fees for up to 10 years on qualifying accounts",
            "Harvard-trained economist on staff",
            "$50,000 minimum",
          ])}
          ${h2("#2 Goldco")}
          ${ul([
            "A+ BBB, strong reviews",
            "$25,000 minimum",
            "Good for mid-range investors",
          ])}
          ${h2("#3 Noble Gold")}
          ${ul([
            "A+ BBB, lowest minimum ($2,000)",
            "Great for getting started",
          ])}
          ${p("The full comparison with fee tables, real customer experiences, and detailed breakdowns is on our site.")}
        `,
        ctaText: "Read the Full Comparison →",
        ctaUrl: utmLink(`${SITE}/best-gold-ira-companies`, "guide-nurture", 2),
      }),
    },
    {
      step: 3,
      delayDays: 11,
      subject: "Two phone calls. 12 days. Done.",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "guide-nurture",
        preheader: "Jennifer expected a nightmare. Here's what actually happened.",
        body: `
          ${p(`${firstName || "Hey"}, one of the biggest questions we hear: "What do people actually think AFTER they've done the rollover?"`)}
          ${p("Fair question. Here's what verified customers told us:")}
          ${p("<em>\"I expected it to be a nightmare — tons of paperwork, hidden fees, the whole nine yards. Augusta made it shockingly easy. Two phone calls and my 401k was rolled over in 12 days. No taxes. No penalties.\"</em><br>— Jennifer H., retired nurse, Ohio")}
          ${p("<em>\"My advisor told me I was crazy. Then gold went up 27% the next year and my 'safe' bond fund lost 8%. I stopped taking his calls.\"</em><br>— Mike T., retired trucker, Texas")}
          ${p("<em>\"I only moved 15% of my savings into gold. That's it. But knowing that 15% can't be wiped out by a market crash lets me sleep at night.\"</em><br>— Barbara K., retired teacher, Florida")}
          ${p("If you want to find out which company is right for YOUR situation, our free matching tool takes about 2 minutes.")}
        `,
        ctaText: "Find Your Match →",
        ctaUrl: utmLink(`${SITE}/get-started`, "guide-nurture", 3),
      }),
    },
    {
      step: 4,
      delayDays: 16,
      subject: "Your complete Gold IRA toolkit (bookmark this)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "guide-nurture",
        preheader: "Your guide, our reviews, 43 calculators — all here.",
        body: `
          ${p(`${firstName || "Hey"}, this is the last email in this series.`)}
          ${p("You downloaded our Gold IRA Protection Guide. You now know more about gold, IRAs, fees, and scams than 95% of Americans.")}
          ${p("<strong>Here's everything in one place:</strong>")}
          ${ul([
            `<a href="${GUIDE_PDF}" style="color:#B22234;text-decoration:underline;">Your guide (PDF)</a>`,
            `<a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Company reviews</a>`,
            `<a href="${SITE}/tools" style="color:#B22234;text-decoration:underline;">Calculators</a>`,
            `<a href="${SITE}/get-started" style="color:#B22234;text-decoration:underline;">Find your match</a>`,
          ])}
          ${p("Whatever you decide, that's your call. We built this site because every hardworking American who saved smart deserves honest info.")}
          ${p(`If you ever want a free info call with a Gold IRA specialist, Augusta's number is <strong>${AUGUSTA_PHONE}</strong>. 15 minutes, purely educational.`)}
          ${p("Wishing you a retirement you've earned,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Find Your Match →",
        ctaUrl: utmLink(`${SITE}/get-started`, "guide-nurture", 4),
      }),
    },
  ],
};

// ============================================
// SEQUENCE 3 — Augusta Support (High Intent)
// Trigger: Lead form, $50k+ savings
// CRITICAL: Lead ALREADY sent to Augusta via webhook.
//   → CTAs = phone number + site links, NEVER Augusta LP affiliate links
// Goal: Get them to ANSWER the Augusta call
// 7 emails over 21 days
// ============================================

const highIntent: Sequence = {
  id: "high-intent",
  name: "Augusta Support",
  description: "Supports Augusta call for $50k+ leads — NEVER uses Augusta affiliate links",
  emails: [
    // ===================================================
    // WINDOW 1 — Call Prep (Hours 0-72)
    // ===================================================

    // Step 0: Immediate — guide delivery + expect-a-call callout
    {
      step: 0,
      delayDays: 0,
      subject: "{{firstName}}, your guide is ready + Augusta is calling",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Augusta will call within 24hrs. 15 minutes, zero obligation.",
        body: `
          ${p(`${firstName || "Hey"}, you're in. Here's what's happening right now.`)}
          ${h2("Your Free Guide")}
          ${p(`Download the 2026 Gold IRA Protection Guide below. Start with Chapter 10 — it has the 10 questions to ask your Augusta specialist.`)}
          ${h2("Expect a Call")}
          ${callout(`<strong>Augusta will call within 24 hours from ${AUGUSTA_PHONE}.</strong> 15 minutes, purely educational. Please answer even if you don't recognize the number.`, "warning")}
          ${h2("2-Minute Prep")}
          ${ul([
            "Know your total savings (rough number is fine)",
            "Know where it's held (Fidelity, Vanguard, employer plan, etc.)",
            "Have one question ready (Chapter 10 has 10 good ones)",
          ])}
          ${p(`Augusta has an A+ BBB rating with zero complaints in 7+ years. They didn't get there by being pushy.`)}
          ${p("Talk soon,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Download Your Free Guide (PDF) →",
        ctaUrl: GUIDE_PDF,
      }),
    },

    // Step 1: ~4 hours later — minute-by-minute call preview
    {
      step: 1,
      delayDays: 0.17, // ~4 hours (0.17 * 24 = 4.08hrs)
      subject: "Your call with Augusta — what to expect (minute by minute)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "No surprises. Here's the exact 15-minute agenda.",
        body: `
          ${p(`${firstName || "Hey"}, your Augusta specialist will be reaching out soon. Here's exactly what the call looks like — no surprises:`)}
          ${callout(`<strong>Heads up:</strong> The call may come from a number you don't recognize. If you get a call in the next 24 hours and you're not sure — <strong>pick up.</strong> It's your Augusta specialist with a free info call about how a Gold IRA works.`, "info")}
          ${h2("Minute 1-3: Your Situation")}
          ${p("They'll ask about your savings — how much, where it's held, when you're planning to retire. They don't need account numbers.")}
          ${h2("Minute 4-8: Education")}
          ${p("They'll explain how a Gold IRA rollover works, the IRS rules, and what it actually costs. This is the part most people find valuable <em>even if they don't move forward.</em>")}
          ${h2("Minute 9-12: Your Questions")}
          ${p("Your turn. Ask anything. The 10 questions from your guide are perfect here.")}
          ${h2("Minute 13-15: Next Steps (only if YOU want)")}
          ${p("If you want to proceed, they'll explain the paperwork. If not, they'll say thanks and mean it.")}
          ${hr()}
          ${p("<strong>Bottom line:</strong> Nobody will pressure you. Nobody will call you 47 times afterward. Augusta has zero BBB complaints in 7+ years — they don't operate that way.")}
          ${p(`P.S. If your spouse or partner has questions too, they're welcome to join the call. Many couples do.`)}
        `,
        ctaText: "Review Your Guide Before the Call →",
        ctaUrl: GUIDE_PDF,
      }),
    },

    // Step 2: ~18 hours — short urgent reminder
    {
      step: 2,
      delayDays: 0.75, // ~18 hours (0.75 * 24 = 18hrs)
      subject: "Quick heads up — Augusta may call today",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: `Look for ${AUGUSTA_PHONE} on your caller ID today.`,
        body: `
          ${p(`${firstName || "Hey"}, quick heads up.`)}
          ${p(`Augusta's team may reach out today. The number is <strong>${AUGUSTA_PHONE}</strong>.`)}
          ${p("If you see it — pick up. 15 minutes. They'll explain exactly how a Gold IRA works for your situation.")}
          ${p(`If you miss it, you can always call them back at the same number:`)}
          ${p(`<strong><a href="tel:${AUGUSTA_PHONE.replace(/-/g, "")}" style="color:#B22234;text-decoration:underline;font-size:18px;">&#128222; ${AUGUSTA_PHONE}</a></strong>`)}
        `,
        ctaText: `Call Augusta Directly: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },

    // Step 3: Day 2 — check-in with status tracking
    {
      step: 3,
      delayDays: 2,
      subject: "Quick check-in — did you connect with Augusta?",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Connected? Missed the call? Still thinking? All good.",
        body: `
          ${p(`${firstName || "Hey"}, quick check-in. By now your Augusta specialist should have reached out. How did it go?`)}
          ${h2("→ Yes, We Connected")}
          ${p(`<a href="${SITE}/api/email/status?action=connected&email=${encodeURIComponent(email)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Click here to let us know</a> — Great! If you have follow-up questions, reply to this email. We read every response.`)}
          ${h2("→ Not Yet / Missed the Call")}
          ${p(`<a href="${SITE}/api/email/status?action=not-connected&email=${encodeURIComponent(email)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Click here</a> — No problem. You can call Augusta directly at <strong>${AUGUSTA_PHONE}</strong> or just wait — they'll try again.`)}
          ${h2("→ Still Thinking It Over")}
          ${p(`Completely normal. Most people who end up moving forward took a few weeks to decide. There's no rush — your free info call with Augusta stays open. When you're ready, call them at <strong>${AUGUSTA_PHONE}</strong>.`)}
          ${hr()}
          ${p("Either way, you've done more research than 95% of people. That puts you in a strong position.")}
        `,
        ctaText: `Call Augusta Directly: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },

    // Step 4: Day 3 — address #1 objection: "Is this legit?"
    {
      step: 4,
      delayDays: 3,
      skipIfConnected: true,
      subject: "Most people who hesitate have the same question",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "The #1 reason people don't answer Augusta's call — and why they should.",
        body: `
          ${p(`${firstName || "Hey"}, the most common reason people don't answer Augusta's call isn't that they're not interested — it's that they're worried it's a scam.`)}
          ${p("Fair concern. Here's the reality:")}
          ${ul([
            "<strong>Zero</strong> BBB complaints in 7+ years",
            "A+ BBB rating",
            "10+ year track record serving retirees",
            "Harvard-trained economist on staff",
            "No high-pressure sales (their reputation depends on it)",
          ])}
          ${quote("I almost didn't answer. Glad I did. The guy knew more about retirement than my financial advisor.", "Mike T., retired truck driver, Ohio")}
          ${p("If you want to see our full breakdown — fees, ratings, real customer experiences — it's all on our review page.")}
        `,
        ctaText: "Read Our Full Augusta Review →",
        ctaUrl: utmLink(`${SITE}/reviews/augusta-precious-metals`, "high-intent", 4),
      }),
    },

    // ===================================================
    // WINDOW 2 — Education & Trust (Days 5-14)
    // ===================================================

    // Step 5: Day 5 — what your advisor won't tell you
    {
      step: 5,
      delayDays: 5,
      skipIfConnected: true,
      subject: "What your advisor won't tell you about gold",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "It's not their fault — it's just not their specialty.",
        body: `
          ${p(`${firstName || "Hey"}, here's something worth knowing while you're weighing your options.`)}
          ${p("Financial advisors are great at stocks and bonds. But most aren't trained in physical precious metals. That's not their fault — it's just not their specialty.")}
          ${p("Augusta's team specializes in ONE thing: helping retirees understand how gold fits their situation. That's why their education call is so valuable — even if you decide gold isn't for you.")}
          ${h2("What the Data Says")}
          ${p("Independent advisors (fee-only, no commissions) recommend <strong>10-25% allocation to gold</strong> as a hedge against inflation and market volatility.")}
          ${p("Not 100%. Not 50%. Just enough to protect what you've built.")}
          ${p("Curious what that looks like for your savings? Our calculator does the math in 60 seconds.")}
        `,
        ctaText: "See Your Personalized Numbers →",
        ctaUrl: utmLink(`${SITE}/tools/gold-ira-calculator`, "high-intent", 5),
      }),
    },

    // Step 6: Day 8 — 3 retirees, 3 stories
    {
      step: 6,
      delayDays: 8,
      skipIfConnected: true,
      subject: "3 retirees, 3 stories, 1 regret",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "They all agree on one thing: the 15-minute call was worth it.",
        body: `
          ${p(`${firstName || "Hey"}, sometimes the best way to explain something is to let real people do the talking.`)}
          ${quote("My pension covers bills, but gold is my 'sleep at night' money. Up 40% since I started. I moved $80k in 2021 and haven't looked back.", "Linda, retired teacher, Ohio")}
          ${quote("My wife was skeptical. She joined the Augusta call with me. By minute 8, she was asking more questions than I was. We moved $120k.", "Dave, retired truck driver, Texas")}
          ${quote("I kept telling myself next year. Then 2022 happened and my target-date fund dropped 22%. I finally called Augusta, but I wish I'd done it when I first thought about it.", "Carol, retired nurse, Florida")}
          ${p("Three people. Three different situations. But they all agree on one thing: the 15-minute call was worth it.")}
        `,
        ctaText: `Your free call is still open: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },

    // Step 7: Day 12 — spouse's top 3 questions
    {
      step: 7,
      delayDays: 12,
      skipIfConnected: true,
      subject: "Your spouse's top 3 questions (answered)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "If one of you is interested and the other isn't sure — read this together.",
        body: `
          ${p(`${firstName || "Hey"}, if you're like most couples, one of you is interested in gold and the other isn't sure. Here are the 3 questions we hear most from the skeptical spouse:`)}
          ${h2("Q1: Is our money safe?")}
          ${p("Yes. Gold is stored in IRS-approved depositories, fully insured, and segregated in your name. Even if the gold IRA company goes bankrupt, your gold is yours. It's held by a third-party custodian — completely separate.")}
          ${h2("Q2: What are the real fees?")}
          ${p("Typical total: <strong>$330-$450/year</strong> (storage + custodian). Augusta waives setup fees for qualifying accounts. Compare that to the 1-2% your mutual fund charges on your <em>entire</em> balance every year.")}
          ${h2("Q3: Can we get our money back if we change our minds?")}
          ${p("Yes. You can sell your gold back (Augusta has a buyback program) or take physical delivery after 59&frac12;. It's YOUR gold in YOUR name.")}
          ${hr()}
          ${p("P.S. Augusta welcomes couples on their calls. Many of their best clients started with a skeptical spouse.")}
        `,
        ctaText: `Schedule a Call Together: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },

    // ===================================================
    // WINDOW 3 — Final Push (Days 18-28)
    // ===================================================

    // Step 8: Day 18 — gold vs cash performance
    {
      step: 8,
      delayDays: 18,
      skipIfConnected: true,
      subject: "Gold is up 22% this year. Your savings account earned 0.5%.",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Every month in cash, inflation takes another bite. Here's the math.",
        body: `
          ${p(`${firstName || "Hey"}, here's a side-by-side comparison that tells the whole story:`)}
          ${statRow([
            { label: "Gold", value: "+22% YTD" },
            { label: "S&P 500", value: "+8%" },
            { label: "Savings Account", value: "+0.5%" },
            { label: "Inflation", value: "-4.2%" },
          ])}
          ${p("Every month your savings sit in cash, inflation takes another bite. $100,000 in January is worth about $96,500 in purchasing power today.")}
          ${p("This isn't fear-mongering — it's math. And gold has beaten inflation in 48 of the last 55 years.")}
          ${p("Curious what your specific savings could look like with gold vs. cash over the next 5-10 years?")}
        `,
        ctaText: "See What Your Savings Could Look Like →",
        ctaUrl: utmLink(`${SITE}/tools/gold-vs-cash-calculator`, "high-intent", 8),
      }),
    },

    // Step 9: Day 23 — demystify the process
    {
      step: 9,
      delayDays: 23,
      skipIfConnected: true,
      subject: "What happens in the first 2 weeks after you say yes",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "2 weeks. 3 forms. Here's the full timeline.",
        body: `
          ${p(`${firstName || "Hey"}, one of the biggest reasons people delay is they assume the process is complicated. It's not. Here's exactly what happens:`)}
          ${h2("Day 1")}
          ${p("You and Augusta complete the paperwork. They handle everything — you sign 3 forms.")}
          ${h2("Day 2-3")}
          ${p("Your old custodian initiates the direct transfer. No taxes, no penalties.")}
          ${h2("Day 5-7")}
          ${p("Funds arrive. Your Augusta advisor helps you choose your metals.")}
          ${h2("Day 7-10")}
          ${p("Gold is purchased at market price and shipped to your depository.")}
          ${h2("Day 10-14")}
          ${p("Your metals are received, verified, and stored in your name. You get confirmation.")}
          ${hr()}
          ${p("That's it. 2 weeks. 3 forms. And your retirement has a layer of protection it didn't have before.")}
        `,
        ctaText: `Start the Process: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },

    // Step 10: Day 28 — final email with full toolkit
    {
      step: 10,
      delayDays: 28,
      skipIfConnected: true,
      subject: "Last email — your toolkit + one question",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Everything you need, all in one place. Plus one question to think about.",
        body: `
          ${p(`${firstName || "Hey"}, this is the last planned email in this series. Here's everything you need, all in one place:`)}
          ${ul([
            `<a href="${GUIDE_PDF}" style="color:#B22234;text-decoration:underline;">Free guide (PDF)</a>`,
            `<a href="${utmLink(`${SITE}/best-gold-ira-companies`, "high-intent", 10)}" style="color:#B22234;text-decoration:underline;">Company reviews</a>`,
            `<a href="${utmLink(`${SITE}/tools`, "high-intent", 10)}" style="color:#B22234;text-decoration:underline;">Calculators</a>`,
            `Your free Augusta call: <a href="tel:${AUGUSTA_PHONE.replace(/-/g, "")}" style="color:#B22234;text-decoration:underline;font-weight:bold;">${AUGUSTA_PHONE}</a>`,
          ])}
          ${hr()}
          ${p("One question to think about:")}
          ${callout(`Gold was $1,800 two years ago. It's over $5,300 today. If you'd moved 15% of your savings into gold back then, how much further ahead would you be?<br><br>Your free consultation with Augusta is still open. When you're ready: <strong>${AUGUSTA_PHONE}</strong>`)}
          ${p("Wishing you the retirement you've earned,<br><strong>The Rich Dad Retirement Team</strong>")}
          ${p(`P.S. You'll still receive our weekly market digest with gold prices and retirement tips. If you ever want to revisit gold, we'll be here.`)}
        `,
        ctaText: `Call Augusta — Free Consultation: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },
  ],
};

// ============================================
// SEQUENCE 4 — Mid-Tier Nurture
// Trigger: Lead form, $25k-$50k savings
// Goal: Route to Goldco ($25k min) or American Hartford ($10k min)
// 5 emails over 16 days
// ============================================

const midNurture: Sequence = {
  id: "mid-nurture",
  name: "The Consideration Path",
  description: "Routes $25k-$50k leads to Goldco/AHG",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "{{firstName}}, your guide + the company we'd pick",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "mid-nurture",
        preheader: "Based on your range, one company stands out. Here's why.",
        body: `
          ${p(`${firstName || "Hey"}, welcome to Rich Dad Retirement.`)}
          ${p("<strong>Here's your free 2026 Gold IRA Protection Guide:</strong>")}
          ${p(`<a href="${GUIDE_PDF}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Download Your Free Guide (PDF) →</a>`)}
          ${hr()}
          ${p("And here's something specific to you:")}
          ${p("Based on your savings level, <strong>your best match is Goldco.</strong>")}
          ${p("<strong>Why Goldco:</strong>")}
          ${ul([
            "$25,000 minimum — fits your range perfectly",
            "A+ BBB rating, trusted by 20,000+ Americans",
            "Free precious metals on qualifying accounts",
            "Strong buyback program when you're ready to sell",
            "No high-pressure sales",
          ])}
          ${quote("I was nervous about the minimums. Goldco made it easy — started with $25k, the whole process took two weeks. No surprises, no pressure.", "Patricia R., retired office manager, Georgia")}
          ${p("Click below to request Goldco's free info kit. They'll walk you through how a Gold IRA works for your situation — it's educational, not a sales pitch.")}
          ${p("— The Rich Dad Retirement Team")}
        `,
        ctaText: "Learn More About Goldco →",
        ctaUrl: GOLDCO_LP,
      }),
    },
    {
      step: 1,
      delayDays: 3,
      subject: "The $300/month strategy nobody mentions",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "mid-nurture",
        preheader: "$25k now + $300/month = $35,800 in gold by year 3.",
        body: `
          ${p(`${firstName || "Hey"}, here's something most Gold IRA sites won't tell you: you don't need $50,000 to get meaningful protection.`)}
          ${h2("The Dollar-Cost Averaging Approach")}
          ${ul([
            "<strong>Start:</strong> Open your Gold IRA with $10,000-$25,000",
            "<strong>Monthly:</strong> Add $200-$500 from each paycheck",
            "<strong>Annually:</strong> Use your IRA contribution limit ($7,000/yr, $8,000 if 50+)",
            "<strong>Windfalls:</strong> Tax refunds, bonuses → straight to gold",
          ])}
          ${p("<strong>Here's what that looks like:</strong>")}
          ${ul([
            "Year 1: $25,000 + ($300 x 12) = $28,600",
            "Year 2: $28,600 + ($300 x 12) = $32,200",
            "Year 3: $32,200 + ($300 x 12) = $35,800",
            "(Plus any gold price appreciation)",
          ])}
          ${p("In 3 years, you'd have a meaningful gold position — and you could even qualify for Augusta's premium services at that point.")}
          ${p("The key: start with what you have. Build from there.")}
        `,
        ctaText: "Start with Goldco ($25k min) →",
        ctaUrl: GOLDCO_LP,
      }),
    },
    {
      step: 2,
      delayDays: 7,
      subject: "Augusta vs Goldco (honest take for your range)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "mid-nurture",
        preheader: "Both are A+ rated. But one fits your savings level better.",
        body: `
          ${p(`${firstName || "Hey"}, you might be wondering: should I stretch for Augusta or go with Goldco?`)}
          ${p("<strong>Here's the honest comparison:</strong>")}
          ${h2("Augusta Precious Metals")}
          ${ul([
            "Best-in-class education and transparency",
            "Harvard-trained economist on staff",
            "Zero fees for up to 10 years",
            "$50,000 minimum (firm)",
          ])}
          ${p("<em>Best for: Investors with $50k+ who want premium service</em>")}
          ${h2("Goldco")}
          ${ul([
            "Lower minimum ($25,000)",
            "Free precious metals on qualifying accounts",
            "A+ BBB, strong track record",
            "More flexible for mid-range investors",
          ])}
          ${p("<em>Best for: Your savings level — great service, accessible minimums</em>")}
          ${h2("American Hartford Gold")}
          ${ul([
            "Even lower minimum ($10,000)",
            "Price match guarantee",
            "Family-owned, personal service",
          ])}
          ${p("<em>Best for: If you want to start even smaller</em>")}
          ${hr()}
          ${p("Our recommendation: <strong>Goldco is the sweet spot for your range.</strong> Strong reputation, reasonable minimums, and no pressure.")}
          ${p("If your savings grow past $50k later, you can always add an Augusta account for their premium services.")}
        `,
        ctaText: "Get Goldco's Free Kit →",
        ctaUrl: GOLDCO_LP,
      }),
    },
    {
      step: 3,
      delayDays: 11,
      subject: "4 moves that accelerate your retirement",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "mid-nurture",
        preheader: "Catch-up contributions, old 401(k)s, Roth conversions + one more.",
        body: `
          ${p(`${firstName || "Hey"}, while you're building your gold position, here are 4 ways to accelerate your retirement savings:`)}
          ${h2("1. Max Your Catch-Up Contributions")}
          ${p("If you're 50+, you can contribute $8,000/year to your IRA (vs the normal $7,000). That extra $1,000/year = $10,000+ over a decade.")}
          ${h2("2. Consolidate Old 401(k)s")}
          ${p("Have a forgotten 401(k) from a previous job? Roll it into your Gold IRA. Stop paying fees on accounts you're not watching.")}
          ${h2("3. Consider a Roth Conversion")}
          ${p("If you expect higher tax rates in retirement (most experts do, given $36T in debt), converting some funds to a Roth Gold IRA could save you thousands in taxes later.")}
          ${h2("4. Diversify Across Metals")}
          ${p("Silver is undervalued relative to gold right now. A 70/30 gold/silver split gives you more upside potential.")}
          ${hr()}
          ${p("These aren't tricks. They're the same strategies financial planners use for their own accounts.")}
        `,
        ctaText: "Explore Our Free Calculators →",
        ctaUrl: utmLink(`${SITE}/tools`, "mid-nurture", 3),
      }),
    },
    {
      step: 4,
      delayDays: 16,
      subject: "Your Gold IRA starter kit (save this)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "mid-nurture",
        preheader: "Guide, company match, 43 calculators — all bookmarked for you.",
        body: `
          ${p(`${firstName || "Hey"}, this is the last email in this series.`)}
          ${p("<strong>Your complete resource kit:</strong>")}
          ${ul([
            `<a href="${GUIDE_PDF}" style="color:#B22234;text-decoration:underline;">Your Guide</a> — Gold IRA Protection Guide`,
            `<a href="${GOLDCO_LP}" style="color:#B22234;text-decoration:underline;">Your Match</a> — Goldco ($25,000 minimum)`,
            `<a href="${SITE}/tools" style="color:#B22234;text-decoration:underline;">Calculators</a> — 43 free tools`,
            `<a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Reviews</a> — Full company comparison`,
          ])}
          ${p("The size of your first investment doesn't matter. What matters is that you start protecting what you've built.")}
          ${p("Visit us anytime at richdadretirement.com. We publish daily.")}
          ${p("Wishing you a secure retirement,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Get Goldco's Free Kit →",
        ctaUrl: GOLDCO_LP,
      }),
    },
  ],
};

// ============================================
// SEQUENCE 5 — Starter Nurture
// Trigger: Lead form, <$25k savings
// Goal: Route to Noble Gold ($2k minimum)
// 5 emails over 16 days
// ============================================

const starterNurture: Sequence = {
  id: "starter-nurture",
  name: "The Starter Path",
  description: "Routes <$25k leads to Noble Gold",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "You can start protecting your savings today",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-nurture",
        preheader: "Lowest minimum in the industry: $2,000. Here's your match.",
        body: `
          ${p(`${firstName || "Hey"}, welcome to Rich Dad Retirement.`)}
          ${p("<strong>First — your free 2026 Gold IRA Protection Guide:</strong>")}
          ${p(`<a href="${GUIDE_PDF}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Download Your Free Guide (PDF) →</a>`)}
          ${hr()}
          ${p("Now, here's something important: a lot of Gold IRA sites only talk to people with $100k+. We don't. Every saver deserves protection.")}
          ${h2("Your Best Match: Noble Gold Investments")}
          ${ul([
            "Start with as little as $2,000",
            "A+ BBB rating, thousands of 5-star reviews",
            "Fast account setup",
            "No high-pressure sales",
          ])}
          ${quote("I started with just $3,000. Noble Gold treated me the same as if I'd walked in with $300,000. Two weeks later, I had real gold in a real vault. Best decision I've made.", "Tony M., retired machinist, Indiana")}
          ${p("Noble Gold has the lowest minimum in the entire industry. Start with what you have and build from there.")}
          ${p("— The Rich Dad Retirement Team")}
        `,
        ctaText: "Explore Noble Gold →",
        ctaUrl: NOBLE_LP,
      }),
    },
    {
      step: 1,
      delayDays: 3,
      subject: "$200/month → $15,800 in gold by year 3",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-nurture",
        preheader: "The math behind small, consistent moves. It works.",
        body: `
          ${p(`${firstName || "Hey"}, here's a strategy that works at any savings level:`)}
          ${ul([
            "<strong>Month 1:</strong> Open your Gold IRA with $2,000-$5,000",
            "<strong>Monthly:</strong> Add $200-$500 from each paycheck",
            "<strong>Annually:</strong> Use your IRA contribution ($7,000/yr, $8,000 if 50+)",
            "<strong>Windfalls:</strong> Tax refunds, bonuses → straight to gold",
          ])}
          ${p("<strong>Here's what that looks like:</strong>")}
          ${ul([
            "Year 1: $5,000 + ($300 x 12) = $8,600",
            "Year 2: $8,600 + ($300 x 12) = $12,200",
            "Year 3: $12,200 + ($300 x 12) = $15,800",
            "(Plus any gold price appreciation)",
          ])}
          ${p("In 3 years, you'll have a meaningful gold position. And you didn't have to stretch yourself thin to get it.")}
          ${p("<strong>The key is starting. Not starting big.</strong>")}
        `,
        ctaText: "Open Your Account — Starts at $2k →",
        ctaUrl: NOBLE_LP,
      }),
    },
    {
      step: 2,
      delayDays: 7,
      subject: "A $5k account gets the same respect as $500k",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-nurture",
        preheader: "That's rare in this industry. Here's the full picture on Noble Gold.",
        body: `
          ${p(`${firstName || "Hey"}, here's why we recommend Noble Gold:`)}
          ${ul([
            "$2,000 minimum — lowest in the industry",
            "A+ BBB rating, thousands of 5-star reviews",
            "Texas-based depository (not just Delaware)",
            "No high-pressure sales tactics",
            "Fast setup — most accounts funded in 2 weeks",
          ])}
          ${p("One thing we love: they don't make you feel small for starting small. A $5,000 account gets the same respect as a $500,000 account.")}
          ${hr()}
          ${p("As your gold position grows past $50k, you can explore Augusta for premium services. But for now, Noble Gold is where you want to be.")}
        `,
        ctaText: "Get Noble Gold's Free Kit →",
        ctaUrl: NOBLE_LP,
      }),
    },
    {
      step: 3,
      delayDays: 11,
      subject: "3 ways to build your gold position faster",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-nurture",
        preheader: "Old 401(k)s, catch-up contributions, and one smart trick.",
        body: `
          ${p(`${firstName || "Hey"}, starting small is smart. But here's how to build faster:`)}
          ${h2("1. Roll Over Forgotten 401(k)s")}
          ${p("Changed jobs in the last 20 years? You might have an old 401(k) sitting with a former employer — still paying fees, still exposed to the market. Roll it into your Gold IRA. Even a $5,000 old account makes a difference.")}
          ${h2("2. Use Your Annual IRA Limit")}
          ${p("You can contribute $7,000/year to your IRA ($8,000 if you're 50+). That's $667/month. Even half of that — $333/month — adds $4,000/year to your gold position.")}
          ${h2("3. Put Windfalls to Work")}
          ${p("Tax refund? Bonus? Inheritance? Instead of letting it sit in a savings account losing value to inflation, move it into gold. A $3,000 tax refund in gold today could be worth $4,500+ in 3 years.")}
          ${hr()}
          ${p("<strong>The key:</strong> you don't need to start big. You need to start consistent. Even $200/month changes your retirement picture.")}
        `,
        ctaText: "Explore Our Free Calculators →",
        ctaUrl: utmLink(`${SITE}/tools`, "starter-nurture", 3),
      }),
    },
    {
      step: 4,
      delayDays: 16,
      subject: "$2,000 today > $0 tomorrow (last email)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-nurture",
        preheader: "Your guide, your match, 43 calculators. All here.",
        body: `
          ${p(`${firstName || "Hey"}, this is the last email in this series.`)}
          ${p("<strong>Your complete resource kit:</strong>")}
          ${ul([
            `<a href="${GUIDE_PDF}" style="color:#B22234;text-decoration:underline;">Your Guide</a> — Gold IRA Protection Guide`,
            `<a href="${NOBLE_LP}" style="color:#B22234;text-decoration:underline;">Your Match</a> — Noble Gold (starts at $2,000)`,
            `<a href="${SITE}/tools" style="color:#B22234;text-decoration:underline;">Calculators</a> — 43 free tools`,
            `<a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Reviews</a> — Full company comparison`,
          ])}
          ${p("$2,000 in gold today is infinitely more protection than $0 tomorrow. Start when you're ready. We'll be here.")}
          ${p("Wishing you a secure retirement,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Start with Noble Gold →",
        ctaUrl: NOBLE_LP,
      }),
    },
  ],
};

// ============================================
// SEQUENCE 6 — Re-Engagement
// Trigger: 30 days after any sequence ends without conversion
// HTML built at SEND TIME for fresh content
// 3 emails over 10 days
// ============================================

const reEngage: Sequence = {
  id: "re-engage",
  name: "Re-Engagement",
  description: "Wins back cold leads 30+ days after sequence completion",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "$100k in gold 3 years ago → $155k today",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "re-engage",
        preheader: "Meanwhile, your savings account lost 15% to inflation.",
        body: `
          ${p(`${firstName || "Hey"}, it's been a while since we connected.`)}
          ${p("Gold has been making moves. Here's what that means in plain English: if you had moved $100,000 into gold three years ago, it would be worth roughly $155,000 today. Without dividends. Without compounding. Just the metal sitting in a vault.")}
          ${p("Meanwhile, every dollar in your savings account has lost about 15% of its purchasing power to inflation over the same period.")}
          ${p("If you've been thinking about protecting your retirement with gold but haven't taken the step — the information hasn't changed. Gold is still gold. And your savings still need protection.")}
        `,
        ctaText: "See Today's Gold Prices →",
        ctaUrl: utmLink(`${SITE}/tools/gold-price`, "re-engage", 0),
      }),
    },
    {
      step: 1,
      delayDays: 5,
      subject: "60 seconds. Your numbers. No login.",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "re-engage",
        preheader: "50,000+ people have used this calculator. Zero personal info needed.",
        body: `
          ${p(`${firstName || "Hey"}, we updated our Gold IRA Calculator for 2026.`)}
          ${p("<strong>In 60 seconds, you can see:</strong>")}
          ${ul([
            "What your savings could be worth in gold",
            "How different allocations (10%, 15%, 25%) affect your returns",
            "The impact of inflation on unprotected savings",
            "Side-by-side: stocks vs. gold vs. mixed portfolio",
          ])}
          ${p("Over 50,000 people have used it. It's free, takes one minute, and doesn't require any personal information.")}
          ${p("Sometimes seeing your own numbers is what makes it click.")}
        `,
        ctaText: "Try the Calculator →",
        ctaUrl: utmLink(`${SITE}/tools/gold-ira-calculator`, "re-engage", 1),
      }),
    },
    {
      step: 2,
      delayDays: 10,
      subject: "Last personal email from us",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "re-engage",
        preheader: "Everything bookmarked for you. Pick up whenever you're ready.",
        body: `
          ${p(`${firstName || "Hey"}, this is the last personal email from us.`)}
          ${p("You'll still get our regular newsletter with market updates and new guides. But no more one-on-one emails unless you take a new action on our site.")}
          ${p("<strong>If you ever want to pick up where you left off:</strong>")}
          ${ul([
            `<a href="${SITE}/guide/free" style="color:#B22234;text-decoration:underline;">Guide</a> — Free Gold IRA Protection Guide`,
            `<a href="${SITE}/tools" style="color:#B22234;text-decoration:underline;">Calculators</a> — 43 free tools`,
            `<a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Reviews</a> — Full company comparison`,
            `Free info call with Augusta: <strong>${AUGUSTA_PHONE}</strong> (15 min, educational)`,
          ])}
          ${p("All the best,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Visit richdadretirement.com →",
        ctaUrl: SITE,
      }),
    },
  ],
};

// ============================================
// SEQUENCE 7 — Content Nurture
// Trigger: Newsletter signup (replaces newsletter-welcome)
// Goal: 60-day journey from value → bridge → convert
// 13 emails: Layer 1 (value 0-4), Layer 2 (bridge 5-8), Layer 3 (convert 9-12)
// ============================================

const contentNurture: Sequence = {
  id: "content-nurture",
  name: "Content Nurture",
  description: "60-day value-first nurture: topic-matched content → inflation bridge → Augusta conversion",
  emails: [
    // === LAYER 1 — VALUE (Emails 0-4) ===
    {
      step: 0,
      delayDays: 0,
      subject: "Welcome — your resources are ready",
      buildHtml: (email, firstName, metadata) => {
        const theme = getThemeFromMetadata(metadata);
        const resources = getWelcomeResources(theme.theme);
        const resourceLinks = Array.isArray(resources)
          ? resources.map((r: { name: string; url: string; description: string }) =>
              `<a href="${utmLink(r.url.startsWith("http") ? r.url : SITE + r.url, "content-nurture", 0)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">${r.name}</a> — ${r.description}`
            )
          : [
              `<a href="${utmLink(SITE + "/learn/what-is-gold-ira", "content-nurture", 0)}" style="color:#B22234;text-decoration:underline;">What Is a Gold IRA?</a>`,
              `<a href="${utmLink(SITE + "/best-gold-ira-companies", "content-nurture", 0)}" style="color:#B22234;text-decoration:underline;">Best Gold IRA Companies 2026</a>`,
              `<a href="${utmLink(SITE + "/tools/gold-ira-calculator", "content-nurture", 0)}" style="color:#B22234;text-decoration:underline;">Gold IRA Calculator</a>`,
            ];
        return emailLayout({
          email,
          sequence: "content-nurture",
          preheader: `Your ${theme.displayName} resources — hand-picked for you.`,
          body: `
            ${h2(`Welcome${firstName ? `, ${firstName}` : ""} — your ${theme.displayName} resources`)}
            ${p("Thanks for joining Rich Dad Retirement. We publish for one audience: hardworking Americans who saved smart and want straight answers about protecting what they've built.")}
            ${p("<strong>Here are 3 resources matched to what you were reading:</strong>")}
            ${ul(resourceLinks)}
            ${hr()}
            ${p("<strong>Here's what you'll get from us:</strong>")}
            ${ul([
              "Weekly retirement tips and market updates",
              "New guides and calculator tools",
              "Honest company reviews — no paid placements",
            ])}
            ${p("No Wall Street jargon. No generic advice. Just facts.")}
            ${p("See you in your inbox,<br><strong>The Rich Dad Retirement Team</strong>")}
          `,
          ctaText: "Explore Your Resources →",
          ctaUrl: utmLink(SITE, "content-nurture", 0),
        });
      },
    },
    {
      step: 1,
      delayDays: 3,
      subject: "Your deep dive is ready",
      buildHtml: (email, firstName, metadata) => {
        const theme = getThemeFromMetadata(metadata);
        const deepDive = getTopicDeepDive(theme.theme);
        const subject = typeof deepDive === "object" && "subject" in deepDive ? deepDive.subject : "";
        const body = typeof deepDive === "object" && "body" in deepDive ? deepDive.body : (typeof deepDive === "string" ? deepDive : "");
        return emailLayout({
          email,
          sequence: "content-nurture",
          preheader: subject || "The guide our readers keep bookmarking.",
          body: `
            ${h2(`${firstName ? `${firstName}, this` : "This"} one's for you`)}
            ${typeof body === "string" ? body : p("We put together a deep dive on the topic you were researching. No fluff, no sales pitch — just the facts you need to make smart decisions.")}
            ${p("This is pure education. No gold pitch, no product push. Just the information you came looking for.")}
          `,
          ctaText: "Read the Full Guide →",
          ctaUrl: utmLink(SITE, "content-nurture", 1),
        });
      },
    },
    {
      step: 2,
      delayDays: 7,
      subject: "One more angle worth considering",
      buildHtml: (email, firstName, metadata) => {
        const theme = getThemeFromMetadata(metadata);
        const expansion = getTopicExpansion(theme.theme);
        const body = typeof expansion === "object" && "body" in expansion ? expansion.body : (typeof expansion === "string" ? expansion : "");
        return emailLayout({
          email,
          sequence: "content-nurture",
          preheader: "A broader look at what smart retirees are doing.",
          body: `
            ${h2(`${firstName ? `${firstName}, broadening` : "Broadening"} the picture`)}
            ${typeof body === "string" ? body : p("Last week we went deep on your topic. This week, we're zooming out — because retirement planning doesn't happen in a silo.")}
            ${p("The smartest retirees we talk to all have one thing in common: they diversify their knowledge before they diversify their money.")}
          `,
          ctaText: "Read More →",
          ctaUrl: utmLink(SITE, "content-nurture", 2),
        });
      },
    },
    {
      step: 3,
      delayDays: 10,
      subject: "The calculator 50,000 retirees have used",
      buildHtml: (email, firstName, metadata) => {
        const theme = getThemeFromMetadata(metadata);
        const calc = getRelevantCalculator(theme.theme);
        const calcName = typeof calc === "object" && "name" in calc ? calc.name : "Gold IRA Calculator";
        const calcUrl = typeof calc === "object" && "url" in calc ? calc.url : "/tools/gold-ira-calculator";
        const calcDesc = typeof calc === "object" && "description" in calc ? calc.description : "See what your savings could look like with gold protection.";
        const fullUrl = calcUrl.startsWith("http") ? calcUrl : SITE + calcUrl;
        return emailLayout({
          email,
          sequence: "content-nurture",
          preheader: "No login required. 60 seconds. Your real numbers.",
          body: `
            ${h2(`${firstName ? `${firstName}, try` : "Try"} this — takes 60 seconds`)}
            ${p(`Our <strong>${calcName}</strong> has been used by over 50,000 retirees. No login, no email required — just plug in your numbers and see the results.`)}
            ${p(calcDesc)}
            ${statRow([
              { label: "Time Required", value: "60 sec" },
              { label: "Personal Info", value: "None" },
              { label: "Americans Served", value: "50,000+" },
            ])}
            ${p("Most people are surprised by what they see. Some are relieved. Either way, knowing your numbers puts you in control.")}
          `,
          ctaText: "Try the Calculator →",
          ctaUrl: utmLink(fullUrl, "content-nurture", 3),
        });
      },
    },
    {
      step: 4,
      delayDays: 14,
      subject: "This month's most-read article",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "Read by 12,000+ people this month. Here's why.",
        body: `
          ${h2(`${firstName ? `${firstName}, this` : "This"} one struck a nerve`)}
          ${p("Every month, one article on our site takes off. This month, it's our breakdown of the real pros and cons of a Gold IRA — written for people who are skeptical, not sold.")}
          ${callout("Read by <strong>12,000+ people</strong> this month — our most-shared article of the quarter.", "info")}
          ${p("<strong>What's inside:</strong>")}
          ${ul([
            "The 5 genuine advantages of a Gold IRA (with real numbers)",
            "The 4 downsides nobody wants to talk about",
            "Who should consider one — and who shouldn't",
            "The break-even math: when gold makes sense vs. when it doesn't",
          ])}
          ${p("We wrote this because most Gold IRA content online is either a sales pitch or fear-mongering. This is neither. It's the honest breakdown we'd want if we were making this decision ourselves.")}
        `,
        ctaText: "Read the Article →",
        ctaUrl: utmLink(`${SITE}/gold-ira-pros-and-cons`, "content-nurture", 4),
      }),
    },

    // === LAYER 2 — BRIDGE (Emails 5-8) ===
    {
      step: 5,
      delayDays: 17,
      subject: "The one thing your retirement can't protect against",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "Your $100,000 now buys what $82,000 bought in 2020.",
        body: `
          ${h2(`${firstName ? `${firstName}, let's` : "Let's"} talk about the elephant in the room`)}
          ${p("Inflation.")}
          ${p("Not the kind they report on the news. The kind you feel every time you fill up your truck, buy groceries, or pay a medical bill.")}
          ${statRow([
            { label: "Saved in 2020", value: "$100,000" },
            { label: "Purchasing Power Today", value: "$82,000" },
            { label: "Lost to Inflation", value: "$18,000" },
          ])}
          ${p("That's not theory. That's the Bureau of Labor Statistics doing the math on your savings account.")}
          ${p("Your pension COLA gives you 2% per year. Real inflation — the kind that includes food, gas, and healthcare — runs 4-5%. Every year, you fall further behind.")}
          ${p("<strong>This isn't a pitch for anything.</strong> It's just math. And it's math that every retiree needs to understand before they can protect against it.")}
          ${p("We built a tool that shows exactly how inflation has eroded your specific savings. No login, no personal info.")}
        `,
        ctaText: "See What Inflation Has Cost You →",
        ctaUrl: utmLink(`${SITE}/tools/inflation-calculator`, "content-nurture", 5),
      }),
    },
    {
      step: 6,
      delayDays: 21,
      subject: "What 3 retirees did differently (and why it worked)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "A teacher, a truck driver, and a nurse walk into retirement...",
        body: `
          ${h2(`${firstName ? `${firstName}, three` : "Three"} real stories`)}
          ${p("We talk to retirees every week. Here are three who took different paths — and what happened.")}
          ${quote("After 2020, I added 15% gold to my IRA. My financial advisor told me I was being emotional. Two years later, my gold was up 40% while my bond fund was down 12%. I stopped feeling emotional about it.", "Linda, retired teacher, Ohio")}
          ${quote("When I retired at 62, I rolled my 401(k) into a Gold IRA. My buddies at the trucking company thought I was crazy. Then 2022 happened and their target-date funds dropped 25%. Mine held steady.", "Robert, truck driver, Texas")}
          ${quote("I didn't diversify. I trusted my target-date fund. During 2022, I lost 34% of my retirement savings. I was 64 years old. I didn't have time to wait for a recovery.", "Margaret, nurse, Florida")}
          ${hr()}
          ${p("Linda and Robert aren't financial geniuses. They just added one layer of protection that Margaret didn't. That's the whole difference.")}
          ${p("If you're curious how a Gold IRA actually works — the mechanics, the rules, the timeline — we wrote a plain-English guide.")}
        `,
        ctaText: "Learn How Gold IRAs Work →",
        ctaUrl: utmLink(`${SITE}/how-does-a-gold-ira-work`, "content-nurture", 6),
      }),
    },
    {
      step: 7,
      delayDays: 28,
      subject: "$100,000 in cash vs gold — the 10-year truth",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "One lost value. One gained. The numbers don't lie.",
        body: `
          ${h2(`${firstName ? `${firstName}, the` : "The"} 10-year comparison`)}
          ${p("We hear this question every day: <em>\"Is gold actually better than just keeping my money in the bank?\"</em>")}
          ${p("Here's the 10-year data:")}
          ${statRow([
            { label: "Cash (Savings Acct)", value: "$100k → $70k" },
            { label: "Gold (Physical)", value: "$100k → $215k" },
          ])}
          ${p("Cash didn't literally shrink — but $100,000 in a savings account now buys what $70,000 bought a decade ago. Inflation ate the rest.")}
          ${p("Gold went the other direction. Not because gold is magic. Because gold is scarce, and dollars aren't.")}
          ${h2("The honest downsides")}
          ${p("Gold isn't perfect. Here's what you give up:")}
          ${ul([
            "<strong>No dividends.</strong> Gold doesn't pay income. It just sits there.",
            "<strong>Higher fees.</strong> Gold IRAs cost more than a Vanguard index fund.",
            "<strong>Short-term volatility.</strong> Gold dropped 28% in 2013. It can go down.",
            "<strong>Lower liquidity.</strong> Selling takes days, not seconds.",
          ])}
          ${p("But over decades, gold has consistently done one thing that cash cannot: <strong>preserve purchasing power.</strong>")}
          ${p("A Gold IRA isn't a get-rich scheme. It's a keep-what-you-have strategy. And for retirees who can't afford to start over, that matters.")}
        `,
        ctaText: "See the Full Comparison →",
        ctaUrl: utmLink(`${SITE}/gold-ira-pros-and-cons`, "content-nurture", 7),
      }),
    },
    {
      step: 8,
      delayDays: 35,
      subject: "Gold IRA vs Traditional IRA — the honest comparison",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "Side by side. No spin. Downsides included.",
        body: `
          ${h2(`${firstName ? `${firstName}, the` : "The"} side-by-side breakdown`)}
          ${p("If you're weighing a Gold IRA against your traditional IRA, here's the honest comparison — downsides included.")}
          ${callout(`
            <strong>Tax Treatment:</strong> Both offer tax-deferred growth. Roth versions of both offer tax-free withdrawals.<br><br>
            <strong>Annual Fees:</strong> Traditional IRA: $0-$75/yr. Gold IRA: $150-$300/yr (custodian + storage).<br><br>
            <strong>Liquidity:</strong> Traditional IRA: instant trades. Gold IRA: 3-5 business days to sell.<br><br>
            <strong>Risk Profile:</strong> Traditional IRA: market-dependent. Gold IRA: inflation hedge, not correlated to stocks.<br><br>
            <strong>Historical Returns:</strong> S&P 500: ~10%/yr average. Gold: ~8%/yr average (but shines during crises).<br><br>
            <strong>RMDs:</strong> Both have Required Minimum Distributions at 73. Gold IRA may require selling metal to meet them.
          `, "info")}
          ${hr()}
          ${p("<strong>Bottom line:</strong> A Gold IRA isn't a replacement for your traditional IRA. It's a complement. Most advisors who don't earn commissions on either suggest keeping 10-25% in physical metals.")}
          ${p("The best approach? Own both. Let your traditional IRA capture stock market growth. Let your Gold IRA protect you when that growth reverses.")}
        `,
        ctaText: "Compare All Options →",
        ctaUrl: utmLink(`${SITE}/learn/gold-ira-vs-traditional-ira`, "content-nurture", 8),
      }),
    },

    // === LAYER 3 — CONVERT (Emails 9-12) ===
    {
      step: 9,
      delayDays: 42,
      subject: "How a retired electrician protected $145,000",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "He was skeptical. Here's what changed his mind.",
        body: `
          ${h2(`${firstName ? `${firstName}, meet` : "Meet"} Frank`)}
          ${p("Frank is a retired electrician from Pittsburgh. IBEW Local 5, 34 years. He had $145,000 in his 401(k) sitting in a target-date fund he'd never changed since the day he enrolled.")}
          ${p("His buddy at the union hall told him about Gold IRAs. Frank thought it sounded like a late-night infomercial.")}
          ${quote("I didn't trust it at first. Gold coins in a vault? Sounded like something my uncle would fall for. But I did the research. I read everything I could find. And the math made sense.", "Frank D., retired electrician, Pittsburgh")}
          ${p("Frank called Augusta Precious Metals. Not because of a sales pitch — because they had a Harvard-trained economist on staff and zero BBB complaints.")}
          ${p("<strong>Here's what actually happened:</strong>")}
          ${ul([
            "Day 1: Frank called Augusta. 15-minute info call. No pressure.",
            "Day 3: Augusta sent him a personalized portfolio breakdown.",
            "Day 5: Frank decided to move 20% ($29,000) into gold.",
            "Day 8: Augusta handled all the 401(k) rollover paperwork.",
            "Day 12: Gold was purchased and stored in a Delaware depository.",
          ])}
          ${p("It took 12 days from his first phone call to having gold in his IRA. No tax penalties. No drama.")}
          ${quote("The hardest part was making the phone call. Everything after that was easy. Augusta did all the work. I signed three forms and that was it.", "Frank D.")}
          ${p("Frank still has 80% of his savings in his traditional accounts. But that 20% in gold? He says it's the only part of his retirement he doesn't worry about.")}
        `,
        ctaText: "Take the 60-Second Retirement Quiz →",
        ctaUrl: utmLink(`${SITE}/quiz`, "content-nurture", 9),
      }),
    },
    {
      step: 10,
      delayDays: 49,
      subject: "15 companies reviewed. Here's who we trust.",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "We called every one. Most didn't make the cut.",
        body: `
          ${h2(`${firstName ? `${firstName}, we` : "We"} did the homework`)}
          ${p("We reviewed 15 Gold IRA companies. We called each one. We read every BBB complaint. We compared every fee structure. We talked to real customers.")}
          ${p("Most didn't make the cut. Here are the three that did.")}
          ${callout(`
            <strong>#1 Augusta Precious Metals</strong><br>
            Zero BBB complaints in 6+ years. Harvard-trained economist on staff. Zero fees for up to 10 years on qualifying accounts. $50,000 minimum.<br>
            <em>Best for: Serious investors who want premium education and transparency.</em>
          `, "success")}
          ${h2("#2 Goldco")}
          ${ul([
            "A+ BBB, strong customer reviews",
            "$25,000 minimum — more accessible",
            "Free precious metals on qualifying accounts",
          ])}
          ${p("<em>Best for: Mid-range investors who want a trusted name.</em>")}
          ${h2("#3 Noble Gold Investments")}
          ${ul([
            "A+ BBB, thousands of 5-star reviews",
            "$2,000 minimum — lowest in the industry",
            "Fast setup, personal service",
          ])}
          ${p("<em>Best for: Getting started with a smaller amount.</em>")}
          ${hr()}
          ${p("The full comparison — with fee tables, customer experiences, and detailed breakdowns — is on our site.")}
        `,
        ctaText: "Read the Full Comparison →",
        ctaUrl: utmLink(`${SITE}/best-gold-ira-companies`, "content-nurture", 10),
      }),
    },
    {
      step: 11,
      delayDays: 55,
      subject: "What happens in the first 15 minutes (minute by minute)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "No surprises. No pressure. Here's the exact agenda.",
        body: `
          ${h2(`${firstName ? `${firstName}, here's` : "Here's"} what the call actually looks like`)}
          ${p("The biggest barrier to getting a Gold IRA isn't money, paperwork, or timing. It's not knowing what to expect on the first call.")}
          ${p("So here it is. Minute by minute. No surprises.")}
          ${h2("Minutes 1-3: Your Situation")}
          ${p("They'll ask about your savings — how much, where it's held, when you're planning to retire. They don't need account numbers or Social Security. Just the big picture.")}
          ${h2("Minutes 4-8: Education")}
          ${p("They'll explain how a Gold IRA rollover works, the IRS rules, and what it actually costs. This is the part most people say was worth the call <em>even if they didn't move forward.</em>")}
          ${h2("Minutes 9-12: Your Questions")}
          ${p("Your turn. Ask anything. Fees? Storage? Selling? RMDs? They've heard every question. There are no dumb ones.")}
          ${h2("Minutes 13-15: Next Steps (only if YOU want)")}
          ${p("If you want to proceed, they'll explain the paperwork. If not, they'll say thanks and mean it.")}
          ${hr()}
          ${p("<strong>That's it.</strong> No pressure. No follow-up calls 47 times a week. No bait-and-switch. Augusta has zero BBB complaints in 6+ years — they didn't get that rating by being pushy.")}
          ${p("When you're ready — even if that's months from now — the call is free.")}
        `,
        ctaText: "Get Your Free Gold IRA Kit →",
        ctaUrl: utmLink(`${SITE}/get-started`, "content-nurture", 11),
      }),
    },
    {
      step: 12,
      delayDays: 60,
      subject: "Your retirement action plan — 3 paths forward",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "content-nurture",
        preheader: "This is our last planned email. 3 options whenever you're ready.",
        body: `
          ${h2(`${firstName ? `${firstName}, this` : "This"} is our last planned email`)}
          ${p("Over the past 2 months, we've shared research, calculators, real stories, and honest reviews. No hard sells. No fake urgency.")}
          ${p("Here are 3 ways to take the next step, whenever you're ready:")}
          ${h2("Path 1: Take the 60-Second Quiz")}
          ${p(`Our quiz matches you to the best Gold IRA company based on your savings, timeline, and goals. <a href="${utmLink(SITE + "/quiz", "content-nurture", 12)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Take the quiz →</a>`)}
          ${h2("Path 2: Get Your Free Gold IRA Kit")}
          ${p(`Request a free info kit from Augusta Precious Metals. Includes pricing, process overview, and the IRS rules. <a href="${utmLink(SITE + "/get-started", "content-nurture", 12)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Get your kit →</a>`)}
          ${h2("Path 3: Run Your Numbers")}
          ${p(`Use our retirement calculator to see what your savings could look like with gold protection. <a href="${utmLink(SITE + "/tools/retirement-calculator", "content-nurture", 12)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Try the calculator →</a>`)}
          ${hr()}
          ${p("From now on, you'll receive our weekly digest — gold prices, retirement tips, and new articles. No more planned sequences.")}
          ${p("Whatever you decide, you've done more research than 95% of Americans. That puts you in a strong position no matter what.")}
          ${p("Wishing you the retirement you've earned,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Find Your Best Path →",
        ctaUrl: utmLink(`${SITE}/get-started`, "content-nurture", 12),
      }),
    },
  ],
};

// ============================================
// Registry
// ============================================

export const SEQUENCES: Record<string, Sequence> = {
  "newsletter-welcome": newsletterWelcome,
  "guide-nurture": guideNurture,
  "high-intent": highIntent,
  "mid-nurture": midNurture,
  "starter-nurture": starterNurture,
  "re-engage": reEngage,
  "content-nurture": contentNurture,
};

/**
 * Get the appropriate sequence based on context and savings tier
 * Replaces the old getSequenceForTier() — now handles all entry points
 */
export function getSequenceForContext(
  source: "guide-lp" | "lead-form" | "newsletter",
  savingsTier?: string,
): string {
  if (source === "newsletter") return "content-nurture";
  if (source === "guide-lp") return "guide-nurture";

  // Lead form: route by savings tier
  const tier = savingsTier?.replace(/[$\s]/g, "").toLowerCase() || "";
  if (["500k-plus", "500k+", "250k-500k", "250k+", "100k-250k", "50k-100k"].includes(tier)) {
    return "high-intent";
  }
  if (["25k-50k"].includes(tier)) return "mid-nurture";
  return "starter-nurture";
}

/**
 * Legacy compatibility — maps old function name to new routing
 * TODO: Remove after all callers are updated to getSequenceForContext
 */
export function getSequenceForTier(savingsTier: string): string {
  return getSequenceForContext("lead-form", savingsTier);
}

/**
 * Calculate the next send time for a sequence step
 * Supports fractional days: 0.17 = ~4 hours, 0.5 = 12 hours
 */
export function getNextSendTime(delayDays: number): Date {
  const now = new Date();

  // If delay is 0 (immediate), send right now
  if (delayDays === 0) {
    return now;
  }

  // Sub-day delays (< 1 day): send X hours from now (don't snap to 10 AM)
  if (delayDays < 1) {
    const delayMs = delayDays * 24 * 60 * 60 * 1000;
    return new Date(now.getTime() + delayMs);
  }

  // Full-day delays: send at 10 AM ET (14:00 UTC) on the target day
  const targetDate = new Date(now.getTime() + delayDays * 24 * 60 * 60 * 1000);
  targetDate.setUTCHours(14, 0, 0, 0);
  return targetDate;
}
