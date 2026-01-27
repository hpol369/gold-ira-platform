import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { createPageMetadata } from "@/lib/metadata";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
    Coins,
    ArrowRight,
    Factory,
    Scale,
    Shield,
    TrendingUp,
    CheckCircle2,
    BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = createPageMetadata({
    title: "Silver Stocks vs Physical Silver: Investment Guide (2026)",
    description:
        "Compare silver stocks vs physical silver investing. Learn why physical silver offers the purest exposure to silver prices with no counterparty risk.",
    url: "https://www.richdadretirement.com/silver-stocks",
    imageAlt: "Silver Stocks vs Physical Silver - Rich Dad Retirement",
});

const silverStocksPages = [
    {
        title: "Best Silver Stocks vs Physical Silver",
        description: "Deep comparison of silver mining stocks, ETFs, and physical silver. Learn which option offers the best exposure to silver prices.",
        href: "/silver-stocks/best-silver-stocks",
        icon: BarChart3,
        badge: "Popular",
    },
];

const relatedResources = [
    {
        title: "Silver IRA Guide",
        description: "Complete guide to Silver IRA investing.",
        href: "/silver-ira",
    },
    {
        title: "Best Silver IRA Companies",
        description: "Top-rated Silver IRA companies compared.",
        href: "/best-silver-ira-companies",
    },
    {
        title: "Silver Squeeze",
        description: "Understanding silver market dynamics.",
        href: "/silver-squeeze",
    },
    {
        title: "Silver Price Analysis",
        description: "Current silver prices and trends.",
        href: "/silver-price",
    },
];

const whyPhysicalSilverReasons = [
    {
        title: "Industrial Demand Surge",
        description: "50%+ of silver is consumed in industrial applications - solar panels, EVs, electronics. Mining stocks don't capture this fundamental demand.",
        icon: Factory,
    },
    {
        title: "Undervalued vs Gold",
        description: "The gold-to-silver ratio near 80:1 suggests silver is historically cheap. Physical silver lets you own the actual metal when the ratio normalizes.",
        icon: Scale,
    },
    {
        title: "Tangible Asset Ownership",
        description: "Physical silver is real wealth you can hold. Mining stocks are paper claims on company profits, not the metal itself.",
        icon: Coins,
    },
    {
        title: "No Counterparty Risk",
        description: "Mining companies can go bankrupt, mismanage, or dilute shares. Physical silver has no CEO, no debt, no management risk.",
        icon: Shield,
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Silver Stocks vs Physical Silver: Investment Guide (2026)",
    description: "Compare silver stocks vs physical silver investing. Learn why physical silver offers the purest exposure to silver prices.",
    author: {
        "@type": "Person",
        name: "Thomas Richardson",
    },
    publisher: {
        "@type": "Organization",
        name: "Rich Dad Retirement",
    },
    datePublished: "2026-01-27",
    dateModified: "2026-01-27",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Are silver stocks a good investment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Silver stocks can provide leveraged exposure to silver prices but come with company-specific risks like management decisions, debt levels, and operational challenges. Physical silver provides direct exposure to the metal price without counterparty risk.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between silver stocks and physical silver?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Silver stocks are shares in companies that mine or produce silver - you own a piece of the company, not the metal. Physical silver means owning actual silver bars or coins that you can hold. Physical silver has no counterparty risk while stocks depend on company performance.",
            },
        },
        {
            "@type": "Question",
            name: "Why is physical silver considered safer than silver stocks?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Physical silver cannot go bankrupt, doesn't have management risk, and maintains intrinsic value regardless of market conditions. Silver mining stocks can lose value due to poor management, rising costs, accidents, or company bankruptcy - even when silver prices are rising.",
            },
        },
        {
            "@type": "Question",
            name: "Can I hold physical silver in an IRA?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, through a Silver IRA (a type of self-directed IRA), you can hold IRS-approved physical silver coins and bars with the same tax advantages as a traditional IRA. The silver must meet .999 purity requirements and be stored at an approved depository.",
            },
        },
    ],
};

export default function SilverStocksHubPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <Navbar />
            <SchemaScript schema={articleSchema} />
            <SchemaScript schema={faqSchema} />

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
                            SILVER INVESTMENT GUIDE
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Silver Stocks
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Should you invest in silver mining stocks or own physical silver? Compare the pros and cons of each approach and discover why physical silver offers the purest exposure to silver prices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/silver-stocks/best-silver-stocks">
                                    Compare Silver Investments <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                <Link href="/silver-ira">
                                    Learn About Silver IRAs
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Physical Silver Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Physical Silver Over Silver Stocks?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            While silver stocks offer exposure to the silver market, physical silver provides unique advantages that paper investments simply cannot match.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyPhysicalSilverReasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                                >
                                    <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-5 w-5 text-slate-300" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                                    <p className="text-sm text-slate-400">{reason.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Sub-pages Grid */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Explore Silver Investment Options</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Get detailed comparisons to make an informed decision about your silver investments.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-2xl mx-auto">
                            {silverStocksPages.map((page) => {
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
                            <h2 className="text-2xl font-bold text-white text-center mb-8">Silver Market Quick Facts</h2>
                            <div className="grid md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">~$30</div>
                                    <div className="text-sm text-slate-400">Silver Spot Price/oz</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">50%+</div>
                                    <div className="text-sm text-slate-400">Industrial Demand Share</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">80:1</div>
                                    <div className="text-sm text-slate-400">Gold-Silver Ratio</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">5,000+</div>
                                    <div className="text-sm text-slate-400">Years as Money</div>
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
                        headline="Ready to Invest in Physical Silver?"
                        subheadline="Augusta Precious Metals offers competitive silver pricing and expert guidance. Get a free consultation to learn about adding physical silver to your portfolio."
                        trackSource="silver-stocks-hub"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
