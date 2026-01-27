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
        title: "Silver IRA Guide",
        description: "Our comprehensive guide to silver IRA investing.",
        href: "/guide/silver-ira-guide",
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
        title: "IRA-Approved Silver",
        description: "Which silver products qualify for IRAs.",
        href: "/guide/ira-approved-silver",
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
        <main className="min-h-screen bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 border border-slate-400/30 rounded-full text-slate-300 font-semibold text-sm mb-6">
                            <Coins className="h-4 w-4" />
                            SILVER IRA RESOURCE CENTER
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Silver IRA Hub
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Your complete resource for Silver IRA investing. Compare companies, understand IRS rules, learn about approved coins, and start protecting your retirement with physical silver.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/quiz">
                                    Find Your Best Silver IRA Company <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                <Link href="/silver-ira/best-company">
                                    See Our #1 Pick
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Silver Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Consider Silver for Your IRA?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Silver offers unique advantages that make it an attractive addition to any precious metals portfolio.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whySilverReasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                            >
                                <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle2 className="h-5 w-5 text-slate-300" />
                                </div>
                                <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                                <p className="text-sm text-slate-400">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Silver IRA Pages Grid */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Explore Silver IRA Topics</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
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
                                        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-slate-500/30 transition-all"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-slate-300" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                                                        {page.title}
                                                    </h3>
                                                    {page.badge && (
                                                        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full">
                                                            {page.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-slate-400 text-sm">
                                                    {page.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-amber-400 transition-colors flex-shrink-0" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-white text-center mb-8">
                            Related Silver Resources
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedResources.map((resource) => (
                                <Link
                                    key={resource.href}
                                    href={resource.href}
                                    className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-slate-500/30 transition-all"
                                >
                                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-400 transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-xs text-slate-400">{resource.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white text-center mb-8">Silver IRA Quick Facts</h2>
                            <div className="grid md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">.999</div>
                                    <div className="text-sm text-slate-400">Minimum Purity Required</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">$2K</div>
                                    <div className="text-sm text-slate-400">Lowest Minimum Investment</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">80:1</div>
                                    <div className="text-sm text-slate-400">Current Gold-Silver Ratio</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">50%+</div>
                                    <div className="text-sm text-slate-400">Industrial Demand Share</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-900">
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

            <Footer />
        </main>
    );
}
