export const AFFILIATE_LINKS = {
    // ============================================
    // AUGUSTA - HIGH INTENT LANDING PAGES
    // ============================================

    // General Gold IRA Guide - Default for high-intent campaigns
    augusta: "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // Company Comparison Checklist - For decision-stage behavior
    augustaComparison: "https://learn.augustapreciousmetals.com/company-checklist-1/?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // Zero Fees Highlight - For value-seeking audiences
    augustaZeroFees: "https://learn.augustapreciousmetals.com/gold-ira-2?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // General Silver IRA - For silver-focused leads
    augustaSilver: "https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // Silver Scheme Exposé - For "buyer beware" / skeptical messaging
    augustaSilverScheme: "https://learn.augustapreciousmetals.com/free-silver-1?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // Buyer Beware - For exposé/critical content (use when Augusta is NOT #1)
    augustaBuyerBeware: "https://learn.augustapreciousmetals.com/apm-lp5v1?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // ============================================
    // AUGUSTA - MID INTENT LANDING PAGES
    // ============================================

    // General Gold IRA Mid - For introductory/educational content
    augustaMidIntent: "https://learn.augustapreciousmetals.com/saving-secrets-af-mid/?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // Zero Fees Mid - For fee-sensitive learners
    augustaZeroFeesMid: "https://learn.augustapreciousmetals.com/gold-ira-af-mid?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",

    // Silver IRA Mid - For mid-intent silver leads
    augustaSilverMid: "https://learn.augustapreciousmetals.com/silver-ira-af-mid?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908",
    noble: "https://noblegoldinvestments.com/gold-silver-ira-guide/?affiliate_id=RICH_DAD", // Placeholder
    goldco: "https://goldco.com/free-kit/?affiliate_id=RICH_DAD", // Placeholder
    americanHartford: "https://www.americanhartfordgold.com/?affiliate_id=RICH_DAD", // Placeholder
    birch: "https://www.birchgold.com/?affiliate_id=RICH_DAD", // Placeholder
    oxford: "https://oxfordgoldgroup.com/?affiliate_id=RICH_DAD", // Placeholder
    lear: "https://learcapital.com/?affiliate_id=RICH_DAD", // Placeholder
    advantage: "https://advantagegold.com/?affiliate_id=RICH_DAD", // Placeholder

    // ============================================
    // CRYPTO IRA COMPANIES (Apply for programs)
    // ============================================
    itrustcapital: "https://itrustcapital.com/?ref=richdad", // Placeholder - apply for affiliate
    altoIra: "https://www.altoira.com/?ref=richdad", // Placeholder
    bitcoinIra: "https://bitcoinira.com/?ref=richdad", // Placeholder
    choiceIra: "https://www.choiceapp.io/?ref=richdad", // Placeholder
    unchainedIra: "https://unchained.com/ira/?ref=richdad", // Placeholder

    // ============================================
    // SELF-DIRECTED IRA CUSTODIANS (Apply for programs)
    // ============================================
    rocketDollar: "https://www.rocketdollar.com/?ref=richdad", // Placeholder
    equityTrust: "https://www.trustetc.com/?ref=richdad", // Placeholder
    entrust: "https://www.theentrustgroup.com/?ref=richdad", // Placeholder
    directedIra: "https://directedira.com/?ref=richdad", // Placeholder

    // ============================================
    // ROBS 401K PROVIDERS (Apply for programs)
    // ============================================
    guidantFinancial: "https://www.guidantfinancial.com/?ref=richdad", // Placeholder
    benetrends: "https://www.bfranchise.com/?ref=richdad", // Placeholder
};

// Context-aware Augusta link selection with sub_id tracking
export type AugustaContext =
    | "default"           // General Gold IRA Guide (high intent)
    | "comparison"        // Company Comparison Checklist
    | "fees"              // Zero Fees Highlight
    | "silver"            // General Silver IRA
    | "scam"              // Silver Scheme Exposé (buyer beware)
    | "buyer-beware"      // Buyer Beware / Exposé content
    | "mid-intent"        // General Gold IRA (mid intent)
    | "fees-mid"          // Zero Fees (mid intent)
    | "silver-mid";       // Silver IRA (mid intent)

