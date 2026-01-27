import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "How to Transfer 401k to Gold: Simple Guide (2026)",
    description: "Learn how to transfer your 401k to gold in plain English. It's called a rollover and it's 100% tax-free when done right. Simple 3-step process explained.",
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "How to Transfer 401k to Gold: Simple Guide (2026)",
            "description": "Learn how to transfer your 401k to gold in plain English. It's called a rollover and it's 100% tax-free when done right. Simple 3-step process explained.",
            "image": "https://richdadretirement.com/images/transfer-401k-gold.jpg",
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
                    "name": "Can I transfer my 401k to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can transfer your 401k to gold. The IRS calls this a 'rollover.' When done as a direct rollover (money goes straight from your 401k to your new gold IRA), it's completely tax-free and penalty-free."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is transferring a 401k to gold the same as a rollover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! 'Transfer' and 'rollover' mean the same thing when talking about moving your 401k to gold. The technical term is 'rollover,' but many people call it a transfer. Both refer to moving your retirement money from a 401k to a Gold IRA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will I pay taxes if I transfer my 401k to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No taxes if you do a direct transfer. With a direct rollover, funds move straight from your 401k to your Gold IRA custodian. Since you never touch the money, there's no tax. It's treated as moving money from one retirement account to another."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to transfer a 401k to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most 401k to gold transfers take 2-4 weeks from start to finish. The longest wait is usually for your old 401k administrator to process the paperwork. Your gold IRA company handles most of the work for you."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need to leave my job to transfer my 401k to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not necessarily. If you're 59½ or older, most plans allow transfers while still employed. If you're younger, check with your HR department. And you can always transfer 401ks from previous jobs at any time."
                    }
                }
            ]
        }
    ]
};

