/**
 * Contextual CTA copy that bridges article topic → Gold IRA offer
 *
 * The #1 conversion problem: generic "Free Gold IRA Kit" doesn't connect
 * with what visitors actually care about on each page.
 *
 * This mapping provides topic-relevant CTA copy that bridges:
 * WHAT THEY'RE READING → WHY GOLD MATTERS FOR THEM
 */

export interface ContextualCTA {
  /** Sidebar widget headline */
  sidebarHeadline: string;
  /** Sidebar widget body text */
  sidebarBody: string;
  /** In-content CTA headline */
  inContentHeadline: string;
  /** In-content CTA body */
  inContentBody: string;
  /** Footer CTA headline */
  footerHeadline: string;
  /** Footer CTA subheadline */
  footerSubheadline: string;
  /** Augusta context for link routing */
  augustaContext?: "default" | "comparison" | "fees" | "silver" | "mid-intent";
}

/** Default fallback — used when no cluster match */
const DEFAULT_CTA: ContextualCTA = {
  sidebarHeadline: "Free Gold IRA Kit",
  sidebarBody: "See if a Gold IRA fits your retirement plan. No cost, no pressure.",
  inContentHeadline: "Thinking about protecting your retirement?",
  inContentBody: "Get matched with the right Gold IRA company for your situation — free, no obligation.",
  footerHeadline: "Ready to Explore Your Options?",
  footerSubheadline: "Get your free Gold IRA information kit and see if it's right for you.",
  augustaContext: "default",
};

/**
 * Maps article cluster filename (without -cluster.ts) to contextual CTA copy.
 * Also supports individual slug overrides for high-traffic pages.
 */
