import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { Star, CheckCircle2, ArrowRight, ShieldCheck, Trophy, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { AFFILIATE_LINKS, getAugustaLink } from "@/config/affiliates";

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
        ctaUrl: getAugustaLink("comparison"), // Comparison-focused landing page
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
        <section className="py-32 bg-slate-50 relative scroll-mt-20" id="compare">
            <FloatingOrbs variant="minimal" />
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000080] mb-4">
                        Top Rated Gold IRA Companies of 2026
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        We analyzed 20+ companies based on fees, reputation, customer service, and storage options. These 5 rose to the top.
                    </p>
                </div>

                {/* Mobile View (Cards) */}
                <div className="md:hidden space-y-6">
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className={`rounded-3xl p-6 relative overflow-hidden bg-white border border-slate-200
                                shadow-sm hover:shadow-md transition-all duration-300
                                ${company.rank === 1 ? 'ring-1 ring-[#B22234]/20' : ''}
                            `}
                        >
                            {company.rank === 1 && (
                                <>
                                    <div className="absolute top-0 right-0 bg-[#B22234] text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-[0_0_20px_rgba(178,34,52,0.3)] animate-pulse z-10" style={{ animationDuration: '3s' }}>
                                        <Trophy className="w-3 h-3" /> #1 Top Pick
                                    </div>
                                    <div className="absolute inset-0 bg-[#B22234]/5 pointer-events-none" />
                                </>
                            )}

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${company.rank === 1 ? 'bg-[#B22234] ring-2 ring-[#B22234]/30' : 'bg-slate-500'
                                        }`}>
                                        #{company.rank}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg leading-tight whitespace-nowrap">{company.name}</h3>
                                        <div className="flex items-center gap-1 text-sm mt-1">
                                            <span className={`font-bold ${company.rank === 1 ? 'text-[#B22234]' : 'text-amber-600'}`}>
                                                {company.rating}/5
                                            </span>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 ${i < Math.floor(company.rating)
                                                                ? (company.rank === 1 ? 'fill-[#B22234] text-[#B22234]' : 'fill-amber-600 text-amber-600')
                                                                : 'fill-slate-300 text-slate-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200 relative z-10">
                                <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 ${company.badgeColor === 'gold' ? 'bg-[#B22234]/10 text-[#B22234]' :
                                        company.badgeColor === 'silver' ? 'bg-slate-200 text-slate-600' :
                                            'bg-[#000080]/10 text-[#000080]'
                                    }`}>
                                    {company.bestForBadge}
                                </span>
                                <p className="text-sm font-medium text-slate-500">{company.bestFor}</p>
                            </div>

                            <div className="space-y-2 mb-6 relative z-10">
                                {company.pros.slice(0, 3).map((pro, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${company.rank === 1 ? 'text-[#B22234]' : 'text-green-600'}`} />
                                        <span>{pro}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-3 relative z-10">
                                <Button variant="outline" className="w-full text-sm border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900" asChild>
                                    <Link href={company.reviewUrl}>Read Review</Link>
                                </Button>
                                <Button
                                    className={`w-full text-sm shadow-md font-bold
                                        ${company.rank === 1
                                            ? 'bg-[#B22234] hover:bg-[#8b1c2a] text-white'
                                            : 'bg-[#B22234] hover:bg-[#8b1c2a] text-white'
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
                <div className="hidden md:block bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="p-5 font-bold text-center w-16 text-xs uppercase tracking-wider text-[#000080]">Rank</th>
                                <th className="p-5 font-bold w-1/4 text-xs uppercase tracking-wider text-[#000080]">Company</th>
                                <th className="p-5 font-bold text-xs uppercase tracking-wider text-[#000080]">Best For</th>
                                <th className="p-5 font-bold text-center text-xs uppercase tracking-wider text-[#000080]">Rating</th>
                                <th className="p-5 font-bold text-xs uppercase tracking-wider text-[#000080]">Key Benefits</th>
                                <th className="p-5 font-bold text-center text-xs uppercase tracking-wider text-[#000080]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company, index) => (
                                <tr
                                    key={company.name}
                                    className={`border-b border-slate-200 hover:bg-slate-50 transition-all duration-300 relative ${index === 0
                                            ? 'bg-[#B22234]/5'
                                            : ''
                                        }`}
                                >
                                    <td className="p-5 text-center align-middle">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-sm ${company.rank === 1
                                                ? 'bg-[#B22234] text-white ring-4 ring-[#B22234]/20'
                                                : 'bg-slate-200 text-slate-600'
                                            }`}>
                                            {company.rank}
                                        </div>
                                    </td>
                                    <td className="p-5 align-middle">
                                        <div className="font-bold text-lg text-slate-900 whitespace-nowrap">{company.name}</div>
                                        {company.rank === 1 && (
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white bg-[#B22234] px-2 py-0.5 rounded-full mt-1 shadow-[0_0_20px_rgba(178,34,52,0.3)] animate-pulse" style={{ animationDuration: '3s' }}>
                                                <Trophy className="w-3 h-3" /> Editors Choice
                                            </span>
                                        )}
                                        <div className="mt-1">
                                            <Link href={company.reviewUrl} className="text-xs text-slate-500 hover:text-[#B22234] underline decoration-dotted transition-colors">
                                                Read Full Review
                                            </Link>
                                        </div>
                                    </td>
                                    <td className="p-5 align-middle">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${company.badgeColor === 'gold' ? 'bg-[#B22234]/10 text-[#B22234] border border-[#B22234]/30' :
                                                company.badgeColor === 'silver' ? 'bg-slate-100 text-slate-600 border border-slate-300' :
                                                    'bg-[#000080]/10 text-[#000080] border border-[#000080]/30'
                                            }`}>
                                            {company.bestForBadge}
                                        </span>
                                        <div className="text-xs text-slate-500 mt-2 font-medium flex items-center gap-1">
                                            <span className="text-slate-600">Min:</span> <span className="whitespace-nowrap text-slate-500">{company.minInvestment}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-center align-middle">
                                        <div className="font-bold text-lg text-slate-900">{company.rating}/5</div>
                                        <div className="flex justify-center gap-0.5 my-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3.5 h-3.5 ${i < Math.floor(company.rating)
                                                            ? (company.rank === 1 ? 'fill-[#B22234] text-[#B22234]' : 'fill-amber-600 text-amber-600')
                                                            : 'fill-slate-300 text-slate-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">BBB Rated A+</div>
                                    </td>
                                    <td className="p-5 align-middle">
                                        <ul className="space-y-2">
                                            {company.pros.slice(0, 3).map((pro, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${company.rank === 1 ? 'text-[#B22234]' : 'text-green-600'}`} />
                                                    <span className={`leading-tight ${company.rank === 1 ? 'font-medium text-slate-700' : ''}`}>{pro}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="p-5 text-center align-middle">
                                        <Button
                                            size="lg"
                                            className={`w-full shadow-md mb-2 transform hover:-translate-y-0.5 transition-all font-bold
                                                ${company.rank === 1
                                                    ? 'bg-[#B22234] hover:bg-[#8b1c2a] text-white shadow-[#B22234]/20'
                                                    : 'bg-[#B22234] hover:bg-[#8b1c2a] text-white'
                                                }
                                            `}
                                            asChild
                                        >
                                            <a href={company.ctaUrl} target="_blank" rel="noopener noreferrer">
                                                {company.rank === 1 ? "Get Free Kit" : "View Site"}
                                            </a>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-center text-xs text-slate-500 mt-6 max-w-3xl mx-auto italic">
                    Disclaimer: We may earn a commission if you click the links above. This helps support our research at no cost to you.
                    Investments in precious metals involve risk.
                </p>
            </Container>
        </section>
    );
}
