import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    ArrowRight,
    CheckCircle2,
    XCircle,
    Lock,
    Zap,
    DollarSign,
    Shield,
    AlertTriangle,
    FileText
} from "lucide-react";

export const metadata: Metadata = {
    title: "Checkbook IRA Guide 2026: What is Checkbook Control?",
    description: "Learn what a Checkbook IRA is, how it works, pros and cons, and whether checkbook control is right for your self-directed retirement investing.",
    keywords: "checkbook ira, checkbook control ira, ira llc, self directed ira checkbook, checkbook control",
    openGraph: {
        title: "Checkbook IRA Guide 2026: Take Direct Control of Your Retirement",
        description: "Everything you need to know about Checkbook IRAs and checkbook control for self-directed retirement accounts.",
        type: "article",
    },
};

export default function CheckbookIRAPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Hero */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-slate-900 to-slate-900"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mb-4">
                            <span className="bg-purple-500/20 px-3 py-1 rounded-full">Self-Directed IRA</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-400">Updated January 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            What is a Checkbook IRA?
                        </h1>

                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
                            After decades of building your retirement savings, you might be frustrated with how long it takes to make investment decisions. A Checkbook IRA gives you direct control—no waiting for custodian approval. Here&apos;s how it works and whether it makes sense for protecting what you&apos;ve built.
                        </p>

                        <Button variant="gold" size="lg" asChild>
                            <Link href="/reviews/rocket-dollar">
                                See Top Checkbook IRA Provider
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </header>

            {/* Key Takeaways */}
            <section className="py-12 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                            <h2 className="text-lg font-bold text-white mb-4">Key Takeaways</h2>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    A Checkbook IRA lets you write checks directly from your IRA without custodian delays
                                </li>
                                <li className="flex items-start gap-2 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Works by having your IRA own an LLC that you manage
                                </li>
                                <li className="flex items-start gap-2 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Best for real estate investors who need to close deals quickly
                                </li>
                                <li className="flex items-start gap-2 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Providers like Rocket Dollar offer turnkey setup for $15/month
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">

                            <h2>What is a Checkbook IRA?</h2>
                            <p>
                                Let&apos;s be straight with you: A <strong>Checkbook IRA</strong> (also called Checkbook Control IRA) gives you direct access to your retirement funds for making investments. No more waiting days or weeks for custodian approval.
                            </p>
                            <p>
                                Like Joe, a retired electrician from Michigan, many workers get frustrated when they find a good investment opportunity but can&apos;t move fast enough because their custodian takes two weeks to process paperwork. A Checkbook IRA solves that—you write a check or use a debit card and the deal is done.
                            </p>

                            <h2>How Does a Checkbook IRA Work?</h2>
                            <p>
                                The structure involves three components:
                            </p>
                            <ol>
                                <li><strong>Your Self-Directed IRA</strong> — Held by a custodian (like Rocket Dollar or Equity Trust)</li>
                                <li><strong>An LLC</strong> — Your IRA invests its funds into an LLC</li>
                                <li><strong>You as Manager</strong> — You manage the LLC and have signing authority on its bank account</li>
                            </ol>
                            <p>
                                When you find an investment opportunity, you simply write a check from the LLC's bank account. The funds flow from your IRA → LLC → Investment, but you control the checkbook.
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 not-prose my-8">
                                <h3 className="text-xl font-bold text-white mb-4">Checkbook IRA Structure</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Self-Directed IRA</p>
                                            <p className="text-slate-400 text-sm">Held by custodian, provides tax benefits</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <ArrowRight className="w-6 h-6 text-slate-500 rotate-90" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">LLC (IRA-Owned)</p>
                                            <p className="text-slate-400 text-sm">IRA's sole investment, you're the manager</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <ArrowRight className="w-6 h-6 text-slate-500 rotate-90" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                            <Lock className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">LLC Bank Account (Checkbook)</p>
                                            <p className="text-slate-400 text-sm">You have signing authority to make investments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2>Checkbook IRA vs Traditional Self-Directed IRA</h2>
                        </div>

                        {/* Comparison Table */}
                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden my-8">
                            <table className="w-full text-sm">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="text-left p-4 text-white font-semibold">Feature</th>
                                        <th className="text-left p-4 text-white font-semibold">Checkbook IRA</th>
                                        <th className="text-left p-4 text-white font-semibold">Traditional SDIRA</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    <tr>
                                        <td className="p-4 text-slate-300">Transaction Speed</td>
                                        <td className="p-4 text-green-400 font-medium">Instant (write a check)</td>
                                        <td className="p-4 text-amber-400">Days to weeks</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Per-Transaction Fees</td>
                                        <td className="p-4 text-green-400 font-medium">None</td>
                                        <td className="p-4 text-red-400">$50-$250+ each</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Monthly Fee</td>
                                        <td className="p-4 text-slate-300">$15-$30/month</td>
                                        <td className="p-4 text-slate-300">$0-$50/month</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Setup Complexity</td>
                                        <td className="p-4 text-amber-400">Moderate (LLC required)</td>
                                        <td className="p-4 text-green-400 font-medium">Simple</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Your Responsibility</td>
                                        <td className="p-4 text-amber-400">Higher (manage LLC)</td>
                                        <td className="p-4 text-green-400 font-medium">Lower</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-300">Best For</td>
                                        <td className="p-4 text-slate-300">Active investors, real estate</td>
                                        <td className="p-4 text-slate-300">Occasional investments</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">
                            <h2>Pros and Cons of Checkbook IRAs</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                                <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Advantages
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <Zap className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span><strong>Speed:</strong> Close real estate deals in days, not weeks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DollarSign className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span><strong>Lower fees:</strong> No per-transaction custodian fees</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Lock className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span><strong>Full control:</strong> Make investment decisions independently</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                        <span><strong>Privacy:</strong> Investments held by LLC, not directly visible</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                                <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" />
                                    Disadvantages
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                                        <span><strong>More responsibility:</strong> You must ensure IRS compliance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                                        <span><strong>Setup costs:</strong> LLC formation and registered agent fees</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                                        <span><strong>Complexity:</strong> More moving parts than traditional SDIRA</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                                        <span><strong>Risk:</strong> Mistakes can disqualify your entire IRA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">
                            <h2>Who Should Use a Checkbook IRA?</h2>
                            <p>After decades of hard work building your savings, a Checkbook IRA makes sense if you&apos;re:</p>
                            <ul>
                                <li><strong>Buying rental properties</strong> where you need to close deals fast</li>
                                <li><strong>An active investor</strong> making several investments per year</li>
                                <li><strong>Comfortable with IRS rules</strong> and willing to stay compliant</li>
                                <li><strong>Tired of waiting</strong> for custodians to approve time-sensitive deals</li>
                            </ul>

                            <h2>Who Should NOT Use a Checkbook IRA?</h2>
                            <p>Here&apos;s the honest truth—this isn&apos;t for everyone:</p>
                            <ul>
                                <li><strong>Workers focused on protection</strong> who just want their savings in gold or simple investments (a regular Gold IRA is easier)</li>
                                <li><strong>People making 1-2 investments per year</strong> (the extra complexity isn&apos;t worth it)</li>
                                <li><strong>Anyone unfamiliar with IRS prohibited transaction rules</strong> (one mistake can cost you the whole IRA)</li>
                            </ul>

                            <h2>Best Checkbook IRA Providers</h2>
                            <p>
                                Several companies offer turnkey Checkbook IRA solutions that handle LLC formation and setup:
                            </p>
                        </div>

                        {/* Provider Cards */}
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/50 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">TOP PICK</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Rocket Dollar</h3>
                                <p className="text-slate-400 text-sm mb-4">Best overall checkbook IRA with simple $15/month pricing.</p>
                                <ul className="space-y-1 text-sm text-slate-300 mb-4">
                                    <li>• $15/month (Silver) or $30/month (Gold)</li>
                                    <li>• LLC formation included</li>
                                    <li>• Supports real estate, crypto, private equity</li>
                                </ul>
                                <Button variant="gold" className="w-full" asChild>
                                    <Link href="/reviews/rocket-dollar">Read Review →</Link>
                                </Button>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Broad Financial</h3>
                                <p className="text-slate-400 text-sm mb-4">Established provider focused on checkbook control.</p>
                                <ul className="space-y-1 text-sm text-slate-300 mb-4">
                                    <li>• One-time setup fee model</li>
                                    <li>• Low ongoing costs</li>
                                    <li>• Strong compliance support</li>
                                </ul>
                                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                                    Coming Soon
                                </Button>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "Is a Checkbook IRA legal?",
                                        a: "Yes, Checkbook IRAs are completely legal and IRS-approved. The structure has been validated by multiple IRS rulings and tax court cases. The key is following all prohibited transaction rules."
                                    },
                                    {
                                        q: "How much does it cost to set up a Checkbook IRA?",
                                        a: "Setup costs typically range from $500-$1,500 for LLC formation, registered agent, and account setup. Ongoing costs are usually $15-$50/month. Providers like Rocket Dollar include setup in their pricing."
                                    },
                                    {
                                        q: "Can I have checkbook control for a Roth IRA?",
                                        a: "Yes, you can have checkbook control with either a Traditional or Roth Self-Directed IRA. The tax treatment follows the same rules as any IRA—Roth grows tax-free, Traditional is tax-deferred."
                                    },
                                    {
                                        q: "What can I invest in with a Checkbook IRA?",
                                        a: "The same investments allowed in any Self-Directed IRA: real estate, precious metals, cryptocurrency, private equity, tax liens, promissory notes, and more. The only difference is you have direct checkbook access."
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
                        <Link href="/self-directed-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Self-Directed IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Complete guide to SDIRA investing.</p>
                        </Link>
                        <Link href="/reviews/rocket-dollar" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Rocket Dollar Review</h3>
                            <p className="text-slate-400 text-sm">Top checkbook IRA provider reviewed.</p>
                        </Link>
                        <Link href="/learn/self-directed-roth-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Self-Directed Roth IRA</h3>
                            <p className="text-slate-400 text-sm">Tax-free alternative investments.</p>
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
                        "headline": "What is a Checkbook IRA? Complete Guide to Checkbook Control",
                        "description": "Learn what a Checkbook IRA is, how it works, pros and cons, and whether checkbook control is right for your self-directed retirement investing.",
                        "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
                        "datePublished": "2026-01-01",
                        "dateModified": "2026-01-25"
                    })
                }}
            />
        </main>
    );
}