export default function Transfer401kToGoldPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />

            {/* Header */}
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            PLAIN ENGLISH GUIDE
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                            How to Transfer Your 401k to Gold
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                            A simple, no-jargon guide to moving your retirement savings into physical gold.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <article className="max-w-3xl mx-auto">

                    {/* Direct Answer Box */}
                    <div className="bg-gradient-to-br from-secondary/20 to-amber-500/10 rounded-2xl p-8 border border-secondary/30 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2">The Short Answer</h2>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    <strong className="text-white">Yes, you can transfer your 401k to gold.</strong> It&apos;s called a &quot;rollover&quot; and it&apos;s <span className="text-secondary font-semibold">100% tax-free</span> when done right. You don&apos;t need special permission. You don&apos;t need to be a certain age. And no, it&apos;s not complicated.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary max-w-none">

                        <h2 className="text-white">What &quot;Transfer&quot; Actually Means</h2>
                        <p>
                            When people say &quot;transfer my 401k to gold,&quot; they mean moving their retirement money from a regular 401k into something called a <strong>Gold IRA</strong>&mdash;a special retirement account that holds physical gold instead of stocks and mutual funds.
                        </p>
                        <p>
                            The official IRS term for this is a &quot;rollover.&quot; Same thing, fancier word. The important part: <strong>your money stays in a tax-protected retirement account the whole time.</strong> Nothing changes except what your money is invested in.
                        </p>

                        <Callout type="tip" title="Quick Clarification">
                            &quot;Transfer&quot; and &quot;rollover&quot; mean the same thing. We&apos;ll use both words in this guide. Don&apos;t let the terminology confuse you&mdash;it&apos;s all the same process.
                        </Callout>

                        <h2 className="text-white">3 Simple Steps to Transfer Your 401k to Gold</h2>

                        <div className="not-prose my-8">
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Pick a Gold IRA Company</h4>
                                        <p className="text-slate-400 mt-2">These companies specialize in helping people move their retirement money into gold. They handle the paperwork, set up your new account, and guide you through the process. Most offer free consultations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Open Your Gold IRA Account</h4>
                                        <p className="text-slate-400 mt-2">Your gold IRA company sets this up for you. It takes about 24-48 hours. You&apos;ll fill out some forms and provide ID&mdash;just like opening a bank account.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Request the Transfer</h4>
                                        <p className="text-slate-400 mt-2">Your new company contacts your old 401k and requests the transfer. The money moves directly between accounts (this is called a &quot;direct rollover&quot;). You never touch the money, so there&apos;s no tax. Takes 2-4 weeks total.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            That&apos;s it. Three steps. The gold IRA company does most of the work&mdash;that&apos;s literally their job.
                        </p>

                        <h2 className="text-white">No Taxes, No Penalties</h2>
                        <p>
                            Here&apos;s what many people worry about: <em>&quot;Won&apos;t I get hit with taxes if I move my 401k?&quot;</em>
                        </p>
                        <p>
                            <strong>No.</strong> As long as you do a <strong>direct rollover</strong> (money goes straight from your old account to your new account), there&apos;s no tax. The IRS sees it as moving money from one retirement account to another&mdash;not as a withdrawal.
                        </p>

                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 not-prose my-8">
                            <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                Tax-Free Transfer Checklist
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-300">Use a <strong className="text-white">direct rollover</strong> (money goes custodian to custodian)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-300">Don&apos;t take a check made out to you personally</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-300">Let your gold IRA company handle the paperwork</span>
                                </li>
                            </ul>
                            <p className="text-slate-400 mt-4 text-sm">Follow these rules and you pay zero tax on your transfer.</p>
                        </div>

                        <h2 className="text-white">Want the Full Details?</h2>
                        <p>
                            This guide covers the basics. If you want to dive deeper&mdash;understand direct vs. indirect rollovers, learn about eligibility while still employed, or see the complete timeline&mdash;check out our comprehensive guide:
                        </p>

                        <div className="not-prose my-8">
                            <Link href="/guide/401k-to-gold-rollover" className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg group-hover:text-secondary transition-colors">Complete 401k to Gold IRA Rollover Guide</h4>
                                    <p className="text-slate-400 mt-1">Everything you need to know: eligibility rules, tax implications, step-by-step instructions, and common mistakes to avoid.</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-secondary" />
                            </Link>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-white">Frequently Asked Questions</h2>

                        <div className="space-y-4 not-prose">
                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">Can I transfer my 401k to gold?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    Yes! The IRS calls this a &quot;rollover.&quot; When done as a direct rollover (money goes straight from your 401k to your new gold IRA), it&apos;s completely tax-free and penalty-free.
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">Is &quot;transfer&quot; the same as &quot;rollover&quot;?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    Yes! &quot;Transfer&quot; and &quot;rollover&quot; mean the same thing when talking about moving your 401k to gold. The technical term is &quot;rollover,&quot; but many people call it a transfer. Both refer to moving your retirement money from a 401k to a Gold IRA.
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">Will I pay taxes on the transfer?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    No taxes if you do a direct transfer. With a direct rollover, funds move straight from your 401k to your Gold IRA custodian. Since you never touch the money, there&apos;s no tax. It&apos;s treated as moving money from one retirement account to another.
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">How long does the transfer take?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    Most 401k to gold transfers take 2-4 weeks from start to finish. The longest wait is usually for your old 401k administrator to process the paperwork. Your gold IRA company handles most of the work for you.
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">Do I need to quit my job first?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    Not necessarily. If you&apos;re 59 1/2 or older, most plans allow transfers while still employed. If you&apos;re younger, check with your HR department. And you can always transfer 401ks from previous jobs at any time.
                                </p>
                            </details>
                        </div>

                        {/* CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Transfer Your 401k to Gold?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Take our 60-second quiz to find the best gold IRA company for your situation.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Best Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </article>
            </Container>

            {/* Augusta CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="default" trackSource="guide-transfer-401k-gold" />
                </Container>
            </section>
        </main>
    );
}
