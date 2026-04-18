/**
 * Weekly Digest Email Builder
 *
 * Sends every Monday at 10 AM ET to all active subscribers who aren't
 * in an active nurture sequence. This is the "thing they won't unsubscribe from"
 * — genuine value every week that keeps us in their inbox.
 *
 * 4 sections:
 * 1. Gold Price This Week (from live data or hardcoded recent)
 * 2. Retirement Tip of the Week (rotating through 52 tips)
 * 3. Top Article (curated from our content)
 * 4. Tool Spotlight (rotating through calculators)
 */

import { emailLayout, p, h2, callout, statRow, secondaryCta, utmLink } from "./email-templates";

const SITE = "https://richdadretirement.com";

// === 52 RETIREMENT TIPS (1 per week for a full year) ===
const WEEKLY_TIPS: { title: string; body: string }[] = [
  { title: "Max out catch-up contributions", body: "If you're 50+, you can contribute an extra $7,500 to your 401(k) and $1,000 to your IRA above the normal limits. That's $8,500 in extra tax-advantaged savings every year." },
  { title: "Know your full retirement age", body: "Claiming Social Security at 62 cuts your benefit by up to 30%. Waiting until 70 increases it by 24% above your full retirement age amount. Every month matters." },
  { title: "Don't forget about old 401(k)s", body: "The average American changes jobs 12 times. If you left money behind in old employer plans, you might be paying fees on forgotten accounts. Consolidate them." },
  { title: "Healthcare is your biggest expense", body: "The average 65-year-old couple will spend $315,000 on healthcare in retirement. Plan for it now — Medicare doesn't cover everything." },
  { title: "Review your beneficiary designations", body: "Beneficiary forms override your will. If you got divorced and never updated your 401(k) beneficiary, your ex could inherit your retirement savings." },
  { title: "Understand the Roth conversion ladder", body: "Converting traditional IRA money to Roth in low-income years means paying taxes now at a lower rate. After 5 years, withdrawals are tax-free forever." },
  { title: "The 4% rule needs updating", body: "The classic '4% withdrawal rule' was created in 1994. With today's longer lifespans and market volatility, many advisors now suggest 3.3-3.5% is safer." },
  { title: "Consider your state's tax treatment", body: "13 states tax Social Security benefits. 9 states have no income tax at all. Where you retire can save you thousands per year." },
  { title: "Build a 2-year cash buffer", body: "Keep 2 years of living expenses in cash or short-term bonds. This prevents you from selling investments during a market downturn to cover bills." },
  { title: "Delay Social Security if you can", body: "Each year you delay past your full retirement age (up to 70), your benefit grows by 8%. That's a guaranteed 8% annual return — hard to beat anywhere." },
  { title: "Review your asset allocation annually", body: "A portfolio that was 60/40 stocks/bonds 10 years ago may have drifted to 80/20. Rebalance annually to maintain your risk tolerance." },
  { title: "Don't ignore inflation", body: "$1 today will be worth about $0.67 in 15 years at 3% inflation. Your retirement savings need to grow faster than inflation or you're losing money." },
  { title: "Consider a Health Savings Account", body: "If you have a high-deductible health plan, HSA contributions are triple tax-advantaged: deductible going in, grow tax-free, and withdrawals for medical expenses are tax-free." },
  { title: "Know your RMD age", body: "Under SECURE 2.0, you must start Required Minimum Distributions at age 73 (75 starting in 2033). Missing an RMD triggers a 25% penalty on the amount you should have withdrawn." },
  { title: "Diversify beyond stocks and bonds", body: "Traditional portfolios assume stocks and bonds are enough. But in 2022, both stocks AND bonds dropped together. Real diversification means different asset classes." },
  { title: "Talk to your spouse about money", body: "42% of couples disagree on how much they need to retire. Get on the same page about spending, savings goals, and lifestyle expectations." },
  { title: "Factor in long-term care costs", body: "70% of people over 65 will need some form of long-term care. A private room in a nursing home averages $108,000/year. Long-term care insurance is cheaper before 60." },
  { title: "Don't cash out your 401(k) when changing jobs", body: "Cashing out triggers income tax PLUS a 10% early withdrawal penalty if you're under 59½. Roll it directly to an IRA instead — no tax, no penalty." },
  { title: "Review your Social Security statement", body: "Create an account at ssa.gov to see your projected benefits. Errors happen — and the sooner you catch them, the easier they are to fix." },
  { title: "Consider part-time work in early retirement", body: "Even $1,000/month from part-time work can extend your savings by years. Plus it keeps you active and gives your portfolio time to recover from any early losses." },
  { title: "Understand the Medicare enrollment window", body: "You have a 7-month window around your 65th birthday to enroll in Medicare. Missing it can result in lifetime late enrollment penalties of 10% per year." },
  { title: "Keep your estate plan updated", body: "Review your will, power of attorney, and healthcare directive every 3-5 years or after any major life event. Outdated documents cause more problems than no documents." },
  { title: "Watch out for sequence-of-returns risk", body: "A market crash in your first few years of retirement is far more damaging than one 10 years in. This is why having non-correlated assets matters most in early retirement." },
  { title: "Don't put all your eggs in company stock", body: "Enron employees lost their retirement savings because most of it was in company stock. Limit any single stock to 10% of your portfolio." },
  { title: "Consider a Roth IRA for tax diversification", body: "Having both traditional (pre-tax) and Roth (post-tax) accounts gives you flexibility in retirement to manage your tax bracket year by year." },
  { title: "Know the difference between Medicare parts", body: "Part A covers hospital stays (usually free). Part B covers doctors (monthly premium). Part D covers prescriptions. Medicare Advantage (Part C) bundles them. Know what you need." },
  { title: "Track your spending for 3 months", body: "Most people underestimate retirement spending by 20-30%. Track every dollar for 3 months to get a realistic baseline. Include the small stuff — it adds up." },
  { title: "Don't neglect dental and vision coverage", body: "Original Medicare doesn't cover routine dental or vision. Budget $2,000-$5,000 per year for these expenses, or get a Medicare Advantage plan that includes them." },
  { title: "Understand the widow's penalty", body: "When one spouse dies, the survivor loses one Social Security check but keeps the higher one. Meanwhile, they file as single (higher tax rate). Plan for this." },
  { title: "Review your insurance needs", body: "You might be over-insured. After the kids are grown and the mortgage is paid, you may not need life insurance. Redirect those premiums to retirement savings." },
  { title: "Consider your housing strategy", body: "Your home may be your largest asset. Downsizing, a reverse mortgage, or relocating to a lower-cost area can free up significant capital for retirement." },
  { title: "Build multiple income streams", body: "Social Security, pension, IRA withdrawals, part-time work, rental income. The more income streams you have, the more resilient your retirement is." },
  { title: "Don't panic-sell during market drops", body: "The S&P 500 has recovered from every major crash in history. Selling during a downturn locks in losses. If your time horizon is 10+ years, stay the course." },
  { title: "Understand IRMAA surcharges", body: "If your income exceeds $103,000 (single) or $206,000 (married), you'll pay higher Medicare Part B and D premiums. Strategic Roth conversions can help avoid this." },
  { title: "Create a retirement paycheck", body: "In retirement, you don't get a paycheck — you create one. Set up automatic monthly transfers from your investment accounts to your checking account to maintain cash flow discipline." },
  { title: "Consider the bucket strategy", body: "Divide your savings into 3 buckets: 1-2 years in cash, 3-7 years in bonds, 8+ years in stocks. Draw from cash first, letting stocks grow." },
  { title: "Don't forget about taxes on Social Security", body: "Up to 85% of your Social Security benefits may be taxable if your combined income exceeds $34,000 (single) or $44,000 (married)." },
  { title: "Review your withdrawal strategy", body: "The order you withdraw from accounts matters. Generally: taxable accounts first, then tax-deferred (traditional IRA), then tax-free (Roth). But sometimes the opposite saves more." },
  { title: "Plan for inflation in retirement", body: "A $5,000/month lifestyle today will cost $6,700/month in 10 years at 3% inflation. Make sure your income sources can keep up." },
  { title: "Know your pension options", body: "Most pensions offer a choice: higher payments for your life only, or lower payments that continue for your spouse. Run the numbers — the survivor benefit is usually worth it." },
  { title: "Consider a phased retirement", body: "Instead of going from full-time to zero, ask about reduced hours or consulting. It eases the psychological transition and lets your savings last longer." },
  { title: "Check your credit before retirement", body: "Good credit matters even in retirement — for insurance rates, renting, and emergencies. Pay off debts and keep at least one active credit card." },
  { title: "Automate your savings", body: "If you're still working, increase your 401(k) contribution by 1% every year. You won't notice the difference in your paycheck, but it compounds enormously." },
  { title: "Understand your pension's COLA", body: "Not all pensions include cost-of-living adjustments. If yours doesn't, a $3,000/month pension today will feel like $2,000/month in 15 years." },
  { title: "Have the money talk with your kids", body: "Be transparent about your financial situation. Your children shouldn't be surprised by your estate plan. It prevents family conflict and helps them plan their own finances." },
  { title: "Don't ignore your emergency fund", body: "Even in retirement, keep 6 months of expenses in easily accessible savings. Unexpected car repairs, home maintenance, and medical bills don't stop because you retired." },
  { title: "Review your investment fees", body: "A 1% annual fee on a $500,000 portfolio costs you $5,000/year. Over 20 years, that's over $100,000 in fees alone. Know what you're paying and why." },
  { title: "Consider tax-loss harvesting", body: "In taxable accounts, selling investments at a loss can offset gains and reduce your tax bill by up to $3,000/year. The IRS lets you carry unused losses forward indefinitely." },
  { title: "Protect against elder financial abuse", body: "Financial exploitation costs seniors $36 billion annually. Never give financial power of attorney to someone you don't trust completely. Set up account alerts for large transactions." },
  { title: "Know when to take the pension vs lump sum", body: "If your pension offers a lump sum buyout, compare: your life expectancy, current interest rates, and whether you can invest the lump sum wisely. Often the pension is the better deal." },
  { title: "Don't retire into debt", body: "Entering retirement with a mortgage, car payments, or credit card debt puts enormous pressure on your fixed income. Pay off high-interest debt before you stop working." },
  { title: "Plan for both spouses' retirement", body: "If one spouse retires before the other, plan for the gap period. Health insurance coverage, reduced income, and changing dynamics all need addressing." },
];

