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
    title: "American Hartford Gold vs. Oxford Gold Group (2026)",
    description: "Battle of the brands: American Hartford Gold vs Oxford Gold Group. Comparisons on pricing models, buyback programs, and customer reviews.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Minimum Investment", optionA: "$10,000", optionB: "$10,000", winner: "Tie" },
    { feature: "Promotions", optionA: "Up to $10k Free Silver", optionB: "Standard", winner: "A" },
    { feature: "Bill O'Reilly Endorsed", optionA: "Yes", optionB: "No", winner: "A" },
    { feature: "Buyback Program", optionA: "No Liquidation Fees", optionB: "Standard Buyback", winner: "A" },
    { feature: "Customer Service", optionA: "24/7 Available", optionB: "Business Hours", winner: "A" },
    { feature: "Price Match", optionA: "Yes", optionB: "Yes", winner: "Tie" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Head-to-Head Comparison" },
    { id: "ahg-overview", label: "American Hartford Gold Overview" },
    { id: "oxford-overview", label: "Oxford Gold Group Overview" },
    { id: "pricing", label: "Pricing & Promotions" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "American Hartford Gold vs. Oxford Gold Group (2026)",
            "description": "Battle of the brands: American Hartford Gold vs Oxford Gold Group. Comparisons on pricing models, buyback programs, and customer reviews.",
            "image": "https://richdadretirement.com/images/ahg-vs-oxford.jpg",
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
                    "name": "Is American Hartford Gold reputable?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, they are one of the fastest-growing private companies in America (Inc 5000) and have superb ratings on Trustpilot and BBB. They are endorsed by Bill O'Reilly and Rick Harrison."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does American Hartford Gold have fees?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AHG often waives storage and maintenance fees for the first year (or up to 3 years depending on account size). Their standout feature is their 'No Liquidation Fee' buyback program."
                    }
                }
            ]
        }
    ]
};

export default function AhgVsOxfordPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Top Rated Dealers
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        American Hartford Gold vs. Oxford Gold Group
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Two of the most aggressive promoters in the space. Who offers the best deal for 2026?
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <p className="lead">
                            If you watch cable news, you've seen the ads for <strong>American Hartford Gold</strong>. <strong>Oxford Gold Group</strong> is their quieter but highly competent rival. Both specialize in customer service and competitive pricing.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="American Hartford Gold"
                                summary="AHG edges out the competition with their 'No Liquidation Fee' buyback commitment and aggressive free silver promotions. Oxford Gold Group is solid, but AHG's customer service track record is currently unmatched."
                                bestFor="Promotions & Buyback Security"
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Head-to-Head Comparison</h2>
                            <ComparisonTable
                                optionAName="American Hartford Gold"
                                optionBName="Oxford Gold Group"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* AHG Overview */}
                        <section id="ahg-overview" className="scroll-mt-32">
                            <h2>American Hartford Gold Overview</h2>
                            <p>
                                American Hartford Gold (AHG) is the company you see on every cable news channel. Bill O&apos;Reilly, Rick Harrison from Pawn Stars—they&apos;ve got the celebrity endorsements locked down.
                            </p>
                            <p>
                                But here&apos;s what actually matters: their &quot;No Liquidation Fee&quot; buyback program. When you&apos;re ready to sell your gold back, most companies charge you a fee. AHG doesn&apos;t. Combined with their aggressive free silver promotions (up to $10,000 in silver on large accounts), they&apos;re tough to beat on pure value.
                            </p>
                            <p>
                                The $10,000 minimum makes them accessible to most investors. Customer service is available extended hours, and they&apos;re known for fast, responsive support.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/american-hartford-gold">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Oxford Overview */}
                        <section id="oxford-overview" className="scroll-mt-32">
                            <h2>Oxford Gold Group Overview</h2>
                            <p>
                                Oxford Gold Group is the quieter competitor. Less flashy marketing, but solid execution. They&apos;ve built a reputation on straightforward pricing and good educational materials.
                            </p>
                            <p>
                                Their strength is simplicity—no gimmicks, no confusing fee structures. They also offer a price-match guarantee, so if you find a better price elsewhere, they&apos;ll match it.
                            </p>
                            <p>
                                The downside? They don&apos;t have the aggressive promotions that AHG offers. No free silver giveaways. If you want the best &quot;deal,&quot; AHG usually wins. If you prefer a low-key experience, Oxford is a solid choice.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/oxford-gold-group">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Compare Today's Prices</h3>
                                <p className="mb-6 text-gray-200">See who is offering the best price on gold bars right now.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Check Prices <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Want Premium Education & Support?"
                        subheadline="Augusta Precious Metals offers zero-pressure service and zero BBB complaints. Get your free guide."
                        trackSource="compare-american-hartford-vs-oxford"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
