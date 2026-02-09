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
): Promise<{ text: string; articleUrl: string } | null> {
    try {
        const topic = detectTopic(originalTweet);
        const relevantPages = SITE_PAGES[topic as keyof typeof SITE_PAGES] || SITE_PAGES.economy;
        const pagesText = relevantPages
            .map((p) => `- richdadretirement.com${p.path} (${p.title})`)
            .join("\n");

        const response = await anthropic.messages.create({
            model: CONFIG.claude.model,
            max_tokens: 500,
            messages: [
                {
                    role: "user",
                    content: `You write quote tweets for @TheIRAAdvisor, a trusted retirement advisor account. You're quoting a tweet from @${authorUsername} (${authorDisplayName}).

ORIGINAL TWEET:
"${originalTweet}"

YOUR AUDIENCE:
- Americans 55-75 with $50K-$500K+ in their 401(k) or IRA
- Fiscally conservative, worried about inflation, dollar collapse, retirement security
- They follow ${authorDisplayName} because they distrust mainstream financial advice
- They value: straight talk, data-backed insights, actionable advice

RELEVANT ARTICLES ON OUR SITE:
${pagesText}

RULES:
1. Write a quote tweet that ADDS VALUE to the original tweet (max 200 characters)
2. Don't just agree — add a specific fact, stat, or insight they didn't mention
3. End with a subtle nudge to learn more (the URL will be appended separately)
4. NO hashtags, NO emojis, NO @mentions
5. Don't be sycophantic ("Great point!") or spammy ("Check out our...")
6. Sound like a knowledgeable peer, not a marketer
7. Reference "your 401(k)" or "your retirement" naturally when possible
8. Keep it conversational and direct

STYLE EXAMPLES:
- "He's right. Silver supply deficit hit 182M oz last year while your 401(k) sits in paper."
- "This is exactly why 401(k) holders are moving to physical assets. The math doesn't lie."
- "What he's not saying: the Fed printed 40% of all dollars in existence since 2020. Your retirement felt every one."

OUTPUT FORMAT (JSON):
{"text": "your quote tweet text here", "articlePath": "/the/best/matching/path"}

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
        const articlePath = parsed.articlePath as string;

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

        const articleUrl = `https://richdadretirement.com${articlePath}`;

        return { text: quoteText, articleUrl };
    } catch (error) {
        console.error("  Error generating quote tweet:", error);
        return null;
    }
}
