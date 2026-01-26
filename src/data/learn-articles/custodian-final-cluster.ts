// src/data/learn-articles/custodian-final-cluster.ts
// SDIRA custodian reviews and comparison articles
// Covers PENSCO, NuView, Entrust fees, and comprehensive custodian comparisons

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const custodianFinalArticles: LearnArticleRegistry = {
  'pensco-trust-reviews': {
    slug: 'pensco-trust-reviews',
    title: 'PENSCO Trust Reviews: What Happened After the Pacific Premier Merger?',
    subtitle: 'PENSCO Trust Company was a leading self-directed IRA custodian before merging with Pacific Premier Trust. Understand what this means for your account.',
    metaTitle: 'PENSCO Trust Reviews 2025: Fees, Services & Merger Impact',
    metaDescription: 'Complete PENSCO Trust Company review covering fees, services, pros and cons, and what the Pacific Premier Trust merger means for self-directed IRA investors.',
    keywords: [
      'pensco trust reviews',
      'pensco trust company',
      'pensco ira',
      'pensco self directed ira',
      'pacific premier trust pensco',
      'pensco trust fees'
    ],
    targetKeyword: 'pensco trust reviews',
    volume: 320,
    difficulty: 5,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      'PENSCO Trust merged with Pacific Premier Trust in 2021, consolidating under the PPT brand',
      'Former PENSCO accounts maintain the same investment options and custodial services',
      'Pacific Premier Trust charges competitive fees with account minimums starting at $1,500',
      'The custodian specializes in alternative assets including real estate, private equity, and precious metals',
      'Customer service reviews are mixed, with some reporting slow response times post-merger'
    ],
    tocItems: [
      { id: 'pensco-history', label: 'PENSCO History & Merger' },
      { id: 'fees-structure', label: 'Fee Structure' },
      { id: 'investment-options', label: 'Investment Options' },
      { id: 'pros-cons', label: 'Pros & Cons' },
      { id: 'merger-impact', label: 'Merger Impact on Accounts' },
      { id: 'gold-ira-bridge', label: 'Simpler Gold IRA Option' }
    ],
    sections: [
      {
        id: 'pensco-history',
        icon: 'Building',
        iconColor: 'blue',
        title: 'PENSCO History & The Pacific Premier Trust Merger',
        content: 'PENSCO Trust Company was founded in 1989 and became one of the largest independent self-directed IRA custodians in the United States. In 2021, PENSCO merged with Pacific Premier Trust, creating a larger combined entity.',
        bullets: [
          'PENSCO was headquartered in San Francisco with over $16 billion in assets under custody',
          'Pacific Premier Trust (formerly PENSCO Trust Company of Nevada) acquired PENSCO',
          'All PENSCO accounts were transitioned to the Pacific Premier Trust platform',
          'The combined company operates under the Pacific Premier Trust brand',
          'Former PENSCO clients retained their account numbers and investment holdings'
        ],
        callout: {
          type: 'info',
          title: 'Current Status',
          content: 'If you\'re searching for PENSCO, your account is now with Pacific Premier Trust. The same custodial services continue, but under the PPT brand and systems.'
        }
      },
      {
        id: 'fees-structure',
        icon: 'Receipt',
        iconColor: 'amber',
        title: 'Pacific Premier Trust Fee Structure (Formerly PENSCO)',
        content: 'Pacific Premier Trust maintains a competitive fee structure for self-directed IRAs. Fees vary based on account type and assets held.',
        table: {
          headers: ['Fee Type', 'Amount', 'Notes'],
          rows: [
            ['Account Setup', '$50-$100', 'One-time fee'],
            ['Annual Account Fee', '$275-$395', 'Based on account type'],
            ['Asset-Based Fee', '0.05%-0.25%', 'On certain alternative assets'],
            ['Transaction Fees', '$95-$250', 'Per investment transaction'],
            ['Wire Transfer', '$25', 'Outgoing domestic'],
            ['Account Termination', '$150', 'If closing account']
          ],
          caption: 'Fees as of 2025; verify current rates with Pacific Premier Trust'
        },
        bullets: [
          'Minimum initial investment: $1,500 for most account types',
          'Annual fees may be higher for complex alternative investments',
          'Real estate holdings may incur additional administrative fees',
          'Some fees are negotiable for larger accounts'
        ]
      },
      {
        id: 'investment-options',
        icon: 'Layers',
        iconColor: 'purple',
        title: 'Available Investment Options',
        content: 'Pacific Premier Trust (formerly PENSCO) offers a wide range of alternative investment options for self-directed IRAs.',
        bullets: [
          'Real Estate: Rental properties, commercial real estate, raw land, REITs',
          'Private Equity: Startup investments, private company stock, LLCs',
          'Precious Metals: Gold, silver, platinum, palladium (IRS-approved)',
          'Private Lending: Promissory notes, trust deeds, mortgages',
          'Cryptocurrency: Bitcoin, Ethereum, other digital assets',
          'Traditional Assets: Stocks, bonds, mutual funds, ETFs'
        ],
        callout: {
          type: 'tip',
          title: 'Investment Flexibility',
          content: 'The custodian can hold almost any IRS-permitted investment. However, prohibited transactions rules still apply regardless of custodian.'
        }
      },
      {
        id: 'pros-cons',
        icon: 'Scale',
        iconColor: 'green',
        title: 'Pros & Cons of Pacific Premier Trust',
        content: 'Based on customer reviews and industry analysis, here are the key advantages and disadvantages of using Pacific Premier Trust.',
        table: {
          headers: ['Pros', 'Cons'],
          rows: [
            ['Wide range of alternative investments', 'Higher fees than some competitors'],
            ['Established reputation (30+ years combined)', 'Mixed customer service reviews post-merger'],
            ['Online account management portal', 'Transaction processing can be slow'],
            ['Low account minimums ($1,500)', 'Complex fee structure'],
            ['Educational resources available', 'Some technology integration issues reported']
          ]
        },
        bullets: [
          'BBB Rating: A+ (Pacific Premier Trust)',
          'Customer reviews on Trustpilot and Google are mixed (3.2-3.8 stars average)',
          'Long-term clients generally report satisfaction with account management',
          'New clients sometimes experience onboarding delays'
        ]
      },
      {
        id: 'merger-impact',
        icon: 'RefreshCw',
        iconColor: 'blue',
        title: 'How the Merger Impacts Your Account',
        content: 'If you were a PENSCO client, here\'s what changed and what stayed the same after the Pacific Premier Trust merger.',
        bullets: [
          'Your investments remain the same - no forced liquidation or changes',
          'Account numbers were retained during the transition',
          'Online portal access moved to the Pacific Premier Trust platform',
          'Fee structure may have changed - review your current fee schedule',
          'Customer service contacts and processes updated to PPT systems',
          'Beneficiary designations and account settings carried over'
        ],
        callout: {
          type: 'warning',
          title: 'Action Required',
          content: 'If you haven\'t logged into your account since the merger, update your login credentials on the Pacific Premier Trust website. Also verify your beneficiary designations are current.'
        }
      }
    ],
    goldBridge: {
      title: 'Simpler Option: Let Augusta Handle Your Gold IRA Custodian',
      content: 'Navigating self-directed IRA custodians can be confusing. For Gold IRAs specifically, Augusta Precious Metals works with established custodians and handles all the setup for you.',
      bullets: [
        'Augusta partners with trusted custodians so you don\'t have to research them',
        'All custodian paperwork and setup is handled by Augusta\'s team',
        'No need to compare custodian fees - Augusta provides transparent all-in pricing',
        'Dedicated specialist guides you through the entire process',
        'Free one-on-one web conference to answer all your questions'
      ]
    },
    faqs: [
      {
        question: 'Is PENSCO Trust still in business?',
        answer: 'PENSCO Trust merged with Pacific Premier Trust in 2021. The PENSCO brand no longer operates independently, but all accounts and services continue under the Pacific Premier Trust name. If you had a PENSCO account, it\'s now a PPT account.'
      },
      {
        question: 'What happened to my PENSCO account?',
        answer: 'Your PENSCO account was automatically transitioned to Pacific Premier Trust. Your investments, account number, and beneficiary designations were preserved. You can access your account through the Pacific Premier Trust online portal.'
      },
      {
        question: 'Are Pacific Premier Trust fees higher than PENSCO\'s were?',
        answer: 'Fee structures changed during the merger. Some clients reported slight fee increases, while others saw no change. Review your current fee schedule directly with Pacific Premier Trust to understand your specific costs.'
      },
      {
        question: 'Can I transfer my account from Pacific Premier Trust to another custodian?',
        answer: 'Yes, you can transfer your self-directed IRA to any other qualified custodian at any time. There may be a termination fee ($150 typical) and you\'ll need to coordinate the transfer with both custodians.'
      }
    ],
    relatedArticles: [
      'nuview-ira-reviews',
      'entrust-ira-fees',
      'ira-custodian-comparison',
      'self-directed-ira-prohibited-transactions'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/gold-ira-calculator']
  },

  'nuview-ira-reviews': {
    slug: 'nuview-ira-reviews',
    title: 'NuView IRA Reviews: Is This SDIRA Custodian Right for You?',
    subtitle: 'NuView Trust Company is an Orlando-based self-directed IRA custodian specializing in real estate investments. Here\'s what investors need to know.',
    metaTitle: 'NuView IRA Reviews 2025: Fees, Services & Real Estate IRA Specialty',
    metaDescription: 'Complete NuView Trust Company review covering fees, real estate IRA specialty, pros and cons, and how it compares to other SDIRA custodians.',
    keywords: [
      'nuview ira reviews',
      'nuview trust company',
      'nuview self directed ira',
      'nuview trust reviews',
      'nuview ira fees',
      'nuview real estate ira'
    ],
    targetKeyword: 'nuview ira reviews',
    volume: 260,
    difficulty: 3,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      'NuView Trust Company is headquartered in Orlando, Florida and specializes in real estate IRAs',
      'Competitive fee structure with $295 annual fee for standard accounts',
      'Strong customer service reputation with dedicated account managers',
      'Excellent educational resources including webinars and investor guides',
      'Particularly well-suited for real estate investors due to specialized expertise'
    ],
    tocItems: [
      { id: 'nuview-overview', label: 'Company Overview' },
      { id: 'fees-structure', label: 'Fee Structure' },
      { id: 'real-estate-specialty', label: 'Real Estate IRA Specialty' },
      { id: 'investment-options', label: 'Investment Options' },
      { id: 'pros-cons', label: 'Pros & Cons' },
      { id: 'gold-ira-bridge', label: 'Gold IRA Alternative' }
    ],
    sections: [
      {
        id: 'nuview-overview',
        icon: 'Building',
        iconColor: 'blue',
        title: 'NuView Trust Company Overview',
        content: 'NuView Trust Company is a self-directed IRA custodian founded in 2003 and based in Orlando, Florida. The company has grown to become one of the respected mid-size SDIRA custodians in the industry.',
        bullets: [
          'Founded in 2003, headquartered in Orlando, Florida',
          'Specializes in self-directed retirement accounts (IRAs, 401ks, HSAs)',
          'Known for expertise in real estate IRA transactions',
          'Offers both custodial and administrative services',
          'Provides educational resources and investor support',
          'Regulated by the State of Florida Office of Financial Regulation'
        ],
        callout: {
          type: 'info',
          title: 'Company Focus',
          content: 'NuView has built its reputation around real estate IRAs, making it a popular choice for investors who want to hold rental properties, fix-and-flips, or commercial real estate in their retirement accounts.'
        }
      },
      {
        id: 'fees-structure',
        icon: 'Receipt',
        iconColor: 'amber',
        title: 'NuView IRA Fee Structure',
        content: 'NuView offers a straightforward fee structure that\'s competitive with other SDIRA custodians. Here\'s what you\'ll pay:',
        table: {
          headers: ['Fee Type', 'Amount', 'Notes'],
          rows: [
            ['Account Setup', '$50', 'One-time fee'],
            ['Annual Account Fee', '$295', 'Standard accounts'],
            ['Annual Fee (Premium)', '$395', 'For complex assets'],
            ['Asset Holding Fee', '$75-$200/year', 'Per alternative asset'],
            ['Transaction Processing', '$75-$150', 'Per buy/sell transaction'],
            ['Wire Transfer', '$25', 'Outgoing domestic'],
            ['Check Processing', '$10', 'Per check issued']
          ],
          caption: 'Fees as of 2025; verify current rates with NuView directly'
        },
        bullets: [
          'No minimum initial investment required',
          'Real estate transactions may have additional fees based on complexity',
          'Volume discounts available for multiple transactions',
          'Fees are comparable to industry average for SDIRA custodians'
        ]
      },
      {
        id: 'real-estate-specialty',
        icon: 'Home',
        iconColor: 'green',
        title: 'Real Estate IRA Specialty',
        content: 'NuView\'s primary differentiation is their deep expertise in real estate IRA transactions. This makes them a top choice for investors focused on property.',
        bullets: [
          'Dedicated real estate transaction team understands property deals',
          'Experience with residential, commercial, and raw land investments',
          'Familiar with complex structures like LLCs, partnerships, and joint ventures',
          'Quick processing times for real estate closings (often faster than competitors)',
          'Educational resources specifically for real estate IRA investors',
          'Can handle non-recourse loans for leveraged real estate purchases'
        ],
        table: {
          headers: ['Real Estate Type', 'Supported', 'Notes'],
          rows: [
            ['Residential Rental', 'Yes', 'Single/multi-family'],
            ['Commercial Property', 'Yes', 'Office, retail, industrial'],
            ['Raw Land', 'Yes', 'For development or appreciation'],
            ['Fix-and-Flip', 'Yes', 'Short-term investment'],
            ['REITs', 'Yes', 'Private and public'],
            ['Syndications', 'Yes', 'As limited partner']
          ]
        },
        callout: {
          type: 'tip',
          title: 'Real Estate Investor Tip',
          content: 'If you\'re planning significant real estate investments in your IRA, NuView\'s specialized knowledge can help you avoid costly mistakes and expedite transactions.'
        }
      },
      {
        id: 'investment-options',
        icon: 'Layers',
        iconColor: 'purple',
        title: 'Full Investment Options',
        content: 'While NuView specializes in real estate, they support the full range of alternative investments permitted in self-directed IRAs.',
        bullets: [
          'Real Estate: All property types including international',
          'Private Equity: Startups, private companies, venture capital',
          'Precious Metals: Gold, silver, platinum, palladium',
          'Private Lending: Notes, mortgages, trust deeds',
          'Cryptocurrency: Bitcoin, Ethereum, and other digital assets',
          'Tax Liens & Deeds: Available in supported states',
          'Traditional Assets: Stocks, bonds, mutual funds'
        ]
      },
      {
        id: 'pros-cons',
        icon: 'Scale',
        iconColor: 'amber',
        title: 'NuView Trust Pros & Cons',
        content: 'Based on customer reviews and industry analysis, here are the key advantages and disadvantages of NuView Trust.',
        table: {
          headers: ['Pros', 'Cons'],
          rows: [
            ['Excellent real estate IRA expertise', 'Not the lowest fees in the industry'],
            ['Strong customer service reviews', 'Smaller company than some competitors'],
            ['No minimum investment required', 'Less name recognition nationally'],
            ['Good educational resources', 'Some complex investments have additional fees'],
            ['Dedicated account managers', 'Online portal could be more modern']
          ]
        },
        bullets: [
          'BBB Rating: A+',
          'Google Reviews: 4.5+ stars average',
          'Strong reputation in the Florida real estate investment community',
          'Responsive to customer inquiries and transaction requests'
        ]
      }
    ],
    goldBridge: {
      title: 'For Gold IRAs: Augusta Handles Custodian Selection for You',
      content: 'While NuView is excellent for real estate, if your focus is precious metals, Augusta Precious Metals offers a simpler path with custodian selection handled for you.',
      bullets: [
        'Augusta partners with established, vetted custodians',
        'No need to research or compare custodian fees yourself',
        'All paperwork and setup handled by Augusta\'s team',
        'Transparent all-in pricing with no hidden custodian fees',
        'Lifetime support from your dedicated Augusta specialist'
      ]
    },
    faqs: [
      {
        question: 'Is NuView Trust a legitimate IRA custodian?',
        answer: 'Yes, NuView Trust Company is a legitimate, regulated self-directed IRA custodian. They are regulated by the State of Florida Office of Financial Regulation and have been in business since 2003 with an A+ BBB rating.'
      },
      {
        question: 'What is NuView Trust\'s minimum investment?',
        answer: 'NuView does not have a minimum initial investment requirement for opening an account. This makes them accessible to investors just starting with self-directed IRAs. However, your specific investments may have their own minimums.'
      },
      {
        question: 'How does NuView compare to Equity Trust for real estate?',
        answer: 'Both are solid choices for real estate IRAs. NuView offers more personalized service and potentially faster real estate transaction processing. Equity Trust is larger with more resources but may feel more impersonal. Fees are comparable between the two.'
      },
      {
        question: 'Can I hold precious metals in a NuView IRA?',
        answer: 'Yes, NuView supports precious metals (gold, silver, platinum, palladium) in their self-directed IRAs. However, if precious metals are your primary focus, a specialized Gold IRA company may offer better pricing and service for metals specifically.'
      }
    ],
    relatedArticles: [
      'pensco-trust-reviews',
      'entrust-ira-fees',
      'ira-custodian-comparison',
      'best-self-directed-ira-custodian'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/gold-ira-calculator']
  },

  'entrust-ira-fees': {
    slug: 'entrust-ira-fees',
    title: 'Entrust IRA Fees: Complete Cost Breakdown (2025)',
    subtitle: 'The Entrust Group is a major self-directed IRA custodian. Here\'s exactly what you\'ll pay in fees and how they compare to competitors.',
    metaTitle: 'Entrust IRA Fees 2025: Complete Fee Schedule & Cost Breakdown',
    metaDescription: 'Complete breakdown of The Entrust Group fees including account fees, transaction fees, and storage costs. See how Entrust compares to other SDIRA custodians.',
    keywords: [
      'entrust ira fees',
      'entrust group fees',
      'entrust self directed ira cost',
      'the entrust group fee schedule',
      'entrust custodian fees',
      'entrust account fees'
    ],
    targetKeyword: 'entrust ira fees',
    volume: 210,
    difficulty: 4,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      'The Entrust Group charges $199-$399 annual fees depending on account type and assets',
      'Transaction fees range from $95 to $250 per investment, depending on complexity',
      'Precious metals storage adds $100-$250 annually through their depository partners',
      'Entrust fees are competitive but not the lowest in the SDIRA custodian market',
      'Fee transparency has improved, but always request a complete fee schedule before opening'
    ],
    tocItems: [
      { id: 'fee-overview', label: 'Fee Overview' },
      { id: 'account-fees', label: 'Account Fees' },
      { id: 'transaction-fees', label: 'Transaction Fees' },
      { id: 'storage-fees', label: 'Precious Metals Storage' },
      { id: 'competitor-comparison', label: 'Comparison to Competitors' },
      { id: 'gold-ira-bridge', label: 'Simpler Gold IRA Option' }
    ],
    sections: [
      {
        id: 'fee-overview',
        icon: 'Receipt',
        iconColor: 'amber',
        title: 'The Entrust Group Fee Overview',
        content: 'The Entrust Group has been a self-directed IRA custodian since 1982. Their fee structure is comprehensive and covers various account types and investment transactions.',
        bullets: [
          'Annual fees range from $199 to $399 based on account complexity',
          'Transaction fees apply to each investment purchase or sale',
          'Additional fees for wire transfers, checks, and special processing',
          'Precious metals have separate storage fees through depository partners',
          'Fees are disclosed upfront but can be complex to calculate total costs'
        ],
        callout: {
          type: 'info',
          title: 'Fee Transparency',
          content: 'Entrust publishes their fee schedule online, which is more transparent than some competitors. Always request a personalized quote based on your expected investment activity.'
        }
      },
      {
        id: 'account-fees',
        icon: 'Wallet',
        iconColor: 'blue',
        title: 'Account Setup & Annual Fees',
        content: 'Here\'s what you\'ll pay to open and maintain an Entrust self-directed IRA:',
        table: {
          headers: ['Fee Type', 'Amount', 'Notes'],
          rows: [
            ['Account Setup', '$50', 'One-time fee'],
            ['Annual Fee (Basic)', '$199', 'Cash and standard assets'],
            ['Annual Fee (Standard)', '$299', 'Most alternative assets'],
            ['Annual Fee (Premium)', '$399', 'Complex assets or high activity'],
            ['IRA to IRA Transfer', '$50', 'Per transfer processed'],
            ['Account Termination', '$75-$150', 'Depending on assets']
          ],
          caption: 'Fees as of 2025; verify current rates with Entrust'
        },
        bullets: [
          'Minimum to open: $0 (no minimum balance requirement)',
          'Annual fees are charged regardless of account balance',
          'Multi-account discounts may be available',
          'Fee tier is based on asset complexity, not account value'
        ]
      },
      {
        id: 'transaction-fees',
        icon: 'ArrowRightLeft',
        iconColor: 'purple',
        title: 'Transaction & Processing Fees',
        content: 'Each time you buy or sell an investment in your Entrust IRA, you\'ll pay a transaction fee. These vary by investment type.',
        table: {
          headers: ['Transaction Type', 'Fee', 'Notes'],
          rows: [
            ['Standard Investment', '$95', 'Most alternatives'],
            ['Real Estate Purchase', '$150-$250', 'Depends on complexity'],
            ['Private Placement', '$125', 'LLC, LP interests'],
            ['Precious Metals', '$95', 'Plus dealer markup'],
            ['Cryptocurrency', '$95', 'Per transaction'],
            ['Wire Transfer (Domestic)', '$25', 'Per outgoing wire'],
            ['Wire Transfer (International)', '$50', 'Per outgoing wire'],
            ['Check Processing', '$10', 'Per check issued']
          ]
        },
        callout: {
          type: 'warning',
          title: 'Transaction Fees Add Up',
          content: 'If you plan to make frequent investments, transaction fees can significantly increase your total costs. Consider your investment frequency when comparing custodians.'
        }
      },
      {
        id: 'storage-fees',
        icon: 'Lock',
        iconColor: 'green',
        title: 'Precious Metals Storage Fees',
        content: 'If you hold precious metals in your Entrust IRA, you\'ll pay additional storage fees to the depository. Entrust works with approved depositories.',
        table: {
          headers: ['Storage Type', 'Annual Fee', 'Best For'],
          rows: [
            ['Commingled Storage', '$100-$150', 'Smaller holdings'],
            ['Segregated Storage', '$150-$250', 'Larger holdings, peace of mind'],
            ['Insurance', 'Included', 'Full value coverage']
          ]
        },
        bullets: [
          'Storage fees are in addition to Entrust\'s annual custodian fee',
          'You can choose between approved depositories (Delaware, Texas, etc.)',
          'Segregated storage means your specific metals are held separately',
          'Commingled storage pools your metals with others of the same type'
        ]
      },
      {
        id: 'competitor-comparison',
        icon: 'BarChart3',
        iconColor: 'amber',
        title: 'How Entrust Fees Compare to Competitors',
        content: 'Understanding how Entrust\'s fees stack up against other major SDIRA custodians helps you make an informed decision.',
        table: {
          headers: ['Custodian', 'Annual Fee', 'Transaction Fee', 'Minimum'],
          rows: [
            ['The Entrust Group', '$199-$399', '$95-$250', '$0'],
            ['Equity Trust', '$225-$400', '$95-$150', '$500'],
            ['Kingdom Trust', '$125-$300', '$50-$125', '$0'],
            ['NuView Trust', '$295-$395', '$75-$150', '$0'],
            ['Pacific Premier Trust', '$275-$395', '$95-$250', '$1,500']
          ],
          caption: 'Approximate fees; verify current rates with each custodian'
        },
        bullets: [
          'Entrust falls in the middle of the pack on fees',
          'Lower transaction fees than some, higher annual fees than others',
          'No minimum balance is a plus for new investors',
          'Overall cost depends heavily on your investment activity level'
        ]
      }
    ],
    goldBridge: {
      title: 'Skip the Fee Complexity: Augusta Handles Everything',
      content: 'Comparing SDIRA custodian fees is confusing. For Gold IRAs specifically, Augusta Precious Metals offers transparent pricing with custodian fees included.',
      bullets: [
        'Augusta provides all-in pricing with no hidden custodian fees',
        'They work with established custodians and handle all setup',
        'No need to compare transaction fees or storage tiers yourself',
        'One phone call gets you a complete cost breakdown',
        'Lifetime customer support from your dedicated specialist'
      ]
    },
    faqs: [
      {
        question: 'Is The Entrust Group expensive compared to other custodians?',
        answer: 'Entrust\'s fees are in the middle range for SDIRA custodians. Their annual fees ($199-$399) are competitive, though transaction fees ($95-$250) can add up if you invest frequently. For occasional investments, costs are reasonable.'
      },
      {
        question: 'Does Entrust charge fees on account balance?',
        answer: 'No, Entrust does not charge percentage-based fees on your account balance. Their fees are flat annual amounts plus per-transaction fees. This benefits investors with larger balances, as fees stay the same regardless of account size.'
      },
      {
        question: 'Can I negotiate Entrust fees?',
        answer: 'Entrust generally has set fee schedules, but you can ask about multi-account discounts or promotions. For very large accounts or high-volume investors, they may offer some flexibility. It never hurts to ask.'
      },
      {
        question: 'Are there hidden fees at Entrust?',
        answer: 'Entrust is relatively transparent about fees, publishing their schedule online. However, some processing fees (expedited transactions, special handling) may not be obvious. Always request a complete fee disclosure before opening an account.'
      }
    ],
    relatedArticles: [
      'pensco-trust-reviews',
      'nuview-ira-reviews',
      'ira-custodian-comparison',
      'best-self-directed-ira-custodian'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/gold-ira-calculator']
  },

  'ira-custodian-comparison': {
    slug: 'ira-custodian-comparison',
    title: 'Self-Directed IRA Custodian Comparison: Complete Guide (2025)',
    subtitle: 'Compare all major SDIRA custodians including Equity Trust, Kingdom Trust, Entrust, NuView, PENSCO/Pacific Premier, and Millennium Trust side-by-side.',
    metaTitle: 'IRA Custodian Comparison 2025: Fees, Minimums & Services Compared',
    metaDescription: 'Comprehensive self-directed IRA custodian comparison. Compare Equity Trust, Kingdom Trust, Entrust, NuView, Pacific Premier Trust fees, minimums, and specialties.',
    keywords: [
      'ira custodian comparison',
      'self directed ira custodian comparison',
      'best sdira custodian',
      'compare ira custodians',
      'sdira custodian fees comparison',
      'self directed ira custodian reviews'
    ],
    targetKeyword: 'ira custodian comparison',
    volume: 480,
    difficulty: 8,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      'Equity Trust is the largest SDIRA custodian with the most resources but higher fees',
      'Kingdom Trust offers competitive fees and strong cryptocurrency support',
      'Entrust provides good customer service with middle-of-the-road pricing',
      'NuView specializes in real estate IRAs with personalized service',
      'Millennium Trust focuses on employer-sponsored plans and automatic rollovers'
    ],
    tocItems: [
      { id: 'comparison-overview', label: 'Custodian Overview' },
      { id: 'fees-comparison', label: 'Fee Comparison' },
      { id: 'minimums-comparison', label: 'Minimums Compared' },
      { id: 'specialties', label: 'Custodian Specialties' },
      { id: 'customer-service', label: 'Customer Service' },
      { id: 'gold-ira-bridge', label: 'Best for Gold IRAs' }
    ],
    sections: [
      {
        id: 'comparison-overview',
        icon: 'BarChart3',
        iconColor: 'blue',
        title: 'Major SDIRA Custodians Overview',
        content: 'The self-directed IRA custodian market has several major players. Each has different strengths, fee structures, and specialties.',
        table: {
          headers: ['Custodian', 'Founded', 'Assets Under Custody', 'Headquarters'],
          rows: [
            ['Equity Trust Company', '1974', '$34+ billion', 'Cleveland, OH'],
            ['Kingdom Trust', '2010', '$15+ billion', 'Murray, KY'],
            ['The Entrust Group', '1982', '$4+ billion', 'Oakland, CA'],
            ['NuView Trust', '2003', '$2+ billion', 'Orlando, FL'],
            ['Pacific Premier Trust', '1989', '$16+ billion', 'San Francisco, CA'],
            ['Millennium Trust', '2000', '$54+ billion', 'Oak Brook, IL']
          ],
          caption: 'Data approximate as of 2025'
        },
        bullets: [
          'Equity Trust is the largest independent SDIRA custodian',
          'Millennium Trust is the largest overall but focuses on employer plans',
          'Pacific Premier Trust includes former PENSCO accounts',
          'All custodians are regulated and audited by federal/state authorities'
        ]
      },
      {
        id: 'fees-comparison',
        icon: 'Receipt',
        iconColor: 'amber',
        title: 'Complete Fee Comparison',
        content: 'Fees are one of the most important factors when choosing a custodian. Here\'s how they compare:',
        table: {
          headers: ['Custodian', 'Setup Fee', 'Annual Fee', 'Transaction Fee', 'Wire Fee'],
          rows: [
            ['Equity Trust', '$50', '$225-$400', '$95-$150', '$25'],
            ['Kingdom Trust', '$0', '$125-$300', '$50-$125', '$25'],
            ['Entrust', '$50', '$199-$399', '$95-$250', '$25'],
            ['NuView Trust', '$50', '$295-$395', '$75-$150', '$25'],
            ['Pacific Premier', '$50-$100', '$275-$395', '$95-$250', '$25'],
            ['Millennium Trust', 'Varies', '$125-$200', '$75-$150', '$25']
          ],
          caption: 'Fees vary by account type and asset complexity'
        },
        callout: {
          type: 'tip',
          title: 'Total Cost Calculation',
          content: 'Don\'t just compare annual fees. Calculate your expected total annual cost including transaction fees based on your planned investment activity.'
        }
      },
      {
        id: 'minimums-comparison',
        icon: 'Wallet',
        iconColor: 'green',
        title: 'Minimum Investment Requirements',
        content: 'Account minimums vary significantly between custodians. Here\'s what each requires to open an account:',
        table: {
          headers: ['Custodian', 'Minimum to Open', 'Notes'],
          rows: [
            ['Equity Trust', '$500', 'Low barrier to entry'],
            ['Kingdom Trust', '$0', 'No minimum required'],
            ['Entrust', '$0', 'No minimum required'],
            ['NuView Trust', '$0', 'No minimum required'],
            ['Pacific Premier Trust', '$1,500', 'Moderate minimum'],
            ['Millennium Trust', 'Varies', 'Depends on account type']
          ]
        },
        bullets: [
          'Most custodians have eliminated or reduced minimums',
          'No minimum doesn\'t mean no fees - annual fees still apply',
          'Higher minimums sometimes correlate with better service',
          'Specific investments within the IRA may have their own minimums'
        ]
      },
      {
        id: 'specialties',
        icon: 'Star',
        iconColor: 'purple',
        title: 'Custodian Specialties & Strengths',
        content: 'While all SDIRA custodians can hold alternative assets, each has developed expertise in certain areas:',
        table: {
          headers: ['Custodian', 'Primary Specialty', 'Also Strong In'],
          rows: [
            ['Equity Trust', 'Real Estate', 'All alternatives, education'],
            ['Kingdom Trust', 'Cryptocurrency', 'Precious metals, digital assets'],
            ['Entrust', 'General SDIRA', 'Customer service, education'],
            ['NuView Trust', 'Real Estate', 'Personalized service'],
            ['Pacific Premier', 'Alternative Assets', 'Private equity'],
            ['Millennium Trust', 'Automatic Rollovers', 'Employer-sponsored plans']
          ]
        },
        bullets: [
          'Kingdom Trust pioneered cryptocurrency IRA custody',
          'Equity Trust has the most comprehensive educational resources',
          'NuView offers more personalized service for real estate investors',
          'Millennium Trust is the leader in automatic 401k rollovers',
          'Pacific Premier (formerly PENSCO) has decades of alternative asset experience'
        ],
        callout: {
          type: 'info',
          title: 'Match Custodian to Investment',
          content: 'If you plan to invest primarily in one asset class, choose a custodian with expertise in that area. Their specialized knowledge can help avoid mistakes and expedite transactions.'
        }
      },
      {
        id: 'customer-service',
        icon: 'HeadphonesIcon',
        iconColor: 'blue',
        title: 'Customer Service Comparison',
        content: 'Customer service quality matters, especially for complex alternative investments. Here\'s how custodians compare:',
        table: {
          headers: ['Custodian', 'BBB Rating', 'Google Reviews', 'Service Style'],
          rows: [
            ['Equity Trust', 'A+', '4.0 stars', 'Professional, corporate'],
            ['Kingdom Trust', 'A+', '4.2 stars', 'Responsive, tech-focused'],
            ['Entrust', 'A+', '3.8 stars', 'Helpful, educational'],
            ['NuView Trust', 'A+', '4.5 stars', 'Personalized, attentive'],
            ['Pacific Premier', 'A+', '3.5 stars', 'Mixed post-merger'],
            ['Millennium Trust', 'A+', '3.2 stars', 'High volume, less personal']
          ],
          caption: 'Ratings approximate as of 2025'
        },
        bullets: [
          'Smaller custodians often provide more personalized service',
          'Larger custodians have more resources but may feel impersonal',
          'Phone hold times vary significantly by custodian and time of day',
          'Online portals range from excellent to outdated depending on custodian'
        ]
      }
    ],
    goldBridge: {
      title: 'For Gold IRAs: Skip the Custodian Comparison',
      content: 'Choosing an SDIRA custodian is complex. For Gold IRAs specifically, Augusta Precious Metals eliminates this decision by handling custodian setup for you.',
      bullets: [
        'Augusta works with vetted, established custodians',
        'No need to compare custodian fees or services yourself',
        'All paperwork and coordination handled by Augusta',
        'Transparent all-in pricing includes custodian and storage fees',
        'One point of contact for all your Gold IRA needs'
      ]
    },
    faqs: [
      {
        question: 'Which SDIRA custodian has the lowest fees?',
        answer: 'Kingdom Trust generally has the lowest fees among major custodians, with no setup fee and annual fees starting at $125. However, total cost depends on your transaction volume. For frequent traders, per-transaction fees matter more than annual fees.'
      },
      {
        question: 'Can I switch SDIRA custodians?',
        answer: 'Yes, you can transfer your self-directed IRA to a different custodian at any time. The process is called a trustee-to-trustee transfer. There may be termination fees from your current custodian, and the process typically takes 2-4 weeks.'
      },
      {
        question: 'Which custodian is best for real estate?',
        answer: 'Equity Trust and NuView Trust are both excellent for real estate IRAs. Equity Trust has more resources and scale, while NuView offers more personalized service. If you want dedicated attention, NuView may be better. For comprehensive resources, Equity Trust.'
      },
      {
        question: 'Which custodian is best for cryptocurrency?',
        answer: 'Kingdom Trust is the leader in cryptocurrency IRA custody. They pioneered the space and have the most experience with digital assets. They also partner with major crypto exchanges for seamless investing.'
      }
    ],
    relatedArticles: [
      'pensco-trust-reviews',
      'nuview-ira-reviews',
      'entrust-ira-fees',
      'best-self-directed-ira-custodian'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/gold-ira-calculator']
  },

  'best-self-directed-ira-custodian': {
    slug: 'best-self-directed-ira-custodian',
    title: 'Best Self-Directed IRA Custodian by Use Case (2025)',
    subtitle: 'Ranked list of the best SDIRA custodians for real estate, cryptocurrency, precious metals, private equity, and general alternative investing.',
    metaTitle: 'Best Self-Directed IRA Custodian 2025: Top Picks by Investment Type',
    metaDescription: 'Find the best self-directed IRA custodian for your needs. Ranked recommendations for real estate, crypto, precious metals, and alternative investments.',
    keywords: [
      'best self directed ira custodian',
      'top sdira custodians',
      'self directed ira companies',
      'best ira custodian for real estate',
      'best ira custodian for crypto',
      'self directed ira custodian reviews'
    ],
    targetKeyword: 'best self directed ira custodian',
    volume: 720,
    difficulty: 12,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      'Best for Real Estate: Equity Trust (resources) or NuView Trust (personalized service)',
      'Best for Cryptocurrency: Kingdom Trust leads with specialized crypto custody',
      'Best for Precious Metals: Augusta Precious Metals for Gold IRAs specifically',
      'Best for Low Fees: Kingdom Trust offers competitive pricing',
      'Best for Beginners: Entrust provides excellent education and support'
    ],
    tocItems: [
      { id: 'best-real-estate', label: 'Best for Real Estate' },
      { id: 'best-crypto', label: 'Best for Cryptocurrency' },
      { id: 'best-precious-metals', label: 'Best for Precious Metals' },
      { id: 'best-private-equity', label: 'Best for Private Equity' },
      { id: 'best-low-fees', label: 'Best for Low Fees' },
      { id: 'gold-ira-bridge', label: 'Gold IRA Recommendation' }
    ],
    sections: [
      {
        id: 'best-real-estate',
        icon: 'Home',
        iconColor: 'green',
        title: 'Best SDIRA Custodian for Real Estate',
        content: 'Real estate is the most popular alternative investment in self-directed IRAs. Here are the best custodians for property investors:',
        table: {
          headers: ['Rank', 'Custodian', 'Why They Excel', 'Best For'],
          rows: [
            ['1', 'Equity Trust', 'Most experience, comprehensive resources', 'Large portfolios, diverse properties'],
            ['2', 'NuView Trust', 'Personalized service, fast transactions', 'Active investors, FL market'],
            ['3', 'Pacific Premier Trust', 'Decades of experience, large scale', 'Complex transactions'],
            ['4', 'Entrust', 'Good education, reliable service', 'First-time real estate IRA investors']
          ]
        },
        bullets: [
          'Equity Trust has processed more real estate IRA transactions than any competitor',
          'NuView offers dedicated real estate specialists and faster closing support',
          'Both handle residential, commercial, raw land, and development deals',
          'Transaction fees for real estate range from $150-$250 at most custodians'
        ],
        callout: {
          type: 'tip',
          title: 'Real Estate IRA Tip',
          content: 'For your first real estate IRA investment, prioritize a custodian with strong educational resources and responsive customer service. The fee difference is minimal compared to a mistake from inexperience.'
        }
      },
      {
        id: 'best-crypto',
        icon: 'Bitcoin',
        iconColor: 'amber',
        title: 'Best SDIRA Custodian for Cryptocurrency',
        content: 'Cryptocurrency IRAs require specialized custody and security measures. Here are the leaders:',
        table: {
          headers: ['Rank', 'Custodian', 'Why They Excel', 'Supported Cryptos'],
          rows: [
            ['1', 'Kingdom Trust', 'Pioneer in crypto IRA custody', 'Bitcoin, Ethereum, 50+ altcoins'],
            ['2', 'Equity Trust', 'Large, established, secure', 'Bitcoin, Ethereum, major coins'],
            ['3', 'Pacific Premier', 'Institutional-grade custody', 'Bitcoin, Ethereum, select others']
          ]
        },
        bullets: [
          'Kingdom Trust partnered with major exchanges for seamless trading',
          'Cold storage is standard for security at all crypto custodians',
          'Transaction fees for crypto typically $50-$100 per trade',
          'Some custodians charge percentage-based fees on crypto holdings'
        ],
        callout: {
          type: 'warning',
          title: 'Crypto IRA Warning',
          content: 'Cryptocurrency in IRAs is still evolving. Ensure your custodian has proper cold storage, insurance, and a track record. Never use a crypto IRA company without verifying their custodian partnership.'
        }
      },
      {
        id: 'best-precious-metals',
        icon: 'Gem',
        iconColor: 'amber',
        title: 'Best Custodian for Precious Metals IRAs',
        content: 'For Gold and Silver IRAs, specialized precious metals IRA companies typically offer better service than general SDIRA custodians:',
        table: {
          headers: ['Option', 'Type', 'Why Consider', 'Best For'],
          rows: [
            ['Augusta Precious Metals', 'Gold IRA Company', 'Full-service, handles custodian', 'Most investors'],
            ['Kingdom Trust', 'SDIRA Custodian', 'Low fees, accepts multiple dealers', 'DIY investors'],
            ['Equity Trust', 'SDIRA Custodian', 'Large, established', 'Diversified alternatives'],
            ['Entrust', 'SDIRA Custodian', 'Good service, education', 'Beginners']
          ]
        },
        bullets: [
          'Gold IRA companies (Augusta, Goldco) work with custodians on your behalf',
          'General SDIRA custodians require you to find your own metals dealer',
          'Specialized Gold IRA companies typically offer better pricing and service for metals',
          'Storage fees are similar whether using Gold IRA company or direct custodian'
        ],
        callout: {
          type: 'tip',
          title: 'Precious Metals Recommendation',
          content: 'For precious metals specifically, working with a specialized Gold IRA company like Augusta is simpler than going directly to an SDIRA custodian. They handle custodian selection, paperwork, and metal sourcing.'
        }
      },
      {
        id: 'best-private-equity',
        icon: 'TrendingUp',
        iconColor: 'purple',
        title: 'Best SDIRA Custodian for Private Equity',
        content: 'Private equity, startups, and private company investments require custodians experienced with complex documentation:',
        table: {
          headers: ['Rank', 'Custodian', 'Why They Excel', 'Best For'],
          rows: [
            ['1', 'Pacific Premier Trust', 'Deep PE experience', 'Sophisticated investors'],
            ['2', 'Equity Trust', 'Scale, resources', 'All sizes of PE deals'],
            ['3', 'Entrust', 'Good service, fair fees', 'Mid-size investments'],
            ['4', 'Kingdom Trust', 'Flexible, modern', 'Tech startups, angel investing']
          ]
        },
        bullets: [
          'Private equity requires custodian experience with complex documents',
          'Transaction fees for PE deals typically $100-$200',
          'Valuations and capital calls require responsive custodian support',
          'Pacific Premier (formerly PENSCO) has decades of PE custody experience'
        ]
      },
      {
        id: 'best-low-fees',
        icon: 'PiggyBank',
        iconColor: 'green',
        title: 'Best SDIRA Custodian for Low Fees',
        content: 'If minimizing costs is your priority, here are the most affordable SDIRA custodians:',
        table: {
          headers: ['Rank', 'Custodian', 'Annual Fee', 'Transaction Fee', 'Total Score'],
          rows: [
            ['1', 'Kingdom Trust', '$125-$300', '$50-$125', 'Lowest overall'],
            ['2', 'Millennium Trust', '$125-$200', '$75-$150', 'Good for rollovers'],
            ['3', 'Entrust', '$199-$399', '$95-$250', 'Mid-range'],
            ['4', 'NuView Trust', '$295-$395', '$75-$150', 'Fair for service level']
          ]
        },
        bullets: [
          'Kingdom Trust offers the best value for most investors',
          'No-minimum custodians save money for smaller accounts',
          'Transaction fees matter more for active investors',
          'Consider total annual cost, not just annual fee'
        ],
        callout: {
          type: 'info',
          title: 'Fee vs Service Trade-off',
          content: 'The cheapest custodian isn\'t always the best value. Poor service, slow transactions, or mistakes can cost more than the fee savings. Balance cost with quality.'
        }
      }
    ],
    goldBridge: {
      title: 'For Gold IRAs: Augusta Precious Metals Is the Clear Winner',
      content: 'When it comes specifically to Gold IRAs, Augusta Precious Metals offers the best overall experience by handling custodian selection and setup for you.',
      bullets: [
        'Augusta partners with established, trusted custodians',
        'No need to research or compare custodians yourself',
        'Transparent all-in pricing with no hidden fees',
        'Hall of Fame quarterback Joe Montana is a customer and spokesperson',
        'Lifetime customer support from dedicated specialists',
        'Free one-on-one educational web conference before you invest'
      ]
    },
    faqs: [
      {
        question: 'What is the best self-directed IRA custodian overall?',
        answer: 'There\'s no single "best" custodian - it depends on your investment focus. For real estate, Equity Trust or NuView. For crypto, Kingdom Trust. For precious metals, work with Augusta Precious Metals. For low fees, Kingdom Trust. Match the custodian to your primary investment type.'
      },
      {
        question: 'Is a self-directed IRA custodian the same as a Gold IRA company?',
        answer: 'No. SDIRA custodians (Equity Trust, Kingdom Trust, etc.) hold your IRA and provide administrative services for any alternative asset. Gold IRA companies (Augusta, Goldco) specifically help you buy precious metals and work with custodians on your behalf. For gold specifically, the Gold IRA company approach is usually simpler.'
      },
      {
        question: 'Can I use multiple SDIRA custodians?',
        answer: 'Yes, you can have self-directed IRAs with multiple custodians. Some investors use different custodians for different asset types based on each custodian\'s specialty. However, managing multiple accounts adds complexity.'
      },
      {
        question: 'How do I choose the right SDIRA custodian?',
        answer: 'Start by identifying your primary investment type (real estate, crypto, metals, etc.). Then compare custodians with expertise in that area. Consider fees (both annual and per-transaction), minimum requirements, customer service reviews, and technology/online portal quality.'
      }
    ],
    relatedArticles: [
      'ira-custodian-comparison',
      'pensco-trust-reviews',
      'nuview-ira-reviews',
      'entrust-ira-fees'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/gold-ira-calculator']
  }
};
