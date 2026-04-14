// src/data/retirement-risk-quiz.ts
// Gold IRA suitability quiz — 10 questions with point-based risk scoring
// Used by the "When NOT to Open a Gold IRA" page and future standalone quiz tool

export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; value: string; points: number }[];
}

export interface RiskCategory {
  id: string;
  label: string;
  range: [number, number];
  description: string;
  recommendation: string;
  ctaType: "gold-ira-guide" | "education" | "alternatives" | "foundations";
  color: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How many years until you need to access your retirement funds?",
    options: [
      { label: "10+ years", value: "10-plus", points: 0 },
      { label: "5-10 years", value: "5-10", points: 1 },
      { label: "3-5 years", value: "3-5", points: 2 },
      { label: "Under 3 years", value: "under-3", points: 3 },
    ],
  },
  {
    id: 2,
    question: "What are your total retirement savings across all accounts?",
    options: [
      { label: "$250,000 or more", value: "250k-plus", points: 0 },
      { label: "$100,000-$249,999", value: "100k-249k", points: 1 },
      { label: "$50,000-$99,999", value: "50k-99k", points: 2 },
      { label: "Under $50,000", value: "under-50k", points: 3 },
    ],
  },
  {
    id: 3,
    question: "How much high-interest debt do you currently carry (credit cards, personal loans above 8% APR)?",
    options: [
      { label: "None", value: "none", points: 0 },
      { label: "A small amount (under $5,000)", value: "small", points: 1 },
      { label: "A moderate amount ($5,000-$20,000)", value: "moderate", points: 2 },
      { label: "A significant amount (over $20,000)", value: "significant", points: 3 },
    ],
  },
  {
    id: 4,
    question: "What percentage of your portfolio is already in alternative investments (gold, real estate, crypto, commodities)?",
    options: [
      { label: "Under 10%", value: "under-10", points: 0 },
      { label: "10-20%", value: "10-20", points: 1 },
      { label: "20-35%", value: "20-35", points: 2 },
      { label: "Over 35%", value: "over-35", points: 3 },
    ],
  },
  {
    id: 5,
    question: "How important is having quick access to your money in the next 3 years?",
    options: [
      { label: "Not important at all", value: "not-important", points: 0 },
      { label: "Somewhat important", value: "somewhat", points: 1 },
      { label: "Important", value: "important", points: 2 },
      { label: "Very important — I may need it", value: "very-important", points: 3 },
    ],
  },
  {
    id: 6,
    question: "How well do you understand Gold IRA rules (contribution limits, required minimum distributions, approved metals)?",
    options: [
      { label: "Very well — I have researched thoroughly", value: "very-well", points: 0 },
      { label: "Somewhat — I know the basics", value: "somewhat", points: 1 },
      { label: "A little — I have heard of Gold IRAs", value: "a-little", points: 2 },
      { label: "Not at all — this is brand new to me", value: "not-at-all", points: 3 },
    ],
  },
  {
    id: 7,
    question: "What is your main reason for considering a Gold IRA?",
    options: [
      { label: "Portfolio diversification as part of a balanced strategy", value: "diversification", points: 0 },
      { label: "Long-term hedge against inflation", value: "inflation-hedge", points: 1 },
      { label: "Concern about a stock market crash", value: "market-concern", points: 2 },
      { label: "A TV or radio ad scared me into looking", value: "fear-ads", points: 3 },
    ],
  },
  {
    id: 8,
    question: "How sensitive are you to annual account fees ($200-$400/year for most Gold IRAs)?",
    options: [
      { label: "Low — fees are a small percentage of my balance", value: "low", points: 0 },
      { label: "Moderate — I would notice them but can absorb them", value: "moderate", points: 1 },
      { label: "High — I try to minimize all fees", value: "high", points: 2 },
      { label: "Very high — those fees would materially affect my returns", value: "material", points: 3 },
    ],
  },
  {
    id: 9,
    question: "How old are you?",
    options: [
      { label: "60 or older", value: "60-plus", points: 0 },
      { label: "50-59", value: "50-59", points: 1 },
      { label: "40-49", value: "40-49", points: 2 },
      { label: "Under 40", value: "under-40", points: 3 },
    ],
  },
  {
    id: 10,
    question: "Do you have an emergency fund covering 3-6 months of expenses outside of your retirement accounts?",
    options: [
      { label: "Yes — fully funded", value: "yes", points: 0 },
      { label: "Mostly — close to 3 months", value: "mostly", points: 1 },
      { label: "Not really — I have some savings but not enough", value: "not-really", points: 2 },
      { label: "No — my retirement account is my only savings", value: "no", points: 3 },
    ],
  },
];

export const riskCategories: RiskCategory[] = [
  {
    id: "low",
    label: "Low Risk",
    range: [0, 7],
    description:
      "Your financial situation aligns well with a Gold IRA. You have sufficient savings, a long time horizon, manageable debt, and a clear understanding of the product. A Gold IRA can serve as an effective portfolio diversifier for you.",
    recommendation:
      "You are a strong candidate for a Gold IRA. Consider requesting a free information kit from a top-rated company to compare fees, minimums, and storage options before committing.",
    ctaType: "gold-ira-guide",
    color: "green",
  },
  {
    id: "moderate",
    label: "Moderate Risk",
    range: [8, 14],
    description:
      "A Gold IRA could work for you, but there are a few areas to address first. You may need to build up your savings, extend your time horizon, or learn more about how these accounts work before investing.",
    recommendation:
      "Take time to educate yourself before opening an account. Read our guides on Gold IRA fees, rules, and the rollover process. Address any debt or liquidity concerns first, then revisit.",
    ctaType: "education",
    color: "amber",
  },
  {
    id: "high",
    label: "High Risk",
    range: [15, 21],
    description:
      "A Gold IRA is likely not the right move for you right now. Multiple factors — such as a short time horizon, limited savings, high debt, or a fear-based motivation — suggest the costs and constraints would outweigh the benefits.",
    recommendation:
      "Consider alternatives that offer lower fees and more liquidity: gold ETFs (GLD, IAU), gold mining stock funds, or I-Bonds for inflation protection. Revisit a Gold IRA once your financial foundation is stronger.",
    ctaType: "alternatives",
    color: "orange",
  },
  {
    id: "critical",
    label: "Critical Risk",
    range: [22, 30],
    description:
      "Opening a Gold IRA right now would almost certainly hurt your financial situation. Your combination of limited savings, short timeline, debt burden, and lack of emergency reserves means you need to focus on financial fundamentals first.",
    recommendation:
      "Before investing in anything new: (1) build a 3-month emergency fund, (2) pay down high-interest debt, (3) maximize any employer 401(k) match, and (4) learn the basics of retirement investing. A Gold IRA can wait.",
    ctaType: "foundations",
    color: "red",
  },
];

/** Calculate total points from quiz answers */
export function calculateScore(answers: Record<number, number>): number {
  return Object.values(answers).reduce((sum, points) => sum + points, 0);
}

/** Get the risk category for a given score */
export function getRiskCategory(score: number): RiskCategory {
  const category = riskCategories.find(
    (cat) => score >= cat.range[0] && score <= cat.range[1]
  );
  return category || riskCategories[riskCategories.length - 1];
}
