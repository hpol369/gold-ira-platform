/**
 * Maps article slugs to email content themes for personalized nurture sequences.
 * Reuses cluster patterns from contextual-ctas.ts.
 */

export interface TopicTheme {
  /** The matched cluster key */
  cluster: string;
  /** One of 8 theme buckets for email content selection */
  theme: EmailTheme;
  /** Human-readable display name for the topic */
  displayName: string;
}

export type EmailTheme =
  | "pension"
  | "401k-rollover"
  | "tax-rmd"
  | "market-protection"
  | "fees-comparison"
  | "silver"
  | "healthcare"
  | "general";

const SLUG_PATTERNS: [RegExp, string, EmailTheme, string][] = [
  // [pattern, cluster, theme, displayName]
  // Pension & Government
  [/calpers/, "calpers", "pension", "CalPERS Retirement"],
  [/railroad/, "railroad", "pension", "Railroad Retirement"],
  [/federal|fers|tsp/, "federal", "pension", "Federal Retirement"],
  [/veteran|military|va-/, "veterans", "pension", "Veterans Benefits"],
  [/state.*pension|pension.*state/, "state-pensions", "pension", "State Pensions"],
  [/wep|gpo|windfall.*elimination/, "wep-gpo", "pension", "WEP/GPO"],

  // 401k & Rollovers
  [/401k|401\(k\)|rollover/, "401k-rollover", "401k-rollover", "401(k) Rollovers"],
  [/voya/, "voya", "401k-rollover", "Voya 401(k)"],
  [/60.day/, "60-day", "401k-rollover", "IRA Rollover Rules"],

  // Tax & RMD
  [/rmd|required.*minimum/, "rmd", "tax-rmd", "RMD Planning"],
  [/roth/, "roth", "tax-rmd", "Roth IRA Strategy"],
  [/tax|contribution|deduct/, "tax", "tax-rmd", "Retirement Tax Planning"],

  // Market Protection
  [/crash|recession|depression/, "crash-proof", "market-protection", "Market Protection"],
  [/market.*fear|bear.*market|stock.*drop/, "market-fear", "market-protection", "Market Protection"],
  [/protect|inflation|hedge/, "protection", "market-protection", "Inflation Protection"],
  [/fire.*movement|early.*retire/, "fire", "market-protection", "FIRE Movement"],

  // Fees & Comparison
  [/fee|cost.*compare/, "fees", "fees-comparison", "Gold IRA Fees"],
  [/compar|best.*gold|review/, "comparison", "fees-comparison", "Company Comparison"],
  [/scam|fraud|avoid/, "scam", "fees-comparison", "Scam Prevention"],
  [/custodian/, "custodian", "fees-comparison", "IRA Custodians"],

  // Silver
  [/silver|comex/, "silver", "silver", "Silver Investing"],

  // Healthcare
  [/medicare|health.*care|nursing/, "healthcare", "healthcare", "Healthcare Costs"],
  [/senior.*care|assisted.*living|life.*alert/, "senior-care", "healthcare", "Senior Care Planning"],
  [/medicaid/, "medicaid", "healthcare", "Medicaid Planning"],

  // Life Events & Other
  [/inherit|estate|beneficiary/, "inheritance", "general", "Estate Planning"],
  [/laid.*off|layoff|job.*loss/, "layoff", "401k-rollover", "Career Transition"],
  [/couple|spouse|married/, "couples", "general", "Couples Retirement"],
  [/annuit/, "annuity", "fees-comparison", "Annuity Alternatives"],
];

const DEFAULT_THEME: TopicTheme = {
  cluster: "general",
  theme: "general",
  displayName: "Retirement Planning",
};

/**
 * Resolves a slug (from newsletter signup source) to a topic theme.
 * Used to personalize emails 0-2 in the content-nurture sequence.
 */
export function resolveTopicTheme(slug: string): TopicTheme {
  if (!slug) return DEFAULT_THEME;

  const cleanSlug = slug.toLowerCase().replace(/^\/?(learn|guide|news)\//, "");

  for (const [pattern, cluster, theme, displayName] of SLUG_PATTERNS) {
    if (pattern.test(cleanSlug)) {
      return { cluster, theme, displayName };
    }
  }

  return DEFAULT_THEME;
}

/**
 * Get theme from metadata (used in email buildHtml functions).
 */
export function getThemeFromMetadata(metadata?: Record<string, unknown>): TopicTheme {
  const topicSlug = (metadata?.topicSlug as string) || "";
  return resolveTopicTheme(topicSlug);
}
