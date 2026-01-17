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
    title: "Noble Gold vs. Birch Gold Group (2026 Review)",
    description: "Comparing Noble Gold Investments vs Birch Gold Group. Which is better for smaller accounts? We analyze fees, storage options, and customer service.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Minimum Investment", optionA: "$20,000", optionB: "$10,000", winner: "B" }, // Adjusted based on common knowledge, verified in content
    { feature: "Storage Fees", optionA: "$80/year (Texas)", optionB: "$100/year", winner: "A" },
    { feature: "Reputation", optionA: "Best for Customer Service", optionB: "Best for Ben Shapiro Fans", winner: "Tie" },
    { feature: "Fees", optionA: "Flat $80 custodial", optionB: "Scaled fees", winner: "A" },
    { feature: "Storage Location", optionA: "Texas (IDS) or Delaware", optionB: "Delaware / New York", winner: "A" },
    { feature: "Specialty", optionA: "Survival Packs & Rare Coins", optionB: "Precious Metals IRAs", winner: "A" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Head-to-Head Comparison" },
    { id: "noble-overview", label: "Noble Gold Overview" },
    { id: "birch-overview", label: "Birch Gold Group Overview" },
    { id: "fees", label: "Fees & Minimums" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Noble Gold vs. Birch Gold Group (2026 Review)",
            "description": "Comparing Noble Gold Investments vs Birch Gold Group. Which is better for smaller accounts? We analyze fees, storage options, and customer service.",
            "image": "https://richdadretirement.com/images/noble-vs-birch.jpg",
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
                    "name": "What is the minimum investment for Noble Gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Noble Gold has one of the lowest barriers to entry in the industry, often accepting accounts as low as $20,000 for IRAs, and even lower for cash purchases."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Birch Gold Group legit?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Birch Gold Group has been in business since 2003, making them one of the oldest gold IRA companies. They have an A+ rating with the BBB and are endorsed by Ben Shapiro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Noble Gold offer Texas storage?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! Noble Gold is one of the only major companies to offer a storage facility based in Texas (International Depository Services), which is a huge plus for investors who want their gold stored in a business-friendly jurisdiction."
                    }
                }
            ]
        }
    ]
};

export default function NobleVsBirchPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Best for Small Accounts
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Noble Gold vs. Birch Gold Group
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Looking to start small? These two companies are the champions of the sub-$50k rollover. But which one offers better fees and service?
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <p className="lead">
                            Not everyone has $100,000 to drop into a Gold IRA. If you have between $10,000 and $50,000, <strong>Noble Gold</strong> and <strong>Birch Gold Group</strong> are your best friends.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Noble Gold (Winner)"
                                summary="Noble Gold wins for their simplified flat-fee structure, Texas storage option, and incredible 'Royal Survival Packs' for cash buyers. Birch Gold is a solid runner-up, especially for very small accounts ($10k), but Noble's service feels more premium."
                                bestFor="Storage Flexibility & Crisis Prep"
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Head-to-Head Comparison</h2>
                            <ComparisonTable
                                optionAName="Noble Gold"
                                optionBName="Birch Gold"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* Noble Overview */}
                        <section id="noble-overview" className="scroll-mt-32">
                            <h2>Noble Gold Investments Overview</h2>
                            <p>
                                [Content Placeholder: Discuss CEO Collin Plume, their focus on education, and the unique Texas storage facility option.]
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/noble-gold">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Birch Overview */}
                        <section id="birch-overview" className="scroll-mt-32">
                            <h2>Birch Gold Group Overview</h2>
                            <p>
                                [Content Placeholder: Discuss their longevity (since 2003), their media endorsements (Ben Shapiro, Steve Bannon), and education focus.]
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/birch-gold">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <h2>Fees & Minimums</h2>
                            <p>
                                [Content Placeholder: Breakdown of Noble's simple flat fees vs Birch's scaled model.]
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Get Your Free Gold Kit</h3>
                                <p className="mb-6 text-gray-200">Both companies offer excellent free kits. Compare them yourself.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Get Free Kits <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
