import { z } from "zod";

export const quizSchema = z.object({
    ageRange: z.string(),
    savingsAmount: z.string(),
    investmentGoal: z.string(),
    timeline: z.string(),
    email: z.string().email().optional(),
});

export type QuizState = z.infer<typeof quizSchema>;

export interface QuizResult {
    partnerId: string;
    name: string;
    headline: string;
    description: string;
    affiliateLink: string;
    minInvestment: string;
    benefits: string[];
    match: string;
    score: number; // 0-100
    scoreLabel: "Exposed" | "Partially Protected" | "Rich Dad Approved";
}

// ===========================================
// AFFILIATE LINKS - UPDATE THESE WITH YOUR TRACKING URLS
// ===========================================
const AFFILIATE_LINKS = {
    orion: "https://orionmetalexchange.com", // TODO: Replace with your Orion affiliate link
    noble: "https://noblegoldinvestments.com", // TODO: Replace with your Noble Gold affiliate link
    augusta: "https://augustapreciousmetals.com", // TODO: Replace with your Augusta affiliate link
};

export function getQuizResult(answers: Partial<QuizState>): QuizResult {
    const amount = answers.savingsAmount;

    // TIER 1: Under $20k → Orion Metal Exchange ($5k minimum)
    let result: QuizResult = {
        partnerId: "orion",
        name: "Orion Metal Exchange",
        headline: "Best for New Investors",
        description: "Orion Metal Exchange has the lowest minimum in the industry at just $5,000. Perfect for getting started with precious metals without a massive commitment. Transparent pricing and A+ BBB rated.",
        affiliateLink: AFFILIATE_LINKS.orion,
        minInvestment: "$5,000",
        benefits: ["Lowest $5,000 Minimum", "Real-Time Transparent Pricing", "Buy-Back Program Included"],
        match: "Wealth Protection Starter",
        score: 55,
        scoreLabel: "Partially Protected"
    };

    // TIER 2: $20k - $50k → Noble Gold
    if (amount === "25k-50k") {
        result = {
            partnerId: "noble-gold",
            name: "Noble Gold Investments",
            headline: "Best for Mid-Range Investors",
            description: "Noble Gold is the sweet spot for investors with $20,000-$50,000. Excellent education, simple process, and a reputation for outstanding customer service. The smart choice for serious wealth protection.",
            affiliateLink: AFFILIATE_LINKS.noble,
            minInvestment: "$20,000",
            benefits: ["Free Gold Investment Guide", "Simple 3-Step Process", "Excellent Customer Service"],
            match: "Inflation Hedge Strategy",
            score: 72,
            scoreLabel: "Partially Protected"
        };
    }

    // TIER 3: $50k+ → Augusta Precious Metals
    if (amount === "50k-100k" || amount === "100k-250k" || amount === "250k+") {
        result = {
            partnerId: "augusta",
            name: "Augusta Precious Metals",
            headline: "Best for Serious Investors",
            description: "Rated 'Most Trusted' in the US. Augusta offers a VIP experience with 1-on-1 education from Harvard-trained economists. The 'Rich Dad' choice for investors who want the best service and protection.",
            affiliateLink: AFFILIATE_LINKS.augusta,
            minInvestment: "$50,000",
            benefits: ["1-on-1 Education Web Conference", "Zero Fees for up to 10 Years", "Account Lifetime Support"],
            match: "Generational Wealth Strategy",
            score: 92,
            scoreLabel: "Rich Dad Approved"
        };
    }

    return result;
}
