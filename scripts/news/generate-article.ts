/**
 * Article Generator
 * Uses Claude API to generate articles in Kiyosaki voice
 */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";
import { ScoredNewsItem, NewsArticle } from "../../src/types/news";
import {
    generateArticlePrompt,
    parseArticleResponse,
    getRelatedGuidesForCategory,
} from "../../src/lib/kiyosaki-prompt";

const anthropic = new Anthropic({
    apiKey: CONFIG.claude.apiKey,
});

/**
 * Generate an article for a scored news item
 */
export async function generateArticle(
    newsItem: ScoredNewsItem
): Promise<Omit<NewsArticle, "slug" | "status"> | null> {
    try {
        console.log(`Generating article for: ${newsItem.title}`);

        const prompt = generateArticlePrompt(
            newsItem.title,
            newsItem.description,
            newsItem.suggestedCategory
        );

        const response = await anthropic.messages.create({
            model: CONFIG.claude.model,
            max_tokens: CONFIG.claude.maxTokens,
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        // Extract text from response
        const textContent = response.content.find((block) => block.type === "text");
        if (!textContent || textContent.type !== "text") {
            console.error("No text content in response");
            return null;
        }

        const responseText = textContent.text;

        // Parse the response
        const parsed = parseArticleResponse(responseText);
        if (!parsed) {
            console.error("Failed to parse article response");
            console.log("Raw response:", responseText.slice(0, 500));
            return null;
        }

        // Build the article object
        const article: Omit<NewsArticle, "slug" | "status"> = {
            title: parsed.title,
            headline: parsed.headline,
            excerpt: parsed.excerpt,
            body: parsed.body,
            category: newsItem.suggestedCategory,
            publishedAt: new Date().toISOString(),
            author: "Rich Dad Retirement Editorial Team",
            readTime: parsed.readTime,
            relatedGuides: getRelatedGuidesForCategory(newsItem.suggestedCategory),
            sourceUrl: newsItem.link,
            sourceName: newsItem.source,
        };

        console.log(`  Generated: "${article.title}"`);
        console.log(`  Read time: ${article.readTime} min`);

        return article;
    } catch (error) {
        console.error("Error generating article:", error);
        return null;
    }
}

/**
 * Generate articles for multiple news items
 */
export async function generateArticles(
    newsItems: ScoredNewsItem[]
): Promise<Array<Omit<NewsArticle, "slug" | "status">>> {
    const articles: Array<Omit<NewsArticle, "slug" | "status">> = [];

    for (const item of newsItems) {
        const article = await generateArticle(item);
        if (article) {
            articles.push(article);
        }

        // Small delay between API calls
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return articles;
}

// Run directly if called as script
if (require.main === module) {
    // Test with a sample news item
    const testItem: ScoredNewsItem = {
        title: "Federal Reserve Signals Potential Rate Cuts Later This Year",
        link: "https://example.com/fed-news",
        pubDate: new Date().toISOString(),
        description:
            "Fed Chair Powell indicated the central bank may begin cutting interest rates in the second half of 2026 if inflation continues to moderate.",
        source: "Reuters",
        relevanceScore: 8.5,
        suggestedCategory: "fed",
        keywords: ["federal reserve", "fed", "interest rate", "inflation"],
    };

    if (!CONFIG.claude.apiKey) {
        console.error("ANTHROPIC_API_KEY environment variable not set");
        console.log("Set it with: export ANTHROPIC_API_KEY=your-key-here");
        process.exit(1);
    }

    generateArticle(testItem)
        .then((article) => {
            if (article) {
                console.log("\n=== Generated Article ===");
                console.log(`Title: ${article.title}`);
                console.log(`Headline: ${article.headline}`);
                console.log(`Excerpt: ${article.excerpt}`);
                console.log(`Category: ${article.category}`);
                console.log(`Read time: ${article.readTime} min`);
                console.log("\nBody preview:");
                console.log(article.body.slice(0, 500) + "...");
            }
        })
        .catch(console.error);
}
