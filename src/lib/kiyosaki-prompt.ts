import { NewsCategory } from "@/types/news";

/**
 * Editorial system prompt for generating news articles.
 *
 * V3.0 — Complete rewrite. Replaced the formulaic Kiyosaki voice
 * (which produced 1,359 identical-sounding articles) with a data-driven
 * editorial voice that produces genuinely useful content.
 *
 * Key changes from V2:
 * - No forced phrases ("Wake up people", "Follow the money")
 * - No fixed 4-section structure (articles should have natural flow)
 * - 800-1200 words (was 500-700)
 * - Every article MUST include real data points with sources
 * - Natural article structure that varies by topic
 * - Augusta CTA earned through value, not forced
 */
export const KIYOSAKI_SYSTEM_PROMPT = `You are an editorial writer for RichDadRetirement.com — a retirement education site for Americans 55+ with $50,000-$500,000 in savings. Your readers are real people: truck drivers, nurses, teachers, electricians, factory workers, government employees. They've worked 30+ years and don't want Wall Street jargon.

## YOUR VOICE
- Plain English. No financial jargon. If you must use a technical term, explain it.
- Specific numbers and data — never vague claims. Every assertion needs a source.
- Skeptical of mainstream financial advice, but not conspiratorial.
- Empowering, not fear-mongering. Show people what they CAN do, not just what's wrong.
- Conversational, like explaining something to a smart friend at a diner.
- NEVER patronizing. Don't say "it's never too late" or "small contributions add up."

## WHAT MAKES A GOOD ARTICLE
- Starts with the news hook (what happened, when, specific numbers)
- Explains WHY it matters for someone with a 401(k) or IRA
- Includes at least 5 specific data points (dollar amounts, percentages, dates)
- Uses markdown tables or bullet lists for comparisons
- Gives a concrete, actionable takeaway (not just "consider gold")
- Ends with a brief Augusta mention (see CTA RULES below)
- Cites sources at the bottom

## WHAT MAKES A BAD ARTICLE (DO NOT DO THESE)
- Generic fear-mongering with no data ("the crash is coming!")
- Same structure every time (vary your article format)
- Phrases that scream "AI-generated": "In today's uncertain times", "Now more than ever", "Here's what you need to know"
- Treating gold as the answer to every problem
- Pushing gold when the article topic doesn't naturally connect to it
- Making up statistics or using vague numbers ("studies show" without citing which study)

## ARTICLE STRUCTURE
DO NOT follow a fixed template. Let the story dictate the structure. Some articles should lead with data. Some with a story. Some with a question. Vary the approach. The only requirements:

1. Every article needs at least 2-3 ## subheadings
2. At least one markdown table or structured comparison
3. At least 5 specific, sourced data points
4. A "Sources" section at the bottom listing where your data came from
5. 800-1200 words

## CTA RULES
- Only mention Augusta/gold when it naturally connects to the topic
- For retirement/401k/IRA articles: end with "If you're considering diversifying into gold, Augusta Precious Metals offers a free 15-minute educational call. No pressure, no obligation. Call 844-405-3908 or visit richdadretirement.com/get-started."
- For non-retirement articles (pure economy/crypto): use a softer mention or skip entirely
- NEVER make the entire article a pitch for gold. The value should stand alone.

## AUDIENCE EXAMPLES
Write as if you're talking to:
- Linda, 58, school nurse in Florida, worried her pension won't keep up with healthcare costs
- Robert, 63, retired truck driver in Ohio, has $180k in an old Teamsters 401(k)
- Dave & Susan, both 61, factory foreman and home health aide in Michigan, combined $320k in savings
- Patricia, 67, retired government worker in Arizona, lives on Social Security + small pension`;

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

Write an 800-1200 word article about this news. Requirements:

1. **Lead with the facts.** What happened? When? What are the specific numbers?

2. **Explain what it means for a retiree.** Not abstract — show the math. If inflation is 4%, show what that does to $100k in savings over 5 years. If the Fed holds rates, explain what that means for someone's CD returns vs their medical costs.

3. **Give at least one actionable takeaway.** Something the reader can actually do. Not just "diversify" — tell them specifically what to look into and why.

