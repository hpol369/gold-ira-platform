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
  {
    slug: "silver-shortage",
    title: "The Coming Silver Shortage",
    subtitle: "Industrial demand is soaring while mining supply plateaus. What happens when the world runs out of silver - and how to position yourself before it happens.",
    metaTitle: "Silver Shortage 2026: Is the World Running Out of Silver?",
    metaDescription: "Explore the looming silver shortage. Industrial demand from solar panels and EVs is exploding while supply can't keep up. Learn how to protect and profit.",
    threatLevel: "high",
    probability: "Structural deficit",
    timeframe: "Accelerating",
    sections: [
      {
        title: "The Silver Supply Crisis",
        content: "Silver is facing a perfect storm: industrial demand is exploding while mining supply has plateaued. Unlike gold, which is primarily hoarded, silver is consumed in industrial applications - and that silver is often gone forever. We've been in a supply deficit for years, and above-ground stockpiles are being depleted.",
        bullets: [
          "Silver deficit: 4+ consecutive years of supply shortfall",
          "Above-ground silver stockpiles: Down 50% since 2020",
          "Mine production: Flat to declining for a decade",
          "Most silver mined as byproduct of other metals",
        ],
      },
      {
        title: "The Industrial Demand Explosion",
        content: "Silver is essential to the green energy revolution. Every solar panel requires silver. Electric vehicles use twice as much silver as traditional cars. 5G networks, medical devices, and electronics all depend on silver's unique properties. By 2030, solar alone could consume 20-30% of current global silver production.",
        bullets: [
          "Solar panels: 20+ grams of silver per panel",
          "Solar demand: Expected to triple by 2030",
          "Electric vehicles: Use 2x silver vs traditional cars",
          "5G infrastructure: Requires significant silver",
        ],
      },
      {
        title: "Why Supply Can't Keep Up",
        content: "Silver is primarily mined as a byproduct of copper, zinc, and lead mining. There are few primary silver mines. When base metal mining slows (as it does in economic downturns), silver supply drops regardless of silver prices. New mines take 10+ years to develop. The supply response is glacially slow compared to demand growth.",
      },
    ],
    warningSignals: [
      "COMEX silver inventories declining",
      "Premiums on physical silver rising",
      "Industrial users reporting difficulty sourcing",
      "Silver ETF outflows (physical being pulled from market)",
      "Longer delivery times from mints and dealers",
      "Miners unable to replace depleted reserves",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Acquire Physical Silver Now",
        description: "In a true shortage, physical silver becomes difficult to obtain at any price. Build your position while silver is still available. A Silver IRA allows tax-advantaged accumulation.",
      },
      {
        step: 2,
        title: "Prioritize Liquidity",
        description: "Focus on recognized products: American Silver Eagles, Canadian Maple Leafs, and bars from major refiners. These will be easiest to sell or trade in a shortage scenario.",
      },
      {
        step: 3,
        title: "Consider Silver's Role in Your Portfolio",
        description: "Silver offers both crisis protection (like gold) and industrial demand upside. Many investors allocate 20-30% of their precious metals to silver.",
      },
      {
        step: 4,
        title: "Think Long-Term",
        description: "Supply deficits take years to resolve. This isn't a short-term trade - it's a structural shift that could play out over a decade or more.",
      },
    ],
    goldBenefit: "Silver shares gold's monetary properties but adds industrial demand that's growing exponentially. While gold protects wealth, silver offers both protection AND potential for significant gains if the shortage thesis plays out. The silver-to-gold ratio suggests silver is historically cheap.",
    stats: [
      { label: "Years of Deficit", value: "4+", subtext: "Consecutive" },
      { label: "Solar Silver Demand Growth", value: "300%", subtext: "By 2030" },
      { label: "Silver-to-Gold Ratio", value: "80:1+", subtext: "Historically high" },
      { label: "Above-Ground Stock Decline", value: "50%", subtext: "Since 2020" },
    ],
    faqs: [
      {
        question: "Is the silver shortage real?",
        answer: "Yes. The Silver Institute confirms multiple years of supply deficits. COMEX inventories are at multi-decade lows. The London Bullion Market Association has reported tight supply. This isn't speculation - it's documented.",
      },
      {
        question: "Can't miners just increase production?",
        answer: "Most silver is mined as a byproduct of other metals. Primary silver mines are rare, and new mines take 10+ years to develop. Even with higher prices, supply response is extremely slow. The deficit is structural, not cyclical.",
      },
      {
        question: "How does a shortage affect silver prices?",
        answer: "Shortages typically cause prices to spike dramatically. In the 1970s silver squeeze, prices rose from $6 to $50. In 2011, silver hit $50 again. A true industrial shortage could push prices far higher as manufacturers compete for limited supply.",
      },
    ],
    relatedScenarios: ["silver-squeeze", "dollar-collapse", "hyperinflation"],
  },
  {
    slug: "silver-squeeze",
    title: "Silver Squeeze: When Supply Runs Dry",
    subtitle: "What happens when investors and industry compete for a shrinking supply of physical silver. The setup, the trigger, and how to profit.",
    metaTitle: "Silver Squeeze 2026: Understanding the Physical Silver Squeeze",
    metaDescription: "Learn about the silver squeeze - when physical silver demand overwhelms supply. Understand the mechanics, historical precedents, and how to position yourself.",
    threatLevel: "high",
    probability: "Building pressure",
    timeframe: "Trigger dependent",
    sections: [
      {
        title: "What Is a Silver Squeeze?",
        content: "A silver squeeze occurs when demand for physical silver overwhelms available supply, causing prices to spike dramatically. Unlike stocks, silver has real physical constraints - there's only so much above-ground silver, and it takes years to mine more. When buyers want more silver than exists, prices must rise to ration supply.",
        bullets: [
          "1979-1980 Hunt Brothers squeeze: Silver went from $6 to $50",
          "2011 investment surge: Silver hit $50 again",
          "2021 Reddit squeeze attempt: Exposed tight physical market",
          "Key difference today: Industrial demand consuming supply",
        ],
      },
      {
        title: "The Paper vs Physical Disconnect",
        content: "The COMEX futures market trades 100x more 'paper' silver than physical silver exists. This works as long as few people demand delivery. But when investors increasingly demand physical metal, the disconnect becomes dangerous. Premiums on physical silver can spike 50-100% above 'spot' price when supply is tight.",
        bullets: [
          "Paper silver traded: 100x+ physical supply",
          "COMEX delivery requests: Rising trend",
          "Physical premiums: Can spike to 50-100%",
          "Industrial users: Must have physical metal",
        ],
      },
      {
        title: "Why Now Is Different",
        content: "Previous squeezes were primarily investor-driven. Today's setup includes permanent industrial demand growth from solar and EVs, plus investment demand. Industrial users can't substitute - they MUST have silver. This creates a structural floor under demand that didn't exist in previous cycles.",
      },
    ],
    warningSignals: [
      "COMEX registered silver inventory declining",
      "Dealer premiums rising sharply",
      "Delivery delays from mints",
      "Industrial users stockpiling",
      "ETF silver being withdrawn for physical delivery",
      "Backwardation in silver futures",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Own Physical Silver, Not Paper",
        description: "In a squeeze, paper silver (ETFs, futures) may not track physical prices. A Silver IRA with allocated physical metal ensures you own real silver, not a paper promise.",
      },
      {
        step: 2,
        title: "Build Position Before the Squeeze",
        description: "During a squeeze, physical silver becomes unavailable or carries massive premiums. The time to buy is before the squeeze, not during.",
      },
      {
        step: 3,
        title: "Consider Multiple Product Types",
        description: "Own a mix of coins and bars. During squeezes, different products may have different availability. Diversification provides options.",
      },
      {
        step: 4,
        title: "Have a Long-Term Perspective",
        description: "Squeezes can be volatile. Don't panic sell during pullbacks. The fundamental supply deficit remains regardless of short-term price movements.",
      },
    ],
    goldBenefit: "Physical silver in a tax-advantaged IRA positions you for both wealth protection and potential gains from a silver squeeze. Unlike paper silver or mining stocks, physical silver in allocated storage cannot be diluted, defaulted, or rehypothecated.",
    stats: [
      { label: "1980 Silver Spike", value: "733%", subtext: "$6 to $50" },
      { label: "Paper vs Physical", value: "100:1", subtext: "Leverage" },
      { label: "Physical Premium Range", value: "50-100%", subtext: "In tight markets" },
      { label: "2021 Reddit Squeeze", value: "#1", subtext: "WallStreetBets trend" },
    ],
    faqs: [
      {
        question: "Could a silver squeeze really happen?",
        answer: "It's happened multiple times: 1980, 2011, and 2021 saw partial squeezes. The difference now is structural industrial demand means the conditions are more favorable than ever. The question is when, not if.",
      },
      {
        question: "Why didn't the 2021 Reddit squeeze work?",
        answer: "It partially did - physical premiums spiked and dealers ran out of inventory. But the paper market is vast, and sustained buying pressure is needed. The squeeze exposed how tight physical supply really is.",
      },
      {
        question: "What would trigger a full squeeze?",
        answer: "Potential triggers include: major industrial user panic buying, currency crisis driving safe-haven demand, COMEX delivery demand exceeding inventory, or a major investment fund taking physical delivery. Any could start a self-reinforcing squeeze.",
      },
    ],
    relatedScenarios: ["silver-shortage", "dollar-collapse", "stock-market-crash"],
  },
  {
    slug: "great-depression-2",
    title: "Great Depression 2.0: Are We Headed for Economic Collapse?",
    subtitle: "Historical parallels, warning signs, and how to protect your wealth if history repeats.",
    metaTitle: "Great Depression 2.0: Is Another Economic Collapse Coming? 2026",
    metaDescription: "Are we heading for another Great Depression? Analyze the warning signs, historical parallels, and proven strategies to protect your retirement savings.",
    threatLevel: "critical",
    probability: "Growing concern",
    timeframe: "Unknown",
    sections: [
      {
        title: "Why People Are Worried About Great Depression 2.0",
        content: "The term 'Great Depression 2.0' has gained traction as people see troubling parallels between today's economy and the conditions that preceded the 1929 crash. While no two economic crises are identical, the similarities are hard to ignore.",
        bullets: [
          "Record wealth inequality mirrors 1929 levels",
          "Unsustainable debt levels across government, corporate, and personal sectors",
          "Asset bubbles in stocks, bonds, and real estate",
          "Unprecedented money printing and currency debasement",
          "Banking system vulnerabilities exposed in 2023",
        ],
      },
      {
        title: "Parallels to 1929",
        content: "Those who don't learn from history are doomed to repeat it. Here's how today compares to the lead-up to the original Great Depression:",
        bullets: [
          "Roaring 20s / Tech boom - both periods saw explosive speculation and 'new era' thinking",
          "Margin debt at extremes - investors borrowing heavily to buy stocks",
          "Income inequality peaked - top 1% held similar wealth share in 1929 and today",
          "Agricultural stress / Regional bank stress - different sectors, same systemic risk",
          "Federal Reserve policy errors - tightening into weakness",
        ],
      },
      {
        title: "What a Modern Depression Would Look Like",
        content: "A 21st century depression would be different from 1929, but potentially worse due to our interconnected global economy and digital financial system.",
        bullets: [
          "Bank failures could spread instantly via social media-driven runs",
          "Supply chain collapse could cause physical shortages",
          "Digital money could be frozen or controlled",
          "Government bailouts would further debase currency",
          "Social safety nets would quickly become overwhelmed",
        ],
      },
    ],
    warningSignals: [
      "Inverted yield curve (has predicted every recession since 1955)",
      "Banking sector stress and failures",
      "Widening credit spreads",
      "Declining consumer confidence",
      "Corporate earnings contraction",
      "Rising unemployment claims",
      "Flight to safety (gold, treasuries rising)",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Reduce Exposure to Financial System",
        description: "During the Great Depression, banks failed and took depositors' money with them. Today's FDIC helps but has limits. Reduce concentration in any single institution.",
      },
      {
        step: 2,
        title: "Own Hard Assets",
        description: "In the 1930s, those who owned gold, farmland, and other hard assets preserved wealth. Stocks lost 89% of their value; gold maintained purchasing power.",
      },
      {
        step: 3,
        title: "Eliminate Debt",
        description: "In deflation, debt becomes harder to repay as dollars become scarce. The Depression bankrupted those who were leveraged. Pay down debt now.",
      },
      {
        step: 4,
        title: "Build Multiple Income Streams",
        description: "Jobs disappeared overnight in the Depression. Multiple income sources and skills provide resilience.",
      },
    ],
    goldBenefit: "During the Great Depression, gold was one of the few assets that maintained value. While stocks crashed 89%, gold actually increased in value when FDR revalued it from $20.67 to $35 per ounce. Gold mining stocks were among the few investments that rose during the Depression years.",
    stats: [
      { label: "1929 Stock Crash", value: "-89%", subtext: "Dow Jones peak to trough" },
      { label: "Bank Failures 1930-33", value: "9,000+", subtext: "Taking deposits with them" },
      { label: "Unemployment Peak", value: "25%", subtext: "1933" },
      { label: "Gold Performance", value: "+69%", subtext: "Revalued 1933-34" },
    ],
    faqs: [
      {
        question: "Is another Great Depression actually possible?",
        answer: "Economists debate this, but many conditions are similar or worse than 1929: debt levels are higher, wealth inequality matches that era, and the banking system has shown recent stress. The difference is that governments now have experience with stimulus - but that creates its own risks of currency debasement.",
      },
      {
        question: "Didn't we already survive 2008? Isn't the system safer now?",
        answer: "The 2008 crisis was met with unprecedented intervention - trillions in bailouts, zero interest rates, and money printing. Many argue this didn't fix underlying problems but postponed them while creating new bubbles. Debt is higher now than in 2008, and the Fed has less room to cut rates.",
      },
      {
        question: "How do I protect my retirement from a depression?",
        answer: "Diversify outside paper assets into hard assets like gold and silver. Reduce debt. Maintain emergency funds outside the banking system. Consider a Gold IRA to protect retirement savings from both deflation (physical asset) and inflation (from government response to crisis).",
      },
    ],
    relatedScenarios: ["dollar-collapse", "bank-failure", "stock-market-crash"],
  },
  {
    slug: "is-vanguard-safe",
    title: "Is Vanguard Safe? Understanding Brokerage Risk",
    subtitle: "What happens to your investments if Vanguard or another major brokerage fails?",
    metaTitle: "Is Vanguard Safe? Brokerage Failure Risks Explained 2026",
    metaDescription: "Learn whether your investments at Vanguard (or Fidelity, Schwab) are truly safe. SIPC protection limits, brokerage failure scenarios, and how to protect your portfolio.",
    threatLevel: "high",
    probability: "Low but possible",
    timeframe: "Unpredictable",
    sections: [
      {
        title: "Are Your Investments Really Safe?",
        content: "Most investors trust that their money at Vanguard, Fidelity, or Schwab is completely safe. While these are strong institutions with protections, there are risks that most people don't consider.",
        bullets: [
          "SIPC covers up to $500,000 per customer if brokerage fails",
          "Cash is only protected up to $250,000",
          "Your actual securities (stocks, ETFs) are held in your name",
          "Complex financial products may have different protections",
          "Systemic crises could overwhelm protection mechanisms",
        ],
      },
      {
        title: "What SIPC Does and Doesn't Cover",
        content: "SIPC (Securities Investor Protection Corporation) is often confused with FDIC for banks. They're similar but not identical, and understanding the differences matters.",
        bullets: [
          "SIPC covers securities and cash up to $500,000 total",
          "Cash-only coverage limited to $250,000",
          "Does NOT protect against investment losses",
          "Does NOT cover commodity futures, foreign exchange, or certain investment contracts",
          "May take time to receive funds after brokerage failure",
        ],
      },
      {
        title: "When Big Brokerages Have Failed",
        content: "While rare, major brokerage failures have occurred. Understanding these cases helps assess risks today.",
        bullets: [
          "MF Global (2011): $1.6 billion in customer funds went missing",
          "Lehman Brothers (2008): Largest bankruptcy in US history",
          "Bear Stearns (2008): Emergency sale to prevent collapse",
          "In all cases, customer securities were eventually returned but with delays and stress",
        ],
      },
    ],
    warningSignals: [
      "Brokerage stock price dropping significantly",
      "Credit rating downgrades",
      "Executive departures or insider selling",
      "Regulatory actions or investigations",
      "Significant litigation or settlement announcements",
      "Difficulty reaching customer service or accessing accounts",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Diversify Across Institutions",
        description: "Don't keep all your investments at one brokerage. Spread across 2-3 major brokerages to reduce single-institution risk.",
      },
      {
        step: 2,
        title: "Understand Your Coverage",
        description: "Know what's covered and what isn't. SIPC protects up to $500,000 per customer. If you have more, consider additional accounts or brokerages.",
      },
      {
        step: 3,
        title: "Hold Physical Assets Outside the System",
        description: "Physical gold and silver in a secure depository aren't subject to brokerage risk. A Gold IRA provides tax-advantaged ownership of physical metals.",
      },
      {
        step: 4,
        title: "Keep Records",
        description: "Maintain copies of your account statements and holdings. In a failure, documentation helps prove what you owned.",
      },
    ],
    goldBenefit: "When you own physical gold in a Gold IRA, the metal is held in your name in a secure, insured depository. It's not on anyone's balance sheet. Unlike brokerage accounts where your 'assets' are entries in a database, physical gold exists regardless of what happens to financial institutions.",
    stats: [
      { label: "SIPC Coverage Maximum", value: "$500K", subtext: "Per customer" },
      { label: "SIPC Cash Maximum", value: "$250K", subtext: "Portion for cash" },
      { label: "MF Global Missing", value: "$1.6B", subtext: "Customer funds (2011)" },
      { label: "Physical Gold Risk", value: "0", subtext: "No counterparty" },
    ],
    faqs: [
      {
        question: "Is Vanguard likely to fail?",
        answer: "Vanguard is one of the largest and most stable investment companies in the world, with over $7 trillion in assets under management. Its unique ownership structure (owned by its funds) reduces some risks. While failure is unlikely, no institution is completely immune to systemic crises. Diversification is prudent.",
      },
      {
        question: "What happens to my index funds if Vanguard fails?",
        answer: "Your shares in Vanguard funds are held in your name and are separate from Vanguard's assets. In a failure, funds would likely be transferred to another manager. However, the process could take time, during which you couldn't access or trade your holdings.",
      },
      {
        question: "Should I move my money out of Vanguard?",
        answer: "There's no reason to panic about Vanguard specifically. However, diversifying across multiple brokerages and including non-financial-system assets (like physical gold in an IRA) is prudent risk management regardless of which brokerages you use.",
      },
    ],
    relatedScenarios: ["bank-failure", "stock-market-crash", "dollar-collapse"],
  },
  {
    slug: "banks-freeze-account",
    title: "Can Banks Freeze Your Account? Know Your Rights",
    subtitle: "When banks can (and do) freeze accounts, and how to protect your access to your own money.",
    metaTitle: "Can Banks Freeze Your Account? What You Need to Know 2026",
    metaDescription: "Learn when and why banks can freeze your account, how long they can hold your money, and strategies to ensure you always have access to funds.",
    threatLevel: "high",
    probability: "Common occurrence",
    timeframe: "Immediate risk",
    sections: [
      {
        title: "Yes, Banks Can Freeze Your Account",
        content: "Many people assume their money in the bank is always accessible. In reality, banks have broad powers to freeze accounts, sometimes without warning. Understanding these risks is essential for financial planning.",
        bullets: [
          "Banks can freeze accounts for suspected fraud, court orders, or regulatory compliance",
          "Government agencies can order freezes without prior notice",
          "Freezes can happen instantly, leaving you without access",
          "Even joint accounts can be frozen due to one account holder's issues",
          "Unfreezing can take days, weeks, or months",
        ],
      },
      {
        title: "Common Reasons for Account Freezes",
        content: "Bank account freezes happen more often than most people realize. Here are the most common triggers:",
        bullets: [
          "Suspected fraudulent activity on the account",
          "IRS tax levy or state tax debt",
          "Court judgment or lawsuit (creditor garnishment)",
          "Child support or alimony arrears",
          "Suspicious Activity Report (SAR) filing",
          "Identity theft investigation",
          "Regulatory compliance concerns (AML/KYC)",
        ],
      },
      {
        title: "Lessons from Banking Crises",
        content: "History shows that during financial crises, account freezes can become widespread:",
        bullets: [
          "Cyprus 2013: Banks closed for two weeks; withdrawals limited to €100/day when reopened",
          "Greece 2015: Banks closed for three weeks; €60/day ATM limit",
          "Lebanon 2019-present: Dollar withdrawals frozen; currency lost 90%+ value",
          "India 2016: Government demonetized 86% of currency overnight",
          "Argentina 2001: Bank deposits frozen; converted to depreciated pesos",
        ],
      },
    ],
    warningSignals: [
      "Receiving notifications about suspicious activity",
      "Letters from IRS or state tax agency about debt",
      "Legal notices about lawsuits or judgments",
      "Bank asking for additional identity verification",
      "Large or unusual transactions being questioned",
      "Economic or banking sector instability in the news",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Maintain Multiple Bank Accounts",
        description: "Don't keep all your money in one account or bank. If one is frozen, you'll have access to others. Consider accounts at different types of institutions.",
      },
      {
        step: 2,
        title: "Keep Cash Emergency Fund",
        description: "Maintain 2-4 weeks of expenses in physical cash at home. This provides access when banks are unavailable or accounts are frozen.",
      },
      {
        step: 3,
        title: "Own Assets Outside the Banking System",
        description: "Physical gold and silver stored in a secure depository aren't subject to bank freezes. A Gold IRA provides tax-advantaged ownership outside the traditional banking system.",
      },
      {
        step: 4,
        title: "Stay Current on Obligations",
        description: "Tax debts, child support, and court judgments are common freeze triggers. Stay current on legal obligations to reduce risk.",
      },
    ],
    goldBenefit: "Physical gold in a private depository cannot be frozen by a bank because it's not in the banking system. Your gold is held in allocated, segregated storage in your name. While bank accounts can be frozen with a keystroke, accessing your physical gold requires proper verification and your authorization.",
    stats: [
      { label: "Cyprus Bank Holiday", value: "14 days", subtext: "Banks closed (2013)" },
      { label: "Greece ATM Limit", value: "€60/day", subtext: "For weeks (2015)" },
      { label: "Lebanon Currency Loss", value: "-90%", subtext: "While frozen" },
      { label: "Gold Freeze Risk", value: "0", subtext: "Not in banking system" },
    ],
    faqs: [
      {
        question: "Can the government freeze bank accounts without warning?",
        answer: "Yes. The IRS can issue a tax levy that freezes your account without prior notice. Court orders can also result in immediate freezes. Banks themselves can freeze accounts for suspected fraud. In all these cases, you may discover the freeze when your debit card is declined or a check bounces.",
      },
      {
        question: "How long can a bank keep my account frozen?",
        answer: "It depends on the reason. For suspected fraud, freezes typically last a few days while investigated. For tax levies, accounts may be frozen until you resolve the debt with the IRS. Court-ordered freezes can last until the legal matter is resolved, which could be months or years.",
      },
      {
        question: "Could a Cyprus-style freeze happen in America?",
        answer: "While the specific circumstances differ, the principle is the same: during financial crises, governments and banks prioritize system stability over individual account access. Bank holidays, withdrawal limits, and capital controls have occurred throughout history when systems are stressed.",
      },
    ],
    relatedScenarios: ["bank-failure", "dollar-collapse", "cbdc-control"],
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
