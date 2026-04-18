import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    Home,
    ArrowRight,
    CheckCircle2,
    Star,
    Building2,
    Shield,
    DollarSign,
    Users,
    Clock
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { SidebarAuditWidget } from "@/components/widgets/SidebarAuditWidget";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Best Real Estate IRA Custodians 2026: Top Providers",
    description: "Compare the best self-directed IRA custodians for real estate investing. Fees, features, and reviews of Rocket Dollar, Equity Trust, Entrust, and more.",
    keywords: "real estate ira custodian, sdira custodian, self directed ira custodian real estate, best sdira for real estate",
    openGraph: {
        title: "Best Real Estate IRA Custodians 2026",
        description: "Compare top self-directed IRA custodians for real estate investing. Detailed comparison of fees, features, and services.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const custodians = [
    {
        name: "Rocket Dollar",
        rating: 4.7,
        description: "Modern SDIRA platform with checkbook control for fast real estate transactions",
        setupFee: "$0",
        monthlyFee: "$15 (Silver) / $30 (Gold)",
        minInvestment: "$0",
        checkbookControl: true,
        bestFor: "Active real estate investors who want speed and control",
        pros: ["Checkbook control for quick closings", "Low monthly fees", "Modern online platform", "No transaction fees"],
        cons: ["Less hand-holding than traditional custodians", "Newer company (founded 2018)"],
        link: AFFILIATE_LINKS.rocketDollar,
        featured: true
    },
    {
        name: "Equity Trust",
        rating: 4.5,
        description: "Largest SDIRA custodian with 50+ years of experience and full-service support",
        setupFee: "Varies",
        monthlyFee: "Based on assets",
        minInvestment: "$0",
        checkbookControl: false,
        bestFor: "Investors wanting full-service support and hand-holding",
        pros: ["50+ years experience", "Largest SDIRA custodian", "Extensive educational resources", "Strong customer service"],
        cons: ["Higher fees than some competitors", "Slower transaction processing", "No checkbook control"],
        link: AFFILIATE_LINKS.equityTrust,
        featured: false
    },
    {
        name: "Entrust Group",
        rating: 4.4,
        description: "Real estate-focused custodian since 1982 with deep property investment expertise",
        setupFee: "$50",
        monthlyFee: "Based on assets",
        minInvestment: "$0",
        checkbookControl: false,
        bestFor: "Investors focused primarily on real estate",
        pros: ["40+ years in business", "Strong real estate expertise", "Good educational content", "Multiple office locations"],
        cons: ["Asset-based pricing can get expensive", "No checkbook control option"],
        link: AFFILIATE_LINKS.entrust,
        featured: false
    },
    {
        name: "Directed IRA",
        rating: 4.3,
        description: "Part of Horizon Trust, offering both custodial and checkbook IRA options",
        setupFee: "$395",
        monthlyFee: "$295/year + asset fees",
        minInvestment: "$0",
        checkbookControl: true,
        bestFor: "Investors wanting checkbook control with established company",
        pros: ["Checkbook IRA option", "Established company", "Personalized service"],
        cons: ["Higher setup fees", "Annual fees add up"],
        link: AFFILIATE_LINKS.directedIra,
        featured: false
    }
];

