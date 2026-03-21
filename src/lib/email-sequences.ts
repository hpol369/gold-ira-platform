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
      subject: "Welcome — here's your unfair advantage",
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
      subject: "Everything in one place (last email)",
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
          ${p(`If you ever want a no-obligation conversation with a Gold IRA specialist, Augusta's number is <strong>${AUGUSTA_PHONE}</strong>. Free call. No pressure.`)}
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
    // === THE AUGUSTA SUPPORT WINDOW (Hours 0-24) ===
    // Step 0: Immediate — guide + expect-a-call callout
    {
      step: 0,
      delayDays: 0,
      subject: "{{firstName}}, your guide + what happens next",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Augusta will call within 24hrs. 15 minutes, zero obligation.",
        body: `
          ${p(`${firstName || "Hey"}, you're in. Two things are happening right now:`)}
          ${callout(`<strong>&#128222; EXPECT A CALL:</strong> An Augusta Precious Metals specialist will call you within 24 hours. It's a 15-minute educational call — zero obligation, zero pressure. <strong>Please answer even if you don't recognize the number.</strong>`, "warning")}
          ${h2("1. Your Free Guide")}
          ${p("Download the 2026 Gold IRA Protection Guide below. Short on time? Read Chapter 10 first — it has the 10 questions to ask your specialist.")}
          ${h2("2. Quick Prep (2 minutes)")}
          ${ul([
            "Know your total retirement savings (rough number is fine)",
            "Know where it's held (Fidelity, Vanguard, employer plan, etc.)",
            "Have one question ready (the guide has 10 good ones)",
          ])}
          ${p("Augusta has an A+ BBB rating with zero complaints in 6+ years. They didn't get that by being pushy.")}
          ${p("Talk soon,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Download Your Free Guide (PDF) →",
        ctaUrl: GUIDE_PDF,
      }),
    },
    // Step 1: 4 HOURS later — "call is coming soon" + minute-by-minute preview
    // This is the KEY email — arrives while they're still warm, BEFORE the call
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
          ${callout(`<strong>Heads up:</strong> The call may come from a number you don't recognize. If you get a call in the next 24 hours and you're not sure — <strong>pick up.</strong> It's likely your Augusta specialist.`, "info")}
          ${h2("Minute 1-3: Your Situation")}
          ${p("They'll ask about your savings — how much, where it's held, when you're planning to retire. They don't need account numbers.")}
          ${h2("Minute 4-8: Education")}
          ${p("They'll explain how a Gold IRA rollover works, the IRS rules, and what it actually costs. This is the part most people find valuable <em>even if they don't move forward.</em>")}
          ${h2("Minute 9-12: Your Questions")}
          ${p("Your turn. Ask anything. The 10 questions from your guide are perfect here.")}
          ${h2("Minute 13-15: Next Steps (only if YOU want)")}
          ${p("If you want to proceed, they'll explain the paperwork. If not, they'll say thanks and mean it.")}
          ${hr()}
          ${p("<strong>Bottom line:</strong> Nobody will pressure you. Nobody will call you 47 times afterward. Augusta has zero BBB complaints in 6+ years — they don't operate that way.")}
        `,
        ctaText: "Review Your Guide Before the Call →",
        ctaUrl: GUIDE_PDF,
      }),
    },
    // Step 2: Day 1 — morning-of reminder (in case they submitted late evening)
    {
      step: 2,
      delayDays: 1,
      subject: "Heads up — Augusta may call today",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "If you get an unfamiliar call today, pick up — it's your specialist.",
        body: `
          ${p(`Quick reminder, ${firstName || "hey"} — Augusta's team may reach out today.`)}
          ${callout(`If you get a call from a number you don't recognize today — <strong>pick up.</strong> It's a 15-minute educational call, not a sales pitch. They won't leave you hanging on hold or try to sell you anything.`, "info")}
          ${p("If you miss it, no stress — they'll try again. Or you can call them directly anytime:")}
          ${p(`<strong><a href="tel:${AUGUSTA_PHONE.replace(/-/g, "")}" style="color:#B22234;text-decoration:underline;font-size:18px;">&#128222; ${AUGUSTA_PHONE}</a></strong><br><span style="font-size:13px;color:#64748b;">Ask for the Gold IRA education team</span>`)}
        `,
        ctaText: "Review Your Guide →",
        ctaUrl: GUIDE_PDF,
      }),
    },
    {
      step: 3,
      delayDays: 3,
      subject: "Quick check-in (3 options inside)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Connected? Missed the call? Changed your mind? All good.",
        body: `
          ${p(`${firstName || "Hey"}, quick check-in.`)}
          ${p("By now, your Augusta specialist should have reached out. Did you get a chance to talk?")}
          ${h2("→ Yes, We Connected")}
          ${p(`<a href="${SITE}/api/email/status?action=connected&email=${encodeURIComponent(email)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Click here to let us know</a> — Great! If you have follow-up questions, reply to this email. We read every response.`)}
          ${h2("→ Not Yet / I Missed the Call")}
          ${p(`<a href="${SITE}/api/email/status?action=not-connected&email=${encodeURIComponent(email)}" style="color:#B22234;text-decoration:underline;font-weight:bold;">Click here</a> — No problem. You can call Augusta directly at <strong>${AUGUSTA_PHONE}</strong> (ask for the Gold IRA education team). Or just wait — they'll try again.`)}
          ${h2("→ I Changed My Mind")}
          ${p("Totally fine. No hard feelings. You'll stay on our newsletter unless you unsubscribe below.")}
          ${hr()}
          ${p("Either way, you've already done more research than 95% of people. That puts you in a strong position no matter what you decide.")}
        `,
        ctaText: `Call Augusta Directly: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },
    // === POST-SUPPORT WINDOW (Days 7+) — education + value ===
    {
      step: 4,
      delayDays: 7,
      skipIfConnected: true,
      subject: "Why your advisor steers you away from gold",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Follow the commissions. The answer is always the commissions.",
        body: `
          ${p(`${firstName || "Hey"}, while you're thinking things over, here's something worth knowing.`)}
          ${p("Most financial advisors won't recommend physical gold. Not because it's bad — but because they don't earn commissions on it.")}
          ${h2("Your Advisor's Incentive")}
          ${p("They make money on mutual funds, ETFs, and annuities. Physical gold? Nothing. So they'll tell you gold is \"risky\" or \"doesn't pay dividends.\" Both statements are misleading.")}
          ${h2("What Gold Actually Does")}
          ${p("Gold isn't meant to replace your stocks. It's insurance. You don't buy car insurance hoping for a crash — you buy it so a crash doesn't ruin you.")}
          ${h2("The Numbers")}
          ${p("10-25% of your portfolio in gold. That's what independent advisors (the ones who don't earn commissions) recommend.")}
          ${hr()}
          ${p("If your advisor pushes back on gold, ask them one question: <em>\"What's your plan to protect my savings during the next 50% crash?\"</em>")}
          ${p("If they say \"stay the course\" — that's not a plan. That's hope.")}
          ${p(`Augusta's team includes a Harvard-trained economist who can show you exactly how gold fits into your portfolio. The call is still free: <strong>${AUGUSTA_PHONE}</strong>`)}
        `,
        ctaText: "See Your Personalized Numbers →",
        ctaUrl: utmLink(`${SITE}/tools/gold-ira-calculator`, "high-intent", 3),
      }),
    },
    {
      step: 5,
      delayDays: 11,
      skipIfConnected: true,
      subject: "\"My wife thought I was nuts\"",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Then gold went up 27% while their stocks went sideways.",
        body: `
          ${p(`${firstName || "Hey"}, the hardest part of a Gold IRA rollover is making the decision. The actual process? Easy.`)}
          ${p("<em>\"I was terrified of the paperwork. Augusta did everything. I signed three forms and it was done in two weeks.\"</em><br>— Richard M., retired factory supervisor, Michigan")}
          ${p("<em>\"My wife thought I was nuts. Then she saw gold go up 27% while our stocks went sideways. Now she wants to move more.\"</em><br>— Dave L., retired electrician, Pennsylvania")}
          ${p("<em>\"I only moved $75,000 — about 20% of our savings. It's not about getting rich. It's about knowing that no matter what happens to the market, that $75k is safe.\"</em><br>— Sandra W., retired school teacher, Arizona")}
          ${hr()}
          ${p("Every one of these people had the same hesitation you might have. Every one of them is glad they made the call.")}
          ${p(`If you haven't connected with Augusta yet, it's not too late. Call them directly: <strong>${AUGUSTA_PHONE}</strong> (Gold IRA education team).`)}
        `,
        ctaText: `Talk to Augusta — Free: ${AUGUSTA_PHONE}`,
        ctaUrl: `tel:${AUGUSTA_PHONE.replace(/-/g, "")}`,
      }),
    },
    {
      step: 6,
      delayDays: 16,
      subject: "Kiyosaki is half right about gold",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "What he nails. What he exaggerates. The middle ground.",
        body: `
          ${p(`${firstName || "Hey"}, if you follow Robert Kiyosaki, you've heard him say:`)}
          ${ul([
            '"Gold is going to $5,000."',
            '"The dollar is trash."',
            '"Your 401(k) is the biggest scam in history."',
          ])}
          ${p("<strong>Here's our honest take:</strong>")}
          ${h2("What He Gets Right:")}
          ${ul([
            "Paper currency loses value over time (the dollar has lost 87% of purchasing power since 1971 — that's a fact)",
            "Gold is a real asset that can't be printed into oblivion",
            "Most Americans are dangerously overexposed to paper assets",
          ])}
          ${h2("What He Exaggerates:")}
          ${ul([
            "Gold to $5,000 — possible but not certain",
            "\"Biggest crash in history\" — he's said this for 10 years",
            "401(k)s are a \"scam\" — imperfect, not a scam",
          ])}
          ${h2("The Middle Ground:")}
          ${p("You don't need to be extreme. Moving 10-25% of your savings into gold is a proven strategy that protects you without betting the farm.")}
          ${p("That's what we recommend. That's what the data supports.")}
        `,
        ctaText: "See Your Personalized Numbers →",
        ctaUrl: utmLink(`${SITE}/tools/gold-ira-calculator`, "high-intent", 5),
      }),
    },
    {
      step: 7,
      delayDays: 21,
      subject: "Everything in one place (last email)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "high-intent",
        preheader: "Your guide, your tools, Augusta's number. Bookmark this one.",
        body: `
          ${p(`${firstName || "Hey"}, this is the last email in this series.`)}
          ${p("<strong>Here's where things stand:</strong>")}
          ${ul([
            `<a href="${GUIDE_PDF}" style="color:#B22234;text-decoration:underline;">Your free guide</a>`,
            `Your free consultation → still available (<strong>${AUGUSTA_PHONE}</strong>)`,
            `<a href="${SITE}/tools" style="color:#B22234;text-decoration:underline;">Your tools</a> (43 calculators)`,
            `<a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Company reviews</a>`,
          ])}
          ${p("If now isn't the right time, that's fine. Bookmark our site. We publish daily and we'll always be here when you're ready.")}
          ${p("If now IS the right time — one call. 15 minutes. Zero obligation.")}
          ${p("Wishing you the retirement you've earned,<br><strong>The Rich Dad Retirement Team</strong>")}
        `,
        ctaText: "Visit richdadretirement.com →",
        ctaUrl: SITE,
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
          ${p("A Goldco specialist will reach out for a free consultation. Like Augusta, it's educational — not a pitch. They'll explain exactly how a Gold IRA works for your situation.")}
          ${p("The call takes about 15 minutes. Zero obligation.")}
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
      subject: "Your complete kit (last email)",
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
      subject: "4 moves that accelerate your retirement",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-nurture",
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
            `Talk to Augusta: <strong>${AUGUSTA_PHONE}</strong> (free, no obligation)`,
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
// Registry
// ============================================

export const SEQUENCES: Record<string, Sequence> = {
  "newsletter-welcome": newsletterWelcome,
  "guide-nurture": guideNurture,
  "high-intent": highIntent,
  "mid-nurture": midNurture,
  "starter-nurture": starterNurture,
  "re-engage": reEngage,
};

/**
 * Get the appropriate sequence based on context and savings tier
 * Replaces the old getSequenceForTier() — now handles all entry points
 */
export function getSequenceForContext(
  source: "guide-lp" | "lead-form" | "newsletter",
  savingsTier?: string,
): string {
  if (source === "newsletter") return "newsletter-welcome";
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
