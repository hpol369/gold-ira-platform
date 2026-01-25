export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const faqCategories: FAQCategory[] = [
  {
    id: "basics",
    name: "Gold IRA Basics",
    description: "Fundamental questions about what Gold IRAs are and how they work",
    icon: "BookOpen",
  },
  {
    id: "setup",
    name: "Setting Up Your Gold IRA",
    description: "Questions about opening and funding your account",
    icon: "Settings",
  },
  {
    id: "rollover",
    name: "Rollovers & Transfers",
    description: "How to move funds from existing retirement accounts",
    icon: "ArrowLeftRight",
  },
  {
    id: "taxes",
    name: "Tax Rules & Benefits",
    description: "Understanding the tax implications of Gold IRAs",
    icon: "Calculator",
  },
  {
    id: "metals",
    name: "Approved Metals",
    description: "What you can and cannot hold in your Gold IRA",
    icon: "Gem",
  },
  {
    id: "storage",
    name: "Storage & Security",
    description: "How and where your gold is stored",
    icon: "Lock",
  },
  {
    id: "fees",
    name: "Fees & Costs",
    description: "Understanding the costs involved",
    icon: "DollarSign",
  },
  {
    id: "companies",
    name: "Choosing a Company",
    description: "How to select the right Gold IRA provider",
    icon: "Building",
  },
  {
    id: "withdrawals",
    name: "Withdrawals & Distributions",
    description: "Taking money out of your Gold IRA",
    icon: "Wallet",
  },
  {
    id: "strategy",
    name: "Investment Strategy",
    description: "How to optimize your Gold IRA",
    icon: "Target",
  },
];

