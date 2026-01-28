export type VariantConfig = {
  headline: string;
  subtext: string;
  benefits: string[];
};

export const leadModalVariants: Record<string, VariantConfig> = {
  fees: {
    headline: "Get Your Free Fee Breakdown",
    subtext: "See exactly what Gold IRAs cost — no hidden fees",
    benefits: [
      "Full fee transparency — no surprises",
      "Compare costs across top providers",
      "Understand setup, storage & annual fees",
    ],
  },
  compare: {
    headline: "Get Your Comparison Guide",
    subtext: "See how top Gold IRA companies stack up",
    benefits: [
      "Side-by-side company comparisons",
      "Ratings, fees & minimums explained",
      "Find the best fit for your situation",
    ],
  },
  silver: {
    headline: "Get Your Silver IRA Kit",
    subtext: "Discover how to protect wealth with silver",
    benefits: [
      "Learn why silver outperforms in downturns",
      "IRS-approved silver options explained",
      "Diversify beyond just gold",
    ],
  },
  "silver-fees": {
    headline: "Get Your Silver IRA Fee Guide",
    subtext: "See what Silver IRAs really cost",
    benefits: [
      "Silver-specific fee breakdown",
      "Storage cost comparisons",
      "No hidden charges explained",
    ],
  },
  "401k": {
    headline: "Start Your 401k Rollover",
    subtext: "Move your 401k to gold — tax-free",
    benefits: [
      "Tax-free rollover process explained",
      "Keep your retirement tax-advantaged",
      "Step-by-step guidance provided",
    ],
  },
  seniors: {
    headline: "Get Your Retirement Protection Guide",
    subtext: "Secure your retirement with precious metals",
    benefits: [
      "Protect savings from market volatility",
      "Inflation-proof your retirement",
      "No minimum age requirements",
    ],
  },
  protect: {
    headline: "Protect Your Retirement Savings",
    subtext: "See how gold shields your wealth",
    benefits: [
      "Hedge against economic uncertainty",
      "Preserve purchasing power",
      "Physical assets you can trust",
    ],
  },
  default: {
    headline: "Get Your Free Consultation",
    subtext: "Speak with a Gold IRA specialist",
    benefits: [
      "No-obligation consultation",
      "Expert answers to your questions",
      "Personalized retirement guidance",
    ],
  },
};
