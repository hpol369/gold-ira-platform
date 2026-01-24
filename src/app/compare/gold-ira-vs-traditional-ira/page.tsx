import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, TrendingUp, ShieldCheck, DollarSign, Lock, Scale } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA vs. Traditional IRA: Pros, Cons & Key Differences (2026)",
    description: "Deciding between a Gold IRA and a Traditional Stock IRA? We compare returns, risks, fees, and tax rules to help you choose the right retirement path.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Primary Asset", optionA: "Physical Metals (Gold/Silver)", optionB: "Stocks, Bonds, Mutual Funds", winner: "B" }, // B for diversity of standard assets usually
    { feature: "Growth Potential", optionA: "Steady / Wealth Preservation", optionB: "High / Wealth Accumulation", winner: "B" },
    { feature: "Risk Level", optionA: "Low (Store of Value)", optionB: "Medium/High (Market Volatility)", winner: "A" },
    { feature: "Inflation Protection", optionA: "Excellent", optionB: "Poor (Cash/Bonds lose value)", winner: "A" },
    { feature: "Manager", optionA: "Self-Directed (You choose)", optionB: "Fund Manager / Algorithm", winner: "A" },
    { feature: "Fees", optionA: "Higher (Custodian + Storage)", optionB: "Lower (Expense ratios)", winner: "B" },
    { feature: "Tax Treatment", optionA: "Tax-Deferred (Same as Trad)", optionB: "Tax-Deferred", winner: "Tie" },
    { feature: "Tangibility", optionA: "100% Tangible Asset", optionB: "Electronic/Paper Asset", winner: "A" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "what-is-gold-ira", label: "What is a Gold IRA?" },
    { id: "what-is-traditional-ira", label: "What is a Traditional IRA?" },
    { id: "key-differences", label: "Key Differences" },
    { id: "performance", label: "Performance Comparison" },
    { id: "fees", label: "Fee Structures" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA vs. Traditional IRA: Which is Better?",
            "description": "Deciding between a Gold IRA and a Traditional Stock IRA? We compare returns, risks, fees, and tax rules to help you choose the right retirement path.",
            "image": "https://richdadretirement.com/images/gold-vs-traditional-ira-cover.jpg",
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
                    "name": "Is a Gold IRA the same as a Traditional IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Legally, yes. A Gold IRA is technically a self-directed Traditional IRA. It follows the same tax rules (pre-tax contributions, tax-deferred growth). The difference is solely the *assets* inside it. Standard IRAs hold paper assets; Gold IRAs hold physical metals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which performs better: Gold or Stocks?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Stocks generally offer higher growth during economic booms. Gold acts as insurance and typically outperforms during recessions, high inflation, and market crashes. A balanced portfolio uses both to smooth out volatility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I transfer my Traditional IRA to a Gold IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can perform a tax-free rollover or transfer from an existing Traditional IRA to a Gold IRA. This allows you to diversify your savings without triggering any taxes or penalties."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraVsTraditionalIraPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Retirement Planning 101
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold IRA vs. Traditional IRA
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Growth vs. Safety. Paper vs. Physical. We compare the two most popular retirement accounts to help you decide how to balance your portfolio.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <p className="lead">
                            The choice between a <strong>Gold IRA</strong> and a <strong>Traditional (Stock) IRA</strong> often confuses investors. The truth is, they are legally the same vehicle—just with different engines under the hood. One powers growth, the other powers protection.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="It's Not 'Either/Or'"
                                summary="Smart investors don't choose between growth and safety—they choose both. Use a Traditional Stock IRA to build wealth during bull markets, and use a Gold IRA to preserve that wealth during bear markets and inflation."
                                bestFor="A balanced, resilient retirement portfolio."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Side-by-Side Comparison</h2>
                            <p>
                                Understanding the trade-offs between paper assets and physical metals:
                            </p>
                            <ComparisonTable
                                optionAName="Gold IRA"
                                optionBName="Traditional (Stock) IRA"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* What is Gold IRA */}
                        <section id="what-is-gold-ira" className="scroll-mt-32">
                            <h2>What is a Gold IRA?</h2>
                            <p>
                                A self-directed IRA that allows you to invest in IRS-approved precious metals. It gives you direct ownership of physical assets that exist outside the banking system.
                            </p>
                        </section>

                        {/* What is Traditional IRA */}
                        <section id="what-is-traditional-ira" className="scroll-mt-32">
                            <h2>What is a Traditional Stock IRA?</h2>
                            <p>
                                The standard retirement account most Americans have. It typically holds a mix of stocks, bonds, and mutual funds. It relies on the performance of companies and the stability of the financial system.
                            </p>
                        </section>

                        {/* Key Differences */}
                        <section id="key-differences" className="scroll-mt-32">
                            <h2>Key Investment Differences</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <h4 className="font-bold text-amber-400 mb-2">Gold IRA</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                                        <li><strong className="text-white">Goal:</strong> Wealth Preservation</li>
                                        <li><strong className="text-white">Asset:</strong> Real, tangible metal</li>
                                        <li><strong className="text-white">Best Time:</strong> Crises, Inflation, Uncertainty</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <h4 className="font-bold text-blue-400 mb-2">Traditional Stock IRA</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                                        <li><strong className="text-white">Goal:</strong> Wealth Accumulation</li>
                                        <li><strong className="text-white">Asset:</strong> Shares of companies (paper)</li>
                                        <li><strong className="text-white">Best Time:</strong> Economic booms, Low inflation</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Performance */}
                        <section id="performance" className="scroll-mt-32">
                            <h2>Performance: The Tortoise vs. The Hare</h2>
                            <p>
                                Stocks (Traditional IRA) tend to act like the hare—sprinting ahead during good times but crashing hard during corrections. Gold acts like the tortoise—moving steadily, often plodding along, but winning the race when the hare crashes.
                            </p>
                        </section>

                        {/* Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <h2>Fee Structures</h2>
                            <p>
                                <strong>Gold IRA Fees:</strong> Typically flat fees ($150-$250/year) for custodian and storage. This becomes extremely cost-effective for larger accounts.
                                <br />
                                <strong>Traditional IRA Fees:</strong> Often percentage-based (AUM fees or expense ratios). While they seem small (e.g. 1%), they compound over time and can eat up significant value in large portfolios.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Get the Best of Both Worlds</h3>
                                <p className="mb-6 text-gray-200">Learn how to easily move a portion of your Traditional IRA into Gold without taxes or penalties.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/guide/gold-ira-guide">Get the Free Gold IRA Kit <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                                <Scale className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-300">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                    </article>
                </div>
            </Container>
        </main>
    );
}
