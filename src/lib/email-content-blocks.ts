/**
 * Topic-specific email content blocks for personalized nurture emails (steps 0–2).
 * Each function returns HTML built with the shared email helpers, keyed by the
 * subscriber's EmailTheme (resolved at signup from the article they were reading).
 */

import { p, h2, ul, callout, utmLink } from "./email-templates";
import type { EmailTheme } from "./email-topic-resolver";

// ---------------------------------------------------------------------------
// 1. Welcome Resources — 3 article links per theme (used in email 0)
// ---------------------------------------------------------------------------

const WELCOME_RESOURCES: Record<EmailTheme, { title: string; path: string }[]> = {
  pension: [
    { title: "CalPERS Retirement Complete Guide", path: "/learn/calpers-retirement-guide" },
    { title: "Railroad Retirement Calculator", path: "/learn/railroad-retirement-calculator" },
    { title: "WEP/GPO: How It Affects Your Benefits", path: "/learn/wep-gpo-explained" },
  ],
  "401k-rollover": [
    { title: "401(k) to Gold IRA Rollover Guide", path: "/learn/401k-to-gold-ira-rollover" },
    { title: "60-Day Rollover Rule Explained", path: "/learn/60-day-rollover-rule" },
    { title: "Direct vs Indirect Rollovers", path: "/learn/direct-vs-indirect-rollover" },
  ],
  "tax-rmd": [
    { title: "RMD Rules for 2024 and Beyond", path: "/learn/rmd-rules-2024" },
    { title: "Roth Conversion Strategies After 60", path: "/learn/roth-conversion-strategies" },
    { title: "How Gold IRAs Affect Your Tax Bracket", path: "/learn/gold-ira-tax-benefits" },
  ],
  "market-protection": [
    { title: "How to Recession-Proof Your Retirement", path: "/learn/recession-proof-retirement" },
    { title: "Gold as an Inflation Hedge: 50-Year Data", path: "/learn/gold-inflation-hedge" },
    { title: "Portfolio Diversification After 55", path: "/learn/diversification-after-55" },
  ],
  "fees-comparison": [
    { title: "Gold IRA Fee Comparison: Full Breakdown", path: "/learn/gold-ira-fees-comparison" },
    { title: "5 Gold IRA Scams to Avoid", path: "/learn/gold-ira-scams" },
    { title: "How to Choose a Gold IRA Custodian", path: "/learn/gold-ira-custodian-guide" },
  ],
  silver: [
    { title: "Silver IRA: Complete Beginner's Guide", path: "/learn/silver-ira-guide" },
    { title: "Gold vs Silver: Which Belongs in Your IRA?", path: "/learn/gold-vs-silver-ira" },
    { title: "COMEX Silver Supply: What Investors Need to Know", path: "/learn/comex-silver-supply" },
  ],
  healthcare: [
    { title: "The $315,000 Retirement Healthcare Bill", path: "/learn/retirement-healthcare-costs" },
    { title: "Medicare Gaps That Cost Retirees Thousands", path: "/learn/medicare-gaps-explained" },
    { title: "Long-Term Care Planning Strategies", path: "/learn/long-term-care-planning" },
  ],
  general: [
    { title: "Gold IRA: Complete Beginner's Guide", path: "/learn/gold-ira-beginners-guide" },
    { title: "Best Gold IRA Companies — 2024 Rankings", path: "/best-gold-ira-companies" },
    { title: "Is Gold a Good Retirement Investment?", path: "/learn/is-gold-good-retirement-investment" },
  ],
};

/**
 * Returns an HTML list of 3 topic-relevant article links for the welcome email.
 */
export function getWelcomeResources(theme: EmailTheme): string {
  const resources = WELCOME_RESOURCES[theme];
  const links = resources.map(
    (r) =>
      `<a href="${utmLink(`https://richdadretirement.com${r.path}`, "content-nurture", 0)}" style="color:#000080;text-decoration:underline;font-weight:600;">${r.title}</a>`
  );
  return ul(links);
}

// ---------------------------------------------------------------------------
// 2. Topic Deep-Dive — email 1, day 3 (pure value, no gold pitch)
// ---------------------------------------------------------------------------

