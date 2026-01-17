import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { AlertTriangle, FileText, Scale, Building, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Checkbook IRA Rules: What You Need to Know (2026 Guide)",
    description: "Considering a checkbook IRA or LLC IRA for gold? Learn the rules, risks, and why most experts recommend traditional custodian arrangements instead.",
};

const takeaways = [
    "A 'checkbook IRA' uses an LLC to give you direct control over IRA investments.",
    "While legal for some investments, it's extremely risky for precious metals.",
    "The IRS has successfully challenged checkbook IRAs used for home gold storage.",
    "Prohibited transactions can disqualify your entire IRA—triggering massive taxes.",
    "Most reputable Gold IRA companies don't offer checkbook arrangements.",
    "Traditional custodian setups are safer, simpler, and IRS-approved."
];

const tocItems = [
    { id: "what-is-checkbook", label: "What Is a Checkbook IRA?" },
    { id: "how-it-works", label: "How It Works" },
    { id: "gold-ira-problems", label: "Problems with Gold" },
    { id: "prohibited-transactions", label: "Prohibited Transactions" },
    { id: "risks", label: "The Real Risks" },
    { id: "better-approach", label: "A Better Approach" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Checkbook IRA Rules: What You Need to Know",
            "description": "Considering a checkbook IRA or LLC IRA for gold? Learn the rules, risks, and why most experts recommend traditional custodian arrangements instead.",
            "image": "https://richdadretirement.com/images/checkbook-ira-rules.jpg",
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
                    "name": "Is a checkbook IRA legal?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The basic structure—an IRA owning an LLC—is legal. However, the way it's used matters enormously. Using a checkbook IRA to store gold at home, for example, has been ruled a prohibited transaction by the Tax Court. The legality depends entirely on following IRS rules."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I use a checkbook IRA for gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Technically yes, but it's extremely risky. The gold must still be stored at an approved depository—not at your home or in a personal safe. Most people who want a checkbook IRA for gold want it specifically for home storage, which violates IRS rules."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens if I violate checkbook IRA rules?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If the IRS determines you engaged in a prohibited transaction, your entire IRA can be disqualified. This means the full value is treated as a distribution—you owe income tax on everything, plus a 10% penalty if under 59½. On a $100,000 IRA, you could lose $40,000+ instantly."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do companies promote checkbook IRAs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They charge fees to set up the LLC structure. Some also sell gold at high markups. The 'checkbook control' pitch appeals to people who distrust custodians. But the companies setting these up aren't liable when the IRS audits you."
                    }
                }
            ]
        }
    ]
};

