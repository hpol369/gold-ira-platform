import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, ShieldCheck, AlertTriangle, Clock, FileText, Building2, Lock, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "401k to Gold IRA Rollover Guide 2026: Tax-Free Transfer Steps",
    description: "Complete 401k to gold IRA rollover guide for 2026. Learn how to transfer your retirement funds to physical gold tax-free. Step-by-step instructions and rules.",
};

const tocItems = [
    { id: "what-is-rollover", label: "What is a 401k Rollover?" },
    { id: "rollover-types", label: "Direct vs. Indirect Rollover" },
    { id: "eligibility", label: "Eligibility Requirements" },
    { id: "step-by-step", label: "Step-by-Step Process" },
    { id: "tax-rules", label: "Tax Rules & Penalties" },
    { id: "timeline", label: "Timeline & Process" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "other-accounts", label: "403(b) & TSP Rollovers" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "401(k) to Gold IRA Rollover Guide 2026",
            "description": "Complete 401k to gold IRA rollover guide for 2026. Learn how to transfer your retirement funds to physical gold tax-free. Step-by-step instructions and rules.",
            "image": "https://richdadretirement.com/images/rollover-guide-cover.jpg", // Placeholder
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
            "datePublished": "2026-01-14",
            "dateModified": "2026-01-14"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I rollover my 401(k) while still employed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your plan and age. Most plans allow 'in-service distributions' once you reach 59½. Some plans allow them earlier. Check with your HR department or plan administrator. If your current plan doesn't allow it, you can roll over 401(k)s from previous employers at any time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will I pay taxes on a 401(k) to gold IRA rollover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, a direct rollover from a traditional 401(k) to a traditional gold IRA is completely tax-free. You're simply moving retirement funds between qualified accounts. However, if you convert to a Roth gold IRA, you'll owe taxes on the converted amount."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much of my 401(k) should I roll into gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most financial advisors recommend allocating 10-20% of your retirement portfolio to precious metals. This provides meaningful protection without over-concentrating in a single asset class. You can roll over a portion of your 401(k) to gold while leaving the rest in traditional investments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I roll over a Roth 401(k) to a gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! A Roth 401(k) can be rolled over to a Roth gold IRA, and a traditional 401(k) can be rolled over to a traditional gold IRA—both tax-free. You can also convert a traditional 401(k) to a Roth gold IRA, but you'll owe taxes on the conversion."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's the minimum amount I can roll over?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There's no IRS minimum, but gold IRA companies have their own minimums. Noble Gold accepts as little as $2,000. Goldco starts at $25,000. Augusta Precious Metals requires $50,000+. Choose a company based on your investment amount."
                    }
                }
            ]
        }
    ]
};

