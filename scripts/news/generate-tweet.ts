/**
 * Tweet Generator
 * Uses Claude API to generate compelling tweets for silver articles
 * Targets: Americans 55-75, fiscally conservative, $50K+ in 401(k)/IRA
 * Varies tweet style: short punchy, medium, and long educational
 */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const anthropic = new Anthropic({
    apiKey: CONFIG.claude.apiKey,
});

const HASHTAGS = "#SilverIRA #Retirement #PreciousMetals";

// Tweet style variations
const TWEET_STYLES = [
    {
        name: "short",
        maxChars: 120,
        instruction: `Write a SHORT, punchy tweet (max 120 characters). One or two hard-hitting sentences. Like a headline that stops the scroll.

Example style:
"Silver supply deficit just hit 182 million ounces. Your 401(k) doesn't own a single one."`,
    },
    {
        name: "medium",
        maxChars: 180,
        instruction: `Write a MEDIUM-LENGTH tweet (around 140-180 characters). Set up the problem, then deliver the punch. Three to four sentences.

Example style:
"China is stockpiling silver while the Fed prints dollars. They know what's coming. The question is whether your 401(k) is ready. Most aren't."`,
    },
    {
        name: "long",
        maxChars: 218,
        instruction: `Write a LONG, EDUCATIONAL tweet (around 180-218 characters). Teach them something specific about silver they didn't know, then connect it to their retirement. This should feel like insider knowledge from a trusted advisor.

Example style:
"Here's what your financial advisor won't tell you: silver demand for solar panels hit 600M ounces last year. Mines can't keep up. Every EV needs 1-2oz of silver. Your 401(k) is betting against the biggest industrial shift in decades."`,
    },
];

/**
 * Pick a tweet style based on article index to ensure variety
 */
function pickStyle(articleIndex: number): (typeof TWEET_STYLES)[number] {
    return TWEET_STYLES[articleIndex % TWEET_STYLES.length];
}

/**
 * Generate a tweet for a silver article
 */
export async function generateTweet(
    title: string,
    excerpt: string,
    slug: string,
    articleIndex: number = 0
): Promise<string | null> {
    try {
        const articleUrl = `https://richdadretirement.com/news/${slug}`;
        const style = pickStyle(articleIndex);

        console.log(`  Tweet style: ${style.name} (max ${style.maxChars} chars)`);

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

TWEET STYLE FOR THIS ONE:
${style.instruction}

RULES:
- Maximum ${style.maxChars} characters (a URL and hashtags will be appended automatically)
- Write like you're telling a friend the truth over coffee — direct, personal, urgent
- MUST reference "your 401(k)", "your IRA", or "your retirement" at least once
- End with a line that makes them NEED to click the link
- No hashtags, no emojis, no URLs
- No generic financial advice language. Be SPECIFIC about the article topic.
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
        if (tweetText.length > style.maxChars) {
            const truncated = tweetText.slice(0, style.maxChars);
            const lastPeriod = truncated.lastIndexOf(".");
            if (lastPeriod > style.maxChars * 0.6) {
                tweetText = truncated.slice(0, lastPeriod + 1);
            } else {
                tweetText = truncated.slice(0, style.maxChars - 3) + "...";
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
