// src/data/learn-articles/alternative-ira-cluster.ts
// Alternative IRA Investments Cluster - ZERO/LOW DIFFICULTY KEYWORDS
// Keywords: private equity ira, self directed ira real estate rules, ira alternative investments

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const alternativeIraArticles: LearnArticleRegistry = {
  'private-equity-ira': {
    slug: 'private-equity-ira',
    title: 'Private Equity IRA: Investing in PE with Your Retirement Account (2026)',
    subtitle: 'Learn how to invest in private equity through a self-directed IRA, including accredited investor requirements, risks, fees, and simpler alternatives.',
    metaTitle: 'Private Equity IRA: PE Retirement Investing',
    metaDescription: 'Complete guide to private equity IRA investing. Understand accredited investor rules, minimum investments, fees, risks, and why gold IRA may be a simpler alternative for most investors.',
    keywords: [
      'private equity ira',
      'private equity in ira',
      'ira private equity investment',
      'self directed ira private equity',
      'invest in private equity with ira'
    ],
    targetKeyword: 'private equity ira',
    volume: 200,
    difficulty: 0,
    cpc: 4.50,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      'Private equity IRA requires a self-directed IRA with a custodian allowing alternative investments',
      'Most PE investments require accredited investor status ($200k+ income or $1M+ net worth)',
      'Minimum investments typically range from $25,000 to $250,000 or more',
      'PE investments are highly illiquid with 7-10 year lockup periods common',
      'Gold IRA offers similar diversification benefits with much greater liquidity and simplicity'
    ],
    tocItems: [
      { id: 'what-is-private-equity-ira', label: 'What Is a Private Equity IRA?' },
      { id: 'accredited-investor', label: 'Accredited Investor Requirements' },
      { id: 'types-of-pe', label: 'Types of PE Investments' },
      { id: 'risks-and-fees', label: 'Risks and Fees' },
      { id: 'how-to-invest', label: 'How to Invest' },
      { id: 'gold-ira-bridge', label: 'Gold IRA Alternative' }
    ],
    sections: [
      {
        id: 'what-is-private-equity-ira',
        icon: 'Briefcase',
        iconColor: 'blue',
        title: 'What Is a Private Equity IRA?',
        content: 'A private equity IRA allows you to invest your retirement funds in private companies, buyouts, and venture capital through a self-directed IRA structure:',
        bullets: [
          'Requires self-directed IRA custodian that permits alternative investments',
          'Your IRA directly invests in PE fund or private company',
          'All gains grow tax-deferred (Traditional) or tax-free (Roth)',
          'Returns are reinvested within the IRA without triggering taxes',
          'Cannot invest in your own business or companies you control',
          'Subject to UBIT (Unrelated Business Income Tax) if fund uses leverage'
        ],
        callout: {
          type: 'info',
          title: 'Self-Directed IRA Required',
          content: 'Traditional brokerages like Fidelity, Vanguard, and Schwab do not allow private equity investments. You need a specialized self-directed IRA custodian such as Equity Trust, Entrust, or Millennium Trust.'
        }
      },
      {
        id: 'accredited-investor',
        icon: 'UserCheck',
        iconColor: 'green',
        title: 'Accredited Investor Requirements',
        content: 'Most private equity investments require you to be an accredited investor as defined by the SEC:',
        bullets: [
          'Income test: $200,000+ annual income for 2 years ($300,000 with spouse)',
          'Net worth test: $1,000,000+ net worth excluding primary residence',
          'Professional credentials: Series 7, 65, or 82 licenses qualify',
          'Knowledgeable employees of PE funds may qualify',
          'Entity test: Entities with $5M+ in assets',
          'Verification required by fund managers'
        ],
        table: {
          headers: ['Qualification Method', 'Requirement', 'Notes'],
          rows: [
            ['Income (Individual)', '$200,000+/year for 2 years', 'Reasonable expectation of same this year'],
            ['Income (Joint)', '$300,000+/year for 2 years', 'Combined with spouse'],
            ['Net Worth', '$1,000,000+', 'Excluding primary residence value'],
            ['Professional License', 'Series 7, 65, or 82', 'Active license in good standing'],
            ['Entity', '$5,000,000+ in assets', 'Not formed solely to invest']
          ]
        },
        callout: {
          type: 'warning',
          title: 'Non-Accredited Investors Have Limited Options',
          content: 'If you do not meet accredited investor requirements, your PE options are extremely limited. Some crowdfunding platforms offer Regulation A+ offerings to non-accredited investors, but most quality PE funds are restricted.'
        }
      },
      {
        id: 'types-of-pe',
        icon: 'Layers',
        iconColor: 'purple',
        title: 'Types of Private Equity Investments',
        content: 'Private equity encompasses several different investment strategies:',
        bullets: [
          'Venture Capital: Early-stage startup investments, highest risk/reward',
          'Growth Equity: Investments in established companies seeking expansion',
          'Buyouts: Acquiring controlling interests in mature companies',
          'Distressed/Turnaround: Investing in struggling companies',
          'Secondary Market: Buying existing PE fund interests from other investors',
          'Fund of Funds: Diversified investment across multiple PE funds',
          'Direct Investment: Investing directly in a single private company'
        ],
        table: {
          headers: ['PE Type', 'Risk Level', 'Typical Minimum', 'Time Horizon'],
          rows: [
            ['Venture Capital', 'Very High', '$100,000+', '10-12 years'],
            ['Growth Equity', 'High', '$100,000+', '5-7 years'],
            ['Buyouts', 'Moderate-High', '$250,000+', '5-7 years'],
            ['Secondary Market', 'Moderate', '$50,000+', '3-5 years'],
            ['Fund of Funds', 'Moderate', '$25,000+', '7-10 years']
          ]
        }
      },
      {
        id: 'risks-and-fees',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Risks and Fees of Private Equity',
        content: 'Private equity carries significant risks and costs that retirement investors must understand:',
        bullets: [
          'Illiquidity: Cannot sell when you want, 7-10 year lockup periods',
          'Total loss risk: Startups and buyouts can fail completely',
          'J-curve returns: Often negative returns in early years before gains',
          'Capital calls: May need to contribute additional funds on demand',
          'Valuation uncertainty: No daily pricing, values are estimates',
          'Manager risk: Returns depend heavily on fund manager skill',
          'UBIT tax: Leveraged PE investments trigger Unrelated Business Income Tax in IRA'
        ],
        table: {
          headers: ['Fee Type', 'Typical Amount', 'Impact'],
          rows: [
            ['Management Fee', '1.5-2.5% of committed capital', '$15,000-25,000/yr on $1M'],
            ['Performance Fee (Carry)', '20% of profits above hurdle', 'Reduces upside significantly'],
            ['Fund Expenses', '0.25-0.5% annually', 'Legal, audit, admin costs'],
            ['Placement Fees', '1-2% of investment', 'One-time entry cost'],
            ['SDIRA Custodian Fee', '$300-500/year', 'For holding alternative assets']
          ]
        },
        callout: {
          type: 'warning',
          title: '2 and 20 Fee Structure',
          content: 'The standard PE fee structure is "2 and 20"—2% annual management fee plus 20% of profits. On a $100,000 investment earning 15% returns, you pay $2,000 in management fees plus $2,600 in carry (20% of $13,000 profit), reducing your return from 15% to about 10.4%.'
        }
      },
      {
        id: 'how-to-invest',
        icon: 'ListChecks',
        iconColor: 'amber',
        title: 'How to Invest in Private Equity with IRA',
        content: 'Step-by-step process for PE IRA investing:',
        numberedList: [
          'Verify accredited investor status and document qualifications',
          'Open self-directed IRA with custodian allowing PE (Equity Trust, Entrust, etc.)',
          'Fund SDIRA via rollover, transfer, or contribution',
          'Research PE funds or direct investment opportunities',
          'Complete subscription documents (PPM acknowledgment, accredited verification)',
          'Direct custodian to invest funds in the PE opportunity',
          'Receive capital call notices and direct additional investments as needed',
          'Wait 7-10+ years for fund to return capital with (hopefully) gains',
          'Distributions flow back to IRA tax-deferred'
        ],
        callout: {
          type: 'tip',
          title: 'Due Diligence Is Critical',
          content: 'PE investments are opaque and long-term. Thoroughly research fund managers, their track records, strategy, and terms. Consider consulting a fee-only financial advisor experienced in alternative investments before committing retirement funds.'
        }
      }
    ],
    warningBox: {
      title: 'Complexity and Risk Warning',
      content: 'Private equity is designed for sophisticated institutional investors. Most individual investors lack the expertise, access to top-tier funds, and ability to properly diversify within PE. For retirement savers seeking alternative assets, gold IRA offers similar diversification benefits with far greater simplicity, liquidity, and accessibility.',
      type: 'amber'
    },
    goldBridge: {
      title: 'Why Gold IRA Is a Simpler Alternative to Private Equity',
      content: 'For investors seeking portfolio diversification beyond stocks and bonds, gold IRA offers compelling advantages over private equity:',
      bullets: [
        'No accredited investor requirements—anyone with an IRA can invest',
        'Minimum investments as low as $5,000-10,000 vs. $100,000+ for PE',
        'Highly liquid—sell anytime at transparent market prices',
        'No 7-10 year lockup periods—access your money when needed',
        'Much lower fees—no 2 and 20 fee structure eating your returns',
        'Augusta Precious Metals makes gold IRA setup simple with no fees for up to 10 years'
      ]
    },
    faqs: [
      {
        question: 'Can I invest my 401k in private equity?',
        answer: 'Most employer 401k plans do not allow private equity investments. However, you can roll over a 401k to a self-directed IRA after leaving employment and then invest in PE. Some Solo 401k plans for self-employed individuals allow alternative investments including PE.'
      },
      {
        question: 'What is the minimum investment for private equity in an IRA?',
        answer: 'Minimum investments vary widely but typically range from $25,000 for fund of funds or crowdfunded offerings to $250,000+ for institutional PE funds. Top-tier PE funds often require $1 million+ minimums. This high threshold excludes most individual IRA investors.'
      },
      {
        question: 'Are private equity returns taxed in an IRA?',
        answer: 'Returns grow tax-deferred in a Traditional IRA and tax-free in a Roth IRA, similar to other investments. However, if the PE fund uses leverage (debt financing), a portion of returns may be subject to Unrelated Business Income Tax (UBIT), which can significantly reduce the tax benefits.'
      },
      {
        question: 'What happens if a PE investment fails in my IRA?',
        answer: 'If a PE investment loses value or fails completely, you lose that portion of your IRA. There is no FDIC insurance or SIPC protection for PE investments. This is why diversification and thorough due diligence are critical—never put a large percentage of retirement savings in a single PE investment.'
      }
    ],
    relatedArticles: [
      'ira-alternative-investments',
      'self-directed-ira-real-estate-rules',
      'checkbook-ira-reviews'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/retirement-calculator']
  },

  'self-directed-ira-real-estate-rules': {
    slug: 'self-directed-ira-real-estate-rules',
    title: 'Self-Directed IRA Real Estate Rules: Complete Compliance Guide (2026)',
    subtitle: 'Understand prohibited transactions, disqualified persons, UBIT/UDFI taxes, and titling requirements for investing in real estate with your SDIRA.',
    metaTitle: 'Self-Directed IRA Real Estate Rules Guide',
    metaDescription: 'Complete guide to SDIRA real estate rules. Learn about prohibited transactions, disqualified persons, UBIT taxes, titling requirements, and how to stay IRS compliant.',
    keywords: [
      'self directed ira real estate rules',
      'sdira real estate',
      'ira real estate investment rules',
      'self directed ira property rules',
      'ira rental property rules'
    ],
    targetKeyword: 'self directed ira real estate rules',
    volume: 100,
    difficulty: 1,
    cpc: 4.00,
    category: 'protection',
    threatLevel: 'warning',
    takeaways: [
      'All real estate transactions must avoid prohibited transactions with disqualified persons',
      'You cannot live in, vacation at, or personally use IRA-owned property',
      'Property must be titled in IRA name, not your personal name',
      'UBIT/UDFI taxes apply if using debt financing or operating active business',
      'Gold IRA avoids most of these complex rules while providing similar diversification'
    ],
    tocItems: [
      { id: 'overview', label: 'SDIRA Real Estate Overview' },
      { id: 'prohibited-transactions', label: 'Prohibited Transactions' },
      { id: 'disqualified-persons', label: 'Disqualified Persons' },
      { id: 'ubit-udfi', label: 'UBIT and UDFI Taxes' },
      { id: 'titling-requirements', label: 'Titling Requirements' },
      { id: 'gold-ira-bridge', label: 'Gold IRA Alternative' }
    ],
    sections: [
      {
        id: 'overview',
        icon: 'Home',
        iconColor: 'blue',
        title: 'Self-Directed IRA Real Estate Overview',
        content: 'Investing in real estate through a self-directed IRA can provide diversification and potential returns, but comes with strict IRS rules:',
        bullets: [
          'Requires self-directed IRA custodian allowing real estate investments',
          'Can invest in rental properties, land, commercial real estate, REITs',
          'All income and expenses must flow through the IRA',
          'Gains grow tax-deferred (Traditional) or tax-free (Roth)',
          'Cannot use sweat equity—must hire third parties for all work',
          'One mistake can disqualify your entire IRA'
        ],
        callout: {
          type: 'warning',
          title: 'Rule Complexity Warning',
          content: 'SDIRA real estate rules are extensive and strictly enforced. The IRS does not accept "I didn\'t know" as an excuse. One prohibited transaction can disqualify your entire IRA, triggering immediate taxation of the full balance plus potential 10% early withdrawal penalty.'
        }
      },
      {
        id: 'prohibited-transactions',
        icon: 'Ban',
        iconColor: 'red',
        title: 'Prohibited Transactions',
        content: 'IRC Section 4975 prohibits certain transactions between your IRA and disqualified persons. Violating these rules disqualifies your entire IRA:',
        bullets: [
          'Cannot buy property from yourself or disqualified persons',
          'Cannot sell IRA property to yourself or disqualified persons',
          'Cannot rent IRA property to yourself or disqualified persons',
          'Cannot live in or personally use IRA-owned property',
          'Cannot use IRA property for business you own',
          'Cannot perform repairs or maintenance yourself (sweat equity)',
          'Cannot lend money between IRA and disqualified person',
          'Cannot guarantee a loan for IRA property'
        ],
        table: {
          headers: ['Action', 'Allowed?', 'Consequence if Violated'],
          rows: [
            ['Buy rental from parents', 'No', 'Full IRA disqualification'],
            ['Rent to your children', 'No', 'Full IRA disqualification'],
            ['Fix a leaky faucet yourself', 'No', 'Full IRA disqualification'],
            ['Stay overnight at vacation rental', 'No', 'Full IRA disqualification'],
            ['Hire unrelated contractor', 'Yes', 'N/A'],
            ['Rent to unrelated tenant', 'Yes', 'N/A']
          ]
        },
        callout: {
          type: 'example',
          title: 'Real IRS Case',
          content: 'In a Tax Court case, an investor\'s IRA bought a cabin. He stayed there "just a few nights" to check on renovations. The IRS disqualified the entire $300,000 IRA because he personally benefited from an IRA asset. All distributions became taxable immediately.'
        }
      },
      {
        id: 'disqualified-persons',
        icon: 'Users',
        iconColor: 'purple',
        title: 'Disqualified Persons Defined',
        content: 'You cannot transact with these people or entities using your IRA:',
        bullets: [
          'You (the IRA owner)',
          'Your spouse',
          'Your lineal ascendants (parents, grandparents)',
          'Your lineal descendants (children, grandchildren)',
          'Spouses of lineal descendants',
          'Any entity you own 50% or more of',
          'Officers, directors, or highly compensated employees of your company',
          'IRA custodian, trustee, or fiduciaries'
        ],
        table: {
          headers: ['Relationship', 'Disqualified?', 'Can Transact with IRA?'],
          rows: [
            ['You', 'Yes', 'No'],
            ['Spouse', 'Yes', 'No'],
            ['Children', 'Yes', 'No'],
            ['Parents', 'Yes', 'No'],
            ['Siblings', 'No', 'Yes'],
            ['In-laws (spouse\'s parents)', 'No', 'Yes'],
            ['Nieces/Nephews', 'No', 'Yes'],
            ['Business partner (unrelated)', 'No', 'Yes']
          ],
          caption: 'Note: Siblings and in-laws are surprisingly NOT disqualified persons'
        },
        callout: {
          type: 'tip',
          title: 'Safe Harbor Strategy',
          content: 'When in doubt, apply the "stranger test": Would this transaction be appropriate if done with a complete stranger? If the answer involves any personal benefit, family connection, or self-dealing, it\'s likely prohibited.'
        }
      },
      {
        id: 'ubit-udfi',
        icon: 'Calculator',
        iconColor: 'amber',
        title: 'UBIT and UDFI Taxes',
        content: 'Certain real estate activities trigger Unrelated Business Income Tax (UBIT) or Unrelated Debt-Financed Income (UDFI) even within an IRA:',
        bullets: [
          'UDFI: Applies when IRA uses mortgage/debt to purchase property',
          'Taxed on income proportional to debt percentage',
          'Example: 50% financed = 50% of rental income taxable as UDFI',
          'UBIT: Applies to active business operations (flipping, hotels, etc.)',
          'Tax rates are trust tax rates (up to 37%)',
          'IRA must file Form 990-T when UBIT/UDFI exceeds $1,000',
          'Roth IRA is NOT exempt from UBIT/UDFI',
          'Can significantly reduce tax advantages of IRA real estate'
        ],
        table: {
          headers: ['Situation', 'Tax Triggered?', 'Tax Type'],
          rows: [
            ['Cash purchase, passive rental', 'No', 'None'],
            ['Mortgaged property, rental income', 'Yes', 'UDFI'],
            ['Flipping houses frequently', 'Yes', 'UBIT'],
            ['Operating a hotel', 'Yes', 'UBIT'],
            ['Triple-net lease, cash purchase', 'No', 'None'],
            ['Land held for appreciation', 'No', 'None']
          ]
        },
        callout: {
          type: 'warning',
          title: 'UDFI Calculation Example',
          content: 'Your IRA buys a $200,000 rental with $100,000 mortgage (50% debt). Rental income is $18,000/year. UDFI taxable income: $18,000 x 50% = $9,000. At trust tax rates, you could owe $2,000+ in UBIT annually, significantly reducing your tax advantage.'
        }
      },
      {
        id: 'titling-requirements',
        icon: 'FileText',
        iconColor: 'green',
        title: 'Titling and Administrative Requirements',
        content: 'Proper titling and administration are essential for IRS compliance:',
        bullets: [
          'Property title must be in IRA\'s name, not yours personally',
          'Format: "[Custodian Name] FBO [Your Name] IRA"',
          'All income deposited directly to IRA account',
          'All expenses paid from IRA account',
          'Cannot use personal funds for IRA property expenses',
          'Cannot deposit IRA rental income to personal account',
          'Must maintain separate accounting for each property',
          'Annual fair market valuation required for IRA reporting'
        ],
        callout: {
          type: 'example',
          title: 'Correct Title Format',
          content: 'Property title should read: "Equity Trust Company Custodian FBO John Smith IRA" NOT "John Smith." If titled in your name personally, the IRS treats the purchase as a distribution from your IRA, creating immediate taxes and potential penalties.'
        }
      }
    ],
    warningBox: {
      title: 'Compliance Risk Assessment',
      content: 'SDIRA real estate requires meticulous compliance. Common mistakes include: helping with minor repairs (prohibited), letting family stay briefly (prohibited), using personal funds for an emergency repair and reimbursing later (prohibited). Each violation can disqualify your entire IRA. Consider whether the diversification benefits outweigh the compliance burden.',
      type: 'red'
    },
    goldBridge: {
      title: 'Gold IRA: Simpler Diversification Without the Compliance Burden',
      content: 'Gold IRA provides portfolio diversification with far fewer rules and complications:',
      bullets: [
        'No prohibited transaction concerns with family members',
        'No UBIT or UDFI taxes—gold generates no income until sold',
        'Simple titling—custodian handles all administrative requirements',
        'No property management, tenants, or maintenance headaches',
        'Highly liquid—sell at market price anytime vs. months to sell real estate',
        'Augusta Precious Metals handles all compliance and storage requirements'
      ]
    },
    faqs: [
      {
        question: 'Can I manage my own IRA rental property?',
        answer: 'You can oversee the property (choose tenants, set rent amounts, make decisions), but you cannot physically perform any work. All maintenance, repairs, and improvements must be done by hired third parties. You also cannot charge the IRA a management fee for your services.'
      },
      {
        question: 'What happens if I accidentally violate a prohibited transaction rule?',
        answer: 'Intent does not matter to the IRS. Accidental violations carry the same consequence as intentional ones: your entire IRA is disqualified as of January 1st of the violation year. The full balance becomes taxable income, potentially plus a 10% early withdrawal penalty if under age 59 1/2.'
      },
      {
        question: 'Can my IRA and my spouse\'s IRA jointly purchase real estate?',
        answer: 'Yes, two separate IRAs can partner to purchase real estate, even if owned by spouses. However, neither spouse can personally contribute funds or labor. This is a common strategy to afford larger properties while avoiding disqualified person issues.'
      },
      {
        question: 'Do I need a special custodian for SDIRA real estate?',
        answer: 'Yes, traditional custodians like Fidelity and Vanguard do not allow real estate. You need a self-directed IRA custodian such as Equity Trust, Entrust, uDirect IRA, or Millennium Trust that specializes in alternative assets and understands real estate compliance requirements.'
      }
    ],
    relatedArticles: [
      'private-equity-ira',
      'ira-alternative-investments',
      'checkbook-ira-real-estate'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/retirement-calculator']
  },

  'ira-alternative-investments': {
    slug: 'ira-alternative-investments',
    title: 'IRA Alternative Investments: Complete Guide to Diversifying Beyond Stocks (2026)',
    subtitle: 'Explore alternative assets for your IRA including real estate, private equity, cryptocurrency, and precious metals—plus how to choose the right option.',
    metaTitle: 'IRA Alternative Investments Guide',
    metaDescription: 'Complete guide to IRA alternative investments. Compare real estate, private equity, cryptocurrency, and precious metals. Learn requirements, risks, and why gold is most accessible.',
    keywords: [
      'ira alternative investments',
      'alternative assets ira',
      'self directed ira investments',
      'alternative investments retirement account',
      'sdira investment options'
    ],
    targetKeyword: 'ira alternative investments',
    volume: 150,
    difficulty: 2,
    cpc: 3.50,
    category: 'protection',
    threatLevel: 'info',
    takeaways: [
      'Alternative investments can diversify your IRA beyond traditional stocks and bonds',
      'Options include real estate, private equity, cryptocurrency, precious metals, and more',
      'Each alternative has unique requirements, risks, fees, and complexity levels',
      'Self-directed IRA required for most alternatives—traditional brokerages have limited options',
      'Gold IRA is the most accessible alternative investment for the average retirement saver'
    ],
    tocItems: [
      { id: 'what-are-alternatives', label: 'What Are Alternative Investments?' },
      { id: 'real-estate', label: 'Real Estate in IRA' },
      { id: 'private-equity', label: 'Private Equity in IRA' },
      { id: 'cryptocurrency', label: 'Cryptocurrency in IRA' },
      { id: 'precious-metals', label: 'Precious Metals in IRA' },
      { id: 'gold-ira-bridge', label: 'Why Gold Is Most Accessible' }
    ],
    sections: [
      {
        id: 'what-are-alternatives',
        icon: 'Layers',
        iconColor: 'blue',
        title: 'What Are IRA Alternative Investments?',
        content: 'Alternative investments are assets outside traditional stocks, bonds, and mutual funds. A self-directed IRA (SDIRA) allows you to invest in these alternatives within your retirement account:',
        bullets: [
          'Real estate (rental properties, land, commercial)',
          'Private equity and venture capital',
          'Cryptocurrency (Bitcoin, Ethereum, etc.)',
          'Precious metals (gold, silver, platinum, palladium)',
          'Private lending (promissory notes, hard money loans)',
          'Tax liens and tax deeds',
          'Businesses and franchises',
          'Oil and gas partnerships'
        ],
        callout: {
          type: 'info',
          title: 'What IRAs CANNOT Invest In',
          content: 'Despite broad flexibility, IRAs are prohibited from investing in: life insurance, collectibles (art, antiques, stamps, most coins), S-corporation stock, and any asset that personally benefits you before distribution.'
        }
      },
      {
        id: 'real-estate',
        icon: 'Home',
        iconColor: 'green',
        title: 'Real Estate in IRA',
        content: 'Real estate is the most popular alternative IRA investment, offering rental income and appreciation potential:',
        bullets: [
          'Types: Rental homes, apartments, commercial, land, REITs',
          'Requirements: Self-directed IRA custodian, sufficient funds for purchase + reserves',
          'Minimum: Typically $50,000+ for direct ownership',
          'Liquidity: Very low—months to sell property',
          'Complexity: High—prohibited transactions, titling, UBIT concerns',
          'Returns: 8-12% historically, highly variable'
        ],
        table: {
          headers: ['Aspect', 'Real Estate IRA Details'],
          rows: [
            ['Custodian Required', 'Self-directed IRA (Equity Trust, Entrust, etc.)'],
            ['Minimum Investment', '$50,000+ for direct ownership'],
            ['Accredited Required?', 'No for direct ownership'],
            ['Liquidity', 'Very Low (months to sell)'],
            ['Complexity', 'High (many rules)'],
            ['Ongoing Management', 'Yes (tenants, repairs)'],
            ['UBIT Risk', 'Yes if financed or active']
          ]
        },
        callout: {
          type: 'warning',
          title: 'Real Estate Rule Complexity',
          content: 'IRA real estate has extensive prohibited transaction rules. You cannot use the property personally, rent to family, or do repairs yourself. One mistake disqualifies your entire IRA. See our detailed guide on SDIRA real estate rules.'
        }
      },
      {
        id: 'private-equity',
        icon: 'Briefcase',
        iconColor: 'purple',
        title: 'Private Equity in IRA',
        content: 'Private equity offers access to non-public companies and institutional-style returns:',
        bullets: [
          'Types: Venture capital, buyouts, growth equity, fund of funds',
          'Requirements: Self-directed IRA + accredited investor status',
          'Minimum: $25,000-$250,000+ typically',
          'Liquidity: Extremely low—7-10 year lockups common',
          'Complexity: High—subscription agreements, capital calls',
          'Returns: Target 15-25% IRR, highly variable, many fail'
        ],
        table: {
          headers: ['Aspect', 'Private Equity IRA Details'],
          rows: [
            ['Custodian Required', 'Self-directed IRA allowing PE'],
            ['Minimum Investment', '$25,000-$250,000+'],
            ['Accredited Required?', 'Yes, almost always'],
            ['Liquidity', 'Extremely Low (7-10 year lock)'],
            ['Complexity', 'Very High'],
            ['Ongoing Management', 'No (fund manages)'],
            ['UBIT Risk', 'Yes if fund uses leverage']
          ]
        },
        callout: {
          type: 'warning',
          title: 'Accredited Investor Barrier',
          content: 'Most PE investments require accredited investor status: $200,000+ annual income or $1,000,000+ net worth excluding home. This excludes the majority of retirement savers from quality PE opportunities.'
        }
      },
      {
        id: 'cryptocurrency',
        icon: 'Bitcoin',
        iconColor: 'amber',
        title: 'Cryptocurrency in IRA',
        content: 'Cryptocurrency IRAs allow tax-advantaged exposure to Bitcoin, Ethereum, and other digital assets:',
        bullets: [
          'Types: Bitcoin, Ethereum, and major altcoins',
          'Requirements: Crypto IRA custodian (iTrustCapital, BitcoinIRA, etc.)',
          'Minimum: $1,000-$5,000 typically',
          'Liquidity: High—24/7 trading available',
          'Complexity: Moderate—custodian handles most compliance',
          'Returns: Highly volatile—100%+ gains or 80% losses possible'
        ],
        table: {
          headers: ['Aspect', 'Cryptocurrency IRA Details'],
          rows: [
            ['Custodian Required', 'Specialized crypto IRA custodian'],
            ['Minimum Investment', '$1,000-$5,000'],
            ['Accredited Required?', 'No'],
            ['Liquidity', 'High (24/7 trading)'],
            ['Complexity', 'Moderate'],
            ['Ongoing Management', 'No'],
            ['UBIT Risk', 'Generally no']
          ]
        },
        callout: {
          type: 'warning',
          title: 'Volatility Warning',
          content: 'Cryptocurrency is extremely volatile. Bitcoin has experienced 80%+ drawdowns multiple times. While potential returns are high, retirement savers should carefully consider whether they can stomach seeing half their IRA value disappear temporarily.'
        }
      },
      {
        id: 'precious-metals',
        icon: 'Coins',
        iconColor: 'amber',
        title: 'Precious Metals in IRA',
        content: 'Precious metals offer inflation protection and portfolio diversification with relative simplicity:',
        bullets: [
          'Types: Gold, silver, platinum, palladium (IRS-approved forms)',
          'Requirements: Precious metals IRA custodian, approved depository',
          'Minimum: $5,000-$10,000 typically',
          'Liquidity: High—sell at market price anytime',
          'Complexity: Low—custodian handles compliance',
          'Returns: Gold averages 7-8% long-term, excels in crises'
        ],
        table: {
          headers: ['Aspect', 'Precious Metals IRA Details'],
          rows: [
            ['Custodian Required', 'Gold IRA custodian (Augusta, etc.)'],
            ['Minimum Investment', '$5,000-$10,000'],
            ['Accredited Required?', 'No'],
            ['Liquidity', 'High (sell anytime)'],
            ['Complexity', 'Low'],
            ['Ongoing Management', 'No'],
            ['UBIT Risk', 'No']
          ]
        }
      }
    ],
    goldBridge: {
      title: 'Why Gold IRA Is the Most Accessible Alternative Investment',
      content: 'After comparing all alternative investment options, gold IRA stands out as the most practical choice for average retirement savers:',
      bullets: [
        'No accredited investor requirements—unlike private equity',
        'Low minimums ($5,000-10,000)—vs. $50,000+ for real estate, $100,000+ for PE',
        'High liquidity—sell anytime at transparent market prices',
        'Low complexity—no prohibited transaction minefields like real estate',
        'No UBIT concerns—unlike leveraged real estate or PE',
        'Proven store of value—gold has preserved wealth for 5,000+ years',
        'Augusta Precious Metals offers free education and simple setup process'
      ]
    },
    faqs: [
      {
        question: 'Do I need a self-directed IRA for alternative investments?',
        answer: 'For most alternatives (real estate, PE, precious metals, crypto), yes. Traditional brokerages like Fidelity and Vanguard limit investments to stocks, bonds, and funds. You need a self-directed IRA custodian that allows alternative assets. Some exceptions: certain crypto investments are available through Fidelity now.'
      },
      {
        question: 'What percentage of my IRA should be in alternative investments?',
        answer: 'Financial advisors typically suggest 5-20% in alternatives for diversification. The exact amount depends on your risk tolerance, time horizon, and overall financial situation. Avoid putting too much in illiquid alternatives that you cannot access before retirement.'
      },
      {
        question: 'Are alternative investments riskier than stocks?',
        answer: 'It depends on the alternative. Private equity and cryptocurrency can be riskier than stocks. Real estate offers different risks (liquidity, management). Precious metals like gold are often considered a defensive, lower-risk diversifier. Each alternative has unique risk characteristics that should be understood before investing.'
      },
      {
        question: 'Can I transfer my existing IRA to invest in alternatives?',
        answer: 'Yes, you can transfer or rollover funds from an existing Traditional IRA, Roth IRA, SEP IRA, SIMPLE IRA, or old 401k to a self-directed IRA that allows alternatives. This is typically tax-free if done correctly. The process takes 2-4 weeks depending on the institutions involved.'
      }
    ],
    relatedArticles: [
      'private-equity-ira',
      'self-directed-ira-real-estate-rules',
      'checkbook-ira-reviews'
    ],
    relatedGuides: ['/self-directed-ira'],
    relatedTools: ['/tools/retirement-calculator']
  }
};
