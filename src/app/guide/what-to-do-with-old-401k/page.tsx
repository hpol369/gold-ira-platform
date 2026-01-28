import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, DollarSign, Building2, Coins, RefreshCw } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "What to Do with an Old 401(k): 5 Options for 2026",
    description: "Left a job with a 401(k)? Learn your 5 options: leave it, rollover to new employer, IRA, cash out, or Gold IRA conversion.",
    openGraph: {
        title: "What to Do with an Old 401(k): Your Complete Options Guide",
        description: "Discover the best options for your old 401(k) from a previous employer. Compare rollovers, cashouts, and Gold IRA conversions.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const tocItems = [
    { id: "overview", label: "Your Old 401(k) Options" },
    { id: "leave-it", label: "Option 1: Leave It" },
    { id: "rollover-new", label: "Option 2: New Employer" },
    { id: "rollover-ira", label: "Option 3: Traditional IRA" },
    { id: "cash-out", label: "Option 4: Cash Out" },
    { id: "gold-ira", label: "Option 5: Gold IRA" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "how-to", label: "How to Rollover" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "HowTo",
            "name": "What to Do with an Old 401(k)",
            "description": "A guide to your options when you have a 401(k) from a previous employer",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Evaluate Your Options",
                    "text": "Review the 5 main options: leave it, rollover to new employer, rollover to IRA, cash out, or convert to Gold IRA"
                },
                {
                    "@type": "HowToStep",
                    "name": "Consider Your Goals",
                    "text": "Think about your retirement timeline, risk tolerance, and desire for diversification"
                },
                {
                    "@type": "HowToStep",
                    "name": "Initiate a Direct Rollover",
                    "text": "If moving funds, request a direct trustee-to-trustee transfer to avoid taxes and penalties"
                },
                {
                    "@type": "HowToStep",
                    "name": "Complete the Process",
                    "text": "Work with your new custodian to ensure funds are properly transferred and invested"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are my options for an old 401(k)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You have 5 main options: 1) Leave it with your old employer, 2) Roll it over to your new employer's 401(k), 3) Roll it over to a traditional IRA, 4) Cash it out (not recommended), or 5) Roll it over to a Gold IRA for precious metals diversification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I rollover my old 401(k) to a Gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! You can rollover funds from an old 401(k) to a Gold IRA completely tax-free and penalty-free using a direct rollover. This allows you to convert paper assets into physical gold and silver while maintaining tax-advantaged status."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens if I do nothing with my old 401(k)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you do nothing, your money stays invested in your old employer's plan. However, you may have limited investment options, higher fees, and difficulty managing multiple accounts. For balances under $5,000, some employers may force a distribution."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long do I have to rollover my 401(k) after leaving a job?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There's no deadline for a direct rollover. However, if you receive the funds personally (indirect rollover), you have 60 days to deposit them into a new retirement account to avoid taxes and penalties. For simplicity and safety, always choose a direct trustee-to-trustee transfer."
                    }
                }
            ]
        }
    ]
};

