// src/data/learn-articles/misc-cluster.ts
// P1-016: Miscellaneous 401k topics cluster
// Various keywords that don't fit neatly into other categories

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const miscArticles: LearnArticleRegistry = {
  'is-401k-fdic-insured': {
    slug: 'is-401k-fdic-insured',
    title: 'Is My 401k FDIC Insured? Understanding Retirement Account Protection',
    subtitle: 'Your savings account is FDIC insured, but what about your 401k? The answer may surprise you.',
    metaTitle: 'Is 401k FDIC Insured? What Really Protects Your Retirement (2025)',
    metaDescription: 'Learn why 401k accounts are NOT FDIC insured, what actually protects your retirement savings, and how SIPC coverage works for brokerage accounts.',
    keywords: [
      'is 401k fdic insured',
      '401k insurance',
      '401k protection',
      'is retirement fdic insured',
      '401k sipc'
    ],
    targetKeyword: 'is my 401k fdic insured',
    volume: 45,
    difficulty: 18,
    category: 'safety',
    threatLevel: 'info',
    takeaways: [
      'No, 401k accounts are NOT FDIC insured—FDIC only covers bank deposits',
      'SIPC protects against brokerage failure (not investment losses) up to $500,000',
      'Your investments can lose value—that\'s market risk, not insurance territory',
      'ERISA provides strong protection against employer/plan mismanagement',
      'The biggest risk isn\'t bank failure—it\'s market volatility',
      'Consider gold for diversification and protection outside paper assets'
    ],
    tocItems: [
      { id: 'fdic-explained', label: 'What FDIC Actually Covers' },
      { id: 'sipc-explained', label: 'What SIPC Covers' },
      { id: 'what-protects-401k', label: 'What Really Protects Your 401k' },
      { id: 'real-risks', label: 'The Real Risks to Understand' },
      { id: 'gold-ira-bridge', label: 'Additional Protection' }
    ],
    sections: [
      {
        id: 'fdic-explained',
        icon: 'Landmark',
        iconColor: 'blue',
        title: 'What FDIC Insurance Actually Covers',
        content: 'FDIC (Federal Deposit Insurance Corporation) protects bank deposits, not investments:',
        bullets: [
          'Covers: Checking, savings, CDs, money market deposit accounts at banks',
          'Coverage limit: $250,000 per depositor, per bank, per ownership category',
          'Does NOT cover: Stocks, bonds, mutual funds, 401k investments',
          'Does NOT cover: Investment losses, even in a bank\'s investment products',
          'Created in 1933 after bank failures—protects against bank insolvency',
          'If your bank fails, FDIC guarantees you get your deposits back'
        ]
      },
      {
        id: 'sipc-explained',
        icon: 'Shield',
        iconColor: 'green',
        title: 'What SIPC Covers (And Doesn\'t)',
        content: 'SIPC (Securities Investor Protection Corporation) protects against brokerage failure:',
        bullets: [
          'Covers: Securities and cash held at a failed brokerage firm',
          'Limit: $500,000 total, including up to $250,000 in cash',
          'Does NOT cover: Investment losses from market decline',
          'Does NOT cover: Bad investment advice or unsuitable recommendations',
          'Scenario: If Fidelity went bankrupt, SIPC helps recover your assets',
          'NOT a scenario: Market drops 30%, SIPC does nothing—that\'s market risk'
        ],
        table: {
          headers: ['Protection Type', 'What It Covers', 'What It Doesn\'t Cover'],
          rows: [
            ['FDIC', 'Bank deposits up to $250k', 'Investments, market losses'],
            ['SIPC', 'Brokerage failure up to $500k', 'Market losses, bad advice'],
            ['ERISA', 'Fiduciary duty, anti-fraud', 'Market performance'],
            ['None', 'Market risk', 'Market risk (it\'s yours to bear)']
          ]
        }
      },
      {
        id: 'what-protects-401k',
        icon: 'ShieldCheck',
        iconColor: 'green',
        title: 'What Actually Protects Your 401k',
        content: 'Your 401k has multiple layers of protection—just not FDIC:',
        bullets: [
          'ERISA (Employee Retirement Income Security Act): Fiduciary standards',
          'SEC regulation: Investment companies must follow securities laws',
          'Plan audits: Large plans (100+ participants) require annual audits',
          'Diversification requirements: Plans must offer diversified options',
          'Custodial protection: Your assets are held separately from plan provider',
          'DOL oversight: Department of Labor enforces retirement plan rules'
        ]
      },
      {
        id: 'real-risks',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'The Real Risks to Your 401k',
        content: 'No insurance protects against these actual risks:',
        bullets: [
          'Market decline: Stocks and bonds lose value—this is uninsured',
          'Poor fund selection: High fees, bad performance—your problem',
          'Inflation: Purchasing power erosion—insurance can\'t fix this',
          'Concentration risk: Too much in one stock or sector',
          'Sequence of returns: Bad timing of withdrawals near retirement',
          'Longevity risk: Outliving your savings'
        ]
      }
    ],
    warningBox: {
      title: 'The Uncomfortable Truth',
      content: 'There is no insurance against your 401k losing value in a market crash. In 2008, average 401k balances dropped 30%+. In 2022, many dropped 20%+. This is investment risk—the price of potential growth. The only protection is diversification and proper asset allocation.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Protection Beyond Insurance: Gold',
      content: 'Since no insurance protects against market losses, diversification is your best defense. A Gold IRA provides:',
      bullets: [
        'Physical gold that holds value during market crashes',
        'Negative correlation with stocks—often rises when market falls',
        'Tangible asset you truly own, not a claim on someone else\'s promise',
        'Inflation hedge that paper assets can\'t provide',
        'True diversification beyond stocks and bonds'
      ]
    },
    faqs: [
      {
        question: 'What happens to my 401k if my employer goes bankrupt?',
        answer: 'Your 401k is separate from your employer\'s assets. The money is held by a custodian and protected by ERISA. Employer bankruptcy doesn\'t touch your account balance. However, outstanding employer matches may not be deposited.'
      },
      {
        question: 'What if my 401k provider (like Fidelity) fails?',
        answer: 'SIPC would help recover your securities. Additionally, major custodians carry private insurance above SIPC limits. But in practice, if Fidelity fails, there are bigger problems in the financial system.'
      },
      {
        question: 'Is there any insurance for investment losses?',
        answer: 'No. Investment losses are a normal part of investing and are not insured by any government program. Options and hedging strategies can provide protection, but at a cost to potential returns.'
      }
    ],
    relatedArticles: [
      'what-happens-to-401k-if-bank-fails',
      'is-fidelity-too-big-to-fail',
      'sipc-vs-fdic-retirement-accounts'
    ],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/401k-risk-analyzer']
  },

  'why-401k-losing-money': {
    slug: 'why-401k-losing-money',
    title: 'Why Is My 401k Losing Money Every Month?',
    subtitle: 'Watching your retirement shrink is painful. Here\'s why it\'s happening and what you can actually do about it.',
    metaTitle: 'Why Is My 401k Losing Money? Causes & Solutions (2025)',
    metaDescription: 'Discover why your 401k is losing money, whether it\'s normal market volatility or something worse, and what actions you should take right now.',
    keywords: [
      'why is my 401k losing money',
      '401k losing money',
      '401k losing value',
      '401k decreasing',
      '401k going down every day'
    ],
    targetKeyword: 'why 401k losing money',
    volume: 50,
    difficulty: 15,
    category: 'market-fear',
    threatLevel: 'warning',
    takeaways: [
      'Market downturns are the most common reason—they\'re normal and temporary',
      'High fees can cause your balance to stagnate even in good markets',
      'Being in wrong investment (too aggressive or too conservative) matters',
      'Loan repayments reduce new contributions going to investments',
      'Checking daily amplifies anxiety but doesn\'t help your balance',
      'Time in market beats timing the market—history proves this'
    ],
    tocItems: [
      { id: 'common-causes', label: 'Common Causes' },
      { id: 'market-volatility', label: 'Market Volatility' },
      { id: 'fee-drag', label: 'Fee Drag' },
      { id: 'wrong-allocation', label: 'Wrong Allocation' },
      { id: 'what-to-do', label: 'What to Do' },
      { id: 'gold-ira-bridge', label: 'Reduce Volatility' }
    ],
    sections: [
      {
        id: 'common-causes',
        icon: 'Search',
        iconColor: 'blue',
        title: 'Why Your 401k Is Losing Money: Common Causes',
        content: 'Several factors could be causing your balance to decline:',
        bullets: [
          'Market decline: The most common reason—stocks go down sometimes',
          'High fees: 1-2% fees can eat significant portion of gains',
          'Wrong investments: Too aggressive, too conservative, or poorly chosen',
          'Loan repayments: Paying back a 401k loan reduces growth',
          'Economic conditions: Inflation, interest rates, recession concerns',
          'Single stock concentration: Company stock crash affects whole balance'
        ]
      },
      {
        id: 'market-volatility',
        icon: 'TrendingDown',
        iconColor: 'red',
        title: 'Market Volatility: The Usual Suspect',
        content: 'Most 401k losses are simply due to normal market fluctuations:',
        bullets: [
          'Average intra-year drop: S&P 500 falls 14% at some point most years',
          '10% corrections: Happen roughly every 1-2 years',
          '20%+ bear markets: Happen roughly every 4-5 years',
          '2022: S&P 500 dropped 18%; bonds dropped 13%',
          '2020: COVID crash dropped market 34% in weeks',
          'Recovery: Market has recovered from every decline in history'
        ],
        table: {
          headers: ['Year', 'Drop', 'Recovery Time'],
          rows: [
            ['2022', '-18%', '~1 year'],
            ['2020', '-34%', '6 months'],
            ['2018', '-20%', '4 months'],
            ['2008-09', '-56%', '4 years'],
            ['Average bear', '-30%', '~2 years']
          ]
        }
      },
      {
        id: 'fee-drag',
        icon: 'Percent',
        iconColor: 'amber',
        title: 'Fee Drag: The Silent Killer',
        content: 'High fees can make your 401k lose ground even when markets are flat:',
        bullets: [
          'If market returns 5% and fees are 2%, your net return is only 3%',
          'In flat years, fees cause you to actually lose money',
          'Compounded over decades, fee drag is devastating',
          'Check your expense ratios—anything over 0.5% is high',
          'Target date funds often have highest fees in the plan',
          'Solution: Switch to lowest-cost index funds available'
        ]
      },
      {
        id: 'wrong-allocation',
        icon: 'PieChart',
        iconColor: 'purple',
        title: 'Wrong Asset Allocation',
        content: 'Being in the wrong investments magnifies losses:',
        bullets: [
          'Too aggressive: 90% stocks at 60 years old = big drops hurt more',
          'Too conservative: 30% stocks at 30 years old = missing growth',
          'Concentrated in company stock: Single stock risk',
          'All in bonds during rising rates: Bonds can lose too',
          'Target date fund wrong year: Allocation doesn\'t match needs',
          'Review: Is your allocation appropriate for your age and timeline?'
        ]
      },
      {
        id: 'what-to-do',
        icon: 'CheckCircle',
        iconColor: 'green',
        title: 'What to Do When Your 401k Is Losing',
        content: 'The right response depends on the cause:',
        bullets: [
          'If market decline: Stay the course, keep contributing (buy low)',
          'If high fees: Switch to lower-cost options within your plan',
          'If wrong allocation: Rebalance to appropriate mix for your age',
          'If loan repayments: Prioritize paying off to restore growth',
          'DON\'T: Panic sell—locks in losses permanently',
          'DON\'T: Stop contributing—you\'re buying shares at a discount'
        ]
      }
    ],
    warningBox: {
      title: 'The Biggest Mistake',
      content: 'The worst thing you can do when your 401k is losing money is panic sell. This locks in your losses and means you miss the recovery. Historically, staying invested has always been the winning strategy—even through the worst crashes.',
      type: 'red'
    },
    goldBridge: {
      title: 'Reduce Volatility with Gold',
      content: 'If market volatility is causing you stress, consider adding gold to your retirement allocation:',
      bullets: [
        'Gold often rises when stocks fall—provides balance',
        'Physical gold is a tangible asset, not a paper promise',
        'Historical store of value during economic uncertainty',
        'Reduces overall portfolio volatility',
        'Rollover portion of 401k to Gold IRA for diversification'
      ]
    },
    faqs: [
      {
        question: 'Should I check my 401k every day?',
        answer: 'No. Checking daily increases anxiety without any benefit. The market will do what it does regardless of how often you look. Once per quarter is plenty for most people.'
      },
      {
        question: 'Should I stop contributing when the market is down?',
        answer: 'Absolutely not! This is the worst time to stop. You\'re buying shares at lower prices. If you get an employer match, stopping means giving up free money.'
      },
      {
        question: 'How long will it take to recover?',
        answer: 'Historically, recoveries range from months to years depending on severity. But every single decline has been followed by recovery. If you continue contributing, your personal recovery will be faster.'
      }
    ],
    relatedArticles: [
      '401k-lost-20-percent-what-do-i-do',
      'why-did-my-401k-drop-so-much',
      'why-is-my-401k-not-growing'
    ],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/401k-risk-analyzer', '/tools/crash-simulator']
  },

  'what-is-a-mega-backdoor-roth': {
    slug: 'what-is-a-mega-backdoor-roth',
    title: 'What Is a Mega Backdoor Roth? The Ultimate High-Earner Strategy',
    subtitle: 'Save up to $46,000 extra per year in a Roth account—even if you earn too much for regular Roth IRA contributions.',
    metaTitle: 'Mega Backdoor Roth Explained: Save $46k+ Tax-Free (2025)',
    metaDescription: 'Learn what a mega backdoor Roth is, how it works, contribution limits, and whether your 401k plan allows this powerful tax-saving strategy.',
    keywords: [
      'mega backdoor roth',
      'mega backdoor roth 401k',
      'after tax 401k conversion',
      'mega backdoor roth how it works',
      'mega backdoor roth limit'
    ],
    targetKeyword: 'what is a mega backdoor roth',
    volume: 40,
    difficulty: 35,
    category: 'roth',
    threatLevel: 'info',
    takeaways: [
      'Mega backdoor Roth lets you contribute up to $69,000 total to 401k (2025)',
      'Only ~30% of 401k plans allow the after-tax contributions required',
      'You make after-tax contributions, then convert to Roth',
      'Result: Massive Roth savings beyond normal limits',
      'Must have in-plan Roth conversions or in-service distributions',
      'Powerful for high earners who max out regular retirement contributions'
    ],
    tocItems: [
      { id: 'what-is-it', label: 'What Is It?' },
      { id: 'how-it-works', label: 'How It Works' },
      { id: 'limits', label: 'Contribution Limits' },
      { id: 'requirements', label: 'Does Your Plan Allow It?' },
      { id: 'steps', label: 'Step-by-Step Process' },
      { id: 'gold-ira-bridge', label: 'Alternative Diversification' }
    ],
    sections: [
      {
        id: 'what-is-it',
        icon: 'Rocket',
        iconColor: 'purple',
        title: 'What Is a Mega Backdoor Roth?',
        content: 'The mega backdoor Roth is a strategy that lets you put significantly more money into Roth accounts:',
        bullets: [
          'Regular Roth IRA limit: $7,000 (plus $1,000 catch-up if 50+)',
          'Mega backdoor potential: Up to $46,000 additional',
          'How: After-tax 401k contributions converted to Roth',
          'Who it\'s for: High earners who max out regular contributions',
          'Why "mega": It\'s much larger than regular backdoor Roth ($7k)',
          'Tax benefit: Decades of tax-free growth on $46k+ per year'
        ]
      },
      {
        id: 'how-it-works',
        icon: 'Workflow',
        iconColor: 'blue',
        title: 'How It Works',
        content: 'The mega backdoor Roth exploits a gap in 401k contribution rules:',
        bullets: [
          '1. Employee contribution limit: $23,500 (pre-tax or Roth)',
          '2. Total 401k limit: $69,000 (employee + employer)',
          '3. The gap: If your employer contributes $10k, you can add $35.5k after-tax',
          '4. After-tax contributions are not pre-tax and not Roth—a third bucket',
          '5. You then convert these after-tax dollars to Roth',
          '6. Result: Up to $46,000 extra going to Roth annually'
        ],
        table: {
          headers: ['Contribution Type', '2025 Limit', 'Tax Treatment'],
          rows: [
            ['Pre-tax/Roth employee', '$23,500', 'Pre-tax or Roth'],
            ['Employer match', 'Varies (counts toward $69k)', 'Pre-tax'],
            ['After-tax employee', 'Remainder up to $69k', 'After-tax → convert to Roth'],
            ['Total combined limit', '$69,000', 'Mixed']
          ]
        }
      },
      {
        id: 'limits',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'Calculating Your Mega Backdoor Capacity',
        content: 'Your mega backdoor limit depends on employer contributions:',
        table: {
          headers: ['Your Salary', 'Employer Match (6%)', 'Max After-Tax', 'Mega Backdoor Potential'],
          rows: [
            ['$100,000', '$6,000', '$39,500', '$39,500'],
            ['$150,000', '$9,000', '$36,500', '$36,500'],
            ['$200,000', '$12,000', '$33,500', '$33,500'],
            ['$300,000+', '$20,700 (max)', '$25,300', '$25,300']
          ]
        },
        bullets: [
          'Formula: $69,000 - Your contributions - Employer contributions = After-tax room',
          'If you max employee contributions ($23,500) and employer matches $10,000',
          'Your mega backdoor room: $69,000 - $23,500 - $10,000 = $35,500',
          'Catch-up (50+): Adds $7,500 to employee limit, making total $76,500'
        ]
      },
      {
        id: 'requirements',
        icon: 'ClipboardCheck',
        iconColor: 'green',
        title: 'Does Your 401k Plan Allow It?',
        content: 'Not all plans support mega backdoor Roth. You need:',
        bullets: [
          'After-tax contributions allowed (only ~30% of plans)',
          'In-plan Roth conversions OR in-service distributions',
          'No limits on after-tax contribution amounts',
          'Ask HR: "Does our plan allow after-tax 401k contributions?"',
          'Ask HR: "Can we do in-plan Roth conversions?"',
          'Check Summary Plan Description (SPD) for details'
        ]
      },
      {
        id: 'steps',
        icon: 'ListChecks',
        iconColor: 'blue',
        title: 'Step-by-Step: How to Execute',
        content: 'If your plan allows it, here\'s the process:',
        bullets: [
          '1. Max out pre-tax or Roth contributions first ($23,500)',
          '2. Set up after-tax contributions up to the $69k limit',
          '3. Immediately convert after-tax dollars to Roth (in-plan or roll out)',
          '4. The conversion should happen quickly to minimize taxable gains',
          '5. Document everything for tax purposes',
          '6. Repeat each pay period for dollar-cost averaging'
        ]
      }
    ],
    warningBox: {
      title: 'Pro-Rata Rule Warning',
      content: 'If you have pre-tax after-tax dollars mixed and don\'t convert immediately, the pro-rata rule may apply, creating a taxable event. Convert after-tax contributions to Roth as quickly as possible—ideally each pay period.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Diversify Your Tax-Advantaged Savings',
      content: 'While mega backdoor Roth maximizes tax-free stock market exposure, consider diversifying into other assets too:',
      bullets: [
        'Gold IRA provides different kind of diversification',
        'Not correlated with stocks—true hedge',
        'Physical gold holds value during market crashes',
        'Can be Traditional or Roth Gold IRA',
        'Balance growth assets with stability assets'
      ]
    },
    faqs: [
      {
        question: 'Is mega backdoor Roth legal?',
        answer: 'Yes, completely legal. It\'s been confirmed by IRS guidance and used by sophisticated investors for years. However, legislation has been proposed to eliminate it—take advantage while you can.'
      },
      {
        question: 'What if my plan doesn\'t allow after-tax contributions?',
        answer: 'Then mega backdoor Roth isn\'t available to you through this employer. You can still do regular backdoor Roth IRA ($7k). Consider asking HR if they can add after-tax contributions to the plan.'
      },
      {
        question: 'Should I do mega backdoor Roth or regular investing?',
        answer: 'If you can afford it and your plan allows it, mega backdoor Roth first. The tax-free growth over decades is extremely valuable. Taxable brokerage is fine, but it doesn\'t offer the same tax benefits.'
      }
    ],
    relatedArticles: [
      'backdoor-roth-explained',
      'traditional-vs-roth-401k'
    ],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/roth-conversion-calculator']
  },

  'should-i-max-out-401k-or-pay-off-debt': {
    slug: 'should-i-max-out-401k-or-pay-off-debt',
    title: 'Should I Max Out My 401k or Pay Off Debt? The Math',
    subtitle: 'Two good financial goals compete for limited money. Here\'s how to decide which comes first.',
    metaTitle: 'Max Out 401k or Pay Off Debt? Smart Decision Framework (2025)',
    metaDescription: 'Should you max out 401k or pay off debt first? Learn the math behind this decision based on interest rates, employer match, and your specific situation.',
    keywords: [
      'max out 401k or pay off debt',
      '401k vs debt payoff',
      'should I contribute to 401k or pay debt',
      '401k or pay off credit card',
      'debt vs retirement savings'
    ],
    targetKeyword: 'should i max out 401k or pay off debt',
    volume: 35,
    difficulty: 20,
    category: 'loans',
    threatLevel: 'info',
    takeaways: [
      'Always get employer match first—it\'s a 50-100% instant return',
      'High-interest debt (15%+) usually beats additional 401k contributions',
      'Low-interest debt (under 7%) may lose to tax-advantaged investing',
      'The "emotional" weight of debt matters too—peace of mind has value',
      'Middle ground: Match + debt payoff + additional 401k',
      'Your tax bracket affects the math significantly'
    ],
    tocItems: [
      { id: 'the-framework', label: 'Decision Framework' },
      { id: 'employer-match', label: 'Employer Match Priority' },
      { id: 'high-interest-debt', label: 'High-Interest Debt' },
      { id: 'low-interest-debt', label: 'Low-Interest Debt' },
      { id: 'optimal-order', label: 'Optimal Order of Operations' },
      { id: 'gold-ira-bridge', label: 'Diversification After Debt' }
    ],
    sections: [
      {
        id: 'the-framework',
        icon: 'Scale',
        iconColor: 'blue',
        title: 'The Decision Framework',
        content: 'The right answer depends on your specific numbers:',
        table: {
          headers: ['Debt Interest Rate', 'Recommendation'],
          rows: [
            ['20%+ (credit cards)', 'Pay debt after 401k match'],
            ['15-20% (high CC, some loans)', 'Pay debt after 401k match'],
            ['10-15% (personal loans)', 'Split between debt and 401k'],
            ['7-10% (student loans)', 'Consider tax implications'],
            ['Under 7% (mortgage, federal student)', '401k may win mathematically']
          ]
        }
      },
      {
        id: 'employer-match',
        icon: 'Gift',
        iconColor: 'green',
        title: 'Rule #1: Always Get the Employer Match',
        content: 'This is non-negotiable, regardless of debt:',
        bullets: [
          'Employer match is free money—typically 50-100% instant return',
          'Even with 25% interest debt, 100% return beats it',
          'Example: 3% match on $50k salary = $1,500 free money',
          'Not getting match = guaranteed loss',
          'Contribute at least enough to get full match',
          'This comes BEFORE aggressive debt payoff'
        ]
      },
      {
        id: 'high-interest-debt',
        icon: 'CreditCard',
        iconColor: 'red',
        title: 'High-Interest Debt (15%+): Pay It Down',
        content: 'Credit card debt and similar high-interest loans should be prioritized:',
        bullets: [
          'Credit cards at 20%+ are guaranteed negative returns',
          'Even with 401k tax deduction, 20%+ debt wins mathematically',
          'The psychological burden of high-interest debt is real',
          'After getting 401k match, attack this debt aggressively',
          'Consider balance transfer to 0% APR while paying down',
          'Don\'t neglect 401k entirely—you need the match'
        ],
        table: {
          headers: ['Scenario', '401k Return*', 'Debt "Return"'],
          rows: [
            ['Max 401k, pay minimum on debt', '7% + 24% tax savings', '-20% on remaining debt'],
            ['Match only, extra to debt', '7% + 24% tax savings', '+20% saved on interest'],
            ['Net winner', 'Match only + debt payoff', '']
          ]
        }
      },
      {
        id: 'low-interest-debt',
        icon: 'Home',
        iconColor: 'amber',
        title: 'Low-Interest Debt (Under 7%): More Nuanced',
        content: 'Mortgage and federal student loans deserve different treatment:',
        bullets: [
          'Mortgage at 4-5%: 401k likely wins after tax benefits',
          'Federal student loans at 5-7%: Close call, consider IBR',
          'Auto loan at 4%: 401k probably wins',
          'Tax deduction on 401k effectively lowers the "hurdle rate"',
          'In 24% bracket: 7% pre-tax return = 5.3% after-tax equivalent',
          'Psychological factor: Some people need the peace of debt freedom'
        ]
      },
      {
        id: 'optimal-order',
        icon: 'ListOrdered',
        iconColor: 'green',
        title: 'The Optimal Order of Operations',
        content: 'For most people, this order makes sense:',
        bullets: [
          '1. Emergency fund (1 month expenses minimum)',
          '2. 401k up to employer match',
          '3. High-interest debt (15%+)',
          '4. Increase emergency fund (3-6 months)',
          '5. Max out Roth IRA ($7,000)',
          '6. Moderate debt (7-15%)',
          '7. Max out 401k ($23,500)',
          '8. Low-interest debt (under 7%)',
          '9. Taxable brokerage / Gold IRA'
        ]
      }
    ],
    warningBox: {
      title: 'Don\'t Sacrifice the Match',
      content: 'No matter how much debt you have, give up the employer match is almost never the right answer. A 50-100% instant return beats any debt interest rate. Get the match first, then attack debt with everything else.',
      type: 'blue'
    },
    goldBridge: {
      title: 'After Debt: Diversify Your Growth',
      content: 'Once high-interest debt is gone and you\'re maximizing tax-advantaged accounts, consider Gold IRA:',
      bullets: [
        'Gold provides diversification beyond stocks',
        'Protection against market crashes',
        'Hedge against inflation that erodes debt payoff gains',
        'Tangible asset for true portfolio balance',
        'Can roll over portion of 401k when leaving employer'
      ]
    },
    faqs: [
      {
        question: 'What if I have no employer match?',
        answer: 'Then the decision is simpler: pay off high-interest debt before maxing 401k. The 401k still has tax benefits, but without the match, a guaranteed 20% return (debt payoff) beats a potential 7% return.'
      },
      {
        question: 'Should I pause 401k to pay off my car loan at 5%?',
        answer: 'No, if you\'re getting a match. The match return far exceeds 5%. If no match, it\'s a close call—401k tax benefits might still win, especially in higher tax brackets.'
      },
      {
        question: 'What about using 401k loan to pay off debt?',
        answer: 'Generally not recommended. You\'re trading unsecured debt for debt tied to your retirement. If you leave your job, the loan comes due immediately. Pay debt with income, not retirement borrowing.'
      }
    ],
    relatedArticles: [
      '401k-loan-to-pay-off-debt',
      'taking-401k-loan-good-or-bad-idea'
    ],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator']
  }
};
