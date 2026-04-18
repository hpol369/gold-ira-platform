// src/data/federal-retirement/index.ts
// Sprint 8: Federal Employee Retirement Content Hub
// Target audience: Federal employees GS-9+ approaching retirement (age 50-65)

import { FederalRetirementArticle } from '@/types/content-hubs';

export const federalRetirementArticles: FederalRetirementArticle[] = [
  // ============================================
  // PAGE 1: FERS Pension + Gold IRA
  // ============================================
  {
    slug: 'fers-pension-and-gold',
    hubSlug: 'federal-retirement',
    title: 'FERS Pension + Gold IRA: How Federal Employees Can Protect Their Retirement',
    subtitle: 'Why your FERS pension loses purchasing power every year — and how gold fills the gap.',
    articleType: 'guide',

    metaTitle: 'FERS Pension + Gold IRA: Inflation Protection for Federal Retirees (2026)',
    metaDescription: 'A FERS pension provides 1-1.1% of your high-3 salary per year of service, but diet COLAs erode its value. Learn how a Gold IRA hedges the inflation gap.',
    keywords: ['FERS pension gold IRA', 'federal pension inflation protection', 'FERS COLA adjustment', 'FERS retirement planning gold', 'federal employee gold IRA'],

    targetKeyword: 'FERS pension gold IRA',
    volume: 320,
    difficulty: 15,

    heroIcon: 'Shield',

    takeaways: [
      'FERS pension pays 1% to 1.1% of your high-3 average salary per year of service',
      'FERS COLAs are capped — when inflation exceeds 3%, you only get CPI minus 1%',
      'A 30-year federal employee earning $95,000 receives roughly $31,350/year in pension',
      'Over 20 years of retirement, diet COLAs can reduce your purchasing power by 20-30%',
      'Gold has averaged 8.3% annual returns since 2000, outpacing inflation',
      'Rolling 10-15% of TSP into a Gold IRA after separation hedges the COLA gap',
      'The rollover is tax-free when done as a direct trustee-to-trustee transfer',
    ],

    tocItems: [
      { id: 'fers-formula', label: 'FERS Pension Formula' },
      { id: 'diet-cola', label: 'The Diet COLA Problem' },
      { id: 'inflation-erosion', label: 'How Inflation Erodes FERS' },
      { id: 'gold-hedge', label: 'Gold as an Inflation Hedge' },
      { id: 'how-to-diversify', label: 'How to Diversify' },
      { id: 'scenarios', label: 'Real-World Scenarios' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'fers-formula',
        icon: 'Calculator',
        iconColor: 'blue',
        title: 'How Your FERS Pension Is Calculated',
        content: 'The Federal Employees Retirement System (FERS) pension uses a straightforward formula: **1% (or 1.1%) × high-3 average salary × years of creditable service**. If you retire at age 62 or later with at least 20 years of service, you get the 1.1% multiplier. Otherwise, it\'s 1%.',
        table: {
          headers: ['GS Grade', 'High-3 Salary', '25 Years Service', '30 Years Service'],
          rows: [
            ['GS-9', '$65,000', '$16,250/yr', '$19,500/yr'],
            ['GS-12', '$95,000', '$23,750/yr', '$31,350/yr'],
            ['GS-14', '$120,000', '$30,000/yr', '$39,600/yr'],
            ['GS-15', '$145,000', '$36,250/yr', '$47,850/yr'],
          ],
          caption: 'Source: OPM FERS benefit calculations using 2026 GS pay scale (1.1% multiplier for 62+ with 20+ years)',
        },
        callout: {
          type: 'info',
          title: 'High-3 Average Salary',
          content: 'Your high-3 is the highest average basic pay earned during any 3 consecutive years of service. For most employees, this is the last 3 years before retirement. Locality pay counts, but overtime, bonuses, and premium pay do not.',
        },
      },
      {
        id: 'diet-cola',
        icon: 'AlertTriangle',
        iconColor: 'amber',
        title: 'The "Diet COLA" Problem That Costs Federal Retirees Thousands',
        content: 'Here\'s what most federal employees don\'t realize until they\'re already retired: **your FERS cost-of-living adjustments (COLAs) don\'t keep up with inflation.** Unlike Social Security, which gets the full CPI-W adjustment, FERS COLAs are capped.',
        bullets: [
          '**CPI increase under 2%:** Full COLA match',
          '**CPI increase 2% to 3%:** COLA capped at 2%',
          '**CPI increase above 3%:** COLA is CPI minus 1 percentage point',
          '**Example:** If inflation is 5%, your FERS pension only gets a 4% bump — you lose 1% of purchasing power that year',
          '**Cumulative effect:** Over 20 years with average 3.5% inflation, your pension loses roughly 25% of its real value',
        ],
        callout: {
          type: 'warning',
          title: 'Real Numbers from Recent Years',
          content: 'In 2022, inflation hit 8%. FERS retirees got a 7% COLA — losing a full percentage point. In 2023, with 6.5% inflation, FERS COLAs were 5.5%. Each year compounds the gap. A pension that bought $3,000/month in groceries in 2020 buys closer to $2,400 today.',
        },
      },
      {
        id: 'inflation-erosion',
        icon: 'DollarSign',
        iconColor: 'red',
        title: 'What Inflation Does to Your FERS Pension Over 20-30 Years',
        content: 'Most federal employees retire between age 57-62 and live 20-30+ years in retirement. Even small annual COLA shortfalls compound into serious purchasing power losses.',
        table: {
          headers: ['Years Retired', 'Pension (Nominal)', 'Pension (Real Value)', 'Purchasing Power Lost'],
          rows: [
            ['Year 1', '$31,350', '$31,350', '0%'],
            ['Year 5', '$33,100', '$29,800', '5%'],
            ['Year 10', '$35,200', '$27,500', '12%'],
            ['Year 15', '$37,500', '$24,900', '21%'],
            ['Year 20', '$40,000', '$22,100', '29%'],
            ['Year 25', '$42,800', '$19,600', '37%'],
          ],
          caption: 'Assumes 3.5% average inflation, FERS diet COLA (CPI minus 1% when over 3%). Based on $95,000 high-3 salary, 30 years service.',
        },
      },
      {
        id: 'gold-hedge',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'How Gold Hedges the FERS Inflation Gap',
        content: 'Gold has historically performed best during exactly the conditions that hurt FERS pensions most: high inflation and economic uncertainty. When the dollar weakens and consumer prices rise, gold tends to rise faster.',
        bullets: [
          '**Gold\'s 25-year average return:** 8.3% annually (2000-2025)',
          '**During 2022 inflation spike:** Gold held steady while stocks dropped 20%',
          '**During 2008 financial crisis:** Gold rose 25% while the S&P 500 fell 37%',
          '**Dollar purchasing power:** Has declined 87% since 1971 when Nixon ended the gold standard',
          '**Gold purchasing power:** An ounce of gold bought a quality men\'s suit in 1920 — it still does today',
        ],
        callout: {
          type: 'tip',
          title: 'The 10-15% Rule',
          content: 'Most financial advisors who recommend precious metals suggest allocating 10-15% of your retirement portfolio to gold. For a federal employee with a $300,000 TSP balance, that\'s $30,000-$45,000 in a Gold IRA — enough to meaningfully hedge inflation without over-concentrating.',
        },
      },
      {
        id: 'how-to-diversify',
        icon: 'Shuffle',
        iconColor: 'green',
        title: 'How Federal Employees Can Add Gold to Their Retirement',
        content: 'The TSP doesn\'t offer a precious metals fund. To own physical gold in a tax-advantaged retirement account, you need to roll over TSP funds into a self-directed Gold IRA. Here\'s how it works.',
        numberedList: [
          '**Separate from federal service** (or reach age 59½ for in-service withdrawal)',
          '**Choose a Gold IRA custodian** — companies like Augusta Precious Metals specialize in TSP-to-Gold rollovers',
          '**Open a self-directed IRA** — your custodian handles the paperwork',
          '**Request a direct rollover** from TSP to your new Gold IRA (trustee-to-trustee transfer = no taxes)',
          '**Select your metals** — IRA-approved gold coins and bars (American Eagles, Canadian Maple Leafs, etc.)',
          '**Metals are stored** in an IRS-approved depository (not at home)',
        ],
        callout: {
          type: 'info',
          title: 'Tax-Free Transfer',
          content: 'A direct rollover (trustee-to-trustee) from TSP to a Gold IRA incurs zero taxes and zero penalties, regardless of your age. The key is "direct" — your TSP funds go straight to the Gold IRA custodian, never touching your personal bank account.',
        },
      },
      {
        id: 'scenarios',
        icon: 'Users',
        iconColor: 'blue',
        title: 'Real-World Federal Employee Scenarios',
        content: 'Here\'s what diversifying into gold looks like for federal employees at different career stages and pay grades.',
        table: {
          headers: ['Profile', 'TSP Balance', 'Gold IRA (15%)', 'Monthly Pension', 'Protection Level'],
          rows: [
            ['GS-9, 25 years, age 57', '$180,000', '$27,000', '$1,354/mo', 'Moderate — covers 5-7 years of COLA gap'],
            ['GS-12, 30 years, age 60', '$320,000', '$48,000', '$2,613/mo', 'Strong — covers 10-12 years of COLA gap'],
            ['GS-14, 30 years, age 62', '$450,000', '$67,500', '$3,300/mo', 'Excellent — covers 15+ years of COLA gap'],
          ],
          caption: 'Estimates assume 1.1% FERS multiplier, 2026 GS locality pay (Rest of US), and gold allocation based on 15% of TSP.',
        },
      },
    ],

    goldBridge: {
      title: 'Protect Your FERS Pension from Inflation',
      content: 'Your FERS pension is a guaranteed income stream — but diet COLAs mean it buys less every year. A Gold IRA bridges the gap between what your pension pays and what things actually cost.',
      bullets: [
        'Tax-free TSP to Gold IRA rollover after separation',
        'Physical gold in IRS-approved depository',
        'No impact on your FERS pension payments',
        'Hedge against 20-30 years of purchasing power erosion',
      ],
    },

    faqs: [
      {
        question: 'Can I roll over my FERS pension into a Gold IRA?',
        answer: 'No — your FERS pension annuity cannot be rolled over. However, you can roll over your Thrift Savings Plan (TSP) into a Gold IRA after separating from federal service or reaching age 59½. Your FERS pension continues as a separate monthly payment.',
      },
      {
        question: 'How much of my TSP should I put in gold?',
        answer: 'Most financial advisors recommend 10-15% of your total retirement portfolio in precious metals. For a federal employee with a $300,000 TSP, that\'s $30,000-$45,000. This provides meaningful inflation protection without over-concentrating in any single asset.',
      },
      {
        question: 'Does a Gold IRA affect my FERS pension payments?',
        answer: 'No. Your FERS pension annuity is completely separate from your TSP. Rolling over TSP funds into a Gold IRA has no impact on your monthly pension payments, your FEHB health insurance, or your Social Security benefits.',
      },
      {
        question: 'What is the FERS diet COLA and why does it matter?',
        answer: 'The FERS "diet COLA" refers to the capped cost-of-living adjustments for FERS retirees. When inflation exceeds 3%, your pension COLA is CPI minus 1 percentage point. Over 20-30 years of retirement, this gap compounds and can reduce your purchasing power by 25-35%.',
      },
      {
        question: 'When can federal employees roll over their TSP?',
        answer: 'You can do a full rollover after separating from federal service (retirement, resignation, or RIF). If still employed, you can take an age-based in-service withdrawal at 59½. Both qualify for tax-free direct rollovers to a Gold IRA.',
      },
    ],

    relatedArticles: ['tsp-to-gold-diversification', 'fehb-retirement-healthcare', 'social-security-fairness-act'],
    relatedTools: ['/tools/fers-calculator', '/tools/fers-annuity-calculator', '/tools/tsp-calculator'],
    relatedGuides: ['/guide/tsp-to-gold-ira-rollover'],

    payGradeExamples: [
      { grade: 'GS-9', salary: 65000, tspBalance: 180000, pensionEstimate: 16250 },
      { grade: 'GS-12', salary: 95000, tspBalance: 320000, pensionEstimate: 31350 },
      { grade: 'GS-14', salary: 120000, tspBalance: 450000, pensionEstimate: 39600 },
    ],

    programReferences: [
      { program: 'FERS', agency: 'Office of Personnel Management (OPM)', url: 'https://www.opm.gov/retirement-center/fers-information/' },
      { program: 'TSP', agency: 'Federal Retirement Thrift Investment Board', url: 'https://www.tsp.gov/' },
    ],

    retirementScenarios: [
      {
        title: 'GS-12 with $320k TSP at Age 60',
        description: 'After 30 years of service, retires with $2,613/mo pension + Social Security at 62.',
        withGold: 'Allocates $48,000 (15%) to Gold IRA. During 2022-style inflation, gold portfolio gains offset diet COLA shortfall. Purchasing power preserved.',
        withoutGold: 'Full TSP in C/S funds. Market downturn reduces balance 20%. Diet COLA erodes pension purchasing power. Must draw down TSP faster to maintain lifestyle.',
      },
    ],
  },

  // ============================================
  // PAGE 2: TSP to Gold Diversification
  // ============================================
  {
    slug: 'tsp-to-gold-diversification',
    hubSlug: 'federal-retirement',
    title: 'TSP to Gold IRA: Why Federal Employees Are Diversifying Beyond the G, F, C, S, I Funds',
    subtitle: 'Your TSP has zero precious metals exposure. Here\'s why that matters — and what you can do about it.',
    articleType: 'guide',

    metaTitle: 'TSP to Gold IRA: Why Federal Employees Diversify Beyond TSP Funds (2026)',
    metaDescription: 'The TSP offers 5 funds (G, F, C, S, I) but zero precious metals. Learn why federal employees roll over TSP to Gold IRA for diversification and inflation protection.',
    keywords: ['TSP gold', 'TSP precious metals', 'TSP alternatives', 'TSP to gold IRA', 'TSP fund analysis gold', 'TSP diversification'],

    targetKeyword: 'TSP gold',
    volume: 590,
    difficulty: 18,

    heroIcon: 'Layers',

    takeaways: [
      'The TSP offers 5 core funds (G, F, C, S, I) — none include gold or precious metals',
      'The G Fund returns barely keep pace with inflation (averaging 2-3% annually)',
      'C and S Funds are 100% stock market exposed — vulnerable to crashes',
      'Lifecycle (L) Funds rebalance to bonds, not gold, as you approach retirement',
      'Gold has zero correlation with stocks — true diversification, not just more paper assets',
      'Post-separation TSP rollover to Gold IRA is tax-free via direct transfer',
      'In-service withdrawal available at age 59½ for still-employed federal workers',
    ],

    tocItems: [
      { id: 'tsp-funds', label: 'TSP Fund Analysis' },
      { id: 'missing-asset', label: 'The Missing Asset Class' },
      { id: 'risk-exposure', label: 'Your Real Risk Exposure' },
      { id: 'gold-correlation', label: 'Gold vs TSP Funds' },
      { id: 'rollover-options', label: 'Rollover Options' },
      { id: 'step-by-step', label: 'Step-by-Step Process' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'tsp-funds',
        icon: 'Layers',
        iconColor: 'blue',
        title: 'What\'s Actually Inside Your TSP Funds',
        content: 'The Thrift Savings Plan gives you five core investment options. Each tracks a specific market index. Understanding what\'s in each fund reveals what\'s missing.',
        table: {
          headers: ['Fund', 'What It Holds', '10-Year Avg Return', 'Risk Level', 'Gold Exposure'],
          rows: [
            ['G Fund', 'Government securities', '2.3%', 'Very Low', 'None'],
            ['F Fund', 'U.S. bond index (Bloomberg Barclays)', '1.5%', 'Low-Medium', 'None'],
            ['C Fund', 'S&P 500 stocks', '12.1%', 'High', 'None'],
            ['S Fund', 'Small/mid-cap U.S. stocks', '9.8%', 'High', 'None'],
            ['I Fund', 'International stocks (MSCI EAFE)', '5.2%', 'High', 'None'],
          ],
          caption: 'Source: TSP.gov fund performance data. Returns as of December 2025.',
        },
        callout: {
          type: 'warning',
          title: 'Zero Precious Metals in Any TSP Option',
          content: 'Whether you\'re in the G Fund, a Lifecycle Fund, or even the most aggressive allocation — your TSP has exactly zero exposure to gold, silver, or any precious metal. You cannot buy physical metals through the TSP, period.',
        },
      },
      {
        id: 'missing-asset',
        icon: 'AlertTriangle',
        iconColor: 'amber',
        title: 'The Asset Class Your TSP Completely Ignores',
        content: 'Your TSP gives you paper assets — government bonds, corporate bonds, domestic stocks, and international stocks. That\'s it. It\'s like a toolbox with four hammers but no screwdriver.',
        bullets: [
          '**Stocks (C, S, I Funds):** All move together in market crashes. In 2008, C Fund lost 36.9%, S Fund lost 38.3%, I Fund lost 42.4%',
          '**Bonds (F Fund):** Supposed to be "safe," but the F Fund lost 13% in 2022 when the Fed raised rates',
          '**Government securities (G Fund):** Safe but returns barely beat inflation — you\'re treading water',
          '**Gold:** Not available in TSP at all. Yet gold rose 25% during the 2008 crash and held steady during 2022',
          '**Real diversification** means owning assets that move differently from each other. All TSP funds are correlated to the same economic forces',
        ],
      },
      {
        id: 'risk-exposure',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'Your Real Risk Exposure in the TSP',
        content: 'Many federal employees think they\'re diversified because they split money across C, S, and I Funds. But spreading money across three stock funds isn\'t diversification — it\'s concentration with extra steps.',
        table: {
          headers: ['Market Event', 'C Fund', 'S Fund', 'I Fund', 'Gold'],
          rows: [
            ['2008 Financial Crisis', '-36.9%', '-38.3%', '-42.4%', '+25.0%'],
            ['2020 COVID Crash (Q1)', '-12.2%', '-17.3%', '-15.1%', '+5.8%'],
            ['2022 Rate Hikes', '-18.1%', '-20.5%', '-15.3%', '-0.3%'],
          ],
          caption: 'TSP fund data from TSP.gov. Gold returns from World Gold Council.',
        },
        callout: {
          type: 'example',
          title: 'What This Means for a $300,000 TSP',
          content: 'A federal employee with $300,000 split evenly across C, S, and I Funds lost approximately $117,000 during the 2008 crisis. If 15% ($45,000) had been in gold instead, the gold position would have gained $11,250 while the stock portion ($255,000) lost $96,000 — reducing total losses by $26,000.',
        },
      },
      {
        id: 'gold-correlation',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Why Gold Is the Diversifier Your TSP Needs',
        content: 'The value of gold in a retirement portfolio isn\'t just about returns — it\'s about what gold does when everything else drops. Gold has a near-zero correlation with stocks, meaning it moves independently.',
        bullets: [
          '**Gold-to-S&P 500 correlation:** 0.05 (essentially zero — truly independent)',
          '**S Fund-to-C Fund correlation:** 0.95 (they move almost identically — not real diversification)',
          '**Gold during recessions:** Positive returns in 6 of the last 8 U.S. recessions',
          '**Central bank demand:** Global central banks bought 1,037 tonnes of gold in 2023 — second-highest year ever',
          '**Dollar devaluation:** As the Fed prints money and debt grows, gold preserves purchasing power',
        ],
      },
      {
        id: 'rollover-options',
        icon: 'Shuffle',
        iconColor: 'blue',
        title: 'Your Options for Getting Gold Exposure',
        content: 'Since the TSP doesn\'t offer a gold fund, you have two paths to add precious metals to your federal retirement portfolio.',
        bullets: [
          '**Post-separation rollover (most common):** After retirement, resignation, or RIF, roll over part of your TSP to a self-directed Gold IRA. No age restriction, no penalties, tax-free if direct.',
          '**Age-based in-service withdrawal:** If you\'re 59½+ and still working, you can take a one-time withdrawal from your TSP and roll it into a Gold IRA. You keep contributing to TSP.',
          '**What you CANNOT do:** Buy gold within the TSP. There is no gold fund, no precious metals option, and no self-directed option within the TSP system.',
        ],
        callout: {
          type: 'tip',
          title: 'Keep Some in TSP',
          content: 'You don\'t have to roll over your entire TSP. Most advisors suggest keeping 85-90% in TSP (especially the G Fund for stability) and rolling 10-15% into a Gold IRA. You can also do a partial rollover.',
        },
      },
      {
        id: 'step-by-step',
        icon: 'FileText',
        iconColor: 'green',
        title: 'Step-by-Step: TSP to Gold IRA Rollover',
        content: 'The process is straightforward and typically takes 2-3 weeks from start to finish.',
        numberedList: [
          '**Confirm eligibility:** You must be separated from federal service OR age 59½+ for in-service withdrawal',
          '**Choose a Gold IRA custodian:** Look for companies experienced with TSP rollovers (Augusta Precious Metals handles thousands of federal employee accounts)',
          '**Open your Gold IRA account:** The custodian guides you through paperwork — typically completed in one phone call',
          '**Initiate the rollover:** Request a direct rollover through TSP.gov\'s withdrawal wizard. Funds transfer directly to your Gold IRA custodian',
          '**Select your metals:** Choose from IRA-approved gold and silver coins/bars (American Eagles, Canadian Maple Leafs, Gold Bars)',
          '**Metals purchased and stored:** Your custodian purchases metals and stores them in an IRS-approved depository',
        ],
      },
    ],

    goldBridge: {
      title: 'Add the Asset Class Your TSP Can\'t Provide',
      content: 'The TSP is a solid retirement plan — but it only holds paper assets. Gold gives you the one type of diversification the TSP physically cannot offer.',
      bullets: [
        'Tax-free direct rollover from TSP',
        'Own physical gold, not paper ETFs',
        'Zero correlation with stock market',
        'Central banks are buying — you should too',
      ],
    },

    faqs: [
      {
        question: 'Can I buy gold within the TSP?',
        answer: 'No. The TSP only offers 5 core funds (G, F, C, S, I) and Lifecycle funds, none of which include gold or precious metals. To own gold in a tax-advantaged retirement account, you must roll over TSP funds to a self-directed Gold IRA.',
      },
      {
        question: 'Do I have to roll over my entire TSP to a Gold IRA?',
        answer: 'No. You can do a partial rollover, moving only 10-15% of your TSP balance into a Gold IRA while keeping the rest invested in TSP funds. This is the most common approach among federal employees.',
      },
      {
        question: 'What happens to my TSP matching if I roll over?',
        answer: 'If you\'re still employed, agency matching contributions continue going to your TSP regardless of any age-based in-service withdrawal. If you\'ve separated from service, matching has already stopped. The rollover only moves existing funds.',
      },
      {
        question: 'Is a TSP to Gold IRA rollover taxable?',
        answer: 'Not if done as a direct rollover (trustee-to-trustee transfer). Your TSP funds go directly to the Gold IRA custodian without touching your bank account. No taxes, no penalties, regardless of age. An indirect rollover (check mailed to you) has a 60-day deadline and potential 20% withholding.',
      },
      {
        question: 'What TSP funds should I keep vs. roll over?',
        answer: 'Most federal employees keep their G Fund allocation in TSP (low risk, guaranteed) and roll over a portion of their C, S, or I Fund holdings into gold. This replaces some stock market exposure with an uncorrelated asset rather than eliminating your safe G Fund position.',
      },
    ],

    relatedArticles: ['fers-pension-and-gold', 'military-tsp-rollover', 'social-security-fairness-act'],
    relatedTools: ['/tools/tsp-calculator', '/tools/gold-allocation-calculator'],
    relatedGuides: ['/guide/tsp-to-gold-ira-rollover'],

    programReferences: [
      { program: 'TSP', agency: 'Federal Retirement Thrift Investment Board', url: 'https://www.tsp.gov/' },
      { program: 'TSP Fund Performance', agency: 'TSP.gov', url: 'https://www.tsp.gov/fund-performance/' },
    ],
  },

  // ============================================
  // PAGE 3: FEHB Retirement Healthcare
  // ============================================
  {
    slug: 'fehb-retirement-healthcare',
    hubSlug: 'federal-retirement',
    title: 'Federal Employee Healthcare in Retirement: FEHB Costs & What to Plan For',
    subtitle: 'Your FEHB continues into retirement — but the costs change. Here\'s what to budget.',
    articleType: 'guide',

    metaTitle: 'FEHB in Retirement: Federal Employee Healthcare Costs & Medicare Guide (2026)',
    metaDescription: 'Federal employees can keep FEHB in retirement with 5 years continuous enrollment. Learn about premium costs, Medicare Part B coordination, and total healthcare budget planning.',
    keywords: ['FEHB in retirement', 'federal employee healthcare retirement costs', 'FEHB Medicare coordination', 'federal retiree health insurance', 'FEHB 5 year rule'],

    targetKeyword: 'FEHB in retirement',
    volume: 720,
    difficulty: 12,

    heroIcon: 'Heart',

    takeaways: [
      'You can keep FEHB into retirement if enrolled continuously for 5 years before retirement',
      'In retirement, you pay the employee share of premiums — similar to active duty rates',
      'The government continues to pay 72-75% of the weighted average premium',
      'Most federal retirees should enroll in Medicare Part B at age 65 ($174.70+/month in 2026)',
      'FEHB + Medicare together provide very strong coverage with minimal out-of-pocket costs',
      'Total healthcare costs typically run $6,000-$12,000/year in federal retirement',
      'Healthcare inflation averages 5-7% annually — outpacing even general inflation',
    ],

    tocItems: [
      { id: 'fehb-eligibility', label: 'FEHB Eligibility in Retirement' },
      { id: 'premium-costs', label: 'Premium Costs' },
      { id: 'medicare-coordination', label: 'FEHB + Medicare' },
      { id: 'healthcare-budget', label: 'Healthcare Budget Planning' },
      { id: 'protect-budget', label: 'Protecting Your Healthcare Budget' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'fehb-eligibility',
        icon: 'Shield',
        iconColor: 'blue',
        title: 'Keeping Your FEHB Coverage Into Retirement',
        content: 'The Federal Employees Health Benefits program is one of the best perks of federal service — and you can keep it for life after retirement. But there\'s one critical rule.',
        bullets: [
          '**The 5-Year Rule:** You must be enrolled in FEHB (or covered as a family member) for the 5 continuous years immediately before retirement',
          '**No gaps allowed:** Even a single pay period gap in coverage can disqualify you. If you dropped FEHB to save money, check your records carefully',
          '**Applies to both FERS and CSRS retirees:** The rule is the same regardless of retirement system',
          '**Survivor benefits:** Your spouse can continue FEHB coverage after your death if they were covered under your plan',
          '**Disability retirement:** Different rules may apply — check with OPM',
        ],
        callout: {
          type: 'warning',
          title: 'Don\'t Drop FEHB to Save Money Near Retirement',
          content: 'Some federal employees consider dropping FEHB coverage to save on premiums during their last few years. This is extremely risky — if you have any gap in coverage during the 5 years before retirement, you permanently lose the right to carry FEHB into retirement.',
        },
      },
      {
        id: 'premium-costs',
        icon: 'DollarSign',
        iconColor: 'amber',
        title: 'What FEHB Costs in Retirement',
        content: 'In retirement, you continue paying the employee share of your FEHB premium. The government still pays its share — typically 72-75% of the total premium. But premiums increase every year.',
        table: {
          headers: ['Plan Type', '2026 Employee Share (Self)', '2026 Employee Share (Family)', 'Annual Cost (Family)'],
          rows: [
            ['BCBS Standard', '$280/mo', '$620/mo', '$7,440/yr'],
            ['BCBS Basic', '$210/mo', '$470/mo', '$5,640/yr'],
            ['GEHA Standard', '$195/mo', '$440/mo', '$5,280/yr'],
            ['NALC High', '$180/mo', '$410/mo', '$4,920/yr'],
          ],
          caption: 'Estimated 2026 premiums. Actual costs vary by plan and location. Source: OPM FEHB Plan Comparison Tool.',
        },
        callout: {
          type: 'info',
          title: 'Premiums Deducted from Pension',
          content: 'FEHB premiums are automatically deducted from your FERS annuity check — pre-tax if you elected that option. You don\'t write a monthly check. This makes budgeting easier but also means your net pension payment is lower than the gross amount.',
        },
      },
      {
        id: 'medicare-coordination',
        icon: 'Heart',
        iconColor: 'green',
        title: 'FEHB + Medicare: How They Work Together',
        content: 'At age 65, most federal retirees should enroll in Medicare Part B even though they already have FEHB. Here\'s why: FEHB becomes secondary to Medicare, and the two together provide nearly complete coverage.',
        bullets: [
          '**Medicare Part A (Hospital):** Free if you have 40 quarters of Social Security credits. You should always enroll at 65.',
          '**Medicare Part B (Medical):** Costs $174.70+/month in 2026. FEHB plans waive or reduce copays/deductibles when you have Part B.',
          '**FEHB as secondary:** When you have both, Medicare pays first. FEHB picks up most of what Medicare doesn\'t cover.',
          '**Result:** Near-zero out-of-pocket costs for most medical services with both plans',
          '**Medicare Part D (Drugs):** Usually not needed — most FEHB plans include prescription drug coverage that\'s equivalent or better',
        ],
        callout: {
          type: 'tip',
          title: 'Don\'t Skip Medicare Part B',
          content: 'Federal retirees who skip Part B face two problems: (1) FEHB copays and deductibles stay higher, and (2) if you enroll in Part B later, you pay a 10% penalty for each year you were eligible but didn\'t enroll. The penalty is permanent.',
        },
      },
      {
        id: 'healthcare-budget',
        icon: 'Calculator',
        iconColor: 'blue',
        title: 'Total Healthcare Budget for Federal Retirement',
        content: 'Between FEHB premiums, Medicare Part B, and out-of-pocket costs, healthcare is one of the largest expenses in federal retirement. Here\'s a realistic budget.',
        table: {
          headers: ['Expense', 'Before Age 65', 'After Age 65 (with Medicare)', 'Annual Total'],
          rows: [
            ['FEHB Premium (Family)', '$620/mo', '$620/mo', '$7,440'],
            ['Medicare Part B', 'N/A', '$174.70/mo', '$2,096'],
            ['Dental/Vision (if separate)', '$50/mo', '$50/mo', '$600'],
            ['Copays & Deductibles', '$200/mo avg', '$50/mo avg', '$600-$2,400'],
            ['Total Before 65', '$870/mo', '—', '$10,440/yr'],
            ['Total After 65', '—', '$895/mo', '$10,736/yr'],
          ],
          caption: 'Estimates based on BCBS Standard Family plan. Individual circumstances vary significantly.',
        },
        callout: {
          type: 'warning',
          title: 'Healthcare Inflation Compounds Fast',
          content: 'Healthcare costs have risen 5-7% annually for decades — faster than general inflation and much faster than your FERS diet COLA. A $10,000/year healthcare budget today could be $18,000-$22,000 in 10 years and $30,000+ in 20 years.',
        },
      },
      {
        id: 'protect-budget',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'Protecting Your Healthcare Budget from Inflation',
        content: 'Healthcare costs are the fastest-growing expense for federal retirees. Your FERS pension\'s diet COLA can\'t keep pace, and TSP paper assets may not either during inflationary periods. That\'s where gold comes in.',
        bullets: [
          '**Gold has outpaced healthcare inflation** over the past 25 years (8.3% vs 5-7%)',
          '**A Gold IRA serves as a healthcare reserve** — assets that grow during inflationary periods when healthcare costs spike fastest',
          '**Physical gold is liquid** — you can sell portions of your Gold IRA to cover healthcare costs as needed',
          '**No correlation with healthcare stocks** — your gold doesn\'t drop when the healthcare sector drops',
          '**Example:** $45,000 in gold in 2015 is worth approximately $90,000+ today — enough to cover several years of premium increases',
        ],
      },
    ],

    goldBridge: {
      title: 'Don\'t Let Healthcare Costs Drain Your Retirement',
      content: 'Healthcare is the fastest-growing expense in federal retirement. A Gold IRA provides a dedicated inflation hedge specifically designed to grow faster than rising costs.',
      bullets: [
        'Gold has outpaced healthcare inflation for 25 years',
        'Liquid — sell portions as needed for medical expenses',
        'Tax-free growth inside the IRA',
        'Protects against both general and healthcare-specific inflation',
      ],
    },

    faqs: [
      {
        question: 'Can I keep FEHB if I retire early?',
        answer: 'Yes, as long as you meet the 5-year continuous enrollment requirement before your retirement date. Early FERS retirees (MRA+10 or discontinued service) can keep FEHB. However, your FERS annuity might be reduced, which means FEHB premiums take a bigger bite of your net pension.',
      },
      {
        question: 'Should I drop FEHB and just use Medicare?',
        answer: 'Generally no. FEHB plus Medicare together provide the best coverage. FEHB fills Medicare\'s gaps (like dental, vision, and reduced copays). Dropping FEHB saves premiums but exposes you to Medicare\'s deductibles and coverage limits. And once you drop FEHB, getting it back is very difficult.',
      },
      {
        question: 'Do I have to pay for Medicare Part B if I have FEHB?',
        answer: 'Medicare Part B is optional, but highly recommended. At $174.70+/month (2026), it reduces your FEHB out-of-pocket costs significantly. Most FEHB plans waive copays and deductibles for services covered by Medicare. The math almost always favors enrolling in Part B.',
      },
      {
        question: 'What happens to my FEHB if my spouse dies?',
        answer: 'If you are the surviving spouse covered under a federal employee/retiree\'s FEHB Self and Family plan, you can continue FEHB coverage. You become the enrollee and pay the Self Only rate. This is one of the most valuable benefits of FEHB — survivor coverage at government-subsidized rates.',
      },
      {
        question: 'How much should I budget for healthcare in federal retirement?',
        answer: 'Plan for $8,000-$12,000/year for a couple, depending on plan choice and whether you have Medicare. This amount increases 5-7% annually with healthcare inflation. A 60-year-old retiring today should budget $250,000-$400,000 for healthcare over a 25-30 year retirement.',
      },
    ],

    relatedArticles: ['fers-pension-and-gold', 'social-security-fairness-act'],
    relatedTools: ['/tools/fers-calculator', '/tools/retirement-spending-calculator'],
    relatedGuides: ['/guide/gold-ira-for-seniors'],
  },

  // ============================================
  // PAGE 4: Social Security Fairness Act
  // ============================================
  {
    slug: 'social-security-fairness-act',
    hubSlug: 'federal-retirement',
    title: 'Social Security Fairness Act 2025: What It Means for Federal Retirees',
    subtitle: 'WEP and GPO are gone. Here\'s how to make the most of your increased Social Security benefits.',
    articleType: 'guide',

    metaTitle: 'Social Security Fairness Act 2025: WEP & GPO Repeal Explained for Federal Employees',
    metaDescription: 'The Social Security Fairness Act eliminated WEP and GPO, increasing benefits for 2.8 million public-sector retirees. Learn about retroactive payments and how to invest your windfall.',
    keywords: ['Social Security Fairness Act', 'WEP repeal', 'GPO repeal federal employees', 'Social Security Fairness Act 2025', 'windfall elimination provision repeal'],

    targetKeyword: 'Social Security Fairness Act',
    volume: 8100,
    difficulty: 25,

    heroIcon: 'Scale',

    takeaways: [
      'Signed into law January 2025 — eliminates both WEP and GPO permanently',
      '2.8 million public-sector retirees affected, including many federal employees',
      'SSA distributed $17 billion in retroactive payments by mid-2025',
      'Average WEP reduction was $350/month — now restored',
      'GPO eliminated: surviving spouses now receive full survivor benefits',
      'Extra Social Security income creates an opportunity to diversify into gold',
      'No impact on your FERS pension — this only affects Social Security',
    ],

    tocItems: [
      { id: 'what-changed', label: 'What Changed' },
      { id: 'wep-explained', label: 'WEP Repeal' },
      { id: 'gpo-explained', label: 'GPO Repeal' },
      { id: 'retroactive', label: 'Retroactive Payments' },
      { id: 'who-affected', label: 'Who Is Affected' },
      { id: 'invest-windfall', label: 'Investing Your Windfall' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'what-changed',
        icon: 'Scale',
        iconColor: 'green',
        title: 'What the Social Security Fairness Act Changed',
        content: 'The Social Security Fairness Act, signed into law in January 2025, permanently eliminated two provisions that reduced Social Security benefits for public-sector workers: the **Windfall Elimination Provision (WEP)** and the **Government Pension Offset (GPO)**.',
        bullets: [
          '**WEP (Windfall Elimination Provision):** Reduced Social Security benefits for workers who also earned a government pension from employment not covered by Social Security',
          '**GPO (Government Pension Offset):** Reduced or eliminated Social Security spousal/survivor benefits for those receiving a government pension',
          '**Both eliminated permanently** — not just suspended or reduced',
          '**Effective retroactively** to January 2024 benefit payments',
          '**Bipartisan passage:** Both chambers of Congress passed it with strong bipartisan support',
        ],
      },
      {
        id: 'wep-explained',
        icon: 'DollarSign',
        iconColor: 'blue',
        title: 'WEP Repeal: What It Means for Your Benefits',
        content: 'The Windfall Elimination Provision (WEP) used a modified formula to reduce Social Security benefits for workers who also received a pension from employment not covered by Social Security. For many federal employees under CSRS (and some FERS employees with prior non-covered state/local work), WEP reduced monthly benefits by an average of $350.',
        table: {
          headers: ['Scenario', 'Before WEP Repeal', 'After WEP Repeal', 'Monthly Increase'],
          rows: [
            ['CSRS retiree, 20 years SS-covered work', '$850/mo', '$1,200/mo', '+$350'],
            ['Mixed CSRS/FERS, 15 years covered', '$620/mo', '$900/mo', '+$280'],
            ['State pension + federal service', '$750/mo', '$1,150/mo', '+$400'],
          ],
          caption: 'Examples are illustrative. Actual increases vary based on earnings history and years of coverage.',
        },
        callout: {
          type: 'info',
          title: 'Who Was Affected by WEP?',
          content: 'WEP primarily affected CSRS (Civil Service Retirement System) employees who also worked in Social Security-covered jobs. Most pure FERS employees were not affected by WEP since FERS includes Social Security coverage. However, FERS employees with prior state or local government service that wasn\'t covered by Social Security may have been affected.',
        },
      },
      {
        id: 'gpo-explained',
        icon: 'Users',
        iconColor: 'purple',
        title: 'GPO Repeal: Surviving Spouses Get Full Benefits',
        content: 'The Government Pension Offset (GPO) was even more devastating than WEP. It reduced Social Security spousal and survivor benefits by two-thirds of the government pension amount. For many widows and widowers of federal employees, GPO completely eliminated their survivor benefits.',
        bullets: [
          '**The old rule:** Your Social Security spousal/survivor benefit was reduced by 2/3 of your government pension',
          '**Example:** With a $2,400/month CSRS pension, GPO reduced your Social Security survivor benefit by $1,600. If your survivor benefit was $1,400, you got $0.',
          '**Now eliminated:** Full Social Security spousal and survivor benefits restored',
          '**Impact:** Surviving spouses who were receiving $0 in SS benefits may now receive $800-$1,600/month',
          '**Retroactive:** Benefits recalculated back to January 2024',
        ],
      },
      {
        id: 'retroactive',
        icon: 'Clock',
        iconColor: 'amber',
        title: 'Retroactive Payments: What to Expect',
        content: 'The Social Security Administration has been processing retroactive payments since the law\'s enactment. Most affected beneficiaries have received or will receive lump-sum payments covering the period from January 2024 to the date of recalculation.',
        bullets: [
          '**$17 billion distributed** in retroactive payments by mid-2025',
          '**Average retroactive payment:** $4,000-$8,000 (varies based on individual WEP/GPO reduction)',
          '**Automatic processing:** SSA is recalculating benefits automatically — you don\'t need to apply',
          '**Verification:** Check your my Social Security account at ssa.gov for updated benefit amounts',
          '**Tax implications:** Retroactive payments are taxable in the year received. Consult a tax advisor for lump-sum election options',
        ],
        callout: {
          type: 'tip',
          title: 'Check Your Updated Benefit',
          content: 'Log into your my Social Security account at ssa.gov to see your recalculated benefit amount. If you believe the recalculation is incorrect, contact SSA at 1-800-772-1213. Keep records of your earnings history and government pension amounts.',
        },
      },
      {
        id: 'who-affected',
        icon: 'Users',
        iconColor: 'blue',
        title: 'Who Benefits from This Law?',
        content: 'The Social Security Fairness Act affects approximately 2.8 million public-sector workers and retirees across several groups.',
        bullets: [
          '**CSRS federal retirees** who also earned Social Security credits from other employment',
          '**State and local government retirees** from the 15 states that don\'t participate in Social Security',
          '**Teachers** in states like California, Texas, and Ohio with separate pension systems',
          '**Police officers and firefighters** with non-Social Security pensions',
          '**Surviving spouses** of public-sector workers who were denied survivor benefits under GPO',
          '**Current federal employees** under CSRS Offset who will retire with both a pension and SS benefits',
        ],
      },
      {
        id: 'invest-windfall',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'How to Use Your Increased Social Security Benefits Wisely',
        content: 'For federal retirees receiving $200-$400 more per month in Social Security, this increased income creates a genuine opportunity to strengthen your retirement portfolio without reducing your monthly cash flow.',
        bullets: [
          '**Option 1: Diversify into Gold IRA** — Use the extra income to fund Gold IRA contributions or roll over additional TSP funds, knowing your monthly budget is covered by the higher SS payment',
          '**Option 2: Build an emergency fund** — Set aside 6-12 months of the extra income before investing',
          '**Option 3: Invest the retroactive lump sum** — A $5,000-$8,000 retroactive payment is a solid starting point for a Gold IRA',
          '**Option 4: Pay off debt** — If you carry credit card or other high-interest debt, eliminating it first provides an immediate guaranteed return',
          '**The key insight:** This is "found money" — income you weren\'t receiving before. Investing it rather than spending it compounds your retirement security',
        ],
        callout: {
          type: 'example',
          title: 'Real Scenario',
          content: 'A CSRS retiree receiving $350/month more in Social Security ($4,200/year) could invest that amount in a Gold IRA annually. Over 10 years at gold\'s historical 8.3% average return, that\'s roughly $62,000 — built entirely from money you weren\'t getting before the Fairness Act.',
        },
      },
    ],

    goldBridge: {
      title: 'Turn Your Increased Benefits into Lasting Protection',
      content: 'The Social Security Fairness Act gives you more income each month. Instead of spending it, invest it in an asset that protects against the very inflation that threatens the rest of your retirement.',
      bullets: [
        'Use extra SS income to fund a Gold IRA',
        'Invest retroactive lump sum for maximum compounding',
        'No reduction in monthly cash flow',
        'Build protection without touching your pension or TSP',
      ],
    },

    faqs: [
      {
        question: 'Do I need to apply for the WEP/GPO benefit increase?',
        answer: 'No. The Social Security Administration is automatically recalculating benefits for all affected individuals. You should see the increase reflected in your monthly payment without filing any paperwork. Check your my Social Security account at ssa.gov to verify.',
      },
      {
        question: 'Does the Social Security Fairness Act affect FERS employees?',
        answer: 'Most FERS employees are not affected because FERS includes Social Security coverage (and therefore WEP/GPO generally didn\'t apply to them). However, FERS employees who previously worked in non-Social Security-covered government positions may benefit from the WEP repeal.',
      },
      {
        question: 'Is the retroactive payment taxable?',
        answer: 'Yes. Retroactive Social Security payments are generally taxable in the year received. However, you may be able to use the "lump-sum election" on your tax return to allocate the income back to the years it should have been received, potentially reducing your tax liability. Consult a tax professional.',
      },
      {
        question: 'Will WEP and GPO come back?',
        answer: 'The Social Security Fairness Act permanently repealed both provisions. There is no sunset clause or expiration date. While Congress could theoretically re-enact similar provisions in the future, the broad bipartisan support for the repeal makes this extremely unlikely.',
      },
      {
        question: 'How much more will I get in Social Security?',
        answer: 'The increase varies significantly based on your earnings history. The average WEP reduction was about $350/month, so most affected individuals see a $200-$500/month increase. GPO-affected surviving spouses may see even larger increases if their benefits were previously reduced to $0.',
      },
    ],

    relatedArticles: ['fers-pension-and-gold', 'fehb-retirement-healthcare', 'tsp-to-gold-diversification'],
    relatedTools: ['/tools/social-security-calculator', '/tools/wep-calculator', '/tools/social-security-break-even-calculator'],
  },

  // ============================================
  // PAGE 5: Military TSP Rollover
  // ============================================
  {
    slug: 'military-tsp-rollover',
    hubSlug: 'federal-retirement',
    title: 'Military TSP to Gold IRA: Rollover Guide for Veterans & Service Members',
    subtitle: 'Your military TSP can be rolled into a Gold IRA after separation. Here\'s what every veteran needs to know.',
    articleType: 'guide',

    metaTitle: 'Military TSP to Gold IRA: Veteran Rollover Guide (2026)',
    metaDescription: 'Military service members can roll over TSP to a Gold IRA tax-free after separation. BRS matching, combat zone Roth, VA disability considerations, and step-by-step process.',
    keywords: ['military TSP gold IRA', 'veteran retirement gold', 'military TSP rollover', 'BRS TSP gold', 'veteran gold IRA', 'military retirement gold'],

    targetKeyword: 'military TSP gold IRA',
    volume: 390,
    difficulty: 14,

    heroIcon: 'Shield',

    takeaways: [
      'Military TSP can be rolled into a Gold IRA tax-free after separating from service',
      'Blended Retirement System (BRS) members receive matching TSP contributions up to 5%',
      'Combat zone TSP contributions are Roth (tax-free) — and stay tax-free in a Roth Gold IRA',
      'VA disability compensation is tax-free and not affected by Gold IRA investments',
      'Both traditional and Roth military TSP balances can be rolled over',
      'Active duty members cannot roll over TSP — must wait for separation or age 59½',
      'TSP loans must be repaid before separation or they become taxable distributions',
    ],

    tocItems: [
      { id: 'brs-overview', label: 'Blended Retirement System' },
      { id: 'military-tsp', label: 'Military TSP Specifics' },
      { id: 'combat-zone', label: 'Combat Zone Contributions' },
      { id: 'va-disability', label: 'VA Disability & Gold IRA' },
      { id: 'rollover-process', label: 'Rollover Process' },
      { id: 'after-separation', label: 'After Separation' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'brs-overview',
        icon: 'Shield',
        iconColor: 'blue',
        title: 'The Blended Retirement System (BRS) and Your TSP',
        content: 'Since 2018, all new military service members are enrolled in the Blended Retirement System (BRS). Unlike the legacy "20-year" retirement system, BRS combines a reduced pension with TSP matching contributions — making the TSP a critical part of military retirement.',
        bullets: [
          '**Automatic 1% contribution** from DoD to your TSP starting on your 60th day of service',
          '**Up to 5% matching** on your own contributions (dollar-for-dollar up to 3%, then 50 cents on the dollar for the next 2%)',
          '**Fully vested after 2 years** of service — the matching is yours even if you separate before 20 years',
          '**Legacy system:** No matching, but 50% of base pay pension at 20 years (vs 40% under BRS)',
          '**Continuation pay:** BRS members receive a lump-sum bonus at 12 years (2.5x-13x monthly basic pay)',
        ],
        callout: {
          type: 'info',
          title: 'BRS Changed the Game',
          content: 'Under the legacy system, 83% of service members left with zero retirement benefit (you needed 20 years for any pension). BRS means every service member with 2+ years gets something — and the TSP becomes the primary retirement vehicle for the majority who serve less than 20 years.',
        },
      },
      {
        id: 'military-tsp',
        icon: 'Layers',
        iconColor: 'green',
        title: 'How Military TSP Differs from Federal Civilian TSP',
        content: 'Your military TSP account works similarly to the civilian version, but there are key differences that affect your rollover strategy.',
        bullets: [
          '**Same fund options:** G, F, C, S, I, and Lifecycle funds — still zero precious metals',
          '**Combat zone contributions:** Can exceed the normal $23,500 limit (up to $70,000 total in 2026) when in a combat zone',
          '**Tax-exempt contributions:** Money contributed from combat pay goes in tax-free (Roth treatment even in traditional TSP)',
          '**Separate from civilian TSP:** If you later become a federal civilian employee, you\'ll have two separate TSP accounts (can combine them)',
          '**Deployment limitations:** Hard to manage your TSP allocation when deployed — many service members stay in default Lifecycle Fund',
        ],
      },
      {
        id: 'combat-zone',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'Combat Zone Contributions: Your Tax-Free Advantage',
        content: 'If you contributed to your TSP while deployed to a combat zone, those contributions are classified as tax-exempt — essentially Roth money even if it went into a traditional TSP account. This creates a unique advantage when rolling over to a Gold IRA.',
        bullets: [
          '**Tax-exempt contributions** can be rolled into a Roth Gold IRA — where they continue growing tax-free forever',
          '**No income limits** for this rollover (unlike normal Roth IRA income restrictions)',
          '**Separating tax-exempt contributions:** TSP tracks these separately. When you roll over, you can direct tax-exempt funds to a Roth IRA and traditional funds to a traditional IRA',
          '**Double tax benefit:** Combat pay wasn\'t taxed going in, and in a Roth Gold IRA, it won\'t be taxed coming out',
          '**Example:** $30,000 in combat zone contributions + growth could become $60,000+ in 20 years — all 100% tax-free in a Roth Gold IRA',
        ],
        callout: {
          type: 'tip',
          title: 'Split Your Rollover',
          content: 'When rolling over military TSP, you can split the distribution: tax-exempt (combat zone) contributions go to a Roth Gold IRA, and traditional contributions go to a traditional Gold IRA. This preserves the tax-free status of your combat zone savings.',
        },
      },
      {
        id: 'va-disability',
        icon: 'Heart',
        iconColor: 'purple',
        title: 'VA Disability Compensation & Gold IRA',
        content: 'Many veterans receive VA disability compensation. Here\'s how it interacts with Gold IRA investments — the good news is, it doesn\'t create any problems.',
        bullets: [
          '**VA disability is tax-free** — it\'s not counted as income for IRA contribution limits or Roth eligibility',
          '**Gold IRA investments don\'t affect your VA rating** or benefit amount',
          '**CRSC and CRDP:** Combat-Related Special Compensation and Concurrent Retirement Disability Pay are also not affected by Gold IRA investments',
          '**You still need earned income** to make new IRA contributions. VA disability alone doesn\'t count — but TSP rollovers don\'t require earned income',
          '**Medicaid consideration:** If you later need Medicaid, Gold IRA assets may be counted. VA benefits and VA pension have different asset rules',
        ],
      },
      {
        id: 'rollover-process',
        icon: 'FileText',
        iconColor: 'blue',
        title: 'Military TSP to Gold IRA: Step-by-Step',
        content: 'The rollover process for military TSP is nearly identical to the civilian process, with one extra consideration — combat zone contributions.',
        numberedList: [
          '**Verify separation status:** You must be separated from military service (DD-214 in hand) or be age 59½+ for in-service withdrawal',
          '**Choose a Gold IRA custodian:** Look for custodians experienced with military TSP rollovers — they understand combat zone contribution splitting',
          '**Determine your rollover amount:** Decide how much to roll over (10-15% is typical). Check your TSP statement for tax-exempt vs. traditional balances',
          '**Open your Gold IRA:** Your custodian handles the paperwork. Specify if you want traditional, Roth, or both (for split rollovers)',
          '**Request direct rollover through TSP.gov:** Use the online withdrawal wizard. Select "transfer to IRA" and enter your custodian\'s information',
          '**Select your precious metals:** Choose IRA-approved gold and silver coins/bars',
          '**Storage and confirmation:** Metals stored in an IRS-approved depository. You receive purchase confirmation and storage documentation',
        ],
      },
      {
        id: 'after-separation',
        icon: 'Target',
        iconColor: 'green',
        title: 'What to Do with Your TSP After Military Separation',
        content: 'When you separate from the military, you have several options for your TSP. Many veterans leave their money sitting in the TSP without realizing they have better options.',
        bullets: [
          '**Leave it in TSP:** You can keep your money in TSP after separation, but you can\'t make new contributions. Same limited fund options.',
          '**Roll to Gold IRA (partial):** Move 10-15% to gold for diversification, keep the rest in TSP',
          '**Roll to Gold IRA (full):** Move everything to a self-directed IRA for maximum control and precious metals access',
          '**Roll to new employer\'s 401(k):** If you start a civilian job. But most 401(k)s also lack gold options.',
          '**Cash out (worst option):** You\'ll pay income tax plus 10% early withdrawal penalty if under 59½. Avoid this.',
        ],
        callout: {
          type: 'warning',
          title: 'Don\'t Let Your TSP Sit Forgotten',
          content: 'Many veterans separate and never touch their TSP again. Without active management, your money sits in whatever fund you last selected — often the default Lifecycle Fund that shifts increasingly to bonds as you age. At minimum, review your allocation. Better yet, diversify into gold.',
        },
      },
    ],

    goldBridge: {
      title: 'You Served Your Country — Now Protect Your Retirement',
      content: 'Your military service earned you TSP benefits. A Gold IRA rollover ensures those benefits are protected from the same economic risks the TSP can\'t hedge against.',
      bullets: [
        'Tax-free rollover for both traditional and combat zone (Roth) TSP',
        'No impact on VA disability benefits',
        'Physical gold in IRS-approved storage',
        'Diversify beyond the TSP\'s limited fund options',
      ],
    },

    faqs: [
      {
        question: 'Can I roll over my military TSP while still on active duty?',
        answer: 'Generally no. You must be separated from military service to do a full TSP rollover. The exception is age-based in-service withdrawals at 59½, which is rare for active duty. Guard and Reserve members in a non-pay status may have additional options.',
      },
      {
        question: 'What happens to my TSP if I join the federal civilian workforce?',
        answer: 'You\'ll get a new civilian TSP account. You can keep both accounts separate or combine them. Either way, you can roll over part or all of either TSP into a Gold IRA. Many military-to-civilian federal employees maintain three accounts: military TSP, civilian TSP, and a Gold IRA.',
      },
      {
        question: 'Can I roll over combat zone contributions to a Roth Gold IRA?',
        answer: 'Yes. Combat zone contributions in your TSP are tax-exempt (even if in a traditional TSP account). You can direct these specifically to a Roth Gold IRA, where they continue growing tax-free. This is one of the best tax advantages available to veterans.',
      },
      {
        question: 'Does my Gold IRA affect my VA disability rating or benefits?',
        answer: 'No. VA disability compensation is based on service-connected conditions, not your financial assets. Having a Gold IRA (or any investment) does not affect your disability rating, monthly compensation amount, or eligibility for VA healthcare.',
      },
      {
        question: 'How much should a veteran put in a Gold IRA?',
        answer: 'The same 10-15% guideline applies. A veteran with a $150,000 military TSP might roll over $15,000-$22,500 into gold. If you also have a military pension (20+ years), you have more guaranteed income and might allocate a higher percentage to gold for growth potential.',
      },
    ],

    relatedArticles: ['tsp-to-gold-diversification', 'fers-pension-and-gold'],
    relatedTools: ['/tools/tsp-calculator', '/tools/gold-allocation-calculator'],
    relatedGuides: ['/guide/tsp-to-gold-ira-rollover'],

    programReferences: [
      { program: 'Blended Retirement System', agency: 'Department of Defense', url: 'https://militarypay.defense.gov/blendedretirement/' },
      { program: 'Military TSP', agency: 'Federal Retirement Thrift Investment Board', url: 'https://www.tsp.gov/making-contributions/' },
      { program: 'VA Disability Compensation', agency: 'Department of Veterans Affairs', url: 'https://www.va.gov/disability/' },
    ],
  },
];

// ============================================
// DATA ACCESS FUNCTIONS
// ============================================

export function getAllFederalRetirementArticles(): FederalRetirementArticle[] {
  return federalRetirementArticles;
}

export function getAllFederalRetirementArticleSlugs(): string[] {
  return federalRetirementArticles.map((a) => a.slug);
}

export function getFederalRetirementArticleBySlug(slug: string): FederalRetirementArticle | undefined {
  return federalRetirementArticles.find((a) => a.slug === slug);
}

export function getRelatedFederalRetirementArticles(currentSlug: string): FederalRetirementArticle[] {
  const current = getFederalRetirementArticleBySlug(currentSlug);
  if (!current) return [];

  return current.relatedArticles
    .map((slug) => getFederalRetirementArticleBySlug(slug))
    .filter((a): a is FederalRetirementArticle => a !== undefined);
}
