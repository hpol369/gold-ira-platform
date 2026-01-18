import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, CheckCircle2, TrendingUp, XCircle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Orion Metal Exchange Review 2026: Fees & Complaints",
    description: "Detailed Orion Metal Exchange review. Low minimums and competitive pricing make them popular, but how do they stack up against the best?",
};

const companyData = {
    companyName: "Orion Metal Exchange",
    rating: 4.4,
    minInvestment: "$5,000",
    fees: "Varies",
    bbbRating: "A+",
    bestFor: "Small Investors",
    visitUrl: "https://orionmetalexchange.com",
    pros: [
        "Low $5,000 minimum investment",
        "Transparent pricing model",
        "Buy-back program available",
        "Real-time metal pricing on site"
    ],
    cons: [
        "Newer company compared to giants",
        "Website can be cluttered",
        "Storage fees apply separately"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
        "@type": "Organization",
        "name": "Orion Metal Exchange"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.4",
        "bestRating": "5"
    },
    "name": "Orion Metal Exchange Review",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    }
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "fees", label: "Fees & Minimums" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "reviews", label: "Customer Reviews" },
    { id: "faq", label: "FAQs" }
];

export default function OrionMetalExchangeReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary text-secondary opacity-50'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.4/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Orion Metal Exchange Review (2026)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            A popular choice for smaller investors thanks to their low $5,000 minimum. But does low entry mean low service?
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                                <section>
                                    <p className="lead">
                                        Orion Metal Exchange has built a reputation as the "small investor's friend" in the Gold IRA space. With a $5,000 minimum—one of the lowest in the industry—they've opened doors for people who don't have six figures to roll over. But does a lower barrier to entry mean you're getting less? We investigated.
                                    </p>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <TrendingUp className="w-10 h-10 text-secondary" />
                                            <h2 className="text-2xl font-bold text-primary m-0">The Verdict</h2>
                                        </div>
                                        <p className="text-gray-700 mb-6">
                                            Orion Metal Exchange is a legitimate option for investors starting with smaller amounts. Their transparent pricing and real-time quotes are refreshing in an industry known for hiding the ball on fees. They're not the best for large portfolios, but for your first Gold IRA or a modest allocation, they deliver solid value.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Visit Orion Metal Exchange
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                <section id="fees" className="scroll-mt-32">
                                    <h2>Fees & Minimums</h2>
                                    <p>
                                        Orion's $5,000 minimum is their headline feature—it's one of the lowest entry points for a precious metals IRA. For context, Augusta requires $50,000 and Goldco asks for $25,000. This makes Orion accessible to younger investors or those testing the waters with a small allocation.
                                    </p>
                                    <p>
                                        Their fee structure includes the standard setup fee, annual maintenance fee, and storage fees that you'll find across the industry. What sets them apart is price transparency: their website shows real-time metal pricing so you can see exactly what premium you're paying over spot. No calling to "get a quote" and enduring a sales pitch first.
                                    </p>
                                    <p>
                                        They also offer a buy-back program, which matters more than most people realize. When it's time to liquidate, you want a dealer who'll make a fair offer rather than lowballing you.
                                    </p>
                                </section>

                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Pros & Cons</h2>
                                    <div className="grid md:grid-cols-2 gap-8 not-prose">
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" /> The Good
                                            </h3>
                                            <ul className="space-y-2 text-green-800">
                                                {companyData.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                                <XCircle className="w-5 h-5" /> The Bad
                                            </h3>
                                            <ul className="space-y-2 text-red-800">
                                                {companyData.cons.map((con, i) => <li key={i}>• {con}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="reviews" className="scroll-mt-32">
                                    <h2>Customer Reviews</h2>
                                    <p>
                                        Orion Metal Exchange holds an A+ BBB rating with relatively few complaints. Customer reviews frequently mention the straightforward process and helpful representatives. The company is responsive to feedback and addresses concerns publicly when they arise.
                                    </p>
                                    <p>
                                        Some reviewers note that Orion's website can feel cluttered compared to sleeker competitors. It's functional but not beautiful—though honestly, for a company handling your retirement savings, substance matters more than style.
                                    </p>
                                    <p>
                                        The majority of negative feedback relates to shipping times during high-demand periods (like when gold prices spike and everyone rushes to buy). This is an industry-wide issue, not unique to Orion.
                                    </p>
                                </section>

                                <section id="faq" className="scroll-mt-32">
                                    <h2>Frequently Asked Questions</h2>
                                    <h3>Is Orion Metal Exchange legit?</h3>
                                    <p>
                                        Yes. Orion Metal Exchange is a legitimate dealer with an A+ BBB rating. They've been operating for years with a solid track record of fulfilling orders and properly handling IRA accounts.
                                    </p>
                                    <h3>What is Orion Metal Exchange's minimum investment?</h3>
                                    <p>
                                        Their minimum for a precious metals IRA is $5,000—one of the lowest in the industry. Direct purchases have no minimum.
                                    </p>
                                    <h3>Does Orion Metal Exchange offer a buy-back program?</h3>
                                    <p>
                                        Yes, they have a buy-back program that allows you to sell your metals back to them. This provides liquidity when you need to take distributions or liquidate your IRA.
                                    </p>
                                    <h3>How does Orion compare to bigger companies like Goldco?</h3>
                                    <p>
                                        Goldco has a higher minimum ($25k vs $5k) and a bigger marketing presence. Orion is better suited for smaller investors or those who want to start modest and add over time. Goldco may offer more hand-holding for large accounts.
                                    </p>
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