// === TOP ARTICLES (rotating curated picks) ===
const TOP_ARTICLES: { title: string; url: string; teaser: string }[] = [
  { title: "Gold IRA Pros and Cons: Honest 2026 Analysis", url: "/gold-ira-pros-and-cons", teaser: "We break down the 6 real advantages and 6 honest downsides — no sugar-coating." },
  { title: "How Does a Gold IRA Work? Step-by-Step", url: "/how-does-a-gold-ira-work", teaser: "The 3 key players, 5 steps, and what actually happens to your gold." },
  { title: "Is Gold a Good Investment in 2026?", url: "/is-gold-a-good-investment", teaser: "Gold vs S&P 500 vs Bonds — 20-year performance data tells the real story." },
  { title: "Gold IRA Rollover: Complete Guide", url: "/gold-ira-rollover", teaser: "Direct vs indirect, eligible accounts, costs, and the 60-day trap to avoid." },
  { title: "Gold IRA Statistics 2026: Industry Data", url: "/gold-ira-statistics", teaser: "Central bank buying, market size, average account, and performance data." },
  { title: "Best Gold IRA Companies 2026", url: "/best-gold-ira-companies", teaser: "We reviewed 20+ companies. These 5 earned our recommendation." },
  { title: "Gold IRA Fees: What You'll Really Pay", url: "/guide/gold-ira-fees", teaser: "Setup fees, storage fees, annual fees — and which companies waive them." },
  { title: "RMD Penalty: What It Costs If You Forget", url: "/learn/rmd-penalty-if-i-forget", teaser: "The 25% penalty is brutal. Here's how to avoid it and what to do if you missed one." },
];

