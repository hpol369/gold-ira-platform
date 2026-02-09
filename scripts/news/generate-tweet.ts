/**
 * Tweet Generator
 * Uses Claude API to generate compelling tweets for silver articles
 * Targets: Americans 55-75, fiscally conservative, $50K+ in 401(k)/IRA
 */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const anthropic = new Anthropic({
    apiKey: CONFIG.claude.apiKey,
});

// Twitter wraps all URLs to 23 chars via t.co
// Total limit: 280 chars
// URL (23) + hashtags line (~35) + newlines (4) = ~62 chars overhead
// Leaves ~218 chars for tweet text
const HASHTAGS = "#SilverIRA #Retirement #PreciousMetals";
const MAX_TWEET_TEXT = 218;

/**
 * Generate a tweet for a silver article
 */
export async function generateTweet(
    title: string,
    excerpt: string,
    slug: string
): Promise<string | null> {
    try {
        const articleUrl = `https://richdadretirement.com/news/${slug}`;

        const response = await anthropic.messages.create({
            model: CONFIG.claude.model,
            max_tokens: 400,
            messages: [
                {
                    role: "user",
                    content: `You write viral tweets for a precious metals retirement platform. Your tweets consistently get high engagement from conservative Americans aged 55-75.

ARTICLE TITLE: ${title}
ARTICLE EXCERPT: ${excerpt}

YOUR AUDIENCE:
- Americans 55-75 with $50K-$500K+ in their 401(k) or IRA
- Fiscally conservative, Republican-leaning, many Trump supporters
- Deeply worried about: inflation, national debt, government overspending, dollar collapse
- Distrustful of: Wall Street, big banks, the Fed, mainstream financial media
- They value: self-reliance, hard work, protecting family wealth, tangible assets
- They respond to: straight talk, contrarian wisdom, "what THEY don't want you to know"

TWEET FORMULA (use one of these proven structures):
1. SHOCKING STAT + IMPLICATION: "Silver demand just hit [X]. Meanwhile your 401(k) sits in paper assets the Fed can devalue overnight."
2. US vs THEM: "Wall Street wants you in their funds. Smart retirees are moving to silver before it's too late."
3. WAKE-UP CALL: "The Fed printed $X trillion. Your retirement lost X% purchasing power. But there's one asset they can't print."
4. CONTRARIAN TRUTH: "Everyone's watching gold. The real story? Silver. Industrial demand is exploding and supply can't keep up."

RULES:
- Maximum ${MAX_TWEET_TEXT} characters (a URL and hashtags will be appended automatically)
- Write like you're telling a friend the truth over coffee — direct, personal, urgent
- MUST reference "your 401(k)", "your IRA", or "your retirement" at least once
- End with a line that makes them NEED to click the link
- No hashtags, no emojis, no URLs
- No generic financial advice language. Be SPECIFIC about the article topic.
- One thought per sentence. Vary sentence length. Short hits harder.
- Output ONLY the tweet text, nothing else. No quotes around it.`,
                },
            ],
        });

        const textContent = response.content.find((block) => block.type === "text");
        if (!textContent || textContent.type !== "text") {
            console.error("  No text content in tweet response");
            return null;
        }

        let tweetText = textContent.text.trim();

        // Remove quotes if Claude wrapped the tweet in them
        if (
            (tweetText.startsWith('"') && tweetText.endsWith('"')) ||
            (tweetText.startsWith("'") && tweetText.endsWith("'"))
        ) {
            tweetText = tweetText.slice(1, -1);
        }

        // Truncate if too long (find last sentence boundary)
        if (tweetText.length > MAX_TWEET_TEXT) {
            const truncated = tweetText.slice(0, MAX_TWEET_TEXT);
            const lastPeriod = truncated.lastIndexOf(".");
            if (lastPeriod > MAX_TWEET_TEXT * 0.6) {
                tweetText = truncated.slice(0, lastPeriod + 1);
            } else {
                tweetText = truncated.slice(0, MAX_TWEET_TEXT - 3) + "...";
            }
        }

        // Build final tweet: text + URL + hashtags
        const fullTweet = `${tweetText}\n\n${articleUrl}\n\n${HASHTAGS}`;

        return fullTweet;
    } catch (error) {
        console.error("  Error generating tweet:", error);
        return null;
    }
}
