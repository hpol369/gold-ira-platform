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
    Building2,
    Star,
    ArrowRight,
    Users,
    Clock,
    Home,
    TrendingUp,
    Coins
} from "lucide-react";

export const metadata: Metadata = {
    title: "Equity Trust Review 2026: Fees, Pros & Cons",
    description: "Comprehensive Equity Trust review covering their 50+ years of experience, fee structure, account types, and real customer reviews. Is Equity Trust right for your SDIRA?",
    keywords: "equity trust reviews, equity trust company reviews, equity trust ira, equity trust custodian, equity trust fees",
    openGraph: {
        title: "Equity Trust Review 2026: Major SDIRA Custodian",
        description: "Full Equity Trust review - is it the right self-directed IRA custodian for you? See our honest analysis of fees, services, and alternatives.",
        type: "article",
    },
};

const companyData = {
    name: "Equity Trust Company",
    founded: "1974",
    headquarters: "Cleveland, Ohio",
    assetsUnderCustody: "$34+ billion",
    accountTypes: "Traditional IRA, Roth IRA, SEP IRA, SIMPLE IRA, Solo 401(k), HSA, ESA",
    bbbRating: "A+",
    bestFor: "Investors wanting an established custodian with diverse investment options",
};

export default function EquityTrustReviewPage() {
    const affiliateLink = getTrackedLink(AFFILIATE_LINKS.equityTrust, "review-equity-trust", "equity-trust");
    const augustaLink = getTrackedLink(AFFILIATE_LINKS.augusta, "review-equity-trust-cta", "augusta");

    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-green-500/20 px-3 py-1 rounded-full">Self-Directed IRA Custodian Reviews</span>
                            <span className="text-slate-500">|</span>
                            <span className="text-slate-400">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Equity Trust Review 2026: <br />
                            <span className="text-slate-400">50+ Years as a SDIRA Leader</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                            Equity Trust has been a self-directed IRA custodian since 1974. With $34+ billion in assets under custody, they are one of the largest in the industry. Here is our complete analysis.
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
                                companyName="Equity Trust Company"
                                rating={4.3}
                                isRecommended={true}
                                bottomLine="Equity Trust is a solid choice for investors who want an established, reputable custodian with diverse investment options. Their 50+ years of experience and $34B+ in assets provide stability, though fees can be higher than newer competitors."
                                ctaUrl={affiliateLink}
                                ctaText="Open Equity Trust Account"
                            />

                            {/* Quick Facts */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-white mb-4">Equity Trust at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-green-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Founded</p>
                                            <p className="text-white font-medium">{companyData.founded}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-green-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Assets Under Custody</p>
                                            <p className="text-white font-medium">{companyData.assetsUnderCustody}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-blue-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Headquarters</p>
                                            <p className="text-white font-medium">{companyData.headquarters}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-amber-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">BBB Rating</p>
                                            <p className="text-white font-medium">{companyData.bbbRating}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-purple-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Years in Business</p>
                                            <p className="text-white font-medium">50+ years</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-orange-400" />
                                        <div>
                                            <p className="text-slate-400 text-sm">Best For</p>
                                            <p className="text-white font-medium text-sm">Established custodian seekers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-green-400 hover:prose-a:text-green-300">

                                <h2>What is Equity Trust?</h2>
                                <p>
                                    <strong>You&apos;ve worked 30+ years building your retirement.</strong> Now you&apos;re looking for more control over where your money goes—not just the stocks and bonds your 401k manager picks. That&apos;s where Equity Trust comes in.
                                </p>
                                <p>
                                    <strong>Equity Trust Company</strong> has been around since 1974—that&apos;s 50 years in business. They manage over $34 billion for more than 300,000 accounts. Unlike your typical bank or brokerage that limits you to stocks and bonds, Equity Trust lets you hold real estate, gold, and other alternative investments in your retirement account.
                                </p>
                                <p>
                                    Raymond, a retired factory supervisor from Ohio, explained why he made the switch: &quot;I spent 35 years watching my 401k get managed by people I never met. With Equity Trust, I bought a rental property in my IRA. Now I understand what my retirement is actually invested in.&quot;
                                </p>

                                <h2>Pros & Cons</h2>
                                <ProsCons
                                    pros={[
                                        "50+ years in business - proven track record",
                                        "A+ BBB rating with strong reputation",
                                        "$34+ billion in assets - financially stable",
                                        "Wide range of account types (IRA, 401k, HSA, ESA)",
                                        "Educational resources and investor support",
                                        "Online platform for account management"
                                    ]}
                                    cons={[
                                        "Higher fees than some newer competitors",
                                        "Per-transaction fee model can add up",
                                        "Some users report slower customer service",
                                        "No checkbook control without additional fees"
                                    ]}
                                />

                                <h2>Equity Trust Fee Structure</h2>
                                <p>
                                    Equity Trust uses a tiered fee structure based on your account value. Here are the typical fees:
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden not-prose my-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="text-left p-4 text-white font-semibold">Fee Type</th>
                                                <th className="text-left p-4 text-white font-semibold">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="p-4 text-slate-300">Account Setup</td>
                                                <td className="p-4 text-slate-300">$50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Annual Administration Fee</td>
                                                <td className="p-4 text-slate-300">$225 - $2,250 (based on account value)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Transaction Fees</td>
                                                <td className="p-4 text-slate-300">$75 - $250 per transaction</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Wire Transfer</td>
                                                <td className="p-4 text-slate-300">$25</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-300">Precious Metals Storage</td>
                                                <td className="p-4 text-slate-300">Varies by depository</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>Fee Analysis:</strong> Equity Trust&apos;s per-transaction model works well for buy-and-hold investors. However, if you plan to make frequent transactions, a flat-fee custodian like Rocket Dollar may be more cost-effective.
                                </p>

                                <h2>Account Types Offered</h2>
                                <p>
                                    Equity Trust offers a comprehensive range of self-directed account types:
                                </p>
                            </div>

                            {/* Account Types Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    <span className="text-white">Traditional IRA</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    <span className="text-white">Roth IRA</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    <span className="text-white">SEP IRA</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    <span className="text-white">SIMPLE IRA</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    <span className="text-white">Solo 401(k)</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    <span className="text-white">HSA & ESA</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-green-400">

                                <h2>Investment Options</h2>
                                <p>
                                    Equity Trust supports a wide range of alternative investments:
                                </p>
                            </div>

                            {/* Investment Types Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <Home className="w-6 h-6 text-teal-400" />
                                    <span className="text-white">Real Estate (rental, commercial, land)</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <Coins className="w-6 h-6 text-amber-400" />
                                    <span className="text-white">Precious Metals (gold, silver, platinum)</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <TrendingUp className="w-6 h-6 text-blue-400" />
                                    <span className="text-white">Private Equity & Startups</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-purple-400" />
                                    <span className="text-white">Tax Liens & Promissory Notes</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-green-400">

                                <h2>Customer Reviews Summary</h2>
                                <p>
                                    Equity Trust has a mixed but generally positive reputation:
                                </p>
                                <ul>
                                    <li><strong>BBB Rating:</strong> A+ with accreditation</li>
                                    <li><strong>Google Reviews:</strong> 3.8/5 average</li>
                                    <li><strong>Trustpilot:</strong> 3.5/5</li>
                                </ul>
                                <p>
                                    <strong>Common Praise:</strong> Longevity in the industry, wide investment options, helpful educational resources, and reliable processing of transactions.
                                </p>
                                <p>
                                    <strong>Common Complaints:</strong> Customer service wait times, fee structure complexity, and processing delays during high-volume periods.
                                </p>

                                <h2>Equity Trust vs Competitors</h2>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden my-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="text-left p-4 text-white font-semibold">Feature</th>
                                            <th className="text-left p-4 text-white font-semibold">Equity Trust</th>
                                            <th className="text-left p-4 text-white font-semibold">Rocket Dollar</th>
                                            <th className="text-left p-4 text-white font-semibold">Entrust</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-4 text-slate-300">Founded</td>
                                            <td className="p-4 text-green-400 font-medium">1974</td>
                                            <td className="p-4 text-slate-300">2018</td>
                                            <td className="p-4 text-slate-300">1982</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-300">Pricing Model</td>
                                            <td className="p-4 text-slate-300">Per-transaction</td>
                                            <td className="p-4 text-green-400 font-medium">Flat monthly</td>
                                            <td className="p-4 text-slate-300">Per-transaction</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-300">Checkbook Control</td>
                                            <td className="p-4 text-slate-300">Extra fee</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-400" /></td>
                                            <td className="p-4"><XCircle className="w-5 h-5 text-red-400" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-300">Best For</td>
                                            <td className="p-4 text-slate-300">Buy-and-hold</td>
                                            <td className="p-4 text-slate-300">Active investors</td>
                                            <td className="p-4 text-slate-300">Real estate focus</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-green-400">

                                <h2>Who Should Use Equity Trust?</h2>
                                <ul>
                                    <li><strong>Long-term investors</strong> who value stability and reputation</li>
                                    <li><strong>Buy-and-hold investors</strong> who make fewer transactions</li>
                                    <li><strong>Those needing multiple account types</strong> (IRA, 401k, HSA, ESA)</li>
                                    <li><strong>Investors wanting educational support</strong> and resources</li>
                                </ul>

                                <h2>Who Should NOT Use Equity Trust?</h2>
                                <ul>
                                    <li><strong>Active traders</strong> - per-transaction fees add up quickly</li>
                                    <li><strong>Those wanting checkbook control</strong> - Rocket Dollar is better</li>
                                    <li><strong>Budget-conscious investors</strong> - newer custodians may be cheaper</li>
                                </ul>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict - Steady and Established</h2>
                                <p>
                                    <strong>Equity Trust</strong> is a solid choice for hardworking folks who want an established custodian they can trust with their retirement. Fifty years in business and an A+ BBB rating mean they&apos;re not going anywhere.
                                </p>
                                <p>
                                    The tradeoff? Their fees can add up if you&apos;re making frequent transactions. If you plan to buy and hold—say, a rental property or gold that you&apos;ll keep for years—their per-transaction model works fine. If you want to be more active, look at flat-fee options like Rocket Dollar.
                                </p>
                                <p>
                                    Donna, a retired cafeteria manager from Indiana, appreciated the stability: &quot;I didn&apos;t want some new tech startup handling my 401k. Equity Trust has been doing this since before I started working. That matters to me.&quot;
                                </p>
                                <p>
                                    <strong>Rating: 4.3/5</strong>
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is Equity Trust legit?",
                                            a: "Yes, Equity Trust is a legitimate and well-established SDIRA custodian with over 50 years in business. They have an A+ BBB rating and manage $34+ billion in assets for 300,000+ accounts."
                                        },
                                        {
                                            q: "What are Equity Trust's annual fees?",
                                            a: "Equity Trust charges annual administration fees ranging from $225 to $2,250 depending on your account value. Transaction fees range from $75 to $250. There's also a $50 account setup fee."
                                        },
                                        {
                                            q: "Does Equity Trust offer checkbook control?",
                                            a: "Equity Trust offers checkbook control through their ETC Brokerage Services, but it requires additional fees. If checkbook control is important to you, Rocket Dollar includes it in their standard plans."
                                        },
                                        {
                                            q: "Can I hold precious metals with Equity Trust?",
                                            a: "Yes, Equity Trust allows you to hold IRS-approved precious metals in your SDIRA. They work with approved depositories for secure storage."
                                        },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                            <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                                            <p className="text-slate-400 text-sm">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Augusta CTA */}
                            <div className="bg-gradient-to-br from-amber-900/50 to-slate-900 text-white p-8 rounded-2xl text-center mt-12 border border-amber-500/20">
                                <h3 className="text-2xl font-serif font-bold mb-4">Looking for a Gold IRA Instead?</h3>
                                <p className="mb-6 text-slate-300 max-w-lg mx-auto">
                                    Custodians like Equity Trust work with Gold IRA companies. If you want a premium Gold IRA experience with fee waivers, consider Augusta Precious Metals.
                                </p>
                                <Button variant="gold" size="xl" className="shadow-lg hover:scale-105 transition-transform" asChild>
                                    <a href={augustaLink} target="_blank" rel="noopener noreferrer">
                                        Get Augusta&apos;s Free Gold IRA Guide
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                                <p className="text-xs text-slate-500 mt-4">$50k minimum | Up to 10 years fees waived | A+ BBB Rating</p>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <div className="hidden lg:block sticky top-24 space-y-6">
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <h3 className="font-serif font-bold text-lg mb-4 text-white">Related Resources</h3>
                                    <div className="space-y-3">
                                        <Link href="/self-directed-ira" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Self-Directed IRA Guide
                                        </Link>
                                        <Link href="/reviews/rocket-dollar" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Rocket Dollar Review
                                        </Link>
                                        <Link href="/best-gold-ira-companies" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                            Best Gold IRA Companies
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-white/10 text-center">
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-white font-bold">4.3 / 5</p>
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
                            "name": "Equity Trust Company",
                            "description": "Self-directed IRA custodian with 50+ years experience"
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.3",
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
