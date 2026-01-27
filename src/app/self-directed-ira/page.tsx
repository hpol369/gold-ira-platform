import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
    ArrowRight,
    Shield,
    TrendingUp,
    Building2,
    Coins,
    Home,
    Briefcase,
    CheckCircle2,
    AlertTriangle,
    Star,
    Lock,
    Users
} from "lucide-react";

export const metadata: Metadata = {
    title: "Self-Directed IRA Guide 2026: Real Estate, Crypto & More",
    description: "Self-Directed IRA guide for 2026. Invest in real estate, crypto, gold, and private equity. Compare top SDIRA custodians and fees.",
    keywords: "self directed ira, sdira, self directed ira custodian, self directed roth ira, checkbook ira, ira llc",
    openGraph: {
        title: "Self-Directed IRA Guide 2026: Alternative Investments for Retirement",
        description: "Take control of your retirement. Learn how to invest in real estate, crypto, gold, and more through a Self-Directed IRA.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const investmentTypes = [
    {
        icon: Coins,
        title: "Precious Metals",
        description: "Gold, silver, platinum, and palladium coins and bars",
        link: "/best-gold-ira-companies",
        color: "amber",
    },
    {
        icon: TrendingUp,
        title: "Cryptocurrency",
        description: "Bitcoin, Ethereum, and 200+ other digital assets",
        link: "/crypto-ira",
        color: "blue",
    },
    {
        icon: Home,
        title: "Real Estate",
        description: "Rental properties, land, commercial real estate",
        link: "#",
        color: "green",
    },
    {
        icon: Briefcase,
        title: "Private Equity",
        description: "Startups, private companies, LLCs",
        link: "#",
        color: "purple",
    },
];

const topCustodians = [
    {
        name: "Rocket Dollar",
        type: "Checkbook Control",
        fee: "$15/month",
        minimum: "$0",
        bestFor: "Real estate & crypto investors",
        rating: 4.6,
        link: "/reviews/rocket-dollar",
    },
    {
        name: "Equity Trust",
        type: "Full-Service Custodian",
        fee: "Varies by asset",
        minimum: "$0",
        bestFor: "Diverse alternative investments",
        rating: 4.4,
        link: "#",
    },
    {
        name: "Entrust",
        type: "Full-Service Custodian",
        fee: "Transaction-based",
        minimum: "$0",
        bestFor: "Real estate investors",
        rating: 4.3,
        link: "#",
    },
];

export default function SelfDirectedIRAPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-slate-900 to-blue-600/10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Lock className="w-4 h-4" />
                            <span>Your Money, Your Choices</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Self-Directed IRA Guide 2026
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            You spent decades building your 401k. A Self-Directed IRA gives you the freedom to invest it how you want—real estate, gold, crypto, or whatever makes sense for your situation. No more being stuck with whatever funds your employer picked.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="xl" asChild>
                                <Link href="/reviews/rocket-dollar">
                                    See Top SDIRA Custodian
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                                <Link href="/learn/checkbook-ira">
                                    Learn About Checkbook Control
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* What is a Self-Directed IRA */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">What is a Self-Directed IRA?</h2>

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white">
                            <p>
                                Here&apos;s the deal: a regular IRA from Fidelity or Vanguard only lets you invest in stocks, bonds, and mutual funds. That&apos;s it. A <strong>Self-Directed IRA (SDIRA)</strong> removes those handcuffs. After 30+ years of building your nest egg, shouldn&apos;t you get to decide where it goes?
                            </p>
                            <p>
                                With a Self-Directed IRA, you can invest in what you actually understand:
                            </p>
                            <ul>
                                <li>Real estate (rental properties, land, commercial buildings)</li>
                                <li>Precious metals (gold, silver, platinum)</li>
                                <li>Cryptocurrency (Bitcoin, Ethereum, and more)</li>
                                <li>Private equity and startups</li>
                                <li>Tax liens and deeds</li>
                                <li>Promissory notes and private lending</li>
                                <li>LLCs and private businesses</li>
                            </ul>
                            <p>
                                All gains grow tax-deferred (Traditional) or tax-free (Roth), just like your current retirement accounts. The only difference is you&apos;re no longer stuck with whatever options your employer chose. If you spent 30 years learning about real estate or understand why gold holds value—you can actually use that knowledge.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Investment Types */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-4 text-center">What Can You Actually Invest In?</h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        You worked 30 years in your field. Maybe you understand real estate better than any stock chart. Maybe you&apos;ve watched gold prices your whole life. With an SDIRA, you can invest in what you know:
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {investmentTypes.map((type) => (
                            <Link
                                key={type.title}
                                href={type.link}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group"
                            >
                                <div className={`w-12 h-12 bg-${type.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                                    <type.icon className={`w-6 h-6 text-${type.color}-400`} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {type.title}
                                </h3>
                                <p className="text-slate-400 text-sm">{type.description}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            Note: Collectibles, life insurance, and S-corporations are prohibited IRA investments per IRS rules.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Checkbook Control */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-6">
                                    What is Checkbook Control?
                                </h2>
                                <div className="prose prose-lg text-slate-300">
                                    <p>
                                        <strong>Checkbook control</strong> (also called a Checkbook IRA or IRA LLC) gives you direct access to your IRA funds without waiting for custodian approval for every transaction.
                                    </p>
                                    <p>
                                        Here's how it works: Your Self-Directed IRA owns an LLC, and you're the manager of that LLC. You have a checkbook (or debit card) for the LLC's bank account, allowing you to:
                                    </p>
                                    <ul>
                                        <li>Write checks instantly for investments</li>
                                        <li>Close deals without custodian delays</li>
                                        <li>Reduce transaction fees</li>
                                        <li>Maintain full control while staying IRS-compliant</li>
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                                        <Link href="/learn/checkbook-ira">
                                            Learn More About Checkbook IRAs
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">Checkbook Control vs Traditional SDIRA</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-medium">Faster Transactions</p>
                                            <p className="text-slate-400 text-sm">Close real estate deals in days, not weeks</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-medium">Lower Fees</p>
                                            <p className="text-slate-400 text-sm">No per-transaction custodian fees</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-medium">Full Control</p>
                                            <p className="text-slate-400 text-sm">You manage the LLC and make decisions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-medium">More Responsibility</p>
                                            <p className="text-slate-400 text-sm">You must ensure IRS compliance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Top Custodians */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">Best Self-Directed IRA Custodians</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Compare the top SDIRA providers based on fees, features, and investment options.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {topCustodians.map((custodian, index) => (
                            <div
                                key={custodian.name}
                                className={`bg-white/5 backdrop-blur-sm rounded-xl border ${index === 0 ? 'border-purple-500/50' : 'border-white/10'} overflow-hidden`}
                            >
                                {index === 0 && (
                                    <div className="bg-purple-500 text-white text-center py-1 text-xs font-bold uppercase tracking-wide">
                                        Top Pick
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white">{custodian.name}</h3>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-white font-medium">{custodian.rating}</span>
                                        </div>
                                    </div>

                                    <div className="inline-block bg-purple-500/20 text-purple-400 text-xs font-medium px-2 py-1 rounded mb-4">
                                        {custodian.type}
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Fee</span>
                                            <span className="text-white font-medium">{custodian.fee}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Minimum</span>
                                            <span className="text-white font-medium">{custodian.minimum}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Best For</span>
                                            <span className="text-white font-medium text-right text-xs">{custodian.bestFor}</span>
                                        </div>
                                    </div>

                                    <Button
                                        variant={index === 0 ? "gold" : "outline"}
                                        className={`w-full ${index !== 0 ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
                                        asChild
                                    >
                                        <Link href={custodian.link}>
                                            {custodian.link !== "#" ? "Read Review" : "Coming Soon"}
                                            {custodian.link !== "#" && <ArrowRight className="ml-2 w-4 h-4" />}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Prohibited Transactions */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8">
                            <div className="flex gap-4">
                                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Prohibited Transactions</h3>
                                    <p className="text-slate-300 mb-4">
                                        The IRS has strict rules about Self-Directed IRAs. Violating these rules can disqualify your entire IRA and trigger massive tax penalties.
                                    </p>
                                    <ul className="space-y-2 text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400">✗</span>
                                            <span><strong>No self-dealing:</strong> You can't buy property from yourself or sell to yourself</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400">✗</span>
                                            <span><strong>No personal use:</strong> You can't live in or vacation at property owned by your IRA</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400">✗</span>
                                            <span><strong>No disqualified persons:</strong> Can't transact with family members (spouse, parents, children, etc.)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400">✗</span>
                                            <span><strong>No sweat equity:</strong> You can't personally perform work on IRA-owned property</span>
                                        </li>
                                    </ul>
                                    <p className="text-slate-400 text-sm mt-4">
                                        Always consult a tax professional before making SDIRA investments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "What is the difference between a Self-Directed IRA and a regular IRA?",
                                    a: "A regular IRA (from Fidelity, Vanguard, etc.) limits you to stocks, bonds, and mutual funds. A Self-Directed IRA allows you to invest in alternative assets like real estate, cryptocurrency, precious metals, private equity, and more. The tax benefits are the same."
                                },
                                {
                                    q: "Can I roll over my 401(k) into a Self-Directed IRA?",
                                    a: "Yes, you can rollover funds from a 401(k), Traditional IRA, Roth IRA, 403(b), TSP, or other qualified retirement accounts into a Self-Directed IRA. The process is similar to any IRA rollover."
                                },
                                {
                                    q: "What is the best Self-Directed IRA custodian?",
                                    a: "It depends on your needs. Rocket Dollar is best for checkbook control and real estate. Equity Trust is a solid full-service option. For crypto specifically, iTrustCapital or Alto IRA are better choices."
                                },
                                {
                                    q: "How much does a Self-Directed IRA cost?",
                                    a: "Fees vary by custodian. Rocket Dollar charges $15/month flat fee. Traditional custodians like Equity Trust charge per-transaction fees that can add up. Checkbook control SDIRAs typically have lower ongoing costs for active investors."
                                },
                                {
                                    q: "Can I buy a house with my Self-Directed IRA?",
                                    a: "Yes, buying real estate is one of the most popular SDIRA investments. However, you cannot live in or personally use the property. All income and expenses must flow through the IRA, and you cannot perform labor on the property yourself."
                                },
                                {
                                    q: "What happens if I break SDIRA rules?",
                                    a: "Prohibited transactions can cause your entire IRA to be disqualified, meaning the full balance becomes taxable immediately. You may also face a 10% early withdrawal penalty if under 59½. The consequences are severe—always consult a professional."
                                },
                            ].map((faq, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                    <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Resources</h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <Link href="/learn/checkbook-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <Lock className="w-8 h-8 text-purple-400 mb-3" />
                            <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Checkbook IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Take direct control of your IRA investments.</p>
                        </Link>
                        <Link href="/learn/self-directed-roth-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <Shield className="w-8 h-8 text-green-400 mb-3" />
                            <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Self-Directed Roth IRA</h3>
                            <p className="text-slate-400 text-sm">Tax-free growth on alternative investments.</p>
                        </Link>
                        <Link href="/crypto-ira" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                            <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Crypto IRA Guide</h3>
                            <p className="text-slate-400 text-sm">Bitcoin and crypto in your retirement account.</p>
                        </Link>
                        <Link href="/best-gold-ira-companies" className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                            <Coins className="w-8 h-8 text-amber-400 mb-3" />
                            <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Gold IRA Companies</h3>
                            <p className="text-slate-400 text-sm">Precious metals for your retirement.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-br from-purple-900/30 to-slate-900 border-t border-white/10">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">
                            You Built It. You Should Decide Where It Goes.
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            After decades of saving, you&apos;ve earned the right to invest your retirement in what makes sense to you—not just whatever your old employer&apos;s plan offered.
                        </p>
                        <Button variant="gold" size="xl" asChild>
                            <Link href="/reviews/rocket-dollar">
                                Get Started with Rocket Dollar
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <p className="text-slate-500 text-sm mt-4">$15/month flat fee • Checkbook control • No hidden fees</p>
                    </div>
                </Container>
            </section>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Add Gold to Your Self-Directed IRA"
                        subheadline="Self-directed IRAs give you control over your investments. Many investors choose to include precious metals for diversification and protection."
                        trackSource="self-directed-ira"
                    />
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
                        "headline": "Self-Directed IRA Guide 2026: Invest in Real Estate, Crypto & More",
                        "description": "Complete guide to Self-Directed IRAs. Learn how to invest in alternative assets through a tax-advantaged retirement account.",
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
                                "name": "What is the difference between a Self-Directed IRA and a regular IRA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A regular IRA limits you to stocks, bonds, and mutual funds. A Self-Directed IRA allows you to invest in alternative assets like real estate, cryptocurrency, precious metals, and more."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I roll over my 401(k) into a Self-Directed IRA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can rollover funds from a 401(k), Traditional IRA, Roth IRA, 403(b), TSP, or other qualified retirement accounts into a Self-Directed IRA."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I buy a house with my Self-Directed IRA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, buying real estate is one of the most popular SDIRA investments. However, you cannot live in or personally use the property."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