// === TOOL SPOTLIGHTS ===
const TOOL_SPOTLIGHTS: { name: string; url: string; description: string }[] = [
  { name: "Gold vs Cash Calculator", url: "/tools/gold-vs-cash-calculator", description: "See how $100,000 in gold compares to cash over 5, 10, or 20 years. The inflation math might surprise you." },
  { name: "RMD Calculator", url: "/tools/rmd-calculator", description: "Enter your age and account balance to see your Required Minimum Distribution for this year." },
  { name: "Retirement Readiness Calculator", url: "/tools/retirement-calculator", description: "Will your savings last 30 years? Enter your numbers and find out in 60 seconds." },
  { name: "Gold IRA Fee Comparison", url: "/tools/gold-ira-fee-calculator", description: "Compare fees across the top 5 Gold IRA companies side by side." },
  { name: "Social Security Estimator", url: "/tools/social-security-calculator", description: "Estimate your Social Security benefits at 62, 67, and 70 — and see the difference." },
  { name: "FIRE Calculator", url: "/tools/fire-calculator", description: "Calculate your Financial Independence number and how long until you reach it." },
  { name: "Gold Allocation Calculator", url: "/tools/gold-allocation-calculator", description: "How much of your portfolio should be in gold? Get a personalized recommendation." },
  { name: "Inflation Impact Calculator", url: "/tools/inflation-calculator", description: "See how much purchasing power you've lost over any time period. The results are eye-opening." },
];

