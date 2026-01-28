import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    ArrowRight,
    CheckCircle2,
    Shield,
    TrendingUp,
    DollarSign,
    AlertTriangle,
    Coins,
    Home,
    Lock
} from "lucide-react";

export const metadata: Metadata = {
    title: "Self-Directed Roth IRA Guide 2026: Tax-Free Alternative Investments",
    description: "Learn how a Self-Directed Roth IRA lets you invest in real estate, crypto, and gold completely tax-free. Contribution limits, rules, and best providers.",
    keywords: "self directed roth ira, roth ira real estate, roth ira crypto, self directed roth ira rules, roth ira alternative investments",
    openGraph: {
        title: "Self-Directed Roth IRA Guide 2026: Tax-Free Alternative Investments",
        description: "Combine the power of tax-free Roth growth with alternative investments like real estate, crypto, and gold.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function SelfDirectedRothIRAPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-slate-900 to-slate-900"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
                            <span className="bg-green-500/20 px-3 py-1 rounded-full">Self-Directed IRA</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-500">Updated January 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6 leading-tight">
                            Self-Directed Roth IRA: <br />
                            <span className="text-green-400">Tax-Free</span> Alternative Investments
                        </h1>

                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
                            You paid taxes on every paycheck for 30 years. With a Self-Directed Roth IRA, your retirement growth is <strong>completely tax-free</strong>—and you get to invest in real assets like gold, real estate, and more. Not just whatever funds HR picked.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/self-directed-ira">
                                    Learn About SDIRAs
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/20 text-[#000080] hover:bg-white/10" asChild>
                                <Link href="/reviews/rocket-dollar">
                                    See Top Provider
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Key Benefits */}
            <section className="py-12 bg-slate-50">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-lg font-bold text-[#000080] mb-2">Tax-Free Growth</h3>
                                <p className="text-slate-500 text-sm">All qualified withdrawals are completely tax-free—including decades of gains.</p>
                            </div>
                            <div className="bg-slate-50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold text-[#000080] mb-2">Alternative Assets</h3>
                                <p className="text-slate-500 text-sm">Invest in real estate, crypto, gold, startups, and more beyond stocks.</p>
                            </div>
                            <div className="bg-slate-50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Lock className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-lg font-bold text-[#000080] mb-2">Full Control</h3>
                                <p className="text-slate-500 text-sm">You choose your investments—not a fund manager or financial advisor.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-[#000080]">

                            <h2>What is a Self-Directed Roth IRA?</h2>
                            <p>
                                Your regular 401(k) limits you to whatever investment options your employer&apos;s plan administrator picked—usually the same mutual funds that crashed 40% in 2008. A <strong>Self-Directed Roth IRA</strong> puts you back in control:
                            </p>
                            <ol>
                                <li><strong>Roth tax treatment</strong> — You&apos;ve already paid taxes on this money. When you withdraw in retirement, you pay <em>nothing</em>—even on decades of growth</li>
                                <li><strong>Self-directed freedom</strong> — You choose the investments: physical gold, real estate, even crypto. Not whatever Wall Street wants to sell you</li>
                            </ol>
                            <p>
                                For workers who&apos;ve saved $500K or more and don&apos;t trust the market not to crash again, this is how you take back control. <strong>Your money, your decisions, zero taxes on the gains.</strong>
                            </p>

                            <h2>Why Consider a Self-Directed Roth IRA?</h2>
                            <p>
                                Imagine buying a rental property in your Roth IRA. Over 20 years, it generates $200,000 in rental income and appreciates $300,000. In a regular account, you'd owe taxes on all of it. In a Self-Directed Roth IRA? <strong>$0 in taxes</strong> when you withdraw.
                            </p>
                            <p>
                                The same applies to crypto gains. If your Bitcoin investment grows 10x inside a Roth IRA, you keep every penny when you withdraw in retirement.
                            </p>

                            <h2>Self-Directed Roth IRA Rules for 2026</h2>
                        </div>

                        {/* Rules Table */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden my-8">
                            <table className="w-full text-sm">
                                <tbody className="divide-y divide-white/10">
                                    <tr>
                                        <td className="p-4 text-slate-500 font-medium">Contribution Limit (2026)</td>
                                        <td className="p-4 text-[#000080]">$7,000 ($8,000 if 50+)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-500 font-medium">Income Limit (Single)</td>
                                        <td className="p-4 text-[#000080]">$161,000 (phases out up to $176,000)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-500 font-medium">Income Limit (Married)</td>
                                        <td className="p-4 text-[#000080]">$240,000 (phases out up to $250,000)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-500 font-medium">Qualified Withdrawals</td>
                                        <td className="p-4 text-[#000080]">After age 59½ and 5-year rule met</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-500 font-medium">Required Minimum Distributions</td>
                                        <td className="p-4 text-green-400 font-medium">None (Roth IRAs have no RMDs)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-[#000080]">
                            <h2>What Can You Invest In?</h2>
                            <p>
                                A Self-Directed Roth IRA allows the same alternative investments as any Self-Directed IRA:
                            </p>
                        </div>

                        {/* Investment Types */}
                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3">
                                <Home className="w-6 h-6 text-green-400" />
                                <div>
                                    <p className="text-[#000080] font-medium">Real Estate</p>
                                    <p className="text-slate-500 text-sm">Rental, commercial, land, REITs</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                                <div>
                                    <p className="text-[#000080] font-medium">Cryptocurrency</p>
                                    <p className="text-slate-500 text-sm">Bitcoin, Ethereum, altcoins</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3">
                                <Coins className="w-6 h-6 text-amber-400" />
                                <div>
                                    <p className="text-[#000080] font-medium">Precious Metals</p>
                                    <p className="text-slate-500 text-sm">Gold, silver, platinum</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3">
                                <DollarSign className="w-6 h-6 text-purple-400" />
                                <div>
                                    <p className="text-[#000080] font-medium">Private Equity</p>
                                    <p className="text-slate-500 text-sm">Startups, LLCs, private companies</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-[#000080]">
                            <h2>Self-Directed Roth IRA vs Traditional SDIRA</h2>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden my-8">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="text-left p-4 text-[#000080] font-semibold">Feature</th>
                                        <th className="text-left p-4 text-[#000080] font-semibold">Self-Directed Roth</th>
                                        <th className="text-left p-4 text-[#000080] font-semibold">Self-Directed Traditional</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    <tr>
                                        <td className="p-4 text-slate-600">Contributions</td>
                                        <td className="p-4 text-slate-600">After-tax</td>
                                        <td className="p-4 text-green-400">Pre-tax (deductible)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Withdrawals</td>
                                        <td className="p-4 text-green-400 font-medium">Tax-free</td>
                                        <td className="p-4 text-slate-600">Taxed as income</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Required Distributions</td>
                                        <td className="p-4 text-green-400 font-medium">None</td>
                                        <td className="p-4 text-slate-600">Starting at 73</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Income Limits</td>
                                        <td className="p-4 text-amber-400">Yes (see above)</td>
                                        <td className="p-4 text-green-400 font-medium">No</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600">Best For</td>
                                        <td className="p-4 text-slate-600">Expecting higher taxes later</td>
                                        <td className="p-4 text-slate-600">Need tax break now</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Important Note */}
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 my-8">
                            <div className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#000080] mb-2">The Backdoor Roth Strategy</h4>
                                    <p className="text-slate-600 text-sm">
                                        If your income exceeds Roth IRA limits, you can still use a "Backdoor Roth" strategy: contribute to a Traditional IRA (non-deductible) and convert it to a Roth. This works with Self-Directed IRAs too. Consult a tax professional for details.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-[#000080]">
                            <h2>How to Open a Self-Directed Roth IRA</h2>
                            <ol>
                                <li><strong>Choose a custodian</strong> — Rocket Dollar, Equity Trust, or Entrust for alternatives</li>
                                <li><strong>Select Roth IRA option</strong> — Specify Roth (not Traditional) when opening</li>
                                <li><strong>Fund your account</strong> — Contribute cash or convert from Traditional IRA</li>
                                <li><strong>Make investments</strong> — Purchase real estate, crypto, gold, etc.</li>
                                <li><strong>Hold and grow tax-free</strong> — All gains are sheltered from taxes</li>
                            </ol>

                            <h2>Best Self-Directed Roth IRA Providers</h2>
                        </div>

                        {/* Provider Cards */}
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-purple-500/50 p-6">
                                <span className="bg-purple-500 text-[#000080] text-xs font-bold px-2 py-1 rounded">CHECKBOOK CONTROL</span>
                                <h3 className="text-xl font-bold text-[#000080] mt-3 mb-2">Rocket Dollar</h3>
                                <p className="text-slate-500 text-sm mb-4">Best for real estate and active investors. $15/month flat fee.</p>
                                <Button variant="gold" className="w-full" asChild>
                                    <Link href="/reviews/rocket-dollar">Read Review →</Link>
                                </Button>
                            </div>
                            <div className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded">CRYPTO FOCUSED</span>
                                <h3 className="text-xl font-bold text-[#000080] mt-3 mb-2">iTrustCapital</h3>
                                <p className="text-slate-500 text-sm mb-4">Best for crypto investors. 1% trading fee, Roth supported.</p>
                                <Button variant="outline" className="w-full border-white/20 text-[#000080] hover:bg-white/10" asChild>
                                    <Link href="/reviews/itrustcapital">Read Review →</Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "Can I have a Self-Directed Roth IRA?",
                                        a: "Yes, you can have a Roth IRA that is self-directed. Most SDIRA custodians offer both Traditional and Roth account options. You get the alternative investment flexibility plus tax-free Roth growth."
                                    },
                                    {
                                        q: "Can I buy real estate in a Roth IRA?",
                                        a: "Yes, you can buy real estate in a Self-Directed Roth IRA. All rental income and appreciation grows tax-free. However, you cannot personally use the property or perform labor on it."
                                    },
                                    {
                                        q: "Can I hold crypto in a Roth IRA?",
                                        a: "Yes, through a Self-Directed Roth IRA or specialized crypto IRA like iTrustCapital. Your crypto gains grow completely tax-free in a Roth structure."
                                    },
                                    {
                                        q: "What are the income limits for a Self-Directed Roth IRA?",
                                        a: "The same as regular Roth IRAs: $161,000 (single) or $240,000 (married) for 2026. Above these limits, you can use the Backdoor Roth strategy to contribute indirectly."
                                    },
                                    {
                                        q: "Can I convert my Traditional SDIRA to a Roth?",
                                        a: "Yes, you can convert a Traditional Self-Directed IRA to a Roth SDIRA. You'll pay taxes on the converted amount, but future growth will be tax-free."
                                    },
                                ].map((faq, i) => (
                                    <div key={i} className="bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6">
                                        <h3 className="font-bold text-[#000080] mb-2">{faq.q}</h3>
                                        <p className="text-slate-500 text-sm">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-[#000080] mb-8 text-center">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/self-directed-ira" className="bg-slate-50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-green-500/50 transition-colors group">
                            <h3 className="font-bold text-[#000080] mb-2 group-hover:text-green-400 transition-colors">Self-Directed IRA Guide</h3>
                            <p className="text-slate-500 text-sm">Complete guide to SDIRA investing.</p>
                        </Link>
                        <Link href="/learn/checkbook-ira" className="bg-slate-50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-green-500/50 transition-colors group">
                            <h3 className="font-bold text-[#000080] mb-2 group-hover:text-green-400 transition-colors">Checkbook IRA Guide</h3>
                            <p className="text-slate-500 text-sm">Take direct control of your IRA.</p>
                        </Link>
                        <Link href="/crypto-ira" className="bg-slate-50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-green-500/50 transition-colors group">
                            <h3 className="font-bold text-[#000080] mb-2 group-hover:text-green-400 transition-colors">Crypto IRA Guide</h3>
                            <p className="text-slate-500 text-sm">Tax-free crypto investing.</p>
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
                        "headline": "Self-Directed Roth IRA Guide: Tax-Free Alternative Investments",
                        "description": "Learn how a Self-Directed Roth IRA lets you invest in real estate, crypto, and gold completely tax-free.",
                        "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
                        "datePublished": "2026-01-01",
                        "dateModified": "2026-01-25"
                    })
                }}
            />
        </main>
    );
}
