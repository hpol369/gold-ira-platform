// src/data/learn-articles/life-events-cluster.ts
// P1-008: Life Events cluster - Job loss, divorce, death, vesting

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const lifeEventsArticles: LearnArticleRegistry = {
  'what-happens-to-unvested-401k': {
    slug: 'what-happens-to-unvested-401k',
    title: 'What Happens to Unvested 401k When You Leave Your Job',
    subtitle: 'Leaving before you\'re fully vested? Here\'s exactly what you\'ll lose - and what you can do about it.',

    metaTitle: 'What Happens to Unvested 401k? Complete Guide | 2026',
    metaDescription: 'Understand what happens to unvested 401k contributions when you leave. Learn about vesting schedules, forfeiture, and how to protect your retirement.',
    keywords: ['unvested 401k', 'what happens to unvested 401k', '401k vesting', '401k forfeiture'],

    targetKeyword: 'what happens to unvested 401k',
    volume: 50,
    difficulty: 1,

    category: 'life-events',
    threatLevel: 'warning',

    takeaways: [
      'Your own contributions are always 100% yours - they\'re immediately vested.',
      'Employer matching contributions follow a vesting schedule - you may forfeit some.',
      'Common vesting schedules: 3-year cliff or 6-year graded.',
      'Unvested amounts are forfeited back to the employer when you leave.',
      'Some employers use unvested funds to reduce their future contribution costs.',
      'Calculate your vested amount before making any job change decisions.',
    ],

    tocItems: [
      { id: 'basics', label: 'Vesting Basics' },
      { id: 'schedules', label: 'Vesting Schedules' },
      { id: 'forfeiture', label: 'What Gets Forfeited' },
      { id: 'calculate', label: 'Calculate Your Vested Amount' },
      { id: 'decisions', label: 'Job Change Decisions' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'basics',
        icon: 'Info',
        iconColor: 'blue',
        title: 'Understanding 401k Vesting',
        content: '**Vesting** means you\'ve earned the right to keep employer contributions.\n\n**Your contributions:** Always 100% vested immediately. Money you put in is always yours.\n\n**Employer contributions:** Often follow a vesting schedule. You earn ownership over time.',
        bullets: [
          'Your deferrals: Always 100% vested',
          'Employer match: Follows vesting schedule',
          'Employer profit sharing: May have different schedule',
          'Investment gains: Vest at same rate as the contributions',
        ],
      },
      {
        id: 'schedules',
        icon: 'Calendar',
        iconColor: 'amber',
        title: 'Common Vesting Schedules',
        content: 'There are two main types of vesting schedules:',
        table: {
          headers: ['Type', 'How It Works', 'Timeline'],
          rows: [
            ['Cliff Vesting', '0% until cliff date, then 100%', 'Usually 3 years'],
            ['Graded Vesting', 'Increases gradually each year', 'Usually 2-6 years'],
            ['Immediate', '100% from day one', 'No waiting'],
          ],
        },
        bullets: [
          '**3-year cliff:** 0% for 3 years, 100% after 3 years',
          '**6-year graded:** 20% per year starting year 2',
          '**SAFE harbor match:** Must be immediate or 2-year cliff max',
        ],
      },
      {
        id: 'forfeiture',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'What Happens to Forfeited Amounts',
        content: 'When you leave before being fully vested, unvested employer contributions are forfeited. This money typically:',
        bullets: [
          'Returns to the plan\'s forfeiture account',
          'Used to reduce employer\'s future contributions',
          'May pay plan administrative expenses',
          'Never goes to other employees\' accounts directly',
        ],
      },
      {
        id: 'calculate',
        icon: 'Calculator',
        iconColor: 'green',
        title: 'How to Calculate Your Vested Amount',
        content: 'Check your 401k statement or ask HR for:\n\n1. Your total balance\n2. Your contributions (always 100% vested)\n3. Employer contributions and vesting percentage',
        table: {
          headers: ['Source', 'Amount', 'Vested %', 'Yours to Keep'],
          rows: [
            ['Your contributions', '$30,000', '100%', '$30,000'],
            ['Employer match', '$15,000', '60%', '$9,000'],
            ['**Total**', '$45,000', '', '**$39,000**'],
          ],
        },
      },
      {
        id: 'decisions',
        icon: 'Scale',
        iconColor: 'blue',
        title: 'Should You Stay for Vesting?',
        content: 'Consider these factors when deciding whether to wait for vesting:',
        bullets: [
          '**Calculate the dollar amount:** Is $5k worth staying 6 months?',
          '**New job offer value:** Higher salary may outweigh unvested amount',
          '**Time to full vesting:** Months vs. years matters',
          '**Unhappy at work:** Mental health has value too',
          '**Cliff approaching:** If you\'re close to a cliff date, waiting may make sense',
        ],
      },
    ],

    warningBox: {
      title: 'Check Your Vesting BEFORE Giving Notice',
      content: 'If you\'re close to a vesting cliff (e.g., 2 years and 10 months into a 3-year cliff), waiting a few weeks could be worth thousands. Check your exact vesting date before making any decisions.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Protect Your Vested Portion',
      content: 'Once you leave, you can roll your vested 401k into a Gold IRA to protect it from market volatility.',
      bullets: [
        'Roll vested portion to Gold IRA tax-free',
        'Physical gold provides crash protection',
        'No more employer dependency for your retirement',
        'Same tax advantages as traditional IRA',
        'You control the investment choices',
      ],
    },

    faqs: [
      {
        question: 'What if I\'m laid off - do I still forfeit unvested amounts?',
        answer: 'Generally yes - involuntary termination is treated the same as resignation for vesting purposes. However, some plans have special provisions for layoffs or acquisitions. Check your Summary Plan Description or ask HR.',
      },
      {
        question: 'Do unvested amounts ever vest faster?',
        answer: 'Some plans provide accelerated vesting upon reaching retirement age, disability, or death. Company acquisitions sometimes trigger full vesting. Check your plan documents for specific provisions.',
      },
      {
        question: 'Can I take a loan against unvested amounts?',
        answer: 'No. 401k loans can only be taken against your vested balance. Unvested amounts aren\'t truly yours yet and cannot be borrowed against.',
      },
    ],

    relatedArticles: ['leaving-job-before-401k-vested', '401k-match-not-vested-yet-should-i-leave'],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/401k-risk-analyzer'],
  },

  'what-happens-to-my-401k-if-i-get-laid-off-at-58': {
    slug: 'what-happens-to-my-401k-if-i-get-laid-off-at-58',
    title: 'What Happens to Your 401k If You Get Laid Off at 58',
    subtitle: 'Losing your job close to retirement is terrifying. Here\'s what happens to your 401k and what to do.',

    metaTitle: 'Laid Off at 58? What Happens to Your 401k | Guide',
    metaDescription: 'Got laid off at 58? Learn what happens to your 401k, the Rule of 55 for penalty-free withdrawals, and how to protect your retirement.',
    keywords: ['laid off at 58', '401k layoff', 'rule of 55', 'laid off before retirement'],

    targetKeyword: 'what happens to my 401k if i get laid off at 58',

    category: 'life-events',
    threatLevel: 'warning',

    takeaways: [
      'Your 401k is still yours after a layoff - it doesn\'t disappear.',
      'The Rule of 55 allows penalty-free withdrawals if separated at 55+.',
      'You can leave it in the old plan, roll to IRA, or roll to new employer plan.',
      'Don\'t make emotional decisions - your 401k isn\'t an emergency fund.',
      'Being laid off at 58 may actually provide penalty-free access options.',
      'Consider this a forced opportunity to reassess your retirement strategy.',
    ],

    tocItems: [
      { id: 'yours', label: 'Your 401k Is Safe' },
      { id: 'rule55', label: 'The Rule of 55' },
      { id: 'options', label: 'Your Options' },
      { id: 'mistakes', label: 'Mistakes to Avoid' },
      { id: 'strategy', label: 'Strategic Moves' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'yours',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Your 401k Is Still Yours',
        content: 'First, breathe. Your 401k doesn\'t vanish when you lose your job. It\'s protected by federal law (ERISA) and held in a trust separate from your employer.\n\nWhat happens immediately: **Nothing.** Your investments stay invested. You have time to make decisions.',
        bullets: [
          'Your vested balance remains yours',
          'Investments continue as normal',
          'No immediate action required',
          'You have time to evaluate options',
        ],
      },
      {
        id: 'rule55',
        icon: 'Gift',
        iconColor: 'green',
        title: 'The Rule of 55: Your Secret Advantage',
        content: 'Being laid off at 58 actually unlocks a valuable option: **The Rule of 55.**\n\nIf you leave your employer in or after the year you turn 55, you can take withdrawals from THAT employer\'s 401k without the 10% early withdrawal penalty.',
        bullets: [
          'Must be separated from service in year you turn 55 or later',
          'Only applies to 401k from the employer you separated from',
          'Does NOT apply to IRAs or old 401ks',
          'Still owe income tax, just no 10% penalty',
          'Cannot roll to IRA if you want to use Rule of 55',
        ],
      },
      {
        id: 'options',
        icon: 'ArrowRight',
        iconColor: 'blue',
        title: 'Your 401k Options After Layoff',
        content: 'You have four main choices:',
        table: {
          headers: ['Option', 'Pros', 'Cons'],
          rows: [
            ['Leave in old plan', 'No action needed, Rule of 55 intact', 'Limited investment options, may have fees'],
            ['Roll to IRA', 'More investment options, consolidation', 'Lose Rule of 55, no loans'],
            ['Roll to new employer 401k', 'Loan option, some legal protections', 'Dependent on finding new job'],
            ['Cash out', 'Immediate access', 'Taxes + possible penalty, destroys retirement'],
          ],
        },
      },
      {
        id: 'mistakes',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Costly Mistakes to Avoid',
        content: 'The worst time to make financial decisions is when you\'re emotional. Avoid these common errors:',
        bullets: [
          '**Cashing out:** Loses 30-40% to taxes and penalties',
          '**Panic selling:** Locking in market losses',
          '**Forgetting Rule of 55:** Rolling to IRA loses this benefit',
          '**Taking too much:** Withdraw only what you need',
          '**Ignoring health insurance:** COBRA is expensive; factor this in',
        ],
      },
      {
        id: 'strategy',
        icon: 'Lightbulb',
        iconColor: 'amber',
        title: 'Strategic Moves to Consider',
        content: 'A layoff at 58 can be an opportunity to reassess:',
        bullets: [
          '**Roth conversion:** Lower income year = lower conversion taxes',
          '**Rebalancing:** Review if your allocation still matches your timeline',
          '**Diversification:** Is too much in company stock or one sector?',
          '**Gold IRA partial rollover:** Protect a portion from market volatility',
          '**Social Security planning:** Understand your options starting at 62',
        ],
      },
    ],

    warningBox: {
      title: 'Don\'t Touch Your 401k for Living Expenses (If Possible)',
      content: 'Unemployment benefits, severance, and emergency savings should cover expenses first. Your 401k is for retirement, not a layoff fund. Every dollar you withdraw now is a dollar that won\'t compound for the next 20+ years.',
      type: 'red',
    },

    goldBridge: {
      title: 'Use This Transition to Protect Your Retirement',
      content: 'A layoff can be a wake-up call about market vulnerability. Consider diversifying a portion into physical gold.',
      bullets: [
        'Roll a portion to a Gold IRA (keeps Rule of 55 if you roll to new 401k first)',
        'Physical gold provides crash protection as you near retirement',
        'Reduce exposure to employer-dependent retirement',
        'Tax-free rollover preserves your retirement value',
        'You control the assets regardless of employment',
      ],
    },

    faqs: [
      {
        question: 'Can I use my 401k to cover expenses while job hunting?',
        answer: 'If you\'re 55+, yes - through Rule of 55 penalty-free withdrawals (still taxable). However, this should be a last resort. Unemployment benefits, severance, and savings should come first. Every withdrawal reduces your retirement security.',
      },
      {
        question: 'What if I find a new job - can I still use Rule of 55?',
        answer: 'Rule of 55 only applies to the 401k of the employer you separated from. Once you roll funds to a new employer plan or IRA, you lose Rule of 55 access. Keep funds in the old plan if you want this flexibility.',
      },
      {
        question: 'Should I take a lump-sum severance or structured payout?',
        answer: 'This depends on your tax situation. A lump sum may push you into a higher bracket. Structured payments spread the tax hit. If you\'re planning Roth conversions, a lower-income year from structured payments might be advantageous.',
      },
    ],

    relatedArticles: ['what-happens-to-unvested-401k', 'what-happens-to-401k-loan-if-fired'],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/401k-risk-analyzer'],
  },

  'leaving-job-before-401k-vested': {
    slug: 'leaving-job-before-401k-vested',
    title: 'Leaving Your Job Before 401k Is Fully Vested: What You Need to Know',
    subtitle: 'Great opportunity but not fully vested? Here\'s how to calculate if leaving makes sense.',

    metaTitle: 'Leaving Job Before 401k Vested? Decision Guide | 2026',
    metaDescription: 'Thinking of leaving before your 401k is fully vested? Learn how to calculate what you\'ll forfeit and whether the new opportunity is worth it.',
    keywords: ['leaving job before vested', '401k vesting', 'forfeit 401k match', 'quit before vested'],

    targetKeyword: 'leaving job before 401k vested',

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Only employer contributions are at risk - your contributions are always yours.',
      'Calculate the exact dollar amount you\'d forfeit before deciding.',
      'Compare forfeited amount to the value of the new opportunity.',
      'Consider time to cliff dates - waiting a few months may be worth it.',
      'Some new employers offer signing bonuses that offset forfeiture.',
      'Don\'t let unvested amounts trap you in a bad job.',
    ],

    tocItems: [
      { id: 'calculate', label: 'Calculate Your Forfeiture' },
      { id: 'compare', label: 'Compare to New Opportunity' },
      { id: 'negotiate', label: 'Negotiate With New Employer' },
      { id: 'wait', label: 'When to Wait' },
      { id: 'leave', label: 'When to Leave Anyway' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'calculate',
        icon: 'Calculator',
        iconColor: 'blue',
        title: 'Calculate What You\'d Forfeit',
        content: 'Get your exact numbers:',
        bullets: [
          'Log into your 401k account or check your statement',
          'Find "vested balance" vs "total balance"',
          'The difference is what you\'d forfeit',
          'Include employer match AND profit sharing if applicable',
        ],
        table: {
          headers: ['Component', 'Total', 'Vested %', 'You Keep', 'You Forfeit'],
          rows: [
            ['Your contributions', '$25,000', '100%', '$25,000', '$0'],
            ['Employer match', '$10,000', '40%', '$4,000', '$6,000'],
            ['Profit sharing', '$5,000', '40%', '$2,000', '$3,000'],
            ['**Total**', '$40,000', '', '$31,000', '**$9,000**'],
          ],
        },
      },
      {
        id: 'compare',
        icon: 'Scale',
        iconColor: 'amber',
        title: 'Compare to New Opportunity Value',
        content: 'Calculate the financial value of the new job:',
        bullets: [
          '**Salary increase:** $10k/year more = $10k in first year alone',
          '**Signing bonus:** Some employers offer these specifically for this situation',
          '**Better 401k match:** Higher match may offset forfeiture over time',
          '**Career growth:** Promotions and raises over 5 years',
          '**Stock options/RSUs:** Equity can be significant',
        ],
      },
      {
        id: 'negotiate',
        icon: 'Handshake',
        iconColor: 'green',
        title: 'Negotiate a Forfeiture Offset',
        content: 'Many employers will help make you whole:',
        bullets: [
          '**Ask directly:** "I\'m forfeiting $X in unvested 401k - can you help offset that?"',
          '**Signing bonus:** Request a bonus equal to forfeiture',
          '**Higher starting salary:** Even 2-3% bump may exceed forfeiture value',
          '**Accelerated vesting:** Some employers offer faster vesting for new hires',
          '**This is normal:** Employers expect this negotiation from experienced candidates',
        ],
      },
      {
        id: 'wait',
        icon: 'Clock',
        iconColor: 'blue',
        title: 'When Waiting Makes Sense',
        content: 'Consider staying if:',
        bullets: [
          'Cliff vesting date is within 2-3 months',
          'Forfeiture is a significant amount ($10k+)',
          'New employer can wait or will still hire you later',
          'You\'re not actively miserable at current job',
          'End-of-year bonus is also approaching',
        ],
      },
      {
        id: 'leave',
        icon: 'DoorOpen',
        iconColor: 'green',
        title: 'When to Leave Anyway',
        content: 'Don\'t let unvested amounts trap you:',
        bullets: [
          'Toxic work environment affecting your health',
          'New opportunity has significant career advancement',
          'Forfeiture is small relative to new salary increase',
          'Current company is unstable (layoffs, declining business)',
          'You\'ve been waiting for a cliff date that keeps moving',
        ],
      },
    ],

    warningBox: {
      title: 'Golden Handcuffs Are Real - But Don\'t Let Them Control You',
      content: 'Unvested 401k is a form of "golden handcuffs." Employers design vesting schedules to encourage retention. Be aware of this dynamic, but don\'t let $5,000 keep you in a job worth $15,000 less annually.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Roll Your Vested Amount to a Gold IRA',
      content: 'When you leave, protect the vested portion you\'ve earned.',
      bullets: [
        'Roll vested 401k balance to Gold IRA',
        'Physical gold protects against market volatility',
        'You control your retirement, not your employer',
        'Tax-free rollover (no taxes or penalties)',
        'Start fresh at new job with diversified retirement',
      ],
    },

    faqs: [
      {
        question: 'Can I negotiate to vest immediately before leaving?',
        answer: 'Generally no - vesting schedules are set by the plan document and can\'t be changed for individuals. However, some plans have provisions for accelerated vesting in specific situations (acquisition, retirement, etc.). Check your Summary Plan Description.',
      },
      {
        question: 'What happens to the unvested amount I forfeit?',
        answer: 'Forfeited amounts typically go into a plan forfeiture account. The employer can use these funds to reduce their future contributions, pay plan administrative expenses, or allocate to remaining participants. They don\'t go to your manager or anyone specific.',
      },
      {
        question: 'If I come back to the same employer, do I get my unvested amounts back?',
        answer: 'It depends on the plan and how long you were gone. Many plans have "service bridging" rules where if you return within a certain period (often 5 years), your prior service counts and you may recover forfeited amounts. Check with HR.',
      },
    ],

    relatedArticles: ['what-happens-to-unvested-401k', '401k-match-not-vested-yet-should-i-leave'],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/401k-risk-analyzer'],
  },

  '401k-match-not-vested-yet-should-i-leave': {
    slug: '401k-match-not-vested-yet-should-i-leave',
    title: '401k Match Not Vested Yet - Should I Still Leave?',
    subtitle: 'You have an opportunity but your match isn\'t vested. Here\'s how to decide.',

    metaTitle: '401k Match Not Vested - Should You Leave? Decision Framework',
    metaDescription: 'Your 401k match isn\'t vested yet but you want to leave. Learn how to calculate if staying is worth it or if you should take the new opportunity.',
    keywords: ['401k match not vested', 'should i leave', 'unvested 401k match', 'wait for vesting'],

    targetKeyword: '401k match not vested yet should i leave',

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Calculate the exact dollar amount of unvested match you\'d forfeit.',
      'Compare to salary increase and career benefits of new opportunity.',
      'Consider asking new employer for a signing bonus to offset forfeiture.',
      'Don\'t stay in a bad job just for unvested money.',
      'If cliff date is within 3 months, it may be worth waiting.',
      'Your contributions are always 100% yours regardless.',
    ],

    tocItems: [
      { id: 'math', label: 'Do the Math' },
      { id: 'opportunity', label: 'Value the Opportunity' },
      { id: 'decision', label: 'Decision Framework' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'math',
        icon: 'Calculator',
        iconColor: 'blue',
        title: 'Step 1: Calculate What\'s Actually at Stake',
        content: 'Log into your 401k and find:',
        bullets: [
          'Total employer match contributed',
          'Your vested percentage',
          'Amount you\'d forfeit = Total × (100% - Vested%)',
          'Example: $8,000 match × (100% - 60% vested) = $3,200 at risk',
        ],
      },
      {
        id: 'opportunity',
        icon: 'TrendingUp',
        iconColor: 'green',
        title: 'Step 2: Value the New Opportunity',
        content: 'Consider the full picture:',
        bullets: [
          'Salary increase (annual value)',
          'Better 401k match at new company?',
          'Career advancement potential',
          'Work-life balance improvements',
          'Stock options, bonuses, benefits',
        ],
      },
      {
        id: 'decision',
        icon: 'CheckCircle',
        iconColor: 'amber',
        title: 'Decision Framework',
        content: 'Use this simple test:',
        bullets: [
          '**Forfeiture < 1 month salary increase:** Leave immediately',
          '**Forfeiture = 1-3 months salary:** Consider timing or negotiating offset',
          '**Forfeiture > 3 months salary:** Carefully weigh all factors',
          '**Cliff date < 3 months away:** Probably worth waiting',
          '**Miserable at current job:** Your health > any amount of money',
        ],
      },
    ],

    goldBridge: {
      title: 'Start Fresh With a Protected Rollover',
      content: 'Whatever you decide, roll your vested balance to a Gold IRA for diversified protection.',
      bullets: [
        'Tax-free rollover of vested amounts',
        'Physical gold protects your life\'s savings',
        'No employer dependency for your retirement',
        'Consolidate old 401ks in one protected account',
      ],
    },

    faqs: [
      {
        question: 'Can I negotiate a later start date to hit my vesting cliff?',
        answer: 'Yes! Most employers are flexible on start dates, especially for experienced hires. If your cliff is 6 weeks away, ask if you can start after that date. Frame it honestly - most employers understand.',
      },
      {
        question: 'Should I mention unvested 401k when negotiating?',
        answer: 'Absolutely. It\'s a legitimate negotiating point. "I\'m walking away from $X in unvested retirement benefits to join your team. Can we discuss a signing bonus or salary adjustment to help offset that?" This is standard practice.',
      },
    ],

    relatedArticles: ['leaving-job-before-401k-vested', 'what-happens-to-unvested-401k'],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/401k-risk-analyzer'],
  },

  'what-to-do-with-spouses-401k-after-death': {
    slug: 'what-to-do-with-spouses-401k-after-death',
    title: 'What to Do With Your Spouse\'s 401k After Death',
    subtitle: 'Losing your spouse is devastating. Here\'s how to handle their retirement account.',

    metaTitle: 'Spouse\'s 401k After Death: Your Options Explained | 2026',
    metaDescription: 'What to do with your spouse\'s 401k after they pass away. Learn your options as a surviving spouse, tax implications, and the best choice for your situation.',
    keywords: ['spouse 401k after death', 'inherited 401k spouse', 'surviving spouse 401k', 'deceased spouse retirement'],

    targetKeyword: 'what to do with spouses 401k after death',

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'As a surviving spouse, you have more options than other beneficiaries.',
      'You can roll it into your own IRA (spousal rollover) - most common choice.',
      'You can keep it as an inherited IRA and take distributions based on your age.',
      'You can cash it out, but you\'ll owe income tax (and possibly penalty if under 59½).',
      'There\'s no rush - take time to grieve before making financial decisions.',
      'The 10-year rule does NOT apply to surviving spouses.',
    ],

    tocItems: [
      { id: 'options', label: 'Your Options' },
      { id: 'spousal', label: 'Spousal Rollover' },
      { id: 'inherited', label: 'Keep as Inherited' },
      { id: 'cashout', label: 'Cashing Out' },
      { id: 'wait', label: 'Take Your Time' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'options',
        icon: 'List',
        iconColor: 'blue',
        title: 'Your Options as Surviving Spouse',
        content: 'Surviving spouses have the most flexibility of any beneficiary:',
        table: {
          headers: ['Option', 'Best For', 'RMD Rules'],
          rows: [
            ['Spousal rollover to your IRA', 'If you\'re under 59½ and don\'t need funds', 'Your age-based RMDs'],
            ['Keep as inherited 401k', 'If you need access before 59½', 'Spouse\'s age-based or yours'],
            ['Keep in spouse\'s 401k', 'Temporary while deciding', 'Depends on plan'],
            ['Cash out', 'If you need funds immediately', 'N/A - all taxable now'],
          ],
        },
      },
      {
        id: 'spousal',
        icon: 'ArrowRight',
        iconColor: 'green',
        title: 'Spousal Rollover (Most Common)',
        content: 'Roll the 401k into your own Traditional IRA or Roth IRA:',
        bullets: [
          '**Treat it as your own:** Follows your RMD schedule, not theirs',
          '**No 10-year rule:** You\'re exempt as surviving spouse',
          '**Roth option:** Can roll to Roth (pay taxes now, tax-free later)',
          '**Caution if under 59½:** Early withdrawals from your IRA face 10% penalty',
        ],
      },
      {
        id: 'inherited',
        icon: 'Inbox',
        iconColor: 'amber',
        title: 'Keep as Inherited 401k/IRA',
        content: 'This option preserves access flexibility:',
        bullets: [
          '**No 10% penalty:** Withdrawals aren\'t subject to early withdrawal penalty',
          '**Useful if under 59½:** Access funds without penalty while grieving/adjusting',
          '**Can convert to spousal rollover later:** Switch when you turn 59½',
          '**RMD flexibility:** Use spouse\'s age or yours, depending on situation',
        ],
      },
      {
        id: 'cashout',
        icon: 'DollarSign',
        iconColor: 'red',
        title: 'Cashing Out',
        content: 'Taking a lump-sum distribution:',
        bullets: [
          '**Fully taxable:** Entire amount is ordinary income',
          '**Potential bracket spike:** Large amount may push you into higher brackets',
          '**No 10% penalty:** Death distribution exempts from early withdrawal penalty',
          '**Generally not recommended:** Loses tax-deferred growth forever',
        ],
      },
      {
        id: 'wait',
        icon: 'Clock',
        iconColor: 'blue',
        title: 'There\'s No Rush',
        content: 'Important: You don\'t need to decide immediately.',
        bullets: [
          'Leave the account where it is while you grieve',
          'Most 401k plans allow surviving spouses to delay decisions',
          'Consult a financial advisor before acting',
          'Avoid salespeople who pressure immediate decisions',
          'The money will be there when you\'re ready',
        ],
      },
    ],

    warningBox: {
      title: 'Beware of Vultures',
      content: 'Unfortunately, some financial salespeople target grieving widows/widowers. Don\'t make major financial decisions while in acute grief. Anyone pressuring you to act immediately does not have your best interest at heart.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Consider Protection for Your Combined Retirement',
      content: 'After consolidating accounts, consider diversifying into physical gold.',
      bullets: [
        'Roll spouse\'s 401k + yours into single Gold IRA',
        'Physical gold provides stability during difficult times',
        'Protect your combined retirement from market volatility',
        'Simplify management with one protected account',
        'No stock market dependence for your security',
      ],
    },

    faqs: [
      {
        question: 'Do I have to take RMDs from my deceased spouse\'s 401k?',
        answer: 'It depends on the option you choose and your/their ages. If you do a spousal rollover, RMDs follow your age. If you keep it as inherited, rules vary. If your spouse was already taking RMDs, their year-of-death RMD must be taken.',
      },
      {
        question: 'What if my spouse had both a 401k and an IRA?',
        answer: 'You\'ll handle each account separately, but the same options apply to both. You can roll both into your own IRA if that makes sense for simplification.',
      },
      {
        question: 'What about Roth 401k - different rules?',
        answer: 'For inherited Roth 401k, surviving spouses still have the spousal rollover option. The key difference: Roth distributions are tax-free (assuming 5-year rule met). A spousal rollover to your Roth IRA continues tax-free growth.',
      },
    ],

    relatedArticles: ['what-happens-to-401k-in-divorce-at-60', 'ex-spouse-401k-rights-after-divorce'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/rmd-calculator'],
  },
};
