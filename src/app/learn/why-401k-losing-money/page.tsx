import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import {
    TrendingDown,
    AlertTriangle,
    ArrowRight,
    DollarSign,
    PieChart,
    Target,
    Clock,
    ShieldCheck,
    Calculator,
    Coins,
    CheckCircle2,
    HelpCircle
} from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Why Is My 401k Losing Money? Causes & Solutions",
    description: "Why is your 401k losing money? Learn common causes like fees, volatility, and poor fund selection plus steps to protect your retirement savings.",
    keywords: "why is my 401k losing money, 401k losing money what to do, my 401k is down should i be worried, 401k dropping, 401k losses explained",
    openGraph: {
        title: "Why Is My 401k Losing Money? Understanding the Causes",
        description: "Learn why your 401k might be losing value and what steps you can take to protect your retirement savings from further losses.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const takeaways = [
    "401k losses are often temporary and part of normal market cycles - don't panic.",
    "High fees can silently erode 20-30% of your retirement savings over time.",
    "Poor fund selection or being over-concentrated in stocks increases your risk.",
    "Target date funds aren't always the safest option they appear to be.",
    "Diversification into non-correlated assets like gold can reduce volatility.",
    "Now may be the time to reassess your risk tolerance and portfolio allocation.",
    "A 401k Risk Analyzer can help you understand your true exposure to market swings."
];

const tocItems = [
    { id: "understanding", label: "Understanding 401k Losses" },
    { id: "market-volatility", label: "Market Volatility" },
    { id: "hidden-fees", label: "Hidden Fees" },
    { id: "poor-funds", label: "Poor Fund Selection" },
    { id: "over-concentration", label: "Over-Concentration" },
    { id: "target-date-issues", label: "Target Date Fund Issues" },
    { id: "what-to-do", label: "What You Can Do" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Why Is My 401k Losing Money? Common Causes & Solutions",
            "description": "A comprehensive guide to understanding why your 401k might be losing value and actionable steps to protect your retirement savings.",
            "image": "https://richdadretirement.com/images/401k-losses.jpg",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why is my 401k losing money?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your 401k may be losing money due to several factors: market volatility and corrections, high management fees eating into returns, poor fund selection within your plan, over-concentration in stocks, or issues with target date funds. It's important to review your specific holdings and fee structure to identify the cause."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I be worried if my 401k is down?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Short-term losses are normal and usually temporary. However, if you're within 10 years of retirement, you should be more concerned about protecting your savings from major losses. Consider your time horizon, risk tolerance, and whether your current allocation is appropriate for your retirement timeline."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What should I do if my 401k is losing money?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "First, don't panic and avoid selling during a market dip. Review your asset allocation and fee structure. Consider rebalancing to match your risk tolerance. For those near retirement, diversifying into non-correlated assets like gold through a Gold IRA rollover can provide protection against future market volatility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much should my 401k be down before I worry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Historical bear markets have seen declines of 20-50%. A 10-20% decline is relatively normal during market corrections. However, the key factor is your timeline - if you're decades from retirement, you have time to recover. If you're within 5-10 years of retirement, even a 20% loss can significantly impact your retirement plans."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I protect my 401k from market crashes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Strategies include: diversifying across asset classes, reducing stock exposure as you near retirement, maintaining some cash reserves, and considering alternative assets like gold that historically move opposite to stocks. You can also roll over a portion of your 401k into a Gold IRA for added diversification without tax penalties."
                    }
                }
            ]
        }
    ]
};