export default function WhatToDoWithOld401kPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-100 text-[#000080] py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-1.5 text-sm font-semibold text-[#B22234] mb-6 border border-slate-200">
                            <span className="w-2 h-2 rounded-full bg-[#B22234]"></span>
                            Updated for 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-[#000080]">
                            What to Do with an Old 401(k)
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            Left a job and wondering what to do with your old retirement account? Here are your 5 options—including one most people don&apos;t know about.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar (TOC) */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none">
                        <Breadcrumbs />

                        {/* Intro */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead text-xl text-slate-600">
                                If you&apos;ve changed jobs, you probably have a <strong className="text-[#000080]">401(k) from your old employer</strong> sitting somewhere. You&apos;re not alone—Americans have left behind over $1.35 trillion in forgotten 401(k)s.
                            </p>
                            <p>
                                What you do with that money matters. The wrong choice could cost you thousands in fees and taxes. The right choice could protect and grow your retirement savings for decades.
                            </p>
                            <p>
                                Here are your <strong className="text-[#000080]">5 options</strong> for an old 401(k):
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose my-8">
                                <div className="p-4 bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 text-center">
                                    <div className="text-2xl font-bold text-[#000080] mb-1">1</div>
                                    <div className="text-sm font-medium text-slate-600">Leave It</div>
                                </div>
                                <div className="p-4 bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 text-center">
                                    <div className="text-2xl font-bold text-[#000080] mb-1">2</div>
                                    <div className="text-sm font-medium text-slate-600">New Employer 401(k)</div>
                                </div>
                                <div className="p-4 bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 text-center">
                                    <div className="text-2xl font-bold text-[#000080] mb-1">3</div>
                                    <div className="text-sm font-medium text-slate-600">Traditional IRA</div>
                                </div>
                                <div className="p-4 bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 text-center">
                                    <div className="text-2xl font-bold text-[#000080] mb-1">4</div>
                                    <div className="text-sm font-medium text-slate-600">Cash Out</div>
                                </div>
                                <div className="p-4 bg-[#B22234]/10 rounded-xl border border-secondary/20 text-center">
                                    <div className="text-2xl font-bold text-[#B22234] mb-1">5</div>
                                    <div className="text-sm font-medium text-[#B22234]">Gold IRA</div>
                                </div>
                            </div>
                        </section>

                        {/* Option 1: Leave It */}
                        <section id="leave-it" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-700/50 rounded-lg text-slate-600">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Option 1: Leave It Where It Is</h2>
                            </div>
                            <p>
                                You can simply leave your 401(k) with your former employer. The money stays invested and continues to grow tax-deferred.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Pros
                                    </h4>
                                    <ul className="text-sm text-green-300 space-y-1">
                                        <li>* No action required</li>
                                        <li>* Money keeps growing tax-deferred</li>
                                        <li>* May have good investment options</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                                    <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                                        <XCircle className="w-5 h-5" /> Cons
                                    </h4>
                                    <ul className="text-sm text-red-300 space-y-1">
                                        <li>* Can&apos;t contribute more</li>
                                        <li>* Limited investment options</li>
                                        <li>* Harder to track multiple accounts</li>
                                        <li>* May have higher fees</li>
                                    </ul>
                                </div>
                            </div>

                            <Callout type="warning" title="Watch Out for Small Balances">
                                If your balance is under $5,000, your old employer may force you out of the plan. Balances under $1,000 can even be cashed out automatically (with taxes withheld). Check your plan documents.
                            </Callout>
                        </section>

                        {/* Option 2: Roll to New Employer */}
                        <section id="rollover-new" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <RefreshCw className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Option 2: Roll to New Employer&apos;s 401(k)</h2>
                            </div>
                            <p>
                                If your new employer offers a 401(k) that accepts rollovers, you can consolidate your old account into your new one.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Pros
                                    </h4>
                                    <ul className="text-sm text-green-300 space-y-1">
                                        <li>* Consolidates accounts in one place</li>
                                        <li>* Continues tax-deferred growth</li>
                                        <li>* Can still contribute to it</li>
                                        <li>* May have loan options</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                                    <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                                        <XCircle className="w-5 h-5" /> Cons
                                    </h4>
                                    <ul className="text-sm text-red-300 space-y-1">
                                        <li>* Limited to plan&apos;s investment options</li>
                                        <li>* No gold or precious metals allowed</li>
                                        <li>* Still stuck with stocks/bonds/funds</li>
                                        <li>* New employer must accept rollovers</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Option 3: Traditional IRA */}
                        <section id="rollover-ira" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Option 3: Roll to a Traditional IRA</h2>
                            </div>
                            <p>
                                Rolling to a traditional IRA at a brokerage (Fidelity, Schwab, Vanguard, etc.) gives you more control and investment options than most 401(k) plans.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Pros
                                    </h4>
                                    <ul className="text-sm text-green-300 space-y-1">
                                        <li>* Thousands of investment options</li>
                                        <li>* Often lower fees than 401(k)</li>
                                        <li>* Full control over investments</li>
                                        <li>* Easy to manage online</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                                    <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                                        <XCircle className="w-5 h-5" /> Cons
                                    </h4>
                                    <ul className="text-sm text-red-300 space-y-1">
                                        <li>* No employer matching</li>
                                        <li>* Lower contribution limits than 401(k)</li>
                                        <li>* Still limited to paper assets (stocks, bonds, ETFs)</li>
                                        <li>* No physical gold allowed</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Option 4: Cash Out */}
                        <section id="cash-out" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Option 4: Cash It Out (Not Recommended)</h2>
                            </div>
                            <p>
                                You can withdraw your 401(k) as cash. But this is almost always a <strong className="text-[#000080]">terrible idea</strong>.
                            </p>

                            <div className="bg-red-500/10 border-2 border-red-500/20 rounded-xl p-6 not-prose my-6">
                                <h4 className="font-bold text-red-400 mb-4">The True Cost of Cashing Out</h4>
                                <p className="text-red-300 mb-4">If you cash out a $50,000 401(k) before age 59½:</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between p-2 bg-slate-100 rounded">
                                        <span className="text-slate-600">Federal income tax (24% bracket)</span>
                                        <span className="text-red-400 font-bold">-$12,000</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-slate-100 rounded">
                                        <span className="text-slate-600">Early withdrawal penalty (10%)</span>
                                        <span className="text-red-400 font-bold">-$5,000</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-slate-100 rounded">
                                        <span className="text-slate-600">State income tax (~5%)</span>
                                        <span className="text-red-400 font-bold">-$2,500</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-red-500/20 rounded font-bold">
                                        <span className="text-[#000080]">You actually receive</span>
                                        <span className="text-red-300">$30,500</span>
                                    </div>
                                </div>
                                <p className="text-red-400 text-sm mt-4">You lose nearly 40% immediately—plus decades of tax-deferred growth.</p>
                            </div>

                            <p>
                                The only time cashing out might make sense is for a true emergency when all other options are exhausted. Even then, a 401(k) loan or hardship withdrawal is usually better.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-[#000080] text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Considering a Gold IRA Rollover?</h3>
                                <p className="mb-6 text-gray-200">Find out which gold company is the best match for your old 401(k).</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the 60-Second Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Option 5: Gold IRA */}
                        <section id="gold-ira" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Option 5: Roll to a Gold IRA</h2>
                            </div>
                            <p>
                                Most people don&apos;t know this option exists: You can roll your old 401(k) into a <strong className="text-[#000080]">Gold IRA</strong>—a self-directed IRA that holds physical gold, silver, platinum, and palladium instead of paper assets.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Pros
                                    </h4>
                                    <ul className="text-sm text-green-300 space-y-1">
                                        <li>* Own real, physical gold</li>
                                        <li>* Diversify away from stocks</li>
                                        <li>* Protection against crashes & inflation</li>
                                        <li>* Same tax advantages as traditional IRA</li>
                                        <li>* 100% tax-free rollover</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                                    <h4 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" /> Considerations
                                    </h4>
                                    <ul className="text-sm text-amber-300 space-y-1">
                                        <li>* Annual storage fees (~$100-300)</li>
                                        <li>* Must use IRS-approved custodian</li>
                                        <li>* Can&apos;t store at home (IRS rules)</li>
                                        <li>* Best for 10-20% of portfolio</li>
                                    </ul>
                                </div>
                            </div>

                            <Callout type="tip" title="Why Consider a Gold IRA?">
                                If your current 401(k) is 100% stocks and bonds, you&apos;re fully exposed to market crashes. Gold has historically risen when stocks fall. Adding gold to your retirement portfolio provides genuine diversification—not just different stocks, but a completely different asset class.
                            </Callout>

                            <p>
                                Learn more about how Gold IRAs work in our <Link href="/what-is-a-gold-ira">complete Gold IRA guide</Link>.
                            </p>
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Side-by-Side Comparison</h2>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Option</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Tax Impact</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Investment Options</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-600">
                                        <tr>
                                            <td className="p-4 font-medium text-[#000080]">Leave It</td>
                                            <td className="p-4 text-green-400">None</td>
                                            <td className="p-4">Limited to plan options</td>
                                            <td className="p-4">Happy with current investments</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-[#000080]">New Employer 401(k)</td>
                                            <td className="p-4 text-green-400">None (direct rollover)</td>
                                            <td className="p-4">Limited to plan options</td>
                                            <td className="p-4">Consolidation, simplicity</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-[#000080]">Traditional IRA</td>
                                            <td className="p-4 text-green-400">None (direct rollover)</td>
                                            <td className="p-4">Stocks, bonds, ETFs, mutual funds</td>
                                            <td className="p-4">More control, lower fees</td>
                                        </tr>
                                        <tr className="bg-red-500/10">
                                            <td className="p-4 font-medium text-red-400">Cash Out</td>
                                            <td className="p-4 text-red-400">Taxes + 10% penalty</td>
                                            <td className="p-4">N/A (liquidated)</td>
                                            <td className="p-4">Emergencies only</td>
                                        </tr>
                                        <tr className="bg-amber-500/10">
                                            <td className="p-4 font-medium text-amber-400">Gold IRA</td>
                                            <td className="p-4 text-green-400">None (direct rollover)</td>
                                            <td className="p-4">Physical gold, silver, platinum, palladium</td>
                                            <td className="p-4">Diversification, crash protection</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* How to Rollover */}
                        <section id="how-to" className="scroll-mt-32">
                            <h2>How to Rollover Your Old 401(k)</h2>
                            <p>
                                The rollover process is straightforward, but it&apos;s critical to do it correctly to avoid taxes and penalties:
                            </p>

                            <div className="space-y-4 not-prose my-8">
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Choose Your Destination</h4>
                                        <p className="text-sm text-slate-600 mt-1">Decide whether you want a traditional IRA, new employer 401(k), or Gold IRA. For Gold IRAs, <Link href="/quiz" className="text-[#B22234] hover:underline">take our quiz</Link> to find the best company.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Open Your New Account</h4>
                                        <p className="text-sm text-slate-600 mt-1">Set up your new IRA or 401(k). For Gold IRAs, your chosen company will guide you through this process.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Request a Direct Rollover</h4>
                                        <p className="text-sm text-slate-600 mt-1"><strong className="text-[#000080]">Critical:</strong> Request a &quot;direct&quot; or &quot;trustee-to-trustee&quot; transfer. This sends funds directly to your new account without you touching the money—avoiding taxes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold flex-shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Complete the Transfer</h4>
                                        <p className="text-sm text-slate-600 mt-1">Your new custodian will coordinate with your old plan. The process typically takes 2-4 weeks. For Gold IRAs, you&apos;ll then select your precious metals.</p>
                                    </div>
                                </div>
                            </div>

                            <Callout type="warning" title="Avoid the 60-Day Rule Trap">
                                If you receive a check made out to YOU (indirect rollover), you have only 60 days to deposit it into a new retirement account. Miss this deadline and the entire amount becomes taxable income plus a 10% penalty if you&apos;re under 59½. Always request a direct rollover to avoid this risk.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What are my options for an old 401(k)?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        You have 5 main options: 1) Leave it with your old employer, 2) Roll it over to your new employer&apos;s 401(k), 3) Roll it over to a traditional IRA, 4) Cash it out (not recommended), or 5) Roll it over to a <Link href="/what-is-a-gold-ira" className="text-[#B22234] hover:underline">Gold IRA</Link> for precious metals diversification.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Can I rollover my old 401(k) to a Gold IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes! You can rollover funds from an old 401(k) to a Gold IRA completely tax-free and penalty-free using a direct rollover. This allows you to convert paper assets into physical gold and silver while maintaining tax-advantaged status. See our <Link href="/guide/401k-to-gold-rollover" className="text-[#B22234] hover:underline">401(k) to Gold IRA rollover guide</Link> for details.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What happens if I do nothing with my old 401(k)?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        If you do nothing, your money stays invested in your old employer&apos;s plan. However, you may have limited investment options, higher fees, and difficulty managing multiple accounts. For balances under $5,000, some employers may force a distribution.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">How long do I have to rollover my 401(k)?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        There&apos;s no deadline for a direct rollover. However, if you receive the funds personally (indirect rollover), you have 60 days to deposit them into a new retirement account to avoid taxes and penalties. For simplicity and safety, always choose a direct trustee-to-trustee transfer.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#000080] relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#000080]">Ready to Put Your Old 401(k) to Work?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find out if a Gold IRA rollover is right for your retirement goals.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-[#000080] hover:bg-slate-200">
                                        <Link href="/guide/401k-to-gold-rollover">Learn About Rollovers</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-what-to-do-with-old-401k" />
                </Container>
            </section>
        </main>
    );
}
