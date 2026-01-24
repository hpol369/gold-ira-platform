import { MetadataRoute } from "next";

import { US_STATES } from '@/lib/states';
import { getCompanySlugs } from '@/data/companies';
import { getAllAssetSlugs } from '@/data/assets';

// Rollover provider slugs
const rolloverProviders = [
    'fidelity', 'vanguard', 'charles-schwab', 'tiaa', 'principal',
    'empower', 'john-hancock', 'tsp', 'merrill-lynch', 'prudential'
];

// Rollover account type slugs
const rolloverAccountTypes = [
    '401k-to-gold-ira', 'roth-ira-to-gold-ira', 'traditional-ira-to-gold-ira',
    '403b-to-gold-ira', 'simple-ira-to-gold-ira', '457b-to-gold-ira',
    'tsp-to-gold-ira', 'sep-ira-to-gold-ira', 'pension-to-gold-ira'
];

// Generate all company comparison pairs
function generateComparisonSlugs(): string[] {
    const companySlugs = getCompanySlugs();
    const comparisons: string[] = [];

    for (let i = 0; i < companySlugs.length; i++) {
        for (let j = 0; j < companySlugs.length; j++) {
            if (i !== j) {
                comparisons.push(`${companySlugs[i]}-vs-${companySlugs[j]}`);
            }
        }
    }
    return comparisons;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.richdadretirement.com';
    const companySlugs = getCompanySlugs();
    const comparisonSlugs = generateComparisonSlugs();

    const statePages = US_STATES.map(state => ({
        url: `${baseUrl}/local/${state.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const rolloverProviderPages = rolloverProviders.map(slug => ({
        url: `${baseUrl}/rollover/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const rolloverAccountTypePages = rolloverAccountTypes.map(slug => ({
        url: `${baseUrl}/rollover/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic company review pages
    const companyReviewPages = companySlugs.map(slug => ({
        url: `${baseUrl}/reviews/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Dynamic comparison pages (company vs company)
    const comparisonPages = comparisonSlugs.map(slug => ({
        url: `${baseUrl}/compare/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Gold vs Asset comparison pages (programmatic SEO)
    const assetSlugs = getAllAssetSlugs();
    const goldVsAssetPages = assetSlugs.map(slug => ({
        url: `${baseUrl}/compare/gold-vs/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...statePages,
        // Core content pages
        {
            url: `${baseUrl}/what-is-a-gold-ira`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gold-ira-rules`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/why-gold`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/why-gold/inflation-protection`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // Rollover hub and pages
        {
            url: `${baseUrl}/rollover`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...rolloverProviderPages,
        ...rolloverAccountTypePages,
        // Dynamic company review pages (15 companies)
        ...companyReviewPages,
        // Dynamic comparison pages (210 combinations)
        ...comparisonPages,
        // Gold vs Asset comparison pages (21 pages)
        ...goldVsAssetPages,
        // Compare hub
        {
            url: `${baseUrl}/compare`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/guide/gold-ira-guide",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/reviews/augusta-precious-metals",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/noble-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/goldco",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/birch-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/american-hartford-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/advantage-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/oxford-gold-group",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/lear-capital",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/guide/silver-ira-guide",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/guide/401k-to-gold-rollover",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/guide/gold-ira-fees",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/gold-ira-vs-401k",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/gold-ira-vs-roth-ira",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/gold-ira-vs-physical-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/gold-vs-silver-ira",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/gold-ira-benefits",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/gold-ira-tax-rules",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/gold-ira-scams",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/ira-approved-gold-coins",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/quiz",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/rich-dad-strategy",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/best-gold-ira-companies",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/reviews",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/resources",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: "https://www.richdadretirement.com/about-us",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://www.richdadretirement.com/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://www.richdadretirement.com/privacy-policy",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: "https://www.richdadretirement.com/author/thomas-richardson",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/investigative-hub",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/terms-of-service",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: "https://www.richdadretirement.com/editorial-policy",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: "https://www.richdadretirement.com/reviews/noble-gold-legit",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/lear-capital-complaints",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/lear-capital-vs-noble-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/goldco-vs-lear-capital",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/augusta-precious-metals-lawsuit",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/patriot-gold-group",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/birch-gold-complaints",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/us-money-reserve",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/us-money-reserve-complaints",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/rosland-capital",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/rosland-capital-lawsuit",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/monetary-gold",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/blanchard-gold",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/american-hartford-gold-complaints",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        // Missing pages added
        {
            url: "https://www.richdadretirement.com/compare/american-hartford-vs-oxford-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/augusta-vs-goldco",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/gold-ira-vs-crypto",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/gold-ira-vs-gold-etf",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/gold-ira-vs-traditional-ira",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/noble-gold-vs-birch-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/guide/403b-to-gold-ira-rollover",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/guide/gold-ira-for-seniors",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/guide/gold-ira-minimum-investment",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/guide/tsp-to-gold-ira-rollover",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/learn/are-gold-iras-safe",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/checkbook-ira-rules",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://www.richdadretirement.com/learn/home-storage-gold-ira",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://www.richdadretirement.com/learn/platinum-ira",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://www.richdadretirement.com/learn/precious-metals-ira-rules",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://www.richdadretirement.com/reviews/advantage-gold-complaints",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/goldco-lawsuit-facts",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/priority-gold",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/orion-metal-exchange",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/money-metals-exchange",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/american-bullion",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/self-directed-ira-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/augusta-vs-noble-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/compare/goldco-vs-american-hartford-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/reviews/regal-assets-lawsuit",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        // SEO Content Expansion - Phase 1, 2, 3 Pages (15 new pages)
        // Learn pages
        {
            url: "https://www.richdadretirement.com/learn/why-is-gold-valuable",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/stock-market-crash-protection",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/sequence-of-returns-risk",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/recession-proof-investments",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/is-my-money-safe-in-bank",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/safe-haven-investments",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/stock-market-alternatives",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/learn/retirement-planning-mistakes",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // Guide pages
        {
            url: "https://www.richdadretirement.com/guide/what-to-do-with-old-401k",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/guide/401k-alternatives",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/guide/protect-401k-from-crash",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.richdadretirement.com/guide/wealth-preservation-strategies",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // Why-Gold pages
        {
            url: "https://www.richdadretirement.com/why-gold/physical-gold-vs-paper",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/why-gold/central-banks-buying-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.richdadretirement.com/why-gold/gold-vs-stocks",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // Rich Dad Strategy pages
        {
            url: "https://www.richdadretirement.com/rich-dad-strategy/robert-kiyosaki-gold",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