const CLUSTER_CTA_MAP: Record<string, ContextualCTA> = {
  // === PENSION & GOVERNMENT EMPLOYEES ===
  "railroad-retirement": {
    sidebarHeadline: "Railroad Workers: Protect Your Tier II",
    sidebarBody: "Your Tier II isn't guaranteed like Social Security. See how railroad retirees are diversifying.",
    inContentHeadline: "Is your railroad pension keeping up with inflation?",
    inContentBody: "Many railroad retirees are rolling part of their savings into gold to protect purchasing power. See if it makes sense for you.",
    footerHeadline: "Railroad Retirees: Don't Let Inflation Eat Your Pension",
    footerSubheadline: "Learn how other railroad workers are protecting their retirement with gold.",
    augustaContext: "default",
  },
  "railroad-retirement-expansion": {
    sidebarHeadline: "Railroad Workers: Protect Your Tier II",
    sidebarBody: "Your Tier II isn't guaranteed like Social Security. See how railroad retirees are diversifying.",
    inContentHeadline: "Is your railroad pension keeping up with inflation?",
    inContentBody: "Many railroad retirees are rolling part of their savings into gold to protect purchasing power. See if it makes sense for you.",
    footerHeadline: "Railroad Retirees: Don't Let Inflation Eat Your Pension",
    footerSubheadline: "Learn how other railroad workers are protecting their retirement with gold.",
    augustaContext: "default",
  },
  "state-pensions": {
    sidebarHeadline: "State Employees: Diversify Beyond Your Pension",
    sidebarBody: "State pensions face funding gaps. Add a layer of protection your state can't touch.",
    inContentHeadline: "Worried about your state pension's funding ratio?",
    inContentBody: "Many state employees are adding gold to their retirement mix as a hedge against pension uncertainty.",
    footerHeadline: "Your Pension Alone May Not Be Enough",
    footerSubheadline: "See how state employees are building a second layer of retirement security with gold.",
    augustaContext: "mid-intent",
  },
  "state-pensions-expansion": {
    sidebarHeadline: "State Employees: Diversify Beyond Your Pension",
    sidebarBody: "State pensions face funding gaps. Add a layer of protection your state can't touch.",
    inContentHeadline: "Worried about your state pension's funding ratio?",
    inContentBody: "Many state employees are adding gold to their retirement mix as a hedge against pension uncertainty.",
    footerHeadline: "Your Pension Alone May Not Be Enough",
    footerSubheadline: "See how state employees are building a second layer of retirement security with gold.",
    augustaContext: "mid-intent",
  },
  "federal-retirement": {
    sidebarHeadline: "Federal Employees: TSP Isn't Your Only Option",
    sidebarBody: "FERS + TSP is a great start. But gold adds protection Congress can't vote away.",
    inContentHeadline: "Is your TSP keeping up with inflation?",
    inContentBody: "Federal employees are discovering they can roll part of their TSP into gold — without penalties. See how.",
    footerHeadline: "Federal Retirees: Add Gold to Your FERS Strategy",
    footerSubheadline: "Learn how to roll TSP funds into a Gold IRA — tax-free, penalty-free.",
    augustaContext: "default",
  },
  "federal-expansion": {
    sidebarHeadline: "Federal Employees: TSP Isn't Your Only Option",
    sidebarBody: "FERS + TSP is a great start. But gold adds protection Congress can't vote away.",
    inContentHeadline: "Is your TSP keeping up with inflation?",
    inContentBody: "Federal employees are discovering they can roll part of their TSP into gold — without penalties. See how.",
    footerHeadline: "Federal Retirees: Add Gold to Your FERS Strategy",
    footerSubheadline: "Learn how to roll TSP funds into a Gold IRA — tax-free, penalty-free.",
    augustaContext: "default",
  },
  "federal-veterans": {
    sidebarHeadline: "Veterans: Protect What You've Earned",
    sidebarBody: "You served your country. Now protect your retirement from inflation and market crashes.",
    inContentHeadline: "Veterans: Is your retirement as secure as your service record?",
    inContentBody: "Many veterans are moving TSP and VA savings into gold for long-term protection. No cost to learn more.",
    footerHeadline: "You Protected Your Country. Now Protect Your Retirement.",
    footerSubheadline: "See how fellow veterans are using Gold IRAs to secure their financial future.",
    augustaContext: "default",
  },
  "calpers": {
    sidebarHeadline: "CalPERS Members: Don't Rely on One Source",
    sidebarBody: "Your CalPERS pension is solid — but inflation erodes it every year. See a simple hedge.",
    inContentHeadline: "Will your CalPERS pension keep up with California's cost of living?",
    inContentBody: "Many California public employees add gold to their 457(b) or IRA as an inflation hedge alongside CalPERS.",
    footerHeadline: "CalPERS + Gold = Stronger Retirement",
    footerSubheadline: "Learn how California employees are adding a gold safety net alongside their pension.",
    augustaContext: "mid-intent",
  },

  // === 401(k) & ROLLOVERS ===
  "company-401k": {
    sidebarHeadline: "Rolling Over Your 401(k)?",
    sidebarBody: "Don't just move it to another stock fund. See why retirees are choosing gold.",
    inContentHeadline: "Before you roll over your 401(k), consider this",
    inContentBody: "Most people roll into another stock-heavy fund. But retirees near retirement are choosing gold for stability. See your options.",
    footerHeadline: "Your 401(k) Rollover Could Be Your Best Move",
    footerSubheadline: "Learn how to roll your 401(k) into gold — tax-free, penalty-free, in as little as 3 days.",
    augustaContext: "default",
  },
  "company-401k-expansion": {
    sidebarHeadline: "Rolling Over Your 401(k)?",
    sidebarBody: "Don't just move it to another stock fund. See why retirees are choosing gold.",
    inContentHeadline: "Before you roll over your 401(k), consider this",
    inContentBody: "Most people roll into another stock-heavy fund. But retirees near retirement are choosing gold for stability. See your options.",
    footerHeadline: "Your 401(k) Rollover Could Be Your Best Move",
    footerSubheadline: "Learn how to roll your 401(k) into gold — tax-free, penalty-free, in as little as 3 days.",
    augustaContext: "default",
  },

  // === RMDs & TAX ===
  "rmd": {
    sidebarHeadline: "Worried About RMD Taxes?",
    sidebarBody: "Gold IRAs have RMDs too — but the tax strategy is different. Learn how it works.",
    inContentHeadline: "RMDs forcing you to sell at the wrong time?",
    inContentBody: "Gold IRA distributions work differently than stock accounts. See how retirees are managing RMDs with physical gold.",
    footerHeadline: "Don't Let RMDs Drain Your Retirement",
    footerSubheadline: "Learn how Gold IRA distributions work — and why timing matters less with physical gold.",
    augustaContext: "default",
  },
  "roth": {
    sidebarHeadline: "Roth + Gold = Tax-Free Growth",
    sidebarBody: "A Roth Gold IRA means zero taxes on your gold gains. Learn how to set one up.",
    inContentHeadline: "Did you know you can hold gold in a Roth IRA?",
    inContentBody: "Tax-free gold gains. No RMDs. And you can convert existing IRA funds. See how it works.",
    footerHeadline: "The Ultimate Tax-Free Retirement Move",
    footerSubheadline: "Combine Roth tax benefits with gold's stability. Learn how to set up a Roth Gold IRA.",
    augustaContext: "default",
  },

  // === MARKET FEAR & PROTECTION ===
  "crash-proof": {
    sidebarHeadline: "Crash-Proof Your Savings",
    sidebarBody: "Gold gained 25% in 2008 while stocks lost 37%. See how to add this protection.",
    inContentHeadline: "If the market crashes tomorrow, is your retirement safe?",
    inContentBody: "Gold has gained value in 5 of the last 6 market crashes. See how retirees are protecting their savings.",
    footerHeadline: "The Next Crash Is Coming. Are You Ready?",
    footerSubheadline: "Get your free guide on crash-proofing your retirement with gold.",
    augustaContext: "default",
  },
  "market-fear": {
    sidebarHeadline: "Markets Making You Nervous?",
    sidebarBody: "You're not alone. See what retirees are doing to sleep better at night.",
    inContentHeadline: "Tired of watching your retirement bounce with the stock market?",
    inContentBody: "Gold doesn't follow Wall Street. That's exactly why retirees are adding it. See if it fits your plan.",
    footerHeadline: "Stop Losing Sleep Over the Stock Market",
    footerSubheadline: "Learn how gold provides stability when everything else feels uncertain.",
    augustaContext: "default",
  },
  "market-fear-expansion": {
    sidebarHeadline: "Markets Making You Nervous?",
    sidebarBody: "You're not alone. See what retirees are doing to sleep better at night.",
    inContentHeadline: "Tired of watching your retirement bounce with the stock market?",
    inContentBody: "Gold doesn't follow Wall Street. That's exactly why retirees are adding it. See if it fits your plan.",
    footerHeadline: "Stop Losing Sleep Over the Stock Market",
    footerSubheadline: "Learn how gold provides stability when everything else feels uncertain.",
    augustaContext: "default",
  },
  "protection": {
    sidebarHeadline: "Protect What You've Built",
    sidebarBody: "After a lifetime of saving, don't risk it all on one asset class.",
    inContentHeadline: "You've worked too hard to lose it now",
    inContentBody: "Gold has protected wealth for 5,000 years. See how modern retirees are adding it to their portfolios.",
    footerHeadline: "You Built It. Now Protect It.",
    footerSubheadline: "Learn how gold adds a layer of protection your stocks and bonds can't provide.",
    augustaContext: "default",
  },

  // === FEES & COMPARISON ===
  "fees": {
    sidebarHeadline: "Gold IRA Fees: Know Before You Buy",
    sidebarBody: "Some companies charge 3x more than others. See who has the lowest fees.",
    inContentHeadline: "Don't overpay for your Gold IRA",
    inContentBody: "Fee differences between companies can cost you $5,000+ over 10 years. Compare the top options.",
    footerHeadline: "Compare Gold IRA Fees Before You Commit",
    footerSubheadline: "Get a free fee comparison kit from the company with the most transparent pricing.",
    augustaContext: "fees",
  },
  "gold-ira-comparison": {
    sidebarHeadline: "Which Company Is Right for You?",
    sidebarBody: "We've reviewed 20+ companies. See who came out on top.",
    inContentHeadline: "Still comparing Gold IRA companies?",
    inContentBody: "Get a free comparison kit that breaks down fees, minimums, and ratings for the top companies.",
    footerHeadline: "Stop Researching. Start Comparing.",
    footerSubheadline: "Get the free Gold IRA company comparison checklist — fees, ratings, minimums, all in one place.",
    augustaContext: "comparison",
  },
  "gold-ira-decisions": {
    sidebarHeadline: "Making a Gold IRA Decision?",
    sidebarBody: "Get the facts before you commit. Free kit, no obligation.",
    inContentHeadline: "Ready to make a decision about gold?",
    inContentBody: "Don't rush it. Get the free information kit and make an informed choice on your own timeline.",
    footerHeadline: "Make the Right Gold IRA Decision",
    footerSubheadline: "Free information kit with everything you need to decide — no pressure, no sales calls unless you want them.",
    augustaContext: "default",
  },

  // === SILVER ===
  "silver": {
    sidebarHeadline: "Silver IRA: The Affordable Alternative",
    sidebarBody: "Gold gets the headlines, but silver may offer even better upside. Learn more.",
    inContentHeadline: "Considering silver for your IRA?",
    inContentBody: "Silver is more affordable than gold and has strong industrial demand. See how to add it to your retirement.",
    footerHeadline: "Silver Could Be Your Best Retirement Move",
    footerSubheadline: "Get the free Silver IRA guide and see why smart investors are stacking silver.",
    augustaContext: "silver",
  },

  // === RETIREMENT PLANNING ===
  "retire-with-amount": {
    sidebarHeadline: "Make Your Savings Last",
    sidebarBody: "Worried about running out? Gold helps preserve purchasing power in retirement.",
    inContentHeadline: "Will your savings actually last 30 years?",
    inContentBody: "Inflation is the #1 retirement killer. See how gold helps your money hold its value over decades.",
    footerHeadline: "Don't Outlive Your Money",
    footerSubheadline: "Learn how gold can help your retirement savings last as long as you do.",
    augustaContext: "mid-intent",
  },
  "retire-with-amount-expansion": {
    sidebarHeadline: "Make Your Savings Last",
    sidebarBody: "Worried about running out? Gold helps preserve purchasing power in retirement.",
    inContentHeadline: "Will your savings actually last 30 years?",
    inContentBody: "Inflation is the #1 retirement killer. See how gold helps your money hold its value over decades.",
    footerHeadline: "Don't Outlive Your Money",
    footerSubheadline: "Learn how gold can help your retirement savings last as long as you do.",
    augustaContext: "mid-intent",
  },

  // === HEALTHCARE & SENIOR ===
  "senior-care-costs": {
    sidebarHeadline: "Senior Care Is Expensive. Plan Ahead.",
    sidebarBody: "Nursing homes cost $100k+/year. Gold can help protect assets for care costs.",
    inContentHeadline: "How will you pay for care if you need it?",
    inContentBody: "Long-term care costs are skyrocketing. Gold can help protect the assets you'll need most.",
    footerHeadline: "Protect Your Assets from Care Costs",
    footerSubheadline: "Learn how retirees are using gold to preserve wealth for potential healthcare needs.",
    augustaContext: "mid-intent",
  },
  "medicare-insurance": {
    sidebarHeadline: "Medicare Doesn't Cover Everything",
    sidebarBody: "Out-of-pocket costs average $6,500/year. Gold helps preserve what Medicare doesn't cover.",
    inContentHeadline: "What Medicare doesn't cover could drain your savings",
    inContentBody: "Prescription drugs, dental, vision, long-term care — it adds up. See how gold helps protect your gap.",
    footerHeadline: "Bridge the Medicare Gap with Gold",
    footerSubheadline: "Learn how retirees are protecting against healthcare costs Medicare doesn't cover.",
    augustaContext: "mid-intent",
  },
  "healthcare-gap": {
    sidebarHeadline: "Healthcare Costs Eating Your Retirement?",
    sidebarBody: "The average retiree spends $315,000 on healthcare. Gold helps protect that money.",
    inContentHeadline: "Healthcare costs could consume a third of your retirement",
    inContentBody: "With costs rising 5-7% per year, your savings need to keep pace. Gold has historically matched or beaten inflation.",
    footerHeadline: "Don't Let Healthcare Costs Derail Your Retirement",
    footerSubheadline: "See how gold helps preserve purchasing power against rising medical expenses.",
    augustaContext: "mid-intent",
  },

  // === LIFE EVENTS ===
  "life-events": {
    sidebarHeadline: "Big Life Change? Protect Your Savings.",
    sidebarBody: "Divorce, inheritance, job loss — major events call for major protection.",
    inContentHeadline: "Life just changed. Is your retirement plan keeping up?",
    inContentBody: "Major life events often mean major financial decisions. See if gold belongs in your new plan.",
    footerHeadline: "Life Changed. Your Retirement Strategy Should Too.",
    footerSubheadline: "Get a free guide on protecting your retirement during major life transitions.",
    augustaContext: "mid-intent",
  },
  "layoff-retirement": {
    sidebarHeadline: "Laid Off? Don't Touch Your 401(k).",
    sidebarBody: "Roll it into gold instead of cashing out. No penalties, no taxes.",
    inContentHeadline: "Lost your job? Here's how to protect your 401(k)",
    inContentBody: "Don't cash out and take the 10% penalty. Roll into a Gold IRA tax-free and let it grow.",
    footerHeadline: "Laid Off? This Could Be Your Best Financial Move",
    footerSubheadline: "Learn how to roll your old 401(k) into gold — tax-free, penalty-free.",
    augustaContext: "default",
  },

  // === INHERITANCE & ESTATE ===
  "inheritance-windfall": {
    sidebarHeadline: "Inherited Money? Protect It.",
    sidebarBody: "Don't let taxes and inflation eat your inheritance. Gold preserves generational wealth.",
    inContentHeadline: "Don't let your inheritance lose value sitting in cash",
    inContentBody: "Inherited IRAs have new 10-year distribution rules. See how gold can help you preserve more.",
    footerHeadline: "Make Your Inheritance Last Generations",
    footerSubheadline: "Learn how a Gold IRA can help protect inherited wealth from taxes and inflation.",
    augustaContext: "mid-intent",
  },
  "estate-legal": {
    sidebarHeadline: "Estate Planning with Gold",
    sidebarBody: "Gold IRAs pass to heirs with clear rules. Learn how it fits your estate plan.",
    inContentHeadline: "Have you considered gold in your estate plan?",
    inContentBody: "Gold IRAs have specific beneficiary rules that can simplify inheritance. Learn how it works.",
    footerHeadline: "Build a Legacy That Lasts",
    footerSubheadline: "See how gold fits into your estate plan for tax-efficient wealth transfer.",
    augustaContext: "mid-intent",
  },

  // === COUPLES & PSYCHOLOGY ===
  "couples-retirement": {
    sidebarHeadline: "Retirement Planning as a Couple",
    sidebarBody: "Make sure both of you are protected. Gold adds stability for two.",
    inContentHeadline: "Are both of you covered if the market drops?",
    inContentBody: "Couples need double the protection. Gold adds stability that helps both partners sleep at night.",
    footerHeadline: "Protect Both Retirements with Gold",
    footerSubheadline: "Learn how couples are using Gold IRAs to protect their combined retirement savings.",
    augustaContext: "mid-intent",
  },
  "couples-psychology": {
    sidebarHeadline: "Retirement Planning as a Couple",
    sidebarBody: "Make sure both of you are protected. Gold adds stability for two.",
    inContentHeadline: "Are both of you covered if the market drops?",
    inContentBody: "Couples need double the protection. Gold adds stability that helps both partners sleep at night.",
    footerHeadline: "Protect Both Retirements with Gold",
    footerSubheadline: "Learn how couples are using Gold IRAs to protect their combined retirement savings.",
    augustaContext: "mid-intent",
  },

  // === SCAM AWARENESS ===
  "scam-misc": {
    sidebarHeadline: "Avoid Gold IRA Scams",
    sidebarBody: "Not all companies are legit. See who passed our strict vetting process.",
    inContentHeadline: "Worried about Gold IRA scams? You should be.",
    inContentBody: "We've vetted 20+ companies so you don't have to. See who made the cut — and who didn't.",
    footerHeadline: "Don't Get Scammed. Get Informed.",
    footerSubheadline: "Get the free buyer beware checklist and only work with companies you can trust.",
    augustaContext: "comparison",
  },
  "safety": {
    sidebarHeadline: "Is Your Gold IRA Safe?",
    sidebarBody: "Segregated storage, insurance, IRS compliance — know what to look for.",
    inContentHeadline: "How safe is a Gold IRA, really?",
    inContentBody: "IRS-approved depositories, segregated storage, full insurance. See how top companies protect your gold.",
    footerHeadline: "Safety First: How Gold IRAs Protect Your Metals",
    footerSubheadline: "Learn about storage, insurance, and the safeguards that protect your physical gold.",
    augustaContext: "default",
  },

  // === FIRE & EARLY RETIREMENT ===
  "fire-movement": {
    sidebarHeadline: "FIRE + Gold = Financial Independence",
    sidebarBody: "Protect your FIRE number from sequence-of-returns risk with physical gold.",
    inContentHeadline: "Is your FIRE number crash-proof?",
    inContentBody: "One bad year early in retirement can destroy your FIRE plan. Gold reduces that sequence-of-returns risk.",
    footerHeadline: "Protect Your Path to Financial Independence",
    footerSubheadline: "See how FIRE seekers are using gold to protect against the biggest early retirement risk.",
    augustaContext: "mid-intent",
  },

  // === ANNUITIES & ALTERNATIVES ===
  "annuity": {
    sidebarHeadline: "Annuity vs Gold IRA: Compare",
    sidebarBody: "Annuities lock you in. Gold gives you control. See the comparison.",
    inContentHeadline: "Is an annuity really your best option?",
    inContentBody: "Annuities come with surrender charges, fees, and lock-in periods. See how a Gold IRA compares.",
    footerHeadline: "Before You Buy an Annuity, See This",
    footerSubheadline: "Compare annuities vs Gold IRAs — fees, flexibility, and returns side by side.",
    augustaContext: "comparison",
  },

  // === WEP/GPO (Government Pension Offset) ===
  "wep-gpo": {
    sidebarHeadline: "WEP Reducing Your Social Security?",
    sidebarBody: "If WEP/GPO cuts your benefits, gold can help fill the gap.",
    inContentHeadline: "Is WEP/GPO cutting into your expected retirement income?",
    inContentBody: "Many government employees are surprised by how much WEP reduces their Social Security. Gold can help bridge that gap.",
    footerHeadline: "Don't Let WEP/GPO Shrink Your Retirement",
    footerSubheadline: "Learn how gold can help offset the Social Security reduction from WEP and GPO.",
    augustaContext: "mid-intent",
  },
  "wep-gpo-expansion": {
    sidebarHeadline: "WEP Reducing Your Social Security?",
    sidebarBody: "If WEP/GPO cuts your benefits, gold can help fill the gap.",
    inContentHeadline: "Is WEP/GPO cutting into your expected retirement income?",
    inContentBody: "Many government employees are surprised by how much WEP reduces their Social Security. Gold can help bridge that gap.",
    footerHeadline: "Don't Let WEP/GPO Shrink Your Retirement",
    footerSubheadline: "Learn how gold can help offset the Social Security reduction from WEP and GPO.",
    augustaContext: "mid-intent",
  },
};

