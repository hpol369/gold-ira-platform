import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import {
    ArrowRight,
    CheckCircle2,
    XCircle,
    Shield,
    TrendingUp,
    AlertTriangle,
    Calculator,
    Clock,
    Coins
} from "lucide-react";

export const metadata: Metadata = {
    title: "What is a Bitcoin IRA? Complete Guide to Bitcoin Retirement Accounts (2026)",
    description: "Learn what a Bitcoin IRA is, how it works, tax benefits, risks, and whether it's right for your retirement. Compare the best Bitcoin IRA providers.",
    keywords: "bitcoin ira, what is a bitcoin ira, bitcoin retirement account, bitcoin 401k rollover, crypto ira",
    openGraph: {
        title: "What is a Bitcoin IRA? Complete Guide 2026",
        description: "Everything you need to know about Bitcoin IRAs - tax benefits, how they work, and whether they're right for your retirement.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function BitcoinIRAPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-slate-50"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-[#B22234] text-sm font-medium mb-4">
                            <span className="bg-[#B22234]/10 px-3 py-1 rounded-full">Educational Guide</span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500">Updated January 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6 leading-tight">
                            What is a Bitcoin IRA?
                        </h1>

                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
                            After decades of building your 401k, you might be curious about cryptocurrency. A Bitcoin IRA lets you hold Bitcoin in a tax-advantaged retirement account—your gains can grow tax-free (Roth) or tax-deferred (Traditional). Here&apos;s what you need to know before putting any of your hard-earned savings into crypto.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/best-crypto-ira-companies">
                                    Compare Bitcoin IRA Providers
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Key Takeaways */}
            <section className="py-12 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-[#000080] mb-4">Key Takeaways</h2>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    A Bitcoin IRA is a self-directed IRA that holds cryptocurrency instead of (or alongside) traditional assets
                                </li>
                                <li className="flex items-start gap-2 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    Tax benefits: gains grow tax-deferred (Traditional) or tax-free (Roth IRA)
                                </li>
                                <li className="flex items-start gap-2 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    You can rollover funds from a 401(k), IRA, or other retirement accounts
                                </li>
                                <li className="flex items-start gap-2 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    Top providers include iTrustCapital (1% fee) and Alto IRA (200+ coins)
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-[#000080] prose-a:text-[#B22234]">

                            <h2>What is a Bitcoin IRA?</h2>
                            <p>
                                Let&apos;s be straight with you: a <strong>Bitcoin IRA</strong> (also called a Crypto IRA) is a self-directed retirement account that lets you invest in Bitcoin and other cryptocurrencies. It&apos;s riskier than gold or traditional investments, but some workers use it to diversify a small portion of their savings.
                            </p>
                            <p>
                                Unlike buying Bitcoin on regular exchanges where every trade triggers taxes, a Bitcoin IRA shelters your gains:
                            </p>
                            <ul>
                                <li><strong>Traditional Bitcoin IRA:</strong> Contributions may be tax-deductible. Gains grow tax-deferred until you withdraw in retirement (then taxed as ordinary income).</li>
                                <li><strong>Roth Bitcoin IRA:</strong> Contributions are after-tax, but all qualified withdrawals—including decades of potential Bitcoin gains—are completely tax-free.</li>
                            </ul>

                            <h2>How Does a Bitcoin IRA Work?</h2>
                            <p>
                                Bitcoin IRAs work similarly to traditional IRAs, but with cryptocurrency as the underlying asset:
                            </p>
                            <ol>
                                <li><strong>Open an account</strong> with a specialized crypto IRA provider (like iTrustCapital or Alto IRA)</li>
                                <li><strong>Fund your account</strong> via rollover from existing 401(k)/IRA or new cash contribution</li>
                                <li><strong>Purchase Bitcoin</strong> (or other cryptocurrencies) through the platform</li>
                                <li><strong>Hold tax-advantaged</strong> until retirement age (59½)</li>
                                <li><strong>Withdraw in retirement</strong> with favorable tax treatment</li>
                            </ol>
                            <p>
                                Your Bitcoin is held by a qualified custodian—you don't control the private keys directly. This is an IRS requirement for retirement accounts.
                            </p>

                            <h2>Bitcoin IRA Tax Benefits</h2>
                            <p>
                                The tax advantages can be significant for long-term Bitcoin holders:
                            </p>

                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden not-prose my-8 shadow-sm">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Scenario</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Regular Exchange</th>
                                            <th className="text-left p-4 text-[#000080] font-semibold">Bitcoin IRA</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="p-4 text-slate-600">Buy $10,000 Bitcoin</td>
                                            <td className="p-4 text-slate-600">$10,000</td>
                                            <td className="p-4 text-slate-600">$10,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Value grows to $100,000</td>
                                            <td className="p-4 text-slate-600">$90,000 gain</td>
                                            <td className="p-4 text-slate-600">$90,000 gain</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Tax on gain (selling)</td>
                                            <td className="p-4 text-red-600">~$18,000 (20% cap gains)</td>
                                            <td className="p-4 text-green-600">$0 (Roth) or deferred</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-slate-600">Tax on trades/swaps</td>
                                            <td className="p-4 text-red-600">Taxable events</td>
                                            <td className="p-4 text-green-600">No tax impact</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Example:</strong> If you believe Bitcoin will grow significantly over 20+ years, holding it in a Roth IRA means you could potentially avoid paying any capital gains tax on those gains—ever.
                            </p>

                            <h2>Bitcoin IRA vs Regular Crypto Investing</h2>

                            <div className="bg-white border border-slate-200 rounded-xl p-6 not-prose my-8 shadow-sm">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" />
                                            Bitcoin IRA Pros
                                        </h4>
                                        <ul className="space-y-2 text-slate-600 text-sm">
                                            <li>• Tax-free or tax-deferred gains</li>
                                            <li>• No tax on rebalancing/trading</li>
                                            <li>• Institutional-grade custody</li>
                                            <li>• Forced long-term holding (good for HODL)</li>
                                            <li>• Can rollover existing retirement funds</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                                            <XCircle className="w-5 h-5" />
                                            Bitcoin IRA Cons
                                        </h4>
                                        <ul className="space-y-2 text-slate-600 text-sm">
                                            <li>• Contribution limits ($7,000-$8,000/year)</li>
                                            <li>• Early withdrawal penalties (before 59½)</li>
                                            <li>• Can't hold your own keys</li>
                                            <li>• Provider fees (1-2% per trade)</li>
                                            <li>• Less liquidity than exchanges</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2>Who Should Consider a Bitcoin IRA?</h2>
                            <p>
                                Here&apos;s the reality: A Bitcoin IRA is NOT for everyone. If you&apos;ve spent 30 years building your retirement savings, you don&apos;t want to gamble it all on crypto. But a small allocation (5-10%) might make sense for:
                            </p>
                            <ul>
                                <li><strong>Workers with solid savings</strong> who can afford some risk on a small portion</li>
                                <li><strong>Those with old 401(k)s</strong> sitting with former employers</li>
                                <li><strong>Long-term holders</strong> who won&apos;t panic when Bitcoin drops 50%</li>
                                <li><strong>People who understand</strong> this is speculation, not protection</li>
                            </ul>

                            <h2>Who Should NOT Use a Bitcoin IRA?</h2>
                            <p>
                                If you&apos;ve worked 30 years to build your nest egg and protection is your priority, think carefully before putting significant money here:
                            </p>
                            <ul>
                                <li><strong>Workers close to retirement</strong> — you can&apos;t afford a 50% drop right before you stop working</li>
                                <li><strong>Those who need liquidity</strong> — early withdrawal penalties apply before 59½</li>
                                <li><strong>Anyone who can&apos;t stomach volatility</strong> — Bitcoin can lose half its value in months</li>
                                <li><strong>People looking to protect savings</strong> — gold is better for preservation; crypto is speculation</li>
                            </ul>

                            <h2>How to Rollover Your 401(k) to a Bitcoin IRA</h2>
                            <p>
                                One of the most common ways to fund a Bitcoin IRA is through a 401(k) rollover:
                            </p>
                            <ol>
                                <li><strong>Choose a provider</strong> — iTrustCapital, Alto IRA, or Bitcoin IRA</li>
                                <li><strong>Open your account</strong> — Complete application (usually online)</li>
                                <li><strong>Initiate the rollover</strong> — Provider helps you transfer funds from your old 401(k)</li>
                                <li><strong>Wait for funds</strong> — Direct rollovers take 1-3 weeks typically</li>
                                <li><strong>Buy Bitcoin</strong> — Once funded, purchase crypto through the platform</li>
                            </ol>
                            <p>
                                <strong>Important:</strong> Use a "direct rollover" (trustee-to-trustee transfer) to avoid tax withholding and potential penalties.
                            </p>
                        </div>

                        {/* Warning Box */}
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 my-12">
                            <div className="flex gap-4">
                                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-[#000080] mb-2">Important Risks to Consider</h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• <strong>Volatility:</strong> Bitcoin can drop 50%+ in bear markets. Only invest what you can afford to lose.</li>
                                        <li>• <strong>Not FDIC Insured:</strong> Unlike bank accounts, crypto IRAs are not government insured.</li>
                                        <li>• <strong>Regulatory Risk:</strong> Crypto regulations could change, affecting IRA treatment.</li>
                                        <li>• <strong>Provider Risk:</strong> If your provider fails, recovery may be difficult (though assets are typically held separately).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Best Providers */}
                        <div className="my-12">
                            <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Best Bitcoin IRA Providers</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl border-2 border-[#B22234] p-6 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-[#B22234] text-white text-xs font-bold px-2 py-1 rounded">TOP PICK</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#000080] mb-2">iTrustCapital</h3>
                                    <p className="text-slate-500 text-sm mb-4">Best overall with 1% trading fee, no monthly charges, and gold/silver option.</p>
                                    <ul className="space-y-1 text-sm text-slate-600 mb-4">
                                        <li>• 1% trading fee</li>
                                        <li>• $1,000 minimum</li>
                                        <li>• 30+ cryptocurrencies</li>
                                    </ul>
                                    <Button variant="gold" className="w-full" asChild>
                                        <Link href="/reviews/itrustcapital">Read Review →</Link>
                                    </Button>
                                </div>
                                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                                    <h3 className="text-xl font-bold text-[#000080] mb-2">Alto IRA</h3>
                                    <p className="text-slate-500 text-sm mb-4">Best for crypto variety with 200+ coins via Coinbase integration.</p>
                                    <ul className="space-y-1 text-sm text-slate-600 mb-4">
                                        <li>• 1% + spread fee</li>
                                        <li>• $0 minimum</li>
                                        <li>• 200+ cryptocurrencies</li>
                                    </ul>
                                    <Button variant="outline" className="w-full border-slate-300 text-slate-600 hover:bg-slate-50" asChild>
                                        <Link href="/reviews/alto-ira">Read Review →</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="my-12">
                            <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "Is a Bitcoin IRA a good idea?",
                                        a: "It can be for long-term investors who believe in Bitcoin and want tax advantages. The Roth IRA option is especially attractive—potentially tax-free gains forever. However, only invest what you can afford to hold through volatility."
                                    },
                                    {
                                        q: "What is the minimum for a Bitcoin IRA?",
                                        a: "Minimums vary by provider. iTrustCapital requires $1,000, Alto IRA has no minimum, and Bitcoin IRA requires $3,000. Most providers are accessible for average investors."
                                    },
                                    {
                                        q: "Can I transfer existing Bitcoin to a Bitcoin IRA?",
                                        a: "Generally no. Most Bitcoin IRAs only accept cash (via rollover or contribution). You'd need to sell your Bitcoin, transfer the cash, and repurchase within the IRA."
                                    },
                                    {
                                        q: "What happens to my Bitcoin IRA if the company goes bankrupt?",
                                        a: "Your crypto is typically held by a separate qualified custodian, not the provider itself. In bankruptcy, your assets should be protected. However, this varies by provider—always verify their custody arrangement."
                                    },
                                    {
                                        q: "Are Bitcoin IRA gains taxed?",
                                        a: "In a Traditional Bitcoin IRA, gains are tax-deferred until withdrawal (then taxed as income). In a Roth Bitcoin IRA, qualified withdrawals are completely tax-free—including all gains."
                                    },
                                ].map((faq, i) => (
                                    <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                                        <h3 className="font-bold text-[#000080] mb-2">{faq.q}</h3>
                                        <p className="text-slate-500 text-sm">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-[#000080] mb-8 text-center">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/crypto-ira" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#B22234]/50 transition-colors group shadow-sm">
                            <Coins className="w-8 h-8 text-[#B22234] mb-3" />
                            <h3 className="font-bold text-[#000080] mb-2 group-hover:text-[#B22234] transition-colors">Crypto IRA Guide</h3>
                            <p className="text-slate-500 text-sm">Complete guide to all cryptocurrency retirement options.</p>
                        </Link>
                        <Link href="/best-crypto-ira-companies" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#B22234]/50 transition-colors group shadow-sm">
                            <Shield className="w-8 h-8 text-[#000080] mb-3" />
                            <h3 className="font-bold text-[#000080] mb-2 group-hover:text-[#B22234] transition-colors">Best Crypto IRA Companies</h3>
                            <p className="text-slate-500 text-sm">Compare the top Bitcoin IRA providers side-by-side.</p>
                        </Link>
                        <Link href="/compare/gold-ira-vs-crypto" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#B22234]/50 transition-colors group shadow-sm">
                            <TrendingUp className="w-8 h-8 text-[#B22234] mb-3" />
                            <h3 className="font-bold text-[#000080] mb-2 group-hover:text-[#B22234] transition-colors">Gold IRA vs Crypto IRA</h3>
                            <p className="text-slate-500 text-sm">Which alternative asset is right for your retirement?</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-slate-100 border-t border-slate-200">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold text-[#000080] mb-4">
                            Ready to Open a Bitcoin IRA?
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            Compare the best providers and start investing tax-advantaged today.
                        </p>
                        <Button variant="gold" size="xl" asChild>
                            <Link href="/best-crypto-ira-companies">
                                Compare Bitcoin IRA Providers
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
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
                        "headline": "What is a Bitcoin IRA? Complete Guide to Bitcoin Retirement Accounts",
                        "description": "Learn what a Bitcoin IRA is, how it works, tax benefits, risks, and whether it's right for your retirement.",
                        "author": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement"
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
                                "name": "Is a Bitcoin IRA a good idea?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "It can be for long-term investors who believe in Bitcoin and want tax advantages. The Roth IRA option is especially attractive—potentially tax-free gains forever."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the minimum for a Bitcoin IRA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Minimums vary by provider. iTrustCapital requires $1,000, Alto IRA has no minimum, and Bitcoin IRA requires $3,000."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are Bitcoin IRA gains taxed?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In a Traditional Bitcoin IRA, gains are tax-deferred until withdrawal. In a Roth Bitcoin IRA, qualified withdrawals are completely tax-free—including all gains."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
