import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Star, ArrowRight, Shield, CheckCircle2, AlertTriangle, FileSearch } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gold IRA Company Reviews 2026: Honest Ratings & Analysis",
    description: "Compare the top Gold IRA companies with our unbiased reviews. We analyze fees, BBB ratings, customer complaints, and minimum investments to help you choose.",
};

const companies = [
    {
        slug: "augusta-precious-metals",
        name: "Augusta Precious Metals",
        rating: 4.9,
        bbbRating: "A+",
        minInvestment: "$50,000",
        bestFor: "High-net-worth investors seeking premium service",
        highlight: "Best Overall",
    },
    {
        slug: "noble-gold",
        name: "Noble Gold",
        rating: 4.7,
        bbbRating: "A+",
        minInvestment: "$2,000",
        bestFor: "Low minimums and Texas storage option",
        highlight: "Best for Small Accounts",
    },
    {
        slug: "goldco",
        name: "Goldco",
        rating: 4.5,
        bbbRating: "A+",
        minInvestment: "$25,000",
        bestFor: "Brand recognition and marketing",
        highlight: "Most Recognized",
    },
    {
        slug: "american-hartford-gold",
        name: "American Hartford Gold",
        rating: 4.4,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Price-conscious investors",
        highlight: "Price Match",
    },
    {
        slug: "birch-gold",
        name: "Birch Gold Group",
        rating: 4.5,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Large accounts (flat fee structure)",
        highlight: "20+ Years",
    },
    {
        slug: "orion-metal-exchange",
        name: "Orion Metal Exchange",
        rating: 4.3,
        bbbRating: "A+",
        minInvestment: "$5,000",
        bestFor: "Beginning investors with smaller amounts",
        highlight: "Beginner Friendly",
    },
    {
        slug: "advantage-gold",
        name: "Advantage Gold",
        rating: 4.3,
        bbbRating: "A+",
        minInvestment: "$25,000",
        bestFor: "First-time investors wanting guidance",
        highlight: "Best for Beginners",
    },
    {
        slug: "lear-capital",
        name: "Lear Capital",
        rating: 4.2,
        bbbRating: "A+",
        minInvestment: "$25,000",
        bestFor: "Price lock guarantees",
        highlight: "Price Protection",
    },
    {
        slug: "priority-gold",
        name: "Priority Gold",
        rating: 4.1,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Direct pricing model",
        highlight: "Transparent Pricing",
    },
    {
        slug: "american-bullion",
        name: "American Bullion",
        rating: 4.0,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Established track record",
        highlight: "Since 2009",
    },
    {
        slug: "money-metals-exchange",
        name: "Money Metals Exchange",
        rating: 4.0,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Cash purchases and variety",
        highlight: "Great Selection",
    },
    {
        slug: "monetary-gold",
        name: "Monetary Gold",
        rating: 3.9,
        bbbRating: "A",
        minInvestment: "$10,000",
        bestFor: "Direct dealer pricing",
        highlight: "Direct Pricing",
    },
    {
        slug: "blanchard-gold",
        name: "Blanchard Gold",
        rating: 3.8,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Numismatic coins and collectibles",
        highlight: "Numismatic Expert",
    },
    {
        slug: "us-money-reserve",
        name: "US Money Reserve",
        rating: 3.5,
        bbbRating: "A+",
        minInvestment: "$50",
        bestFor: "Small coin purchases",
        highlight: "Low Entry Point",
    },
    {
        slug: "patriot-gold-group",
        name: "Patriot Gold Group",
        rating: 3.5,
        bbbRating: "A",
        minInvestment: "$25,000",
        bestFor: "No-fee IRA options",
        highlight: "No Setup Fees",
    },
    {
        slug: "rosland-capital",
        name: "Rosland Capital",
        rating: 3.4,
        bbbRating: "A+",
        minInvestment: "$2,000",
        bestFor: "Celebrity endorsements and TV presence",
        highlight: "TV Advertiser",
    },
];

