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

export function getQuizResult(answers: Partial<QuizState>): QuizResult {
    const amount = answers.savingsAmount;

    // Default to Noble Gold (Lower minimums)
    let result: QuizResult = {
        partnerId: "noble-gold",
        name: "Noble Gold Investments",
        headline: "Best for Lower Minimums",
        description: "Noble Gold makes it easy to get started with smaller amounts. They offer excellent education and a simple process for first-time investors.",
        affiliateLink: "https://noblegoldinvestments.com", // Placeholder
        minInvestment: "$20,000",
        benefits: ["Low Minimum Investment", "Free Gold Guide", "Direct-to-Consumer Pricing"],
        match: "Wealth Protection Starter",
        score: 35,
        scoreLabel: "Exposed"
    };

    // Logic for American Hartford Gold ($25k - $100k)
    if (amount === "25k-50k" || amount === "50k-100k") {
        result = {
            partnerId: "american-hartford",
            name: "American Hartford Gold",
            headline: "Best for Retirement Protection",
            description: "Recommended by Bill O'Reilly. American Hartford Gold is the top choice for protecting your retirement savings from inflation with physical metals.",
            affiliateLink: "https://americanhartfordgold.com", // Placeholder
            minInvestment: "$10,000",
            benefits: ["Price Match Guarantee", "100% Free IRA Rollover", "Buyback Commitment"],
            match: "Inflation Hedge Strategy",
            score: 65,
            scoreLabel: "Partially Protected"
        };
    }

    // Logic for Augusta Precious Metals ($100k+)
    if (amount === "100k-250k" || amount === "250k+") {
        result = {
            partnerId: "augusta",
            name: "Augusta Precious Metals",
            headline: "Best for High Net Worth",
            description: "Rated 'Most Trusted' in the US. Augusta offers a VIP experience with 1-on-1 education from Harvard-trained economists. The 'Rich Dad' choice for serious investors.",
            affiliateLink: "https://augustapreciousmetals.com", // Placeholder
            minInvestment: "$50,000",
            benefits: ["1-on-1 Education Web Conference", "Zero Fees for up to 10 Years", "Account Lifetime Support"],
            match: "Generational Wealth Strategy",
            score: 92,
            scoreLabel: "Rich Dad Approved"
        };
    }

    return result;
}