export function getAugustaLink(context: AugustaContext = "default", subId?: string): string {
    let baseUrl: string;

    switch (context) {
        // High Intent
        case "comparison":
            baseUrl = AFFILIATE_LINKS.augustaComparison;
            break;
        case "fees":
            baseUrl = AFFILIATE_LINKS.augustaZeroFees;
            break;
        case "silver":
            baseUrl = AFFILIATE_LINKS.augustaSilver;
            break;
        case "scam":
            baseUrl = AFFILIATE_LINKS.augustaSilverScheme;
            break;
        case "buyer-beware":
            baseUrl = AFFILIATE_LINKS.augustaBuyerBeware;
            break;

        // Mid Intent
        case "mid-intent":
            baseUrl = AFFILIATE_LINKS.augustaMidIntent;
            break;
        case "fees-mid":
            baseUrl = AFFILIATE_LINKS.augustaZeroFeesMid;
            break;
        case "silver-mid":
            baseUrl = AFFILIATE_LINKS.augustaSilverMid;
            break;

        default:
            baseUrl = AFFILIATE_LINKS.augusta;
    }

    // Add sub_id for tracking which page generated the lead
    if (subId) {
        return `${baseUrl}&sub_id=${encodeURIComponent(subId)}`;
    }

    return baseUrl;
}

// Helper to get Augusta link with automatic page tracking
export function getAugustaLinkWithTracking(context: AugustaContext = "default", pageName?: string): string {
    // Use page name as sub_id for tracking
    const subId = pageName || context;
    return getAugustaLink(context, subId);
}

// ============================================
// CLICK TRACKING WITH TELEGRAM NOTIFICATIONS
// ============================================

/**
 * Wrap an affiliate link with click tracking
 * This routes through /api/track-click which:
 * 1. Sends a Telegram notification
 * 2. Logs the click
 * 3. Redirects to the destination
 *
 * Usage: getTrackedLink(AFFILIATE_LINKS.augusta, "homepage-hero", "augusta")
 * Usage with traffic type: getTrackedLink(AFFILIATE_LINKS.augusta, "lp-silver-ira", "augusta", "paid")
 */
export function getTrackedLink(
  destinationUrl: string,
  sourcePage: string,
  company: string = "augusta",
  trafficType?: "organic" | "paid",
  campaign?: string
): string {
  const params = new URLSearchParams({
    url: destinationUrl,
    source: sourcePage,
    company: company,
  });
  if (trafficType) {
    params.set("traffic", trafficType);
  }
  if (campaign) {
    params.set("campaign", campaign);
  }
  return `/api/track-click?${params.toString()}`;
}

/**
 * Get Augusta link with tracking
 * Combines context-aware link selection with click tracking
 */
export function getTrackedAugustaLink(
  context: AugustaContext = "default",
  sourcePage: string,
  trafficType?: "organic" | "paid",
  campaign?: string
): string {
  const baseUrl = getAugustaLink(context);
  return getTrackedLink(baseUrl, sourcePage, "augusta", trafficType, campaign);
}

// ============================================
// INTERNAL WARMUP PAGES
// ============================================
// These are internal bridge pages that warm up visitors before sending to affiliate

export const INTERNAL_WARMUP_PAGES = {
  silver: "/lp/augusta-silver",
  gold: "/lp/augusta-gold", // future
} as const;

export const COMPANY_DETAILS = {
    augusta: {
        name: "Augusta Precious Metals",
        minInvestment: "$50,000",
    },
    noble: {
        name: "Noble Gold Investments",
        phone: "877-646-5347",
        minInvestment: "$20,000",
    },
    goldco: {
        name: "Goldco",
        phone: "855-465-3472",
        minInvestment: "$25,000",
    },
    // Add others as needed
};
