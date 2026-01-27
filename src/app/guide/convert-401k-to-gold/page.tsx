import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, CheckCircle2, ShieldCheck, Coins, TrendingUp, Lock, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "How to Convert 401k to Gold: Step-by-Step (2026)",
    description: "Converting your 401k to gold is possible and tax-free. The IRS calls it a rollover. Learn the simple steps to convert your retirement savings to physical gold.",
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "How to Convert 401k to Gold: Step-by-Step (2026)",
            "description": "Converting your 401k to gold is possible and tax-free. The IRS calls it a rollover. Learn the simple steps to convert your retirement savings to physical gold.",
            "image": "https://richdadretirement.com/images/convert-401k-gold.jpg",
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
                    "name": "Can I convert my 401k to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can convert your 401k to gold. The process is called a 'rollover' and allows you to move your retirement money from a 401k into a Gold IRA. When done correctly as a direct rollover, it's completely tax-free."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's the difference between 'convert' and 'rollover'?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They're the same thing! 'Convert' is the everyday word people use. 'Rollover' is the official IRS term. Both mean moving your retirement money from one account (your 401k) to another (a Gold IRA)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why would I convert my 401k to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "People convert 401ks to gold for several reasons: protection against inflation, diversification away from stocks, owning something tangible, and as a hedge against economic uncertainty. Gold has been a store of value for thousands of years."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is there a penalty for converting 401k to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No penalty if you do a direct rollover. The money moves directly from your 401k to your Gold IRA custodian. Since it stays within retirement accounts, there's no early withdrawal penalty and no taxes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much of my 401k should I convert to gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most financial advisors suggest 10-20% of your retirement portfolio in precious metals. This gives you meaningful protection without putting all your eggs in one basket. You don't have to convert your entire 401k."
                    }
                }
            ]
        }
    ]
};

