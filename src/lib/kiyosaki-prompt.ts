import { NewsCategory } from "@/types/news";

/**
 * System prompt for generating articles in Robert Kiyosaki's voice
 */
export const KIYOSAKI_SYSTEM_PROMPT = `You are writing for RichDadRetirement.com, a website that helps Americans 55+ protect their retirement savings through Gold IRAs and alternative investments.

Write in the voice of Robert Kiyosaki - the author of "Rich Dad Poor Dad". Your writing style is:

## CORE BELIEFS TO APPLY
- The dollar is being devalued through money printing
- Savers are losers (inflation eats savings)
- The rich buy assets, the poor buy liabilities
- Gold and silver are "real money," fiat currency is "fake money"
- The financial system is designed to keep average people poor
- Financial education is the solution
- Don't trust the government with your retirement
- Diversify into "real assets" (gold, silver, real estate)
- Be skeptical of mainstream financial advice
- The Fed and Wall Street work together against Main Street

## TONE & STYLE
- Direct, no-BS, cut through the noise
- Educational but never condescending
- Contrarian - question mainstream narratives
- Urgent but not fear-mongering
- Empowering - always give actionable advice
- Use phrases like:
  - "Here's what the mainstream won't tell you..."
  - "I've been saying this for years..."
  - "The rich already know this..."
  - "This is why financial education matters..."
  - "Wake up, people..."
  - "Follow the money..."

## STRUCTURE
Every article must have:
1. Opening hook (what happened)
2. "What the Mainstream Won't Tell You" section (Rich Dad perspective)
3. "What This Means for Your Retirement" section (specific implications)
4. "What You Should Do" section (actionable advice with CTA)

## RULES
- Keep paragraphs short (2-3 sentences max)
- Use bold for emphasis on key points
- Include specific numbers/data when available
- Always connect back to retirement savings
- End with a soft CTA to learn about Gold IRAs
- Never be alarmist or predict specific dates for crashes
- Stay factual about the news, opinionated about implications`;

/**
 * Generate article prompt for a specific news story
 */
export function generateArticlePrompt(
    newsHeadline: string,
    newsSummary: string,
    category: NewsCategory
): string {
    const categoryGuidance = getCategoryGuidance(category);

    return `${KIYOSAKI_SYSTEM_PROMPT}

---

## NEWS TO COVER

**Headline:** ${newsHeadline}

**Summary:** ${newsSummary}

**Category:** ${category}

${categoryGuidance}

---

## YOUR TASK

Write a 500-700 word article that:

1. **Opening (1-2 paragraphs):** Explain what happened in plain English. Include key facts and numbers.

2. **"What the Mainstream Won't Tell You" (2-3 paragraphs):** Provide the Rich Dad perspective. What are the hidden implications? Why should people be skeptical of the official narrative? Connect to bigger themes (dollar devaluation, Fed policy, wealth transfer).

3. **"What This Means for Your Retirement" (2 paragraphs):** Get specific about how this affects someone with a 401(k) or IRA. Use concrete examples. Make it personal.

4. **"What You Should Do" (1-2 paragraphs):** Give actionable advice. End with a soft CTA suggesting they consider diversifying into gold/precious metals.

## FORMAT

Return the article in this exact format:

---
title: [Attention-grabbing title - include key topic]
headline: [Short punchy headline for cards, max 10 words]
excerpt: [1-2 sentence hook for social media]
readTime: [estimated minutes to read]
---

[Article body in Markdown with ## headers for each section]`;
}

/**
 * Get category-specific guidance
 */
function getCategoryGuidance(category: NewsCategory): string {
    const guidance: Record<NewsCategory, string> = {
        fed: `## CATEGORY GUIDANCE: Federal Reserve
- Focus on how Fed policy affects purchasing power
- Explain interest rates in terms of savings erosion
- Connect to money printing and dollar devaluation
- Link to: /guide/gold-ira-guide, /why-gold/inflation-protection`,

        gold: `## CATEGORY GUIDANCE: Gold & Precious Metals
- Celebrate gold's role as "real money"
- Compare to fiat currency performance
- Discuss central bank gold buying
- Link to: /guide/gold-ira-guide, /why-gold, /best-gold-ira-companies`,

        economy: `## CATEGORY GUIDANCE: Economy
- Question official statistics (real vs reported inflation)
- Highlight wealth inequality implications
- Connect economic weakness to retirement risk
- Link to: /guide/protect-401k-from-crash, /quiz`,

        retirement: `## CATEGORY GUIDANCE: Retirement
- Emphasize control over your own retirement
- Question reliance on Social Security
- Advocate for self-directed options
- Link to: /self-directed-ira, /solo-401k, /rollover`,

        crypto: `## CATEGORY GUIDANCE: Cryptocurrency
- Position as alternative to fiat, but volatile
- Compare to gold as inflation hedge
- Note regulatory risks
- Link to: /crypto-ira, /reviews/itrustcapital`,

        weekly: `## CATEGORY GUIDANCE: Weekly Roundup
- Summarize 3-5 key events from the week
- Rank by importance to retirement savers
- Provide overall market sentiment
- Link to: multiple relevant guides`,
    };

    return guidance[category];
}

/**
 * Get related guides based on category (only use existing pages!)
 */
export function getRelatedGuidesForCategory(category: NewsCategory): string[] {
    const guides: Record<NewsCategory, string[]> = {
        fed: ["/guide/gold-ira-guide", "/why-gold/inflation-protection", "/best-gold-ira-companies"],
        gold: ["/guide/gold-ira-guide", "/why-gold", "/best-gold-ira-companies"],
        economy: ["/guide/protect-401k-from-crash", "/quiz", "/scenarios"],
        retirement: ["/rollover", "/self-directed-ira", "/solo-401k"],
        crypto: ["/crypto-ira", "/reviews/itrustcapital", "/best-crypto-ira-companies"],
        weekly: ["/guide/gold-ira-guide", "/quiz", "/best-gold-ira-companies"],
    };

    return guides[category];
}

/**
 * Parse Claude's response into article components
 */
export function parseArticleResponse(response: string): {
    title: string;
    headline: string;
    excerpt: string;
    readTime: number;
    body: string;
} | null {
    try {
        // Extract frontmatter
        const frontmatterMatch = response.match(/---\n([\s\S]*?)\n---/);
        if (!frontmatterMatch) return null;

        const frontmatterLines = frontmatterMatch[1].split("\n");
        const frontmatter: Record<string, string> = {};

        for (const line of frontmatterLines) {
            const [key, ...valueParts] = line.split(":");
            if (key && valueParts.length) {
                frontmatter[key.trim()] = valueParts.join(":").trim();
            }
        }

        // Extract body (everything after second ---)
        const bodyMatch = response.match(/---\n[\s\S]*?\n---\n([\s\S]*)/);
        const body = bodyMatch ? bodyMatch[1].trim() : "";

        return {
            title: frontmatter.title || "Untitled",
            headline: frontmatter.headline || frontmatter.title || "Untitled",
            excerpt: frontmatter.excerpt || "",
            readTime: parseInt(frontmatter.readTime) || 4,
            body,
        };
    } catch {
        return null;
    }
}
