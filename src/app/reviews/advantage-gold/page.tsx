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
    title: "Advantage Gold Review 2026: Fees, Ratings & Honest Analysis",
    description: "Complete Advantage Gold review for 2026. Low fees, IRA specialists, and transparent pricing. See if Advantage Gold is right for your investment.",
};

const companyData = {
    companyName: "Advantage Gold",
    rating: 4.5,
    minInvestment: "$5,000",
    fees: "$150-$200/year",
    bbbRating: "A+",
    bestFor: "Budget-Conscious Investors",
    visitUrl: AFFILIATE_LINKS.advantage,
    pros: [
        "Low $5,000 minimum investment",
        "Competitive fee structure",
        "A+ BBB rating",
        "Specializes in IRA rollovers",
        "Transparent pricing",
        "Quick account setup"
    ],
    cons: [
        "Smaller company with less recognition",
        "Limited product selection",
        "Fewer educational resources",
        "Less personalized service"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Advantage Gold IRA",
    "image": "https://www.richdadretirement.com/images/advantage-logo.png",
    "description": "Budget-friendly Gold IRA provider with a low $5,000 minimum.",
    "brand": {
        "@type": "Brand",
        "name": "Advantage Gold"
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
        "reviewCount": "350"
    }
};

const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "fees", label: "Fees" },
    { id: "verdict", label: "Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function AdvantageGoldReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary/50 text-secondary/50'}`} />))}</div>
                            <span className="font-bold text-secondary text-lg">4.5/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Advantage Gold Review 2026</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">A budget-friendly option for gold IRA investors. We analyze their low minimums and competitive pricing.</p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                            <section id="overview" className="scroll-mt-32">
                                <p className="lead">In this <strong>Advantage Gold review</strong>, we examine a company that focuses on affordability and accessibility.</p>
                                <p>Advantage Gold specializes in helping investors with smaller portfolios access precious metals IRAs. Their $5,000 minimum is one of the most accessible in the industry.</p>
                                <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                    <div className="flex items-start gap-4">
                                        <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-primary text-lg mb-2">Advantage Gold Highlights</h4>
                                            <ul className="space-y-2 text-sm text-text-muted">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />$5,000 minimum investment</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />A+ BBB rating</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Low annual fees</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />IRA rollover specialists</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="pros-cons" className="scroll-mt-32">
                                <h2>Advantage Gold: Pros & Cons</h2>
                                <ProsCons pros={companyData.pros} cons={companyData.cons} />
                            </section>

                            <section id="fees" className="scroll-mt-32">
                                <h2>Advantage Gold Fees</h2>
                                <div className="overflow-x-auto not-prose my-8">
                                    <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr><th className="p-4 border-b font-bold text-primary">Fee Type</th><th className="p-4 border-b font-bold text-primary">Cost</th></tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm">
                                            <tr><td className="p-4 font-semibold">Setup Fee</td><td className="p-4">$50</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Custodian Fee</td><td className="p-4">$50</td></tr>
                                            <tr><td className="p-4 font-semibold">Annual Storage Fee</td><td className="p-4">$100</td></tr>
                                            <tr className="bg-secondary/5"><td className="p-4 font-bold text-primary">Total Annual</td><td className="p-4 font-bold text-primary">$150-$200</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section id="verdict" className="scroll-mt-32">
                                <h2>Our Verdict</h2>
                                <p>Advantage Gold is a solid choice for budget-conscious investors who want low minimums and competitive fees without sacrificing legitimacy.</p>
                                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                    <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.5/5</h3>
                                    <p className="mb-6 text-gray-600">Best for budget-conscious investors with $5k-$25k.</p>
                                    <Button variant="gold" size="xl" asChild>
                                        <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">Get Free Info Kit <ArrowRight className="ml-2 w-5 h-5" /></a>
                                    </Button>
                                </div>
                            </section>

                            <section id="faq" className="scroll-mt-32">
                                <h2>Advantage Gold FAQs</h2>
                                <div className="space-y-4 not-prose">
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">Is Advantage Gold legitimate?</h4></summary>
                                        <p className="mt-4 text-gray-700">Yes, Advantage Gold is a legitimate A+ BBB-rated precious metals company.</p>
                                    </details>
                                    <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-primary"><h4 className="text-lg font-bold">What is the minimum investment?</h4></summary>
                                        <p className="mt-4 text-gray-700">Advantage Gold has a low $5,000 minimum investment requirement.</p>
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
