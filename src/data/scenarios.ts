// src/data/scenarios.ts
// Crisis scenario content for fear-based SEO pages

export interface Scenario {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  threatLevel: "high" | "critical" | "extreme";
  probability: string;
  timeframe: string;
  sections: {
    title: string;
    content: string;
    bullets?: string[];
  }[];
  warningSignals: string[];
  protectionSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  goldBenefit: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedScenarios: string[];
}

export const scenarios: Scenario[] = [
  {
    slug: "dollar-collapse",
    title: "Dollar Collapse Survival Guide",
    subtitle: "What happens to your savings when the world's reserve currency fails - and how to protect yourself before it's too late.",
    metaTitle: "Dollar Collapse Survival Guide: Protect Your Wealth | 2025",
    metaDescription: "Learn what happens when the US dollar collapses, warning signs to watch, and proven strategies to protect your retirement savings from currency devaluation.",
    threatLevel: "critical",
    probability: "Growing risk",
    timeframe: "5-15 years",
    sections: [
      {
        title: "What Is a Dollar Collapse?",
        content: "A dollar collapse occurs when the US dollar rapidly loses value against other currencies and commodities. This isn't theoretical - it's happened to every fiat currency in history. The Roman denarius, German mark, Venezuelan bolivar, and Zimbabwe dollar all followed the same pattern: excessive money printing leading to hyperinflation and eventual collapse.",
        bullets: [
          "The US has printed 80% of all dollars in existence since 2020",
          "National debt exceeds $34 trillion (larger than GDP)",
          "Foreign central banks are actively de-dollarizing",
          "The petrodollar system is fracturing",
        ],
      },
      {
        title: "Why the Dollar Is Vulnerable Now",
        content: "The dollar's status as world reserve currency has allowed America to run massive deficits without immediate consequences. But that privilege is eroding. China, Russia, Brazil, and Saudi Arabia are conducting trade in non-dollar currencies. The BRICS nations are developing alternative payment systems. When confidence breaks, it breaks fast.",
        bullets: [
          "BRICS nations represent 40% of global population",
          "China has reduced Treasury holdings by $500B since 2013",
          "Gold purchases by central banks hit 55-year highs in 2023",
          "De-dollarization accelerating after Russia sanctions",
        ],
      },
      {
        title: "What a Collapse Looks Like",
        content: "A dollar collapse doesn't happen overnight - until it does. First comes gradual erosion: higher prices, lower purchasing power, rising interest rates. Then a trigger event causes panic: a failed Treasury auction, a major nation dumping dollars, or a loss of confidence in US institutions. Within weeks, prices can double or triple. Within months, life savings become worthless.",
      },
    ],
    warningSignals: [
      "Rapid increase in gold and commodity prices",
      "Foreign central banks selling US Treasuries",
      "Major nations announcing non-dollar trade agreements",
      "Failed or weak Treasury bond auctions",
      "Accelerating inflation despite Fed rate hikes",
      "Capital controls or bank withdrawal limits",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Diversify Out of Dollar-Denominated Assets",
        description: "Your 401(k), savings account, and bonds are all promises to pay you in dollars. If the dollar fails, these promises become worthless. Move a portion into hard assets that maintain value regardless of currency.",
      },
      {
        step: 2,
        title: "Acquire Physical Precious Metals",
        description: "Gold and silver have maintained purchasing power for 5,000 years through every currency collapse in history. A Gold IRA allows you to hold physical metals in a tax-advantaged account.",
      },
      {
        step: 3,
        title: "Reduce Debt Exposure",
        description: "In a collapse, debts may be redenominated or become impossible to service. Pay down variable-rate debt and avoid new leverage.",
      },
      {
        step: 4,
        title: "Build Emergency Reserves",
        description: "Keep 3-6 months of expenses in physical cash and precious metals. Banks may freeze accounts or limit withdrawals during a crisis.",
      },
    ],
    goldBenefit: "Gold is the ultimate hedge against currency collapse because it has no counterparty risk. Unlike dollars, stocks, or bonds, gold doesn't depend on any government or institution to maintain its value. During the Weimar hyperinflation, one ounce of gold went from 170 marks to 87 trillion marks - maintaining its purchasing power while the currency became worthless.",
    stats: [
      { label: "Dollar Purchasing Power Lost", value: "96%", subtext: "Since 1913" },
      { label: "US National Debt", value: "$34T+", subtext: "And growing" },
      { label: "Gold's Track Record", value: "5,000 yrs", subtext: "As money" },
      { label: "Fiat Currencies Failed", value: "100%", subtext: "Eventually" },
    ],
    faqs: [
      {
        question: "How likely is a dollar collapse?",
        answer: "While timing is uncertain, the conditions are increasingly favorable: unprecedented debt, money printing, and de-dollarization. Ray Dalio, founder of the world's largest hedge fund, puts the risk of a major currency devaluation at 'significant' within the next decade.",
      },
      {
        question: "What would trigger a collapse?",
        answer: "Potential triggers include: a failed Treasury auction, a major nation (like China or Saudi Arabia) dumping dollar reserves, loss of reserve currency status, a severe banking crisis, or simply continued money printing until confidence breaks.",
      },
      {
        question: "How much gold should I own?",
        answer: "Financial experts typically recommend 5-20% of your portfolio in precious metals for diversification. Those more concerned about systemic risk may allocate higher. The key is having SOME exposure before a crisis, not after.",
      },
    ],
    relatedScenarios: ["hyperinflation", "bank-failure", "stock-market-crash"],
  },
  {
    slug: "hyperinflation",
    title: "Hyperinflation Protection Plan",
    subtitle: "When prices double every few months, only one asset class has consistently preserved wealth. Here's your action plan.",
    metaTitle: "Hyperinflation Protection: Save Your Retirement from 1000%+ Inflation",
    metaDescription: "Protect your retirement savings from hyperinflation. Learn from history's worst currency collapses and discover the one asset that preserves wealth when paper money fails.",
    threatLevel: "high",
    probability: "Moderate risk",
    timeframe: "Economic dependent",
    sections: [
      {
        title: "Understanding Hyperinflation",
        content: "Hyperinflation is defined as price increases exceeding 50% per month. It sounds extreme until you realize it's happened 57 times in the last century alone. Venezuela, Zimbabwe, Argentina, Germany, Hungary - the pattern is always the same: governments print money to cover debts, confidence collapses, and prices spiral out of control.",
        bullets: [
          "Zimbabwe 2008: 79.6 billion percent inflation",
          "Venezuela 2018: 1.7 million percent inflation",
          "Weimar Germany 1923: Prices doubled every 3.7 days",
          "Hungary 1946: Worst hyperinflation in history",
        ],
      },
      {
        title: "America's Inflation Risk",
        content: "The US printed more money between 2020-2022 than in its entire previous history. The M2 money supply increased by 40%. While we haven't hit hyperinflation yet, the conditions are set. All it takes is a trigger event - a loss of confidence in institutions, a debt crisis, or continued monetary expansion.",
        bullets: [
          "M2 money supply increased 40% in 2 years",
          "Federal Reserve balance sheet: $9 trillion",
          "Real inflation (ShadowStats): 10-15%",
          "Social Security and Medicare unfunded liabilities: $175 trillion",
        ],
      },
      {
        title: "What Hyperinflation Does to Savers",
        content: "In hyperinflation, cash and bonds become worthless. A lifetime of savings can evaporate in months. In Weimar Germany, people burned currency for heat because it was cheaper than firewood. In Venezuela, professionals became street vendors overnight. The middle class is always destroyed first.",
      },
    ],
    warningSignals: [
      "Official inflation consistently above 10%",
      "Government denying or manipulating inflation statistics",
      "Wage-price spirals beginning",
      "Currency rapidly weakening against gold",
      "Price controls being implemented",
      "Bank runs or withdrawal limits",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Convert Paper to Hard Assets",
        description: "Move retirement savings from dollar-denominated accounts to physical precious metals. A Gold IRA provides tax-advantaged protection against currency debasement.",
      },
      {
        step: 2,
        title: "Shorten Your Time Horizon",
        description: "Don't hold excess cash. Convert income to hard assets quickly. In hyperinflation, money loses value by the day.",
      },
      {
        step: 3,
        title: "Own Things, Not Promises",
        description: "Stocks, bonds, and savings accounts are all promises to pay in currency. When currency fails, promises fail. Own physical assets: gold, silver, real estate, productive land.",
      },
      {
        step: 4,
        title: "Prepare for Disruption",
        description: "Hyperinflation destroys supply chains. Maintain reserves of essentials. Have a plan for income disruption.",
      },
    ],
    goldBenefit: "Gold has protected wealth through every hyperinflation in history. In Weimar Germany, one ounce of gold bought a nice house at the peak of the crisis. In Venezuela, those with gold preserved their purchasing power while bolivar holders lost everything. Gold doesn't just preserve wealth - it often increases in purchasing power during currency crises.",
    stats: [
      { label: "Hyperinflations Since 1900", value: "57", subtext: "And counting" },
      { label: "US Money Printed 2020-22", value: "80%", subtext: "Of all dollars ever" },
      { label: "Gold Performance in Crises", value: "+500%", subtext: "Average gain" },
      { label: "Average Fiat Currency Lifespan", value: "27 yrs", subtext: "Dollar is 53" },
    ],
    faqs: [
      {
        question: "Can hyperinflation happen in America?",
        answer: "Many thought it couldn't happen in Germany, the world's most advanced economy in 1920. Or in Venezuela, Latin America's richest nation in 2000. The conditions that cause hyperinflation - excessive debt, money printing, loss of confidence - are present in the US today.",
      },
      {
        question: "How fast does hyperinflation happen?",
        answer: "The transition from high inflation to hyperinflation can occur within months once confidence breaks. In most historical cases, the worst damage occurred within 1-2 years of the onset.",
      },
      {
        question: "What's the best protection?",
        answer: "Physical gold and silver have protected wealth in 100% of historical hyperinflations. Real estate and productive assets also help, but can be harder to liquidate and may face government seizure.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "bank-failure", "cbdc-control"],
  },
  {
    slug: "bank-failure",
    title: "Bank Failure: What Happens to Your Money",
    subtitle: "Silicon Valley Bank collapsed in 48 hours. Here's what happens when your bank fails - and why FDIC insurance may not save you.",
    metaTitle: "Bank Failure Guide: Is Your Money Safe? What FDIC Won't Tell You",
    metaDescription: "Learn what really happens when banks fail, why FDIC insurance has limits, and how to protect your savings from the next banking crisis.",
    threatLevel: "high",
    probability: "Recurring risk",
    timeframe: "Unpredictable",
    sections: [
      {
        title: "The 2023 Banking Crisis",
        content: "In March 2023, three major banks collapsed in a single week: Silicon Valley Bank, Signature Bank, and First Republic. Combined assets: over $500 billion. It was the second-largest bank failure in US history, and it happened in 48 hours. The lesson: banks can fail faster than you can react.",
        bullets: [
          "SVB: $209 billion - collapsed in 48 hours",
          "Signature Bank: $110 billion - seized by regulators",
          "First Republic: $229 billion - emergency sale to JPMorgan",
          "Total 2023 failures exceeded 2008 crisis levels",
        ],
      },
      {
        title: "The FDIC Illusion",
        content: "FDIC insurance covers $250,000 per depositor. But here's what they don't tell you: the FDIC fund contains only $128 billion to cover $10 trillion in insured deposits. That's 1.3%. In a systemic crisis, the FDIC cannot cover all losses. They'd need to be bailed out by... the same government that's $34 trillion in debt.",
        bullets: [
          "FDIC fund: $128 billion",
          "Insured deposits: $10+ trillion",
          "Coverage ratio: ~1.3%",
          "2008 bailouts: $700 billion (taxpayer funded)",
        ],
      },
      {
        title: "What Happens When Your Bank Fails",
        content: "When a bank fails, your accounts are frozen immediately. You cannot access your money - no withdrawals, no transfers, no bill payments. The FDIC then works to transfer your account to another bank or mail you a check. This process can take days to weeks. Meanwhile, your mortgage is still due, your bills keep coming, and your life is on hold.",
      },
    ],
    warningSignals: [
      "Bank stock price dropping rapidly",
      "News of large deposit outflows",
      "Downgrade by rating agencies",
      "Executive departures or insider selling",
      "Rising interest rates stressing bank portfolios",
      "Concentrated exposure to struggling sectors",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Diversify Across Institutions",
        description: "Don't keep more than $250,000 at any single bank. Use multiple banks to maximize FDIC coverage and reduce concentration risk.",
      },
      {
        step: 2,
        title: "Hold Assets Outside the Banking System",
        description: "Physical gold and silver in a secure depository have no counterparty risk. A Gold IRA keeps your retirement savings outside the banking system entirely.",
      },
      {
        step: 3,
        title: "Maintain Cash Reserves",
        description: "Keep 2-4 weeks of expenses in physical cash at home. During a bank failure, ATMs and electronic payments may be unavailable.",
      },
      {
        step: 4,
        title: "Monitor Your Bank's Health",
        description: "Watch your bank's stock price, credit ratings, and news coverage. Don't wait for official warnings - they often come too late.",
      },
    ],
    goldBenefit: "Unlike bank deposits, physical gold has no counterparty risk. When you own gold in a secure depository, you're not dependent on any bank's solvency. Your wealth exists independent of the financial system. This is why central banks themselves hold gold - it's the ultimate reserve asset when trust in institutions fails.",
    stats: [
      { label: "Banks Failed 2023", value: "5", subtext: "Including 3 of top 30" },
      { label: "FDIC Reserve Ratio", value: "1.3%", subtext: "Of insured deposits" },
      { label: "SVB Collapse Time", value: "48 hrs", subtext: "From stable to seized" },
      { label: "Uninsured Deposits US", value: "$7T+", subtext: "At risk" },
    ],
    faqs: [
      {
        question: "Is my money really safe in the bank?",
        answer: "Up to $250,000 is insured by FDIC per depositor, per bank. However, in a systemic crisis, the FDIC fund would be insufficient. Additionally, during a failure, your money may be inaccessible for days or weeks.",
      },
      {
        question: "How do I know if my bank is at risk?",
        answer: "Watch for: declining stock price, credit rating downgrades, large deposit outflows, executive departures, and high exposure to commercial real estate or long-duration bonds.",
      },
      {
        question: "What assets are safest outside banks?",
        answer: "Physical precious metals in allocated storage have no counterparty risk. Unlike ETFs or paper gold, physical metals in your name cannot be affected by institutional failures.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "hyperinflation", "stock-market-crash"],
  },
  {
    slug: "stock-market-crash",
    title: "Stock Market Crash: Protect Your 401(k)",
    subtitle: "The average investor loses 50% in a crash and takes 7 years to recover. Here's how to avoid becoming a statistic.",
    metaTitle: "Stock Market Crash Protection: Save Your 401(k) Before It's Too Late",
    metaDescription: "Learn how to protect your 401(k) from the next stock market crash. Historical data, warning signs, and proven strategies to preserve your retirement savings.",
    threatLevel: "high",
    probability: "Cyclical certainty",
    timeframe: "Overdue",
    sections: [
      {
        title: "Crashes Are Certain - Timing Isn't",
        content: "Stock market crashes aren't black swan events - they're regular occurrences. Since 1929, we've had major crashes in 1929, 1973, 1987, 2000, 2008, and 2020. That's roughly one per decade. The market is currently at all-time highs with extreme valuations, corporate debt at records, and the Fed out of ammunition. The question isn't if, but when.",
        bullets: [
          "1929 crash: -89% (took 25 years to recover)",
          "2000 dot-com: -78% Nasdaq (13 years to recover)",
          "2008 financial crisis: -57% (5 years to recover)",
          "Average recovery time: 7 years",
        ],
      },
      {
        title: "Why Your 401(k) Is Vulnerable",
        content: "Most 401(k) plans offer limited options - typically stock funds, bond funds, and maybe a money market. They don't offer gold or other hard assets. So when markets crash, you have nowhere to hide. You can move to bonds, but in a rising rate environment, bonds lose value too. The 60/40 portfolio failed spectacularly in 2022.",
        bullets: [
          "60/40 portfolio lost 17% in 2022",
          "Bonds and stocks fell together",
          "Most 401(k)s have no gold option",
          "Target-date funds offer false security",
        ],
      },
      {
        title: "The Retirement Timing Trap",
        content: "If a crash happens in your early 60s, you may never recover. This is called sequence-of-returns risk. A 50% loss requires a 100% gain just to break even. If you're withdrawing for retirement expenses, you're selling low and depleting principal. Many 2008 retirees had to return to work or dramatically cut their lifestyle.",
      },
    ],
    warningSignals: [
      "Price-to-earnings ratios at historic extremes",
      "Yield curve inversion (recession indicator)",
      "Record margin debt and speculation",
      "Retail investor euphoria (meme stocks, crypto mania)",
      "Fed tightening into economic weakness",
      "Corporate earnings declining while stocks rise",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Rollover to a Self-Directed IRA",
        description: "Move your 401(k) to a self-directed IRA that allows gold and precious metals. This gives you options your current plan doesn't offer.",
      },
      {
        step: 2,
        title: "Allocate to Non-Correlated Assets",
        description: "Gold has historically risen during stock market crashes. In 2008, while stocks lost 57%, gold gained 25%. Diversification only works with truly different asset classes.",
      },
      {
        step: 3,
        title: "Reduce Equity Exposure as You Age",
        description: "The closer you are to retirement, the more devastating a crash becomes. Shift toward wealth preservation assets, not growth speculation.",
      },
      {
        step: 4,
        title: "Have a Written Plan",
        description: "Panic selling locks in losses. Have a predetermined plan for market downturns so emotions don't drive decisions.",
      },
    ],
    goldBenefit: "Gold is one of the few assets that consistently rises during stock market crashes. In 2008, gold gained 25% while the S&P 500 lost 57%. During the 2020 COVID crash, gold hit all-time highs. This negative correlation makes gold essential portfolio insurance - not speculation, but protection.",
    stats: [
      { label: "Average Crash Decline", value: "-50%", subtext: "Major corrections" },
      { label: "Average Recovery Time", value: "7 yrs", subtext: "To break even" },
      { label: "Gold in 2008 Crisis", value: "+25%", subtext: "While stocks -57%" },
      { label: "Years Since Last Crash", value: "4+", subtext: "Overdue by history" },
    ],
    faqs: [
      {
        question: "Should I sell everything before a crash?",
        answer: "Timing the market is nearly impossible. Instead, maintain permanent allocation to crash-resistant assets like gold. This way, you're always protected without needing to predict timing.",
      },
      {
        question: "Why doesn't my 401(k) offer gold?",
        answer: "Most 401(k) plans are administered by firms that profit from managing stock and bond funds. They have no incentive to offer gold. A rollover to a self-directed IRA solves this problem.",
      },
      {
        question: "How much should be in gold?",
        answer: "Financial experts recommend 5-20% in precious metals. For those near retirement or concerned about market risk, 15-25% provides meaningful crash protection without sacrificing all growth potential.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "hyperinflation", "bank-failure"],
  },
  {
    slug: "cbdc-control",
    title: "CBDC: The End of Financial Privacy",
    subtitle: "Central Bank Digital Currencies give governments complete control over your money. Here's what's coming and how to maintain financial freedom.",
    metaTitle: "CBDC Explained: How Digital Dollars Threaten Your Financial Freedom",
    metaDescription: "Learn how Central Bank Digital Currencies (CBDCs) could end financial privacy, enable government control of spending, and why gold protects your freedom.",
    threatLevel: "extreme",
    probability: "In development",
    timeframe: "2-5 years",
    sections: [
      {
        title: "What Is a CBDC?",
        content: "A Central Bank Digital Currency is government-issued digital money that replaces physical cash. Unlike Bitcoin, CBDCs are fully controlled by central banks. Every transaction is tracked. Money can be programmed with expiration dates, spending restrictions, or frozen instantly. China's digital yuan already has these features. The US Federal Reserve is actively developing a digital dollar.",
        bullets: [
          "130+ countries exploring CBDCs (98% of global GDP)",
          "China's digital yuan: 260 million users",
          "Fed's FedNow: Infrastructure for US CBDC",
          "ECB digital euro: Pilot launching 2024",
        ],
      },
      {
        title: "The Control Features",
        content: "CBDCs aren't just digital cash - they're programmable money. Governments can: set expiration dates (use it or lose it), restrict purchases (no guns, no gold, no 'unapproved' items), implement negative interest rates (your balance shrinks automatically), freeze accounts instantly without court order, and track every transaction you make.",
        bullets: [
          "Programmable: Money that expires or restricts spending",
          "Trackable: Every transaction visible to government",
          "Freezable: Accounts blocked with one click",
          "Controllable: Negative rates, purchase limits, social credit",
        ],
      },
      {
        title: "The War on Cash",
        content: "Before CBDCs can dominate, cash must be eliminated. We're already seeing this: banks closing branches, businesses going cashless, governments limiting cash transactions. India banned large notes overnight in 2016. The EU capped cash payments at €10,000. Once cash is gone, CBDCs become mandatory - there's no alternative.",
      },
    ],
    warningSignals: [
      "Increasing restrictions on cash transactions",
      "Banks reducing branch networks and ATMs",
      "Government incentives for digital payments",
      "CBDC pilot programs launching",
      "Proposals to eliminate large denomination bills",
      "Social credit systems being implemented",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Acquire Assets Outside Digital Systems",
        description: "Physical gold and silver exist outside the digital financial system. They cannot be programmed, tracked, or frozen. They are the ultimate hedge against digital control.",
      },
      {
        step: 2,
        title: "Maintain Cash Holdings",
        description: "While cash still exists, hold a reasonable amount. Cash provides transaction privacy and works when digital systems fail.",
      },
      {
        step: 3,
        title: "Diversify Internationally",
        description: "Consider holding assets in multiple jurisdictions. Different countries will implement CBDCs at different speeds and with different restrictions.",
      },
      {
        step: 4,
        title: "Convert Retirement Accounts to Gold",
        description: "A Gold IRA moves your retirement savings from digital promises to physical metal. It's legal, tax-advantaged, and outside the digital control grid.",
      },
    ],
    goldBenefit: "Gold is the antithesis of CBDCs. It cannot be programmed, tracked, or controlled. No government can freeze your gold with a keystroke. No algorithm can decide what you're allowed to buy with it. For 5,000 years, gold has meant financial independence. In the age of digital control, it's more important than ever.",
    stats: [
      { label: "Countries Developing CBDCs", value: "130+", subtext: "Including USA" },
      { label: "China Digital Yuan Users", value: "260M", subtext: "And growing" },
      { label: "Cash Transactions Declining", value: "70%", subtext: "In past decade" },
      { label: "Gold: Government Control", value: "0%", subtext: "Unseizable" },
    ],
    faqs: [
      {
        question: "Is a US CBDC definitely coming?",
        answer: "The Federal Reserve is actively researching CBDCs and has launched FedNow, the infrastructure for instant digital payments. Multiple bills are in Congress. While timing is uncertain, the direction is clear.",
      },
      {
        question: "Could the government ban gold?",
        answer: "In 1933, FDR ordered citizens to surrender gold (Executive Order 6102). It could happen again. However, enforcement is difficult, and many held gold anyway. The key is having gold before restrictions, not after.",
      },
      {
        question: "How does gold protect against CBDCs?",
        answer: "Gold exists outside the digital system. It cannot be programmed, tracked, or frozen remotely. You can store it privately, trade it privately, and maintain purchasing power regardless of what digital systems do.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "hyperinflation", "bank-failure"],
  },
  {
    slug: "pension-crisis",
    title: "The Pension Time Bomb",
    subtitle: "State and corporate pensions are $8 trillion underfunded. If you're counting on a pension, here's what you need to know.",
    metaTitle: "Pension Crisis 2025: Is Your Retirement at Risk? Underfunding Explained",
    metaDescription: "US pensions are $8 trillion underfunded. Learn which pensions are at risk, what happens when they fail, and how to protect your retirement income.",
    threatLevel: "critical",
    probability: "Structural certainty",
    timeframe: "Ongoing",
    sections: [
      {
        title: "The $8 Trillion Hole",
        content: "American pension funds - both public and private - are massively underfunded. State and local government pensions alone are $4-5 trillion short. Corporate pensions add another $3+ trillion. These aren't projections - this is money that's been promised but doesn't exist. When baby boomers retire en masse, the math doesn't work.",
        bullets: [
          "State/local pension shortfall: $4-5 trillion",
          "Corporate pension shortfall: $3+ trillion",
          "Social Security trust fund: Depleted by 2034",
          "Pension Benefit Guaranty Corp: Already in deficit",
        ],
      },
      {
        title: "Who's Most at Risk",
        content: "Not all pensions are equal. Illinois, New Jersey, Kentucky, and Connecticut have the worst-funded state pensions. Many are below 50% funded - meaning they have less than half the money needed to pay promised benefits. Corporate pensions in struggling industries (airlines, manufacturing, retail) have already been cut or eliminated.",
        bullets: [
          "Illinois teachers pension: 42% funded",
          "New Jersey state pension: 50% funded",
          "Kentucky teachers: 51% funded",
          "Chicago municipal: 23% funded",
        ],
      },
      {
        title: "What Happens When Pensions Fail",
        content: "When pensions fail, benefits get cut. Detroit retirees lost 4.5% of benefits plus all cost-of-living adjustments. Central States Teamsters proposed 60% cuts. The PBGC (federal pension insurance) is itself underfunded and caps benefits well below what many were promised. There is no full bailout coming.",
      },
    ],
    warningSignals: [
      "Your pension fund below 80% funded ratio",
      "State or company facing financial distress",
      "Proposals to change benefit formulas",
      "Increased required contributions from workers",
      "Movement toward hybrid or 401(k) plans",
      "Offers of lump-sum buyouts",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Know Your Pension's Health",
        description: "Request your pension fund's annual report. Check the funded ratio (should be 80%+), investment returns, and any proposed changes. Don't assume - verify.",
      },
      {
        step: 2,
        title: "Don't Rely Solely on Pension Income",
        description: "Build personal retirement savings as a backup. A Gold IRA provides tax-advantaged savings that you control, regardless of what happens to your pension.",
      },
      {
        step: 3,
        title: "Consider Lump-Sum Options",
        description: "If offered a lump-sum buyout, analyze it carefully. Sometimes taking control of your money is better than trusting a struggling pension fund.",
      },
      {
        step: 4,
        title: "Diversify Your Retirement Income",
        description: "Have multiple income streams: pension, Social Security, personal savings, and hard assets. If one fails, others provide a safety net.",
      },
    ],
    goldBenefit: "Unlike pensions, gold in your possession cannot be underfunded, mismanaged, or defaulted upon. It's not a promise from an institution - it's real wealth you control. A Gold IRA allows you to build retirement savings that exist outside the pension system entirely.",
    stats: [
      { label: "Total Pension Shortfall", value: "$8T+", subtext: "And growing" },
      { label: "Underfunded State Plans", value: "40+", subtext: "Below 80% funded" },
      { label: "Social Security Depletion", value: "2034", subtext: "Trust fund empty" },
      { label: "Gold Default Risk", value: "0%", subtext: "No counterparty" },
    ],
    faqs: [
      {
        question: "Can my pension actually be cut?",
        answer: "Yes. Detroit cut retiree benefits in bankruptcy. The Multiemployer Pension Reform Act of 2014 allows troubled private pensions to cut benefits to current retirees. Public pensions are harder to cut but not impossible - see Kentucky, New Jersey proposals.",
      },
      {
        question: "What about PBGC insurance?",
        answer: "The Pension Benefit Guaranty Corporation insures private pensions but caps benefits and is itself underfunded. If you were expecting $5,000/month, PBGC might only guarantee $1,200. And for multiemployer plans, it's even less.",
      },
      {
        question: "Should I take a lump-sum buyout?",
        answer: "It depends on your pension's health, your age, and your financial situation. A lump sum gives you control but requires self-management. If your pension is well-funded, the guaranteed income may be worth more. Analyze carefully.",
      },
    ],
    relatedScenarios: ["stock-market-crash", "dollar-collapse", "bank-failure"],
  },
];

export function getScenarioBySlug(slug: string): Scenario | undefined {
  return scenarios.find((s) => s.slug === slug);
}

export function getAllScenarioSlugs(): string[] {
  return scenarios.map((s) => s.slug);
}

export function getRelatedScenarios(currentSlug: string): Scenario[] {
  const current = getScenarioBySlug(currentSlug);
  if (!current) return [];

  return current.relatedScenarios
    .map((slug) => getScenarioBySlug(slug))
    .filter((s): s is Scenario => s !== undefined);
}
