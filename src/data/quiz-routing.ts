/**
 * Quiz Routing Configuration
 *
 * This module provides the routing logic for the Universal Quiz System.
 * It maps user selections (product type + budget) to recommended companies.
 */

import { AFFILIATE_LINKS } from '@/config/affiliates';

// ============================================
// TYPE DEFINITIONS
// ============================================

export type ProductType =
  | 'gold-ira'
  | 'silver-ira'
  | 'crypto-ira'
  | 'self-directed-ira'
  | 'real-estate-ira'
  | 'robs-401k'
  | 'solo-401k';

export type BudgetRange =
  | 'under-25k'
  | '25k-50k'
  | '50k-100k'
  | '100k-500k'
  | '500k-plus';

// ============================================
// PRODUCT TYPE METADATA
// ============================================

export interface ProductTypeMetadata {
  label: string;
  icon: string; // Lucide icon name
  description: string;
  color: 'amber' | 'slate' | 'orange' | 'green' | 'teal' | 'purple' | 'blue';
}

export const productTypes: Record<ProductType, ProductTypeMetadata> = {
  'gold-ira': {
    label: 'Precious Metals IRA',
    icon: 'Coins',
    description: 'Protect savings with physical gold & silver',
    color: 'amber',
  },
  'silver-ira': {
    label: 'Silver IRA',
    icon: 'CircleDollarSign',
    description: 'Diversify with physical silver investments',
    color: 'slate',
  },
  'crypto-ira': {
    label: 'Crypto IRA',
    icon: 'Bitcoin',
    description: 'Tax-advantaged Bitcoin & crypto investing',
    color: 'orange',
  },
  'self-directed-ira': {
    label: 'Self-Directed IRA',
    icon: 'Compass',
    description: 'Full control over alternative investments',
    color: 'green',
  },
  'real-estate-ira': {
    label: 'Real Estate IRA',
    icon: 'Building2',
    description: 'Invest in property with retirement funds',
    color: 'teal',
  },
  'robs-401k': {
    label: 'ROBS 401(k)',
    icon: 'Store',
    description: 'Use retirement funds to start a business',
    color: 'orange',
  },
  'solo-401k': {
    label: 'Solo 401(k)',
    icon: 'Briefcase',
    description: 'Maximize retirement savings for self-employed',
    color: 'purple',
  },
};

// ============================================
// BUDGET RANGE METADATA
// ============================================

export interface BudgetRangeMetadata {
  label: string;
  description: string;
  minValue: number;
  maxValue: number | null; // null for 500k+
}

export const budgetRanges: Record<BudgetRange, BudgetRangeMetadata> = {
  'under-25k': {
    label: 'Under $25,000',
    description: 'Starting investment',
    minValue: 0,
    maxValue: 25000,
  },
  '25k-50k': {
    label: '$25,000 - $50,000',
    description: 'Moderate investment',
    minValue: 25000,
    maxValue: 50000,
  },
  '50k-100k': {
    label: '$50,000 - $100,000',
    description: 'Significant investment',
    minValue: 50000,
    maxValue: 100000,
  },
  '100k-500k': {
    label: '$100,000 - $500,000',
    description: 'Substantial portfolio',
    minValue: 100000,
    maxValue: 500000,
  },
  '500k-plus': {
    label: '$500,000+',
    description: 'High-value portfolio',
    minValue: 500000,
    maxValue: null,
  },
};

// ============================================
// COMPANY RECOMMENDATIONS
// ============================================

export interface CompanyRecommendation {
  id: string;
  name: string;
  affiliateKey: keyof typeof AFFILIATE_LINKS;
  minInvestment: string;
  highlights: string[];
  bestFor: string;
  logo?: string;
}

