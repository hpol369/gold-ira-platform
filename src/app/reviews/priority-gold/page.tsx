import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, CheckCircle2, TrendingUp, XCircle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Priority Gold Review 2026: Fees, Ratings & Complaints",
    description: "In-depth Priority Gold review for 2026. We treat Priority Gold as a serious contender. Check our analysis of their ratings, fees, and customer service.",
};

const companyData = {
    companyName: "Priority Gold",
    rating: 4.3,
    minInvestment: "$10,000",
    fees: "Varies",
    bbbRating: "A+",
    bestFor: "Customer Service",
    visitUrl: "https://prioritygold.com",
    pros: [
        "A+ BBB Rating",
        "Lower minimum investment ($10k)",
        "Focus on numismatic coins",
        "Excellent customer support reviews"
    ],
    cons: [
        "Website lacks detailed fee info",
        "Heavy emphasis on collectible coins",
        "Fewer educational resources online"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
        "@type": "Organization",
        "name": "Priority Gold"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.3",
        "bestRating": "5"
    },
    "name": "Priority Gold Review",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    }
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "services", label: "Services & Products" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "reviews", label: "Customer Reviews" },
    { id: "faq", label: "FAQs" }
];

export default function PriorityGoldReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : i === 4 ? 'fill-secondary text-secondary opacity-50' : 'text-gray-400'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.3/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Priority Gold Review (2026)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            With an A+ BBB rating and a focus on customer service, Priority Gold is a solid choice. But is their focus on numismatics right for your IRA?
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
                                        Priority Gold has carved out a niche in the precious metals industry by putting customer service first. While they may not have the advertising budget of the big players, their A+ BBB rating and loyal customer base tell a different story. We dug into what makes Priority Gold tick—and whether their focus on numismatic coins is a feature or a red flag.
                                    </p>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <TrendingUp className="w-10 h-10 text-secondary" />
                                            <h2 className="text-2xl font-bold text-primary m-0">The Verdict</h2>
                                        </div>
                                        <p className="text-gray-700 mb-6">
                                            Priority Gold is a solid mid-tier choice, especially if you value personalized service over flashy marketing. Their $10,000 minimum is lower than Augusta's $50k, making them accessible to more investors. Just be aware they push numismatic coins harder than bullion—which can mean higher premiums but potentially better collectible value.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Visit Priority Gold
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                <section id="services" className="scroll-mt-32">
                                    <h2>Services & Products</h2>
                                    <p>
                                        Priority Gold offers both direct precious metals purchases and Gold IRA services. Their product selection leans heavily toward numismatic (collectible) coins rather than standard bullion. This is worth noting: numismatic coins can carry higher premiums over spot price, but they also have potential collectible value that generic bars don't.
                                    </p>
                                    <p>
                                        For IRA clients, they work with established custodians like Equity Trust and handle the rollover paperwork. The process is straightforward—they assign you a dedicated rep who walks you through every step. Multiple reviewers mention their rep by name, which speaks to the personalized approach.
                                    </p>
                                    <p>
                                        One thing that stands out: Priority Gold doesn't blast you with email sequences or aggressive follow-up calls. Their sales approach is notably low-pressure compared to some competitors who treat every lead like a closing opportunity.
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
                                        Priority Gold maintains an A+ rating with the BBB with minimal complaints. Most reviews mention the same themes: helpful staff, no pressure tactics, and timely delivery. The company responds to the few negative reviews professionally, which is always a good sign.
                                    </p>
                                    <p>
                                        One common thread in positive reviews is the education aspect—customers appreciate that their reps explain the differences between coin types without pushing the most expensive option. That said, some reviewers wish the website had more transparent pricing upfront instead of requiring a phone call.
                                    </p>
                                    <p>
                                        Compared to the review volume of Goldco or Augusta, Priority Gold has fewer total reviews, which makes sense given their smaller marketing presence. But the reviews they do have trend positive.
                                    </p>
                                </section>

                                <section id="faq" className="scroll-mt-32">
                                    <h2>Frequently Asked Questions</h2>
                                    <h3>Is Priority Gold legit?</h3>
                                    <p>
                                        Yes. Priority Gold is a legitimate precious metals dealer with an A+ BBB rating. They've been in business for years and have a track record of fulfilling orders and handling IRA rollovers properly.
                                    </p>
                                    <h3>What is Priority Gold's minimum investment?</h3>
                                    <p>
                                        The minimum for a Gold IRA with Priority Gold is $10,000. This is lower than Augusta ($50k) and in line with most mid-tier competitors.
                                    </p>
                                    <h3>Does Priority Gold sell numismatic coins?</h3>
                                    <p>
                                        Yes, and this is actually their specialty. They focus heavily on numismatic (collectible) coins rather than generic bullion. If you prefer straight bullion with lower premiums, you might want to compare with other dealers.
                                    </p>
                                    <h3>How does Priority Gold compare to Augusta?</h3>
                                    <p>
                                        Augusta has more educational resources and a higher minimum ($50k). Priority Gold offers a lower entry point and more personalized service, but less online content. Augusta is better for large investors; Priority Gold suits smaller accounts.
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
