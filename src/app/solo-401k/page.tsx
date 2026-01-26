import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    Briefcase,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    DollarSign,
    TrendingUp,
    Calculator,
    Building2,
    PiggyBank,
    Users,
    Shield,
    Clock
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Solo 401k Guide 2026: Best Plan for Self-Employed",
    description: "Complete guide to Solo 401k plans for self-employed individuals. Learn contribution limits, tax benefits, and why it beats SEP IRA. Compare top providers.",
    keywords: "solo 401k, individual 401k, self employed 401k, solo 401k contribution limits, one participant 401k",
    openGraph: {
        title: "Solo 401k Guide 2026: Best Retirement Plan for Self-Employed",
        description: "Maximize your self-employed retirement savings with a Solo 401k. Higher limits than SEP IRA, Roth option, and loan access.",
        type: "article",
    },
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Solo 401k Guide 2026: Best Retirement Plan for Self-Employed",
    "description": "Complete guide to Solo 401k retirement plans for self-employed individuals and small business owners.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is a Solo 401k?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Solo 401k (also called Individual 401k or Self-Employed 401k) is a retirement plan designed for self-employed individuals with no full-time employees other than a spouse. It offers higher contribution limits than SEP IRAs and includes features like Roth contributions and participant loans."
            }
        },
        {
            "@type": "Question",
            "name": "What is the Solo 401k contribution limit for 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For 2026, the total Solo 401k contribution limit is $70,000 ($77,500 if 50 or older). This includes up to $23,500 as employee deferrals plus up to 25% of net self-employment income as employer contributions."
            }
        },
        {
            "@type": "Question",
            "name": "Who qualifies for a Solo 401k?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Self-employed individuals with no full-time employees (other than a spouse) qualify for a Solo 401k. This includes freelancers, consultants, sole proprietors, single-member LLCs, and partnerships with no employees."
            }
        }
    ]
};

