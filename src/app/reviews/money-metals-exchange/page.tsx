import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, CheckCircle2, TrendingUp, XCircle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Money Metals Exchange Review 2026: Legit or Scam?",
    description: "Honest Money Metals Exchange review. Known for their 'Starter Packs' and direct sales. Are they good for IRAs or just small purchases?",
};

const companyData = {
    companyName: "Money Metals Exchange",
    rating: 4.5,
    minInvestment: "None (for direct buy)",
    fees: "Varies",
    bbbRating: "A+",
    bestFor: "Small Purchases",
    visitUrl: "https://moneymetals.com",
    pros: [
        "No minimum for direct purchases",
        "Famous 'Starter Portfolios'",
        "Voted 'Best Overall' by Investopedia",
        "Transparent pricing"
    ],
    cons: [
        "IRA services are secondary to direct sales",
        "Shipping costs on small orders",
        "Storage fees separate"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
        "@type": "Organization",
        "name": "Money Metals Exchange"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
    },
    "name": "Money Metals Exchange Review",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    }
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "starter-packs", label: "Starter Packs" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "reviews", label: "Customer Reviews" },
    { id: "faq", label: "FAQs" }
];

export default function MoneyMetalsExchangePage() {
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
                            <span className="font-bold text-secondary text-lg">4.5/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Money Metals Exchange Review (2026)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Excellent for buying small amounts of bullion directly. But how do they handle large Gold IRA rollovers?
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
                                        Money Metals Exchange made headlines when Investopedia named them "Best Overall" precious metals dealer. Their claim to fame? Low-cost starter portfolios that let anyone get into gold and silver without a massive upfront investment. But there's a catch: they're primarily a direct dealer, not an IRA specialist. Let's break down whether that matters for your retirement plans.
                                    </p>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <TrendingUp className="w-10 h-10 text-secondary" />
                                            <h2 className="text-2xl font-bold text-primary m-0">The Verdict</h2>
                                        </div>
                                        <p className="text-gray-700 mb-6">
                                            Money Metals Exchange excels at what they do best: selling gold and silver at competitive prices with no minimum purchase. For direct buying and holding at home or in private storage, they're excellent. For Gold IRAs, they can facilitate the process, but IRA services feel secondary to their core business. If your primary goal is an IRA rollover, consider a more IRA-focused dealer.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Visit Money Metals Exchange
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                <section id="starter-packs" className="scroll-mt-32">
                                    <h2>The Famous "Starter Packs"</h2>
                                    <p>
                                        Money Metals Exchange built their reputation on "Starter Portfolios"—pre-assembled collections of gold, silver, platinum, and palladium that let first-time buyers diversify across multiple metals in a single purchase. These packs range from a few hundred dollars to several thousand.
                                    </p>
                                    <p>
                                        The appeal is obvious: instead of agonizing over which coins or bars to buy, you get a curated mix. They update these portfolios based on market conditions, and the pricing is transparent—you can see exactly what premium you're paying over spot for each metal.
                                    </p>
                                    <p>
                                        For new investors, these starter packs remove the paralysis of choice. For experienced stackers, they might seem limiting. Either way, they've helped Money Metals attract customers who'd otherwise feel overwhelmed by the product selection at traditional dealers.
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
                                        Money Metals Exchange holds an A+ BBB rating and consistently receives praise for their pricing transparency and fast shipping. The Investopedia recognition wasn't accidental—they've earned a loyal customer base through competitive premiums and reliable service.
                                    </p>
                                    <p>
                                        Customer complaints typically focus on two areas: shipping costs for small orders (since they have no minimum, some people order small amounts and then balk at shipping fees) and occasional delays during periods of high demand. These are pretty standard for the industry.
                                    </p>
                                    <p>
                                        Worth noting: reviews specifically about their IRA services are harder to find than reviews about direct purchases. This reinforces our observation that IRAs are their secondary business, not their specialty.
                                    </p>
                                </section>

                                <section id="faq" className="scroll-mt-32">
                                    <h2>Frequently Asked Questions</h2>
                                    <h3>Is Money Metals Exchange legit?</h3>
                                    <p>
                                        Yes. Money Metals Exchange is a legitimate, A+ BBB-rated precious metals dealer. They were named "Best Overall" by Investopedia and have been in business for over a decade with millions of dollars in metals sold.
                                    </p>
                                    <h3>What is the minimum purchase at Money Metals Exchange?</h3>
                                    <p>
                                        For direct purchases, there is no minimum—you can buy a single silver coin if you want. For IRA services, minimum requirements vary based on the custodian they partner with.
                                    </p>
                                    <h3>Does Money Metals Exchange offer Gold IRAs?</h3>
                                    <p>
                                        Yes, but IRA services are not their primary focus. They facilitate IRAs through partner custodians, but if your main goal is a retirement account rollover, you might prefer a company where IRAs are the core business.
                                    </p>
                                    <h3>What are Money Metals "Starter Portfolios"?</h3>
                                    <p>
                                        Starter Portfolios are pre-assembled collections of gold, silver, platinum, and palladium designed for first-time buyers. They offer diversification across metals in a single purchase at various price points.
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
