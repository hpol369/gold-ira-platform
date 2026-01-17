import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Goldco Review 2026: Fees, Complaints & Expert Analysis",
    description: "Complete Goldco review for 2026. A+ BBB rating, celebrity endorsements, and strong silver focus. See if Goldco is the right gold IRA company for you.",
};

const companyData = {
    companyName: "Goldco",
    rating: 4.7,
    minInvestment: "$25,000",
    fees: "$175-$225/year",
    bbbRating: "A+",
    bestFor: "Mid-Range Investors ($25k-$100k)",
    visitUrl: AFFILIATE_LINKS.goldco,
    pros: [
        "A+ BBB rating with excellent customer reviews",
        "Strong focus on silver alongside gold",
        "Endorsed by Sean Hannity and other celebrities",
        "Comprehensive buyback program",
        "Wide selection of IRA-eligible products",
        "Knowledgeable and responsive staff"
    ],
    cons: [
        "$25,000 minimum may exclude some investors",
        "Fees not as transparent as some competitors",
        "Heavy marketing can feel aggressive",
        "No fee waiver programs available"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Goldco Gold IRA",
    "image": "https://www.richdadretirement.com/images/goldco-logo.png",
    "description": "Leading Gold & Silver IRA provider endorsed by Sean Hannity.",
    "brand": {
        "@type": "Brand",
        "name": "Goldco"
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
        "ratingValue": "4.7",
        "reviewCount": "2100"
    }
};

const tocItems = [
    { id: "overview", label: "Company Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "services", label: "Services" },
    { id: "fees", label: "Fees" },
    { id: "customer-reviews", label: "Reviews" },
    { id: "who-should-use", label: "Who Should Use?" },
    { id: "verdict", label: "Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function GoldcoReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary/50 text-secondary/50'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.7/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Goldco Review 2026</h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            A trusted name in precious metals with strong celebrity endorsements. We analyze Goldco&apos;s services, fees, and why they&apos;re a top choice for silver investors.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            <div className="block lg:hidden"><ReviewSidebar {...companyData} /></div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                                <section id="overview" className="scroll-mt-32">
                                    <p className="lead">
                                        In this <strong>Goldco review</strong>, we examine one of the most heavily-marketed gold IRA companies and determine whether they live up to the hype.
                                    </p>
                                    <p>
                                        Founded in 2006, Goldco has grown into one of the largest precious metals companies in the United States. They&apos;ve processed over $2 billion in precious metals transactions and serve clients across all 50 states.
                                    </p>
                                    <p>
                                        What makes Goldco unique is their <strong>strong focus on silver</strong> alongside gold. They believe silver offers better growth potential while gold provides stability—and they help clients find the right balance.
                                    </p>

                                    <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                        <div className="flex items-start gap-4">
                                            <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-primary text-lg mb-2">Goldco Highlights</h4>
                                                <ul className="space-y-2 text-sm text-text-muted">
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Over $2 billion in precious metals transactions</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />A+ BBB rating, 4.8/5 customer reviews</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Endorsed by Sean Hannity and Ben Shapiro</li>
                                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" />Industry-leading silver IRA expertise</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Goldco: Pros & Cons</h2>
                                    <ProsCons pros={companyData.pros} cons={companyData.cons} />
                                </section>

                                <section id="services" className="scroll-mt-32">
                                    <h2>Services & Products</h2>
                                    <h3>Gold & Silver IRAs</h3>
                                    <p>Goldco specializes in both gold and silver IRAs, with a particular emphasis on silver&apos;s growth potential. They offer a wide selection of IRS-approved coins and bars.</p>

                                    <h3>Direct Precious Metals Purchases</h3>
                                    <p>Buy gold and silver for direct delivery outside of an IRA structure.</p>

                                    <h3>Buyback Program</h3>
                                    <p>Goldco offers to repurchase metals they&apos;ve sold you at competitive prices, providing liquidity when needed.</p>

                                    <Callout type="tip" title="Silver Focus">
                                        Goldco believes silver is undervalued relative to gold. Their team can explain the gold-to-silver ratio and help you determine if adding silver to your IRA makes sense.
                                    </Callout>
                                </section>

                                <section id="fees" className="scroll-mt-32">
                                    <h2>Goldco Fees</h2>
                                    <div className="overflow-x-auto not-prose my-8">
                                        <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="p-4 border-b font-bold text-primary">Fee Type</th>
                                                    <th className="p-4 border-b font-bold text-primary">Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-sm">
                                                <tr><td className="p-4 font-semibold">Setup Fee</td><td className="p-4">$50</td></tr>
                                                <tr><td className="p-4 font-semibold">Annual Custodian Fee</td><td className="p-4">$80</td></tr>
                                                <tr><td className="p-4 font-semibold">Annual Storage Fee</td><td className="p-4">$100-$150</td></tr>
                                                <tr className="bg-secondary/5"><td className="p-4 font-bold text-primary">Total Annual</td><td className="p-4 font-bold text-primary">$175-$225</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="customer-reviews" className="scroll-mt-32">
                                    <h2>Customer Reviews</h2>
                                    <div className="grid md:grid-cols-3 gap-4 not-prose my-8">
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">A+</div>
                                            <div className="text-sm text-text-muted">BBB Rating</div>
                                        </div>
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                                            <div className="text-sm text-text-muted">TrustPilot</div>
                                        </div>
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">4.7/5</div>
                                            <div className="text-sm text-text-muted">Google</div>
                                        </div>
                                    </div>
                                </section>

                                <section id="who-should-use" className="scroll-mt-32">
                                    <h2>Who Should Use Goldco?</h2>
                                    <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                        <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" />Perfect For</h4>
                                            <ul className="space-y-2 text-sm text-green-600">
                                                <li>• Investors with $25,000-$100,000</li>
                                                <li>• Those interested in silver IRAs</li>
                                                <li>• People who value established brands</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5" />Not Ideal For</h4>
                                            <ul className="space-y-2 text-sm text-red-600">
                                                <li>• Investors under $25,000</li>
                                                <li>• Those seeking extensive education</li>
                                                <li>• People who dislike marketing calls</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <h2>Our Verdict</h2>
                                    <p>Goldco is a solid choice for mid-range investors who want a reputable company with strong silver expertise. Their celebrity endorsements speak to their mainstream appeal.</p>
                                    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                        <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                        <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.7/5</h3>
                                        <p className="mb-6 text-gray-600">Best for silver-focused investors with $25k+.</p>
                                        <Button variant="gold" size="xl" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">Get Free Gold Kit <ArrowRight className="ml-2 w-5 h-5" /></a>
                                        </Button>
                                    </div>
                                </section>

                                <section id="faq" className="scroll-mt-32">
                                    <h2>Goldco FAQs</h2>
                                    <div className="space-y-4 not-prose">
                                        <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                            <summary className="flex cursor-pointer items-center justify-between text-primary">
                                                <h4 className="text-lg font-bold">Is Goldco legitimate?</h4>
                                            </summary>
                                            <p className="mt-4 text-gray-700">Yes, Goldco is a legitimate, A+ BBB-rated company that has processed over $2 billion in transactions since 2006.</p>
                                        </details>
                                        <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                            <summary className="flex cursor-pointer items-center justify-between text-primary">
                                                <h4 className="text-lg font-bold">What is Goldco&apos;s minimum investment?</h4>
                                            </summary>
                                            <p className="mt-4 text-gray-700">Goldco requires a minimum of $25,000 to open a gold or silver IRA.</p>
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
