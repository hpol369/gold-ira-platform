// src/data/learn-articles/index.ts
// P1-005: Article registry - central export for all learn articles

import { LearnArticle, LearnArticleRegistry, ArticleCategory } from '@/types/learn-article';

// Import cluster data files
import { safetyArticles } from './safety-cluster';
import { rmdArticles } from './rmd-cluster';
import { lifeEventsArticles } from './life-events-cluster';
import { loansArticles } from './loans-cluster';
import { feesArticles } from './fees-cluster';
import { rothArticles } from './roth-cluster';
import { marketFearArticles } from './market-fear-cluster';
import { targetDateArticles } from './target-date-cluster';
import { enrollmentArticles } from './enrollment-cluster';
import { protectionArticles } from './protection-cluster';
import { miscArticles } from './misc-cluster';
import { zeroDifficultyArticles } from './zero-difficulty-cluster';
import { retirementIraArticles } from './retirement-ira-cluster';
import { superEasyArticles } from './super-easy-cluster';
import { superEasyArticles2 } from './super-easy-cluster-2';
import { easyWinsArticles } from './easy-wins-cluster';
import { technicalRetirementArticles } from './technical-retirement-cluster';
import { company401kArticles } from './company-401k-cluster';
import { statePensionsArticles } from './state-pensions-cluster';
import { wepGpoArticles } from './wep-gpo-cluster';
import { railroadRetirementArticles } from './railroad-retirement-cluster';
import { federalRetirementArticles } from './federal-retirement-cluster';
import { seppArticles } from './72t-sepp-cluster';
import { technicalExpansionArticles } from './technical-expansion-cluster';
import { annuityArticles } from './annuity-cluster';
import { miscExpansionArticles } from './misc-expansion-cluster';
import { influencerArticles } from './influencer-cluster';
import { highVolumeArticles } from './high-volume-cluster';
import { seniorLivingArticles } from './senior-living-cluster';
import { influencerExpansionArticles } from './influencer-expansion-cluster';
import { federalExpansionArticles } from './federal-expansion-cluster';
import { wepGpoExpansionArticles } from './wep-gpo-expansion-cluster';
import { statePensionsExpansionArticles } from './state-pensions-expansion-cluster';
import { influencerFinalArticles } from './influencer-final-cluster';
import { company401kExpansionArticles } from './company-401k-expansion-cluster';
import { influencerMarketArticles } from './influencer-market-cluster';
import { medicareInsuranceArticles } from './medicare-insurance-cluster';
import { legalBeneficiaryArticles } from './legal-beneficiary-cluster';
import { medicaidEstateArticles } from './medicaid-estate-cluster';
import { retirementPlanningFinalArticles } from './retirement-planning-final-cluster';
import { seniorCareCostsArticles } from './senior-care-costs-cluster';
import { federalVeteransArticles } from './federal-veterans-cluster';
import { inheritanceWindfallArticles } from './inheritance-windfall-cluster';
import { scamMiscArticles } from './scam-misc-cluster';
import { pensionDecisionsArticles } from './pension-decisions-cluster';
import { stateRetirementTaxesArticles } from './state-retirement-taxes-cluster';
import { professionalRetirementArticles } from './professional-retirement-cluster';
import { lifeSituationsRetirementArticles } from './life-situations-retirement-cluster';
import { retireAbroadArticles } from './retire-abroad-cluster';
import { financialProductsArticles } from './financial-products-cluster';
import { professionalRetirementExpansionArticles } from './professional-retirement-expansion-cluster';
import { crashProofArticles } from './crash-proof-cluster';
import { retirementCommunitiesArticles } from './retirement-communities-cluster';
import { checkbookIraArticles } from './checkbook-ira-cluster';
import { couplesPsychologyArticles } from './couples-psychology-cluster';
import { estateLegalArticles } from './estate-legal-cluster';
import { fireMovementArticles } from './fire-movement-cluster';
import { railroadRetirementExpansionArticles } from './railroad-retirement-expansion-cluster';
import { infiniteBankingArticles } from './infinite-banking-cluster';
import { inheritanceProcessArticles } from './inheritance-process-articles';
import { inheritanceDollarArticles } from './inheritance-dollar-articles';
import { alternativeIraArticles } from './alternative-ira-cluster';
import { goldIraComparisonArticles } from './gold-ira-comparison-cluster';
import { retireWithAmountArticles } from './retire-with-amount-cluster';
import { medicaidExpansionArticles } from './medicaid-expansion-cluster';
import { robsExpansionArticles } from './robs-expansion-cluster';
import { techRetirementArticles } from './tech-retirement-cluster';
import { healthcareGapArticles } from './healthcare-gap-cluster';
import { retireWithAmountExpansionArticles } from './retire-with-amount-expansion-cluster';
import { marketFearExpansionArticles } from './market-fear-expansion-cluster';
import { couplesRetirementArticles } from './couples-retirement-cluster';
import { layoffRetirementArticles } from './layoff-retirement-cluster';
import { retirementPsychologyArticles } from './retirement-psychology-cluster';
import { goldIraDecisionsArticles } from './gold-ira-decisions-cluster';

