import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, ShieldCheck, DollarSign, Clock, Scale } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA vs. Roth IRA: Which is Better for Your Retirement? (2026)",
    description: "Comparing Gold IRAs vs Roth IRAs for retirement. Learn the tax differences, contribution limits, and which is right for your financial goals.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Tax Treatment", optionA: "Tax-deferred OR tax-free (Traditional or Roth)", optionB: "Tax-free growth & withdrawals", winner: "Tie" },
    { feature: "Asset Type", optionA: "Physical precious metals", optionB: "Stocks, bonds, mutual funds", winner: "Tie" },
    { feature: "Inflation Protection", optionA: "High (gold maintains value)", optionB: "Dependent on investments", winner: "A" },
    { feature: "Growth Potential", optionA: "Moderate (gold appreciation)", optionB: "Higher (stock market growth)", winner: "B" },
    { feature: "Contribution Limits 2026", optionA: "$7,000 ($8,000 if 50+)", optionB: "$7,000 ($8,000 if 50+)", winner: "Tie" },
    { feature: "Income Limits", optionA: "None", optionB: "$161,000 single / $240,000 married", winner: "A" },
    { feature: "Market Crash Protection", optionA: "Strong (often inversely correlated)", optionB: "None (fully exposed)", winner: "A" },
    { feature: "Fees", optionA: "Higher ($200-350/year)", optionB: "Lower (expense ratios only)", winner: "B" },
    { feature: "Tangible Ownership", optionA: "Yes (physical metals)", optionB: "No (paper assets)", winner: "A" },
    { feature: "Liquidity", optionA: "Lower (must sell metals)", optionB: "Higher (instant trades)", winner: "B" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "what-is-gold-ira", label: "What is a Gold IRA?" },
    { id: "what-is-roth-ira", label: "What is a Roth IRA?" },
    { id: "key-differences", label: "Key Differences" },
    { id: "tax-comparison", label: "Tax Comparison" },
    { id: "which-to-choose", label: "Which Should You Choose?" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA vs. Roth IRA: Which is Better for Your Retirement?",
            "description": "Comparing Gold IRAs vs Roth IRAs for retirement. Learn the tax differences, contribution limits, and which is right for your financial goals.",
            "image": "https://richdadretirement.com/images/gold-ira-vs-roth-ira-cover.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-17",
            "dateModified": "2026-01-17"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I have both a Gold IRA and a Roth IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! You can contribute to both in the same year, subject to combined contribution limits. The total across all IRAs cannot exceed $7,000 ($8,000 if 50+) in 2026. Many investors split contributions between both types for diversification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is a Roth Gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A Roth Gold IRA combines the tax benefits of a Roth IRA with physical gold holdings. You contribute after-tax dollars, but all growth and withdrawals are tax-free. This is ideal if you expect gold to appreciate significantly—you'll never pay taxes on those gains."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I convert my Roth IRA to a Gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! You can transfer funds from a traditional Roth IRA (stocks) to a Roth Gold IRA (physical metals) tax-free. This is a direct transfer between custodians and maintains the Roth tax treatment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has better returns: Gold IRA or Roth IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Historically, stocks (Roth IRA) have provided higher average returns (~10%/year) than gold (~7-8%/year). However, gold provides better protection during crashes—it often rises when stocks fall. The 'best' depends on whether you prioritize growth or protection. Many investors use both."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraVsRothIraPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />
            {/* Header */}
            <header className="bg-slate-50 border-b border-slate-200 py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-[#B22234] mb-6">
                        Retirement Strategy Comparison
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold IRA vs. Roth IRA
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Tax-free growth with tangible assets OR tax-free growth with market exposure? We compare both retirement strategies to help you decide.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <p className="lead">
                            This comparison confuses a lot of people. They think it&apos;s either/or. It&apos;s not. A &quot;Gold IRA&quot; and a &quot;Roth IRA&quot; aren&apos;t mutually exclusive—you can actually have a <em>Roth Gold IRA</em> that combines both.
                        </p>

                        <p>
                            But I get why it&apos;s confusing. So let me break down what&apos;s actually being compared here: a Gold IRA holding physical metal versus a standard Roth IRA holding stocks and bonds. Different assets, same tax wrapper—or different tax wrappers entirely if you&apos;re comparing Traditional Gold IRA to Roth. Let&apos;s untangle this.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Depends on Your Goals (Consider Both)"
                                summary="Traditional Roth IRAs offer higher growth potential through stocks but are fully exposed to market crashes. Gold IRAs offer inflation protection and stability but may grow slower. A Roth Gold IRA gives you tax-free withdrawals on gold gains—the best of both worlds."
                                bestFor="Consider a Traditional Roth for growth + a Gold IRA for protection."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Complete Side-by-Side Comparison</h2>
                            <p>
                                Here&apos;s how Gold IRAs and Roth IRAs compare across key factors:
                            </p>
                            <ComparisonTable
                                optionAName="Gold IRA"
                                optionBName="Traditional Roth IRA"
                                rows={comparisonRows}
                            />
                            <p className="text-sm text-slate-600 mt-4">
                                Note: A &quot;Roth Gold IRA&quot; combines benefits of both—you hold physical gold with tax-free withdrawals.
                            </p>
                        </section>

                        {/* What is a Gold IRA */}
                        <section id="what-is-gold-ira" className="scroll-mt-32">
                            <h2>What is a Gold IRA?</h2>
                            <p>
                                A <strong>Gold IRA</strong> is a self-directed Individual Retirement Account that holds physical precious metals (gold, silver, platinum, or palladium) instead of traditional paper assets.
                            </p>
                            <p>
                                Gold IRAs come in two varieties:
                            </p>
                            <ul>
                                <li><strong>Traditional Gold IRA:</strong> Tax-deferred contributions; taxed on withdrawal</li>
                                <li><strong>Roth Gold IRA:</strong> After-tax contributions; tax-free withdrawals</li>
                            </ul>
                            <p>
                                Both types allow you to hold IRS-approved gold coins and bars in a secure, insured depository. Learn more in our <Link href="/guide/gold-ira-guide">complete Gold IRA guide</Link>.
                            </p>
                        </section>

                        {/* What is a Roth IRA */}
                        <section id="what-is-roth-ira" className="scroll-mt-32">
                            <h2>What is a Roth IRA?</h2>
                            <p>
                                A <strong>Roth IRA</strong> is a retirement account where you contribute after-tax dollars in exchange for tax-free growth and tax-free withdrawals in retirement.
                            </p>
                            <p>
                                Traditional Roth IRAs typically hold:
                            </p>
                            <ul>
                                <li>Individual stocks</li>
                                <li>Mutual funds and ETFs</li>
                                <li>Bonds and bond funds</li>
                                <li>Target-date retirement funds</li>
                            </ul>
                            <p>
                                The main advantage of a Roth is that qualified withdrawals are <strong>completely tax-free</strong>—you never pay taxes on the growth, no matter how much your investments appreciate.
                            </p>

                            <Callout type="tip" title="Did You Know?">
                                You can open a &quot;Roth Gold IRA&quot; that holds physical gold with tax-free withdrawals. This gives you inflation protection without the tax burden when you retire.
                            </Callout>
                        </section>

                        {/* Key Differences */}
                        <section id="key-differences" className="scroll-mt-32">
                            <h2>Key Differences: Gold IRA vs. Roth IRA</h2>

                            <div className="not-prose space-y-6 my-8">
                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center shrink-0">
                                        <Scale className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Asset Type</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold IRA:</strong> Holds physical gold, silver, platinum, and palladium bars and coins.</p>
                                        <p className="text-slate-600 mt-1"><strong>Roth IRA:</strong> Typically holds stocks, bonds, mutual funds, and ETFs (paper assets).</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Growth Potential</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold IRA:</strong> More modest appreciation. Gold averages 7-10% annually over long periods.</p>
                                        <p className="text-slate-600 mt-1"><strong>Roth IRA:</strong> Higher potential. S&P 500 has averaged ~10% annually historically.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Protection & Stability</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold IRA:</strong> Excellent crash protection. Gold often rises when stocks fall.</p>
                                        <p className="text-slate-600 mt-1"><strong>Roth IRA:</strong> Fully exposed to market volatility. Can lose 30-40% in crashes.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Income Limits</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold IRA:</strong> No income limits. Anyone can contribute regardless of earnings.</p>
                                        <p className="text-slate-600 mt-1"><strong>Roth IRA:</strong> Phase-out at $146,000-$161,000 (single) or $230,000-$240,000 (married).</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm border border-slate-200">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#B22234] text-lg">Required Minimum Distributions</h4>
                                        <p className="text-slate-600 mt-1"><strong>Gold IRA (Traditional):</strong> RMDs required starting at age 73.</p>
                                        <p className="text-slate-600 mt-1"><strong>Roth IRA:</strong> No RMDs during your lifetime—leave to heirs tax-free.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-[#000080] rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Find Your Ideal Gold IRA Company</h3>
                                <p className="mb-6 text-slate-600">Take our 60-second quiz to get matched with the best company for your situation.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Tax Comparison */}
                        <section id="tax-comparison" className="scroll-mt-32">
                            <h2>Tax Comparison: Gold IRA vs. Roth IRA</h2>
                            <p>
                                Understanding the <strong>tax implications</strong> is crucial for making the right choice:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-xl border border-slate-200">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Tax Feature</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Traditional Gold IRA</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Roth Gold IRA</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Roth IRA (Stocks)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-600">
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-900">Contributions</td>
                                            <td className="p-4">Pre-tax (deductible)</td>
                                            <td className="p-4">After-tax</td>
                                            <td className="p-4">After-tax</td>
                                        </tr>
                                        <tr className="bg-white/5">
                                            <td className="p-4 font-semibold">Growth</td>
                                            <td className="p-4">Tax-deferred</td>
                                            <td className="p-4">Tax-free</td>
                                            <td className="p-4">Tax-free</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Withdrawals</td>
                                            <td className="p-4">Taxed as income</td>
                                            <td className="p-4">Tax-free</td>
                                            <td className="p-4">Tax-free</td>
                                        </tr>
                                        <tr className="bg-white/5">
                                            <td className="p-4 font-semibold">Best If</td>
                                            <td className="p-4">Lower tax bracket in retirement</td>
                                            <td className="p-4">Expect gold to appreciate significantly</td>
                                            <td className="p-4">Higher tax bracket in retirement</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>The Roth Gold IRA Advantage</h3>
                            <p>
                                A <strong>Roth Gold IRA</strong> offers a unique benefit: if gold prices increase substantially, you pay zero taxes on those gains. Consider this scenario:
                            </p>
                            <ul>
                                <li>You contribute $50,000 (after-tax) to a Roth Gold IRA</li>
                                <li>Over 20 years, gold triples in value</li>
                                <li>Your account is now worth $150,000</li>
                                <li>You withdraw it all—<strong>100% tax-free</strong></li>
                            </ul>
                            <p>
                                In a Traditional Gold IRA, you&apos;d owe income taxes on that $150,000 withdrawal. The Roth structure can save tens of thousands in taxes.
                            </p>
                        </section>

                        {/* Which to Choose */}
                        <section id="which-to-choose" className="scroll-mt-32">
                            <h2>Which Should You Choose?</h2>
                            <p>
                                The best choice depends on your goals, timeline, and risk tolerance:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <ShieldCheck className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-400">Choose a Gold IRA if...</h4>
                                        <ul className="text-sm text-green-300 mt-2 space-y-1">
                                            <li>• You&apos;re concerned about inflation eating your savings</li>
                                            <li>• You want protection against stock market crashes</li>
                                            <li>• You&apos;re nearing retirement and need stability</li>
                                            <li>• You exceed Roth income limits</li>
                                            <li>• You believe in holding tangible assets</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <TrendingUp className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-blue-400">Choose a Traditional Roth IRA if...</h4>
                                        <ul className="text-sm text-blue-300 mt-2 space-y-1">
                                            <li>• You have 20+ years until retirement</li>
                                            <li>• You want maximum growth potential</li>
                                            <li>• You can tolerate significant volatility</li>
                                            <li>• You prefer simple, low-maintenance investing</li>
                                            <li>• You want to avoid Required Minimum Distributions</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                                    <Scale className="w-6 h-6 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#B22234]">Consider Both if...</h4>
                                        <ul className="text-sm text-slate-600 mt-2 space-y-1">
                                            <li>• You want diversification across asset types</li>
                                            <li>• You believe in the &quot;don&apos;t put all eggs in one basket&quot; approach</li>
                                            <li>• You want growth potential WITH crash protection</li>
                                            <li>• You&apos;re following the &quot;Rich Dad&quot; philosophy of real vs. paper assets</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Callout type="tip" title="The Balanced Approach">
                                Many financial advisors recommend keeping 10-20% of your retirement in precious metals (Gold IRA) with the remainder in growth assets (Roth IRA in stocks). This provides both upside potential and downside protection.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold IRA vs. Roth IRA FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Can I have both a Gold IRA and a Roth IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes! You can contribute to both in the same year, subject to combined contribution limits. The total across all IRAs cannot exceed $7,000 ($8,000 if 50+) in 2026. Many investors split contributions between both types for diversification.
                                    </p>
                                </details>

                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What is a Roth Gold IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        A Roth Gold IRA combines the tax benefits of a Roth IRA with physical gold holdings. You contribute after-tax dollars, but all growth and withdrawals are tax-free. This is ideal if you expect gold to appreciate significantly—you&apos;ll never pay taxes on those gains.
                                    </p>
                                </details>

                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Can I convert my Roth IRA to a Gold IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes! You can transfer funds from a traditional Roth IRA (stocks) to a Roth Gold IRA (physical metals) tax-free. This is a direct transfer between custodians and maintains the Roth tax treatment. Contact a <Link href="/reviews" className="text-[#B22234] hover:underline">reputable gold IRA company</Link> to facilitate the transfer.
                                    </p>
                                </details>

                                <details className="group bg-white shadow-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Which has better returns: Gold IRA or Roth IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-[#B22234]/10 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Historically, stocks (Roth IRA) have provided higher average returns (~10%/year) than gold (~7-8%/year). However, gold provides better protection during crashes—it often rises when stocks fall. The &quot;best&quot; depends on whether you prioritize growth or protection. Many investors use both.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-slate-900 relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900">Ready to Explore Gold IRAs?</h3>
                                <p className="mb-6 text-slate-600 max-w-xl mx-auto">Find the best gold IRA company for your retirement strategy with our free quiz.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-slate-300 text-slate-900 hover:bg-slate-100">
                                        <Link href="/guide/gold-ira-guide">Read the Full Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </Container>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Ready to Explore a Roth Gold IRA?"
                        subheadline="Get your free guide and learn about tax-free gold investing with Augusta."
                        trackSource="compare-gold-ira-vs-roth-ira"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
