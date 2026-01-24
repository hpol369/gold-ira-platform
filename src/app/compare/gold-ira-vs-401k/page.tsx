import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, ShieldCheck, AlertTriangle, DollarSign, Lock, BarChart3 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA vs. 401(k): Which is Better for Retirement? (2026 Guide)",
    description: "Comparing Gold IRAs vs 401(k)s for retirement. Learn the tax benefits, risks, and why smart investors use both strategies to protect their wealth.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Asset Class", optionA: "Stocks, Mutual Funds (Paper)", optionB: "Physical Metals (Real)", winner: "B" },
    { feature: "Inflation Protection", optionA: "Low (Vulnerable to dollar devaluation)", optionB: "High (Proven historical hedge)", winner: "B" },
    { feature: "Employer Match", optionA: "Yes (Free money up to limits)", optionB: "No employer matching", winner: "A" },
    { feature: "Investment Control", optionA: "Limited to plan options", optionB: "Full control of specific assets", winner: "B" },
    { feature: "Contribution Limits (2026)", optionA: "$23,500 ($31,000 if 50+)", optionB: "$7,000 ($8,000 if 50+)", winner: "A" },
    { feature: "Market Crash Protection", optionA: "Fully exposed to volatility", optionB: "Often inversely correlated", winner: "B" },
    { feature: "Liquidity", optionA: "Limited until 59½", optionB: "Limited until 59½", winner: "Tie" },
    { feature: "Fees", optionA: "Low (0.1-0.5% typically)", optionB: "Higher ($150-300/year)", winner: "A" },
    { feature: "Tangible Ownership", optionA: "No (paper claims only)", optionB: "Yes (physical metals)", winner: "B" },
    { feature: "Counterparty Risk", optionA: "Higher (depends on markets)", optionB: "Lower (you own the asset)", winner: "B" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "what-is-401k", label: "What is a 401(k)?" },
    { id: "what-is-gold-ira", label: "What is a Gold IRA?" },
    { id: "key-differences", label: "Key Differences" },
    { id: "tax-implications", label: "Tax Implications" },
    { id: "can-i-have-both", label: "Can I Have Both?" },
    { id: "when-to-rollover", label: "When to Rollover" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA vs. 401(k): Which is Better for Retirement?",
            "description": "Comparing Gold IRAs vs 401(k)s for retirement. Learn the tax benefits, risks, and why smart investors use both strategies to protect their wealth.",
            "image": "https://richdadretirement.com/images/gold-ira-vs-401k-cover.jpg",
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
                    "name": "Should I move all my 401(k) to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most financial experts recommend allocating 10-20% of your retirement portfolio to precious metals—not 100%. Gold is excellent for protection and preservation, but stocks have historically provided higher long-term growth. A balanced approach gives you both growth potential and crash protection."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Gold IRA better than a 401(k)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Neither is universally 'better'—they serve different purposes. A 401(k) is better for accumulation (thanks to employer matching and high contribution limits). A Gold IRA is better for preservation (protecting against crashes and inflation). The ideal strategy uses both."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I roll over my 401(k) to a Gold IRA without penalties?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. A direct rollover from a 401(k) to a Gold IRA is 100% tax-free and penalty-free. The key is using a 'direct rollover' where funds transfer directly between custodians without you ever touching the money."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens to my 401(k) if the stock market crashes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your 401(k) balance falls with the market. In the 2008 financial crisis, the average 401(k) lost 31%. In contrast, gold rose 5% during the same period. This is why having some gold in your retirement portfolio can provide protection when stocks decline."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I have a Gold IRA if I still have a 401(k) at work?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! You can contribute to both a 401(k) and a Gold IRA in the same year (subject to contribution limits). You can also roll over 401(k)s from previous employers into a Gold IRA while maintaining your current employer's 401(k)."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraVs401kPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        The &quot;Rich Dad&quot; Showdown
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold IRA vs. 401(k)
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Should you stick with paper assets or diversify into real money? We compare the safety, risks, tax benefits, and long-term wealth-building potential of both retirement strategies.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <p className="lead">
                            Here&apos;s the question I get asked constantly: <em>&quot;My 401(k) is doing fine—why would I bother with gold?&quot;</em>
                        </p>
                        <p>
                            Fair question. Your 401(k) probably <em>is</em> doing fine. Right now. In a bull market. The real question is: what happens when it isn&apos;t? Because here&apos;s what most people don&apos;t think about until it&apos;s too late—your 401(k) is 100% dependent on the stock market. When it crashes, your retirement crashes with it. Gold doesn&apos;t work that way.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Strategic Combination (Use Both)"
                                summary="A 401(k) is unbeatable for wealth accumulation thanks to employer matching and high contribution limits. But a Gold IRA is superior for wealth preservation and protection against crashes. The wealthy don't choose—they use both."
                                bestFor="Investors who want to KEEP what they've earned, not just grow it."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Complete Side-by-Side Comparison</h2>
                            <p>
                                Here&apos;s how 401(k)s and Gold IRAs stack up across every important factor:
                            </p>
                            <ComparisonTable
                                optionAName="Traditional 401(k)"
                                optionBName="Gold IRA"
                                rows={comparisonRows}
                            />
                            <p className="text-sm text-slate-300 mt-4">
                                <strong>Key:</strong> Green highlighting indicates the better option for that category. &quot;Tie&quot; means both options are equivalent.
                            </p>
                        </section>

                        {/* What is a 401(k) */}
                        <section id="what-is-401k" className="scroll-mt-32">
                            <h2>What is a 401(k)?</h2>
                            <p>
                                You probably already know this one. It&apos;s that thing your employer offers where they take money out of your paycheck before taxes, and if you&apos;re lucky, they match some of your contributions. Named after some obscure tax code section, which tells you everything you need to know about how exciting it is.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                    <h4 className="font-bold text-green-700 mb-3">401(k) Advantages</h4>
                                    <ul className="space-y-2 text-sm text-green-600">
                                        <li>• <strong>Employer matching</strong> — Free money (typically 3-6% of salary)</li>
                                        <li>• <strong>High contribution limits</strong> — $23,500 in 2026</li>
                                        <li>• <strong>Pre-tax contributions</strong> — Immediate tax savings</li>
                                        <li>• <strong>Automatic payroll deduction</strong> — Easy and consistent</li>
                                        <li>• <strong>Low fees</strong> — Typically 0.1-0.5% annually</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                    <h4 className="font-bold text-red-700 mb-3">401(k) Disadvantages</h4>
                                    <ul className="space-y-2 text-sm text-red-600">
                                        <li>• <strong>Limited investment choices</strong> — Only plan-approved funds</li>
                                        <li>• <strong>No inflation protection</strong> — 100% paper assets</li>
                                        <li>• <strong>Market crash exposure</strong> — 2008 saw 30-40% losses</li>
                                        <li>• <strong>No tangible assets</strong> — Only paper claims</li>
                                        <li>• <strong>Required distributions</strong> — RMDs at age 73</li>
                                    </ul>
                                </div>
                            </div>

                            <h3>The 401(k) Problem: Paper Assets Only</h3>
                            <p>
                                The fundamental limitation of a 401(k) is that your money is locked into <strong>paper assets</strong>—stocks, bonds, and mutual funds. When the stock market crashes (like in 2008, 2020, or 2022), your retirement savings crash with it.
                            </p>
                            <p>
                                Many Americans approaching retirement in 2008 saw their 401(k) balances drop by 30-40%. Some had to delay retirement by years. Others never recovered.
                            </p>

                            <Callout type="warning" title="The Hidden Risk">
                                Your 401(k) is 100% exposed to stock market volatility. There&apos;s no way to hold physical gold, real estate, or other &quot;real assets&quot; that might protect you during a crash—unless you roll some of it into a Gold IRA.
                            </Callout>
                        </section>

                        {/* What is a Gold IRA */}
                        <section id="what-is-gold-ira" className="scroll-mt-32">
                            <h2>What is a Gold IRA?</h2>
                            <p>
                                A <strong>Gold IRA</strong> (Individual Retirement Account) is a self-directed retirement account that allows you to hold physical gold, silver, platinum, and palladium instead of—or in addition to—paper assets.
                            </p>
                            <p>
                                Unlike a 401(k) where your investment choices are limited to what your employer offers, a Gold IRA gives you <strong>full control</strong> over your specific holdings. You choose the exact coins and bars that go into your account.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                    <h4 className="font-bold text-green-700 mb-3">Gold IRA Advantages</h4>
                                    <ul className="space-y-2 text-sm text-green-600">
                                        <li>• <strong>Inflation hedge</strong> — Gold maintains purchasing power</li>
                                        <li>• <strong>Crash protection</strong> — Often rises when stocks fall</li>
                                        <li>• <strong>Tangible ownership</strong> — Real assets, not paper</li>
                                        <li>• <strong>No counterparty risk</strong> — You own the metal</li>
                                        <li>• <strong>Tax-free rollover</strong> — Move 401(k) funds penalty-free</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                    <h4 className="font-bold text-red-700 mb-3">Gold IRA Disadvantages</h4>
                                    <ul className="space-y-2 text-sm text-red-600">
                                        <li>• <strong>No employer matching</strong> — No free money</li>
                                        <li>• <strong>Lower contribution limits</strong> — $7,000-8,000</li>
                                        <li>• <strong>Higher fees</strong> — Storage and custodian costs</li>
                                        <li>• <strong>No dividends</strong> — Gold doesn&apos;t pay income</li>
                                        <li>• <strong>Price volatility</strong> — Short-term fluctuations</li>
                                    </ul>
                                </div>
                            </div>

                            <h3>The Gold Advantage: Real Money</h3>
                            <p>
                                Gold has been money for over 5,000 years. Unlike dollars—which have lost over 96% of their purchasing power since 1913—gold maintains its value across generations. An ounce of gold bought a fine suit in 1920, and it still buys a fine suit today.
                            </p>

                            <Callout type="tip" title="Rich Dad Philosophy">
                                &quot;Savers are losers. The dollar is designed to lose value over time. That&apos;s why the rich don&apos;t save dollars—they acquire assets that hold or increase in value. Gold is real money. Everything else is credit.&quot;
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Not Sure Which is Right for You?</h3>
                                <p className="mb-6 text-gray-200">Take our 60-second quiz to get a personalized recommendation based on your portfolio size and retirement goals.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Best Option <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Key Differences */}
                        <section id="key-differences" className="scroll-mt-32">
                            <h2>Key Differences: Gold IRA vs. 401(k)</h2>

                            <div className="not-prose space-y-6 my-8">
                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">1. Asset Type</h4>
                                        <p className="text-slate-300 mt-1"><strong>401(k):</strong> Holds paper assets (stocks, bonds, mutual funds). Your wealth exists as digital entries on a computer.</p>
                                        <p className="text-slate-300 mt-1"><strong>Gold IRA:</strong> Holds physical precious metals. Your wealth exists as tangible bars and coins in a secure vault.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">2. Market Correlation</h4>
                                        <p className="text-slate-300 mt-1"><strong>401(k):</strong> Fully correlated with stock market. When markets crash, your retirement crashes.</p>
                                        <p className="text-slate-300 mt-1"><strong>Gold IRA:</strong> Often inversely correlated. During the 2008 crash, stocks fell 37% while gold rose 5%.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">3. Contribution & Matching</h4>
                                        <p className="text-slate-300 mt-1"><strong>401(k):</strong> High limits ($23,500) plus employer matching. This &quot;free money&quot; is a major advantage.</p>
                                        <p className="text-slate-300 mt-1"><strong>Gold IRA:</strong> Lower limits ($7,000-8,000) with no employer matching. However, you can roll over unlimited amounts from existing accounts.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">4. Inflation Protection</h4>
                                        <p className="text-slate-300 mt-1"><strong>401(k):</strong> Minimal. Your gains may be offset by dollar devaluation.</p>
                                        <p className="text-slate-300 mt-1"><strong>Gold IRA:</strong> Strong. Gold has maintained purchasing power for thousands of years, regardless of currency policies.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">5. Control & Access</h4>
                                        <p className="text-slate-300 mt-1"><strong>401(k):</strong> Limited to plan options. You can&apos;t choose individual stocks or alternative assets.</p>
                                        <p className="text-slate-300 mt-1"><strong>Gold IRA:</strong> Full self-direction. You choose exactly which coins and bars to hold.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Tax Implications */}
                        <section id="tax-implications" className="scroll-mt-32">
                            <h2>Tax Implications: Gold IRA vs. 401(k)</h2>
                            <p>
                                Both 401(k)s and Gold IRAs offer tax advantages, but they work differently depending on whether you choose Traditional or Roth versions:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Tax Feature</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Traditional 401(k)/IRA</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Roth 401(k)/IRA</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Contributions</td>
                                            <td className="p-4">Pre-tax (reduces current taxable income)</td>
                                            <td className="p-4">After-tax (no immediate tax benefit)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Growth</td>
                                            <td className="p-4">Tax-deferred</td>
                                            <td className="p-4">Tax-free</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Withdrawals</td>
                                            <td className="p-4">Taxed as ordinary income</td>
                                            <td className="p-4">Tax-free (if qualified)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Best For</td>
                                            <td className="p-4">Those who expect lower taxes in retirement</td>
                                            <td className="p-4">Those who expect higher taxes later</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Tax-Free Rollover: 401(k) to Gold IRA</h3>
                            <p>
                                One of the biggest advantages of Gold IRAs is the ability to <strong>roll over existing 401(k) funds tax-free</strong>. This allows you to:
                            </p>
                            <ul>
                                <li>Move funds from an old employer&apos;s 401(k) without penalties</li>
                                <li>Convert paper profits into physical gold</li>
                                <li>Diversify without triggering a taxable event</li>
                                <li>Maintain your tax-advantaged retirement status</li>
                            </ul>
                            <p>
                                Learn more in our complete <Link href="/guide/401k-to-gold-rollover">401(k) to Gold rollover guide</Link>.
                            </p>
                        </section>

                        {/* Can I Have Both */}
                        <section id="can-i-have-both" className="scroll-mt-32">
                            <h2>Can I Have Both a 401(k) and a Gold IRA?</h2>
                            <p>
                                <strong>Yes, absolutely.</strong> In fact, this is the recommended strategy for comprehensive retirement protection.
                            </p>
                            <p>
                                The &quot;Rich Dad&quot; approach to retirement isn&apos;t about choosing one or the other—it&apos;s about using each tool for its intended purpose:
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-amber-400 text-lg mb-4">The Smart Strategy: Use Both</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</div>
                                        <div>
                                            <strong className="text-white">Max out your 401(k) employer match</strong>
                                            <p className="text-sm text-slate-300">This is free money—never leave it on the table. If your employer matches 50% up to 6%, contribute at least 6%.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</div>
                                        <div>
                                            <strong className="text-white">Allocate 10-20% of your portfolio to precious metals</strong>
                                            <p className="text-sm text-slate-300">Roll over a portion of an old 401(k), or make direct contributions to a Gold IRA for diversification.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</div>
                                        <div>
                                            <strong className="text-white">Increase gold allocation as you approach retirement</strong>
                                            <p className="text-sm text-slate-300">Younger investors can weather volatility; those nearing retirement need stability.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>
                                This balanced approach gives you the growth potential of stocks (401k) with the security of physical assets (Gold IRA). You get employer matching AND inflation protection.
                            </p>
                        </section>

                        {/* When to Rollover */}
                        <section id="when-to-rollover" className="scroll-mt-32">
                            <h2>When Should You Roll Over Your 401(k) to Gold?</h2>
                            <p>
                                A <strong>401(k) to Gold IRA rollover</strong> makes the most sense in these situations:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">You&apos;ve left your employer</h4>
                                        <p className="text-sm text-green-600 mt-1">Old 401(k)s sitting with former employers can be rolled over into a Gold IRA without any penalties or taxes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">You&apos;re nearing retirement</h4>
                                        <p className="text-sm text-green-600 mt-1">Within 10-15 years of retirement, reducing stock exposure and adding gold protection becomes more important.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">You&apos;re concerned about the economy</h4>
                                        <p className="text-sm text-green-600 mt-1">Rising inflation, national debt, or geopolitical tensions often drive investors toward the safety of gold.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-700">Your 401(k) has limited options</h4>
                                        <p className="text-sm text-green-600 mt-1">Some 401(k) plans offer terrible fund choices with high fees. A Gold IRA gives you better control.</p>
                                    </div>
                                </div>
                            </div>

                            <Callout type="info" title="Important Note">
                                You typically cannot roll over funds from your current employer&apos;s 401(k) while still employed (unless you&apos;re 59½ or older and the plan allows &quot;in-service distributions&quot;). However, you can roll over 401(k)s from previous employers at any time.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold IRA vs. 401(k) FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Should I move all my 401(k) to gold?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Most financial experts recommend allocating 10-20% of your retirement portfolio to precious metals—not 100%. Gold is excellent for protection and preservation, but stocks have historically provided higher long-term growth. A balanced approach gives you both growth potential and crash protection.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is a Gold IRA better than a 401(k)?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Neither is universally &quot;better&quot;—they serve different purposes. A 401(k) is better for accumulation (thanks to employer matching and high contribution limits). A Gold IRA is better for preservation (protecting against crashes and inflation). The ideal strategy uses both.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I roll over my 401(k) to a Gold IRA without penalties?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Yes. A direct rollover from a 401(k) to a Gold IRA is 100% tax-free and penalty-free. The key is using a &quot;direct rollover&quot; where funds transfer directly between custodians without you ever touching the money. See our <Link href="/guide/401k-to-gold-rollover" className="text-secondary hover:underline">rollover guide</Link> for details.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What happens to my 401(k) if the stock market crashes?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Your 401(k) balance falls with the market. In the 2008 financial crisis, the average 401(k) lost 31%. In contrast, gold rose 5% during the same period. This is why having some gold in your retirement portfolio can provide protection when stocks decline.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I have a Gold IRA if I still have a 401(k) at work?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Yes! You can contribute to both a 401(k) and a Gold IRA in the same year (subject to contribution limits). You can also roll over 401(k)s from previous employers into a Gold IRA while maintaining your current employer&apos;s 401(k).
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Diversify Your Retirement?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find out which gold IRA company is the best fit for your situation with our free, 60-second quiz.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/guide/401k-to-gold-rollover">Read the Rollover Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Related Comparisons */}
                        <section className="mt-12 not-prose">
                            <h3 className="text-lg font-bold text-amber-400 mb-4">More Comparisons</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link href="/compare/gold-ira-vs-roth-ira" className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-amber-500/50 transition-colors group">
                                    <span className="text-sm font-semibold text-slate-300 group-hover:text-amber-400">Gold IRA vs. Roth IRA →</span>
                                </Link>
                                <Link href="/compare/gold-ira-vs-physical-gold" className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-amber-500/50 transition-colors group">
                                    <span className="text-sm font-semibold text-slate-300 group-hover:text-amber-400">Gold IRA vs. Physical Gold →</span>
                                </Link>
                                <Link href="/compare/gold-ira-vs-gold-etf" className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-amber-500/50 transition-colors group">
                                    <span className="text-sm font-semibold text-slate-300 group-hover:text-amber-400">Gold IRA vs. Gold ETF →</span>
                                </Link>
                            </div>
                        </section>

                    </article>
                </div>
            </Container>
        </main>
    );
}
