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

// Context-aware Augusta link selection
export type AugustaContext = "default" | "comparison" | "fees" | "silver";

export function getAugustaLink(context: AugustaContext = "default"): string {
    switch (context) {
        case "comparison":
            return AFFILIATE_LINKS.augustaComparison;
        case "fees":
            return AFFILIATE_LINKS.augustaZeroFees;
        case "silver":
            return AFFILIATE_LINKS.augustaSilver;
        default:
            return AFFILIATE_LINKS.augusta;
    }
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
