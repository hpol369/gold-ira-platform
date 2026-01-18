import { Container } from "@/components/ui/Container";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { AlertTriangle, Gavel } from "lucide-react";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Regal Assets Lawsuit & Bankruptcy: What Happened? (2026)",
    description: "Investigation into the collapse of Regal Assets. We explain the lawsuits, the bankruptcy filing, and what former customers need to know.",
};

const companyData = {
    companyName: "Regal Assets",
    rating: 1.0, // Reflecting current status
    minInvestment: "N/A",
    fees: "N/A",
    bbbRating: "F", // Bankrupt/Revoked
    bestFor: "Avoid",
    visitUrl: "#",
    pros: [],
    cons: ["Company is reportedly defunct", "Multiple lawsuits", "Clients lost money"]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    "headline": "Regal Assets Lawsuit & Bankruptcy Investigation",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" }
};

const tocItems = [
    { id: "overview", label: "What Happened?" },
    { id: "timeline", label: "Timeline of Collapse" },
    { id: "customers", label: "Customer Impact" },
    { id: "alternatives", label: "Safe Alternatives" }
];

export default function RegalAssetsLawsuitPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-red-900 text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30 text-sm font-semibold text-red-100 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Bankruptcy Warning
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Regal Assets Lawsuit: The Collapse of a Giant
                        </h1>
                        <p className="text-xl text-red-100 max-w-2xl leading-relaxed">
                            Once a top-rated company, Regal Assets has faced a catastrophic collapse. Here is the full story of what went wrong.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                            <section id="overview">
                                <h2>What Happened to Regal Assets?</h2>
                                <p className="lead">
                                    Regal Assets was once one of the most-recommended Gold IRA companies in America. They had thousands of positive reviews, celebrity endorsements, and featured prominently on "best of" lists across the internet. Then it all collapsed. The company appears defunct, their website is down, and former customers are left wondering what happened to their gold.
                                </p>
                                <p>
                                    This case is a stark reminder of why we emphasize due diligence in this industry. A company can look perfect on paper—A+ ratings, glowing reviews, industry awards—and still fail catastrophically. Here's what we know about the Regal Assets situation.
                                </p>
                            </section>

                            <section id="timeline" className="scroll-mt-32">
                                <h2>Timeline of Collapse</h2>
                                <p>
                                    <strong>2012-2020:</strong> Regal Assets builds a stellar reputation. They win numerous industry awards, accumulate thousands of positive reviews, and become one of the most-recommended precious metals IRA companies. Their marketing machine was formidable.
                                </p>
                                <p>
                                    <strong>2021-2022:</strong> Cracks begin to show. Customer complaints increase. Reports emerge of delayed shipments, poor communication, and difficulty reaching representatives. The company's BBB rating starts to slip.
                                </p>
                                <p>
                                    <strong>2023:</strong> The situation deteriorates rapidly. The company's website goes dark. Phone lines disconnect. Customers discover they can't reach anyone about their accounts or their metals. Lawsuits are filed.
                                </p>
                                <p>
                                    <strong>2024-Present:</strong> Reports indicate the company has effectively ceased operations. Former customers are working with custodians and attorneys to recover their assets. The BBB revokes their rating. What was once a success story becomes a cautionary tale.
                                </p>
                            </section>

                            <section id="customers" className="scroll-mt-32">
                                <h2>What This Means for Customers</h2>
                                <p>
                                    If you have or had an account with Regal Assets, here's what you need to know:
                                </p>
                                <p>
                                    <strong>Your metals should still exist.</strong> IRA precious metals are held by custodians and depositories, not the dealer. Regal Assets was an intermediary—they helped set up accounts and sold metals, but the assets themselves should be held separately. Contact your custodian directly.
                                </p>
                                <p>
                                    <strong>Contact your IRA custodian immediately.</strong> If you worked with Regal Assets on an IRA, your custodian (likely Equity Trust, Kingdom Trust, or similar) is your point of contact now. They have records of your holdings and can help you understand your options.
                                </p>
                                <p>
                                    <strong>Document everything.</strong> Save all communications, statements, and records related to your account. If you're considering legal action or filing a complaint, documentation is essential.
                                </p>
                                <p>
                                    <strong>Consider consulting an attorney.</strong> If you believe you've suffered losses due to Regal Assets' failure, a securities attorney can advise you on potential recourse.
                                </p>
                            </section>

                            <section id="alternatives" className="scroll-mt-32">
                                <h2>Safe Alternatives</h2>
                                <p>
                                    The Regal Assets collapse is a reminder to choose your Gold IRA company carefully. Here's what to look for:
                                </p>
                                <p>
                                    <strong>Verify current BBB status.</strong> Don't rely on outdated reviews. Check the BBB directly for current ratings and recent complaints. Regal Assets had great ratings—until they didn't.
                                </p>
                                <p>
                                    <strong>Understand the custody structure.</strong> Your metals should be held by an independent, FDIC-insured custodian—not by the dealer themselves. This separation is what protects you if a dealer fails.
                                </p>
                                <p>
                                    <strong>Avoid companies that seem too good to be true.</strong> Extremely aggressive promotions, unrealistic promises, or pressure to act immediately are red flags.
                                </p>
                                <p>
                                    Unlike Regal Assets, many companies have maintained impeccable records over decades. We recommend sticking to established, A+ rated dealers like <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> or <a href="/reviews/goldco">Goldco</a>. These companies have weathered multiple market cycles and continue to operate with strong reputations.
                                </p>
                            </section>
                        </article>
                    </div>
                    <aside className="w-80 flex-shrink-0 hidden lg:block">
                        <ReviewSidebar {...companyData} />
                        <div className="mt-8"><TableOfContents items={tocItems} /></div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}