// Company database
export const companies: Record<string, CompanyRecommendation> = {
  // Gold/Silver IRA Companies
  augusta: {
    id: 'augusta',
    name: 'Augusta Precious Metals',
    affiliateKey: 'augusta',
    minInvestment: '$50,000',
    highlights: [
      'Best-in-class customer education',
      'Zero fees for up to 10 years',
      'A+ BBB rating & 4.97 TrustPilot score',
      'Lifetime customer support',
    ],
    bestFor: 'High-value investors seeking premium service',
    logo: '/images/companies/augusta-logo.png',
  },
  goldco: {
    id: 'goldco',
    name: 'Goldco',
    affiliateKey: 'goldco',
    minInvestment: '$25,000',
    highlights: [
      'Industry leader since 2006',
      'Celebrity endorsed (Sean Hannity)',
      'Free precious metals on qualifying accounts',
      'Excellent buyback program',
    ],
    bestFor: 'Mid-range investors wanting established company',
    logo: '/images/companies/goldco-logo.png',
  },
  americanHartford: {
    id: 'americanHartford',
    name: 'American Hartford Gold',
    affiliateKey: 'americanHartford',
    minInvestment: '$10,000',
    highlights: [
      'Low minimum investment',
      'Price match guarantee',
      'Free silver on first order',
      'Family-owned business',
    ],
    bestFor: 'Value-conscious investors',
    logo: '/images/companies/american-hartford-logo.png',
  },
  noble: {
    id: 'noble',
    name: 'Noble Gold Investments',
    affiliateKey: 'noble',
    minInvestment: '$2,000',
    highlights: [
      'Lowest minimum in the industry',
      'Texas-based depository option',
      'Royal Survival Packs for home storage',
      'Fast account setup',
    ],
    bestFor: 'First-time gold investors with smaller budgets',
    logo: '/images/companies/noble-gold-logo.png',
  },
  birch: {
    id: 'birch',
    name: 'Birch Gold Group',
    affiliateKey: 'birch',
    minInvestment: '$10,000',
    highlights: [
      'Strong educational resources',
      'Transparent fee structure',
      'Multiple storage options',
      'Excellent customer reviews',
    ],
    bestFor: 'Education-focused investors',
    logo: '/images/companies/birch-logo.png',
  },

  // Crypto IRA Companies
  itrustcapital: {
    id: 'itrustcapital',
    name: 'iTrustCapital',
    affiliateKey: 'itrustcapital',
    minInvestment: '$1,000',
    highlights: [
      '24/7 trading platform',
      'No monthly fees',
      '30+ cryptocurrencies available',
      'Physical gold option included',
    ],
    bestFor: 'Active crypto traders wanting IRA benefits',
    logo: '/images/companies/itrustcapital-logo.png',
  },
  altoIra: {
    id: 'altoIra',
    name: 'Alto IRA',
    affiliateKey: 'altoIra',
    minInvestment: '$10',
    highlights: [
      'Ultra-low minimums',
      'Crypto + alternative investments',
      'Modern mobile app',
      'Low monthly fees',
    ],
    bestFor: 'Beginners wanting crypto exposure',
    logo: '/images/companies/alto-ira-logo.png',
  },
  bitcoinIra: {
    id: 'bitcoinIra',
    name: 'Bitcoin IRA',
    affiliateKey: 'bitcoinIra',
    minInvestment: '$3,000',
    highlights: [
      'Pioneer in crypto IRAs (since 2016)',
      '60+ cryptocurrencies',
      'Insurance up to $700M',
      'White-glove service',
    ],
    bestFor: 'Security-focused crypto investors',
    logo: '/images/companies/bitcoin-ira-logo.png',
  },

  // Self-Directed IRA Custodians
  rocketDollar: {
    id: 'rocketDollar',
    name: 'Rocket Dollar',
    affiliateKey: 'rocketDollar',
    minInvestment: '$0',
    highlights: [
      'Checkbook control',
      'Fast account setup (2 weeks)',
      'Flat monthly fee ($15-$30)',
      'Unlimited investments',
    ],
    bestFor: 'Self-directed investors wanting checkbook control',
    logo: '/images/companies/rocket-dollar-logo.png',
  },
  equityTrust: {
    id: 'equityTrust',
    name: 'Equity Trust',
    affiliateKey: 'equityTrust',
    minInvestment: '$0',
    highlights: [
      '50+ years experience',
      'Full-service custodian',
      'Real estate expertise',
      'Educational webinars',
    ],
    bestFor: 'Real estate IRA investors',
    logo: '/images/companies/equity-trust-logo.png',
  },
  entrust: {
    id: 'entrust',
    name: 'The Entrust Group',
    affiliateKey: 'entrust',
    minInvestment: '$0',
    highlights: [
      '40+ years in business',
      'Wide asset selection',
      'Online account management',
      'IRA-to-IRA transfers',
    ],
    bestFor: 'Experienced alternative investors',
    logo: '/images/companies/entrust-logo.png',
  },
  directedIra: {
    id: 'directedIra',
    name: 'Directed IRA',
    affiliateKey: 'directedIra',
    minInvestment: '$0',
    highlights: [
      'Checkbook IRA option',
      'Real estate & private equity',
      'Solo 401(k) plans',
      'IRA LLC setup assistance',
    ],
    bestFor: 'Alternative investment enthusiasts',
    logo: '/images/companies/directed-ira-logo.png',
  },

  // ROBS 401(k) Providers
  guidantFinancial: {
    id: 'guidantFinancial',
    name: 'Guidant Financial',
    affiliateKey: 'guidantFinancial',
    minInvestment: '$50,000',
    highlights: [
      'Industry leader in ROBS',
      '18,000+ businesses funded',
      'Full compliance support',
      'Business coaching included',
    ],
    bestFor: 'Entrepreneurs using retirement funds for business',
    logo: '/images/companies/guidant-logo.png',
  },
  benetrends: {
    id: 'benetrends',
    name: 'Benetrends',
    affiliateKey: 'benetrends',
    minInvestment: '$50,000',
    highlights: [
      'Pioneer of ROBS (since 1983)',
      'IRS audit protection',
      'Franchise specialists',
      'Ongoing compliance support',
    ],
    bestFor: 'Franchise buyers with retirement funds',
    logo: '/images/companies/benetrends-logo.png',
  },
};

// ============================================
// ROUTING LOGIC
// ============================================

