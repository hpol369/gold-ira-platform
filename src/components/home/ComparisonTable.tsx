import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Star, CheckCircle2, ArrowRight, ShieldCheck, Trophy, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { AFFILIATE_LINKS } from "@/config/affiliates";

interface Company {
    rank: number;
    name: string;
    logoAlt: string;
    rating: number;
    reviews: string;
    minInvestment: string;
    bestFor: string;
    bestForBadge: string;
    pros: string[];
    ctaUrl: string;
    reviewUrl: string;
    badgeColor: "gold" | "silver" | "bronze" | "blue";
}

const companies: Company[] = [
    {
        rank: 1,
        name: "Augusta Precious Metals",
        logoAlt: "Augusta Precious Metals Logo",
        rating: 4.9,
        reviews: "1,000+ 5-Star Reviews",
        minInvestment: "$50,000",
        bestFor: "High Net Worth Investors ($100k+)",
        bestForBadge: "Best Overall 2026",
        pros: ["Zero fees for up to 10 years", "1-on-1 education w/ Harvard Economist", "Money Magazine's #1 Rated"],
        ctaUrl: AFFILIATE_LINKS.augusta,
        reviewUrl: "/reviews/augusta-precious-metals",
        badgeColor: "gold"
    },
    {
        rank: 2,
        name: "Noble Gold Investments",
        logoAlt: "Noble Gold Requests",
        rating: 4.8,
        reviews: "Top Rated on ConsumerAffairs",
        minInvestment: "$2,000",
        bestFor: "Smaller Accounts (<$50k)",
        bestForBadge: "Lowest Minimum",
        pros: ["Low $2,000 minimum investment", "No-questions-asked buyback program", "Free 'Survival Pack' with purchase"],
        ctaUrl: AFFILIATE_LINKS.noble,
        reviewUrl: "/reviews/noble-gold",
        badgeColor: "silver"
    },
    {
        rank: 3,
        name: "Goldco",
        logoAlt: "Goldco Logo",
        rating: 4.8,
        reviews: "A+ BBB Rating",
        minInvestment: "$25,000",
        bestFor: "Customer Service",
        bestForBadge: "Best Service",
        pros: ["Thousands of 5-star reviews", "White-glove account setup", "Up to $10k in free silver"],
        ctaUrl: AFFILIATE_LINKS.goldco,
        reviewUrl: "/reviews/goldco",
        badgeColor: "blue"
    },
    {
        rank: 4,
        name: "American Hartford Gold",
        logoAlt: "American Hartford Gold Logo",
        rating: 4.7,
        reviews: "Inc. 5000 Fastest Growing",
        minInvestment: "$10,000",
        bestFor: "Price Match Guarantee",
        bestForBadge: "Best Price Match",
        pros: ["Price Match Guarantee", "No buyback fees", "Family-owned company"],
        ctaUrl: AFFILIATE_LINKS.americanHartford,
        reviewUrl: "/reviews/american-hartford-gold",
        badgeColor: "bronze"
    },
    {
        rank: 5,
        name: "Birch Gold Group",
        logoAlt: "Birch Gold Group Logo",
        rating: 4.6,
        reviews: "Features Ben Shapiro",
        minInvestment: "$10,000",
        bestFor: "Diversification",
        bestForBadge: "Most Educational",
        pros: ["Endorsed by Ben Shapiro", "Specializes in silver & palladium", "Flat fees on large accounts"],
        ctaUrl: AFFILIATE_LINKS.birch,
        reviewUrl: "/reviews/birch-gold",
        badgeColor: "blue"
    }
];

