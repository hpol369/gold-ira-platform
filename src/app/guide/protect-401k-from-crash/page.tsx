import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, ShieldCheck, TrendingDown, Coins, BarChart3, AlertTriangle, PieChart } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { SourcesSection } from "@/components/content/SourcesSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Can I Lose My 401k if the Market Crashes? Protection Guide 2026",
    description: "Yes, your 401(k) can lose value in a market crash — the average 401(k) lost 31% in 2008. Here are 9 proven strategies to protect your retirement savings from the next downturn.",
    url: "https://www.richdadretirement.com/guide/protect-401k-from-crash",
    type: "article",
});

const tocItems = [
    { id: "overview", label: "Why Protection Matters" },
    { id: "diversify", label: "1. Diversify Beyond Stocks" },
    { id: "age-allocation", label: "2. Age-Appropriate Allocation" },
    { id: "gold", label: "3. Add Gold Allocation" },
    { id: "rebalance", label: "4. Rebalance Regularly" },
    { id: "target-date", label: "5. Consider Target-Date Funds" },
    { id: "stable-value", label: "6. Use Stable Value Funds" },
    { id: "cash-buffer", label: "7. Build a Cash Buffer" },
    { id: "dont-panic", label: "8. Don't Panic Sell" },
    { id: "rollover", label: "9. Consider a Rollover" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "HowTo",
            "name": "How to Protect Your 401(k) From a Stock Market Crash",
            "description": "Step-by-step guide to protecting your 401(k) from market crashes",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Diversify Beyond Stocks",
                    "text": "Spread investments across stocks, bonds, and alternative assets like gold"
                },
                {
                    "@type": "HowToStep",
                    "name": "Use Age-Appropriate Allocation",
                    "text": "Reduce stock exposure as you approach retirement"
                },
                {
                    "@type": "HowToStep",
                    "name": "Add Gold Allocation",
                    "text": "Consider 10-15% in precious metals through Gold IRA rollover"
                },
                {
                    "@type": "HowToStep",
                    "name": "Rebalance Regularly",
                    "text": "Review and rebalance portfolio quarterly or annually"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do I protect my 401(k) from a market crash?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Protect your 401(k) by: 1) Diversifying across stocks, bonds, and gold, 2) Using age-appropriate allocation (less stocks as you near retirement), 3) Rebalancing regularly, 4) Maintaining a cash buffer, 5) Not panic selling during crashes. Consider rolling part of your 401(k) to a Gold IRA for precious metals exposure."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I move my 401(k) to cash before a crash?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Moving entirely to cash is generally not recommended because: 1) You can't reliably predict crashes, 2) You'll miss the recovery, 3) Cash loses value to inflation. Instead, maintain a diversified portfolio with some defensive assets (bonds, gold, stable value) that provide crash protection while still participating in market growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I put my 401(k) in gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most 401(k) plans don't offer direct gold investment options. However, you can: 1) Roll over an old 401(k) to a Gold IRA (tax-free), 2) Invest in gold ETFs or mining stocks if your 401(k) offers them, or 3) Wait until you change jobs or retire to do a rollover. A Gold IRA allows you to hold physical gold in a tax-advantaged account."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you lose everything in a 401k?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It's extremely unlikely to lose everything in a 401(k) because most plans are diversified across many investments. However, you can lose 30-50% or more during severe crashes. In 2008, the average 401(k) lost 31%. For workers near retirement, this kind of loss can permanently impact their retirement timeline."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to protect retirement savings from economic collapse?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To protect retirement savings from economic collapse: 1) Diversify across asset classes (stocks, bonds, gold, real estate), 2) Allocate 10-20% to precious metals through a Gold IRA, 3) Maintain 1-2 years of expenses in cash, 4) Reduce stock exposure as you near retirement, 5) Consider rolling over old 401(k)s to a self-directed IRA with more investment options."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I move my 401k to bonds before a crash?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Moving your entire 401(k) to bonds is risky because you can't predict crashes reliably, and bonds alone may not keep up with inflation. A better approach is gradual diversification: shift to a mix of bonds (30-40%), stable value funds (10-20%), and gold (10-15%) as you near retirement."
                    }
                }
            ]
        }
    ]
};

const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guide" },
    { name: "Protect 401k From Crash", url: "/guide/protect-401k-from-crash" },
]);

