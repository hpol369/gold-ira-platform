// src/data/learn-articles/tech-retirement-cluster.ts
// Tech Industry Retirement Planning Articles
// Covering tech worker benefits, layoffs, stock compensation, and diversification

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const techRetirementArticles: LearnArticleRegistry = {
  'google-retirement-benefits': {
    slug: 'google-retirement-benefits',
    title: 'Google Retirement Benefits: 401k Match, RSUs & Mega Backdoor Roth',
    subtitle: 'Complete guide to Google employee retirement benefits including 401k matching, stock grants, and advanced savings strategies.',

    metaTitle: 'Google Retirement Benefits: 401k Match & RSU Guide | 2026',
    metaDescription: 'Complete guide to Google retirement benefits. Learn about Google 401k match percentage, mega backdoor Roth, RSU vesting, and retirement age policies for Googlers.',
    keywords: ['google retirement benefits', 'google 401k match', 'google employee retirement'],

    targetKeyword: 'google retirement benefits',
    volume: 60,
    difficulty: 1,
    cpc: 0.90,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Google matches 50% of 401k contributions up to IRS limits (effectively ~$11,500 match in 2024).',
      'Mega Backdoor Roth allows up to $69,000 total 401k contributions when available.',
      'RSUs vest over 4 years and create significant concentrated stock positions.',
      'Google has no mandatory retirement age but offers generous retirement benefits.',
      'Diversifying away from GOOGL stock into Gold IRA reduces concentration risk.',
    ],

    tocItems: [
      { id: '401k-details', label: 'Google 401k Details' },
      { id: 'mega-backdoor', label: 'Mega Backdoor Roth' },
      { id: 'stock-grants', label: 'RSU & Stock Grants' },
      { id: 'retirement-policies', label: 'Retirement Age Policies' },
      { id: 'diversification', label: 'Diversification Strategies' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: '401k-details',
        icon: 'PiggyBank',
        iconColor: 'blue',
        title: 'Google 401k Match Details',
        content: 'Google offers one of the most generous 401k matching programs in the tech industry:',
        bullets: [
          '**Match rate:** 50% of employee contributions up to IRS limits',
          '**2024 example:** Contribute $23,000 (max) and Google matches $11,500',
          '**Immediate vesting:** Google match vests immediately - no waiting period',
          '**Investment options:** Wide range of low-cost index funds and target-date funds',
          '**Roth 401k option:** Can contribute to traditional or Roth 401k',
          '**After-tax contributions:** Google allows after-tax 401k contributions for mega backdoor',
        ],
        table: {
          headers: ['Contribution Type', '2024 Limit', 'Google Match'],
          rows: [
            ['Employee pre-tax/Roth', '$23,000 ($30,500 if 50+)', '50% match'],
            ['Employer match', 'Up to $11,500', 'N/A'],
            ['After-tax (mega backdoor)', 'Up to $34,500', 'No match'],
            ['Total possible', '$69,000 ($76,500 if 50+)', '-'],
          ],
        },
      },
      {
        id: 'mega-backdoor',
        icon: 'TrendingUp',
        iconColor: 'green',
        title: 'Mega Backdoor Roth Strategy',
        content: 'Google\'s 401k plan allows the powerful mega backdoor Roth strategy:',
        bullets: [
          '**What it is:** Make after-tax 401k contributions, then convert to Roth',
          '**Contribution room:** $69,000 total minus pre-tax and employer match',
          '**Tax advantage:** Conversions grow tax-free in Roth account',
          '**In-plan conversion:** Google allows automatic in-plan Roth conversions',
          '**High earner strategy:** Essential for Googlers above Roth IRA income limits',
          '**Annual opportunity:** Use it or lose it - cannot carry over unused space',
        ],
        callout: {
          type: 'example',
          title: 'Mega Backdoor Roth Example',
          content: 'A Googler contributes $23,000 pre-tax + $11,500 employer match = $34,500. Remaining room: $69,000 - $34,500 = $34,500 in after-tax contributions. Convert to Roth for tax-free growth.',
        },
      },
      {
        id: 'stock-grants',
        icon: 'Briefcase',
        iconColor: 'purple',
        title: 'RSUs & Stock Compensation',
        content: 'Google stock grants (RSUs) represent a significant portion of total compensation:',
        bullets: [
          '**Vesting schedule:** Typically 4 years with monthly or quarterly vesting',
          '**No cliff:** Many grants vest from the start (no 1-year cliff)',
          '**Refresher grants:** Annual additional RSU grants for retention',
          '**Tax treatment:** RSUs taxed as ordinary income when they vest',
          '**Withholding:** Google typically sells shares to cover taxes at vesting',
          '**Concentration risk:** Long-tenured Googlers often have 50%+ net worth in GOOGL',
        ],
        table: {
          headers: ['Years at Google', 'Typical RSU Accumulation', 'Risk Level'],
          rows: [
            ['1-2 years', '$50k - $200k', 'Moderate'],
            ['3-5 years', '$200k - $500k', 'High'],
            ['6-10 years', '$500k - $2M+', 'Very High'],
            ['10+ years', '$2M+', 'Critical'],
          ],
          caption: 'Estimates vary widely based on level, team, and stock performance',
        },
      },
      {
        id: 'retirement-policies',
        icon: 'Calendar',
        iconColor: 'amber',
        title: 'Google Retirement Age & Policies',
        content: 'Google has no mandatory retirement age but offers several retirement-related benefits:',
        bullets: [
          '**No forced retirement:** No mandatory retirement age at Google',
          '**Age discrimination:** Protected under ADEA (Age Discrimination in Employment Act)',
          '**Retiree benefits:** Limited compared to active employees',
          '**COBRA:** 18 months of continued health coverage available',
          '**401k access:** Can keep funds in Google 401k or roll over',
          '**Vesting acceleration:** Check if your RSUs accelerate upon certain conditions',
        ],
        callout: {
          type: 'info',
          title: 'Early Retirement Considerations',
          content: 'Many Googlers consider early retirement due to high compensation. Key factors: healthcare costs (until Medicare at 65), RSU vesting acceleration, and sequence of returns risk with concentrated GOOGL holdings.',
        },
      },
      {
        id: 'diversification',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Diversification Strategies for Googlers',
        content: 'Reducing concentration in GOOGL stock is critical for retirement security:',
        bullets: [
          '**Rule of thumb:** No more than 10-15% of portfolio in single stock',
          '**Systematic selling:** Sell fixed percentage of RSUs as they vest',
          '**10b5-1 plans:** Pre-scheduled selling plans to avoid insider trading concerns',
          '**Tax-loss harvesting:** Offset gains with losses elsewhere',
          '**Gold IRA diversification:** Move portion of 401k to uncorrelated asset',
          '**Real estate:** Another uncorrelated asset class for diversification',
        ],
      },
    ],

    goldBridge: {
      title: 'Diversify Your Google Wealth with Physical Gold',
      content: 'Tech workers often have dangerous concentration in company stock. When tech crashes, everything crashes together - income, stock, and 401k investments in tech-heavy index funds.',
      bullets: [
        'Gold provides true diversification - uncorrelated to tech stocks',
        'Roll portion of Google 401k to Gold IRA tax-free',
        'Physical gold holds value when paper assets decline',
        'Protection against tech sector corrections and market crashes',
        'Reduce concentration risk from GOOGL and tech-heavy 401k investments',
        'No counterparty risk - you own the physical metal',
      ],
    },

    faqs: [
      {
        question: 'What is Google\'s 401k match percentage?',
        answer: 'Google matches 50% of employee 401k contributions up to the IRS limit. In 2024, if you contribute the maximum $23,000 (or $30,500 if 50+), Google matches $11,500 (or $15,250). The match vests immediately with no waiting period.',
      },
      {
        question: 'Does Google offer mega backdoor Roth?',
        answer: 'Yes, Google\'s 401k plan allows after-tax contributions that can be converted to Roth (mega backdoor Roth). This allows high-earning Googlers to contribute up to $69,000 total to their 401k in 2024, far exceeding normal limits.',
      },
      {
        question: 'How much company stock is too much for a Googler?',
        answer: 'Financial advisors recommend no more than 10-15% of your portfolio in any single stock, including employer stock. Many long-tenured Googlers have 50%+ of their net worth in GOOGL - a dangerous concentration that should be systematically reduced.',
      },
      {
        question: 'What happens to my Google 401k when I retire?',
        answer: 'When you leave Google, you can keep your 401k in the Google plan (if balance allows), roll it to an IRA, or roll it to a new employer\'s 401k. Rolling to an IRA provides the most flexibility, including the option to convert portions to a Gold IRA for diversification.',
      },
    ],

    relatedArticles: ['rsu-concentrated-position', 'tech-layoff-retirement-planning', 'stock-compensation-retirement-planning'],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'tech-layoff-retirement-planning': {
    slug: 'tech-layoff-retirement-planning',
    title: 'Tech Layoff Retirement Planning: Protect Your 401k After Job Loss',
    subtitle: 'Strategic guide for laid-off tech workers to optimize severance, protect retirement savings, and navigate job search without derailing financial goals.',

    metaTitle: 'Tech Layoff Retirement Planning: 401k & Severance Guide | 2026',
    metaDescription: 'Essential guide for tech workers facing layoffs. Learn severance optimization, 401k rollover decisions, COBRA vs ACA, and how to protect retirement during job search.',
    keywords: ['tech layoff retirement planning', 'laid off tech worker retirement', 'tech layoff 401k'],

    targetKeyword: 'tech layoff retirement planning',

    category: 'life-events',
    threatLevel: 'warning',

    takeaways: [
      'Negotiate severance - tech packages are often negotiable, especially for senior employees.',
      'Roll 401k to IRA for maximum control and investment options during uncertain times.',
      'COBRA is expensive - compare to ACA marketplace plans before enrolling.',
      'Build 6-12 month emergency fund before aggressive retirement contributions.',
      'Gold IRA can protect retirement savings from market volatility during layoff period.',
    ],

    tocItems: [
      { id: 'severance', label: 'Severance Optimization' },
      { id: '401k-decisions', label: '401k Rollover Decisions' },
      { id: 'healthcare', label: 'COBRA vs ACA' },
      { id: 'emergency-fund', label: 'Emergency Fund Strategy' },
      { id: 'job-search', label: 'Job Search Without Sacrifice' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'severance',
        icon: 'FileText',
        iconColor: 'amber',
        title: 'Severance Package Optimization',
        content: 'Tech severance packages often have negotiable elements:',
        bullets: [
          '**Base severance:** Typically 2 weeks to 1 month per year of service',
          '**Negotiate timing:** Delay effective date to allow more RSU vesting',
          '**COBRA subsidy:** Some companies pay COBRA for 3-6 months',
          '**Outplacement services:** Career coaching, resume help, networking',
          '**Equity acceleration:** Negotiate partial vesting of unvested RSUs',
          '**Non-compete relief:** Trade equity for release from non-compete clauses',
        ],
        table: {
          headers: ['Severance Component', 'Standard', 'Negotiable To'],
          rows: [
            ['Base pay', '2 weeks/year', '4 weeks/year'],
            ['COBRA coverage', '0-3 months', '6-12 months'],
            ['RSU acceleration', 'None', 'Partial vesting'],
            ['Bonus', 'Pro-rated or none', 'Full bonus'],
          ],
        },
        callout: {
          type: 'tip',
          title: 'Negotiate Before Signing',
          content: 'You often have 21 days (or 45 if over 40) to sign a severance agreement. Use this time to negotiate. Consult an employment attorney for packages over $50k - the investment often pays for itself.',
        },
      },
      {
        id: '401k-decisions',
        icon: 'PiggyBank',
        iconColor: 'blue',
        title: '401k Rollover Decisions After Layoff',
        content: 'What to do with your 401k after a tech layoff:',
        table: {
          headers: ['Option', 'Pros', 'Cons'],
          rows: [
            ['Leave in old 401k', 'No action needed, familiar', 'Limited options, may have fees'],
            ['Roll to new employer 401k', 'Consolidation, possible better funds', 'Must wait for new job'],
            ['Roll to Traditional IRA', 'Maximum flexibility, any investment', 'No 401k loan option'],
            ['Roll to Roth IRA', 'Tax-free growth, flexibility', 'Pay taxes on conversion'],
          ],
        },
        bullets: [
          '**Direct rollover:** Always do direct trustee-to-trustee transfer',
          '**60-day rule:** If you receive check, must deposit within 60 days',
          '**20% withholding:** Indirect rollovers have mandatory withholding',
          '**After-tax money:** May have different rollover rules',
          '**Company stock:** Consider NUA (Net Unrealized Appreciation) strategy',
        ],
        callout: {
          type: 'warning',
          title: 'Avoid 20% Withholding Trap',
          content: 'If you receive a check instead of direct rollover, 20% is withheld for taxes. You must deposit the full amount (including making up the 20%) within 60 days to avoid taxes and penalties.',
        },
      },
      {
        id: 'healthcare',
        icon: 'Heart',
        iconColor: 'red',
        title: 'COBRA vs ACA Marketplace',
        content: 'Healthcare coverage is often the biggest expense after layoff:',
        table: {
          headers: ['Factor', 'COBRA', 'ACA Marketplace'],
          rows: [
            ['Cost', 'Full premium + 2% admin', 'Income-based subsidies'],
            ['Coverage', 'Same as before', 'Similar plans available'],
            ['Duration', '18 months', 'Annual enrollment or special period'],
            ['Flexibility', 'Same plan only', 'Choose any available plan'],
          ],
        },
        bullets: [
          '**COBRA cost shock:** Expect $1,500-$3,000/month for family coverage',
          '**ACA subsidies:** Lower income = higher subsidies (severance may count)',
          '**Special enrollment:** Layoff triggers 60-day ACA enrollment window',
          '**COBRA retroactive:** Can elect COBRA retroactively up to 60 days',
          '**Gap strategy:** Use ACA, keep COBRA option open for 60 days',
        ],
        callout: {
          type: 'example',
          title: 'COBRA vs ACA Cost Example',
          content: 'COBRA family plan: $2,400/month = $28,800/year. ACA Silver plan with subsidies (if income qualifies): $600-$1,200/month. Potential savings: $14,400-$21,600/year.',
        },
      },
      {
        id: 'emergency-fund',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Emergency Fund Strategy',
        content: 'Building and managing emergency reserves during layoff:',
        bullets: [
          '**Target:** 6-12 months of essential expenses',
          '**Tech job search:** Average 3-6 months in normal market, longer in downturns',
          '**Essential expenses:** Housing, food, healthcare, minimum debt payments',
          '**Pause contributions:** Consider pausing 401k to build cash reserves',
          '**High-yield savings:** Park emergency fund in HYSA earning 4-5%',
          '**Avoid 401k withdrawal:** Early withdrawal = 10% penalty + taxes',
        ],
        callout: {
          type: 'warning',
          title: 'Don\'t Raid Retirement',
          content: 'Withdrawing from 401k before 59.5 triggers 10% penalty plus income taxes - potentially 35-45% total cost. A $50,000 withdrawal could net only $27,500. Explore all other options first.',
        },
      },
      {
        id: 'job-search',
        icon: 'Search',
        iconColor: 'purple',
        title: 'Job Search Without Sacrificing Retirement',
        content: 'Strategies to maintain retirement trajectory during job search:',
        bullets: [
          '**Lifestyle adjustment:** Cut discretionary spending 30-50% immediately',
          '**Severance bridge:** Use severance to cover expenses, protect investments',
          '**RSU timing:** Consider tax implications of vested but unsold RSUs',
          '**Side income:** Contract work, consulting to extend runway',
          '**Geographic flexibility:** Remote roles or relocation can speed job search',
          '**Network actively:** 70% of tech jobs filled through networking',
        ],
      },
    ],

    warningBox: {
      title: 'Tech Layoffs Often Come in Waves',
      content: 'If your company is laying off, more cuts may follow. Start job searching immediately even while negotiating severance. Update LinkedIn, reach out to network, and begin applying the day you receive notice.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Protect Your 401k During Uncertain Times',
      content: 'Tech layoffs often coincide with market downturns. Don\'t let a job loss and market crash hit your retirement simultaneously.',
      bullets: [
        'Roll portion of 401k to Gold IRA for crash protection',
        'Physical gold provides stability during market turbulence',
        'Gold often rises when tech stocks fall - natural hedge',
        'Tax-free rollover preserves your retirement value',
        'Peace of mind during stressful job search period',
        'Protect accumulated RSU wealth from market volatility',
      ],
    },

    faqs: [
      {
        question: 'Should I roll over my 401k immediately after a tech layoff?',
        answer: 'Not necessarily immediately, but within 60-90 days is wise. First, focus on severance negotiation and understanding your options. Then roll to an IRA for maximum flexibility. Avoid leaving money in an old 401k indefinitely as you lose access to company resources and may face fees.',
      },
      {
        question: 'Is COBRA worth it after a tech layoff?',
        answer: 'It depends on your income and family situation. COBRA is expensive ($1,500-$3,000/month for family) but provides continuity of coverage. If your income drops significantly, ACA marketplace plans with subsidies are often much cheaper. You have 60 days to elect COBRA retroactively, so explore ACA first.',
      },
      {
        question: 'Should I stop 401k contributions during unemployment?',
        answer: 'If you have emergency funds covering 6+ months of expenses, you can continue contributing to an IRA during unemployment. If cash is tight, prioritize building emergency reserves. Never withdraw from retirement accounts if avoidable - the penalties and taxes are severe.',
      },
      {
        question: 'What happens to my unvested RSUs when laid off?',
        answer: 'Typically, unvested RSUs are forfeited upon termination. However, some severance packages negotiate partial acceleration. Check your equity agreement carefully and negotiate during severance discussions. Vested but unsold RSUs remain yours but must be managed carefully for tax implications.',
      },
    ],

    relatedArticles: ['google-retirement-benefits', 'should-i-move-401k-to-bonds', 'rsu-concentrated-position'],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'should-i-move-401k-to-bonds': {
    slug: 'should-i-move-401k-to-bonds',
    title: 'Should I Move My 401k to Bonds? Age, Risk & Timing Guide',
    subtitle: 'Complete analysis of moving 401k to bonds - when it makes sense, the risks of market timing, and better alternatives for retirement protection.',

    metaTitle: 'Should I Move 401k to Bonds? Age-Based Allocation Guide | 2026',
    metaDescription: 'Should you move your 401k to bonds? Learn bond allocation by age, market timing risks, bond fund types, and why gold may be better diversification than bonds alone.',
    keywords: ['should i move 401k to bonds', 'move 401k to bonds', '401k all in bonds'],

    targetKeyword: 'should i move 401k to bonds',
    volume: 40,
    difficulty: 6,
    cpc: 1.60,

    category: 'market-fear',
    threatLevel: 'warning',

    takeaways: [
      'Traditional rule: Bond allocation = your age (60 years old = 60% bonds).',
      'Moving 401k to 100% bonds is rarely advisable - inflation erodes purchasing power.',
      'Market timing fails most investors - staying invested beats timing attempts.',
      'Bond funds lost significant value in 2022 - bonds aren\'t risk-free.',
      'Gold provides diversification benefits that bonds alone cannot offer.',
    ],

    tocItems: [
      { id: 'bond-allocation', label: 'Bond Allocation by Age' },
      { id: 'timing-risks', label: 'Market Timing Risks' },
      { id: 'bond-types', label: 'Bond Fund Types' },
      { id: 'alternatives', label: 'Alternatives to Bonds' },
      { id: 'gold-diversification', label: 'Gold for Diversification' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'bond-allocation',
        icon: 'Calculator',
        iconColor: 'blue',
        title: 'Bond Allocation by Age',
        content: 'Traditional guidelines suggest increasing bond allocation as you age:',
        table: {
          headers: ['Age', 'Traditional Rule', 'Modern Approach', 'Aggressive'],
          rows: [
            ['30s', '30% bonds', '10-20% bonds', '0-10% bonds'],
            ['40s', '40% bonds', '20-30% bonds', '10-20% bonds'],
            ['50s', '50% bonds', '30-40% bonds', '20-30% bonds'],
            ['60s', '60% bonds', '40-50% bonds', '30-40% bonds'],
            ['70+', '70% bonds', '50-60% bonds', '40-50% bonds'],
          ],
        },
        bullets: [
          '**Age in bonds rule:** Your age = bond percentage (simple but outdated)',
          '**Age minus 20 rule:** More aggressive - (Age - 20) = bond percentage',
          '**Glide path approach:** Target-date funds gradually shift to bonds',
          '**Personal factors:** Health, pensions, and Social Security affect optimal allocation',
          '**Sequence risk:** Those near retirement need more stability',
        ],
        callout: {
          type: 'info',
          title: 'Why 100% Bonds Is Dangerous',
          content: 'With inflation at 3%+ and bond yields at 4-5%, 100% bonds barely keeps pace with inflation. Over 20-30 year retirement, you need growth assets to maintain purchasing power.',
        },
      },
      {
        id: 'timing-risks',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Market Timing Risks',
        content: 'Moving to bonds based on market predictions rarely works:',
        bullets: [
          '**Missing best days:** Missing just 10 best market days over 20 years cuts returns by 50%+',
          '**Two correct decisions:** Must time exit AND re-entry correctly',
          '**Emotional decisions:** Fear causes selling low, greed causes buying high',
          '**Recovery speed:** Markets often recover before investors feel safe to return',
          '**Professional failure:** Even most fund managers fail to beat buy-and-hold',
        ],
        table: {
          headers: ['Strategy', '20-Year Outcome', 'Notes'],
          rows: [
            ['Stay invested', '+900% (S&P 500)', 'Historical average'],
            ['Miss 10 best days', '+350%', '61% less than staying invested'],
            ['Miss 20 best days', '+150%', '83% less than staying invested'],
            ['Miss 30 best days', '+25%', 'Barely beats bonds'],
          ],
          caption: 'Hypothetical example based on S&P 500 historical returns',
        },
        callout: {
          type: 'warning',
          title: 'The Timing Trap',
          content: 'Most market crashes recover within 2-5 years. If you sell during a crash and wait to "feel safe," you\'ll likely miss the recovery. The best days often occur during the worst periods.',
        },
      },
      {
        id: 'bond-types',
        icon: 'FileText',
        iconColor: 'green',
        title: 'Bond Fund Types in 401k Plans',
        content: 'Not all bond funds are equal - understand what you\'re buying:',
        table: {
          headers: ['Bond Type', 'Risk Level', 'Typical Yield', 'Best For'],
          rows: [
            ['Money Market', 'Very Low', '4-5%', 'Short-term stability'],
            ['Short-term Treasury', 'Low', '4-5%', 'Safety, low duration'],
            ['Total Bond Market', 'Moderate', '4-5%', 'Core bond allocation'],
            ['Corporate Bond', 'Moderate-High', '5-6%', 'Higher yield seekers'],
            ['High Yield (Junk)', 'High', '7-9%', 'Growth-oriented investors'],
          ],
        },
        bullets: [
          '**Duration matters:** Longer duration = more interest rate sensitivity',
          '**2022 lesson:** AGG (total bond) lost 13% when rates rose',
          '**Credit risk:** Corporate and high-yield bonds correlate with stocks',
          '**Inflation protection:** TIPS protect against inflation, traditional bonds don\'t',
          '**Stable value funds:** 401k-specific option with principal protection',
        ],
        callout: {
          type: 'example',
          title: '2022 Bond Market Shock',
          content: 'In 2022, the "safe" Vanguard Total Bond Market fund (BND) lost 13%. Investors who fled to bonds for safety still lost money. This proves bonds aren\'t risk-free, especially in rising rate environments.',
        },
      },
      {
        id: 'alternatives',
        icon: 'Layers',
        iconColor: 'purple',
        title: 'Alternatives to Heavy Bond Allocation',
        content: 'Consider these alternatives before going all-in on bonds:',
        bullets: [
          '**Dividend stocks:** Quality dividend payers provide income with growth potential',
          '**REITs:** Real estate exposure with income component',
          '**Stable value funds:** 401k option with principal protection + steady returns',
          '**Precious metals:** Gold and silver for true diversification',
          '**Annuities:** Guaranteed income options (be careful of fees)',
          '**Cash/Money market:** For near-term needs, not long-term allocation',
        ],
      },
      {
        id: 'gold-diversification',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'Gold as Portfolio Diversification',
        content: 'Gold offers diversification benefits that bonds cannot provide:',
        bullets: [
          '**Uncorrelated:** Gold often rises when stocks AND bonds fall',
          '**Inflation hedge:** Physical gold maintains purchasing power over centuries',
          '**Crisis protection:** Gold rallies during geopolitical and financial crises',
          '**No counterparty risk:** Physical gold doesn\'t depend on issuer solvency',
          '**Portfolio insurance:** 10-20% allocation provides meaningful protection',
          '**Tax-advantaged:** Gold IRA allows tax-deferred or tax-free gold ownership',
        ],
        table: {
          headers: ['Asset', '2022 Return', 'Notes'],
          rows: [
            ['S&P 500', '-18%', 'Stocks down'],
            ['Total Bond (AGG)', '-13%', 'Bonds down too'],
            ['Gold', '-0.3%', 'Held value'],
            ['60/40 Portfolio', '-16%', 'Traditional allocation failed'],
          ],
          caption: '2022 showed bonds don\'t always protect when you need them',
        },
      },
    ],

    warningBox: {
      title: 'Bonds Aren\'t Risk-Free',
      content: '2022 proved that bonds can lose significant value, especially when interest rates rise. A 60/40 stock/bond portfolio lost 16% in 2022 - the worst performance since 2008. Consider true diversifiers like gold that don\'t correlate with either stocks or bonds.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Better Diversification Than Bonds Alone',
      content: 'If you\'re moving to bonds because you fear market crashes, consider adding gold - it provides protection that bonds cannot.',
      bullets: [
        'Gold rises when both stocks AND bonds fall',
        'Physical gold has no credit or interest rate risk',
        'Roll portion of 401k to Gold IRA for true diversification',
        '10-20% allocation provides meaningful portfolio insurance',
        'Gold maintained value in 2022 while bonds lost 13%',
        'Tax-free rollover preserves your retirement value',
      ],
    },

    faqs: [
      {
        question: 'Should I move my 401k to bonds before retirement?',
        answer: 'Gradually shifting some allocation to bonds as you approach retirement makes sense, but going 100% bonds is rarely advisable. Even in retirement, you need growth to outpace inflation over 20-30 years. A moderate bond allocation (40-60%) with diversifiers like gold is more prudent than all-bonds.',
      },
      {
        question: 'Are bonds safe during a market crash?',
        answer: 'Not always. In 2022, bonds lost 13% while stocks fell 18%. During the 2020 COVID crash, even "safe" Treasury bonds briefly sold off. Bonds protect against some risks but not all. Gold often provides better crisis protection because it\'s uncorrelated to both stocks and bonds.',
      },
      {
        question: 'What percentage of my 401k should be in bonds at 60?',
        answer: 'Traditional advice suggests 60% bonds at age 60, but modern guidance recommends 40-50% for most people. Your specific allocation depends on other income sources (Social Security, pensions), health, and risk tolerance. Consider adding gold (10-20%) alongside bonds for true diversification.',
      },
      {
        question: 'Is it too late to move to bonds after the market drops?',
        answer: 'Moving to bonds after a crash locks in losses and likely causes you to miss the recovery. Historically, staying invested through downturns produces better outcomes than market timing. If you\'re concerned about risk, consider adding diversifiers like gold rather than selling stocks at depressed prices.',
      },
    ],

    relatedArticles: ['tech-layoff-retirement-planning', 'rsu-concentrated-position', 'google-retirement-benefits'],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'rsu-concentrated-position': {
    slug: 'rsu-concentrated-position',
    title: 'RSU Concentrated Position: Managing Too Much Company Stock',
    subtitle: 'Strategic guide to reducing concentrated stock positions from RSUs while minimizing taxes and maintaining wealth.',

    metaTitle: 'RSU Concentrated Position: Diversification Strategies | 2026',
    metaDescription: 'How to manage a concentrated RSU position. Learn diversification strategies, 10b5-1 plans, tax-efficient selling, and the 10-15% rule for company stock exposure.',
    keywords: ['rsu concentrated position', 'concentrated stock position', 'too much company stock'],

    targetKeyword: 'rsu concentrated position',

    category: 'life-events',
    threatLevel: 'warning',

    takeaways: [
      'Rule of thumb: No more than 10-15% of portfolio in single stock.',
      'Many tech workers have 50%+ of net worth in employer stock - dangerously concentrated.',
      '10b5-1 plans allow pre-scheduled selling to avoid insider trading concerns.',
      'Tax-efficient selling strategies can significantly reduce diversification costs.',
      'Gold IRA provides uncorrelated diversification away from equity risk.',
    ],

    tocItems: [
      { id: 'concentration-risks', label: 'Risks of Concentration' },
      { id: 'diversification-strategies', label: 'Diversification Strategies' },
      { id: '10b5-1-plans', label: '10b5-1 Plans' },
      { id: 'tax-efficient', label: 'Tax-Efficient Selling' },
      { id: 'rule-of-thumb', label: 'The 10-15% Rule' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'concentration-risks',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Risks of Concentrated Stock Positions',
        content: 'Holding too much company stock creates multiple layers of risk:',
        bullets: [
          '**Single company risk:** Company failure wipes out both job AND savings',
          '**Industry risk:** Tech crashes affect income, stock, and 401k simultaneously',
          '**Opportunity cost:** Concentrated positions underperform diversified portfolios long-term',
          '**Volatility drag:** Single stocks are 3-5x more volatile than diversified portfolios',
          '**Emotional decisions:** Hard to sell stock in company you work for',
          '**Career correlation:** Your human capital is already "invested" in employer',
        ],
        callout: {
          type: 'warning',
          title: 'The Enron/WorldCom Warning',
          content: 'Employees at Enron and WorldCom lost both their jobs AND retirement savings when those companies collapsed. The same risk exists for any concentrated position, regardless of how "safe" the company seems.',
        },
        table: {
          headers: ['Company', 'Peak', 'Trough', 'Decline'],
          rows: [
            ['Meta (2021-2022)', '$384', '$88', '-77%'],
            ['Netflix (2021-2022)', '$700', '$166', '-76%'],
            ['Peloton (2021-2022)', '$171', '$8', '-95%'],
            ['Intel (2020-2024)', '$68', '$20', '-71%'],
          ],
          caption: 'Even blue-chip tech stocks can collapse quickly',
        },
      },
      {
        id: 'diversification-strategies',
        icon: 'Layers',
        iconColor: 'blue',
        title: 'Diversification Strategies',
        content: 'Multiple approaches to reducing concentrated positions:',
        bullets: [
          '**Systematic selling:** Sell fixed percentage of RSUs as they vest',
          '**Time-based selling:** Sell fixed dollar amount monthly/quarterly',
          '**Price-target selling:** Sell portions at predetermined price points',
          '**Rebalancing triggers:** Sell when position exceeds threshold (e.g., 20%)',
          '**Hedging:** Options strategies to protect without selling',
          '**Exchange funds:** Pool shares with other concentrated holders (accredited only)',
        ],
        table: {
          headers: ['Strategy', 'Best For', 'Tax Efficiency', 'Complexity'],
          rows: [
            ['Sell at vest', 'New RSU grants', 'High (no gain)', 'Low'],
            ['Systematic selling', 'Large existing positions', 'Moderate', 'Low'],
            ['10b5-1 plan', 'Executives/insiders', 'Moderate', 'High'],
            ['Charitable giving', 'Highly appreciated shares', 'Very High', 'Moderate'],
            ['Exchange funds', 'Very large positions', 'High', 'Very High'],
          ],
        },
      },
      {
        id: '10b5-1-plans',
        icon: 'FileText',
        iconColor: 'green',
        title: 'Understanding 10b5-1 Plans',
        content: '10b5-1 plans allow pre-scheduled selling to avoid insider trading concerns:',
        bullets: [
          '**What it is:** Written plan specifying future sales while not aware of material nonpublic information',
          '**Cooling off period:** Must wait 90 days (officers) or 30 days (others) before first trade',
          '**Good faith requirement:** Cannot adopt plan while possessing inside information',
          '**Modification rules:** Changes require new cooling off period',
          '**Single trade plans:** Only one single-trade plan per 12 months',
          '**Company approval:** Most employers require legal review before adoption',
        ],
        callout: {
          type: 'tip',
          title: 'When to Use 10b5-1',
          content: 'If you have material nonpublic information regularly (executives, engineers on key projects), a 10b5-1 plan lets you diversify on a schedule without worrying about trading windows or insider trading rules.',
        },
      },
      {
        id: 'tax-efficient',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'Tax-Efficient Selling Strategies',
        content: 'Minimize taxes while diversifying:',
        bullets: [
          '**Long-term gains:** Hold shares 1+ year for lower capital gains rates',
          '**Tax-loss harvesting:** Offset gains with losses elsewhere in portfolio',
          '**Charitable giving:** Donate appreciated shares to avoid capital gains entirely',
          '**Qualified small business stock:** Some startups qualify for exclusion',
          '**Installment sales:** Spread gains over multiple years',
          '**Opportunity zones:** Defer and potentially reduce gains with OZ investments',
        ],
        table: {
          headers: ['Income Level', 'Short-term Rate', 'Long-term Rate', 'Savings'],
          rows: [
            ['$0-$44,625', 'Ordinary (10-22%)', '0%', 'Up to 22%'],
            ['$44,626-$492,300', 'Ordinary (22-35%)', '15%', 'Up to 20%'],
            ['$492,301+', 'Ordinary (37%)', '20% + 3.8% NIIT', 'Up to 13.2%'],
          ],
          caption: '2024 single filer long-term capital gains rates',
        },
      },
      {
        id: 'rule-of-thumb',
        icon: 'Target',
        iconColor: 'purple',
        title: 'The 10-15% Rule',
        content: 'Financial advisors recommend limiting single-stock exposure:',
        bullets: [
          '**Maximum 10-15%:** No single stock should exceed this percentage of portfolio',
          '**Including employer:** This applies especially to employer stock',
          '**Total concentration:** Consider all correlated assets (same industry, etc.)',
          '**Gradual reduction:** Don\'t need to hit target immediately',
          '**Rebalance regularly:** Check quarterly, rebalance when necessary',
        ],
        callout: {
          type: 'example',
          title: 'Diversification Timeline Example',
          content: 'Current: 60% in employer stock ($600k of $1M portfolio). Target: 15% ($150k). Plan: Sell $30k/quarter for 4 years while reinvesting in diversified portfolio. Result: Gradual reduction with tax-loss harvesting opportunities.',
        },
      },
    ],

    warningBox: {
      title: 'Your Job + Your Savings = Double Risk',
      content: 'When you hold significant employer stock, a company downturn hits you twice: potential job loss AND portfolio collapse. This is exactly what happened to employees at Enron, Lehman Brothers, and recently at companies like Meta, Peloton, and Snap. Diversify while you can.',
      type: 'red',
    },

    goldBridge: {
      title: 'Diversify RSU Wealth Into Physical Gold',
      content: 'Tech stocks are volatile. Gold provides true diversification that other stocks and bonds cannot.',
      bullets: [
        'Gold is completely uncorrelated to tech sector performance',
        'Physical gold protects against tech crash scenarios',
        'Roll 401k or IRA to Gold IRA for tax-advantaged diversification',
        'Gold often rises when stock markets fall',
        'No counterparty risk - you own the physical metal',
        'Protect your accumulated RSU wealth from concentration risk',
      ],
    },

    faqs: [
      {
        question: 'How much company stock is too much?',
        answer: 'Financial advisors recommend no more than 10-15% of your portfolio in any single stock, including employer stock. Many tech workers have 50%+ concentration - far too high. Your income already depends on your employer; your retirement savings shouldn\'t be equally at risk.',
      },
      {
        question: 'Should I sell RSUs immediately when they vest?',
        answer: 'For most people, yes. When RSUs vest, you\'ve already been "paid" in company stock. Selling immediately and diversifying is the prudent choice. Holding is a deliberate bet that your company will outperform the market - a bet most employees shouldn\'t make given their existing job-related exposure.',
      },
      {
        question: 'What is a 10b5-1 plan and do I need one?',
        answer: 'A 10b5-1 plan is a pre-scheduled selling plan that provides legal protection against insider trading accusations. You need one if you regularly have material nonpublic information (executives, senior engineers, etc.) or want to sell during trading blackout periods. Regular employees can usually sell during open windows without one.',
      },
      {
        question: 'How do I diversify a concentrated position tax-efficiently?',
        answer: 'Several strategies: (1) Hold shares over 1 year for long-term capital gains rates, (2) Use tax-loss harvesting to offset gains, (3) Donate appreciated shares to charity, (4) Spread sales across multiple tax years, (5) Consider rolling portion to Gold IRA for diversification. Consult a tax professional for your specific situation.',
      },
    ],

    relatedArticles: ['stock-compensation-retirement-planning', 'google-retirement-benefits', 'tech-layoff-retirement-planning'],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'stock-compensation-retirement-planning': {
    slug: 'stock-compensation-retirement-planning',
    title: 'Stock Compensation & Retirement Planning: RSU, ISO & NSO Guide',
    subtitle: 'Complete guide to integrating equity compensation into your retirement strategy - tax treatment, exercise strategies, and diversification timing.',

    metaTitle: 'Stock Compensation Retirement Planning: RSU ISO NSO Guide | 2026',
    metaDescription: 'Master stock compensation retirement planning. Learn RSU vs ISO vs NSO tax treatment, exercise strategies, retirement account coordination, and when to diversify equity.',
    keywords: ['stock compensation retirement planning', 'equity compensation retirement', 'rsu iso retirement'],

    targetKeyword: 'stock compensation retirement planning',

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'RSUs are taxed as ordinary income at vesting - simplest tax treatment.',
      'ISOs have potential for favorable tax treatment but complex AMT implications.',
      'NSOs are taxed as ordinary income at exercise - more flexible than ISOs.',
      'Coordinate equity compensation with 401k to maximize total retirement savings.',
      'Diversification timing matters - don\'t let tax tail wag the investment dog.',
    ],

    tocItems: [
      { id: 'rsu-iso-nso', label: 'RSU vs ISO vs NSO' },
      { id: 'exercise-strategies', label: 'Exercise Strategies' },
      { id: 'retirement-coordination', label: 'Retirement Account Coordination' },
      { id: 'diversification-timing', label: 'Diversification Timing' },
      { id: 'common-mistakes', label: 'Common Mistakes' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'rsu-iso-nso',
        icon: 'FileText',
        iconColor: 'blue',
        title: 'RSU vs ISO vs NSO Tax Treatment',
        content: 'Understanding the tax differences is critical for retirement planning:',
        table: {
          headers: ['Type', 'At Grant', 'At Vest/Exercise', 'At Sale'],
          rows: [
            ['RSU', 'No tax', 'Ordinary income on FMV', 'Capital gains on appreciation'],
            ['ISO', 'No tax', 'No regular tax (AMT possible)', 'Capital gains if qualified'],
            ['NSO', 'No tax', 'Ordinary income on spread', 'Capital gains on appreciation'],
          ],
        },
        bullets: [
          '**RSUs:** Simplest - taxed as W-2 income when shares vest, company withholds',
          '**ISOs:** Complex - no tax at exercise but AMT may apply, favorable if held 2 years from grant + 1 year from exercise',
          '**NSOs:** Straightforward - ordinary income on spread at exercise, then capital gains',
          '**Withholding:** RSUs auto-withhold; options require planning for tax bill',
        ],
        callout: {
          type: 'info',
          title: 'ISO Qualifying Disposition',
          content: 'For ISOs, you must hold shares 2+ years from grant AND 1+ year from exercise for favorable long-term capital gains treatment on entire gain. Selling earlier (disqualifying disposition) converts spread to ordinary income.',
        },
      },
      {
        id: 'exercise-strategies',
        icon: 'TrendingUp',
        iconColor: 'green',
        title: 'Stock Option Exercise Strategies',
        content: 'When and how to exercise options affects your tax bill and retirement:',
        bullets: [
          '**Exercise and sell (same-day sale):** Immediate cash, ordinary income tax',
          '**Exercise and hold:** Pay for shares, potential for better tax treatment (ISO)',
          '**Net exercise:** Pay exercise price with some shares, keep remainder',
          '**Early exercise (83(b)):** For very early employees, can lock in low basis',
          '**Staged exercise:** Exercise portions over multiple years to manage taxes',
        ],
        table: {
          headers: ['Strategy', 'Cash Needed', 'Tax Timing', 'Best For'],
          rows: [
            ['Same-day sale', 'None', 'Immediate', 'Diversification, liquidity needs'],
            ['Exercise and hold', 'Exercise price + taxes', 'Deferred', 'ISO qualifying disposition'],
            ['Net exercise', 'Minimal', 'Immediate', 'Limited cash availability'],
            ['Staged exercise', 'Varies', 'Spread out', 'Managing AMT, tax brackets'],
          ],
        },
      },
      {
        id: 'retirement-coordination',
        icon: 'PiggyBank',
        iconColor: 'amber',
        title: 'Coordinating Equity with Retirement Accounts',
        content: 'Maximize total compensation by coordinating equity with 401k:',
        bullets: [
          '**Max 401k first:** Tax-advantaged space is limited and valuable',
          '**After-tax contributions:** If available, use mega backdoor Roth',
          '**RSU proceeds:** Use for Roth IRA contributions or taxable investing',
          '**ISO exercise cash:** Don\'t raid retirement to fund option exercises',
          '**Tax bracket management:** Coordinate vesting/exercise with 401k deductions',
          '**HSA funding:** Another tax-advantaged account to consider before taxable',
        ],
        callout: {
          type: 'tip',
          title: 'Priority Order for Savings',
          content: '1) 401k up to match, 2) Max HSA, 3) Max 401k, 4) Mega backdoor Roth if available, 5) Roth IRA if eligible, 6) Taxable investing. Use equity proceeds for lower-priority accounts.',
        },
      },
      {
        id: 'diversification-timing',
        icon: 'Clock',
        iconColor: 'purple',
        title: 'When to Diversify Equity Compensation',
        content: 'Timing your diversification balances tax efficiency with risk management:',
        bullets: [
          '**RSUs:** Consider selling at vest to avoid concentration (simplest)',
          '**ISOs:** Hold for qualifying disposition if possible, but don\'t over-concentrate',
          '**NSOs:** Exercise window typically 90 days after leaving - plan ahead',
          '**Pre-IPO equity:** Diversify when lockup expires, regardless of "potential"',
          '**Tax vs risk:** Don\'t let tax savings justify dangerous concentration',
        ],
        callout: {
          type: 'warning',
          title: 'The Tax Trap',
          content: 'Many employees hold concentrated positions to avoid taxes. But a 20% tax on selling is better than a 50% loss from holding. The tax tail shouldn\'t wag the investment dog.',
        },
      },
      {
        id: 'common-mistakes',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Common Equity Compensation Mistakes',
        content: 'Avoid these costly errors:',
        bullets: [
          '**Underwater options expiring:** Don\'t let ISOs expire worthless - they may recover',
          '**AMT surprise:** Exercise ISOs without calculating AMT impact first',
          '**Missing 83(b) deadline:** Only 30 days to file early exercise election',
          '**Excessive concentration:** Treating company stock as "special" vs other investments',
          '**NSO expiration:** 90-day exercise window after termination catches many',
          '**Forgetting about taxes:** RSU vest and owe taxes even if you don\'t sell',
        ],
      },
    ],

    warningBox: {
      title: '90-Day Exercise Window for Options',
      content: 'When you leave a company (voluntarily or not), you typically have only 90 days to exercise vested stock options. After that, they expire worthless. If you have significant in-the-money options and are considering leaving, factor this into your decision and plan for the cash/tax implications.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Protect Equity Compensation Wealth',
      content: 'Stock compensation builds wealth quickly but creates dangerous concentration. Diversify a portion into physical gold.',
      bullets: [
        'Gold provides true diversification from equity market risk',
        'RSU/ISO/NSO wealth can be partially protected with Gold IRA',
        'Roll diversified 401k portion to Gold IRA tax-free',
        'Physical gold holds value when tech stocks crash',
        'Market crashes hit tech compensation hard - gold is counterweight',
        'No correlation to the stock that made you wealthy',
      ],
    },

    faqs: [
      {
        question: 'Should I exercise ISOs or let them vest as RSUs?',
        answer: 'If you have ISOs, the tax treatment is potentially more favorable than RSUs if you hold for a qualifying disposition (2 years from grant + 1 year from exercise). However, this requires cash to exercise and creates concentration risk. Many employees prefer RSU simplicity. Consult a tax advisor for your specific situation.',
      },
      {
        question: 'How do I coordinate stock compensation with my 401k?',
        answer: 'Always max your 401k first - the tax-advantaged space is valuable. Use proceeds from RSU sales or option exercises to fund taxable investing goals. Don\'t reduce 401k contributions to hold more company stock - that\'s trading tax-advantaged diversification for concentrated risk.',
      },
      {
        question: 'What happens to my stock options when I leave my job?',
        answer: 'For most employees, vested options must be exercised within 90 days of termination or they expire worthless. ISOs convert to NSOs if exercised more than 90 days after termination. Plan ahead - you\'ll need cash for exercise price and taxes. Unvested options are typically forfeited.',
      },
      {
        question: 'When should I diversify out of company stock?',
        answer: 'The prudent approach is to diversify continuously - sell RSUs at vest, exercise and sell options regularly. Financial advisors recommend no more than 10-15% of portfolio in any single stock. Don\'t let tax considerations justify holding a dangerously concentrated position.',
      },
    ],

    relatedArticles: ['rsu-concentrated-position', 'google-retirement-benefits', 'tech-layoff-retirement-planning'],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator'],
  },
};
