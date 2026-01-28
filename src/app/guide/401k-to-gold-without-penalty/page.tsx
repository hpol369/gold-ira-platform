import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Clock, Building2 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "401k to Gold Without Penalty: Tax-Free Rollover Guide (2026)",
    description: "Move your 401k to gold without paying taxes or penalties. Learn the direct rollover method for a completely tax-free transfer to a Gold IRA in 2026.",
    openGraph: {
        title: "401k to Gold Without Penalty: Tax-Free Rollover Guide (2026)",
        description: "Move your 401k to gold without paying taxes or penalties. Learn the direct rollover method for a completely tax-free transfer.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "401k to Gold Without Penalty: Tax-Free Rollover Guide (2026)",
            "description": "Move your 401k to gold without paying taxes or penalties. Learn the direct rollover method for a completely tax-free transfer to a Gold IRA.",
            "image": "https://richdadretirement.com/images/tax-free-rollover-guide.jpg",
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
            "datePublished": "2026-01-27",
            "dateModified": "2026-01-27"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Will I pay taxes on a 401k to gold rollover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, a direct rollover from a 401(k) to a Gold IRA is completely tax-free. The funds transfer directly between custodians without you ever touching the money. This means no taxes, no withholding, and no penalties. The key is using a 'direct rollover' (also called trustee-to-trustee transfer) rather than an indirect rollover."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the penalty for cashing out 401k early?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you cash out your 401(k) before age 59 1/2, you'll typically pay a 10% early withdrawal penalty PLUS income taxes on the full amount (20-40% depending on your tax bracket). This can mean losing 30-50% of your retirement savings. A direct rollover to a Gold IRA avoids all of these penalties and taxes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is a direct rollover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A direct rollover (also called trustee-to-trustee transfer) is when your 401(k) custodian sends your funds directly to your new Gold IRA custodian. You never touch the money, so there's no tax withholding, no 60-day deadline, and no risk of penalties. This is the recommended method for 401(k) to Gold IRA transfers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I do this if I'm still employed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your plan rules. If you're 59 1/2 or older, most plans allow 'in-service distributions' which enable rollovers while still employed. If you're younger, check if your plan permits in-service withdrawals. You can always roll over 401(k)s from previous employers at any time, regardless of age or employment status."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What if I miss the 60-day deadline?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you do an indirect rollover and miss the 60-day deadline to deposit funds into your new IRA, the entire amount is treated as a taxable distribution. You'll owe income taxes on the full amount, plus a 10% early withdrawal penalty if you're under 59 1/2. This is why we strongly recommend direct rollovers instead."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is there a limit to how much I can rollover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, there is no IRS limit on how much you can roll over from a 401(k) to a Gold IRA. You can transfer your entire balance or just a portion. The rollover is tax-free regardless of the amount, as long as you use a direct rollover method."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a tax-free rollover take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A direct rollover typically takes 2-3 weeks from start to finish. The longest part is usually waiting for your old 401(k) administrator to process the transfer request. Your Gold IRA company will handle most of the paperwork and follow up with your old plan administrator."
                    }
                }
            ]
        }
    ]
};

