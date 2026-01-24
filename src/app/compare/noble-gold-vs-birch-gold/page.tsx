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
        <main className="min-h-screen bg-slate-900 pb-24">
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

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
                                Noble Gold has quietly become one of the most respected mid-tier Gold IRA companies. Founded by Collin Plume, they&apos;ve built a reputation on excellent customer service and unique product offerings.
                            </p>
                            <p>
                                What sets them apart? <strong>Texas storage</strong>. Noble Gold is one of the few companies offering storage at International Depository Services in Texas—a state known for being extremely gold-friendly. For preppers and those who distrust East Coast financial centers, this is huge.
                            </p>
                            <p>
                                They also offer &quot;Royal Survival Packs&quot;—curated collections of gold and silver specifically designed for emergency situations. It&apos;s a niche product, but for the right investor, it&apos;s perfect.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/noble-gold">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Birch Overview */}
                        <section id="birch-overview" className="scroll-mt-32">
                            <h2>Birch Gold Group Overview</h2>
                            <p>
                                Birch Gold is the elder statesman of Gold IRAs. They&apos;ve been around since 2003—an eternity in this industry—and have built a solid reputation through steady, consistent service.
                            </p>
                            <p>
                                You might know them from their celebrity endorsements. Ben Shapiro talks about them constantly on his podcast. That conservative media presence has built them a loyal following.
                            </p>
                            <p>
                                Their biggest advantage is the $10,000 minimum—one of the lowest in the industry. If you&apos;re just getting started and don&apos;t have a huge 401(k) to roll over, Birch will take you seriously when bigger companies won&apos;t.
                            </p>
                            <Button variant="outline" asChild className="mr-4">
                                <Link href="/reviews/birch-gold">Read Full Review</Link>
                            </Button>
                        </section>

                        {/* Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <h2>Fees & Minimums</h2>
                            <p>
                                Both companies are reasonably priced for the mid-tier market:
                            </p>
                            <div className="not-prose my-8 overflow-x-auto">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Fee Type</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Noble Gold</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Birch Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr><td className="p-4 font-medium">Minimum Investment</td><td className="p-4">$20,000</td><td className="p-4">$10,000</td></tr>
                                        <tr><td className="p-4 font-medium">Setup Fee</td><td className="p-4">$80 (one-time)</td><td className="p-4">$50</td></tr>
                                        <tr><td className="p-4 font-medium">Annual Storage</td><td className="p-4">$80 flat (Texas)</td><td className="p-4">$100+</td></tr>
                                        <tr><td className="p-4 font-medium">Admin Fee</td><td className="p-4">Included</td><td className="p-4">$80-$100/yr</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                <strong>The math:</strong> Noble Gold&apos;s flat fee structure usually works out cheaper for accounts over $25k. But if you have exactly $10k and can&apos;t meet Noble&apos;s minimum, Birch is your only option here.
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
