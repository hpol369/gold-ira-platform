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
    title: "403(b) to Gold IRA Rollover Guide: For Teachers & Nurses (2026)",
    description: "Complete guide for Teachers, Nurses, and Non-Profit employees. Learn how to roll over your 403(b) / TSA to a Gold IRA tax-free. Avoid annuity surrender charges.",
};

const tocItems = [
    { id: "what-is-403b-rollover", label: "What is a 403(b) Rollover?" },
    { id: "eligibility", label: "Eligibility Rules" },
    { id: "annuity-trap", label: "Warning: The Annuity Trap" },
    { id: "step-by-step", label: "Step-by-Step Process" },
    { id: "tax-benefits", label: "Tax Benefits" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "403(b) to Gold IRA Rollover Guide: For Teachers & Nurses",
            "description": "Complete guide for Teachers, Nurses, and Non-Profit employees. Learn how to roll over your 403(b) / TSA to a Gold IRA tax-free. Avoid annuity surrender charges.",
            "image": "https://richdadretirement.com/images/403b-rollover-guide-cover.jpg",
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
                    "name": "Can I roll over my 403(b) without quitting my job?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends. If you are over age 59½, most 403(b) plans allow for 'in-service distributions' or rollovers. If you are under 59½, it is more difficult unless you have funds from a previous employer or qualify for a hardship withdrawal."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will I pay a penalty for moving my 403(b) to Gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you do a 'Direct Rollover' (trustee-to-trustee), there is no IRS penalty or tax. However, be careful if your 403(b) is invested in an annuity contract—some insurance companies charge 'surrender fees' if you move the money out before a certain number of years."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a TSA the same as a 403(b)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, 'Tax-Sheltered Annuity' (TSA) is the old name for a 403(b) plan. The rules for rolling them over to a Gold IRA are identical."
                    }
                }
            ]
        }
    ]
};

