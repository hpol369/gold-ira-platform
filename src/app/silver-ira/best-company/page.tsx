import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Award,
    Star,
    Shield,
    Phone,
    Users,
    Coins,
    TrendingUp,
    DollarSign,
    Clock,
    ThumbsUp,
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata = createPageMetadata({
    title: "Best Silver IRA Company 2026: Our #1 Pick Revealed",
    description:
        "After analyzing 20+ Silver IRA companies, we reveal our top choice for 2026. Compare pricing, service, silver selection and see why Augusta leads the pack.",
    url: "https://www.richdadretirement.com/silver-ira/best-company",
    imageAlt: "Best Silver IRA Company 2026 - Rich Dad Retirement",
});

const comparisonMetrics = [
    { metric: "BBB Complaints", augusta: "Zero", goldco: "Few", birch: "Few", noble: "Few" },
    { metric: "Minimum Investment", augusta: "$50,000", goldco: "$25,000", birch: "$10,000", noble: "$2,000" },
    { metric: "Annual Fee", augusta: "$180", goldco: "Varies", birch: "$200", noble: "$225" },
    { metric: "Customer Service", augusta: "Lifetime Agent", goldco: "Good", birch: "Good", noble: "Good" },
    { metric: "Pricing Transparency", augusta: "Excellent", goldco: "Good", birch: "Good", noble: "Good" },
    { metric: "Educational Resources", augusta: "Industry Best", goldco: "Good", birch: "Good", noble: "Basic" },
    { metric: "Silver Selection", augusta: "Excellent", goldco: "Very Good", birch: "Good", noble: "Good" },
    { metric: "Overall Rating", augusta: "4.9/5", goldco: "4.8/5", birch: "4.7/5", noble: "4.6/5" },
];

const augustaAdvantages = [
    {
        title: "Zero BBB Complaints",
        description: "In over a decade of business, Augusta has never received a single BBB complaint. This is virtually unheard of in the precious metals industry.",
        icon: Shield,
    },
    {
        title: "Education-First Approach",
        description: "Instead of high-pressure sales, Augusta educates you with a free one-on-one web conference before you invest. You understand exactly what you're buying.",
        icon: Users,
    },
    {
        title: "Lifetime Dedicated Agent",
        description: "You're assigned a personal account representative who stays with you for life. No more explaining your situation to new people every call.",
        icon: Phone,
    },
    {
        title: "Transparent Silver Pricing",
        description: "Augusta shows you exactly what you're paying over spot price. No hidden fees, no surprises. Their pricing is competitive with the best in the industry.",
        icon: DollarSign,
    },
    {
        title: "Premium Silver Selection",
        description: "Access to all major IRA-approved silver products: American Eagles, Canadian Maple Leafs, Britannias, and quality silver bars from top refiners.",
        icon: Coins,
    },
    {
        title: "7-Day Price Protection",
        description: "If silver prices drop within 7 days of your purchase, Augusta offers price protection. This unique benefit gives you confidence in your timing.",
        icon: Clock,
    },
];

const runnerUps = [
    {
        name: "Goldco",
        position: "#2 Best Silver IRA Company",
        rating: 4.8,
        minInvestment: "$25,000",
        bestFor: "Investors who want an established brand with celebrity endorsement",
        why: "Lower minimum than Augusta, strong buyback program, wide silver selection",
        link: AFFILIATE_LINKS.goldco,
    },
    {
        name: "Noble Gold",
        position: "#3 Best for Small Investors",
        rating: 4.6,
        minInvestment: "$2,000",
        bestFor: "Beginning investors or those with smaller amounts to invest",
        why: "Industry-low $2,000 minimum makes silver accessible, Texas storage option",
        link: AFFILIATE_LINKS.noble,
    },
    {
        name: "Birch Gold Group",
        position: "#4 Best Flat-Fee Option",
        rating: 4.7,
        minInvestment: "$10,000",
        bestFor: "Larger accounts that benefit from flat fee structure",
        why: "Flat $200 annual fee saves money on large accounts, 20+ years experience",
        link: AFFILIATE_LINKS.birch || "#",
    },
];

