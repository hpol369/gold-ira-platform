/**
 * Tweet Generator
 * Uses Claude API to generate long-form, controversial, engagement-driving X posts
 * Targets: Americans 55-75, fiscally conservative, $50K+ in 401(k)/IRA
 * Goal: Spark conversation, debate, and replies — NOT just promote articles
 */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const anthropic = new Anthropic({
    apiKey: CONFIG.claude.apiKey,
});

// Tweet style variations — long-form, formatted, designed to provoke engagement
const TWEET_STYLES = [
    {
        name: "hot-take",
        maxChars: 600,
        includeLink: false,
        instruction: `Write a HOT TAKE post (400-600 chars). Bold, provocative opinion with supporting reasoning. Use line breaks for readability.

FORMAT:
- Open with a bold one-liner that stops the scroll
- Empty line
- 2-3 sentences building your argument
- Empty line
- End with a punchy closer or rhetorical question

Example:
"Your financial advisor makes money whether your 401(k) goes up or down.

Let that sink in. They get paid the same fee if you lose 30% in a crash or gain 30% in a bull run. The system isn't broken — it's designed this way.

So when they tell you 'stay the course,' ask yourself: whose course?"`,
    },
    {
        name: "uncomfortable-truth",
        maxChars: 700,
        includeLink: false,
        instruction: `Write an UNCOMFORTABLE TRUTH post (500-700 chars). Say the thing nobody in finance wants to say out loud. Build up to it with evidence. The kind of post people screenshot and share.

FORMAT:
- Start with "Here's something nobody wants to talk about:" or similar hook
- Empty line
- 3-4 sentences laying out the uncomfortable reality, use line breaks between key points
- Empty line
- End with a line that makes it personal to the reader

Example:
"Here's something your 401(k) provider will never tell you:

Every dollar the government prints makes your retirement savings worth less. Not might. Does.

Since 2020, the money supply increased by 40%. Your salary didn't. Your savings account didn't. But somehow your grocery bill did.

Central banks aren't buying gold for fun. They're buying it because they know what's coming.

The question is — do you?"`,
    },
    {
        name: "debate-starter",
        maxChars: 500,
        includeLink: false,
        instruction: `Write a DEBATE STARTER post (350-500 chars). Make a bold claim, back it up briefly, then ask a provocative question that DEMANDS replies. Use line breaks for punch.

FORMAT:
- Open with a controversial statement
- Empty line
- 2-3 sentences of brief supporting evidence
- Empty line
- Close with a direct question to the audience

Example:
"The 60/40 portfolio is dead. It just doesn't know it yet.

It was designed in the 1980s when bonds paid 10%+ and inflation was falling. Today bonds pay less than inflation. You're literally losing money on the 'safe' part of your portfolio.

But your advisor still recommends it. Why? Because it's easy to sell.

What's YOUR retirement actually allocated to right now?"`,
    },
    {
        name: "spicy-stat",
        maxChars: 700,
        includeLink: true,
        instruction: `Write a SPICY STAT post (500-700 chars). Lead with a shocking fact from the article, then build a narrative around it. Make the reader feel like they're missing something everyone else already knows.

FORMAT:
- Open with the specific stat/fact as a standalone line
- Empty line
- "Meanwhile..." or "At the same time..." contrast with what regular investors are doing
- Empty line
- 2-3 lines connecting this to the reader's retirement
- Empty line
- End with a one-liner that stings

Example:
"China added 25 tons of gold to their reserves last month. Twenty-five tons. In one month.

Meanwhile, the average American's 401(k) holds zero physical assets. Not a single ounce of gold. Not one bar of silver. Just paper and promises.

Central banks are preparing for something. Your financial advisor is telling you everything's fine.

One of them is lying to you."`,
    },
    {
        name: "contrarian",
        maxChars: 600,
        includeLink: true,
        instruction: `Write a CONTRARIAN post (400-600 chars). Challenge conventional financial wisdom with a well-structured argument. Use a quote or common saying, then dismantle it.

FORMAT:
- Open with a common financial "wisdom" in quotes
- Empty line
- Explain why it's wrong or outdated in 2-3 sentences
- Empty line
- Offer the contrarian perspective
- Empty line
- End with a challenge or call to think differently

Example:
"'Just keep contributing to your 401(k) and you'll be fine.'

That advice made sense when you were 30 with decades ahead of you. At 60? You don't have time to recover from the next crash. And crashes come every 7-10 years like clockwork.

The wealthy don't pray for recovery. They hold assets that don't need recovering.

At what age do you stop gambling with your retirement and start protecting it?"`,
    },
];

