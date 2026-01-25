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
    },
};

export default function SelfDirectedRothIRAPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Hero */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-slate-900 to-slate-900"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
                            <span className="bg-green-500/20 px-3 py-1 rounded-full">Self-Directed IRA</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-400">Updated January 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            Self-Directed Roth IRA: <br />
                            <span className="text-green-400">Tax-Free</span> Alternative Investments
                        </h1>

                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
                            Combine the power of tax-free Roth IRA growth with alternative investments like real estate, cryptocurrency, and precious metals. Never pay taxes on your gains.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/self-directed-ira">
                                    Learn About SDIRAs
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                                <Link href="/reviews/rocket-dollar">
                                    See Top Provider
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Key Benefits */}
            <section className="py-12 bg-slate-800/50">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Tax-Free Growth</h3>
                                <p className="text-slate-400 text-sm">All qualified withdrawals are completely tax-free—including decades of gains.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Alternative Assets</h3>
                                <p className="text-slate-400 text-sm">Invest in real estate, crypto, gold, startups, and more beyond stocks.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Lock className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Full Control</h3>
                                <p className="text-slate-400 text-sm">You choose your investments—not a fund manager or financial advisor.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">

                            <h2>What is a Self-Directed Roth IRA?</h2>
                            <p>
                                A <strong>Self-Directed Roth IRA</strong> combines two powerful concepts:
                            </p>
                            <ol>
                                <li><strong>Roth IRA tax treatment</strong> — Contributions are after-tax, but all qualified withdrawals (including gains) are completely tax-free</li>
                                <li><strong>Self-directed investing</strong> — You can invest in alternative assets beyond stocks and bonds</li>
                            </ol>
                            <p>
                                The result? You can invest in real estate, cryptocurrency, precious metals, and other alternatives—and <strong>never pay taxes on the gains</strong> when you withdraw in retirement.
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
                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden my-8">
                            <table className="w-full text-sm">
                                <tbody className="divide-y divide-white/10">
                                    <tr>
                                        <td className="p-4 text-slate-400 font-medium">Contribution Limit (2026)</td>
                                        <td className="p-4 text-white">$7,000 ($8,000 if 50+)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-400 font-medium">Income Limit (Single)</td>
                                        <td className="p-4 text-white">$161,000 (phases out up to $176,000)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-400 font-medium">Income Limit (Married)</td>
                                        <td className="p-4 text-white">$240,000 (phases out up to $250,000)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-400 font-medium">Qualified Withdrawals</td>
                                        <td className="p-4 text-white">After age 59½ and 5-year rule met</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-400 font-medium">Required Minimum Distributions</td>
                                        <td className="p-4 text-green-400 font-medium">None (Roth IRAs have no RMDs)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">
                            <h2>What Can You Invest In?</h2>
                            <p>
                                A Self-Directed Roth IRA allows the same alternative investments as any Self-Directed IRA:
                            </p>
                        </div>

                        {/* Investment Types */}
                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                <Home className="w-6 h-6 text-green-400" />
                                <div>
                                    <p className="text-white font-medium">Real Estate</p>
                                    <p className="text-slate-400 text-sm">Rental, commercial, land, REITs</p>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                                <div>
                                    <p className="text-white font-medium">Cryptocurrency</p>
                                    <p className="text-slate-400 text-sm">Bitcoin, Ethereum, altcoins</p>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                <Coins className="w-6 h-6 text-amber-400" />
                                <div>
                                    <p className="text-white font-medium">Precious Metals</p>
                                    <p className="text-slate-400 text-sm">Gold, silver, platinum</p>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                                <DollarSign className="w-6 h-6 text-purple-400" />
                                <div>
                                    <p className="text-white font-medium">Private Equity</p>
                                    <p className="text-slate-400 text-sm">Startups, LLCs, private companies</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">
                            <h2>Self-Directed Roth IRA vs Traditional SDIRA</h2>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden my-8">
                            <table className="w-full text-sm">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="text-left p-4 text-white font-semibold">Feature</th>
                                        <th className="text-left p-4 text-white font-semibold">Self-Directed Roth</th>
                                        <th className="text-left p-4 text-white font-semibold">Self-Directed Traditional</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    <tr>
                                        <td className="p-4 text-slate-300">Contributions</td>
                                        <td className="p-4 text-slate-300">After-tax</td>
                                        <td className="p-4 text-green-400">Pre-tax (deductible)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Withdrawals</td>
                                        <td className="p-4 text-green-400 font-medium">Tax-free</td>
                                        <td className="p-4 text-slate-300">Taxed as income</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Required Distributions</td>
                                        <td className="p-4 text-green-400 font-medium">None</td>
                                        <td className="p-4 text-slate-300">Starting at 73</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Income Limits</td>
                                        <td className="p-4 text-amber-400">Yes (see above)</td>
                                        <td className="p-4 text-green-400 font-medium">No</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Best For</td>
                                        <td className="p-4 text-slate-300">Expecting higher taxes later</td>
                                        <td className="p-4 text-slate-300">Need tax break now</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Important Note */}
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 my-8">
                            <div className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-2">The Backdoor Roth Strategy</h4>
                                    <p className="text-slate-300 text-sm">
                                        If your income exceeds Roth IRA limits, you can still use a "Backdoor Roth" strategy: contribute to a Traditional IRA (non-deductible) and convert it to a Roth. This works with Self-Directed IRAs too. Consult a tax professional for details.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">
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
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/50 p-6">
                                <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">CHECKBOOK CONTROL</span>
                                <h3 className="text-xl font-bold text-white mt-3 mb-2">Rocket Dollar</h3>
                                <p className="text-slate-400 text-sm mb-4">Best for real estate and active investors. $15/month flat fee.</p>
                                <Button variant="gold" className="w-full" asChild>
                                    <Link href="/reviews/rocket-dollar">Read Review →</Link>
                                </Button>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded">CRYPTO FOCUSED</span>
                                <h3 className="text-xl font-bold text-white mt-3 mb-2">iTrustCapital</h3>
                                <p className="text-slate-400 text-sm mb-4">Best for crypto investors. 1% trading fee, Roth supported.</p>
                                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" asChild>
                                    <Link href="/reviews/itrustcapital">Read Review →</Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h2>
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
                                    <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                        <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                                        <p className="text-slate-400 text-sm">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/self-directed-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Self-Directed IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Complete guide to SDIRA investing.</p>
                        </Link>
                        <Link href="/learn/checkbook-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Checkbook IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Take direct control of your IRA.</p>
                        </Link>
                        <Link href="/crypto-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Crypto IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Tax-free crypto investing.</p>
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
