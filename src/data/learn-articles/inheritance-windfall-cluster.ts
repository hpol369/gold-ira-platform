// src/data/learn-articles/inheritance-windfall-cluster.ts
// Inheritance and Windfall planning cluster - targeting people who just received money

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const inheritanceWindfallArticles: LearnArticleRegistry = {
  'what-to-do-with-100k-inheritance': {
    slug: 'what-to-do-with-100k-inheritance',
    title: 'What to Do With a $100,000 Inheritance',
    subtitle: 'Just inherited $100k? Here\'s a clear plan to protect and grow this money wisely.',

    metaTitle: 'What to Do With $100k Inheritance | Smart Planning Guide 2026',
    metaDescription: 'Inherited $100,000? Learn the tax implications, smart allocation strategies, and how to protect this windfall for your retirement.',
    keywords: ['what to do with 100k inheritance', '100k inheritance investment', 'inherited 100000'],

    targetKeyword: 'what to do with 100k inheritance',
    volume: 80,
    difficulty: 0,
    cpc: 0.90,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Don\'t make any major financial decisions for at least 30 days.',
      'Inheritances are generally not taxable income, but investment gains are.',
      'Build an emergency fund first before investing any inheritance.',
      'Pay off high-interest debt (credit cards) before investing.',
      'Consider allocating 10-20% to a Gold IRA for protection.',
      'Consult a fee-only financial advisor for personalized guidance.',
      'Don\'t tell everyone about your inheritance - it attracts problems.',
    ],

    tocItems: [
      { id: 'first-steps', label: 'First Steps' },
      { id: 'tax-implications', label: 'Tax Implications' },
      { id: 'allocation-strategy', label: 'Allocation Strategy' },
      { id: 'emergency-fund', label: 'Emergency Fund First' },
      { id: 'investment-options', label: 'Investment Options' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'first-steps',
        icon: 'Pause',
        iconColor: 'blue',
        title: 'First Steps: Don\'t Rush',
        content: 'The most important thing you can do with a $100k inheritance is **nothing**. At least for 30 days.\n\nGrief, excitement, and pressure from others can lead to terrible decisions. Park the money somewhere safe while you think.',
        bullets: [
          'Put the money in a high-yield savings account temporarily',
          'Don\'t tell extended family or friends about the amount',
          'Ignore anyone trying to sell you something',
          'Take time to grieve and process',
          'Make a plan before taking action',
        ],
      },
      {
        id: 'tax-implications',
        icon: 'FileText',
        iconColor: 'amber',
        title: 'Tax Implications of Inheritance',
        content: 'Good news: In most cases, an inheritance is **not taxable income**. However, there are nuances:',
        table: {
          headers: ['Type', 'Tax Treatment'],
          rows: [
            ['Cash inheritance', 'Generally not taxable'],
            ['Inherited IRA/401k', 'Distributions are taxable'],
            ['Inherited stocks/funds', 'Get "stepped-up" basis at death'],
            ['Inherited real estate', 'Get stepped-up basis; sell tax-free if no gain'],
            ['Estate tax', 'Only if estate > $13.61M (2024)'],
          ],
        },
        bullets: [
          '**Inherited IRA:** Must take distributions within 10 years (SECURE Act)',
          '**Stepped-up basis:** You only pay capital gains on appreciation AFTER inheritance',
          '**Interest/dividends:** Any earnings after you receive the money ARE taxable',
        ],
      },
      {
        id: 'allocation-strategy',
        icon: 'PieChart',
        iconColor: 'green',
        title: 'Suggested $100k Allocation Strategy',
        content: 'Here\'s a balanced approach for someone nearing or in retirement:',
        table: {
          headers: ['Category', 'Amount', 'Purpose'],
          rows: [
            ['Emergency fund', '$15,000-20,000', '6 months expenses in savings'],
            ['Pay off debt', 'Variable', 'Eliminate high-interest credit cards'],
            ['Gold IRA', '$15,000-20,000', 'Inflation/crash protection'],
            ['Traditional investments', '$40,000-50,000', 'Diversified stock/bond funds'],
            ['Enjoyment fund', '$5,000-10,000', 'Something meaningful'],
          ],
        },
        bullets: [
          'This is a starting point - adjust for your situation',
          'If you have no emergency fund, that\'s priority #1',
          'If you carry credit card debt, pay it off first',
          'The Gold IRA portion protects against what you can\'t predict',
        ],
      },
      {
        id: 'emergency-fund',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Why Emergency Fund Comes First',
        content: 'Before investing a dime, make sure you have 6 months of expenses in accessible savings.',
        bullets: [
          'Job loss, medical emergencies, car repairs happen',
          'Without emergency fund, you\'ll be forced to sell investments at bad times',
          'High-yield savings accounts pay 4-5% in 2024',
          'This is boring but crucial',
          'Emergency fund = insurance against forced selling',
        ],
      },
      {
        id: 'investment-options',
        icon: 'TrendingUp',
        iconColor: 'blue',
        title: 'Investment Options for the Rest',
        content: 'Once emergency fund and debt are handled, here\'s where to put the rest:',
        bullets: [
          '**Gold IRA (15-20%):** Protection against inflation and market crashes',
          '**Index funds (40-50%):** Low-cost exposure to stock market growth',
          '**Bond funds (20-30%):** Stability and income',
          '**I-Bonds:** Up to $10k/year in inflation-protected savings bonds',
          '**Real estate (optional):** REITs for diversification without landlord hassles',
        ],
      },
    ],

    warningBox: {
      title: 'Don\'t Tell Everyone About Your Inheritance',
      content: 'This attracts relatives asking for "loans," scammers, and salespeople. Keep the amount private. You don\'t owe anyone an explanation of what you do with inherited money.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Protect Your Inheritance With Physical Gold',
      content: 'You didn\'t work for this money - someone you loved did. Honor their legacy by protecting a portion from market volatility.',
      bullets: [
        'Allocate $15,000-20,000 to a Gold IRA for protection',
        'Physical gold holds value when markets crash',
        'No one else\'s decisions can destroy this portion',
        'Same tax advantages as traditional IRA',
        'Protection against the unexpected',
      ],
    },

    faqs: [
      {
        question: 'Do I have to pay taxes on a $100k inheritance?',
        answer: 'Generally no. Direct inheritances are not taxable income. However, if you inherit an IRA or 401k, distributions from those accounts are taxable. Interest or gains earned after you receive the inheritance are also taxable.',
      },
      {
        question: 'Should I pay off my mortgage with inheritance money?',
        answer: 'It depends on your interest rate. If your mortgage is under 4%, you may earn more investing the money. If it\'s over 6%, paying it off provides a guaranteed "return." Consider your peace of mind too - some people sleep better without a mortgage.',
      },
      {
        question: 'Should I give some inheritance to my children now?',
        answer: 'Consider your own security first. You can gift up to $18,000 per person per year without gift tax implications. But don\'t give away money you might need - you can\'t ask for it back.',
      },
    ],

    relatedArticles: ['what-to-do-with-200k-inheritance', 'sudden-wealth-syndrome'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/gold-ira-calculator'],
  },

  'what-to-do-with-200k-inheritance': {
    slug: 'what-to-do-with-200k-inheritance',
    title: 'What to Do With a $200,000 Inheritance',
    subtitle: 'A $200k inheritance requires thoughtful planning. Here\'s how to make it last.',

    metaTitle: 'What to Do With $200k Inheritance | Planning Guide 2026',
    metaDescription: 'Inherited $200,000? Learn smart diversification strategies, tax-efficient investing, and when to get professional help.',
    keywords: ['what to do with 200k inheritance', '200k inheritance planning', 'invest 200k inheritance'],

    targetKeyword: 'what to do with 200k inheritance',
    volume: 60,
    difficulty: 0,
    cpc: 1.80,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'At $200k, you may benefit from professional financial advice.',
      'Estate tax isn\'t a concern until estates exceed $13+ million.',
      'Diversification across account types is crucial at this level.',
      'Consider splitting between taxable, tax-deferred, and tax-free accounts.',
      'A Gold IRA portion provides crucial crash protection.',
      'Don\'t put all $200k in one investment type.',
      'Take 90 days before making major decisions.',
    ],

    tocItems: [
      { id: 'first-90-days', label: 'First 90 Days' },
      { id: 'professional-help', label: 'Getting Professional Help' },
      { id: 'tax-considerations', label: 'Estate Tax Considerations' },
      { id: 'diversification', label: 'Diversification Strategy' },
      { id: 'account-types', label: 'Account Types' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'first-90-days',
        icon: 'Calendar',
        iconColor: 'blue',
        title: 'The First 90 Days',
        content: 'With $200k, you have time to do this right. Use it.',
        bullets: [
          'Park the money in a high-yield savings account or Treasury bills',
          'Don\'t make any investment decisions for 90 days',
          'Use this time to interview financial advisors',
          'Grieve and process - this is usually tied to loss',
          'Research before committing to anything',
          'Ignore anyone pressuring you to act quickly',
        ],
      },
      {
        id: 'professional-help',
        icon: 'Users',
        iconColor: 'green',
        title: 'When to Get Professional Help',
        content: 'At $200k, professional advice often pays for itself. But choose the right type:',
        table: {
          headers: ['Type', 'How They\'re Paid', 'Best For'],
          rows: [
            ['Fee-only advisor', 'Flat fee or hourly', 'Unbiased advice'],
            ['Fiduciary advisor', 'Various', 'Legal duty to your interest'],
            ['Commission-based', 'Product sales', 'AVOID - conflicts of interest'],
            ['Robo-advisor', 'Low % of assets', 'Simple automated investing'],
          ],
        },
        bullets: [
          'Look for "fee-only" AND "fiduciary" together',
          'NAPFA.org lists fee-only advisors',
          'Expect to pay $1,000-3,000 for a comprehensive plan',
          'This investment can save you from costly mistakes',
        ],
      },
      {
        id: 'tax-considerations',
        icon: 'FileText',
        iconColor: 'amber',
        title: 'Estate Tax Considerations',
        content: 'Good news: Estate tax probably doesn\'t apply to your inheritance.',
        bullets: [
          'Federal estate tax only kicks in above $13.61 million (2024)',
          'Most states have no inheritance tax',
          'States with inheritance tax: Iowa, Kentucky, Maryland, Nebraska, New Jersey, Pennsylvania',
          'Inheritance tax rates vary by your relationship to the deceased',
          'Direct descendants usually exempt or have very low rates',
        ],
      },
      {
        id: 'diversification',
        icon: 'PieChart',
        iconColor: 'green',
        title: '$200k Diversification Strategy',
        content: 'Here\'s a balanced allocation for someone approaching retirement:',
        table: {
          headers: ['Category', 'Amount', 'Purpose'],
          rows: [
            ['Emergency fund', '$20,000-30,000', '6-12 months expenses'],
            ['Pay off debt', 'Variable', 'All high-interest debt'],
            ['Gold IRA', '$30,000-40,000', 'Crash protection (15-20%)'],
            ['Stock index funds', '$60,000-80,000', 'Growth potential'],
            ['Bond funds', '$30,000-40,000', 'Stability'],
            ['Enjoyment', '$10,000-20,000', 'Something meaningful'],
          ],
        },
      },
      {
        id: 'account-types',
        icon: 'Layers',
        iconColor: 'blue',
        title: 'Diversify Across Account Types',
        content: 'With $200k, spread investments across different tax treatment:',
        bullets: [
          '**Taxable brokerage:** Flexibility, but pay taxes on gains/dividends',
          '**Traditional IRA/401k:** Tax-deferred growth, taxable withdrawals',
          '**Roth IRA:** Tax-free growth AND withdrawals (fund via backdoor if needed)',
          '**Gold IRA:** Physical asset protection with tax advantages',
          '**I-Bonds:** Inflation-protected, tax-deferred until redemption',
        ],
      },
    ],

    warningBox: {
      title: 'Beware of "Advisors" Who Find You',
      content: 'Anyone who reaches out to you unsolicited about your inheritance is a salesperson, not an advisor. Real fiduciary advisors don\'t cold-call. You find them, not the other way around.',
      type: 'red',
    },

    goldBridge: {
      title: 'Protect Your $200k Legacy',
      content: 'This money represents someone\'s lifetime of work. Protect a meaningful portion from the volatility you can\'t control.',
      bullets: [
        'Allocate $30,000-40,000 (15-20%) to a Gold IRA',
        'Physical gold can\'t be devalued by Federal Reserve policies',
        'Market crashes don\'t affect gold the same way',
        'This portion is your "insurance" against the unexpected',
        'Same tax advantages as traditional retirement accounts',
      ],
    },

    faqs: [
      {
        question: 'How much should I pay a financial advisor for help with $200k?',
        answer: 'A fee-only advisor should charge $1,500-3,500 for a comprehensive financial plan. Avoid anyone charging more than 1% of assets annually for ongoing management. For $200k, that\'s $2,000/year - too much for basic index fund investing.',
      },
      {
        question: 'Should I invest the $200k all at once or gradually?',
        answer: 'Research shows lump-sum investing beats dollar-cost averaging about 2/3 of the time. However, if investing all at once would cause you anxiety, spreading it over 6-12 months is psychologically fine. The best strategy is one you can stick with.',
      },
      {
        question: 'What if I inherited this in an IRA rather than cash?',
        answer: 'If you inherited an IRA, you must take distributions within 10 years (SECURE Act). Consider spreading distributions evenly to minimize tax bracket creep. This is a case where professional tax advice is worth paying for.',
      },
    ],

    relatedArticles: ['what-to-do-with-100k-inheritance', 'what-to-do-with-500k-inheritance', 'sudden-wealth-syndrome'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/gold-ira-calculator'],
  },

  'what-to-do-with-500k-inheritance': {
    slug: 'what-to-do-with-500k-inheritance',
    title: 'What to Do With a $500,000 Inheritance',
    subtitle: 'Half a million dollars requires serious planning. Here\'s your comprehensive guide.',

    metaTitle: 'What to Do With $500k Inheritance | Wealth Management Guide 2026',
    metaDescription: 'Inherited $500,000? Learn wealth management strategies, tax-efficient investing, and trust considerations for large inheritances.',
    keywords: ['what to do with 500k inheritance', 'large inheritance planning', 'half million inheritance'],

    targetKeyword: 'what to do with 500k inheritance',
    volume: 50,
    difficulty: 0,
    cpc: 2.00,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'At $500k, professional wealth management is essential.',
      'Consider establishing a trust for asset protection and estate planning.',
      'Diversify across multiple asset classes, not just stocks and bonds.',
      'Tax-efficient investing becomes critical at this level.',
      'Physical gold allocation provides crucial portfolio insurance.',
      'Don\'t discuss the amount with anyone who doesn\'t need to know.',
      'Take 6 months before making major decisions.',
    ],

    tocItems: [
      { id: 'initial-steps', label: 'Initial Steps' },
      { id: 'wealth-management', label: 'Wealth Management' },
      { id: 'tax-efficiency', label: 'Tax-Efficient Investing' },
      { id: 'trust-planning', label: 'Trust Considerations' },
      { id: 'allocation', label: 'Asset Allocation' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'initial-steps',
        icon: 'Shield',
        iconColor: 'blue',
        title: 'Initial Steps With $500k',
        content: 'A half-million dollar inheritance is life-changing money. Don\'t rush.',
        bullets: [
          'Park funds in Treasury bills or money market (earning 4-5%)',
          'Take 6 months before major decisions',
          'Interview multiple wealth managers and attorneys',
          'Tell no one outside immediate family about the amount',
          'Continue living your normal life for now',
          'Avoid major purchases for at least a year',
        ],
      },
      {
        id: 'wealth-management',
        icon: 'Users',
        iconColor: 'green',
        title: 'Building Your Advisory Team',
        content: 'With $500k, you need more than just a financial advisor:',
        table: {
          headers: ['Professional', 'Role', 'Expected Cost'],
          rows: [
            ['Fee-only financial planner', 'Overall financial strategy', '$2,500-5,000 plan'],
            ['Estate planning attorney', 'Trusts, wills, asset protection', '$2,000-5,000'],
            ['CPA/Tax advisor', 'Tax-efficient strategies', '$500-1,500/year'],
            ['Insurance review', 'Liability, life, umbrella', 'Varies'],
          ],
        },
        bullets: [
          'Look for fee-only fiduciary advisors (not commission-based)',
          'Interview at least 3 of each before choosing',
          'Ask about experience with inheritances specifically',
          'These professionals should work together, not in silos',
        ],
      },
      {
        id: 'tax-efficiency',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'Tax-Efficient Investing Strategies',
        content: 'At $500k, tax efficiency can save you tens of thousands over time:',
        bullets: [
          '**Asset location:** Put bonds in tax-advantaged accounts, stocks in taxable',
          '**Tax-loss harvesting:** Offset gains with losses to reduce taxes',
          '**Municipal bonds:** Tax-free interest if you\'re in high bracket',
          '**Qualified dividends:** Lower tax rate than ordinary income',
          '**Hold period:** Long-term capital gains taxed lower than short-term',
          '**Roth conversions:** Convert during low-income years',
        ],
      },
      {
        id: 'trust-planning',
        icon: 'FileText',
        iconColor: 'purple',
        title: 'Trust Considerations',
        content: 'With $500k, you should discuss trust options with an attorney:',
        bullets: [
          '**Revocable living trust:** Avoids probate, maintains control',
          '**Irrevocable trust:** Asset protection, but gives up control',
          '**Charitable remainder trust:** Tax benefits if charitable',
          '**Beneficiary planning:** Protect inheritance for your heirs',
          '**Spendthrift provisions:** Protect from creditors or poor decisions',
        ],
        callout: {
          type: 'info',
          title: 'Trust vs. Will',
          content: 'A trust avoids probate (public, expensive, slow). At $500k, this is usually worth the upfront cost of establishing a trust.',
        },
      },
      {
        id: 'allocation',
        icon: 'PieChart',
        iconColor: 'green',
        title: '$500k Asset Allocation Strategy',
        content: 'A diversified approach for someone within 10 years of retirement:',
        table: {
          headers: ['Asset Class', 'Amount', 'Percentage'],
          rows: [
            ['Emergency fund', '$30,000-50,000', '6-10%'],
            ['Gold IRA', '$75,000-100,000', '15-20%'],
            ['US stock index funds', '$150,000-175,000', '30-35%'],
            ['International stocks', '$50,000-75,000', '10-15%'],
            ['Bond funds', '$75,000-100,000', '15-20%'],
            ['Real estate (REITs)', '$25,000-50,000', '5-10%'],
            ['Discretionary/enjoyment', '$25,000', '5%'],
          ],
        },
      },
    ],

    warningBox: {
      title: 'Lifestyle Inflation Is the Silent Killer',
      content: 'The biggest risk to a $500k inheritance isn\'t bad investments - it\'s lifestyle inflation. Buying the bigger house, the nicer car, the expensive vacations. Live on your earned income. Let the inheritance compound.',
      type: 'red',
    },

    goldBridge: {
      title: 'Protect Your Half-Million Legacy',
      content: 'This inheritance likely represents multiple generations of wealth. Physical gold protects against systemic risks that diversified stocks and bonds cannot.',
      bullets: [
        'Allocate $75,000-100,000 (15-20%) to physical gold',
        'Gold has preserved wealth for 5,000+ years',
        'Protection against currency devaluation and inflation',
        'No counterparty risk - you own the actual metal',
        'Complements paper assets perfectly',
        'Same tax advantages in a Gold IRA',
      ],
    },

    faqs: [
      {
        question: 'Should I quit my job with a $500k inheritance?',
        answer: 'Probably not. $500k invested conservatively generates about $20,000/year (4% rule). That\'s not enough to replace most incomes. However, it might let you take a lower-stress job, go part-time, or retire a few years earlier than planned.',
      },
      {
        question: 'Should I buy a house outright with this inheritance?',
        answer: 'Putting all $500k in one asset (a house) destroys diversification. If you\'re going to buy real estate, consider putting 20-30% down and investing the rest. However, there\'s psychological value in owning your home outright - it\'s a personal decision.',
      },
      {
        question: 'How do I protect this from a future divorce?',
        answer: 'Inheritances are generally separate property IF you keep them separate. Don\'t commingle with marital assets. Keep documentation of the inheritance source. Consider a post-nuptial agreement if married. Consult a family law attorney in your state.',
      },
    ],

    relatedArticles: ['what-to-do-with-200k-inheritance', 'sudden-wealth-syndrome', 'business-sale-retirement-planning'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/gold-ira-calculator'],
  },

  'sudden-wealth-syndrome': {
    slug: 'sudden-wealth-syndrome',
    title: 'Sudden Wealth Syndrome: What It Is and How to Avoid Costly Mistakes',
    subtitle: 'Lottery winners, inheritance recipients, and business sellers often struggle. Here\'s why - and how to protect yourself.',

    metaTitle: 'Sudden Wealth Syndrome: Avoid Windfall Mistakes | Guide 2026',
    metaDescription: 'Learn about sudden wealth syndrome, common mistakes lottery winners and inheritance recipients make, and how to protect your windfall.',
    keywords: ['sudden wealth syndrome', 'lottery winner mistakes', 'windfall anxiety', 'inheritance guilt'],

    targetKeyword: 'sudden wealth syndrome',
    volume: 40,
    difficulty: 3,

    category: 'safety',
    threatLevel: 'warning',

    takeaways: [
      'Sudden Wealth Syndrome is a real psychological condition affecting windfall recipients.',
      'Most lottery winners end up worse off within 5 years.',
      'The waiting period before big decisions is crucial - minimum 6 months.',
      'Guilt, anxiety, and relationship changes are normal responses to sudden wealth.',
      'Keeping wealth private is one of the most important protective measures.',
      'Professional help (therapist AND advisor) can prevent costly mistakes.',
    ],

    tocItems: [
      { id: 'what-is-sws', label: 'What Is Sudden Wealth Syndrome' },
      { id: 'common-mistakes', label: 'Common Mistakes' },
      { id: 'psychological-impacts', label: 'Psychological Impacts' },
      { id: 'waiting-period', label: 'The Waiting Period' },
      { id: 'protection-strategies', label: 'Protection Strategies' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'what-is-sws',
        icon: 'Brain',
        iconColor: 'purple',
        title: 'What Is Sudden Wealth Syndrome?',
        content: 'Sudden Wealth Syndrome (SWS) refers to the psychological distress and behavioral changes that can occur when someone receives a large windfall of money.\n\nIt affects lottery winners, inheritance recipients, business sellers, athletes who sign big contracts, and anyone who experiences rapid wealth.',
        bullets: [
          'Recognized by psychologists specializing in wealth',
          'Not about being "ungrateful" - it\'s a real adjustment disorder',
          'Can lead to depression, anxiety, and isolation',
          'Relationships fundamentally change after a windfall',
          'The unprepared are most vulnerable',
        ],
      },
      {
        id: 'common-mistakes',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Costly Mistakes Windfall Recipients Make',
        content: 'Studies show common patterns among those who lose their windfall:',
        bullets: [
          '**Immediate major purchases:** Houses, cars, boats before having a plan',
          '**Telling everyone:** Attracts requests, scams, and changed relationships',
          '**"Loans" to family:** Usually never repaid, destroys relationships anyway',
          '**Bad investments:** Get-rich-quick schemes, "opportunities" from strangers',
          '**Lifestyle inflation:** Living like they have 10x what they actually have',
          '**No professional help:** Thinking they can figure it out alone',
          '**Quitting their job:** Losing structure, identity, and social connections',
        ],
        callout: {
          type: 'warning',
          title: 'Lottery Winner Statistics',
          content: 'About 70% of lottery winners end up broke within 5 years. This isn\'t about lottery winners being foolish - it\'s about sudden wealth being psychologically difficult for everyone.',
        },
      },
      {
        id: 'psychological-impacts',
        icon: 'Heart',
        iconColor: 'amber',
        title: 'Psychological Impacts of Sudden Wealth',
        content: 'If you\'re feeling any of these after receiving a windfall, you\'re not alone:',
        bullets: [
          '**Guilt:** "Why me? I don\'t deserve this." (Especially with inheritance)',
          '**Anxiety:** "What if I lose it all? What if I make mistakes?"',
          '**Isolation:** Friends treat you differently, you can\'t relate anymore',
          '**Paralysis:** So many options you can\'t make any decision',
          '**Identity crisis:** "Who am I without my normal life/struggles?"',
          '**Relationship strain:** Family dynamics change, jealousy emerges',
        ],
      },
      {
        id: 'waiting-period',
        icon: 'Clock',
        iconColor: 'blue',
        title: 'The Mandatory Waiting Period',
        content: 'The single most important thing you can do is **wait**.',
        table: {
          headers: ['Windfall Size', 'Minimum Wait', 'Major Purchases'],
          rows: [
            ['Under $100k', '30 days', '90 days'],
            ['$100k - $500k', '90 days', '6 months'],
            ['$500k - $1M', '6 months', '1 year'],
            ['Over $1M', '1 year', '2 years'],
          ],
        },
        bullets: [
          'Park money somewhere safe earning interest (Treasury bills, HYSA)',
          'Make no major financial decisions during this period',
          'Use this time to assemble your advisory team',
          'Continue living your normal life',
          'Let the emotional intensity settle',
        ],
      },
      {
        id: 'protection-strategies',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Strategies to Protect Yourself and Your Windfall',
        content: 'Concrete steps to avoid becoming a cautionary tale:',
        bullets: [
          '**Keep it private:** Only immediate family needs to know amounts',
          '**Hire professionals:** Fee-only advisor + therapist who specializes in wealth',
          '**Practice saying no:** "I\'m not in a position to help financially right now"',
          '**Keep your job:** At least for 1-2 years to maintain structure',
          '**Budget like before:** Lifestyle inflation is the enemy',
          '**Diversify immediately:** Don\'t put it all in one place',
          '**Physical gold allocation:** Can\'t be stolen by hackers or bad decisions',
        ],
      },
    ],

    warningBox: {
      title: 'The Request for "Loans" Never Ends',
      content: 'Family members and friends will ask to "borrow" money. Almost none of these are ever repaid, and the relationship is damaged regardless. Have a policy: "I don\'t loan money to friends or family, but I\'d love to buy you dinner."',
      type: 'red',
    },

    goldBridge: {
      title: 'Physical Gold: The Unimpulsive Investment',
      content: 'One advantage of Gold IRA investing for windfall recipients: it\'s hard to spend impulsively. The gold is protected in an IRA, providing a barrier against your own potential bad decisions.',
      bullets: [
        'Physical gold in an IRA can\'t be easily liquidated on a whim',
        'Forces long-term thinking during an emotionally volatile time',
        'Protects a portion from your own potential mistakes',
        'Provides genuine diversification from paper assets',
        'Peace of mind that something tangible backs your wealth',
      ],
    },

    faqs: [
      {
        question: 'Is Sudden Wealth Syndrome a real medical condition?',
        answer: 'While not in the DSM-5 as a formal diagnosis, it\'s widely recognized by financial psychologists and wealth counselors. The symptoms are real and can include clinical anxiety and depression. Seeking help from a therapist who specializes in wealth issues is appropriate.',
      },
      {
        question: 'I feel guilty about my inheritance. Is that normal?',
        answer: 'Extremely normal, especially when the money comes from a loved one\'s death. This guilt often drives poor decisions - giving away too much, not protecting the money, or self-sabotage. A therapist can help you process this guilt productively.',
      },
      {
        question: 'How do I tell family I won\'t give them money?',
        answer: 'Be direct and don\'t apologize or over-explain. "I\'m not in a position to help financially" is a complete sentence. You don\'t owe anyone an explanation of your finances. Expect some relationships to change - that\'s information about those relationships.',
      },
    ],

    relatedArticles: ['what-to-do-with-100k-inheritance', 'what-to-do-with-500k-inheritance', 'business-sale-retirement-planning'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/gold-ira-calculator'],
  },

  'business-sale-retirement-planning': {
    slug: 'business-sale-retirement-planning',
    title: 'Business Sale Retirement Planning: Protecting Your Exit Proceeds',
    subtitle: 'Selling your business for retirement? Here\'s how to minimize taxes and protect your proceeds.',

    metaTitle: 'Business Sale Retirement Planning | Exit Strategy Guide 2026',
    metaDescription: 'Selling your business and retiring? Learn capital gains strategies, installment sales, and how to roll proceeds into a Gold IRA.',
    keywords: ['business sale retirement', 'sell business retire', 'exit strategy retirement planning'],

    targetKeyword: 'business sale retirement',
    volume: 30,
    difficulty: 2,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Plan your exit at least 3-5 years before selling.',
      'Installment sales can spread capital gains over multiple years.',
      'Qualified Small Business Stock (QSBS) may exclude up to $10M in gains.',
      'Rolling proceeds to retirement accounts provides tax deferral.',
      'Physical gold in an IRA protects against post-sale market volatility.',
      'Get professional tax and legal advice before the sale closes.',
    ],

    tocItems: [
      { id: 'exit-planning', label: 'Exit Planning Timeline' },
      { id: 'capital-gains', label: 'Capital Gains Strategies' },
      { id: 'installment-sales', label: 'Installment Sales' },
      { id: 'retirement-accounts', label: 'Retirement Account Options' },
      { id: 'post-sale-investing', label: 'Post-Sale Investing' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'exit-planning',
        icon: 'Calendar',
        iconColor: 'blue',
        title: 'Start Exit Planning 3-5 Years Early',
        content: 'The biggest mistake business owners make is not planning early enough. Tax strategies require advance planning.',
        bullets: [
          '**Year -5:** Start cleaning up financials, reducing owner dependencies',
          '**Year -3:** Consult exit planning specialist, implement tax strategies',
          '**Year -2:** Maximize business value, address legal issues',
          '**Year -1:** Begin buyer search, negotiate deal structure',
          '**Year 0:** Execute sale with optimized tax treatment',
        ],
      },
      {
        id: 'capital-gains',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'Capital Gains Tax Strategies',
        content: 'Understanding your tax obligations and opportunities:',
        table: {
          headers: ['Strategy', 'Potential Benefit', 'Requirements'],
          rows: [
            ['QSBS exclusion', 'Exclude up to $10M gains', 'C-corp, 5+ years, qualified business'],
            ['Installment sale', 'Spread gains over years', 'Structured payment terms'],
            ['Opportunity Zone', 'Defer and reduce gains', 'Reinvest in qualified OZ fund'],
            ['Charitable trust', 'Reduce taxes, support causes', 'Charitable intent'],
            ['ESOP sale', 'Tax deferral/elimination', 'Sell to employees'],
          ],
        },
        bullets: [
          'Federal long-term capital gains: 0%, 15%, or 20% depending on income',
          'Net Investment Income Tax: Additional 3.8% above certain thresholds',
          'State capital gains vary: Some states (like CA) tax as ordinary income',
        ],
      },
      {
        id: 'installment-sales',
        icon: 'FileText',
        iconColor: 'green',
        title: 'Installment Sales Explained',
        content: 'An installment sale lets you receive payments over time and recognize gains proportionally:',
        bullets: [
          '**How it works:** Receive payments over 2-10+ years, pay capital gains as you receive money',
          '**Tax benefit:** Keeps you in lower brackets vs. one huge lump sum',
          '**Interest income:** You earn interest on the unpaid balance',
          '**Risk:** Buyer might default on future payments',
          '**Mitigation:** Security agreements, collateral, insurance',
        ],
        callout: {
          type: 'example',
          title: 'Example: $2M Business Sale',
          content: 'Lump sum: ~$400k federal tax in one year. Installment over 5 years ($400k/year): ~$320k total federal tax. Savings: ~$80,000.',
        },
      },
      {
        id: 'retirement-accounts',
        icon: 'Wallet',
        iconColor: 'purple',
        title: 'Rolling Proceeds to Retirement Accounts',
        content: 'After the sale, maximize tax-advantaged accounts:',
        bullets: [
          '**Max out 401k/IRA:** $23,000 + $7,500 catch-up if 50+ (2024)',
          '**SEP-IRA (if applicable):** Up to $69,000 if you have self-employment income',
          '**Health Savings Account:** $4,150 individual, $8,300 family + catch-up',
          '**Gold IRA:** Roll existing retirement funds OR fund with after-tax proceeds',
          '**Backdoor Roth:** Convert traditional IRA to Roth if income allows',
        ],
      },
      {
        id: 'post-sale-investing',
        icon: 'TrendingUp',
        iconColor: 'green',
        title: 'Investing Your Sale Proceeds',
        content: 'After running a business, you understand risk. Apply that wisdom to your investment approach:',
        bullets: [
          '**Diversification:** Don\'t put all proceeds in one investment',
          '**Liquidity ladder:** Emergency fund > short-term > long-term',
          '**Income vs. growth:** Balance based on retirement timeline',
          '**Physical assets:** Gold provides tangible value after years of owning business assets',
          '**Take time:** Don\'t rush. Park in Treasury bills while planning.',
        ],
      },
    ],

    warningBox: {
      title: 'Don\'t Trust Verbal Tax Advice',
      content: 'Friends, buyers, and even some professionals give well-meaning but incorrect tax advice. Get written opinions from CPAs and tax attorneys before structuring your deal. The cost of professional advice is tiny compared to potential mistakes.',
      type: 'amber',
    },

    goldBridge: {
      title: 'Protect Your Life\'s Work With Physical Gold',
      content: 'You spent years building your business. Now that you\'ve converted it to financial assets, protect a portion from the market risks you can\'t control.',
      bullets: [
        'Roll existing retirement accounts to Gold IRA before or after sale',
        'Fund a new Gold IRA with after-tax sale proceeds',
        'Physical gold has no counterparty risk - unlike stocks',
        'Protection against inflation eroding your purchasing power',
        'You controlled your business - now control your retirement assets',
        'Tangible assets feel familiar to business owners',
      ],
    },

    faqs: [
      {
        question: 'How much tax will I pay when I sell my business?',
        answer: 'It depends on your business structure, sale price, cost basis, and sale structure. A rough estimate: 20% federal capital gains + 3.8% NIIT + state taxes (varies). A $2M gain might cost $500k-600k+ in taxes without planning. With planning, significantly less.',
      },
      {
        question: 'Should I sell my business all at once or as an installment sale?',
        answer: 'Lump sum gives you certainty and flexibility. Installment reduces taxes but carries buyer default risk. Consider a hybrid: portion upfront, portion installment. Your risk tolerance and the buyer\'s creditworthiness matter.',
      },
      {
        question: 'Can I roll business sale proceeds directly into an IRA?',
        answer: 'Not directly - business sale proceeds are not eligible for direct IRA rollover. However, you can contribute to IRAs from any income source up to annual limits. The main strategy is using existing retirement accounts and maximizing new contributions.',
      },
    ],

    relatedArticles: ['sudden-wealth-syndrome', 'what-to-do-with-500k-inheritance'],
    relatedGuides: ['/guide/gold-ira-guide', '/guide/401k-to-gold-rollover'],
    relatedTools: ['/tools/gold-ira-calculator'],
  },
};
