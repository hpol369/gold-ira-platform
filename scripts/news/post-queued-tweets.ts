/**
 * Post Queued Social Media
 * Reads the social queue and posts tweets + Facebook posts
 * Called by GitHub Actions AFTER Vercel deploy completes
 */

import fs from "fs";
import path from "path";
import { postTweet } from "./post-tweet.js";
import { postToFacebook } from "./post-facebook.js";

const SOCIAL_QUEUE_FILE = path.join(process.cwd(), "content/news/.social-queue.json");
// Legacy support for old tweet-only queue
const TWEET_QUEUE_FILE = path.join(process.cwd(), "content/news/.tweet-queue.json");

interface SocialQueue {
    tweets: Array<{ title: string; text: string }>;
    facebook: Array<{ title: string; text: string; url: string }>;
}

async function postQueuedSocial() {
    let queue: SocialQueue = { tweets: [], facebook: [] };

    // Try new social queue file first
    if (fs.existsSync(SOCIAL_QUEUE_FILE)) {
        queue = JSON.parse(fs.readFileSync(SOCIAL_QUEUE_FILE, "utf-8"));
    } else if (fs.existsSync(TWEET_QUEUE_FILE)) {
        // Legacy: old tweet-only queue
        const tweets = JSON.parse(fs.readFileSync(TWEET_QUEUE_FILE, "utf-8"));
        queue = { tweets, facebook: [] };
    } else {
        console.log("No social queue found, nothing to post");
        return;
    }

    const totalItems = queue.tweets.length + queue.facebook.length;
    if (totalItems === 0) {
        console.log("Social queue is empty");
        cleanup();
        return;
    }

    // Post max 1 tweet per run to avoid spamming the timeline
    if (queue.tweets.length > 0) {
        const tweet = queue.tweets[0];
        console.log(`\nPosting 1 tweet (${queue.tweets.length} in queue, rest saved for next run)...`);
        console.log(`  Posting tweet for: ${tweet.title}`);
        const success = await postTweet(tweet.text);
        console.log(`Tweet: ${success ? "posted" : "failed"}`);

        // Remove the posted tweet, keep the rest for next run
        queue.tweets.shift();
    }

    // Post max 1 Facebook post per run
    if (queue.facebook.length > 0) {
        const post = queue.facebook[0];
        console.log(`\nPosting 1 Facebook post (${queue.facebook.length} in queue)...`);
        console.log(`  Posting to Facebook: ${post.title}`);
        const success = await postToFacebook(post.text, post.url);
        console.log(`Facebook: ${success ? "posted" : "failed"}`);

        // Remove the posted one, keep rest for next run
        queue.facebook.shift();
    }

    // Save remaining items for next run, or clean up if all done
    if (queue.tweets.length > 0 || queue.facebook.length > 0) {
        fs.writeFileSync(SOCIAL_QUEUE_FILE, JSON.stringify(queue, null, 2), "utf-8");
        console.log(`\nRemaining: ${queue.tweets.length} tweet(s), ${queue.facebook.length} FB post(s) — saved for next run`);
    } else {
        cleanup();
    }
    console.log("\nDone posting queued social media");
}

function cleanup() {
    if (fs.existsSync(SOCIAL_QUEUE_FILE)) fs.unlinkSync(SOCIAL_QUEUE_FILE);
    if (fs.existsSync(TWEET_QUEUE_FILE)) fs.unlinkSync(TWEET_QUEUE_FILE);
}

postQueuedSocial().catch((error) => {
    console.error("Failed to post queued social media:", error);
    // Don't exit with error - social posts are non-critical
});
