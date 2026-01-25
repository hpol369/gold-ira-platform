import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import {
    CheckCircle2,
    XCircle,
    Shield,
    DollarSign,
    Coins,
    TrendingUp,
    Building2,
    Star,
    ArrowRight,
    Zap
} from "lucide-react";

export const metadata: Metadata = {
    title: "Alto IRA Review 2026: Fees, Pros & Cons | 200+ Crypto Options",
    description: "Comprehensive Alto IRA review covering their $0 minimum, 200+ cryptocurrencies, alternative investments, and how they compare to iTrustCapital and Bitcoin IRA.",
    keywords: "alto ira, alto ira review, alto crypto ira, alto ira fees, alto ira vs itrustcapital",
    openGraph: {
        title: "Alto IRA Review 2026: 200+ Crypto Options",
        description: "Full Alto IRA review - is it the right crypto IRA for you? See our honest analysis of fees, features, and alternatives.",
        type: "article",
    },
};

const companyData = {
    name: "Alto IRA",
    founded: "2018",
    headquarters: "Nashville, Tennessee",
    minimum: "$0",
    tradingFee: "1% (via Coinbase)",
    monthlyFee: "$0",
    supportedAssets: "200+ cryptocurrencies via Coinbase",
    bbbRating: "A+",
    bestFor: "Crypto enthusiasts wanting maximum coin selection",
};

