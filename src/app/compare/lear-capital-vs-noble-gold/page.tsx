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
    title: "Lear Capital vs. Noble Gold: 2026 Comparison",
    description: "Lear Capital vs Noble Gold Investments: We compare fees, minimums, and customer service to help you decide which Gold IRA company is right for you.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Minimum Investment", optionA: "$10,000", optionB: "$2,000", winner: "B" },
    { feature: "BBB Rating", optionA: "A+", optionB: "A+", winner: "Tie" },
    { feature: "Years in Business", optionA: "25+ Years", optionB: "Founded 2016", winner: "A" },
    { feature: "Fees", optionA: "$225-$280/year", optionB: "$225-$250/year", winner: "Tie" },
    { feature: "Home Delivery", optionA: "Yes", optionB: "Yes (Royal Survival Packs)", winner: "B" },
    { feature: "Buyback Program", optionA: "Yes", optionB: "Yes, No-Quibble", winner: "Tie" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Head-to-Head Comparison" },
    { id: "noble-overview", label: "Noble Gold Overview" },
    { id: "lear-overview", label: "Lear Capital Overview" },
    { id: "fees", label: "Fees & Minimums" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lear Capital vs. Noble Gold: 2026 Comparison",
    "description": "Lear Capital vs Noble Gold Investments comparison.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18"
};

export default function LearVsNoblePage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Detailed Comparison
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Lear Capital vs. Noble Gold
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        The veteran (Lear) vs the rising star (Noble). Both have A+ ratings, but one is much better for smaller investors.
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
                            This is a battle between experience and accessibility. <strong>Lear Capital</strong> represents the &quot;Old Guard&quot;—founded in 1997, they&apos;ve weathered every market storm and come out stronger. <strong>Noble Gold</strong> is the &quot;New Guard&quot;—founded in 2016, they&apos;ve disrupted the industry with the lowest minimums and a refreshingly simple approach. Here&apos;s which one makes sense for your situation.
                        </p>

                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Noble Gold (For Most People)"
                                summary="Noble Gold wins for almost everyone due to their lower minimum ($2,000) and transparent flat fees. Lear Capital is only recommended if you demand a company with 20+ years of history."
                                bestFor="Small-to-Mid Sized Accounts"
                            />
                        </section>

                        <section id="comparison" className="scroll-mt-32">
                            <h2>Head-to-Head Comparison</h2>
                            <ComparisonTable
                                optionAName="Lear Capital"
                                optionBName="Noble Gold"
                                rows={comparisonRows}
                            />
                        </section>

                        <section id="noble-overview" className="scroll-mt-32">
                            <h2>Noble Gold Overview</h2>
                            <p>
                                Noble Gold Investments has carved out a niche as the most accessible Gold IRA company on the market. Their $2,000 minimum is industry-leading—5x lower than Lear Capital and 12x lower than Augusta. This makes them ideal for investors just starting out or those who want to test the waters with precious metals.
                            </p>
                            <p>
                                What really sets Noble apart is their <strong>Texas storage option</strong>. While most companies only offer Delaware depositories, Noble Gold partners with a secure facility in Texas—appealing to investors who want their metals stored in a business-friendly state closer to home. They also offer &quot;Royal Survival Packs&quot;—pre-packaged precious metals kits for home delivery (outside of your IRA).
                            </p>
                            <p>
                                <strong>Best for:</strong> First-time gold investors, smaller accounts ($2k-$50k), and those who value simplicity over brand prestige.
                            </p>
                        </section>

                        <section id="lear-overview" className="scroll-mt-32">
                            <h2>Lear Capital Overview</h2>
                            <p>
                                Lear Capital is one of the oldest names in the Gold IRA business. Founded in 1997, they&apos;ve processed billions in precious metals transactions. Their longevity is both their greatest asset and their badge of trust—scam companies simply don&apos;t survive 25+ years.
                            </p>
                            <p>
                                Lear&apos;s standout feature is their <strong>Price Lock Guarantee</strong>. When you place an order, your price is locked immediately—protecting you from market swings during the settlement process. They also maintain one of the largest inventories of coins and bars in the industry, giving you more selection than most competitors.
                            </p>
                            <p>
                                <strong>Best for:</strong> Investors who prioritize company history and stability, those with $10k-$100k to invest, and collectors who want access to rare coins.
                            </p>
                        </section>

                        <section id="fees" className="scroll-mt-32">
                            <h2>Fees & Minimums</h2>
                            <p>
                                This is where Noble Gold has a clear advantage for smaller investors:
                            </p>
                            <ul>
                                <li><strong>Noble Gold:</strong> $225-$250/year (flat rate), $2,000 minimum</li>
                                <li><strong>Lear Capital:</strong> $225-$280/year (can be higher for premium coins), $10,000 minimum</li>
                            </ul>
                            <p>
                                Both companies have similar annual storage/custodian fees. The key difference is accessibility—Noble lets you start with $2,000, while Lear requires $10,000. For smaller investors, this makes Noble the only realistic choice between these two. For larger accounts ($50k+), the percentage difference in fees becomes negligible.
                            </p>
                        </section>

                        <section id="pros-cons" className="scroll-mt-32">
                            <h2>Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-8 not-prose">
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Noble Gold Advantages
                                    </h3>
                                    <ul className="space-y-2 text-green-800">
                                        <li>• $2,000 minimum (vs $10k)</li>
                                        <li>• Texas storage option</li>
                                        <li>• "Royal Survival Packs"</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Lear Capital Advantages
                                    </h3>
                                    <ul className="space-y-2 text-blue-800">
                                        <li>• Longer track record (1997)</li>
                                        <li>• Price Match Guarantee</li>
                                        <li>• huge coin selection</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Still Undecided?</h3>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
