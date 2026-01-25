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
    title: "TSP to Gold IRA Rollover Guide: Federal & Military Rules (2026)",
    description: "Complete TSP to Gold IRA rollover guide for Federal Employees and Military. Learn Form TSP-70, in-service withdrawals, and tax-free transfers.",
};

const tocItems = [
    { id: "what-is-tsp-rollover", label: "What is a TSP Rollover?" },
    { id: "eligibility", label: "Eligibility" },
    { id: "tsp-vs-gold", label: "TSP vs. Gold" },
    { id: "step-by-step", label: "Step-by-Step Process" },
    { id: "forms", label: "Forms & Paperwork" },
    { id: "tax-rules", label: "Tax Rules" },
    { id: "mistakes", label: "Mistakes to Avoid" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "TSP to Gold IRA Rollover Guide: Federal & Military Rules",
            "description": "Complete guide for Federal Employees and Military personnel on rolling over TSP funds to a Gold IRA. Learn about Form TSP-70, in-service withdrawals, and tax-free transfers.",
            "image": "https://richdadretirement.com/images/tsp-rollover-guide-cover.jpg",
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
                    "name": "Can I roll over my TSP to a Gold IRA while still working?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, if you are age 59½ or older, you can take an 'age-based in-service withdrawal' and roll it over to a Gold IRA while continuing to work and contribute to the TSP. If you are under 59½, you typically must be separated from service to roll over funds, unless you qualify for a financial hardship withdrawal (which has different rules)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the TSP allow physical gold investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. The Thrift Savings Plan offers 5 core funds (G, F, C, S, I) and Lifecycle funds. It does not allow for direct investment in physical precious metals. To own physical gold, you must roll funds out of the TSP into a Self-Directed Gold IRA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which TSP form do I need for a rollover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You will typically use the 'withdrawal wizard' on the TSP.gov website to generate the correct form. For a full withdrawal after leaving service, it's often Form TSP-70. For a partial in-service withdrawal, it is Form TSP-75 or similar. Your Gold IRA custodian will help you fill these out."
                    }
                }
            ]
        }
    ]
};

