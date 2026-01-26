// src/data/learn-articles/enrollment-cluster.ts
// P1-014: Enrollment & HR Issues cluster
// Keywords: HR not depositing 401k, company match not appearing, etc.

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const enrollmentArticles: LearnArticleRegistry = {
  'hr-not-depositing-401k': {
    slug: 'hr-not-depositing-401k',
    title: 'HR Not Depositing My 401k: What to Do If Contributions Are Missing',
    subtitle: 'Money is being deducted from your paycheck but not appearing in your 401k. This is serious—here\'s how to fix it.',
    metaTitle: 'HR Not Depositing 401k? Missing Contributions: What to Do (2025)',
    metaDescription: 'Is your employer not depositing 401k contributions? Learn why this happens, your legal rights, and steps to recover missing retirement money.',
    keywords: [
      'HR not depositing 401k',
      '401k contributions not deposited',
      'employer not putting money in 401k',
      '401k deducted but not deposited',
      'missing 401k contributions'
    ],
    targetKeyword: 'hr not depositing 401k',
    volume: 30,
    difficulty: 15,
    category: 'enrollment',
    threatLevel: 'critical',
    takeaways: [
      'Missing 401k deposits are a violation of federal law (ERISA)',
      'Employers must deposit contributions within 7 business days for small plans',
      'Large plans (100+ participants) have even shorter deadlines',
      'Document everything: Pay stubs, 401k statements, correspondence',
      'Start with HR, then escalate to plan administrator, then DOL',
      'You may be entitled to lost earnings on delayed contributions'
    ],
    tocItems: [
      { id: 'verify', label: 'Verify the Problem' },
      { id: 'why-happens', label: 'Why This Happens' },
      { id: 'legal-requirements', label: 'Legal Requirements' },
      { id: 'action-steps', label: 'Action Steps' },
      { id: 'if-employer-insolvent', label: 'If Employer Is Insolvent' },
      { id: 'gold-ira-bridge', label: 'Protect Your Contributions' }
    ],
    sections: [
      {
        id: 'verify',
        icon: 'Search',
        iconColor: 'blue',
        title: 'First: Verify There\'s Actually a Problem',
        content: 'Before assuming the worst, check these common issues:',
        bullets: [
          'Check timing: Deposits can take 7-15 business days to appear',
          'Verify pay stubs: Was the deduction actually taken?',
          'Check the right account: Some plans have separate holding accounts',
          'Review vesting schedule: Match may be there but not yet "vested"',
          'Look for employer match separately: Often shows as different line item',
          'Compare multiple pay periods: One-time glitch vs ongoing problem'
        ]
      },
      {
        id: 'why-happens',
        icon: 'HelpCircle',
        iconColor: 'amber',
        title: 'Why This Happens',
        content: 'Missing 401k deposits usually fall into these categories:',
        bullets: [
          'Administrative error: Paperwork mistake, system glitch, new employee setup',
          'Cash flow problems: Company using employee money for operations (illegal)',
          'Payroll processing delays: Third-party payroll taking too long',
          'Plan administrator issues: Problems on the receiving end',
          'Deliberate misuse: Employer theft of retirement funds (rare but serious)',
          'Company financial distress: Often an early warning sign'
        ]
      },
      {
        id: 'legal-requirements',
        icon: 'Scale',
        iconColor: 'purple',
        title: 'What the Law Requires',
        content: 'Under ERISA (Employee Retirement Income Security Act), employers must:',
        bullets: [
          'Deposit contributions "as soon as reasonably possible"',
          'Small plans (under 100): Within 7 business days',
          'Large plans (100+): Even shorter—must be deposited promptly',
          'Cannot use employee contributions for company purposes—ever',
          'Must make you whole for any lost earnings on late deposits',
          'Failure to comply is a breach of fiduciary duty'
        ]
      },
      {
        id: 'action-steps',
        icon: 'ListChecks',
        iconColor: 'green',
        title: 'Action Steps: How to Fix This',
        content: 'Follow this escalation path:',
        bullets: [
          '1. Document everything: Pay stubs, 401k statements, dates, amounts',
          '2. Contact HR in writing: Email creates a paper trail',
          '3. Request written explanation: When will deposits be made?',
          '4. Contact plan administrator: The company that manages your 401k',
          '5. File DOL complaint: If not resolved within 2-3 pay periods',
          '6. Consult ERISA attorney: For persistent or large amounts'
        ],
        table: {
          headers: ['Contact', 'When', 'How'],
          rows: [
            ['HR/Benefits', 'First step', 'Email + follow-up call'],
            ['Plan Administrator', 'If HR unhelpful', 'Number on 401k statement'],
            ['Department of Labor', 'After 2-3 weeks no resolution', 'Online complaint form'],
            ['ERISA Attorney', 'If significant amount or pattern', 'Free consultation']
          ]
        }
      },
      {
        id: 'if-employer-insolvent',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'What If Your Employer Is Insolvent?',
        content: 'If your company is in financial trouble, your 401k contributions become a priority creditor claim:',
        bullets: [
          'Your contributions are held in trust—not company assets',
          'ERISA provides strong protections for employee contributions',
          'Employer match is company money—less protected in bankruptcy',
          'File DOL complaint immediately if you suspect financial distress',
          'Join any class action lawsuits for recovery',
          'Your contributed money is likely recoverable; match may not be'
        ]
      }
    ],
    warningBox: {
      title: 'This Is Serious',
      content: 'An employer using your 401k contributions for company cash flow is not just an error—it\'s potentially a federal crime. If HR is evasive or you see a pattern of missing deposits, escalate quickly. You have strong legal protections, but you need to act.',
      type: 'red'
    },
    goldBridge: {
      title: 'Take Control of Your Retirement',
      content: 'When employers mishandle your 401k contributions, it highlights the importance of controlling your own retirement assets. Consider:',
      bullets: [
        'Rolling over old 401ks to a Gold IRA you control',
        'Diversifying beyond employer-controlled accounts',
        'Physical gold that can\'t be "not deposited"',
        'Direct ownership with transparent custodian',
        'No dependence on employer\'s financial health'
      ]
    },
    faqs: [
      {
        question: 'How long should 401k deposits take?',
        answer: 'Legally, "as soon as reasonably possible" but no later than 7 business days for small plans. In practice, most contributions should appear within 1-2 pay periods. Longer delays warrant investigation.'
      },
      {
        question: 'Can I get back money my employer didn\'t deposit?',
        answer: 'Yes. Under ERISA, you\'re entitled to both the principal amount AND any earnings you would have made on that money. The DOL can help recover both.'
      },
      {
        question: 'Should I stop contributing if deposits are missing?',
        answer: 'Don\'t stop yet—document the problem first. Stopping contributions means losing employer match if it\'s being deposited. Focus on fixing the issue while continuing to build evidence.'
      }
    ],
    relatedArticles: [
      'company-match-not-showing',
      '401k-not-offered-at-work'
    ],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator']
  },

  'company-match-not-showing': {
    slug: 'company-match-not-showing',
    title: 'Why Isn\'t My Company 401k Match Showing Up?',
    subtitle: 'You\'re contributing but the match isn\'t there. Before you panic, check these common reasons.',
    metaTitle: 'Company 401k Match Not Showing? 7 Reasons & Fixes (2025)',
    metaDescription: 'Is your employer 401k match missing? Learn the 7 most common reasons your company match isn\'t appearing and how to fix each situation.',
    keywords: [
      'company match not showing',
      '401k match not appearing',
      'where is my employer match',
      '401k match missing',
      'employer not matching 401k'
    ],
    targetKeyword: 'company match not showing',
    volume: 25,
    difficulty: 12,
    category: 'enrollment',
    threatLevel: 'warning',
    takeaways: [
      'Most missing match issues have simple explanations',
      'Eligibility requirements (hours, tenure) are the most common reason',
      'Vesting schedules make match appear "locked" but it\'s still there',
      'True matching is often deposited quarterly or annually, not each paycheck',
      'Some plans have complex formulas that aren\'t 1:1 matching',
      'If truly missing, document and escalate to HR'
    ],
    tocItems: [
      { id: 'common-reasons', label: 'Common Reasons' },
      { id: 'eligibility', label: 'Eligibility Requirements' },
      { id: 'timing', label: 'Timing Issues' },
      { id: 'vesting', label: 'Vesting vs. Missing' },
      { id: 'how-to-check', label: 'How to Check' },
      { id: 'gold-ira-bridge', label: 'Maximize Your Match' }
    ],
    sections: [
      {
        id: 'common-reasons',
        icon: 'List',
        iconColor: 'blue',
        title: '7 Common Reasons Your Match Isn\'t Showing',
        content: 'Before assuming there\'s a problem, check these possibilities:',
        bullets: [
          '1. You haven\'t met eligibility requirements yet',
          '2. Match is deposited less frequently than your contributions',
          '3. Match is there but showing as "unvested"',
          '4. You haven\'t contributed enough to earn full match',
          '5. Plan uses "true-up" matching (annual adjustment)',
          '6. You exceeded IRS contribution limits',
          '7. Administrative delay or error (least common)'
        ]
      },
      {
        id: 'eligibility',
        icon: 'ClipboardCheck',
        iconColor: 'amber',
        title: 'Eligibility Requirements to Check',
        content: 'Many 401k plans require you to meet certain criteria before receiving the match:',
        table: {
          headers: ['Requirement', 'Common Rule', 'Example'],
          rows: [
            ['Employment length', '1 year of service', 'No match until anniversary'],
            ['Hours worked', '1,000 hours/year', 'Part-time may not qualify'],
            ['Age requirement', 'Age 21', 'Young workers excluded'],
            ['Employee type', 'Full-time only', 'Contractors don\'t get match'],
            ['Entry dates', 'Jan 1 or July 1', 'May need to wait for entry date']
          ]
        }
      },
      {
        id: 'timing',
        icon: 'Clock',
        iconColor: 'purple',
        title: 'Timing: When Matches Are Deposited',
        content: 'Employer matches don\'t always come with each paycheck:',
        bullets: [
          'Per paycheck: Match deposited with each contribution (most common)',
          'Quarterly: Match deposited at end of each quarter',
          'Annually: Match deposited once per year (watch for this)',
          'True-up: Annual adjustment to ensure full match is received',
          'Check your Summary Plan Description for your plan\'s schedule',
          'Quarterly/annual matching saves employer administrative costs'
        ]
      },
      {
        id: 'vesting',
        icon: 'Lock',
        iconColor: 'red',
        title: 'Vesting: It\'s There But Not Yours Yet',
        content: 'Your match may be deposited but not fully "vested" (owned by you):',
        bullets: [
          'Cliff vesting: 0% vested until a date, then 100%',
          'Graded vesting: 20% per year over 5-6 years typically',
          'Unvested match may show as separate line item',
          'You only keep vested portion if you leave the company',
          'Your OWN contributions are always 100% vested immediately',
          'Check your vesting schedule in plan documents'
        ],
        table: {
          headers: ['Years of Service', 'Cliff (3-year)', 'Graded (6-year)'],
          rows: [
            ['1 year', '0%', '0%'],
            ['2 years', '0%', '20%'],
            ['3 years', '100%', '40%'],
            ['4 years', '100%', '60%'],
            ['5 years', '100%', '80%'],
            ['6 years', '100%', '100%']
          ]
        }
      },
      {
        id: 'how-to-check',
        icon: 'Search',
        iconColor: 'green',
        title: 'How to Verify Your Match',
        content: 'Take these steps to investigate:',
        bullets: [
          '1. Log into your 401k account and check "contribution source"',
          '2. Look for "employer" or "match" as separate line items',
          '3. Check if unvested amounts are listed separately',
          '4. Read your Summary Plan Description (SPD) for match rules',
          '5. Compare your contribution rate to match formula',
          '6. Contact HR benefits team if still unclear'
        ]
      }
    ],
    warningBox: {
      title: 'The "True-Up" Trap',
      content: 'Some plans use "true-up" matching where they adjust at year-end. If you front-loaded your contributions and hit the limit early, you may not get match for later months. True-up catches this, but only once per year.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Capture Your Match, Then Diversify',
      content: 'The employer match is free money—always contribute enough to get the full match. After that, consider diversifying:',
      bullets: [
        'Contribute enough for full employer match (essential)',
        'Additional savings can go to Gold IRA for diversification',
        'Gold IRA gives you control over investments',
        'Rollover old 401ks to Gold IRA when leaving employers',
        'Physical gold as hedge against market volatility'
      ]
    },
    faqs: [
      {
        question: 'How much should I contribute to get the full match?',
        answer: 'It depends on your plan\'s formula. Common matches: 50% of first 6% (you need to contribute 6% to get 3% match), or dollar-for-dollar up to 3-4%. Read your SPD or ask HR for your specific formula.'
      },
      {
        question: 'What happens to unvested match if I leave?',
        answer: 'You forfeit unvested employer match when you leave. The money goes back to the plan and may be used to reduce employer contributions or pay plan expenses. Only your vested portion transfers with you.'
      },
      {
        question: 'Can my employer change the match formula?',
        answer: 'Yes, employers can change match formulas for future contributions (not retroactively). During economic downturns, some companies reduce or suspend matching. They must notify you of changes.'
      }
    ],
    relatedArticles: [
      'hr-not-depositing-401k',
      'what-happens-to-unvested-401k'
    ],
    relatedGuides: ['/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator']
  },

  '401k-not-offered-at-work': {
    slug: '401k-not-offered-at-work',
    title: 'No 401k at Work? Your Retirement Savings Alternatives',
    subtitle: 'Your employer doesn\'t offer a 401k. Here are the best ways to still save for retirement with tax advantages.',
    metaTitle: 'No 401k at Work? Best Retirement Alternatives for 2025',
    metaDescription: 'Employer doesn\'t offer a 401k? Learn about IRAs, Solo 401k, SEP IRA, and other tax-advantaged retirement options for workers without workplace plans.',
    keywords: [
      '401k not offered at work',
      'no 401k at job',
      'employer no 401k',
      '401k alternative',
      'retirement without 401k'
    ],
    targetKeyword: '401k not offered at work',
    volume: 35,
    difficulty: 20,
    category: 'enrollment',
    threatLevel: 'info',
    takeaways: [
      'No 401k at work? You still have excellent tax-advantaged options',
      'IRAs (Traditional and Roth) let you save $7,000/year ($8,000 if 50+)',
      'Self-employed? Solo 401k lets you save up to $69,000/year',
      'HSA offers triple tax advantage if you have high-deductible health plan',
      'Taxable brokerage is unlimited—no contribution caps',
      'Gold IRA provides both tax advantages and diversification'
    ],
    tocItems: [
      { id: 'options', label: 'Your Options' },
      { id: 'ira-explained', label: 'Traditional & Roth IRA' },
      { id: 'self-employed', label: 'Self-Employed Options' },
      { id: 'hsa', label: 'HSA Strategy' },
      { id: 'taxable', label: 'Taxable Accounts' },
      { id: 'gold-ira-bridge', label: 'Gold IRA Option' }
    ],
    sections: [
      {
        id: 'options',
        icon: 'List',
        iconColor: 'blue',
        title: 'All Your Retirement Account Options',
        content: 'Without a 401k, you have these tax-advantaged alternatives:',
        table: {
          headers: ['Account Type', '2025 Limit', 'Who Can Use'],
          rows: [
            ['Traditional IRA', '$7,000 ($8,000 if 50+)', 'Anyone with earned income'],
            ['Roth IRA', '$7,000 ($8,000 if 50+)', 'Income under $161k (single)'],
            ['Solo 401k', '$69,000 ($76,500 if 50+)', 'Self-employed/business owners'],
            ['SEP IRA', '25% of income up to $69,000', 'Self-employed/small business'],
            ['SIMPLE IRA', '$16,500 ($20,000 if 50+)', 'Small employers'],
            ['HSA', '$4,150 single ($8,550 family)', 'HDHP participants'],
            ['Gold IRA', 'Same as Traditional/Roth IRA', 'Anyone with IRA eligibility']
          ]
        }
      },
      {
        id: 'ira-explained',
        icon: 'PiggyBank',
        iconColor: 'green',
        title: 'Traditional & Roth IRA Explained',
        content: 'IRAs are available to everyone with earned income:',
        bullets: [
          'Traditional IRA: Tax deduction now, taxed at withdrawal',
          'Roth IRA: No deduction, but tax-free withdrawals',
          'Contribution limit: $7,000/year ($8,000 if 50+)',
          'Can contribute to both types, but shared limit',
          'Roth IRA has income limits ($161k single, $240k married)',
          'Traditional IRA deduction may be limited if spouse has 401k'
        ]
      },
      {
        id: 'self-employed',
        icon: 'Briefcase',
        iconColor: 'purple',
        title: 'Self-Employed? You Have Better Options',
        content: 'If you have any self-employment income, you can access these accounts:',
        bullets: [
          'Solo 401k: Up to $69,000/year with employee + employer contributions',
          'SEP IRA: 25% of net self-employment income, up to $69,000',
          'SIMPLE IRA: $16,500 ($20,000 if 50+) + optional employer match to yourself',
          'Can be combined with regular W-2 income',
          'Side hustles, consulting, freelance all count',
          'Solo 401k often better than SEP for catch-up contributions'
        ],
        table: {
          headers: ['Self-Employment Income', 'Solo 401k Max', 'SEP IRA Max'],
          rows: [
            ['$30,000', '$27,000', '$5,573'],
            ['$50,000', '$36,000', '$9,294'],
            ['$100,000', '$49,000', '$18,587'],
            ['$200,000', '$69,000', '$37,175'],
            ['$300,000+', '$69,000', '$69,000']
          ]
        }
      },
      {
        id: 'hsa',
        icon: 'Heart',
        iconColor: 'red',
        title: 'HSA: The Triple Tax Advantage',
        content: 'If you have a high-deductible health plan, an HSA is a hidden retirement tool:',
        bullets: [
          'Tax deduction on contributions',
          'Tax-free growth',
          'Tax-free withdrawals for medical expenses',
          'After age 65, withdrawals for any purpose (taxed like IRA)',
          'No "use it or lose it"—rolls over forever',
          '2025 limits: $4,150 single, $8,550 family + $1,000 catch-up if 55+'
        ]
      },
      {
        id: 'taxable',
        icon: 'Wallet',
        iconColor: 'amber',
        title: 'Taxable Brokerage Account Strategy',
        content: 'After maxing tax-advantaged accounts, taxable accounts offer unlimited savings:',
        bullets: [
          'No contribution limits',
          'Full control over investments and timing',
          'Long-term capital gains taxed at 0-20% (better than income rates)',
          'Tax-loss harvesting opportunities',
          'No penalties for early withdrawal',
          'Combine with tax-advantaged accounts for complete strategy'
        ]
      }
    ],
    warningBox: {
      title: 'Advocate for a 401k',
      content: 'Under SECURE 2.0, starting in 2025, employers with 10+ employees who\'ve been in business 3+ years must offer automatic enrollment retirement plans. Ask HR about whether your company is required to offer a retirement plan.',
      type: 'blue'
    },
    goldBridge: {
      title: 'Gold IRA: Your Controlled Retirement Account',
      content: 'A Gold IRA gives you the tax advantages of an IRA with the protection of physical precious metals:',
      bullets: [
        'Same contribution limits as Traditional/Roth IRA',
        'Diversification into physical gold, silver, platinum',
        'You choose the custodian—no employer involvement',
        'Protection from market volatility',
        'Can roll over other retirement accounts when available'
      ]
    },
    faqs: [
      {
        question: 'Can I contribute to an IRA if I have a 401k at another job?',
        answer: 'Yes! Having a 401k doesn\'t prevent IRA contributions. However, if you\'re covered by a 401k and your income is high, your Traditional IRA deduction may be limited. Roth IRA has its own income limits.'
      },
      {
        question: 'What if I have both W-2 and self-employment income?',
        answer: 'You can contribute to both your employer\'s 401k (if offered) and a Solo 401k for self-employment. But total employee contributions across all plans are limited to $23,500 ($31,000 if 50+).'
      },
      {
        question: 'Should I ask my employer to start a 401k?',
        answer: 'Yes! Small business 401k plans have become more affordable. Tax credits under SECURE 2.0 cover up to 100% of startup costs for small employers. Presenting this information to your employer could benefit everyone.'
      }
    ],
    relatedArticles: [
      'hr-not-depositing-401k',
      'am-i-on-track-for-retirement-at-50'
    ],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/retirement-calculator']
  }
};
