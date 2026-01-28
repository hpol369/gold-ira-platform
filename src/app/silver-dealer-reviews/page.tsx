import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ArrowRight, Star, Shield, Truck, DollarSign, Award, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Silver Dealers Online 2026: Complete Reviews & Comparison",
    description: "Compare the top silver dealers: APMEX, JM Bullion, SD Bullion, Money Metals Exchange, Hero Bullion, and Bold Precious Metals. Expert reviews, pricing analysis, and our top picks.",
    keywords: ["silver dealers", "buy silver online", "best place to buy silver", "apmex", "jm bullion", "sd bullion", "money metals exchange", "hero bullion", "bold precious metals"],
    openGraph: {
        title: "Best Silver Dealers Online 2026: Complete Reviews & Comparison",
        description: "Compare the top online silver dealers. Expert reviews, pricing analysis, and recommendations.",
        type: "website",
    },
};

const dealers = [
    {
        name: "APMEX",
        slug: "apmex",
        rating: 4.7,
        established: 2000,
        minOrder: "$99",
        shipping: "Free over $199",
        specialty: "Largest Selection",
        description: "The largest online precious metals dealer with over 20,000 products. Great for variety seekers but premiums can be higher.",
        pros: ["Massive selection", "Established reputation", "IRA eligible products"],
        searchVolume: "8,800",
    },
    {
        name: "JM Bullion",
        slug: "jm-bullion",
        rating: 4.8,
        established: 2011,
        minOrder: "$99",
        shipping: "Free over $199",
        specialty: "Best Overall Experience",
        description: "Excellent balance of selection, pricing, and customer service. One of the most trusted names in online bullion.",
        pros: ["Competitive pricing", "Fast shipping", "Strong buyback program"],
        searchVolume: "1,500",
    },
    {
        name: "SD Bullion",
        slug: "sd-bullion",
        rating: 4.6,
        established: 2012,
        minOrder: "$99",
        shipping: "Free over $199",
        specialty: "Lowest Premiums",
        description: "Known for having some of the lowest premiums in the industry. Budget-conscious stackers love them.",
        pros: ["Lowest premiums", "Price match guarantee", "No credit card fees"],
        searchVolume: "1,100",
    },
    {
        name: "Money Metals Exchange",
        slug: "money-metals-exchange",
        rating: 4.5,
        established: 2010,
        minOrder: "No minimum",
        shipping: "Free over $500",
        specialty: "Monthly Savings Programs",
        description: "Famous for Starter Portfolios and monthly accumulation programs. Investopedia's 'Best Overall' pick.",
        pros: ["No minimum order", "Monthly savings plans", "Starter portfolios"],
        searchVolume: "500",
    },
    {
        name: "Hero Bullion",
        slug: "hero-bullion",
        rating: 4.4,
        established: 2017,
        minOrder: "$99",
        shipping: "Free over $199",
        specialty: "Competitive Newcomer",
        description: "Newer dealer making waves with competitive pricing and excellent customer service.",
        pros: ["Low premiums", "Fast shipping", "Great customer service"],
        searchVolume: "300",
    },
    {
        name: "Bold Precious Metals",
        slug: "bold-precious-metals",
        rating: 4.3,
        established: 2014,
        minOrder: "No minimum",
        shipping: "Free over $99",
        specialty: "Low Shipping Threshold",
        description: "Solid dealer with competitive pricing and one of the lowest free shipping thresholds.",
        pros: ["No minimum", "Free shipping at $99", "Good premiums"],
        searchVolume: "90",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Best Silver Dealers Online 2026",
    "description": "Comprehensive reviews and comparison of the top online silver dealers including APMEX, JM Bullion, SD Bullion, and more.",
    "url": "https://www.richdadretirement.com/silver-dealer-reviews",
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": dealers.map((dealer, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "LocalBusiness",
                "name": dealer.name,
                "description": dealer.description,
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": dealer.rating,
                    "bestRating": 5,
                    "worstRating": 1,
                }
            }
        }))
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the best place to buy silver online?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "JM Bullion and SD Bullion consistently rank as the best places to buy silver online due to their competitive pricing, reliable shipping, and strong customer service. For the largest selection, APMEX is unmatched."
            }
        },
        {
            "@type": "Question",
            "name": "Who has the lowest premiums on silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SD Bullion is known for having the lowest premiums in the industry. Hero Bullion and JM Bullion also offer very competitive pricing on silver products."
            }
        },
        {
            "@type": "Question",
            "name": "Is it safe to buy silver online?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, buying from reputable dealers like those reviewed on this page is safe. Look for dealers with BBB accreditation, positive customer reviews, and secure checkout processes. All dealers we review are established and trustworthy."
            }
        },
        {
            "@type": "Question",
            "name": "Can I buy silver for an IRA from these dealers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "While these dealers sell IRA-eligible silver products, setting up a Silver IRA requires working with a specialized IRA custodian. Augusta Precious Metals is our top recommendation for Silver IRAs due to their education-first approach and lifetime customer support."
            }
        }
    ]
};