const faqs = [
    {
        question: "Why is Augusta Precious Metals your #1 pick for Silver IRAs?",
        answer: "Augusta earns our top spot based on multiple factors: zero BBB complaints in over a decade, transparent pricing, lifetime customer support, and their education-first approach. While their $50,000 minimum is higher, the quality of service and peace of mind makes it worthwhile for qualified investors."
    },
    {
        question: "What if I don't have $50,000 to invest?",
        answer: "If you have less than $50,000, consider Noble Gold (minimum $2,000) or Birch Gold ($10,000). These companies offer solid service at lower entry points. As your portfolio grows, you can always open an additional Silver IRA with Augusta later."
    },
    {
        question: "Is Augusta really that much better than competitors?",
        answer: "The main differentiator is Augusta's zero-complaint track record and their educational approach. They spend more time educating you upfront rather than pushing products. For investors who value transparency and long-term support, the difference is significant. However, all companies on our list are reputable choices."
    },
    {
        question: "How does Augusta's silver pricing compare?",
        answer: "Augusta's silver premiums are competitive with the best in the industry. What sets them apart is transparency - they show you exactly what you're paying over spot price. Many competitors bundle fees in ways that obscure true costs."
    },
    {
        question: "Can I hold only silver with Augusta, or do I need gold too?",
        answer: "Augusta offers both gold and silver IRAs, and you can allocate your funds however you prefer. Many investors choose a mix, but a 100% silver allocation is perfectly acceptable. Augusta's specialists can help you decide the right balance for your goals."
    },
    {
        question: "What's the catch with Augusta's 'free' consultation?",
        answer: "There's no catch. The consultation is genuinely educational, not a high-pressure sales pitch. You'll learn about precious metals IRAs, market dynamics, and your options. Many attendees appreciate that Augusta doesn't push them to buy immediately - they give you time to decide."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Silver IRA Company 2026: Our #1 Pick Revealed",
    "description": "After analyzing 20+ Silver IRA companies, we reveal our top choice for 2026.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-27"
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function BestSilverIraCompanyPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />

            {/* Hero Section */}
            <header className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#B22234]/5 rounded-full blur-[150px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/20 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
                            <Award className="h-4 w-4" />
                            2026 EDITOR'S CHOICE
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Best Silver IRA Company: Our #1 Pick for 2026
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            After analyzing 20+ Silver IRA companies on pricing, service, silver selection, and customer feedback, we've identified the clear winner for 2026.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Winner Announcement */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-[#B22234]/20 to-[#8b1c2a]/10 border-2 border-[#B22234]/50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="absolute top-4 right-4">
                                <Award className="h-16 w-16 text-amber-500/30" />
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234] text-slate-900 font-bold text-sm rounded-full mb-6">
                                <Star className="h-4 w-4 fill-current" />
                                #1 BEST SILVER IRA COMPANY 2026
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Augusta Precious Metals</h2>
                            <div className="flex justify-center items-center gap-4 mb-6">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-6 w-6 text-[#B22234] fill-[#B22234]" />
                                    ))}
                                </div>
                                <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                            </div>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                                Zero BBB complaints, transparent pricing, lifetime customer support, and the industry's best educational resources. Augusta sets the standard for Silver IRA service.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                    <a href={getTrackedLink(AFFILIATE_LINKS.augusta, "best-silver-company", "augusta-winner")} target="_blank" rel="noopener noreferrer">
                                        Get Free Silver IRA Kit <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" className="border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                    <Link href="/reviews/augusta-precious-metals">Read Full Review</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Augusta Wins */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Why Augusta Wins for Silver IRAs</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Six key advantages that set Augusta apart from every competitor.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {augustaAdvantages.map((advantage, index) => {
                                const Icon = advantage.icon;
                                return (
                                    <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#B22234]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-[#B22234]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-2">{advantage.title}</h3>
                                                <p className="text-sm text-slate-600">{advantage.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Head-to-Head Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Metric</th>
                                        <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">Augusta</th>
                                        <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Goldco</th>
                                        <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Birch Gold</th>
                                        <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Noble Gold</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 text-sm">
                                    {comparisonMetrics.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? '' : 'bg-slate-100'}>
                                            <td className="p-4 font-semibold text-slate-900">{row.metric}</td>
                                            <td className="p-4 text-[#B22234] font-medium">{row.augusta}</td>
                                            <td className="p-4 text-slate-600">{row.goldco}</td>
                                            <td className="p-4 text-slate-600">{row.birch}</td>
                                            <td className="p-4 text-slate-600">{row.noble}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Sure If Augusta Is Right for You?</h2>
                        <p className="text-slate-600 mb-6">
                            Take our quick quiz to get a personalized recommendation based on your investment amount, goals, and preferences.
                        </p>
                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                            <Link href="/quiz">
                                Take the 60-Second Quiz <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Runner Ups */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Honorable Mentions</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            If Augusta doesn't fit your situation, these companies are excellent alternatives.
                        </p>

                        <div className="space-y-6">
                            {runnerUps.map((company, index) => (
                                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-2 py-1 bg-slate-100 text-slate-900 text-xs font-bold rounded">
                                                    {company.position}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <Star className="h-4 w-4 text-[#B22234] fill-[#B22234]" />
                                                    <span className="text-slate-900 font-semibold">{company.rating}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">{company.name}</h3>
                                            <p className="text-sm text-slate-600 mb-2">
                                                <strong>Minimum:</strong> {company.minInvestment} | <strong>Best for:</strong> {company.bestFor}
                                            </p>
                                            <p className="text-sm text-slate-600">{company.why}</p>
                                        </div>
                                        <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-100 flex-shrink-0" asChild>
                                            <a href={getTrackedLink(company.link, "best-silver-company", company.name.toLowerCase().replace(/\s+/g, '-'))} target="_blank" rel="noopener noreferrer">
                                                Learn More
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Bottom Line */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <ThumbsUp className="h-6 w-6 text-green-700" />
                                The Bottom Line
                            </h2>
                            <div className="prose prose-lg max-w-none text-slate-600">
                                <p>
                                    <strong className="text-slate-900">Augusta Precious Metals is our clear #1 choice for Silver IRAs in 2026.</strong> Their combination of zero BBB complaints, transparent pricing, lifetime support, and educational approach makes them the gold standard (pun intended) for precious metals IRAs.
                                </p>
                                <p>
                                    The main consideration is their $50,000 minimum. If you have less to invest, <strong className="text-slate-900">Noble Gold's $2,000 minimum</strong> makes silver accessible, or <strong className="text-slate-900">Birch Gold's flat fee structure</strong> works well for mid-sized accounts.
                                </p>
                                <p>
                                    Regardless of which company you choose, adding silver to your retirement portfolio provides diversification from paper assets and exposure to a metal with both investment and industrial demand drivers.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Best Silver IRA Company FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl"
                                >
                                    <summary className="cursor-pointer p-6 font-semibold text-slate-900 flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-[#B22234] group-open:rotate-180 transition-transform">&#9660;</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Pages */}
            <section className="py-16 bg-white">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Continue Your Research</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-ira/companies" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">All Silver IRA Companies</h3>
                            <p className="text-sm text-slate-600">Compare more providers in detail.</p>
                        </Link>
                        <Link href="/silver-ira/reviews" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Reviews</h3>
                            <p className="text-sm text-slate-600">Honest ratings and customer feedback.</p>
                        </Link>
                        <Link href="/silver-ira/rollover" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Rollover</h3>
                            <p className="text-sm text-slate-600">How to transfer your retirement funds.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Get Started With Our #1 Pick"
                        subheadline="Augusta Precious Metals earned our top ranking for transparent pricing, zero BBB complaints, and lifetime customer support. Request your free Silver IRA kit today."
                        trackSource="best-silver-company"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
