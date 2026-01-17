import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award, AlertTriangle, Users } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

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
    visitUrl: AFFILIATE_LINKS.americanHartford,
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

const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "American Hartford Gold IRA",
    "image": "https://www.richdadretirement.com/images/ahg-logo.png",
    "description": "Family-owned Gold IRA provider known for their Price Match Guarantee.",
    "brand": {
        "@type": "Brand",
        "name": "American Hartford Gold"
    },
    "review": {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.7",
            "bestRating": "5"
        },
        "author": {
            "@type": "Organization",
            "name": "Rich Dad Retirement"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1500"
    }
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "services", label: "Services" },
    { id: "fees", label: "Fees" },
    { id: "reviews", label: "Reviews" },
    { id: "verdict", label: "Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function AmericanHartfordGoldReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary text-secondary'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.7/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">American Hartford Gold Review 2026</h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">A family-owned company with a unique price match guarantee. We analyze their personalized approach, fee structure, and value proposition.</p>
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
                                <section id="overview" className="scroll-mt-32">
                                    <p className="lead">In this <strong>American Hartford Gold review</strong>, we examine why thousands of families trust this Los Angeles-based dealer for their retirement protection.</p>
                                    <p>Founded in 2015, American Hartford Gold (AHG) has quickly become one of the fastest-growing precious metals companies in the US. Unlike some massive corporate competitors, AHG maintains a "family office" feel, emphasizing personal relationships and long-term trust.</p>
                                    <p>Their standout feature? A <strong>Price Match Guarantee</strong> that ensures you never pay more than you should for your metals.</p>

                                    <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                        <div className="flex items-start gap-4">
                                            <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-primary text-lg mb-2">AHG Highlights</h4>
                                                <ul className="space-y-2 text-sm text-text-muted">
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Price match guarantee on all coins</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />A+ BBB rating & 5-star TrustPilot score</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Official partner of Bill O'Reilly</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />No buyback liquidation fees</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>American Hartford Gold: Pros & Cons</h2>
                                    <ProsCons pros={companyData.pros} cons={companyData.cons} />
                                </section>

                                <section id="services" className="scroll-mt-32">
                                    <h2>Services & Products</h2>
                                    <h3>Gold & Silver IRAs</h3>
                                    <p>AHG specializes in helping Americans move their 401(k) or IRA into physical gold and silver. Their team handles all the paperwork with your custodian (usually Equity Trust), making the rollover process hands-off for you.</p>

                                    <h3>Cash Purchases</h3>
                                    <p>For non-retirement savings, AHG delivers coins and bars directly to your home. All shipments are fully insured and shipped via registered mail (Requires signature).</p>

                                    <Callout type="tip" title="Buyback Commitment">
                                        One of AHG's best features is their buyback program. If you ever need to sell your metals, they essentially guarantee to buy them back, and unlike some competitors, they do not charge any liquidation fees.
                                    </Callout>
                                </section>

                                <section id="fees" className="scroll-mt-32">
                                    <h2>American Hartford Gold Fees</h2>
                                    <p>AHG fees are competitive and often waived for new accounts.</p>
                                    <div className="overflow-x-auto not-prose my-8">
                                        <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr><th className="p-4 border-b font-bold text-primary">Fee Type</th><th className="p-4 border-b font-bold text-primary">Cost</th></tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-sm">
                                                <tr><td className="p-4 font-semibold">Account Setup</td><td className="p-4">$0</td></tr>
                                                <tr><td className="p-4 font-semibold">Annual Custodian Fee</td><td className="p-4">$100</td></tr>
                                                <tr><td className="p-4 font-semibold">Annual Storage Fee</td><td className="p-4">$100</td></tr>
                                                <tr className="bg-secondary/5"><td className="p-4 font-bold text-primary">Total Annual</td><td className="p-4 font-bold text-primary">$200</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p><strong>Note:</strong> Fees are frequently waived for the first 1-3 years depending on your initial investment size.</p>
                                </section>

                                <section id="reviews" className="scroll-mt-32">
                                    <h2>Customer Reviews</h2>
                                    <div className="grid md:grid-cols-3 gap-4 not-prose my-8">
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
                                            <div className="text-4xl font-bold text-primary mb-2">A+</div>
                                            <div className="text-sm text-text-muted font-semibold">BBB Rating</div>
                                        </div>
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
                                            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                                            <div className="text-sm text-text-muted font-semibold">TrustPilot</div>
                                        </div>
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
                                            <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                                            <div className="text-sm text-text-muted font-semibold">Consumer Affairs</div>
                                        </div>
                                    </div>
                                    <p>Customers consistently praise their responsive account executives and the lack of high-pressure sales tactics.</p>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <h2>Our Verdict</h2>
                                    <p>American Hartford Gold is an excellent choice for <strong>value-conscious investors</strong>. Their Price Match Guarantee ensures you get a fair deal, and their lower minimum investment ($10k) makes them more accessible than Augusta or Goldco.</p>
                                    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                        <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                        <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.7/5</h3>
                                        <p className="mb-6 text-gray-600">Best for price protection and personal service.</p>
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
                                            <p className="mt-4 text-gray-700">Yes, they are A+ BBB rated and have served thousands of clients since 2015.</p>
                                        </details>
                                        <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                            <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">What is the Price Match Guarantee?</h4></summary>
                                            <p className="mt-4 text-gray-700">AHG will match competitor pricing on identical coins/bars, ensuring you don't overpay for your metals.</p>
                                        </details>
                                    </div>
                                </section>
                            </article>
                        </div>
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
