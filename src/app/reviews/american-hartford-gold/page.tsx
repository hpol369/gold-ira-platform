import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "American Hartford Gold Review 2026: Fees, Ratings & Analysis",
    description: "Complete American Hartford Gold review for 2026. Family-owned, A+ BBB rated, with price match guarantee. See if AHG is right for your gold IRA.",
};

const companyData = {
    companyName: "American Hartford Gold",
    rating: 4.7,
    minInvestment: "$10,000",
    fees: "$180-$230/year",
    bbbRating: "A+",
    bestFor: "Price-Conscious Buyers",
    visitUrl: "#",
    pros: [
        "Price match guarantee on all products",
        "Family-owned business with personal touch",
        "A+ BBB rating with excellent reviews",
        "Free silver on qualifying purchases",
        "Industry-leading buyback program",
        "No pushy sales tactics"
    ],
    cons: [
        "$10,000 minimum investment",
        "Newer company (founded 2015)",
        "Limited educational resources",
        "Fewer product options than larger competitors"
    ]
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "fees", label: "Fees" },
    { id: "verdict", label: "Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function AmericanHartfordGoldReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <header className="bg-primary text-white py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary/50 text-secondary/50'}`} />))}</div>
                            <span className="font-bold text-secondary text-lg">4.7/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">American Hartford Gold Review 2026</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">A family-owned company with a price match guarantee. We analyze their personalized approach and value proposition.</p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                            <section id="overview" className="scroll-mt-32">
                                <p className="lead">In this <strong>American Hartford Gold review</strong>, we examine a family-owned company that prioritizes value and customer service.</p>
                                <p>Founded in 2015, American Hartford Gold (AHG) has quickly become one of the fastest-growing precious metals companies. Their price match guarantee and free silver promotions set them apart.</p>
                                <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                    <div className="flex items-start gap-4">
                                        <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-primary text-lg mb-2">AHG Highlights</h4>
                                            <ul className="space-y-2 text-sm text-text-muted">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Price match guarantee</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />A+ BBB rating</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Free silver promotions</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Best-in-class buyback</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="pros-cons" className="scroll-mt-32">
                                <h2>American Hartford Gold: Pros & Cons</h2>
                                <ProsCons pros={companyData.pros} cons={companyData.cons} />
                            </section>

                            <section id="fees" className="scroll-mt-32">
                                <h2>American Hartford Gold Fees</h2>
                                <div className="overflow-x-auto not-prose my-8">
                                    <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr><th className="p-4 border-b font-bold text-primary">Fee Type</th><th className="p-4 border-b font-bold text-primary">Cost</th></tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm">
                                            <tr><td className="p-4 font-semibold">Setup Fee</td><td className="p-4">$0</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Custodian Fee</td><td className="p-4">$80</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Storage Fee</td><td className="p-4">$100-$150</td></tr>
                                            <tr className="bg-secondary/5"><td className="p-4 font-bold text-primary">Total Annual</td><td className="p-4 font-bold text-primary">$180-$230</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section id="verdict" className="scroll-mt-32">
                                <h2>Our Verdict</h2>
                                <p>American Hartford Gold is excellent for price-conscious investors who want the best deal. Their price match guarantee ensures you&apos;re never overpaying.</p>
                                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                    <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.7/5</h3>
                                    <p className="mb-6 text-gray-600">Best for value-focused investors seeking competitive pricing.</p>
                                    <Button variant="gold" size="xl" asChild>
                                        <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">Get Free Gold Kit <ArrowRight className="ml-2 w-5 h-5" /></a>
                                    </Button>
                                </div>
                            </section>

                            <section id="faq" className="scroll-mt-32">
                                <h2>American Hartford Gold FAQs</h2>
                                <div className="space-y-4 not-prose">
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">Is American Hartford Gold legitimate?</h4></summary>
                                        <p className="mt-4 text-gray-700">Yes, AHG is a legitimate A+ BBB-rated company with thousands of positive reviews.</p>
                                    </details>
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">What is the price match guarantee?</h4></summary>
                                        <p className="mt-4 text-gray-700">AHG will match any competitor&apos;s price on identical products, ensuring you get the best deal.</p>
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
