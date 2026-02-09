/**
 * Facebook Post Generator
 * Uses Claude API to generate engaging Facebook posts for silver articles
 * Targets: Americans 55-75, fiscally conservative, $50K+ in 401(k)/IRA
 * Facebook allows longer posts than Twitter — more room for education
 */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const anthropic = new Anthropic({
    apiKey: CONFIG.claude.apiKey,
});

/**
 * Generate a Facebook post for a silver article
 */
export async function generateFacebookPost(
    title: string,
    excerpt: string,
    slug: string
): Promise<string | null> {
    try {
        const response = await anthropic.messages.create({
            model: CONFIG.claude.model,
            max_tokens: 600,
            messages: [
                {
                    role: "user",
                    content: `You write high-engagement Facebook posts for a precious metals retirement platform. Your posts get shared widely among conservative Americans aged 55-75.

ARTICLE TITLE: ${title}
ARTICLE EXCERPT: ${excerpt}

YOUR AUDIENCE:
- Americans 55-75 with $50K-$500K+ in their 401(k) or IRA
- Fiscally conservative, Republican-leaning, many Trump supporters
- Deeply worried about: inflation, national debt, government overspending, dollar collapse
- Distrustful of: Wall Street, big banks, the Fed, mainstream financial media
- They value: self-reliance, hard work, protecting family wealth, tangible assets
- Active on Facebook, share posts that validate their concerns

WRITE A FACEBOOK POST (300-500 characters) that:
1. Opens with a bold statement or shocking fact that stops the scroll
2. Educates them — teach something specific about silver they didn't know
3. Connects it to THEIR retirement (use "your 401(k)" or "your retirement")
4. Creates urgency without being salesy
5. Ends with a call to action: "Read the full story" or "See why smart retirees are paying attention"

STYLE:
- Conversational, like a knowledgeable friend sharing important news
- Use line breaks between thoughts for readability
- Plain-spoken American English, no jargon
- No emojis, no hashtags
- Do NOT include any URL (it will be attached separately)
- Output ONLY the post text, nothing else. No quotes around it.`,
                },
            ],
        });

        const textContent = response.content.find((block) => block.type === "text");
        if (!textContent || textContent.type !== "text") {
            console.error("  No text content in Facebook post response");
            return null;
        }

        let postText = textContent.text.trim();

        // Remove quotes if Claude wrapped it
        if (
            (postText.startsWith('"') && postText.endsWith('"')) ||
            (postText.startsWith("'") && postText.endsWith("'"))
        ) {
            postText = postText.slice(1, -1);
        }

        return postText;
    } catch (error) {
        console.error("  Error generating Facebook post:", error);
        return null;
    }
}
