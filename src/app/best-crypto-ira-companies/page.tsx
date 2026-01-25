import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import {
    ArrowRight,
    Star,
    CheckCircle2,
    XCircle,
    Shield,
    Award,
    TrendingUp,
    DollarSign
} from "lucide-react";

export const metadata: Metadata = {
    title: "Best Crypto IRA Companies 2026: Top Bitcoin IRA Providers Ranked",
    description: "Compare the best crypto IRA companies for 2026. We rank iTrustCapital, Alto IRA, Bitcoin IRA and more based on fees, crypto selection, and user experience.",
    keywords: "best crypto ira, best bitcoin ira, crypto ira companies, bitcoin ira companies, crypto retirement account",
    openGraph: {
        title: "Best Crypto IRA Companies 2026",
        description: "Expert rankings of the top crypto IRA providers. Compare fees, features, and find the best Bitcoin IRA for your retirement.",
        type: "article",
    },
};

const companies = [
    {
        rank: 1,
        name: "iTrustCapital",
        rating: 4.7,
        tradingFee: "1%",
        monthlyFee: "$0",
        minimum: "$1,000",
        cryptos: "30+",
        goldSilver: true,
        highlight: "Best Overall",
        description: "The best all-around crypto IRA with low 1% fees, 24/7 trading, and the unique ability to hold gold and silver alongside crypto.",
        pros: ["Lowest total fees", "Gold & silver option", "24/7 trading", "Clean interface"],
        cons: ["$1,000 minimum", "Only 30+ cryptos"],
        link: "/reviews/itrustcapital",
        ctaLink: AFFILIATE_LINKS.itrustcapital,
        color: "amber",
    },
    {
        rank: 2,
        name: "Alto IRA",
        rating: 4.5,
        tradingFee: "1% + spread",
        monthlyFee: "$0",
        minimum: "$0",
        cryptos: "200+",
        goldSilver: false,
        highlight: "Most Crypto Options",
        description: "Best for crypto enthusiasts who want access to 200+ coins through Coinbase integration. The $0 minimum is great for beginners.",
        pros: ["$0 minimum", "200+ cryptocurrencies", "Alternative investments", "A+ BBB rating"],
        cons: ["No precious metals", "Higher total fees", "Indirect trading"],
        link: "/reviews/alto-ira",
        ctaLink: AFFILIATE_LINKS.altoIra,
        color: "purple",
    },
    {
        rank: 3,
        name: "Bitcoin IRA",
        rating: 4.2,
        tradingFee: "2%+",
        monthlyFee: "$20+",
        minimum: "$3,000",
        cryptos: "60+",
        goldSilver: true,
        highlight: "Established Brand",
        description: "One of the first crypto IRA providers with a strong brand. Good selection but higher fees than newer competitors.",
        pros: ["60+ cryptocurrencies", "Precious metals option", "Insurance coverage", "Phone support"],
        cons: ["Highest fees", "$3,000 minimum", "Monthly custodial fees"],
        link: "#",
        ctaLink: AFFILIATE_LINKS.bitcoinIra,
        color: "orange",
    },
    {
        rank: 4,
        name: "Choice by Kingdom Trust",
        rating: 4.0,
        tradingFee: "Varies",
        monthlyFee: "$0",
        minimum: "$0",
        cryptos: "50+",
        goldSilver: false,
        highlight: "Backed by Trust Company",
        description: "Backed by Kingdom Trust, a leading self-directed IRA custodian. Good option for those wanting institutional backing.",
        pros: ["Kingdom Trust custody", "$0 minimum", "Good crypto selection"],
        cons: ["Less intuitive platform", "Fee structure complex"],
        link: "#",
        ctaLink: AFFILIATE_LINKS.choiceIra,
        color: "blue",
    },
];

export default function BestCryptoIRACompaniesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900 to-purple-600/10"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Updated January 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            Best Crypto IRA Companies 2026
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            We compared fees, crypto selection, and user experience to rank the top Bitcoin and crypto IRA providers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="xl" asChild>
                                <Link href="/reviews/itrustcapital">
                                    See #1 Pick: iTrustCapital
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Quick Comparison Table */}
            <section className="py-12 bg-slate-800/50">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-white mb-6 text-center">Quick Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                            <thead className="bg-white/5">
                                <tr>
                                    <th className="text-left p-4 text-white font-semibold">Company</th>
                                    <th className="text-left p-4 text-white font-semibold">Trading Fee</th>
                                    <th className="text-left p-4 text-white font-semibold">Monthly</th>
                                    <th className="text-left p-4 text-white font-semibold">Minimum</th>
                                    <th className="text-left p-4 text-white font-semibold">Cryptos</th>
                                    <th className="text-left p-4 text-white font-semibold">Gold/Silver</th>
                                    <th className="text-left p-4 text-white font-semibold">Rating</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {companies.map((company) => (
                                    <tr key={company.name} className={company.rank === 1 ? 'bg-amber-500/10' : ''}>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                {company.rank === 1 && <Award className="w-4 h-4 text-amber-400" />}
                                                <span className="text-white font-medium">{company.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-slate-300">{company.tradingFee}</td>
                                        <td className="p-4 text-slate-300">{company.monthlyFee}</td>
                                        <td className="p-4 text-slate-300">{company.minimum}</td>
                                        <td className="p-4 text-slate-300">{company.cryptos}</td>
                                        <td className="p-4">
                                            {company.goldSilver ?
                                                <CheckCircle2 className="w-5 h-5 text-green-400" /> :
                                                <XCircle className="w-5 h-5 text-red-400" />
                                            }
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                <span className="text-white">{company.rating}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>

            {/* Individual Company Cards */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="space-y-8">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                id={company.name.toLowerCase().replace(/\s+/g, '-')}
                                className={`bg-white/5 backdrop-blur-sm rounded-xl border ${company.rank === 1 ? 'border-amber-500/50' : 'border-white/10'} overflow-hidden`}
                            >
                                {/* Header */}
                                <div className={`p-6 ${company.rank === 1 ? 'bg-amber-500/10' : 'bg-white/5'} border-b border-white/10`}>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`text-3xl font-bold ${company.rank === 1 ? 'text-amber-400' : 'text-slate-400'}`}>
                                                    #{company.rank}
                                                </span>
                                                <h3 className="text-2xl font-serif font-bold text-white">{company.name}</h3>
                                                {company.rank === 1 && (
                                                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded uppercase">
                                                        Our Top Pick
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-blue-400 text-sm font-medium">{company.highlight}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[1,2,3,4,5].map(i => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${i <= Math.floor(company.rating) ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-white font-bold text-lg">{company.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-slate-300 mb-6">{company.description}</p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Quick Stats */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Trading Fee</span>
                                                <span className="text-white font-medium">{company.tradingFee}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Monthly Fee</span>
                                                <span className="text-white font-medium">{company.monthlyFee}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Minimum</span>
                                                <span className="text-white font-medium">{company.minimum}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Cryptocurrencies</span>
                                                <span className="text-white font-medium">{company.cryptos}</span>
                                            </div>
                                        </div>

                                        {/* Pros/Cons */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-green-400 font-medium text-sm mb-2">Pros</h4>
                                                <ul className="space-y-1">
                                                    {company.pros.map((pro, i) => (
                                                        <li key={i} className="text-slate-400 text-sm flex items-start gap-1">
                                                            <CheckCircle2 className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                                                            {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-red-400 font-medium text-sm mb-2">Cons</h4>
                                                <ul className="space-y-1">
                                                    {company.cons.map((con, i) => (
                                                        <li key={i} className="text-slate-400 text-sm flex items-start gap-1">
                                                            <XCircle className="w-3 h-3 text-red-400 mt-1 flex-shrink-0" />
                                                            {con}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button variant={company.rank === 1 ? "gold" : "outline"} className={company.rank !== 1 ? 'border-white/20 text-white hover:bg-white/10' : ''} asChild>
                                            <a href={getTrackedLink(company.ctaLink, `best-crypto-${company.name.toLowerCase().replace(/\s+/g, '-')}`, company.name.toLowerCase())} target="_blank" rel="noopener noreferrer">
                                                Visit {company.name}
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                        {company.link !== "#" && (
                                            <Button variant="ghost" className="text-slate-400 hover:text-white" asChild>
                                                <Link href={company.link}>
                                                    Read Full Review
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* How We Ranked */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">How We Ranked These Companies</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                                <h3 className="text-lg font-bold text-white mb-2">Fees (40%)</h3>
                                <p className="text-slate-400 text-sm">Total cost of ownership including trading fees, monthly charges, and hidden costs.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="text-lg font-bold text-white mb-2">Asset Selection (25%)</h3>
                                <p className="text-slate-400 text-sm">Number and variety of cryptocurrencies available, plus any additional assets like gold.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                <Shield className="w-8 h-8 text-purple-400 mb-3" />
                                <h3 className="text-lg font-bold text-white mb-2">Security & Trust (20%)</h3>
                                <p className="text-slate-400 text-sm">Custody solutions, insurance, BBB rating, and company track record.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                <Star className="w-8 h-8 text-amber-400 mb-3" />
                                <h3 className="text-lg font-bold text-white mb-2">User Experience (15%)</h3>
                                <p className="text-slate-400 text-sm">Platform quality, mobile app, customer support, and ease of use.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "What is the best crypto IRA company?",
                                    a: "iTrustCapital is our top pick for most investors due to their low 1% trading fee, no monthly charges, and the unique ability to hold both crypto and precious metals. Alto IRA is best if you want access to 200+ cryptocurrencies."
                                },
                                {
                                    q: "How much does a crypto IRA cost?",
                                    a: "Costs vary by provider. iTrustCapital charges 1% per trade with no monthly fees. Bitcoin IRA charges around 2% plus monthly custodial fees. Always compare total costs before choosing."
                                },
                                {
                                    q: "Can I rollover my 401(k) to a crypto IRA?",
                                    a: "Yes, you can rollover funds from a 401(k), Traditional IRA, Roth IRA, 403(b), or TSP into a crypto IRA. The process is tax-free if done as a direct rollover."
                                },
                                {
                                    q: "Are crypto IRAs safe?",
                                    a: "Crypto IRAs use institutional-grade custody, but crypto itself is volatile and not FDIC insured. Choose established providers with good track records and only invest what you can afford to hold long-term."
                                },
                            ].map((faq, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                    <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-slate-400 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Learn More About Crypto IRAs</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/crypto-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Crypto IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Complete guide to cryptocurrency retirement accounts.</p>
                        </Link>
                        <Link href="/learn/bitcoin-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">What is a Bitcoin IRA?</h3>
                            <p className="text-slate-400 text-sm">Everything you need to know about Bitcoin in retirement.</p>
                        </Link>
                        <Link href="/compare/gold-ira-vs-crypto" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Gold IRA vs Crypto IRA</h3>
                            <p className="text-slate-400 text-sm">Compare precious metals and crypto for retirement.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            <Footer />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Best Crypto IRA Companies 2026",
                        "description": "Compare the best crypto IRA companies for 2026. Expert rankings of iTrustCapital, Alto IRA, Bitcoin IRA and more.",
                        "author": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement"
                        },
                        "datePublished": "2026-01-01",
                        "dateModified": "2026-01-25"
                    })
                }}
            />
        </main>
    );
}
