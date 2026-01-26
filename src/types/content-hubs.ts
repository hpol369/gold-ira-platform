// src/types/content-hubs.ts
// P1-001: Type definitions for new SEO content hubs
// Supports: widow-guide, medicaid-planning, grandchildren, senior-protection

import { FAQ, GoldBridge, IconColor } from './learn-article';

// ============================================
// HUB TYPES
// ============================================

export type ContentHubSlug =
  | 'widow-guide'
  | 'medicaid-planning'
  | 'grandchildren'
  | 'senior-protection'
  | 'wealthy-secrets'
  | 'kiyosaki';

export type HubArticleType =
  | 'guide'           // Educational content
  | 'checklist'       // Actionable list
  | 'comparison'      // X vs Y
  | 'calculator'      // Interactive tool
  | 'review'          // Product/service review
  | 'scenario';       // What-if fear content

// ============================================
// SECTION TYPES
// ============================================

export interface HubSection {
  id: string;
  icon: string; // lucide-react icon name
  iconColor: IconColor;
  title: string;
  content: string; // Can include markdown-style **bold**
  bullets?: string[];
  numberedList?: string[];
  table?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  };
  callout?: {
    type: 'tip' | 'warning' | 'info' | 'example';
    title: string;
    content: string;
  };
}

// ============================================
// BASE HUB ARTICLE
// ============================================

export interface HubArticle {
  // Identity
  slug: string;
  hubSlug: ContentHubSlug;
  title: string;
  subtitle: string;
  articleType: HubArticleType;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Keyword data (for tracking/prioritization)
  targetKeyword: string;
  volume?: number;
  difficulty?: number;
  cpc?: number;

  // Content structure
  heroIcon?: string;
  takeaways: string[]; // 5-8 key points
  tocItems: { id: string; label: string }[];
  sections: HubSection[];

  // Bridge to Gold IRA (required - conversion point)
  goldBridge: GoldBridge;

  // FAQ section (for schema markup)
  faqs: FAQ[];

  // Internal linking
  relatedArticles: string[];  // slugs within same hub
  relatedHubs?: string[];     // cross-hub links
  relatedTools?: string[];    // paths like "/tools/rmd-calculator"
  relatedGuides?: string[];   // paths like "/guide/gold-ira-guide"
}

// ============================================
// WIDOW'S GUIDE SPECIFIC
// ============================================

export interface WidowGuideArticle extends HubArticle {
  hubSlug: 'widow-guide';
  // Emotional support element
  emotionalNote?: {
    title: string;
    content: string;
  };
  // Timeline for action items
  timeline?: {
    period: string; // "First Week", "First Month", "First Year"
    tasks: string[];
  }[];
}

// ============================================
// MEDICAID PLANNING SPECIFIC
// ============================================

export interface MedicaidArticle extends HubArticle {
  hubSlug: 'medicaid-planning';
  // State-specific variations
  stateNotes?: {
    state: string;
    note: string;
  }[];
  // Asset classification
  assetTypes?: {
    countable: string[];
    exempt: string[];
  };
  // Planning strategies
  strategies?: {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
  }[];
}

// ============================================
// GRANDCHILDREN LEGACY SPECIFIC
// ============================================

export interface GrandchildrenArticle extends HubArticle {
  hubSlug: 'grandchildren';
  // Age-appropriate considerations
  ageConsiderations?: {
    ageRange: string;
    tips: string[];
  }[];
  // Gift tax implications
  taxImplications?: {
    scenario: string;
    taxTreatment: string;
  }[];
}

// ============================================
// SENIOR PROTECTION SPECIFIC
// ============================================

export interface SeniorProtectionArticle extends HubArticle {
  hubSlug: 'senior-protection';
  // Warning signs to watch
  warningSigns?: string[];
  // Action steps if victimized
  recoverySteps?: {
    step: number;
    title: string;
    description: string;
  }[];
  // Resources for help
  resources?: {
    name: string;
    phone?: string;
    website?: string;
    description: string;
  }[];
}

// ============================================
// WEALTHY SECRETS SPECIFIC
// ============================================

export interface WealthySecretsArticle extends HubArticle {
  hubSlug: 'wealthy-secrets';
  // Wealth statistics
  wealthStats?: {
    stat: string;
    source: string;
  }[];
  // Strategy breakdown
  wealthStrategies?: {
    name: string;
    usedBy: string; // "Ultra-wealthy", "Millionaires", etc.
    minimumRequired?: string;
    description: string;
  }[];
}

// ============================================
// KIYOSAKI SPECIFIC
// ============================================

export interface KiyosakiArticle extends HubArticle {
  hubSlug: 'kiyosaki';
  // Kiyosaki quote
  kiyosakiQuote?: {
    quote: string;
    source: string;
  };
  // Book references
  bookReferences?: {
    title: string;
    year: number;
    keyPoint: string;
  }[];
}

// ============================================
// HUB METADATA
// ============================================

export interface HubMeta {
  slug: ContentHubSlug;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: IconColor;
  basePath: string;
}

export const hubMeta: Record<ContentHubSlug, HubMeta> = {
  'widow-guide': {
    slug: 'widow-guide',
    title: "Widow's Financial Guide",
    subtitle: "Navigating finances after losing a spouse",
    description: "Compassionate guidance for managing money, benefits, and planning after the loss of a spouse.",
    icon: 'Heart',
    color: 'purple',
    basePath: '/widow-guide',
  },
  'medicaid-planning': {
    slug: 'medicaid-planning',
    title: "Medicaid Planning Guide",
    subtitle: "Protecting assets while qualifying for care",
    description: "Strategies to protect your assets and qualify for Medicaid long-term care coverage.",
    icon: 'Shield',
    color: 'blue',
    basePath: '/medicaid-planning',
  },
  'grandchildren': {
    slug: 'grandchildren',
    title: "Grandchildren Legacy Hub",
    subtitle: "Building wealth for future generations",
    description: "Smart ways to gift, save, and invest for your grandchildren's future.",
    icon: 'Gift',
    color: 'green',
    basePath: '/grandchildren',
  },
  'senior-protection': {
    slug: 'senior-protection',
    title: "Senior Protection Center",
    subtitle: "Protecting yourself from scams and exploitation",
    description: "Learn to identify and avoid financial scams targeting seniors and protect your assets.",
    icon: 'ShieldAlert',
    color: 'red',
    basePath: '/senior-protection',
  },
  'wealthy-secrets': {
    slug: 'wealthy-secrets',
    title: "Wealthy Investor Secrets",
    subtitle: "How the rich really invest",
    description: "Discover the investment strategies used by wealthy families and how you can apply them.",
    icon: 'Crown',
    color: 'amber',
    basePath: '/learn',
  },
  'kiyosaki': {
    slug: 'kiyosaki',
    title: "Rich Dad Strategy",
    subtitle: "Robert Kiyosaki's investment philosophy",
    description: "Understanding and applying the financial principles from Rich Dad Poor Dad.",
    icon: 'BookOpen',
    color: 'amber',
    basePath: '/rich-dad-strategy',
  },
};

// ============================================
// UTILITY TYPES
// ============================================

export type AnyHubArticle =
  | WidowGuideArticle
  | MedicaidArticle
  | GrandchildrenArticle
  | SeniorProtectionArticle
  | WealthySecretsArticle
  | KiyosakiArticle;

// Registry type for article lookups
export type HubArticleRegistry<T extends HubArticle = HubArticle> = Record<string, T>;
