import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
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
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white to-purple-100/30"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-[rgba(220,38,38,0.1)] text-[#D4A94E] px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Updated January 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-6 leading-tight">
                            Best Crypto IRA Companies 2026
                        </h1>

                        <p className="text-xl text-[#D0CCC4] mb-8 max-w-2xl mx-auto">
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
            <section className="py-12 bg-[#0C0D18]">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-6 text-center">Quick Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm bg-[#161828] rounded-xl border border-[#2A2D42] overflow-hidden">
                            <thead className="bg-[#121423]">
                                <tr>
                                    <th className="text-left p-4 text-[#F6F4EF] font-semibold">Company</th>
                                    <th className="text-left p-4 text-[#F6F4EF] font-semibold">Trading Fee</th>
                                    <th className="text-left p-4 text-[#F6F4EF] font-semibold">Monthly</th>
                                    <th className="text-left p-4 text-[#F6F4EF] font-semibold">Minimum</th>
                                    <th className="text-left p-4 text-[#F6F4EF] font-semibold">Cryptos</th>
                                    <th className="text-left p-4 text-[#F6F4EF] font-semibold">Gold/Silver</th>
                                    <th className="text-left p-4 text-[#F6F4EF] font-semibold">Rating</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2A2D42]">
                                {companies.map((company) => (
                                    <tr key={company.name} className={company.rank === 1 ? 'bg-[rgba(220,38,38,0.06)]' : ''}>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                {company.rank === 1 && <Award className="w-4 h-4 text-[#D4A94E]" />}
                                                <span className="text-[#F6F4EF] font-medium">{company.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-[#D0CCC4]">{company.tradingFee}</td>
                                        <td className="p-4 text-[#D0CCC4]">{company.monthlyFee}</td>
                                        <td className="p-4 text-[#D0CCC4]">{company.minimum}</td>
                                        <td className="p-4 text-[#D0CCC4]">{company.cryptos}</td>
                                        <td className="p-4">
                                            {company.goldSilver ?
                                                <CheckCircle2 className="w-5 h-5 text-green-500" /> :
                                                <XCircle className="w-5 h-5 text-red-500" />
                                            }
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-[#D4A94E] fill-[#B22234]" />
                                                <span className="text-[#F6F4EF]">{company.rating}</span>
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
            <section className="py-16 bg-white">
                <Container>
                    <div className="space-y-8">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                id={company.name.toLowerCase().replace(/\s+/g, '-')}
                                className={`bg-[#0C0D18] rounded-xl border ${company.rank === 1 ? 'border-[#B22234]/50' : 'border-[#2A2D42]'} overflow-hidden`}
                            >
                                {/* Header */}
                                <div className={`p-6 ${company.rank === 1 ? 'bg-[rgba(220,38,38,0.06)]' : 'bg-[#121423]'} border-b border-[#2A2D42]`}>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`text-3xl font-bold ${company.rank === 1 ? 'text-[#D4A94E]' : 'text-[#A8A39A]'}`}>
                                                    #{company.rank}
                                                </span>
                                                <h3 className="text-2xl font-serif font-bold text-[#F6F4EF]">{company.name}</h3>
                                                {company.rank === 1 && (
                                                    <span className="bg-[#DC2626] text-white text-xs font-bold px-2 py-1 rounded uppercase">
                                                        Our Top Pick
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-blue-600 text-sm font-medium">{company.highlight}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[1,2,3,4,5].map(i => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${i <= Math.floor(company.rating) ? 'text-[#D4A94E] fill-[#B22234]' : 'text-[#D4A94E]/30'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-[#F6F4EF] font-bold text-lg">{company.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-[#D0CCC4] mb-6">{company.description}</p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Quick Stats */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-[#A8A39A]">Trading Fee</span>
                                                <span className="text-[#F6F4EF] font-medium">{company.tradingFee}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#A8A39A]">Monthly Fee</span>
                                                <span className="text-[#F6F4EF] font-medium">{company.monthlyFee}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#A8A39A]">Minimum</span>
                                                <span className="text-[#F6F4EF] font-medium">{company.minimum}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#A8A39A]">Cryptocurrencies</span>
                                                <span className="text-[#F6F4EF] font-medium">{company.cryptos}</span>
                                            </div>
                                        </div>

                                        {/* Pros/Cons */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-green-600 font-medium text-sm mb-2">Pros</h4>
                                                <ul className="space-y-1">
                                                    {company.pros.map((pro, i) => (
                                                        <li key={i} className="text-[#A8A39A] text-sm flex items-start gap-1">
                                                            <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                                            {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-red-600 font-medium text-sm mb-2">Cons</h4>
                                                <ul className="space-y-1">
                                                    {company.cons.map((con, i) => (
                                                        <li key={i} className="text-[#A8A39A] text-sm flex items-start gap-1">
                                                            <XCircle className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                                                            {con}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button variant={company.rank === 1 ? "gold" : "outline"} className={company.rank !== 1 ? 'border-[#3F4460] text-[#F6F4EF] hover:bg-[#1E2134]' : ''} asChild>
                                            <a href={getTrackedLink(company.ctaLink, `best-crypto-${company.name.toLowerCase().replace(/\s+/g, '-')}`, company.name.toLowerCase())} target="_blank" rel="noopener noreferrer">
                                                Visit {company.name}
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                        {company.link !== "#" && (
                                            <Button variant="ghost" className="text-[#A8A39A] hover:text-[#F6F4EF]" asChild>
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
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-[#F6F4EF] mb-8 text-center">How We Ranked These Companies</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42]">
                                <DollarSign className="w-8 h-8 text-green-500 mb-3" />
                                <h3 className="text-lg font-bold text-[#F6F4EF] mb-2">Fees (40%)</h3>
                                <p className="text-[#A8A39A] text-sm">Total cost of ownership including trading fees, monthly charges, and hidden costs.</p>
                            </div>
                            <div className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42]">
                                <TrendingUp className="w-8 h-8 text-blue-500 mb-3" />
                                <h3 className="text-lg font-bold text-[#F6F4EF] mb-2">Asset Selection (25%)</h3>
                                <p className="text-[#A8A39A] text-sm">Number and variety of cryptocurrencies available, plus any additional assets like gold.</p>
                            </div>
                            <div className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42]">
                                <Shield className="w-8 h-8 text-purple-500 mb-3" />
                                <h3 className="text-lg font-bold text-[#F6F4EF] mb-2">Security & Trust (20%)</h3>
                                <p className="text-[#A8A39A] text-sm">Custody solutions, insurance, BBB rating, and company track record.</p>
                            </div>
                            <div className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42]">
                                <Star className="w-8 h-8 text-[#D4A94E] mb-3" />
                                <h3 className="text-lg font-bold text-[#F6F4EF] mb-2">User Experience (15%)</h3>
                                <p className="text-[#A8A39A] text-sm">Platform quality, mobile app, customer support, and ease of use.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-[#F6F4EF] mb-8 text-center">Frequently Asked Questions</h2>
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
                                <div key={i} className="bg-[#0C0D18] rounded-xl border border-[#2A2D42] p-6">
                                    <h3 className="font-bold text-[#F6F4EF] mb-2">{faq.q}</h3>
                                    <p className="text-[#A8A39A] text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-8 text-center">Learn More About Crypto IRAs</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/crypto-ira" className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42] hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-[#F6F4EF] mb-2 group-hover:text-blue-600 transition-colors">Crypto IRA Guide</h3>
                            <p className="text-[#A8A39A] text-sm">Complete guide to cryptocurrency retirement accounts.</p>
                        </Link>
                        <Link href="/learn/bitcoin-ira" className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42] hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-[#F6F4EF] mb-2 group-hover:text-blue-600 transition-colors">What is a Bitcoin IRA?</h3>
                            <p className="text-[#A8A39A] text-sm">Everything you need to know about Bitcoin in retirement.</p>
                        </Link>
                        <Link href="/compare/gold-ira-vs-crypto" className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42] hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-[#F6F4EF] mb-2 group-hover:text-blue-600 transition-colors">Gold IRA vs Crypto IRA</h3>
                            <p className="text-[#A8A39A] text-sm">Compare precious metals and crypto for retirement.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Augusta CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Balance Crypto with Gold"
                        subheadline="Smart investors diversify across asset classes. While crypto offers growth potential, gold provides stability during market volatility."
                        trackSource="best-crypto-ira-companies"
                    />
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
