// src/types/learn-article.ts
// P1-001: LearnArticle interface for data-driven learn pages
// Matches patterns from scenarios.ts and existing learn pages

export type ArticleCategory =
  | 'safety'        // Is my money safe? (Fidelity, Vanguard, SIPC, FDIC)
  | 'rmd'           // RMD questions (inherited, penalties, reinvest)
  | 'life-events'   // Laid off, divorce, death, vesting
  | 'loans'         // 401k loans & hardship withdrawals
  | 'fees'          // Fee complaints, bad plans
  | 'roth'          // Roth conversion questions
  | 'market-fear'   // Crash worries, timing
  | 'target-date'   // TDF confusion
  | 'enrollment'    // HR issues, contributions
  | 'protection';   // Creditor/government protection

export type ThreatLevel = 'info' | 'warning' | 'critical';

export type IconColor =
  | 'red'
  | 'amber'
  | 'green'
  | 'blue'
  | 'purple'
  | 'slate';

export interface ArticleSection {
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
    type: 'info' | 'warning' | 'tip' | 'example';
    title: string;
    content: string;
  };
}

export interface WarningBox {
  title: string;
  content: string;
  type: 'red' | 'amber' | 'blue' | 'green';
}

export interface ActionStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GoldBridge {
  title: string;
  content: string;
  bullets: string[];
}

export interface LearnArticle {
  // Identity
  slug: string;
  title: string;
  subtitle: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Keyword data (for tracking/prioritization)
  targetKeyword: string;
  volume?: number;
  difficulty?: number;
  cpc?: number;

  // Classification
  category: ArticleCategory;
  threatLevel: ThreatLevel;

  // Content structure
  takeaways: string[]; // 5-8 key points for KeyTakeaways component
  tocItems: { id: string; label: string }[];
  sections: ArticleSection[];

  // Optional enhanced content
  warningBox?: WarningBox;
  actionSteps?: ActionStep[];

  // Bridge to Gold IRA (required - our conversion point)
  goldBridge: GoldBridge;

  // FAQ section (for schema markup)
  faqs: FAQ[];

  // Internal linking
  relatedArticles: string[]; // slugs of related learn articles
  relatedGuides: string[];   // paths like "/guide/gold-ira-guide"
  relatedTools?: string[];   // paths like "/tools/rmd-calculator"
}

// Helper type for the article registry
export type LearnArticleRegistry = Record<string, LearnArticle>;

// Category metadata for display
export const categoryMeta: Record<ArticleCategory, { label: string; color: IconColor; description: string }> = {
  'safety': {
    label: 'Account Safety',
    color: 'red',
    description: 'Is your retirement money protected?'
  },
  'rmd': {
    label: 'RMD & Distributions',
    color: 'amber',
    description: 'Required Minimum Distribution questions'
  },
  'life-events': {
    label: 'Life Events',
    color: 'blue',
    description: 'Job changes, divorce, inheritance'
  },
  'loans': {
    label: '401k Loans',
    color: 'purple',
    description: 'Borrowing from your retirement'
  },
  'fees': {
    label: 'Fees & Costs',
    color: 'amber',
    description: 'Hidden costs eating your returns'
  },
  'roth': {
    label: 'Roth Conversion',
    color: 'green',
    description: 'Tax planning strategies'
  },
  'market-fear': {
    label: 'Market Concerns',
    color: 'red',
    description: 'Crashes, timing, volatility'
  },
  'target-date': {
    label: 'Target Date Funds',
    color: 'blue',
    description: 'Understanding your default investment'
  },
  'enrollment': {
    label: 'Enrollment & HR',
    color: 'slate',
    description: 'Workplace 401k issues'
  },
  'protection': {
    label: 'Asset Protection',
    color: 'green',
    description: 'Creditors, bankruptcy, legal'
  },
};

// Threat level metadata
export const threatLevelMeta: Record<ThreatLevel, { label: string; color: string; bgColor: string }> = {
  'info': {
    label: 'Information',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20 border-blue-500/30'
  },
  'warning': {
    label: 'Warning',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20 border-amber-500/30'
  },
  'critical': {
    label: 'Critical',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20 border-red-500/30'
  },
};
