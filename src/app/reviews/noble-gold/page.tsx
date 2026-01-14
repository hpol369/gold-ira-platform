import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Noble Gold Review 2026: Fees, Ratings & Is It Legit?",
    description: "Honest Noble Gold review for 2026. Low $2,000 minimum, transparent fees, and excellent customer service. See if Noble Gold is right for your gold IRA.",
};

const companyData = {
    companyName: "Noble Gold Investments",
    rating: 4.8,
    minInvestment: "$2,000",
    fees: "$225-$250/year",
    bbbRating: "A+",
    bestFor: "Smaller Accounts ($2k-$50k)",
    visitUrl: "#",
    pros: [
        "Industry-low $2,000 minimum investment",
        "Transparent, straightforward pricing",
        "Excellent customer service with dedicated reps",
        "Unique Royal Survival Packs for home delivery",
        "A+ BBB rating with minimal complaints",
        "Quick and easy account setup process",
        "Texas-based storage option (no state income tax)"
    ],
    cons: [
        "Higher annual fees than some competitors",
        "Limited educational resources vs. Augusta",
        "Smaller company with shorter track record",
        "No fee waiver programs available"
    ]
};

const tocItems = [
    { id: "overview", label: "Company Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "services", label: "Services & Products" },
    { id: "fees", label: "Fees & Pricing" },
    { id: "customer-reviews", label: "Customer Reviews" },
    { id: "complaints", label: "Complaints" },
    { id: "who-should-use", label: "Who Should Use Noble Gold?" },
    { id: "alternatives", label: "Alternatives" },
    { id: "verdict", label: "Our Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function NobleGoldReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Review Header */}
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-secondary/50 text-secondary/50'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.8/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Noble Gold Review 2026
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            The best gold IRA company for investors with smaller accounts. We analyze Noble Gold&apos;s low minimums, fees, customer service, and unique survival pack offerings.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            {/* Mobile Quick Facts */}
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                                {/* Overview Section */}
                                <section id="overview" className="scroll-mt-32">
                                    <p className="lead">
                                        In this <strong>Noble Gold review</strong>, we examine why this Pasadena-based company has become the go-to choice for investors who want to start a gold IRA without a massive upfront investment.
                                    </p>
                                    <p>
                                        Founded in 2016, Noble Gold Investments has quickly established itself as a trusted name in the precious metals industry. While they may not have the decades-long track record of some competitors, they&apos;ve earned a reputation for exceptional customer service and investor-friendly policies.
                                    </p>
                                    <p>
                                        What sets Noble Gold apart? Their <strong>$2,000 minimum investment</strong>—one of the lowest in the industry—opens the door for everyday Americans who want to diversify into gold but don&apos;t have $50,000+ to get started.
                                    </p>

                                    <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                        <div className="flex items-start gap-4">
                                            <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-primary text-lg mb-2">Noble Gold at a Glance</h4>
                                                <ul className="space-y-2 text-sm text-text-muted">
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        Founded in 2016 in Pasadena, California
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        A+ BBB rating with 4.9/5 customer reviews
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        Industry-low $2,000 minimum investment
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        Unique Royal Survival Packs for direct ownership
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Pros & Cons */}
                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Noble Gold: Pros & Cons</h2>
                                    <p>Here&apos;s our honest assessment of Noble Gold&apos;s strengths and weaknesses:</p>
                                    <ProsCons pros={companyData.pros} cons={companyData.cons} />
                                </section>

                                {/* Services Section */}
                                <section id="services" className="scroll-mt-32">
                                    <h2>Services & Products</h2>
                                    <p>Noble Gold offers a comprehensive range of precious metals services:</p>

                                    <h3>Gold & Silver IRAs</h3>
                                    <p>Their core offering includes self-directed IRAs holding physical gold, silver, platinum, and palladium. They handle the entire process from account setup to metal selection and secure storage.</p>

                                    <h3>Direct Precious Metals Sales</h3>
                                    <p>Don&apos;t want an IRA? Noble Gold sells gold and silver coins/bars for direct delivery to your home. No account needed—just purchase and receive your metals.</p>

                                    <h3>Royal Survival Packs</h3>
                                    <p>This is Noble Gold&apos;s unique offering: pre-packaged collections of smaller gold and silver coins designed for bartering or emergencies. These are delivered directly to your home and include:</p>
                                    <ul>
                                        <li><strong>The Ranger Pack:</strong> Entry-level collection for beginners</li>
                                        <li><strong>The Spartan Pack:</strong> Mid-tier diversified selection</li>
                                        <li><strong>The Centurion Pack:</strong> Premium collection for serious preppers</li>
                                    </ul>

                                    <Callout type="tip" title="Unique Value">
                                        Royal Survival Packs are ideal for those who want physical gold they can hold, not just gold in a vault. They&apos;re particularly popular with investors who value preparedness.
                                    </Callout>
                                </section>

                                {/* Fees Section */}
                                <section id="fees" className="scroll-mt-32">
                                    <h2>Noble Gold Fees</h2>
                                    <p>Here&apos;s the complete breakdown of <strong>Noble Gold fees</strong>:</p>

                                    <div className="overflow-x-auto not-prose my-8">
                                        <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="p-4 border-b font-bold text-primary">Fee Type</th>
                                                    <th className="p-4 border-b font-bold text-primary">Cost</th>
                                                    <th className="p-4 border-b font-bold text-primary">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-sm">
                                                <tr>
                                                    <td className="p-4 font-semibold">Account Setup</td>
                                                    <td className="p-4">$80</td>
                                                    <td className="p-4">One-time fee</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">Annual Custodian Fee</td>
                                                    <td className="p-4">$80</td>
                                                    <td className="p-4">Administrative costs</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">Annual Storage Fee</td>
                                                    <td className="p-4">$150</td>
                                                    <td className="p-4">Segregated storage</td>
                                                </tr>
                                                <tr className="bg-secondary/5">
                                                    <td className="p-4 font-bold text-primary">Total Annual Cost</td>
                                                    <td className="p-4 font-bold text-primary">$225-$250</td>
                                                    <td className="p-4 font-medium text-secondary">Flat-rate, transparent pricing</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p>Noble Gold uses <strong>flat-rate fees</strong> rather than percentage-based pricing. This means smaller accounts pay the same as larger ones—a significant advantage for investors starting with less capital.</p>
                                </section>

                                {/* Customer Reviews */}
                                <section id="customer-reviews" className="scroll-mt-32">
                                    <h2>Customer Reviews & Ratings</h2>
                                    <p>Noble Gold has strong ratings across major review platforms:</p>

                                    <div className="grid md:grid-cols-3 gap-4 not-prose my-8">
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">A+</div>
                                            <div className="text-sm text-text-muted">BBB Rating</div>
                                        </div>
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                                            <div className="text-sm text-text-muted">Google Reviews</div>
                                        </div>
                                        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                                            <div className="text-sm text-text-muted">TrustPilot</div>
                                        </div>
                                    </div>

                                    <h3>What Customers Love</h3>
                                    <ul>
                                        <li><strong>Personal attention:</strong> Dedicated account reps who know your name</li>
                                        <li><strong>No pressure:</strong> Educational approach without aggressive sales tactics</li>
                                        <li><strong>Fast setup:</strong> Many customers report accounts opened within days</li>
                                        <li><strong>Clear communication:</strong> Transparent about fees and processes</li>
                                    </ul>
                                </section>

                                {/* Complaints */}
                                <section id="complaints" className="scroll-mt-32">
                                    <h2>Noble Gold Complaints</h2>
                                    <p>While Noble Gold has generally positive reviews, here are the criticisms we found:</p>

                                    <div className="not-prose my-8 space-y-4">
                                        <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-amber-700">Higher Fees Than Some Competitors</h4>
                                                <p className="text-sm text-amber-600 mt-1">At $225-250/year, Noble Gold&apos;s fees are higher than companies like Augusta that offer fee waivers. For larger accounts, this adds up.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-amber-700">Younger Company</h4>
                                                <p className="text-sm text-amber-600 mt-1">Founded in 2016, Noble Gold doesn&apos;t have the decades of history that some investors prefer. However, they&apos;ve built a solid reputation quickly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Who Should Use */}
                                <section id="who-should-use" className="scroll-mt-32">
                                    <h2>Who Should Use Noble Gold?</h2>

                                    <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                        <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" />
                                                Perfect For
                                            </h4>
                                            <ul className="space-y-2 text-sm text-green-600">
                                                <li>• Investors with $2,000-$50,000 to invest</li>
                                                <li>• First-time gold IRA buyers</li>
                                                <li>• Those who want quick, easy setup</li>
                                                <li>• Preppers interested in survival packs</li>
                                                <li>• People who prefer Texas-based storage</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                                                <AlertTriangle className="w-5 h-5" />
                                                Not Ideal For
                                            </h4>
                                            <ul className="space-y-2 text-sm text-red-600">
                                                <li>• High-net-worth investors ($100k+)</li>
                                                <li>• Those who want extensive education</li>
                                                <li>• Investors seeking fee waivers</li>
                                                <li>• Those who prefer older, larger companies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Alternatives */}
                                <section id="alternatives" className="scroll-mt-32">
                                    <h2>Alternatives to Noble Gold</h2>

                                    <div className="overflow-x-auto not-prose my-8">
                                        <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="p-4 border-b font-bold text-primary">Company</th>
                                                    <th className="p-4 border-b font-bold text-primary">Minimum</th>
                                                    <th className="p-4 border-b font-bold text-primary">Best For</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-sm">
                                                <tr>
                                                    <td className="p-4 font-semibold">
                                                        <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link>
                                                    </td>
                                                    <td className="p-4">$50,000</td>
                                                    <td className="p-4">Premium education, fee waivers</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">
                                                        <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link>
                                                    </td>
                                                    <td className="p-4">$25,000</td>
                                                    <td className="p-4">Mid-range accounts, silver focus</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">
                                                        <Link href="/reviews/american-hartford-gold" className="text-secondary hover:underline">American Hartford Gold</Link>
                                                    </td>
                                                    <td className="p-4">$10,000</td>
                                                    <td className="p-4">Personalized service, buyback program</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                {/* Verdict */}
                                <section id="verdict" className="scroll-mt-32">
                                    <h2>Our Verdict: Is Noble Gold Worth It?</h2>
                                    <p>
                                        Noble Gold earns our <strong>top recommendation for investors with smaller accounts</strong>. Their $2,000 minimum makes gold IRA investing accessible to people who would be turned away by larger companies.
                                    </p>
                                    <p>
                                        While their fees are slightly higher and they lack the educational depth of Augusta, Noble Gold delivers where it counts: honest pricing, excellent customer service, and a hassle-free experience.
                                    </p>

                                    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                        <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                        <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.8/5</h3>
                                        <p className="mb-6 text-gray-600">Best for smaller accounts and first-time gold IRA investors.</p>
                                        <Button variant="gold" size="xl" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Get Your Free Gold IRA Kit
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </a>
                                        </Button>
                                        <p className="text-xs text-gray-400 mt-4">Free info kit. No obligation. $2,000 minimum.</p>
                                    </div>
                                </section>

                                {/* FAQ */}
                                <section id="faq" className="scroll-mt-32">
                                    <h2>Noble Gold FAQs</h2>

                                    <div className="space-y-4 not-prose">
                                        <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">Is Noble Gold legitimate?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Yes, Noble Gold is a legitimate and reputable precious metals company. They hold an A+ rating with the BBB, are registered with relevant regulatory bodies, and have thousands of positive customer reviews.
                                            </p>
                                        </details>

                                        <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">What is Noble Gold&apos;s minimum investment?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Noble Gold has one of the lowest minimums in the industry at just $2,000 for IRA accounts. This makes them ideal for investors who want to start small or test the waters before committing larger amounts.
                                            </p>
                                        </details>

                                        <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">How much does Noble Gold charge in fees?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Noble Gold charges approximately $225-$250 per year, which includes custodian fees ($80) and storage fees ($150). There&apos;s also a one-time $80 setup fee. They use flat-rate pricing, so fees are the same regardless of account size.
                                            </p>
                                        </details>

                                        <details className="group bg-white rounded-xl border border-gray-200 p-6">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">What are Royal Survival Packs?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Royal Survival Packs are Noble Gold&apos;s unique product—curated collections of smaller gold and silver coins designed for bartering or emergencies. Unlike IRA metals, these are delivered directly to your home for personal possession.
                                            </p>
                                        </details>
                                    </div>
                                </section>

                            </article>
                        </div>
                    </div>

                    {/* Desktop Sidebar */}
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
