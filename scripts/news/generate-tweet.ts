/**
 * Tweet Generator
 * Uses Claude API to generate controversial, engagement-driving tweets
 * Targets: Americans 55-75, fiscally conservative, $50K+ in 401(k)/IRA
 * Goal: Spark conversation, debate, and replies — NOT just promote articles
 */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const anthropic = new Anthropic({
    apiKey: CONFIG.claude.apiKey,
});

// Tweet style variations — designed to provoke engagement
const TWEET_STYLES = [
    {
        name: "hot-take",
        maxChars: 150,
        includeLink: false,
        instruction: `Write a HOT TAKE tweet (max 150 chars). A bold, slightly provocative opinion that will make people either nod aggressively or argue in the replies. Pick a side. Be unapologetic.

Examples:
"Your financial advisor makes money whether your 401(k) goes up or down. Think about that for a second."
"Unpopular opinion: keeping 100% of your retirement in stocks at 60+ isn't brave. It's reckless."
"The Fed just admitted inflation isn't transitory. Your 401(k) lost 20% in purchasing power and nobody told you."`,
    },
    {
        name: "uncomfortable-truth",
        maxChars: 200,
        includeLink: false,
        instruction: `Write an UNCOMFORTABLE TRUTH tweet (max 200 chars). Say the thing nobody in finance wants to say out loud. Make it feel like forbidden knowledge. The kind of tweet people screenshot and share.

Examples:
"Wall Street doesn't want you owning physical gold. You know why? Because they can't charge you fees on a bar sitting in a vault. That's the whole game."
"Every dollar the government prints makes your retirement savings worth less. They know this. They just hope you don't figure it out before you hit 70."
"Your 401(k) is denominated in dollars. The dollar has lost 97% of its value since 1913. But sure, keep 'staying the course.'"`,
    },
    {
        name: "debate-starter",
        maxChars: 180,
        includeLink: false,
        instruction: `Write a DEBATE STARTER tweet (max 180 chars). Ask a provocative question or make a statement that DEMANDS a reply. The goal is maximum replies and quote tweets. End with something people can't ignore.

Examples:
"Name one financial advisor who told their clients to buy gold in 2019. I'll wait."
"If the stock market is so safe, why does every billionaire own physical gold? Serious question."
"At what point do we admit that a 60/40 portfolio is a strategy from the 1990s that doesn't work anymore?"`,
    },
    {
        name: "spicy-stat",
        maxChars: 200,
        includeLink: true,
        instruction: `Write a SPICY STAT tweet (max 200 chars). Lead with a shocking, specific fact from the article, then twist the knife with a personal jab at the reader's portfolio. Make them feel like they're missing out or being played.

Examples:
"Central banks bought more gold in 2024 than any year in history. Meanwhile your 401(k) advisor is telling you to buy more index funds. Who do you trust more?"
"Silver supply deficit: 182 million ounces. Silver in your retirement account: zero. Somebody's going to feel stupid in 5 years."`,
    },
    {
        name: "contrarian",
        maxChars: 180,
        includeLink: true,
        instruction: `Write a CONTRARIAN tweet (max 180 chars). Go against conventional financial wisdom. Challenge something that "everyone knows." Make people who disagree feel compelled to argue.

Examples:
"Diversification doesn't mean owning 5 different stock ETFs. It means owning assets your financial advisor doesn't get a commission on."
"'Just keep contributing to your 401(k)' is financial advice designed for 30-year-olds. If you're 60, you need a different playbook."`,
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
            max_tokens: 400,
            messages: [
                {
                    role: "user",
                    content: `You write VIRAL tweets that spark arguments and conversation. You're the account everyone loves or loves to hate. Your tweets get hundreds of replies because you say what nobody else will.

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
- Maximum ${style.maxChars} characters
- The GOAL is replies and engagement, NOT clicks. Write something people HAVE to respond to.
- Be opinionated. Pick a side. Don't hedge.
- You can be slightly confrontational, sarcastic, or provocative — but never mean-spirited
- Reference "your 401(k)", "your retirement", or "your financial advisor" when it fits naturally
- NO hashtags, NO emojis, NO URLs, NO "thread" or "1/"
- NO generic financial platitudes. Be SPECIFIC and sharp.
- CRITICAL: NEVER invent statistics or dollar amounts. If you reference a number, it must come directly from the article excerpt. When in doubt, make your point without numbers — attitude beats accuracy.
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
