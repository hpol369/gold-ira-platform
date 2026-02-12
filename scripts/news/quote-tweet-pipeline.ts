#!/usr/bin/env npx ts-node

/**
 * Quote Tweet Pipeline
 * Automatically quote tweets from big accounts (Kiyosaki, Schiff, etc.)
 * that tweet about gold/silver/401k/retirement topics.
 *
 * Usage:
 *   npx tsx scripts/news/quote-tweet-pipeline.ts
 *   npm run twitter:quotes
 *
 * Environment variables:
 *   ANTHROPIC_API_KEY - Required for Claude API
 *   TWITTER_API_KEY, TWITTER_API_SECRET - Twitter app credentials
 *   TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET - Twitter user credentials
 */

import fs from "fs";
import path from "path";
import { TwitterApi } from "twitter-api-v2";
import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";
import { generateQuoteTweet } from "./generate-quote-tweet.js";

const DEDUP_FILE = path.join(process.cwd(), "content/news/.quoted-tweets.json");

interface QuotedTweet {
    tweetId: string;
    authorUsername: string;
    quotedAt: number;
    quoteText: string;
}

// --- Dedup & Rate Limiting ---

function loadQuotedTweets(): QuotedTweet[] {
    try {
        if (fs.existsSync(DEDUP_FILE)) {
            const data = JSON.parse(fs.readFileSync(DEDUP_FILE, "utf-8"));
            // Auto-cleanup: remove entries older than 30 days
            const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
            return data.filter((entry: QuotedTweet) => entry.quotedAt > thirtyDaysAgo);
        }
    } catch (error) {
        console.log("No dedup file found, starting fresh");
    }
    return [];
}

function saveQuotedTweets(entries: QuotedTweet[]): void {
    const dir = path.dirname(DEDUP_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DEDUP_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

function getTodayCount(entries: QuotedTweet[]): number {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    return entries.filter((e) => e.quotedAt >= todayStart.getTime()).length;
}

function isAlreadyQuoted(entries: QuotedTweet[], tweetId: string): boolean {
    return entries.some((e) => e.tweetId === tweetId);
}

/**
 * Check if we've already quoted the same author within the last 24 hours.
 * Prevents quoting the same person's different tweets back-to-back.
 */
function hasQuotedAuthorRecently(entries: QuotedTweet[], authorUsername: string): boolean {
    const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
    return entries.some(
        (e) => e.authorUsername === authorUsername && e.quotedAt > twentyFourHoursAgo
    );
}

// --- Twitter Client ---

function createTwitterClient(): TwitterApi | null {
    if (!CONFIG.quoteTweets.enabled) {
        console.log("Twitter API not configured. Set TWITTER_API_KEY etc. in env.");
        return null;
    }

    return new TwitterApi({
        appKey: CONFIG.twitter.apiKey,
        appSecret: CONFIG.twitter.apiSecret,
        accessToken: CONFIG.twitter.accessToken,
        accessSecret: CONFIG.twitter.accessSecret,
    });
}

// --- Keyword Matching ---

function isRelevantTweet(text: string): boolean {
    const lowerText = text.toLowerCase();
    return CONFIG.quoteTweets.keywords.some((keyword) => lowerText.includes(keyword));
}

// --- Tweet Fetching ---

interface CandidateTweet {
    id: string;
    text: string;
    authorUsername: string;
    authorDisplayName: string;
    createdAt: string;
}

/**
 * Try to fetch tweets via user timeline (requires Basic+ API plan).
 * Falls back to search if timeline access fails.
 */
async function fetchCandidateTweets(client: TwitterApi): Promise<CandidateTweet[]> {
    const candidates: CandidateTweet[] = [];
    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);

    // Strategy 1: Try userTimeline for each account
    let useTimeline = true;

    for (const account of CONFIG.quoteTweets.accounts) {
        try {
            if (useTimeline && account.userId) {
                const timeline = await client.v2.userTimeline(account.userId, {
                    max_results: 10,
                    "tweet.fields": ["created_at", "text"],
                    start_time: twelveHoursAgo.toISOString(),
                    exclude: ["retweets", "replies"],
                });

                for (const tweet of timeline.data?.data || []) {
                    if (isRelevantTweet(tweet.text)) {
                        candidates.push({
                            id: tweet.id,
                            text: tweet.text,
                            authorUsername: account.username,
                            authorDisplayName: account.username,
                            createdAt: tweet.created_at || new Date().toISOString(),
                        });
                    }
                }

                console.log(`  @${account.username}: found ${timeline.data?.data?.length || 0} recent tweets`);
            }
        } catch (error: unknown) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            // If we get a 403/401 on timeline, fall back to search for all accounts
            if (errorMsg.includes("403") || errorMsg.includes("401") || errorMsg.includes("Forbidden")) {
                console.log(`  Timeline API not available (${errorMsg}). Switching to search fallback.`);
                useTimeline = false;
                break;
            }
            console.log(`  @${account.username}: error fetching timeline - ${errorMsg}`);
        }

        // Rate limit respect
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Strategy 2: Search fallback (works on free/basic tier)
    if (!useTimeline || candidates.length === 0) {
        console.log("\n  Using search fallback...");
        try {
            const accountHandles = CONFIG.quoteTweets.accounts
                .map((a) => `from:${a.username}`)
                .join(" OR ");
            const keywordGroup = CONFIG.quoteTweets.keywords.slice(0, 8).join(" OR ");
            const query = `(${accountHandles}) (${keywordGroup}) -is:retweet -is:reply`;

            console.log(`  Search query: ${query.slice(0, 100)}...`);

            const searchResult = await client.v2.search(query, {
                max_results: 20,
                "tweet.fields": ["created_at", "author_id"],
                expansions: ["author_id"],
                "user.fields": ["username", "name"],
                start_time: sixHoursAgo.toISOString(),
            });

            // Build author lookup from API includes (resolves the @unknown issue)
            const authorLookup = new Map<string, { username: string; name: string }>();
            for (const user of searchResult.includes?.users || []) {
                authorLookup.set(user.id, { username: user.username, name: user.name });
            }

            for (const tweet of searchResult.data?.data || []) {
                const author = authorLookup.get(tweet.author_id || "");
                const username = author?.username || "unknown";
                if (isRelevantTweet(tweet.text)) {
                    candidates.push({
                        id: tweet.id,
                        text: tweet.text,
                        authorUsername: username,
                        authorDisplayName: author?.name || username,
                        createdAt: tweet.created_at || new Date().toISOString(),
                    });
                }
            }

            console.log(`  Search returned ${searchResult.data?.data?.length || 0} tweets, ${candidates.length} relevant`);
        } catch (error: unknown) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            console.error(`  Search fallback also failed: ${errorMsg}`);
        }
    }

    return candidates;
}

