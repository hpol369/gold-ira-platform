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
    title: "Oxford Gold Group Review 2026: Fees, Ratings & Analysis",
    description: "Complete Oxford Gold Group review for 2026. Premium service, A+ BBB rating, and white-glove approach. Is Oxford Gold right for you?",
};

const companyData = {
    companyName: "Oxford Gold Group",
    rating: 4.5,
    minInvestment: "$10,000",
    fees: "$200-$275/year",
    bbbRating: "A+",
    bestFor: "Service-Focused Investors",
    visitUrl: AFFILIATE_LINKS.oxford,
    pros: [
        "A+ BBB rating with excellent reviews",
        "White-glove customer service",
        "Comprehensive market analysis",
        "Wide product selection",
        "Experienced account managers",
        "Strong buyback program"
    ],
    cons: [
        "Higher fees than budget options",
        "$10,000 minimum investment",
        "Smaller company footprint",
        "Limited educational content"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Oxford Gold Group IRA",
    "image": "https://www.richdadretirement.com/images/oxford-logo.png",
    "description": "Premium service precious metals dealer with white-glove support.",
    "brand": {
        "@type": "Brand",
        "name": "Oxford Gold Group"
    },
    "review": {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Organization",
            "name": "Rich Dad Retirement"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "500"
    }
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "fees", label: "Fees" },
    { id: "verdict", label: "Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function OxfordGoldGroupReviewPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary/50 text-secondary/50'}`} />))}</div>
                            <span className="font-bold text-secondary text-lg">4.5/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Oxford Gold Group Review 2026</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">A service-focused precious metals company. We analyze their white-glove approach and premium offerings.</p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-secondary max-w-none">
                            <section id="overview" className="scroll-mt-32">
                                <p className="lead">In this <strong>Oxford Gold Group review</strong>, we examine a company known for premium service and personalized attention.</p>
                                <p>Oxford Gold Group prides itself on a white-glove approach to precious metals investing. They focus on building long-term relationships rather than quick transactions.</p>
                                <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                    <div className="flex items-start gap-4">
                                        <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-primary text-lg mb-2">Oxford Gold Highlights</h4>
                                            <ul className="space-y-2 text-sm text-text-muted">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />White-glove service</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />A+ BBB rating</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Dedicated account managers</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Comprehensive market analysis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="pros-cons" className="scroll-mt-32">
                                <h2>Oxford Gold Group: Pros & Cons</h2>
                                <ProsCons pros={companyData.pros} cons={companyData.cons} />
                            </section>

                            <section id="fees" className="scroll-mt-32">
                                <h2>Oxford Gold Group Fees</h2>
                                <div className="overflow-x-auto not-prose my-8">
                                    <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr><th className="p-4 border-b font-bold text-primary">Fee Type</th><th className="p-4 border-b font-bold text-primary">Cost</th></tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm">
                                            <tr><td className="p-4 font-semibold">Setup Fee</td><td className="p-4">$75</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Custodian Fee</td><td className="p-4">$100</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Storage Fee</td><td className="p-4">$100-$175</td></tr>
                                            <tr className="bg-secondary/5"><td className="p-4 font-bold text-primary">Total Annual</td><td className="p-4 font-bold text-primary">$200-$275</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section id="verdict" className="scroll-mt-32">
                                <h2>Our Verdict</h2>
                                <p>Oxford Gold Group is best for investors who value personalized service and are willing to pay slightly higher fees for a premium experience.</p>
                                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                    <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.5/5</h3>
                                    <p className="mb-6 text-gray-600">Best for service-focused investors seeking personalized attention.</p>
                                    <Button variant="gold" size="xl" asChild>
                                        <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">Get Free Info Kit <ArrowRight className="ml-2 w-5 h-5" /></a>
                                    </Button>
                                </div>
                            </section>

                            <section id="faq" className="scroll-mt-32">
                                <h2>Oxford Gold Group FAQs</h2>
                                <div className="space-y-4 not-prose">
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">Is Oxford Gold Group legitimate?</h4></summary>
                                        <p className="mt-4 text-gray-700">Yes, Oxford Gold Group is a legitimate A+ BBB-rated precious metals company.</p>
                                    </details>
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">What is the minimum investment?</h4></summary>
                                        <p className="mt-4 text-gray-700">Oxford Gold Group requires a $10,000 minimum investment.</p>
                                    </details>
                                </div>
                            </section>

                            {/* Related Content */}
                            <section className="mt-12 not-prose">
                                <h3 className="text-lg font-bold text-primary mb-4">Compare Other Companies</h3>
                                <div className="grid md:grid-cols-2 gap-3 mb-6">
                                    <Link href="/reviews/augusta-precious-metals" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">Augusta Precious Metals →</span>
                                    </Link>
                                    <Link href="/reviews/goldco" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">Goldco →</span>
                                    </Link>
                                    <Link href="/reviews/american-hartford-gold" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">American Hartford Gold →</span>
                                    </Link>
                                    <Link href="/reviews/birch-gold" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">Birch Gold Group →</span>
                                    </Link>
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-4">Helpful Guides</h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <Link href="/guide/gold-ira-fees" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">Gold IRA Fees Explained →</span>
                                    </Link>
                                    <Link href="/guide/401k-to-gold-rollover" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">401k to Gold Rollover →</span>
                                    </Link>
                                    <Link href="/learn/gold-ira-scams" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">Scams to Avoid →</span>
                                    </Link>
                                    <Link href="/compare/gold-ira-vs-physical-gold" className="p-3 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        <span className="text-sm font-semibold text-primary">Gold IRA vs Physical Gold →</span>
                                    </Link>
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