const investigationPages = [
    {
        slug: "regal-assets-lawsuit",
        title: "Regal Assets Lawsuit & Collapse",
        description: "What happened to one of the industry's most-recommended companies",
        type: "warning",
    },
    {
        slug: "goldco-lawsuit-facts",
        title: "Goldco Lawsuit Fact Check",
        description: "Separating facts from fiction on Goldco complaints",
        type: "investigation",
    },
    {
        slug: "augusta-precious-metals-lawsuit",
        title: "Augusta Precious Metals Lawsuit",
        description: "Examining claims and complaints against Augusta",
        type: "investigation",
    },
    {
        slug: "noble-gold-legit",
        title: "Is Noble Gold Legit?",
        description: "Investigation into Noble Gold's legitimacy and practices",
        type: "investigation",
    },
    {
        slug: "birch-gold-complaints",
        title: "Birch Gold Complaints Analysis",
        description: "Deep dive into BBB complaints and customer issues",
        type: "complaints",
    },
    {
        slug: "american-hartford-gold-complaints",
        title: "American Hartford Gold Complaints",
        description: "Review of customer complaints and company responses",
        type: "complaints",
    },
    {
        slug: "advantage-gold-complaints",
        title: "Advantage Gold Complaints Audit",
        description: "Analysis of customer feedback and issues",
        type: "complaints",
    },
    {
        slug: "lear-capital-complaints",
        title: "Lear Capital Complaints & History",
        description: "Lawsuit history and customer complaint patterns",
        type: "complaints",
    },
    {
        slug: "rosland-capital-lawsuit",
        title: "Rosland Capital Lawsuit History",
        description: "FTC settlement and class action lawsuit details",
        type: "warning",
    },
    {
        slug: "us-money-reserve-complaints",
        title: "US Money Reserve Complaints",
        description: "Analysis of customer issues and company practices",
        type: "complaints",
    },
];

export default function ReviewsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Header */}
            <header className="bg-primary text-white py-16">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Company Reviews
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Gold IRA Company Reviews
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            We&apos;ve analyzed fees, customer service, BBB ratings, and real customer complaints for every major Gold IRA company. No fluff—just the facts you need to make a smart decision.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Reviews Grid */}
            <section className="py-16">
                <Container>
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {companies.map((company, index) => (
                            <Link
                                key={company.slug}
                                href={`/reviews/${company.slug}`}
                                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-secondary hover:shadow-lg transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    {/* Rank & Name */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                                    {company.name}
                                                </h2>
                                                {company.highlight && (
                                                    <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full font-semibold">
                                                        {company.highlight}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-text-muted">{company.bestFor}</p>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-6 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-secondary text-secondary" />
                                            <span className="font-bold">{company.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Shield className="w-4 h-4 text-green-600" />
                                            <span>{company.bbbRating} BBB</span>
                                        </div>
                                        <div className="text-text-muted">
                                            Min: {company.minInvestment}
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Investigation & Complaints Section */}
                    <div className="max-w-4xl mx-auto mt-16">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-2 flex items-center gap-2">
                            <FileSearch className="w-6 h-6" />
                            Investigations & Complaint Analysis
                        </h2>
                        <p className="text-text-muted mb-6">Deep dives into lawsuits, BBB complaints, and company legitimacy.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {investigationPages.map((page) => (
                                <Link
                                    key={page.slug}
                                    href={`/reviews/${page.slug}`}
                                    className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                            page.type === "warning" ? "bg-red-100" : "bg-amber-100"
                                        }`}>
                                            <AlertTriangle className={`w-4 h-4 ${
                                                page.type === "warning" ? "text-red-600" : "text-amber-600"
                                            }`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary group-hover:text-red-700 transition-colors">
                                                {page.title}
                                            </h3>
                                            <p className="text-sm text-text-muted">{page.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* How We Review */}
                    <div className="max-w-4xl mx-auto mt-16 p-8 bg-primary/5 rounded-2xl">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-4">How We Review Gold IRA Companies</h2>
                        <p className="text-text-muted mb-6">
                            Every review is based on real research—not paid placements. Here&apos;s what we look at:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5" />
                                <div>
                                    <strong className="text-primary">BBB & Review Sites</strong>
                                    <p className="text-sm text-text-muted">Official ratings and real customer complaints</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5" />
                                <div>
                                    <strong className="text-primary">Fee Transparency</strong>
                                    <p className="text-sm text-text-muted">Setup, annual, and hidden costs analyzed</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5" />
                                <div>
                                    <strong className="text-primary">Investment Minimums</strong>
                                    <p className="text-sm text-text-muted">Who they&apos;re really designed for</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5" />
                                <div>
                                    <strong className="text-primary">Customer Experience</strong>
                                    <p className="text-sm text-text-muted">Sales tactics, support, and education quality</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Content */}
                    <div className="max-w-4xl mx-auto mt-12">
                        <h3 className="text-lg font-bold text-primary mb-4">Related Guides</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/guide/gold-ira-fees" className="p-4 bg-white rounded-lg border hover:border-secondary transition-colors">
                                <span className="text-sm font-semibold text-primary">Gold IRA Fees Guide →</span>
                            </Link>
                            <Link href="/learn/gold-ira-scams" className="p-4 bg-white rounded-lg border hover:border-secondary transition-colors">
                                <span className="text-sm font-semibold text-primary">Scams to Avoid →</span>
                            </Link>
                            <Link href="/compare/gold-ira-vs-401k" className="p-4 bg-white rounded-lg border hover:border-secondary transition-colors">
                                <span className="text-sm font-semibold text-primary">Gold IRA vs 401k →</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