/**
 * Individual slug overrides for high-traffic pages that need specific copy.
 * These take priority over cluster-level mappings.
 */
const SLUG_CTA_MAP: Record<string, ContextualCTA> = {
  "rmd-penalty-if-i-forget": {
    sidebarHeadline: "RMD Penalties Are Brutal",
    sidebarBody: "25% penalty on missed RMDs. Gold IRAs have RMDs too — but the strategy is different.",
    inContentHeadline: "Missed an RMD? Here's how to avoid it happening again",
    inContentBody: "Gold IRA distributions work differently. Get the free guide to understand your options.",
    footerHeadline: "Don't Get Hit with Another RMD Penalty",
    footerSubheadline: "Learn how Gold IRA RMDs work — and how to plan distributions strategically.",
    augustaContext: "default",
  },
  "voya-401k-rollover": {
    sidebarHeadline: "Leaving Voya? Roll Into Gold.",
    sidebarBody: "Don't just transfer to another stock fund. Consider gold for real diversification.",
    inContentHeadline: "Leaving your Voya 401(k)? Consider this before you roll over.",
    inContentBody: "Most people roll into another stock-heavy fund. But retirees near retirement are choosing gold for stability.",
    footerHeadline: "Your Voya 401(k) Rollover: Don't Repeat the Same Mistake",
    footerSubheadline: "Instead of rolling into more stocks, see how gold provides real diversification.",
    augustaContext: "default",
  },
  "railroad-retirement-calculator": {
    sidebarHeadline: "Railroad Workers: Beyond Your Pension",
    sidebarBody: "Your Tier I is solid. But inflation eats it every year. See a simple hedge.",
    inContentHeadline: "Your railroad pension is just the start",
    inContentBody: "Tier I + Tier II is a great foundation. But gold adds the inflation protection railroaders need.",
    footerHeadline: "Railroad Retirees: Add Gold to Your Foundation",
    footerSubheadline: "Your pension is strong — but gold makes it stronger. Learn how to add a Gold IRA.",
    augustaContext: "default",
  },
  "calpers-retirement-guide": {
    sidebarHeadline: "CalPERS Alone Won't Beat Inflation",
    sidebarBody: "California costs are rising 4-5% yearly. Your pension increases 2%. Gold fills the gap.",
    inContentHeadline: "Will your CalPERS pension keep up with California prices?",
    inContentBody: "CalPERS gives 2% annual increases. California inflation runs 4-5%. Gold historically matches or beats inflation.",
    footerHeadline: "CalPERS Members: Close the Inflation Gap",
    footerSubheadline: "Learn how California public employees are adding gold to protect against rising costs.",
    augustaContext: "mid-intent",
  },
  "60-day-ira-rollover-rule": {
    sidebarHeadline: "Don't Risk the 60-Day Deadline",
    sidebarBody: "Miss it and you owe taxes + penalties. A direct rollover to gold avoids the risk entirely.",
    inContentHeadline: "Why risk the 60-day rule? Do a direct rollover instead.",
    inContentBody: "A direct rollover to a Gold IRA skips the 60-day window entirely. No risk, no taxes, no penalties.",
    footerHeadline: "Skip the 60-Day Risk. Go Direct.",
    footerSubheadline: "A direct Gold IRA rollover eliminates the 60-day deadline entirely. Learn how.",
    augustaContext: "default",
  },
  "comex-silver-inventory-data": {
    sidebarHeadline: "COMEX Vaults Running Low?",
    sidebarBody: "If you're tracking COMEX data, you're smart. Now learn how to act on it.",
    inContentHeadline: "Watching COMEX inventory closely? Here's how to act on it.",
    inContentBody: "Declining COMEX silver inventory could mean higher prices ahead. Consider locking in physical silver in an IRA.",
    footerHeadline: "COMEX Data Says Act Now",
    footerSubheadline: "Get the free Silver IRA guide and position yourself before inventory drops further.",
    augustaContext: "silver",
  },
  "life-alert-cost-per-month": {
    sidebarHeadline: "Senior Care Costs Add Up Fast",
    sidebarBody: "Life Alert is just the beginning. Protect your savings from all the costs ahead.",
    inContentHeadline: "Life Alert, healthcare, prescription costs — it all adds up",
    inContentBody: "The average retiree spends $315,000 on healthcare. Gold helps preserve the savings you'll need most.",
    footerHeadline: "Protect Your Savings from Rising Care Costs",
    footerSubheadline: "Learn how gold preserves purchasing power against the rising costs of aging.",
    augustaContext: "mid-intent",
  },
};