export function ComparisonTable() {
    return (
        <section className="py-16 bg-white" id="comparison-table">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        Top Rated Gold IRA Companies of 2026
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        We analyzed 20+ companies based on fees, reputation, customer service, and storage options. These 5 rose to the top.
                    </p>
                </div>

                {/* Mobile View (Cards) */}
                <div className="md:hidden space-y-6">
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className={`border rounded-xl p-6 shadow-sm relative overflow-hidden bg-white 
                                ${company.rank === 1 ? 'border-amber-400 shadow-xl ring-1 ring-amber-100' : 'border-gray-200'}
                            `}
                        >
                            {company.rank === 1 && (
                                <>
                                    <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm z-10">
                                        <Trophy className="w-3 h-3" /> #1 Top Pick
                                    </div>
                                    <div className="absolute inset-0 bg-amber-50/20 pointer-events-none" />
                                </>
                            )}

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${company.rank === 1 ? 'bg-amber-500 ring-2 ring-amber-200' : 'bg-primary/80'
                                        }`}>
                                        #{company.rank}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg leading-tight whitespace-nowrap">{company.name}</h3>
                                        <div className="flex items-center gap-1 text-sm mt-1">
                                            <span className={`font-bold ${company.rank === 1 ? 'text-amber-600' : 'text-secondary'}`}>
                                                {company.rating}/5
                                            </span>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 ${i < Math.floor(company.rating)
                                                                ? (company.rank === 1 ? 'fill-amber-500 text-amber-500' : 'fill-secondary text-secondary')
                                                                : 'fill-gray-200 text-gray-200'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100 relative z-10">
                                <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 ${company.badgeColor === 'gold' ? 'bg-amber-100 text-amber-800' :
                                        company.badgeColor === 'silver' ? 'bg-slate-100 text-slate-800' :
                                            'bg-blue-50 text-blue-800'
                                    }`}>
                                    {company.bestForBadge}
                                </span>
                                <p className="text-sm font-medium text-text-muted">{company.bestFor}</p>
                            </div>

                            <div className="space-y-2 mb-6 relative z-10">
                                {company.pros.slice(0, 3).map((pro, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-text">
                                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${company.rank === 1 ? 'text-amber-500' : 'text-green-500'}`} />
                                        <span>{pro}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-3 relative z-10">
                                <Button variant="outline" className="w-full text-sm" asChild>
                                    <Link href={company.reviewUrl}>Read Review</Link>
                                </Button>
                                <Button
                                    className={`w-full text-sm shadow-md text-white font-bold
                                        ${company.rank === 1
                                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 border-amber-400'
                                            : 'bg-[#b8860b] hover:bg-[#9a7009]'
                                        }
                                    `}
                                    asChild
                                >
                                    <a href={company.ctaUrl} target="_blank" rel="noopener noreferrer">
                                        {company.rank === 1 ? "Visit Secure Site" : "Visit Site"} <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View (Table) */}
                <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#1e293b] text-white">
                            <tr>
                                <th className="p-5 font-bold text-center w-16 text-xs uppercase tracking-wider text-gray-400">Rank</th>
                                <th className="p-5 font-bold w-1/4 text-xs uppercase tracking-wider text-gray-400">Company</th>
                                <th className="p-5 font-bold text-xs uppercase tracking-wider text-gray-400">Best For</th>
                                <th className="p-5 font-bold text-center text-xs uppercase tracking-wider text-gray-400">Rating</th>
                                <th className="p-5 font-bold text-xs uppercase tracking-wider text-gray-400">Key Benefits</th>
                                <th className="p-5 font-bold text-center text-xs uppercase tracking-wider text-gray-400">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {companies.map((company, index) => (
                                <tr
                                    key={company.name}
                                    className={`transition-colors relative ${index === 0
                                            ? 'bg-amber-50/40 hover:bg-amber-50/60'
                                            : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <td className="p-5 text-center align-middle">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-sm ${company.rank === 1
                                                ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white ring-4 ring-amber-100 shadow-amber-200'
                                                : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            {company.rank}
                                        </div>
                                    </td>
                                    <td className="p-5 align-middle">
                                        <div className="font-bold text-lg text-primary whitespace-nowrap">{company.name}</div>
                                        {company.rank === 1 && (
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full mt-1">
                                                <Trophy className="w-3 h-3" /> Editors Choice
                                            </span>
                                        )}
                                        <div className="mt-1">
                                            <Link href={company.reviewUrl} className="text-xs text-text-muted hover:text-secondary underline decoration-dotted transition-colors">
                                                Read Full Review
                                            </Link>
                                        </div>
                                    </td>
                                    <td className="p-5 align-middle">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${company.badgeColor === 'gold' ? 'bg-amber-100 text-amber-900 border border-amber-200' :
                                                company.badgeColor === 'silver' ? 'bg-slate-100 text-slate-800 border border-slate-200' :
                                                    'bg-blue-50 text-blue-800 border border-blue-100'
                                            }`}>
                                            {company.bestForBadge}
                                        </span>
                                        <div className="text-xs text-text-muted mt-2 font-medium flex items-center gap-1">
                                            <span className="text-slate-400">Min:</span> <span className="whitespace-nowrap">{company.minInvestment}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-center align-middle">
                                        <div className="font-bold text-lg text-primary">{company.rating}/5</div>
                                        <div className="flex justify-center gap-0.5 my-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3.5 h-3.5 ${i < Math.floor(company.rating)
                                                            ? (company.rank === 1 ? 'fill-amber-500 text-amber-500' : 'fill-secondary text-secondary')
                                                            : 'fill-gray-200 text-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">BBB Rated A+</div>
                                    </td>
                                    <td className="p-5 align-middle">
                                        <ul className="space-y-2">
                                            {company.pros.slice(0, 3).map((pro, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-text">
                                                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${company.rank === 1 ? 'text-amber-500' : 'text-green-500'}`} />
                                                    <span className={`leading-tight ${company.rank === 1 ? 'font-medium text-slate-700' : ''}`}>{pro}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="p-5 text-center align-middle">
                                        <Button
                                            size="lg"
                                            className={`w-full shadow-md mb-2 transform hover:-translate-y-0.5 transition-all text-white font-bold
                                                ${company.rank === 1
                                                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-amber-200/50'
                                                    : 'bg-[#b8860b] hover:bg-[#9a7009]'
                                                }
                                            `}
                                            asChild
                                        >
                                            <a href={company.ctaUrl} target="_blank" rel="noopener noreferrer">
                                                {company.rank === 1 ? "Get Free Kit" : "View Site"}
                                            </a>
                                        </Button>
                                        {company.rank === 1 && (
                                            <div className="text-[10px] text-green-600 font-bold flex items-center justify-center gap-1 animate-pulse">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                Direct Partner Link
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-center text-xs text-gray-400 mt-6 max-w-3xl mx-auto italic">
                    Disclaimer: We may earn a commission if you click the links above. This helps support our research at no cost to you.
                    Investments in precious metals involve risk.
                </p>
            </Container>
        </section>
    );
}
