import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { ArrowRight, CheckCircle, Star, DollarSign, Shield, Zap, Award, Building2, Coins, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Solo 401k Providers 2026 | Compare Plans & Fees",
    description: "Compare the best Solo 401k providers for self-employed individuals. Fidelity, Schwab, Vanguard, and self-directed options with checkbook control reviewed.",
    keywords: "solo 401k providers, best solo 401k, solo 401k custodians, self-directed solo 401k providers",
    openGraph: {
        title: "Best Solo 401k Providers 2026 | Compare Plans & Fees",
        description: "Compare top Solo 401k providers including Fidelity, Schwab, Vanguard, and self-directed custodians. Find the best plan for your self-employment income.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

interface Provider {
    name: string;
    type: "brokerage" | "self-directed";
    rating: number;
    setupFee: string;
    annualFee: string;
    tradingFees: string;
    rothOption: boolean;
    loanOption: boolean;
    checkbookControl: boolean;
    altInvestments: boolean;
    bestFor: string;
    pros: string[];
    cons: string[];
    website?: string;
}

const providers: Provider[] = [
    {
        name: "Fidelity",
        type: "brokerage",
        rating: 4.8,
        setupFee: "$0",
        annualFee: "$0",
        tradingFees: "$0 stocks/ETFs",
        rothOption: true,
        loanOption: false,
        checkbookControl: false,
        altInvestments: false,
        bestFor: "Most self-employed investors",
        pros: [
            "Zero account fees",
            "Commission-free trading",
            "Excellent research tools",
            "Strong mobile app",
        ],
        cons: [
            "No loan provision",
            "Limited to Fidelity investments",
            "No alternative investments",
        ],
    },
    {
        name: "Charles Schwab",
        type: "brokerage",
        rating: 4.7,
        setupFee: "$0",
        annualFee: "$0",
        tradingFees: "$0 stocks/ETFs",
        rothOption: true,
        loanOption: false,
        checkbookControl: false,
        altInvestments: false,
        bestFor: "Hands-on investors wanting research",
        pros: [
            "No account minimums",
            "24/7 customer support",
            "Wide investment selection",
            "Integrated banking services",
        ],
        cons: [
            "No loan provision",
            "No checkbook control",
            "Limited to traditional assets",
        ],
    },
    {
        name: "Vanguard",
        type: "brokerage",
        rating: 4.6,
        setupFee: "$0",
        annualFee: "$20/fund (waivable)",
        tradingFees: "$0 Vanguard funds",
        rothOption: true,
        loanOption: false,
        checkbookControl: false,
        altInvestments: false,
        bestFor: "Index fund investors",
        pros: [
            "Industry-low expense ratios",
            "Excellent index funds",
            "Fee waived with $50K+ or e-statements",
            "Strong long-term track record",
        ],
        cons: [
            "Higher fees for non-Vanguard funds",
            "Less intuitive platform",
            "No loan provision",
        ],
    },
    {
        name: "E*TRADE",
        type: "brokerage",
        rating: 4.5,
        setupFee: "$0",
        annualFee: "$0",
        tradingFees: "$0 stocks/ETFs",
        rothOption: true,
        loanOption: false,
        checkbookControl: false,
        altInvestments: false,
        bestFor: "Active traders",
        pros: [
            "Advanced trading platform",
            "No commissions on stocks/ETFs",
            "Good options trading tools",
            "Now part of Morgan Stanley",
        ],
        cons: [
            "No loan provision",
            "Options fees can add up",
            "No alternative investments",
        ],
    },
    {
        name: "Rocket Dollar",
        type: "self-directed",
        rating: 4.6,
        setupFee: "$360",
        annualFee: "$180/yr (Silver) or $360/yr (Gold)",
        tradingFees: "Varies by investment",
        rothOption: true,
        loanOption: true,
        checkbookControl: true,
        altInvestments: true,
        bestFor: "Alternative investments (crypto, real estate)",
        pros: [
            "Checkbook control",
            "Invest in crypto, real estate, startups",
            "Loan provision available",
            "Modern, easy platform",
        ],
        cons: [
            "Higher annual fees",
            "Setup fee required",
            "You manage investments directly",
        ],
    },
    {
        name: "MySolo401k",
        type: "self-directed",
        rating: 4.5,
        setupFee: "$550",
        annualFee: "$125/yr",
        tradingFees: "Varies by investment",
        rothOption: true,
        loanOption: true,
        checkbookControl: true,
        altInvestments: true,
        bestFor: "Maximum flexibility and control",
        pros: [
            "Full checkbook control",
            "All alternative investments allowed",
            "Loan provision included",
            "Experienced SDIRA specialist",
        ],
        cons: [
            "Higher setup cost",
            "More administrative responsibility",
            "Less hand-holding",
        ],
    },
    {
        name: "Nabers Group",
        type: "self-directed",
        rating: 4.4,
        setupFee: "$999",
        annualFee: "$0 (one-time fee)",
        tradingFees: "Varies by investment",
        rothOption: true,
        loanOption: true,
        checkbookControl: true,
        altInvestments: true,
        bestFor: "One-time fee structure",
        pros: [
            "No annual fees after setup",
            "Full checkbook control",
            "All investment types allowed",
            "Good for long-term holders",
        ],
        cons: [
            "Higher upfront cost",
            "Limited ongoing support",
            "DIY maintenance required",
        ],
    },
];

export default function Solo401kProvidersPage() {
    const brokerageProviders = providers.filter(p => p.type === "brokerage");
    const selfDirectedProviders = providers.filter(p => p.type === "self-directed");

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-slate-50"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full hidden"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            2026 Provider Comparison
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6 leading-tight">
                            Best Solo 401k{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                                Providers
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
                            You went independent for a reason—more control over your work, your schedule, your life. Why hand that control back to Wall Street for your retirement? Here&apos;s how to pick a Solo 401k provider that lets you decide where your hard-earned money goes.
                        </p>

                        {/* Quick Decision */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-green-400 mb-2">
                                    <DollarSign className="w-5 h-5" />
                                    <span className="font-semibold">Want $0 Fees?</span>
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Choose Fidelity or Schwab for zero setup and annual fees with commission-free trading.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-purple-400 mb-2">
                                    <Coins className="w-5 h-5" />
                                    <span className="font-semibold">Want Alt Investments?</span>
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Choose Rocket Dollar or MySolo401k for crypto, real estate, and checkbook control.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Brokerage Providers */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-8 h-8 text-blue-400" />
                            <h2 className="text-3xl font-serif font-bold text-[#000080]">
                                Traditional Brokerage Providers
                            </h2>
                        </div>
                        <p className="text-slate-500 mb-8 max-w-2xl">
                            Best for most self-employed investors. Zero fees, easy setup, traditional stocks, bonds, and mutual funds.
                        </p>

                        <div className="space-y-6">
                            {brokerageProviders.map((provider, idx) => (
                                <ProviderCard key={idx} provider={provider} rank={idx + 1} />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Self-Directed Providers */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-8 h-8 text-purple-400" />
                            <h2 className="text-3xl font-serif font-bold text-[#000080]">
                                Self-Directed Solo 401k Providers
                            </h2>
                        </div>
                        <p className="text-slate-500 mb-8 max-w-2xl">
                            For investors wanting checkbook control and alternative investments like real estate, crypto, private equity, and more.
                        </p>

                        <div className="space-y-6">
                            {selfDirectedProviders.map((provider, idx) => (
                                <ProviderCard key={idx} provider={provider} rank={idx + 1} />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-4 text-center">
                            Quick Feature Comparison
                        </h2>
                        <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
                            Compare key features across all Solo 401k providers at a glance.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-100">
                                            <th className="text-left p-4 text-slate-500 font-medium">Provider</th>
                                            <th className="text-center p-4 text-slate-500 font-medium">Setup Fee</th>
                                            <th className="text-center p-4 text-slate-500 font-medium">Annual Fee</th>
                                            <th className="text-center p-4 text-slate-500 font-medium">Roth</th>
                                            <th className="text-center p-4 text-slate-500 font-medium">Loans</th>
                                            <th className="text-center p-4 text-slate-500 font-medium">Checkbook</th>
                                            <th className="text-center p-4 text-slate-500 font-medium">Alt Invest</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {providers.map((provider, idx) => (
                                            <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? "" : "bg-slate-100"}`}>
                                                <td className="p-4 text-slate-900 font-medium">{provider.name}</td>
                                                <td className="p-4 text-center text-slate-600">{provider.setupFee}</td>
                                                <td className="p-4 text-center text-slate-600">{provider.annualFee}</td>
                                                <td className="p-4 text-center">
                                                    {provider.rothOption ? (
                                                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                                    ) : (
                                                        <span className="text-slate-500">—</span>
                                                    )}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {provider.loanOption ? (
                                                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                                    ) : (
                                                        <span className="text-slate-500">—</span>
                                                    )}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {provider.checkbookControl ? (
                                                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                                    ) : (
                                                        <span className="text-slate-500">—</span>
                                                    )}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {provider.altInvestments ? (
                                                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                                    ) : (
                                                        <span className="text-slate-500">—</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Choosing the Right Provider */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-8 text-center">
                            How to Choose the Right Provider
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                                    <DollarSign className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-[#000080] mb-3">Choose Free Brokerage If...</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span>You want to invest in stocks, bonds, ETFs, mutual funds</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span>You prefer zero fees and simple setup</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span>You don&apos;t need to borrow from your account</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span>You want a well-known, established provider</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Coins className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-[#000080] mb-3">Choose Self-Directed If...</h3>
                                <ul className="space-y-2 text-slate-500">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                                        <span>You want to invest in crypto, real estate, or startups</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                                        <span>You want checkbook control over investments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                                        <span>You may need to take a loan from your 401k</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                                        <span>You&apos;re comfortable managing investments yourself</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Recommendations */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-8 text-center">
                            Our Top Recommendations
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center">
                                <div className="text-sm text-green-400 font-medium mb-2">Best Overall (Free)</div>
                                <div className="text-2xl font-bold text-[#000080] mb-2">Fidelity</div>
                                <div className="flex justify-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className={`w-4 h-4 ${i <= 5 ? "text-amber-400 fill-amber-400" : "text-slate-600"}`} />
                                    ))}
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Zero fees, great research tools, and commission-free trading for most investors.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
                                <div className="text-sm text-purple-400 font-medium mb-2">Best Self-Directed</div>
                                <div className="text-2xl font-bold text-[#000080] mb-2">Rocket Dollar</div>
                                <div className="flex justify-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className={`w-4 h-4 ${i <= 5 ? "text-amber-400 fill-amber-400" : "text-slate-600"}`} />
                                    ))}
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Modern platform, checkbook control, and great for crypto and real estate.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 text-center">
                                <div className="text-sm text-blue-400 font-medium mb-2">Best for Index Funds</div>
                                <div className="text-2xl font-bold text-[#000080] mb-2">Vanguard</div>
                                <div className="flex justify-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className={`w-4 h-4 ${i <= 5 ? "text-amber-400 fill-amber-400" : "text-slate-600"}`} />
                                    ))}
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Industry-low expense ratios for long-term passive investors.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000080] mb-4">
                            Ready to Open Your Solo 401k?
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Start maximizing your self-employed retirement savings with up to $70,000 in annual contributions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={getTrackedLink(AFFILIATE_LINKS.augusta, "solo-providers-cta", "augusta")}>
                                <Button variant="gold" size="xl">
                                    Get Free Solo 401k Guide <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/learn/solo-401k-contribution-limits">
                                <Button variant="secondary" size="xl">
                                    View 2026 Contribution Limits
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is the best free Solo 401k provider?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Fidelity and Charles Schwab offer the best free Solo 401k plans with $0 setup fees, $0 annual fees, and commission-free trading. Both provide Roth options and excellent investment choices for traditional assets."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Which Solo 401k provider allows cryptocurrency investments?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Self-directed providers like Rocket Dollar and MySolo401k allow cryptocurrency investments through checkbook control. Traditional brokerages like Fidelity and Schwab do not allow direct crypto investments in Solo 401k accounts."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I take a loan from my Solo 401k?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Only self-directed Solo 401k providers offer loan provisions. Traditional brokerage providers (Fidelity, Schwab, Vanguard, E*TRADE) do not allow participants to take loans from their Solo 401k accounts."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What is checkbook control in a Solo 401k?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Checkbook control means you have a dedicated bank account for your Solo 401k that you control directly. This allows you to make investments quickly without custodian approval, and is essential for alternative investments like real estate and private placements."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}

function ProviderCard({ provider, rank }: { provider: Provider; rank: number }) {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Rank & Basic Info */}
                <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                        rank === 1 ? "bg-amber-500/20 text-amber-400" : "bg-slate-200 text-slate-500"
                    }`}>
                        {rank}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#000080]">{provider.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i <= Math.floor(provider.rating)
                                                ? "text-amber-400 fill-amber-400"
                                                : i <= provider.rating
                                                ? "text-amber-400 fill-amber-400/50"
                                                : "text-slate-600"
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-slate-500">{provider.rating}/5</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                                provider.type === "self-directed"
                                    ? "bg-purple-500/20 text-purple-400"
                                    : "bg-blue-500/20 text-blue-400"
                            }`}>
                                {provider.type === "self-directed" ? "Self-Directed" : "Brokerage"}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-2">Best for: {provider.bestFor}</p>
                    </div>
                </div>

                {/* Fees */}
                <div className="flex gap-4 md:ml-auto text-sm">
                    <div className="text-center">
                        <div className="text-slate-500 text-xs mb-1">Setup</div>
                        <div className={`font-semibold ${provider.setupFee === "$0" ? "text-green-400" : "text-slate-900"}`}>
                            {provider.setupFee}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-slate-500 text-xs mb-1">Annual</div>
                        <div className={`font-semibold ${provider.annualFee === "$0" ? "text-green-400" : "text-slate-900"}`}>
                            {provider.annualFee}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200">
                <FeatureBadge label="Roth Option" enabled={provider.rothOption} />
                <FeatureBadge label="Loan Provision" enabled={provider.loanOption} />
                <FeatureBadge label="Checkbook Control" enabled={provider.checkbookControl} />
                <FeatureBadge label="Alt Investments" enabled={provider.altInvestments} />
            </div>

            {/* Pros/Cons */}
            <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-200">
                <div>
                    <div className="text-sm font-medium text-green-400 mb-2">Pros</div>
                    <ul className="space-y-1">
                        {provider.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                {pro}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="text-sm font-medium text-red-400 mb-2">Cons</div>
                    <ul className="space-y-1">
                        {provider.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                                <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                                {con}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function FeatureBadge({ label, enabled }: { label: string; enabled: boolean }) {
    return (
        <div className={`flex items-center gap-2 text-sm ${enabled ? "text-slate-600" : "text-slate-500"}`}>
            {enabled ? (
                <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
                <span className="w-4 h-4 flex items-center justify-center text-slate-600">—</span>
            )}
            {label}
        </div>
    );
}