/**
 * Get contextual CTA copy for a given article slug and cluster name.
 * Priority: slug override > cluster mapping > default
 */
export function getContextualCTA(slug: string, clusterFile?: string): ContextualCTA {
  // 1. Check slug-level override first
  if (SLUG_CTA_MAP[slug]) return SLUG_CTA_MAP[slug];

  // 2. Check cluster-level mapping
  if (clusterFile) {
    // Strip -cluster.ts suffix
    const clusterKey = clusterFile.replace(/-cluster\.ts$/, "").replace(/-cluster$/, "");
    if (CLUSTER_CTA_MAP[clusterKey]) return CLUSTER_CTA_MAP[clusterKey];
  }

  // 3. Fall back to default
  return DEFAULT_CTA;
}

/**
 * Get contextual CTA by trying to match slug patterns when cluster info isn't available.
 */
export function getContextualCTABySlug(slug: string): ContextualCTA {
  // Direct slug match
  if (SLUG_CTA_MAP[slug]) return SLUG_CTA_MAP[slug];

  // Try pattern matching for cluster detection
  const patterns: [RegExp, string][] = [
    [/railroad/, "railroad-retirement"],
    [/calpers/, "calpers"],
    [/federal|fers|tsp/, "federal-retirement"],
    [/veteran|military|va-/, "federal-veterans"],
    [/rmd/, "rmd"],
    [/roth/, "roth"],
    [/401k|401\(k\)/, "company-401k"],
    [/crash|recession|depression/, "crash-proof"],
    [/market.*fear|bear.*market|stock.*drop/, "market-fear"],
    [/fee|cost|price.*compare/, "fees"],
    [/scam|fraud|avoid/, "scam-misc"],
    [/silver/, "silver"],
    [/fire.*movement|early.*retire/, "fire-movement"],
    [/annuit/, "annuity"],
    [/wep|gpo|windfall.*elimination/, "wep-gpo"],
    [/pension|state.*retire/, "state-pensions"],
    [/inherit|estate|beneficiary/, "inheritance-windfall"],
    [/laid.*off|layoff|job.*loss/, "layoff-retirement"],
    [/couple|spouse|married/, "couples-retirement"],
    [/medicare|health.*care|nursing/, "healthcare-gap"],
    [/senior.*care|assisted.*living|life.*alert/, "senior-care-costs"],
    [/life.*event|divorce|widow/, "life-events"],
  ];

  for (const [pattern, clusterKey] of patterns) {
    if (pattern.test(slug)) {
      if (CLUSTER_CTA_MAP[clusterKey]) return CLUSTER_CTA_MAP[clusterKey];
    }
  }

  return DEFAULT_CTA;
}
