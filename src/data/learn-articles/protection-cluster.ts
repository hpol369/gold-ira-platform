// src/data/learn-articles/protection-cluster.ts
// P1-015: Asset Protection & Legal cluster
// Keywords: 401k protected from creditors, lawsuit, bankruptcy, etc.

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const protectionArticles: LearnArticleRegistry = {
  '401k-protected-from-creditors': {
    slug: '401k-protected-from-creditors',
    title: 'Is Your 401k Protected from Creditors, Lawsuits & Bankruptcy?',
    subtitle: 'Understanding how federal law shields your retirement savings from financial disasters—and where the protection has limits.',
    metaTitle: '401k Protected from Creditors? Complete Legal Guide (2025)',
    metaDescription: 'Learn how your 401k is protected from creditors, lawsuits, and bankruptcy under ERISA. Understand the limits and exceptions you need to know.',
    keywords: [
      '401k protected from creditors',
      '401k bankruptcy protection',
      '401k lawsuit protection',
      'can creditors take 401k',
      '401k asset protection'
    ],
    targetKeyword: '401k protected from creditors',
    volume: 40,
    difficulty: 30,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      '401ks have strong federal protection under ERISA',
      'Most creditors cannot touch your 401k, even in bankruptcy',
      'IRAs have weaker protection—only $1.5 million in bankruptcy',
      'Exceptions: IRS, child support, spouse, and QDRO orders',
      'Rolling 401k to IRA may reduce your protection',
      'State laws affect protection for IRAs but not 401ks'
    ],
    tocItems: [
      { id: 'erisa-protection', label: 'ERISA Protection Explained' },
      { id: 'bankruptcy', label: 'Bankruptcy Protection' },
      { id: 'lawsuit-protection', label: 'Lawsuit & Judgment Protection' },
      { id: 'exceptions', label: 'Who CAN Take Your 401k' },
      { id: 'ira-vs-401k', label: '401k vs IRA Protection' },
      { id: 'gold-ira-bridge', label: 'Gold IRA Protection' }
    ],
    sections: [
      {
        id: 'erisa-protection',
        icon: 'Shield',
        iconColor: 'green',
        title: 'ERISA: Your 401k\'s Federal Shield',
        content: 'The Employee Retirement Income Security Act (ERISA) provides powerful protection for employer-sponsored retirement plans:',
        bullets: [
          'ERISA covers 401k, 403b, 457b, and pension plans',
          'Plans must include "anti-alienation" provisions',
          'Creditors cannot garnish, attach, or levy your 401k',
          'Protection applies while employed AND after leaving',
          'This is federal law—it trumps state laws',
          'No dollar limit on protection—your entire balance is covered'
        ]
      },
      {
        id: 'bankruptcy',
        icon: 'Landmark',
        iconColor: 'blue',
        title: 'Bankruptcy Protection',
        content: 'In Chapter 7 or Chapter 13 bankruptcy, your 401k is almost always safe:',
        bullets: [
          'ERISA plans are completely exempt from bankruptcy estate',
          'Creditors cannot force liquidation to pay debts',
          'No dollar limit—even multi-million dollar 401ks are protected',
          'Applies regardless of how recently you contributed',
          'Rollover 401ks maintain protection if properly transferred',
          'IRAs have limits—see below'
        ],
        table: {
          headers: ['Account Type', 'Bankruptcy Protection'],
          rows: [
            ['401k/403b/457b (ERISA)', 'Unlimited protection'],
            ['Pension plans (ERISA)', 'Unlimited protection'],
            ['Traditional IRA', 'Up to $1,512,350 (2024)'],
            ['Roth IRA', 'Up to $1,512,350 (2024)'],
            ['Rollover IRA (from 401k)', 'Unlimited if traceable'],
            ['SEP IRA', 'State law varies'],
            ['SIMPLE IRA', 'State law varies']
          ]
        }
      },
      {
        id: 'lawsuit-protection',
        icon: 'Scale',
        iconColor: 'purple',
        title: 'Lawsuit & Judgment Protection',
        content: 'If you lose a lawsuit and have a judgment against you, your 401k is generally protected:',
        bullets: [
          'Most civil judgments cannot reach your 401k',
          'Personal injury claims: 401k protected',
          'Contract disputes: 401k protected',
          'Medical debt: 401k protected',
          'Credit card lawsuits: 401k protected',
          'Important: Some exceptions exist (see below)'
        ]
      },
      {
        id: 'exceptions',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Exceptions: Who CAN Take Your 401k',
        content: 'Despite strong protections, these entities can access your 401k:',
        bullets: [
          'IRS: Federal tax liens can attach to any asset, including 401k',
          'Spouse (QDRO): Divorce court can divide your 401k',
          'Child/spousal support: Court orders for support can garnish 401k',
          'Criminal penalties: Restitution orders may reach retirement funds',
          'Federal student loans: Government has broad collection powers',
          'Plan loans in default: Your own plan can offset for unpaid loans'
        ],
        table: {
          headers: ['Creditor Type', 'Can Take 401k?', 'Legal Basis'],
          rows: [
            ['Regular creditors', 'No', 'ERISA protection'],
            ['IRS (back taxes)', 'Yes', 'Federal tax lien'],
            ['Ex-spouse (QDRO)', 'Yes', 'Divorce court order'],
            ['Child support', 'Yes', 'Court enforcement'],
            ['Criminal restitution', 'Yes', 'Court order'],
            ['State tax agencies', 'Varies', 'Depends on state']
          ]
        }
      },
      {
        id: 'ira-vs-401k',
        icon: 'GitCompare',
        iconColor: 'amber',
        title: 'IRA vs 401k: Protection Differences',
        content: 'IRAs have less protection than 401ks. This matters when rolling over:',
        bullets: [
          '401k (ERISA): Unlimited federal protection',
          'IRA (non-ERISA): Limited to ~$1.5 million in bankruptcy',
          'Rollover IRAs: May retain unlimited protection if traceable',
          'State laws: Affect IRA protection significantly',
          'Some states: Offer unlimited IRA protection (Texas, Florida)',
          'Other states: Minimal IRA protection beyond bankruptcy limit'
        ]
      }
    ],
    warningBox: {
      title: 'Think Before You Roll Over',
      content: 'Rolling your 401k to an IRA may reduce your creditor protection. If you\'re in a profession with high lawsuit risk (doctor, business owner), consider keeping funds in 401k or researching your state\'s IRA protection laws first.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Gold IRA Asset Protection',
      content: 'A Gold IRA follows IRA protection rules, but physical gold offers additional peace of mind:',
      bullets: [
        'Gold IRA has same protection as Traditional/Roth IRA',
        'Physical gold stored at approved depository is secured',
        'Gold maintains value during economic crises',
        'Tangible asset separate from paper financial system',
        'Consider state laws when evaluating total protection'
      ]
    },
    faqs: [
      {
        question: 'Can I be forced to withdraw from my 401k to pay creditors?',
        answer: 'Generally no. ERISA protection prevents creditors from forcing distributions. Exceptions include IRS tax levies, divorce (QDRO), and child/spousal support orders.'
      },
      {
        question: 'What happens to my 401k if I file bankruptcy?',
        answer: 'Your 401k is exempt from the bankruptcy estate under ERISA. Creditors cannot access it, and you keep your full balance. This applies to both Chapter 7 and Chapter 13 bankruptcy.'
      },
      {
        question: 'Does protection continue after I retire?',
        answer: 'Yes, as long as funds remain in the 401k or properly rolled over to an IRA. Once you withdraw funds, they become personal assets subject to normal creditor claims.'
      }
    ],
    relatedArticles: [
      'can-government-seize-my-ira',
      'what-happens-to-401k-if-bank-fails'
    ],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-ira-rollover'],
    relatedTools: ['/tools/retirement-calculator']
  },

  '401k-protected-in-divorce': {
    slug: '401k-protected-in-divorce',
    title: '401k in Divorce: What Your Spouse Can (and Can\'t) Take',
    subtitle: 'Your retirement savings are on the line. Here\'s how divorce affects your 401k and strategies to protect what you\'ve built.',
    metaTitle: '401k in Divorce: How It\'s Divided & What to Expect (2025)',
    metaDescription: 'Learn how 401k accounts are divided in divorce, what a QDRO means, and strategies to protect your retirement savings during marital dissolution.',
    keywords: [
      '401k in divorce',
      '401k divorce division',
      'QDRO 401k',
      'protect 401k in divorce',
      'spouse take 401k divorce'
    ],
    targetKeyword: '401k protected in divorce',
    volume: 35,
    difficulty: 28,
    category: 'protection',
    threatLevel: 'warning',
    takeaways: [
      '401k is typically considered marital property subject to division',
      'Only the portion earned during marriage is usually divisible',
      'QDRO (Qualified Domestic Relations Order) governs division',
      'Division doesn\'t necessarily mean 50/50—it\'s negotiable',
      'Early 401k planning can help protect assets',
      'Proper documentation of pre-marital contributions is essential'
    ],
    tocItems: [
      { id: 'marital-property', label: 'Is 401k Marital Property?' },
      { id: 'qdro', label: 'What Is a QDRO?' },
      { id: 'what-spouse-gets', label: 'What Your Spouse Can Get' },
      { id: 'protect-your-401k', label: 'How to Protect Your 401k' },
      { id: 'tax-implications', label: 'Tax Implications' },
      { id: 'gold-ira-bridge', label: 'Post-Divorce Strategy' }
    ],
    sections: [
      {
        id: 'marital-property',
        icon: 'FileText',
        iconColor: 'blue',
        title: 'Is Your 401k Marital Property?',
        content: 'In most states, 401k contributions made during marriage are marital property:',
        bullets: [
          'Contributions during marriage: Usually divisible',
          'Pre-marriage balance: Usually separate property',
          'Growth on pre-marriage balance: Varies by state',
          'Community property states: Generally split 50/50',
          'Equitable distribution states: "Fair" division (not always equal)',
          'Document your pre-marriage balance NOW if not already done'
        ]
      },
      {
        id: 'qdro',
        icon: 'FileCheck',
        iconColor: 'green',
        title: 'What Is a QDRO?',
        content: 'A QDRO (Qualified Domestic Relations Order) is the legal mechanism for dividing a 401k:',
        bullets: [
          'Court order specifically for retirement plan division',
          'Allows your spouse to become "alternate payee"',
          'Must be approved by both court AND plan administrator',
          'Spells out exactly what portion goes to ex-spouse',
          'Can specify dollar amount or percentage',
          'Ex-spouse can take as lump sum or roll to their own IRA'
        ]
      },
      {
        id: 'what-spouse-gets',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'Calculating What Your Spouse Can Claim',
        content: 'The math of 401k division in divorce:',
        bullets: [
          'Marital portion = Value at divorce minus pre-marriage value',
          'Example: $400k now, $100k at marriage = $300k marital portion',
          'Marital portion then split according to settlement',
          '50/50 split of marital portion = $150k to each spouse',
          'Pre-marriage $100k stays with you (typically)',
          'Negotiate: 401k division can be offset by other assets'
        ],
        table: {
          headers: ['Component', 'Amount', 'Who Gets It'],
          rows: [
            ['Pre-marriage balance', '$100,000', 'You (typically)'],
            ['Contributions during marriage', '$200,000', 'Marital property'],
            ['Growth on marital contributions', '$100,000', 'Marital property'],
            ['Total marital portion', '$300,000', 'Subject to division'],
            ['Spouse\'s half (50/50 split)', '$150,000', 'Ex-spouse via QDRO'],
            ['Your remaining balance', '$250,000', 'You']
          ]
        }
      },
      {
        id: 'protect-your-401k',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Strategies to Protect Your 401k',
        content: 'Legal ways to minimize 401k division in divorce:',
        bullets: [
          'Prenuptial agreement: Specify 401k as separate property',
          'Postnuptial agreement: Can be done during marriage',
          'Document pre-marriage balance: Get statements dated before marriage',
          'Negotiate offsets: Trade 401k for other assets (home equity, etc.)',
          'Consider tax implications: $150k in 401k ≠ $150k in taxable account',
          'Delay divorce filing: If spouse contributed less recently'
        ]
      },
      {
        id: 'tax-implications',
        icon: 'Receipt',
        iconColor: 'red',
        title: 'Tax Implications of 401k Division',
        content: 'Dividing a 401k has tax consequences to consider:',
        bullets: [
          'QDRO division itself: No immediate tax consequence',
          'If ex-spouse takes lump sum: THEY pay tax (not you)',
          'If ex-spouse rolls to IRA: Tax-deferred for them',
          'Special rule: Ex-spouse can withdraw without 10% penalty post-QDRO',
          'You keep paying tax on your portion when you withdraw',
          'Document QDRO carefully—mistakes can cause tax problems'
        ]
      }
    ],
    warningBox: {
      title: 'Act Early',
      content: 'Don\'t wait until divorce proceedings to think about 401k protection. Document your pre-marriage balance, consider a prenup or postnup, and consult a family law attorney. The time to protect assets is before you need protection.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Post-Divorce Retirement Rebuild',
      content: 'After a divorce divides your 401k, rebuilding is critical. Consider diversifying your remaining retirement savings:',
      bullets: [
        'Roll remaining 401k to Gold IRA for protection and growth',
        'Physical gold provides stability during uncertain times',
        'Diversify away from market volatility',
        'Take control of your retirement future',
        'Tangible asset that\'s truly yours'
      ]
    },
    faqs: [
      {
        question: 'Can I withdraw from my 401k before divorce to protect it?',
        answer: 'This is generally a bad idea. Courts look unfavorably on attempts to hide or dissipate assets. You could face penalties, taxes, and the court may credit your spouse as if the money was still there.'
      },
      {
        question: 'What if my spouse doesn\'t want the 401k split?',
        answer: 'Great! You can negotiate. Perhaps they prefer the house, cash, or other assets instead. All marital property is in play—401k division isn\'t mandatory if you agree on alternatives.'
      },
      {
        question: 'How long does a QDRO take?',
        answer: 'Typically 2-8 weeks after the divorce is finalized, but can take longer if there are issues. The plan administrator must approve the QDRO, which adds time. Start the process early.'
      }
    ],
    relatedArticles: [
      'what-to-do-with-spouses-401k-after-death',
      '401k-protected-from-creditors'
    ],
    relatedGuides: ['/guide/401k-to-gold-ira-rollover'],
    relatedTools: ['/tools/retirement-calculator']
  },

  'is-200k-enough-to-retire-at-62': {
    slug: 'is-200k-enough-to-retire-at-62',
    title: 'Is $200,000 Enough to Retire at 62?',
    subtitle: 'The honest answer depends on your lifestyle, Social Security, and willingness to adapt. Here\'s the math.',
    metaTitle: 'Is $200k Enough to Retire at 62? Realistic Analysis (2025)',
    metaDescription: 'Can you retire at 62 with $200,000? Honest analysis of what $200k retirement looks like, strategies to make it work, and alternatives to consider.',
    keywords: [
      'is 200k enough to retire at 62',
      'retire at 62 with 200000',
      '200k retirement savings',
      'can I retire with 200k',
      'early retirement 200000'
    ],
    targetKeyword: 'is 200k enough to retire at 62',
    volume: 30,
    difficulty: 22,
    category: 'protection',
    threatLevel: 'warning',
    takeaways: [
      '$200k alone is challenging but possible with low expenses and Social Security',
      'At 4% withdrawal rate, $200k provides only $8,000/year in income',
      'Social Security at 62 is reduced 30% from full retirement age benefit',
      'Working part-time can make $200k retirement viable',
      'Healthcare before Medicare (65) is a significant expense',
      'Geographic arbitrage (lower cost of living area) extends your money'
    ],
    tocItems: [
      { id: 'the-math', label: 'The Math' },
      { id: 'social-security', label: 'Social Security Factor' },
      { id: 'healthcare', label: 'Healthcare Challenge' },
      { id: 'strategies', label: 'Making It Work' },
      { id: 'alternatives', label: 'Alternatives to Full Retirement' },
      { id: 'gold-ira-bridge', label: 'Protect What You Have' }
    ],
    sections: [
      {
        id: 'the-math',
        icon: 'Calculator',
        iconColor: 'blue',
        title: 'The Basic Math',
        content: 'Let\'s look at what $200,000 actually provides in retirement income:',
        table: {
          headers: ['Withdrawal Rate', 'Annual Income', 'Monthly Income'],
          rows: [
            ['3% (conservative)', '$6,000', '$500'],
            ['4% (standard rule)', '$8,000', '$667'],
            ['5% (aggressive)', '$10,000', '$833'],
            ['6% (risky)', '$12,000', '$1,000']
          ]
        },
        bullets: [
          'The 4% rule: Withdraw 4% first year, adjust for inflation',
          '$200k at 4% = $8,000/year or $667/month',
          'This assumes a 30-year retirement',
          'At 62, you may need 35+ years of income',
          'Lower withdrawal rate (3-3.5%) may be more appropriate',
          'Clearly $667/month alone is not enough to live on'
        ]
      },
      {
        id: 'social-security',
        icon: 'Landmark',
        iconColor: 'green',
        title: 'The Social Security Factor',
        content: 'Social Security is likely your biggest income source at this savings level:',
        bullets: [
          'Taking SS at 62 = 30% reduction from full retirement age (67)',
          'Average SS benefit at 62: ~$1,400/month (after reduction)',
          'Full retirement age (67) would be ~$2,000/month',
          'Delaying to 70 would be ~$2,480/month',
          'Combined with $200k: $1,400 + $667 = ~$2,067/month',
          'That\'s $24,800/year—tight but potentially workable'
        ],
        table: {
          headers: ['When You Claim SS', 'Est. Monthly Benefit', 'With 4% from $200k'],
          rows: [
            ['Age 62', '$1,400', '$2,067/month'],
            ['Age 65', '$1,720', '$2,387/month'],
            ['Age 67 (FRA)', '$2,000', '$2,667/month'],
            ['Age 70', '$2,480', '$3,147/month']
          ]
        }
      },
      {
        id: 'healthcare',
        icon: 'Heart',
        iconColor: 'red',
        title: 'The Healthcare Challenge',
        content: 'Healthcare from 62-65 is a major expense without Medicare:',
        bullets: [
          'ACA marketplace: $500-1,500/month depending on age and location',
          'COBRA (if available): Often $1,000-2,000/month',
          'Private insurance: Similar to ACA without subsidies',
          'With low income, you may qualify for ACA subsidies',
          'Plan Roth conversions to manage ACA subsidy eligibility',
          'This alone could consume 25-50% of your retirement income'
        ]
      },
      {
        id: 'strategies',
        icon: 'Lightbulb',
        iconColor: 'amber',
        title: 'Strategies to Make $200k Work',
        content: 'If $200k is your reality, here are ways to stretch it:',
        bullets: [
          'Delay Social Security: Even 1-2 years helps significantly',
          'Geographic arbitrage: Move to lower cost area (rural, abroad)',
          'Downsize housing: Smaller home, no mortgage',
          'Part-time work: Even $10k/year reduces portfolio withdrawal',
          'Optimize taxes: Roth conversions during low-income years',
          'Minimize healthcare costs: ACA subsidies, HSA if possible'
        ]
      },
      {
        id: 'alternatives',
        icon: 'Route',
        iconColor: 'purple',
        title: 'Alternatives to Full Retirement',
        content: 'Full retirement at 62 with $200k is challenging. Consider:',
        bullets: [
          'Semi-retirement: Work part-time doing something you enjoy',
          'Bridge job: Work until 65-67, then fully retire',
          'Gig economy: Flexible work (consulting, driving, etc.)',
          'Delay: Each year worked adds savings AND reduces years needed',
          'Phased retirement: Reduce hours gradually',
          'Start a small business: Turn hobby into income'
        ]
      }
    ],
    warningBox: {
      title: 'The Honest Answer',
      content: '$200,000 alone is not enough for a comfortable traditional retirement at 62. Combined with Social Security and very low expenses, it\'s possible but tight. Working part-time, delaying Social Security, or delaying full retirement by a few years dramatically improves the picture.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Protect and Grow What You Have',
      content: 'With only $200k, protecting your savings from market crashes is critical. Consider a Gold IRA:',
      bullets: [
        'Gold historically holds value during market downturns',
        'You can\'t afford to lose 30% right before retirement',
        'Physical gold provides stability in uncertain times',
        'Diversification reduces sequence of returns risk',
        'Peace of mind when you can\'t afford to take big risks'
      ]
    },
    faqs: [
      {
        question: 'What\'s the minimum needed to retire at 62?',
        answer: 'There\'s no single answer—it depends on lifestyle, location, health, and Social Security. But financial planners often suggest $500k-$1M minimum for traditional retirement. With Social Security and frugal living, $200k-300k might work.'
      },
      {
        question: 'Should I take Social Security at 62 with only $200k?',
        answer: 'Probably not if you can avoid it. Each year you delay increases your benefit by 6-8%. If you can work part-time or live on savings for a few years, delaying SS can be worth $100,000+ over your lifetime.'
      },
      {
        question: 'Can I retire abroad with $200k?',
        answer: 'Potentially yes. Countries like Mexico, Portugal, Thailand, and Colombia have much lower costs of living. $200k plus Social Security can provide a comfortable lifestyle in many international destinations.'
      }
    ],
    relatedArticles: [
      'am-i-on-track-for-retirement-at-50',
      'too-late-to-save-for-retirement'
    ],
    relatedGuides: ['/guide/401k-to-gold-ira-rollover'],
    relatedTools: ['/tools/retirement-calculator']
  }
};
