// src/data/senior-protection/index.ts
// P1-005: Senior Protection Hub data structure
// Target keywords: grandparent scam, dementia and giving money away (100, diff 6)

import { SeniorProtectionArticle } from '@/types/content-hubs';

export const seniorProtectionArticles: SeniorProtectionArticle[] = [
  {
    slug: 'grandparent-scam-calls',
    hubSlug: 'senior-protection',
    title: 'Grandparent Scam: How to Protect Yourself',
    subtitle: 'Criminals impersonate grandchildren in distress to steal thousands. Know the warning signs.',
    articleType: 'guide',

    metaTitle: 'Grandparent Scam 2026: Warning Signs & How to Protect Yourself',
    metaDescription: 'Learn how grandparent scams work, warning signs to watch for, and how to protect yourself and elderly family members from this devastating fraud.',
    keywords: ['grandparent scam', 'grandparent phone scam', 'grandchild emergency scam', 'scam targeting grandparents'],

    targetKeyword: 'grandparent scam calls',
    volume: 500,
    difficulty: 8,

    heroIcon: 'AlertTriangle',

    warningSigns: [
      'Caller claims to be grandchild in trouble',
      'Urgent request for immediate money',
      'Asks you not to tell parents',
      'Requests wire transfer or gift cards',
      'Call comes late at night or early morning',
      'Caller says "Grandma?" and waits for you to say a name',
      'Background noise suggests jail or hospital',
      'Emotional manipulation and crying',
      'Changes in "voice" blamed on injury or bad connection',
      'Claims accident, arrest, or medical emergency abroad',
    ],

    recoverySteps: [
      {
        step: 1,
        title: 'Stop all contact',
        description: 'Hang up immediately. Do not send any money or gift cards. If you\'ve already sent something, stop any additional payments.',
      },
      {
        step: 2,
        title: 'Verify the story',
        description: 'Call your actual grandchild at their known phone number. Contact their parents. Do not use any number provided by the scammer.',
      },
      {
        step: 3,
        title: 'Report the scam',
        description: 'File reports with local police, FTC (reportfraud.ftc.gov), and FBI\'s IC3. This helps track and stop scammers.',
      },
      {
        step: 4,
        title: 'Contact financial institutions',
        description: 'If you wired money, contact your bank immediately. If you sent gift cards, contact the retailer. Recovery is rare but possible if acted quickly.',
      },
      {
        step: 5,
        title: 'Protect yourself going forward',
        description: 'Set up a family code word. Limit personal information on social media. Tell friends about the scam to protect them.',
      },
    ],

    resources: [
      {
        name: 'FTC Report Fraud',
        website: 'https://reportfraud.ftc.gov',
        description: 'Federal Trade Commission fraud reporting portal',
      },
      {
        name: 'FBI IC3',
        website: 'https://www.ic3.gov',
        description: 'Internet Crime Complaint Center for online fraud',
      },
      {
        name: 'AARP Fraud Watch Network',
        phone: '877-908-3360',
        website: 'https://www.aarp.org/money/scams-fraud/',
        description: 'Free helpline and fraud prevention resources',
      },
      {
        name: 'Adult Protective Services',
        description: 'State-level agency for elder abuse. Search for your state\'s office.',
      },
    ],

    takeaways: [
      'Grandparent scams steal an average of $9,000 per victim',
      'Scammers use social media to research family details',
      'They exploit love and urgency to bypass rational thinking',
      'Always verify by calling the grandchild at a known number',
      'Establish a family code word for emergencies',
      'Never send money via wire transfer or gift cards',
      'It\'s okay to hang up - real family understands caution',
    ],

    tocItems: [
      { id: 'how-it-works', label: 'How the Scam Works' },
      { id: 'warning-signs', label: 'Warning Signs' },
      { id: 'protection', label: 'How to Protect Yourself' },
      { id: 'recovery', label: 'If You\'ve Been Scammed' },
      { id: 'family', label: 'Protecting Family Members' },
    ],

    sections: [
      {
        id: 'how-it-works',
        icon: 'AlertTriangle',
        iconColor: 'red',
        title: 'How the Grandparent Scam Works',
        content: 'The grandparent scam exploits the powerful bond between grandparents and grandchildren. Criminals impersonate a grandchild in distress, creating panic that bypasses your normal skepticism.',
        bullets: [
          '**The call** - A scammer calls, often late at night, and says "Grandma?" When you say a name, they confirm it.',
          '**The emergency** - They claim they\'re in jail, had an accident, are stuck abroad, or in the hospital.',
          '**The request** - They need money immediately - for bail, medical bills, or to get home.',
          '**The secrecy** - "Please don\'t tell Mom and Dad - they\'ll be so mad at me."',
          '**The payment** - Wire transfer, gift cards, cash by courier, or cryptocurrency - untraceable methods.',
          '**The escalation** - Once you\'ve paid, they may call back with more "emergencies."',
        ],
        callout: {
          type: 'warning',
          title: 'AI Makes It Worse',
          content: 'New AI voice technology can clone anyone\'s voice from social media videos. Scammers may actually sound exactly like your grandchild. Verification is more important than ever.',
        },
      },
      {
        id: 'warning-signs',
        icon: 'Eye',
        iconColor: 'amber',
        title: 'Warning Signs of a Scam',
        content: 'These red flags should immediately make you suspicious:',
        bullets: [
          '**Urgency** - Scammers create panic so you don\'t have time to think clearly.',
          '**Secrecy** - "Don\'t tell anyone" prevents you from verifying with other family.',
          '**Unusual payment method** - Wire transfers, gift cards, and crypto are untraceable.',
          '**Fishing for information** - "Grandma?" and waiting for you to provide the name.',
          '**Story inconsistencies** - Details change or don\'t make sense.',
          '**Pressure to act NOW** - They won\'t let you hang up and call back.',
          '**Caller ID spoofing** - The number may look like it\'s from your grandchild or their area.',
        ],
        table: {
          headers: ['Red Flag', 'What Scammers Say', 'What to Do'],
          rows: [
            ['Urgency', '"I need the money in the next hour"', 'Hang up and verify independently'],
            ['Secrecy', '"Don\'t tell Mom, she\'ll kill me"', 'Call the parents immediately'],
            ['Payment method', '"Send me gift cards from Walmart"', 'No legitimate emergency needs gift cards'],
            ['Voice sounds off', '"I have a cold / bad connection"', 'Ask personal questions only they\'d know'],
          ],
        },
      },
      {
        id: 'protection',
        icon: 'Shield',
        iconColor: 'green',
        title: 'How to Protect Yourself',
        content: 'These strategies can prevent you from becoming a victim:',
        numberedList: [
          '**Establish a family code word** - A secret word only family knows, to verify identity in emergencies.',
          '**Always verify independently** - Hang up and call your grandchild at their known number.',
          '**Don\'t trust caller ID** - Numbers can be spoofed to look like they\'re from anyone.',
          '**Ask personal questions** - "What did we do at your last birthday?" Real grandchildren know.',
          '**Take your time** - Scammers create urgency. Real emergencies allow time to verify.',
          '**Limit social media information** - Scammers research families online. Set profiles to private.',
          '**Tell friends about scams** - Spreading awareness protects your community.',
        ],
        callout: {
          type: 'tip',
          title: 'The Family Code Word',
          content: 'Choose a random word that only family knows - like "pineapple" or "bluebird." In any emergency, the family member must say the code word to prove identity.',
        },
      },
      {
        id: 'recovery',
        icon: 'LifeBuoy',
        iconColor: 'blue',
        title: 'If You\'ve Been Scammed',
        content: 'If you\'ve already sent money, act quickly:',
        bullets: [
          '**Wire transfer** - Contact your bank immediately. International wires may be recoverable if caught fast.',
          '**Gift cards** - Call the retailer (Walmart, Target, etc.) with the card numbers. Sometimes funds can be frozen.',
          '**Cash courier** - If someone is coming to pick up cash, call police immediately.',
          '**Cryptocurrency** - Report to FBI\'s IC3, but recovery is unlikely.',
          '**Report everywhere** - Local police, FTC, FBI IC3, and state Attorney General.',
          '**Don\'t be embarrassed** - These criminals are professionals. Many smart people fall victim.',
        ],
        callout: {
          type: 'info',
          title: 'You\'re Not Alone',
          content: 'Thousands of grandparents fall victim to this scam every year. The criminals are sophisticated and exploit your love for family. Reporting helps stop them from hurting others.',
        },
      },
      {
        id: 'family',
        icon: 'Users',
        iconColor: 'purple',
        title: 'Protecting Elderly Family Members',
        content: 'If you\'re concerned about a parent or grandparent being targeted:',
        bullets: [
          '**Have the conversation** - Explain the scam in detail. Rehearse what they\'ll say.',
          '**Establish the code word** - Make sure everyone in the family knows it.',
          '**Program phone numbers** - Your contact info should be easy to find.',
          '**Monitor for signs** - Sudden wire transfers, gift card purchases, or secrecy about calls.',
          '**No shame** - Make clear they should call you before sending money - no judgment.',
          '**Call blocking** - Consider call-blocking services that filter unknown numbers.',
          '**Limit social media** - Help them understand what information scammers can use.',
        ],
      },
    ],

    goldBridge: {
      title: 'Protecting Your Real Wealth',
      content: 'Scammers target liquid assets that can be quickly transferred. Physical gold and silver in a secure depository can\'t be wire-transferred to criminals.',
      bullets: [
        'Physical precious metals can\'t be stolen through phone scams',
        'Gold IRA assets are held in secure, insured depositories',
        'No wire transfers or gift cards involved',
        'Real wealth protection from many threats',
        'Assets under your name, with proper verification',
      ],
    },

    faqs: [
      {
        question: 'How do scammers know my grandchild\'s name?',
        answer: 'Often, they don\'t. They call and say "Grandma? It\'s me, your grandson" and wait for you to say a name. They also research social media - family photos, birthdays, school names, and location tags provide details they use to seem legitimate.',
      },
      {
        question: 'Why do they ask for gift cards?',
        answer: 'Gift cards are essentially untraceable cash. Once you read the numbers to the scammer, they drain the funds within minutes. Wire transfers and cryptocurrency are similarly hard to trace and nearly impossible to recover.',
      },
      {
        question: 'Should I engage with scammers to waste their time?',
        answer: 'While some people enjoy "scam baiting," it\'s generally not recommended. It keeps you on the phone longer, you might accidentally reveal personal information, and it doesn\'t meaningfully stop the operation. Just hang up.',
      },
      {
        question: 'Can I get my money back if I was scammed?',
        answer: 'Recovery is rare but possible if you act immediately. Wire transfers may be reversible within 24-48 hours. Gift card funds may be frozen if reported quickly. File reports with all agencies - sometimes law enforcement recovers funds in larger investigations.',
      },
      {
        question: 'How can I tell if it\'s really my grandchild calling?',
        answer: 'Ask questions only they would know: "What\'s your dog\'s name?" "What did we do last Thanksgiving?" "What\'s our family code word?" A scammer won\'t know these answers. Better yet, hang up and call your grandchild directly at a number you know.',
      },
    ],

    relatedArticles: [
      'signs-financial-exploitation',
      'medicare-scam-protection',
      'romance-scam-warning-signs',
    ],
    relatedGuides: ['/guide/gold-ira-guide'],
  },
  {
    slug: 'dementia-and-giving-money-away',
    hubSlug: 'senior-protection',
    title: 'Dementia and Giving Money Away: Warning Signs & Protection',
    subtitle: 'Recognizing when cognitive decline leads to financial vulnerability - and how to help.',
    articleType: 'guide',

    metaTitle: 'Dementia and Money: Warning Signs of Financial Exploitation 2026',
    metaDescription: 'Learn the warning signs that a loved one with dementia is being financially exploited. How to protect their assets and when to intervene.',
    keywords: ['dementia giving money away', 'dementia and money', 'dementia financial exploitation', 'elderly giving money away'],

    targetKeyword: 'dementia and giving money away',
    volume: 100,
    difficulty: 6,

    heroIcon: 'Brain',

    warningSigns: [
      'Sudden changes in financial documents or beneficiaries',
      'Unexplained withdrawals or transfers',
      'New "friends" who show intense interest',
      'Bills going unpaid despite having money',
      'Confusion about recent transactions',
      'Giving away possessions to strangers',
      'Isolation from family members',
      'Reluctance to discuss finances',
      'Unusual purchases that don\'t fit their needs',
      'Missing valuables or cash',
    ],

    recoverySteps: [
      {
        step: 1,
        title: 'Document everything',
        description: 'Gather bank statements, transaction records, and evidence of unusual activity. Note dates, amounts, and any people involved.',
      },
      {
        step: 2,
        title: 'Contact Adult Protective Services',
        description: 'Report suspected financial exploitation to your state\'s APS. They can investigate and intervene.',
      },
      {
        step: 3,
        title: 'Alert financial institutions',
        description: 'Notify banks about the cognitive decline and suspected exploitation. Many have elder financial protection programs.',
      },
      {
        step: 4,
        title: 'Consult an elder law attorney',
        description: 'Understand options for power of attorney, guardianship, or conservatorship if needed.',
      },
      {
        step: 5,
        title: 'Freeze credit if necessary',
        description: 'Place a credit freeze to prevent new accounts being opened in their name.',
      },
    ],

    resources: [
      {
        name: 'Adult Protective Services',
        description: 'State agency handling elder abuse. Find your state at eldercare.acl.gov',
      },
      {
        name: 'Eldercare Locator',
        phone: '800-677-1116',
        website: 'https://eldercare.acl.gov',
        description: 'Federal resource connecting to local aging services',
      },
      {
        name: 'Alzheimer\'s Association',
        phone: '800-272-3900',
        website: 'https://www.alz.org',
        description: '24/7 helpline and caregiver support',
      },
      {
        name: 'National Center on Elder Abuse',
        website: 'https://ncea.acl.gov',
        description: 'Research and resources on elder abuse prevention',
      },
    ],

    takeaways: [
      'Early-stage dementia often affects financial judgment first',
      'Inappropriate giving is a common sign of cognitive decline',
      'Exploiters specifically target those with cognitive impairment',
      'Family members should monitor finances early, before problems occur',
      'Legal tools like POA should be set up while person still has capacity',
      'Multiple warning signs together indicate need for intervention',
      'Professional financial management may be necessary',
    ],

    tocItems: [
      { id: 'connection', label: 'Dementia & Money' },
      { id: 'warning-signs', label: 'Warning Signs' },
      { id: 'exploitation', label: 'Financial Exploitation' },
      { id: 'protection', label: 'Protective Measures' },
      { id: 'intervention', label: 'When to Intervene' },
      { id: 'legal', label: 'Legal Options' },
    ],

    sections: [
      {
        id: 'connection',
        icon: 'Brain',
        iconColor: 'purple',
        title: 'How Dementia Affects Financial Decisions',
        content: 'Financial judgment is often one of the first abilities affected by cognitive decline. Understanding this connection helps families recognize problems early.',
        bullets: [
          '**Executive function decline** - Planning, organizing, and decision-making deteriorate.',
          '**Impaired judgment** - Can\'t assess whether a request for money is reasonable.',
          '**Memory loss** - Forgets they already gave money, or doesn\'t recall transactions.',
          '**Difficulty with numbers** - Can\'t balance a checkbook or understand account balances.',
          '**Emotional vulnerability** - More susceptible to manipulation and emotional appeals.',
          '**Loss of skepticism** - The healthy suspicion that protects against scams diminishes.',
        ],
        callout: {
          type: 'warning',
          title: 'Financial Problems Often Appear First',
          content: 'Difficulty managing finances is often the first noticeable symptom of dementia - sometimes appearing years before diagnosis. If a previously responsible person suddenly has money issues, consider cognitive evaluation.',
        },
      },
      {
        id: 'warning-signs',
        icon: 'AlertTriangle',
        iconColor: 'amber',
        title: 'Warning Signs of Financial Vulnerability',
        content: 'These behaviors may indicate a loved one\'s cognitive decline is affecting their finances:',
        bullets: [
          '**Unpaid bills** - Despite having money, utilities or mortgage goes unpaid.',
          '**Unusual purchases** - Buying things they don\'t need or can\'t use.',
          '**Charitable giving increase** - Giving much more than usual to charities, often multiple checks.',
          '**Susceptibility to solicitations** - Responding to every mail offer or phone pitch.',
          '**Missing money** - Cash disappearing without explanation.',
          '**Secretive behavior** - Hiding financial activity from family.',
          '**New "helpers"** - Strangers offering to assist with finances.',
          '**Difficulty with simple tasks** - Can\'t make change, tip appropriately, or manage ATM.',
        ],
        table: {
          headers: ['Warning Sign', 'What It May Indicate', 'Action to Take'],
          rows: [
            ['Unpaid bills', 'Forgetting tasks, disorganization', 'Set up autopay, monitor accounts'],
            ['Excessive giving', 'Impaired judgment', 'Review charitable contributions'],
            ['New "friends"', 'Potential exploitation', 'Meet and verify these people'],
            ['Missing cash', 'Memory loss or theft', 'Document and investigate'],
          ],
        },
      },
      {
        id: 'exploitation',
        icon: 'ShieldAlert',
        iconColor: 'red',
        title: 'Understanding Financial Exploitation',
        content: 'People with dementia are prime targets for financial exploitation. Exploiters can be strangers or family members.',
        bullets: [
          '**Stranger exploitation** - Scammers, fake charities, telemarketing fraud, romance scams.',
          '**Family exploitation** - A relative taking advantage of access and trust.',
          '**Caregiver exploitation** - Paid caregivers stealing or manipulating.',
          '**Professional exploitation** - Advisors, attorneys, or agents abusing position.',
          '**Signs to watch** - Isolation, new advisors, changed documents, defensive behavior.',
        ],
        callout: {
          type: 'info',
          title: 'Shocking Statistics',
          content: 'People with dementia lose an estimated $5 billion annually to financial exploitation. Over 60% of exploiters are family members.',
        },
      },
      {
        id: 'protection',
        icon: 'Shield',
        iconColor: 'green',
        title: 'Protective Measures',
        content: 'These steps can protect a loved one with dementia from financial harm:',
        numberedList: [
          '**Establish power of attorney early** - While the person still has capacity to grant it.',
          '**Simplify finances** - Consolidate accounts, set up autopay, reduce cash access.',
          '**Add a trusted contact** - Banks can contact a designated person about concerns.',
          '**Set up account alerts** - Get notifications of large transactions.',
          '**Limit new accounts** - Credit freeze prevents new accounts being opened.',
          '**Monitor regularly** - Review statements, transactions, and mail.',
          '**Reduce solicitations** - Register for Do Not Call, opt out of prescreened offers.',
          '**Keep important documents safe** - Secure checkbooks, credit cards, and IDs.',
        ],
      },
      {
        id: 'intervention',
        icon: 'AlertCircle',
        iconColor: 'amber',
        title: 'When to Intervene',
        content: 'Balancing autonomy with protection is difficult. Consider intervention when:',
        bullets: [
          '**Active exploitation** - Clear signs someone is taking advantage.',
          '**Basic needs at risk** - Can\'t pay for housing, food, or medical care.',
          '**Significant losses** - Large sums being lost to scams or bad decisions.',
          '**Safety concerns** - Dangerous living conditions due to financial neglect.',
          '**Legal problems** - Tax issues, lawsuits, or creditor problems.',
        ],
        callout: {
          type: 'tip',
          title: 'Start the Conversation',
          content: 'Have conversations about finances while your loved one is still capable. It\'s easier to establish helping roles before a crisis than during one.',
        },
      },
      {
        id: 'legal',
        icon: 'Scale',
        iconColor: 'blue',
        title: 'Legal Options for Protection',
        content: 'When informal help isn\'t enough, legal options exist:',
        bullets: [
          '**Power of Attorney** - Person grants authority to someone to act on their behalf. Must be done while they have capacity.',
          '**Representative Payee** - Social Security can appoint someone to manage SS benefits.',
          '**Conservatorship/Guardianship** - Court appoints someone to manage finances. Requires legal proceeding.',
          '**Trust** - Assets transferred to trust with professional trustee management.',
          '**Bank restrictions** - Financial institutions can limit account access with proper documentation.',
        ],
        table: {
          headers: ['Legal Tool', 'When to Use', 'Level of Control'],
          rows: [
            ['Power of Attorney', 'Person still has capacity', 'Agent has broad authority'],
            ['Representative Payee', 'For Social Security only', 'Limited to SS benefits'],
            ['Conservatorship', 'Person lacks capacity', 'Court oversight, full control'],
            ['Trust', 'Planned in advance', 'Trustee manages trust assets'],
          ],
        },
      },
    ],

    goldBridge: {
      title: 'Protecting Retirement Assets',
      content: 'Gold IRA assets held in a depository are protected from exploitation attempts. Proper beneficiary and POA designations ensure assets are managed appropriately.',
      bullets: [
        'Physical gold in depository requires proper authentication for access',
        'Can\'t be wired to scammers over the phone',
        'Professional custodian adds layer of verification',
        'Proper beneficiary designations protect legacy',
        'Part of diversified, protected portfolio',
      ],
    },

    faqs: [
      {
        question: 'Can I take away my parent\'s checkbook or credit cards?',
        answer: 'If you have power of attorney, you may have authority to limit financial access. Without POA, you generally cannot take control without court intervention. Consider a conversation about safety, involving their doctor if needed, and consulting an elder law attorney about options.',
      },
      {
        question: 'My parent gave money to a scammer. Can we get it back?',
        answer: 'Recovery is difficult but not impossible. Report to Adult Protective Services, local police, and the FBI\'s IC3. If the person lacks capacity, an attorney may be able to argue the "gift" was invalid. Banks sometimes have elder abuse recovery programs. Act quickly.',
      },
      {
        question: 'How do I get power of attorney if my parent already has dementia?',
        answer: 'If they still have "lucid moments" and can understand the document, an attorney may be able to execute a POA with appropriate documentation. If capacity is completely gone, you\'ll need to pursue guardianship or conservatorship through the courts, which is more expensive and time-consuming.',
      },
      {
        question: 'My sibling is taking advantage of our parent. What can I do?',
        answer: 'Document everything - transactions, changes to documents, isolation tactics. Report to Adult Protective Services for investigation. Consult an elder law attorney about options, which may include petitioning the court for guardianship or challenging fraudulent transactions.',
      },
      {
        question: 'Should we hide the dementia from banks and advisors?',
        answer: 'No. Many financial institutions have elder protection programs. Notifying them allows them to add safeguards, require additional verification, and watch for suspicious activity. Hiding cognitive decline actually increases vulnerability.',
      },
    ],

    relatedArticles: [
      'signs-financial-exploitation',
      'grandparent-scam-calls',
      'when-take-over-parent-finances',
    ],
    relatedGuides: ['/guide/gold-ira-guide'],
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function getAllSeniorProtectionArticles(): SeniorProtectionArticle[] {
  return seniorProtectionArticles;
}

export function getSeniorProtectionArticleBySlug(slug: string): SeniorProtectionArticle | undefined {
  return seniorProtectionArticles.find((article) => article.slug === slug);
}

export function getAllSeniorProtectionArticleSlugs(): string[] {
  return seniorProtectionArticles.map((article) => article.slug);
}

export function getRelatedSeniorProtectionArticles(currentSlug: string): SeniorProtectionArticle[] {
  const current = getSeniorProtectionArticleBySlug(currentSlug);
  if (!current) return [];

  return current.relatedArticles
    .map((slug) => getSeniorProtectionArticleBySlug(slug))
    .filter((article): article is SeniorProtectionArticle => article !== undefined);
}