const DEEP_DIVE: Record<EmailTheme, { subject: string; body: string }> = {
  pension: {
    subject: "5 pension mistakes that cost retirees thousands",
    body: [
      h2("5 Pension Mistakes That Cost Real Money"),
      p(
        "After 25 or 30 years on the job, the last thing you need is a paperwork mistake eating into the pension you earned. " +
        "But it happens more than you\u2019d think. Here are five of the most common slip-ups we see."
      ),
      ul([
        "<strong>Taking the lump sum without running the numbers.</strong> A lump sum looks big on paper, but the monthly annuity often pays out more over a full retirement \u2014 especially if you live past 80.",
        "<strong>Ignoring survivor benefits.</strong> If you pick single-life payout for the bigger check and pass away first, your spouse gets nothing. The reduced joint-life option exists for a reason.",
        "<strong>Filing too early (or too late).</strong> Every pension system has a sweet spot. File at the wrong age and you could leave 10\u201315% on the table permanently.",
        "<strong>Forgetting about WEP/GPO.</strong> If you have both a pension and Social Security, the Windfall Elimination Provision can shrink your SS check by up to $587/month.",
        "<strong>Not coordinating with Social Security timing.</strong> Your pension start date and your SS start date should work together, not against each other.",
      ]),
      callout(
        "Tip: Request a personalized pension estimate from your plan administrator at least 2 years before your target retirement date. That gives you time to fix errors in your service record.",
        "info"
      ),
    ].join(""),
  },

  "401k-rollover": {
    subject: "Before you roll over your 401(k), read this",
    body: [
      h2("What Nobody Tells You About 401(k) Rollovers"),
      p(
        "Rolling over a 401(k) sounds simple \u2014 move the money, pick new investments, done. But there are a few traps that catch people every year, and they can cost you real money."
      ),
      p(
        "First, the 60-day rule. If your old plan sends you a check instead of wiring it directly, you have exactly 60 days to deposit it into your new account. Miss that deadline by even one day and the IRS treats the entire amount as a taxable distribution. On a $200,000 balance, that could mean a $50,000+ tax bill."
      ),
      ul([
        "<strong>Always request a direct (trustee-to-trustee) transfer.</strong> The money never touches your hands, so there\u2019s no deadline to worry about.",
        "<strong>Check for employer stock.</strong> If your 401(k) holds company shares, a strategy called Net Unrealized Appreciation (NUA) could save you thousands in taxes.",
        "<strong>Compare fees before you move.</strong> Some IRA providers charge annual maintenance fees, transaction fees, or high expense ratios that eat into your returns.",
      ]),
      callout(
        "Important: Your old employer may withhold 20% for taxes on indirect rollovers. You\u2019ll need to come up with that 20% out of pocket to deposit the full amount \u2014 or pay tax and a 10% penalty on the shortfall.",
        "warning"
      ),
    ].join(""),
  },

  "tax-rmd": {
    subject: "The RMD mistake that costs retirees 25% in penalties",
    body: [
      h2("Don\u2019t Let the IRS Take 25% of Your Savings"),
      p(
        "Required Minimum Distributions start at age 73 (as of the SECURE 2.0 Act). If you don\u2019t take enough out of your traditional IRA or 401(k) each year, the IRS hits you with a 25% penalty on the shortfall. That\u2019s on top of the regular income tax you already owe."
      ),
      p(
        "Here\u2019s the part that trips people up: your RMD is based on your account balance on December 31 of the prior year. If your investments grew during the year, your RMD can jump significantly \u2014 and your tax bracket can jump with it."
      ),
      ul([
        "<strong>Know your deadline.</strong> First-year RMD can be delayed to April 1 of the following year \u2014 but then you\u2019ll owe two RMDs in one year, which could push you into a higher bracket.",
        "<strong>Consider Roth conversions before 73.</strong> Roth IRAs have no RMDs during the owner\u2019s lifetime. Converting some funds in your 60s can reduce future mandatory distributions.",
        "<strong>Use QCDs if you\u2019re charitable.</strong> Qualified Charitable Distributions (up to $105,000/year) count toward your RMD but aren\u2019t included in taxable income.",
      ]),
      callout(
        "The penalty dropped from 50% to 25% under SECURE 2.0, and falls to 10% if you correct the mistake within 2 years. Still, it\u2019s money you don\u2019t want to lose.",
        "info"
      ),
    ].join(""),
  },

  "market-protection": {
    subject: "What happened to retirees who didn\u2019t prepare for 2008",
    body: [
      h2("2008: The Year That Changed Retirement Planning"),
      p(
        "Between October 2007 and March 2009, the S&P 500 dropped 57%. The average 401(k) balance fell from $69,200 to $47,500. For people already retired and drawing income, the damage was even worse \u2014 they were selling shares at the bottom just to pay bills."
      ),
      p(
        "The people who recovered fastest had one thing in common: they didn\u2019t have all their eggs in one basket. Those with 10\u201320% in uncorrelated assets \u2014 things that don\u2019t move in lockstep with stocks \u2014 had a cushion that let them ride out the storm without panic selling."
      ),
      p(
        "Here\u2019s what that looked like in real numbers. A retiree with $500,000 entirely in a stock index fund saw their balance drop to roughly $215,000. A retiree with 80% stocks and 20% in alternative hard assets still took a hit, but their portfolio held closer to $300,000 \u2014 an $85,000 difference that bought time for the stock portion to recover."
      ),
      callout(
        "The average bear market lasts 9.6 months. The average recovery takes 2.2 years. If you\u2019re withdrawing 4\u201305% per year during that stretch, the math works against you fast. That\u2019s called \u201csequence of returns risk\u201d \u2014 and it\u2019s the #1 threat to retirement portfolios.",
        "warning"
      ),
    ].join(""),
  },

  "fees-comparison": {
    subject: "The fee trap: how some Gold IRA companies charge 3x more",
    body: [
      h2("Gold IRA Fees: What You Should Actually Pay"),
      p(
        "We reviewed the fee structures of 14 Gold IRA companies, and the range is staggering. Setup fees go from $0 to $325. Annual storage fees range from $100 to $300. And some companies bury their biggest charge \u2014 the spread on metals \u2014 so deep in the fine print you don\u2019t see it until after you buy."
      ),
      p(
        "The \u201cspread\u201d is the difference between what the company pays for a coin and what they charge you. Industry standard is 5\u201308% for gold. But we\u2019ve seen companies charging 15\u201320% spreads on popular coins, especially to first-time buyers who don\u2019t know what to compare against."
      ),
      ul([
        "<strong>Ask for the buy-back price upfront.</strong> If a company won\u2019t tell you what they\u2019d pay to buy back the same coin they\u2019re selling you, that\u2019s a red flag.",
        "<strong>Compare total first-year cost.</strong> Add up setup fee + first year storage + spread on your initial purchase. That\u2019s your real cost of entry.",
        "<strong>Watch for \u201cfree storage\u201d offers.</strong> They usually come with higher spreads that cost you more than the storage would have.",
      ]),
      callout(
        "A 10% spread on a $50,000 gold purchase means you\u2019re starting $5,000 in the hole. At a fair 5% spread, that cost drops to $2,500. Over a 10-year hold, that $2,500 difference compounds.",
        "info"
      ),
    ].join(""),
  },

  silver: {
    subject: "Silver inventory is dropping \u2014 here\u2019s what it means for you",
    body: [
      h2("Why Silver Supply Is Getting Tight"),
      p(
        "COMEX registered silver inventory has fallen over 60% since 2021. At the same time, industrial demand for silver is surging \u2014 solar panels, EVs, electronics, and medical devices all require silver. The solar industry alone now consumes roughly 140 million ounces per year, up from 50 million in 2014."
      ),
      p(
        "Here\u2019s why that matters for retirement investors. Silver is both a precious metal (store of value) and an industrial metal (real demand). When supply tightens and demand grows from both investors and manufacturers, prices have historically moved up \u2014 sometimes sharply."
      ),
      p(
        "The gold-to-silver ratio currently sits around 80:1, meaning it takes 80 ounces of silver to buy one ounce of gold. The historical average over the last 50 years is closer to 60:1. Some analysts believe silver is undervalued relative to gold, which is part of why we\u2019ve seen a 25% increase in Silver IRA openings over the past 12 months."
      ),
      callout(
        "Silver is IRA-eligible only in specific forms: .999 fine bars or coins like the American Silver Eagle. Collectible or numismatic silver coins generally don\u2019t qualify for IRA inclusion.",
        "info"
      ),
    ].join(""),
  },

  healthcare: {
    subject: "The $315,000 retirement expense most people forget",
    body: [
      h2("Healthcare: The Bill Nobody Plans For"),
      p(
        "According to Fidelity\u2019s 2023 Retiree Health Care Cost Estimate, the average 65-year-old couple retiring today will need roughly $315,000 (after tax) to cover healthcare expenses in retirement. And that doesn\u2019t include long-term care."
      ),
      p(
        "Medicare covers a lot, but not everything. Dental, vision, most hearing aids, and long-term nursing care are largely on you. A semi-private room in a nursing facility averages $7,908 per month nationally. A three-year stay \u2014 the median for people who need one \u2014 runs about $285,000."
      ),
      ul([
        "<strong>Medicare Part B premiums are income-tested.</strong> If your retirement income is above $103,000 (single) or $206,000 (married), you pay higher premiums through IRMAA surcharges.",
        "<strong>Medigap plans vary by state.</strong> Plan G tends to offer the best value, but pricing depends on where you live and when you enroll.",
        "<strong>HSAs can\u2019t be funded after Medicare enrollment.</strong> If you\u2019re still working at 65, you may want to max out your HSA before signing up for Part A.",
      ]),
      callout(
        "Healthcare inflation has averaged 5.9% annually over the last 20 years \u2014 nearly double the general inflation rate. Assets that keep pace with or outpace inflation can help protect against this rising cost.",
        "warning"
      ),
    ].join(""),
  },

  general: {
    subject: "3 retirement strategies Wall Street doesn\u2019t want you to know",
    body: [
      h2("What the Big Brokerages Leave Out"),
      p(
        "Wall Street makes money when you keep your savings in their products. That\u2019s not a conspiracy \u2014 it\u2019s just their business model. The more assets under management, the more fees they collect. So naturally, they don\u2019t spend a lot of time talking about strategies that move money out of their system."
      ),
      p(
        "Here are three approaches that experienced retirees use, but that rarely show up in mainstream financial advice:"
      ),
      ul([
        "<strong>Self-directed IRAs.</strong> Most people don\u2019t know you can hold real estate, precious metals, private equity, and other alternative assets in an IRA. The same tax advantages apply \u2014 you just need a custodian that allows it.",
        "<strong>Roth conversion laddering.</strong> By converting portions of your traditional IRA to a Roth over several years (especially in lower-income years between retirement and Social Security), you can dramatically reduce your lifetime tax bill.",
        "<strong>Hard-asset diversification.</strong> Holding 5\u201320% of your portfolio in physical assets that you can see and touch gives you a hedge that doesn\u2019t depend on any company\u2019s stock price, any government\u2019s fiscal policy, or any bank\u2019s solvency.",
      ]),
      callout(
        "None of these strategies are exotic or risky \u2014 they\u2019ve been available for decades. The IRS explicitly allows them. The question is whether your current custodian supports them.",
        "info"
      ),
    ].join(""),
  },
};