export default function Why401kLosingMoneyPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-4 block">
                            401k Concerns
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Why Is My 401k Losing Money?
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            If you&apos;ve been watching your 401k balance drop, you&apos;re not alone. Let&apos;s understand what&apos;s happening, why it matters, and what you can actually do about it.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Understanding Section */}
                        <section id="understanding" className="scroll-mt-32">
                            <p className="lead">
                                You&apos;ve been doing everything right. Every paycheck, money comes out before you even see it. 30 years of that discipline, and you&apos;ve built real savings—$500K, $600K, maybe more. <strong>So why does that number keep going down?</strong>
                            </p>
                            <p>
                                Look, we get it. You didn&apos;t work double shifts as a nurse, spend decades on the factory floor, or drive coast-to-coast hauling freight just to watch Wall Street gamble it away. That sick feeling when you log in and see less than last quarter? That&apos;s not irrational. That&apos;s your gut telling you something&apos;s wrong.
                            </p>
                            <p>
                                Let&apos;s walk through <em>exactly</em> why your 401(k) might be losing money—and more importantly, what you can actually do about it. Because at 55 or 60, you don&apos;t have decades to recover. Your body is already telling you that.
                            </p>
                        </section>

                        {/* Market Volatility */}
                        <section id="market-volatility" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Reason #1: Market Volatility & Corrections</h2>
                            </div>
                            <p>
                                The stock market doesn&apos;t move in a straight line - it never has. Corrections (drops of 10% or more) happen roughly every 1-2 years on average. Bear markets (drops of 20% or more) occur approximately every 5-7 years.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Recent Market Volatility Examples</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">2022 Bear Market</span>
                                        <span className="text-red-400 font-semibold">S&P 500 down 25%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">2020 COVID Crash</span>
                                        <span className="text-red-400 font-semibold">S&P 500 down 34%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                        <span className="text-slate-300">2008 Financial Crisis</span>
                                        <span className="text-red-400 font-semibold">S&P 500 down 57%</span>
                                    </div>
                                </div>
                            </div>

                            <p>
                                If your 401k is heavily invested in stocks (as most are), your balance will naturally fluctuate with the market. This is normal. <strong>The key question is: how much risk can you afford to take given your retirement timeline?</strong>
                            </p>

                            <Callout type="info" title="The Closer You Are to Retirement, The More It Matters">
                                A 30-year-old has decades to recover from a market crash. A 60-year-old doesn&apos;t. If you&apos;re within 10 years of retirement, market volatility poses a much greater risk to your plans. This is called <Link href="/learn/sequence-of-returns-risk">sequence of returns risk</Link>.
                            </Callout>
                        </section>

                        {/* Hidden Fees */}
                        <section id="hidden-fees" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Reason #2: Hidden Fees Eating Your Returns</h2>
                            </div>
                            <p>
                                Here&apos;s something most 401k participants don&apos;t realize: <strong>fees can silently consume 20-30% of your retirement savings over time</strong>. And most people have no idea how much they&apos;re actually paying.
                            </p>
                            <p>
                                The average 401k participant pays about 1% in fees annually. That might sound small, but the math is devastating:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Fee Rate</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">$500k Over 20 Years*</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Lost to Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-white">0.25% (Low-cost index)</td>
                                            <td className="p-4 text-green-400 font-semibold">$1,540,000</td>
                                            <td className="p-4 text-slate-400">$45,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">1.0% (Average 401k)</td>
                                            <td className="p-4 text-amber-400 font-semibold">$1,340,000</td>
                                            <td className="p-4 text-red-400">$245,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">1.5% (High-fee plan)</td>
                                            <td className="p-4 text-red-400 font-semibold">$1,195,000</td>
                                            <td className="p-4 text-red-400">$390,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-xs text-slate-500 mt-2">*Assumes 7% average annual return before fees</p>
                            </div>

                            <p>
                                The difference between a 0.25% and 1.5% fee is nearly <strong>$345,000</strong> over 20 years. That&apos;s real money being taken from your retirement.
                            </p>

                            <h3>Common 401k Fees to Watch For:</h3>
                            <ul>
                                <li><strong>Expense ratios</strong> - Built into mutual fund costs (0.03% to 1.5%+)</li>
                                <li><strong>Administrative fees</strong> - Charged by plan providers</li>
                                <li><strong>12b-1 fees</strong> - Hidden marketing fees inside some funds</li>
                                <li><strong>Wrap fees</strong> - Charged by financial advisors on top of fund fees</li>
                            </ul>

                            <Callout type="warning" title="Check Your Fee Statement">
                                Your employer is required to provide a fee disclosure annually. Find it and review it. If your all-in costs exceed 1%, you&apos;re likely overpaying.
                            </Callout>
                        </section>

                        {/* Poor Fund Selection */}
                        <section id="poor-funds" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Reason #3: Poor Fund Selection</h2>
                            </div>
                            <p>
                                Many 401k plans offer limited investment options - and not all of them are good. You might be stuck with:
                            </p>
                            <ul>
                                <li><strong>Underperforming actively managed funds</strong> that consistently lag the market</li>
                                <li><strong>High-cost proprietary funds</strong> from the plan provider</li>
                                <li><strong>Narrow sector funds</strong> that concentrate risk</li>
                                <li><strong>Outdated investment options</strong> that haven&apos;t been updated in years</li>
                            </ul>
                            <p>
                                Studies consistently show that most actively managed funds underperform simple index funds over time - yet many 401k plans are loaded with these expensive, underperforming options.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-amber-400" />
                                    Questions to Ask About Your 401k Funds
                                </h4>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>What is the expense ratio of each fund I&apos;m invested in?</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>How has each fund performed compared to its benchmark index?</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Are there low-cost index fund options available?</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>When was the last time the plan&apos;s investment menu was updated?</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Over-Concentration */}
                        <section id="over-concentration" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Reason #4: Over-Concentration in Stocks</h2>
                            </div>
                            <p>
                                Many people - especially those who started their 401k when they were young - have never adjusted their allocation. They might be carrying 80-100% stocks well into their 50s and 60s.
                            </p>
                            <p>
                                When you&apos;re 30, being aggressive with stocks makes sense. You have 30+ years to recover from downturns. But as you approach retirement, <strong>a single bad year can derail your entire retirement plan</strong>.
                            </p>

                            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20 not-prose my-8">
                                <h4 className="font-bold text-red-400 text-lg mb-4">The Danger Zone</h4>
                                <p className="text-red-300 mb-4">Consider someone retiring in 2008 with $1 million, 80% in stocks:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                                        <h5 className="font-semibold text-white mb-2">January 2008</h5>
                                        <p className="text-2xl font-bold text-green-400">$1,000,000</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                                        <h5 className="font-semibold text-white mb-2">March 2009</h5>
                                        <p className="text-2xl font-bold text-red-400">$544,000</p>
                                    </div>
                                </div>
                                <p className="text-sm text-red-400 mt-4">A 45% loss right at retirement could mean working 5-10 more years or drastically reducing lifestyle.</p>
                            </div>

                            <p>
                                The traditional rule of thumb was to subtract your age from 100 to get your stock percentage. But with longer life expectancies and market volatility, many advisors now recommend even more conservative approaches for those near retirement.
                            </p>
                        </section>

                        {/* Target Date Fund Issues */}
                        <section id="target-date-issues" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Reason #5: Target Date Fund Issues</h2>
                            </div>
                            <p>
                                Target date funds are marketed as &quot;set it and forget it&quot; solutions that automatically become more conservative as you approach retirement. Sounds perfect, right? Not necessarily.
                            </p>

                            <h3>Problems with Target Date Funds:</h3>

                            <div className="space-y-4 not-prose my-8">
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white">Still Too Much Stock Exposure</h4>
                                        <p className="text-sm text-slate-400 mt-1">Many target date funds still hold 40-50% stocks at the target date. That&apos;s a lot of risk when you&apos;re ready to retire.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white">One-Size-Fits-All Approach</h4>
                                        <p className="text-sm text-slate-400 mt-1">Your risk tolerance, other savings, and retirement plans are unique. Target date funds assume everyone with the same retirement year has identical needs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white">Hidden Fees</h4>
                                        <p className="text-sm text-slate-400 mt-1">Many target date funds have higher expense ratios than simple index funds, especially those from major brokerages.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold flex-shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-white">No Protection from Correlated Assets</h4>
                                        <p className="text-sm text-slate-400 mt-1">Stocks and bonds sometimes fall together (like in 2022). Target date funds rarely include truly non-correlated assets like gold.</p>
                                    </div>
                                </div>
                            </div>

                            <Callout type="tip" title="Don't Assume You're Protected">
                                If you&apos;re in a target date fund, look up its &quot;glide path&quot; - the schedule showing how it shifts from stocks to bonds. You might be surprised how much stock exposure remains at your target date.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose border border-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 font-semibold text-sm px-4 py-2 rounded-full mb-4 border border-amber-500/30">
                                    <Calculator className="h-4 w-4" />
                                    FREE TOOL
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">How Exposed Is Your 401k?</h3>
                                <p className="mb-6 text-slate-300 max-w-xl mx-auto">Use our 401k Risk Analyzer to understand your true exposure to market volatility and get personalized recommendations.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/tools/401k-risk-analyzer">Analyze Your 401k Risk <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* What You Can Do */}
                        <section id="what-to-do" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">What You Can Do About It</h2>
                            </div>
                            <p>
                                Understanding why your 401k is losing money is the first step. Now let&apos;s talk about actionable steps you can take to protect your retirement savings.
                            </p>

                            <h3>Step 1: Don&apos;t Panic and Sell</h3>
                            <p>
                                The worst thing you can do during a market downturn is sell everything. This locks in your losses and means you miss the recovery. <strong>Time in the market beats timing the market</strong> - but only if you stay invested.
                            </p>

                            <h3>Step 2: Review Your Asset Allocation</h3>
                            <p>
                                Is your current stock/bond mix appropriate for your age and risk tolerance? If you&apos;re within 10 years of retirement and have 80%+ in stocks, you&apos;re likely taking too much risk.
                            </p>

                            <h3>Step 3: Audit Your Fees</h3>
                            <p>
                                Request your plan&apos;s fee disclosure and calculate your total costs. If you&apos;re paying over 1% annually, look for lower-cost index fund options within your plan.
                            </p>

                            <h3>Step 4: Consider Diversification Beyond Stocks and Bonds</h3>
                            <p>
                                True diversification means owning assets that don&apos;t move together. When stocks crashed in 2008 and 2020, gold held steady or rose. This is why many financial experts recommend a 10-20% allocation to precious metals.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-amber-500/20 rounded-full text-amber-400">
                                        <Coins className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white text-lg">Gold as Portfolio Protection</h4>
                                </div>
                                <p className="text-slate-300 mb-4">
                                    Gold has historically served as a hedge against market volatility. During the 2008 financial crisis, stocks fell 37% while gold gained 5.5%. A Gold IRA allows you to hold physical gold in a tax-advantaged retirement account.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4 text-center">
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <p className="text-2xl font-bold text-green-400">+5.5%</p>
                                        <p className="text-xs text-slate-400">Gold in 2008 crash</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <p className="text-2xl font-bold text-green-400">+25%</p>
                                        <p className="text-xs text-slate-400">Gold in 2020</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <p className="text-2xl font-bold text-green-400">Tax-Free</p>
                                        <p className="text-xs text-slate-400">401k to Gold IRA rollover</p>
                                    </div>
                                </div>
                            </div>

                            <h3>Step 5: Explore a Partial 401k Rollover</h3>
                            <p>
                                Did you know you can roll over a portion of your 401k into a <Link href="/what-is-a-gold-ira">Gold IRA</Link> without tax penalties? This allows you to diversify into physical gold while keeping some funds in your existing 401k.
                            </p>
                            <p>
                                Learn more about this option: <Link href="/guide/401k-to-gold-rollover">How to Roll Over Your 401k to a Gold IRA</Link>
                            </p>

                            <Callout type="success" title="The Time to Act Is Now">
                                The best time to add portfolio protection is before the next crash - not during. If your 401k is already down, it may be showing you vulnerabilities in your retirement plan that need addressing.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Why is my 401k losing money?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Your 401k may be losing money due to several factors: market volatility and corrections, high management fees eating into returns, poor fund selection within your plan, over-concentration in stocks, or issues with target date funds. It&apos;s important to review your specific holdings and fee structure to identify the cause.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Should I be worried if my 401k is down?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Short-term losses are normal and usually temporary. However, if you&apos;re within 10 years of retirement, you should be more concerned about protecting your savings from major losses. Consider your time horizon, risk tolerance, and whether your current allocation is appropriate for your retirement timeline.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What should I do if my 401k is losing money?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        First, don&apos;t panic and avoid selling during a market dip. Review your asset allocation and fee structure. Consider rebalancing to match your risk tolerance. For those near retirement, diversifying into non-correlated assets like gold through a <Link href="/what-is-a-gold-ira" className="text-amber-400 hover:underline">Gold IRA rollover</Link> can provide protection against future market volatility.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How much should my 401k be down before I worry?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Historical bear markets have seen declines of 20-50%. A 10-20% decline is relatively normal during market corrections. However, the key factor is your timeline - if you&apos;re decades from retirement, you have time to recover. If you&apos;re within 5-10 years of retirement, even a 20% loss can significantly impact your retirement plans.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I protect my 401k from market crashes?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes. Strategies include: diversifying across asset classes, reducing stock exposure as you near retirement, maintaining some cash reserves, and considering alternative assets like gold that historically move opposite to stocks. You can also roll over a portion of your 401k into a Gold IRA for added diversification without tax penalties.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden not-prose border border-white/10">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <Clock className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Take Control of Your Retirement</h3>
                                <p className="mb-6 text-slate-300 max-w-xl mx-auto">Don&apos;t let market volatility derail your retirement plans. Learn how gold can provide the stability your portfolio needs.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <a
                                            href={getTrackedLink(AFFILIATE_LINKS.augusta, "why-401k-losing-money", "augusta")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Free Gold IRA Guide <ArrowRight className="ml-2 w-5 h-5" />
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/tools/401k-risk-analyzer">Analyze Your 401k Risk</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        trackSource="learn-why-401k-losing-money"
                        headline="Worried About Your 401k? Get Expert Guidance"
                        subheadline="Augusta Precious Metals can help you understand your options for protecting your retirement savings with a tax-free rollover to physical gold."
                    />
                </Container>
            </section>
        </main>
    );
}