export default function TspRolloverPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-800/50 text-white py-20 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            For Federal & Military Personnel
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-white">
                            TSP to Gold IRA Rollover Guide
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            How to move your Thrift Savings Plan funds into physical gold. A step-by-step guide for active and separated federal employees.
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
                            The Thrift Savings Plan is one of the best retirement plans in America. Low fees. Solid fund options. Government matching. But there&apos;s one thing it <strong className="text-white">cannot do</strong>: hold physical gold.
                        </p>

                        <p>
                            If you&apos;re a federal employee or military member who&apos;s watched the markets swing wildly, you&apos;ve probably wondered: <em>&quot;Can I protect some of this money with real assets?&quot;</em>
                        </p>
                        <p>
                            The answer is yes—through a TSP to Gold IRA rollover. You can move some or all of your TSP funds into a Self-Directed IRA that holds physical gold, without triggering taxes or penalties (if you do it right).
                        </p>
                        <p>
                            Here&apos;s exactly how it works.
                        </p>

                        <Callout type="tip" title="Active Duty / Federal Employees">
                            You don't have to quit your job to protect your savings. If you are over 59½, you can utilize an "In-Service Withdrawal" to move a portion of your TSP into Gold while keeping your job and matching contributions active.
                        </Callout>

                        {/* Section 1: What is TSP Rollover */}
                        <section id="what-is-tsp-rollover" className="scroll-mt-32">
                            <h2>What is a TSP to Gold IRA Rollover?</h2>
                            <p>
                                A TSP to Gold IRA rollover is exactly what it sounds like: moving money from your Thrift Savings Plan into a Self-Directed IRA that can hold physical precious metals.
                            </p>
                            <p>
                                Think of it as transferring your retirement savings from one bucket (TSP&apos;s paper funds) to another bucket (an IRA that owns actual gold bars and coins). The money never hits your bank account—it goes directly from TSP to your new IRA custodian.
                            </p>
                            <p>
                                Why do this? Because the TSP, for all its benefits, only offers five core funds—all of them paper assets tied to stocks, bonds, or government securities. There&apos;s no option for physical gold, real estate, or any alternative investment. A Gold IRA gives you that option.
                            </p>
                        </section>

                        {/* Section 2: Eligibility */}
                        <section id="eligibility" className="scroll-mt-32">
                            <h2>Eligibility: Active vs Separated</h2>
                            <p>
                                This is where it gets a little tricky. Your eligibility depends on your employment status:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                                    <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Separated from Service
                                    </h4>
                                    <p className="text-green-300 text-sm mb-3">If you&apos;ve left federal employment (retired, resigned, or separated), you can roll over your entire TSP at any age, no restrictions.</p>
                                    <p className="text-green-400 text-xs">This is the easiest path. Most people do rollovers after they leave government service.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        Still Working (Age 59½+)
                                    </h4>
                                    <p className="text-blue-300 text-sm mb-3">If you&apos;re still employed but over 59½, you can take an &quot;age-based in-service withdrawal&quot; and roll it into a Gold IRA while continuing to work.</p>
                                    <p className="text-blue-400 text-xs">You keep your job, keep getting matching, and diversify part of your savings into gold.</p>
                                </div>
                            </div>
                            <Callout type="warning" title="Under 59½ and Still Working?">
                                If you&apos;re under 59½ and still employed, you generally cannot roll over TSP funds (except for financial hardship, which has different rules and isn&apos;t ideal for gold investing). Your best option is to wait until you hit 59½ or leave federal service.
                            </Callout>
                        </section>

                        {/* Section 3: TSP vs Gold */}
                        <section id="tsp-vs-gold" className="scroll-mt-32">
                            <h2>TSP Funds vs. Physical Gold</h2>
                            <p>
                                Let&apos;s be real about what you&apos;re holding in the TSP:
                            </p>
                            <ul className="text-slate-400">
                                <li><strong className="text-white">G Fund:</strong> Government bonds. &quot;Safe,&quot; but barely beats inflation—often loses purchasing power over time.</li>
                                <li><strong className="text-white">F Fund:</strong> Corporate bonds. Slightly better returns, more risk.</li>
                                <li><strong className="text-white">C Fund:</strong> S&P 500 stocks. Great when markets are up, brutal when they crash.</li>
                                <li><strong className="text-white">S Fund:</strong> Small-cap stocks. More volatile than C Fund.</li>
                                <li><strong className="text-white">I Fund:</strong> International stocks. Tied to foreign economies and currencies.</li>
                            </ul>
                            <p>
                                Notice what&apos;s missing? Anything <strong className="text-white">real</strong>. Every fund is paper—stocks, bonds, government IOUs. When the financial system hiccups, they all tend to move together.
                            </p>
                            <p>
                                Gold is different. It&apos;s not someone else&apos;s liability. During the 2008 crash, the C Fund dropped 37%. Gold rose 5%. During the 2020 pandemic panic, gold hit all-time highs while stocks cratered. That&apos;s the hedge you can&apos;t get inside the TSP.
                            </p>
                        </section>

                        {/* Section 4: Step-by-Step */}
                        <section id="step-by-step" className="scroll-mt-32">
                            <h2>Step-by-Step Process</h2>
                            <p>
                                Here&apos;s the exact process to roll over your TSP to a Gold IRA:
                            </p>
                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white">Open a Self-Directed Gold IRA</h4>
                                        <p className="text-sm text-slate-400 mt-1">Choose a Gold IRA company and open your account. They&apos;ll set you up with a custodian (like Equity Trust or New Direction IRA) who can hold physical metals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white">Get Your New IRA Account Details</h4>
                                        <p className="text-sm text-slate-400 mt-1">Your Gold IRA company will provide the custodian name, address, and account number needed for the transfer.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white">Log Into TSP.gov</h4>
                                        <p className="text-sm text-slate-400 mt-1">Go to tsp.gov and use the &quot;Withdrawals&quot; section. The online wizard walks you through the options.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-white">Select &quot;Transfer to IRA&quot; (Direct Rollover)</h4>
                                        <p className="text-sm text-slate-400 mt-1"><strong className="text-white">Critical:</strong> Choose the option to transfer directly to another retirement account. Do NOT have them send you a check—that triggers 20% withholding.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">5</div>
                                    <div>
                                        <h4 className="font-bold text-white">Purchase Gold</h4>
                                        <p className="text-sm text-slate-400 mt-1">Once funds arrive at your new IRA (usually 1-2 weeks), work with your Gold IRA company to select and purchase IRS-approved coins and bars.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Forms */}
                        <section id="forms" className="scroll-mt-32">
                            <h2>Critical Forms: TSP-70, TSP-75, TSP-99</h2>
                            <p>
                                Good news: the TSP has modernized. Most withdrawals now happen through the online wizard at tsp.gov—no paper forms needed. But it helps to know what&apos;s happening behind the scenes:
                            </p>
                            <ul className="text-slate-400">
                                <li><strong className="text-white">Form TSP-70:</strong> Full withdrawal request (for separated employees)</li>
                                <li><strong className="text-white">Form TSP-75:</strong> Age-based in-service withdrawal (for active employees 59½+)</li>
                                <li><strong className="text-white">Form TSP-99:</strong> Used to designate beneficiaries (not for withdrawals)</li>
                            </ul>
                            <p>
                                The online system will generate the appropriate form based on your selections. Just make sure you choose <strong className="text-white">&quot;Transfer to IRA or eligible employer plan&quot;</strong>—not a cash distribution.
                            </p>
                            <Callout type="warning" title="The 20% Withholding Trap">
                                If you take an &quot;indirect rollover&quot; (they mail you a check), the TSP withholds 20% for taxes. You then have 60 days to deposit the full amount (including that 20% from your own pocket) into your IRA. Miss the deadline or come up short? Taxes and penalties. Always choose direct transfer.
                            </Callout>
                        </section>

                        {/* Section 6: Tax Rules */}
                        <section id="tax-rules" className="scroll-mt-32">
                            <h2>Tax Rules & Penalties</h2>
                            <p>
                                Here&apos;s the good news: a properly executed TSP to Gold IRA rollover is <strong className="text-white">100% tax-free</strong>. No taxes. No penalties. The money simply moves from one retirement account to another.
                            </p>
                            <p>
                                The key is matching account types:
                            </p>
                            <div className="not-prose my-8 overflow-x-auto">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">From TSP</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">To IRA</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Tax Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr><td className="p-4">Traditional TSP</td><td className="p-4">Traditional Gold IRA</td><td className="p-4 text-green-400 font-semibold">Tax-Free</td></tr>
                                        <tr><td className="p-4">Roth TSP</td><td className="p-4">Roth Gold IRA</td><td className="p-4 text-green-400 font-semibold">Tax-Free</td></tr>
                                        <tr><td className="p-4">Traditional TSP</td><td className="p-4">Roth Gold IRA</td><td className="p-4 text-amber-400 font-semibold">Taxable (Conversion)</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                <strong className="text-white">Early Withdrawal Penalty:</strong> If you take a distribution (not a rollover) before age 59½, you&apos;ll owe a 10% early withdrawal penalty plus income taxes. That&apos;s why rolling over to another IRA—not cashing out—is so important.
                            </p>
                        </section>

                        {/* Common Mistakes */}
                        <section id="mistakes" className="scroll-mt-32">
                            <h2>Common Mistakes to Avoid</h2>
                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Taking a check instead of direct transfer</h4>
                                        <p className="text-sm text-red-300 mt-1">Triggers 20% withholding and creates a 60-day deadline. Always choose direct transfer.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Rolling over while under 59½ and still employed</h4>
                                        <p className="text-sm text-red-300 mt-1">You&apos;re not eligible for a rollover unless you&apos;ve separated from service or qualify for age-based withdrawal.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Rolling Traditional TSP to Roth IRA without planning</h4>
                                        <p className="text-sm text-red-300 mt-1">This is a taxable conversion. You&apos;ll owe income taxes on the entire amount that year. Plan accordingly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Choosing the wrong Gold IRA company</h4>
                                        <p className="text-sm text-red-300 mt-1">High fees, pushy sales tactics, or non-IRA-approved products can ruin your rollover. Research thoroughly.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>TSP Rollover FAQs</h2>
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
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Protect Your Federal Retirement</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">See how easy it is to add physical gold to your portfolio without penalties.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Check Rollover Eligibility <ArrowRight className="ml-2 w-5 h-5" /></Link>
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
                    <AugustaCTA variant="footer" linkContext="fees" trackSource="guide-tsp-to-gold-ira-rollover" />
                </Container>
            </section>
        </main>
    );
}
