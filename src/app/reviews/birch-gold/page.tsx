import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Birch Gold Review 2026: Fees, Ratings & Full Analysis",
    description: "Complete Birch Gold Group review for 2026. 20+ years in business, endorsed by Ben Shapiro, A+ BBB rating. Is Birch Gold right for your retirement?",
};

const companyData = {
    companyName: "Birch Gold Group",
    rating: 4.6,
    minInvestment: "$10,000",
    fees: "$200-$250/year",
    bbbRating: "A+",
    bestFor: "Conservative Investors",
    visitUrl: AFFILIATE_LINKS.birch,
    pros: [
        "Over 20 years in business (founded 2003)",
        "A+ BBB rating with strong customer reviews",
        "Endorsed by Ben Shapiro and Ron Paul",
        "All four precious metals available",
        "Excellent educational resources",
        "Dedicated account specialists"
    ],
    cons: [
        "$10,000 minimum investment",
        "Higher fees than some competitors",
        "No fee waiver programs",
        "Can be slow to respond during peak times"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Birch Gold Group IRA",
    "image": "https://www.richdadretirement.com/images/birch-logo.png",
    "description": "Precious metals IRA specialist endorsed by Ben Shapiro.",
    "brand": {
        "@type": "Brand",
        "name": "Birch Gold Group"
    },
    "review": {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.6",
            "bestRating": "5"
        },
        "author": {
            "@type": "Organization",
            "name": "Rich Dad Retirement"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "850"
    }
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "fees", label: "Fees" },
    { id: "verdict", label: "Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function BirchGoldReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary/50 text-secondary/50'}`} />))}</div>
                            <span className="font-bold text-secondary text-lg">4.6/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Birch Gold Review 2026</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">One of the oldest names in precious metals IRAs. We analyze Birch Gold&apos;s 20+ year track record.</p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                            <section id="overview" className="scroll-mt-32">
                                <p className="lead">In this <strong>Birch Gold review</strong>, we examine a company with over two decades of precious metals experience.</p>
                                <p>Founded in 2003, Birch Gold Group is one of the longest-standing precious metals IRA companies. They&apos;ve built their reputation on education, transparency, and personalized service.</p>
                                <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                    <div className="flex items-start gap-4">
                                        <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-primary text-lg mb-2">Birch Gold Highlights</h4>
                                            <ul className="space-y-2 text-sm text-text-muted">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />20+ years in business</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />A+ BBB rating</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Endorsed by Ben Shapiro</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />All 4 precious metals</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="pros-cons" className="scroll-mt-32">
                                <h2>Birch Gold: Pros & Cons</h2>
                                <ProsCons pros={companyData.pros} cons={companyData.cons} />
                            </section>

                            <section id="fees" className="scroll-mt-32">
                                <h2>Birch Gold Fees</h2>
                                <div className="overflow-x-auto not-prose my-8">
                                    <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr><th className="p-4 border-b font-bold text-primary">Fee Type</th><th className="p-4 border-b font-bold text-primary">Cost</th></tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm">
                                            <tr><td className="p-4 font-semibold">Setup Fee</td><td className="p-4">$50</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Custodian Fee</td><td className="p-4">$100</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Storage Fee</td><td className="p-4">$100-$150</td></tr>
                                            <tr className="bg-secondary/5"><td className="p-4 font-bold text-primary">Total Annual</td><td className="p-4 font-bold text-primary">$200-$250</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section id="verdict" className="scroll-mt-32">
                                <h2>Our Verdict</h2>
                                <p>Birch Gold is ideal for conservative investors who value a company with a long track record and educational focus.</p>
                                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                    <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.6/5</h3>
                                    <p className="mb-6 text-gray-600">Best for conservative, education-focused investors.</p>
                                    <Button variant="gold" size="xl" asChild>
                                        <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">Get Free Info Kit <ArrowRight className="ml-2 w-5 h-5" /></a>
                                    </Button>
                                </div>
                            </section>

                            <section id="faq" className="scroll-mt-32">
                                <h2>Birch Gold FAQs</h2>
                                <div className="space-y-4 not-prose">
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">Is Birch Gold legitimate?</h4></summary>
                                        <p className="mt-4 text-gray-700">Yes, Birch Gold is a legitimate A+ BBB-rated company with 20+ years of history.</p>
                                    </details>
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">What is the minimum investment?</h4></summary>
                                        <p className="mt-4 text-gray-700">Birch Gold requires a $10,000 minimum investment.</p>
                                    </details>
                                </div>
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
