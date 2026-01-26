// src/data/learn-articles/rmd-cluster.ts
// P1-007: RMD & Inherited IRA cluster - Older audience = highest value

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const rmdArticles: LearnArticleRegistry = {
  'can-i-reinvest-my-rmd': {
    slug: 'can-i-reinvest-my-rmd',
    title: 'Can I Reinvest My RMD? What Wealthy Retirees Do Instead',
    subtitle: 'You have to take the distribution - but that doesn\'t mean the money has to sit idle.',

    metaTitle: 'Can I Reinvest My RMD? Strategies for Required Distributions | 2026',
    metaDescription: 'Can you reinvest your Required Minimum Distribution? Learn the rules, tax implications, and what wealthy retirees do with their RMDs.',
    keywords: ['can i reinvest my rmd', 'reinvest rmd', 'what to do with rmd', 'rmd reinvestment'],

    targetKeyword: 'can i reinvest my rmd',
    volume: 90,
    difficulty: 1,

    category: 'rmd',
    threatLevel: 'info',

    takeaways: [
      'You CANNOT reinvest your RMD back into the same IRA - that would violate contribution limits.',
      'You CAN invest your RMD in a taxable brokerage account after taking the distribution.',
      'The RMD is taxable income - you\'ll owe income tax regardless of what you do with the money.',
      'Wealthy retirees often reinvest RMDs into assets that provide tax advantages or growth.',
      'Roth IRAs have no RMDs - converting before 73 eliminates forced distributions.',
      'Gold and other hard assets can be purchased with RMD funds in taxable accounts.',
    ],

    tocItems: [
      { id: 'answer', label: 'The Direct Answer' },
      { id: 'rules', label: 'RMD Rules Explained' },
      { id: 'options', label: 'What You Can Do' },
      { id: 'wealthy', label: 'What Wealthy Retirees Do' },
      { id: 'avoid', label: 'How to Avoid RMDs' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'answer',
        icon: 'AlertCircle',
        iconColor: 'amber',
        title: 'Can You Reinvest Your RMD? Not Into Your IRA',
        content: '**Short answer:** You cannot put your RMD back into the same IRA or any IRA.\n\nWhy? The IRS requires you to take money OUT of tax-advantaged accounts after age 73. If you could just reinvest it, you\'d never actually take the distribution. That defeats the purpose.\n\n**However:** You CAN invest the money elsewhere after you receive it.',
      },
      {
        id: 'rules',
        icon: 'FileText',
        iconColor: 'blue',
        title: 'How RMDs Actually Work',
        content: 'Required Minimum Distributions force you to withdraw from traditional IRAs and 401ks starting at age 73 (75 if born 1960+).',
        bullets: [
          'RMD amount is based on your account balance and IRS life expectancy tables',
          'You must take the full RMD each year - no exceptions',
          'The RMD is taxable as ordinary income',
          'Failure to take RMD: 25% penalty on the amount not withdrawn',
          'You can take MORE than the RMD - but not less',
        ],
        table: {
          headers: ['Age', 'Life Expectancy Factor', 'RMD % of Balance'],
          rows: [
            ['73', '26.5', '3.77%'],
            ['75', '24.6', '4.07%'],
            ['80', '20.2', '4.95%'],
            ['85', '16.0', '6.25%'],
            ['90', '12.2', '8.20%'],
          ],
        },
      },
      {
        id: 'options',
        icon: 'ArrowRight',
        iconColor: 'green',
        title: 'What You CAN Do With Your RMD',
        content: 'Once you receive your RMD, you have complete freedom with the money:',
        bullets: [
          '**Taxable brokerage account:** Invest in stocks, bonds, ETFs with no contribution limits',
          '**Roth IRA (if eligible):** If you have earned income, you can contribute to a Roth separately',
          '**Physical gold/silver:** Buy precious metals outside retirement accounts',
          '**Real estate:** Invest in property or REITs',
          '**Spend it:** You\'re not required to save or invest it',
          '**Gift it:** Give to family or charity (QCD for up to $105,000 tax-free to charity)',
        ],
      },
      {
        id: 'wealthy',
        icon: 'Gem',
        iconColor: 'amber',
        title: 'What Wealthy Retirees Do With RMDs',
        content: 'High-net-worth individuals who don\'t need their RMD for living expenses typically:',
        bullets: [
          '**Qualified Charitable Distributions (QCD):** Donate directly to charity from IRA - doesn\'t count as taxable income',
          '**Tax-efficient investments:** Municipal bonds, growth stocks, or assets with favorable tax treatment',
          '**Physical assets:** Gold, silver, real estate - things that hold value outside the dollar system',
          '**Fund Roth accounts for heirs:** Give RMD money to children/grandchildren for their Roths',
          '**Life insurance premiums:** Fund policies that pass tax-free to heirs',
        ],
      },
      {
        id: 'avoid',
        icon: 'Shield',
        iconColor: 'green',
        title: 'How to Avoid RMDs Entirely',
        content: 'There are legitimate ways to reduce or eliminate RMDs:',
        bullets: [
          '**Convert to Roth IRA:** Roth IRAs have NO RMDs during your lifetime',
          '**Convert before 73:** Pay taxes now at potentially lower rates',
          '**Roth 401k:** Starting 2024, Roth 401k no longer has RMDs',
          '**Still working?:** 401k at current employer may be exempt until you retire',
          '**Gold Roth IRA:** Convert to Roth holding physical gold - no RMDs, tax-free growth',
        ],
      },
    ],

    warningBox: {
      title: 'RMDs Are Forced Taxable Events',
      content: 'Even if you don\'t need the money, you must take the RMD and pay income tax on it. This can push you into higher tax brackets, increase Medicare premiums, and make Social Security taxable. Plan ahead.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Use Your RMD to Buy Physical Gold',
      content: 'After taking your RMD, you can use the after-tax funds to purchase physical gold outside your IRA. Or better yet - convert to a Gold Roth IRA before 73 to eliminate RMDs entirely.',
      bullets: [
        'Buy physical gold with RMD funds (taxable purchase, but you own the metal)',
        'Convert to Gold Roth IRA before RMDs start - no forced distributions',
        'Gold Roth grows tax-free with no RMD requirements',
        'Physical gold doesn\'t have counterparty risk like financial assets',
        'Hedge against the inflation that erodes RMD purchasing power',
      ],
    },

    faqs: [
      {
        question: 'Can I reinvest my RMD into a Roth IRA?',
        answer: 'Not directly. You cannot put RMD money back into any IRA. However, if you have earned income, you can make a separate Roth contribution (up to the annual limit) using any funds, including RMD money you received. The contribution limit is separate from the RMD.',
      },
      {
        question: 'What if I forget to take my RMD?',
        answer: 'The penalty is 25% of the amount you should have withdrawn (reduced from 50% in 2023). If you correct it quickly and file Form 5329 with a reasonable cause explanation, the penalty may be reduced to 10% or waived entirely.',
      },
      {
        question: 'Do Roth IRAs have RMDs?',
        answer: 'No. Roth IRAs have NO required minimum distributions during the owner\'s lifetime. This is a major advantage over traditional IRAs. Converting to a Roth before age 73 eliminates the RMD problem entirely.',
      },
      {
        question: 'Can I take my RMD in gold instead of cash?',
        answer: 'If you have a Gold IRA, you can take an "in-kind" distribution of physical gold instead of selling it first. The gold\'s fair market value counts as your RMD. You\'ll owe taxes on that value, but you\'ll own the physical metal.',
      },
    ],

    relatedArticles: ['rmd-penalty-if-i-forget', 'what-if-i-miss-rmd-deadline', '10-year-rule-inherited-ira-explained'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/rmd-calculator'],
  },

  'rmd-penalty-if-i-forget': {
    slug: 'rmd-penalty-if-i-forget',
    title: 'RMD Penalty If You Forget: What It Costs and How to Fix It',
    subtitle: 'The penalty for missing an RMD used to be 50%. It\'s now 25% - but that\'s still brutal.',

    metaTitle: 'RMD Penalty for Forgetting: How Much & How to Fix | 2026',
    metaDescription: 'Forgot to take your RMD? Learn the current 25% penalty, how to reduce it to 10%, and steps to fix a missed Required Minimum Distribution.',
    keywords: ['rmd penalty', 'forgot rmd', 'missed rmd penalty', 'rmd late withdrawal penalty'],

    targetKeyword: 'rmd penalty if i forget',

    category: 'rmd',
    threatLevel: 'critical',

    takeaways: [
      'The RMD penalty is 25% of the amount you should have withdrawn.',
      'If you fix it quickly, the penalty can be reduced to just 10%.',
      'The penalty dropped from 50% to 25% in 2023 under SECURE 2.0.',
      'You must file IRS Form 5329 to report and pay the penalty.',
      'The IRS often waives penalties for reasonable cause (first-time mistakes, illness, etc.).',
      'Converting to a Roth IRA eliminates RMD requirements entirely.',
    ],

    tocItems: [
      { id: 'penalty', label: 'The Current Penalty' },
      { id: 'calculate', label: 'How It\'s Calculated' },
      { id: 'reduce', label: 'How to Reduce to 10%' },
      { id: 'waiver', label: 'Getting It Waived' },
      { id: 'fix', label: 'Steps to Fix It' },
      { id: 'prevent', label: 'Prevent Future Misses' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'penalty',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'The RMD Penalty Is Now 25% (Down from 50%)',
        content: 'The SECURE 2.0 Act of 2022 reduced the RMD penalty from a crushing 50% to a still-painful 25%. If your RMD was $20,000 and you forgot, that\'s a $5,000 penalty - on top of the taxes you\'ll still owe.',
        table: {
          headers: ['Scenario', 'Before 2023', 'After 2023'],
          rows: [
            ['Standard penalty', '50%', '25%'],
            ['Quick correction penalty', 'N/A', '10%'],
            ['$20,000 missed RMD penalty', '$10,000', '$5,000'],
            ['$50,000 missed RMD penalty', '$25,000', '$12,500'],
          ],
        },
      },
      {
        id: 'calculate',
        icon: 'Calculator',
        iconColor: 'blue',
        title: 'How the Penalty Is Calculated',
        content: 'The penalty applies to the **shortfall** - the difference between what you should have taken and what you actually took.',
        bullets: [
          'RMD required: $25,000',
          'Amount actually taken: $10,000',
          'Shortfall: $15,000',
          'Penalty (25%): $3,750',
          'Plus: You still owe income tax on the full $25,000',
        ],
      },
      {
        id: 'reduce',
        icon: 'TrendingDown',
        iconColor: 'green',
        title: 'Reduce the Penalty to 10%',
        content: 'SECURE 2.0 created a new "correction window." If you fix the mistake quickly, the penalty drops to just 10%.',
        bullets: [
          'Take the missed RMD as soon as possible',
          'Correction must happen by the earlier of: IRS notice date, or 2 years after the deadline',
          'File Form 5329 with your tax return',
          'The 10% rate applies automatically if you correct in time',
        ],
      },
      {
        id: 'waiver',
        icon: 'FileCheck',
        iconColor: 'green',
        title: 'Getting the Penalty Waived Entirely',
        content: 'The IRS can waive the penalty for "reasonable cause." Common successful reasons include:',
        bullets: [
          'First-time mistake with immediate correction',
          'Serious illness or hospitalization',
          'Death of spouse or close family member',
          'Incorrect advice from financial advisor',
          'Custodian error or delay',
          'Natural disaster or emergency',
        ],
      },
      {
        id: 'fix',
        icon: 'Wrench',
        iconColor: 'blue',
        title: 'Steps to Fix a Missed RMD',
        content: 'Take these steps immediately if you missed an RMD:',
        bullets: [
          '**Step 1:** Take the missed distribution NOW - don\'t wait',
          '**Step 2:** Calculate the correct penalty amount',
          '**Step 3:** File IRS Form 5329 with your tax return',
          '**Step 4:** Attach a letter explaining the reason for the miss',
          '**Step 5:** Request a waiver if you have reasonable cause',
          '**Step 6:** Pay any penalty due (or wait for IRS response if requesting waiver)',
        ],
      },
      {
        id: 'prevent',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'How to Never Miss an RMD Again',
        content: 'Prevention strategies:',
        bullets: [
          '**Set up automatic distributions:** Most custodians can auto-withdraw your RMD monthly/quarterly',
          '**Calendar reminders:** Set multiple reminders starting in October',
          '**Use a financial advisor:** They track RMDs for clients',
          '**Convert to Roth:** Roth IRAs have NO RMDs during your lifetime',
          '**Aggregate carefully:** If you have multiple IRAs, you can take total RMD from one - but you must calculate for each',
        ],
      },
    ],

    warningBox: {
      title: 'Don\'t Ignore a Missed RMD',
      content: 'The IRS will eventually notice. Taking the distribution now and filing for a waiver is almost always better than waiting and getting a letter. The penalty grows with interest if unpaid.',
      type: 'red',
    },

    goldBridge: {
      title: 'Eliminate RMDs With a Roth Conversion',
      content: 'A Roth IRA - including a Gold Roth IRA - has no required minimum distributions during your lifetime.',
      bullets: [
        'Convert traditional IRA to Roth before age 73',
        'Pay taxes now, but no forced distributions ever',
        'Gold Roth IRA: Physical gold + tax-free growth + no RMDs',
        'Heirs also benefit from tax-free inheritance',
        'Eliminates the entire RMD problem permanently',
      ],
    },

    faqs: [
      {
        question: 'What if I missed RMDs for multiple years?',
        answer: 'You\'ll need to take all missed RMDs immediately and file Form 5329 for each year. Each year\'s penalty is calculated separately. Request a waiver for reasonable cause - the IRS is often lenient for first-time mistakes that are promptly corrected.',
      },
      {
        question: 'Does the penalty apply to inherited IRAs?',
        answer: 'Yes. Inherited IRAs have their own RMD rules (now mostly the 10-year rule for non-spouse beneficiaries), and missing those distributions triggers the same 25% penalty. The IRS has been lenient during the transition period as people learn the new rules.',
      },
      {
        question: 'Can my custodian remind me about RMDs?',
        answer: 'Most custodians send RMD notices, but it\'s YOUR responsibility to take the distribution. Custodians can set up automatic withdrawals to prevent misses. Call yours and ask about automatic RMD options.',
      },
    ],

    relatedArticles: ['can-i-reinvest-my-rmd', 'what-if-i-miss-rmd-deadline', '10-year-rule-inherited-ira-explained'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/rmd-calculator'],
  },

  'what-if-i-miss-rmd-deadline': {
    slug: 'what-if-i-miss-rmd-deadline',
    title: 'What If I Miss the RMD Deadline? Your Action Plan',
    subtitle: 'The deadline passed and you didn\'t take your RMD. Don\'t panic - here\'s exactly what to do.',

    metaTitle: 'Missed RMD Deadline? What to Do Now | 2026 Guide',
    metaDescription: 'Missed your Required Minimum Distribution deadline? Learn the penalty, how to fix it, request a waiver, and prevent future misses.',
    keywords: ['missed rmd deadline', 'rmd deadline', 'late rmd', 'rmd after december 31'],

    targetKeyword: 'what if i miss rmd deadline',

    category: 'rmd',
    threatLevel: 'critical',

    takeaways: [
      'The RMD deadline is December 31 each year (April 1 for your first RMD only).',
      'Missing the deadline triggers a 25% penalty on the amount not withdrawn.',
      'Take the missed RMD immediately - don\'t wait until next year.',
      'File Form 5329 and request a penalty waiver for reasonable cause.',
      'The IRS often waives first-time mistakes when quickly corrected.',
      'Consider Roth conversion to eliminate future RMD deadlines entirely.',
    ],

    tocItems: [
      { id: 'deadlines', label: 'RMD Deadlines Explained' },
      { id: 'action', label: 'Immediate Action Steps' },
      { id: 'waiver', label: 'Requesting a Waiver' },
      { id: 'form', label: 'Filing Form 5329' },
      { id: 'prevent', label: 'Never Miss Again' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'deadlines',
        icon: 'Calendar',
        iconColor: 'red',
        title: 'Understanding RMD Deadlines',
        content: 'There are two key deadlines to know:',
        bullets: [
          '**Annual deadline:** December 31 each year',
          '**First RMD exception:** April 1 of the year AFTER you turn 73',
          '**Warning:** If you delay first RMD to April 1, you must take TWO RMDs that year',
          '**No extensions:** Unlike tax returns, there\'s no way to extend an RMD deadline',
        ],
        table: {
          headers: ['Situation', 'Deadline'],
          rows: [
            ['First RMD (turned 73 in 2024)', 'April 1, 2025 OR December 31, 2024'],
            ['Second and subsequent RMDs', 'December 31 each year'],
            ['Year of death (your beneficiary)', 'December 31 of that year'],
          ],
        },
      },
      {
        id: 'action',
        icon: 'Zap',
        iconColor: 'amber',
        title: 'What to Do RIGHT NOW',
        content: 'If you\'ve missed your RMD deadline, take these steps immediately:',
        bullets: [
          '**Step 1:** Contact your custodian TODAY and request the distribution',
          '**Step 2:** Calculate exactly how much you should have taken',
          '**Step 3:** Take the FULL missed amount - don\'t split it up',
          '**Step 4:** Document the date you discovered the error',
          '**Step 5:** Gather any documentation for "reasonable cause"',
        ],
      },
      {
        id: 'waiver',
        icon: 'FileCheck',
        iconColor: 'green',
        title: 'How to Request a Penalty Waiver',
        content: 'The IRS can waive the 25% penalty if you have "reasonable cause" and take corrective action.',
        bullets: [
          'Attach a letter to Form 5329 explaining why you missed the deadline',
          'Be specific: dates, circumstances, what you\'ve done to fix it',
          'Good reasons: illness, custodian error, death in family, bad advice, first-time mistake',
          'Don\'t pay the penalty with the form - wait for IRS response',
          'Most first-time, promptly-corrected errors are waived',
        ],
      },
      {
        id: 'form',
        icon: 'FileText',
        iconColor: 'blue',
        title: 'Filing Form 5329',
        content: 'IRS Form 5329 reports the missed RMD and any penalty:',
        bullets: [
          'File with your annual tax return (or separately if return already filed)',
          'Part IX is for RMD shortfalls',
          'Line 52: Enter the required distribution amount',
          'Line 53: Enter what you actually took',
          'Line 54: Calculate the shortfall',
          'If requesting waiver: Enter "RC" and $0 on penalty line, attach explanation letter',
        ],
      },
      {
        id: 'prevent',
        icon: 'Shield',
        iconColor: 'green',
        title: 'How to Never Miss Again',
        content: 'Set yourself up for success:',
        bullets: [
          '**Automatic distributions:** Set up monthly or quarterly auto-withdrawals',
          '**Multiple reminders:** Calendar alerts in October, November, and December',
          '**Simplify:** Consolidate IRAs so you only track one RMD',
          '**Roth conversion:** Roth IRAs have no RMDs - problem solved',
          '**Professional help:** Financial advisors track this for clients',
        ],
      },
    ],

    warningBox: {
      title: 'Time Is Money - Literally',
      content: 'The longer you wait to fix a missed RMD, the worse it looks to the IRS. Quick correction demonstrates good faith and dramatically increases your chances of getting the penalty waived.',
      type: 'red',
    },

    goldBridge: {
      title: 'The Roth Solution: No More Deadlines',
      content: 'Converting to a Roth IRA - including a Gold Roth IRA - eliminates RMD deadlines entirely.',
      bullets: [
        'Roth IRAs have no required distributions during your lifetime',
        'Convert before 73 to escape the RMD trap',
        'Gold Roth IRA: Physical gold + no RMDs + tax-free growth',
        'One-time tax payment vs. annual RMD stress',
        'Your heirs inherit tax-free too',
      ],
    },

    faqs: [
      {
        question: 'Can I take this year\'s RMD and the missed one together?',
        answer: 'Yes, and you should. Take the missed RMD as soon as possible, then take the current year\'s RMD by December 31. They\'ll both be taxable income in the year you receive them.',
      },
      {
        question: 'What if I can\'t afford to pay the penalty?',
        answer: 'Request the waiver first - there\'s a good chance it will be reduced or eliminated. If you do owe a penalty, the IRS offers payment plans. The important thing is to take the distribution and file the paperwork.',
      },
      {
        question: 'Does my custodian report missed RMDs to the IRS?',
        answer: 'Custodians report your IRA balance and distributions to the IRS annually. While they don\'t specifically report "missed RMDs," the IRS can easily calculate if your distributions were insufficient by comparing your balance to the required amount.',
      },
    ],

    relatedArticles: ['rmd-penalty-if-i-forget', 'can-i-reinvest-my-rmd', '10-year-rule-inherited-ira-explained'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/rmd-calculator'],
  },

  '10-year-rule-inherited-ira-explained': {
    slug: '10-year-rule-inherited-ira-explained',
    title: 'The 10-Year Rule for Inherited IRAs: Simple Explanation',
    subtitle: 'The SECURE Act changed everything about inherited IRAs. Here\'s what the 10-year rule means for you.',

    metaTitle: '10-Year Rule Inherited IRA Explained Simply | 2026 Guide',
    metaDescription: 'Understand the 10-year rule for inherited IRAs. Learn who it applies to, when to take distributions, and strategies to minimize the tax hit.',
    keywords: ['10 year rule inherited ira', 'inherited ira rules', 'secure act inherited ira', 'beneficiary ira'],

    targetKeyword: '10 year rule inherited ira explained',

    category: 'rmd',
    threatLevel: 'warning',

    takeaways: [
      'Most non-spouse beneficiaries must empty inherited IRAs within 10 years.',
      'The 10-year rule replaced the old "stretch IRA" for most beneficiaries.',
      'Spouse beneficiaries are exempt - they can still use stretch or spousal transfer.',
      'Eligible designated beneficiaries (disabled, minor children, etc.) also exempt.',
      'You may need to take annual RMDs within the 10 years if the original owner was already taking them.',
      'Strategic withdrawals can minimize the total tax burden over 10 years.',
    ],

    tocItems: [
      { id: 'rule', label: 'What Is the 10-Year Rule?' },
      { id: 'applies', label: 'Who It Applies To' },
      { id: 'exempt', label: 'Who Is Exempt' },
      { id: 'rmd', label: 'The RMD Confusion' },
      { id: 'strategy', label: 'Tax Strategies' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'rule',
        icon: 'Clock',
        iconColor: 'amber',
        title: 'The 10-Year Rule: What It Means',
        content: 'The SECURE Act of 2019 created the 10-year rule for inherited IRAs:\n\n**You must withdraw the entire inherited IRA balance within 10 years of the original owner\'s death.**\n\nThis replaced the old "stretch IRA" strategy where beneficiaries could take small distributions over their entire lifetime.',
        bullets: [
          'Account must be emptied by December 31 of the 10th year',
          'Applies to traditional AND Roth inherited IRAs',
          'All distributions from traditional IRAs are taxable income',
          'Roth distributions are tax-free (if account was open 5+ years)',
        ],
      },
      {
        id: 'applies',
        icon: 'Users',
        iconColor: 'red',
        title: 'The 10-Year Rule Applies To',
        content: 'Most "designated beneficiaries" who inherited after 2019 must follow the 10-year rule:',
        bullets: [
          'Adult children (most common)',
          'Siblings',
          'Friends',
          'Non-spouse partners',
          'Trusts that don\'t qualify as "see-through"',
          'Grandchildren (when parents are still alive)',
        ],
      },
      {
        id: 'exempt',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Who Can Still "Stretch" the IRA',
        content: '"Eligible Designated Beneficiaries" are exempt from the 10-year rule and can use their own life expectancy:',
        bullets: [
          '**Surviving spouse:** Can do spousal rollover or remain as beneficiary',
          '**Minor children:** Until they reach age of majority (then 10-year rule starts)',
          '**Disabled individuals:** As defined by IRS rules',
          '**Chronically ill individuals:** Certified by physician',
          '**Beneficiaries not more than 10 years younger than deceased:** Siblings close in age, etc.',
        ],
      },
      {
        id: 'rmd',
        icon: 'AlertTriangle',
        iconColor: 'amber',
        title: 'The Confusing Part: Annual RMDs Within 10 Years',
        content: 'Here\'s where it gets complicated. The IRS clarified in 2024:\n\n**If the original owner died AFTER their RMD starting age:** You must take annual RMDs within the 10 years AND empty the account by year 10.\n\n**If the original owner died BEFORE their RMD starting age:** No annual RMDs required, just empty it by year 10.',
        table: {
          headers: ['Owner Died', 'Annual RMDs Required?', 'Empty By'],
          rows: [
            ['Before age 73', 'No', 'Year 10'],
            ['After age 73 (was taking RMDs)', 'Yes', 'Year 10'],
          ],
        },
      },
      {
        id: 'strategy',
        icon: 'Lightbulb',
        iconColor: 'green',
        title: 'Tax-Smart Withdrawal Strategies',
        content: 'How you withdraw over 10 years affects your total tax burden:',
        bullets: [
          '**Spread evenly:** Take roughly equal amounts each year to avoid bracket spikes',
          '**Front-load in low-income years:** If you expect income to rise, take more now',
          '**Coordinate with other income:** Time larger withdrawals for lower-income years',
          '**Delay if young:** If you\'re in peak earning years, consider taking less now',
          '**Convert to Roth:** Yes, you can convert inherited traditional to inherited Roth (pay tax now, future growth tax-free)',
        ],
      },
    ],

    warningBox: {
      title: 'The IRS Waived Penalties for 2021-2024, But...',
      content: 'Many people didn\'t know about the annual RMD requirement. The IRS waived penalties for those years. Starting 2025, penalties apply. If you inherited an IRA from someone who was taking RMDs, check if you need to catch up.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Make the Inherited IRA Tax-Efficient',
      content: 'If you\'re inheriting significant IRA assets, consider how you\'ll protect the purchasing power of mandatory withdrawals.',
      bullets: [
        'Gold and silver can hedge against inflation that erodes your withdrawals',
        'Use inherited IRA distributions to buy physical gold outside the account',
        'Consider diversifying inherited assets into non-correlated investments',
        'Plan withdrawals around your overall tax picture',
        'Consult a tax professional for large inherited IRAs',
      ],
    },

    faqs: [
      {
        question: 'Do I have to take equal amounts each year for 10 years?',
        answer: 'No. You can take any amount in any year, as long as the entire account is empty by December 31 of the 10th year. You could theoretically take nothing for 9 years and withdraw everything in year 10 (though that creates a huge tax bill).',
      },
      {
        question: 'What happens if I miss the 10-year deadline?',
        answer: 'The 25% penalty for insufficient distributions applies to whatever amount you should have withdrawn. For the 10-year rule, that\'s the entire remaining balance. A $500,000 remaining balance = $125,000 penalty.',
      },
      {
        question: 'Does the 10-year rule apply to inherited Roth IRAs?',
        answer: 'Yes, but the tax treatment is different. You must still empty the account in 10 years, but distributions from an inherited Roth IRA are tax-free (assuming the 5-year rule is met). There\'s no tax incentive to delay.',
      },
    ],

    relatedArticles: ['can-i-reinvest-my-rmd', 'rmd-penalty-if-i-forget', 'what-to-do-with-small-inherited-ira'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/rmd-calculator'],
  },

  'what-to-do-with-small-inherited-ira': {
    slug: 'what-to-do-with-small-inherited-ira',
    title: 'What to Do With a Small Inherited IRA ($10k-$50k)',
    subtitle: 'You inherited a modest IRA. Is it worth the complexity? Here are your smart options.',

    metaTitle: 'What to Do With Small Inherited IRA | Options for $10k-$50k',
    metaDescription: 'Inherited a small IRA? Learn whether to cash out, stretch, or keep it - and the tax implications of each choice for amounts under $50,000.',
    keywords: ['small inherited ira', 'what to do with inherited ira', 'inherited ira options', 'cash out inherited ira'],

    targetKeyword: 'what to do with small inherited ira',

    category: 'rmd',
    threatLevel: 'info',

    takeaways: [
      'Small inherited IRAs ($10k-$50k) have simpler options than larger ones.',
      'Cashing out may make sense if it won\'t spike your tax bracket significantly.',
      'The 10-year rule still applies - you can\'t stretch it over your lifetime.',
      'Roth conversion of inherited traditional IRA is possible (pay tax now, tax-free later).',
      'Consider the administrative burden vs. the tax benefit of spreading withdrawals.',
      'Using the funds to buy physical gold gives you a tangible asset.',
    ],

    tocItems: [
      { id: 'options', label: 'Your Options' },
      { id: 'cashout', label: 'Cash Out Entirely' },
      { id: 'spread', label: 'Spread Over 10 Years' },
      { id: 'roth', label: 'Convert to Roth' },
      { id: 'invest', label: 'What to Do With the Money' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'options',
        icon: 'Options',
        iconColor: 'blue',
        title: 'Your Options for a Small Inherited IRA',
        content: 'With a smaller inherited IRA, you have the same legal options as a large one, but the calculus is different:',
        bullets: [
          '**Cash out immediately:** Pay taxes this year, simplify your life',
          '**Spread over 10 years:** Lower annual tax hit, but ongoing complexity',
          '**Convert to inherited Roth:** Pay tax now, tax-free growth going forward',
          '**Wait until year 10:** Defer taxes but get a larger bill at the end',
        ],
      },
      {
        id: 'cashout',
        icon: 'DollarSign',
        iconColor: 'green',
        title: 'Option 1: Cash Out Entirely',
        content: 'For small inherited IRAs, cashing out often makes sense.',
        bullets: [
          '**Pros:** One-time tax payment, no annual tracking, no RMD calculations',
          '**Cons:** All taxed as ordinary income this year',
          '**Best if:** You\'re in a low tax bracket, or the amount won\'t push you up significantly',
          '**Tax example:** $30,000 inherited IRA in 22% bracket = ~$6,600 tax',
        ],
        table: {
          headers: ['Inherited Amount', 'Tax (22% bracket)', 'You Keep'],
          rows: [
            ['$10,000', '$2,200', '$7,800'],
            ['$25,000', '$5,500', '$19,500'],
            ['$50,000', '$11,000', '$39,000'],
          ],
        },
      },
      {
        id: 'spread',
        icon: 'Calendar',
        iconColor: 'blue',
        title: 'Option 2: Spread Over 10 Years',
        content: 'You can take $3,000-$5,000 per year to minimize tax bracket impact.',
        bullets: [
          '**Pros:** Lower annual tax hit, continued tax-deferred growth',
          '**Cons:** 10 years of tracking, potential for forgetting',
          '**Best if:** You\'re in a high bracket now but expect lower income later',
          '**Example:** $30,000 over 10 years = $3,000/year = minimal tax impact',
        ],
      },
      {
        id: 'roth',
        icon: 'ArrowRightLeft',
        iconColor: 'green',
        title: 'Option 3: Convert to Inherited Roth',
        content: 'You can convert an inherited traditional IRA to an inherited Roth IRA.',
        bullets: [
          '**How it works:** Pay ordinary income tax on conversion amount, then growth is tax-free',
          '**Still subject to 10-year rule:** Must still empty by year 10',
          '**Best if:** You expect tax rates to rise, or want tax-free growth',
          '**For small amounts:** May not be worth the complexity',
        ],
      },
      {
        id: 'invest',
        icon: 'TrendingUp',
        iconColor: 'amber',
        title: 'What to Do With the Money After Withdrawal',
        content: 'Once you\'ve taken distributions (and paid taxes), you have flexibility:',
        bullets: [
          '**Taxable brokerage:** Invest in stocks, bonds, ETFs',
          '**Pay off debt:** High-interest debt especially',
          '**Emergency fund:** If you don\'t have 6 months of expenses saved',
          '**Physical gold:** Tangible asset outside the financial system',
          '**Roth IRA contribution:** If you have earned income, contribute separately',
        ],
      },
    ],

    goldBridge: {
      title: 'Turn Paper Inheritance Into Physical Gold',
      content: 'Many people use inherited IRA distributions to purchase physical gold - converting paper promises into tangible assets.',
      bullets: [
        'After-tax distributions can buy gold coins or bars',
        'Physical gold has no counterparty risk',
        'Provides a hedge against inflation eroding your inheritance',
        'Can hold gold in a separate Gold IRA (if you have earned income)',
        'Generational wealth preservation strategy',
      ],
    },

    faqs: [
      {
        question: 'Is it better to take a small inherited IRA all at once or spread it out?',
        answer: 'It depends on your tax bracket. If the full amount won\'t push you into a higher bracket, cashing out may be simpler. If it would cause a significant bracket jump, spreading over several years reduces total taxes paid.',
      },
      {
        question: 'Can I roll a small inherited IRA into my own IRA?',
        answer: 'Only spouse beneficiaries can do a spousal rollover. Non-spouse beneficiaries must keep it as an inherited IRA (or withdraw it). You cannot commingle inherited IRA funds with your own IRA.',
      },
      {
        question: 'What if I don\'t need the money?',
        answer: 'You still must take distributions (following the 10-year rule). But you can reinvest the after-tax funds however you like - taxable brokerage, physical gold, Roth contributions (if eligible), etc.',
      },
    ],

    relatedArticles: ['10-year-rule-inherited-ira-explained', 'can-i-reinvest-my-rmd'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/rmd-calculator'],
  },
};
