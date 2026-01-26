import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import {
    ArrowRight,
    CheckCircle2,
    XCircle,
    Star,
    Shield,
    Phone,
    Award,
    BadgeCheck,
    Coins,
    RefreshCw
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Goldco vs Augusta Precious Metals: In-Depth 2026 Comparison",
    description: "Goldco vs Augusta Precious Metals: We compare minimum investments, fees, BBB ratings, customer reviews, buyback programs, and customer service to find the best Gold IRA company.",
    keywords: "goldco vs augusta, goldco vs augusta precious metals, goldco or augusta, best gold ira company, gold ira comparison",
    openGraph: {
        title: "Goldco vs Augusta Precious Metals: In-Depth 2026 Comparison",
        description: "Complete side-by-side comparison of Goldco and Augusta Precious Metals. Find out which Gold IRA company is right for your retirement.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Minimum Investment", optionA: "$25,000", optionB: "$50,000", winner: "A" },
    { feature: "BBB Rating", optionA: "A+", optionB: "A+", winner: "Tie" },
    { feature: "BBB Complaints", optionA: "Some complaints", optionB: "Zero complaints", winner: "B" },
    { feature: "TrustPilot Score", optionA: "4.8/5", optionB: "4.9/5", winner: "B" },
    { feature: "Setup Fee", optionA: "$50 (often waived)", optionB: "$50 (usually waived)", winner: "Tie" },
    { feature: "Annual Storage Fee", optionA: "Scaled by account size", optionB: "$100-$150 flat", winner: "B" },
    { feature: "Free Silver/Gold Offer", optionA: "Up to 10% in free silver", optionB: "No promotional giveaways", winner: "A" },
    { feature: "Buyback Program", optionA: "Yes - Highest Price Guarantee", optionB: "Yes - Competitive rates", winner: "A" },
    { feature: "Educational Resources", optionA: "Standard materials", optionB: "1-on-1 webinar with economist", winner: "B" },
    { feature: "Customer Service Quality", optionA: "Good (sales-focused)", optionB: "Excellent (education-first)", winner: "B" },
    { feature: "Transparency", optionA: "Good", optionB: "Industry-leading", winner: "B" },
    { feature: "Lifetime Support", optionA: "Yes", optionB: "Yes - Dedicated agent", winner: "B" },
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison-table", label: "Head-to-Head Comparison" },
    { id: "goldco-overview", label: "Goldco Overview" },
    { id: "augusta-overview", label: "Augusta Overview" },
    { id: "fees-breakdown", label: "Fees & Minimums" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "customer-service", label: "Customer Service" },
    { id: "who-should-choose", label: "Who Should Choose Which" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Goldco vs Augusta Precious Metals: In-Depth 2026 Comparison",
            "description": "Goldco vs Augusta Precious Metals: We compare minimum investments, fees, BBB ratings, customer reviews, buyback programs, and customer service to find the best Gold IRA company.",
            "image": "https://richdadretirement.com/images/goldco-vs-augusta.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is Goldco or Augusta Precious Metals better?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For investors with $50,000 or more, Augusta Precious Metals is generally the better choice due to their superior educational resources, zero BBB complaints, and transparent fee structure. Goldco is better for investors with $25,000-$50,000 who want promotional silver offers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the minimum investment for Goldco vs Augusta?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Goldco requires a minimum investment of $25,000, while Augusta Precious Metals requires $50,000. If you have between $25k-$50k to invest, Goldco is your only option between these two companies."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which company has better customer service - Goldco or Augusta?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Augusta Precious Metals is widely regarded as having superior customer service. They assign a dedicated lifetime agent to each client and focus on education rather than sales pressure. Augusta has zero BBB complaints, which is exceptional in this industry."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Goldco or Augusta have lower fees?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Augusta typically has lower total fees for larger accounts ($100k+) due to their flat-fee structure. Goldco's fees scale with account size, which can add up for larger balances. However, both companies often waive first-year fees."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which company offers free silver - Goldco or Augusta?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Goldco offers promotional free silver (up to 10% of your investment) on qualifying purchases. Augusta does not offer promotional giveaways, instead focusing on transparent pricing and education. Some investors prefer Goldco's offer, while others are skeptical of 'free' promotions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Goldco and Augusta Precious Metals legitimate companies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, both Goldco and Augusta Precious Metals are legitimate, reputable Gold IRA companies with A+ BBB ratings. Augusta has zero complaints on file with the BBB, while Goldco has had some complaints (all resolved). Both have thousands of positive customer reviews."
                    }
                }
            ]
        }
    ]
};