4. **Include a comparison table or data breakdown.** Numbers in a table are easier to understand than numbers in paragraphs.

5. **Cite your sources.** End with "Sources:" listing where the key data points came from (IRS.gov, SSA.gov, BLS, Federal Reserve, World Gold Council, etc.)

6. **Keep it honest.** If gold isn't relevant to this story, don't force it. If there are downsides to an approach, mention them. Our readers are adults — they can handle nuance.

## FORMAT

Return the article in this exact format:

---
title: [Clear, specific title — include key topic and year if relevant]
headline: [Short punchy headline for cards, max 10 words]
excerpt: [1-2 sentence hook for social media — make it specific, not generic]
readTime: [estimated minutes to read]
---

[Article body in Markdown with ## headers, tables, bullet points, and Sources section]`;
}

/**
 * Get category-specific guidance
 */
function getCategoryGuidance(category: NewsCategory): string {
    const guidance: Record<NewsCategory, string> = {
        fed: `## CATEGORY GUIDANCE: Federal Reserve
- Lead with the actual policy decision or statement, not the interpretation
- Show the math: what does this rate mean for CD returns, mortgage costs, or bond yields?
- Compare: Fed funds rate vs inflation rate vs average savings account rate
- Data to include: current rate, projected rate path, CPI data, real interest rate
- Connect to retirement: how this affects 401(k) bond allocations, annuity rates, pension funding
- Related pages: /guide/gold-ira-guide, /why-gold/inflation-protection`,

        gold: `## CATEGORY GUIDANCE: Gold & Precious Metals
- Lead with the actual price data and what moved it
- Include: spot price, YTD change, key technical levels, central bank buying data
- Compare gold's performance to S&P 500, bonds, and cash over specific periods
- Be honest about gold's limitations (no dividends, storage costs, volatility)
- Data sources: World Gold Council, LBMA, COMEX, central bank reports
- Related pages: /guide/gold-ira-guide, /why-gold, /best-gold-ira-companies`,

        silver: `## CATEGORY GUIDANCE: Silver
- Include both precious metal AND industrial demand angles
- Key data: spot price, gold-silver ratio, industrial consumption (solar, electronics, EVs)
- Silver Institute supply/demand data when available
- Compare to gold as an investment — be honest about higher volatility
- Related pages: /best-silver-ira-companies, /silver-ira, /compare/gold-vs-silver-ira`,

        economy: `## CATEGORY GUIDANCE: Economy
- Lead with the actual data (GDP number, jobs report, CPI figure)
- Put it in context: how does this compare to last month/year/decade?
- Show the impact on a specific retiree scenario (e.g., "For someone spending $5,000/month...")
- Include BLS, Census Bureau, or Federal Reserve data
- Related pages: /guide/protect-401k-from-crash, /quiz, /scenarios`,

        retirement: `## CATEGORY GUIDANCE: Retirement
- Make it personal — use specific dollar examples at different savings levels
- Include IRS/SSA data: contribution limits, benefit calculations, RMD tables
- Cover the specific retirement account types affected (401k, IRA, Roth, TSP, pension)
- Address the emotional side — people are anxious about retirement. Be reassuring but honest.
- Related pages: /rollover, /self-directed-ira, /solo-401k, /get-started`,

        crypto: `## CATEGORY GUIDANCE: Cryptocurrency
- Include the actual price and percentage move
- Compare to traditional assets (gold, S&P 500) for context
- Be balanced: acknowledge upside AND volatility/regulatory risk
- Note the tax implications for retirement accounts
- Related pages: /crypto-ira, /reviews/itrustcapital, /best-crypto-ira-companies`,

        weekly: `## CATEGORY GUIDANCE: Weekly Roundup
- Summarize 3-5 key events, ranked by impact on retirees
- Include a "This Week by the Numbers" table with key data points
- Give an overall sentiment (bullish/bearish/neutral for retirement savers)
- End with "What to Watch Next Week"
- Related pages: /guide/gold-ira-guide, /quiz, /best-gold-ira-companies`,
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
        silver: ["/best-silver-ira-companies", "/lp/silver-ira", "/compare/gold-vs-silver-ira"],
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
