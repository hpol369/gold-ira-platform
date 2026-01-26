// src/types/tool.ts
// P1-002: Interactive tool interfaces

export type ToolCategory = 'calculator' | 'analyzer' | 'quiz';

export interface ToolMeta {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  category: ToolCategory;
  icon: string; // lucide-react icon name
  primaryKeyword: string;
  volume?: number;
  difficulty?: number;
  isPopular?: boolean;
  relatedArticles: string[];
}

// Registry of all tools
export const toolRegistry: ToolMeta[] = [
  {
    slug: 'rmd-calculator',
    name: 'RMD Calculator',
    shortName: 'RMD Calc',
    description: 'Calculate your Required Minimum Distribution based on IRS tables',
    category: 'calculator',
    icon: 'Calculator',
    primaryKeyword: 'required minimum distribution calculator',
    volume: 2300,
    difficulty: 51,
    isPopular: true,
    relatedArticles: ['can-i-reinvest-my-rmd', 'rmd-penalty-if-i-forget', 'what-if-i-miss-rmd-deadline'],
  },
  {
    slug: '401k-risk-analyzer',
    name: '401k Risk Analyzer',
    shortName: 'Risk Analyzer',
    description: 'Analyze your 401k exposure to market crashes',
    category: 'analyzer',
    icon: 'Shield',
    primaryKeyword: '401k risk',
    isPopular: true,
    relatedArticles: ['why-did-my-401k-drop-so-much', '401k-lost-20-percent-what-do-i-do'],
  },
  {
    slug: 'crash-simulator',
    name: 'Crash Simulator',
    shortName: 'Crash Sim',
    description: 'See how a market crash would affect your retirement savings',
    category: 'analyzer',
    icon: 'TrendingDown',
    primaryKeyword: 'market crash retirement',
    relatedArticles: ['should-i-move-401k-before-market-crash'],
  },
  {
    slug: 'fees-comparison',
    name: 'Fees Comparison Tool',
    shortName: 'Fees Compare',
    description: 'Compare Gold IRA company fees side-by-side',
    category: 'calculator',
    icon: 'DollarSign',
    primaryKeyword: '401k fees',
    relatedArticles: ['401k-fees-eating-my-retirement', 'high-401k-fees-what-to-do'],
  },
  {
    slug: 'retirement-calculator',
    name: 'Retirement Calculator',
    shortName: 'Retire Calc',
    description: 'Calculate if you have enough to retire',
    category: 'calculator',
    icon: 'PiggyBank',
    primaryKeyword: 'can i retire calculator',
    volume: 1600,
    isPopular: true,
    relatedArticles: ['is-200k-enough-to-retire-at-62', 'am-i-on-track-for-retirement-at-50'],
  },
  {
    slug: 'roth-conversion-calculator',
    name: 'Roth Conversion Calculator',
    shortName: 'Roth Calc',
    description: 'Calculate the tax impact of converting to Roth',
    category: 'calculator',
    icon: 'ArrowRightLeft',
    primaryKeyword: '401k to roth conversion calculator',
    volume: 200,
    difficulty: 24,
    relatedArticles: ['should-i-convert-401k-to-roth-at-60', 'roth-conversion-tax-bomb-explained'],
  },
  {
    slug: 'unvested-401k-calculator',
    name: 'Unvested 401k Calculator',
    shortName: 'Vesting Calc',
    description: 'Calculate what you lose by leaving before fully vested',
    category: 'calculator',
    icon: 'Clock',
    primaryKeyword: 'what happens to unvested 401k',
    volume: 50,
    difficulty: 1,
    relatedArticles: ['what-happens-to-unvested-401k', 'leaving-job-before-401k-vested'],
  },
];

// Helper functions
export function getToolBySlug(slug: string): ToolMeta | undefined {
  return toolRegistry.find(t => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolMeta[] {
  return toolRegistry.filter(t => t.category === category);
}

export function getPopularTools(): ToolMeta[] {
  return toolRegistry.filter(t => t.isPopular);
}

export function getAllToolSlugs(): string[] {
  return toolRegistry.map(t => t.slug);
}
