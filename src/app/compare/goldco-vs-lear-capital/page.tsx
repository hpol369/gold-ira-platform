import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Goldco vs. Lear Capital: 2026 Comparison",
    description: "Goldco vs Lear Capital: Comparing the industry heavyweight against the 25-year veteran. See fees, minimums, buyback policies, and our top pick for 2026.",
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
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <Navbar />
            <header className="bg-slate-50 border-b border-slate-200 py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-[#B22234] mb-6">
                        Heavyweight Clash
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Goldco vs. Lear Capital
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Two of the biggest names in the industry. One is the current market leader (Goldco); the other is a survivor with 25+ years of history (Lear).
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">
                        <p className="lead">
                            This is a clash between the current market leader and a seasoned veteran. <strong>Goldco</strong> dominates the Gold IRA industry with aggressive marketing, celebrity endorsements, and massive promotional offers. <strong>Lear Capital</strong> has been quietly operating since 1997—surviving recessions, lawsuits, and market crashes to become one of the most established names in the business. Which one deserves your retirement savings?
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
                            <p>
                                Goldco has become the dominant force in the Gold IRA space through smart marketing and excellent customer service. They&apos;re endorsed by Sean Hannity, Chuck Norris, and other conservative celebrities—which resonates with their target demographic of retirement-focused Americans.
                            </p>
                            <p>
                                What sets Goldco apart is their &quot;Highest Price Guarantee&quot; buyback program. When you&apos;re ready to sell, they promise to match or beat any competitor&apos;s offer. Combined with their regular promotions (often 10% in free silver on qualifying orders), they offer strong value for investors with $25k+.
                            </p>
                            <p>
                                <strong>Best for:</strong> Investors with $25,000+ who want a premium experience, strong promotions, and industry-leading buyback guarantees.
                            </p>
                        </section>

                        <section id="lear-overview" className="scroll-mt-32">
                            <h2>Lear Capital Overview</h2>
                            <p>
                                Lear Capital is the elder statesman of the Gold IRA industry. Founded in 1997, they&apos;ve survived the dot-com bust, the 2008 financial crisis, and even a lawsuit with the NY Attorney General (which they settled and subsequently improved their practices).
                            </p>
                            <p>
                                Their key advantage is their &quot;Price Lock Guarantee&quot;—once you commit to a purchase, your price is locked even if metals prices change during the 5-7 day settlement period. This protects you from volatile market swings. They also have a lower $10,000 minimum, making them accessible to investors who don&apos;t meet Goldco&apos;s threshold.
                            </p>
                            <p>
                                <strong>Best for:</strong> Investors with $10,000-$25,000, or those who prioritize a company with decades of proven survival in the market.
                            </p>
                        </section>

                        <section id="fees" className="scroll-mt-32">
                            <h2>Fees & Minimums</h2>
                            <p>
                                Both companies charge similar annual fees for IRA maintenance and storage:
                            </p>
                            <ul>
                                <li><strong>Goldco:</strong> $175-$225/year (custodian + storage), $25,000 minimum</li>
                                <li><strong>Lear Capital:</strong> $225-$280/year (slightly higher), $10,000 minimum</li>
                            </ul>
                            <p>
                                The real cost difference comes from the <strong>spread</strong>—the markup on metals. Goldco&apos;s free silver promotions can effectively offset their spread on larger orders, while Lear&apos;s Price Lock Guarantee protects against market timing risk. For accounts over $50k, Goldco typically offers better overall value. For accounts under $25k, Lear is your only choice between these two.
                            </p>
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

                        <div className="my-12 bg-[#000080] rounded-2xl p-8 text-slate-900 text-center relative overflow-hidden not-prose">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Find Your Match</h3>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Start Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />
                    </article>
                </div>
            </Container>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Looking for Premium Service Instead?"
                        subheadline="Augusta Precious Metals offers zero-pressure education and lifetime support. Get your free guide."
                        trackSource="compare-goldco-vs-lear-capital"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
