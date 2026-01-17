import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { ProsCons } from "@/components/reviews/ProsCons";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, Users, Award, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Augusta Precious Metals Review 2026: Fees, Complaints & BBB Rating",
    description: "Complete Augusta Precious Metals review for 2026. We analyze fees, customer complaints, BBB rating, and why they're rated #1 for investors with $50k+.",
};

const companyData = {
    companyName: "Augusta Precious Metals",
    rating: 4.9,
    minInvestment: "$50,000",
    fees: "$180/year (often waived)",
    bbbRating: "A+",
    bestFor: "High Net Worth ($100k+)",
    visitUrl: AFFILIATE_LINKS.augusta,
    pros: [
        "Zero fees for up to 10 years for qualified accounts",
        "1-on-1 education with Harvard-trained economist Devlyn Steele",
        "No high-pressure sales tactics (guaranteed)",
        "Thousands of 5-star reviews & A+ BBB rating",
        "Money Magazine's #1 Gold IRA Company (2022-2024)",
        "Endorsed by Joe Montana and other notable figures"
    ],
    cons: [
        "High minimum investment ($50,000)",
        "Not suitable for small savers under $50k",
        "No online pricing transparency (must call for quotes)",
        "Limited product selection compared to some competitors"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Augusta Precious Metals Gold IRA",
    "image": "https://www.richdadretirement.com/images/augusta-logo.png",
    "description": "Premium Gold IRA provider specializing in education and high-net-worth retirement protection.",
    "brand": {
        "@type": "Brand",
        "name": "Augusta Precious Metals"
    },
    "review": {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.9",
            "bestRating": "5"
        },
        "author": {
            "@type": "Organization",
            "name": "Rich Dad Retirement"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250"
    }
};

const tocItems = [
    { id: "overview", label: "Company Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "services", label: "Services & Products" },
    { id: "fees", label: "Fees & Pricing" },
    { id: "customer-reviews", label: "Customer Reviews" },
    { id: "complaints", label: "Complaints & Issues" },
    { id: "who-should-use", label: "Who Should Use Augusta?" },
    { id: "alternatives", label: "Alternatives" },
    { id: "verdict", label: "Our Verdict" },
    { id: "faq", label: "FAQs" }
];

export default function AugustaReviewPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Review Header */}
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.9/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Augusta Precious Metals Review 2026
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Is Augusta the best gold IRA company for serious investors? We analyze their fees, customer complaints, BBB rating, and what makes them stand out from the competition.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">

                            {/* Mobile-only Quick Facts (shown above content on mobile) */}
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                                {/* Overview Section */}
                                <section id="overview" className="scroll-mt-32">
                                    <p className="lead">
                                        In this comprehensive <strong>Augusta Precious Metals review</strong>, we examine why this company has earned the reputation as the gold standard for high-net-worth investors looking to protect their retirement savings with physical precious metals.
                                    </p>
                                    <p>
                                        Founded in 2012 and headquartered in Los Angeles, California, Augusta Precious Metals has built a reputation for exceptional customer education and white-glove service. Unlike companies that push for quick sales, Augusta requires every client to attend a one-on-one educational web conference before making any purchase decisions.
                                    </p>
                                    <p>
                                        This education-first approach has earned them Money Magazine&apos;s designation as the <strong>#1 Gold IRA Company</strong> for three consecutive years (2022-2024) and an endorsement from NFL Hall of Famer Joe Montana, who chose Augusta for his personal gold investments.
                                    </p>

                                    <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10 not-prose my-8">
                                        <div className="flex items-start gap-4">
                                            <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-primary text-lg mb-2">Key Achievements</h4>
                                                <ul className="space-y-2 text-sm text-text-muted">
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        Money Magazine&apos;s #1 Gold IRA Company (2022, 2023, 2024)
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        A+ BBB Rating with zero complaints in last 3 years
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        4.9/5 average customer rating across 1,000+ reviews
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                        Featured in Forbes, CNBC, and MarketWatch
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Pros & Cons Section */}
                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Augusta Precious Metals: Pros & Cons</h2>
                                    <p>
                                        No company is perfect. Here&apos;s an honest assessment of Augusta&apos;s strengths and weaknesses:
                                    </p>
                                    <ProsCons pros={companyData.pros} cons={companyData.cons} />
                                </section>

                                {/* Services Section */}
                                <section id="services" className="scroll-mt-32">
                                    <h2>Services & Products</h2>
                                    <p>
                                        Augusta takes a focused approach, specializing exclusively in <strong>Gold and Silver IRAs</strong> and <strong>direct precious metals purchases</strong>. They don&apos;t dabble in cryptocurrencies, ETFs, or complex financial products—just pure, physical assets.
                                    </p>

                                    <h3>Gold IRA Services</h3>
                                    <ul>
                                        <li><strong>401(k) to Gold IRA Rollover:</strong> Full white-glove assistance moving existing retirement funds into physical gold, tax-free and penalty-free.</li>
                                        <li><strong>Traditional IRA to Gold Transfer:</strong> Seamless transfer from existing IRAs to a self-directed precious metals IRA.</li>
                                        <li><strong>Roth Gold IRA:</strong> Tax-free growth options for those who qualify.</li>
                                        <li><strong>SEP Gold IRA:</strong> Higher contribution limits for self-employed individuals.</li>
                                    </ul>

                                    <h3>Direct Purchase Options</h3>
                                    <p>
                                        Don&apos;t want an IRA? Augusta also sells gold and silver for direct delivery to your home. This is ideal for investors who want physical possession of their metals outside of retirement accounts.
                                    </p>

                                    <h3>Educational Resources</h3>
                                    <p>
                                        Augusta&apos;s crown jewel is their educational program. Every client gets a one-on-one session with their in-house economist, Devlyn Steele (Harvard-trained), who explains:
                                    </p>
                                    <ul>
                                        <li>How the Federal Reserve&apos;s policies affect your savings</li>
                                        <li>The historical performance of gold during economic crises</li>
                                        <li>How to properly allocate precious metals in your portfolio</li>
                                        <li>Common mistakes to avoid when investing in gold</li>
                                    </ul>

                                    <Callout type="tip" title="Rich Dad Insight">
                                        Augusta&apos;s education-first approach aligns perfectly with the &quot;Rich Dad&quot; philosophy: understand what you&apos;re investing in before you invest. Financial literacy is the foundation of wealth building.
                                    </Callout>
                                </section>

                                {/* Fees Section */}
                                <section id="fees" className="scroll-mt-32">
                                    <h2>Augusta Precious Metals Fees</h2>
                                    <p>
                                        One of the most common questions we get is about <strong>Augusta Precious Metals fees</strong>. Here&apos;s the complete breakdown:
                                    </p>

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
                                                    <td className="p-4 font-semibold">Account Setup Fee</td>
                                                    <td className="p-4">$50</td>
                                                    <td className="p-4">One-time fee paid to custodian</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">Annual Custodian Fee</td>
                                                    <td className="p-4">$80</td>
                                                    <td className="p-4">Administrative costs</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">Annual Storage Fee</td>
                                                    <td className="p-4">$100</td>
                                                    <td className="p-4">Segregated storage at Delaware Depository</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">Wire Transfer Fee</td>
                                                    <td className="p-4">$25</td>
                                                    <td className="p-4">Per transaction</td>
                                                </tr>
                                                <tr className="bg-secondary/5">
                                                    <td className="p-4 font-bold text-primary">Total Annual Cost</td>
                                                    <td className="p-4 font-bold text-primary">$180 - $230</td>
                                                    <td className="p-4 font-medium text-secondary">Often waived for 7-10 years!</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3>Fee Waiver Program</h3>
                                    <p>
                                        Here&apos;s where Augusta really shines. For accounts over $50,000, Augusta frequently offers to <strong>cover all custodian and storage fees for up to 10 years</strong>. This can save you $1,800-$2,300 over the decade—a significant advantage over competitors.
                                    </p>
                                    <p>
                                        The fee waiver terms depend on your investment amount and current promotions. Always ask about available fee waivers when you speak with their team.
                                    </p>

                                    <h3>Dealer Premiums</h3>
                                    <p>
                                        Like all precious metals dealers, Augusta charges a premium over the spot price of gold. Their premiums are competitive but not always the lowest. However, many clients consider the higher service quality and fee waivers worth the slightly higher metal prices.
                                    </p>
                                    <p>
                                        For a comparison of fees across all major companies, see our <Link href="/guide/gold-ira-fees">Gold IRA fees guide</Link>.
                                    </p>
                                </section>

                                {/* Customer Reviews Section */}
                                <section id="customer-reviews" className="scroll-mt-32">
                                    <h2>Customer Reviews & Ratings</h2>
                                    <p>
                                        Augusta Precious Metals has one of the strongest review profiles in the industry:
                                    </p>

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
                                            <div className="text-4xl font-bold text-primary mb-2">5/5</div>
                                            <div className="text-sm text-text-muted">TrustPilot</div>
                                        </div>
                                    </div>

                                    <h3>What Customers Say</h3>
                                    <p>
                                        Common themes in positive reviews include:
                                    </p>
                                    <ul>
                                        <li><strong>No pressure:</strong> Reviewers consistently praise Augusta for letting them take their time to make decisions</li>
                                        <li><strong>Educational approach:</strong> Many customers say they learned more from Augusta than from their financial advisors</li>
                                        <li><strong>Responsive support:</strong> Dedicated account representatives who answer questions quickly</li>
                                        <li><strong>Smooth process:</strong> The rollover process is described as seamless and stress-free</li>
                                    </ul>

                                    <div className="bg-background-subtle rounded-xl p-6 border border-gray-100 my-8 not-prose">
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                                            ))}
                                        </div>
                                        <blockquote className="italic text-text-muted mb-3">
                                            &quot;I was skeptical at first, but the educational webinar completely changed my perspective. No one tried to sell me anything—they just educated me and let me make my own decision. When I was ready, the process took less than two weeks.&quot;
                                        </blockquote>
                                        <cite className="text-sm font-medium text-primary">— Robert M., verified customer</cite>
                                    </div>
                                </section>

                                {/* Complaints Section */}
                                <section id="complaints" className="scroll-mt-32">
                                    <h2>Augusta Precious Metals Complaints</h2>
                                    <p>
                                        In researching <strong>Augusta Precious Metals complaints</strong>, we found remarkably few negative reviews. According to the BBB, Augusta has had zero complaints filed in the past three years.
                                    </p>
                                    <p>
                                        The few criticisms we found online typically fall into these categories:
                                    </p>

                                    <div className="not-prose my-8 space-y-4">
                                        <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-amber-700">High Minimum Investment</h4>
                                                <p className="text-sm text-amber-600 mt-1">The $50,000 minimum excludes many potential customers. If you have less to invest, Augusta will politely decline and may refer you to a partner company like Noble Gold.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-amber-700">No Online Pricing</h4>
                                                <p className="text-sm text-amber-600 mt-1">Some customers are frustrated that they can&apos;t see metal prices online and must call to get quotes. Augusta says this is intentional to ensure customers speak with an expert before purchasing.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-100">
                                            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-amber-700">Mandatory Education Session</h4>
                                                <p className="text-sm text-amber-600 mt-1">While most customers appreciate the education, some experienced investors feel the mandatory webinar wastes their time. Augusta does offer abbreviated sessions for knowledgeable investors.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h3>Augusta Precious Metals BBB Profile</h3>
                                    <p>
                                        The <strong>Augusta Precious Metals BBB</strong> profile shows an A+ rating with the Better Business Bureau, accredited since 2015. Key stats:
                                    </p>
                                    <ul>
                                        <li><strong>BBB Rating:</strong> A+</li>
                                        <li><strong>Complaints in last 3 years:</strong> 0</li>
                                        <li><strong>Customer reviews on BBB:</strong> 4.94/5 average</li>
                                        <li><strong>Years accredited:</strong> Since 2015</li>
                                    </ul>
                                </section>

                                {/* Who Should Use Section */}
                                <section id="who-should-use" className="scroll-mt-32">
                                    <h2>Who Should Use Augusta Precious Metals?</h2>
                                    <p>
                                        Augusta is the ideal choice for specific types of investors:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                        <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" />
                                                Perfect For
                                            </h4>
                                            <ul className="space-y-2 text-sm text-green-600">
                                                <li>• Investors with $50,000+ to invest</li>
                                                <li>• Those who value education and guidance</li>
                                                <li>• People who want white-glove service</li>
                                                <li>• First-time gold IRA investors</li>
                                                <li>• High-net-worth individuals ($100k+)</li>
                                                <li>• Anyone who dislikes high-pressure sales</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                                                <AlertTriangle className="w-5 h-5" />
                                                Not Ideal For
                                            </h4>
                                            <ul className="space-y-2 text-sm text-red-600">
                                                <li>• Investors with less than $50,000</li>
                                                <li>• Those who want lowest possible premiums</li>
                                                <li>• Experienced investors who skip education</li>
                                                <li>• People who prefer online-only transactions</li>
                                                <li>• Those seeking platinum/palladium options</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Alternatives Section */}
                                <section id="alternatives" className="scroll-mt-32">
                                    <h2>Alternatives to Augusta Precious Metals</h2>
                                    <p>
                                        If Augusta isn&apos;t the right fit for your situation, consider these alternatives:
                                    </p>

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
                                                        <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link>
                                                    </td>
                                                    <td className="p-4">$2,000</td>
                                                    <td className="p-4">Smaller accounts, budget-conscious investors</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">
                                                        <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link>
                                                    </td>
                                                    <td className="p-4">$25,000</td>
                                                    <td className="p-4">Mid-range investors, quick setup</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">
                                                        <Link href="/reviews/american-hartford-gold" className="text-secondary hover:underline">American Hartford Gold</Link>
                                                    </td>
                                                    <td className="p-4">$10,000</td>
                                                    <td className="p-4">First-time buyers, personalized service</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">
                                                        <Link href="/reviews/birch-gold" className="text-secondary hover:underline">Birch Gold</Link>
                                                    </td>
                                                    <td className="p-4">$10,000</td>
                                                    <td className="p-4">Diversified metal options, established track record</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p>
                                        Not sure which company is right for you? <Link href="/quiz">Take our 60-second quiz</Link> to get a personalized recommendation based on your investment amount and goals.
                                    </p>
                                </section>

                                {/* Verdict Section */}
                                <section id="verdict" className="scroll-mt-32">
                                    <h2>Our Verdict: Is Augusta Precious Metals Worth It?</h2>
                                    <p>
                                        After thorough analysis, Augusta Precious Metals earns our <strong>highest recommendation for investors with $50,000 or more</strong> to invest in precious metals.
                                    </p>
                                    <p>
                                        Their education-first approach, exceptional customer service, and fee waiver program make them the premium choice in the gold IRA industry. Yes, their minimums are high and you can&apos;t see prices online—but for serious investors, the white-glove experience and potential 10-year fee waiver more than compensate.
                                    </p>
                                    <p>
                                        If you&apos;re looking to protect a substantial retirement portfolio with physical gold, Augusta should be at the top of your list. If you have less than $50,000, consider <Link href="/reviews/noble-gold">Noble Gold</Link> or <Link href="/reviews/american-hartford-gold">American Hartford Gold</Link> instead.
                                    </p>

                                    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-8 not-prose text-center">
                                        <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                        <h3 className="text-2xl font-serif font-bold text-primary mb-2">Our Rating: 4.9/5</h3>
                                        <p className="mb-6 text-gray-600">Best for high-net-worth investors seeking premium service and education.</p>
                                        <Button variant="gold" size="xl" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Get Your Free Gold IRA Kit
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </a>
                                        </Button>
                                        <p className="text-xs text-gray-400 mt-4">Free consultation. No obligation. $50,000 minimum.</p>
                                    </div>
                                </section>

                                {/* FAQ Section */}
                                <section id="faq" className="scroll-mt-32">
                                    <h2>Augusta Precious Metals FAQs</h2>

                                    <div className="space-y-4 not-prose">
                                        <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">Is Augusta Precious Metals legitimate?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Yes, Augusta Precious Metals is a legitimate and highly-regarded gold IRA company. They hold an A+ rating with the BBB, have been in business since 2012, and have thousands of positive customer reviews. They are endorsed by Joe Montana and have been named Money Magazine&apos;s #1 Gold IRA Company for three consecutive years.
                                            </p>
                                        </details>

                                        <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">What is Augusta&apos;s minimum investment?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Augusta Precious Metals requires a minimum investment of $50,000 for IRA accounts. This higher minimum allows them to provide premium, personalized service. If you have less to invest, they may refer you to a partner company like <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link>, which accepts minimums as low as $2,000.
                                            </p>
                                        </details>

                                        <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">How much does Augusta Precious Metals charge in fees?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Augusta&apos;s annual fees total approximately $180-$230 (custodian fee + storage fee). However, Augusta frequently waives these fees for 7-10 years for qualifying accounts, potentially saving you $1,800+ over a decade. The one-time setup fee is $50. Contact Augusta directly to learn about current fee waiver promotions.
                                            </p>
                                        </details>

                                        <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">Does Augusta Precious Metals have any complaints?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Augusta has an exceptionally clean complaint record. According to the BBB, they have zero complaints filed in the last three years. The few criticisms you&apos;ll find online typically relate to their high minimum investment requirement or the mandatory educational webinar—neither of which are service quality issues.
                                            </p>
                                        </details>

                                        <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                                <h4 className="text-lg font-bold">How long does it take to set up an account with Augusta?</h4>
                                                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                The entire process typically takes 2-3 weeks from start to finish. This includes the educational webinar (1-2 hours), account paperwork (1-2 days), fund transfer from your existing retirement account (5-10 business days), and metal purchase and delivery to the depository (3-5 days). Augusta handles all the coordination—you just need to make decisions.
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