export default function CheckbookIraRulesPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            IRA Structures
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Checkbook IRA Rules Explained
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            The &quot;checkbook IRA&quot; sounds appealing—direct control over your retirement investments. But for precious metals, it&apos;s a minefield of IRS rules and potential penalties.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <KeyTakeaways items={takeaways} />

                        <p className="lead">
                            Every few months someone asks me about &quot;checkbook IRAs&quot; for their gold investments. Usually they&apos;ve seen an ad promising &quot;direct control&quot; over their retirement money. No custodian telling them what to do. No waiting for approvals. Just them and their checkbook.
                        </p>

                        <p>
                            It sounds great. Here&apos;s the problem: for precious metals, checkbook IRAs are a trap. Let me explain why.
                        </p>

                        {/* What Is Checkbook IRA */}
                        <section id="what-is-checkbook" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What Is a Checkbook IRA?</h2>
                            </div>
                            <p>
                                A &quot;checkbook IRA&quot; (also called an LLC IRA or self-directed IRA LLC) is a structure where your self-directed IRA owns a limited liability company (LLC). You&apos;re the manager of that LLC, which means you can write checks and make investment decisions directly—without going through a custodian for every transaction.
                            </p>
                            <p>
                                For some investments—like buying rental property or making private loans—this can make sense. It streamlines things.
                            </p>
                            <p>
                                For precious metals? It&apos;s usually a recipe for disaster.
                            </p>
                        </section>

                        {/* How It Works */}
                        <section id="how-it-works" className="scroll-mt-32">
                            <h2>How the Structure Works</h2>
                            <p>
                                Here&apos;s the typical setup:
                            </p>
                            <ol>
                                <li>You open a self-directed IRA with a custodian that allows alternative investments</li>
                                <li>Your IRA invests in a newly-formed LLC (usually in a state like Delaware or Wyoming)</li>
                                <li>You become the manager of that LLC</li>
                                <li>The LLC opens a bank account—the &quot;checkbook&quot;</li>
                                <li>You can now write checks from the LLC to make investments</li>
                            </ol>
                            <p>
                                The appeal is obvious: instead of submitting paperwork to your custodian every time you want to make an investment, you just write a check. Faster, more flexible.
                            </p>
                        </section>

                        {/* Gold IRA Problems */}
                        <section id="gold-ira-problems" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Why It Doesn&apos;t Work for Gold</h2>
                            </div>
                            <p>
                                Here&apos;s where people get into trouble. They set up a checkbook IRA, buy gold through the LLC, and then... store it at home. After all, the LLC owns the gold, not them personally. So it should be fine, right?
                            </p>
                            <p>
                                <strong>Wrong.</strong>
                            </p>
                            <p>
                                The IRS requires IRA precious metals to be stored at an approved depository. It doesn&apos;t matter if an LLC is in the middle of the ownership chain. The metal still needs proper storage. Taking possession—even through an LLC—is treated as a distribution.
                            </p>

                            <Callout type="warning" title="The McNulty Case">
                                In McNulty v. Commissioner (2021), a couple set up exactly this structure. Their IRA owned an LLC, the LLC bought gold coins, and they stored the coins at home. The Tax Court ruled it was a prohibited transaction. Their entire IRA was disqualified, and they owed taxes and penalties on the full amount.
                            </Callout>
                        </section>

                        {/* Prohibited Transactions */}
                        <section id="prohibited-transactions" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Prohibited Transactions</h2>
                            </div>
                            <p>
                                With a checkbook IRA, it&apos;s incredibly easy to accidentally commit a prohibited transaction. These include:
                            </p>
                            <ul>
                                <li>Using IRA assets for personal benefit (even temporarily)</li>
                                <li>Storing IRA property at your home</li>
                                <li>Buying assets from or selling assets to &quot;disqualified persons&quot; (family members, etc.)</li>
                                <li>Using IRA funds to pay personal expenses</li>
                            </ul>
                            <p>
                                With a traditional custodian setup, the custodian acts as a guardrail. They won&apos;t approve transactions that violate the rules. With a checkbook IRA, you&apos;re on your own. One wrong move and your entire IRA is toast.
                            </p>
                        </section>

                        {/* Risks */}
                        <section id="risks" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Real Risks</h2>
                            </div>
                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-50 border border-red-100">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Full IRA Disqualification</h4>
                                        <p className="text-sm text-red-600 mt-1">One prohibited transaction can disqualify your entire IRA. Not just the problematic investment—the whole account. You&apos;ll owe taxes on everything.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-50 border border-red-100">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-700">Early Withdrawal Penalties</h4>
                                        <p className="text-sm text-red-600 mt-1">If you&apos;re under 59½ when your IRA is disqualified, add a 10% early withdrawal penalty on top of the income taxes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">Audit Risk</h4>
                                        <p className="text-sm text-amber-600 mt-1">The IRS knows about checkbook IRA schemes. These structures face higher scrutiny. An audit years later could uncover issues you didn&apos;t even know you had.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-700">No One to Blame But Yourself</h4>
                                        <p className="text-sm text-amber-600 mt-1">The company that set up your checkbook IRA isn&apos;t responsible for your compliance. If you mess up, you pay the price—not them.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Skip the Complexity</h3>
                                <p className="mb-6 text-gray-200">Find a Gold IRA company that handles everything the right way—no LLC gymnastics required.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find a Company <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Better Approach */}
                        <section id="better-approach" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">A Better Approach</h2>
                            </div>
                            <p>
                                For precious metals, the traditional custodian arrangement just works better:
                            </p>
                            <ul>
                                <li><strong>IRS-approved:</strong> The structure is explicitly allowed under the tax code</li>
                                <li><strong>Proper storage:</strong> Your metal goes to an approved depository automatically</li>
                                <li><strong>Compliance guardrails:</strong> The custodian prevents prohibited transactions</li>
                                <li><strong>Insurance:</strong> Depositories carry massive insurance policies</li>
                                <li><strong>Simpler:</strong> No LLC to maintain, no state filings, no complexity</li>
                            </ul>
                            <p>
                                Yes, you give up some &quot;control.&quot; But that control mostly means the ability to make mistakes the IRS will punish you for. The trade-off isn&apos;t worth it.
                            </p>
                            <p>
                                For gold investments, stick with a reputable Gold IRA company that uses standard custodian arrangements. See our <Link href="/reviews">company reviews</Link> for recommendations.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Checkbook IRA FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                <FileText className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
