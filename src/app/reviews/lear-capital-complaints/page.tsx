import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Lear Capital Complaints & Lawsuit History (2026 Update)",
    description: "Honest analysis of Lear Capital complaints, past lawsuits, and their current BBB standing. Is Lear Capital safe to use in 2026?",
};

const companyData = {
    companyName: "Lear Capital",
    rating: 4.4,
    minInvestment: "$10,000",
    fees: "$225-$280/year",
    bbbRating: "A+",
    bestFor: "Established Brand Seekers",
    visitUrl: AFFILIATE_LINKS.lear,
    pros: [
        "A+ Rating with the BBB (Rebuilt)",
        "25+ Years in business",
        "Resolved past regulatory issues",
        "Price Lock Guarantee"
    ],
    cons: [
        "History of lawsuits (resolved)",
        "Higher fees than some competitors"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    "headline": "Lear Capital Complaints & Lawsuits: The Full Story",
    "description": "Honest analysis of Lear Capital complaints, past lawsuits, and their current BBB standing.",
    "image": "https://www.richdadretirement.com/images/lear-capital-complaints.jpg", // Placeholder
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18"
};

const tocItems = [
    { id: "verdict", label: "Current Status (2026)" },
    { id: "lawsuit-history", label: "The Lawsuit History" },
    { id: "complaints", label: "Common Complaints" },
    { id: "improvements", label: "How They Fixed It" },
    { id: "conclusion", label: "Should You Invest?" }
];

export default function LearCapitalComplaintsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                                <Star className="w-5 h-5 fill-secondary/50 text-secondary/50" />
                            </div>
                            <span className="font-bold text-secondary text-lg">Rating: 4.4/5.0</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Lear Capital Complaints: The Full Story
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Lear Capital has been around for 25 years, but they&apos;ve had their share of legal battles. We break down the past lawsuits, the complaints, and why they might still be a safe bet today.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            {/* Mobile Sidebar */}
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                                <section>
                                    <p className="lead">
                                        (Intro: Don&apos;t sugarcoat it. Acknowledge that a Google search for "Lear Capital" often brings up "lawsuit" or "scam". State that we are going to look at the facts—both the ugly past and the cleaned-up present.)
                                    </p>
                                </section>

                                {/* Verdict Section */}
                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Scale className="w-10 h-10 text-secondary" />
                                            <h2 className="text-2xl font-bold text-primary m-0">The Verdict: They&apos;ve Turned a Corner</h2>
                                        </div>
                                        <p className="text-gray-700 mb-6">
                                            Lear Capital has settled its past regulatory issues and has made significant changes to its transparency and fee structures. Today, they hold an <strong>A+ rating with the BBB</strong> and have thousands of 5-star reviews, indicating a successful turnaround.
                                        </p>
                                    </div>
                                </section>

                                {/* Lawsuit History */}
                                <section id="lawsuit-history" className="scroll-mt-32">
                                    <h2>The Lawsuit History (Explained)</h2>
                                    <p>(Detail the NY Attorney General lawsuit/settlement regarding undisclosed fees. Explain what happened—they weren&apos;t telling people about the spread effectively. State that they settled and agreed to change their practices.)</p>
                                </section>

                                {/* Common Complaints */}
                                <section id="complaints" className="scroll-mt-32">
                                    <h2>What Customers Complain About Today</h2>
                                    <p>(Analyze current BBB/Trustpilot reviews. Most complaints are now about: 1. Sales calls (they are aggressive), 2. Spread/Premium (coins being more expensive than spot). Explain that these are standard industry issues, not scams.)</p>
                                </section>

                                {/* Improvements */}
                                <section id="improvements" className="scroll-mt-32">
                                    <h2>How Lear Capital Fixed the Issues</h2>
                                    <p>(Discuss their new "Price Lock Guarantee" and improved invoice transparency. They now explicitly list fees. This makes them safer than before.)</p>
                                </section>

                                <section id="conclusion" className="scroll-mt-32">
                                    <h2>Should You Trust Lear Capital in 2026?</h2>
                                    <p>(Conclusion: Yes, they are legitimate. However, they are best for investors who can say "no" to sales pressure and want a big, established brand.)</p>
                                </section>

                            </article>
                        </div>
                    </div>

                    <aside className="w-80 flex-shrink-0 hidden lg:block">
                        <ReviewSidebar {...companyData} />
                        <div className="mt-8">
                            <TableOfContents items={tocItems} />
                        </div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}
