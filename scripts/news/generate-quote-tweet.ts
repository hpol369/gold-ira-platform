/**
 * Quote Tweet Generator
 * Uses Claude API to generate valuable quote tweet text
 * for replying to big accounts tweeting about gold/silver/retirement
 */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const anthropic = new Anthropic({
    apiKey: CONFIG.claude.apiKey,
});

// Site pages mapped by topic for Claude to pick from
const SITE_PAGES = {
    gold: [
        { path: "/guide/gold-ira-guide", title: "Complete Gold IRA Guide" },
        { path: "/why-gold", title: "Why Gold for Retirement" },
        { path: "/why-gold/inflation-protection", title: "Gold vs Inflation" },
        { path: "/best-gold-ira-companies", title: "Best Gold IRA Companies" },
        { path: "/rich-dad-strategy/robert-kiyosaki-gold", title: "Kiyosaki's Gold Strategy" },
    ],
    silver: [
        { path: "/best-silver-ira-companies", title: "Best Silver IRA Companies" },
        { path: "/lp/silver-ira", title: "Silver IRA Guide" },
        { path: "/compare/gold-vs-silver-ira", title: "Gold vs Silver IRA" },
    ],
    retirement: [
        { path: "/rollover", title: "401(k) Rollover Guide" },
        { path: "/self-directed-ira", title: "Self-Directed IRA Guide" },
        { path: "/guide/protect-401k-from-crash", title: "Protect Your 401(k)" },
        { path: "/quiz", title: "Retirement Protection Quiz" },
        { path: "/scenarios", title: "Retirement Scenarios" },
    ],
    economy: [
        { path: "/guide/protect-401k-from-crash", title: "Protect Your 401(k) from a Crash" },
        { path: "/why-gold/inflation-protection", title: "Inflation Protection Guide" },
        { path: "/news", title: "Latest Economic News" },
    ],
};

/**
 * Determine the best topic category for a tweet
 */
function detectTopic(tweetText: string): string {
    const text = tweetText.toLowerCase();
    if (text.match(/silver|ag\b/)) return "silver";
    if (text.match(/gold|au\b|bullion/)) return "gold";
    if (text.match(/401k|401\(k\)|ira|retire|pension|social security/)) return "retirement";
    return "economy";
}

/**
 * Generate a quote tweet response using Claude
 */
export async function generateQuoteTweet(
    originalTweet: string,
    authorUsername: string,
    authorDisplayName: string,
): Promise<{ text: string; articleUrl: string | null } | null> {
    try {
        const topic = detectTopic(originalTweet);
        const relevantPages = SITE_PAGES[topic as keyof typeof SITE_PAGES] || SITE_PAGES.economy;
        const pagesText = relevantPages
            .map((p) => `- richdadretirement.com${p.path} (${p.title})`)
            .join("\n");

        // Never include site links in quote tweets
        const includeLink = false;

        const response = await anthropic.messages.create({
            model: CONFIG.claude.model,
            max_tokens: 500,
            messages: [
                {
                    role: "user",
                    content: `You write SPICY quote tweets for @TheIRAAdvisor. You're not a boring financial account — you're the one who says what the suits won't. You're quoting @${authorUsername} (${authorDisplayName}).

ORIGINAL TWEET:
"${originalTweet}"

YOUR AUDIENCE:
- Americans 55-75 with $50K-$500K+ in their 401(k) or IRA
- Fiscally conservative, many Trump supporters, distrust mainstream finance
- They follow ${authorDisplayName} because they want the truth, not corporate talking points
- They LOVE seeing someone call out BS, challenge the narrative, or say the quiet part loud

YOUR APPROACH — randomly pick ONE:
1. AGREE AND ESCALATE: Take their point further than they dared. "He's being polite about it. Here's the real number..."
2. RESPECTFULLY CHALLENGE: Push back on one specific thing. "He's right about X, but wrong about Y. Here's why..."
3. ADD THE MISSING PIECE: Point out what they left unsaid. "What he's not telling you is..."
4. MAKE IT PERSONAL: Connect their macro point to the individual's retirement. "Cool stat. Now look at what that means for your 401(k)."
5. PROVOCATIVE QUESTION: Respond with a question that forces people to think. "So if that's true, why is your financial advisor still telling you to..."

RULES:
1. Max 200 characters. Every word must earn its place.
2. NO sycophancy ("Great point!", "So true!") — that's weak
3. NO hashtags, NO emojis, NO @mentions
4. Don't sound like a marketer. Sound like someone at a bar who happens to know a lot about finance.
5. Be slightly confrontational or sarcastic when it fits — but always smart, never dumb
6. It's OK to mildly disagree with ${authorDisplayName} if it makes for better engagement
7. CRITICAL: NEVER invent statistics, percentages, or dollar amounts. Only use facts you are 100% certain about. Attitude and sharp writing beats fake numbers every time.
${includeLink ? `8. End with something that makes people want to learn more (a link will be appended)` : `8. End with a punch, not a call to action. No link will be added — this tweet should stand alone.`}

STYLE EXAMPLES:
- "Bold of your financial advisor to assume the dollar will still be worth something when you retire."
- "He's being nice about it. The real question is why your 401(k) provider doesn't even offer gold as an option. Follow the money."
- "Everyone's talking about the stock market. Nobody's asking why central banks are hoarding gold like it's 1971 all over again."
- "Respectfully, this undersells it. The silver deficit isn't a blip — it's structural. And your retirement portfolio has zero exposure."

OUTPUT FORMAT (JSON):
{"text": "your quote tweet text here"${includeLink ? ', "articlePath": "/the/best/matching/path"' : ''}}

Output ONLY the JSON, nothing else.`,
                },
            ],
        });

        const textContent = response.content.find((block) => block.type === "text");
        if (!textContent || textContent.type !== "text") {
            console.error("  No text content in quote tweet response");
            return null;
        }

        let rawText = textContent.text.trim();

        // Strip markdown code fences if present
        if (rawText.startsWith("```")) {
            rawText = rawText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
        }

        const parsed = JSON.parse(rawText);
        let quoteText = parsed.text as string;
        const articlePath = parsed.articlePath as string | undefined;

        // Remove quotes if Claude wrapped it
        if (
            (quoteText.startsWith('"') && quoteText.endsWith('"')) ||
            (quoteText.startsWith("'") && quoteText.endsWith("'"))
        ) {
            quoteText = quoteText.slice(1, -1);
        }

        // Truncate if too long
        if (quoteText.length > 200) {
            const truncated = quoteText.slice(0, 200);
            const lastPeriod = truncated.lastIndexOf(".");
            if (lastPeriod > 120) {
                quoteText = truncated.slice(0, lastPeriod + 1);
            } else {
                quoteText = truncated.slice(0, 197) + "...";
            }
        }

        const articleUrl = articlePath
            ? `https://richdadretirement.com${articlePath}`
            : null;

        return { text: quoteText, articleUrl };
    } catch (error) {
        console.error("  Error generating quote tweet:", error);
        return null;
    }
}
