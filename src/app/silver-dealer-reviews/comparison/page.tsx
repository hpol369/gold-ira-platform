import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Star, Shield, Truck, Award, ArrowRight, CheckCircle, XCircle, Crown, DollarSign, Zap, Users, Package, Check, X } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Place to Buy Silver Online 2026: Complete Dealer Comparison",
    description: "Head-to-head comparison of the best silver dealers: APMEX, JM Bullion, SD Bullion, Money Metals, Hero Bullion, Bold Precious Metals. Find the best dealer for your needs.",
    keywords: ["best place to buy silver online", "reputable silver dealers", "buy silver online comparison", "silver dealer comparison", "where to buy silver"],
    openGraph: {
        title: "Best Place to Buy Silver Online 2026: Complete Dealer Comparison",
        description: "Comprehensive comparison of top silver dealers. Find the best option for your stacking needs.",
        type: "article",
    },
};

const dealers = [
    {
        name: "JM Bullion",
        slug: "jm-bullion",
        rating: 4.8,
        established: 2011,
        minOrder: "$99",
        freeShipping: "$199",
        specialty: "Best Overall",
        premiums: "Competitive",
        selection: "Large",
        service: "Excellent",
        buyback: "Excellent",
        bestFor: "Most buyers",
        badge: "Editor's Choice",
        badgeColor: "amber",
    },
    {
        name: "APMEX",
        slug: "apmex",
        rating: 4.7,
        established: 2000,
        minOrder: "$99",
        freeShipping: "$199",
        specialty: "Largest Selection",
        premiums: "Higher",
        selection: "Massive (20,000+)",
        service: "Good",
        buyback: "Good",
        bestFor: "Collectors & variety seekers",
        badge: "Best Selection",
        badgeColor: "blue",
    },
    {
        name: "SD Bullion",
        slug: "sd-bullion",
        rating: 4.6,
        established: 2012,
        minOrder: "$99",
        freeShipping: "$199",
        specialty: "Lowest Premiums",
        premiums: "Lowest",
        selection: "Good",
        service: "Adequate",
        buyback: "Good",
        bestFor: "Budget-focused stackers",
        badge: "Best Price",
        badgeColor: "green",
    },
    {
        name: "Money Metals Exchange",
        slug: "money-metals-exchange",
        rating: 4.5,
        established: 2010,
        minOrder: "None",
        freeShipping: "$500",
        specialty: "Starter Portfolios",
        premiums: "Competitive",
        selection: "Good",
        service: "Good",
        buyback: "Good",
        bestFor: "Beginners",
        badge: "Best for Beginners",
        badgeColor: "purple",
    },
    {
        name: "Hero Bullion",
        slug: "hero-bullion",
        rating: 4.4,
        established: 2017,
        minOrder: "$99",
        freeShipping: "$199",
        specialty: "Fast Shipping",
        premiums: "Competitive",
        selection: "Good",
        service: "Excellent",
        buyback: "Good",
        bestFor: "Service-focused buyers",
        badge: "Rising Star",
        badgeColor: "indigo",
    },
    {
        name: "Bold Precious Metals",
        slug: "bold-precious-metals",
        rating: 4.3,
        established: 2014,
        minOrder: "None",
        freeShipping: "$99",
        specialty: "Low Ship Threshold",
        premiums: "Competitive",
        selection: "Moderate",
        service: "Good",
        buyback: "Adequate",
        bestFor: "Small orders",
        badge: "Best for Small Orders",
        badgeColor: "orange",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Place to Buy Silver Online 2026: Complete Dealer Comparison",
    "description": "Comprehensive comparison of the top online silver dealers to help you find the best place to buy silver.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-01-27"
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
                "text": "JM Bullion is our top recommendation for most silver buyers due to their excellent balance of competitive pricing, great selection, fast shipping, and outstanding customer service. For the absolute lowest premiums, consider SD Bullion. For the largest selection, APMEX is unmatched."
            }
        },
        {
            "@type": "Question",
            "name": "Which silver dealer has the lowest prices?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SD Bullion consistently offers the lowest premiums over spot on common silver products. They also do not charge credit card fees on many items, which can save an additional 3-4% compared to other dealers."
            }
        },
        {
            "@type": "Question",
            "name": "Is it safe to buy silver online?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, buying silver from reputable online dealers is safe. Look for dealers with A+ BBB ratings, positive customer reviews, secure checkout processes, and fully insured shipping. All dealers on our comparison list meet these criteria."
            }
        },
        {
            "@type": "Question",
            "name": "Which dealer is best for Silver IRA accounts?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "While all dealers on our list sell IRA-eligible products, none specialize in IRA services. For Silver IRAs, we recommend Augusta Precious Metals due to their dedicated IRA expertise, education-first approach, and lifetime customer support."
            }
        },
        {
            "@type": "Question",
            "name": "What is the minimum order for buying silver online?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimum orders vary by dealer. Money Metals Exchange and Bold Precious Metals have no minimum order requirement. Most other dealers have minimums around $99. Free shipping typically kicks in at $199 (or $99 at Bold Precious Metals)."
            }
        }
    ]
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-4 h-4 ${star <= Math.floor(rating)
                            ? 'text-[#B22234] fill-[#B22234]'
                            : 'text-slate-600'
                        }`}
                />
            ))}
        </div>
    );
}

export default function ComparisonPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={schema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B22234]/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#B22234]/20 px-4 py-1.5 text-sm font-semibold text-[#B22234] mb-6 border border-[#B22234]/30">
                            <Award className="w-4 h-4" />
                            750+ Monthly Searches
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            Best Place to Buy <span className="text-[#B22234]">Silver</span> Online
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                            We compared the top online silver dealers head-to-head. Here are our findings and recommendations for 2026.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Our Top Picks Section */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-4">
                        Our Top Picks
                    </h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        Quick recommendations based on your priorities
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Best Overall */}
                        <div className="bg-gradient-to-br from-[#B22234]/20 to-[#8b1c2a]/10 border border-[#B22234]/30 rounded-xl p-6">
                            <div className="flex items-center gap-2 text-[#B22234] font-semibold text-sm mb-4">
                                <Crown className="w-5 h-5" />
                                BEST OVERALL
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">JM Bullion</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <StarRating rating={4.8} />
                                <span className="text-slate-900 font-semibold">4.8</span>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                                Best balance of price, selection, service, and reliability. Our top recommendation for most silver buyers.
                            </p>
                            <Link
                                href="/silver-dealer-reviews/jm-bullion"
                                className="inline-flex items-center gap-2 text-[#B22234] font-semibold text-sm hover:text-[#B22234]"
                            >
                                Read Review <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Best Price */}
                        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-2 text-green-400 font-semibold text-sm mb-4">
                                <DollarSign className="w-5 h-5" />
                                LOWEST PREMIUMS
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">SD Bullion</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <StarRating rating={4.6} />
                                <span className="text-slate-900 font-semibold">4.6</span>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                                Lowest premiums in the industry. Perfect for budget-focused stackers who prioritize price above all else.
                            </p>
                            <Link
                                href="/silver-dealer-reviews/sd-bullion"
                                className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm hover:text-green-300"
                            >
                                Read Review <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Best Selection */}
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm mb-4">
                                <Package className="w-5 h-5" />
                                BEST SELECTION
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">APMEX</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <StarRating rating={4.7} />
                                <span className="text-slate-900 font-semibold">4.7</span>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                                20,000+ products. Unmatched variety for collectors and anyone who wants the widest selection available.
                            </p>
                            <Link
                                href="/silver-dealer-reviews/apmex"
                                className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300"
                            >
                                Read Review <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Best for Beginners */}
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-4">
                                <Users className="w-5 h-5" />
                                BEST FOR BEGINNERS
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Money Metals</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <StarRating rating={4.5} />
                                <span className="text-slate-900 font-semibold">4.5</span>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                                No minimum order, Starter Portfolios, and monthly savings programs. Perfect entry point for new investors.
                            </p>
                            <Link
                                href="/silver-dealer-reviews/money-metals-exchange"
                                className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm hover:text-purple-300"
                            >
                                Read Review <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Best for Small Orders */}
                        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm mb-4">
                                <Truck className="w-5 h-5" />
                                BEST FOR SMALL ORDERS
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Bold Precious Metals</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <StarRating rating={4.3} />
                                <span className="text-slate-900 font-semibold">4.3</span>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                                Free shipping at just $99&mdash;lowest threshold in the industry. No minimum order requirement.
                            </p>
                            <Link
                                href="/silver-dealer-reviews/bold-precious-metals"
                                className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm hover:text-orange-300"
                            >
                                Read Review <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Rising Star */}
                        <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 border border-indigo-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-4">
                                <Zap className="w-5 h-5" />
                                RISING STAR
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Hero Bullion</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <StarRating rating={4.4} />
                                <span className="text-slate-900 font-semibold">4.4</span>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                                Newer dealer with competitive pricing, fast shipping, and excellent customer service. Worth watching.
                            </p>
                            <Link
                                href="/silver-dealer-reviews/hero-bullion"
                                className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:text-indigo-300"
                            >
                                Read Review <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Full Comparison Table */}
            <section className="py-16">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-4">
                        Full Head-to-Head Comparison
                    </h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        Detailed comparison of all major factors across all dealers
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden text-sm">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="text-left p-4 text-slate-900 font-bold">Dealer</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Rating</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Est.</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Min Order</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Free Ship</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Premiums</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Selection</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Service</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Buyback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dealers.map((dealer, index) => (
                                    <tr key={dealer.slug} className={`border-t border-slate-200 ${index === 0 ? 'bg-[#B22234]/5' : ''}`}>
                                        <td className="p-4">
                                            <Link href={`/silver-dealer-reviews/${dealer.slug}`} className="hover:text-[#B22234] transition-colors">
                                                <div className="flex items-center gap-2">
                                                    {index === 0 && <Crown className="w-4 h-4 text-[#B22234]" />}
                                                    <span className="text-slate-900 font-semibold">{dealer.name}</span>
                                                </div>
                                                <span className="text-xs text-slate-600">{dealer.specialty}</span>
                                            </Link>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                                <span className="text-slate-900 font-semibold">{dealer.rating}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-slate-600">{dealer.established}</td>
                                        <td className="p-4 text-center">
                                            <span className={dealer.minOrder === "None" ? "text-green-400 font-semibold" : "text-slate-600"}>
                                                {dealer.minOrder}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={dealer.freeShipping === "$99" ? "text-green-400 font-semibold" : "text-slate-600"}>
                                                {dealer.freeShipping}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={dealer.premiums === "Lowest" ? "text-green-400 font-semibold" : dealer.premiums === "Higher" ? "text-[#B22234]" : "text-slate-600"}>
                                                {dealer.premiums}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={dealer.selection.includes("Massive") ? "text-blue-400 font-semibold" : "text-slate-600"}>
                                                {dealer.selection}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={dealer.service === "Excellent" ? "text-green-400 font-semibold" : "text-slate-600"}>
                                                {dealer.service}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={dealer.buyback === "Excellent" ? "text-green-400 font-semibold" : "text-slate-600"}>
                                                {dealer.buyback}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>

            {/* Feature Comparison */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">
                        Feature Comparison
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="text-left p-4 text-slate-900 font-bold">Feature</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">JM Bullion</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">APMEX</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">SD Bullion</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Money Metals</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Hero Bullion</th>
                                    <th className="text-center p-4 text-slate-900 font-bold">Bold PM</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">A+ BBB Rating</td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><span className="text-slate-600">N/A</span></td>
                                    <td className="p-4 text-center"><span className="text-slate-600">N/A</span></td>
                                </tr>
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">No Minimum Order</td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                </tr>
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">Price Match Guarantee</td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                </tr>
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">No Credit Card Fees</td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                </tr>
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">Monthly Savings Program</td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                </tr>
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">Own Depository</td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                </tr>
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">Starter Portfolios</td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                    <td className="p-4 text-center"><X className="w-5 h-5 text-red-400/50 mx-auto" /></td>
                                </tr>
                                <tr className="border-t border-slate-200">
                                    <td className="p-4 text-slate-600">IRA-Eligible Products</td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                    <td className="p-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>

            {/* IRA Notice */}
            <section className="py-16">
                <Container>
                    <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-[#B22234]/20 text-[#B22234] font-semibold text-sm px-4 py-2 rounded-full mb-6 border border-[#B22234]/30">
                                <Shield className="w-4 h-4" />
                                FOR IRA ACCOUNTS
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Want Silver in a Retirement Account?
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                                The dealers above are excellent for direct silver purchases. However, if you want silver in a tax-advantaged IRA, you need a specialized custodian. For Silver IRAs, we recommend <strong className="text-[#B22234]">Augusta Precious Metals</strong> for their:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="flex flex-col items-center">
                                    <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                                    <span className="text-slate-900 font-semibold">Education-First Approach</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                                    <span className="text-slate-900 font-semibold">Lifetime Support</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                                    <span className="text-slate-900 font-semibold">A+ BBB Rating</span>
                                </div>
                            </div>
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="xl" asChild>
                                <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">What is the best place to buy silver online?</h3>
                            <p className="text-slate-600">JM Bullion is our top recommendation for most silver buyers due to their excellent balance of competitive pricing, great selection, fast shipping, and outstanding customer service. For the absolute lowest premiums, consider SD Bullion.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Which silver dealer has the lowest prices?</h3>
                            <p className="text-slate-600">SD Bullion consistently offers the lowest premiums over spot on common silver products. They also do not charge credit card fees on many items, which can save an additional 3-4%.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Is it safe to buy silver online?</h3>
                            <p className="text-slate-600">Yes, buying silver from reputable online dealers is safe. Look for dealers with A+ BBB ratings, positive customer reviews, secure checkout processes, and fully insured shipping.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Which dealer is best for Silver IRA accounts?</h3>
                            <p className="text-slate-600">While all dealers on our list sell IRA-eligible products, none specialize in IRA services. For Silver IRAs, we recommend Augusta Precious Metals due to their dedicated IRA expertise and lifetime customer support.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">What is the minimum order for buying silver online?</h3>
                            <p className="text-slate-600">Minimum orders vary by dealer. Money Metals Exchange and Bold Precious Metals have no minimum order requirement. Most other dealers have minimums around $99.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        linkContext="silver"
                        trackSource="silver-dealer-comparison-footer"
                        headline="Ready to Start Your Silver IRA?"
                        subheadline="Augusta Precious Metals specializes in precious metals retirement accounts with dedicated support and an education-first approach."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