/**
 * Pick a tweet style based on article index to ensure variety
 */
function pickStyle(articleIndex: number): (typeof TWEET_STYLES)[number] {
    return TWEET_STYLES[articleIndex % TWEET_STYLES.length];
}

/**
 * Generate a tweet for a news article
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

        console.log(`  Tweet style: ${style.name} (max ${style.maxChars} chars, link: ${style.includeLink})`);

        const response = await anthropic.messages.create({
            model: CONFIG.claude.model,
            max_tokens: 1000,
            messages: [
                {
                    role: "user",
                    content: `You write VIRAL X posts that spark arguments and conversation. You're the account everyone loves or loves to hate. Your posts get hundreds of replies because you say what nobody else will.

You write LONG-FORM posts — not quick one-liners. Your posts have STRUCTURE:
- Line breaks between sections for readability
- Build-up and payoff
- Rhetorical questions sprinkled in
- Sometimes a quote to open or close

ARTICLE FOR INSPIRATION (use the topic, but you're NOT promoting this article):
Title: ${title}
Excerpt: ${excerpt}

YOUR AUDIENCE:
- Americans 55-75 with $50K-$500K+ in their 401(k) or IRA
- Fiscally conservative, Republican-leaning, many Trump supporters
- Deeply worried about: inflation, national debt, government overspending, dollar collapse
- Distrustful of: Wall Street, big banks, the Fed, mainstream financial media
- They love: straight talk, contrarian takes, calling out the system, being "in the know"

TWEET STYLE FOR THIS ONE:
${style.instruction}

RULES:
- Target length: ${Math.round(style.maxChars * 0.7)}-${style.maxChars} characters
- Use EMPTY LINES between sections for visual breathing room
- The GOAL is replies and engagement, NOT clicks
- Be opinionated. Pick a side. Don't hedge.
- You can be slightly confrontational, sarcastic, or provocative — but never mean-spirited
- Reference "your 401(k)", "your retirement", or "your financial advisor" when it fits naturally
- NO hashtags, NO emojis, NO URLs, NO "thread" or "1/"
- NO generic financial platitudes. Be SPECIFIC and sharp.
- CRITICAL: NEVER invent statistics or dollar amounts. If you reference a number, it must come directly from the article excerpt. When in doubt, make your point without numbers — attitude beats accuracy.
- Output ONLY the post text with proper line breaks. No quotes around it.`,
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

        // Truncate if too long (find last paragraph boundary)
        if (tweetText.length > style.maxChars) {
            const truncated = tweetText.slice(0, style.maxChars);
            // Try to cut at a paragraph break
            const lastDoubleNewline = truncated.lastIndexOf("\n\n");
            const lastPeriod = truncated.lastIndexOf(".");
            const lastQuestion = truncated.lastIndexOf("?");
            const lastSentence = Math.max(lastPeriod, lastQuestion);

            if (lastDoubleNewline > style.maxChars * 0.6) {
                tweetText = truncated.slice(0, lastDoubleNewline);
            } else if (lastSentence > style.maxChars * 0.6) {
                tweetText = truncated.slice(0, lastSentence + 1);
            } else {
                tweetText = truncated.slice(0, style.maxChars - 3) + "...";
            }
        }

        // Only append article link for styles that want it
        const fullTweet = style.includeLink
            ? `${tweetText}\n\n${articleUrl}`
            : tweetText;

        return fullTweet;
    } catch (error) {
        console.error("  Error generating tweet:", error);
        return null;
    }
}
