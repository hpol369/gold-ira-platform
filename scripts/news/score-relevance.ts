/**
 * Relevance Scorer
 * Scores news items based on relevance to retirement/gold investing
 */

import { CONFIG } from "./config.js";
import { RSSFeedItem, ScoredNewsItem, NewsCategory } from "../../src/types/news";

/**
 * Score a single news item for relevance
 */
export function scoreNewsItem(item: RSSFeedItem): ScoredNewsItem {
    const text = `${item.title} ${item.description}`.toLowerCase();
    let score = 0;
    const matchedKeywords: string[] = [];

    // High priority keywords: +3 points each
    for (const keyword of CONFIG.keywords.highPriority) {
        if (text.includes(keyword.toLowerCase())) {
            score += 3;
            matchedKeywords.push(keyword);
        }
    }

    // Medium priority keywords: +1.5 points each
    for (const keyword of CONFIG.keywords.mediumPriority) {
        if (text.includes(keyword.toLowerCase())) {
            score += 1.5;
            matchedKeywords.push(keyword);
        }
    }

    // Low priority keywords: +0.5 points each
    for (const keyword of CONFIG.keywords.lowPriority) {
        if (text.includes(keyword.toLowerCase())) {
            score += 0.5;
            matchedKeywords.push(keyword);
        }
    }

    // Normalize score to 0-10 scale
    const normalizedScore = Math.min(10, score);

    // Determine category based on keywords
    const suggestedCategory = determineCategory(matchedKeywords, text);

    return {
        ...item,
        relevanceScore: Math.round(normalizedScore * 10) / 10,
        suggestedCategory,
        keywords: matchedKeywords,
    };
}

/**
 * Determine the best category based on matched keywords
 */
function determineCategory(keywords: string[], text: string): NewsCategory {
    const categoryScores: Record<NewsCategory, number> = {
        fed: 0,
        gold: 0,
        silver: 0,
        economy: 0,
        retirement: 0,
        crypto: 0,
        weekly: 0,
    };

    // Fed-related
    const fedKeywords = ["federal reserve", "fed", "interest rate", "monetary policy", "powell", "fomc"];
    for (const kw of fedKeywords) {
        if (text.includes(kw)) categoryScores.fed += 2;
    }

    // Gold-related
    const goldKeywords = ["gold", "precious metals", "bullion", "platinum", "palladium"];
    for (const kw of goldKeywords) {
        if (text.includes(kw)) categoryScores.gold += 2;
    }

    // Silver-related
    const silverKeywords = [
        "silver", "silver price", "silver demand",
        "solar panel", "photovoltaic", "ev battery",
        "industrial metal", "silver institute",
        "silver eagle", "silver maple"
    ];
    for (const kw of silverKeywords) {
        if (text.includes(kw)) categoryScores.silver += 2;
    }

    // Extra boost for industrial demand angles (silver + industrial combo)
    const industrialKeywords = ["solar", "ev", "electric vehicle", "5g", "semiconductor", "electronics"];
    for (const kw of industrialKeywords) {
        if (text.includes(kw) && text.includes("silver")) {
            categoryScores.silver += 3; // Strong boost for industrial + silver combo
        }
    }

    // Economy-related
    const economyKeywords = ["gdp", "jobs", "unemployment", "recession", "economy", "inflation", "cpi"];
    for (const kw of economyKeywords) {
        if (text.includes(kw)) categoryScores.economy += 2;
    }

    // Retirement-related
    const retirementKeywords = ["401k", "401(k)", "ira", "retirement", "pension", "social security"];
    for (const kw of retirementKeywords) {
        if (text.includes(kw)) categoryScores.retirement += 2;
    }

    // Crypto-related
    const cryptoKeywords = ["bitcoin", "crypto", "ethereum", "cryptocurrency"];
    for (const kw of cryptoKeywords) {
        if (text.includes(kw)) categoryScores.crypto += 2;
    }

    // Find highest scoring category
    let maxCategory: NewsCategory = "economy";
    let maxScore = 0;

    for (const [category, score] of Object.entries(categoryScores)) {
        if (score > maxScore) {
            maxScore = score;
            maxCategory = category as NewsCategory;
        }
    }

    return maxCategory;
}

/**
 * Filter and sort items by relevance
 * Ensures category diversity: at least 1 silver article per run
 */
export function filterByRelevance(items: RSSFeedItem[]): ScoredNewsItem[] {
    const scoredItems = items.map(scoreNewsItem);

    // Filter by minimum score
    const relevantItems = scoredItems.filter(
        (item) => item.relevanceScore >= CONFIG.scoring.minimumScore
    );

    // Sort by score (highest first)
    relevantItems.sort((a, b) => b.relevanceScore - a.relevanceScore);

    // Ensure category diversity: at least 1 silver article
    const silverItems = relevantItems.filter(item => item.suggestedCategory === "silver");
    const nonSilverItems = relevantItems.filter(item => item.suggestedCategory !== "silver");

    const result: ScoredNewsItem[] = [];
    const maxArticles = CONFIG.scoring.maxArticlesPerRun;

    // Always include at least 1 silver article if available
    if (silverItems.length > 0) {
        result.push(silverItems[0]);
    }

    // Fill remaining slots with highest scoring items (any category)
    for (const item of nonSilverItems) {
        if (result.length >= maxArticles) break;
        result.push(item);
    }

    // If we still have room and more silver items, add them
    for (let i = 1; i < silverItems.length && result.length < maxArticles; i++) {
        result.push(silverItems[i]);
    }

    // Sort final result by score
    result.sort((a, b) => b.relevanceScore - a.relevanceScore);

    return result.slice(0, maxArticles);
}

/**
 * Deduplicate items by title similarity
 */
export function deduplicateItems(items: ScoredNewsItem[]): ScoredNewsItem[] {
    const seen = new Set<string>();
    const unique: ScoredNewsItem[] = [];

    for (const item of items) {
        // Create a simple hash of the title (first 50 chars, lowercase)
        const titleKey = item.title.toLowerCase().slice(0, 50).replace(/[^a-z0-9]/g, "");

        if (!seen.has(titleKey)) {
            seen.add(titleKey);
            unique.push(item);
        }
    }

    return unique;
}

// Run directly if called as script
if (require.main === module) {
    // Test with sample items
    const testItems: RSSFeedItem[] = [
        {
            title: "Federal Reserve Holds Interest Rates Steady at 4.5%",
            link: "https://example.com/fed",
            pubDate: new Date().toISOString(),
            description: "The Fed announced today that interest rates will remain unchanged amid inflation concerns.",
            source: "Test",
        },
        {
            title: "Gold Prices Surge to $2,650 as Central Banks Buy",
            link: "https://example.com/gold",
            pubDate: new Date().toISOString(),
            description: "Gold hits new highs as central bank purchases reach record levels.",
            source: "Test",
        },
        {
            title: "Tech Startup Raises $50M in Series B",
            link: "https://example.com/tech",
            pubDate: new Date().toISOString(),
            description: "AI startup announces major funding round.",
            source: "Test",
        },
    ];

    const scored = testItems.map(scoreNewsItem);
    console.log("Scored items:");
    scored.forEach((item) => {
        console.log(`- ${item.title}`);
        console.log(`  Score: ${item.relevanceScore}/10`);
        console.log(`  Category: ${item.suggestedCategory}`);
        console.log(`  Keywords: ${item.keywords.join(", ")}`);
        console.log("");
    });
}
