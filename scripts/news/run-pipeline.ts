#!/usr/bin/env npx ts-node

/**
 * News Pipeline Runner
 * Main entry point for the automated news generation pipeline
 *
 * Usage:
 *   npx ts-node scripts/news/run-pipeline.ts
 *
 * Or with npm script:
 *   npm run news:generate
 *
 * Environment variables:
 *   ANTHROPIC_API_KEY - Required for Claude API
 *   AUTO_PUBLISH - Set to "true" to auto-publish (default: false, uses review queue)
 */

import { scrapeFeeds } from "./scrape-feeds.js";
import { filterByRelevance, deduplicateItems } from "./score-relevance.js";
import { generateArticles } from "./generate-article.js";
import { writeArticle, addToReviewQueue } from "./write-article.js";
import { CONFIG } from "./config.js";

async function runPipeline() {
    console.log("=".repeat(60));
    console.log("Rich Dad Daily Briefing - News Pipeline");
    console.log(`Started: ${new Date().toISOString()}`);
    console.log("=".repeat(60));
    console.log("");

    // Check for API key
    if (!CONFIG.claude.apiKey) {
        console.error("ERROR: ANTHROPIC_API_KEY environment variable not set");
        console.log("");
        console.log("Set it with:");
        console.log("  export ANTHROPIC_API_KEY=your-key-here");
        console.log("");
        process.exit(1);
    }

    const autoPublish = process.env.AUTO_PUBLISH === "true";
    console.log(`Mode: ${autoPublish ? "Auto-publish" : "Review queue"}`);
    console.log("");

    // Step 1: Scrape RSS feeds
    console.log("STEP 1: Scraping RSS feeds...");
    console.log("-".repeat(40));
    const rawItems = await scrapeFeeds();

    if (rawItems.length === 0) {
        console.log("No news items found. Exiting.");
        return;
    }

    // Step 2: Score and filter for relevance
    console.log("");
    console.log("STEP 2: Scoring relevance...");
    console.log("-".repeat(40));
    const dedupedItems = deduplicateItems(
        rawItems.map((item) => ({
            ...item,
            relevanceScore: 0,
            suggestedCategory: "economy" as const,
            keywords: [],
        }))
    );
    const relevantItems = filterByRelevance(dedupedItems);

    console.log(`Found ${relevantItems.length} relevant items (score >= ${CONFIG.scoring.minimumScore})`);
    relevantItems.forEach((item, i) => {
        console.log(`  ${i + 1}. [${item.relevanceScore}/10] ${item.title.slice(0, 60)}...`);
        console.log(`     Category: ${item.suggestedCategory} | Keywords: ${item.keywords.slice(0, 3).join(", ")}`);
    });

    if (relevantItems.length === 0) {
        console.log("No sufficiently relevant news items. Exiting.");
        return;
    }

    // Step 3: Generate articles with Claude
    console.log("");
    console.log("STEP 3: Generating articles with Claude...");
    console.log("-".repeat(40));
    const articles = await generateArticles(relevantItems);

    if (articles.length === 0) {
        console.log("Failed to generate any articles. Exiting.");
        return;
    }

    console.log(`Generated ${articles.length} articles`);

    // Step 4: Write articles to files
    console.log("");
    console.log("STEP 4: Writing articles...");
    console.log("-".repeat(40));

    const writtenSlugs: string[] = [];

    for (const article of articles) {
        const status = autoPublish ? "published" : "review";
        const slug = writeArticle(article, status);
        writtenSlugs.push(slug);

        if (!autoPublish) {
            addToReviewQueue(article, slug);
        }
    }

    // Summary
    console.log("");
    console.log("=".repeat(60));
    console.log("PIPELINE COMPLETE");
    console.log("=".repeat(60));
    console.log(`Articles generated: ${articles.length}`);
    console.log(`Status: ${autoPublish ? "Published" : "In review queue"}`);
    console.log("");
    console.log("Written files:");
    writtenSlugs.forEach((slug) => {
        console.log(`  - content/news/${slug}.mdx`);
    });

    if (!autoPublish) {
        console.log("");
        console.log("To review and publish:");
        console.log("  npx ts-node scripts/news/write-article.ts list");
        console.log("  npx ts-node scripts/news/write-article.ts approve <slug>");
    }

    console.log("");
    console.log(`Finished: ${new Date().toISOString()}`);
}

// Run the pipeline
runPipeline().catch((error) => {
    console.error("Pipeline failed:", error);
    process.exit(1);
});
