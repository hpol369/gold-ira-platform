// src/data/learn-articles/inheritance-process-articles.ts
// Inheritance process articles - financial advisor guidance and inheriting retirement accounts

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const inheritanceProcessArticles: LearnArticleRegistry = {
  'inheritance-financial-advisor': {
    slug: 'inheritance-financial-advisor',
    title: 'Do You Need a Financial Advisor for Your Inheritance?',
    subtitle: 'Sudden wealth can be overwhelming. Here\'s when to hire help, what to look for, and how much you should pay.',

    metaTitle: 'Inheritance Financial Advisor: When to Hire & What to Look For | 2026',
    metaDescription: 'Should you hire a financial advisor for your inheritance? Learn when windfall advisors are worth it, fee structures to avoid, and how to find Gold IRA specialists.',
    keywords: ['inheritance financial advisor', 'windfall advisor', 'sudden wealth advisor', 'inheritance planning advisor'],

    targetKeyword: 'inheritance financial advisor',
    volume: 150,
    difficulty: 3,
    cpc: 5.00,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Inheritances over $100k typically benefit from professional financial guidance.',
      'Fee-only fiduciary advisors are legally required to put your interests first.',
      'Commission-based advisors may push products that benefit them, not you.',
      'Sudden wealth specialists understand the emotional complexity of inheritance.',
      'Ask advisors specifically about Gold IRA experience for diversification options.',
    ],

    tocItems: [
      { id: 'when-to-hire', label: 'When to Hire an Advisor' },
      { id: 'types-of-advisors', label: 'Types of Advisors' },
      { id: 'fee-structures', label: 'Fee Structures Explained' },
      { id: 'what-to-look-for', label: 'What to Look For' },
      { id: 'gold-ira-specialists', label: 'Gold IRA Specialists' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'when-to-hire',
        icon: 'HelpCircle',
        iconColor: 'blue',
        title: 'When Should You Hire an Inheritance Financial Advisor?',
        content: 'Not every inheritance requires professional help, but the larger the amount, the more valuable expert guidance becomes.',
        table: {
          headers: ['Inheritance Size', 'Recommendation', 'Why'],
          rows: [
            ['Under $50k', 'Optional', 'Can manage with basic research'],
            ['$50k - $100k', 'Consider hourly consultation', 'One-time advice may be sufficient'],
            ['$100k - $500k', 'Recommended', 'Tax and investment complexity increases'],
            ['$500k+', 'Essential', 'Multiple professionals needed'],
          ],
        },
        bullets: [
          '**Complex situations:** Inherited IRAs, business interests, or real estate',
          '**Tax implications:** Large inheritances have significant tax planning opportunities',
          '**Emotional state:** Grief can impair financial decision-making',
          '**No prior experience:** First-time investors especially benefit',
        ],
      },
      {
        id: 'types-of-advisors',
        icon: 'Users',
        iconColor: 'green',
        title: 'Types of Financial Advisors for Windfalls',
        content: 'Understanding the different types of advisors helps you choose the right one for your situation:',
        table: {
          headers: ['Type', 'Best For', 'Watch Out For'],
          rows: [
            ['Fee-only fiduciary', 'Unbiased advice', 'Higher upfront cost'],
            ['Sudden wealth specialist', 'Emotional + financial guidance', 'May be harder to find'],
            ['Certified Financial Planner (CFP)', 'Comprehensive planning', 'Not all are fiduciaries'],
            ['CPA with PFS', 'Tax-focused planning', 'May lack investment expertise'],
            ['Commission-based advisor', 'Avoid', 'Conflicts of interest'],
          ],
        },
        bullets: [
          '**Fiduciary duty:** Legally required to act in your best interest',
          '**Sudden wealth specialists:** Understand the psychology of windfalls',
          '**CFP designation:** Rigorous education and ethics requirements',
          '**Look for both:** Fee-only AND fiduciary for best protection',
        ],
        callout: {
          type: 'warning',
          title: 'Avoid Commission-Based Advisors',
          content: 'Advisors who earn commissions from product sales have inherent conflicts of interest. They may recommend products that pay them the most, not what\'s best for you.',
        },
      },
      {
        id: 'fee-structures',
        icon: 'DollarSign',
        iconColor: 'amber',
        title: 'Understanding Advisor Fee Structures',
        content: 'How your advisor gets paid affects the advice they give. Here are the common structures:',
        table: {
          headers: ['Fee Type', 'Typical Cost', 'Pros/Cons'],
          rows: [
            ['Hourly', '$150-400/hour', 'Pay only for time used; can get expensive'],
            ['Flat fee plan', '$1,000-5,000', 'One comprehensive plan; no ongoing support'],
            ['AUM (% of assets)', '0.5%-1.5% annually', 'Ongoing management; can be costly over time'],
            ['Retainer', '$1,200-6,000/year', 'Regular access; good for ongoing needs'],
            ['Commission', 'Variable', 'Avoid - creates conflicts'],
          ],
        },
        bullets: [
          '**For inheritance:** Flat-fee comprehensive plan often best value',
          '**AUM costs add up:** 1% of $500k = $5,000/year, every year',
          '**Hourly works for:** Simple questions or one-time consultations',
          '**Ask for fee schedule:** In writing before signing anything',
        ],
      },
      {
        id: 'what-to-look-for',
        icon: 'Search',
        iconColor: 'blue',
        title: 'What to Look for in an Inheritance Advisor',
        content: 'When interviewing potential advisors, ask these critical questions:',
        bullets: [
          '**"Are you a fiduciary at all times?"** - Must be yes, in writing',
          '**"How are you compensated?"** - Understand all fee sources',
          '**"What experience do you have with inheritances?"** - Look for specific examples',
          '**"What\'s your investment philosophy?"** - Should align with your goals',
          '**"How do you handle grieving clients?"** - Emotional intelligence matters',
          '**"Can you provide references?"** - Talk to existing clients',
        ],
        callout: {
          type: 'tip',
          title: 'Red Flags to Watch For',
          content: 'Avoid advisors who: pressure you to act quickly, guarantee returns, dismiss your questions, or refuse to explain their fees in writing.',
        },
      },
      {
        id: 'gold-ira-specialists',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'Finding Gold IRA Specialists',
        content: 'If you\'re interested in diversifying your inheritance with physical gold, look for advisors with specific precious metals experience:',
        bullets: [
          '**Ask about Gold IRA experience:** Not all advisors understand self-directed IRAs',
          '**Understand the option:** Gold IRAs provide inflation and crash protection',
          '**Look for neutrality:** Advisor should present pros AND cons, not just sell',
          '**Custodian knowledge:** Should know reputable Gold IRA custodians',
          '**Fee transparency:** Gold IRAs have specific fee structures they should explain',
        ],
      },
    ],

    warningBox: {
      title: 'Don\'t Let Anyone Rush You',
      content: 'Any advisor who pressures you to make immediate decisions is not acting in your interest. A good inheritance advisor will encourage you to take time, grieve, and make thoughtful decisions.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Ask Your Advisor About Gold IRA Diversification',
      content: 'When meeting with potential advisors, ask specifically about Gold IRA options. A knowledgeable advisor should be able to explain how physical gold can protect a portion of your inheritance.',
      bullets: [
        'Physical gold provides protection against market crashes',
        'Gold IRAs offer same tax advantages as traditional IRAs',
        'Diversifying 10-20% into gold reduces overall portfolio risk',
        'A good advisor will explain both benefits and costs',
        'Augusta Precious Metals offers free consultations for inheritance planning',
      ],
    },

    faqs: [
      {
        question: 'How much should I pay a financial advisor for inheritance planning?',
        answer: 'For a comprehensive inheritance plan, expect to pay $1,500-4,000 for a flat-fee analysis from a fee-only advisor. Hourly consultations typically run $200-400/hour. Avoid AUM fees for simple inheritance situations - 1% annually on $300k costs $3,000 every year.',
      },
      {
        question: 'What\'s the difference between a financial advisor and a wealth manager?',
        answer: 'Financial advisors typically work with a range of clients and offer planning services. Wealth managers often focus on high-net-worth individuals and provide more comprehensive services including tax planning, estate planning, and family governance. For inheritances over $1M, a wealth manager may be appropriate.',
      },
      {
        question: 'Should I use the same advisor who managed my parent\'s money?',
        answer: 'Not necessarily. While they understand the accounts, they may have been appropriate for your parent\'s situation but not yours. Interview them as you would any new advisor. Ask about their experience with inherited accounts and beneficiary planning.',
      },
      {
        question: 'How do I find a fee-only fiduciary advisor?',
        answer: 'NAPFA (National Association of Personal Financial Advisors) and the Garrett Planning Network both maintain directories of fee-only advisors. XY Planning Network is good for younger inheritors. Always verify fiduciary status in writing.',
      },
    ],

    relatedArticles: ['what-to-do-with-100k-inheritance', 'what-to-do-with-200k-inheritance', 'sudden-wealth-syndrome'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/gold-ira-calculator'],
  },

  'inheriting-ira-from-parent': {
    slug: 'inheriting-ira-from-parent',
    title: 'Inheriting an IRA From a Parent: Complete Rules Guide',
    subtitle: 'Your parent left you their IRA. Here\'s exactly what you need to know about the 10-year rule, RMDs, and your options.',

    metaTitle: 'Inheriting IRA From Parent: 10-Year Rule & RMD Guide | 2026',
    metaDescription: 'Inherited an IRA from your mother or father? Learn the 10-year rule, RMD requirements, rollover options, and tax strategies for inherited IRAs.',
    keywords: ['inheriting ira from parent', 'inherited ira rules parent', 'inherited ira from mother', 'inherited ira from father'],

    targetKeyword: 'inheriting ira from parent',
    volume: 90,
    difficulty: 4,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'The SECURE Act requires most non-spouse beneficiaries to empty inherited IRAs within 10 years.',
      'Annual RMDs may be required during the 10-year period depending on circumstances.',
      'You cannot roll an inherited IRA into your own IRA - it must stay separate.',
      'Distributions from inherited traditional IRAs are taxable as ordinary income.',
      'Strategic distribution planning can minimize your tax burden over the 10-year period.',
    ],

    tocItems: [
      { id: 'overview', label: 'Inherited IRA Overview' },
      { id: 'ten-year-rule', label: 'The 10-Year Rule' },
      { id: 'rmd-requirements', label: 'RMD Requirements' },
      { id: 'rollover-options', label: 'Your Options' },
      { id: 'tax-strategies', label: 'Tax Strategies' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'overview',
        icon: 'Info',
        iconColor: 'blue',
        title: 'Understanding Inherited IRAs From Parents',
        content: 'When you inherit an IRA from a parent, you become the beneficiary of a special type of account with its own rules. The account cannot simply become "yours" - it remains an inherited IRA with specific requirements.',
        bullets: [
          '**Separate account:** Must be titled as inherited IRA with your name as beneficiary',
          '**No contributions:** You cannot add money to an inherited IRA',
          '**Distribution deadline:** Must be emptied within 10 years (SECURE Act)',
          '**Tax treatment:** Distributions taxed as ordinary income (traditional IRA)',
          '**Investment control:** You can change investments within the inherited IRA',
        ],
      },
      {
        id: 'ten-year-rule',
        icon: 'Calendar',
        iconColor: 'amber',
        title: 'The 10-Year Rule Explained',
        content: 'The SECURE Act of 2019 changed inherited IRA rules dramatically. Most non-spouse beneficiaries must now empty inherited IRAs within 10 years of the original owner\'s death.',
        table: {
          headers: ['Beneficiary Type', 'Distribution Requirement', 'Notes'],
          rows: [
            ['Non-spouse (adult child)', '10-year rule', 'Must empty by end of 10th year'],
            ['Spouse', 'Can treat as own IRA', 'Can use own life expectancy'],
            ['Disabled/chronically ill', 'Life expectancy', 'Exception to 10-year rule'],
            ['Minor child', 'Life expectancy until 21, then 10-year', 'Switches to 10-year at majority'],
            ['Less than 10 years younger', 'Life expectancy', 'Rare exception'],
          ],
        },
        bullets: [
          '**Clock starts:** December 31 of year following parent\'s death',
          '**Flexibility within 10 years:** Take any amount, any time',
          '**Zero in year 1-9 okay:** But must empty by year 10 (tax bomb risk)',
          '**Plan strategically:** Spreading distributions minimizes taxes',
        ],
        callout: {
          type: 'warning',
          title: 'The Year 10 Tax Bomb',
          content: 'If you wait until year 10 to take all distributions, you could face a massive tax bill. A $500k inherited IRA taken in one year could push you into the 32% or 37% bracket.',
        },
      },
      {
        id: 'rmd-requirements',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'RMD Requirements During the 10-Year Period',
        content: 'Recent IRS guidance clarified that annual RMDs may be required during the 10-year period, depending on whether your parent had already started taking RMDs.',
        table: {
          headers: ['Parent\'s Status at Death', 'Your RMD Requirement'],
          rows: [
            ['Before RMD age (73 in 2024)', 'No annual RMDs required; just empty by year 10'],
            ['After RMD age or taking RMDs', 'Annual RMDs required each year 1-9; empty by year 10'],
          ],
        },
        bullets: [
          '**If parent was 73+:** You must take RMDs based on your life expectancy annually',
          '**If parent was younger:** No annual requirement, but still must empty by year 10',
          '**Penalty for missing RMD:** 25% of the amount you should have taken',
          '**Use IRS Single Life Table:** For calculating annual RMD amounts',
        ],
      },
      {
        id: 'rollover-options',
        icon: 'ArrowRight',
        iconColor: 'green',
        title: 'Your Options With an Inherited IRA',
        content: 'You have several choices for handling an inherited IRA from a parent:',
        bullets: [
          '**Keep as inherited IRA:** Maintain account, take distributions over 10 years',
          '**Transfer to new custodian:** Move to preferred brokerage as inherited IRA',
          '**Convert to Roth (partially):** Pay taxes now, future growth is tax-free',
          '**Change investments:** Reallocate within the inherited IRA',
          '**Disclaim (if needed):** Pass to contingent beneficiary',
        ],
        callout: {
          type: 'info',
          title: 'Cannot Roll to Your Own IRA',
          content: 'Unlike spouses, adult children cannot roll an inherited IRA into their own IRA. The account must remain titled as an inherited IRA for its entire existence.',
        },
      },
      {
        id: 'tax-strategies',
        icon: 'Calculator',
        iconColor: 'purple',
        title: 'Tax Strategies for Inherited IRAs',
        content: 'Smart distribution planning can save thousands in taxes over the 10-year period:',
        bullets: [
          '**Spread distributions evenly:** Prevents bracket creep in any single year',
          '**Take more in low-income years:** Job loss, sabbatical, early retirement',
          '**Roth conversion consideration:** Convert portions when in lower brackets',
          '**Bunch deductions:** Coordinate with charitable giving or other deductions',
          '**State tax planning:** Consider moving to lower-tax state if substantial',
        ],
        table: {
          headers: ['Strategy', 'Example', 'Tax Savings'],
          rows: [
            ['Year 10 lump sum', '$500k in 2034', 'Highest tax bill - up to $150k+'],
            ['Equal 10-year spread', '$50k per year', 'Moderate - stays in 22-24% bracket'],
            ['Front-load low years', 'More in years 1-3', 'Best if income rises later'],
          ],
        },
      },
    ],

    warningBox: {
      title: 'Don\'t Miss Required RMDs',
      content: 'If your parent was already taking RMDs, you must take annual distributions based on your life expectancy. Missing an RMD results in a 25% penalty on the amount you should have withdrawn.',
      type: 'red',
    },

    goldBridge: {
      title: 'Roll Inherited IRA Distributions to Gold IRA',
      content: 'While you cannot roll an inherited IRA directly to a Gold IRA, you can use distributions strategically. After taking a distribution (and paying applicable taxes), you can contribute to your own IRA including a Gold IRA.',
      bullets: [
        'Take inherited IRA distributions as required',
        'Use after-tax proceeds to fund your own Gold IRA',
        'Gold provides inflation protection your paper IRA lacks',
        'Diversify your overall retirement holdings',
        'Physical gold protects against market volatility',
      ],
    },

    faqs: [
      {
        question: 'Can I roll my inherited IRA into my own IRA?',
        answer: 'No. As a non-spouse beneficiary (adult child), you cannot roll an inherited IRA into your own IRA. The account must remain titled as an inherited IRA. Only surviving spouses have the option to treat an inherited IRA as their own.',
      },
      {
        question: 'What happens if I miss the 10-year deadline?',
        answer: 'The IRS will impose a 25% penalty on the amount that should have been distributed. In extreme cases, the entire remaining balance could be considered an excess accumulation. Don\'t let the deadline sneak up on you.',
      },
      {
        question: 'Is an inherited Roth IRA also subject to the 10-year rule?',
        answer: 'Yes, inherited Roth IRAs must also be emptied within 10 years for most non-spouse beneficiaries. However, the distributions are tax-free since Roth contributions were made with after-tax dollars. No annual RMDs are required during the 10-year period.',
      },
    ],

    relatedArticles: ['what-to-do-with-100k-inheritance', 'inheriting-401k-from-parent', 'inheritance-financial-advisor'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/inherited-ira-rmd-calculator'],
  },

  'inheriting-401k-from-parent': {
    slug: 'inheriting-401k-from-parent',
    title: 'Inheriting a 401k From a Parent: Your Complete Options Guide',
    subtitle: 'Your parent left you their 401k. Here are your options for rollover, distributions, and minimizing taxes.',

    metaTitle: 'Inheriting 401k From Parent: Rollover Rules & Options | 2026',
    metaDescription: 'Inherited a 401k from your parent? Learn your options including rollover to inherited IRA, distribution choices, and tax implications.',
    keywords: ['inheriting 401k from parent', 'inherited 401k rules', 'inherited 401k options', 'parent 401k beneficiary'],

    targetKeyword: 'inheriting 401k from parent',
    volume: 30,
    difficulty: 1,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'You can roll an inherited 401k to an inherited IRA for more flexibility.',
      'The same 10-year rule applies to inherited 401ks as inherited IRAs.',
      'Leaving money in the 401k may limit your investment options.',
      'A direct rollover to inherited IRA avoids mandatory 20% withholding.',
      'Self-directed inherited IRAs allow investment in physical gold.',
    ],

    tocItems: [
      { id: 'overview', label: 'Inherited 401k Basics' },
      { id: 'options', label: 'Your Options' },
      { id: 'rollover-process', label: 'Rollover to Inherited IRA' },
      { id: 'distribution-options', label: 'Distribution Options' },
      { id: 'tax-implications', label: 'Tax Implications' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'overview',
        icon: 'Info',
        iconColor: 'blue',
        title: 'Understanding Inherited 401k From Parents',
        content: 'When you inherit your parent\'s 401k, you become the designated beneficiary with several important choices to make. Unlike inheriting cash, a 401k comes with specific rules and tax implications.',
        bullets: [
          '**You are a non-spouse beneficiary:** Different rules than if a spouse inherited',
          '**10-year rule applies:** Must distribute entire balance within 10 years',
          '**Cannot roll to your own 401k:** Must stay as inherited account',
          '**Plan rules matter:** Each 401k plan has its own beneficiary options',
          '**Contact the plan administrator:** First step after inheriting',
        ],
      },
      {
        id: 'options',
        icon: 'GitBranch',
        iconColor: 'green',
        title: 'Your Options as a 401k Beneficiary',
        content: 'As a non-spouse beneficiary inheriting a 401k, you typically have these options:',
        table: {
          headers: ['Option', 'Pros', 'Cons'],
          rows: [
            ['Roll to inherited IRA', 'More investment options, flexibility', 'Must manage new account'],
            ['Leave in 401k plan', 'Simple, no action needed', 'Limited investments, plan rules'],
            ['Lump sum distribution', 'Immediate access to funds', 'Large tax bill, 10% penalty if under 59.5'],
            ['Take distributions over 10 years', 'Spread tax burden', 'Must plan and track'],
          ],
        },
        bullets: [
          '**Best for most:** Roll to inherited IRA for maximum flexibility',
          '**401k limitation:** You\'re stuck with the plan\'s investment menu',
          '**Inherited IRA advantage:** Choose any investment including precious metals',
        ],
      },
      {
        id: 'rollover-process',
        icon: 'ArrowRight',
        iconColor: 'amber',
        title: 'How to Roll Over to an Inherited IRA',
        content: 'Rolling an inherited 401k to an inherited IRA gives you the most flexibility. Here\'s the process:',
        numberedList: [
          'Contact your parent\'s 401k plan administrator to confirm your beneficiary status',
          'Open an inherited IRA at your chosen brokerage (titled properly)',
          'Request a direct trustee-to-trustee transfer to avoid withholding',
          'Complete required paperwork including death certificate',
          'Choose investments once funds arrive in inherited IRA',
        ],
        bullets: [
          '**Direct rollover:** Funds go straight from 401k to inherited IRA, no withholding',
          '**Indirect rollover:** Avoid this - triggers 20% mandatory withholding',
          '**Account title:** Must say "Inherited IRA" or "Beneficiary IRA"',
          '**Timeline:** Usually 2-4 weeks for transfer to complete',
        ],
        callout: {
          type: 'tip',
          title: 'Avoid the 20% Withholding Trap',
          content: 'If you take a check made out to yourself, the plan will withhold 20% for taxes. Request a direct trustee-to-trustee transfer to avoid this.',
        },
      },
      {
        id: 'distribution-options',
        icon: 'Calendar',
        iconColor: 'blue',
        title: 'Distribution Options and Strategies',
        content: 'Under the SECURE Act, you must empty the inherited 401k (or rolled-over inherited IRA) within 10 years. How you take distributions is up to you:',
        bullets: [
          '**Equal annual distributions:** $50k from $500k each year spreads taxes evenly',
          '**Front-load in low-income years:** Take more when your other income is lower',
          '**Back-load with caution:** Don\'t create a year-10 tax bomb',
          '**Match with deductions:** Coordinate with years you have large deductions',
          '**Roth conversion:** Convert portions to Roth in lower tax brackets',
        ],
        table: {
          headers: ['Strategy', 'Best When', 'Watch Out For'],
          rows: [
            ['Equal spread', 'Stable income expected', 'May still hit higher brackets'],
            ['Front-load', 'Currently lower income', 'Future tax rates uncertain'],
            ['Back-load', 'High income now, retiring soon', 'Tax bomb risk in year 10'],
            ['Variable', 'Income fluctuates', 'Requires annual planning'],
          ],
        },
      },
      {
        id: 'tax-implications',
        icon: 'Receipt',
        iconColor: 'red',
        title: 'Tax Implications of Inherited 401k',
        content: 'Understanding the tax treatment helps you plan better:',
        bullets: [
          '**Traditional 401k distributions:** Taxed as ordinary income in the year received',
          '**Roth 401k distributions:** Tax-free if account was open 5+ years',
          '**No 10% early withdrawal penalty:** Exception for inherited accounts',
          '**State taxes:** Most states tax distributions as income',
          '**Estate tax consideration:** Already paid by estate if applicable (rare)',
        ],
        callout: {
          type: 'warning',
          title: 'Estimate Your Tax Bracket Impact',
          content: 'A $200k inherited 401k taken in one year could push you from the 22% bracket into the 32% or higher bracket, costing you an extra $20,000+ in taxes compared to spreading it out.',
        },
      },
    ],

    warningBox: {
      title: 'Act Within 401k Plan Deadlines',
      content: 'Some 401k plans require beneficiaries to make rollover or distribution elections within 90 days or by year-end. Contact the plan administrator immediately to understand your deadlines.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Rollover to Self-Directed IRA Enables Gold Investment',
      content: 'By rolling your inherited 401k to a self-directed inherited IRA, you gain access to alternative investments including physical gold. This provides diversification your parent\'s 401k couldn\'t offer.',
      bullets: [
        'Self-directed inherited IRA allows physical gold investment',
        'Diversify beyond the limited 401k investment menu',
        'Gold provides protection during market volatility',
        'Same tax treatment as traditional inherited IRA',
        'Augusta Precious Metals specializes in inherited IRA gold rollovers',
      ],
    },

    faqs: [
      {
        question: 'Can I roll my parent\'s 401k into my own 401k?',
        answer: 'No. As a non-spouse beneficiary, you cannot roll an inherited 401k into your own 401k or your own IRA. You can only roll it into an inherited IRA. The account must remain titled as a beneficiary or inherited account.',
      },
      {
        question: 'Is there a penalty for taking money from an inherited 401k before age 59.5?',
        answer: 'No. The 10% early withdrawal penalty does not apply to distributions from inherited retirement accounts, regardless of your age. However, you will still owe ordinary income tax on the distributions.',
      },
      {
        question: 'What if my parent had both traditional and Roth money in their 401k?',
        answer: 'You can roll each type to its corresponding inherited IRA - traditional 401k to inherited traditional IRA, Roth 401k to inherited Roth IRA. The 10-year rule applies to both, but Roth distributions are tax-free.',
      },
      {
        question: 'Do I have to take annual RMDs from an inherited 401k?',
        answer: 'If your parent was already taking RMDs (age 73+), you must take annual RMDs based on your life expectancy, plus empty the account by year 10. If they died before RMD age, you just need to empty the account by year 10 with no annual requirement.',
      },
    ],

    relatedArticles: ['inheriting-ira-from-parent', 'what-to-do-with-100k-inheritance', 'inheritance-financial-advisor'],
    relatedGuides: ['/guide/401k-to-gold-rollover', '/guide/gold-ira-guide'],
    relatedTools: ['/tools/inherited-ira-rmd-calculator'],
  },
};