// Merge all articles into one registry
export const learnArticles: LearnArticleRegistry = {
  ...safetyArticles,
  ...rmdArticles,
  ...lifeEventsArticles,
  ...loansArticles,
  ...feesArticles,
  ...rothArticles,
  ...marketFearArticles,
  ...targetDateArticles,
  ...enrollmentArticles,
  ...protectionArticles,
  ...miscArticles,
  ...zeroDifficultyArticles,
  ...retirementIraArticles,
  ...superEasyArticles,
  ...superEasyArticles2,
  ...easyWinsArticles,
  ...technicalRetirementArticles,
  ...company401kArticles,
  ...statePensionsArticles,
  ...wepGpoArticles,
  ...railroadRetirementArticles,
  ...federalRetirementArticles,
  ...seppArticles,
  ...technicalExpansionArticles,
  ...annuityArticles,
  ...miscExpansionArticles,
  ...influencerArticles,
  ...highVolumeArticles,
  ...seniorLivingArticles,
  ...influencerExpansionArticles,
  ...federalExpansionArticles,
  ...wepGpoExpansionArticles,
  ...statePensionsExpansionArticles,
  ...influencerFinalArticles,
  ...company401kExpansionArticles,
  ...influencerMarketArticles,
  ...medicareInsuranceArticles,
  ...legalBeneficiaryArticles,
  ...medicaidEstateArticles,
  ...retirementPlanningFinalArticles,
  ...seniorCareCostsArticles,
  ...federalVeteransArticles,
  ...inheritanceWindfallArticles,
  ...scamMiscArticles,
  ...pensionDecisionsArticles,
  ...stateRetirementTaxesArticles,
  ...professionalRetirementArticles,
  ...lifeSituationsRetirementArticles,
  ...retireAbroadArticles,
  ...financialProductsArticles,
  ...professionalRetirementExpansionArticles,
  ...crashProofArticles,
  ...retirementCommunitiesArticles,
  ...checkbookIraArticles,
  ...couplesPsychologyArticles,
  ...estateLegalArticles,
  ...fireMovementArticles,
  ...railroadRetirementExpansionArticles,
  ...infiniteBankingArticles,
  ...inheritanceProcessArticles,
  ...inheritanceDollarArticles,
  ...alternativeIraArticles,
  ...goldIraComparisonArticles,
  ...retireWithAmountArticles,
  ...medicaidExpansionArticles,
  ...robsExpansionArticles,
  ...techRetirementArticles,
  ...healthcareGapArticles,
  ...retireWithAmountExpansionArticles,
  ...marketFearExpansionArticles,
  ...couplesRetirementArticles,
  ...layoffRetirementArticles,
  ...retirementPsychologyArticles,
  ...goldIraDecisionsArticles,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a single article by slug
 */
export function getLearnArticleBySlug(slug: string): LearnArticle | undefined {
  return learnArticles[slug];
}

/**
 * Get all article slugs for generateStaticParams
 */
export function getAllLearnArticleSlugs(): string[] {
  return Object.keys(learnArticles);
}

/**
 * Get all articles as an array
 */
export function getAllLearnArticles(): LearnArticle[] {
  return Object.values(learnArticles);
}

/**
 * Get articles by category
 */
export function getLearnArticlesByCategory(category: ArticleCategory): LearnArticle[] {
  return Object.values(learnArticles).filter(article => article.category === category);
}

/**
 * Get related articles for a given article
 */
export function getRelatedLearnArticles(slug: string, limit: number = 3): LearnArticle[] {
  const article = learnArticles[slug];
  if (!article) return [];

  // First try explicit related articles
  const explicit = article.relatedArticles
    .map(s => learnArticles[s])
    .filter(Boolean)
    .slice(0, limit);

  if (explicit.length >= limit) return explicit;

  // Fill with same-category articles
  const sameCategory = Object.values(learnArticles)
    .filter(a => a.category === article.category && a.slug !== slug)
    .filter(a => !explicit.find(e => e.slug === a.slug))
    .slice(0, limit - explicit.length);

  return [...explicit, ...sameCategory];
}

/**
 * Get articles sorted by volume (highest first)
 */
export function getLearnArticlesByVolume(): LearnArticle[] {
  return Object.values(learnArticles)
    .filter(a => a.volume !== undefined)
    .sort((a, b) => (b.volume || 0) - (a.volume || 0));
}

/**
 * Get articles sorted by difficulty (lowest first = easiest to rank)
 */
export function getLearnArticlesByDifficulty(): LearnArticle[] {
  return Object.values(learnArticles)
    .filter(a => a.difficulty !== undefined)
    .sort((a, b) => (a.difficulty || 0) - (b.difficulty || 0));
}

/**
 * Check if an article exists
 */
export function learnArticleExists(slug: string): boolean {
  return slug in learnArticles;
}
