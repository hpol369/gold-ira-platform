// src/data/medicaid-planning/index.ts
// P1-003: Medicaid Planning Hub data structure
// Target keywords: irrevocable trust nursing home (100, diff 0), medicaid estate recovery (1,200, diff 27)

import { MedicaidArticle } from '@/types/content-hubs';

export const medicaidPlanningArticles: MedicaidArticle[] = [
  {
    slug: 'irrevocable-trust-nursing-home',
    hubSlug: 'medicaid-planning',
    title: 'Irrevocable Trusts for Nursing Home Asset Protection',
    subtitle: 'How to legally protect your home and savings from nursing home costs while qualifying for Medicaid.',
    articleType: 'guide',

    metaTitle: 'Irrevocable Trust Nursing Home Protection 2026 | Complete Guide',
    metaDescription: 'Learn how irrevocable trusts protect assets from nursing home costs and Medicaid spend-down. 5-year lookback, trust types, and planning strategies.',
    keywords: ['irrevocable trust nursing home', 'nursing home asset protection', 'medicaid trust', 'protect assets nursing home'],

    targetKeyword: 'irrevocable trust nursing home',
    volume: 100,
    difficulty: 0,

    heroIcon: 'Shield',

    assetTypes: {
      countable: [
        'Bank accounts and CDs',
        'Stocks, bonds, and investments',
        'Second homes and rental properties',
        'Cash value life insurance (over $1,500)',
        'Retirement accounts (IRA, 401k)',
      ],
      exempt: [
        'Primary residence (with intent to return)',
        'One vehicle',
        'Personal belongings and household items',
        'Prepaid funeral and burial plots',
        'Small life insurance policies (under $1,500 face value)',
      ],
    },

    strategies: [
      {
        name: 'Medicaid Asset Protection Trust (MAPT)',
        description: 'An irrevocable trust that removes assets from your estate for Medicaid purposes.',
        pros: [
          'Assets protected after 5-year lookback period',
          'You can still live in the home',
          'Can receive income from trust',
          'Protects from nursing home costs',
        ],
        cons: [
          'Must be set up 5+ years before needing Medicaid',
          'You give up control over assets',
          'Cannot be easily modified',
          'May trigger gift tax reporting',
        ],
      },
      {
        name: 'Lady Bird Deed',
        description: 'A deed that transfers property at death while retaining full control during life.',
        pros: [
          'Avoid probate',
          'Retain full control during life',
          'Can sell or mortgage property',
          'Simple and inexpensive',
        ],
        cons: [
          'Only available in some states',
          'Doesn\'t protect from Medicaid estate recovery in all states',
          'Only applies to real estate',
          'Doesn\'t help with 5-year lookback',
        ],
      },
    ],

    stateNotes: [
      { state: 'Florida', note: 'Lady Bird deeds available. Medicaid does not recover against Lady Bird property.' },
      { state: 'California', note: 'No Lady Bird deeds. Must use irrevocable trust or life estate.' },
      { state: 'Texas', note: 'Lady Bird deeds available. Strong asset protection laws.' },
      { state: 'New York', note: 'Medicaid rules are complex. Special rules for community spouse.' },
    ],

    takeaways: [
      'Irrevocable trusts can protect assets from nursing home costs',
      'The 5-year lookback period is critical - plan ahead',
      'You give up control of assets placed in irrevocable trusts',
      'Your home may be protected while you live, but exposed after death',
      'Each state has different Medicaid rules',
      'Work with an elder law attorney for proper planning',
      'Precious metals in a trust can provide diversification and protection',
    ],

    tocItems: [
      { id: 'overview', label: 'How It Works' },
      { id: 'lookback', label: '5-Year Lookback' },
      { id: 'types', label: 'Trust Types' },
      { id: 'assets', label: 'Countable vs. Exempt' },
      { id: 'home', label: 'Protecting Your Home' },
      { id: 'timing', label: 'When to Act' },
    ],

    sections: [
      {
        id: 'overview',
        icon: 'Shield',
        iconColor: 'blue',
        title: 'How Irrevocable Trusts Protect Assets',
        content: 'An irrevocable trust is a legal arrangement where you transfer ownership of assets to the trust. Once transferred, you no longer own these assets - the trust does. This is crucial for Medicaid planning because Medicaid can only count assets you own.',
        bullets: [
          '**Ownership transfer** - Assets in an irrevocable trust are no longer legally yours.',
          '**Medicaid can\'t count them** - After the lookback period, trust assets don\'t count toward Medicaid limits.',
          '**You can still benefit** - The trust can pay for expenses or let you live in the home.',
          '**Must be truly irrevocable** - You cannot retain control or the ability to revoke.',
          '**Trustee manages assets** - You appoint a trustee (often your child) to manage trust assets.',
        ],
        callout: {
          type: 'warning',
          title: 'Timing Is Everything',
          content: 'An irrevocable trust must be established at least 5 years before applying for Medicaid. Transferring assets within the lookback period creates penalties.',
        },
      },
      {
        id: 'lookback',
        icon: 'Clock',
        iconColor: 'amber',
        title: 'Understanding the 5-Year Lookback Period',
        content: 'When you apply for Medicaid, they review all asset transfers made in the past 60 months (5 years). Transfers during this period result in a penalty period where Medicaid won\'t pay for nursing home care.',
        bullets: [
          '**60 months nationally** - Federal law sets the lookback at 5 years for all states.',
          '**Penalty calculation** - Divide transferred amount by average monthly nursing home cost.',
          '**Example** - Transfer $150,000 ÷ $10,000/month = 15-month penalty period.',
          '**Penalty starts at application** - You\'re ineligible for 15 months after applying, not after transfer.',
          '**No partial penalty** - Even small gifts within 5 years can trigger review.',
        ],
        table: {
          headers: ['Transfer Amount', 'Avg. Monthly Cost', 'Penalty Period'],
          rows: [
            ['$50,000', '$10,000', '5 months'],
            ['$100,000', '$10,000', '10 months'],
            ['$250,000', '$10,000', '25 months'],
            ['$500,000', '$10,000', '50 months'],
          ],
          caption: 'Penalty periods based on example nursing home costs',
        },
      },
      {
        id: 'types',
        icon: 'FileText',
        iconColor: 'blue',
        title: 'Types of Protective Trusts',
        content: 'Several types of irrevocable trusts can help with Medicaid planning. The right choice depends on your situation.',
        bullets: [
          '**Medicaid Asset Protection Trust (MAPT)** - Most common. Removes assets from your estate while allowing income and use of assets.',
          '**Income-Only Trust** - You receive trust income but not principal. Popular in many states.',
          '**Life Estate** - Keep the right to live in your home while transferring ownership. Simpler but less flexible.',
          '**Spousal Lifetime Access Trust (SLAT)** - One spouse creates trust for the other. Can work for Medicaid and estate planning.',
          '**Irrevocable Funeral Trust** - Specifically for funeral expenses. Usually exempt from Medicaid counting.',
        ],
      },
      {
        id: 'assets',
        icon: 'Wallet',
        iconColor: 'green',
        title: 'Countable vs. Exempt Assets',
        content: 'Medicaid only counts certain assets toward its limits. Understanding the difference helps you know what needs protection.',
        bullets: [
          '**Countable assets** - Bank accounts, investments, second homes, retirement accounts, and cash.',
          '**Exempt assets** - Primary home (with conditions), one car, personal belongings, prepaid burial.',
          '**Asset limit** - Typically $2,000 for individual, varies for married couples by state.',
          '**Income limit** - Your income must also be under state limits, though trusts can help here too.',
          '**Community spouse protection** - Married couples have special rules allowing the healthy spouse to keep more assets.',
        ],
        table: {
          headers: ['Asset Type', 'Countable?', 'Notes'],
          rows: [
            ['Primary Home', 'No*', 'Protected while living, may face recovery after death'],
            ['Bank Accounts', 'Yes', 'Must spend down below limit'],
            ['Investments', 'Yes', 'Stocks, bonds, mutual funds count'],
            ['One Vehicle', 'No', 'One car exempt regardless of value'],
            ['Retirement IRA/401k', 'Varies', 'Rules differ by state and applicant status'],
            ['Prepaid Funeral', 'No', 'Irrevocable funeral trusts exempt'],
          ],
        },
      },
      {
        id: 'home',
        icon: 'Home',
        iconColor: 'purple',
        title: 'Protecting Your Home',
        content: 'Your home is often your largest asset. While it\'s exempt during your lifetime, Medicaid can seek recovery from your estate after death.',
        bullets: [
          '**Lifetime exemption** - Your home is not counted while you or your spouse lives there or intends to return.',
          '**Estate recovery** - After death, Medicaid can file claims against your estate to recover costs.',
          '**MAPT protection** - Putting home in irrevocable trust protects from estate recovery (if done 5+ years prior).',
          '**Lady Bird deed** - In some states, this avoids probate and protects from recovery without losing control.',
          '**Life estate** - Keep the right to live there while transferring ownership. Creates partial gift for lookback.',
        ],
        callout: {
          type: 'info',
          title: 'State Variations Matter',
          content: 'Home protection strategies vary significantly by state. What works in Florida may not work in California. Consult a local elder law attorney.',
        },
      },
      {
        id: 'timing',
        icon: 'Calendar',
        iconColor: 'amber',
        title: 'When Should You Act?',
        content: 'The 5-year lookback makes early planning essential. Don\'t wait until you need care.',
        numberedList: [
          '**Age 60-65** - Ideal time to start planning. Gives plenty of time before likely need.',
          '**Before health decline** - Once diagnosed with dementia or chronic illness, your options narrow.',
          '**While mentally competent** - You must have capacity to execute legal documents.',
          '**Before any nursing home stay** - Even a short stay can trigger spend-down and limit options.',
          '**At least 5 years before need** - The lookback period requires advance planning.',
          '**When healthy spouse needs protection** - Married couples should plan before either needs care.',
        ],
      },
    ],

    goldBridge: {
      title: 'Precious Metals in Your Planning Strategy',
      content: 'When protecting assets in trusts, diversification matters. Physical gold and silver in a self-directed IRA can be held by a trust, providing both protection and growth potential.',
      bullets: [
        'Self-directed IRA can hold physical precious metals',
        'Trust can be beneficiary of Gold IRA',
        'Metals provide hedge against market volatility',
        'No counterparty risk with physical gold',
        'Can be part of diversified estate plan',
      ],
    },

    faqs: [
      {
        question: 'Can I put my house in an irrevocable trust and still live in it?',
        answer: 'Yes. A properly drafted irrevocable trust can give you the right to live in your home for life (called a retained life estate). You continue living there as normal, but ownership transfers to the trust, protecting it from Medicaid estate recovery after the 5-year lookback period.',
      },
      {
        question: 'What happens if I need nursing home care within 5 years of creating the trust?',
        answer: 'If you apply for Medicaid within 5 years of transferring assets to the trust, Medicaid will calculate a penalty period. During this penalty, Medicaid won\'t pay for your nursing home care. The length depends on how much you transferred. You\'ll need to private pay or find other coverage during the penalty period.',
      },
      {
        question: 'Can I get my assets back from an irrevocable trust?',
        answer: 'Generally, no. That\'s what makes it "irrevocable." However, some trusts have provisions allowing trustees to make distributions for your benefit. Others can be modified through court action if all beneficiaries agree. But the basic principle is that you give up control.',
      },
      {
        question: 'Will an irrevocable trust protect assets from estate taxes?',
        answer: 'It depends on the trust type. Medicaid Asset Protection Trusts are typically included in your estate for estate tax purposes but excluded for Medicaid purposes. For estate tax protection, you\'d need a different trust structure. Most people don\'t have estate tax concerns (exemption is $13.61M in 2024).',
      },
      {
        question: 'Should I transfer retirement accounts to an irrevocable trust?',
        answer: 'Generally not directly - transferring an IRA or 401(k) to a trust triggers immediate taxation on the entire balance. Instead, consider naming the irrevocable trust as beneficiary of your retirement accounts. This provides protection while maintaining tax deferral. Consult with a tax advisor.',
      },
    ],

    relatedArticles: [
      'medicaid-estate-recovery',
      'lady-bird-deed-explained',
      'medicaid-penalty-period',
    ],
    relatedTools: ['/tools/medicaid-spend-down-calculator'],
    relatedGuides: ['/guide/gold-ira-guide'],
  },
  {
    slug: 'medicaid-estate-recovery',
    hubSlug: 'medicaid-planning',
    title: 'Medicaid Estate Recovery: What Happens After You Die',
    subtitle: 'How states reclaim Medicaid costs from your estate - and strategies to protect your legacy.',
    articleType: 'guide',

    metaTitle: 'Medicaid Estate Recovery 2026: Protect Your Home & Assets',
    metaDescription: 'Learn how Medicaid estate recovery works, what assets are at risk, and legal strategies to protect your home and savings for your heirs.',
    keywords: ['medicaid estate recovery', 'medicaid take house after death', 'medicaid lien home', 'protect estate from medicaid'],

    targetKeyword: 'medicaid estate recovery',
    volume: 1200,
    difficulty: 27,

    heroIcon: 'AlertTriangle',

    takeaways: [
      'States must attempt to recover Medicaid costs from your estate after death',
      'Your home is the primary target for Medicaid recovery',
      'Recovery can only happen after death of recipient AND spouse',
      'Certain heirs (disabled, minor, caretaker) can prevent recovery',
      'Proper planning 5+ years ahead can protect your estate',
      'Lady Bird deeds and irrevocable trusts are key protection tools',
      'Not all assets are subject to recovery - know what\'s protected',
    ],

    tocItems: [
      { id: 'what-is', label: 'How Recovery Works' },
      { id: 'assets', label: 'At-Risk Assets' },
      { id: 'exemptions', label: 'Protected Situations' },
      { id: 'state-rules', label: 'State Variations' },
      { id: 'protection', label: 'Protection Strategies' },
      { id: 'hardship', label: 'Hardship Waivers' },
    ],

    sections: [
      {
        id: 'what-is',
        icon: 'AlertTriangle',
        iconColor: 'amber',
        title: 'What Is Medicaid Estate Recovery?',
        content: 'Federal law requires all states to attempt recovery of Medicaid long-term care costs from the estates of deceased recipients. This means after you die, the state may claim assets from your estate to repay what Medicaid spent on your nursing home care.',
        bullets: [
          '**Mandatory program** - All states must have estate recovery programs under federal law.',
          '**Nursing home focus** - Recovery primarily targets long-term care costs (nursing home, home care).',
          '**After death** - Recovery only happens after the Medicaid recipient dies.',
          '**Spouse protection** - States cannot recover while a surviving spouse is alive.',
          '**Amount owed** - The state seeks to recover the total cost of Medicaid benefits paid.',
        ],
        callout: {
          type: 'warning',
          title: 'Costs Add Up Fast',
          content: 'Average nursing home care costs $8,000-$15,000 per month. A 3-year stay could result in a $300,000+ estate recovery claim.',
        },
      },
      {
        id: 'assets',
        icon: 'Home',
        iconColor: 'red',
        title: 'What Assets Are at Risk',
        content: 'The primary target for Medicaid estate recovery is the family home, but other assets may also be claimed depending on your state.',
        bullets: [
          '**Real estate** - Your home is the primary recovery target in most states.',
          '**Bank accounts** - Cash and savings in your name at death.',
          '**Personal property** - Vehicles, jewelry, and other valuable items.',
          '**Life insurance** - If your estate is the beneficiary (not if named beneficiary).',
          '**Retirement accounts** - Only if payable to estate; beneficiary designations usually avoid this.',
        ],
        table: {
          headers: ['Asset Type', 'At Risk?', 'Protection Strategy'],
          rows: [
            ['Home (in your name)', 'Yes', 'Transfer to trust, Lady Bird deed'],
            ['Home (in trust)', 'No*', 'If transferred 5+ years prior'],
            ['Joint bank account', 'Partial', 'Surviving owner may claim their share'],
            ['Life insurance (named bene)', 'No', 'Goes directly to beneficiary'],
            ['IRA/401k (named bene)', 'No', 'Goes directly to beneficiary'],
            ['Car', 'Yes', 'Transfer or gift before death'],
          ],
        },
      },
      {
        id: 'exemptions',
        icon: 'Shield',
        iconColor: 'green',
        title: 'When Recovery Is Blocked',
        content: 'Several situations prevent or delay Medicaid estate recovery:',
        bullets: [
          '**Surviving spouse** - No recovery while spouse is alive, regardless of where they live.',
          '**Minor child** - If the deceased has a child under 21, recovery is delayed until child is 21.',
          '**Disabled child** - Recovery is permanently blocked if there\'s a blind or disabled child of any age.',
          '**Caretaker child** - A child who lived with parent 2+ years and provided care may keep the home.',
          '**Sibling with equity** - A sibling who lived in home 1+ year before institutionalization and has equity.',
        ],
        callout: {
          type: 'info',
          title: 'Caretaker Child Exception',
          content: 'If your adult child moved in and cared for you for at least 2 years before you entered a nursing home, and this care delayed your institutionalization, they may be able to keep the family home.',
        },
      },
      {
        id: 'state-rules',
        icon: 'MapPin',
        iconColor: 'blue',
        title: 'State-by-State Differences',
        content: 'While federal law sets minimums, states have flexibility in how aggressively they pursue recovery.',
        bullets: [
          '**Probate-only states** - Most states only recover from assets that pass through probate.',
          '**Expanded recovery** - Some states (like California) use "expanded estate recovery" to reach more assets.',
          '**Lien states** - Some states place liens on homes during life; others only file claims after death.',
          '**Hardship policies** - States vary in how easily they grant hardship waivers.',
          '**Lady Bird deed states** - Only some states recognize these deeds as recovery-proof.',
        ],
      },
      {
        id: 'protection',
        icon: 'Lock',
        iconColor: 'green',
        title: 'Strategies to Protect Your Estate',
        content: 'With proper planning, you can legally protect assets from Medicaid estate recovery.',
        numberedList: [
          '**Irrevocable trust** - Transfer home to MAPT at least 5 years before needing Medicaid.',
          '**Lady Bird deed** - In states that allow them, property passes outside probate and estate recovery.',
          '**Life estate deed** - Retain right to live in home while transferring remainder interest (partial protection).',
          '**Beneficiary designations** - Ensure all retirement accounts and life insurance have named beneficiaries (not "estate").',
          '**Spousal protection** - For married couples, the healthy spouse can keep significant assets.',
          '**Caretaker agreement** - Document care provided by family members to support caretaker child exemption.',
        ],
      },
      {
        id: 'hardship',
        icon: 'Heart',
        iconColor: 'purple',
        title: 'Hardship Waivers',
        content: 'If estate recovery would cause undue hardship, you may request a waiver.',
        bullets: [
          '**Income-producing property** - If the home is the family\'s sole income source.',
          '**Modest estate value** - Some states waive recovery for small estates (varies by state).',
          '**Heir hardship** - If recovery would force heir onto public assistance.',
          '**Family home** - If heir has no other housing and limited income.',
          '**Must apply** - Hardship waivers are not automatic; heirs must apply and demonstrate need.',
        ],
      },
    ],

    goldBridge: {
      title: 'Protecting Wealth Across Generations',
      content: 'Estate recovery is just one threat to generational wealth. Diversifying assets into precious metals within proper planning structures provides multiple layers of protection.',
      bullets: [
        'Physical gold provides hedge against many risks',
        'Self-directed IRA with proper beneficiaries avoids probate',
        'Trusts can hold precious metals for estate planning',
        'No counterparty risk with physical precious metals',
        'Creates tangible legacy for heirs',
      ],
    },

    faqs: [
      {
        question: 'Can Medicaid take my house while I\'m in a nursing home?',
        answer: 'Medicaid cannot force you to sell your home while you\'re alive. Your home is an exempt asset. However, a lien may be placed on the property. After you die (and after your spouse dies if married), the state can seek recovery from the home through your estate.',
      },
      {
        question: 'What if I want to leave my house to my children?',
        answer: 'Without planning, your home may be subject to Medicaid estate recovery, meaning your children might not inherit it. Protection strategies include irrevocable trusts (5+ year lookback), Lady Bird deeds (in some states), or qualifying a child for the caretaker or sibling exemption.',
      },
      {
        question: 'Does Medicaid recovery apply to all Medicaid, or just nursing home?',
        answer: 'Federal law requires recovery for nursing home care, home and community-based services, and related hospital/prescription costs. States can choose to expand recovery to other Medicaid costs, but most focus on long-term care.',
      },
      {
        question: 'What if I die with no assets?',
        answer: 'If there\'s nothing in your estate, there\'s nothing to recover. This is why proper planning (beneficiary designations, trusts, transfer on death deeds) that moves assets outside your probate estate is so effective.',
      },
      {
        question: 'Can I give away my house to avoid recovery?',
        answer: 'Yes, but timing matters. If you give away assets within 5 years of applying for Medicaid, you face a penalty period. If you give away assets and then need Medicaid within 5 years, you may be ineligible for the penalty period. Plan early - ideally 5+ years before needing care.',
      },
    ],

    relatedArticles: [
      'irrevocable-trust-nursing-home',
      'lady-bird-deed-explained',
      'can-medicaid-take-house',
    ],
    relatedGuides: ['/guide/gold-ira-guide'],
  },
  {
    slug: 'medicaid-penalty-period',
    hubSlug: 'medicaid-planning',
    title: 'Medicaid Penalty Period Explained: The 5-Year Lookback',
    subtitle: 'What happens when you give away assets before applying for Medicaid.',
    articleType: 'guide',

    metaTitle: 'Medicaid Penalty Period 2026: Lookback Period Explained',
    metaDescription: 'Understand the Medicaid 5-year lookback period and how penalties are calculated. Learn what triggers penalties and how to avoid them.',
    keywords: ['medicaid penalty period', 'medicaid lookback period', 'medicaid 5 year rule', 'medicaid transfer penalty'],

    targetKeyword: 'medicaid penalty period',
    volume: 150,
    difficulty: 3,

    heroIcon: 'Clock',

    takeaways: [
      'Medicaid reviews all asset transfers from the past 5 years',
      'Transferring assets within lookback creates a penalty period',
      'Penalty period means Medicaid won\'t pay for your care',
      'Penalty is calculated based on your state\'s nursing home costs',
      'Exceptions exist for transfers to spouses and disabled children',
      'The penalty starts when you apply for Medicaid, not when you transferred',
      'Planning 5+ years ahead avoids penalties entirely',
    ],

    tocItems: [
      { id: 'overview', label: 'How It Works' },
      { id: 'calculation', label: 'Calculating Penalties' },
      { id: 'exceptions', label: 'Transfer Exceptions' },
      { id: 'survival', label: 'Surviving the Penalty' },
      { id: 'avoidance', label: 'Avoiding Penalties' },
    ],

    sections: [
      {
        id: 'overview',
        icon: 'Eye',
        iconColor: 'blue',
        title: 'The 5-Year Lookback Period',
        content: 'When you apply for Medicaid to pay for nursing home care, the state reviews your financial transactions for the previous 60 months (5 years). They\'re looking for transfers made for less than fair market value - essentially, gifts.',
        bullets: [
          '**60 months nationally** - All states use the same 5-year lookback period.',
          '**Any gift counts** - Birthday gifts, charitable donations, transfers to children.',
          '**Documentation required** - You must provide 5 years of financial records.',
          '**Both spouses reviewed** - If married, both spouses\' transactions are examined.',
          '**Cannot undo** - Once transfer is discovered, penalty applies.',
        ],
        callout: {
          type: 'warning',
          title: 'Common Mistake',
          content: 'Many people think they can give away assets right before needing care. This triggers significant penalties and can leave you without care coverage.',
        },
      },
      {
        id: 'calculation',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'How Penalty Periods Are Calculated',
        content: 'The penalty period equals the total value of transfers divided by your state\'s average monthly nursing home cost.',
        bullets: [
          '**Simple formula** - Transfer amount ÷ state monthly rate = penalty months.',
          '**Example** - $100,000 transfer ÷ $10,000/month = 10-month penalty.',
          '**State rates vary** - Average costs range from $6,000 to $15,000+ per month.',
          '**All transfers combined** - Multiple transfers are added together for one penalty.',
          '**Penalty starts at application** - Not at time of transfer.',
        ],
        table: {
          headers: ['State', 'Avg. Monthly Rate', '$100,000 Penalty'],
          rows: [
            ['Texas', '$6,800', '14.7 months'],
            ['Florida', '$9,100', '11 months'],
            ['New York', '$13,500', '7.4 months'],
            ['California', '$11,000', '9.1 months'],
          ],
          caption: 'Rates are approximate and change annually',
        },
      },
      {
        id: 'exceptions',
        icon: 'CheckCircle',
        iconColor: 'green',
        title: 'Transfers That Don\'t Create Penalties',
        content: 'Certain transfers are exempt from the lookback penalty:',
        bullets: [
          '**Transfers to spouse** - You can freely transfer assets to your spouse without penalty.',
          '**Transfers for disabled child** - Assets transferred to blind or disabled children are exempt.',
          '**Home to caretaker child** - The home can transfer to a child who cared for you for 2+ years.',
          '**Home to sibling with equity** - A sibling who lived in home for 1+ year and has ownership interest.',
          '**Fair market value sales** - Selling assets for full value is not a gift.',
          '**Payment for services** - Paying family for documented care services at fair rates.',
        ],
        callout: {
          type: 'tip',
          title: 'Spousal Transfers',
          content: 'Married couples should consider transferring assets to the healthy spouse before the ill spouse applies for Medicaid. This is legal and penalty-free.',
        },
      },
      {
        id: 'survival',
        icon: 'Ambulance',
        iconColor: 'red',
        title: 'What If You\'re Already in the Penalty Period?',
        content: 'If you\'ve already made transfers and now need care, you have limited options:',
        bullets: [
          '**Get assets back** - If the recipient returns the gifted assets, the penalty may be reduced.',
          '**Private pay** - Pay for care privately during the penalty period.',
          '**Medicaid planning attorney** - May identify partial solutions or hardship exceptions.',
          '**Caregiver agreement** - Document retroactive care services (limited effectiveness).',
          '**Undue hardship** - Apply for hardship waiver if you\'d be homeless or without food.',
        ],
      },
      {
        id: 'avoidance',
        icon: 'Shield',
        iconColor: 'green',
        title: 'How to Avoid Penalty Periods',
        content: 'The best strategy is planning ahead:',
        numberedList: [
          '**Plan 5+ years ahead** - Any transfers made 5+ years before application don\'t trigger penalties.',
          '**Use irrevocable trusts** - Assets in irrevocable trusts are protected after the lookback.',
          '**Transfer to spouse first** - Spousal transfers are exempt; spouse can then make other plans.',
          '**Document everything** - Keep records proving any transfers were for fair value.',
          '**Consult an elder law attorney** - Before making any significant gifts or transfers.',
          '**Use exempt transfers** - Take advantage of caretaker child and disabled child exceptions.',
        ],
      },
    ],

    goldBridge: {
      title: 'Plan Your Financial Future Now',
      content: 'The 5-year lookback emphasizes the importance of early planning. Diversifying retirement assets into a Gold IRA today protects them for years to come.',
      bullets: [
        'Start planning now - 5 years goes faster than you think',
        'Gold IRA provides diversification and protection',
        'Physical gold held in trust structures',
        'Proper beneficiary designations avoid probate',
        'Tax-advantaged growth continues during planning period',
      ],
    },

    faqs: [
      {
        question: 'What triggers the 5-year lookback?',
        answer: 'Applying for Medicaid long-term care benefits triggers the lookback. The state will request 5 years of financial records and examine all transactions. Any transfers for less than fair market value - gifts, below-market sales, adding names to deeds - can trigger penalties.',
      },
      {
        question: 'Does the penalty period start when I make the transfer?',
        answer: 'No, and this is a critical point. The penalty period starts when you apply for Medicaid and would otherwise be eligible. So if you transfer $100,000 today and apply for Medicaid in 3 years, your penalty period runs for those future months - you\'ll be ineligible for Medicaid coverage during that time.',
      },
      {
        question: 'What counts as a "transfer" under Medicaid rules?',
        answer: 'Any asset given away or sold for less than fair market value. This includes: gifts to children, donations to charity, adding someone to a deed, selling a house to a child below market value, paying for a grandchild\'s college, and forgiving loans. Even $14,000 "gift tax annual exclusion" gifts count.',
      },
      {
        question: 'Can I "cure" a penalty by getting assets back?',
        answer: 'Potentially. If the recipient returns all transferred assets, the penalty may be eliminated or reduced. However, this isn\'t always possible - assets may have been spent, the recipient may refuse, or partial return may only partially reduce the penalty.',
      },
      {
        question: 'What if I can\'t afford care during the penalty period?',
        answer: 'This is the serious consequence of improper planning. You may need to apply for a hardship waiver (rarely granted), find family to provide care, or work with an elder law attorney to explore options. In worst cases, some people don\'t receive proper care during the penalty period.',
      },
    ],

    relatedArticles: [
      'irrevocable-trust-nursing-home',
      'medicaid-estate-recovery',
      'lady-bird-deed-explained',
    ],
    relatedGuides: ['/guide/gold-ira-guide'],
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function getAllMedicaidArticles(): MedicaidArticle[] {
  return medicaidPlanningArticles;
}

export function getMedicaidArticleBySlug(slug: string): MedicaidArticle | undefined {
  return medicaidPlanningArticles.find((article) => article.slug === slug);
}

export function getAllMedicaidArticleSlugs(): string[] {
  return medicaidPlanningArticles.map((article) => article.slug);
}

export function getRelatedMedicaidArticles(currentSlug: string): MedicaidArticle[] {
  const current = getMedicaidArticleBySlug(currentSlug);
  if (!current) return [];

  return current.relatedArticles
    .map((slug) => getMedicaidArticleBySlug(slug))
    .filter((article): article is MedicaidArticle => article !== undefined);
}
