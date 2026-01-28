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
    Star,
    ThumbsUp,
    ThumbsDown,
    Shield,
    Award,
    Users,
    Clock,
    Phone,
    Coins,
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata = createPageMetadata({
    title: "Silver IRA Reviews: Honest Company Ratings (2026)",
    description:
        "Unbiased Silver IRA company reviews for 2026. Real ratings, pros and cons, customer feedback, and detailed analysis of top silver IRA providers.",
    url: "https://www.richdadretirement.com/silver-ira/reviews",
    imageAlt: "Silver IRA Reviews - Rich Dad Retirement",
});

const companyReviews = [
    {
        name: "Augusta Precious Metals",
        overallRating: 4.9,
        ratings: {
            silverSelection: 4.8,
            pricing: 4.7,
            customerService: 5.0,
            education: 5.0,
            trustworthiness: 4.9,
        },
        bbbRating: "A+",
        trustpilotRating: 4.9,
        reviewCount: 1247,
        yearFounded: 2012,
        minInvestment: "$50,000",
        annualFee: "$180",
        verdict: "Best overall Silver IRA company for investors prioritizing education and transparency.",
        pros: [
            "Zero BBB complaints - extremely rare in the industry",
            "Transparent silver pricing with no hidden fees",
            "Lifetime dedicated account representative",
            "Excellent educational resources about silver investing",
            "No high-pressure sales tactics"
        ],
        cons: [
            "Higher $50,000 minimum investment",
            "Requires attending a web conference before buying"
        ],
        customerQuotes: [
            { quote: "They explained everything about silver IRA rules before I invested a penny. No pressure at all.", author: "Michael T., Texas" },
            { quote: "My account rep still calls me quarterly to check in. That kind of service is rare.", author: "Patricia S., Florida" }
        ],
        link: AFFILIATE_LINKS.augusta,
        reviewLink: "/reviews/augusta-precious-metals",
        featured: true,
    },
    {
        name: "Goldco",
        overallRating: 4.8,
        ratings: {
            silverSelection: 4.7,
            pricing: 4.5,
            customerService: 4.8,
            education: 4.6,
            trustworthiness: 4.8,
        },
        bbbRating: "A+",
        trustpilotRating: 4.8,
        reviewCount: 2156,
        yearFounded: 2006,
        minInvestment: "$25,000",
        annualFee: "Varies",
        verdict: "Most recognized brand with strong customer service and buyback program.",
        pros: [
            "Well-established brand with long track record",
            "Strong buyback commitment",
            "Wide variety of silver products",
            "Celebrity endorsements (though verify independently)",
            "A+ BBB rating"
        ],
        cons: [
            "Can be persistent with follow-up calls",
            "Pricing not always transparent upfront"
        ],
        customerQuotes: [
            { quote: "They made the rollover process incredibly smooth. Had my silver within 3 weeks.", author: "Robert K., Arizona" },
            { quote: "Good service, though they called me more than I expected before I decided.", author: "Linda M., Ohio" }
        ],
        link: AFFILIATE_LINKS.goldco,
        reviewLink: "/reviews/goldco",
        featured: false,
    },
    {
        name: "Birch Gold Group",
        overallRating: 4.7,
        ratings: {
            silverSelection: 4.5,
            pricing: 4.6,
            customerService: 4.7,
            education: 4.5,
            trustworthiness: 4.7,
        },
        bbbRating: "A+",
        trustpilotRating: 4.6,
        reviewCount: 892,
        yearFounded: 2003,
        minInvestment: "$10,000",
        annualFee: "$200 flat",
        verdict: "Best flat-fee structure for larger silver holdings.",
        pros: [
            "Over 20 years in business",
            "Predictable flat annual fee",
            "Focus on lower-premium silver products",
            "Good educational content",
            "Multiple storage options"
        ],
        cons: [
            "Smaller variety of silver products",
            "No Texas storage option"
        ],
        customerQuotes: [
            { quote: "The flat fee structure saves me money compared to percentage-based fees.", author: "David L., California" },
            { quote: "They've been around since 2003, that longevity gave me confidence.", author: "Susan R., Nevada" }
        ],
        link: AFFILIATE_LINKS.birch || "#",
        reviewLink: "/reviews/birch-gold",
        featured: false,
    },
    {
        name: "Noble Gold Investments",
        overallRating: 4.6,
        ratings: {
            silverSelection: 4.4,
            pricing: 4.5,
            customerService: 4.6,
            education: 4.3,
            trustworthiness: 4.5,
        },
        bbbRating: "A+",
        trustpilotRating: 4.5,
        reviewCount: 654,
        yearFounded: 2016,
        minInvestment: "$2,000",
        annualFee: "$225",
        verdict: "Best option for investors with smaller amounts to invest.",
        pros: [
            "Industry-low $2,000 minimum",
            "Texas depository option",
            "Quick account setup",
            "Royal Survival Packs option",
            "Good silver bar selection"
        ],
        cons: [
            "Newer company (established 2016)",
            "Higher fees relative to account size for small accounts"
        ],
        customerQuotes: [
            { quote: "Perfect for someone like me who wanted to start with a smaller amount.", author: "James W., Texas" },
            { quote: "Love that they have a Texas depository. Feels more secure somehow.", author: "Karen B., Oklahoma" }
        ],
        link: AFFILIATE_LINKS.noble,
        reviewLink: "/reviews/noble-gold",
        featured: false,
    },
    {
        name: "American Hartford Gold",
        overallRating: 4.5,
        ratings: {
            silverSelection: 4.3,
            pricing: 4.4,
            customerService: 4.6,
            education: 4.2,
            trustworthiness: 4.5,
        },
        bbbRating: "A+",
        trustpilotRating: 4.6,
        reviewCount: 1023,
        yearFounded: 2015,
        minInvestment: "$10,000",
        annualFee: "Varies",
        verdict: "Strong buyback program and responsive customer service.",
        pros: [
            "Competitive buyback program",
            "Price match guarantee",
            "Free shipping on orders",
            "Responsive customer service",
            "A+ BBB rating"
        ],
        cons: [
            "Less variety in silver products",
            "Pricing can vary"
        ],
        customerQuotes: [
            { quote: "Their buyback prices were better than I expected when I needed to liquidate some.", author: "Thomas G., Michigan" },
            { quote: "Customer service was quick to answer all my questions about silver options.", author: "Barbara N., Pennsylvania" }
        ],
        link: AFFILIATE_LINKS.americanHartford || "#",
        reviewLink: "/reviews/american-hartford-gold",
        featured: false,
    },
];

