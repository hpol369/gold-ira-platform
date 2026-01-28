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
    Lock,
    Zap,
    Home,
    TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
    title: "Rocket Dollar Review 2026: Fees, Pros & Cons",
    description: "Honest Rocket Dollar review covering their $15/month pricing, checkbook control, supported investments, and whether it's the best self-directed IRA for you.",
    keywords: "rocket dollar, rocket dollar review, rocket dollar ira, rocket dollar fees, checkbook ira, self directed ira",
    openGraph: {
        title: "Rocket Dollar Review 2026: Best Checkbook IRA?",
        description: "Complete Rocket Dollar review - is it the best self-directed IRA with checkbook control? See our honest analysis.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const companyData = {
    name: "Rocket Dollar",
    founded: "2018",
    headquarters: "Austin, Texas",
    silverPlan: "$15/month",
    goldPlan: "$30/month",
    minimum: "$0",
    supportedAssets: "Real estate, crypto, private equity, precious metals, and more",
    bbbRating: "A",
    bestFor: "Real estate investors and those wanting checkbook control",
};

export default function RocketDollarReviewPage() {
    const affiliateLink = getTrackedLink(AFFILIATE_LINKS.rocketDollar, "review-rocket-dollar", "rocket-dollar");

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero */}
            <header className="bg-[#000080] text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-purple-200 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-purple-500/20 px-3 py-1 rounded-full">Self-Directed IRA Reviews</span>
                            <span className="text-white/50">•</span>
                            <span className="text-white/70">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Rocket Dollar Review 2026: <br />
                            <span className="text-white/70">The Best Checkbook IRA?</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                            Simple $15/month pricing, true checkbook control, and support for virtually any alternative investment. Here's our complete analysis.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <div className="flex-grow">
                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <AuthorVerification />

                            <VerdictBox
                                companyName="Rocket Dollar"
                                rating={4.6}
                                isRecommended={true}
                                bottomLine="Rocket Dollar is our top pick for checkbook control SDIRAs. Their flat $15/month fee beats transaction-based pricing for active investors, and the platform makes alternative investing accessible."
                                ctaUrl={affiliateLink}
                                ctaText="Open Rocket Dollar Account"
                            />

                            {/* Quick Facts */}
                            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-[#000080] mb-4">Rocket Dollar at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-purple-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Founded</p>
                                            <p className="text-slate-900 font-medium">{companyData.founded}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Silver Plan</p>
                                            <p className="text-slate-900 font-medium">{companyData.silverPlan}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-[#B22234]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Gold Plan</p>
                                            <p className="text-slate-900 font-medium">{companyData.goldPlan}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Lock className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Checkbook Control</p>
                                            <p className="text-slate-900 font-medium">Yes (both plans)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">BBB Rating</p>
                                            <p className="text-slate-900 font-medium">{companyData.bbbRating}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-orange-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Account Minimum</p>
                                            <p className="text-slate-900 font-medium">{companyData.minimum}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article */}
                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-purple-600">

                                <h2>What is Rocket Dollar?</h2>
                                <p>
                                    <strong>Rocket Dollar</strong> is a Self-Directed IRA custodian that specializes in checkbook control accounts. Founded in 2018 and based in Austin, Texas, they've made alternative investing accessible with simple, transparent pricing.
                                </p>
                                <p>
                                    Unlike traditional SDIRA custodians that charge per-transaction fees, Rocket Dollar uses a flat monthly subscription model. This makes them particularly attractive for active investors who make multiple investments per year.
                                </p>

                                <h2>Pros & Cons</h2>
                                <ProsCons
                                    pros={[
                                        "Simple flat-fee pricing ($15 or $30/month)",
                                        "True checkbook control on all plans",
                                        "No per-transaction fees",
                                        "Supports virtually any alternative investment",
                                        "User-friendly platform and mobile app"
                                    ]}
                                    cons={[
                                        "Monthly fee adds up if account is inactive",
                                        "Gold plan required for some features",
                                        "Less hand-holding than full-service custodians",
                                        "Relatively new company (founded 2018)"
                                    ]}
                                />

                                <h2>Rocket Dollar Pricing</h2>
                                <p>
                                    Rocket Dollar offers two plans, both with checkbook control:
                                </p>
                            </div>

                            {/* Pricing Table */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden my-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Feature</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Silver ($15/mo)</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Gold ($30/mo)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="p-4 text-slate-600">Checkbook Control</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">LLC Formation</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">One-Time Setup Fee</td>
                                            <td className="p-4 text-slate-600">$360</td>
                                            <td className="p-4 text-green-600 font-medium">$0</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Priority Support</td>
                                            <td className="p-4 text-slate-400">No</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Tax Filing Support</td>
                                            <td className="p-4 text-slate-400">No</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Unlimited Sub-LLCs</td>
                                            <td className="p-4 text-slate-400">No</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900">
                                <p>
                                    <strong>Which plan should you choose?</strong> The Silver plan ($15/month + $360 setup) is best for most investors. The Gold plan ($30/month, no setup fee) makes sense if you want priority support, plan to use multiple LLCs, or prefer to avoid the upfront cost.
                                </p>

                                <h2>What Can You Invest In?</h2>
                                <p>
                                    Rocket Dollar supports virtually any IRS-allowed alternative investment:
                                </p>
                            </div>

                            {/* Investment Types */}
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Home className="w-6 h-6 text-green-600" />
                                    <span className="text-slate-900">Real Estate (rental, commercial, land)</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <TrendingUp className="w-6 h-6 text-blue-600" />
                                    <span className="text-slate-900">Cryptocurrency</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Shield className="w-6 h-6 text-[#B22234]" />
                                    <span className="text-slate-900">Precious Metals</span>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3 border border-slate-200">
                                    <Building2 className="w-6 h-6 text-purple-600" />
                                    <span className="text-slate-900">Private Equity & Startups</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900">
                                <h2>Rocket Dollar vs Competitors</h2>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden my-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Feature</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Rocket Dollar</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Equity Trust</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Entrust</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="p-4 text-slate-600">Pricing Model</td>
                                            <td className="p-4 text-green-600 font-medium">Flat monthly</td>
                                            <td className="p-4 text-slate-600">Per-transaction</td>
                                            <td className="p-4 text-slate-600">Per-transaction</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Checkbook Control</td>
                                            <td className="p-4"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                                            <td className="p-4 text-slate-400">Optional (extra)</td>
                                            <td className="p-4 text-slate-400">No</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Best For</td>
                                            <td className="p-4 text-slate-600">Active investors</td>
                                            <td className="p-4 text-slate-600">Occasional investors</td>
                                            <td className="p-4 text-slate-600">Real estate focus</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900">
                                <h2>Who Should Use Rocket Dollar?</h2>
                                <ul>
                                    <li><strong>Real estate investors</strong> who need to close deals quickly</li>
                                    <li><strong>Active alternative investors</strong> making multiple investments yearly</li>
                                    <li><strong>DIY investors</strong> comfortable managing their own compliance</li>
                                    <li><strong>Cost-conscious investors</strong> who prefer predictable monthly fees</li>
                                </ul>

                                <h2>Who Should NOT Use Rocket Dollar?</h2>
                                <ul>
                                    <li><strong>Passive investors</strong> making 1-2 investments per year (per-transaction might be cheaper)</li>
                                    <li><strong>Those wanting hand-holding</strong> — Rocket Dollar is more DIY</li>
                                    <li><strong>Crypto-only investors</strong> — iTrustCapital or Alto IRA are better for pure crypto</li>
                                </ul>

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Rocket Dollar</strong> is the best choice for investors who want checkbook control at a predictable price. The $15/month Silver plan is hard to beat for active alternative investors, especially those focused on real estate.
                                </p>
                                <p>
                                    <strong>Rating: 4.6/5</strong>
                                </p>
                            </div>

                            {/* FAQ */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is Rocket Dollar legit?",
                                            a: "Yes, Rocket Dollar is a legitimate SDIRA custodian with an A rating from the BBB. They've been operating since 2018 and are based in Austin, Texas."
                                        },
                                        {
                                            q: "How long does it take to open a Rocket Dollar account?",
                                            a: "Account setup typically takes 1-2 weeks. This includes forming your LLC, setting up the bank account, and completing the custodial paperwork."
                                        },
                                        {
                                            q: "Can I rollover my 401(k) to Rocket Dollar?",
                                            a: "Yes, you can rollover funds from a 401(k), Traditional IRA, Roth IRA, 403(b), or other qualified retirement accounts into a Rocket Dollar SDIRA."
                                        },
                                        {
                                            q: "Does Rocket Dollar support Roth IRAs?",
                                            a: "Yes, Rocket Dollar supports both Traditional and Roth Self-Directed IRAs with checkbook control."
                                        },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                                            <h3 className="font-bold text-[#000080] mb-2">{faq.q}</h3>
                                            <p className="text-slate-600 text-sm">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-[#000080] text-white p-8 rounded-2xl text-center mt-12 border border-[#000080] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Ready to Get Started?</h3>
                                    <p className="mb-6 text-white/80 max-w-lg mx-auto">
                                        Open your Rocket Dollar self-directed IRA and take control of your retirement investments.
                                    </p>
                                    <Button variant="gold" size="xl" className="shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                                            Open Rocket Dollar Account
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </a>
                                    </Button>
                                    <p className="text-xs text-white/60 mt-4">$15/month • Checkbook control • No per-transaction fees</p>
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
                                            Self-Directed IRA Guide →
                                        </Link>
                                        <Link href="/learn/checkbook-ira" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            What is a Checkbook IRA? →
                                        </Link>
                                        <Link href="/learn/self-directed-roth-ira" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Self-Directed Roth IRA →
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-[#B22234] fill-[#B22234]' : 'text-[#B22234]/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-[#000080] font-bold">4.6 / 5</p>
                                    <p className="text-slate-500 text-xs mt-1">Our Rating</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </div>

            <Footer />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "itemReviewed": {
                            "@type": "FinancialProduct",
                            "name": "Rocket Dollar",
                            "description": "Self-Directed IRA with checkbook control"
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.6",
                            "bestRating": "5"
                        },
                        "author": { "@type": "Organization", "name": "Rich Dad Retirement" }
                    })
                }}
            />
        </main>
    );
}
