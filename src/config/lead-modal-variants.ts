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
    headline: "Send Me The Free 2026 Gold IRA Kit",
    subtext: "Secure your retirement with precious metals",
    benefits: [
      "Protect savings from market volatility",
      "Inflation-proof your retirement",
      "No minimum age requirements",
    ],
  },
  "silver-seniors": {
    headline: "Get Your Silver Retirement Guide",
    subtext: "Protect your savings with affordable silver",
    benefits: [
      "Silver: more affordable than gold",
      "Same tax benefits as Gold IRA",
      "Protect against inflation",
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
  "retirement-number": {
    headline: "Get Your Personalized Retirement Number",
    subtext: "See exactly how much you need — and how to protect it",
    benefits: [
      "Personalized retirement calculation",
      "Inflation protection strategies",
      "Tax-free rollover options explained",
    ],
  },
  // --- V2 Campaign Variants ---
  "free-gold-kit": {
    headline: "Get Your Free 2026 Gold IRA Kit",
    subtext: "Everything you need to know about protecting your retirement with gold",
    benefits: [
      "Complete Gold IRA guide & fee chart",
      "2026 tax rules & rollover steps",
      "Zero obligation — 100% free",
    ],
  },
  "seniors-v2": {
    headline: "Your Senior\u2019s Gold IRA Guide",
    subtext: "The safe-haven strategy trusted by Americans 60+",
    benefits: [
      "Designed for retirees & pre-retirees",
      "Phone-based support — no apps needed",
      "No age limit to get started",
    ],
  },
  "convert-401k": {
    headline: "Convert Your 401(k) to Gold",
    subtext: "Tax-free rollover in as little as 3 steps",
    benefits: [
      "Tax-free 401(k) to Gold IRA rollover",
      "Works with 401k, 403b, TSP & IRA",
      "Dedicated specialist walks you through it",
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