/**
 * Returns subject + body for the day-3 deep-dive email (email 1).
 * Pure value content — no gold pitch.
 */
export function getTopicDeepDive(theme: EmailTheme): { subject: string; body: string } {
  return DEEP_DIVE[theme];
}

// ---------------------------------------------------------------------------
// 3. Topic Expansion — email 2, day 7 (broadens into related concern)
// ---------------------------------------------------------------------------

const TOPIC_EXPANSION: Record<EmailTheme, { subject: string; body: string }> = {
  pension: {
    subject: "Is your pension COLA keeping up with real inflation?",
    body: [
      h2("When Your COLA Doesn\u2019t Keep Up"),
      p(
        "Most pensions come with a cost-of-living adjustment, but here\u2019s the catch: many are capped at 2\u20133% per year. When actual inflation runs at 4\u20136% \u2014 like it did in 2022 and 2023 \u2014 your purchasing power quietly erodes every single month."
      ),
      p(
        "Over a 20-year retirement, a 2% COLA on a $3,000/month pension gives you $4,457/month by year 20. But if real inflation averages 4%, you\u2019d need $6,573/month to buy the same groceries, gas, and medications. That\u2019s a gap of over $2,100 per month."
      ),
      p(
        "This is why financial advisors often recommend that pension holders keep a separate pool of assets that has the potential to grow faster than their COLA. Some retirees are diversifying beyond traditional stocks and bonds into assets with a track record of performing during inflationary periods."
      ),
      callout(
        "Check your pension\u2019s COLA formula. Is it fixed (e.g., 2%/year), tied to CPI, or discretionary? Knowing your formula is the first step to planning around its limitations.",
        "info"
      ),
    ].join(""),
  },

  "401k-rollover": {
    subject: "The hidden fee your old 401(k) is still charging you",
    body: [
      h2("Your Old 401(k) Is Still Costing You"),
      p(
        "Left your 401(k) with a former employer? You might be paying fees you don\u2019t even know about. A recent Department of Labor study found that the average 401(k) participant pays 1.0\u20131.5% in total annual fees \u2014 but many don\u2019t realize it because the charges are deducted directly from their returns."
      ),
      p(
        "On a $300,000 account, a 1.2% annual fee means $3,600 per year leaving your pocket. Over 10 years, that\u2019s roughly $36,000 in fees alone \u2014 not counting the lost growth on that money. When you\u2019re no longer contributing and getting an employer match, those fees hit harder."
      ),
      p(
        "Rolling into an IRA gives you more control over what you pay. Some IRA custodians charge flat annual fees instead of a percentage, which saves money on larger balances. Others offer asset classes your old plan didn\u2019t, which can help you build a more diversified portfolio for the years ahead."
      ),
      callout(
        "Request a fee disclosure document (Form 404a-5) from your old plan administrator. It breaks down every charge \u2014 administrative fees, investment fees, and individual service fees. Most people are surprised by what they find.",
        "info"
      ),
    ].join(""),
  },

  "tax-rmd": {
    subject: "3 distribution strategies that could save you thousands in taxes",
    body: [
      h2("Smarter Ways to Draw Down Your Savings"),
      p(
        "Which accounts you pull from first \u2014 and when \u2014 can make a five-figure difference in your lifetime tax bill. Most people default to drawing from their traditional IRA first because it\u2019s the biggest bucket. But that\u2019s not always the smartest move."
      ),
      p(
        "Strategy one: fill up the lower tax brackets. If you retire at 62 but don\u2019t start Social Security until 67, you have five years of potentially low income. Use those years to do Roth conversions up to the top of the 12% or 22% bracket. You\u2019ll pay some tax now, but avoid paying 24%+ later when RMDs kick in."
      ),
      ul([
        "<strong>Bracket management.</strong> Pull just enough from taxable accounts each year to stay below key thresholds for Medicare surcharges (IRMAA) and Social Security taxation.",
        "<strong>Tax-loss harvesting in retirement.</strong> If you have a taxable brokerage account, selling underperformers to offset gains can free up room for Roth conversions.",
        "<strong>Asset location matters.</strong> High-growth assets in Roth accounts, bonds and income-producers in traditional accounts. Keeping the right assets in the right accounts reduces your overall tax drag.",
      ]),
      callout(
        "The difference between a random drawdown strategy and a tax-optimized one can be $50,000\u2013$100,000 over a 25-year retirement. It\u2019s worth spending time on.",
        "info"
      ),
    ].join(""),
  },

  "market-protection": {
    subject: "The retirement risk nobody talks about (it\u2019s not a crash)",
    body: [
      h2("The Slow Leak That Drains Retirement Savings"),
      p(
        "Everyone worries about a stock market crash. But the risk that quietly destroys more retirement plans isn\u2019t a sudden drop \u2014 it\u2019s inflation. A dollar today buys what 45 cents bought in 2000. That\u2019s not hypothetical. That\u2019s what actually happened."
      ),
      p(
        "If your retirement savings are growing at 4\u20135% per year but inflation runs at 3\u20134%, your real return is 1% or less. Stretch that over 25 years and your purchasing power barely moves \u2014 while the cost of healthcare, housing, and food keeps climbing."
      ),
      p(
        "This is why some retirees are looking beyond CDs, money markets, and traditional bond funds. Assets that have historically kept pace with \u2014 or outpaced \u2014 inflation over long periods offer a counterbalance. It doesn\u2019t mean abandoning your current portfolio. Even a small allocation to inflation-resistant assets can make a meaningful difference in maintaining your standard of living."
      ),
      callout(
        "The Social Security COLA averaged 2.6% over the last 20 years. Healthcare inflation averaged 5.9% over the same period. That gap adds up to tens of thousands of dollars over a retirement.",
        "warning"
      ),
    ].join(""),
  },

  "fees-comparison": {
    subject: "What a 1% fee difference really costs over 20 years",
    body: [
      h2("Small Percentages, Big Dollars"),
      p(
        "A 1% difference in fees sounds trivial. On a $100,000 account, it\u2019s just $1,000 per year. But over 20 years with compounding, that seemingly small difference adds up to roughly $64,000 in lost wealth. On a $500,000 portfolio, it\u2019s over $320,000."
      ),
      p(
        "Here\u2019s the math in plain terms: every dollar you pay in fees is a dollar that\u2019s no longer growing for you. And it\u2019s not just the dollar \u2014 it\u2019s the growth that dollar would have generated for the next 10, 15, or 20 years. Fees compound in reverse."
      ),
      p(
        "This applies to every type of retirement account \u2014 your 401(k), IRA, Gold IRA, annuity, or managed brokerage account. The companies that are transparent about their fee structure tend to be the ones that can afford to be, because their fees are genuinely competitive. The ones that make you dig for pricing are usually hiding something."
      ),
      callout(
        "Quick check: look at your most recent statement. Find the line for \u201cexpense ratio\u201d or \u201cmanagement fee.\u201d Multiply that percentage by your total balance. That\u2019s what you\u2019re paying this year. Are you getting that much value in return?",
        "info"
      ),
    ].join(""),
  },

  silver: {
    subject: "Gold vs silver \u2014 which belongs in your retirement?",
    body: [
      h2("Two Metals, Two Different Roles"),
      p(
        "Gold and silver both qualify for IRAs, but they behave differently in a portfolio. Gold tends to be a stability play \u2014 it holds its value during uncertainty and moves relatively slowly. Silver is more volatile but has higher upside potential because of its dual role as both a precious metal and an industrial commodity."
      ),
      p(
        "During the 2020\u20132023 period, gold gained about 25%. Silver gained 47%. But silver also dropped faster during the 2022 pullback. That\u2019s the tradeoff: more growth potential, but a bumpier ride. For retirement investors, the question isn\u2019t which one \u2014 it\u2019s what mix makes sense for your timeline."
      ),
      p(
        "Many advisors who specialize in precious metals IRAs suggest a 70/30 or 80/20 gold-to-silver ratio for retirees. The gold anchors the position with stability while the silver adds growth potential. For those 5\u201310+ years from needing the funds, a heavier silver allocation can make sense."
      ),
      callout(
        "Silver takes up about 128 times more storage space per dollar of value than gold. That\u2019s one reason storage fees on silver IRAs can be slightly higher. Factor that into your cost comparison.",
        "info"
      ),
    ].join(""),
  },

  healthcare: {
    subject: "Medicare doesn\u2019t cover this (and it costs $100k+)",
    body: [
      h2("The Medicare Gap That Catches Retirees Off Guard"),
      p(
        "Medicare is excellent hospital and doctor coverage. But it has a massive blind spot: long-term care. Nursing homes, assisted living, and in-home care aides are largely not covered. And the costs are staggering \u2014 the national median for a semi-private nursing home room is $7,908 per month."
      ),
      p(
        "Medicaid covers long-term care, but only after you\u2019ve spent down nearly all your assets. For most retirees who spent decades saving, that\u2019s not an acceptable option. You worked too hard to give it all away to qualify for government assistance."
      ),
      p(
        "There are strategies to prepare. Long-term care insurance is one option, though premiums have risen significantly. Hybrid life/LTC policies are another. And some retirees are building dedicated \u201chealthcare buckets\u201d within their retirement portfolio \u2014 assets set aside specifically to cover the medical costs that Medicare won\u2019t, invested in a way that keeps pace with healthcare inflation."
      ),
      callout(
        "70% of Americans turning 65 today will need some form of long-term care during their lifetime. The average need lasts 2.5 years. Planning for it isn\u2019t pessimism \u2014 it\u2019s math.",
        "info"
      ),
    ].join(""),
  },

  general: {
    subject: "What retirees who sleep well at night do differently",
    body: [
      h2("The Mindset Shift Behind Confident Retirements"),
      p(
        "We\u2019ve talked to thousands of Americans planning their retirement. The ones who feel confident \u2014 not worried, not anxious, genuinely confident \u2014 tend to share three habits that have nothing to do with how much money they have."
      ),
      p(
        "First, they have multiple income streams. Not just Social Security, not just a 401(k) \u2014 but a combination: pension or SS, a drawdown account, maybe rental income or a part-time gig they enjoy, and a reserve of assets that aren\u2019t tied to the stock market. When one stream dips, the others keep flowing."
      ),
      ul([
        "<strong>They know their numbers.</strong> Not just their account balance, but their monthly expenses, their tax bracket, their Medicare costs, and their \u201csleep well\u201d number \u2014 the amount they need in accessible reserves to feel secure.",
        "<strong>They diversify beyond Wall Street.</strong> Some hold real estate. Some hold precious metals. Some hold both. The common thread is that not everything depends on the same market going up.",
        "<strong>They have a written plan.</strong> Not a vague idea. An actual document that says: here\u2019s what I draw from, when, and in what order. When the market drops, they don\u2019t panic because the plan already accounted for it.",
      ]),
      callout(
        "Confidence in retirement doesn\u2019t come from having the most money. It comes from having a plan that works even when things don\u2019t go perfectly.",
        "info"
      ),
    ].join(""),
  },
};

