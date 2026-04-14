export interface AdjacentResource {
  id: string;
  name: string;
  category:
    | "estate-planning"
    | "medicare"
    | "long-term-care"
    | "insurance"
    | "tax-planning"
    | "elder-protection";
  description: string;
  url: string;
  icon: string;
  relevantPages: string[];
}

export const adjacentResources: AdjacentResource[] = [
  // ── Estate Planning ──────────────────────────────────────────────
  {
    id: "aarp-estate-planning",
    name: "AARP Estate Planning Guide",
    category: "estate-planning",
    description:
      "Step-by-step estate planning basics including wills, trusts, and power of attorney from AARP.",
    url: "https://www.aarp.org/money/investing/info-2022/estate-planning-guide.html",
    icon: "FileText",
    relevantPages: [
      "widow-guide",
      "grandchildren",
      "inheritance",
      "senior-protection",
      "estate-planning",
    ],
  },
  {
    id: "nolo-will-maker",
    name: "Nolo Will & Estate Resources",
    category: "estate-planning",
    description:
      "Free legal articles on wills, living trusts, probate, and estate planning from the trusted legal publisher.",
    url: "https://www.nolo.com/legal-encyclopedia/wills-trusts-estates",
    icon: "Scale",
    relevantPages: [
      "widow-guide",
      "grandchildren",
      "inheritance",
      "estate-planning",
    ],
  },
  {
    id: "trust-and-will",
    name: "Trust & Will",
    category: "estate-planning",
    description:
      "Online estate planning platform for creating wills, trusts, and guardianship documents.",
    url: "https://trustandwill.com/",
    icon: "ShieldCheck",
    relevantPages: [
      "widow-guide",
      "grandchildren",
      "inheritance",
      "estate-planning",
    ],
  },

  // ── Medicare ─────────────────────────────────────────────────────
  {
    id: "medicare-gov",
    name: "Medicare.gov",
    category: "medicare",
    description:
      "Official U.S. government site for Medicare coverage, enrollment periods, and plan comparison tools.",
    url: "https://www.medicare.gov/",
    icon: "Heart",
    relevantPages: [
      "medicaid-planning",
      "retirement-planning",
      "senior-protection",
      "healthcare",
    ],
  },
  {
    id: "aarp-medicare-guide",
    name: "AARP Medicare Resource Center",
    category: "medicare",
    description:
      "Medicare basics, plan comparisons, and enrollment guidance for those approaching or in retirement.",
    url: "https://www.aarp.org/health/medicare-insurance/",
    icon: "HeartPulse",
    relevantPages: [
      "medicaid-planning",
      "retirement-planning",
      "senior-protection",
      "healthcare",
    ],
  },

  // ── Long-Term Care ───────────────────────────────────────────────
  {
    id: "longtermcare-gov",
    name: "LongTermCare.gov",
    category: "long-term-care",
    description:
      "Federal resource on planning and paying for long-term care services, including state-by-state costs.",
    url: "https://acl.gov/ltc",
    icon: "Building2",
    relevantPages: [
      "medicaid-planning",
      "senior-protection",
      "retirement-planning",
      "long-term-care",
    ],
  },
  {
    id: "genworth-cost-of-care",
    name: "Genworth Cost of Care Survey",
    category: "long-term-care",
    description:
      "Annual survey data on assisted living, home care, and nursing home costs by state and metro area.",
    url: "https://www.genworth.com/aging-and-you/finances/cost-of-care.html",
    icon: "DollarSign",
    relevantPages: [
      "medicaid-planning",
      "retirement-planning",
      "long-term-care",
    ],
  },

  // ── Elder Protection ─────────────────────────────────────────────
  {
    id: "cfpb-elder-resources",
    name: "CFPB Elder Fraud Prevention",
    category: "elder-protection",
    description:
      "Consumer Financial Protection Bureau resources for spotting and reporting elder financial exploitation.",
    url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/resources-for-older-adults/",
    icon: "ShieldAlert",
    relevantPages: [
      "senior-protection",
      "scams",
      "buyer-beware",
      "gold-ira-scams",
    ],
  },
  {
    id: "fbi-ic3",
    name: "FBI Internet Crime Complaint Center",
    category: "elder-protection",
    description:
      "Report internet fraud and review annual reports on financial crimes targeting older Americans.",
    url: "https://www.ic3.gov/",
    icon: "AlertTriangle",
    relevantPages: [
      "senior-protection",
      "scams",
      "buyer-beware",
      "gold-ira-scams",
    ],
  },
  {
    id: "ftc-elder-fraud",
    name: "FTC Scam Alerts",
    category: "elder-protection",
    description:
      "Federal Trade Commission alerts on the latest scams, fraud schemes, and steps to protect yourself.",
    url: "https://consumer.ftc.gov/scam-alerts",
    icon: "Bell",
    relevantPages: [
      "senior-protection",
      "scams",
      "buyer-beware",
      "gold-ira-scams",
    ],
  },

  // ── Tax Planning ─────────────────────────────────────────────────
  {
    id: "irs-retirement-topics",
    name: "IRS Retirement Plan Topics",
    category: "tax-planning",
    description:
      "Official IRS guidance on IRA contributions, deductions, RMDs, and tax treatment of retirement accounts.",
    url: "https://www.irs.gov/retirement-plans",
    icon: "Landmark",
    relevantPages: [
      "tax-rules",
      "rmd",
      "rollover",
      "gold-ira-rules",
      "retirement-planning",
    ],
  },
  {
    id: "fidelity-rmd-guide",
    name: "Fidelity RMD Guide",
    category: "tax-planning",
    description:
      "Clear breakdown of required minimum distribution rules, deadlines, and calculation examples.",
    url: "https://www.fidelity.com/building-savings/learn-about-iras/required-minimum-distributions/overview",
    icon: "Calculator",
    relevantPages: ["rmd", "tax-rules", "inherited-ira", "retirement-planning"],
  },

  // ── Insurance ────────────────────────────────────────────────────
  {
    id: "naic-consumer-guides",
    name: "NAIC Consumer Insurance Guides",
    category: "insurance",
    description:
      "National Association of Insurance Commissioners guides on annuities, life insurance, and long-term care policies.",
    url: "https://content.naic.org/consumer.htm",
    icon: "Umbrella",
    relevantPages: [
      "annuities",
      "insurance",
      "retirement-planning",
      "long-term-care",
    ],
  },
  {
    id: "insurance-information-institute",
    name: "Insurance Information Institute",
    category: "insurance",
    description:
      "Independent source for understanding insurance products, coverage types, and consumer protection.",
    url: "https://www.iii.org/",
    icon: "BadgeCheck",
    relevantPages: ["annuities", "insurance", "retirement-planning"],
  },
];

/**
 * Retrieve adjacent resources relevant to a specific page slug.
 * Falls back to all resources if no matches are found.
 */
export function getAdjacentResources(
  pageSlug: string,
  maxItems = 6
): AdjacentResource[] {
  const matched = adjacentResources.filter((r) =>
    r.relevantPages.includes(pageSlug)
  );

  if (matched.length > 0) {
    return matched.slice(0, maxItems);
  }

  // Fallback: return a diverse mix (one per category where possible)
  const seen = new Set<string>();
  const diverse: AdjacentResource[] = [];
  for (const resource of adjacentResources) {
    if (!seen.has(resource.category)) {
      seen.add(resource.category);
      diverse.push(resource);
    }
    if (diverse.length >= maxItems) break;
  }
  return diverse;
}

/**
 * Retrieve adjacent resources filtered by category.
 */
export function getAdjacentResourcesByCategory(
  category: AdjacentResource["category"],
  maxItems = 6
): AdjacentResource[] {
  return adjacentResources
    .filter((r) => r.category === category)
    .slice(0, maxItems);
}
