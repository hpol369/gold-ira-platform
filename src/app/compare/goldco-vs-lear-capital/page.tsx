import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Goldco vs. Lear Capital: 2026 Comparison",
    description: "Goldco vs Lear Capital: Comparing the industry heavyweight against the 25-year veteran.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Minimum Investment", optionA: "$25,000", optionB: "$10,000", winner: "B" },
    { feature: "BBB Rating", optionA: "A+", optionB: "A+", winner: "Tie" },
    { feature: "Free Silver Promo", optionA: "Up to 10%", optionB: "Varies", winner: "A" },
    { feature: "Buyback Program", optionA: "Highest Price Guarantee", optionB: "Standard", winner: "A" },
    { feature: "Celebrity Endorsements", optionA: "Hannity, Chuck Norris", optionB: "Various", winner: "A" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Head-to-Head Comparison" },
    { id: "goldco-overview", label: "Goldco Overview" },
    { id: "lear-overview", label: "Lear Capital Overview" },
    { id: "fees", label: "Fees & Minimums" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Goldco vs. Lear Capital: 2026 Comparison",
    "description": "Goldco vs Lear Capital comparison.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18"
};

export default function GoldcoVsLearPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Heavyweight Clash
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Goldco vs. Lear Capital
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Two of the biggest names in the industry. One is the current market leader (Goldco); the other is a survivor with 25+ years of history (Lear).
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                        <p className="lead">
                            (Intro: Frame the comparison. Goldco is the dominant force right now with huge promos. Lear Capital is the experienced veteran.)
                        </p>

                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Goldco (Top Pick)"
                                summary="Goldco edges out Lear Capital due to their stronger buyback guarantee and massive free silver promotions. However, if you have a smaller account ($10k-$25k), Lear Capital is the only option as Goldco requires $25k."
                                bestFor="Growth & Promos (Goldco) vs Lower Minimums (Lear)"
                            />
                        </section>

                        <section id="comparison" className="scroll-mt-32">
                            <h2>Head-to-Head Comparison</h2>
                            <ComparisonTable
                                optionAName="Goldco"
                                optionBName="Lear Capital"
                                rows={comparisonRows}
                            />
                        </section>

                        <section id="goldco-overview" className="scroll-mt-32">
                            <h2>Goldco Overview</h2>
                            <p>(Overview of Goldco.)</p>
                        </section>

                        <section id="lear-overview" className="scroll-mt-32">
                            <h2>Lear Capital Overview</h2>
                            <p>(Overview of Lear.)</p>
                        </section>

                        <section id="fees" className="scroll-mt-32">
                            <h2>Fees & Minimums</h2>
                            <p>(Comparison of fees.)</p>
                        </section>

                        <section id="pros-cons" className="scroll-mt-32">
                            <h2>Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-8 not-prose">
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Goldco Advantages
                                    </h3>
                                    <ul className="space-y-2 text-green-800">
                                        <li>• "Highest Price" Buyback</li>
                                        <li>• 10% Free Silver Promos</li>
                                        <li>• #1 Rated on most sites</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Lear Capital Advantages
                                    </h3>
                                    <ul className="space-y-2 text-blue-800">
                                        <li>• Lower $10k Minimum</li>
                                        <li>• 25+ Year History</li>
                                        <li>• Price Lock Guarantee</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find Your Match</h3>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Start Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />
                    </article>
                </div>
            </Container>
        </main>
    );
}
