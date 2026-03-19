// Qualification funnel types for /get-started

export type SavingsTier =
  | "under-25k"
  | "25k-50k"
  | "50k-100k"
  | "100k-250k"
  | "250k-500k"
  | "500k-plus";

export type Concern =
  | "inflation"
  | "market-crash"
  | "outliving-savings"
  | "legacy";

export type QualificationTier =
  | "augusta-white-glove"   // $250k+
  | "augusta-private"       // $100k-$250k
  | "augusta-standard"      // $50k-$100k
  | "secondary"             // $25k-$50k → Goldco/AHG
  | "starter";              // <$25k → Noble Gold

export interface FunnelState {
  step: "savings" | "concern" | "result" | "contact" | "submitting" | "success";
  savingsTier: SavingsTier | null;
  concern: Concern | null;
  qualificationTier: QualificationTier | null;
  firstName: string;
  email: string;
  phone: string;
}

export interface QualificationResult {
  tier: QualificationTier;
  companyName: string;
  headline: string;
  description: string;
  affiliateKey: string;
  requiresPhone: boolean;
}

export const SAVINGS_OPTIONS: { value: SavingsTier; label: string }[] = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-250k", label: "$100,000 – $250,000" },
  { value: "250k-500k", label: "$250,000 – $500,000" },
  { value: "500k-plus", label: "$500,000+" },
];

export const CONCERN_OPTIONS: { value: Concern; label: string; icon: string }[] = [
  { value: "inflation", label: "Inflation eating my savings", icon: "TrendingDown" },
  { value: "market-crash", label: "A stock market crash", icon: "AlertTriangle" },
  { value: "outliving-savings", label: "Outliving my money", icon: "Clock" },
  { value: "legacy", label: "Leaving something behind", icon: "Heart" },
];

export function getQualificationResult(savingsTier: SavingsTier): QualificationResult {
  switch (savingsTier) {
    case "500k-plus":
    case "250k-500k":
      return {
        tier: "augusta-white-glove",
        companyName: "Augusta Precious Metals",
        headline: "You qualify for Augusta's White Glove program",
        description: "With your savings level, you'll get a dedicated account executive, lifetime support, and their Harvard-trained economist's personal analysis of your portfolio.",
        affiliateKey: "augusta",
        requiresPhone: true,
      };
    case "100k-250k":
      return {
        tier: "augusta-private",
        companyName: "Augusta Precious Metals",
        headline: "You qualify for Augusta's Private Client program",
        description: "Augusta's team will walk you through every step. Zero fees for up to 10 years, A+ BBB rating, and a one-on-one session with their Harvard economist.",
        affiliateKey: "augusta",
        requiresPhone: true,
      };
    case "50k-100k":
      return {
        tier: "augusta-standard",
        companyName: "Augusta Precious Metals",
        headline: "Great news — you meet Augusta's minimum",
        description: "Augusta accepts accounts starting at $50,000. You'll get their full white-glove treatment, zero fees for up to 10 years, and lifetime support.",
        affiliateKey: "augusta",
        requiresPhone: true,
      };
    case "25k-50k":
      return {
        tier: "secondary",
        companyName: "Goldco",
        headline: "We found the perfect match for you",
        description: "Goldco specializes in accounts in your range, with a $25,000 minimum. A+ BBB rated, thousands of 5-star reviews, and a simple rollover process.",
        affiliateKey: "goldco",
        requiresPhone: true,
      };
    case "under-25k":
      return {
        tier: "starter",
        companyName: "Noble Gold Investments",
        headline: "Start building your gold position today",
        description: "Noble Gold has one of the lowest minimums in the industry. Start protecting your savings now and grow from there.",
        affiliateKey: "noble",
        requiresPhone: false,
      };
  }
}
