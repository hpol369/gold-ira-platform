import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Star, ArrowRight, Shield, CheckCircle2 } from "lucide-react";
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
        slug: "goldco",
        name: "Goldco",
        rating: 4.7,
        bbbRating: "A+",
        minInvestment: "$25,000",
        bestFor: "Silver-focused investors",
        highlight: "Best for Silver",
    },
    {
        slug: "american-hartford-gold",
        name: "American Hartford Gold",
        rating: 4.6,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Lower minimum investments",
        highlight: "Lowest Minimum",
    },
    {
        slug: "birch-gold",
        name: "Birch Gold Group",
        rating: 4.5,
        bbbRating: "A+",
        minInvestment: "$10,000",
        bestFor: "Education-focused investors",
        highlight: "Best Education",
    },
    {
        slug: "noble-gold",
        name: "Noble Gold",
        rating: 4.4,
        bbbRating: "A+",
        minInvestment: "$20,000",
        bestFor: "Royal Survival Packs and unique offerings",
        highlight: "Most Unique",
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
        slug: "oxford-gold-group",
        name: "Oxford Gold Group",
        rating: 4.1,
        bbbRating: "A+",
        minInvestment: "$25,000",
        bestFor: "Fast account setup",
        highlight: "Fastest Setup",
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
