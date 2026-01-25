import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, AlertTriangle, Building2, RefreshCw, Briefcase, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "457(b) to Gold IRA Rollover Guide: For Government Employees (2026)",
    description: "Complete guide for state, local, and federal employees. Learn how to roll over your 457(b) deferred compensation plan to a Gold IRA tax-free. No early withdrawal penalty.",
};

const tocItems = [
    { id: "what-is-457b", label: "What is a 457(b) Plan?" },
    { id: "457b-advantage", label: "The 457(b) Advantage" },
    { id: "eligibility", label: "Eligibility Rules" },
    { id: "step-by-step", label: "Step-by-Step Process" },
    { id: "governmental-vs-non", label: "Governmental vs Non-Governmental" },
    { id: "tax-benefits", label: "Tax Benefits" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "457(b) to Gold IRA Rollover Guide: For Government Employees",
            "description": "Complete guide for state, local, and federal employees. Learn how to roll over your 457(b) deferred compensation plan to a Gold IRA tax-free.",
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
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I roll over my 457(b) while still employed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your plan. Some governmental 457(b) plans allow in-service rollovers at age 59½ or older. Others require separation from service. Check your plan's Summary Plan Description or contact your benefits administrator."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is there an early withdrawal penalty on 457(b) plans?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No! This is the big advantage of 457(b) plans. Unlike 401(k)s and IRAs, governmental 457(b) plans have NO 10% early withdrawal penalty regardless of age. However, once you roll to an IRA, the IRA rules (including the penalty) apply."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I roll over both my 457(b) and 401(a) to a Gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Many government employees have both a 457(b) and a 401(a) or 403(b). Each can be rolled over separately to a Gold IRA. You can combine them into one Gold IRA or keep them separate."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's the difference between governmental and non-governmental 457(b)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Governmental 457(b) plans (state/local government) can be rolled to an IRA. Non-governmental 457(b) plans (non-profit hospitals, private schools) generally cannot be rolled to an IRA and have different rules. Check your plan type before proceeding."
                    }
                }
            ]
        }
    ]
};

