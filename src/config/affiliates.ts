export const AFFILIATE_LINKS = {
    // Augusta customer landing pages (with affiliate tracking)
    augusta: "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129",
    augustaComparison: "https://learn.augustapreciousmetals.com/company-checklist-1/?apmtrkr_cid=1696&aff_id=5129",
    augustaZeroFees: "https://learn.augustapreciousmetals.com/gold-ira-2?apmtrkr_cid=1696&aff_id=5129",
    augustaSilver: "https://learn.augustapreciousmetals.com/silver-ira?apmtrkr_cid=1696&aff_id=5129",
    noble: "https://noblegoldinvestments.com/gold-silver-ira-guide/?affiliate_id=RICH_DAD", // Placeholder
    goldco: "https://goldco.com/free-kit/?affiliate_id=RICH_DAD", // Placeholder
    americanHartford: "https://www.americanhartfordgold.com/?affiliate_id=RICH_DAD", // Placeholder
    birch: "https://www.birchgold.com/?affiliate_id=RICH_DAD", // Placeholder
    oxford: "https://oxfordgoldgroup.com/?affiliate_id=RICH_DAD", // Placeholder
    lear: "https://learcapital.com/?affiliate_id=RICH_DAD", // Placeholder
    advantage: "https://advantagegold.com/?affiliate_id=RICH_DAD", // Placeholder
};

// Context-aware Augusta link selection with sub_id tracking
export type AugustaContext = "default" | "comparison" | "fees" | "silver";

export function getAugustaLink(context: AugustaContext = "default", subId?: string): string {
    let baseUrl: string;

    switch (context) {
        case "comparison":
            baseUrl = AFFILIATE_LINKS.augustaComparison;
            break;
        case "fees":
            baseUrl = AFFILIATE_LINKS.augustaZeroFees;
            break;
        case "silver":
            baseUrl = AFFILIATE_LINKS.augustaSilver;
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

export const COMPANY_DETAILS = {
    augusta: {
        name: "Augusta Precious Metals",
        phone: "800-123-4567",
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
