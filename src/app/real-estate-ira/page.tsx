import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
    Home,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    DollarSign,
    Shield,
    FileText,
    TrendingUp,
    Building2,
    MapPin,
    Key,
    Landmark
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Real Estate IRA Guide 2026: Invest in Property Tax-Free",
    description: "Learn how to invest in real estate through your IRA. Complete guide to buying rental properties, commercial real estate, and land using self-directed IRA funds.",
    keywords: "real estate ira, self directed ira real estate, buy property with ira, rental property ira, real estate ira investing",
    openGraph: {
        title: "Real Estate IRA Guide 2026: Invest in Property Tax-Free",
        description: "Learn how to use your IRA to invest in real estate. Rental properties, commercial buildings, and land - all tax-advantaged.",
        type: "article",
    },
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Real Estate IRA Guide 2026: Invest in Property Tax-Free",
    "description": "Complete guide to investing in real estate through a self-directed IRA, including rules, custodians, and strategies.",
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
            "name": "Can I buy real estate with my IRA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can buy real estate with your IRA using a self-directed IRA (SDIRA). This allows you to invest in rental properties, commercial real estate, raw land, and more while enjoying tax-advantaged growth."
            }
        },
        {
            "@type": "Question",
            "name": "What types of real estate can I buy with an IRA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can invest in residential rental properties, commercial real estate, raw land, REITs, real estate notes, tax liens, and more. The property must be for investment purposes only - you cannot use it personally."
            }
        },
        {
            "@type": "Question",
            "name": "Can I live in a property owned by my IRA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, this is a prohibited transaction. You, your spouse, and other disqualified persons cannot live in, use, or benefit personally from property owned by your IRA."
            }
        }
    ]
};