export default function SilverDealerReviewsPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/30 to-transparent animate-pulse" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#B22234]/10 px-4 py-1.5 text-sm font-semibold text-slate-600 mb-6 border border-[#B22234]/20">
                            <Shield className="w-4 h-4 text-slate-600" />
                            13,100+ Monthly Searches
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            Best <span className="text-slate-600">Silver Dealers</span> Online 2026
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                            We reviewed the top online silver dealers to find the best prices, selection, and service. Here are our picks for buying physical silver in 2026.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                <Link href="#comparison-table">Compare All Dealers <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                            <Button variant="outline" size="xl" asChild className="border-white/30 text-slate-900 hover:bg-slate-100">
                                <Link href="/silver-dealer-reviews/comparison">Full Comparison Guide</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Quick Stats Bar */}
            <section className="py-8 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-slate-900">6</div>
                            <div className="text-sm text-slate-600">Dealers Reviewed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900">50+</div>
                            <div className="text-sm text-slate-600">Hours of Research</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900">1000+</div>
                            <div className="text-sm text-slate-600">Reviews Analyzed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#B22234]">4.6</div>
                            <div className="text-sm text-slate-600">Average Rating</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Comparison Table */}
            <section id="comparison-table" className="py-16">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-4">
                        Quick Comparison Table
                    </h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        At a glance comparison of the top silver dealers. Click any dealer for our full in-depth review.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="text-left p-4 text-slate-900 font-bold">Dealer</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Rating</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Specialty</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Min Order</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Free Ship</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dealers.map((dealer, index) => (
                                    <tr key={dealer.slug} className={`border-t border-slate-200 ${index === 0 ? 'bg-[#B22234]/5' : ''}`}>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                {index === 0 && (
                                                    <span className="bg-[#B22234] text-slate-900 text-xs font-bold px-2 py-0.5 rounded">TOP</span>
                                                )}
                                                <span className="text-slate-900 font-semibold">{dealer.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                                <span className="text-slate-900 font-semibold">{dealer.rating}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-slate-600">{dealer.specialty}</td>
                                        <td className="p-4 text-center text-slate-600">{dealer.minOrder}</td>
                                        <td className="p-4 text-center text-slate-600">{dealer.shipping}</td>
                                        <td className="p-4 text-center">
                                            <Link
                                                href={`/silver-dealer-reviews/${dealer.slug}`}
                                                className="inline-flex items-center gap-1 text-[#B22234] hover:text-[#B22234] font-semibold text-sm"
                                            >
                                                Read <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>

            {/* Dealer Cards Grid */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-4">
                        Individual Dealer Reviews
                    </h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        Click on any dealer below for our comprehensive review including pricing analysis, pros and cons, and customer feedback.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dealers.map((dealer, index) => (
                            <Link
                                key={dealer.slug}
                                href={`/silver-dealer-reviews/${dealer.slug}`}
                                className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 hover:border-slate-300 transition-all relative overflow-hidden"
                            >
                                {index === 0 && (
                                    <div className="absolute top-0 right-0 bg-[#B22234] text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        EDITOR&apos;S PICK
                                    </div>
                                )}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">
                                        {dealer.name}
                                    </h3>
                                    <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
                                        <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                        <span className="text-slate-900 font-bold text-sm">{dealer.rating}</span>
                                    </div>
                                </div>

                                <div className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded mb-4">
                                    {dealer.specialty}
                                </div>

                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{dealer.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {dealer.pros.map((pro, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                    <div className="text-xs text-slate-600">
                                        Est. {dealer.established} | {dealer.searchVolume} searches/mo
                                    </div>
                                    <span className="text-[#B22234] font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Full Review <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* What We Look For Section */}
            <section className="py-16">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">
                        How We Evaluate Silver Dealers
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Pricing & Premiums</h3>
                            <p className="text-slate-600 text-sm">We compare premiums over spot on popular silver products to find the best deals.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <Award className="w-12 h-12 text-[#B22234] mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Reputation</h3>
                            <p className="text-slate-600 text-sm">BBB ratings, customer reviews, and industry standing all factor into our analysis.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <Truck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Shipping & Handling</h3>
                            <p className="text-slate-600 text-sm">Free shipping thresholds, packaging quality, and delivery times matter.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Buyback Programs</h3>
                            <p className="text-slate-600 text-sm">We evaluate how easy it is to sell back your silver when needed.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* IRA Notice Section */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-[#B22234]/20 text-[#B22234] font-semibold text-sm px-4 py-2 rounded-full mb-6 border border-[#B22234]/30">
                                <Award className="w-4 h-4" />
                                IMPORTANT FOR IRA INVESTORS
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Want Silver in Your IRA?
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                                The dealers above are great for direct silver purchases. But if you want silver in a tax-advantaged retirement account (Silver IRA), you will need to work with a specialized IRA custodian. For Silver IRAs specifically, we recommend <strong className="text-[#B22234]">Augusta Precious Metals</strong> for their education-first approach and lifetime customer support.
                            </p>
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">What is the best place to buy silver online?</h3>
                            <p className="text-slate-600">JM Bullion and SD Bullion consistently rank as the best places to buy silver online due to their competitive pricing, reliable shipping, and strong customer service. For the largest selection, APMEX is unmatched.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Who has the lowest premiums on silver?</h3>
                            <p className="text-slate-600">SD Bullion is known for having the lowest premiums in the industry. Hero Bullion and JM Bullion also offer very competitive pricing on silver products.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Is it safe to buy silver online?</h3>
                            <p className="text-slate-600">Yes, buying from reputable dealers like those reviewed on this page is safe. Look for dealers with BBB accreditation, positive customer reviews, and secure checkout processes. All dealers we review are established and trustworthy.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Can I buy silver for an IRA from these dealers?</h3>
                            <p className="text-slate-600">While these dealers sell IRA-eligible silver products, setting up a Silver IRA requires working with a specialized IRA custodian. Augusta Precious Metals is our top recommendation for Silver IRAs due to their education-first approach and lifetime customer support.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="silver-dealer-reviews-hub" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
