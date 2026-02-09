import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
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
    description: "Equity Trust review 2026. Fees, pros and cons, account types, and customer reviews. Is this SDIRA custodian right for you?",
    keywords: "equity trust reviews, equity trust company reviews, equity trust ira, equity trust custodian, equity trust fees",
    openGraph: {
        title: "Equity Trust Review 2026: Major SDIRA Custodian",
        description: "Full Equity Trust review - is it the right self-directed IRA custodian for you? See our honest analysis of fees, services, and alternatives.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
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

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-[#000080] text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-blue-200 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-white/10 px-3 py-1 rounded-full">Self-Directed IRA Custodian Reviews</span>
                            <span className="text-white/50">|</span>
                            <span className="text-white/70">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Equity Trust Review 2026: <br />
                            <span className="text-blue-200">50+ Years as a SDIRA Leader</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                            Equity Trust has been a self-directed IRA custodian since 1974. With $34+ billion in assets under custody, they are one of the largest in the industry. Here is our complete analysis.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <div className="flex-grow bg-white">
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
                            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-[#000080] mb-4">Equity Trust at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-[#000080]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Founded</p>
                                            <p className="text-slate-800 font-medium">{companyData.founded}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-[#000080]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Assets Under Custody</p>
                                            <p className="text-slate-800 font-medium">{companyData.assetsUnderCustody}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-[#000080]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Headquarters</p>
                                            <p className="text-slate-800 font-medium">{companyData.headquarters}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-[#B22234]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">BBB Rating</p>
                                            <p className="text-slate-800 font-medium">{companyData.bbbRating}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-[#000080]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Years in Business</p>
                                            <p className="text-slate-800 font-medium">50+ years</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-[#B22234]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Best For</p>
                                            <p className="text-slate-800 font-medium text-sm">Established custodian seekers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-800 prose-a:text-[#B22234] hover:prose-a:text-[#8B0000]">

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
                                                <td className="p-4 text-slate-600">$50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Annual Administration Fee</td>
                                                <td className="p-4 text-slate-600">$225 - $2,250 (based on account value)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Transaction Fees</td>
                                                <td className="p-4 text-slate-600">$75 - $250 per transaction</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Wire Transfer</td>
                                                <td className="p-4 text-slate-600">$25</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Precious Metals Storage</td>
                                                <td className="p-4 text-slate-600">Varies by depository</td>
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
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-800">Traditional IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-800">Roth IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-800">SEP IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-800">SIMPLE IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-800">Solo 401(k)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-800">HSA & ESA</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-800 prose-a:text-[#B22234]">

                                <h2>Investment Options</h2>
                                <p>
                                    Equity Trust supports a wide range of alternative investments:
                                </p>
                            </div>

                            {/* Investment Types Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Home className="w-6 h-6 text-[#000080]" />
                                    <span className="text-slate-800">Real Estate (rental, commercial, land)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Coins className="w-6 h-6 text-[#B22234]" />
                                    <span className="text-slate-800">Precious Metals (gold, silver, platinum)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <TrendingUp className="w-6 h-6 text-[#000080]" />
                                    <span className="text-slate-800">Private Equity & Startups</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Shield className="w-6 h-6 text-[#000080]" />
                                    <span className="text-slate-800">Tax Liens & Promissory Notes</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-800 prose-a:text-[#B22234]">

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

                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden my-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Feature</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Equity Trust</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Rocket Dollar</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Entrust</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="p-4 text-slate-600">Founded</td>
                                            <td className="p-4 text-green-600 font-medium">1974</td>
                                            <td className="p-4 text-slate-600">2018</td>
                                            <td className="p-4 text-slate-600">1982</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Pricing Model</td>
                                            <td className="p-4 text-slate-600">Per-transaction</td>
                                            <td className="p-4 text-green-600 font-medium">Flat monthly</td>
                                            <td className="p-4 text-slate-600">Per-transaction</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Checkbook Control</td>
                                            <td className="p-4 text-slate-600">Extra fee</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                            <td className="p-4"><XCircle className="w-5 h-5 text-red-500" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Best For</td>
                                            <td className="p-4 text-slate-600">Buy-and-hold</td>
                                            <td className="p-4 text-slate-600">Active investors</td>
                                            <td className="p-4 text-slate-600">Real estate focus</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-800 prose-a:text-[#B22234]">

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

                                <hr className="my-12 border-slate-200" />

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
                                <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
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
                                        <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                                            <h3 className="font-bold text-[#000080] mb-2">{faq.q}</h3>
                                            <p className="text-slate-600 text-sm">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Augusta CTA */}
                            <div className="bg-[#000080] text-white p-8 rounded-2xl text-center mt-12 border border-[#000080] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Looking for a Gold IRA Instead?</h3>
                                    <p className="mb-6 text-blue-100 max-w-lg mx-auto">
                                        Custodians like Equity Trust work with Gold IRA companies. If you want a premium Gold IRA experience with fee waivers, consider Augusta Precious Metals.
                                    </p>
                                    <LeadCaptureButton
                                        variant="gold"
                                        source="review-equity-trust-cta"
                                        className="inline-flex items-center justify-center rounded-md font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:scale-105 transition-transform h-14 px-10 text-lg"
                                    >
                                        Get Augusta&apos;s Free Gold IRA Guide
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </LeadCaptureButton>
                                    <p className="text-xs text-blue-200 mt-4">$50k minimum | Up to 10 years fees waived | A+ BBB Rating</p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <div className="hidden lg:block sticky top-24 space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-serif font-bold text-lg mb-4 text-[#000080]">Related Resources</h3>
                                    <div className="space-y-3">
                                        <Link href="/self-directed-ira" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Self-Directed IRA Guide
                                        </Link>
                                        <Link href="/reviews/rocket-dollar" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Rocket Dollar Review
                                        </Link>
                                        <Link href="/best-gold-ira-companies" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Best Gold IRA Companies
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-[#B22234] fill-[#B22234]' : 'text-slate-300'}`} />
                                        ))}
                                    </div>
                                    <p className="text-[#000080] font-bold">4.3 / 5</p>
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