export default function Page457bRolloverPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-800/50 text-white py-20 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                            <Briefcase className="w-4 h-4" />
                            For Government Employees
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-white">
                            457(b) to Gold IRA Rollover Guide
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            How to move your deferred compensation plan into physical gold. Unique advantages for state and local government workers.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar (TOC) */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary max-w-none">

                        <p className="lead text-xl text-slate-400">
                            If you work for a state or local government, you probably have a 457(b) deferred compensation plan. And you might not realize it has a <strong className="text-white">unique advantage</strong> that no other retirement account offers.
                        </p>

                        <p>
                            Unlike 401(k)s and 403(b)s, governmental 457(b) plans have <strong className="text-white">no 10% early withdrawal penalty</strong>—at any age. This makes them incredibly flexible for early retirees and those looking to diversify into gold before traditional retirement age.
                        </p>

                        {/* Section 1: What is 457(b) */}
                        <section id="what-is-457b" className="scroll-mt-32">
                            <h2>What is a 457(b) Plan?</h2>
                            <p>
                                A 457(b) is a tax-advantaged retirement plan available to state and local government employees, as well as some non-profit organizations. It&apos;s named after Section 457 of the Internal Revenue Code.
                            </p>
                            <p>
                                Common employers offering 457(b) plans include:
                            </p>
                            <ul>
                                <li>State government agencies</li>
                                <li>City and county governments</li>
                                <li>Public school districts (in addition to 403(b))</li>
                                <li>Police and fire departments</li>
                                <li>Public universities</li>
                                <li>Some non-profit hospitals and organizations</li>
                            </ul>
                            <p>
                                Like a 401(k), contributions are made pre-tax, reducing your taxable income. The money grows tax-deferred until you withdraw it in retirement.
                            </p>
                        </section>

                        {/* Section 2: The 457(b) Advantage */}
                        <section id="457b-advantage" className="scroll-mt-32">
                            <h2>The 457(b) Advantage: No Early Withdrawal Penalty</h2>
                            <p>
                                Here&apos;s what makes 457(b) plans special: <strong className="text-white">there is no 10% early withdrawal penalty</strong> for governmental 457(b) plans, regardless of your age.
                            </p>
                            <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <h4 className="font-bold text-red-400 mb-3">401(k) / 403(b) / IRA</h4>
                                    <ul className="space-y-2 text-red-300 text-sm">
                                        <li>Withdraw before 59½ = 10% penalty</li>
                                        <li>Plus regular income tax</li>
                                        <li>Limited exceptions (hardship, etc.)</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                                    <h4 className="font-bold text-green-400 mb-3">Governmental 457(b)</h4>
                                    <ul className="space-y-2 text-green-300 text-sm">
                                        <li>Withdraw at any age = NO penalty</li>
                                        <li>Only regular income tax owed</li>
                                        <li>Access money after separation</li>
                                    </ul>
                                </div>
                            </div>
                            <Callout type="warning" title="Important: This Changes After Rollover">
                                Once you roll your 457(b) into an IRA (including a Gold IRA), the IRA rules apply. That means the 10% early withdrawal penalty kicks in if you withdraw before age 59½. Consider this before rolling over if you might need the money early.
                            </Callout>
                        </section>

                        {/* Section 3: Eligibility */}
                        <section id="eligibility" className="scroll-mt-32">
                            <h2>Eligibility Rules</h2>
                            <p>
                                Your ability to roll over depends on your employment status and plan rules:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                                    <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        You Can Roll Over If:
                                    </h4>
                                    <ul className="space-y-2 text-green-300 text-sm">
                                        <li>You&apos;ve separated from service (retired, quit, laid off)</li>
                                        <li>You&apos;re still employed but 59½ or older (some plans)</li>
                                        <li>You have a governmental 457(b) plan</li>
                                        <li>Your plan allows rollovers to IRAs</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        You Probably Can&apos;t If:
                                    </h4>
                                    <ul className="space-y-2 text-red-300 text-sm">
                                        <li>You&apos;re under 59½ AND still working</li>
                                        <li>You have a non-governmental 457(b)</li>
                                        <li>Your plan restricts in-service distributions</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Step-by-Step */}
                        <section id="step-by-step" className="scroll-mt-32">
                            <h2>Step-by-Step Process</h2>
                            <p>
                                Rolling over a 457(b) to a Gold IRA follows a similar process to other retirement account rollovers:
                            </p>
                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white">Open a Self-Directed Gold IRA</h4>
                                        <p className="text-sm text-slate-400 mt-1">Choose a reputable Gold IRA company. They&apos;ll set up your account with an IRS-approved custodian.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white">Contact Your 457(b) Administrator</h4>
                                        <p className="text-sm text-slate-400 mt-1">This is usually your state or city&apos;s deferred compensation department, not HR. Request rollover forms and confirm eligibility.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white">Request a Direct Rollover</h4>
                                        <p className="text-sm text-slate-400 mt-1">Always choose &quot;direct rollover&quot; or &quot;trustee-to-trustee transfer.&quot; This avoids the 20% mandatory withholding.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-white">Complete & Submit Paperwork</h4>
                                        <p className="text-sm text-slate-400 mt-1">Your Gold IRA company will provide the receiving account details. Submit forms to your 457(b) plan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">5</div>
                                    <div>
                                        <h4 className="font-bold text-white">Purchase Your Gold</h4>
                                        <p className="text-sm text-slate-400 mt-1">Once funds arrive (typically 2-4 weeks), work with your Gold IRA company to select IRS-approved precious metals.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Governmental vs Non-Governmental */}
                        <section id="governmental-vs-non" className="scroll-mt-32">
                            <h2>Governmental vs Non-Governmental 457(b)</h2>
                            <p>
                                This is critical: <strong className="text-white">not all 457(b) plans are created equal</strong>. The IRS treats them very differently.
                            </p>
                            <div className="not-prose my-8 overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-white font-bold">Feature</th>
                                            <th className="text-left p-4 text-green-400 font-bold">Governmental 457(b)</th>
                                            <th className="text-left p-4 text-amber-400 font-bold">Non-Governmental 457(b)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400">
                                        <tr className="border-b border-white/5">
                                            <td className="p-4">Employers</td>
                                            <td className="p-4">State/local government</td>
                                            <td className="p-4">Non-profits, hospitals</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4">Rollover to IRA?</td>
                                            <td className="p-4 text-green-400">Yes</td>
                                            <td className="p-4 text-red-400">Generally No</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4">Early withdrawal penalty?</td>
                                            <td className="p-4 text-green-400">No</td>
                                            <td className="p-4 text-green-400">No</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4">Assets protected in bankruptcy?</td>
                                            <td className="p-4 text-green-400">Yes (held in trust)</td>
                                            <td className="p-4 text-red-400">No (employer&apos;s asset)</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4">Can roll to Gold IRA?</td>
                                            <td className="p-4 text-green-400">Yes</td>
                                            <td className="p-4 text-red-400">No</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Callout type="tip" title="How to Check Your Plan Type">
                                Look at your plan documents or call your benefits department. Ask: &quot;Is this a governmental or non-governmental 457(b) plan?&quot; If you work for a state, city, county, or public school, it&apos;s almost certainly governmental.
                            </Callout>
                        </section>

                        {/* Section 6: Tax Benefits */}
                        <section id="tax-benefits" className="scroll-mt-32">
                            <h2>Tax Benefits</h2>
                            <p>
                                A direct rollover from a governmental 457(b) to a Traditional Gold IRA is <strong className="text-white">completely tax-free</strong>. No taxes owed. No penalties. The money moves from one tax-advantaged account to another.
                            </p>
                            <p>
                                Once in your Gold IRA:
                            </p>
                            <ul>
                                <li>Your investments grow tax-deferred</li>
                                <li>You pay taxes only when you take distributions</li>
                                <li>Required Minimum Distributions (RMDs) begin at age 73</li>
                            </ul>
                            <Callout type="tip" title="Roth 457(b) Option">
                                If you have a Roth 457(b), you can roll it into a Roth Gold IRA. Your gold grows tax-free, and qualified withdrawals are also tax-free. This is powerful for those who expect higher taxes in retirement.
                            </Callout>
                        </section>

                        {/* Section 7: Mistakes */}
                        <section id="mistakes" className="scroll-mt-32">
                            <h2>Common Mistakes</h2>
                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Taking an indirect rollover</h4>
                                        <p className="text-sm text-red-300 mt-1">If the check is made out to you, 20% is withheld for taxes. Always request a direct trustee-to-trustee transfer.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Not realizing IRA rules apply after rollover</h4>
                                        <p className="text-sm text-red-300 mt-1">Your 457(b)&apos;s penalty-free withdrawals disappear once in an IRA. If you&apos;re under 59½ and might need the money, consider leaving some in the 457(b).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Assuming all 457(b)s can roll over</h4>
                                        <p className="text-sm text-red-300 mt-1">Non-governmental 457(b) plans generally cannot be rolled to an IRA. Verify your plan type first.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Forgetting about your 401(a) or 403(b)</h4>
                                        <p className="text-sm text-red-300 mt-1">Many government employees have multiple retirement accounts. Don&apos;t forget to review and potentially roll over all eligible accounts.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>457(b) Rollover FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                                <RefreshCw className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-400">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Protect Your Government Pension</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">See if you qualify to move your 457(b) into physical gold—without penalties or taxes.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Check My Eligibility <ArrowRight className="ml-2 w-5 h-5" /></Link>
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
                    <AugustaCTA variant="footer" trackSource="guide-457b-to-gold-ira-rollover" />
                </Container>
            </section>
        </main>
    );
}