export default function RolloverGuidePage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Updated for 2026 IRS Rules
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            401(k) to Gold IRA Rollover Guide 2026
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            How to transfer your 401(k) to physical gold without paying taxes or penalties. Complete step-by-step instructions.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary max-w-none">

                        {/* Intro Content */}
                        <p className="lead text-xl text-slate-400">
                            Thinking about moving your 401(k) into gold? You&apos;re not alone. With economic uncertainty and inflation concerns, millions of Americans are converting paper retirement assets into physical precious metals. This <strong>401(k) to gold IRA rollover guide</strong> shows you exactly how to do it—tax-free and penalty-free.
                        </p>

                        <p>
                            A <strong>gold IRA rollover</strong> allows you to transfer funds from an existing 401(k), 403(b), TSP, or IRA into a self-directed IRA that holds physical gold and other precious metals. When done correctly, this transfer is completely tax-free.
                        </p>

                        <Callout type="tip" title="Key Insight">
                            Most people don&apos;t realize they can move their 401(k) to gold while still employed—if they&apos;re over 59½ or their plan allows &quot;in-service distributions.&quot; You don&apos;t have to wait until you leave your job.
                        </Callout>

                        {/* Section 1: What is a Rollover */}
                        <section id="what-is-rollover" className="scroll-mt-32">
                            <h2 className="text-white">What is a 401(k) to Gold IRA Rollover?</h2>
                            <p>
                                A <strong>401(k) to gold IRA rollover</strong> is the process of transferring retirement funds from a traditional 401(k) (or similar employer-sponsored plan) into a self-directed IRA that can hold physical precious metals.
                            </p>
                            <p>
                                This process is governed by IRS rules and, when executed properly, allows you to:
                            </p>
                            <ul>
                                <li>Move funds without paying income taxes</li>
                                <li>Avoid the 10% early withdrawal penalty</li>
                                <li>Convert paper assets into physical gold, silver, platinum, or palladium</li>
                                <li>Maintain the tax-advantaged status of your retirement savings</li>
                            </ul>

                            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Accounts You Can Roll Over:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300"><strong>401(k)</strong> — Traditional and Roth employer plans</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300"><strong>403(b)</strong> — Non-profit and education sector plans</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300"><strong>457(b)</strong> — Government employee plans</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300"><strong>TSP</strong> — Thrift Savings Plan (federal employees)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300"><strong>Traditional IRA</strong> — Personal retirement accounts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300"><strong>SEP IRA</strong> — Self-employed retirement plans</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300"><strong>SIMPLE IRA</strong> — Small business plans (after 2 years)</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2: Direct vs Indirect */}
                        <section id="rollover-types" className="scroll-mt-32">
                            <h2 className="text-white">Direct vs. Indirect Rollover: Which to Choose</h2>
                            <p>
                                Understanding the difference between <strong>direct and indirect rollovers</strong> is crucial. One is simple and risk-free; the other can trigger unexpected taxes.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Factor</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Direct Rollover</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Indirect Rollover</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">How It Works</td>
                                            <td className="p-4">Funds transfer directly between custodians</td>
                                            <td className="p-4">Check sent to you; you deposit in new IRA</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Tax Withholding</td>
                                            <td className="p-4">None</td>
                                            <td className="p-4">20% mandatory withholding</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Time Limit</td>
                                            <td className="p-4">None</td>
                                            <td className="p-4">60 days to complete</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Risk Level</td>
                                            <td className="p-4 text-green-400 font-medium">Low</td>
                                            <td className="p-4 text-red-400 font-medium">High</td>
                                        </tr>
                                        <tr className="bg-secondary/10">
                                            <td className="p-4 font-bold text-white">Recommendation</td>
                                            <td className="p-4 font-bold text-green-400">✓ Always choose this</td>
                                            <td className="p-4 font-bold text-red-400">✗ Avoid if possible</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-white">Why Direct Rollover is Better</h3>
                            <p>
                                With a <strong>direct rollover</strong> (also called a trustee-to-trustee transfer), your old custodian sends funds directly to your new gold IRA custodian. You never touch the money, so:
                            </p>
                            <ul>
                                <li>No tax withholding occurs</li>
                                <li>No 60-day deadline to worry about</li>
                                <li>No risk of accidentally triggering a taxable distribution</li>
                                <li>Unlimited rollovers per year (indirect is limited to one)</li>
                            </ul>

                            <Callout type="warning" title="Indirect Rollover Warning">
                                With an indirect rollover, your old plan must withhold 20% for taxes—even if you plan to complete the rollover. To deposit the full amount, you&apos;d need to come up with that 20% from other sources. Miss the 60-day deadline, and the entire amount becomes taxable income plus a 10% penalty if you&apos;re under 59½.
                            </Callout>
                        </section>

                        {/* Section 3: Eligibility */}
                        <section id="eligibility" className="scroll-mt-32">
                            <h2 className="text-white">Eligibility Requirements</h2>
                            <p>
                                Not everyone can roll over their 401(k) at any time. Your <strong>eligibility for a gold IRA rollover</strong> depends on your employment status and plan rules:
                            </p>

                            <div className="not-prose my-8">
                                <div className="space-y-4">
                                    <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold shrink-0">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <strong className="block text-white text-lg">Left Your Employer</strong>
                                            <p className="text-slate-400 mt-1">If you&apos;ve quit, retired, or been laid off, you have full control over your 401(k) and can roll it over to a gold IRA at any time. This is the most common scenario.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold shrink-0">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <strong className="block text-white text-lg">Age 59½ or Older (Still Employed)</strong>
                                            <p className="text-slate-400 mt-1">Most 401(k) plans allow &quot;in-service distributions&quot; once you reach 59½, even if you&apos;re still working. Check with your HR department or plan administrator.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                                            <AlertTriangle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <strong className="block text-white text-lg">Under 59½ and Still Employed</strong>
                                            <p className="text-slate-400 mt-1">This is the trickiest scenario. Some plans allow in-service withdrawals; many don&apos;t. You&apos;ll need to check your specific plan rules. Even if rollovers aren&apos;t allowed, you can still roll over when you eventually leave.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-white">What About Old 401(k)s From Previous Jobs?</h3>
                            <p>
                                If you have 401(k) accounts from previous employers, you can roll them over at any time. Many people have forgotten 401(k)s sitting with old employers—these are excellent candidates for gold IRA rollovers.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Roll Over Your 401(k)?</h3>
                                <p className="mb-6 text-gray-200">Find out which gold IRA company can handle your rollover with the lowest fees and best service.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Best Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Section 4: Step-by-Step */}
                        <section id="step-by-step" className="scroll-mt-32">
                            <h2 className="text-white">Step-by-Step: How to Roll Over Your 401(k) to Gold</h2>
                            <p>
                                Here&apos;s the complete process for executing a <strong>401(k) to gold IRA rollover</strong>:
                            </p>

                            <div className="not-prose my-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Choose a Gold IRA Company</h4>
                                            <p className="text-slate-400 mt-1">Select a reputable precious metals dealer to guide you through the process. They&apos;ll handle most of the paperwork. Top choices include <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> (best for $50k+) and <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> (best for smaller rollovers).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Open a Self-Directed IRA</h4>
                                            <p className="text-slate-400 mt-1">Your gold IRA company will help you open an account with an IRS-approved custodian. This typically involves completing an application and providing identification. Most companies handle this within 24-48 hours.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Request the Rollover</h4>
                                            <p className="text-slate-400 mt-1">Your new custodian sends a rollover request to your 401(k) administrator. For a direct rollover, specify that funds should be sent to your new IRA custodian—not to you personally. Your gold IRA company typically handles this paperwork.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Wait for Fund Transfer</h4>
                                            <p className="text-slate-400 mt-1">The transfer typically takes 1-3 weeks depending on your old plan administrator. Some plans process quickly; others take the full time. Your gold IRA company will track the progress and notify you when funds arrive.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">5</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Select Your Precious Metals</h4>
                                            <p className="text-slate-400 mt-1">Once funds are in your new IRA, work with your dealer to choose IRS-approved gold, silver, platinum, or palladium products. They&apos;ll explain options, premiums, and help you build a diversified metals portfolio.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">6</div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Purchase & Storage</h4>
                                            <p className="text-slate-400 mt-1">Your dealer purchases the metals and ships them directly to an IRS-approved depository. You&apos;ll receive confirmation of your purchase and can view your holdings at any time. The metals are stored, insured, and held in your name.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Tax Rules */}
                        <section id="tax-rules" className="scroll-mt-32">
                            <h2 className="text-white">Tax Rules & Penalties to Understand</h2>
                            <p>
                                Understanding the <strong>tax implications of a gold IRA rollover</strong> is essential to avoid costly mistakes:
                            </p>

                            <h3 className="text-white">Tax-Free Rollovers</h3>
                            <p>
                                A properly executed direct rollover from a 401(k) to a gold IRA is <strong>completely tax-free</strong>. You&apos;re not withdrawing money—you&apos;re simply moving it from one qualified retirement account to another.
                            </p>

                            <h3 className="text-white">Traditional to Roth Conversion</h3>
                            <p>
                                If you want to convert a traditional 401(k) to a Roth Gold IRA, you&apos;ll owe income taxes on the converted amount. This can make sense if you expect to be in a higher tax bracket in retirement or want tax-free withdrawals later.
                            </p>

                            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20 not-prose my-8">
                                <h4 className="font-bold text-red-400 text-lg mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Potential Tax Traps to Avoid
                                </h4>
                                <ul className="space-y-3 text-red-300">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                                        <span><strong>Missing the 60-day deadline</strong> on an indirect rollover = full taxable distribution</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                                        <span><strong>Taking a check made out to you</strong> instead of your new custodian = 20% withholding</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                                        <span><strong>Storing IRA metals at home</strong> = treated as distribution (taxes + penalties)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                                        <span><strong>Buying non-approved metals</strong> = prohibited transaction (disqualifies entire IRA)</span>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                For detailed tax information, see our complete guide to <Link href="/learn/gold-ira-tax-rules">gold IRA tax rules</Link>.
                            </p>
                        </section>

                        {/* Section 6: Timeline */}
                        <section id="timeline" className="scroll-mt-32">
                            <h2 className="text-white">Timeline: How Long Does a Rollover Take?</h2>
                            <p>
                                The <strong>gold IRA rollover timeline</strong> typically spans 2-4 weeks from start to finish:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Step</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Typical Time</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Choose company & open IRA</td>
                                            <td className="p-4">1-3 days</td>
                                            <td className="p-4">Quick once you&apos;ve decided</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Rollover paperwork</td>
                                            <td className="p-4">1-2 days</td>
                                            <td className="p-4">Dealer handles most of it</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Fund transfer</td>
                                            <td className="p-4">5-15 business days</td>
                                            <td className="p-4">Depends on old plan administrator</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Metal selection & purchase</td>
                                            <td className="p-4">1-2 days</td>
                                            <td className="p-4">Once funds arrive</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Shipping to depository</td>
                                            <td className="p-4">3-7 days</td>
                                            <td className="p-4">Fully insured shipping</td>
                                        </tr>
                                        <tr className="bg-secondary/10">
                                            <td className="p-4 font-bold text-white">Total</td>
                                            <td className="p-4 font-bold text-white">2-4 weeks</td>
                                            <td className="p-4">Most time is fund transfer</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Pro Tip:</strong> The longest delay is usually waiting for your old 401(k) administrator to process the rollover request. Some plans (especially large employers) can take 2-3 weeks. Your gold IRA company will stay on top of this and follow up if needed.
                            </p>
                        </section>

                        {/* Section 7: Mistakes */}
                        <section id="mistakes" className="scroll-mt-32">
                            <h2 className="text-white">Common Rollover Mistakes to Avoid</h2>
                            <p>
                                These <strong>gold IRA rollover mistakes</strong> can cost you thousands in taxes and penalties:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Choosing Indirect Rollover</h4>
                                        <p className="text-sm text-red-300 mt-1">Unless you have a specific reason, always choose direct rollover. The 60-day deadline and 20% withholding create unnecessary risk and complications.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Falling for &quot;Home Storage&quot; Schemes</h4>
                                        <p className="text-sm text-red-300 mt-1">Some companies promote &quot;home storage gold IRAs.&quot; This is extremely risky and can trigger a full taxable distribution. Always use IRS-approved depositories.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Not Comparing Companies</h4>
                                        <p className="text-sm text-amber-300 mt-1">Fees and service vary dramatically between gold IRA companies. A few hours of research (or taking our quiz) can save you thousands over the life of your account.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Rolling Over Everything at Once</h4>
                                        <p className="text-sm text-amber-300 mt-1">Most advisors recommend keeping 10-20% of your portfolio in precious metals, not 100%. Consider rolling over a portion while maintaining diversification.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Ignoring Fees</h4>
                                        <p className="text-sm text-amber-300 mt-1">Gold IRAs have fees that standard IRAs don&apos;t (storage, custodian). Make sure you understand all fees before proceeding. See our <Link href="/guide/gold-ira-fees" className="text-secondary hover:underline">fee guide</Link> for details.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 403(b) and TSP Section */}
                        <section id="other-accounts" className="scroll-mt-32">
                            <h2 className="text-white">403(b) and TSP Rollovers to Gold</h2>
                            <p>
                                Not everyone has a 401(k). If you work for a school, hospital, nonprofit, or the federal government, you might have a 403(b) or Thrift Savings Plan (TSP) instead. Good news: the rollover process is essentially the same.
                            </p>

                            <h3 className="text-white">403(b) to Gold IRA Rollover</h3>
                            <p>
                                A 403(b) is the nonprofit and education sector&apos;s version of the 401(k). Teachers, nurses, university employees, and nonprofit workers typically have these accounts. Rolling over a 403(b) to a Gold IRA works exactly like a 401(k) rollover:
                            </p>
                            <ul>
                                <li>Direct rollovers are tax-free</li>
                                <li>You need to check if your plan allows in-service distributions (if still employed)</li>
                                <li>Accounts from previous employers can be rolled over anytime</li>
                                <li>Same 60-day rule applies for indirect rollovers</li>
                            </ul>
                            <p>
                                The only difference: 403(b) plans sometimes have unique provisions or annuity components that can complicate the process. Your Gold IRA company will help navigate these.
                            </p>

                            <h3 className="text-white">TSP to Gold IRA Rollover (Federal Employees)</h3>
                            <p>
                                If you work for the federal government or military, your retirement savings are in the Thrift Savings Plan (TSP). The TSP is actually one of the best retirement plans available—ultra-low fees and solid investment options.
                            </p>
                            <p>
                                That said, you can still roll TSP funds into a Gold IRA if you want physical precious metals in your portfolio:
                            </p>
                            <ul>
                                <li><strong>Active employees:</strong> You can do a partial rollover of TSP funds to a Gold IRA while still working (after age 59½)</li>
                                <li><strong>Separated employees:</strong> Once you leave federal service, you can roll over your entire TSP balance</li>
                                <li><strong>Tax treatment:</strong> Traditional TSP to Traditional Gold IRA = tax-free. Traditional TSP to Roth Gold IRA = taxable conversion.</li>
                                <li><strong>Process:</strong> Request a TSP-70 form (for age-based withdrawal) or TSP-99 (for separation). Your Gold IRA company will guide you through it.</li>
                            </ul>

                            <Callout type="tip" title="TSP Tip">
                                Many federal employees keep some money in the TSP (for the ultra-low fees on the G, F, C, S, and I funds) while rolling a portion into a Gold IRA for diversification. You don&apos;t have to move everything.
                            </Callout>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-white">401(k) to Gold Rollover FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I rollover my 401(k) while still employed?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        It depends on your plan and age. Most plans allow &quot;in-service distributions&quot; once you reach 59½. Some plans allow them earlier. Check with your HR department or plan administrator. If your current plan doesn&apos;t allow it, you can roll over 401(k)s from previous employers at any time.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Will I pay taxes on a 401(k) to gold IRA rollover?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        No, a direct rollover from a traditional 401(k) to a traditional gold IRA is completely tax-free. You&apos;re simply moving retirement funds between qualified accounts. However, if you convert to a Roth gold IRA, you&apos;ll owe taxes on the converted amount.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How much of my 401(k) should I roll into gold?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Most financial advisors recommend allocating 10-20% of your retirement portfolio to precious metals. This provides meaningful protection without over-concentrating in a single asset class. You can roll over a portion of your 401(k) to gold while leaving the rest in traditional investments.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I roll over a Roth 401(k) to a gold IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes! A Roth 401(k) can be rolled over to a Roth gold IRA, and a traditional 401(k) can be rolled over to a traditional gold IRA—both tax-free. You can also convert a traditional 401(k) to a Roth gold IRA, but you&apos;ll owe taxes on the conversion.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What&apos;s the minimum amount I can roll over?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        There&apos;s no IRS minimum, but gold IRA companies have their own minimums. <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> accepts as little as $2,000. <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> starts at $25,000. <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> requires $50,000+. Choose a company based on your investment amount.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Roll Over Your 401(k)?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find the best gold IRA company for your rollover amount. Our quiz matches you with companies based on your specific needs.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find My Best Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/reviews">Compare All Companies</Link>
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
                    <AugustaCTA variant="footer" linkContext="fees" />
                </Container>
            </section>
        </main>
    );
}
