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
    Clock,
    Coins,
    TrendingUp,
    Building2,
    Star,
    AlertTriangle,
    ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
    title: "iTrustCapital Review 2026: Fees, Pros & Cons | Is It Worth It?",
    description: "Honest iTrustCapital review covering their 1% trading fee, supported cryptocurrencies, gold/silver options, and whether it's the right crypto IRA for your retirement.",
    keywords: "itrustcapital, itrustcapital review, itrustcapital fees, crypto ira, bitcoin ira, itrustcapital pros and cons",
    openGraph: {
        title: "iTrustCapital Review 2026: Fees, Pros & Cons",
        description: "Comprehensive iTrustCapital review - America's leading crypto IRA platform. See our honest analysis of fees, features, and whether it's right for you.",
        type: "article",
    },
};

const companyData = {
    name: "iTrustCapital",
    founded: "2018",
    headquarters: "Irvine, California",
    minimum: "$1,000",
    tradingFee: "1% per trade",
    monthlyFee: "$0",
    supportedAssets: "30+ cryptocurrencies + Gold & Silver",
    bbbRating: "A",
    trustpilotRating: "4.5/5",
    bestFor: "Self-directed crypto investors who want low fees and 24/7 trading",
};

export default function ITrustCapitalReviewPage() {
    const affiliateLink = getTrackedLink(AFFILIATE_LINKS.itrustcapital, "review-itrustcapital", "itrustcapital");

    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-blue-500/20 px-3 py-1 rounded-full">Crypto IRA Reviews</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-400">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            iTrustCapital Review 2026: <br />
                            <span className="text-slate-400">The Best Crypto IRA?</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                            With 1% trading fees and 24/7 access, iTrustCapital has become the go-to platform for crypto retirement accounts. But is it right for you? Here's our honest analysis.
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
                                companyName="iTrustCapital"
                                rating={4.7}
                                isRecommended={true}
                                bottomLine="iTrustCapital is our top pick for crypto IRAs. Their 1% trading fee (with no monthly charges) beats most competitors, and 24/7 trading gives you control. The $1,000 minimum makes it accessible for most investors."
                                ctaUrl={affiliateLink}
                                ctaText="Open iTrustCapital Account"
                            />

                            {/* Quick Facts Card */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-white mb-4">iTrustCapital at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-blue-400" />
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
                                        <Clock className="w-5 h-5 text-purple-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Monthly Fee</p>
                                            <p className="text-white font-medium">{companyData.monthlyFee}</p>
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
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300">

                                <h2>What is iTrustCapital?</h2>
                                <p>
                                    <strong>iTrustCapital</strong> is a digital asset IRA platform that allows you to invest in cryptocurrencies, gold, and silver within a tax-advantaged retirement account. Founded in 2018 and headquartered in Irvine, California, they've quickly become one of the largest crypto IRA providers in the United States.
                                </p>
                                <p>
                                    Unlike traditional crypto exchanges like Coinbase or Kraken, iTrustCapital operates specifically for retirement accounts—meaning your gains grow tax-deferred (Traditional IRA) or tax-free (Roth IRA). For long-term crypto believers, this can result in significant tax savings.
                                </p>

                                <h2>Pros & Cons</h2>
                                <ProsCons
                                    pros={[
                                        "Low 1% trading fee with no monthly account fees",
                                        "24/7 trading access—buy and sell anytime",
                                        "30+ cryptocurrencies plus physical gold & silver",
                                        "Low $1,000 minimum to get started",
                                        "User-friendly platform with mobile app"
                                    ]}
                                    cons={[
                                        "No direct customer support phone line",
                                        "Limited educational resources compared to competitors",
                                        "Crypto held by custodian, not your own wallet",
                                        "Can't transfer existing crypto into account"
                                    ]}
                                />

                                <h2>iTrustCapital Fees Explained</h2>
                                <p>
                                    iTrustCapital's fee structure is one of their biggest competitive advantages. Here's exactly what you'll pay:
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden not-prose my-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="text-left p-4 text-white font-semibold">Fee Type</th>
                                                <th className="text-left p-4 text-white font-semibold">iTrustCapital</th>
                                                <th className="text-left p-4 text-white font-semibold">Industry Average</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="p-4 text-slate-300">Account Setup</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                                <td className="p-4 text-slate-400">$50-$100</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Monthly Fee</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                                <td className="p-4 text-slate-400">$20-$50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Trading Fee</td>
                                                <td className="p-4 text-amber-400 font-medium">1% per trade</td>
                                                <td className="p-4 text-slate-400">1.5%-3%</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Gold/Silver Fee</td>
                                                <td className="p-4 text-amber-400 font-medium">1% over spot + $50/yr storage</td>
                                                <td className="p-4 text-slate-400">Varies widely</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>The bottom line on fees:</strong> iTrustCapital is one of the most affordable crypto IRA options available. The 1% trading fee only applies when you buy or sell—there are no ongoing monthly charges eating into your returns. For comparison, Bitcoin IRA charges up to 2% and has additional custodial fees.
                                </p>

                                <h2>Supported Cryptocurrencies</h2>
                                <p>
                                    iTrustCapital currently supports over 30 cryptocurrencies, including all the major players:
                                </p>
                                <ul>
                                    <li><strong>Bitcoin (BTC)</strong> — The original cryptocurrency</li>
                                    <li><strong>Ethereum (ETH)</strong> — Smart contract platform</li>
                                    <li><strong>Solana (SOL)</strong> — High-speed blockchain</li>
                                    <li><strong>Cardano (ADA)</strong> — Proof-of-stake network</li>
                                    <li><strong>Polkadot (DOT)</strong> — Interoperability protocol</li>
                                    <li><strong>Chainlink (LINK)</strong> — Oracle network</li>
                                    <li><strong>Avalanche (AVAX)</strong> — DeFi platform</li>
                                    <li><strong>Polygon (MATIC)</strong> — Ethereum scaling</li>
                                    <li>Plus 20+ more altcoins</li>
                                </ul>
                                <p>
                                    They also offer <strong>physical gold and silver</strong> for investors who want precious metals exposure alongside crypto. This makes iTrustCapital unique—most crypto IRAs only do crypto, and most gold IRAs only do metals.
                                </p>

                                <h2>How iTrustCapital Works</h2>
                                <p>
                                    Getting started with iTrustCapital is straightforward:
                                </p>
                                <ol>
                                    <li><strong>Open an account</strong> — Choose Traditional IRA, Roth IRA, or SEP IRA</li>
                                    <li><strong>Fund your account</strong> — Via rollover from existing 401(k)/IRA or new contribution</li>
                                    <li><strong>Start trading</strong> — Buy crypto or precious metals 24/7 through their platform</li>
                                    <li><strong>Hold tax-advantaged</strong> — Your gains grow tax-deferred or tax-free</li>
                                </ol>
                                <p>
                                    Rollovers typically take 1-3 weeks to complete. Once funded, you have full control to trade whenever you want—even nights and weekends when traditional markets are closed.
                                </p>

                                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 not-prose my-8">
                                    <div className="flex gap-4">
                                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-white mb-2">Important: Tax Implications</h4>
                                            <p className="text-slate-300 text-sm">
                                                While crypto IRAs offer tax advantages, there are specific rules. Early withdrawals (before 59½) may trigger penalties. Consult a tax professional before rolling over funds. iTrustCapital provides tax forms but not tax advice.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2>iTrustCapital vs Competitors</h2>

                                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden not-prose my-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="text-left p-4 text-white font-semibold">Feature</th>
                                                <th className="text-left p-4 text-white font-semibold">iTrustCapital</th>
                                                <th className="text-left p-4 text-white font-semibold">Alto IRA</th>
                                                <th className="text-left p-4 text-white font-semibold">Bitcoin IRA</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="p-4 text-slate-300">Trading Fee</td>
                                                <td className="p-4 text-green-400 font-medium">1%</td>
                                                <td className="p-4 text-slate-300">1%</td>
                                                <td className="p-4 text-red-400">2%+</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Monthly Fee</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                                <td className="p-4 text-slate-300">$0</td>
                                                <td className="p-4 text-red-400">$20+</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Minimum</td>
                                                <td className="p-4 text-slate-300">$1,000</td>
                                                <td className="p-4 text-green-400 font-medium">$0</td>
                                                <td className="p-4 text-slate-300">$3,000</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">24/7 Trading</td>
                                                <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                                <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                                <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Gold/Silver</td>
                                                <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                                <td className="p-4"><XCircle className="w-5 h-5 text-red-400" /></td>
                                                <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300"># of Cryptos</td>
                                                <td className="p-4 text-slate-300">30+</td>
                                                <td className="p-4 text-green-400 font-medium">200+</td>
                                                <td className="p-4 text-slate-300">60+</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>Our take:</strong> iTrustCapital offers the best balance of low fees, ease of use, and asset selection. Alto IRA has more crypto options but no precious metals. Bitcoin IRA has more features but significantly higher fees.
                                </p>

                                <h2>Who Should Use iTrustCapital?</h2>
                                <p>
                                    iTrustCapital is ideal for:
                                </p>
                                <ul>
                                    <li><strong>Long-term crypto believers</strong> who want to hold Bitcoin or Ethereum for years, not days</li>
                                    <li><strong>Self-directed investors</strong> comfortable making their own trading decisions</li>
                                    <li><strong>Tax-conscious investors</strong> looking to shelter crypto gains from capital gains tax</li>
                                    <li><strong>Diversifiers</strong> who want both crypto and precious metals in one account</li>
                                </ul>

                                <h2>Who Should NOT Use iTrustCapital?</h2>
                                <ul>
                                    <li><strong>Day traders</strong> — The 1% fee adds up with frequent trading</li>
                                    <li><strong>Those who want phone support</strong> — Support is primarily email/chat</li>
                                    <li><strong>People with existing crypto</strong> — You can't transfer crypto in, only cash</li>
                                    <li><strong>Those wanting obscure altcoins</strong> — Only 30+ coins available (Alto has 200+)</li>
                                </ul>

                                <h2>Customer Reviews & Reputation</h2>
                                <p>
                                    iTrustCapital has built a solid reputation since launching in 2018:
                                </p>
                                <ul>
                                    <li><strong>BBB Rating:</strong> A</li>
                                    <li><strong>Trustpilot:</strong> 4.5/5 (1,000+ reviews)</li>
                                    <li><strong>Google Reviews:</strong> 4.6/5</li>
                                </ul>
                                <p>
                                    Common praise includes the intuitive platform, fast account setup, and competitive fees. Complaints typically mention customer support response times and the inability to transfer existing crypto holdings.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>iTrustCapital</strong> is our top recommendation for crypto IRAs. The combination of low 1% trading fees, no monthly charges, 24/7 trading, and the option to add gold and silver makes it the most well-rounded option for most investors.
                                </p>
                                <p>
                                    If you believe cryptocurrency has a place in your retirement portfolio and want the tax advantages of an IRA, iTrustCapital is hard to beat.
                                </p>
                                <p>
                                    <strong>Rating: 4.7/5</strong>
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is iTrustCapital legit?",
                                            a: "Yes, iTrustCapital is a legitimate company founded in 2018. They partner with Fortress Trust as their qualified custodian and have an A rating with the BBB. However, like all crypto investments, your assets are not FDIC insured."
                                        },
                                        {
                                            q: "What is the iTrustCapital minimum investment?",
                                            a: "iTrustCapital has a $1,000 minimum to open an account. This is lower than many competitors like Bitcoin IRA ($3,000) or traditional gold IRA companies ($25,000+)."
                                        },
                                        {
                                            q: "Can I transfer my existing crypto to iTrustCapital?",
                                            a: "No, iTrustCapital does not allow in-kind crypto transfers. You can only fund your account with cash (via rollover or contribution). You'd need to sell crypto elsewhere, transfer cash, and repurchase through iTrustCapital."
                                        },
                                        {
                                            q: "How does iTrustCapital make money?",
                                            a: "iTrustCapital makes money through their 1% trading fee applied to each buy and sell transaction. They don't charge monthly fees, setup fees, or custodial fees on the crypto side."
                                        },
                                        {
                                            q: "Is my crypto insured at iTrustCapital?",
                                            a: "Crypto assets are held through Fortress Trust with institutional-grade security, but they are not FDIC or SIPC insured. This is standard for all crypto IRA providers."
                                        },
                                        {
                                            q: "Can I hold both crypto and gold in my iTrustCapital IRA?",
                                            a: "Yes, iTrustCapital allows you to hold cryptocurrencies and physical gold/silver in the same IRA. This is a unique feature that most crypto-only or gold-only IRAs don't offer."
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
                            <div className="bg-gradient-to-br from-blue-900/50 to-slate-900 text-white p-8 rounded-2xl text-center mt-12 border border-blue-500/20">
                                <h3 className="text-2xl font-serif font-bold mb-4">Ready to Get Started?</h3>
                                <p className="mb-6 text-slate-300 max-w-lg mx-auto">
                                    Open your iTrustCapital crypto IRA and start investing tax-advantaged today.
                                </p>
                                <Button variant="gold" size="xl" className="shadow-lg hover:scale-105 transition-transform" asChild>
                                    <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                                        Open iTrustCapital Account
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                                <p className="text-xs text-slate-500 mt-4">$1,000 minimum • 1% trading fee • No monthly fees</p>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <div className="hidden lg:block sticky top-24 space-y-6">
                                {/* Quick Navigation */}
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <h3 className="font-serif font-bold text-lg mb-4 text-white">Quick Jump</h3>
                                    <nav className="flex flex-col gap-2 text-sm">
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                                            iTrustCapital Overview
                                        </a>
                                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                            Fees Breakdown
                                        </a>
                                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                            Supported Cryptos
                                        </a>
                                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                            vs Competitors
                                        </a>
                                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                            Final Verdict
                                        </a>
                                    </nav>
                                </div>

                                {/* Related Reviews */}
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <h3 className="font-serif font-bold text-lg mb-4 text-white">Compare Crypto IRAs</h3>
                                    <div className="space-y-3">
                                        <Link href="/reviews/alto-ira" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Alto IRA Review →
                                        </Link>
                                        <Link href="/best-crypto-ira-companies" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Best Crypto IRA Companies →
                                        </Link>
                                        <Link href="/crypto-ira" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Crypto IRA Guide →
                                        </Link>
                                        <Link href="/learn/bitcoin-ira" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            What is a Bitcoin IRA? →
                                        </Link>
                                    </div>
                                </div>

                                {/* Trust Signals */}
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/10 text-center">
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-white font-bold">4.7 / 5</p>
                                    <p className="text-slate-400 text-xs mt-1">Our Rating</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </div>

            {/* Related Content Section */}
            <section className="bg-slate-800/50 py-16">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Crypto IRA Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/crypto-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Crypto IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Everything you need to know about investing in cryptocurrency through an IRA.</p>
                        </Link>
                        <Link href="/best-crypto-ira-companies" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Best Crypto IRA Companies</h3>
                            <p className="text-slate-400 text-sm">Compare the top crypto IRA providers side-by-side.</p>
                        </Link>
                        <Link href="/compare/gold-ira-vs-crypto" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Gold IRA vs Crypto IRA</h3>
                            <p className="text-slate-400 text-sm">Which is better for your retirement? We compare both options.</p>
                        </Link>
                    </div>
                </Container>
            </section>

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
                            "name": "iTrustCapital",
                            "description": "Crypto IRA platform for tax-advantaged cryptocurrency investing",
                            "provider": {
                                "@type": "Organization",
                                "name": "iTrustCapital",
                                "foundingDate": "2018",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Irvine",
                                    "addressRegion": "CA"
                                }
                            }
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.7",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement",
                            "url": "https://richdadretirement.com"
                        }
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
                                "name": "Is iTrustCapital legit?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, iTrustCapital is a legitimate company founded in 2018. They partner with Fortress Trust as their qualified custodian and have an A rating with the BBB."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the iTrustCapital minimum investment?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "iTrustCapital has a $1,000 minimum to open an account, which is lower than many competitors."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I transfer my existing crypto to iTrustCapital?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No, iTrustCapital does not allow in-kind crypto transfers. You can only fund your account with cash via rollover or contribution."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I hold both crypto and gold in my iTrustCapital IRA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, iTrustCapital allows you to hold cryptocurrencies and physical gold/silver in the same IRA."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