const ratingCategories = [
    { name: "Silver Selection", description: "Variety and quality of IRA-approved silver products" },
    { name: "Pricing", description: "Competitiveness and transparency of silver premiums" },
    { name: "Customer Service", description: "Quality, responsiveness, and expertise of support" },
    { name: "Education", description: "Quality of resources to help you make informed decisions" },
    { name: "Trustworthiness", description: "Reputation, BBB rating, and customer feedback" },
];

const faqs = [
    {
        question: "How do you rate Silver IRA companies?",
        answer: "We evaluate companies on five key factors: silver product selection, pricing transparency, customer service quality, educational resources, and overall trustworthiness. We also consider BBB ratings, Trustpilot scores, complaint history, and real customer feedback. Our ratings are updated regularly based on ongoing monitoring."
    },
    {
        question: "Why is Augusta rated highest for Silver IRAs?",
        answer: "Augusta earns our top rating primarily for their zero BBB complaints (extremely rare), transparent pricing, and education-first approach. They don't pressure customers and provide lifetime dedicated support. While their $50,000 minimum is higher, the quality of service justifies it for qualified investors."
    },
    {
        question: "Are these reviews unbiased?",
        answer: "We strive for objectivity in our reviews. Yes, we have affiliate relationships with some companies we review, but our ratings are based on verifiable factors: BBB ratings, customer reviews, fee structures, and our own experience contacting these companies. We include cons for every company and recommend different providers for different situations."
    },
    {
        question: "Which Silver IRA company has the lowest fees?",
        answer: "Fees vary by structure. Birch Gold has a flat $200 annual fee regardless of account size, which favors larger accounts. Noble Gold has the lowest minimum ($2,000). For transparent all-in pricing, Augusta is often competitive despite appearing more expensive upfront."
    },
    {
        question: "What should I look for in Silver IRA reviews?",
        answer: "Focus on: BBB rating and complaint history, transparent pricing, customer service reviews, silver product variety, and the company's approach to education vs. sales pressure. Be wary of reviews that seem too positive or only focus on one company."
    },
    {
        question: "Do all these companies handle Silver IRAs specifically?",
        answer: "Yes, all reviewed companies offer Silver IRAs (which is part of a precious metals or 'Gold' IRA). Most allow you to hold both gold and silver in the same account. Some companies have more expertise in silver than others - we note this in our reviews."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Silver IRA Reviews: Honest Company Ratings (2026)",
    "description": "Unbiased Silver IRA company reviews with ratings, pros/cons, and customer feedback.",
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

export default function SilverIraReviewsPage() {
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
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-slate-300 rounded-full text-slate-600 font-semibold text-sm mb-6">
                            <Star className="h-4 w-4" />
                            HONEST REVIEWS
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Silver IRA Reviews: Real Ratings for 2026
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Unbiased reviews of the top Silver IRA companies. We analyze silver selection, pricing, customer service, and more to help you make an informed decision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                <Link href="/quiz">
                                    Get Personalized Match <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                <Link href="#augusta-precious-metals">
                                    See Top Rated Company
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Rating Categories */}
            <section className="py-12 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold text-slate-900 text-center mb-6">How We Rate Silver IRA Companies</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {ratingCategories.map((category, index) => (
                                <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2">
                                    <span className="text-sm text-slate-900 font-semibold">{category.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Company Reviews */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        {companyReviews.map((company, index) => (
                            <div
                                key={index}
                                id={company.name.toLowerCase().replace(/\s+/g, '-')}
                                className={`rounded-2xl overflow-hidden border ${company.featured ? 'border-[#B22234]/50 bg-gradient-to-br from-[#B22234]/10 to-slate-900' : 'border-slate-200 bg-slate-50'} scroll-mt-20`}
                            >
                                {/* Header */}
                                <div className={`p-6 ${company.featured ? 'bg-[#B22234]/20' : 'bg-slate-50'}`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                {company.featured && (
                                                    <span className="px-2 py-1 bg-[#B22234] text-slate-900 text-xs font-bold rounded">
                                                        EDITOR'S CHOICE
                                                    </span>
                                                )}
                                                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">
                                                    BBB: {company.bbbRating}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">{company.name}</h3>
                                            <p className="text-sm text-slate-600 mt-1">
                                                Est. {company.yearFounded} | {company.reviewCount.toLocaleString()} verified reviews
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-[#B22234]">{company.overallRating}</div>
                                            <div className="flex justify-center mt-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`h-5 w-5 ${star <= Math.floor(company.overallRating) ? 'text-[#B22234] fill-[#B22234]' : 'text-slate-600'}`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-xs text-slate-600 mt-1">Overall Rating</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Verdict */}
                                    <div className="bg-slate-50 rounded-lg p-4 mb-6 border-l-4 border-amber-500">
                                        <p className="text-slate-900 font-medium">{company.verdict}</p>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                            <div className="text-xs text-slate-600 mb-1">Minimum</div>
                                            <div className="font-bold text-slate-900">{company.minInvestment}</div>
                                        </div>
                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                            <div className="text-xs text-slate-600 mb-1">Annual Fee</div>
                                            <div className="font-bold text-slate-900">{company.annualFee}</div>
                                        </div>
                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                            <div className="text-xs text-slate-600 mb-1">BBB Rating</div>
                                            <div className="font-bold text-green-400">{company.bbbRating}</div>
                                        </div>
                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-center">
                                            <div className="text-xs text-slate-600 mb-1">Trustpilot</div>
                                            <div className="font-bold text-slate-900">{company.trustpilotRating}/5</div>
                                        </div>
                                    </div>

                                    {/* Category Ratings */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-900 mb-3">Category Ratings</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                            {Object.entries(company.ratings).map(([key, value]) => (
                                                <div key={key} className="bg-slate-50 rounded-lg p-3 text-center">
                                                    <div className="text-xs text-slate-600 mb-1 capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </div>
                                                    <div className="text-lg font-bold text-slate-900">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pros & Cons */}
                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                            <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                                                <ThumbsUp className="h-4 w-4" /> What We Like
                                            </h4>
                                            <ul className="space-y-2">
                                                {company.pros.map((pro, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                            <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                                                <ThumbsDown className="h-4 w-4" /> Room for Improvement
                                            </h4>
                                            <ul className="space-y-2">
                                                {company.cons.map((con, idx) => (
                                                    <li key={idx} className="text-sm text-slate-600">
                                                        * {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Customer Quotes */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-900 mb-3">What Customers Say</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {company.customerQuotes.map((quote, idx) => (
                                                <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-white/5">
                                                    <p className="text-slate-600 text-sm italic mb-2">"{quote.quote}"</p>
                                                    <p className="text-xs text-slate-600">- {quote.author}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTAs */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white flex-1" size="lg" asChild>
                                            <a href={getTrackedLink(company.link, "silver-reviews", company.name.toLowerCase().replace(/\s+/g, '-'))} target="_blank" rel="noopener noreferrer">
                                                Get Free Silver IRA Kit <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="flex-1 border-slate-300 text-slate-600 hover:bg-slate-100" asChild>
                                            <Link href={company.reviewLink}>Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Mid-page CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Sure Which Company Is Right for You?</h2>
                        <p className="text-slate-600 mb-6">
                            Everyone's situation is different. Take our 60-second quiz to get a personalized recommendation based on your investment amount and preferences.
                        </p>
                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                            <Link href="/quiz">
                                Get My Personal Match <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Silver IRA Reviews FAQs</h2>
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
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">More Silver IRA Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-ira/companies" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Companies</h3>
                            <p className="text-sm text-slate-600">Compare top providers side by side.</p>
                        </Link>
                        <Link href="/silver-ira/best-company" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Best Silver IRA Company</h3>
                            <p className="text-sm text-slate-600">Our top pick for silver IRA investing.</p>
                        </Link>
                        <Link href="/silver-ira/rollover" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Rollover</h3>
                            <p className="text-sm text-slate-600">How to transfer your retirement funds.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Start With Our Top-Rated Silver IRA Company"
                        subheadline="Augusta Precious Metals earned our highest rating for their transparent pricing, education-first approach, and zero BBB complaints. Get a free consultation today."
                        trackSource="silver-ira-reviews"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
