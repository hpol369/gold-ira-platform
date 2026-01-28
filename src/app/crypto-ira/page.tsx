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
    Shield,
    TrendingUp,
    Coins,
    Building2,
    CheckCircle2,
    Clock,
    DollarSign,
    AlertTriangle,
    Star,
    FileText,
    Scale
} from "lucide-react";

export const metadata: Metadata = {
    title: "Crypto IRA Guide 2026: Invest in Bitcoin & Crypto Tax-Free",
    description: "Crypto IRA guide for 2026. Invest in Bitcoin and 30+ cryptocurrencies tax-free in your retirement account. Compare top providers.",
    keywords: "crypto ira, bitcoin ira, cryptocurrency ira, self directed ira crypto, crypto retirement account, bitcoin 401k",
    openGraph: {
        title: "Crypto IRA Guide 2026: Tax-Advantaged Cryptocurrency Investing",
        description: "Learn how to invest in cryptocurrency through an IRA and potentially save thousands in taxes. Compare the best crypto IRA providers.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const topProviders = [
    {
        name: "iTrustCapital",
        rating: 4.7,
        tradingFee: "1%",
        monthlyFee: "$0",
        minimum: "$1,000",
        assets: "30+ cryptos + Gold/Silver",
        highlight: "Best Overall",
        link: "/reviews/itrustcapital",
    },
    {
        name: "Alto IRA",
        rating: 4.5,
        tradingFee: "1%",
        monthlyFee: "$0",
        minimum: "$0",
        assets: "200+ cryptos",
        highlight: "Most Crypto Options",
        link: "/reviews/alto-ira",
    },
    {
        name: "Bitcoin IRA",
        rating: 4.2,
        tradingFee: "2%+",
        monthlyFee: "$20+",
        minimum: "$3,000",
        assets: "60+ cryptos + Gold/Silver",
        highlight: "Established Brand",
        link: "#",
    },
];

export default function CryptoIRAPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <header className="relative py-20 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_50%)]"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Coins className="w-4 h-4" />
                            <span>Alternative IRA Investment</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#000080] mb-6 leading-tight">
                            Crypto IRA Guide 2026
                        </h1>

                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            You&apos;ve watched Bitcoin go from $1,000 to $100,000. If you believe crypto is here to stay, a Crypto IRA lets you add some to your retirement—with the same tax advantages as your 401k. Here&apos;s what you need to know.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                                <Link href="/reviews/itrustcapital">
                                    See #1 Crypto IRA Provider
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="xl" className="border-slate-300 text-slate-700 hover:bg-slate-100" asChild>
                                <Link href="/best-crypto-ira-companies">
                                    Compare All Providers
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* What is a Crypto IRA */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-6">What is a Crypto IRA?</h2>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900">
                            <p>
                                Here&apos;s the plain English version: A <strong>Crypto IRA</strong> is a retirement account that lets you hold Bitcoin, Ethereum, and other cryptocurrencies instead of just stocks and bonds. Same tax advantages as your regular IRA—just different investments inside.
                            </p>
                            <p>
                                The tax benefits are real:
                            </p>
                            <ul>
                                <li><strong>Traditional Crypto IRA:</strong> You don&apos;t pay taxes on gains until you withdraw in retirement</li>
                                <li><strong>Roth Crypto IRA:</strong> You pay taxes on contributions now, but all gains are tax-free forever</li>
                            </ul>
                            <p>
                                Compare that to buying crypto on Coinbase, where every time you sell—even to buy a different coin—you owe taxes on any gains. For someone planning to hold long-term, a Crypto IRA can save tens of thousands in taxes.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Key Benefits */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-[#000080] mb-12 text-center">Why Some Retirees Add Crypto</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Tax-Free Growth</h3>
                            <p className="text-slate-500">
                                In a Roth Crypto IRA, if Bitcoin goes from $100k to $500k over the next decade, you pay zero taxes on that $400k gain. Not a typo—zero.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Something Different</h3>
                            <p className="text-slate-500">
                                If you already have stocks and bonds in your 401k, crypto moves differently. When stocks crash, crypto sometimes doesn&apos;t follow—and vice versa.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Long-Term Bet</h3>
                            <p className="text-slate-500">
                                If you believe crypto will be bigger in 10-20 years, an IRA lets you hold without worrying about taxes on every price swing along the way.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Top Providers Comparison */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-4">Best Crypto IRA Companies</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            We've analyzed fees, features, and reputation to rank the top crypto IRA providers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {topProviders.map((provider, index) => (
                            <div
                                key={provider.name}
                                className={`relative bg-white rounded-xl border ${index === 0 ? 'border-amber-300' : 'border-slate-200'} overflow-hidden`}
                            >
                                {index === 0 && (
                                    <div className="absolute top-0 left-0 right-0 bg-amber-500 text-white text-center py-1 text-xs font-bold uppercase tracking-wide">
                                        Our Top Pick
                                    </div>
                                )}

                                <div className={`p-6 ${index === 0 ? 'pt-10' : ''}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-slate-900">{provider.name}</h3>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-slate-900 font-medium">{provider.rating}</span>
                                        </div>
                                    </div>

                                    <div className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded mb-4">
                                        {provider.highlight}
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Trading Fee</span>
                                            <span className="text-slate-900 font-medium">{provider.tradingFee}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Monthly Fee</span>
                                            <span className="text-slate-900 font-medium">{provider.monthlyFee}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Minimum</span>
                                            <span className="text-slate-900 font-medium">{provider.minimum}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Assets</span>
                                            <span className="text-slate-900 font-medium text-right">{provider.assets}</span>
                                        </div>
                                    </div>

                                    <Button
                                        variant={index === 0 ? "gold" : "outline"}
                                        className={`w-full ${index === 0 ? 'bg-[#B22234] hover:bg-[#8b1c2a] text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                                        asChild
                                    >
                                        <Link href={provider.link}>
                                            Read Review
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/best-crypto-ira-companies" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
                            View Full Comparison of All Providers
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </Container>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-[#000080] mb-12 text-center">How to Open a Crypto IRA</h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                {
                                    step: 1,
                                    title: "Choose a Provider",
                                    description: "Select a crypto IRA platform based on fees, supported assets, and reputation. iTrustCapital and Alto IRA are the top choices for most investors."
                                },
                                {
                                    step: 2,
                                    title: "Open Your Account",
                                    description: "Complete the application online (usually takes 10-15 minutes). You'll choose between a Traditional IRA, Roth IRA, or SEP IRA depending on your situation."
                                },
                                {
                                    step: 3,
                                    title: "Fund Your Account",
                                    description: "Transfer funds via rollover from an existing 401(k) or IRA, or make a new contribution. Rollovers typically take 1-3 weeks to complete."
                                },
                                {
                                    step: 4,
                                    title: "Start Investing",
                                    description: "Once funded, you can buy Bitcoin, Ethereum, and other cryptocurrencies 24/7. Your gains grow tax-advantaged until retirement."
                                },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 font-bold text-lg">{item.step}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Important Considerations */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-12">
                            <div className="flex gap-4">
                                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Important Considerations</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span><strong>Volatility:</strong> Crypto is highly volatile. Only invest what you can afford to hold long-term.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span><strong>Not FDIC Insured:</strong> Crypto IRAs are not insured like bank deposits.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span><strong>Early Withdrawal Penalties:</strong> Withdrawing before 59½ may trigger taxes and penalties.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span><strong>Contribution Limits:</strong> IRA contribution limits apply ($7,000/year for 2026, $8,000 if 50+).</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-6">Crypto IRA vs Regular Crypto Investing</h2>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="text-left p-4 text-slate-900 font-semibold">Factor</th>
                                        <th className="text-left p-4 text-slate-900 font-semibold">Crypto IRA</th>
                                        <th className="text-left p-4 text-slate-900 font-semibold">Regular Exchange</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr>
                                        <td className="p-4 text-slate-600">Tax on Trades</td>
                                        <td className="p-4 text-green-600 font-medium">None (tax-deferred)</td>
                                        <td className="p-4 text-red-600">Every trade is taxable</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Tax on Gains</td>
                                        <td className="p-4 text-green-600 font-medium">Deferred or Tax-Free (Roth)</td>
                                        <td className="p-4 text-red-600">Capital gains tax applies</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Withdrawal Access</td>
                                        <td className="p-4 text-amber-600">After 59½ (penalty-free)</td>
                                        <td className="p-4 text-green-600">Anytime</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Contribution Limits</td>
                                        <td className="p-4 text-amber-600">$7,000-$8,000/year</td>
                                        <td className="p-4 text-green-600">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Best For</td>
                                        <td className="p-4 text-slate-600">Long-term retirement investors</td>
                                        <td className="p-4 text-slate-600">Active traders, short-term</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-8 text-center">Frequently Asked Questions</h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "Is a Crypto IRA a good idea?",
                                    a: "A Crypto IRA can be a good idea for long-term investors who believe in cryptocurrency's future and want tax advantages. The ability to grow gains tax-free (in a Roth) or tax-deferred (Traditional) can save significant money over decades. However, crypto is volatile, so it should be part of a diversified retirement strategy, not your entire portfolio."
                                },
                                {
                                    q: "What's the best Crypto IRA company?",
                                    a: "iTrustCapital is generally considered the best overall choice due to their low 1% trading fee, no monthly charges, and the option to hold both crypto and precious metals. Alto IRA is best if you want access to 200+ cryptocurrencies. See our full comparison for details."
                                },
                                {
                                    q: "Can I rollover my 401(k) into a Crypto IRA?",
                                    a: "Yes, you can rollover funds from an existing 401(k), Traditional IRA, Roth IRA, 403(b), or TSP into a Crypto IRA without triggering taxes (if done correctly as a direct rollover). The process typically takes 1-3 weeks."
                                },
                                {
                                    q: "What cryptocurrencies can I hold in a Crypto IRA?",
                                    a: "The available cryptocurrencies depend on your provider. iTrustCapital offers 30+ including Bitcoin, Ethereum, Solana, Cardano, and others. Alto IRA offers 200+ options. Most providers support the major cryptocurrencies."
                                },
                                {
                                    q: "Are Crypto IRAs safe?",
                                    a: "Crypto IRAs use institutional-grade custody solutions to secure your assets. However, they are not FDIC insured like bank accounts. The main risks are crypto market volatility (which can be significant) and the general risks of the crypto industry. Choose established providers with good track records."
                                },
                                {
                                    q: "What are the fees for a Crypto IRA?",
                                    a: "Fees vary by provider. iTrustCapital charges 1% per trade with no monthly fees. Bitcoin IRA charges around 2% plus monthly custodial fees. Always compare the total cost structure before choosing a provider."
                                },
                            ].map((faq, i) => (
                                <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-white">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-[#000080] mb-8 text-center">Related Resources</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <Link href="/reviews/itrustcapital" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                            <FileText className="w-8 h-8 text-blue-600 mb-3" />
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">iTrustCapital Review</h3>
                            <p className="text-slate-500 text-sm">Full review of our top-rated crypto IRA provider.</p>
                        </Link>
                        <Link href="/reviews/alto-ira" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                            <FileText className="w-8 h-8 text-blue-600 mb-3" />
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Alto IRA Review</h3>
                            <p className="text-slate-500 text-sm">200+ crypto options with $0 minimum.</p>
                        </Link>
                        <Link href="/learn/bitcoin-ira" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                            <Coins className="w-8 h-8 text-amber-500 mb-3" />
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Bitcoin IRA Guide</h3>
                            <p className="text-slate-500 text-sm">Everything about Bitcoin in retirement accounts.</p>
                        </Link>
                        <Link href="/compare/gold-ira-vs-crypto" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                            <Scale className="w-8 h-8 text-purple-600 mb-3" />
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Gold vs Crypto IRA</h3>
                            <p className="text-slate-500 text-sm">Compare precious metals and crypto options.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-50 via-blue-100/50 to-blue-50 border-y border-blue-200">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-4">
                            Think Crypto Has a Future?
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            If you&apos;ve done your homework and believe crypto belongs in your retirement, a Crypto IRA is the tax-smart way to do it. Just remember—only invest what you can afford to hold through the ups and downs.
                        </p>
                        <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                            <a href={getTrackedLink(AFFILIATE_LINKS.itrustcapital, "crypto-ira-page", "itrustcapital")} target="_blank" rel="noopener noreferrer">
                                Get Started with iTrustCapital
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                        <p className="text-slate-500 text-sm mt-4">$1,000 minimum • 1% trading fee • No monthly fees</p>
                    </div>
                </Container>
            </section>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Diversify Beyond Crypto with Gold"
                        subheadline="Many investors combine crypto IRAs with precious metals for true diversification. Gold offers stability when crypto markets are volatile."
                        trackSource="crypto-ira"
                    />
                </Container>
            </section>

            <Footer />

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Crypto IRA Guide 2026: Invest in Bitcoin & Crypto Tax-Free",
                        "description": "Complete guide to Crypto IRAs. Learn how to invest in Bitcoin, Ethereum, and 30+ cryptocurrencies within a tax-advantaged retirement account.",
                        "author": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement",
                            "url": "https://richdadretirement.com"
                        },
                        "datePublished": "2026-01-01",
                        "dateModified": "2026-01-25"
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is a Crypto IRA a good idea?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A Crypto IRA can be a good idea for long-term investors who believe in cryptocurrency's future and want tax advantages. The ability to grow gains tax-free (in a Roth) or tax-deferred (Traditional) can save significant money over decades."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What's the best Crypto IRA company?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "iTrustCapital is generally considered the best overall choice due to their low 1% trading fee, no monthly charges, and the option to hold both crypto and precious metals."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I rollover my 401(k) into a Crypto IRA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can rollover funds from an existing 401(k), Traditional IRA, Roth IRA, 403(b), or TSP into a Crypto IRA without triggering taxes if done correctly as a direct rollover."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
