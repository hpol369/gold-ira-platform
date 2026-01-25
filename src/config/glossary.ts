export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  relatedTerms?: string[];
  category: string;
}

export const glossaryCategories = [
  { id: "accounts", name: "Account Types" },
  { id: "metals", name: "Precious Metals" },
  { id: "transactions", name: "Transactions & Transfers" },
  { id: "taxes", name: "Taxes & Compliance" },
  { id: "storage", name: "Storage & Custody" },
  { id: "investing", name: "Investing Concepts" },
  { id: "companies", name: "Industry Terms" },
];

export const glossaryTerms: GlossaryTerm[] = [
  // ACCOUNT TYPES
  {
    term: "Gold IRA",
    slug: "gold-ira",
    definition:
      "A self-directed Individual Retirement Account that holds physical gold, silver, platinum, or palladium instead of traditional paper assets. Offers the same tax advantages as regular IRAs while providing tangible asset ownership.",
    relatedTerms: ["Self-Directed IRA", "Traditional IRA", "Roth IRA"],
    category: "accounts",
  },
  {
    term: "Self-Directed IRA",
    slug: "self-directed-ira",
    definition:
      "An IRA that allows the account holder to choose from a wider range of investments beyond stocks and bonds, including precious metals, real estate, and private placements. Requires a specialized custodian.",
    relatedTerms: ["Gold IRA", "Custodian"],
    category: "accounts",
  },
  {
    term: "Traditional IRA",
    slug: "traditional-ira",
    definition:
      "A retirement account with tax-deductible contributions and tax-deferred growth. Taxes are paid upon withdrawal in retirement. Subject to Required Minimum Distributions (RMDs) starting at age 73.",
    relatedTerms: ["Roth IRA", "RMD"],
    category: "accounts",
  },
  {
    term: "Roth IRA",
    slug: "roth-ira",
    definition:
      "A retirement account funded with after-tax dollars. Earnings grow tax-free, and qualified withdrawals are tax-free. No RMDs during the owner's lifetime. Popular for Gold IRAs due to tax-free inheritance.",
    relatedTerms: ["Traditional IRA", "Roth Conversion"],
    category: "accounts",
  },
  {
    term: "SEP IRA",
    slug: "sep-ira",
    definition:
      "Simplified Employee Pension IRA. A retirement plan for self-employed individuals and small business owners allowing higher contribution limits than traditional IRAs (up to $69,000 in 2024).",
    relatedTerms: ["Solo 401(k)", "Self-Employed"],
    category: "accounts",
  },
  {
    term: "Solo 401(k)",
    slug: "solo-401k",
    definition:
      "A 401(k) plan for self-employed individuals with no employees (except spouse). Allows both employee and employer contributions, potentially enabling higher savings than a SEP IRA. Can be self-directed for precious metals.",
    relatedTerms: ["SEP IRA", "401(k)"],
    category: "accounts",
  },
  {
    term: "401(k)",
    slug: "401k",
    definition:
      "An employer-sponsored retirement savings plan that allows employees to save and invest a portion of their paycheck before taxes. Can often be rolled over into a Gold IRA after leaving employment or reaching age 59½.",
    relatedTerms: ["Rollover", "In-Service Withdrawal"],
    category: "accounts",
  },
  {
    term: "TSP (Thrift Savings Plan)",
    slug: "tsp",
    definition:
      "A retirement savings plan for federal employees and uniformed services members. Similar to a 401(k) but with limited investment options. Can be rolled over to a Gold IRA after separation from federal service.",
    relatedTerms: ["401(k)", "Federal Employee"],
    category: "accounts",
  },
  {
    term: "403(b)",
    slug: "403b",
    definition:
      "A retirement plan for employees of public schools, tax-exempt organizations, and certain ministers. Similar to a 401(k) and eligible for rollover to a Gold IRA.",
    relatedTerms: ["401(k)", "Rollover"],
    category: "accounts",
  },

  // PRECIOUS METALS
  {
    term: "Bullion",
    slug: "bullion",
    definition:
      "Precious metals in bulk form, valued by weight and purity rather than face value. Includes gold, silver, platinum, and palladium bars and coins meeting specific fineness standards. The standard form held in Gold IRAs.",
    relatedTerms: ["Fineness", "Spot Price"],
    category: "metals",
  },
  {
    term: "Fineness",
    slug: "fineness",
    definition:
      "A measure of precious metal purity, expressed as parts per thousand. Gold IRA gold must be 99.5% fine (0.995) or higher. American Eagles are an exception at 91.67% (22 karat) due to their legal tender status.",
    relatedTerms: ["Bullion", "Karat"],
    category: "metals",
  },
  {
    term: "Karat",
    slug: "karat",
    definition:
      "A measure of gold purity based on 24 parts. 24 karat is pure gold (99.9%+), 22 karat is 91.67% gold, 18 karat is 75% gold. Most IRA-approved gold is 24 karat except American Eagles (22 karat).",
    relatedTerms: ["Fineness", "Purity"],
    category: "metals",
  },
  {
    term: "Spot Price",
    slug: "spot-price",
    definition:
      "The current market price for immediate delivery of one troy ounce of a precious metal. Determined by global trading and changes throughout the day. The base price from which premiums are added.",
    relatedTerms: ["Premium", "Troy Ounce"],
    category: "metals",
  },
  {
    term: "Premium",
    slug: "premium",
    definition:
      "The amount charged above spot price when purchasing bullion. Covers minting costs, dealer profit, and market demand. Premiums vary by product type—coins typically have higher premiums than bars.",
    relatedTerms: ["Spot Price", "Spread"],
    category: "metals",
  },
  {
    term: "Troy Ounce",
    slug: "troy-ounce",
    definition:
      "The standard unit of measurement for precious metals. Equal to 31.1 grams, slightly heavier than a regular ounce (28.35 grams). All precious metal prices and weights use troy ounces.",
    relatedTerms: ["Spot Price", "Bullion"],
    category: "metals",
  },
  {
    term: "American Gold Eagle",
    slug: "american-gold-eagle",
    definition:
      "U.S. Mint gold coin containing one troy ounce of gold, though the coin weighs more due to copper and silver alloy. The most popular IRA-approved gold coin. Available in 1 oz, ½ oz, ¼ oz, and 1/10 oz sizes.",
    relatedTerms: ["American Gold Buffalo", "Bullion"],
    category: "metals",
  },
  {
    term: "American Gold Buffalo",
    slug: "american-gold-buffalo",
    definition:
      "U.S. Mint coin containing one troy ounce of 99.99% pure gold (24 karat). The first .9999 fine gold coin produced by the U.S. Mint. Popular alternative to Eagles for investors wanting maximum purity.",
    relatedTerms: ["American Gold Eagle", "Fineness"],
    category: "metals",
  },
  {
    term: "Canadian Gold Maple Leaf",
    slug: "canadian-gold-maple-leaf",
    definition:
      "Royal Canadian Mint coin containing one troy ounce of 99.99% pure gold. Known for advanced security features and consistent quality. One of the most widely held IRA-approved gold coins globally.",
    relatedTerms: ["American Gold Eagle", "Bullion"],
    category: "metals",
  },
  {
    term: "Numismatic Coins",
    slug: "numismatic-coins",
    definition:
      "Coins valued primarily for their rarity, condition, and collector appeal rather than metal content. Generally NOT IRA-approved because their value is subjective and they carry high premiums. Avoid for retirement accounts.",
    relatedTerms: ["Bullion", "Collectible"],
    category: "metals",
  },

  // TRANSACTIONS
  {
    term: "Rollover",
    slug: "rollover",
    definition:
      "Moving retirement funds from one account to another (e.g., 401(k) to Gold IRA). Can be direct (trustee-to-trustee) or indirect (you receive funds and redeposit within 60 days). Direct rollovers are tax-free and preferred.",
    relatedTerms: ["Direct Rollover", "Indirect Rollover", "Transfer"],
    category: "transactions",
  },
  {
    term: "Direct Rollover",
    slug: "direct-rollover",
    definition:
      "A rollover where funds transfer directly between custodians without the account holder taking possession. No taxes withheld, no 60-day deadline, no risk of mistakes. The recommended method for Gold IRA rollovers.",
    relatedTerms: ["Indirect Rollover", "Trustee-to-Trustee"],
    category: "transactions",
  },
  {
    term: "Indirect Rollover",
    slug: "indirect-rollover",
    definition:
      "A rollover where you receive a check from your old plan and have 60 days to deposit it into a new IRA. Your old plan withholds 20% for taxes (refunded when you file if completed correctly). Riskier than direct rollover.",
    relatedTerms: ["Direct Rollover", "60-Day Rule"],
    category: "transactions",
  },
  {
    term: "Transfer",
    slug: "transfer",
    definition:
      "Moving assets between the same type of account (IRA to IRA). Similar to a direct rollover but technically different. Unlimited transfers per year, while indirect rollovers are limited to one per 12 months.",
    relatedTerms: ["Rollover", "Custodian"],
    category: "transactions",
  },
  {
    term: "In-Service Withdrawal",
    slug: "in-service-withdrawal",
    definition:
      "A withdrawal from an employer-sponsored plan (like 401(k)) while still employed. Many plans allow this at age 59½, enabling you to roll over to a Gold IRA without leaving your job. Check your specific plan rules.",
    relatedTerms: ["401(k)", "Rollover"],
    category: "transactions",
  },
  {
    term: "Distribution",
    slug: "distribution",
    definition:
      "A withdrawal from a retirement account. Can be in cash (sell gold, receive proceeds) or in-kind (receive physical gold). Distributions from traditional IRAs are taxable; early distributions (before 59½) may incur a 10% penalty.",
    relatedTerms: ["In-Kind Distribution", "RMD"],
    category: "transactions",
  },
  {
    term: "In-Kind Distribution",
    slug: "in-kind-distribution",
    definition:
      "Receiving the actual physical gold from your IRA rather than selling it for cash. The metals are shipped from the depository to you. You owe income taxes on the fair market value. Popular for those wanting to physically hold their gold.",
    relatedTerms: ["Distribution", "Depository"],
    category: "transactions",
  },
  {
    term: "Contribution",
    slug: "contribution",
    definition:
      "Depositing new money into your IRA (not from another retirement account). Annual limits apply: $7,000 ($8,000 if 50+) for 2024. Rollovers don't count against contribution limits.",
    relatedTerms: ["Rollover", "Catch-Up Contribution"],
    category: "transactions",
  },
  {
    term: "Catch-Up Contribution",
    slug: "catch-up-contribution",
    definition:
      "Additional IRA contribution allowed for those age 50 and older. Currently $1,000 extra per year (total $8,000 for 2024). Helps older investors accelerate retirement savings.",
    relatedTerms: ["Contribution", "Traditional IRA"],
    category: "transactions",
  },
  {
    term: "Buyback",
    slug: "buyback",
    definition:
      "A Gold IRA company's program to repurchase metals from clients. Good companies offer competitive buyback rates, making it easy to liquidate when needed. Check buyback policies before choosing a company.",
    relatedTerms: ["Spread", "Liquidation"],
    category: "transactions",
  },

  // TAXES
  {
    term: "RMD (Required Minimum Distribution)",
    slug: "rmd",
    definition:
      "Mandatory annual withdrawals from traditional IRAs starting at age 73 (as of 2023). Calculated based on account balance and IRS life expectancy tables. Roth IRAs have no RMDs during the owner's lifetime.",
    relatedTerms: ["Traditional IRA", "Distribution"],
    category: "taxes",
  },
  {
    term: "Tax-Deferred",
    slug: "tax-deferred",
    definition:
      "Investment growth that isn't taxed until withdrawal. Traditional IRA and 401(k) earnings are tax-deferred—you pay taxes when you take distributions in retirement, hopefully at a lower tax bracket.",
    relatedTerms: ["Tax-Free", "Traditional IRA"],
    category: "taxes",
  },
  {
    term: "Tax-Free Growth",
    slug: "tax-free-growth",
    definition:
      "Investment earnings that are never taxed if rules are followed. Roth IRA growth is tax-free—you pay taxes on contributions upfront but never on growth or qualified withdrawals.",
    relatedTerms: ["Roth IRA", "Qualified Distribution"],
    category: "taxes",
  },
  {
    term: "Roth Conversion",
    slug: "roth-conversion",
    definition:
      "Moving funds from a traditional IRA to a Roth IRA. You pay income taxes on the converted amount now, but future growth and withdrawals are tax-free. Popular strategy for those expecting higher future tax rates.",
    relatedTerms: ["Roth IRA", "Traditional IRA"],
    category: "taxes",
  },
  {
    term: "Qualified Distribution",
    slug: "qualified-distribution",
    definition:
      "A withdrawal from a Roth IRA that meets requirements for tax-free treatment: account open 5+ years AND you're 59½+ (or disabled, first-time home purchase, etc.). Non-qualified distributions may owe taxes on earnings.",
    relatedTerms: ["Roth IRA", "Distribution"],
    category: "taxes",
  },
  {
    term: "Early Withdrawal Penalty",
    slug: "early-withdrawal-penalty",
    definition:
      "A 10% tax penalty on IRA distributions taken before age 59½, in addition to regular income taxes. Some exceptions exist (disability, medical expenses, first home). Roth contributions (not earnings) can be withdrawn penalty-free.",
    relatedTerms: ["Distribution", "59½ Rule"],
    category: "taxes",
  },
  {
    term: "Collectibles Tax Rate",
    slug: "collectibles-tax-rate",
    definition:
      "A 28% maximum long-term capital gains rate on precious metals held outside IRAs. Higher than the standard 15-20% rate for stocks. One advantage of Gold IRAs: this rate doesn't apply while metals are inside the IRA.",
    relatedTerms: ["Capital Gains", "Gold IRA"],
    category: "taxes",
  },

  // STORAGE
  {
    term: "Custodian",
    slug: "custodian",
    definition:
      "A financial institution that holds and safeguards IRA assets. For Gold IRAs, must be a bank, trust company, or IRS-approved entity qualified for self-directed IRAs. Handles administration, reporting, and compliance.",
    relatedTerms: ["Self-Directed IRA", "Depository"],
    category: "storage",
  },
  {
    term: "Depository",
    slug: "depository",
    definition:
      "A secure facility where physical Gold IRA metals are stored. Must be IRS-approved. Major depositories include Delaware Depository, Brink's, and STRATA Trust. Features bank-vault security, insurance, and regular audits.",
    relatedTerms: ["Custodian", "Segregated Storage"],
    category: "storage",
  },
  {
    term: "Segregated Storage",
    slug: "segregated-storage",
    definition:
      "Storage where your specific bars and coins are kept separately, labeled as yours. You own those exact pieces. More expensive than commingled storage but provides clearer ownership and easier auditing. Recommended for larger accounts.",
    relatedTerms: ["Commingled Storage", "Allocated Storage"],
    category: "storage",
  },
  {
    term: "Commingled Storage",
    slug: "commingled-storage",
    definition:
      "Storage where your gold is pooled with other investors' metals. You own a share of the total, not specific pieces. Lower cost than segregated storage. Also called unallocated storage. Still your legal property.",
    relatedTerms: ["Segregated Storage", "Depository"],
    category: "storage",
  },
  {
    term: "Allocated Storage",
    slug: "allocated-storage",
    definition:
      "Another term for segregated storage—your specific metals are set aside and identified as belonging to you. The opposite of unallocated (commingled) storage where metals are pooled.",
    relatedTerms: ["Segregated Storage", "Unallocated"],
    category: "storage",
  },
  {
    term: "Home Storage Gold IRA",
    slug: "home-storage-gold-ira",
    definition:
      "A misleading term for schemes claiming you can store IRA gold at home. These are generally NOT legal and result in the IRS treating your metals as a taxable distribution. Avoid companies promoting this—it's often a red flag for scams.",
    relatedTerms: ["Depository", "Prohibited Transaction"],
    category: "storage",
  },

  // INVESTING CONCEPTS
  {
    term: "Diversification",
    slug: "diversification",
    definition:
      "Spreading investments across different asset classes to reduce risk. Gold provides diversification because it often moves independently of stocks and bonds. A portfolio with 10-20% gold historically shows lower volatility.",
    relatedTerms: ["Asset Allocation", "Hedge"],
    category: "investing",
  },
  {
    term: "Asset Allocation",
    slug: "asset-allocation",
    definition:
      "How your portfolio is divided among different investment types (stocks, bonds, gold, etc.). Proper allocation depends on age, risk tolerance, and goals. Most advisors recommend 5-20% in precious metals.",
    relatedTerms: ["Diversification", "Rebalancing"],
    category: "investing",
  },
  {
    term: "Hedge",
    slug: "hedge",
    definition:
      "An investment that offsets potential losses in another investment. Gold is often called an 'inflation hedge' or 'crisis hedge' because it tends to rise when stocks fall or currency loses value.",
    relatedTerms: ["Diversification", "Safe Haven"],
    category: "investing",
  },
  {
    term: "Safe Haven",
    slug: "safe-haven",
    definition:
      "An asset that investors move to during uncertainty or market turmoil. Gold is a classic safe haven—during the 2008 crash, investors fled stocks for gold, driving gold prices up 25% while stocks fell 57%.",
    relatedTerms: ["Hedge", "Flight to Quality"],
    category: "investing",
  },
  {
    term: "Dollar-Cost Averaging",
    slug: "dollar-cost-averaging",
    definition:
      "Investing fixed amounts at regular intervals regardless of price. Reduces the risk of buying everything at a peak. Example: investing $10,000 in gold over 12 months rather than all at once.",
    relatedTerms: ["Asset Allocation", "Volatility"],
    category: "investing",
  },
  {
    term: "Rebalancing",
    slug: "rebalancing",
    definition:
      "Adjusting your portfolio back to target allocations after market movements. If gold rises from 15% to 25% of your portfolio, you might sell some to maintain your 15% target. Usually done annually or when allocations drift significantly.",
    relatedTerms: ["Asset Allocation", "Diversification"],
    category: "investing",
  },
  {
    term: "Counterparty Risk",
    slug: "counterparty-risk",
    definition:
      "The risk that the other party in a financial transaction fails to meet their obligation. Paper gold (ETFs, futures) has counterparty risk—if the issuer fails, your investment could be worthless. Physical gold eliminates this risk.",
    relatedTerms: ["Paper Gold", "Physical Gold"],
    category: "investing",
  },
  {
    term: "Paper Gold",
    slug: "paper-gold",
    definition:
      "Financial instruments that track gold prices without physical ownership: gold ETFs, mining stocks, futures contracts. You own a claim, not actual metal. Convenient but carries counterparty risk and doesn't provide the same protection as physical gold.",
    relatedTerms: ["Physical Gold", "Counterparty Risk", "ETF"],
    category: "investing",
  },
  {
    term: "Spread",
    slug: "spread",
    definition:
      "The difference between the price you pay to buy gold (ask) and the price you receive when selling (bid). A form of transaction cost. Lower spreads are better for investors. Compare spreads when choosing a Gold IRA company.",
    relatedTerms: ["Premium", "Buyback"],
    category: "investing",
  },

  // INDUSTRY TERMS
  {
    term: "Gold IRA Company",
    slug: "gold-ira-company",
    definition:
      "A dealer that facilitates Gold IRA investments. They help you open an account, choose metals, and arrange purchase and storage. They work with custodians and depositories but don't hold your metals themselves. Examples: Augusta, Goldco, Birch Gold.",
    relatedTerms: ["Custodian", "Depository"],
    category: "companies",
  },
  {
    term: "IRS-Approved Metals",
    slug: "irs-approved-metals",
    definition:
      "Precious metals meeting IRS requirements for inclusion in a Gold IRA. Gold must be 99.5% pure, silver 99.9% pure, platinum/palladium 99.95% pure. Must be produced by approved mints/refiners. Collectibles and jewelry don't qualify.",
    relatedTerms: ["Fineness", "Bullion"],
    category: "companies",
  },
  {
    term: "Prohibited Transaction",
    slug: "prohibited-transaction",
    definition:
      "An IRS-forbidden activity with your IRA, such as self-dealing (buying gold from yourself), personal use of IRA assets, or home storage. Prohibited transactions can disqualify your entire IRA, triggering immediate taxes and penalties.",
    relatedTerms: ["Home Storage Gold IRA", "Self-Dealing"],
    category: "companies",
  },
  {
    term: "Disqualified Person",
    slug: "disqualified-person",
    definition:
      "Someone forbidden from transacting with your IRA: you, your spouse, lineal descendants (children, grandchildren), their spouses, and fiduciaries. You can't buy gold from or sell gold to a disqualified person using IRA funds.",
    relatedTerms: ["Prohibited Transaction", "Self-Dealing"],
    category: "companies",
  },
  {
    term: "BBB Rating",
    slug: "bbb-rating",
    definition:
      "Better Business Bureau rating measuring a company's trustworthiness. Ranges from A+ to F based on complaint history, transparency, and business practices. Top Gold IRA companies typically have A+ or A ratings. Check BBB before choosing a company.",
    relatedTerms: ["Due Diligence", "Gold IRA Company"],
    category: "companies",
  },
];

export function getTermsByCategory(categoryId: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.category === categoryId);
}

export function searchTerms(query: string): GlossaryTerm[] {
  const lowercaseQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowercaseQuery) ||
      term.definition.toLowerCase().includes(lowercaseQuery)
  );
}

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

// Get all terms starting with a specific letter
export function getTermsByLetter(letter: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) =>
    term.term.toUpperCase().startsWith(letter.toUpperCase())
  );
}

// Get unique first letters for A-Z navigation
export function getAvailableLetters(): string[] {
  const letters = new Set<string>();
  glossaryTerms.forEach((term) => letters.add(term.term[0].toUpperCase()));
  return Array.from(letters).sort();
}