export default function Protect401kFromCrashPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            <SchemaScript schema={breadcrumbs} />
            <SchemaScript schema={howToSchema({
                name: "How to Protect Your 401(k) from a Stock Market Crash",
                description: "Practical steps to shield your retirement savings from market downturns",
                totalTime: "P14D",
                steps: [
                    { name: "Assess Your Current Risk", text: "Review your 401(k) allocation. If you are over 50 and more than 70% in stocks, you are overexposed to a market crash." },
                    { name: "Diversify into Precious Metals", text: "Roll over 10-20% of your 401(k) into a Gold IRA. Gold historically rises during market crashes — it gained 25% during the 2008 crisis." },
                    { name: "Rebalance to Age-Appropriate Mix", text: "Shift remaining 401(k) funds toward more conservative options: stable value funds, bond funds, and money market accounts." },
                    { name: "Set Up Automatic Rebalancing", text: "Enable quarterly rebalancing in your 401(k) to maintain your target allocation and prevent drift back into high-risk positions." },
                    { name: "Review and Adjust Annually", text: "As you approach retirement, gradually increase your gold allocation and decrease stock exposure. Target 30-40% conservative assets by retirement." },
                ],
            })} />
            {/* Header */}
            <header className="bg-slate-100 py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[#B22234] font-bold tracking-widest uppercase text-xs">
                                Comprehensive Guide
                            </span>
                            <span className="text-slate-400">|</span>
                            <span className="text-slate-500 text-xs">Updated March 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-4">
                            Can I Lose My 401(k) if the Market Crashes?
                        </h1>
                        <h2 className="text-xl md:text-2xl font-serif text-slate-600 mb-6">
                            9 Proven Strategies to Protect Your Retirement Savings
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Yes, your 401(k) can lose significant value in a crash — the average account lost 31% in 2008. Here&apos;s how to protect what you&apos;ve built.
                        </p>
                    </div>
                </Container>
            </header>

            <AnswerFirst
                answer="The most effective ways to protect your 401(k) from a market crash are diversifying into gold (10-20% allocation), shifting to stable value funds or bond funds within your plan, and considering a Gold IRA rollover for funds in old employer plans. Gold has historically risen during the 7 major market crashes since 1973."
                keyFacts={[
                    "Gold gained 25% during the 2008 financial crisis while the S&P 500 lost 37%",
                    "A 10-15% gold allocation reduced portfolio volatility by 20% over 20-year periods",
                    "You can diversify within your current 401(k) AND roll over old plans to gold",
                    "Target-date funds provide automatic rebalancing but still carry stock market risk",
                    "Consider stable value funds for the portion you can't afford to lose",
                ]}
                className="mb-8 max-w-3xl"
            />

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none">

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead text-xl text-slate-600">
                                Market crashes are inevitable. Since 1929, the stock market has crashed more than a dozen times—with drops of 20-50% or more. For those nearing retirement, a major crash at the wrong time can be devastating.
                            </p>
                            <p>
                                In 2008, the average 401(k) lost 31% of its value. Many retirees had to delay retirement or return to work. The lesson? <strong className="text-[#000080]">Protection must be built before the crash, not during it.</strong>
                            </p>
                            <p>
                                This guide covers 9 proven strategies to protect your 401(k) from the next market downturn.
                            </p>

                            <Callout type="warning" title="Time Is Your Enemy">
                                The closer you are to retirement, the more dangerous a crash becomes. A 40% loss at age 30 has 35 years to recover. The same loss at age 60 may never recover before you need the money.
                            </Callout>
                        </section>

                        {/* 1. Diversify */}
                        <section id="diversify" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-700">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">1. Diversify Beyond Stocks</h2>
                            </div>
                            <p>
                                True diversification means holding assets that don&apos;t move together. During the 2008 crash, &quot;diversified&quot; stock portfolios (US, international, large-cap, small-cap) all fell together.
                            </p>
                            <p>
                                Real diversification requires <strong className="text-[#000080]">different asset classes</strong>:
                            </p>
                            <ul className="text-slate-600">
                                <li><strong className="text-[#000080]">Stocks:</strong> Growth potential, but volatile</li>
                                <li><strong className="text-[#000080]">Bonds:</strong> Stability, income, often rise when stocks fall</li>
                                <li><strong className="text-[#000080]">Gold/Precious Metals:</strong> Crisis hedge, rose 25% in 2008 while stocks fell 37%</li>
                                <li><strong className="text-[#000080]">Real Estate:</strong> Income and inflation protection</li>
                                <li><strong className="text-[#000080]">Cash:</strong> Stability and buying opportunities</li>
                            </ul>
                        </section>

                        {/* 2. Age-Appropriate Allocation */}
                        <section id="age-allocation" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-700">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">2. Use Age-Appropriate Allocation</h2>
                            </div>
                            <p>
                                A common rule of thumb: subtract your age from 110 to get your stock percentage. A 60-year-old would have 50% stocks; a 30-year-old would have 80%.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Age</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Stocks</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Bonds</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Gold/Alternatives</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-600">
                                        <tr>
                                            <td className="p-4">30s</td>
                                            <td className="p-4">70-80%</td>
                                            <td className="p-4">10-20%</td>
                                            <td className="p-4">5-10%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">40s</td>
                                            <td className="p-4">60-70%</td>
                                            <td className="p-4">20-25%</td>
                                            <td className="p-4">10-15%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">50s</td>
                                            <td className="p-4">50-60%</td>
                                            <td className="p-4">25-35%</td>
                                            <td className="p-4">10-15%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">60s</td>
                                            <td className="p-4">40-50%</td>
                                            <td className="p-4">30-40%</td>
                                            <td className="p-4">10-20%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 3. Gold Allocation */}
                        <section id="gold" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-700">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">3. Add a Gold Allocation</h2>
                            </div>
                            <p>
                                Gold is one of the few assets that consistently rises during market crashes. During the 2008 financial crisis, gold rose 25% while the S&P 500 fell 37%.
                            </p>
                            <p>
                                <strong className="text-[#000080]">The problem:</strong> Most 401(k) plans don&apos;t offer gold investment options.
                            </p>
                            <p>
                                <strong className="text-[#000080]">The solution:</strong> Roll over part of your 401(k) to a <Link href="/what-is-a-gold-ira">Gold IRA</Link>. This allows you to hold physical gold, silver, platinum, and palladium in a tax-advantaged retirement account.
                            </p>

                            <Callout type="tip" title="401(k) to Gold IRA Rollover">
                                If you have an old 401(k) from a previous employer, you can roll it over to a Gold IRA tax-free. This gives you direct ownership of physical precious metals. Learn more in our <Link href="/guide/401k-to-gold-rollover">401(k) to Gold Rollover Guide</Link>.
                            </Callout>
                        </section>

                        {/* 4. Rebalance */}
                        <section id="rebalance" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-700">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">4. Rebalance Regularly</h2>
                            </div>
                            <p>
                                If your target is 60% stocks and markets have risen, you might now be at 75% stocks—more exposed to a crash than intended. Rebalancing brings you back to target.
                            </p>
                            <p>
                                <strong className="text-[#000080]">How often:</strong> Quarterly or annually. Some experts recommend rebalancing when any asset class drifts 5%+ from target.
                            </p>
                            <p>
                                <strong className="text-[#000080]">Automatic option:</strong> Many 401(k) plans offer automatic rebalancing—turn it on.
                            </p>
                        </section>

                        {/* 5. Target-Date Funds */}
                        <section id="target-date" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">5. Consider Target-Date Funds</h2>
                            </div>
                            <p>
                                Target-date funds automatically become more conservative as you approach retirement. A &quot;2035 Fund&quot; is more aggressive now but will shift to bonds/stable assets by 2035.
                            </p>
                            <p>
                                <strong className="text-[#000080]">Pros:</strong> Automatic rebalancing, professionally managed, simple
                            </p>
                            <p>
                                <strong className="text-[#000080]">Cons:</strong> One-size-fits-all, may not match your risk tolerance, limited customization
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-[#000080] text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Add Crash Protection to Your 401(k)</h3>
                                <p className="mb-6 text-gray-200">Roll over your 401(k) to a Gold IRA for physical precious metals protection.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* 6. Stable Value Funds */}
                        <section id="stable-value" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">6. Use Stable Value Funds</h2>
                            </div>
                            <p>
                                Stable value funds are unique to retirement plans—they offer bond-like returns with principal protection. They typically yield 2-4% with no risk of losing money.
                            </p>
                            <p>
                                Consider allocating 10-20% to stable value, especially if you&apos;re within 10 years of retirement. This provides a buffer during crashes.
                            </p>
                        </section>

                        {/* 7. Cash Buffer */}
                        <section id="cash-buffer" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-700/50 rounded-lg text-slate-600">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">7. Build a Cash Buffer</h2>
                            </div>
                            <p>
                                Outside your 401(k), maintain 1-2 years of expenses in cash or short-term bonds. This &quot;retirement buffer&quot; lets you avoid selling stocks during crashes.
                            </p>
                            <p>
                                If markets crash 40% early in retirement, you can draw from your cash buffer while waiting for stocks to recover.
                            </p>
                        </section>

                        {/* 8. Don't Panic */}
                        <section id="dont-panic" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-700">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">8. Don&apos;t Panic Sell</h2>
                            </div>
                            <p>
                                The worst thing you can do during a crash is panic sell. Investors who sold at the 2008 bottom and missed the 2009 recovery suffered permanent losses.
                            </p>
                            <p>
                                If you&apos;ve built proper diversification and a cash buffer, you can ride out crashes without selling at the worst possible time.
                            </p>

                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 not-prose my-6">
                                <h4 className="font-bold text-red-700 mb-2">The Cost of Panic Selling</h4>
                                <p className="text-red-800 text-sm">
                                    An investor who sold at the March 2009 bottom and stayed in cash for just one year missed a 68% recovery. That one decision likely cost hundreds of thousands in retirement wealth.
                                </p>
                            </div>
                        </section>

                        {/* 9. Consider Rollover */}
                        <section id="rollover" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-700">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">9. Consider a Gold IRA Rollover</h2>
                            </div>
                            <p>
                                If your 401(k) doesn&apos;t offer the crash protection you need, consider rolling over to a Gold IRA. This is particularly useful for:
                            </p>
                            <ul className="text-slate-600">
                                <li>Old 401(k)s from previous employers</li>
                                <li>Retirees with 401(k) access</li>
                                <li>Those wanting physical gold ownership</li>
                            </ul>
                            <p>
                                A Gold IRA rollover is tax-free and penalty-free when done correctly. You maintain the tax-advantaged status while gaining access to physical precious metals.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">How do I protect my 401(k) from a market crash?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Protect your 401(k) by: 1) Diversifying across stocks, bonds, and gold, 2) Using age-appropriate allocation, 3) Rebalancing regularly, 4) Maintaining a cash buffer, 5) Not panic selling. Consider rolling over to a <Link href="/what-is-a-gold-ira" className="text-[#B22234] hover:underline">Gold IRA</Link> for precious metals exposure.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Should I move my 401(k) to cash before a crash?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Moving entirely to cash is generally not recommended because you can&apos;t reliably predict crashes, you&apos;ll miss the recovery, and cash loses value to inflation. Instead, maintain diversification with defensive assets that provide crash protection while participating in growth.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Can I put my 401(k) in gold?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Most 401(k) plans don&apos;t offer direct gold options. However, you can roll over an old 401(k) to a <Link href="/guide/401k-to-gold-rollover" className="text-[#B22234] hover:underline">Gold IRA</Link> tax-free, invest in gold ETFs if your plan offers them, or wait until job change/retirement to do a rollover.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#000080] relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#000080]">Protect Your 401(k) With Gold</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Roll over your 401(k) to a Gold IRA for physical precious metals crash protection.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-[#000080] hover:bg-slate-200">
                                        <Link href="/guide/401k-to-gold-rollover">401(k) Rollover Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Additional FAQs matching PAA queries */}
                        <div className="space-y-4 not-prose mt-8">
                            <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">Can you lose everything in a 401(k)?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-600">
                                    It&apos;s extremely unlikely to lose everything because most plans are diversified. However, you can lose 30-50% in severe crashes. The average 401(k) lost 31% in 2008. For workers near retirement, this can permanently impact your timeline.
                                </p>
                            </details>

                            <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">How do I protect my retirement savings from economic collapse?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-600">
                                    Diversify across asset classes (stocks, bonds, gold, real estate), allocate 10-20% to precious metals through a <Link href="/what-is-a-gold-ira" className="text-[#B22234] hover:underline">Gold IRA</Link>, maintain 1-2 years of expenses in cash, and reduce stock exposure as you near retirement.
                                </p>
                            </details>

                            <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                    <h4 className="text-lg font-bold">Should I move my 401(k) to bonds before a crash?</h4>
                                    <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-600">
                                    Moving entirely to bonds is risky — you can&apos;t predict crashes, and bonds alone may not beat inflation. A better approach: shift to a mix of bonds (30-40%), stable value funds (10-20%), and gold (10-15%) as you approach retirement.
                                </p>
                            </details>
                        </div>

                        <SourcesSection
                            sources={[
                                { name: "Federal Reserve — Effects of the Financial Crisis on 401(k) Account Balances", url: "https://www.federalreserve.gov/", accessDate: "March 2026" },
                                { name: "Investment Company Institute — 401(k) Plan Asset Allocation", url: "https://www.ici.org/", accessDate: "March 2026" },
                                { name: "World Gold Council — Gold During Market Downturns", url: "https://www.gold.org/", accessDate: "March 2026" },
                                { name: "Bureau of Labor Statistics — Inflation Data", url: "https://www.bls.gov/cpi/", accessDate: "March 2026" },
                            ]}
                            lastVerified="March 2026"
                        />

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            <AutoRelatedContent currentUrl="/guide/protect-401k-from-crash" />

            {/* CTA Section */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-protect-401k-from-crash" />
                </Container>
            </section>
        </main>
    );
}
