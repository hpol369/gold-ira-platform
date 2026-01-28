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
    Shield,
    DollarSign,
    Building2,
    Star,
    ArrowRight,
    Home,
    Coins,
    TrendingUp,
    Users,
    Clock,
    Zap
} from "lucide-react";

export const metadata: Metadata = {
    title: "Preferred Trust Review 2026: Fees, Pros & Cons",
    description: "Comprehensive Preferred Trust Company review covering their self-directed IRA services, fee structure, investment options, and real customer experiences.",
    keywords: "preferred trust company reviews, preferred trust ira, preferred trust custodian, preferred trust fees, self directed ira custodian",
    openGraph: {
        title: "Preferred Trust Review 2026: Self-Directed IRA Custodian",
        description: "Full Preferred Trust review - is it the right SDIRA custodian for you? See our honest analysis of fees, services, and alternatives.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const companyData = {
    name: "Preferred Trust Company",
    founded: "2007",
    headquarters: "Las Vegas, Nevada",
    specialty: "Self-directed IRAs with alternative investments",
    bbbRating: "A",
    supportedAssets: "Real estate, precious metals, private equity, notes",
    minimumInvestment: "$0 (no minimum)",
    bestFor: "Real estate and alternative asset investors",
};

export default function PreferredTrustReviewPage() {
    const augustaLink = getTrackedLink(AFFILIATE_LINKS.augusta, "review-preferred-trust-cta", "augusta");

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-[#000080] text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-teal-200 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-teal-500/20 px-3 py-1 rounded-full">Self-Directed IRA Custodian Reviews</span>
                            <span className="text-white/50">|</span>
                            <span className="text-white/70">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Preferred Trust Review 2026: <br />
                            <span className="text-white/70">Self-Directed IRA Custodian</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                            Preferred Trust Company is a Las Vegas-based self-directed IRA custodian focused on alternative investments. Here is our complete analysis of their services, fees, and who they are best for.
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
                                companyName="Preferred Trust Company"
                                rating={4.0}
                                isRecommended={true}
                                bottomLine="Preferred Trust is a solid self-directed IRA custodian with competitive fees and good customer service. They're a strong option for real estate investors, though larger custodians like Equity Trust offer more resources."
                                ctaUrl="https://www.preferredtrustcompany.com"
                                ctaText="Visit Preferred Trust"
                            />

                            {/* Quick Facts */}
                            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-[#000080] mb-4">Preferred Trust at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-teal-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Founded</p>
                                            <p className="text-slate-900 font-medium">{companyData.founded}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Headquarters</p>
                                            <p className="text-slate-900 font-medium">{companyData.headquarters}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Minimum Investment</p>
                                            <p className="text-slate-900 font-medium">{companyData.minimumInvestment}</p>
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
                                        <Clock className="w-5 h-5 text-purple-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Years in Business</p>
                                            <p className="text-slate-900 font-medium">17+ years</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-orange-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Best For</p>
                                            <p className="text-slate-900 font-medium text-sm">{companyData.bestFor}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-teal-600 hover:prose-a:text-teal-700">

                                <h2>What is Preferred Trust?</h2>
                                <p>
                                    <strong>Preferred Trust Company</strong> is a self-directed IRA custodian based in Las Vegas, Nevada. Founded in 2007, they specialize in holding alternative investments within retirement accounts, including real estate, precious metals, private equity, and promissory notes.
                                </p>
                                <p>
                                    Unlike traditional brokerages that limit you to stocks and mutual funds, Preferred Trust allows you to diversify your retirement portfolio with assets outside of Wall Street. They serve as the custodian (required by the IRS) while you make the investment decisions.
                                </p>

                                <h2>Pros & Cons</h2>
                                <ProsCons
                                    pros={[
                                        "Competitive fee structure for SDIRAs",
                                        "A rating with the BBB",
                                        "No account minimum to get started",
                                        "Supports wide range of alternative investments",
                                        "Responsive customer service",
                                        "Online portal for account management"
                                    ]}
                                    cons={[
                                        "Smaller than major competitors like Equity Trust",
                                        "Limited educational resources compared to larger custodians",
                                        "No checkbook control option",
                                        "Per-transaction fees can add up for active investors"
                                    ]}
                                />

                                <h2>Preferred Trust Fee Structure</h2>
                                <p>
                                    Preferred Trust uses a straightforward fee structure. Here are the typical fees:
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
                                                <td className="p-4 text-slate-600">Annual Account Fee</td>
                                                <td className="p-4 text-slate-600">$275 - $495 (based on assets)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Transaction Fee</td>
                                                <td className="p-4 text-slate-600">$95 - $150 per transaction</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Wire Transfer</td>
                                                <td className="p-4 text-slate-600">$25</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Precious Metals Storage</td>
                                                <td className="p-4 text-slate-600">$100 - $300/year (varies by depository)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Account Termination</td>
                                                <td className="p-4 text-slate-600">$75</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>Fee Analysis:</strong> Preferred Trust&apos;s fees are competitive with industry averages. The per-transaction model works well for buy-and-hold investors. If you plan to make frequent transactions, consider Rocket Dollar&apos;s flat monthly fee instead.
                                </p>

                                <h2>Services Offered</h2>
                                <p>
                                    Preferred Trust offers a range of self-directed retirement account services:
                                </p>
                            </div>

                            {/* Account Types Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">Traditional Self-Directed IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">Roth Self-Directed IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">SEP IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">SIMPLE IRA</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">Solo 401(k)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">HSA (Health Savings Account)</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-teal-600">

                                <h2>Investment Options</h2>
                                <p>
                                    Preferred Trust supports a wide variety of alternative investments:
                                </p>
                            </div>

                            {/* Investment Types Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Home className="w-6 h-6 text-teal-600" />
                                    <span className="text-slate-900">Real Estate (residential, commercial, land)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Coins className="w-6 h-6 text-[#B22234]" />
                                    <span className="text-slate-900">Precious Metals (gold, silver, platinum)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <TrendingUp className="w-6 h-6 text-blue-600" />
                                    <span className="text-slate-900">Private Equity & LLCs</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Shield className="w-6 h-6 text-purple-600" />
                                    <span className="text-slate-900">Promissory Notes & Loans</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-teal-600">

                                <h2>Preferred Trust vs Competitors</h2>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden my-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Feature</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Preferred Trust</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Equity Trust</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Rocket Dollar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="p-4 text-slate-600">Founded</td>
                                            <td className="p-4 text-slate-600">2007</td>
                                            <td className="p-4 text-green-600 font-medium">1974</td>
                                            <td className="p-4 text-slate-600">2018</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">BBB Rating</td>
                                            <td className="p-4 text-slate-600">A</td>
                                            <td className="p-4 text-green-600 font-medium">A+</td>
                                            <td className="p-4 text-slate-600">A</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Pricing Model</td>
                                            <td className="p-4 text-slate-600">Per-transaction</td>
                                            <td className="p-4 text-slate-600">Per-transaction</td>
                                            <td className="p-4 text-green-600 font-medium">Flat monthly</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Checkbook Control</td>
                                            <td className="p-4 text-slate-400">No</td>
                                            <td className="p-4 text-slate-600">Extra fee</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Best For</td>
                                            <td className="p-4 text-slate-600">Real estate</td>
                                            <td className="p-4 text-slate-600">Long-term hold</td>
                                            <td className="p-4 text-slate-600">Active investors</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-teal-600">

                                <h2>Who Should Use Preferred Trust?</h2>
                                <ul>
                                    <li><strong>Real estate investors</strong> looking for a SDIRA custodian</li>
                                    <li><strong>Buy-and-hold investors</strong> who make occasional transactions</li>
                                    <li><strong>Those wanting personalized service</strong> from a smaller custodian</li>
                                    <li><strong>Investors in the Southwest</strong> who prefer a local company</li>
                                </ul>

                                <h2>Who Should NOT Use Preferred Trust?</h2>
                                <ul>
                                    <li><strong>Active traders</strong> - per-transaction fees add up</li>
                                    <li><strong>Those wanting checkbook control</strong> - Rocket Dollar is better</li>
                                    <li><strong>Investors wanting maximum resources</strong> - Equity Trust has more</li>
                                </ul>

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Preferred Trust</strong> is a reliable self-directed IRA custodian with competitive fees and good customer service. While not as large as Equity Trust, they offer a solid option for real estate and alternative asset investors who prefer a more personalized experience.
                                </p>
                                <p>
                                    <strong>Rating: 4.0/5</strong>
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is Preferred Trust Company legit?",
                                            a: "Yes, Preferred Trust is a legitimate self-directed IRA custodian with an A rating from the BBB. They've been in business since 2007 and are based in Las Vegas, Nevada."
                                        },
                                        {
                                            q: "What types of investments can I hold with Preferred Trust?",
                                            a: "Preferred Trust supports a wide range of alternative investments including real estate, precious metals, private equity, promissory notes, and more. They cannot hold collectibles or life insurance per IRS rules."
                                        },
                                        {
                                            q: "Does Preferred Trust offer checkbook control?",
                                            a: "No, Preferred Trust does not offer checkbook control. If you need to write checks directly from your IRA, consider Rocket Dollar instead."
                                        },
                                        {
                                            q: "How do Preferred Trust fees compare to competitors?",
                                            a: "Preferred Trust fees are competitive with industry averages. Their annual fees range from $275-$495 depending on account value, with transaction fees of $95-$150."
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
                                    <h3 className="text-2xl font-serif font-bold mb-4">Want a Gold IRA With Premium Service?</h3>
                                    <p className="mb-6 text-white/80 max-w-lg mx-auto">
                                        Custodians like Preferred Trust work with Gold IRA companies. For a premium Gold IRA experience with fee waivers and education-first approach, consider Augusta Precious Metals.
                                    </p>
                                    <Button variant="gold" size="xl" className="shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={augustaLink} target="_blank" rel="noopener noreferrer">
                                            Get Augusta&apos;s Free Gold IRA Guide
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </a>
                                    </Button>
                                    <p className="text-xs text-white/60 mt-4">$50k minimum | Up to 10 years fees waived | A+ BBB Rating</p>
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
                                        <Link href="/reviews/equity-trust" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Equity Trust Review
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
                                            <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-[#B22234] fill-[#B22234]' : 'text-[#B22234]/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-[#000080] font-bold">4.0 / 5</p>
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
                            "name": "Preferred Trust Company",
                            "description": "Self-directed IRA custodian for alternative investments"
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.0",
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
