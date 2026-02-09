/**
 * X/Twitter API Poster
 * Posts tweets via the X API v2
 */

import { TwitterApi } from "twitter-api-v2";
import { CONFIG } from "./config.js";

/**
 * Post a tweet to X/Twitter
 * Returns true if successful, false otherwise
 */
export async function postTweet(text: string): Promise<boolean> {
    if (!CONFIG.twitter.enabled) {
        console.log("  Twitter API not configured, skipping tweet");
        console.log("  Set TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET in .env.local");
        return false;
    }

    try {
        const client = new TwitterApi({
            appKey: CONFIG.twitter.apiKey,
            appSecret: CONFIG.twitter.apiSecret,
            accessToken: CONFIG.twitter.accessToken,
            accessSecret: CONFIG.twitter.accessSecret,
        });

        const result = await client.v2.tweet(text);
        console.log(`  Tweet posted! ID: ${result.data.id}`);
        return true;
    } catch (error) {
        console.error("  Error posting tweet:", error);
        return false;
    }
}
