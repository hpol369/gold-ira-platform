import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, CheckCircle2, TrendingUp, XCircle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "American Bullion Review 2026: Ratings & Services",
    description: "American Bullion pioneered the Gold IRA concept. But are they still the best choice in 2026? We review their fees, ratings, and customer service.",
};

const companyData = {
    companyName: "American Bullion",
    rating: 4.2,
    minInvestment: "$10,000",
    fees: "Varies",
    bbbRating: "A+",
    bestFor: "Gold IRA Pioneers",
    visitUrl: "https://americanbullion.com",
    pros: [
        "Pioneer in Gold IRAs",
        "A+ BBB Rating",
        "Wide selection of coins",
        "Experienced staff"
    ],
    cons: [
        "Website feels outdated",
        "Higher fees than some discount brokers",
        "Less emphasis on education"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
        "@type": "Organization",
        "name": "American Bullion"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.2",
        "bestRating": "5"
    },
    "name": "American Bullion Review",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    }
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "history", label: "History & Reputation" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "reviews", label: "Customer Reviews" },
    { id: "faq", label: "FAQs" }
];

export default function AmericanBullionReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'text-gray-400'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.2/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            American Bullion Review (2026)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            They claim to be the "Gold IRA Pioneers." Does their experience translate to better service for you?
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
                                        American Bullion claims to be the company that "pioneered" the Gold IRA industry. Whether or not they were literally first, they've been around long enough to have seen every market cycle. But longevity cuts both ways—does their experience translate into better service, or has the company rested on its laurels while newer competitors innovate?
                                    </p>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <TrendingUp className="w-10 h-10 text-secondary" />
                                            <h2 className="text-2xl font-bold text-primary m-0">The Verdict</h2>
                                        </div>
                                        <p className="text-gray-700 mb-6">
                                            American Bullion is a solid, experienced player with a long track record and A+ BBB rating. They know what they're doing. The tradeoff: their website and educational resources feel dated compared to Augusta or Goldco, and their fees aren't the most competitive. Good choice if you value experience over polish.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Visit American Bullion
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                <section id="history" className="scroll-mt-32">
                                    <h2>History & Reputation</h2>
                                    <p>
                                        American Bullion was founded in 2009, right in the aftermath of the financial crisis when interest in gold as a safe haven exploded. They positioned themselves as specialists in IRA rollovers at a time when most dealers were still figuring out the process. This head start gave them deep expertise in navigating IRS rules.
                                    </p>
                                    <p>
                                        They've maintained an A+ BBB rating throughout their history, which is notable in an industry where complaints are common. Their team includes people who've been doing Gold IRAs since the beginning, and that institutional knowledge shows in how smoothly they handle complex rollovers.
                                    </p>
                                    <p>
                                        The downside of being an established player: their marketing and website feel stuck in 2015. They haven't invested in the educational content and online experience that newer competitors prioritize. For some investors, this doesn't matter. For others who want webinars, guides, and digital hand-holding, it's a gap.
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
                                        American Bullion's review profile reflects their tenure in the industry—they have a substantial number of reviews spanning many years, with the overall trend being positive. Common praise focuses on smooth rollover processes and knowledgeable staff.
                                    </p>
                                    <p>
                                        The complaints that do exist tend to center on pricing (not always the cheapest option) and communication speed (larger companies sometimes move slower). Nothing catastrophic—no patterns of fraud or major failures, just the typical growing pains of an established company.
                                    </p>
                                    <p>
                                        One thing reviewers consistently mention: American Bullion doesn't use aggressive sales tactics. They're more consultative than pushy, which aligns with their "experienced advisor" positioning rather than "hard-sell retailer."
                                    </p>
                                </section>

                                <section id="faq" className="scroll-mt-32">
                                    <h2>Frequently Asked Questions</h2>
                                    <h3>Is American Bullion a legitimate company?</h3>
                                    <p>
                                        Yes. American Bullion has been in business since 2009 and maintains an A+ BBB rating. They're one of the longest-operating Gold IRA specialists in the country.
                                    </p>
                                    <h3>What is American Bullion's minimum investment?</h3>
                                    <p>
                                        The minimum for a Gold IRA with American Bullion is $10,000. This is lower than Augusta's $50k but higher than some budget-focused competitors.
                                    </p>
                                    <h3>Does American Bullion really pioneer Gold IRAs?</h3>
                                    <p>
                                        They were among the earliest companies to specialize in Gold IRAs after the financial crisis of 2008-2009. Whether they were literally "first" is debatable, but their early entry gave them expertise that shows in their operations.
                                    </p>
                                    <h3>How does American Bullion compare to Goldco?</h3>
                                    <p>
                                        Goldco has more aggressive marketing and a higher minimum ($25k), but also more educational content online. American Bullion offers a more traditional, consultative approach with less digital polish but comparable reliability.
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
