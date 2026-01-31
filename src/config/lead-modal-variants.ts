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
      "Money Magazine's Best Overall 2024",
      "Zero BBB Complaints",
      "Zero Setup Fees for 10 Years",
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
      "Money Magazine's Best Overall 2024",
      "Zero BBB Complaints",
      "No Obligation Consultation",
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
      "Money Magazine's Best Overall 2024",
      "Zero BBB Complaints",
      "Zero Setup Fees for 10 Years",
    ],
  },
  seniors: {
    headline: "Get Your Retirement Protection Guide",
    subtext: "Secure your retirement with precious metals",
    benefits: [
      "Money Magazine's Best Overall 2024",
      "Zero BBB Complaints",
      "No Obligation Consultation",
    ],
  },
  "silver-seniors": {
    headline: "Get Your Silver Retirement Guide",
    subtext: "Protect your savings with affordable silver",
    benefits: [
      "Money Magazine's Best Overall 2024",
      "Zero BBB Complaints",
      "No Obligation Consultation",
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
      "Money Magazine's Best Overall 2024",
      "Zero BBB Complaints",
      "Zero Setup Fees for 10 Years",
    ],
  },
};
