import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import {
    CheckCircle2,
    XCircle,
    Shield,
    DollarSign,
    Building2,
    Star,
    ArrowRight,
    Bitcoin,
    Lock,
    Coins,
    TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
    title: "Kingdom Trust Review 2026: Fees, Crypto IRA & Pros/Cons",
    description: "Kingdom Trust review 2026. Crypto IRA options, alternative assets, fees, and customer experiences. Bitcoin IRA specialist.",
    keywords: "kingdom trust reviews, kingdom trust company, kingdom trust ira, kingdom trust crypto, kingdom trust bitcoin ira",
    openGraph: {
        title: "Kingdom Trust Review 2026: Alternative Asset Specialist",
        description: "Full Kingdom Trust review - is it the right custodian for your crypto IRA? See our honest analysis of fees, crypto options, and alternatives.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const companyData = {
    name: "Kingdom Trust",
    founded: "2009",
    headquarters: "Murray, Kentucky",
    assetsUnderCustody: "$17+ billion",
    specialty: "Cryptocurrency and alternative assets",
    bbbRating: "A+",
    cryptoSupport: "200+ cryptocurrencies",
    bestFor: "Crypto investors wanting institutional-grade custody",
};

export default function KingdomTrustReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-[#000080] text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-blue-200 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-blue-500/20 px-3 py-1 rounded-full">Crypto IRA Custodian Reviews</span>
                            <span className="text-white/50">|</span>
                            <span className="text-white/70">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Kingdom Trust Review 2026: <br />
                            <span className="text-white/70">Alternative Asset Specialist</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                            Kingdom Trust specializes in alternative assets, particularly cryptocurrency. With $17+ billion in custody and support for 200+ cryptos, they are a major player in the crypto IRA space.
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
                                companyName="Kingdom Trust"
                                rating={4.4}
                                isRecommended={true}
                                bottomLine="Kingdom Trust is an excellent choice for investors wanting crypto in their retirement accounts. Their institutional-grade custody, support for 200+ cryptocurrencies, and regulatory compliance make them a trusted option for crypto IRAs."
                                ctaUrl="https://www.kingdomtrust.com"
                                ctaText="Visit Kingdom Trust"
                            />

                            {/* Quick Facts */}
                            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-[#000080] mb-4">Kingdom Trust at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Founded</p>
                                            <p className="text-slate-900 font-medium">{companyData.founded}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Assets Under Custody</p>
                                            <p className="text-slate-900 font-medium">{companyData.assetsUnderCustody}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Bitcoin className="w-5 h-5 text-orange-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Crypto Support</p>
                                            <p className="text-slate-900 font-medium">{companyData.cryptoSupport}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-[#B22234]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">BBB Rating</p>
                                            <p className="text-slate-900 font-medium">{companyData.bbbRating}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Lock className="w-5 h-5 text-purple-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Specialty</p>
                                            <p className="text-slate-900 font-medium">{companyData.specialty}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-teal-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Best For</p>
                                            <p className="text-slate-900 font-medium text-sm">Crypto IRA investors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">

                                <h2>What is Kingdom Trust?</h2>
                                <p>
                                    <strong>Kingdom Trust</strong> is a South Dakota-chartered trust company that specializes in custody services for alternative assets, particularly cryptocurrency. Founded in 2009 and headquartered in Murray, Kentucky, they have become one of the go-to custodians for crypto IRAs.
                                </p>
                                <p>
                                    Kingdom Trust provides the backend custody services for several crypto IRA platforms, including Choice by Kingdom Trust (their consumer-facing product). They hold over $17 billion in assets and support more than 200 cryptocurrencies.
                                </p>

                                <h2>Pros & Cons</h2>
                                <ProsCons
                                    pros={[
                                        "200+ cryptocurrencies supported",
                                        "Institutional-grade cold storage custody",
                                        "A+ BBB rating and regulatory compliance",
                                        "$17+ billion in assets - financially stable",
                                        "Also supports traditional alternative assets",
                                        "24/7 trading through Choice platform"
                                    ]}
                                    cons={[
                                        "Fees can be higher than some competitors",
                                        "No precious metals option",
                                        "Must use their Choice platform for crypto trading",
                                        "Less established than traditional custodians"
                                    ]}
                                />

                                <h2>Kingdom Trust Fee Structure</h2>
                                <p>
                                    Kingdom Trust&apos;s fees vary depending on whether you access their services directly or through a partner platform like Choice:
                                </p>

                                <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden not-prose my-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="text-left p-4 text-[#000080] font-semibold">Fee Type</th>
                                                <th className="text-left p-4 text-[#000080] font-semibold">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            <tr>
                                                <td className="p-4 text-slate-600">Account Setup</td>
                                                <td className="p-4 text-slate-600">$0 - $50 (varies by partner)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Annual Custody Fee</td>
                                                <td className="p-4 text-slate-600">0.5% - 1% of assets (or flat fee)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Trading Fee (via Choice)</td>
                                                <td className="p-4 text-slate-600">1% per trade</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Wire Transfer</td>
                                                <td className="p-4 text-slate-600">$25 - $30</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Account Termination</td>
                                                <td className="p-4 text-slate-600">$75 - $100</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>Fee Comparison:</strong> Kingdom Trust&apos;s 1% trading fee through Choice is comparable to iTrustCapital. However, iTrustCapital has no monthly fees, while Kingdom Trust may charge custody fees depending on your account structure.
                                </p>

                                <h2>Crypto IRA Options</h2>
                                <p>
                                    Kingdom Trust is particularly strong in the crypto IRA space:
                                </p>
                            </div>

                            {/* Crypto Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Bitcoin className="w-6 h-6 text-orange-600" />
                                    <span className="text-slate-900">Bitcoin (BTC)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <TrendingUp className="w-6 h-6 text-blue-600" />
                                    <span className="text-slate-900">Ethereum (ETH)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Coins className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">200+ Altcoins</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Lock className="w-6 h-6 text-purple-600" />
                                    <span className="text-slate-900">Institutional Cold Storage</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-blue-600">

                                <h2>Choice by Kingdom Trust</h2>
                                <p>
                                    <strong>Choice</strong> is Kingdom Trust&apos;s consumer-facing platform that allows individuals to trade crypto within their IRA. Key features include:
                                </p>
                                <ul>
                                    <li>24/7 cryptocurrency trading</li>
                                    <li>Support for 30+ cryptocurrencies</li>
                                    <li>1% trading fee</li>
                                    <li>$0 minimum to open</li>
                                    <li>Mobile app available</li>
                                </ul>
                                <p>
                                    If you want access to all 200+ cryptocurrencies Kingdom Trust supports, you may need to work through a partner platform rather than Choice directly.
                                </p>

                                <h2>Kingdom Trust vs Competitors</h2>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden my-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Feature</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Kingdom Trust</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">iTrustCapital</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Alto IRA</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="p-4 text-slate-600"># of Cryptos</td>
                                            <td className="p-4 text-green-600 font-medium">200+</td>
                                            <td className="p-4 text-slate-600">30+</td>
                                            <td className="p-4 text-green-600 font-medium">200+</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Trading Fee</td>
                                            <td className="p-4 text-slate-600">1%</td>
                                            <td className="p-4 text-green-600 font-medium">1% (flat)</td>
                                            <td className="p-4 text-slate-600">1% + spread</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Precious Metals</td>
                                            <td className="p-4"><XCircle className="w-5 h-5 text-red-500" /></td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                            <td className="p-4"><XCircle className="w-5 h-5 text-red-500" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Institutional Custody</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                            <td className="p-4 text-slate-600">Via Coinbase</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-blue-600">

                                <h2>Who Should Use Kingdom Trust?</h2>
                                <ul>
                                    <li><strong>Crypto enthusiasts</strong> wanting institutional-grade custody</li>
                                    <li><strong>Investors wanting 200+ crypto options</strong></li>
                                    <li><strong>Those prioritizing security</strong> with cold storage solutions</li>
                                    <li><strong>Users of platforms</strong> that partner with Kingdom Trust</li>
                                </ul>

                                <h2>Who Should NOT Use Kingdom Trust?</h2>
                                <ul>
                                    <li><strong>Those wanting precious metals</strong> - iTrustCapital offers both</li>
                                    <li><strong>Fee-sensitive investors</strong> - custody fees can add up</li>
                                    <li><strong>Traditional IRA investors</strong> - stick with Equity Trust or similar</li>
                                </ul>

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Kingdom Trust</strong> is a strong choice for crypto IRA investors who want institutional-grade custody and access to a wide range of cryptocurrencies. Their A+ BBB rating and $17+ billion in assets provide confidence in their stability.
                                </p>
                                <p>
                                    <strong>Rating: 4.4/5</strong>
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is Kingdom Trust legit?",
                                            a: "Yes, Kingdom Trust is a legitimate South Dakota-chartered trust company with an A+ BBB rating. They custody over $17 billion in assets and are regulated as a qualified custodian."
                                        },
                                        {
                                            q: "What cryptocurrencies does Kingdom Trust support?",
                                            a: "Kingdom Trust supports over 200 cryptocurrencies including Bitcoin, Ethereum, and many altcoins. The exact selection depends on which platform you use to access their services."
                                        },
                                        {
                                            q: "How does Kingdom Trust store cryptocurrency?",
                                            a: "Kingdom Trust uses institutional-grade cold storage solutions for cryptocurrency custody. They employ multi-signature wallets and industry-standard security practices."
                                        },
                                        {
                                            q: "What is Choice by Kingdom Trust?",
                                            a: "Choice is Kingdom Trust's consumer-facing platform for crypto IRA trading. It offers 24/7 trading, 30+ cryptocurrencies, and a 1% trading fee with no monthly account fees."
                                        },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                                            <h3 className="font-bold text-[#000080] mb-2">{faq.q}</h3>
                                            <p className="text-slate-600 text-sm">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Augusta CTA */}
                            <div className="bg-[#000080] text-white p-8 rounded-2xl text-center mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Prefer Physical Gold Over Crypto?</h3>
                                    <p className="mb-6 text-white/80 max-w-lg mx-auto">
                                        If you want tangible assets in your retirement account, consider a Gold IRA. Augusta Precious Metals is our top-rated Gold IRA company.
                                    </p>
                                    <LeadCaptureButton
                                        variant="gold"
                                        source="review-kingdom-trust-cta"
                                        className="inline-flex items-center justify-center rounded-md font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:scale-105 transition-transform h-14 px-10 text-lg"
                                    >
                                        Get Augusta&apos;s Free Gold IRA Guide
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </LeadCaptureButton>
                                    <p className="text-xs text-white/60 mt-4">$50k minimum | Up to 10 years fees waived | A+ BBB Rating</p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <div className="hidden lg:block sticky top-24 space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-serif font-bold text-lg mb-4 text-[#000080]">Compare Crypto IRAs</h3>
                                    <div className="space-y-3">
                                        <Link href="/reviews/itrustcapital" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            iTrustCapital Review
                                        </Link>
                                        <Link href="/reviews/alto-ira" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Alto IRA Review
                                        </Link>
                                        <Link href="/best-crypto-ira-companies" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Best Crypto IRA Companies
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-[#B22234] fill-[#B22234]' : 'text-[#B22234]/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-[#000080] font-bold">4.4 / 5</p>
                                    <p className="text-slate-500 text-xs mt-1">Our Rating</p>
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
                            "name": "Kingdom Trust",
                            "description": "Alternative asset and cryptocurrency IRA custodian"
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.4",
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