export default function TsaRolloverPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 py-20 border-b border-slate-200">
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#B22234]/10 px-4 py-1.5 text-sm font-semibold text-[#B22234] mb-6 border border-[#B22234]/20">
                            <span className="w-2 h-2 rounded-full bg-[#B22234]"></span>
                            For Teachers, Nurses & Non-Profits
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-[#000080]">
                            403(b) to Gold IRA Rollover Guide
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            How to move your Tax-Sheltered Annuity (TSA) into physical gold. Escape high fees and protect your retirement savings.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none">

                        <p className="lead text-xl text-slate-600">
                            If you&apos;re a teacher, nurse, or non-profit worker, you&apos;ve probably noticed something about your 403(b): <strong className="text-[#000080]">the options are terrible</strong>.
                        </p>

                        <p>
                            Unlike 401(k)s that offer low-cost index funds, most 403(b) plans are stuffed with high-fee annuity products from insurance companies. You&apos;re paying 1-2% in annual fees while your school district administrator has no idea what you&apos;re even invested in.
                        </p>
                        <p>
                            A 403(b) to Gold IRA rollover lets you escape that trap. You move your money into an account <em>you</em> control, invested in <em>real</em> assets—not some insurance company&apos;s variable annuity product.
                        </p>

                        <Callout type="warning" title="Watch Out for Surrender Charges">
                            Unlike 401(k)s, many 403(b)s are actually annuity contracts. Before you roll over, check if your policy has a "Surrender Charge" schedule (often 5-10 years) that charges a fee for leaving.
                        </Callout>

                        {/* Section 1: What is Rollover */}
                        <section id="what-is-403b-rollover" className="scroll-mt-32">
                            <h2>What is a 403(b) Rollover?</h2>
                            <p>
                                A 403(b)—sometimes called a TSA (Tax-Sheltered Annuity)—is the non-profit world&apos;s version of a 401(k). It&apos;s offered by public schools, hospitals, churches, and charitable organizations.
                            </p>
                            <p>
                                A rollover means moving your 403(b) money into an IRA. From a tax perspective, it works exactly like a 401(k) rollover—no taxes or penalties if you do a direct transfer. The money goes from one retirement account to another, tax-free.
                            </p>
                            <p>
                                The big difference? Once the money is in a Self-Directed IRA, you can invest in things your 403(b) never allowed—including physical gold and silver.
                            </p>
                        </section>

                        {/* Section 2: Eligibility */}
                        <section id="eligibility" className="scroll-mt-32">
                            <h2>Eligibility Rules</h2>
                            <p>
                                Your ability to roll over depends on your situation:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                                    <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        You Can Roll Over If:
                                    </h4>
                                    <ul className="space-y-2 text-green-800 text-sm">
                                        <li>• You&apos;ve left that employer (retired, resigned, laid off)</li>
                                        <li>• You&apos;re still employed but age 59½ or older</li>
                                        <li>• You have funds from a <em>previous</em> employer&apos;s 403(b)</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        You Probably Can&apos;t If:
                                    </h4>
                                    <ul className="space-y-2 text-red-800 text-sm">
                                        <li>• You&apos;re under 59½ AND still working for that employer</li>
                                        <li>• Your plan has strict &quot;no in-service withdrawal&quot; rules</li>
                                    </ul>
                                    <p className="text-red-700 text-xs mt-3">Check your plan document or ask HR—rules vary by employer.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: The Annuity Trap */}
                        <section id="annuity-trap" className="scroll-mt-32">
                            <h2>Warning: The Annuity Trap</h2>
                            <p>
                                Here&apos;s the dirty secret of 403(b) plans: unlike 401(k)s, they&apos;re often run by insurance companies selling annuity contracts. And these contracts come with strings attached.
                            </p>
                            <p>
                                <strong className="text-[#000080]">Surrender charges</strong> are fees the insurance company charges if you move your money out before a certain period—typically 5-10 years. They can be as high as 7-8% of your balance in the early years.
                            </p>
                            <div className="not-prose my-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                                <p className="font-bold text-amber-700 mb-3">Typical Surrender Charge Schedule:</p>
                                <ul className="space-y-1 text-amber-800 text-sm">
                                    <li>Year 1: 7% penalty</li>
                                    <li>Year 2: 6% penalty</li>
                                    <li>Year 3: 5% penalty</li>
                                    <li>Year 4: 4% penalty</li>
                                    <li>Year 5: 3% penalty</li>
                                    <li>Year 6: 2% penalty</li>
                                    <li>Year 7+: 0% (free to leave)</li>
                                </ul>
                                <p className="mt-4 text-amber-700 text-sm"><strong>Before rolling over:</strong> Call your 403(b) provider and ask &quot;What are my surrender charges if I move my money?&quot;</p>
                            </div>
                            <p>
                                The good news? If your surrender period has passed, you can roll over penalty-free. And even if you&apos;re still in the surrender period, sometimes the long-term savings from lower fees in a Gold IRA outweigh the one-time surrender charge.
                            </p>
                        </section>

                        {/* Section 4: Step-by-Step */}
                        <section id="step-by-step" className="scroll-mt-32">
                            <h2>Step-by-Step Process</h2>
                            <p>
                                Rolling over a 403(b) is slightly more complicated than a 401(k) because you&apos;re often dealing with an insurance company, not just an HR department. Here&apos;s how to do it:
                            </p>
                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Open a Self-Directed Gold IRA</h4>
                                        <p className="text-sm text-slate-600 mt-1">Choose a Gold IRA company. They&apos;ll help you open an account with a custodian who can hold physical metals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Identify Your 403(b) Vendor</h4>
                                        <p className="text-sm text-slate-600 mt-1">This is usually an insurance company (not your school district). Check your statements for names like VALIC, TIAA, AXA, or Lincoln Financial.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Request a Direct Rollover Form</h4>
                                        <p className="text-sm text-slate-600 mt-1">Call your vendor and ask for their &quot;rollover request form.&quot; Specify you want a <strong className="text-[#000080]">direct transfer</strong> to avoid withholding.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Complete the Paperwork</h4>
                                        <p className="text-sm text-slate-600 mt-1">Fill out the form with your new Gold IRA custodian&apos;s information. Your Gold IRA company can help you with this.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">5</div>
                                    <div>
                                        <h4 className="font-bold text-[#000080]">Wait for Transfer & Purchase Gold</h4>
                                        <p className="text-sm text-slate-600 mt-1">Funds typically arrive in 2-4 weeks (insurance companies are slower than 401k administrators). Then select your gold.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Tax Benefits */}
                        <section id="tax-benefits" className="scroll-mt-32">
                            <h2>Tax Benefits</h2>
                            <p>
                                A direct rollover from a 403(b) to a Traditional Gold IRA is <strong className="text-[#000080]">completely tax-free</strong>. No taxes owed. No penalties. The money simply moves from one tax-advantaged account to another.
                            </p>
                            <p>
                                Once in your Gold IRA, your investments grow tax-deferred—just like they did in your 403(b). You only pay taxes when you take distributions in retirement.
                            </p>
                            <Callout type="tip" title="Roth 403(b) to Roth Gold IRA">
                                If you have a Roth 403(b), you can roll it into a Roth Gold IRA. Your gold then grows tax-free, and qualified withdrawals are also tax-free. This is one of the most powerful retirement strategies available.
                            </Callout>
                        </section>

                        {/* Section 6: Mistakes */}
                        <section id="mistakes" className="scroll-mt-32">
                            <h2>Common Mistakes</h2>
                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Ignoring surrender charges</h4>
                                        <p className="text-sm text-red-800 mt-1">Call your vendor first. A surprise 7% surrender fee on $100,000 is $7,000 out of your pocket.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Taking an indirect rollover</h4>
                                        <p className="text-sm text-red-800 mt-1">If they mail you a check, 20% is withheld for taxes. Always request a direct transfer to your new IRA.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Contacting HR instead of the vendor</h4>
                                        <p className="text-sm text-red-800 mt-1">Your school district&apos;s HR usually can&apos;t help with rollovers. You need to contact the insurance company directly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Not checking in-service rules</h4>
                                        <p className="text-sm text-red-800 mt-1">If you&apos;re under 59½ and still employed, verify your plan allows rollovers before starting the process.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>403(b) Rollover FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                                <RefreshCw className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-600">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#000080] relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#000080]">Take Control of Your 403(b)</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Don't let high fees eat your retirement. See if you qualify for a penalty-free rollover today.</p>
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
            <section className="py-16 bg-slate-100">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-403b-to-gold-ira-rollover" />
                </Container>
            </section>
        </main>
    );
}