export default function RealEstateIraPage() {
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

            <Navbar />
            <main className="min-h-screen bg-slate-900">
                {/* Hero Section */}
                <section className="relative py-16 lg:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                                <Home className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-400 text-sm font-medium">Invest in What You Understand</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Real Estate IRA Guide:{" "}
                                <span className="text-emerald-400">Buy Property With Your Retirement</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                                You&apos;ve spent decades watching real estate appreciate while your 401k rides the stock market rollercoaster. A Real Estate IRA lets you invest your retirement in rental properties, commercial buildings, or land—with the same tax advantages as your current accounts. Here&apos;s how it works.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "realestate-hero", "rocketdollar")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Open Real Estate IRA
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="#how-it-works">
                                        Learn How It Works
                                    </Link>
                                </Button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { value: "Tax-Free", label: "Growth (Roth)" },
                                    { value: "$0", label: "Minimum at Some" },
                                    { value: "100%", label: "IRS Legal" },
                                    { value: "Unlimited", label: "Property Types" },
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                                        <div className="text-sm text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* What is Real Estate IRA Section */}
                <section id="how-it-works" className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                What is a Real Estate IRA?
                            </h2>

                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    Here&apos;s the simple version: A Real Estate IRA is a retirement account where you can buy actual property instead of stocks. Same tax benefits as your 401k—but instead of owning shares in some company, your IRA owns a rental house, a commercial building, or a piece of land.
                                </p>

                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    If you&apos;ve spent 30 years understanding real estate in your area—watching what neighborhoods appreciate, knowing what makes a good rental—this lets you put that knowledge to work. The IRA legally owns the property, and all the rent goes back into your retirement account tax-deferred. You need a specialized custodian (not Fidelity or Vanguard), but the tax advantages are the same.
                                </p>
                            </div>

                            {/* How It Works Steps */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold text-white mb-6">How Real Estate IRAs Work</h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            step: "1",
                                            title: "Open a Self-Directed IRA",
                                            description: "Choose a custodian that allows real estate investments. Fund via rollover from existing 401(k)/IRA or annual contributions."
                                        },
                                        {
                                            step: "2",
                                            title: "Find an Investment Property",
                                            description: "Research and identify a property for investment. It must be purely for investment—no personal use allowed."
                                        },
                                        {
                                            step: "3",
                                            title: "Direct Your Custodian to Purchase",
                                            description: "Instruct your SDIRA custodian to purchase the property. The IRA becomes the legal owner, not you personally."
                                        },
                                        {
                                            step: "4",
                                            title: "Manage Through the IRA",
                                            description: "All rental income goes into the IRA. All expenses (repairs, taxes, insurance) are paid from the IRA."
                                        },
                                        {
                                            step: "5",
                                            title: "Enjoy Tax-Advantaged Growth",
                                            description: "Rental income and appreciation grow tax-deferred or tax-free, compounding your retirement wealth."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                                <p className="text-slate-400 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Property Types */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            What Can You Actually Buy?
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            If it&apos;s real estate, you can probably buy it with your IRA. Here&apos;s what most people invest in:
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: Home,
                                    title: "Residential Rentals",
                                    description: "Single-family homes, duplexes, condos, and multi-family properties for rental income.",
                                    allowed: true
                                },
                                {
                                    icon: Building2,
                                    title: "Commercial Real Estate",
                                    description: "Office buildings, retail spaces, warehouses, and industrial properties.",
                                    allowed: true
                                },
                                {
                                    icon: MapPin,
                                    title: "Raw Land",
                                    description: "Undeveloped land for future development or appreciation potential.",
                                    allowed: true
                                },
                                {
                                    icon: Key,
                                    title: "Real Estate Notes",
                                    description: "Mortgages and trust deeds—become the bank and earn interest income.",
                                    allowed: true
                                },
                                {
                                    icon: FileText,
                                    title: "Tax Liens & Deeds",
                                    description: "Purchase tax liens for interest income or tax deeds for property acquisition.",
                                    allowed: true
                                },
                                {
                                    icon: TrendingUp,
                                    title: "REITs & Real Estate Funds",
                                    description: "Private REITs, real estate crowdfunding, and syndications.",
                                    allowed: true
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.icon className="w-8 h-8 text-emerald-400" />
                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Pros and Cons */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Real Estate IRA: Pros and Cons
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Pros */}
                            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6" />
                                    Advantages
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Tax-deferred or tax-free growth on rental income",
                                        "Tax-deferred or tax-free appreciation",
                                        "Diversification beyond stocks and bonds",
                                        "Tangible asset you can see and understand",
                                        "Hedge against inflation (rents rise with prices)",
                                        "Potential for higher returns than traditional investments",
                                        "Control over your investment decisions"
                                    ].map((pro, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300">{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Challenges & Risks
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Complex IRS rules and prohibited transactions",
                                        "Cannot use property personally (even for one night)",
                                        "Must have cash in IRA for all expenses",
                                        "UBIT tax on leveraged property income",
                                        "Illiquid—can't quickly sell if you need cash",
                                        "Higher custodian fees than traditional IRAs",
                                        "Requires real estate knowledge and due diligence"
                                    ].map((con, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300">{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Top Custodians */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            Best Real Estate IRA Custodians (2026)
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            You need a self-directed IRA custodian that specializes in real estate investments.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    name: "Rocket Dollar",
                                    description: "Checkbook control for quick transactions",
                                    fee: "$15-30/mo",
                                    best: "Active investors",
                                    link: AFFILIATE_LINKS.rocketDollar,
                                    featured: true
                                },
                                {
                                    name: "Equity Trust",
                                    description: "Largest SDIRA custodian, 50+ years experience",
                                    fee: "Varies by asset",
                                    best: "Full-service support",
                                    link: AFFILIATE_LINKS.equityTrust,
                                    featured: false
                                },
                                {
                                    name: "Entrust Group",
                                    description: "Strong real estate expertise since 1982",
                                    fee: "Varies by asset",
                                    best: "Real estate focus",
                                    link: AFFILIATE_LINKS.entrust,
                                    featured: false
                                }
                            ].map((custodian, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 ${custodian.featured ? 'border-emerald-500/30' : 'border-white/10'
                                        }`}
                                >
                                    {custodian.featured && (
                                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-3">
                                            Recommended
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-white mb-2">{custodian.name}</h3>
                                    <p className="text-slate-400 text-sm mb-4">{custodian.description}</p>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Fees:</span>
                                            <span className="text-white">{custodian.fee}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Best For:</span>
                                            <span className="text-white">{custodian.best}</span>
                                        </div>
                                    </div>

                                    <Button
                                        variant={custodian.featured ? "gold" : "outline"}
                                        className="w-full"
                                        asChild
                                    >
                                        <a
                                            href={getTrackedLink(custodian.link, "realestate-custodians", custodian.name.toLowerCase().replace(' ', ''))}
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
                                <Link href="/learn/real-estate-ira-custodians">
                                    Compare All Custodians
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* Key Rules */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                                Critical Real Estate IRA Rules
                            </h2>

                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Prohibited Transactions (AVOID THESE!)
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Living in the property (even one night)",
                                        "Renting to family members",
                                        "Using the property for vacation",
                                        "Paying yourself for property management",
                                        "Using personal funds for repairs",
                                        "Personally guaranteeing an IRA mortgage"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                                            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6" />
                                    What You CAN Do
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Rent to unrelated third parties",
                                        "Hire unrelated property managers",
                                        "Use IRA funds for all expenses",
                                        "Sell property to third parties",
                                        "Take non-recourse loans",
                                        "Hold multiple properties"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Button variant="outline" asChild>
                                    <Link href="/learn/real-estate-ira-rules">
                                        Read Complete Rules Guide
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Real Estate IRA FAQ
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-6">
                            {[
                                {
                                    question: "Can I buy real estate with my IRA?",
                                    answer: "Yes, you can buy real estate with your IRA using a self-directed IRA (SDIRA). This allows you to invest in rental properties, commercial real estate, raw land, and more while enjoying tax-advantaged growth. You'll need a custodian that allows real estate investments."
                                },
                                {
                                    question: "Can I live in a property owned by my IRA?",
                                    answer: "No, this is strictly prohibited by the IRS. You, your spouse, parents, children, and other 'disqualified persons' cannot live in, use, or personally benefit from property owned by your IRA. Violating this rule can disqualify your entire IRA."
                                },
                                {
                                    question: "Can I manage the property myself?",
                                    answer: "This is a gray area. While you can make investment decisions, you cannot receive compensation for property management services. Most experts recommend hiring an unrelated third-party property manager to avoid prohibited transaction issues."
                                },
                                {
                                    question: "What if I need to make repairs?",
                                    answer: "All repairs must be paid for with IRA funds, not personal money. You cannot do the repairs yourself (that's providing services to the IRA). You must hire third-party contractors and pay them from the IRA."
                                },
                                {
                                    question: "Can I get a mortgage in my IRA?",
                                    answer: "Yes, but it must be a 'non-recourse' loan where only the property secures the debt—you cannot personally guarantee it. Also, income from leveraged property may be subject to UBIT (Unrelated Business Income Tax)."
                                },
                                {
                                    question: "What happens when I sell the property?",
                                    answer: "The sale proceeds return to your IRA tax-free (at sale). With a Traditional IRA, you'll pay taxes on withdrawals in retirement. With a Roth IRA, qualified withdrawals are completely tax-free."
                                },
                                {
                                    question: "How much money do I need to start?",
                                    answer: "Some custodians have no minimum, but you'll need enough to cover the property purchase, closing costs, and reserves for expenses. Many investors start with $50,000-$100,000 in their SDIRA for real estate."
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
                <section className="py-16 bg-gradient-to-br from-emerald-500/10 via-slate-800 to-slate-900">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Know Real Estate Better Than Stocks?
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                If you&apos;ve spent your career understanding what makes property valuable, you don&apos;t have to hand your retirement over to Wall Street. A Real Estate IRA lets you invest in what you actually know.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "realestate-bottom-cta", "rocketdollar")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Open Real Estate IRA
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/learn/buy-rental-property-with-ira">
                                        How to Buy Rental Property
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
                                { href: "/learn/real-estate-ira-custodians", title: "Best RE IRA Custodians", desc: "Compare top providers" },
                                { href: "/learn/real-estate-ira-rules", title: "Real Estate IRA Rules", desc: "IRS requirements" },
                                { href: "/learn/buy-rental-property-with-ira", title: "Buy Rental Property", desc: "Step-by-step guide" },
                                { href: "/self-directed-ira", title: "Self-Directed IRA Guide", desc: "Full SDIRA overview" },
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group"
                                >
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                                        {link.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{link.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Augusta CTA */}
                <section className="py-16 bg-slate-900">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            headline="Diversify Beyond Real Estate with Gold"
                            subheadline="Many investors combine real estate IRAs with precious metals for true diversification. Gold provides liquidity when property markets are slow."
                            trackSource="real-estate-ira"
                        />
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
