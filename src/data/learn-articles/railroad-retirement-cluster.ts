// src/data/learn-articles/railroad-retirement-cluster.ts
// Railroad Retirement System Articles - Zero/Low Difficulty
// Target audience: Current and former railroad workers
// Unique retirement system with strong Gold IRA rollover potential

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const railroadRetirementArticles: LearnArticleRegistry = {
  // ===================================
  // RAILROAD RETIREMENT CALCULATOR
  // ===================================

  'railroad-retirement-calculator': {
    slug: 'railroad-retirement-calculator',
    title: 'Railroad Retirement Calculator: Estimate Your Benefits',
    subtitle: 'Calculate your Railroad Retirement benefits. Understand Tier 1, Tier 2, and supplemental annuity calculations.',
    metaTitle: 'Railroad Retirement Calculator Guide | Estimate Benefits (2026)',
    metaDescription: 'How to calculate Railroad Retirement benefits. Learn about Tier 1 and Tier 2 calculations, eligibility, and retirement planning for railroad workers.',
    keywords: ['railroad retirement calculator', 'rrb calculator', 'railroad retirement benefits', 'railroad pension calculator', 'tier 1 tier 2 railroad'],
    targetKeyword: 'railroad retirement calculator',
    volume: 400,
    difficulty: 1,
    cpc: 2.00,
    category: 'life-events',
    threatLevel: 'info',
    takeaways: [
      'Railroad Retirement has two tiers: Tier 1 (like Social Security) and Tier 2 (pension)',
      'Tier 1 benefits are equivalent to Social Security',
      'Tier 2 is an additional pension based on railroad service',
      '60/30 rule: Retire at 60 with 30 years for full benefits',
      'Supplemental annuity available for workers with 25+ years',
      'Railroad Retirement Board (RRB) administers the program',
      'Benefits generally higher than Social Security alone',
    ],
    tocItems: [
      { id: 'overview', label: 'Railroad Retirement Overview' },
      { id: 'tier-1', label: 'Tier 1 Benefits' },
      { id: 'tier-2', label: 'Tier 2 Benefits' },
      { id: 'eligibility', label: 'Eligibility Rules' },
      { id: 'calculate', label: 'Calculate Your Benefits' },
      { id: 'gold-bridge', label: 'Supplementing Your Benefits' },
    ],
    sections: [
      {
        id: 'overview',
        icon: 'Train',
        iconColor: 'blue',
        title: 'Railroad Retirement System Overview',
        content: 'The Railroad Retirement program provides retirement, disability, and survivor benefits to railroad workers and their families. It\'s separate from Social Security but coordinates with it.',
        bullets: [
          'Administered by the Railroad Retirement Board (RRB)',
          'Two-tier benefit structure unique to railroad workers',
          'Began in 1935, predates Social Security',
          'Funded by payroll taxes on railroad employers and employees',
          'Generally provides higher benefits than Social Security',
        ],
        callout: {
          type: 'info',
          title: 'Not Social Security',
          content: 'Railroad workers pay Railroad Retirement taxes instead of Social Security taxes. You cannot receive both full SS and RR benefits for the same work.',
        },
      },
      {
        id: 'tier-1',
        icon: 'Calculator',
        iconColor: 'green',
        title: 'Tier 1 Benefits (Social Security Equivalent)',
        content: 'Tier 1 is calculated the same way as Social Security benefits and provides the same general protections.',
        bullets: [
          '**Calculation**: Based on average earnings, same as SS formula',
          '**Tax treatment**: Tier 1 taxed like Social Security',
          '**COLA**: Receives same cost-of-living adjustments as SS',
          '**Coordination**: If you have SS credits, they\'re combined',
          '**Eligibility**: 10 years of railroad service (or 5 after 1995)',
        ],
        callout: {
          type: 'example',
          title: 'Tier 1 Estimate',
          content: 'If Social Security would pay $2,500/month based on your earnings history, your Tier 1 benefit would be approximately $2,500/month.',
        },
      },
      {
        id: 'tier-2',
        icon: 'PiggyBank',
        iconColor: 'amber',
        title: 'Tier 2 Benefits (Railroad Pension)',
        content: 'Tier 2 is the extra pension benefit unique to railroad workers - it\'s on top of Tier 1.',
        bullets: [
          '**Formula**: Based on years of railroad service and earnings',
          '**Approximate rate**: 0.7% per year of service × average monthly earnings',
          '**Example**: 30 years × 0.7% × $6,000 average = $1,260/month',
          '**Tax treatment**: Tier 2 is taxable like a pension (not SS)',
          '**Not available from SS**: Only railroad workers get Tier 2',
        ],
        table: {
          headers: ['Years of Service', 'Approximate Tier 2 Factor'],
          rows: [
            ['10 years', '7%'],
            ['20 years', '14%'],
            ['30 years', '21%'],
            ['40 years', '28%'],
          ],
          caption: 'Tier 2 factor is approximately 0.7% per year of creditable service',
        },
      },
      {
        id: 'eligibility',
        icon: 'CheckCircle',
        iconColor: 'green',
        title: 'Eligibility Rules',
        content: 'Railroad Retirement eligibility depends on age and years of service.',
        table: {
          headers: ['Age', 'Service Required', 'Benefit Status'],
          rows: [
            ['60', '30 years', 'Full unreduced benefits (60/30)'],
            ['62', '10 years', 'Reduced benefits available'],
            ['65', '10 years', 'Full benefits if 30+ years; otherwise age reduction'],
            ['Any', '30+ years', 'Full at 60; reduced at 55-59'],
          ],
        },
        callout: {
          type: 'tip',
          title: 'The 60/30 Rule',
          content: 'If you have 30 years of railroad service, you can retire at 60 with full, unreduced benefits. This is one of the best retirement deals in any US pension system.',
        },
      },
      {
        id: 'calculate',
        icon: 'ListChecks',
        iconColor: 'purple',
        title: 'How to Calculate Your Benefits',
        content: 'Use these resources to estimate your Railroad Retirement benefits.',
        numberedList: [
          'Create account at rrb.gov (Railroad Retirement Board website)',
          'Request your earnings and service record',
          'Use RRB\'s benefit estimate calculator',
          'Review your Tier 1 estimate (like Social Security)',
          'Calculate Tier 2: 0.7% × years × average earnings',
          'Add supplemental annuity if 25+ years and 60+',
          'Consider spouse benefits (50% of Tier 1 + Tier 2)',
          'Contact RRB field office for personalized estimate',
        ],
        callout: {
          type: 'info',
          title: 'RRB Contact',
          content: 'The Railroad Retirement Board has field offices nationwide. Call 1-877-772-5772 or visit rrb.gov for assistance.',
        },
      },
    ],
    goldBridge: {
      title: 'Supplementing Railroad Retirement',
      content: 'Railroad workers receive strong benefits, but additional savings provides flexibility and inflation protection beyond the annual COLA.',
      bullets: [
        'Tier 2 has limited COLA compared to Tier 1',
        'Railroad 401(k) plans offer additional savings',
        'Can roll 401(k) to IRA after leaving railroad employment',
        'Gold IRA provides inflation hedge beyond COLA',
        'Diversify beyond benefits tied to one industry',
        'Augusta Precious Metals helps with 401(k)-to-Gold rollovers',
      ],
    },
    faqs: [
      {
        question: 'Can I receive both Railroad Retirement and Social Security?',
        answer: 'Your railroad credits are combined with any SS credits for Tier 1 calculation. You receive one combined benefit, not two separate ones. Tier 2 is in addition to this.',
      },
      {
        question: 'What is the supplemental annuity?',
        answer: 'Railroad workers with 25+ years of service and age 60+ can receive an additional $23-43/month supplemental annuity. It\'s modest but adds up.',
      },
      {
        question: 'Do railroad retirement benefits include health insurance?',
        answer: 'Railroad workers and retirees are covered by Medicare (at 65) like other Americans. Some railroads offer supplemental retiree health coverage.',
      },
    ],
    relatedArticles: ['tier-1-vs-tier-2-railroad', 'railroad-retirement-benefits-explained'],
    relatedGuides: ['/rollover', '/guide/gold-ira-guide'],
    relatedTools: ['/quiz'],
  },

  // ===================================
  // TIER 1 VS TIER 2 EXPLANATION
  // ===================================

  'tier-1-vs-tier-2-railroad': {
    slug: 'tier-1-vs-tier-2-railroad',
    title: 'Tier 1 vs Tier 2 Railroad Retirement: Key Differences',
    subtitle: 'Understanding the two tiers of Railroad Retirement benefits and how they work together.',
    metaTitle: 'Tier 1 vs Tier 2 Railroad Retirement Explained (2026)',
    metaDescription: 'What\'s the difference between Tier 1 and Tier 2 railroad retirement? Complete explanation of how the two-tier system works.',
    keywords: ['tier 1 vs tier 2 railroad', 'railroad retirement tier 1', 'railroad retirement tier 2', 'railroad pension tiers', 'rrb tier 1 tier 2'],
    targetKeyword: 'tier 1 vs tier 2 railroad',
    volume: 80,
    difficulty: 0,
    cpc: 1.00,
    category: 'fees',
    threatLevel: 'info',
    takeaways: [
      'Tier 1 equals what Social Security would pay - it\'s the "base" benefit',
      'Tier 2 is the extra pension only railroad workers receive',
      'Tier 1 is taxed like Social Security (partially tax-free)',
      'Tier 2 is taxed like a private pension (fully taxable)',
      'Both tiers have COLAs, but Tier 2 COLA is smaller',
      'Together, benefits exceed what Social Security would provide alone',
      'Spouse/survivor benefits available from both tiers',
    ],
    tocItems: [
      { id: 'overview', label: 'Two-Tier System' },
      { id: 'tier-1-detail', label: 'Tier 1 Explained' },
      { id: 'tier-2-detail', label: 'Tier 2 Explained' },
      { id: 'comparison', label: 'Side-by-Side Comparison' },
      { id: 'gold-bridge', label: 'Beyond Railroad Benefits' },
    ],
    sections: [
      {
        id: 'overview',
        icon: 'Layers',
        iconColor: 'blue',
        title: 'The Two-Tier Railroad Retirement System',
        content: 'Railroad Retirement provides benefits in two tiers, giving railroad workers more than Social Security alone.',
        bullets: [
          '**Tier 1**: Equivalent to Social Security benefits',
          '**Tier 2**: Additional pension based on railroad service',
          'Both tiers funded by railroad payroll taxes',
          'Tax rate higher than Social Security rate',
          'Benefits generally 30-40% higher than SS alone',
        ],
        callout: {
          type: 'info',
          title: 'Why Two Tiers?',
          content: 'Tier 1 ensures railroad workers get at least what Social Security would pay. Tier 2 recognizes the unique nature of railroad work with an additional pension layer.',
        },
      },
      {
        id: 'tier-1-detail',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Tier 1: The Social Security Equivalent',
        content: 'Tier 1 provides benefits calculated using the same formula as Social Security.',
        bullets: [
          'Uses same Primary Insurance Amount (PIA) formula as SS',
          'Credits from SS-covered work combined with railroad work',
          'Same full retirement age rules as Social Security',
          'Same early retirement reductions',
          'Same COLAs as Social Security',
          'Taxed the same as Social Security (up to 85% taxable)',
        ],
        callout: {
          type: 'example',
          title: 'Tier 1 Example',
          content: 'If SS would pay $2,200/month based on your combined earnings, Tier 1 pays approximately $2,200/month.',
        },
      },
      {
        id: 'tier-2-detail',
        icon: 'TrendingUp',
        iconColor: 'amber',
        title: 'Tier 2: The Railroad-Only Pension',
        content: 'Tier 2 is the extra benefit unique to railroad workers - it\'s a pension on top of the Social Security equivalent.',
        bullets: [
          'Based only on railroad service (not other work)',
          'Formula: approximately 0.7% × years × average earnings',
          'Smaller COLA than Tier 1 (32.5% of CPI)',
          'Fully taxable as pension income',
          'Not available to workers who only have SS',
          'Continues to spouse at 45% upon worker\'s death',
        ],
        callout: {
          type: 'example',
          title: 'Tier 2 Example',
          content: '30 years of railroad service × 0.7% × $6,500 average monthly earnings = $1,365/month Tier 2 benefit on top of Tier 1.',
        },
      },
      {
        id: 'comparison',
        icon: 'GitCompare',
        iconColor: 'purple',
        title: 'Tier 1 vs Tier 2 Comparison',
        content: 'Key differences between the two tiers at a glance.',
        table: {
          headers: ['Feature', 'Tier 1', 'Tier 2'],
          rows: [
            ['Based on', 'All covered earnings', 'Railroad service only'],
            ['Equivalent to', 'Social Security', 'Private pension'],
            ['COLA', 'Full CPI adjustment', '32.5% of CPI'],
            ['Tax treatment', 'Like Social Security', 'Fully taxable'],
            ['Spouse benefit', '50% available', '45% available'],
            ['Survivor benefit', '100% available', '100% available'],
            ['Early retirement', 'Reduction applies', 'Reduction applies'],
          ],
        },
      },
    ],
    goldBridge: {
      title: 'Maximizing Your Railroad Retirement',
      content: 'Railroad workers receive excellent benefits, but additional savings provides even more security.',
      bullets: [
        'Tier 2 COLA is only 32.5% of CPI - doesn\'t keep pace with inflation',
        'Railroad 401(k) provides additional tax-advantaged savings',
        'Can roll 401(k) to IRA when leaving railroad',
        'Gold IRA provides inflation protection beyond limited COLA',
        'Diversify beyond benefits tied to railroad industry',
        'Augusta Precious Metals assists with retirement rollovers',
      ],
    },
    faqs: [
      {
        question: 'Why is Tier 2 COLA smaller than Tier 1?',
        answer: 'Tier 1 matches Social Security\'s full COLA to maintain equivalence. Tier 2 is a pension with its own COLA formula set at 32.5% of CPI, similar to some private pensions.',
      },
      {
        question: 'Can I lose Tier 2 benefits?',
        answer: 'If you return to railroad work after retirement, Tier 2 benefits may be suspended. Tier 1 follows Social Security earnings test rules.',
      },
      {
        question: 'What if I have both railroad and Social Security work?',
        answer: 'Your railroad and SS credits are combined for Tier 1 calculation. You receive Tier 2 only based on railroad service.',
      },
    ],
    relatedArticles: ['railroad-retirement-calculator', 'railroad-retirement-benefits-explained'],
    relatedGuides: ['/rollover', '/guide/gold-ira-guide'],
    relatedTools: ['/quiz'],
  },

  // ===================================
  // RAILROAD VS SOCIAL SECURITY
  // ===================================

  'railroad-retirement-vs-social-security': {
    slug: 'railroad-retirement-vs-social-security',
    title: 'Railroad Retirement vs Social Security: Complete Comparison',
    subtitle: 'How does Railroad Retirement compare to Social Security? Benefits, eligibility, and what makes railroad retirement better.',
    metaTitle: 'Railroad Retirement vs Social Security | Which Is Better? (2026)',
    metaDescription: 'Compare Railroad Retirement to Social Security. Learn why railroad workers get better benefits and how the two systems differ.',
    keywords: ['railroad retirement vs social security', 'rrb vs social security', 'railroad pension vs ss', 'railroad retirement better than social security'],
    targetKeyword: 'railroad retirement vs social security',
    volume: 60,
    difficulty: 0,
    cpc: 0.80,
    category: 'fees',
    threatLevel: 'info',
    takeaways: [
      'Railroad Retirement generally pays 30-40% more than Social Security',
      'Railroad workers can retire at 60 with 30 years (vs 62-67 for SS)',
      'Tier 2 is extra benefit not available from Social Security',
      'Railroad taxes are higher than Social Security taxes',
      'Both provide survivor and disability benefits',
      'Railroad Retirement has better spousal benefits',
    ],
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'benefits', label: 'Benefit Comparison' },
      { id: 'retirement-age', label: 'Retirement Age' },
      { id: 'taxes', label: 'Tax Comparison' },
      { id: 'gold-bridge', label: 'Supplementing Benefits' },
    ],
    sections: [
      {
        id: 'overview',
        icon: 'Scale',
        iconColor: 'blue',
        title: 'Railroad Retirement vs Social Security Overview',
        content: 'Railroad Retirement and Social Security serve similar purposes but Railroad Retirement provides more generous benefits in exchange for higher taxes.',
        bullets: [
          'Both provide retirement, disability, and survivor benefits',
          'Railroad Retirement predates Social Security (1935 vs 1937)',
          'Systems coordinate but don\'t duplicate benefits',
          'Railroad workers pay into Railroad Retirement, not SS',
          'Can\'t receive full benefits from both systems',
        ],
      },
      {
        id: 'benefits',
        icon: 'DollarSign',
        iconColor: 'green',
        title: 'Benefit Comparison',
        content: 'Railroad Retirement provides significantly higher benefits than Social Security alone.',
        table: {
          headers: ['Feature', 'Railroad Retirement', 'Social Security'],
          rows: [
            ['Base benefit', 'Tier 1 (equals SS)', 'Full benefit'],
            ['Extra pension', 'Tier 2 (20%+ extra)', 'None'],
            ['Total benefit', '30-40% higher', 'Base only'],
            ['Spouse benefit', '50% Tier 1 + 45% Tier 2', '50% of worker'],
            ['Survivor benefit', '100% Tier 1 + Tier 2', '100% of worker'],
            ['Supplemental annuity', 'Yes (25+ years)', 'No'],
          ],
        },
        callout: {
          type: 'example',
          title: 'Real-World Example',
          content: 'A worker who would receive $2,500/month from Social Security might receive $3,750/month from Railroad Retirement (Tier 1 + Tier 2).',
        },
      },
      {
        id: 'retirement-age',
        icon: 'Calendar',
        iconColor: 'amber',
        title: 'Retirement Age Comparison',
        content: 'Railroad workers can often retire earlier with full benefits.',
        table: {
          headers: ['Situation', 'Railroad Retirement', 'Social Security'],
          rows: [
            ['Full benefits (30 years)', 'Age 60', 'Age 67'],
            ['Early retirement', 'Age 62 (10 years)', 'Age 62 (reduced)'],
            ['Maximum early age', 'Age 55 (30+ years)', 'Age 62'],
            ['Full retirement age', '60 with 30 years', '66-67 depending on birth'],
          ],
        },
      },
      {
        id: 'taxes',
        icon: 'Receipt',
        iconColor: 'red',
        title: 'Tax Comparison',
        content: 'Railroad workers pay higher payroll taxes to fund their better benefits.',
        table: {
          headers: ['Tax Type', 'Railroad Rate', 'Social Security Rate'],
          rows: [
            ['Employee Tier 1', '6.2%', '6.2%'],
            ['Employee Tier 2', '4.9%', 'N/A'],
            ['Employee Medicare', '1.45%', '1.45%'],
            ['Total Employee', '12.55%', '7.65%'],
          ],
        },
        callout: {
          type: 'info',
          title: 'Higher Taxes, Better Benefits',
          content: 'Railroad workers pay about 4.9% more in payroll taxes, but receive 30-40% higher benefits. This is generally considered a good trade-off.',
        },
      },
    ],
    goldBridge: {
      title: 'Even Better Benefits Need Supplementing',
      content: 'Railroad Retirement is generous, but additional savings provides even more flexibility and inflation protection.',
      bullets: [
        'Tier 2 COLA is limited (32.5% of CPI)',
        'Railroad 401(k) plans available for additional savings',
        'Can roll to IRA when leaving railroad employment',
        'Gold IRA provides inflation hedge',
        'Diversify beyond benefits tied to one industry',
        'Augusta Precious Metals helps with 401(k) rollovers',
      ],
    },
    faqs: [
      {
        question: 'Can railroad workers opt for Social Security instead?',
        answer: 'No, railroad workers are required to participate in Railroad Retirement. However, if you have non-railroad work, those wages are covered by Social Security.',
      },
      {
        question: 'Is Railroad Retirement going bankrupt like Social Security?',
        answer: 'Railroad Retirement has different funding challenges. Tier 1 is coordinated with SS trust fund. Tier 2 is funded by railroad employer/employee taxes with a separate trust.',
      },
      {
        question: 'What if railroads stop operating?',
        answer: 'Benefits are guaranteed by law. Even if individual railroads fail, the Railroad Retirement system continues.',
      },
    ],
    relatedArticles: ['railroad-retirement-calculator', 'tier-1-vs-tier-2-railroad'],
    relatedGuides: ['/rollover', '/guide/gold-ira-guide'],
    relatedTools: ['/quiz'],
  },
};