export default function Convert401kToGoldPage() {
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
                            CONVERSION GUIDE
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                            How to Convert Your 401k to Gold
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                            A step-by-step guide to converting your retirement savings into physical gold&mdash;without the confusing jargon.
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
                                    <strong className="text-white">Converting your 401k to gold is possible and tax-free.</strong> The IRS calls it a &quot;rollover.&quot; It&apos;s a simple process where your retirement money moves from your 401k to a <span className="text-secondary font-semibold">Gold IRA</span>&mdash;a special retirement account that holds physical gold.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-secondary max-w-none">

                        <h2 className="text-white">&quot;Convert&quot; = &quot;Rollover&quot;</h2>
                        <p>
                            Let&apos;s clear up the terminology first. When you search for &quot;convert 401k to gold,&quot; you&apos;re looking for what the IRS officially calls a <strong>rollover</strong>.
                        </p>
                        <p>
                            Same thing, different words. &quot;Convert&quot; is what normal people say. &quot;Rollover&quot; is what the IRS says. Either way, it means <strong>moving your retirement money from a 401k into a Gold IRA</strong>.
                        </p>
                        <p>
                            A Gold IRA is just like a regular IRA, except instead of holding stocks and mutual funds, it holds physical gold (and sometimes silver, platinum, or palladium).
                        </p>

                        <Callout type="tip" title="Key Point">
                            Your money stays in a tax-protected retirement account throughout the conversion. You&apos;re not &quot;cashing out&quot;&mdash;you&apos;re just changing what your retirement money is invested in.
                        </Callout>

                        <h2 className="text-white">Why Convert Your 401k to Gold?</h2>
                        <p>
                            People convert their 401k to gold for several compelling reasons:
                        </p>

                        <div className="not-prose my-8">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Inflation Protection</h4>
                                    <p className="text-slate-400 text-sm">Gold has historically held its value when the dollar loses purchasing power. It&apos;s a hedge against inflation.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Diversification</h4>
                                    <p className="text-slate-400 text-sm">Most 401ks are 100% in stocks and bonds. Gold moves differently than paper assets, reducing overall portfolio risk.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                                        <Coins className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Tangible Asset</h4>
                                    <p className="text-slate-400 text-sm">Unlike stocks, gold is real and physical. You&apos;re not relying on a company&apos;s performance or a government&apos;s promises.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Economic Uncertainty</h4>
                                    <p className="text-slate-400 text-sm">When markets crash, gold often rises. It&apos;s been a store of value for 5,000 years&mdash;through every crisis.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-white">Steps to Convert Your 401k to Gold</h2>

                        <div className="not-prose my-8">
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Choose a Gold IRA Company</h4>
                                        <p className="text-slate-400 mt-2">These are specialized companies that help you set up a Gold IRA and convert your 401k. They handle the paperwork, coordinate with your old 401k provider, and guide you through the whole process. Most offer free consultations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Open Your Gold IRA</h4>
                                        <p className="text-slate-400 mt-2">Your gold IRA company will set up your new account with an IRS-approved custodian. This takes 1-2 days. You&apos;ll provide basic information and ID&mdash;nothing complicated.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Initiate the Conversion (Rollover)</h4>
                                        <p className="text-slate-400 mt-2">Your gold IRA company contacts your 401k administrator and requests a direct rollover. Funds transfer directly&mdash;you never touch the money. This takes 2-3 weeks depending on your old plan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Purchase Your Gold</h4>
                                        <p className="text-slate-400 mt-2">Once funds arrive, you choose which IRS-approved gold coins or bars to buy. Your gold IRA company will explain the options. The gold is shipped to an insured depository and held in your name.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-white">No Tax, No Penalty</h2>
                        <p>
                            The biggest question people have: <em>&quot;Will I get taxed for converting my 401k to gold?&quot;</em>
                        </p>
                        <p>
                            <strong>No&mdash;if you do it right.</strong> A &quot;direct rollover&quot; means the money goes straight from your old 401k to your new Gold IRA custodian. You never receive a check. You never touch the money.
                        </p>
                        <p>
                            Because the money stays within retirement accounts, the IRS doesn&apos;t consider it a withdrawal. No income tax. No early withdrawal penalty. It&apos;s simply moving your retirement savings from one account to another.
                        </p>

                        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20 not-prose my-8">
                            <h4 className="font-bold text-green-400 text-lg mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                Direct Rollover = Tax-Free
                            </h4>
                            <ul className="space-y-3 text-green-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>Money transfers custodian to custodian</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>You never receive a check or touch the funds</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>Zero taxes. Zero penalties. Zero hassle.</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-white">Learn More About Gold IRA Rules</h2>
                        <p>
                            Want to understand all the details? Our comprehensive rules guide covers everything: what gold is IRS-approved, storage requirements, contribution limits, and more.
                        </p>

                        <div className="not-prose my-8">
                            <Link href="/gold-ira-rules" className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg group-hover:text-secondary transition-colors">Complete Gold IRA Rules Guide</h4>
                                    <p className="text-slate-400 mt-1">IRS requirements, approved metals, storage rules, contribution limits, and penalties to avoid.</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-secondary" />
                            </Link>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-white">Frequently Asked Questions</h2>

                        <div className="space-y-4 not-prose">
                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">Can I convert my 401k to gold?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    Yes! The process is called a &quot;rollover&quot; and allows you to move your retirement money from a 401k into a Gold IRA. When done correctly as a direct rollover, it&apos;s completely tax-free.
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">What&apos;s the difference between &quot;convert&quot; and &quot;rollover&quot;?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    They&apos;re the same thing! &quot;Convert&quot; is the everyday word people use. &quot;Rollover&quot; is the official IRS term. Both mean moving your retirement money from one account (your 401k) to another (a Gold IRA).
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">Why would I convert my 401k to gold?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    People convert 401ks to gold for several reasons: protection against inflation, diversification away from stocks, owning something tangible, and as a hedge against economic uncertainty. Gold has been a store of value for thousands of years.
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">Is there a penalty for converting?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    No penalty if you do a direct rollover. The money moves directly from your 401k to your Gold IRA custodian. Since it stays within retirement accounts, there&apos;s no early withdrawal penalty and no taxes.
                                </p>
                            </details>

                            <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                    <h4 className="text-lg font-bold">How much should I convert to gold?</h4>
                                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-slate-400">
                                    Most financial advisors suggest 10-20% of your retirement portfolio in precious metals. This gives you meaningful protection without putting all your eggs in one basket. You don&apos;t have to convert your entire 401k.
                                </p>
                            </details>
                        </div>

                        {/* CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Convert Your 401k to Gold?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Take our quick quiz to find the gold IRA company that&apos;s right for your investment amount and goals.</p>
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
                    <AugustaCTA variant="footer" linkContext="default" trackSource="guide-convert-401k-gold" />
                </Container>
            </section>
        </main>
    );
}