export default function GoldcoVsAugustaPage() {
    const augustaCTA = getTrackedLink(AFFILIATE_LINKS.augusta, "goldco-vs-augusta", "augusta");

    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />

            {/* Header */}
            <header className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-sm font-semibold text-amber-400 mb-6">
                        Gold IRA Company Showdown
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Goldco vs. Augusta Precious Metals
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Two of the most popular Gold IRA companies, head-to-head. We analyze fees, minimums, customer service, and reputation to help you make the right choice for your retirement.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <p className="lead text-xl">
                            Choosing between <strong>Goldco</strong> and <strong>Augusta Precious Metals</strong>? You&apos;re comparing two of the most respected names in the Gold IRA industry. Both have A+ BBB ratings and thousands of satisfied customers.
                        </p>

                        <p>
                            But after extensive research and customer interviews, we&apos;ve found that these companies serve different types of investors. Here&apos;s our honest breakdown to help you decide which is right for your situation.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Augusta Precious Metals"
                                summary="For investors with $50,000+, Augusta wins on transparency, education, and customer service. Their zero-complaint BBB record is unmatched in the industry. However, if you have less than $50k, Goldco is a solid alternative with a lower minimum."
                                bestFor="High-net-worth investors prioritizing transparency & education"
                                ctaText="Get Augusta's Free Guide"
                                ctaLink={augustaCTA}
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison-table" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3">
                                <Award className="w-8 h-8 text-amber-400" />
                                Head-to-Head Comparison
                            </h2>
                            <p>
                                Here&apos;s how Goldco and Augusta stack up across the metrics that matter most:
                            </p>
                            <ComparisonTable
                                optionAName="Goldco"
                                optionBName="Augusta Precious Metals"
                                rows={comparisonRows}
                            />
                            <p className="text-sm text-slate-400 italic">
                                * Augusta wins in 7 categories, Goldco wins in 3 categories, with 2 ties.
                            </p>
                        </section>

                        {/* Goldco Overview */}
                        <section id="goldco-overview" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3">
                                <Coins className="w-8 h-8 text-blue-400" />
                                Goldco Overview
                            </h2>
                            <p>
                                <strong>Goldco</strong> is one of the largest Gold IRA companies in America, having facilitated billions of dollars in precious metals transactions. They&apos;re known for aggressive marketing, celebrity endorsements (including Sean Hannity), and promotional offers.
                            </p>

                            <div className="not-prose my-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-400" /> Goldco Key Facts
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>A+ BBB Rating with some resolved complaints</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Lower minimum investment ($25,000)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Promotional offers up to 10% in free silver</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>&quot;Highest Price Buyback Guarantee&quot;</span>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Goldco&apos;s approach is more sales-driven than educational. You&apos;ll receive follow-up calls and promotional materials. Some investors appreciate the attention, while others find it too aggressive.
                            </p>
                        </section>

                        {/* Augusta Overview */}
                        <section id="augusta-overview" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3">
                                <Shield className="w-8 h-8 text-amber-400" />
                                Augusta Precious Metals Overview
                            </h2>
                            <p>
                                <strong>Augusta Precious Metals</strong> takes a fundamentally different approach. They prioritize education over sales, requiring every new client to complete a one-on-one webinar with their Director of Education (a Harvard-trained economist) before investing.
                            </p>

                            <div className="not-prose my-8 bg-amber-500/10 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
                                <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-400" /> Augusta Key Facts
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span><strong className="text-white">Zero BBB complaints</strong> - Unheard of in this industry</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>4.9/5 TrustPilot rating from thousands of reviews</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Dedicated lifetime customer success agent</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Transparent, flat-fee pricing structure</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Free 1-on-1 web conference with economist</span>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                The &quot;zero complaints&quot; record at the BBB is what sets Augusta apart. In an industry notorious for high-pressure tactics and hidden fees, Augusta has maintained a spotless reputation. This doesn&apos;t happen by accident.
                            </p>
                        </section>

                        {/* Fees Breakdown */}
                        <section id="fees-breakdown" className="scroll-mt-32">
                            <h2>Fees & Minimums Breakdown</h2>
                            <p>
                                Understanding the full cost structure is critical when comparing Gold IRA companies:
                            </p>

                            <div className="not-prose my-8 overflow-x-auto">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Fee Type</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-blue-400">Goldco</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Augusta</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-medium">Minimum Investment</td>
                                            <td className="p-4">$25,000</td>
                                            <td className="p-4 text-green-400 font-semibold">$50,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Setup Fee</td>
                                            <td className="p-4">$50 (often waived)</td>
                                            <td className="p-4">$50 (usually waived)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Annual Admin Fee</td>
                                            <td className="p-4">$80-$100</td>
                                            <td className="p-4">Included in storage</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Annual Storage Fee</td>
                                            <td className="p-4">Scales with balance</td>
                                            <td className="p-4 text-green-400 font-semibold">$100-$150 flat</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">First Year Fees</td>
                                            <td className="p-4">Often waived</td>
                                            <td className="p-4">Usually waived</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Wire Transfer Fee</td>
                                            <td className="p-4">$25-$30</td>
                                            <td className="p-4">$25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Key Insight:</strong> Augusta&apos;s flat-fee structure becomes increasingly advantageous as your account grows. For accounts over $100,000, you could save hundreds of dollars annually compared to Goldco&apos;s scaled fees.
                            </p>
                        </section>

                        {/* Pros & Cons */}
                        <section id="pros-cons" className="scroll-mt-32">
                            <h2>Pros & Cons Comparison</h2>

                            <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
                                {/* Goldco Pros/Cons */}
                                <div className="space-y-6">
                                    <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/30">
                                        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" /> Goldco Pros
                                        </h3>
                                        <ul className="space-y-2 text-slate-300">
                                            <li>+ Lower minimum ($25k vs $50k)</li>
                                            <li>+ Free silver promotions (up to 10%)</li>
                                            <li>+ Strong buyback guarantee</li>
                                            <li>+ Faster account setup process</li>
                                            <li>+ More aggressive marketing support</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/30">
                                        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                            <XCircle className="w-5 h-5" /> Goldco Cons
                                        </h3>
                                        <ul className="space-y-2 text-slate-300">
                                            <li>- More sales-focused approach</li>
                                            <li>- Scaled fees cost more at higher balances</li>
                                            <li>- Has some BBB complaints (resolved)</li>
                                            <li>- Less comprehensive education</li>
                                            <li>- Frequent follow-up calls</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Augusta Pros/Cons */}
                                <div className="space-y-6">
                                    <div className="bg-amber-500/10 p-6 rounded-xl border border-amber-500/30">
                                        <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" /> Augusta Pros
                                        </h3>
                                        <ul className="space-y-2 text-slate-300">
                                            <li>+ <strong className="text-white">Zero BBB complaints ever</strong></li>
                                            <li>+ Superior educational resources</li>
                                            <li>+ Dedicated lifetime agent</li>
                                            <li>+ Flat fees save money long-term</li>
                                            <li>+ No high-pressure sales tactics</li>
                                            <li>+ Harvard economist webinars</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/30">
                                        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                            <XCircle className="w-5 h-5" /> Augusta Cons
                                        </h3>
                                        <ul className="space-y-2 text-slate-300">
                                            <li>- Higher minimum ($50,000)</li>
                                            <li>- No promotional giveaways</li>
                                            <li>- Mandatory education webinar</li>
                                            <li>- Longer onboarding process</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Customer Service */}
                        <section id="customer-service" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3">
                                <Phone className="w-8 h-8 text-amber-400" />
                                Customer Service Comparison
                            </h2>
                            <p>
                                This is where Augusta truly shines. Their &quot;education-first&quot; approach extends to ongoing customer support:
                            </p>

                            <div className="not-prose my-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Augusta&apos;s Customer Service Model</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Dedicated agent assigned for life of your account</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>No pressure to make additional purchases</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Ongoing market updates and education</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <span>Transparent communication at every step</span>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Goldco&apos;s customer service is good but more transactional. You&apos;ll likely speak with different representatives over time, and there&apos;s more focus on upselling additional products.
                            </p>
                        </section>

                        {/* Who Should Choose Which */}
                        <section id="who-should-choose" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3">
                                <RefreshCw className="w-8 h-8 text-amber-400" />
                                Who Should Choose Which?
                            </h2>

                            <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                    <h3 className="text-xl font-bold text-blue-400 mb-4">Choose Goldco If:</h3>
                                    <ul className="space-y-3 text-slate-300">
                                        <li>+ You have $25,000-$50,000 to invest</li>
                                        <li>+ You want promotional silver offers</li>
                                        <li>+ You prefer a faster setup process</li>
                                        <li>+ You don&apos;t mind sales-oriented service</li>
                                    </ul>
                                </div>

                                <div className="bg-amber-500/10 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
                                    <h3 className="text-xl font-bold text-amber-400 mb-4">Choose Augusta If:</h3>
                                    <ul className="space-y-3 text-slate-300">
                                        <li>+ You have $50,000+ to invest</li>
                                        <li>+ You value education and transparency</li>
                                        <li>+ You want zero-pressure service</li>
                                        <li>+ You plan to hold long-term (flat fees)</li>
                                        <li>+ You want a dedicated lifetime agent</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Main CTA */}
                        <div className="not-prose my-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-8 border border-amber-500/30 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-sm font-semibold text-green-400 mb-4">
                                    Our Recommendation
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-white">
                                    Ready to Get Started with Augusta?
                                </h3>
                                <p className="mb-6 text-slate-300 max-w-2xl mx-auto">
                                    Request your free Gold IRA guide and learn how Augusta&apos;s education-first approach can help protect your retirement savings.
                                </p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href={augustaCTA}>
                                        Get Your Free Augusta Guide <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                                <p className="mt-4 text-xs text-slate-500">
                                    No obligation. Free educational materials.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="not-prose space-y-4 my-8">
                                <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group">
                                    <summary className="p-6 cursor-pointer font-semibold text-white hover:text-amber-400 transition-colors">
                                        Is Goldco or Augusta Precious Metals better?
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-300">
                                        <p>For investors with $50,000 or more, Augusta Precious Metals is generally the better choice due to their superior educational resources, zero BBB complaints, and transparent fee structure. Goldco is better for investors with $25,000-$50,000 who want promotional silver offers.</p>
                                    </div>
                                </details>

                                <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group">
                                    <summary className="p-6 cursor-pointer font-semibold text-white hover:text-amber-400 transition-colors">
                                        What is the minimum investment for Goldco vs Augusta?
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-300">
                                        <p>Goldco requires a minimum investment of $25,000, while Augusta Precious Metals requires $50,000. If you have between $25k-$50k to invest, Goldco is your only option between these two companies.</p>
                                    </div>
                                </details>

                                <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group">
                                    <summary className="p-6 cursor-pointer font-semibold text-white hover:text-amber-400 transition-colors">
                                        Which company has better customer service?
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-300">
                                        <p>Augusta Precious Metals is widely regarded as having superior customer service. They assign a dedicated lifetime agent to each client and focus on education rather than sales pressure. Augusta has zero BBB complaints, which is exceptional in this industry.</p>
                                    </div>
                                </details>

                                <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group">
                                    <summary className="p-6 cursor-pointer font-semibold text-white hover:text-amber-400 transition-colors">
                                        Does Goldco or Augusta have lower fees?
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-300">
                                        <p>Augusta typically has lower total fees for larger accounts ($100k+) due to their flat-fee structure. Goldco&apos;s fees scale with account size, which can add up for larger balances. However, both companies often waive first-year fees.</p>
                                    </div>
                                </details>

                                <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group">
                                    <summary className="p-6 cursor-pointer font-semibold text-white hover:text-amber-400 transition-colors">
                                        Which company offers free silver?
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-300">
                                        <p>Goldco offers promotional free silver (up to 10% of your investment) on qualifying purchases. Augusta does not offer promotional giveaways, instead focusing on transparent pricing and education. Some investors prefer Goldco&apos;s offer, while others are skeptical of &quot;free&quot; promotions.</p>
                                    </div>
                                </details>

                                <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group">
                                    <summary className="p-6 cursor-pointer font-semibold text-white hover:text-amber-400 transition-colors">
                                        Are Goldco and Augusta Precious Metals legitimate?
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-300">
                                        <p>Yes, both Goldco and Augusta Precious Metals are legitimate, reputable Gold IRA companies with A+ BBB ratings. Augusta has zero complaints on file with the BBB, while Goldco has had some complaints (all resolved). Both have thousands of positive customer reviews.</p>
                                    </div>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="not-prose my-12 bg-slate-800 rounded-2xl p-8 text-center border border-white/10">
                            <h3 className="text-2xl font-serif font-bold mb-4 text-white">Still Have Questions?</h3>
                            <p className="mb-6 text-slate-300">Take our free quiz to see which Gold IRA company best matches your investment goals.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="gold" size="lg" asChild>
                                    <Link href={augustaCTA}>
                                        Get Augusta&apos;s Free Guide <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/quiz">Take the Quiz</Link>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
