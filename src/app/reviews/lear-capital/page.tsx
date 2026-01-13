import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Lear Capital Review 2026: Fees, Complaints & Full Analysis",
    description: "Complete Lear Capital review for 2026. 25+ years in business, unique price lock guarantee. See if Lear Capital is right for your gold IRA.",
};

const companyData = {
    companyName: "Lear Capital",
    rating: 4.4,
    minInvestment: "$10,000",
    fees: "$225-$280/year",
    bbbRating: "A+",
    bestFor: "Established Brand Seekers",
    visitUrl: "[LEAR_CAPITAL_AFFILIATE_LINK]",
    pros: [
        "25+ years in business (founded 1997)",
        "Price lock guarantee protects your purchase",
        "A+ BBB rating",
        "Real-time pricing tools",
        "Wide selection of coins and bars",
        "Strong industry reputation"
    ],
    cons: [
        "Higher fees than many competitors",
        "Some BBB complaints in recent years",
        "Aggressive sales approach reported by some",
        "Minimum may vary by product"
    ]
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "fees", label: "Fees" },
    { id: "verdict", label: "Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function LearCapitalReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <header className="bg-primary text-white py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary/50 text-secondary/50'}`} />))}</div>
                            <span className="font-bold text-secondary text-lg">4.4/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Lear Capital Review 2026</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">One of the oldest names in precious metals. We analyze their 25+ year track record and unique price lock guarantee.</p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                            <section id="overview" className="scroll-mt-32">
                                <p className="lead">In this <strong>Lear Capital review</strong>, we examine one of the industry&apos;s longest-standing precious metals companies.</p>
                                <p>Founded in 1997, Lear Capital has over 25 years of experience in the precious metals industry. They&apos;ve built their brand on longevity and their unique price lock guarantee.</p>
                                <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                    <div className="flex items-start gap-4">
                                        <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-primary text-lg mb-2">Lear Capital Highlights</h4>
                                            <ul className="space-y-2 text-sm text-text-muted">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />25+ years in business</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />A+ BBB rating</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Price lock guarantee</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Real-time pricing tools</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="pros-cons" className="scroll-mt-32">
                                <h2>Lear Capital: Pros & Cons</h2>
                                <ProsCons pros={companyData.pros} cons={companyData.cons} />
                            </section>

                            <section id="fees" className="scroll-mt-32">
                                <h2>Lear Capital Fees</h2>
                                <div className="overflow-x-auto not-prose my-8">
                                    <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr><th className="p-4 border-b font-bold text-primary">Fee Type</th><th className="p-4 border-b font-bold text-primary">Cost</th></tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm">
                                            <tr><td className="p-4 font-semibold">Setup Fee</td><td className="p-4">$50-$100</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Custodian Fee</td><td className="p-4">$75-$100</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Storage Fee</td><td className="p-4">$100-$180</td></tr>
                                            <tr className="bg-secondary/5"><td className="p-4 font-bold text-primary">Total Annual</td><td className="p-4 font-bold text-primary">$225-$280</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section id="verdict" className="scroll-mt-32">
                                <h2>Our Verdict</h2>
                                <p>Lear Capital is best for investors who prioritize working with an established brand with decades of history. Their price lock guarantee adds protection during volatile markets.</p>
                                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                    <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.4/5</h3>
                                    <p className="mb-6 text-gray-600">Best for investors seeking an established brand with 25+ years history.</p>
                                    <Button variant="gold" size="xl" asChild>
                                        <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">Get Free Info Kit <ArrowRight className="ml-2 w-5 h-5" /></a>
                                    </Button>
                                </div>
                            </section>

                            <section id="faq" className="scroll-mt-32">
                                <h2>Lear Capital FAQs</h2>
                                <div className="space-y-4 not-prose">
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">Is Lear Capital legitimate?</h4></summary>
                                        <p className="mt-4 text-gray-700">Yes, Lear Capital is a legitimate A+ BBB-rated company with over 25 years of history.</p>
                                    </details>
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">What is the price lock guarantee?</h4></summary>
                                        <p className="mt-4 text-gray-700">The price lock guarantee locks in your purchase price for a set period, protecting you from price increases during the transaction process.</p>
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
