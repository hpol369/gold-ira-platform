import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, Shield, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "How to Move 401k to Gold: Easy Guide (2026)",
    description: "Learn how to move your 401k to gold with a simple, tax-free direct rollover. Step-by-step guide explains the process in plain language.",
};

const faqs = [
    {
        question: "Is moving my 401k to gold legal?",
        answer: "Yes, 100% legal. The IRS allows you to roll over funds from a 401(k) to a self-directed IRA that holds physical gold. This has been permitted since 1997 when the Taxpayer Relief Act expanded what IRAs could hold."
    },
    {
        question: "Will I pay taxes if I move my 401k to gold?",
        answer: "No, not if you do a direct rollover. With a direct rollover, the money moves straight from your 401(k) to your new Gold IRA without you ever touching it. No taxes, no penalties. It's completely tax-free."
    },
    {
        question: "Can I move my 401k to gold while still employed?",
        answer: "It depends on your plan. If you're 59 1/2 or older, most plans allow 'in-service distributions.' If you're younger, check with your HR department. You can always roll over 401(k)s from previous employers at any time."
    },
    {
        question: "How long does it take to move a 401k to gold?",
        answer: "The entire process typically takes 2-4 weeks. Most of that time is waiting for your old 401(k) administrator to process the transfer. The actual paperwork on your end takes about 15-30 minutes."
    },
    {
        question: "Do I have to move all of my 401k?",
        answer: "No! You can move just a portion. Many people move 10-20% of their retirement savings to gold for diversification while leaving the rest in traditional investments. You choose the amount."
    }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "How to Move 401k to Gold: Easy Guide (2026)",
            "description": "Learn how to move your 401k to gold with a simple, tax-free direct rollover. Step-by-step guide explains the process in plain language.",
            "image": "https://richdadretirement.com/images/move-401k-to-gold-guide.jpg",
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
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

export default function Move401kToGoldPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />

            {/* Header */}
            <header className="bg-slate-800/50 py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-1.5 text-sm font-semibold text-green-400 mb-6 border border-green-500/30">
                            <CheckCircle2 className="w-4 h-4" />
                            SIMPLE GUIDE
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            How to Move Your 401k to Gold
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            A straightforward explanation of how to transfer your retirement savings to physical gold, written in plain English.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <article className="prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary max-w-none">

                        {/* Direct Answer Box */}
                        <div className="not-prose mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30">
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The Short Answer</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                <strong className="text-green-400">Moving your 401k to gold is straightforward.</strong> The IRS allows direct rollovers that are completely tax-free. Your money moves directly from your old account to your new Gold IRA. You never touch it, so there are no taxes or penalties.
                            </p>
                        </div>

                        {/* What Moving Your 401k Means */}
                        <h2 className="text-white">What &quot;Moving&quot; Your 401k Actually Means</h2>
                        <p>
                            When people say they want to &quot;move&quot; their 401k to gold, what they&apos;re really describing is a <strong>rollover</strong>. This is a perfectly normal, IRS-approved way to transfer retirement funds between accounts.
                        </p>
                        <p>
                            Here&apos;s what happens: Your 401(k) currently holds paper investments like stocks, bonds, and mutual funds. When you &quot;move&quot; it to gold, you&apos;re transferring some or all of those funds into a special type of IRA called a <strong>Self-Directed IRA</strong> that can hold physical gold, silver, platinum, and palladium.
                        </p>
                        <p>
                            The key word is <em>transfer</em>. Your money moves from one retirement account to another. It stays tax-sheltered the entire time.
                        </p>

                        {/* Direct Rollover Explanation */}
                        <h2 className="text-white">The Direct Rollover: Why It&apos;s Tax-Free</h2>
                        <p>
                            There are two ways to move retirement funds: direct and indirect. You want the <strong>direct rollover</strong>.
                        </p>
                        <p>
                            With a direct rollover:
                        </p>
                        <ul>
                            <li>Money goes directly from your old 401(k) to your new Gold IRA</li>
                            <li>You never touch the funds</li>
                            <li>No taxes are withheld</li>
                            <li>No 60-day deadline to worry about</li>
                            <li>Completely tax-free and penalty-free</li>
                        </ul>
                        <p>
                            It&apos;s like moving money between two bank accounts you own. The IRS doesn&apos;t consider it a withdrawal because you&apos;re not actually taking the money out of retirement savings. You&apos;re just changing where it&apos;s held.
                        </p>

                        {/* Simple 4-Step Process */}
                        <h2 className="text-white">Simple 4-Step Process</h2>
                        <p>
                            Moving your 401k to gold involves four basic steps:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Choose a Gold IRA Company</h4>
                                    <p className="text-slate-400">Pick a company to guide you through the process. They handle most of the paperwork. This takes about 15 minutes of research and one phone call.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Open Your Gold IRA Account</h4>
                                    <p className="text-slate-400">Fill out a simple application to open your new account. Your Gold IRA company walks you through this. Takes about 10-15 minutes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Request the Direct Rollover</h4>
                                    <p className="text-slate-400">Your new custodian contacts your old 401(k) administrator and requests the transfer. You sign some paperwork. They handle the rest.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Select and Purchase Your Gold</h4>
                                    <p className="text-slate-400">Once funds arrive (1-3 weeks), choose which gold products you want. Your dealer helps you select IRS-approved coins or bars. The gold is shipped to a secure depository.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            That&apos;s it. The whole process takes 2-4 weeks, and most of that time is just waiting for your old plan to process the transfer.
                        </p>

                        {/* Learn More Links */}
                        <div className="not-prose my-10 p-6 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-secondary" />
                                Want More Details?
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/guide/401k-to-gold-rollover" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                        <span>Complete 401k to Gold Rollover Guide (detailed version)</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/compare/gold-ira-vs-401k" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                        <span>Gold IRA vs. 401k: Which is Better?</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Move Your 401k?</h3>
                                <p className="mb-6 text-gray-200">Find the best Gold IRA company for your situation in under 2 minutes.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-white">Frequently Asked Questions</h2>

                        <div className="space-y-4 not-prose">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">{faq.question}</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>

                        <div className="mt-12">
                            <AuthorBox />
                        </div>

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-move-401k-gold" />
                </Container>
            </section>
        </main>
    );
}
