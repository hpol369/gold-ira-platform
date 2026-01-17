import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, AlertTriangle, ShieldCheck, Gavel, Scale } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Goldco Lawsuit & Complaints: Fact Check (2026)",
    description: "Are the rumors about a Goldco lawsuit true? We investigate the facts, the Santa Monica city attorney settlement, and what it means for customers today.",
};

const tocItems = [
    { id: "verdict", label: "Legal Verdict" },
    { id: "lawsuit-facts", label: "The Santa Monica Case" },
    { id: "current-status", label: "Current Status & Improvements" },
    { id: "customer-reviews", label: "Customer Reviews 2026" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Goldco Lawsuit & Complaints: Fact Check (2026)",
            "description": "Are the rumors of a Goldco lawsuit true? We investigate the facts, the Santa Monica city attorney settlement, and what it means for customers today.",
            "image": "https://richdadretirement.com/images/goldco-lawsuit.jpg",
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
                    "name": "Did Goldco get sued?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Goldco has not been sued by federal agencies (like the CFTC). However, in the past, they settled a civil consumer protection action with the Santa Monica City Attorney's office regarding marketing claims. They admitted no wrongdoing and agreed to improve disclosures."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Goldco safe to invest with?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Since that settlement, Goldco has become industry-leading in compliance and transparency. They maintain an A+ BBB rating and have thousands of 5-star reviews. The legal issue was a marketing dispute, not a failure to deliver assets."
                    }
                }
            ]
        }
    ]
};

export default function GoldcoLawsuitPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/30 text-sm font-semibold text-amber-200 mb-6 flex items-center justify-center gap-2 w-fit mx-auto">
                        <Gavel className="w-4 h-4" /> Legal Fact Check
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Goldco Lawsuit Rumors: The Truth
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Internet rumors can be misleading. We examine the actual legal history of Goldco to see if your money is safe.
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
                            Goldco is a massive company, and massive companies often attract legal scrutiny. You may have heard mentions of a "lawsuit" or "settlement." Here are the cold, hard facts.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Verdict: ISSUE RESOLVED"
                                summary="The legal issues you may read about refer to a past civil settlement with a local city attorney regarding marketing language. It was not a fraud case, and no customer funds were lost. Goldco has since overhauled its compliance and remains a top-tier industry leader."
                                bestFor="Investors seeking a transparent, compliant partner."
                            />
                        </section>

                        {/* Facts */}
                        <section id="lawsuit-facts" className="scroll-mt-32">
                            <h2>The Santa Monica City Attorney Case</h2>
                            <p>
                                [Content Placeholder: Explain unbiasedly that the dispute was about "misleading marketing claims" regarding delivery times or fee disclosures. State clearly: "Settled with no admission of guilt."]
                            </p>
                        </section>

                        {/* Current Status */}
                        <section id="current-status" className="scroll-mt-32">
                            <h2>Current Status & Improvements</h2>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 not-prose">
                                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> Goldco Today
                                </h3>
                                <p className="text-green-800">
                                    Today, Goldco has one of the strictest compliance departments in the industry. Every call is recorded, and disclosures are abundant. This "baptism by fire" has actually made them safer than smaller competitors who haven't been scrutinized.
                                </p>
                            </div>
                        </section>

                        {/* Reviews */}
                        <section id="customer-reviews" className="scroll-mt-32">
                            <h2>Customer Reviews 2026</h2>
                            <p>
                                [Content Placeholder: 5,000+ Reviews on Trustpilot. 4.9 Stars. Sean Hannity endorsement. The market has spoken.]
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Trust But Verify</h3>
                                <p className="mb-6 text-gray-200">See their compliance first-hand. Get their free gold kit today.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/reviews/goldco">Visit Official Site <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
