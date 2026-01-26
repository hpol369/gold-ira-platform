// src/data/learn-articles/couples-retirement-cluster.ts
// Couples/Spouse Retirement - coordination, timing, and planning for couples

import { LearnArticle, LearnArticleRegistry } from '@/types/learn-article';

export const couplesRetirementArticles: LearnArticleRegistry = {
  'husband-wants-to-retire-wife-doesnt': {
    slug: 'husband-wants-to-retire-wife-doesnt',
    title: 'Husband Wants to Retire But Wife Doesn\'t: Finding Common Ground',
    subtitle: 'When spouses disagree about retirement timing, it can strain the marriage. Here\'s how to navigate this challenging conversation and find a compromise that works for both.',

    metaTitle: 'Husband Wants to Retire But Wife Doesn\'t: Compromise Guide | 2026',
    metaDescription: 'Husband ready to retire but wife isn\'t? Learn strategies for couples with different retirement timelines, compromise solutions, financial planning, and communication tips.',
    keywords: ['husband wants to retire wife doesnt', 'spouse disagrees retirement', 'retirement disagreement couples', 'one spouse wants to retire'],

    targetKeyword: 'husband wants to retire wife doesnt',
    volume: 20,
    difficulty: 0,
    cpc: 2.10,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Retirement disagreements are common - spouses often have different timelines and goals.',
      'Understanding WHY each spouse feels the way they do is the first step to compromise.',
      'Financial concerns are often the root issue, even when the conversation is about lifestyle.',
      'Compromise options exist: phased retirement, part-time work, staggered timelines.',
      'Communication and professional guidance can help couples find common ground.',
    ],

    tocItems: [
      { id: 'dynamics', label: 'Understanding the Disagreement' },
      { id: 'reasons', label: 'Why Spouses Disagree' },
      { id: 'conversation', label: 'Having the Conversation' },
      { id: 'compromise', label: 'Finding Compromise' },
      { id: 'financial', label: 'Financial Planning Together' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'dynamics',
        icon: 'Users',
        iconColor: 'blue',
        title: 'Understanding the Retirement Disagreement',
        content: 'When one spouse is eager to retire and the other isn\'t ready, it creates tension that goes beyond finances. This disagreement touches on identity, lifestyle, and the future of your relationship.',
        bullets: [
          '**Different life stages:** He may feel burned out while she\'s hitting her career stride',
          '**Career identity:** She may derive purpose from work that he\'s ready to leave behind',
          '**Financial fears:** One spouse may worry about money more than the other',
          '**Health considerations:** His health may be declining, making retirement feel urgent',
          '**Different visions:** They may have conflicting ideas about what retirement looks like',
        ],
      },
      {
        id: 'reasons',
        icon: 'MessageSquare',
        iconColor: 'amber',
        title: 'Common Reasons Wives Don\'t Want Husbands to Retire',
        content: 'Understanding her perspective is essential to finding resolution. Here are common reasons wives resist their husband\'s retirement.',
        bullets: [
          '**Financial security:** She worries about whether there\'s enough saved',
          '**Healthcare gap:** If she has employer health insurance, his early retirement creates a coverage gap',
          '**Loss of income:** She doesn\'t want to reduce household income prematurely',
          '**Career fulfillment:** She enjoys her work and isn\'t ready to retire herself',
          '**Fear of lifestyle change:** She worries about him being home all day without purpose',
          '**Social concerns:** She fears he\'ll become isolated or dependent on her for entertainment',
          '**Household dynamics:** Concern about new expectations for her if he\'s home',
        ],
        callout: {
          type: 'tip',
          title: 'Listen Before Solving',
          content: 'Before proposing solutions, truly listen to your spouse\'s concerns. Ask open-ended questions like "What worries you most about me retiring?" Often the stated reason isn\'t the real issue. Financial fears may mask deeper concerns about identity, relationship dynamics, or lifestyle changes.',
        },
      },
      {
        id: 'conversation',
        icon: 'Heart',
        iconColor: 'red',
        title: 'Having the Retirement Conversation',
        content: 'How you discuss this matters as much as what you discuss. Here\'s how to have productive conversations about retirement disagreements.',
        numberedList: [
          '**Choose the right time:** Not during a fight or when stressed. Schedule dedicated time.',
          '**Listen first:** Let your spouse fully express their concerns without interruption.',
          '**Validate feelings:** Even if you disagree, acknowledge their concerns are legitimate.',
          '**Share your "why":** Explain what retirement means to you and why it feels urgent.',
          '**Explore fears:** What\'s the worst-case scenario each of you imagines?',
          '**Brainstorm together:** Generate options without judging them initially.',
          '**Consider a mediator:** A financial advisor or counselor can provide neutral ground.',
        ],
        callout: {
          type: 'warning',
          title: 'Avoid Ultimatums',
          content: '"I\'m retiring whether you like it or not" damages trust and creates resentment. Retirement should be a joint decision. Unilateral action may cause permanent relationship harm even if the financial outcome is fine.',
        },
      },
      {
        id: 'compromise',
        icon: 'Handshake',
        iconColor: 'green',
        title: 'Finding Compromise Solutions',
        content: 'Most retirement disagreements have compromise solutions that address both spouses\' needs.',
        table: {
          headers: ['Concern', 'Compromise Option', 'How It Helps'],
          rows: [
            ['Financial fears', 'Set a specific savings milestone before retirement', 'Provides objective criteria both can agree on'],
            ['Healthcare gap', 'Husband retires when wife reaches 65 (Medicare)', 'Maintains insurance coverage'],
            ['Too much time together', 'Husband takes up structured activities/volunteering', 'Provides purpose and independence'],
            ['Career identity', 'Wife continues working; staggered retirement', 'Respects her career while honoring his readiness'],
            ['Income concerns', 'Husband works part-time instead of full retirement', 'Maintains some income while reducing hours'],
          ],
        },
        bullets: [
          '**Phased retirement:** Husband reduces to part-time before fully retiring',
          '**Trial period:** Husband takes extended leave (3-6 months) to test retirement',
          '**Defined timeline:** Set a firm retirement date 1-2 years out that both agree to',
          '**Financial milestone:** Agree on a specific savings number that triggers retirement',
          '**Activity plan:** Husband creates a detailed plan for how he\'ll spend retirement days',
        ],
      },
      {
        id: 'financial',
        icon: 'DollarSign',
        iconColor: 'purple',
        title: 'Financial Planning as a Couple',
        content: 'Many retirement disagreements resolve when both spouses clearly understand the financial picture.',
        bullets: [
          '**Work with an advisor together:** Both spouses should be in the meeting',
          '**Run retirement projections:** See scenarios with both retired, one retired, different timing',
          '**Understand the numbers:** Sometimes the reluctant spouse is surprised they CAN afford retirement',
          '**Address healthcare costs:** Calculate the cost gap between employer insurance and alternatives',
          '**Model "what ifs":** What if the market drops 30%? What if one spouse needs care?',
          '**Discuss Social Security timing:** Coordinate claiming strategies for maximum benefit',
        ],
        callout: {
          type: 'info',
          title: 'The Power of Professional Guidance',
          content: 'A fee-only financial advisor provides objective analysis that neither spouse can dismiss as biased. Often, seeing the numbers from a neutral third party helps both spouses move past emotional positions to fact-based decisions.',
        },
      },
    ],

    goldBridge: {
      title: 'Security for Both Spouses',
      content: 'Joint retirement planning requires assets that protect BOTH spouses regardless of who retires first. A Gold IRA provides stability that reduces financial anxiety for both partners.',
      bullets: [
        'Physical gold provides security both spouses can trust',
        'Protection from market crashes that fuel retirement disagreements',
        'Tangible asset that doesn\'t depend on either spouse\'s employment status',
        'Reduces the financial fear driving many retirement conflicts',
        'Peace of mind that helps couples agree on retirement timing',
      ],
    },

    faqs: [
      {
        question: 'What if we simply can\'t agree on retirement timing?',
        answer: 'Consider working with a couples counselor who specializes in life transitions, or a financial planner who can mediate. Sometimes the disagreement is really about relationship dynamics or unspoken fears. A neutral third party can help surface the real issues. If one spouse is adamant, staggered retirement may be the solution.',
      },
      {
        question: 'Should the husband retire if the wife is strongly against it?',
        answer: 'Ideally, no. Unilateral retirement decisions can seriously damage a marriage. However, if health or job circumstances force the issue, be transparent and collaborative about it. Focus on addressing her specific concerns rather than dismissing them.',
      },
      {
        question: 'How common is it for spouses to disagree about retirement?',
        answer: 'Very common. Studies suggest 40-50% of couples have some disagreement about retirement timing. Different career trajectories, age gaps, health status, and financial attitudes all contribute. The key is addressing it as a team rather than adversaries.',
      },
      {
        question: 'What if the wife earns more and has better benefits?',
        answer: 'This is increasingly common. If her income and benefits are critical to the household, his retirement needs to account for this. She may need to continue working for healthcare coverage, or the retirement budget may need to be more conservative. Plan around her benefits if they\'re essential.',
      },
    ],

    relatedArticles: ['wife-retiring-before-husband', 'one-spouse-retired-other-working', 'coordinating-retirement-dates', 'breadwinner-spouse-retirement', 'stay-at-home-spouse-social-security', 'supporting-spouse-in-retirement', 'spouse-different-retirement-timeline'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'wife-retiring-before-husband': {
    slug: 'wife-retiring-before-husband',
    title: 'Wife Retiring Before Husband: Role Reversal and Planning Strategies',
    subtitle: 'When the wife retires first, traditional expectations shift. Here\'s how to navigate healthcare, income planning, and the new household dynamic.',

    metaTitle: 'Wife Retiring Before Husband: Planning & Healthcare Guide | 2026',
    metaDescription: 'Wife retiring before husband? Learn to manage role reversal, healthcare considerations, income planning, and emotional adjustment when she retires first.',
    keywords: ['wife retiring before husband', 'wife retires first', 'woman retires before man', 'wife early retirement'],

    targetKeyword: 'wife retiring before husband',
    volume: 15,
    difficulty: 0,
    cpc: 1.90,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Women retiring first is becoming more common as careers and retirement patterns evolve.',
      'Healthcare is a critical consideration - she may need to stay on his employer plan.',
      'Role reversal can challenge traditional expectations for both spouses.',
      'Income planning must account for her reduced earnings while he continues working.',
      'Communication about household responsibilities prevents resentment.',
    ],

    tocItems: [
      { id: 'role-reversal', label: 'The Role Reversal' },
      { id: 'healthcare', label: 'Healthcare Considerations' },
      { id: 'income', label: 'Income Planning' },
      { id: 'household', label: 'Household Dynamics' },
      { id: 'timeline', label: 'Planning His Retirement' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'role-reversal',
        icon: 'RefreshCw',
        iconColor: 'blue',
        title: 'Navigating the Role Reversal',
        content: 'When the wife retires before the husband, it can flip traditional expectations. This can be liberating or uncomfortable, depending on how you approach it.',
        bullets: [
          '**Breaking tradition:** Traditional expectations had men retiring first, which may create discomfort',
          '**Her new freedom:** She has time flexibility he doesn\'t, which can create schedule conflicts',
          '**His continued work:** He may feel pressure as the sole earner or envy her freedom',
          '**Social perceptions:** Others may question why "he\'s still working"',
          '**Celebration, not guilt:** Her retirement is an achievement to celebrate, not apologize for',
        ],
        callout: {
          type: 'tip',
          title: 'Reframe the Narrative',
          content: 'Instead of viewing this as unusual or awkward, frame it as strategic: "We\'re staggering retirements for healthcare continuity and income bridging." This is a smart financial decision, not a departure from tradition.',
        },
      },
      {
        id: 'healthcare',
        icon: 'Heart',
        iconColor: 'red',
        title: 'Healthcare Considerations',
        content: 'Healthcare is often the most significant concern when the wife retires before the husband.',
        table: {
          headers: ['Situation', 'Healthcare Option', 'Estimated Monthly Cost'],
          rows: [
            ['Wife under 65, husband working', 'Stay on husband\'s employer plan', '$0-$300 for spouse premium'],
            ['Wife under 65, husband\'s plan doesn\'t cover spouses', 'ACA marketplace', '$500-$1,000+ depending on income'],
            ['Wife 65+, husband still working', 'Wife on Medicare, husband on employer plan', 'Medicare: ~$175/month'],
            ['Both under 65, she retires', 'COBRA if her employer coverage was better', '$600-$1,200/month for 18 months'],
          ],
        },
        bullets: [
          '**Check his employer plan:** Most cover spouses regardless of spouse\'s employment status',
          '**Understand costs:** His plan may charge extra for spouse coverage',
          '**COBRA option:** If her employer had great coverage, COBRA extends it for 18 months',
          '**Medicare at 65:** She enrolls in Medicare even if he\'s still working',
          '**Prescription coverage:** Ensure her medications are covered under the new plan',
        ],
        callout: {
          type: 'warning',
          title: 'The Healthcare Gap Trap',
          content: 'If she retires at 60 and he doesn\'t offer spouse coverage, she faces 5 years of expensive healthcare. ACA marketplace plans can cost $8,000-$15,000/year before subsidies. Plan for this before she retires.',
        },
      },
      {
        id: 'income',
        icon: 'DollarSign',
        iconColor: 'green',
        title: 'Income Planning When She Retires First',
        content: 'Managing household income with one retired spouse requires coordination and clear expectations.',
        bullets: [
          '**His income covers expenses:** Primary household expenses come from his salary',
          '**Her accounts stay intact:** Minimize withdrawals from her 401k/IRA to let them grow',
          '**Her Social Security timing:** She can claim at 62 or delay for higher benefits',
          '**Spousal benefit option:** If his earnings were higher, she may eventually claim spousal benefits',
          '**Tax bracket management:** His solo income may drop you to a lower bracket',
          '**Roth conversion opportunity:** Lower household income is ideal for Roth conversions',
        ],
        table: {
          headers: ['Income Source', 'Strategy', 'Tax Consideration'],
          rows: [
            ['His salary', 'Covers all household expenses', 'Taxed as ordinary income'],
            ['Her Social Security', 'Optional - save if not needed', '0-85% taxable based on total income'],
            ['Her pension (if any)', 'Supplement or save', 'Fully taxable'],
            ['Her 401k/IRA', 'Avoid withdrawing if possible', 'Ordinary income tax on withdrawals'],
          ],
        },
      },
      {
        id: 'household',
        icon: 'Home',
        iconColor: 'purple',
        title: 'Navigating New Household Dynamics',
        content: 'When she retires and he continues working, household responsibilities often shift. This requires open discussion, not assumptions.',
        bullets: [
          '**Avoid gender traps:** Retirement doesn\'t make her the 1950s housewife',
          '**Reasonable adjustments:** She can handle daytime errands since she\'s available',
          '**Shared cooking:** Just because she\'s home doesn\'t mean she cooks every meal',
          '**Her interests matter:** She retired to pursue hobbies and interests, not to serve as house staff',
          '**Discuss expectations:** What does each spouse expect from this arrangement?',
          '**Maintain equality:** She\'s not "not working" - she\'s retired after decades of career',
        ],
        callout: {
          type: 'warning',
          title: 'The Domestic Labor Trap',
          content: 'Some husbands unconsciously expect their retired wife to take on all household duties. This breeds resentment. Retirement is her reward for years of work, not a job reassignment. Negotiate chore distribution explicitly.',
        },
      },
      {
        id: 'timeline',
        icon: 'Calendar',
        iconColor: 'amber',
        title: 'Planning His Retirement Timeline',
        content: 'When will he retire? Having a clear plan reduces uncertainty and helps both spouses.',
        numberedList: [
          '**Set a target date:** Even if it\'s 3-5 years away, having a date provides clarity',
          '**Identify financial milestones:** What needs to happen before he can retire?',
          '**Healthcare transition:** Will he work until Medicare eligibility at 65?',
          '**Social Security strategy:** Will he delay to 70 for maximum benefit?',
          '**Don\'t pressure him:** If he enjoys his work, respect his timeline',
          '**Regular check-ins:** Revisit the plan annually as circumstances change',
        ],
        bullets: [
          '**Calculate total needs:** What do both retirements require financially?',
          '**Model scenarios:** What if he retires in 2 years vs. 5 years?',
          '**Her input matters:** She should be part of his retirement timeline discussions',
          '**Flexibility:** Life changes - be open to adjusting the plan',
        ],
      },
    ],

    goldBridge: {
      title: 'Protect Her Retirement Savings',
      content: 'When the wife retires first, her savings need protection while the husband continues working. A Gold IRA provides stability for her retirement nest egg.',
      bullets: [
        'Safeguard her 401k rollover with physical gold allocation',
        'Protection from market volatility while living on his income',
        'Tangible security independent of his continued employment',
        'Peace of mind knowing her retirement savings are protected',
        'Financial independence backed by physical assets',
      ],
    },

    faqs: [
      {
        question: 'Can the wife stay on the husband\'s health insurance if she retires?',
        answer: 'Usually yes. Most employer health plans cover spouses regardless of the spouse\'s employment status. Check with his HR department to confirm and understand any additional costs. This is often the most affordable healthcare option for a retired spouse under 65.',
      },
      {
        question: 'Should she claim Social Security when she retires?',
        answer: 'It depends. If his income covers all expenses, delaying her Social Security increases her benefit 8%/year until age 70. However, if you need the income or want her financial independence, claiming at 62-65 may make sense. Run the numbers for your situation.',
      },
      {
        question: 'How do we handle household chores when she retires first?',
        answer: 'Discuss this explicitly. While it\'s reasonable for her to take on daytime errands (since she\'s available), retirement doesn\'t mean she becomes the full-time housekeeper. Many couples find a balance: she handles daytime tasks, but cooking and weekend chores remain shared.',
      },
      {
        question: 'What if she feels guilty about not working?',
        answer: 'This is common, especially if she earned a significant income. Remind her (and yourself) that retirement is earned through decades of work. She\'s not "not working" - she\'s entered a new life phase. Focus on what she\'s pursuing (hobbies, volunteering, family) rather than what she\'s left behind.',
      },
    ],

    relatedArticles: ['husband-wants-to-retire-wife-doesnt', 'one-spouse-retired-other-working', 'coordinating-retirement-dates', 'breadwinner-spouse-retirement', 'stay-at-home-spouse-social-security', 'supporting-spouse-in-retirement', 'spouse-different-retirement-timeline'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'one-spouse-retired-other-working': {
    slug: 'one-spouse-retired-other-working',
    title: 'One Spouse Retired, Other Working: Managing Different Schedules and Lives',
    subtitle: 'When one spouse is retired and the other still works, you\'re living in two different worlds. Here\'s how to navigate this transition together.',

    metaTitle: 'One Spouse Retired Other Working: Schedule & Life Balance Guide | 2026',
    metaDescription: 'One spouse retired while other works? Learn to manage different schedules, identity shifts, financial coordination, and maintain your relationship during staggered retirement.',
    keywords: ['one spouse retired other working', 'spouse still working', 'retired while spouse works', 'staggered retirement couple'],

    targetKeyword: 'one spouse retired other working',
    volume: 20,
    difficulty: 0,
    cpc: 2.00,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Different retirement timelines create schedule mismatches that require communication.',
      'The retired spouse needs independent activities - not waiting around for the working spouse.',
      'Identity shifts happen differently for each spouse during staggered retirement.',
      'Financial coordination becomes more complex with one income and one drawing from savings.',
      'This phase is temporary - having an end date for the working spouse helps both.',
    ],

    tocItems: [
      { id: 'schedule', label: 'Managing Different Schedules' },
      { id: 'identity', label: 'Identity Shifts' },
      { id: 'financial', label: 'Financial Coordination' },
      { id: 'relationship', label: 'Protecting Your Relationship' },
      { id: 'activities', label: 'The Retired Spouse\'s Day' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'schedule',
        icon: 'Clock',
        iconColor: 'blue',
        title: 'Managing Different Schedules',
        content: 'When one spouse is retired and the other works, you\'re operating on completely different schedules. This requires adjustment from both partners.',
        bullets: [
          '**Morning mismatch:** Working spouse rushes to work; retired spouse has leisurely mornings',
          '**Daytime divergence:** Retired spouse has full days of freedom; working spouse is at the office',
          '**Evening energy gap:** Working spouse is tired; retired spouse may want to do things',
          '**Weekend expectations:** Retired spouse may want to fill weekends with activities; working spouse needs rest',
          '**Vacation disconnect:** Retired spouse can travel anytime; working spouse has limited PTO',
        ],
        callout: {
          type: 'tip',
          title: 'Protect Transition Time',
          content: 'When the working spouse comes home, they need 15-30 minutes of transition time before engaging. The retired spouse shouldn\'t immediately launch into conversation or plans. Let the working spouse decompress first.',
        },
      },
      {
        id: 'identity',
        icon: 'User',
        iconColor: 'purple',
        title: 'Navigating Identity Shifts',
        content: 'Retirement changes identity. When spouses are in different phases, each experiences this differently.',
        bullets: [
          '**Retired spouse:** Adjusting to life without work identity, finding new purpose',
          '**Working spouse:** Still defined by career, watching partner explore new identity',
          '**Potential envy:** Working spouse may resent partner\'s freedom',
          '**Potential guilt:** Retired spouse may feel guilty about not "contributing"',
          '**Different conversations:** Work stories vs. retirement activities creates disconnect',
          '**Social circles diverge:** Retired spouse builds new friendships; working spouse maintains work relationships',
        ],
        callout: {
          type: 'warning',
          title: 'The Envy Trap',
          content: 'It\'s natural for the working spouse to feel envy: "Why do I have to work while they\'re playing golf?" Acknowledge this feeling, but don\'t let it become resentment. Having a firm retirement date for the working spouse helps manage this envy.',
        },
      },
      {
        id: 'financial',
        icon: 'DollarSign',
        iconColor: 'green',
        title: 'Financial Coordination',
        content: 'When one spouse works and one is retired, finances require clear coordination.',
        table: {
          headers: ['Income/Expense', 'Strategy', 'Who Manages'],
          rows: [
            ['Working spouse salary', 'Covers household expenses, maxes 401k', 'Joint decision'],
            ['Retired spouse Social Security', 'Save if not needed; supplement if needed', 'Joint decision'],
            ['Retired spouse 401k/IRA', 'Minimize withdrawals if possible', 'Careful planning together'],
            ['Healthcare', 'Keep both on working spouse\'s employer plan', 'Working spouse handles enrollment'],
            ['Major purchases', 'Discuss together', 'Joint decision'],
          ],
        },
        bullets: [
          '**Maintain financial equality:** Both spouses should have equal say in financial decisions',
          '**Don\'t let "earner" dominate:** The working spouse shouldn\'t control finances just because they\'re earning',
          '**Transparent accounts:** Both should see and understand all accounts',
          '**Budget together:** Create a spending plan that works for both',
          '**The retired spouse isn\'t "spending your money":** It\'s joint money regardless of who earns it',
        ],
      },
      {
        id: 'relationship',
        icon: 'Heart',
        iconColor: 'red',
        title: 'Protecting Your Relationship',
        content: 'Staggered retirement can strengthen or strain a marriage. Here\'s how to protect your relationship.',
        bullets: [
          '**Regular check-ins:** Talk weekly about how this arrangement is working',
          '**Express needs:** The working spouse needs rest; the retired spouse needs engagement',
          '**Plan quality time:** Schedule activities you both enjoy together',
          '**Independence is healthy:** The retired spouse should have independent interests',
          '**Set an end date:** Know when both will be retired - this provides hope for the working spouse',
          '**Avoid scorekeeping:** Don\'t track who does more or has more freedom',
        ],
        numberedList: [
          'Acknowledge that this phase is temporary and challenging',
          'Have weekly conversations about what\'s working and what isn\'t',
          'The retired spouse takes on more daytime tasks (reasonable, not excessive)',
          'Protect weekends for shared activities and rest',
          'Keep a firm retirement date for the working spouse',
        ],
      },
      {
        id: 'activities',
        icon: 'Activity',
        iconColor: 'amber',
        title: 'The Retired Spouse\'s Day',
        content: 'What should the retired spouse do all day while their partner works? Having structure and independent activities is crucial.',
        bullets: [
          '**Don\'t wait around:** The biggest mistake is sitting at home waiting for the working spouse to return',
          '**Build routine:** Create a daily structure with activities, exercise, and social contact',
          '**Pursue interests:** Hobbies, volunteering, classes, fitness - things you couldn\'t do while working',
          '**Maintain social life:** Build friendships with other retirees who share your schedule',
          '**Stay productive:** Part-time work, consulting, or meaningful volunteering provides purpose',
          '**Household contribution:** Handle daytime errands, appointments, and tasks',
        ],
        callout: {
          type: 'info',
          title: 'The Purpose Problem',
          content: 'A retired spouse without purpose often becomes dependent on the working spouse for entertainment. This creates unhealthy dynamics. Build your own retirement life - hobbies, friends, activities - so you\'re fulfilled independent of your partner\'s schedule.',
        },
      },
    ],

    goldBridge: {
      title: 'Stability During the Transition',
      content: 'When one spouse is retired and the other works, you need retirement savings that provide stability regardless of employment status. A Gold IRA offers protection for both spouses.',
      bullets: [
        'Protect the retired spouse\'s savings while the working spouse continues accumulating',
        'Physical gold provides stability independent of either spouse\'s employment',
        'Reduce financial anxiety that can strain staggered retirement relationships',
        'Tangible asset both spouses can trust through this transitional period',
        'Peace of mind knowing your combined retirement is protected',
      ],
    },

    faqs: [
      {
        question: 'How do we handle resentment about different schedules?',
        answer: 'Acknowledge it openly. The working spouse will sometimes resent the retired spouse\'s freedom - that\'s normal. The key is having a firm end date so the working spouse knows their retirement is coming. Also, the retired spouse should be doing meaningful things with their time, not just "being lazy."',
      },
      {
        question: 'Should the retired spouse take over all household responsibilities?',
        answer: 'Some additional tasks are reasonable - daytime errands, appointments, and chores. However, the retired spouse shouldn\'t become unpaid house staff. They retired to enjoy life and pursue interests, not to serve the working spouse. Negotiate a fair distribution that respects both perspectives.',
      },
      {
        question: 'What if the retired spouse is bored and lonely?',
        answer: 'This is a warning sign. The retired spouse needs their own activities, social connections, and purpose. Volunteering, part-time work, hobbies, fitness, and friendships should fill their days. If boredom persists, consider whether early retirement was the right decision or whether more structure is needed.',
      },
      {
        question: 'How long can this staggered arrangement work?',
        answer: 'Most couples can manage 2-5 years of staggered retirement successfully if they communicate well and have a defined end date. Longer gaps become more challenging as the retired spouse builds a separate life and the working spouse may feel increasingly disconnected. Plan for the working spouse\'s retirement within a reasonable timeframe.',
      },
    ],

    relatedArticles: ['husband-wants-to-retire-wife-doesnt', 'wife-retiring-before-husband', 'coordinating-retirement-dates', 'breadwinner-spouse-retirement', 'stay-at-home-spouse-social-security', 'supporting-spouse-in-retirement', 'spouse-different-retirement-timeline'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'coordinating-retirement-dates': {
    slug: 'coordinating-retirement-dates',
    title: 'Coordinating Retirement Dates: Planning Together for Optimal Timing',
    subtitle: 'When should each spouse retire? Here\'s how to coordinate your retirement dates for maximum financial and personal benefit.',

    metaTitle: 'Coordinating Retirement Dates: Couples Timing Guide | 2026',
    metaDescription: 'Learn how to coordinate retirement dates as a couple. Optimize healthcare bridge, Social Security timing, income planning, and find the perfect retirement timing for both spouses.',
    keywords: ['coordinating retirement dates', 'when should we retire', 'couples retirement timing', 'planning retirement together'],

    targetKeyword: 'coordinating retirement dates',
    volume: 25,
    difficulty: 0,
    cpc: 2.30,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Coordinated retirement dates can save thousands in healthcare costs and maximize Social Security.',
      'Consider both financial and lifestyle factors when choosing who retires first.',
      'Healthcare bridge strategies often determine optimal retirement timing.',
      'Social Security coordination can add tens of thousands to lifetime benefits.',
      'Having firm dates (even if years away) reduces anxiety and enables planning.',
    ],

    tocItems: [
      { id: 'together-vs-staggered', label: 'Together vs. Staggered' },
      { id: 'healthcare', label: 'Healthcare Bridge Strategy' },
      { id: 'social-security', label: 'Social Security Coordination' },
      { id: 'financial', label: 'Financial Considerations' },
      { id: 'timeline', label: 'Creating Your Timeline' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'together-vs-staggered',
        icon: 'Calendar',
        iconColor: 'blue',
        title: 'Retiring Together vs. Staggered Retirement',
        content: 'Should you retire at the same time or stagger your retirements? Each approach has benefits and drawbacks.',
        table: {
          headers: ['Approach', 'Benefits', 'Challenges'],
          rows: [
            ['Retire together', 'Shared experience, travel together, same daily schedule', 'Healthcare gap if both under 65, both drawing from accounts, higher risk'],
            ['Staggered (1-3 years)', 'Healthcare bridge, income continues, test retirement', 'Different schedules, potential resentment, relationship adjustment'],
            ['Staggered (5+ years)', 'Maximize working spouse income, delay withdrawals', 'Long gap, separate social circles, working spouse may feel trapped'],
          ],
        },
        bullets: [
          '**Most couples stagger:** Complete simultaneous retirement is less common',
          '**Healthcare often decides:** The need for employer insurance often sets the timeline',
          '**Age difference matters:** If there\'s a 5-year age gap, staggering is natural',
          '**Career status matters:** If one spouse is thriving and one is burned out, stagger',
        ],
      },
      {
        id: 'healthcare',
        icon: 'Heart',
        iconColor: 'red',
        title: 'The Healthcare Bridge Strategy',
        content: 'Healthcare costs from ages 62-65 are significant. Strategic retirement timing can save tens of thousands of dollars.',
        bullets: [
          '**One stays employed for insurance:** If one spouse has great employer coverage, they\'re the last to retire',
          '**Bridge to 65:** The working spouse continues until both reach Medicare eligibility',
          '**ACA alternative:** If both want to retire early, calculate ACA marketplace costs',
          '**COBRA bridge:** 18 months of continued employer coverage after leaving',
          '**Spouse coverage check:** Confirm the working spouse\'s plan covers retired spouse',
        ],
        callout: {
          type: 'example',
          title: 'Healthcare Bridge in Action',
          content: 'John (62) wants to retire. His wife Mary (60) has excellent employer health insurance. Strategy: John retires and goes on Mary\'s plan. Mary works until 65 when both qualify for Medicare. Healthcare cost: $200/month spouse premium. Alternative (both on ACA): $1,400/month. Savings over 5 years: $72,000.',
        },
        table: {
          headers: ['Scenario', 'Monthly Healthcare Cost', '5-Year Cost'],
          rows: [
            ['Both on employer plan (one working)', '$200-$400', '$12,000-$24,000'],
            ['Both on ACA (ages 62-65)', '$1,200-$1,800', '$72,000-$108,000'],
            ['COBRA (18 months only)', '$1,000-$1,400', '$18,000-$25,200 then switch'],
          ],
        },
      },
      {
        id: 'social-security',
        icon: 'Building',
        iconColor: 'green',
        title: 'Coordinating Social Security Claiming',
        content: 'Retirement dates affect Social Security claiming strategies. Coordination can add tens of thousands to lifetime benefits.',
        bullets: [
          '**Lower earner claims first:** If there\'s a significant earnings difference, lower earner claims early',
          '**Higher earner delays:** Higher earner delays to 70 for maximum benefit (increases 8%/year after FRA)',
          '**Survivor benefit:** The higher earner\'s delayed benefit becomes the survivor\'s benefit if one spouse dies',
          '**Spousal benefit:** Lower earner may get 50% of higher earner\'s benefit if it\'s more than their own',
          '**Coordination requires planning:** Your retirement dates should align with your SS claiming strategy',
        ],
        callout: {
          type: 'tip',
          title: 'Optimal Strategy for Many Couples',
          content: 'Lower-earning spouse retires and claims Social Security at 62-65. Higher-earning spouse works until 70 (or as long as possible) to maximize their benefit. This provides some household income while maximizing the larger benefit and survivor protection.',
        },
      },
      {
        id: 'financial',
        icon: 'DollarSign',
        iconColor: 'amber',
        title: 'Financial Factors in Timing',
        content: 'Beyond healthcare and Social Security, several financial factors affect optimal retirement timing.',
        bullets: [
          '**Total savings:** Do you have enough for both to retire? One retiring first buys time to accumulate more.',
          '**Pension considerations:** Some pensions have age triggers or early retirement penalties',
          '**Sequence of returns risk:** Retiring during a market downturn is dangerous; staggering reduces this risk',
          '**Income tax planning:** Lower income years are ideal for Roth conversions',
          '**Debt payoff:** Consider retiring after major debts (mortgage, car) are paid',
          '**Stock options/vesting:** Some benefits require staying employed for specific dates',
        ],
        table: {
          headers: ['Factor', 'Impact on Timing', 'Strategy'],
          rows: [
            ['Healthcare', 'Often primary driver', 'One works until both have Medicare or ACA works financially'],
            ['Social Security', 'Coordination opportunity', 'Lower earner claims first; higher earner delays'],
            ['Savings level', 'May require delay', 'Target 25-30x annual expenses'],
            ['Pension', 'Age/years requirements', 'Check for cliff vesting or early retirement penalties'],
          ],
        },
      },
      {
        id: 'timeline',
        icon: 'TrendingUp',
        iconColor: 'purple',
        title: 'Creating Your Retirement Timeline',
        content: 'Here\'s how to create a coordinated retirement timeline that works for both spouses.',
        numberedList: [
          '**List each spouse\'s key dates:** Ages 62, 65, 67 (FRA), 70, plus any pension triggers',
          '**Identify healthcare needs:** When does each spouse have Medicare? Who has better employer coverage?',
          '**Calculate Social Security:** Model different claiming strategies for maximum lifetime benefits',
          '**Run retirement projections:** Use a financial advisor or tools to model different retirement dates',
          '**Discuss lifestyle preferences:** Who is more eager to retire? Who loves their work?',
          '**Consider health:** Any health issues that make earlier retirement necessary or later retirement risky?',
          '**Set firm dates:** Even if 5 years away, having specific retirement dates enables planning',
          '**Review annually:** Life changes - update your timeline as circumstances evolve',
        ],
      },
    ],

    goldBridge: {
      title: 'Financial Security for Coordinated Retirement',
      content: 'Coordinating retirement dates requires assets that provide stability regardless of who retires first. A Gold IRA protects both spouses throughout the transition.',
      bullets: [
        'Physical gold provides security through the retirement transition period',
        'Protection from market volatility during the critical retirement timing window',
        'Tangible asset that doesn\'t depend on either spouse\'s employment status',
        'Reduces sequence of returns risk that affects coordinated retirement',
        'Peace of mind for both spouses as you navigate the timing decision',
      ],
    },

    faqs: [
      {
        question: 'What\'s the ideal gap between retirement dates?',
        answer: 'There\'s no universal answer, but 2-5 years is common. Key milestones: bridge until both reach Medicare (65), allow higher earner to delay Social Security to 70, or match pension requirements. Very long gaps (10+ years) create relationship challenges. Very short gaps may not provide healthcare or financial benefits.',
      },
      {
        question: 'Should the older spouse always retire first?',
        answer: 'Not necessarily. Consider who has better benefits, who is more burned out, and who earns more. Sometimes the younger spouse retires first because their work is more stressful or they have health issues. Age is just one factor among many.',
      },
      {
        question: 'How do we handle disagreement about retirement dates?',
        answer: 'Work with a fee-only financial advisor who can provide objective analysis. Sometimes seeing the numbers helps both spouses agree. If the disagreement is emotional (identity, lifestyle fears), consider a couples counselor. The key is treating this as a team decision, not adversaries.',
      },
      {
        question: 'What if one spouse wants to retire MUCH earlier than the other?',
        answer: 'Large gaps (10+ years) are challenging but workable. Key considerations: healthcare coverage for the retired spouse, the retired spouse having independent activities and social life, and clear expectations about household responsibilities. Regular communication is essential to prevent resentment.',
      },
    ],

    relatedArticles: ['husband-wants-to-retire-wife-doesnt', 'wife-retiring-before-husband', 'one-spouse-retired-other-working', 'breadwinner-spouse-retirement', 'stay-at-home-spouse-social-security', 'supporting-spouse-in-retirement', 'spouse-different-retirement-timeline'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'breadwinner-spouse-retirement': {
    slug: 'breadwinner-spouse-retirement',
    title: 'When the Breadwinner Spouse Retires First: Income Replacement Strategies',
    subtitle: 'If the higher-earning spouse retires first, it dramatically changes household finances. Here\'s how to plan for this transition.',

    metaTitle: 'Breadwinner Spouse Retires First: Income Replacement Guide | 2026',
    metaDescription: 'Higher-earning spouse retiring first? Learn income replacement strategies, budget adjustments, Social Security optimization, and how to maintain financial stability.',
    keywords: ['breadwinner spouse retirement', 'higher earner retires first', 'main income earner retirement', 'primary earner retirement'],

    targetKeyword: 'breadwinner spouse retirement',
    volume: 15,
    difficulty: 0,
    cpc: 2.20,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'When the higher earner retires first, household income drops significantly.',
      'Income replacement requires drawing from savings, Social Security, or pension.',
      'The lower-earning spouse\'s income becomes critical - even if modest.',
      'Budget adjustments are usually necessary during the transition period.',
      'Social Security strategies differ when the higher earner retires early.',
    ],

    tocItems: [
      { id: 'impact', label: 'Income Impact' },
      { id: 'replacement', label: 'Income Replacement Strategies' },
      { id: 'budget', label: 'Budget Adjustments' },
      { id: 'social-security', label: 'Social Security Considerations' },
      { id: 'healthcare', label: 'Healthcare Strategy' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'impact',
        icon: 'TrendingDown',
        iconColor: 'red',
        title: 'The Income Impact',
        content: 'When the primary earner retires, household income can drop dramatically. This requires careful planning.',
        bullets: [
          '**Significant income drop:** If breadwinner earned 70% of household income, you\'re losing 70%',
          '**Lifestyle adjustment:** Spending may need to decrease during the transition',
          '**Savings withdrawal:** You may need to draw from retirement accounts earlier than planned',
          '**Lower spouse income helps:** Even modest income from the working spouse reduces withdrawal needs',
          '**Social Security timing:** The higher earner may claim early, reducing lifetime benefits',
        ],
        callout: {
          type: 'example',
          title: 'The Math of Breadwinner Retirement',
          content: 'Couple earns $200,000 combined: He earns $160,000, she earns $40,000. If he retires: Income drops from $200,000 to $40,000 (80% reduction). Even with Social Security ($30,000/year) and pension ($24,000/year), they\'re at $94,000 - less than half their previous income.',
        },
      },
      {
        id: 'replacement',
        icon: 'DollarSign',
        iconColor: 'green',
        title: 'Income Replacement Strategies',
        content: 'How do you replace the breadwinner\'s income when they retire first?',
        table: {
          headers: ['Income Source', 'Amount/Timing', 'Considerations'],
          rows: [
            ['Working spouse salary', 'Continues', 'May need to increase hours or delay retirement'],
            ['Social Security (breadwinner)', 'Age 62-70', 'Early claiming reduces benefit permanently'],
            ['Pension (if any)', 'Per terms', 'May be reduced if retiring before full eligibility'],
            ['401k/IRA withdrawals', 'As needed', 'Watch for tax implications; avoid depleting too fast'],
            ['Part-time work', 'Variable', 'Breadwinner could consult or work part-time'],
          ],
        },
        bullets: [
          '**Delay Social Security if possible:** Higher earner delaying to 70 maximizes their benefit (and survivor benefit)',
          '**Pension strategies:** Check if pension has early retirement reductions',
          '**Minimize 401k withdrawals:** Early heavy withdrawals can deplete accounts too quickly',
          '**Part-time income:** The retired breadwinner could consult or work part-time to bridge the gap',
          '**Working spouse considers options:** Can they increase income, take on more hours, or delay retirement?',
        ],
      },
      {
        id: 'budget',
        icon: 'Wallet',
        iconColor: 'amber',
        title: 'Budget Adjustments',
        content: 'When income drops significantly, spending must adjust. Here\'s how to approach this transition.',
        bullets: [
          '**Review all expenses:** Identify what can be reduced or eliminated',
          '**Prioritize essentials:** Housing, healthcare, food, and insurance come first',
          '**Reduce discretionary spending:** Travel, dining out, and entertainment may need cuts',
          '**Consider downsizing:** Smaller home means lower costs (mortgage, taxes, maintenance)',
          '**Vehicle costs:** Do you need two cars? Can you reduce driving costs?',
          '**Subscriptions and memberships:** Cancel what you don\'t actively use',
        ],
        callout: {
          type: 'tip',
          title: 'The Trial Budget',
          content: 'Before the breadwinner retires, try living on the reduced budget for 3-6 months. This reveals whether it\'s sustainable and identifies areas where you over or underestimated. It also helps build the savings buffer by banking the difference.',
        },
        numberedList: [
          'Calculate post-retirement income from all sources',
          'Compare to current expenses to identify the gap',
          'Identify expense categories to reduce',
          'Test the new budget while still earning',
          'Build a 1-2 year cash reserve for flexibility',
        ],
      },
      {
        id: 'social-security',
        icon: 'Building',
        iconColor: 'blue',
        title: 'Social Security When the Higher Earner Retires First',
        content: 'When the breadwinner retires first, Social Security claiming strategy requires careful consideration.',
        bullets: [
          '**Delay if possible:** Higher earner delaying to 70 increases benefit by 77% compared to claiming at 62',
          '**Survivor benefit implications:** The higher earner\'s benefit becomes the survivor benefit if they die first',
          '**Early claiming costs:** Claiming at 62 permanently reduces benefits by about 30%',
          '**Bridge income instead:** Use savings or part-time work to bridge to age 70',
          '**Lower earner claims first:** If income is needed, lower earner claims early; higher earner delays',
        ],
        callout: {
          type: 'warning',
          title: 'The Early Claiming Trap',
          content: 'Many breadwinners claim Social Security when they retire (often at 62-65). This can cost $50,000-$150,000 in lifetime benefits. If you can afford to delay - using savings, working spouse income, or part-time work - the higher benefit is usually worth it.',
        },
      },
      {
        id: 'healthcare',
        icon: 'Heart',
        iconColor: 'purple',
        title: 'Healthcare Strategy',
        content: 'If the breadwinner had employer healthcare, you need a new plan when they retire.',
        bullets: [
          '**COBRA:** Continues employer coverage for 18 months but expensive ($1,000-$1,500/month)',
          '**Working spouse\'s plan:** If the other spouse still works, both go on that plan',
          '**ACA marketplace:** Subsidies available based on income; reduced income may mean lower premiums',
          '**Medicare at 65:** If breadwinner is 65+, they go on Medicare',
          '**Healthcare sharing ministries:** An alternative for some, but with limitations',
        ],
        table: {
          headers: ['Option', 'Monthly Cost (couple)', 'Best For'],
          rows: [
            ['Working spouse employer plan', '$200-$600', 'If lower-earning spouse has employer coverage'],
            ['COBRA', '$1,000-$1,500', 'Short-term bridge if you like current coverage'],
            ['ACA marketplace', '$400-$1,000', 'If income drops significantly (subsidies available)'],
            ['Medicare (65+)', '$350/person with supplement', 'Once either spouse reaches 65'],
          ],
        },
      },
    ],

    goldBridge: {
      title: 'Protect the Breadwinner\'s Retirement Savings',
      content: 'When the higher earner retires first, their savings must last longer and may be drawn down sooner. A Gold IRA provides protection during this critical transition.',
      bullets: [
        'Protect the larger retirement account from market volatility',
        'Physical gold provides stability when income replacement is critical',
        'Reduce sequence of returns risk when withdrawals begin',
        'Tangible security during the income transition period',
        'Peace of mind knowing the breadwinner\'s savings are protected',
      ],
    },

    faqs: [
      {
        question: 'Should the breadwinner spouse delay Social Security even if they need income?',
        answer: 'If at all possible, yes. The higher earner delaying to 70 provides maximum benefit and survivor protection. Use savings, part-time work, or working spouse income to bridge. However, if you truly need the income and have limited savings, claiming earlier may be necessary - just understand the trade-off.',
      },
      {
        question: 'Can the lower-earning spouse increase their income when the breadwinner retires?',
        answer: 'Possibly. Options include increasing hours, pursuing a promotion, or delaying their retirement. Even modest income increases help when the breadwinner\'s salary is gone. However, this requires discussion - the lower-earning spouse may also be ready to retire.',
      },
      {
        question: 'What if we can\'t afford for the breadwinner to retire?',
        answer: 'Then the breadwinner may need to continue working, at least part-time. Alternatives: reduce expenses significantly, downsize, or the breadwinner retires but consults or works part-time. Run detailed financial projections with an advisor to understand your options.',
      },
      {
        question: 'How do we manage healthcare if the breadwinner\'s job provided insurance?',
        answer: 'Options depend on ages: Working spouse\'s plan (if available), COBRA (18 months), ACA marketplace (often affordable with lower retirement income), or Medicare (if 65+). Calculate costs for each option. Often the working spouse\'s employer plan is cheapest.',
      },
    ],

    relatedArticles: ['husband-wants-to-retire-wife-doesnt', 'wife-retiring-before-husband', 'one-spouse-retired-other-working', 'coordinating-retirement-dates', 'stay-at-home-spouse-social-security', 'supporting-spouse-in-retirement', 'spouse-different-retirement-timeline'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'stay-at-home-spouse-social-security': {
    slug: 'stay-at-home-spouse-social-security',
    title: 'Stay-at-Home Spouse Social Security: Maximizing Benefits as a Couple',
    subtitle: 'If one spouse stayed home to raise children or didn\'t work, they can still receive Social Security. Here\'s how spousal benefits work.',

    metaTitle: 'Stay-at-Home Spouse Social Security: Spousal Benefits Guide | 2026',
    metaDescription: 'Learn how stay-at-home spouses qualify for Social Security. Understand spousal benefits, ex-spouse benefits, survivor benefits, and strategies to maximize household SS income.',
    keywords: ['stay at home spouse social security', 'spousal social security benefits', 'non-working spouse SS', 'homemaker social security'],

    targetKeyword: 'stay at home spouse social security',
    volume: 40,
    difficulty: 0,
    cpc: 2.50,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Stay-at-home spouses can receive up to 50% of the working spouse\'s Social Security benefit.',
      'To qualify, the working spouse must be receiving their benefit (or have filed and suspended).',
      'Spousal benefits don\'t reduce the working spouse\'s benefit - it\'s additional money.',
      'Survivor benefits provide 100% of the deceased spouse\'s benefit.',
      'Divorced spouses may qualify for benefits based on an ex-spouse\'s record if married 10+ years.',
    ],

    tocItems: [
      { id: 'how-it-works', label: 'How Spousal Benefits Work' },
      { id: 'qualifying', label: 'Qualifying for Benefits' },
      { id: 'amount', label: 'How Much You Receive' },
      { id: 'strategies', label: 'Maximizing as a Couple' },
      { id: 'survivor', label: 'Survivor Benefits' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'how-it-works',
        icon: 'Building',
        iconColor: 'blue',
        title: 'How Spousal Social Security Benefits Work',
        content: 'Even if you never worked or had low earnings, you can receive Social Security based on your spouse\'s work record.',
        bullets: [
          '**Spousal benefit:** Up to 50% of your spouse\'s full retirement age (FRA) benefit',
          '**Doesn\'t reduce spouse\'s benefit:** Your benefit is in addition to, not instead of, your spouse\'s',
          '**Must be married:** You need to be currently married (or divorced after 10+ years of marriage)',
          '**Spouse must be receiving benefits:** They must have claimed their benefit for you to claim spousal',
          '**Age requirements:** You must be at least 62 (or any age if caring for their child under 16)',
          '**Own record comparison:** If you have your own work history, you receive the higher of your own benefit or spousal benefit (not both)',
        ],
        callout: {
          type: 'info',
          title: 'The 50% Rule',
          content: 'Spousal benefits max out at 50% of the working spouse\'s FRA benefit. If your spouse\'s FRA benefit is $2,400/month, your maximum spousal benefit is $1,200/month. However, if you claim before your own FRA, your spousal benefit is reduced.',
        },
      },
      {
        id: 'qualifying',
        icon: 'CheckCircle',
        iconColor: 'green',
        title: 'Qualifying for Spousal Benefits',
        content: 'Here are the requirements for receiving Social Security spousal benefits.',
        bullets: [
          '**Marriage requirement:** Must be married to the working spouse (or married 10+ years before divorce)',
          '**Spouse must be collecting:** The working spouse must have filed for their own benefit',
          '**Age requirement:** You must be at least 62 years old',
          '**Exception for child care:** If caring for the worker\'s child under 16 (or disabled), no age requirement',
          '**Two-year waiting period for divorced spouses:** If divorced, must wait 2 years after divorce if ex-spouse hasn\'t claimed',
          '**Ex-spouse marriage rule:** For divorced spouses, you cannot be currently remarried',
        ],
        table: {
          headers: ['Status', 'Requirement', 'Maximum Benefit'],
          rows: [
            ['Currently married', 'Spouse must be collecting', '50% of spouse\'s FRA benefit'],
            ['Divorced (10+ years married)', 'Ex-spouse must be at least 62', '50% of ex-spouse\'s FRA benefit'],
            ['Widowed', 'Deceased spouse had sufficient work history', '100% of deceased spouse\'s benefit'],
          ],
        },
      },
      {
        id: 'amount',
        icon: 'DollarSign',
        iconColor: 'amber',
        title: 'How Much Will You Receive?',
        content: 'Your spousal benefit amount depends on when you claim and your spouse\'s benefit amount.',
        bullets: [
          '**Maximum at FRA:** Claim at your full retirement age for the full 50% spousal benefit',
          '**Reduced if early:** Claiming before FRA reduces the spousal benefit permanently',
          '**No delayed credits:** Unlike your own benefit, spousal benefits don\'t increase past FRA',
          '**Comparison calculation:** SSA automatically gives you the higher of your own or spousal benefit',
        ],
        table: {
          headers: ['Claim Age', '% of Spouse\'s FRA Benefit', 'If Spouse Gets $2,400/month'],
          rows: [
            ['62', '32.5%', '$780/month'],
            ['63', '35%', '$840/month'],
            ['64', '37.5%', '$900/month'],
            ['65', '41.7%', '$1,000/month'],
            ['66', '45.8%', '$1,100/month'],
            ['67 (FRA)', '50%', '$1,200/month'],
          ],
        },
        callout: {
          type: 'warning',
          title: 'No Delayed Retirement Credits for Spousal Benefits',
          content: 'Unlike your own benefit, spousal benefits do NOT increase if you wait past FRA. The maximum spousal benefit is 50% at FRA - waiting until 70 doesn\'t help. If you\'re claiming spousal only (no significant work history), claim at FRA, not later.',
        },
      },
      {
        id: 'strategies',
        icon: 'TrendingUp',
        iconColor: 'purple',
        title: 'Maximizing Social Security as a Couple',
        content: 'Strategic claiming can significantly increase your household\'s lifetime Social Security income.',
        bullets: [
          '**Higher earner delays to 70:** Increases their benefit by 77% vs. claiming at 62, and protects survivor',
          '**Lower earner claims earlier:** If income is needed, the lower earner claims first',
          '**Stay-at-home spouse claims at FRA:** Spousal benefits don\'t increase past FRA, so no reason to delay',
          '**Consider survivor benefit:** The higher benefit becomes the survivor\'s benefit if one spouse dies',
          '**Work history check:** Even part-time work may create a higher benefit than spousal',
        ],
        callout: {
          type: 'tip',
          title: 'Optimal Strategy for Many Couples',
          content: 'Higher-earning spouse delays to 70 (maximizing their benefit and survivor protection). Stay-at-home spouse claims spousal benefit at their FRA (maximizing spousal without losing anything to delay). This provides current income while maximizing long-term household benefit.',
        },
      },
      {
        id: 'survivor',
        icon: 'Heart',
        iconColor: 'red',
        title: 'Survivor Benefits for Stay-at-Home Spouses',
        content: 'If the working spouse dies, the surviving spouse can receive 100% of the deceased spouse\'s benefit. This is critical protection for stay-at-home spouses.',
        bullets: [
          '**100% of deceased spouse\'s benefit:** Not 50% like spousal benefit, but the full amount',
          '**Delayed credits count:** If deceased spouse delayed to 70, survivor gets that enhanced benefit',
          '**Can claim as early as 60:** Survivor benefits available at 60 (50 if disabled), but reduced',
          '**No waiting period:** Can claim immediately after spouse\'s death',
          '**Remarriage considerations:** If you remarry before 60, you may lose survivor benefits',
        ],
        callout: {
          type: 'info',
          title: 'Why the Higher Earner Should Delay',
          content: 'The higher earner delaying to 70 protects the survivor. If they claim at 70 and die first, the stay-at-home spouse gets 100% of that enhanced benefit - potentially $1,000+/month more than if they claimed at 62. This is especially important if the higher earner has health concerns.',
        },
      },
    ],

    goldBridge: {
      title: 'Supplement Social Security with Protected Savings',
      content: 'Social Security provides a foundation, but stay-at-home spouses benefit from additional protected savings. A Gold IRA provides security beyond Social Security.',
      bullets: [
        'Physical gold supplements Social Security with tangible wealth',
        'Protection from inflation that erodes Social Security purchasing power',
        'Additional retirement security for the non-working spouse',
        'Tangible asset that doesn\'t depend on any spouse\'s work history',
        'Peace of mind knowing retirement is protected beyond government benefits',
      ],
    },

    faqs: [
      {
        question: 'Can I receive Social Security if I never worked?',
        answer: 'Yes, through spousal benefits. If your spouse worked and is receiving Social Security, you can receive up to 50% of their benefit. You don\'t need any work history of your own. This applies to current spouses and divorced spouses (if married 10+ years).',
      },
      {
        question: 'Will my spousal benefit reduce my spouse\'s payment?',
        answer: 'No. Spousal benefits are in addition to your spouse\'s benefit, not instead of. If your spouse receives $2,400/month and you receive $1,200/month spousal, the household total is $3,600/month. Their benefit is unchanged by your claiming.',
      },
      {
        question: 'What if I worked part-time but mostly stayed home?',
        answer: 'Social Security will calculate both your own benefit (based on your work history) and your spousal benefit, then pay you the higher amount. You might be surprised - even part-time work over many years can sometimes exceed the spousal benefit. Check your Social Security statement.',
      },
      {
        question: 'Can I receive spousal benefits from my ex-spouse?',
        answer: 'Yes, if you were married at least 10 years, your ex-spouse is at least 62, and you\'re currently unmarried. You can receive up to 50% of your ex\'s benefit without affecting their benefit at all (they won\'t even know). If you remarry, you typically lose ex-spouse benefits unless the new marriage ends.',
      },
    ],

    relatedArticles: ['husband-wants-to-retire-wife-doesnt', 'wife-retiring-before-husband', 'one-spouse-retired-other-working', 'coordinating-retirement-dates', 'breadwinner-spouse-retirement', 'supporting-spouse-in-retirement', 'spouse-different-retirement-timeline'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'supporting-spouse-in-retirement': {
    slug: 'supporting-spouse-in-retirement',
    title: 'Supporting Your Spouse in Retirement: When One Works and One Doesn\'t',
    subtitle: 'When you\'re still working and your spouse is retired, unique challenges arise. Here\'s how to navigate this phase together.',

    metaTitle: 'Supporting Spouse in Retirement: Working & Retired Couple Guide | 2026',
    metaDescription: 'Still working while spouse is retired? Learn to manage finances, emotions, household responsibilities, and maintain a strong relationship during staggered retirement.',
    keywords: ['supporting spouse in retirement', 'spouse retired me working', 'one working one retired', 'support retired spouse'],

    targetKeyword: 'supporting spouse in retirement',
    volume: 15,
    difficulty: 0,
    cpc: 1.80,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'The working spouse plays a critical role in the retired spouse\'s transition.',
      'Financial support means more than money - it includes benefits and healthcare.',
      'Emotional support helps the retired spouse navigate identity and purpose challenges.',
      'Balance is essential - don\'t neglect your own needs while supporting your spouse.',
      'This phase is temporary - focus on building toward both retirements.',
    ],

    tocItems: [
      { id: 'financial', label: 'Financial Support' },
      { id: 'emotional', label: 'Emotional Support' },
      { id: 'practical', label: 'Practical Considerations' },
      { id: 'self-care', label: 'Taking Care of Yourself' },
      { id: 'planning', label: 'Planning Your Retirement' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'financial',
        icon: 'DollarSign',
        iconColor: 'green',
        title: 'Providing Financial Support',
        content: 'As the working spouse, you\'re now the primary income source. Here\'s how to manage this responsibility.',
        bullets: [
          '**Cover household expenses:** Your salary becomes the main source for bills and day-to-day costs',
          '**Healthcare coverage:** Your employer plan likely covers your retired spouse',
          '**Preserve their savings:** Minimize withdrawals from their accounts to let them grow',
          '**Continue your 401k contributions:** Max out your retirement savings while still earning',
          '**Transparent finances:** Keep both spouses informed about income, expenses, and savings',
          '**Avoid "my money" thinking:** It\'s household money regardless of who earns it',
        ],
        table: {
          headers: ['Expense Category', 'Covered By', 'Notes'],
          rows: [
            ['Housing (mortgage/rent)', 'Working spouse income', 'Primary expense'],
            ['Healthcare', 'Working spouse employer plan', 'Usually lowest cost option'],
            ['Daily expenses', 'Working spouse income', 'Groceries, utilities, transportation'],
            ['Discretionary', 'Retired spouse SS + joint decision', 'Travel, dining, entertainment'],
            ['Big purchases', 'Joint savings', 'Discuss together'],
          ],
        },
      },
      {
        id: 'emotional',
        icon: 'Heart',
        iconColor: 'red',
        title: 'Providing Emotional Support',
        content: 'Retirement is a major life transition. Your retired spouse may struggle with identity, purpose, and loneliness.',
        bullets: [
          '**Validate their experience:** Retirement adjustment is real, even if they chose to retire',
          '**Don\'t minimize struggles:** "You don\'t even have to work" dismisses real challenges',
          '**Encourage activities:** Support their hobbies, volunteering, and social connections',
          '**Listen without solving:** Sometimes they need to vent, not receive advice',
          '**Celebrate milestones:** Acknowledge when they find new purpose or make new friends',
          '**Watch for warning signs:** Depression, isolation, and excessive drinking are red flags',
        ],
        callout: {
          type: 'tip',
          title: 'The Transition Takes Time',
          content: 'Most retirees take 6-18 months to fully adjust. Early struggles don\'t mean retirement was a mistake. Be patient, supportive, and encouraging during this transition period.',
        },
      },
      {
        id: 'practical',
        icon: 'CheckSquare',
        iconColor: 'blue',
        title: 'Practical Considerations',
        content: 'Day-to-day life changes when one spouse retires. Here are practical considerations.',
        bullets: [
          '**Household responsibilities:** Retired spouse reasonably takes on more daytime tasks',
          '**Schedule coordination:** You\'re on work schedule; they have flexibility',
          '**Weekend expectations:** You may need rest; they may have plans',
          '**Vacation planning:** You have limited PTO; they can travel anytime',
          '**Social life changes:** They build new friendships; you maintain work relationships',
          '**Decision-making:** Both should have equal input on major decisions',
        ],
        callout: {
          type: 'warning',
          title: 'Avoid the Servant Trap',
          content: 'Just because your spouse is retired doesn\'t mean they should do everything at home. Retirement is earned freedom, not unpaid household labor. Negotiate a fair division of tasks.',
        },
      },
      {
        id: 'self-care',
        icon: 'Shield',
        iconColor: 'amber',
        title: 'Taking Care of Yourself',
        content: 'While supporting your retired spouse, don\'t neglect your own needs.',
        bullets: [
          '**Your feelings matter:** It\'s okay to feel envious or frustrated sometimes',
          '**Maintain your identity:** You\'re not just the breadwinner - you have your own interests',
          '**Set boundaries:** You can\'t always be available for their plans',
          '**Career satisfaction:** If work drains you, evaluate whether changes are possible',
          '**Your retirement matters:** Don\'t sacrifice your retirement date to over-support theirs',
          '**Communication:** Express your needs and feelings openly',
        ],
      },
      {
        id: 'planning',
        icon: 'Calendar',
        iconColor: 'purple',
        title: 'Planning Your Own Retirement',
        content: 'While supporting your spouse, keep your own retirement on track.',
        bullets: [
          '**Set a target date:** Know when you plan to retire, even if it\'s years away',
          '**Max your savings:** Take full advantage of 401k and catch-up contributions',
          '**Protect your health:** Work stress affects long-term health',
          '**Communicate your timeline:** Your spouse should know and support your retirement plan',
          '**Don\'t over-delay:** Working indefinitely to support their retirement isn\'t sustainable',
          '**Envision your retirement:** What will you do? Having a vision makes the goal compelling',
        ],
        numberedList: [
          'Confirm you\'re on track with a financial advisor',
          'Set a specific retirement date, even if 3-5 years away',
          'Communicate this timeline to your retired spouse',
          'Begin building non-work identity and activities',
          'Plan how both retirements will work financially',
        ],
      },
    ],

    goldBridge: {
      title: 'Protect Both Spouses\' Retirement Savings',
      content: 'When you\'re supporting a retired spouse, your combined savings need protection. A Gold IRA provides stability for both of you.',
      bullets: [
        'Physical gold protects savings regardless of which spouse earned them',
        'Stability for the retired spouse\'s accounts while they avoid withdrawals',
        'Protection for the working spouse\'s 401k that\'s still growing',
        'Reduce market anxiety that affects both your work stress and their retirement security',
        'Tangible asset you can both rely on through this transitional period',
      ],
    },

    faqs: [
      {
        question: 'How do I handle feeling resentful that my spouse is retired and I\'m not?',
        answer: 'This is completely normal. Acknowledge the feeling to yourself and your spouse. Having a firm retirement date for yourself helps - knowing your retirement is coming reduces resentment. Also, ensure your spouse is doing meaningful things with their time, not just waiting for you to come home.',
      },
      {
        question: 'Should my retired spouse take over all household responsibilities?',
        answer: 'Some additional tasks are reasonable - they\'re available during the day for errands and appointments. However, retirement isn\'t a sentence to unpaid domestic labor. Discuss a fair distribution that respects their retirement while acknowledging the practical reality.',
      },
      {
        question: 'What if my retired spouse is struggling with depression?',
        answer: 'This is a warning sign requiring attention. Encourage them to seek professional help (therapist or doctor). Support them in building purpose, activities, and social connections. If it persists, it may require treatment beyond lifestyle changes. Don\'t dismiss it as "adjustment."',
      },
      {
        question: 'How do I balance work demands with my retired spouse\'s expectations?',
        answer: 'Set clear expectations. You can\'t always be available for spontaneous activities. Protect some evening and weekend time for rest. Plan dedicated quality time together. Communicate openly about your energy levels and work stress. Your needs matter too.',
      },
    ],

    relatedArticles: ['husband-wants-to-retire-wife-doesnt', 'wife-retiring-before-husband', 'one-spouse-retired-other-working', 'coordinating-retirement-dates', 'breadwinner-spouse-retirement', 'stay-at-home-spouse-social-security', 'spouse-different-retirement-timeline'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },

  'spouse-different-retirement-timeline': {
    slug: 'spouse-different-retirement-timeline',
    title: 'When Spouses Have Different Retirement Timelines: 5-10 Year Gaps and How to Plan',
    subtitle: 'A significant gap between retirement dates creates unique challenges. Here\'s how to navigate 5-10 year differences and maintain a strong relationship.',

    metaTitle: 'Spouse Different Retirement Timeline: Planning for 5-10 Year Gaps | 2026',
    metaDescription: 'Spouses planning to retire 5-10 years apart? Learn how to communicate, plan finances, maintain your relationship, and bridge the gap when retirement timelines differ significantly.',
    keywords: ['spouse different retirement timeline', 'years apart retirement', 'big gap retirement', 'retirement timeline mismatch'],

    targetKeyword: 'spouse different retirement timeline',
    volume: 15,
    difficulty: 0,
    cpc: 2.00,

    category: 'life-events',
    threatLevel: 'info',

    takeaways: [
      'Large retirement gaps (5-10 years) are increasingly common with age differences and career trajectories.',
      'Communication is essential - both spouses must understand and accept the plan.',
      'The retired spouse needs a full, independent life during the gap years.',
      'Financial planning must account for extended periods with one income source.',
      'Regular check-ins help adjust the plan as circumstances change.',
    ],

    tocItems: [
      { id: 'why-gaps', label: 'Why Large Gaps Happen' },
      { id: 'challenges', label: 'Challenges of Big Gaps' },
      { id: 'communication', label: 'Communication Strategies' },
      { id: 'financial', label: 'Financial Planning' },
      { id: 'relationship', label: 'Maintaining Your Relationship' },
      { id: 'faq', label: 'FAQs' },
    ],

    sections: [
      {
        id: 'why-gaps',
        icon: 'Calendar',
        iconColor: 'blue',
        title: 'Why Large Retirement Gaps Happen',
        content: 'Many couples face 5-10 year differences in their retirement timelines. This is increasingly common.',
        bullets: [
          '**Age differences:** If you\'re 10 years apart in age, retirement naturally differs',
          '**Career trajectories:** One spouse hitting career peak while other is burned out',
          '**Career interruptions:** Stay-at-home years mean later career peak and retirement',
          '**Health factors:** One spouse\'s health may require earlier retirement',
          '**Financial necessity:** One spouse may need to work longer for healthcare or income',
          '**Different preferences:** One loves work; one is eager to retire',
        ],
        callout: {
          type: 'info',
          title: 'The New Normal',
          content: 'Simultaneous retirement is increasingly rare. With dual-career couples, age differences, and varied career paths, staggered retirement of 5-10 years is common. The key is planning for it rather than treating it as a problem.',
        },
      },
      {
        id: 'challenges',
        icon: 'AlertTriangle',
        iconColor: 'amber',
        title: 'Challenges of Large Retirement Gaps',
        content: 'A 5-10 year gap between retirements creates specific challenges that require attention.',
        bullets: [
          '**Lifestyle divergence:** Retired spouse may travel and develop new interests; working spouse is still tied to job',
          '**Different social circles:** The retired spouse builds new friendships; you drift from shared social life',
          '**Resentment risk:** Working spouse may resent continued work; retired spouse may feel guilty',
          '**Relationship strain:** Less shared experience and daily time together',
          '**Financial complexity:** Long period of managing mixed income (salary + retirement accounts)',
          '**Healthcare logistics:** Managing coverage transitions over many years',
        ],
        callout: {
          type: 'warning',
          title: 'The Drift Danger',
          content: 'In 10-year gaps, spouses can drift apart. The retired spouse develops a new life, friends, and routines. The working spouse remains in "work mode." Without intentional effort, you may reach the second retirement as strangers. Schedule regular quality time and shared activities.',
        },
      },
      {
        id: 'communication',
        icon: 'MessageSquare',
        iconColor: 'green',
        title: 'Communication Strategies for Large Gaps',
        content: 'Open, ongoing communication is the foundation for navigating large retirement gaps.',
        bullets: [
          '**Agree on the plan:** Both spouses must understand and accept why the gap exists',
          '**Set a firm end date:** The working spouse needs a specific retirement target, not "someday"',
          '**Regular check-ins:** Schedule quarterly discussions about how the arrangement is working',
          '**Express needs:** The working spouse needs rest; the retired spouse needs engagement',
          '**Adjust as needed:** Life changes - be open to modifying the timeline',
          '**Avoid blame:** The gap isn\'t anyone\'s "fault" - it\'s a joint plan',
        ],
        numberedList: [
          'Agree on specific retirement dates for both spouses',
          'Discuss expectations for household responsibilities during the gap',
          'Plan how to maintain connection despite different schedules',
          'Schedule regular check-ins (monthly or quarterly) to evaluate',
          'Identify warning signs of relationship strain and address early',
          'Celebrate milestones along the way to the second retirement',
        ],
      },
      {
        id: 'financial',
        icon: 'DollarSign',
        iconColor: 'purple',
        title: 'Financial Planning for Extended Gaps',
        content: 'A 5-10 year gap requires different financial planning than a 2-3 year gap.',
        table: {
          headers: ['Consideration', 'Short Gap (2-3 years)', 'Long Gap (5-10 years)'],
          rows: [
            ['Working spouse income', 'Covers expenses short-term', 'Must sustain household for many years'],
            ['Retired spouse SS', 'May wait to claim', 'Often claimed during gap'],
            ['401k withdrawals', 'Minimize', 'May be needed, but plan carefully'],
            ['Healthcare', 'Bridge to Medicare', 'Multiple transition points possible'],
            ['Inflation', 'Minor concern', 'Significant impact over 10 years'],
          ],
        },
        bullets: [
          '**Working spouse income is critical:** It covers expenses for an extended period',
          '**Retired spouse may need to claim SS:** Waiting 10 years may not be feasible',
          '**Account withdrawals:** Plan carefully - 10 years of withdrawals needs sustainability',
          '**Healthcare transitions:** Multiple transitions over 10 years (employer to Medicare, etc.)',
          '**Inflation planning:** Expenses will increase 20-30% over 10 years with normal inflation',
          '**Working spouse savings:** Continue maxing 401k for their eventual retirement',
        ],
      },
      {
        id: 'relationship',
        icon: 'Heart',
        iconColor: 'red',
        title: 'Maintaining Your Relationship',
        content: 'With a 5-10 year gap, intentional relationship maintenance is essential.',
        bullets: [
          '**Scheduled quality time:** Weekly date nights, monthly day trips, annual vacations',
          '**Shared activities:** Find hobbies you both enjoy despite different schedules',
          '**Include the working spouse:** Retired spouse shouldn\'t plan major activities without partner',
          '**Protect weekends:** Working spouse needs rest, but also shared time',
          '**Celebrate the retired spouse\'s activities:** Show interest in their new life',
          '**Talk about the future:** Keep discussing what retirement together will look like',
        ],
        callout: {
          type: 'tip',
          title: 'The "Dating" Strategy',
          content: 'Treat this phase like dating. Schedule specific time together, make plans, and put effort into connecting. It\'s easy to drift into parallel lives when schedules differ dramatically. Intentional connection prevents this.',
        },
        numberedList: [
          'Schedule a weekly date night that\'s protected from work obligations',
          'Take at least one significant trip together per year (using working spouse\'s PTO)',
          'Develop at least one shared hobby or activity you do together',
          'Check in regularly about how both of you are feeling about the arrangement',
          'Create traditions that maintain connection (Sunday dinners, monthly outings)',
        ],
      },
    ],

    goldBridge: {
      title: 'Long-Term Stability for Staggered Retirement',
      content: 'A 5-10 year retirement gap requires savings that provide stability over an extended period. A Gold IRA protects both spouses throughout this long transition.',
      bullets: [
        'Physical gold provides long-term stability over 10-year retirement gaps',
        'Protection from market volatility during extended withdrawal periods',
        'Tangible asset that doesn\'t depend on either spouse\'s employment status',
        'Hedge against inflation that erodes purchasing power over many years',
        'Peace of mind for both spouses through the extended transition period',
      ],
    },

    faqs: [
      {
        question: 'Is a 10-year retirement gap too long to work?',
        answer: 'It\'s challenging but manageable with intentional effort. Key success factors: both spouses agree to the plan, the retired spouse builds an independent life, the couple maintains strong communication and scheduled time together, and there\'s a firm end date. Without these, 10 years can strain even strong marriages.',
      },
      {
        question: 'How do we prevent drifting apart over 5-10 years?',
        answer: 'Schedule intentional time together - weekly dates, regular trips, shared activities. The retired spouse should include (not exclude) the working spouse in major life decisions and new friendships. Regular check-ins about how both are feeling help catch drift early. Treat connection as essential, not optional.',
      },
      {
        question: 'Should the retired spouse travel without the working spouse?',
        answer: 'Some solo travel is healthy and reasonable - the retired spouse deserves to enjoy their retirement. However, balance is key. Save major bucket-list trips for when both are retired. Include the working spouse in vacation planning when their PTO allows. Don\'t build an entirely separate travel life.',
      },
      {
        question: 'What if the working spouse is envious or resentful?',
        answer: 'This is natural with large gaps. Address it openly: acknowledge the feeling, have a firm retirement date for the working spouse, and ensure the retired spouse is building a meaningful life (not "being lazy"). The working spouse also needs to find purpose and satisfaction in their current work or make changes if possible.',
      },
    ],

    relatedArticles: ['husband-wants-to-retire-wife-doesnt', 'wife-retiring-before-husband', 'one-spouse-retired-other-working', 'coordinating-retirement-dates', 'breadwinner-spouse-retirement', 'stay-at-home-spouse-social-security', 'supporting-spouse-in-retirement'],
    relatedGuides: ['/guide/gold-ira-guide'],
    relatedTools: ['/tools/retirement-calculator'],
  },
};