export const faqs: FAQ[] = [
  // BASICS (10 questions)
  {
    id: "what-is-gold-ira",
    question: "What is a Gold IRA?",
    answer:
      "A Gold IRA is a self-directed Individual Retirement Account that holds physical gold, silver, platinum, or palladium instead of traditional paper assets like stocks and bonds. It offers the same tax advantages as a regular IRA while providing the protection of tangible precious metals.",
    category: "basics",
  },
  {
    id: "how-does-it-work",
    question: "How does a Gold IRA work?",
    answer:
      "A Gold IRA works like a traditional IRA, but instead of holding paper assets, it holds physical precious metals. You open an account with a self-directed IRA custodian, fund it through contribution or rollover, purchase IRS-approved metals, and store them in an approved depository. The metals grow tax-advantaged until withdrawal.",
    category: "basics",
  },
  {
    id: "gold-ira-vs-regular",
    question: "What's the difference between a Gold IRA and a regular IRA?",
    answer:
      "The main difference is what you hold: regular IRAs hold stocks, bonds, and mutual funds; Gold IRAs hold physical precious metals. Gold IRAs require a self-directed custodian, IRS-approved storage, and have additional fees for storage and insurance. However, they provide protection against market crashes and inflation that paper assets can't match.",
    category: "basics",
  },
  {
    id: "who-should-consider",
    question: "Who should consider a Gold IRA?",
    answer:
      "Gold IRAs are ideal for investors who want to: diversify beyond paper assets, protect against inflation and currency devaluation, hedge against market volatility, own tangible assets they can eventually possess, and preserve wealth for the long term. They're particularly popular among those nearing or in retirement.",
    category: "basics",
  },
  {
    id: "is-it-safe",
    question: "Is a Gold IRA a safe investment?",
    answer:
      "Gold IRAs offer safety in terms of wealth preservation—gold has maintained value for thousands of years. However, gold prices do fluctuate and can decline in the short term. The safety comes from diversification and protection against systemic risks like inflation, currency collapse, and market crashes—not from guaranteed returns.",
    category: "basics",
  },
  {
    id: "minimum-investment",
    question: "What is the minimum investment for a Gold IRA?",
    answer:
      "Most reputable Gold IRA companies require minimums between $25,000 and $100,000. Augusta Precious Metals requires $50,000 minimum. Some companies offer lower minimums but may charge higher fees. The minimum exists because fixed costs (storage, insurance, administration) make very small accounts impractical.",
    category: "basics",
  },
  {
    id: "can-i-hold-gold",
    question: "Can I hold the gold myself?",
    answer:
      "No, not while it's in your IRA. IRS rules require Gold IRA metals to be stored with an approved custodian in an IRS-approved depository. Holding it yourself would be considered a distribution and trigger taxes plus potential penalties. You can take physical possession through an in-kind distribution, but you'll owe taxes.",
    category: "basics",
  },
  {
    id: "paper-gold-vs-physical",
    question: "What's the difference between 'paper gold' and physical gold?",
    answer:
      "'Paper gold' includes gold ETFs, mining stocks, and futures—you own a claim to gold, not actual metal. Physical gold in a Gold IRA means real bars and coins you legally own, stored in a vault. Paper gold carries counterparty risk; if the issuer fails, your investment could be worthless. Physical gold doesn't have this risk.",
    category: "basics",
  },
  {
    id: "is-gold-ira-insured",
    question: "Is my Gold IRA insured?",
    answer:
      "Yes, reputable depositories carry comprehensive insurance (often $1 billion+) covering theft, damage, and loss. However, this is private insurance, not FDIC or SIPC protection. The insurance covers the physical metal, not market value fluctuations. Always verify your custodian's insurance coverage.",
    category: "basics",
  },
  {
    id: "can-lose-money",
    question: "Can I lose money in a Gold IRA?",
    answer:
      "Yes, if gold prices decline from when you purchased. However, you only realize a loss if you sell at lower prices. Long-term holders have historically seen gold maintain and increase purchasing power. The bigger risk for many is NOT having gold when stocks crash 50%+ or inflation erodes dollar value.",
    category: "basics",
  },

  // SETUP (6 questions)
  {
    id: "how-to-open",
    question: "How do I open a Gold IRA?",
    answer:
      "Opening a Gold IRA involves: 1) Choose a reputable Gold IRA company (they'll guide the process), 2) Open a self-directed IRA with their custodian partner, 3) Fund your account through rollover or contribution, 4) Select IRS-approved metals to purchase, 5) Your company handles purchase and delivery to the depository. Most can be done in 1-2 weeks.",
    category: "setup",
  },
  {
    id: "how-long-to-setup",
    question: "How long does it take to set up a Gold IRA?",
    answer:
      "The initial account setup takes 1-3 business days. Funding via rollover typically takes 2-3 weeks (depends on your current custodian's speed). Once funded, purchasing metals and having them delivered to storage takes another 1-2 weeks. Total: expect 3-5 weeks from start to finish.",
    category: "setup",
  },
  {
    id: "what-documents-needed",
    question: "What documents do I need to open a Gold IRA?",
    answer:
      "You'll need: government-issued ID (driver's license or passport), Social Security number, current address verification, beneficiary information, and details about accounts you're rolling over (statements from your 401k, IRA, etc.). The Gold IRA company provides all the actual forms.",
    category: "setup",
  },
  {
    id: "can-i-do-myself",
    question: "Can I set up a Gold IRA by myself?",
    answer:
      "Technically yes, but it's not recommended. You'd need to find a self-directed custodian, locate an IRS-approved depository, ensure you're buying compliant metals, and handle all paperwork correctly. One mistake can cause tax problems. Reputable Gold IRA companies handle all this for you, often at no additional cost.",
    category: "setup",
  },
  {
    id: "annual-contribution-limits",
    question: "What are the annual contribution limits?",
    answer:
      "Gold IRA contribution limits are the same as regular IRAs: $7,000 per year ($8,000 if 50+) for 2024. However, most people fund their Gold IRA through rollovers from existing retirement accounts, which have no limits. You can roll over $500,000+ if that's what's in your 401k.",
    category: "setup",
  },
  {
    id: "can-spouse-open",
    question: "Can my spouse open a Gold IRA too?",
    answer:
      "Absolutely! Each spouse can have their own Gold IRA with separate contribution limits. If you're married filing jointly and only one spouse works, the non-working spouse can still contribute through a 'spousal IRA' as long as the working spouse has sufficient earned income.",
    category: "setup",
  },

  // ROLLOVER (8 questions)
  {
    id: "what-accounts-can-rollover",
    question: "What accounts can be rolled into a Gold IRA?",
    answer:
      "You can roll over: Traditional IRA, Roth IRA, 401(k), 403(b), 457(b), TSP (Thrift Savings Plan), SEP IRA, SIMPLE IRA, and some pension plans. Most employer-sponsored plans can only be rolled over after leaving the job, unless you're 59½+ (in-service withdrawal).",
    category: "rollover",
  },
  {
    id: "is-rollover-taxable",
    question: "Is rolling over to a Gold IRA taxable?",
    answer:
      "No, a direct rollover (trustee-to-trustee transfer) is not a taxable event. The IRS treats it as moving assets between retirement accounts, not a distribution. However, if you take possession of the funds yourself, you have 60 days to complete the rollover or it becomes taxable (plus potential penalties).",
    category: "rollover",
  },
  {
    id: "how-long-rollover-takes",
    question: "How long does a Gold IRA rollover take?",
    answer:
      "Direct rollovers typically take 2-3 weeks, sometimes longer depending on your current custodian. Some 401(k) administrators are faster than others. Once funds arrive at your Gold IRA custodian, purchasing and storing metals takes another 1-2 weeks. Plan for 3-5 weeks total.",
    category: "rollover",
  },
  {
    id: "partial-rollover",
    question: "Can I do a partial rollover?",
    answer:
      "Yes! You don't have to roll over your entire 401(k) or IRA. Many investors roll over 20-30% into gold while keeping the rest in traditional investments. This provides diversification without going 'all in' on any single asset class.",
    category: "rollover",
  },
  {
    id: "still-employed-rollover",
    question: "Can I roll over my 401(k) while still employed?",
    answer:
      "It depends on your plan. Many 401(k) plans allow 'in-service withdrawals' once you reach 59½. Some allow it earlier for hardship or specific circumstances. Check your plan documents or ask your HR department. After leaving the employer, you can always roll over.",
    category: "rollover",
  },
  {
    id: "direct-vs-indirect",
    question: "What's the difference between direct and indirect rollover?",
    answer:
      "Direct rollover: funds transfer directly between custodians; you never touch the money. Indirect rollover: you receive a check and have 60 days to deposit it into the new IRA. Direct rollovers are strongly preferred—no taxes withheld, no deadline pressure, no risk of mistakes.",
    category: "rollover",
  },
  {
    id: "401k-to-gold-ira",
    question: "How do I convert my 401(k) to gold?",
    answer:
      "Choose a Gold IRA company, they'll help you open a self-directed IRA. Request a direct rollover from your 401(k) administrator (your Gold IRA company handles the paperwork). Once funds arrive, you purchase IRS-approved gold. The process takes 3-5 weeks and is tax-free.",
    category: "rollover",
  },
  {
    id: "tsp-rollover",
    question: "Can I roll over my TSP (Thrift Savings Plan)?",
    answer:
      "Yes, federal employees can roll over TSP to a Gold IRA. After separation from federal service, you can roll over part or all of your TSP tax-free. If still employed and 59½+, you may qualify for an age-based in-service withdrawal. TSP rollovers are popular because TSP doesn't offer precious metals.",
    category: "rollover",
  },

  // TAXES (7 questions)
  {
    id: "tax-benefits",
    question: "What are the tax benefits of a Gold IRA?",
    answer:
      "Traditional Gold IRA: contributions are tax-deductible, growth is tax-deferred, you pay taxes on withdrawals. Roth Gold IRA: contributions are after-tax, but growth and qualified withdrawals are completely tax-free. Both protect your gold investments from annual capital gains taxes.",
    category: "taxes",
  },
  {
    id: "traditional-vs-roth-gold",
    question: "Should I choose Traditional or Roth Gold IRA?",
    answer:
      "Traditional: better if you're in a higher tax bracket now than you expect in retirement. Roth: better if you're in a lower bracket now or expect higher taxes in retirement. Roth also has no RMDs and provides tax-free inheritance to heirs. Many choose Roth for gold specifically because of these advantages.",
    category: "taxes",
  },
  {
    id: "rmd-rules",
    question: "What are the RMD rules for Gold IRAs?",
    answer:
      "Traditional Gold IRAs have Required Minimum Distributions starting at age 73 (as of 2023). You must withdraw a percentage each year based on IRS life expectancy tables. RMDs can be taken 'in-kind' (physical gold) or in cash after selling. Roth Gold IRAs have NO RMDs during your lifetime.",
    category: "taxes",
  },
  {
    id: "early-withdrawal-penalty",
    question: "What's the penalty for early withdrawal?",
    answer:
      "Withdrawals before age 59½ incur a 10% early withdrawal penalty PLUS regular income taxes (for Traditional). Roth contributions (not earnings) can be withdrawn penalty-free anytime. Some exceptions exist: first-time home purchase, disability, medical expenses exceeding 7.5% of AGI.",
    category: "taxes",
  },
  {
    id: "gold-ira-reportable",
    question: "Do I need to report my Gold IRA on taxes?",
    answer:
      "You don't report the Gold IRA itself annually, but you must report contributions (Form 5498) and distributions (Form 1099-R). Your custodian provides these forms. Rollovers should be reported but aren't taxable if done correctly. Consult a tax professional for your specific situation.",
    category: "taxes",
  },
  {
    id: "capital-gains-in-ira",
    question: "Are there capital gains taxes in a Gold IRA?",
    answer:
      "No capital gains taxes apply while gold is inside the IRA. You can buy and sell different metals without tax consequences. Taxes only apply when you take distributions. This is a major advantage over holding gold outside an IRA, where sales trigger capital gains (at collectibles rate of 28%).",
    category: "taxes",
  },
  {
    id: "state-taxes",
    question: "Do state taxes apply to Gold IRAs?",
    answer:
      "State tax treatment varies. Most states follow federal rules, but some have their own IRA taxation rules. A few states (like Nevada, Florida, Texas) have no state income tax at all. Check your state's specific rules or consult a tax advisor familiar with your state.",
    category: "taxes",
  },

  // APPROVED METALS (6 questions)
  {
    id: "what-gold-approved",
    question: "What types of gold can I hold in my IRA?",
    answer:
      "IRS-approved gold must be 99.5% pure (0.995 fineness) or higher. Approved products include American Gold Eagles (exception at 91.67%), American Gold Buffalos, Canadian Gold Maple Leafs, Australian Gold Kangaroos, and gold bars from approved refiners (PAMP, Credit Suisse, etc.).",
    category: "metals",
  },
  {
    id: "can-hold-silver",
    question: "Can I hold silver in a Gold IRA?",
    answer:
      "Yes! Despite the name, 'Gold IRAs' can hold silver, platinum, and palladium. Silver must be 99.9% pure. Approved silver includes American Silver Eagles, Canadian Silver Maple Leafs, and silver bars from approved refiners. Many investors hold a mix of gold (primary) and silver (secondary).",
    category: "metals",
  },
  {
    id: "collectible-coins",
    question: "Can I hold collectible or rare coins?",
    answer:
      "Generally no. The IRS specifically excludes most collectible coins from IRAs. The coins must meet purity standards and be produced by approved mints. Rare coins are valued for their scarcity and condition, not metal content, and their premiums make them poor IRA investments. Stick to bullion.",
    category: "metals",
  },
  {
    id: "gold-jewelry",
    question: "Can I hold gold jewelry in my IRA?",
    answer:
      "No. Gold jewelry is specifically prohibited by IRS rules. It doesn't meet purity requirements (14k is only 58.3% pure) and can't be accurately valued for IRA purposes. Gold IRAs are limited to bullion coins and bars meeting specific purity standards.",
    category: "metals",
  },
  {
    id: "gold-etf-in-ira",
    question: "Can I hold gold ETFs in a Gold IRA?",
    answer:
      "You can hold gold ETFs in a regular IRA (not self-directed), but that's 'paper gold,' not physical ownership. A true Gold IRA holds actual metal you own. ETFs like GLD hold gold for shareholders but have counterparty risk. Physical gold in a Gold IRA eliminates this risk.",
    category: "metals",
  },
  {
    id: "platinum-palladium",
    question: "What about platinum and palladium?",
    answer:
      "Both are IRA-approved at 99.95% purity. Approved products include American Platinum Eagles, Canadian Platinum Maple Leafs, and bars from approved refiners. Platinum and palladium add industrial-use exposure (automotive catalysts). Most investors hold primarily gold with small positions in other metals.",
    category: "metals",
  },

  // STORAGE (5 questions)
  {
    id: "where-gold-stored",
    question: "Where is my gold stored?",
    answer:
      "Your gold is stored in an IRS-approved depository—secure vaults designed specifically for precious metals. Popular depositories include Delaware Depository, Brink's, and STRATA Trust. These facilities have bank-vault-level security, full insurance, and regular audits. You choose the depository; your metals are your property.",
    category: "storage",
  },
  {
    id: "segregated-vs-commingled",
    question: "What's segregated vs commingled storage?",
    answer:
      "Segregated (allocated) storage: your specific bars and coins are stored separately, labeled as yours. You own those exact pieces. Commingled (unallocated) storage: your gold is pooled with others' metals; you own a share of the total. Segregated costs more but provides clearer ownership. Recommended for larger accounts.",
    category: "storage",
  },
  {
    id: "can-visit-gold",
    question: "Can I visit my gold?",
    answer:
      "Yes, most depositories allow account holders to schedule visits to view their metals. This provides peace of mind and verification. You typically need to schedule in advance and provide ID. Some depositories charge a fee for visits. You cannot remove metals without taking a distribution.",
    category: "storage",
  },
  {
    id: "home-storage-ira",
    question: "Can I store Gold IRA metals at home?",
    answer:
      "No! Despite what some promoters claim, home storage of IRA gold is not permitted and will trigger a distribution (taxes + penalties). The IRS requires an approved non-bank trustee and depository. 'Home storage Gold IRAs' have resulted in serious tax problems for many investors. Don't fall for this scam.",
    category: "storage",
  },
  {
    id: "what-if-depository-fails",
    question: "What happens if the depository goes bankrupt?",
    answer:
      "Your metals are your property, not the depository's asset. In a bankruptcy, your gold would be returned to you or transferred to another depository. It's not subject to the depository's creditors. This is different from bank deposits, which are the bank's liability. Physical ownership provides this protection.",
    category: "storage",
  },

  // FEES (5 questions)
  {
    id: "typical-fees",
    question: "What are typical Gold IRA fees?",
    answer:
      "Typical fees include: Setup fee ($50-$150, often waived), Annual custodian fee ($75-$300), Storage fee ($100-$300/year, or 0.5% of value), and dealer premiums on metals (3-5% over spot). Total ongoing costs are usually $175-$500/year depending on account size. Compare carefully—some companies hide fees.",
    category: "fees",
  },
  {
    id: "hidden-fees",
    question: "Are there hidden fees I should watch for?",
    answer:
      "Watch for: high buy/sell spreads (you pay more to buy, receive less when selling), transaction fees for each purchase, wire transfer fees, account closure fees, and excessive premiums on 'exclusive' coins. Reputable companies provide full fee disclosure upfront. If fees aren't clear, walk away.",
    category: "fees",
  },
  {
    id: "why-fees-higher",
    question: "Why are Gold IRA fees higher than regular IRAs?",
    answer:
      "Gold IRAs involve physical assets requiring: secure vault storage, insurance, handling, and auditing. Regular IRAs just hold electronic records. The additional fees pay for real security and custody of tangible assets. Think of it as the cost of owning 'real' versus 'paper' assets.",
    category: "fees",
  },
  {
    id: "reduce-fees",
    question: "How can I reduce Gold IRA fees?",
    answer:
      "Reduce fees by: choosing companies that waive setup fees, selecting flat-rate storage (better for larger accounts), avoiding frequent trading (which triggers transaction fees), and negotiating—many companies offer fee deals for larger accounts or when asked directly.",
    category: "fees",
  },
  {
    id: "worth-the-fees",
    question: "Are Gold IRA fees worth it?",
    answer:
      "Consider: fees of $300/year on a $100,000 account are 0.3%. Many stock mutual funds charge 1%+ in expense ratios. If gold protects your portfolio from a 30% crash, the fees become trivial. The question isn't 'are fees low enough'—it's 'is the protection worth the cost?' For most retirees, yes.",
    category: "fees",
  },

  // COMPANIES (4 questions)
  {
    id: "how-choose-company",
    question: "How do I choose a Gold IRA company?",
    answer:
      "Key factors: years in business, BBB rating and customer reviews, fee transparency, minimum investment requirements, buyback policy, educational resources, and customer service quality. Avoid companies that use high-pressure sales tactics or make unrealistic promises. Research at least 2-3 companies before deciding.",
    category: "companies",
  },
  {
    id: "best-gold-ira-company",
    question: "What's the best Gold IRA company?",
    answer:
      "Augusta Precious Metals consistently ranks highest for customer service, transparency, and education. They require $50,000 minimum but provide exceptional white-glove service. Other reputable options include Goldco, American Hartford Gold, and Birch Gold. Choose based on your priorities: minimum, fees, service level, or buyback terms.",
    category: "companies",
  },
  {
    id: "company-goes-bankrupt",
    question: "What if my Gold IRA company goes out of business?",
    answer:
      "Your gold is safely stored at an independent depository—the Gold IRA company doesn't hold it. If the company closes, you work directly with the custodian and depository, or transfer to a new company. Your physical metal remains yours regardless of what happens to the dealer.",
    category: "companies",
  },
  {
    id: "can-switch-companies",
    question: "Can I switch Gold IRA companies?",
    answer:
      "Yes, you can transfer your Gold IRA to a new custodian/company at any time. The process is similar to opening a new account—the new company handles the paperwork. Your metals can either transfer 'in kind' (same bars/coins) or be liquidated and repurchased. Some companies charge transfer-out fees.",
    category: "companies",
  },

  // WITHDRAWALS (4 questions)
  {
    id: "how-to-withdraw",
    question: "How do I withdraw from my Gold IRA?",
    answer:
      "You can take distributions as cash (custodian sells gold, sends you proceeds) or in-kind (receive physical gold). Cash distributions are simpler; in-kind distributions give you the actual metal. Both trigger taxes on Traditional IRAs. Contact your custodian to initiate withdrawal—they handle the process.",
    category: "withdrawals",
  },
  {
    id: "in-kind-distribution",
    question: "What is an in-kind distribution?",
    answer:
      "An in-kind distribution means receiving the physical gold instead of cash. You request specific bars/coins, they're shipped from the depository to you. You then own them outright. You'll owe income taxes on the fair market value. This is popular for those who want to personally hold their gold in retirement.",
    category: "withdrawals",
  },
  {
    id: "selling-gold-ira",
    question: "How do I sell gold in my IRA?",
    answer:
      "Contact your Gold IRA company or custodian to sell. Most companies offer buyback programs, often at competitive prices. The sale happens within the IRA (no immediate tax consequences). Proceeds can stay in the IRA as cash, be reinvested in different metals, or withdrawn (triggering taxes).",
    category: "withdrawals",
  },
  {
    id: "inheriting-gold-ira",
    question: "What happens when I inherit a Gold IRA?",
    answer:
      "Spouses can roll the Gold IRA into their own IRA. Non-spouse beneficiaries must take distributions over 10 years (SECURE Act). Inherited Roth Gold IRAs are tax-free. Beneficiaries can take in-kind distributions (receive physical gold). Work with the custodian and a tax advisor to navigate inherited IRA rules.",
    category: "withdrawals",
  },

  // STRATEGY (5 questions)
  {
    id: "how-much-allocate",
    question: "How much of my portfolio should be in gold?",
    answer:
      "Financial experts typically recommend 5-20% in precious metals. Conservative investors often start with 10-15%. Those very concerned about inflation, market crashes, or currency devaluation may go up to 25-30%. Never put 100% in any single asset class. Your allocation depends on age, risk tolerance, and goals.",
    category: "strategy",
  },
  {
    id: "gold-vs-silver-allocation",
    question: "Should I hold gold, silver, or both?",
    answer:
      "Gold is the primary precious metal for wealth preservation—more stable, more liquid, and more widely accepted. Silver is more volatile (higher upside and downside) and has industrial demand. Many investors hold 75-80% gold and 20-25% silver. Platinum and palladium are optional additions for diversification.",
    category: "strategy",
  },
  {
    id: "when-to-buy",
    question: "When is the best time to buy gold?",
    answer:
      "Time in the market beats timing the market. Dollar-cost averaging (regular purchases over time) reduces risk of buying at peaks. That said, gold often dips when stocks are soaring and people feel safe. Many see corrections as buying opportunities. The 'best time' was likely years ago; the second best time is now.",
    category: "strategy",
  },
  {
    id: "rebalancing",
    question: "Should I rebalance my Gold IRA?",
    answer:
      "Rebalancing maintains your target allocation. If gold rises significantly and becomes 30% of your portfolio (above your 20% target), you might sell some gold or buy other metals to rebalance. However, frequent trading adds fees. Many investors rebalance annually or when allocation drifts more than 5% from target.",
    category: "strategy",
  },
  {
    id: "bars-vs-coins",
    question: "Should I buy gold bars or coins?",
    answer:
      "Both work for Gold IRAs. Coins (like American Eagles) are more recognizable and easier to sell in smaller amounts. Bars offer slightly lower premiums for the same gold content. For larger accounts, bars provide better value. For flexibility and liquidity, coins are preferred. Many investors hold both.",
    category: "strategy",
  },
];

export function getFAQsByCategory(categoryId: string): FAQ[] {
  return faqs.filter((faq) => faq.category === categoryId);
}

export function searchFAQs(query: string): FAQ[] {
  const lowercaseQuery = query.toLowerCase();
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(lowercaseQuery) ||
      faq.answer.toLowerCase().includes(lowercaseQuery)
  );
}
