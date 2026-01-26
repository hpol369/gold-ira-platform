// src/data/learn-articles/roth-cluster.ts
// P1-011: Roth Conversion cluster
// Keywords: should I convert 401k to roth at 60, roth conversion tax bomb, etc.

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const rothArticles: LearnArticleRegistry = {
  'should-i-convert-401k-to-roth-at-60': {
    slug: 'should-i-convert-401k-to-roth-at-60',
    title: 'Should I Convert My 401k to Roth at 60? Complete Analysis',
    subtitle: 'The 5-7 years before retirement can be the perfect time for Roth conversion—or a costly mistake. Here\'s how to decide.',
    metaTitle: 'Should I Convert 401k to Roth at 60? Tax Strategy Guide (2025)',
    metaDescription: 'Is converting your 401k to Roth at 60 a smart move? Learn the tax implications, break-even analysis, and strategies for late-career Roth conversions.',
    keywords: [
      'convert 401k to roth at 60',
      'roth conversion at 60',
      '401k to roth conversion 60',
      'late roth conversion',
      'should I convert to roth before retirement'
    ],
    targetKeyword: 'should i convert 401k to roth at 60',
    volume: 35,
    difficulty: 28,
    category: 'roth',
    threatLevel: 'info',
    takeaways: [
      'Ages 60-70 can be ideal for Roth conversions due to lower income years',
      'Converting before RMDs start (age 73) preserves more tax-free growth',
      'You need 5+ years for conversions to break even vs staying traditional',
      'Convert in years when your income (and tax rate) is unusually low',
      'Large conversions can trigger Medicare IRMAA surcharges',
      'Partial conversions over multiple years often beat one large conversion',
      'Consider state taxes—some states don\'t tax retirement income'
    ],
    tocItems: [
      { id: 'why-60', label: 'Why Age 60 Can Be Ideal' },
      { id: 'the-math', label: 'The Conversion Math' },
      { id: 'strategies', label: 'Conversion Strategies' },
      { id: 'pitfalls', label: 'Pitfalls to Avoid' },
      { id: 'who-should', label: 'Who Should Convert' },
      { id: 'who-should-not', label: 'Who Should NOT Convert' },
      { id: 'gold-ira-bridge', label: 'Alternative Approach' }
    ],
    sections: [
      {
        id: 'why-60',
        icon: 'Calendar',
        iconColor: 'blue',
        title: 'Why Age 60 Can Be the Perfect Time',
        content: 'The years between 60 and 73 offer a unique window for tax planning. Here\'s why this period is often ideal for Roth conversions:',
        bullets: [
          'Early retirement: May have years with little or no earned income',
          'Before RMDs: RMDs start at 73—convert before forced distributions',
          'Tax bracket optimization: Fill up lower brackets before Social Security starts',
          'Long enough horizon: 5+ years before you may need the money',
          'Employer coverage: May still have employer health insurance (pre-Medicare)',
          'Legacy planning: Tax-free inheritance for beneficiaries'
        ]
      },
      {
        id: 'the-math',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'The Conversion Math: Will It Pay Off?',
        content: 'The key question is whether paying tax now at your current rate beats paying later at your future rate. Here\'s a simplified example:',
        table: {
          headers: ['Scenario', 'Traditional 401k', 'Roth Conversion'],
          rows: [
            ['Starting Amount', '$500,000', '$500,000'],
            ['Tax Paid Now (24%)', '$0', '$120,000'],
            ['Amount After Tax/Conversion', '$500,000', '$380,000*'],
            ['Growth at 7% for 10 years', '$983,575', '$747,518*'],
            ['Tax at Withdrawal (24%)', '$236,058', '$0'],
            ['Net After-Tax', '$747,517', '$747,518'],
            ['Break Even', '~10 years if rates stay same', '']
          ]
        }
      },
      {
        id: 'strategies',
        icon: 'Target',
        iconColor: 'green',
        title: 'Smart Conversion Strategies at 60',
        content: 'Don\'t convert everything at once. Strategic partial conversions usually work better:',
        bullets: [
          'Bracket filling: Convert just enough to fill your current tax bracket',
          'Gap years: Convert more in years between retirement and Social Security',
          'ACA planning: Keep income under ACA subsidy thresholds if on marketplace',
          'IRMAA awareness: Stay below Medicare premium surcharge thresholds',
          'State strategy: Time conversions if moving to a no-income-tax state',
          'Spread over years: Multiple smaller conversions beat one large conversion'
        ],
        table: {
          headers: ['Tax Bracket (2025)', 'Single Income', 'Married Filing Jointly'],
          rows: [
            ['10%', 'Up to $11,925', 'Up to $23,850'],
            ['12%', '$11,926 - $48,475', '$23,851 - $96,950'],
            ['22%', '$48,476 - $103,350', '$96,951 - $206,700'],
            ['24%', '$103,351 - $197,300', '$206,701 - $394,600'],
            ['32%', '$197,301 - $250,525', '$394,601 - $501,050']
          ]
        }
      },
      {
        id: 'pitfalls',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Conversion Pitfalls to Avoid',
        content: 'These mistakes can turn a smart strategy into a costly error:',
        bullets: [
          'Converting too much: Pushing into higher brackets negates the benefit',
          'Ignoring Medicare IRMAA: High income triggers 2-year premium increase',
          'Forgetting state taxes: Some states tax conversions, others don\'t',
          'Using retirement funds for tax: Pay tax from non-retirement money',
          'Converting when rates will drop: If you expect lower rates later, wait',
          'Ignoring the 5-year rule: Each conversion has its own 5-year clock'
        ]
      },
      {
        id: 'who-should',
        icon: 'ThumbsUp',
        iconColor: 'green',
        title: 'Who Should Convert at 60?',
        content: 'Roth conversion at 60 makes sense if you meet several of these criteria:',
        bullets: [
          'You\'re in a lower tax bracket now than you expect in retirement',
          'You have non-retirement funds to pay the conversion tax',
          'You don\'t need the money for at least 5 years',
          'You expect tax rates to increase in the future',
          'You want to reduce future RMDs',
          'You want to leave tax-free money to heirs',
          'You\'re moving to a no-income-tax state'
        ]
      },
      {
        id: 'who-should-not',
        icon: 'ThumbsDown',
        iconColor: 'red',
        title: 'Who Should NOT Convert at 60?',
        content: 'Roth conversion may be a mistake in these situations:',
        bullets: [
          'You\'re currently in a high tax bracket',
          'You\'ll be in a lower bracket in retirement (rare but possible)',
          'You need to use retirement funds to pay conversion tax',
          'You might need the money within 5 years',
          'You\'re charitably inclined (traditional has better QCD benefits)',
          'You live in a high-tax state and plan to stay',
          'Large conversion would trigger Medicare IRMAA'
        ]
      }
    ],
    warningBox: {
      title: 'The IRMAA Trap',
      content: 'Medicare premiums increase with income through IRMAA (Income-Related Monthly Adjustment Amount). A large Roth conversion could push you into higher premium tiers for two years. The thresholds start at $103,000 (single) and $206,000 (married) for 2025.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Diversification Beyond Tax Strategy',
      content: 'While Roth conversions address tax diversification, they don\'t address asset class diversification. Consider adding gold to your retirement strategy:',
      bullets: [
        'Gold IRA offers tax-deferred or tax-free growth (traditional or Roth)',
        'Physical gold provides hedge against inflation and market volatility',
        'Not correlated with stocks—true portfolio diversification',
        'Can roll over portion of 401k to Gold IRA without conversion tax',
        'Tangible asset that has held value for thousands of years'
      ]
    },
    faqs: [
      {
        question: 'Can I undo a Roth conversion if I change my mind?',
        answer: 'No, since 2018 Roth conversions are irreversible. The Tax Cuts and Jobs Act eliminated recharacterization of conversions. Think carefully before converting.'
      },
      {
        question: 'What\'s the 5-year rule for Roth conversions?',
        answer: 'Each Roth conversion has its own 5-year waiting period before you can withdraw those funds penalty-free (if under 59½). This is separate from the 5-year rule for earnings. At 60+, this matters less since you\'re already past 59½.'
      },
      {
        question: 'Should I convert my entire 401k to Roth?',
        answer: 'Almost never. Having both traditional and Roth accounts gives you tax flexibility in retirement. Some traditional funds allow you to stay in lower brackets, use QCDs, and avoid IRMAA triggers.'
      }
    ],
    relatedArticles: [
      'roth-conversion-tax-bomb-explained',
      'can-i-reinvest-my-rmd'
    ],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/roth-conversion-calculator', '/tools/retirement-calculator']
  },

  'roth-conversion-tax-bomb-explained': {
    slug: 'roth-conversion-tax-bomb-explained',
    title: 'Roth Conversion "Tax Bomb" Explained: Avoid This Costly Mistake',
    subtitle: 'Converting too much at once can cost you thousands in unnecessary taxes. Here\'s how to recognize and avoid the tax bomb.',
    metaTitle: 'Roth Conversion Tax Bomb: What It Is & How to Avoid It (2025)',
    metaDescription: 'Learn what a Roth conversion tax bomb is, how it happens, and strategies to avoid paying more taxes than necessary on your retirement savings.',
    keywords: [
      'roth conversion tax bomb',
      'roth conversion mistake',
      'roth conversion too much',
      'roth conversion tax hit',
      'avoid roth conversion tax'
    ],
    targetKeyword: 'roth conversion tax bomb explained',
    volume: 25,
    difficulty: 20,
    category: 'roth',
    threatLevel: 'warning',
    takeaways: [
      'A "tax bomb" happens when you convert so much that you jump to higher tax brackets',
      'The marginal rate on excess conversion can exceed 32-37%',
      'Medicare IRMAA surcharges add 10-20% effective tax on large conversions',
      'ACA premium loss can add another 5-15% effective tax',
      'Spreading conversions over years almost always beats one large conversion',
      'The sweet spot is filling your current bracket without jumping higher'
    ],
    tocItems: [
      { id: 'what-is-it', label: 'What Is a Tax Bomb?' },
      { id: 'example', label: 'Real Example' },
      { id: 'hidden-costs', label: 'Hidden Costs Beyond Tax Brackets' },
      { id: 'avoid-it', label: 'How to Avoid It' },
      { id: 'recovery', label: 'What If You Already Did It?' },
      { id: 'gold-ira-bridge', label: 'Alternative Strategy' }
    ],
    sections: [
      {
        id: 'what-is-it',
        icon: 'Bomb',
        iconColor: 'red',
        title: 'What Is a Roth Conversion Tax Bomb?',
        content: 'A tax bomb occurs when you convert a large amount from traditional 401k/IRA to Roth in a single year, triggering cascading negative tax consequences:',
        bullets: [
          'Jumping multiple tax brackets (24% → 32% → 35%)',
          'Triggering Medicare IRMAA surcharges',
          'Losing ACA health insurance subsidies',
          'Creating capital gains tax on investments held outside retirement',
          'Triggering the 3.8% Net Investment Income Tax',
          'Phasing out deductions and credits'
        ]
      },
      {
        id: 'example',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'Real Example: The $300,000 Conversion Gone Wrong',
        content: 'Let\'s say a married couple with $50,000 of other income converts $300,000 from their 401k to Roth in one year:',
        table: {
          headers: ['Income Layer', 'Amount', 'Tax Rate', 'Tax Owed'],
          rows: [
            ['Other Income', '$50,000', 'N/A', 'Already taxed'],
            ['Fills 12% bracket', '$46,950', '12%', '$5,634'],
            ['Fills 22% bracket', '$109,750', '22%', '$24,145'],
            ['Fills 24% bracket', '$187,900', '24%', '$45,096'],
            ['Into 32% bracket', '$6,400', '32%', '$2,048'],
            ['Total Tax on Conversion', '$300,000', 'Effective: 25.6%', '$76,923']
          ]
        }
      },
      {
        id: 'hidden-costs',
        icon: 'EyeOff',
        iconColor: 'red',
        title: 'The Hidden Costs Beyond Tax Brackets',
        content: 'The tax bracket jump is just the start. Large conversions trigger other costs:',
        bullets: [
          'Medicare IRMAA: Income over $206k (married) = $3,000+ higher premiums for 2 years',
          'ACA subsidy loss: Income over 400% FPL loses all premium tax credits',
          'Social Security taxation: More SS becomes taxable at higher incomes',
          'Net Investment Income Tax: 3.8% on investment income over $250k',
          'State taxes: Many states fully tax Roth conversions',
          'Lost deductions: Various deductions phase out at higher incomes'
        ],
        table: {
          headers: ['Hidden Cost', 'Potential Impact'],
          rows: [
            ['Medicare IRMAA (2 years)', '$3,000 - $15,000'],
            ['ACA Premium Loss', '$5,000 - $25,000'],
            ['Additional SS Taxation', '$500 - $3,000'],
            ['NIIT (3.8%)', 'Up to $11,400 on $300k'],
            ['State Taxes', '0% - 13% of conversion']
          ]
        }
      },
      {
        id: 'avoid-it',
        icon: 'Shield',
        iconColor: 'green',
        title: 'How to Avoid the Tax Bomb',
        content: 'Smart Roth conversion requires careful planning and restraint:',
        bullets: [
          'Bracket filling: Convert only enough to fill your current bracket',
          'IRMAA awareness: Stay below $206k (married) or $103k (single)',
          'Multi-year strategy: Spread large conversions over 5-10 years',
          'ACA timing: If on ACA, time conversions around subsidy cliffs',
          'Work with a CPA: Tax projections before you convert',
          'Use tax software: Model scenarios before executing'
        ]
      },
      {
        id: 'recovery',
        icon: 'Wrench',
        iconColor: 'blue',
        title: 'What If You Already Triggered a Tax Bomb?',
        content: 'If you converted too much, you can\'t undo it, but you can mitigate the damage going forward:',
        bullets: [
          'Don\'t convert more in the same year—damage is done',
          'Maximize above-the-line deductions (HSA, retirement contributions)',
          'Consider charitable contributions to offset income',
          'Harvest investment losses to offset other gains',
          'Plan for the IRMAA increase—it\'s coming in 2 years',
          'Learn for next year—spread future conversions'
        ]
      }
    ],
    warningBox: {
      title: 'Irreversible Decision',
      content: 'Since 2018, you cannot "recharacterize" (undo) a Roth conversion. Once done, the tax is owed. This makes careful planning essential—you can\'t fix a mistake after the fact.',
      type: 'red'
    },
    goldBridge: {
      title: 'Tax-Efficient Diversification with Gold',
      content: 'Instead of large taxable Roth conversions, consider diversifying your retirement into gold while staying in tax-deferred accounts:',
      bullets: [
        'Direct rollover to Gold IRA has no tax impact',
        'Traditional Gold IRA maintains tax-deferred status',
        'Roth Gold IRA available for tax-free growth',
        'Physical gold diversifies beyond paper assets',
        'No conversion "bomb"—just a transfer between custodians'
      ]
    },
    faqs: [
      {
        question: 'Is any Roth conversion amount safe?',
        answer: 'Generally, converting up to the top of your current tax bracket is safe. For 2025, this might be converting up to ~$97k (married) or ~$48k (single) if you\'re in the 12% bracket with minimal other income.'
      },
      {
        question: 'Does the tax bomb affect everyone equally?',
        answer: 'No. Those with lower incomes, no ACA reliance, and under Medicare age are less impacted. The cascading effects hit early retirees and those near income thresholds hardest.'
      },
      {
        question: 'Can I convert from 401k directly to Roth IRA?',
        answer: 'Yes, it\'s called a "Roth conversion" or "401k to Roth IRA rollover." The conversion amount is taxed as ordinary income in the year of conversion, regardless of whether funds pass through a traditional IRA first.'
      }
    ],
    relatedArticles: [
      'should-i-convert-401k-to-roth-at-60',
      'can-i-reinvest-my-rmd'
    ],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/roth-conversion-calculator', '/tools/retirement-calculator']
  },

  'traditional-vs-roth-401k': {
    slug: 'traditional-vs-roth-401k',
    title: 'Traditional vs Roth 401k: Which Is Better for You?',
    subtitle: 'The answer depends on your current income, expected retirement income, and several factors most people overlook.',
    metaTitle: 'Traditional vs Roth 401k: Complete Comparison Guide (2025)',
    metaDescription: 'Traditional or Roth 401k? Compare tax treatment, contribution limits, withdrawal rules, and learn which is better for your specific situation.',
    keywords: [
      'traditional vs roth 401k',
      'roth 401k vs traditional',
      '401k roth or traditional',
      'should I choose roth 401k',
      '401k pre-tax or roth'
    ],
    targetKeyword: 'traditional vs roth 401k',
    volume: 45,
    difficulty: 25,
    category: 'roth',
    threatLevel: 'info',
    takeaways: [
      'Traditional: Tax deduction now, taxed at withdrawal',
      'Roth: No deduction now, tax-free at withdrawal',
      'Lower earners often benefit more from Roth',
      'Higher earners often benefit more from Traditional',
      'Having both gives maximum flexibility',
      'Employer match always goes to Traditional, regardless of your choice'
    ],
    tocItems: [
      { id: 'comparison', label: 'Quick Comparison' },
      { id: 'traditional-explained', label: 'Traditional 401k Explained' },
      { id: 'roth-explained', label: 'Roth 401k Explained' },
      { id: 'who-chooses-what', label: 'Who Should Choose What' },
      { id: 'both-strategy', label: 'The Both Strategy' },
      { id: 'gold-ira-bridge', label: 'Third Option: Gold IRA' }
    ],
    sections: [
      {
        id: 'comparison',
        icon: 'GitCompare',
        iconColor: 'blue',
        title: 'Quick Comparison',
        content: 'Here\'s a side-by-side look at the key differences:',
        table: {
          headers: ['Feature', 'Traditional 401k', 'Roth 401k'],
          rows: [
            ['Tax on Contributions', 'Deductible (reduces tax now)', 'After-tax (no deduction)'],
            ['Tax on Withdrawals', 'Taxed as income', 'Tax-free (if qualified)'],
            ['Required Distributions', 'Yes, at age 73', 'Yes, but can roll to Roth IRA'],
            ['Income Limits', 'None', 'None (unlike Roth IRA)'],
            ['2025 Contribution Limit', '$23,500 ($31,000 if 50+)', '$23,500 ($31,000 if 50+)'],
            ['Employer Match', 'Goes to Traditional', 'Goes to Traditional'],
            ['Loans Allowed', 'Yes', 'Yes'],
            ['Early Withdrawal Penalty', '10% + taxes', '10% on earnings only']
          ]
        }
      },
      {
        id: 'traditional-explained',
        icon: 'Landmark',
        iconColor: 'amber',
        title: 'Traditional 401k: The Tax-Now Approach',
        content: 'With a Traditional 401k, you get a tax deduction when you contribute, but pay taxes when you withdraw.',
        bullets: [
          'Immediate tax savings: $10,000 contribution saves ~$2,400 in 24% bracket',
          'Money grows tax-deferred: No taxes until withdrawal',
          'Taxed at withdrawal: Could be higher or lower rate than now',
          'RMDs required: Must start withdrawing at age 73',
          'Better if you expect lower tax rate in retirement',
          'Better for high earners who can\'t use Roth IRA'
        ]
      },
      {
        id: 'roth-explained',
        icon: 'Sparkles',
        iconColor: 'green',
        title: 'Roth 401k: The Tax-Later Approach (Never)',
        content: 'With a Roth 401k, you pay taxes on your contribution now, but withdrawals in retirement are completely tax-free.',
        bullets: [
          'No immediate tax savings: You pay tax before contributing',
          'Tax-free growth: Both contributions AND earnings are tax-free at withdrawal',
          'No taxes ever again: Qualified withdrawals are 100% tax-free',
          'RMDs apply: But can roll to Roth IRA to eliminate RMDs',
          'Better if you expect higher tax rate in retirement',
          'Better for younger workers with decades of tax-free growth ahead'
        ]
      },
      {
        id: 'who-chooses-what',
        icon: 'Users',
        iconColor: 'purple',
        title: 'Decision Framework: Who Should Choose What',
        content: 'Your optimal choice depends on several factors:',
        table: {
          headers: ['Situation', 'Recommendation'],
          rows: [
            ['Early career, low tax bracket', 'Roth 401k'],
            ['Peak earning years, high bracket', 'Traditional 401k'],
            ['Uncertain future tax rates', 'Split between both'],
            ['Expect taxes to increase', 'Roth 401k'],
            ['Moving to low-tax state in retirement', 'Traditional 401k'],
            ['Want maximum flexibility', 'Both'],
            ['Large pension or SS expected', 'Roth 401k'],
            ['Little other retirement income', 'Traditional 401k']
          ]
        }
      },
      {
        id: 'both-strategy',
        icon: 'Scale',
        iconColor: 'blue',
        title: 'The "Both" Strategy: Tax Diversification',
        content: 'Many financial experts recommend contributing to BOTH traditional and Roth accounts. Here\'s why:',
        bullets: [
          'Flexibility: Withdraw from Traditional in low-tax years, Roth in high-tax years',
          'Hedge uncertainty: No one knows future tax rates',
          'Bracket optimization: Fill low brackets with Traditional, keep Roth for high years',
          'RMD management: Traditional RMDs can be offset by Roth\'s no-tax withdrawals',
          'Legacy planning: Roth is better for heirs (tax-free)',
          'Split 50/50 or adjust based on your current bracket'
        ]
      }
    ],
    warningBox: {
      title: 'Employer Match Always Traditional',
      content: 'Even if you contribute 100% Roth, your employer\'s match goes into a Traditional 401k bucket. So you\'ll have both types regardless—giving you some tax diversification automatically.',
      type: 'blue'
    },
    goldBridge: {
      title: 'Add Asset Diversification to Tax Diversification',
      content: 'While Traditional vs Roth addresses tax diversification, don\'t forget asset diversification. A Gold IRA adds a third dimension:',
      bullets: [
        'Available as Traditional or Roth Gold IRA',
        'Physical gold provides inflation hedge',
        'Not correlated with stock market performance',
        'Tangible asset in an increasingly digital world',
        'Rollover from 401k available when you leave employer'
      ]
    },
    faqs: [
      {
        question: 'Can I have both Traditional and Roth 401k?',
        answer: 'Yes! You can split your contributions between both, as long as your total doesn\'t exceed the annual limit ($23,500 in 2025, or $31,000 if 50+). Many plans allow you to specify a percentage for each.'
      },
      {
        question: 'Can I change from Traditional to Roth mid-year?',
        answer: 'Yes, most plans allow you to change your contribution type at any time, effective for future contributions. Past contributions stay where they are unless you do an in-plan Roth conversion.'
      },
      {
        question: 'Does the math favor Roth if tax rates stay the same?',
        answer: 'If tax rates are truly identical and you invest the tax savings from Traditional, the math is the same. Roth wins when future rates are higher; Traditional wins when future rates are lower.'
      }
    ],
    relatedArticles: [
      'should-i-convert-401k-to-roth-at-60',
      'roth-conversion-tax-bomb-explained'
    ],
    relatedGuides: ['/guide/401k-to-gold-rollover', '/guide/gold-ira-guide'],
    relatedTools: ['/tools/roth-conversion-calculator', '/tools/retirement-calculator']
  },

  'backdoor-roth-explained': {
    slug: 'backdoor-roth-explained',
    title: 'Backdoor Roth IRA Explained: High Earner\'s Guide',
    subtitle: 'Make too much for a Roth IRA? There\'s a legal workaround. Here\'s exactly how it works and the pitfalls to avoid.',
    metaTitle: 'Backdoor Roth IRA: Step-by-Step Guide for High Earners (2025)',
    metaDescription: 'Learn how to do a backdoor Roth IRA conversion if you earn too much for direct contributions. Includes steps, pro-rata rule warnings, and mega backdoor.',
    keywords: [
      'backdoor roth ira',
      'backdoor roth conversion',
      'high earner roth ira',
      'roth ira income limit workaround',
      'how to do backdoor roth'
    ],
    targetKeyword: 'backdoor roth explained',
    volume: 60,
    difficulty: 30,
    category: 'roth',
    threatLevel: 'info',
    takeaways: [
      'Backdoor Roth lets high earners contribute to Roth IRA regardless of income',
      'Contribute to Traditional IRA (non-deductible), then convert to Roth',
      'Pro-rata rule can create unexpected taxes if you have other IRA balances',
      'Mega backdoor Roth uses after-tax 401k contributions—even more powerful',
      'Do it correctly or face IRS complications—timing and documentation matter',
      'Consider Gold IRA as alternative for retirement diversification'
    ],
    tocItems: [
      { id: 'what-is-it', label: 'What Is a Backdoor Roth?' },
      { id: 'steps', label: 'Step-by-Step Instructions' },
      { id: 'pro-rata', label: 'The Pro-Rata Rule Trap' },
      { id: 'mega-backdoor', label: 'Mega Backdoor Roth' },
      { id: 'risks', label: 'Risks & Complications' },
      { id: 'gold-ira-bridge', label: 'Alternative Strategy' }
    ],
    sections: [
      {
        id: 'what-is-it',
        icon: 'KeyRound',
        iconColor: 'amber',
        title: 'What Is a Backdoor Roth IRA?',
        content: 'Roth IRAs have income limits ($161,000 single, $240,000 married in 2025). The "backdoor" is a legal two-step workaround:',
        bullets: [
          'Step 1: Contribute to a Traditional IRA (no income limits for non-deductible contributions)',
          'Step 2: Convert that Traditional IRA to a Roth IRA (no income limits for conversions)',
          'Result: You\'ve effectively made a Roth IRA contribution despite being over the income limit',
          'This is 100% legal—Congress created this "loophole" intentionally',
          'About 1 million taxpayers use this strategy annually'
        ]
      },
      {
        id: 'steps',
        icon: 'ListChecks',
        iconColor: 'green',
        title: 'Step-by-Step: How to Do a Backdoor Roth',
        content: 'Follow these steps carefully to execute a clean backdoor Roth:',
        bullets: [
          '1. Open a Traditional IRA (if you don\'t have one) with a major custodian',
          '2. Contribute up to $7,000 ($8,000 if 50+) as a NON-DEDUCTIBLE contribution',
          '3. Wait a short period (1-7 days is typically safe, some do same-day)',
          '4. Convert the entire Traditional IRA balance to your Roth IRA',
          '5. File Form 8606 with your tax return to track non-deductible basis',
          '6. Document everything—keep records of all transactions'
        ],
        table: {
          headers: ['Step', 'Tax Impact'],
          rows: [
            ['Contribute $7,000 (non-deductible)', 'No deduction (already taxed money)'],
            ['Wait (money sits as cash)', 'No growth = no tax'],
            ['Convert to Roth', 'No tax (basis = contribution)'],
            ['Future growth in Roth', 'Tax-free forever']
          ]
        }
      },
      {
        id: 'pro-rata',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'The Pro-Rata Rule: The Major Pitfall',
        content: 'The IRS treats ALL your Traditional IRA balances as one pot. If you have pre-tax IRA money, the pro-rata rule applies:',
        bullets: [
          'You can\'t convert "just" the non-deductible portion',
          'Each conversion is proportionally pre-tax and after-tax',
          'Example: $7,000 non-deductible + $93,000 pre-tax = 7% after-tax',
          'Converting $7,000 = $490 tax-free, $6,510 taxable',
          'Solution: Roll pre-tax IRAs into your 401k to empty Traditional IRA',
          'SEP IRAs and SIMPLE IRAs count in the pro-rata calculation'
        ]
      },
      {
        id: 'mega-backdoor',
        icon: 'Rocket',
        iconColor: 'purple',
        title: 'Mega Backdoor Roth: The Power Move',
        content: 'If your 401k allows after-tax contributions beyond the regular limit, you can contribute up to $69,000 total (2025) and convert to Roth:',
        bullets: [
          'Regular 401k limit: $23,500 (or $31,000 if 50+)',
          'Total 401k + after-tax limit: $69,000 (or $76,500 if 50+)',
          'Contribute after-tax dollars above your regular limit',
          'Immediately convert after-tax portion to Roth',
          'Only ~30% of 401k plans offer this feature',
          'Check if your plan allows "in-plan Roth conversions"'
        ]
      },
      {
        id: 'risks',
        icon: 'ShieldAlert',
        iconColor: 'amber',
        title: 'Risks & Complications',
        content: 'Backdoor Roth isn\'t without risks:',
        bullets: [
          'Legislation risk: Congress has proposed eliminating this strategy',
          'Step transaction doctrine: Very short timing could theoretically be challenged',
          'Documentation errors: Missing Form 8606 creates tax headaches',
          'Pro-rata mistakes: Forgetting about old IRAs leads to unexpected taxes',
          'State taxes: Some states don\'t recognize Roth conversions',
          '5-year rule: Converted amounts have 5-year waiting period'
        ]
      }
    ],
    warningBox: {
      title: 'Form 8606 Is Critical',
      content: 'You MUST file IRS Form 8606 to track your non-deductible IRA contributions. Without it, the IRS may assume your entire Traditional IRA is pre-tax—meaning you\'d pay tax twice on the same money.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Beyond Roth: Gold IRA Diversification',
      content: 'While backdoor Roth addresses income limits, consider diversifying your retirement beyond paper assets:',
      bullets: [
        'Gold IRA has no income limits (like Traditional IRA)',
        'Can be Traditional or Roth Gold IRA',
        'Physical gold provides hedge against market volatility',
        'Not subject to "backdoor" complexity—straightforward rollover',
        'Diversification that the wealthy have used for generations'
      ]
    },
    faqs: [
      {
        question: 'Is the backdoor Roth still legal in 2025?',
        answer: 'Yes. While Build Back Better proposed eliminating it in 2021, that legislation didn\'t pass. The backdoor Roth remains a legal strategy. However, high earners should stay informed about potential future changes.'
      },
      {
        question: 'How long should I wait between contribution and conversion?',
        answer: 'There\'s no official IRS rule. Some do same-day; others wait a few days. The key is don\'t invest the Traditional IRA funds—keep them in cash/money market. Growth between contribution and conversion is taxable.'
      },
      {
        question: 'Can I do backdoor Roth if I have a 401k?',
        answer: 'Yes! Having a 401k doesn\'t affect backdoor Roth eligibility. In fact, a 401k can help by letting you roll pre-tax IRA funds into it, clearing the way for a clean backdoor Roth (avoiding pro-rata rule).'
      }
    ],
    relatedArticles: [
      'traditional-vs-roth-401k',
      'should-i-convert-401k-to-roth-at-60'
    ],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/roth-conversion-calculator']
  }
};