export default function AltoIRAReviewPage() {
    const affiliateLink = getTrackedLink(AFFILIATE_LINKS.altoIra, "review-alto-ira", "alto-ira");

    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-purple-500/20 px-3 py-1 rounded-full">Crypto IRA Reviews</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-400">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Alto IRA Review 2026: <br />
                            <span className="text-slate-400">200+ Cryptos, $0 Minimum</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                            Alto IRA offers the widest crypto selection through their Coinbase integration. But is more always better? Here's our complete analysis.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <div className="flex-grow">
                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Article */}
                        <article className="lg:col-span-2">
                            <AuthorVerification />

                            <VerdictBox
                                companyName="Alto IRA"
                                rating={4.5}
                                isRecommended={true}
                                bottomLine="Alto IRA is excellent for crypto enthusiasts who want access to 200+ coins. The $0 minimum and Coinbase integration make it accessible, though the interface is less polished than iTrustCapital."
                                ctaUrl={affiliateLink}
                                ctaText="Open Alto IRA Account"
                            />

                            {/* Quick Facts */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-white mb-4">Alto IRA at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-purple-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Founded</p>
                                            <p className="text-white font-medium">{companyData.founded}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-green-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Minimum Investment</p>
                                            <p className="text-white font-medium">{companyData.minimum}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="w-5 h-5 text-amber-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Trading Fee</p>
                                            <p className="text-white font-medium">{companyData.tradingFee}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Coins className="w-5 h-5 text-orange-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Assets</p>
                                            <p className="text-white font-medium">{companyData.supportedAssets}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-green-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">BBB Rating</p>
                                            <p className="text-white font-medium">{companyData.bbbRating}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-blue-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Best For</p>
                                            <p className="text-white font-medium text-sm">{companyData.bestFor}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300">

                                <h2>What is Alto IRA?</h2>
                                <p>
                                    <strong>Alto IRA</strong> is a self-directed IRA platform that offers two distinct products: <strong>Alto IRA</strong> for alternative investments (startups, real estate, art) and <strong>Alto CryptoIRA</strong> for cryptocurrency investing through a Coinbase integration.
                                </p>
                                <p>
                                    Founded in 2018 and headquartered in Nashville, Tennessee, Alto has carved out a niche by offering the widest cryptocurrency selection in the crypto IRA space—over 200 coins through their Coinbase partnership.
                                </p>

                                <h2>Pros & Cons</h2>
                                <ProsCons
                                    pros={[
                                        "$0 minimum to open an account",
                                        "200+ cryptocurrencies via Coinbase integration",
                                        "Alternative investments beyond crypto (startups, real estate)",
                                        "No monthly account fees",
                                        "A+ BBB rating with good customer reviews"
                                    ]}
                                    cons={[
                                        "No precious metals option (unlike iTrustCapital)",
                                        "Trades execute through Coinbase (not direct)",
                                        "Platform can feel clunky compared to competitors",
                                        "Limited educational resources"
                                    ]}
                                />

                                <h2>Alto IRA Fee Structure</h2>
                                <p>
                                    Alto's fee structure is straightforward for the CryptoIRA:
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden not-prose my-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="text-left p-4 text-white font-semibold">Fee Type</th>
                                                <th className="text-left p-4 text-white font-semibold">Alto CryptoIRA</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="p-4 text-slate-300">Account Setup</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Monthly Fee</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Trading Fee</td>
                                                <td className="p-4 text-amber-400 font-medium">1% + Coinbase spread</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Minimum Investment</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>Note:</strong> While Alto charges a 1% fee, trades also include Coinbase's spread (typically 0.5-1%). This means total trading costs are roughly 1.5-2% per transaction—slightly higher than iTrustCapital's flat 1%.
                                </p>

                                <h2>Two Products: Alto IRA vs Alto CryptoIRA</h2>
                                <p>
                                    Alto actually offers two separate products:
                                </p>
                                <ul>
                                    <li><strong>Alto CryptoIRA:</strong> Focused on cryptocurrency through Coinbase. 200+ coins available. This is what most people want.</li>
                                    <li><strong>Alto IRA:</strong> For alternative investments like private startups, real estate funds, art, and more. $10/month fee applies.</li>
                                </ul>
                                <p>
                                    You can have both, but they're separate accounts. Most users interested in crypto will want the CryptoIRA specifically.
                                </p>

                                <h2>Alto IRA vs iTrustCapital</h2>

                                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden not-prose my-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="text-left p-4 text-white font-semibold">Feature</th>
                                                <th className="text-left p-4 text-white font-semibold">Alto IRA</th>
                                                <th className="text-left p-4 text-white font-semibold">iTrustCapital</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="p-4 text-slate-300"># of Cryptos</td>
                                                <td className="p-4 text-green-400 font-medium">200+</td>
                                                <td className="p-4 text-slate-300">30+</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Trading Fee</td>
                                                <td className="p-4 text-slate-300">1% + spread</td>
                                                <td className="p-4 text-green-400 font-medium">1% flat</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Minimum</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                                <td className="p-4 text-slate-300">$1,000</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Gold/Silver</td>
                                                <td className="p-4"><XCircle className="w-5 h-5 text-red-400" /></td>
                                                <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Alt Investments</td>
                                                <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                                <td className="p-4"><XCircle className="w-5 h-5 text-red-400" /></td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Platform UX</td>
                                                <td className="p-4 text-slate-300">Good</td>
                                                <td className="p-4 text-green-400 font-medium">Excellent</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>Our take:</strong> Choose Alto if you want access to obscure altcoins or alternative investments. Choose iTrustCapital if you want a simpler experience with lower total fees and the option to add gold/silver.
                                </p>

                                <h2>Who Should Use Alto IRA?</h2>
                                <ul>
                                    <li><strong>Crypto enthusiasts</strong> who want access to 200+ coins, not just Bitcoin and Ethereum</li>
                                    <li><strong>Beginners with small amounts</strong> who appreciate the $0 minimum</li>
                                    <li><strong>Alternative investment seekers</strong> who want startups, real estate, or art alongside crypto</li>
                                    <li><strong>Coinbase users</strong> who are familiar with the Coinbase interface</li>
                                </ul>

                                <h2>Who Should NOT Use Alto IRA?</h2>
                                <ul>
                                    <li><strong>Those wanting precious metals</strong> — Alto doesn't offer gold or silver</li>
                                    <li><strong>Fee-sensitive traders</strong> — The combined fees are higher than iTrustCapital</li>
                                    <li><strong>Users wanting a polished UX</strong> — iTrustCapital's platform is more refined</li>
                                </ul>

                                <h2>Customer Reviews</h2>
                                <p>
                                    Alto IRA has solid reviews across major platforms:
                                </p>
                                <ul>
                                    <li><strong>BBB Rating:</strong> A+</li>
                                    <li><strong>Trustpilot:</strong> 4.3/5</li>
                                    <li><strong>App Store:</strong> 4.5/5</li>
                                </ul>
                                <p>
                                    Common praise includes the wide crypto selection and easy account setup. Complaints typically mention occasional delays in customer support and the Coinbase integration feeling indirect.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Alto IRA</strong> is a strong choice for crypto investors who want maximum coin selection. The $0 minimum makes it accessible, and the A+ BBB rating shows they're legitimate. However, if you only care about major cryptos (Bitcoin, Ethereum, etc.) and want lower fees, iTrustCapital is the better choice.
                                </p>
                                <p>
                                    <strong>Rating: 4.5/5</strong>
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is Alto IRA legit?",
                                            a: "Yes, Alto IRA is a legitimate company with an A+ BBB rating. They're based in Nashville, Tennessee and have been operating since 2018. Crypto is held through their Coinbase partnership with institutional-grade custody."
                                        },
                                        {
                                            q: "What's the difference between Alto IRA and Alto CryptoIRA?",
                                            a: "Alto IRA is for alternative investments like startups and real estate ($10/month fee). Alto CryptoIRA is specifically for cryptocurrency through Coinbase (no monthly fee). They're separate products."
                                        },
                                        {
                                            q: "What cryptocurrencies does Alto IRA support?",
                                            a: "Alto CryptoIRA supports over 200 cryptocurrencies through their Coinbase integration, including Bitcoin, Ethereum, Solana, and many altcoins that other crypto IRAs don't offer."
                                        },
                                        {
                                            q: "How does Alto IRA compare to iTrustCapital?",
                                            a: "Alto offers more crypto options (200+ vs 30+) and has a $0 minimum (vs $1,000). However, iTrustCapital has lower total fees, offers gold/silver, and has a more polished platform."
                                        },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                            <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                                            <p className="text-slate-400 text-sm">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 text-white p-8 rounded-2xl text-center mt-12 border border-purple-500/20">
                                <h3 className="text-2xl font-serif font-bold mb-4">Ready to Get Started?</h3>
                                <p className="mb-6 text-slate-300 max-w-lg mx-auto">
                                    Open your Alto CryptoIRA with $0 minimum and access 200+ cryptocurrencies.
                                </p>
                                <Button variant="gold" size="xl" className="shadow-lg hover:scale-105 transition-transform" asChild>
                                    <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                                        Open Alto IRA Account
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                                <p className="text-xs text-slate-500 mt-4">$0 minimum • 200+ cryptos • No monthly fees</p>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <div className="hidden lg:block sticky top-24 space-y-6">
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <h3 className="font-serif font-bold text-lg mb-4 text-white">Compare Crypto IRAs</h3>
                                    <div className="space-y-3">
                                        <Link href="/reviews/itrustcapital" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            iTrustCapital Review →
                                        </Link>
                                        <Link href="/best-crypto-ira-companies" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Best Crypto IRA Companies →
                                        </Link>
                                        <Link href="/crypto-ira" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Crypto IRA Guide →
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/10 text-center">
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-white font-bold">4.5 / 5</p>
                                    <p className="text-slate-400 text-xs mt-1">Our Rating</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </div>

            <Footer />

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "itemReviewed": {
                            "@type": "FinancialProduct",
                            "name": "Alto IRA",
                            "description": "Self-directed IRA platform for crypto and alternative investments"
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.5",
                            "bestRating": "5"
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement"
                        }
                    })
                }}
            />
        </main>
    );
}