export default function GoldWithoutPenaltyGuidePage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />

            {/* Header */}
            <header className="bg-slate-50 py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-6 border border-green-200">
                            <ShieldCheck className="w-4 h-4" />
                            TAX-FREE GUIDE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            401k to Gold Without Penalty
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            How to transfer your retirement savings to physical gold tax-free and penalty-free.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none">

                        {/* Direct Answer - Big and Clear */}
                        <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-8 mb-12 not-prose">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-500/20 rounded-full shrink-0">
                                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                                        Yes, you can move your 401k to gold without any penalty or taxes.
                                    </h2>
                                    <p className="text-lg text-green-300">
                                        The key is using a <strong className="text-[#000080]">&quot;direct rollover&quot;</strong> (also called a trustee-to-trustee transfer). When done correctly, your retirement funds transfer directly from your 401(k) to a Gold IRA without you ever touching the money. No taxes. No penalties. No withholding.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section: How to Avoid Penalties */}
                        <section className="scroll-mt-32">
                            <h2 className="text-[#000080]">How to Avoid Penalties: The Direct Rollover Method</h2>
                            <p>
                                The IRS allows you to transfer retirement funds between qualified accounts without paying taxes or penalties. The secret? <strong className="text-[#000080]">Your money must go directly from one custodian to another</strong>. You never receive a check. You never touch the funds. They move electronically between accounts.
                            </p>
                            <p>
                                This is called a <strong className="text-[#000080]">direct rollover</strong> or <strong className="text-[#000080]">trustee-to-trustee transfer</strong>, and it&apos;s 100% tax-free and penalty-free, regardless of:
                            </p>
                            <ul className="text-slate-600">
                                <li>Your age (yes, even if you&apos;re under 59 1/2)</li>
                                <li>The amount you&apos;re rolling over</li>
                                <li>Whether you&apos;re still employed (for old 401ks)</li>
                            </ul>
                            <p>
                                When you request a direct rollover, your old 401(k) administrator sends your funds straight to your new Gold IRA custodian. Since you never have possession of the money, the IRS doesn&apos;t treat it as a distribution, which means no taxes and no penalties.
                            </p>
                        </section>

                        {/* Section: The 60-Day Rule Trap */}
                        <section className="scroll-mt-32">
                            <h2 className="text-[#000080]">The 60-Day Rule Trap: Why Indirect Rollovers Are Risky</h2>
                            <p>
                                There&apos;s another way to roll over your 401(k) called an <strong className="text-[#000080]">indirect rollover</strong>. With this method, your old plan sends you a check, and you have 60 days to deposit it into your new IRA.
                            </p>
                            <p>
                                <strong className="text-red-400">This is where people get into trouble.</strong>
                            </p>

                            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 not-prose my-6">
                                <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Indirect Rollover Dangers
                                </h4>
                                <ul className="space-y-2 text-red-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span><strong>20% mandatory withholding</strong> - Your old plan must withhold 20% for taxes, even if you plan to complete the rollover</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span><strong>60-day deadline</strong> - Miss it by even one day and the entire amount becomes taxable</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span><strong>10% early withdrawal penalty</strong> - If you&apos;re under 59 1/2 and miss the deadline</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span><strong>You must replace the 20%</strong> - To deposit the full amount, you need to come up with the withheld 20% from other sources</span>
                                    </li>
                                </ul>
                            </div>

                            <Callout type="warning" title="Real-World Example">
                                John has $100,000 in his 401(k). He chooses an indirect rollover. His old plan sends him a check for $80,000 (20% = $20,000 withheld). To complete the rollover without taxes, John must deposit $100,000 into his new IRA within 60 days. That means finding $20,000 from his savings. If he only deposits $80,000, the $20,000 is treated as a taxable distribution with potential penalties.
                            </Callout>
                        </section>

                        {/* Comparison Box */}
                        <section className="scroll-mt-32">
                            <h2 className="text-[#000080]">Direct vs. Indirect Rollover: Side-by-Side</h2>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                {/* Direct Rollover - Good */}
                                <div className="bg-green-500/10 border-2 border-green-500/30 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <CheckCircle2 className="w-6 h-6 text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#000080] m-0">Direct Rollover</h3>
                                    </div>
                                    <p className="text-green-300 font-semibold mb-4">RECOMMENDED</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">No taxes</strong> - funds transfer tax-free</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">No penalties</strong> - no early withdrawal penalty</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">No withholding</strong> - 100% of your money transfers</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">No deadline</strong> - no 60-day rule to worry about</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">You never touch the money</strong> - lowest risk</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Indirect Rollover - Bad */}
                                <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-red-500/20 rounded-lg">
                                            <XCircle className="w-6 h-6 text-red-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#000080] m-0">Indirect Rollover</h3>
                                    </div>
                                    <p className="text-red-300 font-semibold mb-4">AVOID IF POSSIBLE</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">20% withholding</strong> - taken from your check</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">60-day deadline</strong> - miss it and face taxes</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">10% penalty risk</strong> - if under 59 1/2</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">Must replace withheld funds</strong> - from pocket</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                            <span><strong className="text-[#000080]">Only one per year</strong> - IRS limitation</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Step-by-Step Tax-Free Process */}
                        <section className="scroll-mt-32">
                            <h2 className="text-[#000080]">Step-by-Step: The Tax-Free Rollover Process</h2>
                            <p>
                                Here&apos;s exactly how to move your 401(k) to gold without paying a penny in taxes or penalties:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 items-start bg-slate-50 rounded-xl p-5 border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080] text-lg">Choose a Gold IRA Company</h4>
                                        <p className="text-slate-600 mt-1">Select a reputable precious metals dealer to guide you through the process. They handle most of the paperwork. Our top pick is <Link href="/reviews/augusta-precious-metals" className="text-[#B22234] hover:underline">Augusta Precious Metals</Link> for their education-first approach and transparent pricing.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-slate-50 rounded-xl p-5 border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080] text-lg">Open a Self-Directed IRA</h4>
                                        <p className="text-slate-600 mt-1">Your Gold IRA company helps you open an account with an IRS-approved custodian. This typically takes 24-48 hours and involves completing an application and providing identification.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-green-500/10 rounded-xl p-5 border border-green-500/30">
                                    <div className="w-10 h-10 rounded-full bg-green-500 text-[#000080] flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080] text-lg flex items-center gap-2">
                                            Request a DIRECT Rollover
                                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">KEY STEP</span>
                                        </h4>
                                        <p className="text-green-300 mt-1">This is the critical step. Specifically request a <strong>&quot;direct rollover&quot;</strong> or <strong>&quot;trustee-to-trustee transfer.&quot;</strong> Your new custodian sends the rollover request to your 401(k) administrator. Make sure funds are sent directly to your new IRA custodian, not to you personally.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-slate-50 rounded-xl p-5 border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080] text-lg">Funds Transfer Directly (You Never Touch the Money)</h4>
                                        <p className="text-slate-600 mt-1">The transfer typically takes 1-3 weeks. Your 401(k) administrator sends funds electronically to your new Gold IRA custodian. Since you never have possession, it&apos;s completely tax-free and penalty-free.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-slate-50 rounded-xl p-5 border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">5</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080] text-lg">Buy IRS-Approved Gold</h4>
                                        <p className="text-slate-600 mt-1">Once funds arrive in your Gold IRA, work with your dealer to purchase IRS-approved gold, silver, platinum, or palladium. Metals are shipped to an IRS-approved depository and stored in your name. See our <Link href="/gold-ira-rules" className="text-[#B22234] hover:underline">Gold IRA rules guide</Link> for approved products.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Warning about Home Storage */}
                        <Callout type="warning" title="Beware of 'Home Storage' Gold IRA Schemes">
                            Some companies promote &quot;home storage gold IRAs&quot; where you can keep your IRA metals at home. <strong className="text-[#000080]">This is extremely risky and likely illegal.</strong> The IRS requires Gold IRA assets be stored with an approved custodian. Taking physical possession of IRA metals is treated as a distribution, triggering taxes and the 10% early withdrawal penalty if you&apos;re under 59 1/2. Always use an IRS-approved depository.
                        </Callout>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-[#000080] rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready for a Tax-Free Rollover?</h3>
                                <p className="mb-6 text-blue-100">Find the right Gold IRA company to handle your penalty-free transfer.</p>
                                <Button variant="gold" size="lg" asChild className="bg-[#B22234] hover:bg-[#8B0000]">
                                    <Link href="/quiz">Find My Best Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Related Links */}
                        <section className="scroll-mt-32">
                            <h2 className="text-[#000080]">Learn More</h2>
                            <p>
                                For more detailed information on the rollover process and IRS requirements:
                            </p>
                            <ul className="text-slate-600">
                                <li><Link href="/gold-ira-rules">Gold IRA Rules</Link> - Complete IRS requirements for gold IRAs</li>
                                <li><Link href="/guide/401k-to-gold-rollover">401k to Gold Rollover Guide</Link> - Detailed step-by-step process</li>
                                <li><Link href="/what-is-a-gold-ira">What is a Gold IRA?</Link> - Everything you need to know</li>
                            </ul>
                        </section>

                        {/* FAQ Section */}
                        <section className="scroll-mt-32">
                            <h2 className="text-[#000080]">Frequently Asked Questions About Tax-Free 401k Rollovers</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Will I pay taxes on a 401k to gold rollover?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        <strong className="text-green-400">No.</strong> A direct rollover from a 401(k) to a Gold IRA is completely tax-free. The funds transfer directly between custodians without you ever touching the money. No taxes, no withholding, no penalties. The key is using a direct rollover rather than an indirect rollover.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What is the penalty for cashing out 401k early?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        If you cash out before age 59 1/2, you face a <strong className="text-red-400">10% early withdrawal penalty</strong> plus income taxes (typically 20-40% depending on your bracket). This means you could lose 30-50% of your savings. A direct rollover to a Gold IRA avoids all of these penalties and taxes.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What is a direct rollover?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        A direct rollover (trustee-to-trustee transfer) is when your 401(k) custodian sends funds directly to your new Gold IRA custodian. You never touch the money, so there&apos;s no tax withholding, no 60-day deadline, and no risk of penalties. This is the recommended method for penalty-free transfers.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Can I do this if I&apos;m still employed?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        It depends on your plan. If you&apos;re 59 1/2 or older, most plans allow &quot;in-service distributions&quot; for rollovers while employed. Younger employees should check plan rules. However, you can always roll over 401(k)s from <em>previous</em> employers at any time, regardless of age or current employment status.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What if I miss the 60-day deadline?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        If you do an <em>indirect</em> rollover and miss the 60-day deadline, the entire amount is treated as a taxable distribution. You&apos;ll owe income taxes plus a 10% penalty if under 59 1/2. This is exactly why we recommend <strong className="text-green-400">direct rollovers</strong> - there&apos;s no deadline because you never take possession of the funds.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">Is there a limit to how much I can rollover?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        <strong className="text-green-400">No limit.</strong> There is no IRS cap on rollover amounts. You can transfer your entire 401(k) balance or just a portion. The rollover is tax-free and penalty-free regardless of the amount, as long as you use the direct rollover method.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">How long does a tax-free rollover take?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        A direct rollover typically takes <strong className="text-[#000080]">2-3 weeks</strong> from start to finish. The longest part is usually waiting for your old 401(k) administrator to process the transfer request (1-2 weeks). Your Gold IRA company handles most of the paperwork and will follow up with your old plan administrator to keep things moving.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-[#000080] rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Start Your Tax-Free Rollover Today</h3>
                                <p className="mb-6 text-blue-100 max-w-xl mx-auto">Move your 401(k) to gold without paying a penny in taxes or penalties. Our top-rated partners make the process simple.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8B0000]">
                                        <Link href="/quiz">Find My Best Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/guide/401k-to-gold-rollover">Full Rollover Guide</Link>
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
                    <AugustaCTA variant="footer" trackSource="guide-401k-gold-no-penalty" />
                </Container>
            </section>
        </main>
    );
}
