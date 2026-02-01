export interface RetirementAgeData {
  age: number;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  defaultAmount: number;
  timeHorizon: number; // 85 - age
  painPoints: string[];
  benefits: string[];
  ctaText: string;
  trackSource: string;
}

export const retirementAges: Record<string, RetirementAgeData> = {
  "55": {
    age: 55,
    slug: "55",
    metaTitle: "How Much Do I Need to Retire at 55? | Calculate Your Number",
    metaDescription:
      "Calculate exactly how much you need to retire at 55. See your target number and learn how to protect it from 30+ years of inflation.",
    heroHeadline: "How Much Do You Need to Retire at 55?",
    heroSubheadline:
      "Find your number. Then protect it from 30 years of inflation with a proven hedge.",
    defaultAmount: 500000,
    timeHorizon: 30, // 85 - 55
    painPoints: [
      "30+ years of withdrawals from your nest egg",
      "Healthcare costs before Medicare kicks in at 65",
      "An extra decade of inflation eating your savings",
      "Social Security penalties if you claim early",
      "Sequence of returns risk during the longest retirement window",
    ],
    benefits: [
      "Longest time horizon means maximum compound growth potential",
      "More flexibility to adjust your strategy over time",
      "Early financial independence and freedom",
      "Time to pursue passions while you're still young and healthy",
      "Gold's inflation hedge is most powerful over 30-year periods",
    ],
    ctaText: "Calculate & Protect Your Retirement",
    trackSource: "how-much-retire-55",
  },
  "60": {
    age: 60,
    slug: "60",
    metaTitle: "How Much Do I Need to Retire at 60? | Calculate Your Number",
    metaDescription:
      "Calculate exactly how much you need to retire at 60. See your target number and learn how to protect it from 25 years of inflation.",
    heroHeadline: "How Much Do You Need to Retire at 60?",
    heroSubheadline:
      "Find your number. Then protect it from 25 years of inflation with a proven hedge.",
    defaultAmount: 500000,
    timeHorizon: 25, // 85 - 60
    painPoints: [
      "25 years of withdrawals to plan for",
      "5 years of healthcare costs before Medicare at 65",
      "Peak earning years cut short—is your savings enough?",
      "Social Security benefits reduced if claimed before full retirement age",
      "Market volatility could derail your retirement right at the start",
    ],
    benefits: [
      "Sweet spot between early retirement and Social Security optimization",
      "Still young enough to enjoy active retirement years",
      "Time to recover from any early market downturns",
      "Can delay Social Security for higher lifetime benefits",
      "Gold provides stability during critical first years of retirement",
    ],
    ctaText: "Calculate & Protect Your Retirement",
    trackSource: "how-much-retire-60",
  },
  "62": {
    age: 62,
    slug: "62",
    metaTitle: "How Much Do I Need to Retire at 62? | Calculate Your Number",
    metaDescription:
      "Calculate exactly how much you need to retire at 62. See your target number and learn how to protect it from 23 years of inflation.",
    heroHeadline: "How Much Do You Need to Retire at 62?",
    heroSubheadline:
      "Find your number. Then protect it from 23 years of inflation with a proven hedge.",
    defaultAmount: 500000,
    timeHorizon: 23, // 85 - 62
    painPoints: [
      "Temptation to claim Social Security early at reduced benefits",
      "23 years of withdrawals still requires substantial savings",
      "3 years of healthcare costs before Medicare at 65",
      "Potential 25-30% reduction in Social Security if claimed at 62",
      "Retirement accounts may not have reached their full potential",
    ],
    benefits: [
      "First year you can claim Social Security benefits",
      "Common retirement age with well-documented planning strategies",
      "Shorter gap to Medicare reduces healthcare cost uncertainty",
      "Still have time to let delayed Social Security credits grow",
      "Gold can bridge the gap while you optimize Social Security timing",
    ],
    ctaText: "Calculate & Protect Your Retirement",
    trackSource: "how-much-retire-62",
  },
};

export const retirementAgeSlugs = Object.keys(retirementAges);

export function getRetirementAgeData(age: string): RetirementAgeData | undefined {
  return retirementAges[age];
}