interface RoutingResult {
  primary: CompanyRecommendation;
  alternatives: CompanyRecommendation[];
}

/**
 * Get recommended company based on product type and budget
 *
 * Routing Logic:
 * - Gold IRA + $100k+ -> Augusta
 * - Gold IRA + $50k-100k -> Goldco
 * - Gold IRA + $25k-50k -> American Hartford
 * - Gold IRA + <$25k -> Noble Gold
 * - Silver IRA (same as Gold IRA)
 * - Crypto IRA (any) -> iTrustCapital (alt: Alto IRA)
 * - ROBS 401k (any) -> Guidant Financial (alt: Benetrends)
 * - Self-Directed IRA -> Rocket Dollar
 * - Real Estate IRA -> Equity Trust
 * - Solo 401k -> Rocket Dollar
 */
export function getRecommendedCompany(
  productType: ProductType,
  budget: BudgetRange
): RoutingResult {
  switch (productType) {
    case 'gold-ira':
    case 'silver-ira':
      return getGoldIRARecommendation(budget);

    case 'crypto-ira':
      return {
        primary: companies.itrustcapital,
        alternatives: [companies.altoIra, companies.bitcoinIra],
      };

    case 'robs-401k':
      return {
        primary: companies.guidantFinancial,
        alternatives: [companies.benetrends],
      };

    case 'self-directed-ira':
      return {
        primary: companies.rocketDollar,
        alternatives: [companies.equityTrust, companies.directedIra],
      };

    case 'real-estate-ira':
      return {
        primary: companies.equityTrust,
        alternatives: [companies.entrust, companies.directedIra],
      };

    case 'solo-401k':
      return {
        primary: companies.rocketDollar,
        alternatives: [companies.directedIra],
      };

    default:
      // Default to gold IRA recommendation
      return getGoldIRARecommendation(budget);
  }
}

/**
 * Get gold IRA recommendation based on budget
 */
function getGoldIRARecommendation(budget: BudgetRange): RoutingResult {
  switch (budget) {
    case '500k-plus':
    case '100k-500k':
      return {
        primary: companies.augusta,
        alternatives: [companies.goldco, companies.birch],
      };

    case '50k-100k':
      return {
        primary: companies.goldco,
        alternatives: [companies.augusta, companies.americanHartford],
      };

    case '25k-50k':
      return {
        primary: companies.americanHartford,
        alternatives: [companies.goldco, companies.noble],
      };

    case 'under-25k':
      return {
        primary: companies.noble,
        alternatives: [companies.americanHartford],
      };

    default:
      return {
        primary: companies.augusta,
        alternatives: [companies.goldco],
      };
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get the affiliate link for a company
 */
export function getCompanyAffiliateLink(company: CompanyRecommendation): string {
  return AFFILIATE_LINKS[company.affiliateKey];
}

/**
 * Get all product types as an array for iteration
 */
export function getAllProductTypes(): { type: ProductType; metadata: ProductTypeMetadata }[] {
  return (Object.keys(productTypes) as ProductType[]).map((type) => ({
    type,
    metadata: productTypes[type],
  }));
}

/**
 * Get all budget ranges as an array for iteration
 */
export function getAllBudgetRanges(): { range: BudgetRange; metadata: BudgetRangeMetadata }[] {
  return (Object.keys(budgetRanges) as BudgetRange[]).map((range) => ({
    range,
    metadata: budgetRanges[range],
  }));
}

/**
 * Validate if a string is a valid ProductType
 */
export function isValidProductType(value: string): value is ProductType {
  return Object.keys(productTypes).includes(value as ProductType);
}

/**
 * Validate if a string is a valid BudgetRange
 */
export function isValidBudgetRange(value: string): value is BudgetRange {
  return Object.keys(budgetRanges).includes(value as BudgetRange);
}

/**
 * Get product color class for styling
 */
export function getProductColorClasses(productType: ProductType): {
  bg: string;
  text: string;
  border: string;
  gradient: string;
} {
  const color = productTypes[productType].color;

  const colorMap: Record<ProductTypeMetadata['color'], { bg: string; text: string; border: string; gradient: string }> = {
    amber: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-500/30',
      gradient: 'from-amber-500/20 to-amber-600/5',
    },
    slate: {
      bg: 'bg-slate-500/10',
      text: 'text-slate-300',
      border: 'border-slate-500/30',
      gradient: 'from-slate-500/20 to-slate-600/5',
    },
    orange: {
      bg: 'bg-orange-500/10',
      text: 'text-orange-400',
      border: 'border-orange-500/30',
      gradient: 'from-orange-500/20 to-orange-600/5',
    },
    green: {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      border: 'border-green-500/30',
      gradient: 'from-green-500/20 to-green-600/5',
    },
    teal: {
      bg: 'bg-teal-500/10',
      text: 'text-teal-400',
      border: 'border-teal-500/30',
      gradient: 'from-teal-500/20 to-teal-600/5',
    },
    purple: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      gradient: 'from-purple-500/20 to-purple-600/5',
    },
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      gradient: 'from-blue-500/20 to-blue-600/5',
    },
  };

  return colorMap[color];
}
