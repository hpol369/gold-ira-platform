import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { createPageMetadata } from "@/lib/metadata";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
    TrendingUp,
    ArrowRight,
    Shield,
    Scale,
    Coins,
    CheckCircle2,
    Building2,
    BarChart3,
    Lock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = createPageMetadata({
    title: "Gold Stocks vs Physical Gold: Complete Investment Guide (2026)",
    description:
        "Exploring gold stocks? Compare gold mining stocks, ETFs, and physical gold investments. Understand the pros and cons of each gold investment option for your portfolio.",
    url: "https://www.richdadretirement.com/gold-stocks",
    imageAlt: "Gold Stocks Investment Guide - Rich Dad Retirement",
});

const goldStocksPages = [
    {
        title: "Best Ways to Invest in Gold",
        description: "Complete guide to gold investment options: mining stocks, ETFs, physical gold, and Gold IRAs compared.",
        href: "/gold-stocks/best-gold-stocks",
        icon: TrendingUp,
        badge: "Popular",
    },
    {
        title: "What Gold Investments to Buy",
        description: "Actionable recommendations on which gold investments make sense for different investor profiles.",
        href: "/gold-stocks/gold-stocks-to-buy",
        icon: Coins,
        badge: null,
    },
    {
        title: "Mining Stocks vs Physical Gold",
        description: "Deep dive comparison: when mining stocks outperform, when physical gold wins, and how to decide.",
        href: "/gold-stocks/gold-mining-stocks-vs-physical-gold",
        icon: Scale,
        badge: "Key Comparison",
    },
];

const relatedResources = [
    {
        title: "Why Invest in Gold",
        description: "The fundamental case for gold in your portfolio.",
        href: "/why-gold",
    },
    {
        title: "Gold IRA vs Gold ETF",
        description: "Physical gold vs paper gold in your retirement account.",
        href: "/compare/gold-ira-vs-gold-etf",
    },
    {
        title: "Stock Market Crash Protection",
        description: "How gold performs when markets tumble.",
        href: "/scenarios/stock-market-crash",
    },
    {
        title: "Best Gold IRA Companies",
        description: "Top-rated companies for physical gold investing.",
        href: "/best-gold-ira-companies",
    },
];

const whyPhysicalGoldReasons = [
    {
        title: "No Counterparty Risk",
        description: "Mining stocks depend on company management, debt levels, and operational risks. Physical gold has no bankruptcy risk.",
    },
    {
        title: "Tangible Asset Ownership",
        description: "You own real gold bars and coins in a secure depository. Not a paper promise or share certificate.",
    },
    {
        title: "Proven Inflation Hedge",
        description: "Physical gold has preserved purchasing power for 5,000 years. No stock can make that claim.",
    },
    {
        title: "Crisis Protection",
        description: "When financial systems strain, gold stocks can fall with the market. Physical gold typically rises.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold Stocks vs Physical Gold: Complete Investment Guide (2026)",
            "description": "Compare gold mining stocks, ETFs, and physical gold investments. Understand the pros and cons of each gold investment option.",
            "image": "https://richdadretirement.com/images/gold-stocks-guide.jpg",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson",
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-27",
            "dateModified": "2026-01-27"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the different ways to invest in gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are four main ways to invest in gold: 1) Gold mining stocks - shares in companies that mine gold, 2) Gold ETFs - exchange-traded funds that track gold prices, 3) Physical gold - coins and bars you own directly, and 4) Gold IRAs - retirement accounts holding physical gold with tax advantages. Each has different risk profiles, costs, and benefits."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are gold stocks a good investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold stocks can be profitable but carry different risks than physical gold. Mining stocks are leveraged to gold prices (they can rise faster but also fall faster) and depend on company management, production costs, and debt levels. They also pay dividends, unlike physical gold. However, during financial crises, gold stocks often fall with the broader market while physical gold typically rises."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I buy gold stocks or physical gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your goals. Buy gold stocks if you want potential for higher returns and dividends, and can tolerate more volatility. Buy physical gold if you want crisis protection, no counterparty risk, and a proven store of value. Many investors hold both: physical gold for wealth preservation and mining stocks for growth potential."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the safest way to invest in gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Physical gold held in an IRS-approved depository (via a Gold IRA) or purchased directly from reputable dealers is considered the safest gold investment. Unlike gold stocks or ETFs, physical gold has no counterparty risk, can't go bankrupt, and has maintained value for thousands of years. A Gold IRA also provides tax advantages similar to traditional retirement accounts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do gold stocks track the price of gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold stocks are correlated with gold prices but don't track them exactly. Mining stocks often move 2-3x more than gold in both directions (higher leverage). They're also affected by company-specific factors like production costs, management decisions, new discoveries, and overall stock market sentiment. During market crashes, gold stocks can fall even if gold rises."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What percentage of my portfolio should be in gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most financial advisors recommend 5-15% of your portfolio in gold or precious metals. Those closer to retirement or more concerned about economic instability might hold 15-20%. The key is that gold serves as portfolio insurance and diversification, not as your primary growth investment. A mix of physical gold and gold stocks can provide both protection and growth potential."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I hold gold stocks in an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can hold gold stocks and gold ETFs in a regular IRA or 401(k). However, for physical gold, you need a specialized 'Self-Directed IRA' or 'Gold IRA' that allows precious metals. Gold IRAs let you hold actual gold coins and bars with the same tax advantages as traditional retirement accounts."
                    }
                }
            ]
        }
    ]
};