/**
 * Returns subject + body for the day-7 topic-expansion email (email 2).
 * Broadens into a related retirement concern. Soft mention of diversification OK.
 */
export function getTopicExpansion(theme: EmailTheme): { subject: string; body: string } {
  return TOPIC_EXPANSION[theme];
}

// ---------------------------------------------------------------------------
// 4. Relevant Calculator — maps each theme to the best-fit calculator tool
// ---------------------------------------------------------------------------

const CALCULATORS: Record<EmailTheme, { name: string; url: string; description: string }> = {
  pension: {
    name: "Pension vs Gold IRA Calculator",
    url: "https://richdadretirement.com/tools/gold-allocation-calculator",
    description: "See how adding a gold allocation alongside your pension could affect your overall retirement income and inflation protection.",
  },
  "401k-rollover": {
    name: "401(k) Rollover Savings Calculator",
    url: "https://richdadretirement.com/tools/gold-ira-calculator",
    description: "Compare what your 401(k) balance could look like after rolling into different IRA options \u2014 traditional, Roth, or Gold IRA.",
  },
  "tax-rmd": {
    name: "RMD Calculator",
    url: "https://richdadretirement.com/tools/rmd-calculator",
    description: "Calculate your Required Minimum Distribution for this year and see how different strategies could reduce your tax burden.",
  },
  "market-protection": {
    name: "Retirement Readiness Calculator",
    url: "https://richdadretirement.com/tools/retirement-calculator",
    description: "Find out if your current savings and investment mix are on track to sustain your retirement through market ups and downs.",
  },
  "fees-comparison": {
    name: "Gold IRA Fee Comparison",
    url: "https://richdadretirement.com/tools/gold-ira-fee-calculator",
    description: "Compare total costs across Gold IRA companies side by side \u2014 setup fees, storage, spreads, and annual charges.",
  },
  silver: {
    name: "Silver Investment Calculator",
    url: "https://richdadretirement.com/tools/silver-calculator",
    description: "Model different silver allocation scenarios and see how silver\u2019s growth potential could complement your retirement portfolio.",
  },
  healthcare: {
    name: "Retirement Healthcare Cost Calculator",
    url: "https://richdadretirement.com/tools/retirement-calculator",
    description: "Estimate your total healthcare costs in retirement, including Medicare premiums, supplemental insurance, and long-term care.",
  },
  general: {
    name: "Gold vs Cash Calculator",
    url: "https://richdadretirement.com/tools/gold-vs-cash-calculator",
    description: "Compare the purchasing power of gold versus cash savings over the last 20 years and into your retirement horizon.",
  },
};

/**
 * Returns the most relevant calculator for a given theme.
 */
export function getRelevantCalculator(theme: EmailTheme): { name: string; url: string; description: string } {
  return CALCULATORS[theme];
}