export default function RealEstateIraCustodiansPage() {
    return (
        <main className="min-h-screen bg-[#0C0D18]">
            <SchemaScript schema={articleSchema({ title: "Best Real Estate IRA Custodians 2026: Top Providers", description: "Compare the best self-directed IRA custodians for real estate investing. Fees, features, and reviews of Rocket Dollar, Equity Trust, Entrust, and more.", slug: "/learn/real-estate-ira-custodians" })} />
            <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Learn", url: "/learn" }, { name: "Real Estate IRA Custodians", url: "/learn/real-estate-ira-custodians" }])} />
            {/* Hero Section */}
            <section className="relative py-12 lg:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-[#0C0D18]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

                <Container className="relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6">
                        <Link href="/" className="hover:text-[#F6F4EF] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/real-estate-ira" className="hover:text-[#F6F4EF] transition-colors">Real Estate IRA</Link>
                        <span>/</span>
                        <span className="text-[#F6F4EF]">Best Custodians</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                            <Home className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-sm font-medium">Custodian Comparison</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F6F4EF] mb-6 leading-tight">
                            Best Real Estate IRA Custodians{" "}
                            <span className="text-emerald-400">(2026)</span>
                        </h1>

                        <p className="text-xl text-[#D0CCC4] mb-8 leading-relaxed max-w-3xl">
                            You've spent decades building your 401k or IRA. Now you're thinking about real estate—something you can see, touch, and understand. But your current broker won't let you buy property with retirement funds. You need a self-directed IRA custodian. Here's a no-BS comparison of your best options.
                        </p>
                    </div>
                </Container>
            </section>

            <Container className="py-8">
                <div className="max-w-4xl">
                    <AnswerFirst
                        variant="light"
                        answer="The top self-directed IRA custodians for real estate include Equity Trust ($70B+ in assets under custody), Directed IRA (part of Solera National Bank), and Pacific Premier Trust ($18B AUM). Custodian fees typically range from $75-$400/year depending on account size, plus transaction fees for each property purchase."
                        keyFacts={[
                            "Equity Trust: largest SDIRA custodian with $70B+ in assets",
                            "Annual custodian fees: $75-$400 depending on account size",
                            "Transaction fees: $25-$250 per real estate purchase/sale",
                        ]}
                    />
                </div>
            </Container>

            <div className="py-8 bg-white">
                <Container>
                    <div className="max-w-sm mx-auto lg:mx-0">
                        <SidebarAuditWidget trackSource="learn-real-estate-ira-custodians" />
                    </div>
                </Container>
            </div>

            {/* Quick Comparison Table */}
            <section className="py-12 bg-[#0C0D18]">
                <Container>
                    <h2 className="text-2xl font-bold text-[#F6F4EF] mb-8">Quick Comparison</h2>

                    <div className="overflow-x-auto">
                        <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-2xl overflow-hidden">
                            <table className="w-full min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-[#2A2D42]">
                                        <th className="text-left p-4 text-[#F6F4EF] font-semibold">Custodian</th>
                                        <th className="text-center p-4 text-[#F6F4EF] font-semibold">Rating</th>
                                        <th className="text-center p-4 text-[#F6F4EF] font-semibold">Setup Fee</th>
                                        <th className="text-center p-4 text-[#F6F4EF] font-semibold">Monthly Fee</th>
                                        <th className="text-center p-4 text-[#F6F4EF] font-semibold">Checkbook Control</th>
                                        <th className="text-center p-4 text-[#F6F4EF] font-semibold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {custodians.map((custodian, index) => (
                                        <tr key={index} className={`border-b border-[#2A2D42] ${custodian.featured ? 'bg-emerald-500/5' : ''}`}>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[#F6F4EF] font-semibold">{custodian.name}</span>
                                                    {custodian.featured && (
                                                        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Top Pick</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className="flex items-center justify-center gap-1">
                                                    <Star className="w-4 h-4 text-[#D4A94E] fill-[#D4A94E]" />
                                                    <span className="text-[#F6F4EF]">{custodian.rating}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-center text-[#D0CCC4]">{custodian.setupFee}</td>
                                            <td className="p-4 text-center text-[#D0CCC4]">{custodian.monthlyFee}</td>
                                            <td className="p-4 text-center">
                                                {custodian.checkbookControl ? (
                                                    <CheckCircle2 className="w-5 h-5 text-green-700 mx-auto" />
                                                ) : (
                                                    <span className="text-[#A8A39A]">—</span>
                                                )}
                                            </td>
                                            <td className="p-4 text-center text-[#A8A39A] text-sm">{custodian.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Detailed Reviews */}
            <section className="py-12 bg-[#0C0D18]">
                <Container>
                    <h2 className="text-2xl font-bold text-[#F6F4EF] mb-8">Detailed Custodian Reviews</h2>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {custodians.map((custodian, index) => (
                            <div
                                key={index}
                                className={`bg-[#0C0D18] backdrop-blur-sm border rounded-2xl p-8 ${custodian.featured ? 'border-emerald-500/30' : 'border-[#2A2D42]'
                                    }`}
                            >
                                {custodian.featured && (
                                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
                                        <Star className="w-3 h-3 fill-current" />
                                        Our Top Pick for Real Estate
                                    </div>
                                )}

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#F6F4EF] mb-2">{custodian.name}</h3>
                                        <p className="text-[#A8A39A]">{custodian.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#121423] px-4 py-2 rounded-lg">
                                        <Star className="w-5 h-5 text-[#D4A94E] fill-[#D4A94E]" />
                                        <span className="text-xl font-bold text-[#F6F4EF]">{custodian.rating}/5</span>
                                    </div>
                                </div>

                                {/* Key Details */}
                                <div className="grid sm:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-[#0C0D18] rounded-lg p-3">
                                        <div className="text-xs text-[#A8A39A] mb-1">Setup Fee</div>
                                        <div className="text-[#F6F4EF] font-semibold">{custodian.setupFee}</div>
                                    </div>
                                    <div className="bg-[#0C0D18] rounded-lg p-3">
                                        <div className="text-xs text-[#A8A39A] mb-1">Monthly Fee</div>
                                        <div className="text-[#F6F4EF] font-semibold text-sm">{custodian.monthlyFee}</div>
                                    </div>
                                    <div className="bg-[#0C0D18] rounded-lg p-3">
                                        <div className="text-xs text-[#A8A39A] mb-1">Minimum</div>
                                        <div className="text-[#F6F4EF] font-semibold">{custodian.minInvestment}</div>
                                    </div>
                                    <div className="bg-[#0C0D18] rounded-lg p-3">
                                        <div className="text-xs text-[#A8A39A] mb-1">Checkbook Control</div>
                                        <div className="text-[#F6F4EF] font-semibold">{custodian.checkbookControl ? 'Yes' : 'No'}</div>
                                    </div>
                                </div>

                                {/* Pros and Cons */}
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-green-700 font-semibold mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Pros
                                        </h4>
                                        <ul className="space-y-2">
                                            {custodian.pros.map((pro, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-green-700 flex-shrink-0 mt-0.5" />
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-[#A8A39A] font-semibold mb-3">Cons</h4>
                                        <ul className="space-y-2">
                                            {custodian.cons.map((con, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[#A8A39A] text-sm">
                                                    <span className="text-[#A8A39A]">•</span>
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Button variant={custodian.featured ? "gold" : "outline"} asChild>
                                    <a
                                        href={getTrackedLink(custodian.link, "realestate-custodians-detail", custodian.name.toLowerCase().replace(' ', ''))}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More About {custodian.name}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <InContentCTA trackSource="learn-real-estate-ira-custodians" />

            {/* What to Look For */}
            <section className="py-12 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#F6F4EF] mb-8 text-center">
                            What to Look for in a Custodian (Before You Trust Them with Your Life Savings)
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: DollarSign,
                                    title: "Fee Structure",
                                    description: "Understand all fees: setup, annual, transaction, and asset-based fees. They add up over time."
                                },
                                {
                                    icon: Clock,
                                    title: "Transaction Speed",
                                    description: "Real estate deals move fast. How quickly can the custodian process purchases and fund transactions?"
                                },
                                {
                                    icon: Shield,
                                    title: "Checkbook Control",
                                    description: "With checkbook control, you can write checks directly without waiting for custodian approval."
                                },
                                {
                                    icon: Users,
                                    title: "Customer Support",
                                    description: "Will you have a dedicated rep? How responsive are they? Check reviews for support quality."
                                },
                                {
                                    icon: Building2,
                                    title: "Experience",
                                    description: "How long have they been in business? Do they specialize in real estate or offer it as an afterthought?"
                                },
                                {
                                    icon: Home,
                                    title: "Property Types",
                                    description: "Ensure they allow the specific type of real estate you want to invest in (rentals, land, notes, etc.)."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6">
                                    <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                                    <h3 className="text-lg font-bold text-[#F6F4EF] mb-2">{item.title}</h3>
                                    <p className="text-[#A8A39A] text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6">
                            Ready to Use Your IRA for Real Estate?
                        </h2>
                        <p className="text-lg text-[#D0CCC4] mb-8">
                            You've built your nest egg through years of hard work. A self-directed IRA lets you invest in something real—property that generates rental income and grows in value. No more watching Wall Street play games with your money.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <a
                                    href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "realestate-custodians-cta", "rocketdollar")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Real Estate IRA
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/real-estate-ira">
                                    Back to Real Estate IRA Guide
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <AutoRelatedContent currentUrl="/learn/real-estate-ira-custodians" />

            {/* Related Content */}
            <section className="py-12 bg-[#0C0D18]">
                <Container>
                    <h2 className="text-xl font-bold text-[#F6F4EF] mb-6 text-center">Related Resources</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { href: "/real-estate-ira", title: "Real Estate IRA Guide", desc: "Complete overview" },
                            { href: "/learn/real-estate-ira-rules", title: "RE IRA Rules", desc: "IRS requirements" },
                            { href: "/learn/buy-rental-property-with-ira", title: "Buy Rental Property", desc: "Step-by-step" },
                            { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "SDIRA overview" },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-4 hover:bg-[#1E2134]/10 transition-colors group"
                            >
                                <h3 className="text-[#F6F4EF] font-semibold mb-1 group-hover:text-emerald-400 transition-colors text-sm">
                                    {link.title}
                                </h3>
                                <p className="text-[#A8A39A] text-xs">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
