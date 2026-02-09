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

    // Post tweets
    if (queue.tweets.length > 0) {
        console.log(`\nPosting ${queue.tweets.length} tweets...`);
        let tweetsPosted = 0;
        for (const tweet of queue.tweets) {
            console.log(`  Posting tweet for: ${tweet.title}`);
            const success = await postTweet(tweet.text);
            if (success) tweetsPosted++;
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        console.log(`Tweets: ${tweetsPosted}/${queue.tweets.length} posted`);
    }

    // Post to Facebook
    if (queue.facebook.length > 0) {
        console.log(`\nPosting ${queue.facebook.length} Facebook posts...`);
        let fbPosted = 0;
        for (const post of queue.facebook) {
            console.log(`  Posting to Facebook: ${post.title}`);
            const success = await postToFacebook(post.text, post.url);
            if (success) fbPosted++;
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        console.log(`Facebook: ${fbPosted}/${queue.facebook.length} posted`);
    }

    cleanup();
    console.log("\nDone posting all queued social media");
}

function cleanup() {
    if (fs.existsSync(SOCIAL_QUEUE_FILE)) fs.unlinkSync(SOCIAL_QUEUE_FILE);
    if (fs.existsSync(TWEET_QUEUE_FILE)) fs.unlinkSync(TWEET_QUEUE_FILE);
}

postQueuedSocial().catch((error) => {
    console.error("Failed to post queued social media:", error);
    // Don't exit with error - social posts are non-critical
});
