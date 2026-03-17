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

// Tweet style variations — extra long-form, lots of whitespace, storytelling format
// Designed for 55-75 year old audience who enjoy reading longer, well-spaced posts
const TWEET_STYLES = [
    {
        name: "hot-take",
        maxChars: 1400,
        includeLink: false,
        instruction: `Write a HOT TAKE post (1000-1400 chars). Bold, provocative opinion with a full argument built out. Use LOTS of empty lines between paragraphs for easy reading.

FORMAT:
- Open with a bold one-liner that stops the scroll
- Empty line
- 2-3 sentences setting the scene or giving context
- Empty line
- Build your argument with 2-3 more short paragraphs, each separated by empty lines
- Empty line
- A "here's the kicker" or "but here's what they don't tell you" pivot
- Empty line
- End with a punchy closer or rhetorical question

Example:
"Your financial advisor makes money whether your 401(k) goes up or down.

Let that sink in for a moment.

They get paid the same fee if you lose 30% in a crash or gain 30% in a bull run. The system isn't broken — it's designed this way. Always has been.

When 2008 hit, millions of Americans watched their retirement accounts get cut in half. Their advisors? Still collected their management fees. Every single quarter.

The same thing happened in 2020. And it'll happen again in the next crash. Your advisor will say 'stay the course' and pocket their 1% regardless.

So when they tell you 'stay the course,' ask yourself: whose course are you actually staying on?

Yours — or theirs?"`,
    },
    {
        name: "uncomfortable-truth",
        maxChars: 1600,
        includeLink: false,
        instruction: `Write an UNCOMFORTABLE TRUTH post (1200-1600 chars). Say the thing nobody in finance wants to say out loud. Build up slowly with evidence, paragraph by paragraph. The kind of post people screenshot and share.

FORMAT:
- Start with "Here's something nobody wants to talk about:" or similar hook
- Empty line
- Lay out the uncomfortable reality across 4-6 SHORT paragraphs, each separated by an empty line
- Each paragraph should be 1-2 sentences MAX
- Empty line
- Build to a crescendo — each paragraph more alarming than the last
- Empty line
- End with a line that makes it deeply personal to the reader

Example:
"Here's something your 401(k) provider will never tell you:

Every single dollar the government prints makes your retirement savings worth less. Not might. Does.

Since 2020, the money supply increased by 40%. Your salary didn't go up 40%. Your savings account didn't. But somehow your grocery bill did.

Think about that. You did everything right. Saved for 30 years. Lived below your means. And the government quietly devalued every dollar you put away.

Central banks aren't buying gold for fun. They bought more gold in 2024 than any year in history. They're preparing for something they're not telling you about.

The people who print the money are trading it for gold.

The people who manage your money are telling you everything is fine.

The question isn't whether the dollar is losing value. It is. The question is — what are you going to do about it before it's too late?"`,
    },
    {
        name: "debate-starter",
        maxChars: 1200,
        includeLink: false,
        instruction: `Write a DEBATE STARTER post (900-1200 chars). Make a bold claim, build a compelling case across multiple paragraphs, then end with a provocative question that DEMANDS replies. Use empty lines between every paragraph.

FORMAT:
- Open with a controversial statement as a standalone line
- Empty line
- 3-4 short paragraphs building your case, each separated by empty lines
- Empty line
- A personal appeal — "If you're over 55..." or "If you've got $100K+ in a 401(k)..."
- Empty line
- Close with a direct, impossible-to-ignore question

Example:
"The 60/40 portfolio is dead. It just doesn't know it yet.

It was designed in the 1980s when bonds paid 10%+ and inflation was falling. A completely different world.

Today bonds pay less than inflation. You're literally losing money on the 'safe' part of your portfolio. Every single day.

But your advisor still recommends it. Why? Because it's easy to explain. Easy to sell. And easy to collect fees on.

The wealthy figured this out years ago. That's why they hold real estate, gold, and private assets. They don't follow the 60/40 rule. They never did.

If you're within 10 years of retirement, you need to ask yourself one question:

What's YOUR retirement actually allocated to right now? And who told you to put it there?"`,
    },
    {
        name: "spicy-stat",
        maxChars: 1600,
        includeLink: false,
        instruction: `Write a SPICY STAT post (1200-1600 chars). Lead with a shocking fact from the article, then build an entire narrative around it across multiple paragraphs. Make the reader feel like they've been kept in the dark.

FORMAT:
- Open with the specific stat/fact as a standalone line — make it hit hard
- Empty line
- "Let me put that in perspective..." or "Think about what that means..." — expand on the stat
- Empty line
- "Meanwhile..." contrast with what regular Americans/investors are doing
- Empty line
- 2-3 more paragraphs connecting this to the reader's personal retirement, separated by empty lines
- Empty line
- A "the writing is on the wall" type paragraph
- Empty line
- End with a one-liner that stings

Example:
"China added 25 tons of gold to their reserves last month. Twenty-five tons. In one month.

Let me put that in perspective. That's over $2 billion in physical gold. Not gold ETFs. Not gold futures. Real, physical gold bars sitting in vaults.

And they're not alone. Central banks around the world bought more gold in 2024 than any year in recorded history.

Meanwhile, the average American's 401(k) holds zero physical assets. Not a single ounce of gold. Not one bar of silver. Just paper and promises from the same institutions that crashed the economy in 2008.

Your retirement is denominated in dollars. Those same dollars that have lost 25% of their purchasing power in the last 4 years alone.

The people who control the world's money are quietly converting it into gold. The people who manage YOUR money are telling you to stay in stocks and bonds.

One of them is lying to you. And it's probably the one who collects a fee for keeping you where you are."`,
    },
    {
        name: "contrarian",
        maxChars: 1400,
        includeLink: false,
        instruction: `Write a CONTRARIAN post (1000-1400 chars). Challenge conventional financial wisdom with a well-structured, multi-paragraph argument. Open with a common saying, then systematically dismantle it.

FORMAT:
- Open with a common financial "wisdom" in quotes as a standalone line
- Empty line
- "I used to believe this too." or "This might be the most dangerous advice in America."
- Empty line
- 3-4 short paragraphs explaining why it's wrong or outdated, each separated by empty lines
- Empty line
- Offer the contrarian perspective — what smart/wealthy people actually do
- Empty line
- End with a challenge or call to think differently — make it personal

Example:
"'Just keep contributing to your 401(k) and you'll be fine.'

This might be the most dangerous financial advice in America right now.

It made sense when you were 30 with three decades ahead of you. Time was on your side. A crash meant a buying opportunity.

At 60? You don't have time to recover from the next crash. And crashes come every 7-10 years like clockwork. We're overdue.

If your retirement took a 40% hit tomorrow, could you wait 5-7 years to break even? Most people over 55 can't. That's not pessimism — that's math.

The wealthy don't pray for recovery. They hold assets that don't need recovering. Gold hasn't gone to zero in 5,000 years. Can your tech stocks say the same?

At what age do you stop gambling with your retirement and start protecting it?

Because if the answer isn't 'right now,' you might want to reconsider what you've been told."`,
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

You write EXTRA LONG-FORM posts. These are NOT quick tweets — they're mini-essays that people stop scrolling to read. Your audience is 55-75 year olds who LOVE reading longer, well-structured posts.

Your posts have STRUCTURE:
- LOTS of empty lines between paragraphs — every 1-2 sentences gets its own paragraph
- Slow build-up and satisfying payoff
- Rhetorical questions sprinkled throughout
- Each paragraph is short (1-2 sentences max) so it's easy on the eyes
- The post should feel like a conversation, not a wall of text

ARTICLE FOR INSPIRATION (use the topic, but you're NOT promoting this article):
Title: ${title}
Excerpt: ${excerpt}

YOUR AUDIENCE:
- Americans 55-75 with $50K-$500K+ in their 401(k) or IRA
- Fiscally conservative, Republican-leaning, many Trump supporters
- Deeply worried about: inflation, national debt, government overspending, dollar collapse
- Distrustful of: Wall Street, big banks, the Fed, mainstream financial media
- They love: straight talk, contrarian takes, calling out the system, being "in the know"
- They enjoy READING. Give them substance. Don't rush to the point.

TWEET STYLE FOR THIS ONE:
${style.instruction}

RULES:
- Target length: ${Math.round(style.maxChars * 0.8)}-${style.maxChars} characters
- Use EMPTY LINES (double newline) between EVERY paragraph — this is critical for readability
- Keep each paragraph SHORT: 1-2 sentences maximum
- The GOAL is replies and engagement, NOT clicks
- Be opinionated. Pick a side. Don't hedge.
- You can be slightly confrontational, sarcastic, or provocative — but never mean-spirited
- Reference "your 401(k)", "your retirement", or "your financial advisor" when it fits naturally
- Reference CURRENT NEWS and events from the article — make it feel timely and urgent
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
