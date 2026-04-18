import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { createPageMetadata } from "@/lib/metadata";
import {
    Coins,
    ArrowRight,
    Building2,
    Scale,
    BookOpen,
    Star,
    RefreshCw,
    Shield,
    Award,
    CheckCircle2,
    TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { AutoRelatedContent } from "@/components/content/RelatedContent";

export const metadata = createPageMetadata({
    title: "Silver IRA Hub: Complete Guide to Silver IRAs (2026)",
    description:
        "Everything you need to know about Silver IRAs. Compare companies, learn rules, understand rollovers, and find IRS-approved silver coins for your retirement.",
    url: "https://www.richdadretirement.com/silver-ira",
    imageAlt: "Silver IRA Hub - Rich Dad Retirement",
});

const silverIraPages = [
    {
        title: "Best Silver IRA Company",
        description: "Our top pick for silver IRA investing with detailed analysis and comparison.",
        href: "/silver-ira/best-company",
        icon: Award,
        badge: "High CPC",
        cpc: "$13",
    },
    {
        title: "Silver IRA Companies",
        description: "Compare top Silver IRA companies including Augusta, Goldco, and Birch Gold.",
        href: "/silver-ira/companies",
        icon: Building2,
        badge: "Popular",
        cpc: "$12",
    },
    {
        title: "Silver IRA Rollover",
        description: "Step-by-step guide to rolling over your 401k or IRA into physical silver.",
        href: "/silver-ira/rollover",
        icon: RefreshCw,
        badge: null,
        cpc: "$12",
    },
    {
        title: "Convert 401k to Silver",
        description: "Complete guide to converting your 401k into a Silver IRA tax-free.",
        href: "/silver-ira/convert-401k-to-silver",
        icon: TrendingUp,
        badge: "Low Competition",
        cpc: "$13",
    },
    {
        title: "Silver IRA Custodian",
        description: "How to choose the right custodian and top custodian recommendations.",
        href: "/silver-ira/custodian",
        icon: Shield,
        badge: null,
        cpc: "$14",
    },
    {
        title: "Silver IRA Rules",
        description: "IRS rules, purity requirements, and approved storage guidelines.",
        href: "/silver-ira/rules",
        icon: Scale,
        badge: null,
        cpc: "$9",
    },
    {
        title: "IRA Approved Silver Coins",
        description: "Complete list of IRS-approved silver coins and bars for your IRA.",
        href: "/silver-ira/approved-coins",
        icon: Coins,
        badge: null,
        cpc: null,
    },
    {
        title: "Silver IRA Reviews",
        description: "Honest reviews and ratings of Silver IRA companies.",
        href: "/silver-ira/reviews",
        icon: Star,
        badge: null,
        cpc: "$10",
    },
    {
        title: "Silver IRA vs Gold IRA",
        description: "Pros and cons of each metal. When to choose silver over gold.",
        href: "/silver-ira/vs-gold-ira",
        icon: Scale,
        badge: null,
        cpc: null,
    },
];

const relatedResources = [
    {
        title: "Silver Retirement Planning",
        description: "IRA transfers, RMDs, and inheritance strategies.",
        href: "/silver-retirement",
    },
    {
        title: "IRA-Approved Silver Coins",
        description: "Complete list of IRS-approved silver coins.",
        href: "/silver-retirement/ira-approved-coins",
    },
    {
        title: "IRA-Approved Silver Bars",
        description: "Approved silver bars for your IRA.",
        href: "/silver-retirement/ira-approved-bars",
    },
    {
        title: "Silver Dealer Reviews",
        description: "Compare APMEX, JM Bullion & top dealers.",
        href: "/silver-dealer-reviews",
    },
    {
        title: "Best Silver IRA Companies",
        description: "Full company comparison and rankings.",
        href: "/best-silver-ira-companies",
    },
    {
        title: "Silver Squeeze Hub",
        description: "Understanding the silver market dynamics.",
        href: "/silver-squeeze",
    },
    {
        title: "Buy & Sell Silver Guide",
        description: "How to buy, sell & stack silver.",
        href: "/buy-sell-silver",
    },
    {
        title: "Silver Coin Values",
        description: "Morgan dollars, junk silver values.",
        href: "/silver-coin-values",
    },
    {
        title: "Silver Stocks Comparison",
        description: "Compare silver mining stocks vs physical silver.",
        href: "/silver-stocks/",
    },
];

const whySilverReasons = [
    {
        title: "30x Rarer Than Gold",
        description: "Silver is consumed in industrial applications while gold is hoarded. This creates natural scarcity.",
    },
    {
        title: "Industrial Demand Surge",
        description: "Solar panels, EVs, and electronics are driving unprecedented silver demand.",
    },
    {
        title: "Undervalued Ratio",
        description: "The gold-to-silver ratio suggests silver is historically cheap compared to gold.",
    },
    {
        title: "Affordable Entry",
        description: "At ~$30/oz vs $2,000+/oz for gold, silver allows gradual wealth building.",
    },
];

export default function SilverIraHubPage() {
    return (
        <main className="min-h-screen bg-[#0C0D18]">
            <SchemaScript schema={articleSchema({ title: "Silver IRA Hub: Complete Guide to Silver IRAs (2026)", description: "Everything you need to know about Silver IRAs. Compare companies, learn rules, understand rollovers, and find IRS-approved silver coins for your retirement.", slug: "/silver-ira" })} />
            <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Silver IRA Hub", url: "/silver-ira" }])} />

            {/* Answer-First GEO Block */}
            <section className="pt-8 pb-4 bg-white">
                <Container>
                    <AnswerFirst
                        answer="A Silver IRA is a self-directed Individual Retirement Account that holds physical silver coins and bars instead of paper assets. It works exactly like a Gold IRA — same tax benefits, same IRS rules, same custodian requirements — but with silver as the primary metal. Silver IRAs are popular because silver has higher industrial demand and greater upside potential than gold, with a lower entry price per ounce."
                        keyFacts={[
                            "Silver must be 99.9% pure (.999 fineness) to qualify for IRA inclusion",
                            "Popular IRA-approved silver: American Silver Eagles, Canadian Maple Leafs, 10 oz bars",
                            "Same contribution limits as Gold IRA: $7,000/year ($8,000 if 50+)",
                            "Silver has dual demand: investment metal + critical industrial component (solar, EVs, electronics)",
                        ]}
                        className="max-w-3xl mx-auto"
                    />
                </Container>
            </section>

            <Navbar />

            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-[#0C0D18] relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(220,38,38,0.1)] border border-[#B22234]/30 rounded-full text-[#D4A94E] font-semibold text-sm mb-6">
                            <Coins className="h-4 w-4" />
                            SILVER IRA RESOURCE CENTER
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#F6F4EF] mb-6">
                            Silver IRA Hub
                        </h1>
                        <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto mb-8">
                            Your complete resource for Silver IRA investing. Compare companies, understand IRS rules, learn about approved coins, and start protecting your retirement with physical silver.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#DC2626] hover:bg-[#991B1B] text-white" size="lg" asChild>
                                <Link href="/quiz">
                                    Find Your Best Silver IRA Company <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-[#3F4460] text-[#D0CCC4] hover:bg-[#1E2134]" asChild>
                                <Link href="/silver-ira/best-company">
                                    See Our #1 Pick
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Silver Section */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#F6F4EF] mb-4">Why Consider Silver for Your IRA?</h2>
                        <p className="text-[#D0CCC4] max-w-2xl mx-auto">
                            Silver offers unique advantages that make it an attractive addition to any precious metals portfolio.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whySilverReasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6"
                            >
                                <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle2 className="h-5 w-5 text-[#D4A94E]" />
                                </div>
                                <h3 className="font-bold text-[#F6F4EF] mb-2">{reason.title}</h3>
                                <p className="text-sm text-[#D0CCC4]">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Silver IRA Pages Grid */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-4">Explore Silver IRA Topics</h2>
                            <p className="text-[#D0CCC4] max-w-2xl mx-auto">
                                Everything you need to make informed decisions about Silver IRA investing.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {silverIraPages.map((page) => {
                                const Icon = page.icon;
                                return (
                                    <Link
                                        key={page.href}
                                        href={page.href}
                                        className="group bg-[#161828] border border-[#2A2D42] rounded-xl p-6 hover:bg-[#121423] hover:border-[#3F4460] transition-all"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[rgba(197,149,46,0.08)] rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-[#F6F4EF]" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-[#D4A94E] transition-colors">
                                                        {page.title}
                                                    </h3>
                                                    {page.badge && (
                                                        <span className="px-2 py-0.5 bg-[rgba(220,38,38,0.1)] text-[#D4A94E] text-xs font-semibold rounded-full">
                                                            {page.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[#D0CCC4] text-sm">
                                                    {page.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-[#D0CCC4] group-hover:text-[#D4A94E] transition-colors flex-shrink-0" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-8">
                            Related Silver Resources
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedResources.map((resource) => (
                                <Link
                                    key={resource.href}
                                    href={resource.href}
                                    className="group bg-[#0C0D18] border border-[#2A2D42] rounded-lg p-4 hover:bg-[#1E2134] hover:border-[#3F4460] transition-all"
                                >
                                    <h3 className="font-bold text-[#F6F4EF] text-sm mb-1 group-hover:text-[#D4A94E] transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-xs text-[#D0CCC4]">{resource.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#161828] rounded-2xl p-8 border border-[#2A2D42] shadow-sm">
                            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-8">Silver IRA Quick Facts</h2>
                            <div className="grid md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-[#D4A94E] mb-2">.999</div>
                                    <div className="text-sm text-[#D0CCC4]">Minimum Purity Required</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#D4A94E] mb-2">$2K</div>
                                    <div className="text-sm text-[#D0CCC4]">Lowest Minimum Investment</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#D4A94E] mb-2">80:1</div>
                                    <div className="text-sm text-[#D0CCC4]">Current Gold-Silver Ratio</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#D4A94E] mb-2">50%+</div>
                                    <div className="text-sm text-[#D0CCC4]">Industrial Demand Share</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Ready to Add Silver to Your Retirement?"
                        subheadline="Augusta Precious Metals offers transparent silver pricing and expert guidance. Get a free consultation to learn about silver IRA investing."
                        trackSource="silver-ira-hub"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <section className="py-12 bg-[#0C0D18]">
                <Container>
                    <AutoRelatedContent currentUrl="/silver-ira" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