// --- Claude: Pick Best Tweet ---

async function pickBestTweet(
    candidates: CandidateTweet[],
    alreadyQuoted: Set<string>,
    quotedTweets: QuotedTweet[],
): Promise<CandidateTweet | null> {
    // Filter out already quoted tweets AND authors quoted in last 24h
    const fresh = candidates.filter(
        (c) => !alreadyQuoted.has(c.id) && !hasQuotedAuthorRecently(quotedTweets, c.authorUsername)
    );
    if (fresh.length === 0) return null;
    if (fresh.length === 1) return fresh[0];

    // Let Claude pick the best one to quote
    try {
        const anthropic = new Anthropic({ apiKey: CONFIG.claude.apiKey });

        const tweetsText = fresh
            .map((t, i) => `[${i}] @${t.authorUsername}: "${t.text}"`)
            .join("\n\n");

        const response = await anthropic.messages.create({
            model: CONFIG.claude.model,
            max_tokens: 100,
            messages: [
                {
                    role: "user",
                    content: `You're picking the best tweet to quote for a retirement/gold IRA advisor account.

Pick the tweet that:
1. Has the most viral potential for our audience (Americans 55-75, conservative, $50K+ in 401k)
2. Is most relevant to gold, silver, retirement, or economic concerns
3. Comes from the biggest/most influential account
4. Makes the strongest statement we can add value to

CANDIDATES:
${tweetsText}

Reply with ONLY the index number (e.g. "0" or "2"). Nothing else.`,
                },
            ],
        });

        const textContent = response.content.find((block) => block.type === "text");
        if (textContent && textContent.type === "text") {
            const index = parseInt(textContent.text.trim(), 10);
            if (!isNaN(index) && index >= 0 && index < fresh.length) {
                return fresh[index];
            }
        }
    } catch (error) {
        console.error("  Error picking best tweet with Claude:", error);
    }

    // Fallback: pick first one
    return fresh[0];
}

// --- Main Pipeline ---

