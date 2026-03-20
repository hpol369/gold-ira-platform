// Email nurture sequence definitions
// Sequence A: Gold IRA Primer ($50k+ leads who didn't convert)
// Sequence B: Starter Path (sub-$50k leads)
// Sequence C: Weekly Market Digest (newsletter subscribers)

import { emailLayout, p, h2, ul, hr, trustBadge } from "./email-templates";
import { AFFILIATE_LINKS } from "@/config/affiliates";

const SITE = "https://richdadretirement.com";
const AUGUSTA_LP = AFFILIATE_LINKS.augusta;
const AUGUSTA_MID = AFFILIATE_LINKS.augustaMidIntent;
const AUGUSTA_COMPARE = AFFILIATE_LINKS.augustaComparison;
const NOBLE_LP = AFFILIATE_LINKS.noble;

export interface SequenceEmail {
  step: number;
  delayDays: number; // days after enrollment to send
  subject: string;
  buildHtml: (email: string, firstName?: string) => string;
}

export interface Sequence {
  id: string;
  name: string;
  description: string;
  emails: SequenceEmail[];
}

// ============================================
// SEQUENCE A — "The Gold IRA Primer"
// For $50k+ leads who entered funnel but didn't call
// 7 emails over 20 days
// ============================================

const sequenceA: Sequence = {
  id: "gold-ira-primer",
  name: "The Gold IRA Primer",
  description: "For qualified $50k+ leads — builds trust over 20 days",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "Your Free Gold IRA Guide Is Here",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "gold-ira-primer",
        preheader: "Everything you need to know about protecting your retirement with gold",
        body: `
          ${h2(`${firstName ? `${firstName}, welcome` : "Welcome"} to Rich Dad Retirement`)}
          ${p("Thanks for requesting your personalized Gold IRA kit. You're joining 10,000+ Americans who are taking control of their retirement.")}
          ${p("Here's what you need to know about Gold IRAs in 2026:")}
          ${ul([
            "<strong>Tax advantages:</strong> A Gold IRA offers the same tax benefits as your traditional IRA or 401(k)",
            "<strong>Physical ownership:</strong> You own real, IRS-approved gold coins and bars stored in a secure depository",
            "<strong>Protection:</strong> Gold has held value for 5,000 years — through every recession, market crash, and currency crisis",
            "<strong>Easy rollover:</strong> You can roll over your existing 401(k) or IRA with zero taxes and zero penalties",
          ])}
          ${p("The best part? <strong>Augusta Precious Metals handles everything</strong> — the paperwork, the IRS compliance, the secure storage. Their team of specialists will walk you through every step.")}
          ${trustBadge()}
        `,
        ctaText: "Get Your Free Gold IRA Kit →",
        ctaUrl: AUGUSTA_LP,
      }),
    },
    {
      step: 1,
      delayDays: 2,
      subject: "3 Things Your Financial Advisor Won't Tell You About Gold",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "gold-ira-primer",
        preheader: "Why most advisors steer you away from gold (and why that's a mistake)",
        body: `
          ${h2(`${firstName || "Hey"}, let's talk about your advisor`)}
          ${p("Most financial advisors won't recommend gold. Here's why — and why it matters for your retirement:")}
          ${h2("1. They don't earn commissions on physical gold")}
          ${p("Your advisor makes money when you buy mutual funds, ETFs, and annuities. Physical gold? They get nothing. So of course they'll tell you gold is \"risky\" or \"doesn't pay dividends.\"")}
          ${h2("2. They're trained in paper assets only")}
          ${p("The Series 7 exam doesn't cover physical gold. Most advisors genuinely don't understand how a Gold IRA works. They'll confuse gold ETFs (paper) with physical gold (real).")}
          ${h2("3. They underestimate inflation risk")}
          ${p("Your advisor's Monte Carlo simulations assume 2-3% inflation. But with $36 trillion in national debt and persistent 4%+ inflation, those models are dangerously optimistic.")}
          ${hr()}
          ${p("<strong>The bottom line:</strong> A Gold IRA isn't about replacing your entire portfolio — it's about protecting 10-25% of your savings in an asset that has NEVER gone to zero.")}
          ${p("Augusta Precious Metals has a Harvard-trained economist on staff who can explain exactly how gold fits into YOUR situation.")}
          ${trustBadge()}
        `,
        ctaText: "Talk to Augusta's Team — Free →",
        ctaUrl: AUGUSTA_LP,
      }),
    },
    {
      step: 2,
      delayDays: 5,
      subject: "How $100k in a 401(k) Becomes $215k in Gold (Real Math)",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "gold-ira-primer",
        preheader: "The numbers don't lie — see the 20-year comparison",
        body: `
          ${h2("Let's look at real numbers")}
          ${p(`${firstName || "Friend"}, forget the hype. Let's do actual math.`)}
          ${p("If you had $100,000 in a traditional 401(k) 20 years ago:")}
          ${ul([
            "<strong>S&P 500:</strong> $100k → ~$410k (10.5% avg return, but -50% in 2008, -33% in 2020)",
            "<strong>Gold:</strong> $100k → ~$530k (gold went from $400/oz to $2,800+/oz)",
            "<strong>60/40 portfolio:</strong> $100k → ~$310k (bonds dragged down returns)",
          ])}
          ${p("But here's what matters more than returns: <strong>gold never had a 50% drawdown.</strong> The S&P 500 did — twice. For someone in or near retirement, a 50% loss means working 5-10 more years.")}
          ${hr()}
          ${p("You don't need to go all-in on gold. Most advisors who ACTUALLY understand gold recommend 10-25% of your portfolio.")}
          ${p("Want to see what a partial gold allocation looks like for YOUR savings? Augusta's team will run the numbers for free.")}
          ${trustBadge()}
        `,
        ctaText: "See Your Personalized Analysis →",
        ctaUrl: AUGUSTA_LP,
      }),
    },
    {
      step: 3,
      delayDays: 8,
      subject: "Augusta vs Goldco vs Noble Gold — Our Honest Comparison",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "gold-ira-primer",
        preheader: "We compared 15+ companies. Here's who came out on top.",
        body: `
          ${h2("Which Gold IRA Company Is Best?")}
          ${p(`${firstName || "Hey"}, we get this question a lot. After reviewing 15+ Gold IRA companies, here's our honest ranking:`)}
          ${h2("🥇 #1: Augusta Precious Metals")}
          ${ul([
            "A+ BBB rating, zero complaints in 6+ years",
            "Transparent pricing (no hidden fees)",
            "Harvard-trained economist on staff",
            "$50,000 minimum investment",
            "Lifetime customer support",
          ])}
          ${h2("🥈 #2: Goldco")}
          ${ul([
            "A+ BBB rating, strong track record",
            "$25,000 minimum (lower barrier)",
            "Good for mid-range investors",
          ])}
          ${h2("🥉 #3: Noble Gold")}
          ${ul([
            "Lowest minimum: $2,000",
            "Great for beginners",
            "Smaller selection of products",
          ])}
          ${hr()}
          ${p("<strong>Our recommendation:</strong> If you have $50k+ in retirement savings, Augusta is the clear winner. Their transparency, education-first approach, and Harvard economist make them unmatched.")}
          ${p(`Read our full comparison: <a href="${SITE}/compare" style="color:#B22234;text-decoration:underline;">Compare All Gold IRA Companies →</a>`)}
          ${trustBadge()}
        `,
        ctaText: "Get Augusta's Free Gold IRA Kit →",
        ctaUrl: AUGUSTA_COMPARE,
      }),
    },
    {
      step: 4,
      delayDays: 12,
      subject: "The 2026 IRA Deadline Is Approaching — Here's What to Know",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "gold-ira-primer",
        preheader: "Important IRA contribution and rollover deadlines for 2026",
        body: `
          ${h2("Don't Miss These 2026 Deadlines")}
          ${p(`${firstName || "Quick reminder"} — there are important deadlines you should know about:`)}
          ${ul([
            "<strong>IRA contribution deadline:</strong> April 15, 2027 (for tax year 2026)",
            "<strong>401(k) rollover:</strong> No deadline — but the sooner you start, the sooner your gold starts protecting you",
            "<strong>Required Minimum Distributions (RMDs):</strong> If you're 73+, you must take distributions by Dec 31",
          ])}
          ${h2("Why timing matters with gold")}
          ${p("Gold is at $2,800+/oz right now. Analysts from Goldman Sachs, JPMorgan, and Bank of America all project $3,000-$3,500/oz by end of 2026.")}
          ${p("Every month you wait is potentially hundreds of dollars in lost gains. The rollover process takes 2-3 weeks, so starting now means your gold is working for you before Q2.")}
          ${hr()}
          ${p("Augusta handles the entire rollover process — paperwork, IRS compliance, everything. Most clients are fully set up within 15 business days.")}
          ${trustBadge()}
        `,
        ctaText: "Start Your Tax-Free Rollover →",
        ctaUrl: AUGUSTA_LP,
      }),
    },
    {
      step: 5,
      delayDays: 15,
      subject: "What Robert Kiyosaki Says About Gold in 2026",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "gold-ira-primer",
        preheader: "The Rich Dad author's latest take on gold, silver, and the dollar",
        body: `
          ${h2("\"Savers Are Losers\" — Robert Kiyosaki")}
          ${p(`${firstName || "Hey"}, if you've read Rich Dad Poor Dad, you know Kiyosaki has been saying the same thing for 25 years: <em>"The dollar is dying. Gold and silver are real money."</em>`)}
          ${p("Here's what he's been saying recently:")}
          ${ul([
            "\"Gold is going to $5,000. Silver to $100. The dollar is trash.\"",
            "\"The biggest crash in history is coming. Only gold, silver, and Bitcoin will survive.\"",
            "\"Your 401(k) is the biggest scam in history. Get real assets.\"",
          ])}
          ${p("Now, Kiyosaki is known for dramatic predictions. But his core message is sound: <strong>paper assets carry more risk than most people realize, and physical gold is a proven hedge.</strong>")}
          ${hr()}
          ${p("You don't have to be as extreme as Kiyosaki. Even moving 10-15% of your retirement into gold provides meaningful protection against inflation, market crashes, and dollar devaluation.")}
          ${p("The question isn't IF you should own gold — it's how much, and which company to trust with your savings.")}
          ${trustBadge()}
        `,
        ctaText: "Get Your Free Gold IRA Kit →",
        ctaUrl: AUGUSTA_MID,
      }),
    },
    {
      step: 6,
      delayDays: 20,
      subject: "Your Free Consultation Is Still Available",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "gold-ira-primer",
        preheader: "Your personalized Gold IRA consultation — no pressure, no commitment",
        body: `
          ${h2(`${firstName || "Hey"}, one last thing`)}
          ${p("I noticed you requested a Gold IRA kit but haven't scheduled your free consultation yet. No pressure — but I wanted to make sure you know what you're getting:")}
          ${ul([
            "✅ <strong>15-minute call</strong> with a Gold IRA specialist (not a salesperson)",
            "✅ <strong>Personalized analysis</strong> based on your retirement savings",
            "✅ <strong>Full education</strong> on IRS rules, fees, and the rollover process",
            "✅ <strong>Zero obligation</strong> — many people call just to learn",
          ])}
          ${p("Augusta has an A+ BBB rating with zero complaints in 6+ years. They won't pressure you. Their approach is education-first: they want you to understand gold before you invest a single dollar.")}
          ${hr()}
          ${p("This is the last email in this series. If you ever have questions about Gold IRAs, visit us anytime at <a href=\"" + SITE + "\" style=\"color:#B22234;text-decoration:underline;\">richdadretirement.com</a>.")}
          ${p("Wishing you a secure retirement,<br><strong>The Rich Dad Retirement Team</strong>")}
          ${trustBadge()}
        `,
        ctaText: "Schedule Your Free Consultation →",
        ctaUrl: AUGUSTA_LP,
      }),
    },
  ],
};

// ============================================
// SEQUENCE B — "The Starter Path"
// For sub-$50k leads
// 4 emails over 14 days
// ============================================

const sequenceB: Sequence = {
  id: "starter-path",
  name: "The Starter Path",
  description: "For sub-$50k investors — guides them to appropriate companies",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "Your Gold IRA Starter Guide Is Here",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-path",
        preheader: "You don't need $50k to start protecting your retirement with gold",
        body: `
          ${h2(`Welcome, ${firstName || "friend"}!`)}
          ${p("Thanks for your interest in Gold IRAs. Here's the great news: <strong>you don't need $50,000 to get started.</strong>")}
          ${p("Several reputable companies offer Gold IRAs with much lower minimums:")}
          ${ul([
            "<strong>Noble Gold:</strong> Start with as little as $2,000",
            "<strong>American Hartford Gold:</strong> $10,000 minimum",
            "<strong>Goldco:</strong> $25,000 minimum",
          ])}
          ${p("The process is the same regardless of your investment size:")}
          ${ul([
            "Open a self-directed IRA (the company handles this)",
            "Roll over funds from your existing 401(k) or IRA — tax-free",
            "Choose your gold and silver products",
            "Your metals are stored in an IRS-approved depository",
          ])}
          ${hr()}
          ${p("Start with what you have. You can always add more later. The important thing is getting started while gold is still accessible.")}
          ${trustBadge()}
        `,
        ctaText: "Explore Noble Gold (Starts at $2k) →",
        ctaUrl: NOBLE_LP,
      }),
    },
    {
      step: 1,
      delayDays: 3,
      subject: "You Don't Need $50k to Start — Here's How",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-path",
        preheader: "Smart strategies for building your gold position over time",
        body: `
          ${h2("Building Your Gold Position Over Time")}
          ${p(`${firstName || "Hey"}, many of the wealthiest Gold IRA holders started small. Here's a smart approach:`)}
          ${h2("The Dollar-Cost Averaging Strategy")}
          ${p("Instead of investing a lump sum, add to your Gold IRA regularly:")}
          ${ul([
            "<strong>Month 1:</strong> Open your account with $2,000-$5,000",
            "<strong>Monthly:</strong> Add $200-$500 per month",
            "<strong>Yearly:</strong> Use your IRA contribution limit ($7,000/year, or $8,000 if 50+)",
            "<strong>Windfalls:</strong> Tax refunds, bonuses, inheritances → straight to gold",
          ])}
          ${p("In 2-3 years, you'll have a substantial gold position that protects your retirement from inflation and market crashes.")}
          ${hr()}
          ${p("Noble Gold makes this easy with low minimums and no pressure to invest more than you're comfortable with.")}
          ${trustBadge()}
        `,
        ctaText: "Start Your Gold IRA with Noble Gold →",
        ctaUrl: NOBLE_LP,
      }),
    },
    {
      step: 2,
      delayDays: 7,
      subject: "Noble Gold: Why We Recommend Them for New Investors",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-path",
        preheader: "Low minimums, great service, and a solid track record",
        body: `
          ${h2("Why Noble Gold Is Perfect for Getting Started")}
          ${p(`${firstName || "Here's"} why we recommend Noble Gold for investors with under $50k:`)}
          ${ul([
            "✅ <strong>Lowest minimum in the industry:</strong> Start with just $2,000",
            "✅ <strong>A+ BBB rating</strong> with thousands of 5-star reviews",
            "✅ <strong>Free gold guide</strong> shipped to your door",
            "✅ <strong>No high-pressure sales</strong> — education-first approach",
            "✅ <strong>Royal Survival Packs</strong> — unique emergency gold/silver kits",
            "✅ <strong>Texas depository option</strong> — not just Delaware",
          ])}
          ${hr()}
          ${p("As your gold position grows past $50k, you can always open a second account with Augusta for their premium services. But for now, Noble Gold is the best place to start.")}
          ${p(`Compare all companies: <a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Best Gold IRA Companies Ranked →</a>`)}
          ${trustBadge()}
        `,
        ctaText: "Get Noble Gold's Free Kit →",
        ctaUrl: NOBLE_LP,
      }),
    },
    {
      step: 3,
      delayDays: 14,
      subject: "How to Grow Your Retirement Savings Faster",
      buildHtml: (email, firstName) => emailLayout({
        email,
        sequence: "starter-path",
        preheader: "4 strategies to accelerate your retirement savings in 2026",
        body: `
          ${h2("4 Ways to Grow Your Retirement Faster")}
          ${p(`${firstName || "Hey"}, while you're building your gold position, here are proven strategies to accelerate your overall retirement savings:`)}
          ${h2("1. Max out your catch-up contributions")}
          ${p("If you're 50+, you can contribute an extra $1,000/year to your IRA ($8,000 total). That's an extra $10,000 over 10 years — before growth.")}
          ${h2("2. Consolidate old 401(k)s")}
          ${p("If you have forgotten 401(k)s from previous jobs, roll them into one Gold IRA. You'll save on fees and have better control.")}
          ${h2("3. Consider a Roth conversion")}
          ${p("If you expect higher tax rates in retirement (likely, given the national debt), converting some traditional IRA funds to a Roth Gold IRA could save you thousands in taxes.")}
          ${h2("4. Diversify across metals")}
          ${p("Don't just buy gold. Silver is currently undervalued relative to gold (the gold-to-silver ratio is historically high). A mix of both gives you more upside.")}
          ${hr()}
          ${p("This is the last email in this series. Visit us anytime at <a href=\"" + SITE + "\" style=\"color:#B22234;text-decoration:underline;\">richdadretirement.com</a> for guides, calculators, and expert reviews.")}
          ${p("Wishing you a secure retirement,<br><strong>The Rich Dad Retirement Team</strong>")}
          ${trustBadge()}
        `,
        ctaText: "Explore Our Retirement Calculators →",
        ctaUrl: `${SITE}/tools`,
      }),
    },
  ],
};

// ============================================
// SEQUENCE C — Newsletter confirmation (single email)
// The weekly digest is handled separately via cron
// ============================================

const sequenceC: Sequence = {
  id: "newsletter-welcome",
  name: "Newsletter Welcome",
  description: "Confirmation email for newsletter subscribers",
  emails: [
    {
      step: 0,
      delayDays: 0,
      subject: "Welcome to Rich Dad Retirement — Your Free Guide Inside",
      buildHtml: (email) => emailLayout({
        email,
        sequence: "newsletter-welcome",
        preheader: "Your Gold IRA investor's guide + weekly market updates",
        body: `
          ${h2("You're In! Welcome to Rich Dad Retirement")}
          ${p("Thanks for subscribing. Here's what you'll get from us:")}
          ${ul([
            "📊 <strong>Weekly Gold & Silver Market Updates</strong> — prices, trends, and what they mean for your retirement",
            "📰 <strong>Breaking News</strong> — Fed decisions, inflation data, and policy changes that affect your savings",
            "📚 <strong>Educational Guides</strong> — Gold IRA rules, tax strategies, and company reviews",
            "🔥 <strong>Exclusive Offers</strong> — Special deals from our vetted Gold IRA partners",
          ])}
          ${hr()}
          ${h2("Start Here: Your Free Gold IRA Guide")}
          ${p("New to Gold IRAs? Start with our most popular resources:")}
          ${ul([
            `<a href="${SITE}/learn/what-is-gold-ira" style="color:#B22234;text-decoration:underline;">What Is a Gold IRA? Complete Beginner's Guide</a>`,
            `<a href="${SITE}/best-gold-ira-companies" style="color:#B22234;text-decoration:underline;">Best Gold IRA Companies Ranked for 2026</a>`,
            `<a href="${SITE}/tools/gold-ira-calculator" style="color:#B22234;text-decoration:underline;">Gold IRA Calculator — See Your Potential Returns</a>`,
            `<a href="${SITE}/learn/401k-to-gold-ira-rollover" style="color:#B22234;text-decoration:underline;">How to Roll Over Your 401(k) Tax-Free</a>`,
          ])}
          ${p("If you have $50,000+ in retirement savings and want personalized guidance, our top-rated partner Augusta Precious Metals offers free consultations with a Harvard-trained economist.")}
          ${trustBadge()}
        `,
        ctaText: "Get Your Free Gold IRA Kit →",
        ctaUrl: AUGUSTA_MID,
      }),
    },
  ],
};

// ============================================
// Registry
// ============================================

export const SEQUENCES: Record<string, Sequence> = {
  "gold-ira-primer": sequenceA,
  "starter-path": sequenceB,
  "newsletter-welcome": sequenceC,
};

/**
 * Get the appropriate sequence for a lead based on savings tier
 * Handles both funnel format ("50k-100k") and display format ("$50k-$100k")
 */
export function getSequenceForTier(savingsTier: string): string {
  // Normalize: strip $ and whitespace, lowercase
  const normalized = savingsTier.replace(/[$\s]/g, "").toLowerCase();

  switch (normalized) {
    // $50k+ tiers → Augusta "Gold IRA Primer" sequence
    case "500k-plus":
    case "500k+":
    case "250k-500k":
    case "250k+":
    case "100k-250k":
    case "50k-100k":
      return "gold-ira-primer";
    // Sub-$50k tiers → "Starter Path" sequence
    case "25k-50k":
    case "under-25k":
    case "under25k":
    default:
      return "starter-path";
  }
}

/**
 * Calculate the next send time for a sequence step
 */
export function getNextSendTime(delayDays: number): Date {
  const now = new Date();
  // Send at 10 AM ET (14:00 UTC) on the target day
  const targetDate = new Date(now.getTime() + delayDays * 24 * 60 * 60 * 1000);
  targetDate.setUTCHours(14, 0, 0, 0);

  // If delay is 0 (immediate), send right now
  if (delayDays === 0) {
    return now;
  }

  return targetDate;
}