export default function Solo401kPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <main className="min-h-screen bg-slate-900">
                {/* Hero Section */}
                <section className="relative py-16 lg:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                                <Briefcase className="w-4 h-4 text-purple-400" />
                                <span className="text-purple-400 text-sm font-medium">Self-Employed Retirement</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Solo 401k Guide:{" "}
                                <span className="text-purple-400">Built for People Who Work for Themselves</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                                You work for yourself—whether as a contractor, consultant, or small business owner. You don&apos;t have an employer matching your contributions. A Solo 401k lets you put away up to <strong className="text-white">$70,000 a year</strong> ($77,500 if you&apos;re 50+). That&apos;s more than any IRA, and you can even borrow from it if you need to.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "solo401k-hero", "rocketdollar")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Open Solo 401k
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="#contribution-limits">
                                        See Contribution Limits
                                    </Link>
                                </Button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { value: "$70,000", label: "2026 Limit" },
                                    { value: "$77,500", label: "If 50+ (Catch-up)" },
                                    { value: "Roth", label: "Option Available" },
                                    { value: "Loans", label: "Allowed" },
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                                        <div className="text-sm text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* What is Solo 401k Section */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                What is a Solo 401k?
                            </h2>

                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    A <strong className="text-white">Solo 401k</strong> is a retirement plan for self-employed people with no employees (except maybe your spouse). It goes by other names—Individual 401k, Self-Employed 401k—but it&apos;s all the same thing.
                                </p>

                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    Here&apos;s why the contribution limits are so high: you get to contribute as both the &quot;employer&quot; AND the &quot;employee&quot; of your own business. A regular IRA caps you at $7,000 a year. A Solo 401k lets you put away up to $70,000. If you&apos;ve been working for yourself for years and feel behind on retirement savings, this is how you catch up.
                                </p>
                            </div>

                            {/* Who Qualifies */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Who Qualifies for a Solo 401k?</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" /> You Qualify If You Are:
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Freelancer or consultant",
                                                "Sole proprietor",
                                                "Single-member LLC owner",
                                                "Independent contractor",
                                                "Business with only spouse as employee",
                                                "Side hustler with self-employment income"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5" /> You Don&apos;t Qualify If You Have:
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Full-time employees (other than spouse)",
                                                "Part-time employees working 1,000+ hours/year",
                                                "No self-employment income"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                                                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Contribution Limits */}
                <section id="contribution-limits" className="py-16 bg-slate-900">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                                Solo 401k Contribution Limits (2026)
                            </h2>
                            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                                The Solo 401k has the highest contribution limits of any self-employed retirement plan.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Under 50 */}
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-white mb-6 text-center">Under Age 50</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                                            <span className="text-slate-400">Employee Deferral</span>
                                            <span className="text-white font-bold">$23,500</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                                            <span className="text-slate-400">Employer Contribution</span>
                                            <span className="text-white font-bold">Up to 25%*</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 bg-purple-500/10 rounded-lg px-3">
                                            <span className="text-purple-400 font-semibold">Total Maximum</span>
                                            <span className="text-purple-400 font-bold text-xl">$70,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 50 and Over */}
                                <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-white mb-6 text-center">Age 50 or Older</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                                            <span className="text-slate-400">Employee Deferral</span>
                                            <span className="text-white font-bold">$23,500</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                                            <span className="text-slate-400">Catch-Up Contribution</span>
                                            <span className="text-white font-bold">$7,500</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                                            <span className="text-slate-400">Employer Contribution</span>
                                            <span className="text-white font-bold">Up to 25%*</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 bg-purple-500/10 rounded-lg px-3">
                                            <span className="text-purple-400 font-semibold">Total Maximum</span>
                                            <span className="text-purple-400 font-bold text-xl">$77,500</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm text-center">
                                *25% of net self-employment income (20% of net profit after self-employment tax deduction for sole proprietors/LLCs)
                            </p>

                            <div className="mt-8 text-center">
                                <Button variant="outline" asChild>
                                    <Link href="/learn/solo-401k-contribution-limits">
                                        View Detailed Contribution Rules
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Solo 401k vs SEP IRA */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            Solo 401k vs SEP IRA
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            The Solo 401k offers significant advantages over a SEP IRA for most self-employed individuals.
                        </p>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                                <table className="w-full min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-white font-semibold">Feature</th>
                                            <th className="text-center p-4 text-purple-400 font-semibold bg-purple-500/5">Solo 401k</th>
                                            <th className="text-center p-4 text-white font-semibold">SEP IRA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "2026 Max Contribution", solo: "$70,000", sep: "$70,000" },
                                            { feature: "Employee Deferrals", solo: "Yes ($23,500)", sep: "No" },
                                            { feature: "Catch-Up (50+)", solo: "Yes ($7,500)", sep: "No" },
                                            { feature: "Roth Option", solo: "Yes", sep: "No" },
                                            { feature: "Participant Loans", solo: "Yes (up to $50k)", sep: "No" },
                                            { feature: "Contribute More at Lower Income", solo: "Yes", sep: "No" },
                                            { feature: "Spouse Can Participate", solo: "Yes", sep: "Yes" },
                                            { feature: "Complexity", solo: "Moderate", sep: "Simple" },
                                        ].map((row, index) => (
                                            <tr key={index} className="border-b border-white/5">
                                                <td className="p-4 text-white">{row.feature}</td>
                                                <td className="p-4 text-center text-slate-300 bg-purple-500/5">{row.solo}</td>
                                                <td className="p-4 text-center text-slate-400">{row.sep}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Button variant="outline" asChild>
                                <Link href="/compare/solo-401k-vs-sep-ira">
                                    Full Solo 401k vs SEP IRA Comparison
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* Key Benefits */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Solo 401k Benefits
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: DollarSign,
                                    title: "High Contribution Limits",
                                    description: "Contribute up to $70,000 (or $77,500 if 50+) annually—more than any other self-employed retirement plan."
                                },
                                {
                                    icon: PiggyBank,
                                    title: "Roth Option Available",
                                    description: "Unlike SEP IRAs, Solo 401ks offer Roth contributions for tax-free growth and withdrawals."
                                },
                                {
                                    icon: Calculator,
                                    title: "Borrow From Your Plan",
                                    description: "Take loans up to $50,000 or 50% of your balance—a feature not available with SEP IRAs."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Tax Deduction Now",
                                    description: "Traditional contributions reduce your taxable income dollar-for-dollar in the year contributed."
                                },
                                {
                                    icon: Building2,
                                    title: "Alternative Investments",
                                    description: "With a self-directed Solo 401k, invest in real estate, crypto, private equity, and more."
                                },
                                {
                                    icon: Users,
                                    title: "Include Your Spouse",
                                    description: "If your spouse works in the business, they can also participate and contribute."
                                }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <benefit.icon className="w-8 h-8 text-purple-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Top Providers */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            Best Solo 401k Providers (2026)
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Choose a provider based on your needs: simple investing, checkbook control, or alternative investments.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    name: "Rocket Dollar",
                                    type: "Self-Directed",
                                    description: "Best for alternative investments with checkbook control",
                                    fee: "$15-30/mo",
                                    best: "Real estate, crypto, private equity",
                                    link: AFFILIATE_LINKS.rocketDollar,
                                    featured: true
                                },
                                {
                                    name: "Fidelity",
                                    type: "Traditional",
                                    description: "Free Solo 401k with traditional investment options",
                                    fee: "$0",
                                    best: "Stocks, bonds, mutual funds",
                                    link: "https://www.fidelity.com/retirement-ira/small-business/self-employed-401k/overview",
                                    featured: false
                                },
                                {
                                    name: "Vanguard",
                                    type: "Traditional",
                                    description: "Low-cost index funds with Solo 401k option",
                                    fee: "$20/year per fund",
                                    best: "Index fund investors",
                                    link: "https://investor.vanguard.com/accounts-plans/small-business-retirement-plans/individual-solo-401k",
                                    featured: false
                                }
                            ].map((provider, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 ${provider.featured ? 'border-purple-500/30' : 'border-white/10'
                                        }`}
                                >
                                    {provider.featured && (
                                        <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">
                                            Best for Alt Investments
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-white mb-1">{provider.name}</h3>
                                    <p className="text-slate-500 text-sm mb-3">{provider.type}</p>
                                    <p className="text-slate-400 text-sm mb-4">{provider.description}</p>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Fees:</span>
                                            <span className="text-white">{provider.fee}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Best For:</span>
                                            <span className="text-white text-right">{provider.best}</span>
                                        </div>
                                    </div>

                                    <Button
                                        variant={provider.featured ? "gold" : "outline"}
                                        className="w-full"
                                        asChild
                                    >
                                        <a
                                            href={provider.featured ? getTrackedLink(provider.link, "solo401k-providers", "rocketdollar") : provider.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Learn More
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Button variant="outline" asChild>
                                <Link href="/learn/solo-401k-providers">
                                    Compare All Solo 401k Providers
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Solo 401k FAQ
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-6">
                            {[
                                {
                                    question: "What is a Solo 401k?",
                                    answer: "A Solo 401k (also called Individual 401k or Self-Employed 401k) is a retirement plan for self-employed individuals with no full-time employees other than a spouse. It offers high contribution limits, Roth options, and loan access."
                                },
                                {
                                    question: "What is the Solo 401k contribution limit for 2026?",
                                    answer: "For 2026, you can contribute up to $70,000 total ($77,500 if 50 or older). This includes $23,500 in employee deferrals plus employer contributions of up to 25% of net self-employment income."
                                },
                                {
                                    question: "Can I have a Solo 401k and a regular 401k?",
                                    answer: "Yes, but the $23,500 employee deferral limit is shared across all 401k plans you participate in. So if you max out a W-2 employer's 401k, you can only make employer contributions to your Solo 401k."
                                },
                                {
                                    question: "Is a Solo 401k better than a SEP IRA?",
                                    answer: "For most self-employed individuals, yes. Solo 401ks offer higher effective contribution limits at lower income levels, Roth options, and the ability to borrow from the plan—features SEP IRAs lack."
                                },
                                {
                                    question: "Can I invest in real estate with a Solo 401k?",
                                    answer: "Yes, with a self-directed Solo 401k from providers like Rocket Dollar. You can invest in rental properties, land, REITs, and other real estate while enjoying tax-advantaged growth."
                                },
                                {
                                    question: "When is the deadline to set up a Solo 401k?",
                                    answer: "You must establish the plan by December 31st of the tax year you want to make contributions for. However, you can make contributions until your tax filing deadline (including extensions)."
                                },
                                {
                                    question: "Can my spouse participate in my Solo 401k?",
                                    answer: "Yes, if your spouse earns income from your business, they can participate in the Solo 401k and make their own contributions, potentially doubling your household's retirement savings."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                    <p className="text-slate-400">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-br from-purple-500/10 via-slate-800 to-slate-900">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Working for Yourself Shouldn&apos;t Mean Falling Behind
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                You took the risk of going independent. A Solo 401k lets you save for retirement like the big companies do—sometimes even better. If you&apos;ve got self-employment income, this is one of the best tax breaks available.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "solo401k-bottom-cta", "rocketdollar")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Open Solo 401k
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/compare/solo-401k-vs-sep-ira">
                                        Compare to SEP IRA
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Related Content */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                            Related Resources
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {[
                                { href: "/learn/solo-401k-contribution-limits", title: "Contribution Limits", desc: "2026 limits explained" },
                                { href: "/compare/solo-401k-vs-sep-ira", title: "Solo 401k vs SEP IRA", desc: "Which is better?" },
                                { href: "/learn/solo-401k-providers", title: "Best Providers", desc: "Compare options" },
                                { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "Alternative option" },
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group"
                                >
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                                        {link.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{link.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}