/**
 * Get the week number of the year (1-52).
 */
function getWeekNumber(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  const oneWeek = 604800000;
  return Math.ceil(diff / oneWeek);
}

/**
 * Build the weekly digest email HTML.
 */
export function buildWeeklyDigest(email: string, goldPrice?: string): string {
  const weekNum = getWeekNumber();
  const tip = WEEKLY_TIPS[weekNum % WEEKLY_TIPS.length];
  const article = TOP_ARTICLES[weekNum % TOP_ARTICLES.length];
  const tool = TOOL_SPOTLIGHTS[weekNum % TOOL_SPOTLIGHTS.length];

  const displayPrice = goldPrice || "$5,350";

  return emailLayout({
    email,
    sequence: "weekly-digest",
    preheader: `Gold ${displayPrice} this week • ${tip.title}`,
    body: `
      ${h2(`Gold ${displayPrice} This Week`)}
      ${p(`Here's your weekly retirement intelligence from Rich Dad Retirement.`)}

      ${callout(`
        <strong style="color: #d4a843;">Live Gold Price: ${displayPrice}/oz</strong><br/>
        <span style="font-size: 13px;">Gold is up 18% year-over-year. Central banks bought 1,082 tonnes in 2024 — the second-highest year on record.</span>
      `, "info")}

      ${h2(`💡 Tip of the Week: ${tip.title}`)}
      ${p(tip.body)}

      ${h2("📰 Top Article")}
      ${p(`<strong><a href="${utmLink(SITE + article.url, "weekly-digest", weekNum)}" style="color: #000080; text-decoration: underline;">${article.title}</a></strong>`)}
      ${p(article.teaser)}

      ${h2("🧮 Tool Spotlight")}
      ${p(`<strong>${tool.name}</strong>`)}
      ${p(tool.description)}
      ${secondaryCta(`Try the ${tool.name} →`, utmLink(SITE + tool.url, "weekly-digest", weekNum))}
    `,
    ctaText: "Ready to explore gold? Take the 60-second quiz →",
    ctaUrl: utmLink(SITE + "/quiz", "weekly-digest", weekNum),
  });
}

/**
 * Get the subject line for this week's digest.
 */
export function getWeeklyDigestSubject(goldPrice?: string): string {
  const weekNum = getWeekNumber();
  const tip = WEEKLY_TIPS[weekNum % WEEKLY_TIPS.length];
  const displayPrice = goldPrice || "$5,350";
  return `Gold ${displayPrice} this week + ${tip.title.toLowerCase()}`;
}
