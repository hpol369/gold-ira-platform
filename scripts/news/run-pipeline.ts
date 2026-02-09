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

import fs from "fs";
import path from "path";
import { scrapeFeeds } from "./scrape-feeds.js";
import { filterByRelevance, deduplicateItems } from "./score-relevance.js";
import { generateArticles } from "./generate-article.js";
import { writeArticle, addToReviewQueue } from "./write-article.js";
import { CONFIG } from "./config.js";
import { generateTweet } from "./generate-tweet.js";
import { postTweet } from "./post-tweet.js";

const PROCESSED_URLS_FILE = path.join(process.cwd(), "content/news/.processed-urls.json");

/**
 * Load previously processed URLs to avoid duplicates
 */
function loadProcessedUrls(): Set<string> {
    try {
        if (fs.existsSync(PROCESSED_URLS_FILE)) {
            const data = JSON.parse(fs.readFileSync(PROCESSED_URLS_FILE, "utf-8"));
            // Keep only URLs from last 7 days to prevent file from growing too large
            const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
            const recentUrls = data.filter((item: { url: string; timestamp: number }) =>
                item.timestamp > sevenDaysAgo
            );
            return new Set(recentUrls.map((item: { url: string }) => item.url));
        }
    } catch (error) {
        console.log("No processed URLs file found, starting fresh");
    }
    return new Set();
}

/**
 * Save processed URLs
 */
function saveProcessedUrls(urls: Set<string>, newUrls: string[]): void {
    try {
        // Load existing data
        let data: Array<{ url: string; timestamp: number }> = [];
        if (fs.existsSync(PROCESSED_URLS_FILE)) {
            data = JSON.parse(fs.readFileSync(PROCESSED_URLS_FILE, "utf-8"));
        }

        // Add new URLs with timestamp
        const now = Date.now();
        for (const url of newUrls) {
            if (!urls.has(url)) {
                data.push({ url, timestamp: now });
            }
        }

        // Keep only last 7 days
        const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
        data = data.filter(item => item.timestamp > sevenDaysAgo);

        // Ensure directory exists
        const dir = path.dirname(PROCESSED_URLS_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(PROCESSED_URLS_FILE, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error("Error saving processed URLs:", error);
    }
}

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

    // Load previously processed URLs
    const processedUrls = loadProcessedUrls();
    console.log(`Tracking ${processedUrls.size} previously processed URLs`);
    console.log("");

    // Step 1: Scrape RSS feeds
    console.log("STEP 1: Scraping RSS feeds...");
    console.log("-".repeat(40));
    const rawItems = await scrapeFeeds();

    if (rawItems.length === 0) {
        console.log("No news items found. Exiting.");
        return;
    }

    // Filter out already processed URLs
    const newItems = rawItems.filter(item => !processedUrls.has(item.link));
    console.log(`New items (not previously processed): ${newItems.length}`);

    if (newItems.length === 0) {
        console.log("No new news items to process. Exiting.");
        return;
    }

    // Step 2: Score and filter for relevance
    console.log("");
    console.log("STEP 2: Scoring relevance...");
    console.log("-".repeat(40));
    const dedupedItems = deduplicateItems(
        newItems.map((item) => ({
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
        // Still mark all scraped URLs as processed to avoid rescanning
        saveProcessedUrls(processedUrls, newItems.map(i => i.link));
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

    // Step 5: Queue silver tweets (posted after deploy by GitHub Actions)
    console.log("");
    console.log("STEP 5: Generating silver tweets...");
    console.log("-".repeat(40));

    const silverArticles = articles.filter((a) => a.category === "silver");
    const tweetQueue: Array<{ title: string; text: string }> = [];

    if (silverArticles.length === 0) {
        console.log("No silver articles to tweet");
    } else {
        for (const article of silverArticles) {
            const slug = writtenSlugs[articles.indexOf(article)];
            console.log(`  Generating tweet for: ${article.title}`);

            const tweetText = await generateTweet(article.title, article.excerpt, slug);
            if (tweetText) {
                console.log(`  Tweet (${tweetText.length} chars): ${tweetText.split("\n")[0]}...`);
                tweetQueue.push({ title: article.title, text: tweetText });
            } else {
                console.log("  Failed to generate tweet, skipping");
            }

            // Small delay between API calls
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        console.log(`Tweets queued: ${tweetQueue.length}/${silverArticles.length}`);
    }

    // Save tweet queue to file (GitHub Actions will post after deploy)
    const tweetQueueFile = path.join(process.cwd(), "content/news/.tweet-queue.json");
    if (tweetQueue.length > 0) {
        fs.writeFileSync(tweetQueueFile, JSON.stringify(tweetQueue, null, 2), "utf-8");
        console.log(`  Saved tweet queue to .tweet-queue.json`);
    }

    // Mark all processed URLs (including ones that weren't relevant enough)
    saveProcessedUrls(processedUrls, newItems.map(i => i.link));

    // Summary
    console.log("");
    console.log("=".repeat(60));
    console.log("PIPELINE COMPLETE");
    console.log("=".repeat(60));
    console.log(`Articles generated: ${articles.length}`);
    console.log(`Silver tweets queued: ${tweetQueue.length}/${silverArticles.length}`);
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
