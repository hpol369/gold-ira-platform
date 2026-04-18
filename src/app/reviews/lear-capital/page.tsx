import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { AFFILIATE_LINKS } from "@/config/affiliates";

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
    visitUrl: AFFILIATE_LINKS.lear,
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

const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Lear Capital Gold IRA",
    "image": "https://www.richdadretirement.com/images/lear-logo.png",
    "description": "Established precious metals dealer with 25+ years experience.",
    "brand": {
        "@type": "Brand",
        "name": "Lear Capital"
    },
    "review": {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.4",
            "bestRating": "5"
        },
        "author": {
            "@type": "Organization",
            "name": "Rich Dad Retirement"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "400"
    }
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
        <main className="min-h-screen bg-[#0C0D18] pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-[#0C0D18] border-b border-[#2A2D42] py-16">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-[#B22234] text-[#D4A94E]' : 'fill-slate-300 text-[#D0CCC4]'}`} />))}</div>
                            <span className="font-bold text-[#D4A94E] text-lg">4.4/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#F6F4EF]">Lear Capital Review 2026</h1>
                        <p className="text-xl text-[#D0CCC4] max-w-2xl">One of the oldest names in precious metals. We analyze their 25+ year track record and unique price lock guarantee.</p>
                    </div>
                </Container>
            </header>

            <section className="pt-8 pb-4 bg-[#0C0D18]">
                <Container>
                    <AnswerFirst
                        answer="Lear Capital is one of the oldest Gold IRA companies, founded in 1997. They offer a $10,000-$25,000 minimum with ~$265/year in fees and a unique price lock guarantee. Note: Lear faced a New York Attorney General lawsuit alleging predatory practices, and filed for bankruptcy in 2022."
                        keyFacts={[
                            "Founded in 1997 — over 25 years in the precious metals industry",
                            "A+ BBB rating with price lock guarantee on purchases",
                            "Annual fees: $225-$280/year (custodian + storage combined)",
                            "Filed for Chapter 11 bankruptcy in 2022; faced NY AG lawsuit over sales practices",
                        ]}
                        variant="light"
                        className="max-w-3xl mx-auto"
                    />
                </Container>
            </section>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-li:text-[#D0CCC4] prose-strong:text-[#F6F4EF] prose-a:text-[#D4A94E] max-w-none">
                            <section id="overview" className="scroll-mt-32">
                                <p className="lead"><strong>You&apos;ve worked 30+ years building your retirement.</strong> Now you&apos;re researching companies, doing your homework. That&apos;s exactly what you should do. Let&apos;s give you the straight story on Lear Capital.</p>
                                <p>Founded in 1997, Lear Capital has been around 25+ years—they&apos;re not going to disappear overnight. They&apos;ve had some regulatory issues in the past (we cover that <Link href="/reviews/lear-capital-complaints" className="text-[#D4A94E] hover:underline">here</Link>), but they addressed them and keep going. Their main selling point is the &quot;price lock guarantee&quot;—once you agree to buy, the price is locked, no surprises.</p>
                                <p>Vince, a retired construction foreman from Ohio, told us: &quot;I liked that they&apos;d been around so long. These fly-by-night operations scare me. Lear&apos;s been through market crashes and they&apos;re still standing.&quot;</p>
                                <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-2xl p-6 border border-[#2A2D42] not-prose my-8">
                                    <div className="flex items-start gap-4">
                                        <Award className="w-10 h-10 text-[#D4A94E] flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-[#F6F4EF] text-lg mb-2">Lear Capital Highlights</h4>
                                            <ul className="space-y-2 text-sm text-[#D0CCC4]">
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4A94E]" />25+ years in business</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4A94E]" />A+ BBB rating</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4A94E]" />Price lock guarantee</li>
                                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4A94E]" />Real-time pricing tools</li>
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
                                    <table className="w-full text-left border-collapse bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42]">
                                        <thead className="bg-white/5">
                                            <tr><th className="p-4 border-b border-white/10 font-bold text-[#F6F4EF]">Fee Type</th><th className="p-4 border-b border-white/10 font-bold text-[#F6F4EF]">Cost</th></tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10 text-sm text-[#D0CCC4]">
                                            <tr><td className="p-4 font-semibold text-[#F6F4EF]">Setup Fee</td><td className="p-4">$50-$100</td></tr>
                                            <tr><td className="p-4 font-semibold text-[#F6F4EF]">Annual Custodian Fee</td><td className="p-4">$75-$100</td></tr>
                                            <tr><td className="p-4 font-semibold text-[#F6F4EF]">Annual Storage Fee</td><td className="p-4">$100-$180</td></tr>
                                            <tr className="bg-white/5"><td className="p-4 font-bold text-[#D4A94E]">Total Annual</td><td className="p-4 font-bold text-[#D4A94E]">$225-$280</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section id="verdict" className="scroll-mt-32">
                                <h2>Final Verdict - Established But Be Aware</h2>
                                <p>Lear Capital works best for folks who want an established company that&apos;s survived multiple market crashes. Their price lock guarantee means no surprises on pricing. That said, their sales team can be persistent—if you&apos;re the type who hates being called, be ready to set boundaries.</p>
                                <p>Debbie, a retired cafeteria worker from Michigan, appreciated them: &quot;I liked knowing I was dealing with a company that&apos;s been around since before I retired. Their price lock thing gave me peace of mind.&quot;</p>
                                <div className="bg-[#161828] border border-[#2A2D42] shadow-sm p-8 rounded-2xl border border-[#2A2D42] mt-8 not-prose text-center">
                                    <ShieldCheck className="w-12 h-12 text-[#D4A94E] mx-auto mb-4" />
                                    <h3 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-2">Our Rating: 4.4/5</h3>
                                    <p className="mb-6 text-[#D0CCC4]">Best for working folks who want an established company with 25+ years of history.</p>
                                    <Button variant="gold" size="xl" asChild>
                                        <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">Get Free Info Kit <ArrowRight className="ml-2 w-5 h-5" /></a>
                                    </Button>
                                </div>
                            </section>

                            <section id="faq" className="scroll-mt-32">
                                <h2>Lear Capital FAQs</h2>
                                <div className="space-y-4 not-prose">
                                    <details className="group bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-[#F6F4EF]"><h4 className="text-lg font-bold">Is Lear Capital legitimate?</h4></summary>
                                        <p className="mt-4 text-[#D0CCC4]">Yes, Lear Capital is a legitimate A+ BBB-rated company with over 25 years of history.</p>
                                    </details>
                                    <details className="group bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] p-6">
                                        <summary className="flex cursor-pointer items-center justify-between text-[#F6F4EF]"><h4 className="text-lg font-bold">What is the price lock guarantee?</h4></summary>
                                        <p className="mt-4 text-[#D0CCC4]">The price lock guarantee locks in your purchase price for a set period, protecting you from price increases during the transaction process.</p>
                                    </details>
                                </div>
                            </section>

                            {/* Related Content */}
                            <section className="mt-12 not-prose">
                                <h3 className="text-lg font-bold text-[#F6F4EF] mb-4">Compare Other Companies</h3>
                                <div className="grid md:grid-cols-2 gap-3 mb-6">
                                    <Link href="/reviews/augusta-precious-metals" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">Augusta Precious Metals →</span>
                                    </Link>
                                    <Link href="/reviews/goldco" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">Goldco →</span>
                                    </Link>
                                    <Link href="/reviews/american-hartford-gold" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">American Hartford Gold →</span>
                                    </Link>
                                    <Link href="/reviews/birch-gold" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">Birch Gold Group →</span>
                                    </Link>
                                </div>
                                <h3 className="text-lg font-bold text-[#F6F4EF] mb-4">Helpful Guides</h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <Link href="/guide/gold-ira-fees" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">Gold IRA Fees Explained →</span>
                                    </Link>
                                    <Link href="/guide/401k-to-gold-rollover" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">401k to Gold Rollover →</span>
                                    </Link>
                                    <Link href="/learn/gold-ira-scams" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">Scams to Avoid →</span>
                                    </Link>
                                    <Link href="/compare/gold-ira-vs-physical-gold" className="p-3 bg-[#161828] border border-[#2A2D42] shadow-sm rounded-xl border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)] transition-colors">
                                        <span className="text-sm font-semibold text-[#F6F4EF]">Gold IRA vs Physical Gold →</span>
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
            <StickyMobileCTA companySlug="lear-capital" companyName="Lear Capital" />
        </main>
    );
}