export default function GoldStocksHubPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <SchemaScript schema={schema} />

            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#B22234]/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#B22234]/10 rounded-full blur-[100px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
                            <BarChart3 className="h-4 w-4" />
                            GOLD INVESTMENT GUIDE
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#000080] mb-6">
                            Gold Stocks
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
                            Looking for gold stocks? Here&apos;s what most investors don&apos;t realize...
                        </p>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
                            There are multiple ways to invest in gold: mining stocks, ETFs, physical gold, and Gold IRAs. Each has different risks, costs, and benefits. This guide helps you understand all your options so you can make an informed decision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/gold-stocks/best-gold-stocks">
                                    Explore Gold Investment Options <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                <Link href="/gold-stocks/gold-mining-stocks-vs-physical-gold">
                                    Mining Stocks vs Physical Gold
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Physical Gold Section */}
            <section className="py-16 bg-white border-y border-slate-200">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#000080] mb-4">Why Consider Physical Gold Over Stocks?</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Gold mining stocks can be profitable, but physical gold offers unique advantages that paper investments cannot match.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyPhysicalGoldReasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                            >
                                <div className="w-10 h-10 bg-[#B22234]/10 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle2 className="h-5 w-5 text-[#B22234]" />
                                </div>
                                <h3 className="font-bold text-[#000080] mb-2">{reason.title}</h3>
                                <p className="text-sm text-slate-500">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Gold Investment Options Overview */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#000080] mb-4">Understanding Your Gold Investment Options</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">
                                Before diving into gold stocks, understand how they compare to other gold investments.
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-slate-50 rounded-xl border border-slate-200">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Investment Type</th>
                                        <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Pros</th>
                                        <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Cons</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
                                    <tr>
                                        <td className="p-4 font-semibold text-[#B22234]">Gold Mining Stocks</td>
                                        <td className="p-4">Dividends, leveraged gains, easy to trade</td>
                                        <td className="p-4">Company risk, can fall with market, no physical ownership</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-[#B22234]">Gold ETFs (GLD, IAU)</td>
                                        <td className="p-4">Low fees, liquid, tracks gold price</td>
                                        <td className="p-4">Paper asset, counterparty risk, no physical possession</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-[#B22234]">Physical Gold</td>
                                        <td className="p-4">No counterparty risk, crisis hedge, tangible asset</td>
                                        <td className="p-4">Storage costs, less liquid, no dividends</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-[#B22234]">Gold IRA</td>
                                        <td className="p-4">Tax advantages, physical ownership, retirement protection</td>
                                        <td className="p-4">Fees, withdrawal rules, requires custodian</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Sub-pages Grid */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#000080] mb-4">Explore Gold Investment Topics</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">
                                Deep-dive guides to help you choose the right gold investment strategy.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {goldStocksPages.map((page) => {
                                const Icon = page.icon;
                                return (
                                    <Link
                                        key={page.href}
                                        href={page.href}
                                        className="group bg-white border border-slate-200 rounded-xl p-6 hover:bg-slate-50 hover:border-[#B22234]/30 transition-all"
                                    >
                                        <div className="flex flex-col h-full">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-12 h-12 bg-[#B22234]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Icon className="h-6 w-6 text-[#B22234]" />
                                                </div>
                                                {page.badge && (
                                                    <span className="px-2 py-0.5 bg-[#B22234]/10 text-[#B22234] text-xs font-semibold rounded-full">
                                                        {page.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-bold text-[#000080] group-hover:text-[#B22234] transition-colors mb-2">
                                                {page.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm flex-1">
                                                {page.description}
                                            </p>
                                            <div className="flex items-center gap-2 mt-4 text-[#B22234] text-sm font-semibold">
                                                Read Guide <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Key Insight Box */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-br from-[#B22234]/10 to-[#B22234]/5 rounded-2xl p-8 border border-[#B22234]/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#B22234]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Lock className="h-6 w-6 text-[#B22234]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#000080] mb-3">The Key Difference Most Investors Miss</h3>
                                    <p className="text-slate-600 mb-4">
                                        In 2008, the S&P 500 dropped 37%. Gold mining stocks (GDX) dropped 27%. But physical gold? It went <span className="text-green-600 font-semibold">up 5.5%</span>.
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        Gold stocks are still stocks. During a financial crisis, they can fall with the broader market even if gold prices rise. Physical gold behaves differently - it&apos;s a true safe haven asset that often moves opposite to stocks when you need it most.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
                            Related Gold Resources
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedResources.map((resource) => (
                                <Link
                                    key={resource.href}
                                    href={resource.href}
                                    className="group bg-white border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-[#B22234]/30 transition-all"
                                >
                                    <h3 className="font-bold text-[#000080] text-sm mb-1 group-hover:text-[#B22234] transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-xs text-slate-500">{resource.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">Gold Investment Quick Facts</h2>
                            <div className="grid md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">$2,000+</div>
                                    <div className="text-sm text-slate-500">Gold Price per Oz (2026)</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">5,000+</div>
                                    <div className="text-sm text-slate-500">Years as Store of Value</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">10-15%</div>
                                    <div className="text-sm text-slate-500">Recommended Portfolio Allocation</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#B22234] mb-2">0%</div>
                                    <div className="text-sm text-slate-500">Counterparty Risk (Physical)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">What are the different ways to invest in gold?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-500">
                                    There are four main ways to invest in gold: 1) Gold mining stocks - shares in companies that mine gold, 2) Gold ETFs - exchange-traded funds that track gold prices, 3) Physical gold - coins and bars you own directly, and 4) Gold IRAs - retirement accounts holding physical gold with tax advantages. Each has different risk profiles, costs, and benefits.
                                </p>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">Are gold stocks a good investment?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-500">
                                    Gold stocks can be profitable but carry different risks than physical gold. Mining stocks are leveraged to gold prices (they can rise faster but also fall faster) and depend on company management, production costs, and debt levels. They also pay dividends, unlike physical gold. However, during financial crises, gold stocks often fall with the broader market while physical gold typically rises.
                                </p>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">Should I buy gold stocks or physical gold?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-500">
                                    It depends on your goals. Buy gold stocks if you want potential for higher returns and dividends, and can tolerate more volatility. Buy physical gold if you want crisis protection, no counterparty risk, and a proven store of value. Many investors hold both: physical gold for wealth preservation and mining stocks for growth potential.
                                </p>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">What is the safest way to invest in gold?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-500">
                                    Physical gold held in an IRS-approved depository (via a Gold IRA) or purchased directly from reputable dealers is considered the safest gold investment. Unlike gold stocks or ETFs, physical gold has no counterparty risk, can&apos;t go bankrupt, and has maintained value for thousands of years. A Gold IRA also provides tax advantages similar to traditional retirement accounts.
                                </p>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">Do gold stocks track the price of gold?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-500">
                                    Gold stocks are correlated with gold prices but don&apos;t track them exactly. Mining stocks often move 2-3x more than gold in both directions (higher leverage). They&apos;re also affected by company-specific factors like production costs, management decisions, new discoveries, and overall stock market sentiment. During market crashes, gold stocks can fall even if gold rises.
                                </p>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">What percentage of my portfolio should be in gold?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-500">
                                    Most financial advisors recommend 5-15% of your portfolio in gold or precious metals. Those closer to retirement or more concerned about economic instability might hold 15-20%. The key is that gold serves as portfolio insurance and diversification, not as your primary growth investment. A mix of physical gold and gold stocks can provide both protection and growth potential.
                                </p>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">Can I hold gold stocks in an IRA?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-500">
                                    Yes, you can hold gold stocks and gold ETFs in a regular IRA or 401(k). However, for physical gold, you need a specialized &quot;Self-Directed IRA&quot; or &quot;Gold IRA&quot; that allows precious metals. Gold IRAs let you hold actual gold coins and bars with the same tax advantages as traditional retirement accounts.
                                </p>
                            </details>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Interested in Physical Gold for Your Retirement?"
                        subheadline="Augusta Precious Metals specializes in helping investors add physical gold to their retirement accounts. Get a free consultation to learn if a Gold IRA is right for you."
                        trackSource="gold-stocks-hub"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