async function runQuoteTweetPipeline() {
    console.log("=".repeat(60));
    console.log("Quote Tweet Pipeline - @TheIRAAdvisor");
    console.log(`Started: ${new Date().toISOString()}`);
    console.log("=".repeat(60));
    console.log("");

    // Check prerequisites
    if (!CONFIG.claude.apiKey) {
        console.error("ERROR: ANTHROPIC_API_KEY not set");
        process.exit(1);
    }

    const client = createTwitterClient();
    if (!client) {
        console.log("Twitter not configured, exiting.");
        process.exit(0);
    }

    // Load dedup state
    const quotedTweets = loadQuotedTweets();
    const todayCount = getTodayCount(quotedTweets);
    const maxPerDay = CONFIG.quoteTweets.maxPerDay;

    console.log(`Quoted today: ${todayCount}/${maxPerDay}`);
    console.log(`Total tracked: ${quotedTweets.length} (last 30 days)`);
    console.log("");

    if (todayCount >= maxPerDay) {
        console.log(`Daily limit reached (${maxPerDay}). Exiting.`);
        saveQuotedTweets(quotedTweets); // Save cleanup
        return;
    }

    const remaining = maxPerDay - todayCount;

    // Step 1: Fetch candidate tweets
    console.log("STEP 1: Fetching tweets from monitored accounts...");
    console.log("-".repeat(40));

    const candidates = await fetchCandidateTweets(client);

    if (candidates.length === 0) {
        console.log("No relevant tweets found. Exiting.");
        saveQuotedTweets(quotedTweets);
        return;
    }

    console.log(`\nFound ${candidates.length} relevant candidate tweets`);
    candidates.forEach((c, i) => {
        console.log(`  ${i + 1}. @${c.authorUsername}: "${c.text.slice(0, 80)}..."`);
    });

    // Step 2: Pick best tweet(s) and generate quotes
    console.log("");
    console.log("STEP 2: Selecting and generating quote tweets...");
    console.log("-".repeat(40));

    const alreadyQuotedIds = new Set(quotedTweets.map((q) => q.tweetId));
    let quotesPosted = 0;

    for (let i = 0; i < remaining; i++) {
        const bestTweet = await pickBestTweet(candidates, alreadyQuotedIds, quotedTweets);
        if (!bestTweet) {
            console.log("  No more unquoted candidates available.");
            break;
        }

        console.log(`\n  Selected: @${bestTweet.authorUsername}: "${bestTweet.text.slice(0, 80)}..."`);

        // Generate quote tweet text
        const quoteResult = await generateQuoteTweet(
            bestTweet.text,
            bestTweet.authorUsername,
            bestTweet.authorDisplayName,
        );

        if (!quoteResult) {
            console.log("  Failed to generate quote text, skipping.");
            alreadyQuotedIds.add(bestTweet.id); // Don't retry
            continue;
        }

        const fullQuoteText = quoteResult.articleUrl
            ? `${quoteResult.text}\n\n${quoteResult.articleUrl}`
            : quoteResult.text;
        console.log(`  Quote text: ${quoteResult.text}`);
        console.log(`  Article: ${quoteResult.articleUrl || "(no link — standalone tweet)"}`);


        // Step 3: Post the quote tweet
        console.log("");
        console.log(`  STEP 3: Posting quote tweet...`);

        try {
            const result = await client.v2.quote(fullQuoteText, bestTweet.id);
            console.log(`  Quote tweet posted! ID: ${result.data.id}`);

            // Record in dedup
            quotedTweets.push({
                tweetId: bestTweet.id,
                authorUsername: bestTweet.authorUsername,
                quotedAt: Date.now(),
                quoteText: quoteResult.text,
            });
            alreadyQuotedIds.add(bestTweet.id);
            quotesPosted++;
        } catch (error: unknown) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            console.error(`  Failed to post quote tweet: ${errorMsg}`);

            // If it's a duplicate error, still mark as quoted
            if (errorMsg.includes("duplicate") || errorMsg.includes("already")) {
                alreadyQuotedIds.add(bestTweet.id);
            }
        }

        // Delay between posts
        if (i < remaining - 1) {
            console.log("  Waiting 5 seconds before next quote...");
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }
    }

    // Save dedup state
    saveQuotedTweets(quotedTweets);

    // Summary
    console.log("");
    console.log("=".repeat(60));
    console.log("QUOTE TWEET PIPELINE COMPLETE");
    console.log("=".repeat(60));
    console.log(`Candidates found: ${candidates.length}`);
    console.log(`Quotes posted: ${quotesPosted}`);
    console.log(`Today's total: ${todayCount + quotesPosted}/${maxPerDay}`);
    console.log(`Finished: ${new Date().toISOString()}`);
}

// Run
runQuoteTweetPipeline().catch((error) => {
    console.error("Quote tweet pipeline failed:", error);
    process.exit(1);
});
