// src/data/companies/index.ts
// P1-001 to P1-016: Company data structure and all company data

export interface CompanyFees {
  setup: number;
  annual: number;
  storage: number;
  transaction?: number;
}

export interface Company {
  // Identity
  id: string;
  name: string;
  slug: string;

  // Ratings
  rating: number;
  bbbRating: string;
  trustpilotRating?: number;
  reviewCount: number;

  // Business Info
  founded: number;
  headquarters: string;
  ceo?: string;

  // Investment Details
  minInvestment: number;
  maxInvestment?: number;
  accountTypes: string[];

  // Fees
  fees: CompanyFees;

  // Products
  metals: string[];
  products: string[];

  // Evaluation
  pros: string[];
  cons: string[];
  bestFor: string;

  // Content
  description: string;
  shortDescription: string;
  verdict: string;

  // SEO
  searchVolume?: number;
  keywordDifficulty?: number;

  // Meta
  featured: boolean;
  rank: number;
  affiliateLink: string;
  logo?: string;
  website: string;
  highlight?: string;
}

// ============================================
// COMPANY DATA - Ordered by search volume/priority
// ============================================

export const companies: Record<string, Company> = {
  // #1 - Augusta Precious Metals (Featured Partner)
  "augusta-precious-metals": {
    id: "augusta",
    name: "Augusta Precious Metals",
    slug: "augusta-precious-metals",
    rating: 4.9,
    bbbRating: "A+",
    trustpilotRating: 4.9,
    reviewCount: 1847,
    founded: 2012,
    headquarters: "Los Angeles, CA",
    ceo: "Isaac Nuriani",
    minInvestment: 50000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 0,
      annual: 180,
      storage: 100,
    },
    metals: ["Gold", "Silver"],
    products: ["Coins", "Bars"],
    pros: [
      "Lifetime customer support with dedicated agent",
      "Transparent pricing with no hidden fees",
      "Free one-on-one web conference education",
      "Price match guarantee",
      "No pushy sales tactics - education first approach",
      "A+ BBB rating with zero complaints",
    ],
    cons: [
      "Higher minimum investment ($50,000)",
      "Limited to gold and silver only",
      "No platinum or palladium options",
    ],
    bestFor: "Investors who value education, transparency, and personalized service over rock-bottom minimums",
    description: "Augusta Precious Metals stands out in the Gold IRA industry for their education-first approach. Unlike many competitors, they focus on helping you understand precious metals investing before making any decisions. Every client gets a dedicated account manager for life, and their transparent pricing means no surprises down the road.",
    shortDescription: "Education-first Gold IRA company with lifetime support and transparent pricing.",
    verdict: "Augusta Precious Metals is our #1 recommendation for Gold IRA investors who want a company that prioritizes education and transparency. Their higher minimum is offset by exceptional customer service and zero complaints with the BBB.",
    searchVolume: 3200,
    keywordDifficulty: 24,
    featured: true,
    rank: 1,
    affiliateLink: "https://www.augustapreciousmetals.com/ap-gold-silver-ira-guide/?ap_id=RICH_DAD",
    website: "https://www.augustapreciousmetals.com",
    highlight: "Best Overall",
  },

  // #2 - American Hartford Gold (6,400 vol)
  "american-hartford-gold": {
    id: "american-hartford",
    name: "American Hartford Gold",
    slug: "american-hartford-gold",
    rating: 4.8,
    bbbRating: "A+",
    trustpilotRating: 4.8,
    reviewCount: 2156,
    founded: 2015,
    headquarters: "Los Angeles, CA",
    minInvestment: 10000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 0,
      annual: 180,
      storage: 150,
    },
    metals: ["Gold", "Silver", "Platinum"],
    products: ["Coins", "Bars"],
    pros: [
      "Lower minimum investment ($10,000)",
      "Up to $10,000 in free silver on qualified purchases",
      "Fast account setup process",
      "Buyback program with competitive rates",
      "Celebrity endorsements (Bill O'Reilly)",
    ],
    cons: [
      "Aggressive marketing tactics",
      "Some reports of high-pressure sales",
      "Fee structure not always transparent upfront",
    ],
    bestFor: "Investors with smaller portfolios who want promotional bonuses and fast setup",
    description: "American Hartford Gold has grown rapidly to become one of the largest Gold IRA providers in the country. Known for their promotional offers including free silver, they offer a lower barrier to entry than many competitors.",
    shortDescription: "Fast-growing Gold IRA company known for promotional offers and lower minimums.",
    verdict: "American Hartford Gold is a solid choice for investors with smaller portfolios. Their promotional bonuses are attractive, but watch out for potentially aggressive sales tactics.",
    searchVolume: 6400,
    keywordDifficulty: 14,
    featured: false,
    rank: 2,
    affiliateLink: "https://www.americanhartfordgold.com/?affiliate_id=RICH_DAD",
    website: "https://www.americanhartfordgold.com",
    highlight: "Price Match",
  },

  // #3 - Goldco (5,200 vol)
  "goldco": {
    id: "goldco",
    name: "Goldco",
    slug: "goldco",
    rating: 4.8,
    bbbRating: "A+",
    trustpilotRating: 4.8,
    reviewCount: 3241,
    founded: 2006,
    headquarters: "Woodland Hills, CA",
    ceo: "Trevor Gerszt",
    minInvestment: 25000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "SIMPLE IRA", "401(k) Rollover"],
    fees: {
      setup: 50,
      annual: 180,
      storage: 150,
    },
    metals: ["Gold", "Silver"],
    products: ["Coins", "Bars"],
    pros: [
      "Long track record since 2006",
      "Wide selection of IRA-eligible products",
      "Excellent customer reviews",
      "Free gold IRA kit",
      "Price protection guarantee",
    ],
    cons: [
      "Higher fees than some competitors",
      "$25,000 minimum investment",
      "Some complaints about follow-up calls",
    ],
    bestFor: "Investors who value an established track record and extensive product selection",
    description: "Goldco is one of the most established names in the Gold IRA industry, having served customers since 2006. They've built a strong reputation for customer service and have helped over 13,000 customers protect their retirement savings with precious metals.",
    shortDescription: "Established Gold IRA leader with 17+ years of experience and excellent reviews.",
    verdict: "Goldco is a trusted industry leader with a proven track record. Their slightly higher fees are justified by their experience and comprehensive service.",
    searchVolume: 5200,
    keywordDifficulty: 10,
    featured: false,
    rank: 3,
    affiliateLink: "https://goldco.com/free-kit/?affiliate_id=RICH_DAD",
    website: "https://www.goldco.com",
    highlight: "Most Recognized",
  },

  // #4 - Noble Gold (4,500 vol)
  "noble-gold": {
    id: "noble",
    name: "Noble Gold Investments",
    slug: "noble-gold",
    rating: 4.7,
    bbbRating: "A+",
    trustpilotRating: 4.9,
    reviewCount: 892,
    founded: 2016,
    headquarters: "Pasadena, CA",
    minInvestment: 20000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 80,
      annual: 150,
      storage: 150,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars"],
    pros: [
      "Unique Royal Survival Packs for home delivery",
      "No-fee IRA for first year (promotional)",
      "All four precious metals available",
      "Texas-based storage option available",
      "Excellent educational resources",
    ],
    cons: [
      "Newer company (founded 2016)",
      "Fewer customer reviews than competitors",
      "Limited international presence",
    ],
    bestFor: "Investors who want access to all four precious metals and unique product offerings",
    description: "Noble Gold stands out with their unique Royal Survival Packs and access to all four precious metals. Their Texas-based depository option appeals to investors who prefer domestic storage.",
    shortDescription: "Innovative Gold IRA company offering all four precious metals and unique survival packs.",
    verdict: "Noble Gold is an excellent choice for investors seeking variety. Their unique offerings and competitive fees make them a strong contender.",
    searchVolume: 4500,
    keywordDifficulty: 15,
    featured: false,
    rank: 4,
    affiliateLink: "https://noblegoldinvestments.com/gold-silver-ira-guide/?affiliate_id=RICH_DAD",
    website: "https://www.noblegoldinvestments.com",
    highlight: "Best Selection",
  },

  // #5 - Lear Capital (4,500 vol)
  "lear-capital": {
    id: "lear",
    name: "Lear Capital",
    slug: "lear-capital",
    rating: 4.5,
    bbbRating: "A+",
    trustpilotRating: 4.5,
    reviewCount: 1523,
    founded: 1997,
    headquarters: "Los Angeles, CA",
    minInvestment: 25000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 100,
      annual: 200,
      storage: 180,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars", "Collectibles"],
    pros: [
      "Longest track record (since 1997)",
      "Price advantage guarantee",
      "Real-time precious metals pricing",
      "24-hour risk-free purchase guarantee",
      "Free investor guide and market updates",
    ],
    cons: [
      "Higher fees overall",
      "Some complaints about aggressive sales",
      "Lawsuit history (settled)",
    ],
    bestFor: "Experienced investors who value longevity and real-time market data",
    description: "Lear Capital is one of the oldest precious metals dealers in the country, operating since 1997. They offer comprehensive market research and real-time pricing tools for informed investing.",
    shortDescription: "Industry veteran since 1997 with comprehensive market research tools.",
    verdict: "Lear Capital's experience is unmatched, but their higher fees and past legal issues may concern some investors.",
    searchVolume: 4500,
    keywordDifficulty: 21,
    featured: false,
    rank: 5,
    affiliateLink: "https://learcapital.com/?affiliate_id=RICH_DAD",
    website: "https://www.learcapital.com",
    highlight: "26+ Years",
  },

  // #6 - Birch Gold Group (3,100 vol)
  "birch-gold-group": {
    id: "birch",
    name: "Birch Gold Group",
    slug: "birch-gold-group",
    rating: 4.8,
    bbbRating: "A+",
    trustpilotRating: 4.8,
    reviewCount: 1087,
    founded: 2003,
    headquarters: "Burbank, CA",
    minInvestment: 10000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "SIMPLE IRA", "401(k) Rollover", "TSP"],
    fees: {
      setup: 50,
      annual: 150,
      storage: 150,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars"],
    pros: [
      "Lower minimum ($10,000)",
      "Ben Shapiro endorsement",
      "Specializes in 401(k) and TSP rollovers",
      "All four precious metals",
      "Strong educational content",
    ],
    cons: [
      "Celebrity endorsements may concern some",
      "Some reports of variable customer service",
      "Pricing not always the most competitive",
    ],
    bestFor: "401(k) and TSP holders looking to rollover with a reputable company",
    description: "Birch Gold Group has established itself as a trusted name in precious metals IRAs, particularly for 401(k) and TSP rollovers. Their educational approach and lower minimums make them accessible to a wide range of investors.",
    shortDescription: "Trusted Gold IRA company specializing in 401(k) and TSP rollovers.",
    verdict: "Birch Gold Group is a solid choice, especially for federal employees and those rolling over 401(k) accounts.",
    searchVolume: 3100,
    keywordDifficulty: 10,
    featured: false,
    rank: 6,
    affiliateLink: "https://www.birchgold.com/?affiliate_id=RICH_DAD",
    website: "https://www.birchgold.com",
    highlight: "TSP Specialist",
  },

  // #7 - Oxford Gold Group (2,100 vol)
  "oxford-gold-group": {
    id: "oxford",
    name: "Oxford Gold Group",
    slug: "oxford-gold-group",
    rating: 4.7,
    bbbRating: "A+",
    trustpilotRating: 4.7,
    reviewCount: 456,
    founded: 2017,
    headquarters: "Beverly Hills, CA",
    minInvestment: 15000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 0,
      annual: 175,
      storage: 150,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars"],
    pros: [
      "No setup fees",
      "All four precious metals",
      "Competitive pricing",
      "Fast account opening",
      "Good customer service reviews",
    ],
    cons: [
      "Newer company",
      "Smaller company with less resources",
      "Fewer educational materials",
    ],
    bestFor: "Investors seeking competitive pricing and no setup fees",
    description: "Oxford Gold Group offers a streamlined Gold IRA experience with no setup fees and access to all four precious metals.",
    shortDescription: "Newer Gold IRA company with no setup fees and competitive pricing.",
    verdict: "Oxford Gold Group is worth considering for their competitive pricing and fee structure.",
    searchVolume: 2100,
    keywordDifficulty: 3,
    featured: false,
    rank: 7,
    affiliateLink: "https://oxfordgoldgroup.com/?affiliate_id=RICH_DAD",
    website: "https://www.oxfordgoldgroup.com",
    highlight: "No Setup Fee",
  },

  // #8 - Rosland Capital (1,700 vol)
  "rosland-capital": {
    id: "rosland",
    name: "Rosland Capital",
    slug: "rosland-capital",
    rating: 4.4,
    bbbRating: "A",
    trustpilotRating: 4.3,
    reviewCount: 789,
    founded: 2008,
    headquarters: "Santa Monica, CA",
    minInvestment: 2000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 50,
      annual: 225,
      storage: 175,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars"],
    pros: [
      "Very low minimum ($2,000)",
      "Celebrity spokesperson (William Devane)",
      "All four precious metals",
      "Established since 2008",
    ],
    cons: [
      "Higher annual fees",
      "Mixed customer reviews",
      "Some complaints about sales pressure",
    ],
    bestFor: "Beginners with smaller budgets who want to start with precious metals",
    description: "Rosland Capital is known for their very low minimum investment requirement, making precious metals investing accessible to almost anyone.",
    shortDescription: "Accessible Gold IRA with industry-low $2,000 minimum investment.",
    verdict: "Rosland Capital is ideal for beginners, but their higher ongoing fees may eat into returns over time.",
    searchVolume: 1700,
    keywordDifficulty: 11,
    featured: false,
    rank: 8,
    affiliateLink: "https://www.roslandcapital.com/?affiliate_id=RICH_DAD",
    website: "https://www.roslandcapital.com",
    highlight: "Low Minimum",
  },

  // #9 - Priority Gold (1,600 vol)
  "priority-gold": {
    id: "priority",
    name: "Priority Gold",
    slug: "priority-gold",
    rating: 4.6,
    bbbRating: "A+",
    trustpilotRating: 4.6,
    reviewCount: 234,
    founded: 2015,
    headquarters: "Dallas, TX",
    minInvestment: 15000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 0,
      annual: 150,
      storage: 150,
    },
    metals: ["Gold", "Silver"],
    products: ["Coins", "Bars"],
    pros: [
      "No setup fees",
      "Texas-based company",
      "Competitive ongoing fees",
      "Good customer service",
    ],
    cons: [
      "Limited to gold and silver",
      "Smaller company",
      "Less brand recognition",
    ],
    bestFor: "Texas-based investors seeking a regional company with no setup fees",
    description: "Priority Gold offers a straightforward Gold IRA experience with no setup fees and competitive ongoing costs.",
    shortDescription: "Texas-based Gold IRA company with no setup fees.",
    verdict: "Priority Gold is a solid regional option, particularly for Texas investors.",
    searchVolume: 1600,
    keywordDifficulty: 2,
    featured: false,
    rank: 9,
    affiliateLink: "https://prioritygold.com/?affiliate_id=RICH_DAD",
    website: "https://www.prioritygold.com",
    highlight: "Texas Based",
  },

  // #10 - Advantage Gold (1,300 vol)
  "advantage-gold": {
    id: "advantage",
    name: "Advantage Gold",
    slug: "advantage-gold",
    rating: 4.5,
    bbbRating: "A+",
    trustpilotRating: 4.5,
    reviewCount: 567,
    founded: 2014,
    headquarters: "Los Angeles, CA",
    minInvestment: 25000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 50,
      annual: 175,
      storage: 150,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars"],
    pros: [
      "All four precious metals",
      "Educational approach",
      "Experienced account executives",
      "Good customer reviews",
    ],
    cons: [
      "$25,000 minimum",
      "Middle-of-the-road fees",
      "Less marketing presence",
    ],
    bestFor: "Investors seeking a balanced option with access to all precious metals",
    description: "Advantage Gold offers a comprehensive Gold IRA experience with access to all four precious metals and knowledgeable staff.",
    shortDescription: "Full-service Gold IRA with all four precious metals.",
    verdict: "Advantage Gold is a solid middle-ground choice with comprehensive offerings.",
    searchVolume: 1300,
    keywordDifficulty: 12,
    featured: false,
    rank: 10,
    affiliateLink: "https://advantagegold.com/?affiliate_id=RICH_DAD",
    website: "https://www.advantagegold.com",
    highlight: "All 4 Metals",
  },

  // #11 - Patriot Gold Group (1,000 vol)
  "patriot-gold-group": {
    id: "patriot",
    name: "Patriot Gold Group",
    slug: "patriot-gold-group",
    rating: 4.6,
    bbbRating: "A+",
    trustpilotRating: 4.7,
    reviewCount: 345,
    founded: 2016,
    headquarters: "Los Angeles, CA",
    minInvestment: 15000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 0,
      annual: 180,
      storage: 150,
    },
    metals: ["Gold", "Silver"],
    products: ["Coins", "Bars"],
    pros: [
      "No setup fees",
      "Deal directly with owners",
      "Personal service",
      "Competitive pricing",
    ],
    cons: [
      "Limited to gold and silver",
      "Smaller company",
      "Less brand recognition",
    ],
    bestFor: "Investors who prefer personal, boutique-style service",
    description: "Patriot Gold Group is a smaller company where clients often deal directly with the owners, providing a more personal experience.",
    shortDescription: "Boutique Gold IRA company with personalized owner-level service.",
    verdict: "Patriot Gold Group is ideal for those who value personal relationships over corporate structures.",
    searchVolume: 1000,
    keywordDifficulty: 11,
    featured: false,
    rank: 11,
    affiliateLink: "https://patriotgoldgroup.com/?affiliate_id=RICH_DAD",
    website: "https://www.patriotgoldgroup.com",
    highlight: "Boutique Service",
  },

  // #12 - Orion Metal Exchange (700 vol)
  "orion-metal-exchange": {
    id: "orion",
    name: "Orion Metal Exchange",
    slug: "orion-metal-exchange",
    rating: 4.4,
    bbbRating: "A",
    trustpilotRating: 4.4,
    reviewCount: 189,
    founded: 2017,
    headquarters: "Los Angeles, CA",
    minInvestment: 10000,
    accountTypes: ["Traditional IRA", "Roth IRA", "401(k) Rollover"],
    fees: {
      setup: 50,
      annual: 150,
      storage: 125,
    },
    metals: ["Gold", "Silver"],
    products: ["Coins", "Bars"],
    pros: [
      "Lower storage fees",
      "Competitive pricing",
      "Good customer service",
      "Lower minimum",
    ],
    cons: [
      "Newer company",
      "Limited product selection",
      "Less educational content",
    ],
    bestFor: "Cost-conscious investors seeking lower fees",
    description: "Orion Metal Exchange offers competitive pricing and lower storage fees than many competitors.",
    shortDescription: "Cost-effective Gold IRA with lower storage fees.",
    verdict: "Orion is worth considering for cost-conscious investors, but newer track record is a consideration.",
    searchVolume: 700,
    keywordDifficulty: 4,
    featured: false,
    rank: 12,
    affiliateLink: "https://orionmetalexchange.com/?affiliate_id=RICH_DAD",
    website: "https://www.orionmetalexchange.com",
    highlight: "Low Storage Fees",
  },

  // #13 - Blanchard Gold (500 vol)
  "blanchard-gold": {
    id: "blanchard",
    name: "Blanchard Gold",
    slug: "blanchard-gold",
    rating: 4.3,
    bbbRating: "A+",
    trustpilotRating: 4.2,
    reviewCount: 678,
    founded: 1975,
    headquarters: "New Orleans, LA",
    minInvestment: 10000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 100,
      annual: 200,
      storage: 175,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars", "Collectibles", "Rare Coins"],
    pros: [
      "Longest track record (since 1975)",
      "Rare and collectible coins",
      "Extensive educational resources",
      "Economic research department",
    ],
    cons: [
      "Higher fees",
      "Some focus on numismatics (controversial in IRAs)",
      "Older company culture",
    ],
    bestFor: "Collectors interested in rare and numismatic coins",
    description: "Blanchard Gold is the oldest precious metals dealer in this list, with nearly 50 years of experience. They're known for their rare coin selection and economic research.",
    shortDescription: "Historic dealer since 1975 specializing in rare and collectible coins.",
    verdict: "Blanchard is best for collectors, but standard IRA investors may find better value elsewhere.",
    searchVolume: 500,
    keywordDifficulty: 1,
    featured: false,
    rank: 13,
    affiliateLink: "https://www.blanchardgold.com/?affiliate_id=RICH_DAD",
    website: "https://www.blanchardgold.com",
    highlight: "Since 1975",
  },

  // #14 - Monetary Gold (450 vol)
  "monetary-gold": {
    id: "monetary",
    name: "Monetary Gold",
    slug: "monetary-gold",
    rating: 4.5,
    bbbRating: "A+",
    trustpilotRating: 4.6,
    reviewCount: 234,
    founded: 2000,
    headquarters: "Calabasas, CA",
    minInvestment: 10000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover"],
    fees: {
      setup: 0,
      annual: 150,
      storage: 150,
    },
    metals: ["Gold", "Silver", "Platinum"],
    products: ["Coins", "Bars"],
    pros: [
      "No setup fees",
      "Competitive annual fees",
      "Good track record",
      "Transparent pricing",
    ],
    cons: [
      "Smaller company",
      "Less brand recognition",
      "Limited palladium options",
    ],
    bestFor: "Investors seeking a no-setup-fee option with good track record",
    description: "Monetary Gold offers a straightforward Gold IRA experience with no setup fees and over 20 years in business.",
    shortDescription: "Established dealer since 2000 with no setup fees.",
    verdict: "Monetary Gold offers good value with their no-setup-fee structure and established reputation.",
    searchVolume: 450,
    keywordDifficulty: 3,
    featured: false,
    rank: 14,
    affiliateLink: "https://www.monetarygold.com/?affiliate_id=RICH_DAD",
    website: "https://www.monetarygold.com",
    highlight: "20+ Years",
  },

  // #15 - Regal Assets (200 vol)
  "regal-assets": {
    id: "regal",
    name: "Regal Assets",
    slug: "regal-assets",
    rating: 4.2,
    bbbRating: "A",
    trustpilotRating: 4.0,
    reviewCount: 1234,
    founded: 2009,
    headquarters: "Beverly Hills, CA",
    minInvestment: 10000,
    accountTypes: ["Traditional IRA", "Roth IRA", "SEP IRA", "401(k) Rollover", "Crypto IRA"],
    fees: {
      setup: 0,
      annual: 250,
      storage: 150,
    },
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
    products: ["Coins", "Bars", "Cryptocurrency"],
    pros: [
      "Crypto IRA option",
      "All four precious metals",
      "No setup fees",
      "Offshore storage options",
    ],
    cons: [
      "Higher annual fees",
      "Some regulatory concerns in past",
      "Crypto adds complexity/risk",
    ],
    bestFor: "Investors interested in combining precious metals with cryptocurrency",
    description: "Regal Assets is unique in offering both precious metals and cryptocurrency IRAs, appealing to diversified alternative investors.",
    shortDescription: "Alternative asset IRA combining precious metals and cryptocurrency.",
    verdict: "Regal Assets is for sophisticated investors comfortable with alternative assets including crypto.",
    searchVolume: 200,
    keywordDifficulty: 1,
    featured: false,
    rank: 15,
    affiliateLink: "https://www.regalassets.com/?affiliate_id=RICH_DAD",
    website: "https://www.regalassets.com",
    highlight: "Crypto IRA",
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies[slug];
}

export function getAllCompanies(): Company[] {
  return Object.values(companies).sort((a, b) => a.rank - b.rank);
}

export function getFeaturedCompany(): Company {
  return companies["augusta-precious-metals"];
}

export function getTopCompanies(limit: number = 5): Company[] {
  return getAllCompanies().slice(0, limit);
}

export function getCompanySlugs(): string[] {
  return Object.keys(companies);
}

// For comparison pages
export function getCompanyPair(slugA: string, slugB: string): [Company, Company] | null {
  const companyA = companies[slugA];
  const companyB = companies[slugB];
  if (!companyA || !companyB) return null;
  return [companyA, companyB];
}
