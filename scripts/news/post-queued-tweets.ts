/**
 * Post Queued Tweets
 * Reads the tweet queue and posts them to X/Twitter
 * Called by GitHub Actions AFTER Vercel deploy completes
 */

import fs from "fs";
import path from "path";
import { postTweet } from "./post-tweet.js";

const TWEET_QUEUE_FILE = path.join(process.cwd(), "content/news/.tweet-queue.json");

async function postQueuedTweets() {
    // Check if queue file exists
    if (!fs.existsSync(TWEET_QUEUE_FILE)) {
        console.log("No tweet queue found, nothing to post");
        return;
    }

    const queue: Array<{ title: string; text: string }> = JSON.parse(
        fs.readFileSync(TWEET_QUEUE_FILE, "utf-8")
    );

    if (queue.length === 0) {
        console.log("Tweet queue is empty");
        fs.unlinkSync(TWEET_QUEUE_FILE);
        return;
    }

    console.log(`Posting ${queue.length} queued tweets...`);

    let posted = 0;
    for (const tweet of queue) {
        console.log(`  Posting tweet for: ${tweet.title}`);
        const success = await postTweet(tweet.text);
        if (success) posted++;

        // Delay between tweets
        if (queue.indexOf(tweet) < queue.length - 1) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }
    }

    // Remove queue file after posting
    fs.unlinkSync(TWEET_QUEUE_FILE);
    console.log(`Done: ${posted}/${queue.length} tweets posted`);
}

postQueuedTweets().catch((error) => {
    console.error("Failed to post queued tweets:", error);
    // Don't exit with error - tweets are non-critical
});
