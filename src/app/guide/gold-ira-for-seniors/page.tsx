import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ShieldCheck, Calendar, DollarSign, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA for Seniors: Retirement Protection Guide (2026)",
    description: "Is a Gold IRA right for seniors? Learn about RMD rules, safe withdrawal strategies, and how to protect your nest egg from inflation and market crashes.",
};

const takeaways = [
    "Seniors use Gold IRAs primarily for wealth preservation, not aggressive growth.",
    "You can perform a tax-free rollover from 401(k)s or IRAs at any age.",
    "RMDs (Required Minimum Distributions) start at age 73 for Traditional Gold IRAs.",
    "You can take RMDs 'in-kind' (receiving the actual physical metal) or cash.",
    "Avoid long-term annuities or illiquid coins; stick to liquid bullion.",
    "Gold protects purchasing power as you live on a fixed income."
];

const tocItems = [
    { id: "why-seniors", label: "Why Seniors Choose Gold" },
    { id: "preservation", label: "Wealth Preservation" },
    { id: "rmd-rules", label: "RMD Rules & Distributions" },
    { id: "risks-for-seniors", label: "Risks for Seniors" },
    { id: "scams", label: "Scam Warning" },
    { id: "getting-started", label: "Getting Started" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA for Seniors: A Protection Guide",
            "description": "Is a Gold IRA right for seniors? Learn about RMD rules, safe withdrawal strategies, and how to protect your nest egg from inflation and market crashes.",
            "image": "https://richdadretirement.com/images/seniors-gold-IRA-cover.jpg",
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
                    "name": "Is it too late to start a Gold IRA at 70?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. In fact, many seniors wait until retirement to move their 401(k) funds into gold to protect what they've earned. As long as you have funds to roll over, you can open a Gold IRA at 70, 75, or even 80."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do RMDs work with physical gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "At age 73, you must take Required Minimum Distributions (RMDs) from Traditional IRAs. With a Gold IRA, you have two choices: 1) Sell enough metal to cover the cash amount and withdraw the cash, or 2) Take an 'in-kind' distribution where the metal is shipped to you (distributions are taxed as income either way)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does gold affect my Social Security?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Owning gold inside an IRA does not affect Social Security benefits. However, distributions from a Traditional IRA (whether gold or stock) count as taxable income, which could potentially increase the taxes you pay on your Social Security benefits."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraForSeniorsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-800/50 py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Retirement Protection
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Gold IRA for Seniors
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Protecting your life's work. A guide to using physical gold to preserve your nest egg, hedge against inflation, and leave a lasting legacy.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        <p className="lead">
                            Here&apos;s the uncomfortable truth nobody wants to tell you: if you&apos;re 65 and the market drops 40% tomorrow, you probably won&apos;t live long enough to see it recover. Harsh? Yes. True? Also yes.
                        </p>
                        <p>
                            That&apos;s why the investment game changes completely when you hit retirement age. You&apos;ve spent decades building your nest egg. Now the goal isn&apos;t to grow it—it&apos;s to <em>not lose it</em>. And that&apos;s exactly what gold is for.
                        </p>

                        {/* Why Seniors */}
                        <section id="why-seniors" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Why Gold Makes Sense for Seniors</h2>
                            </div>
                            <p>
                                As you rely on your savings for income, two things become your enemy: <strong>Market Volatility</strong> and <strong>Inflation</strong>.
                            </p>
                            <ul>
                                <li><strong>Volatility:</strong> If the market drops 20% right when you need to withdraw money, you deplete your portfolio much faster (Sequence of Returns Risk). Gold often rises when stocks fall, buffering this risk.</li>
                                <li><strong>Inflation:</strong> Your living expenses rise every year. Cash and bonds often fail to keep up. Gold historically matches or beats inflation, preserving your purchasing power.</li>
                            </ul>
                        </section>

                        {/* Preservation */}
                        <section id="preservation" className="scroll-mt-32">
                            <h2 className="text-white">The Ultimate Insurance Policy</h2>
                            <p>
                                Think of a Gold IRA as homeowner's insurance for your portfolio. You hope your house doesn't burn down (market crash), but if it does, you're glad you have coverage. Allocating 10-15% to gold ensures that even in a financial disaster, a portion of your wealth remains safe and accessible.
                            </p>
                        </section>

                        {/* RMD Rules */}
                        <section id="rmd-rules" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Navigating RMDs</h2>
                            </div>
                            <p>
                                Traditional Gold IRAs are subject to Required Minimum Distributions (RMDs) starting at age 73.
                            </p>
                            <Callout type="tip" title="In-Kind Distributions">
                                You don't have to sell your gold to take an RMD! You can request an "in-kind distribution." The custodian ships the physical coins/bars to your house. You pay taxes on the value, but you keep the gold.
                            </Callout>
                            <p>
                                <strong>Note:</strong> Roth Gold IRAs generally have NO RMDs during your lifetime, making them excellent for leaving tax-free inheritance.
                            </p>
                        </section>

                        {/* Risks for Seniors */}
                        <section id="risks-for-seniors" className="scroll-mt-32">
                            <h2 className="text-white">Risks Specific to Seniors</h2>
                            <p>
                                While gold is safe, certain products are not suitable for seniors:
                            </p>
                            <ul>
                                <li><strong>Avoid "Rare" Coins:</strong> They are hard to value and hard to sell quickly. Stick to liquid bullion like American Eagles.</li>
                                <li><strong>Avoid Home Storage:</strong> Do not try to store IRA gold at home. The tax penalties could devastate your savings.</li>
                                <li><strong>Watch Liquidity:</strong> While gold is liquid, it takes a few days to sell and get cash. Keep enough cash on hand for immediate needs.</li>
                            </ul>
                        </section>

                        {/* Scams */}
                        <section id="scams" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Senior Fraud Alert</h2>
                            </div>
                            <p>
                                Seniors are the #1 target for gold scams. dishonest dealers use fear tactics ("The dollar is collapsing next week!") to pressure seniors into buying overpriced coins.
                            </p>
                            <p>
                                <strong>The Rule:</strong> If they pressure you, hang up. Legitimate companies are patient and educational.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find a Senior-Friendly Company</h3>
                                <p className="mb-6 text-gray-200">We've identified companies that specialize in helping seniors with rollovers and RMD management.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">See Our Top Recommendations <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-white">Senior Gold FAQ</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                                <ShieldCheck className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-400">
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
