/**
 * Editorial publishing schedule
 *
 * Articles are deployed but gated with noindex until their publish date.
 * Sitemap only includes articles whose date has passed.
 * Pages revalidate daily via ISR so they go live automatically.
 *
 * Schedule: 2 articles per week (Tuesday + Thursday) over ~8 weeks.
 * Sequenced for topical authority building (foundations → segments → commercial).
 */

export interface ScheduledArticle {
  slug: string;
  publishDate: string; // ISO date string YYYY-MM-DD
  title: string;
  phase: "foundations" | "segments" | "commercial";
}

export const editorialSchedule: ScheduledArticle[] = [
  // PHASE 1: Foundations (Week 1-3) — build the knowledge graph
  { slug: "how-much-gold-in-retirement-portfolio", publishDate: "2026-04-17", title: "How Much Gold Should Be in a Retirement Portfolio at 55+?", phase: "foundations" },
  { slug: "gold-ira-vs-physical-gold-at-home", publishDate: "2026-04-22", title: "Gold IRA vs. Physical Gold at Home", phase: "foundations" },
  { slug: "gold-ira-fees-explained", publishDate: "2026-04-24", title: "Gold IRA Fees Explained", phase: "foundations" },
  { slug: "401k-to-gold-ira-tax-rules", publishDate: "2026-04-29", title: "401(k) to Gold IRA Tax Rules", phase: "foundations" },
  { slug: "best-age-to-open-gold-ira", publishDate: "2026-05-01", title: "Best Age to Open a Gold IRA", phase: "foundations" },
  { slug: "gold-ira-rmd-rules", publishDate: "2026-05-06", title: "Gold IRA RMD Rules After Age 73", phase: "foundations" },
  { slug: "can-you-lose-money-in-a-gold-ira", publishDate: "2026-05-08", title: "Can You Lose Money in a Gold IRA?", phase: "foundations" },

  // PHASE 2: Segments + Trust (Week 4-6) — audience relevance + credibility
  { slug: "gold-ira-for-truck-drivers", publishDate: "2026-05-13", title: "Gold IRA for Truck Drivers Near Retirement", phase: "segments" },
  { slug: "gold-ira-for-nurses", publishDate: "2026-05-15", title: "Gold IRA for Nurses Over 55", phase: "segments" },
  { slug: "signs-gold-ira-company-not-reputable", publishDate: "2026-05-20", title: "9 Signs a Gold IRA Company Is Not Reputable", phase: "segments" },
  { slug: "gold-ira-vs-silver-ira-for-retirement", publishDate: "2026-05-22", title: "Gold IRA vs. Silver IRA for Retirement", phase: "segments" },
  { slug: "is-gold-a-good-hedge-against-inflation-in-retirement", publishDate: "2026-05-27", title: "Is Gold a Good Hedge Against Inflation?", phase: "segments" },

  // PHASE 3: Commercial-assist (Week 7-8) — conversion support
  { slug: "when-a-gold-ira-does-not-make-sense", publishDate: "2026-05-29", title: "7 Situations Where a Gold IRA Does Not Make Sense", phase: "commercial" },
  { slug: "gold-ira-rollover-checklist", publishDate: "2026-06-03", title: "Gold IRA Rollover Checklist", phase: "commercial" },
  { slug: "how-to-compare-gold-ira-companies", publishDate: "2026-06-05", title: "How to Compare Gold IRA Companies", phase: "commercial" },
];

/**
 * Check if an article is published (publish date has passed)
 */
export function isPublished(slug: string): boolean {
  const article = editorialSchedule.find((a) => a.slug === slug);
  if (!article) return true; // Not scheduled = always published
  return new Date(article.publishDate) <= new Date();
}

/**
 * Get all published editorial slugs (for sitemap)
 */
export function getPublishedEditorialSlugs(): string[] {
  const now = new Date();
  return editorialSchedule
    .filter((a) => new Date(a.publishDate) <= now)
    .map((a) => a.slug);
}

/**
 * Get all editorial slugs (for generateStaticParams)
 */
export function getAllEditorialSlugs(): string[] {
  return editorialSchedule.map((a) => a.slug);
}

/**
 * Get publish date for an article
 */
export function getPublishDate(slug: string): string | null {
  const article = editorialSchedule.find((a) => a.slug === slug);
  return article?.publishDate ?? null;
}
