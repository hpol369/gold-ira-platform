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
    XCircle,
    Coins,
    Shield,
    TrendingUp,
    DollarSign,
    Award,
    Globe,
    Scale,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "IRA Approved Silver Coins & Bars: Complete 2026 List",
    description:
        "Complete list of IRS-approved silver coins and bars for your IRA. Learn which silver products qualify, purity requirements, and how to choose the best options.",
    url: "https://www.richdadretirement.com/silver-ira/approved-coins",
    imageAlt: "IRA Approved Silver Coins - Rich Dad Retirement",
});

const approvedCoins = [
    {
        name: "American Silver Eagle",
        country: "United States",
        purity: "99.9% (.999)",
        weight: "1 troy oz",
        premium: "Higher",
        liquidity: "Excellent",
        description: "The most popular silver coin for IRAs. Backed by the US Mint with guaranteed weight and purity. Recognized worldwide.",
        pros: ["Most liquid silver coin", "US government backed", "Easy to sell"],
        featured: true,
    },
    {
        name: "Canadian Silver Maple Leaf",
        country: "Canada",
        purity: "99.99% (.9999)",
        weight: "1 troy oz",
        premium: "Moderate",
        liquidity: "Excellent",
        description: "Known for its exceptional .9999 purity - the highest of any major silver coin. Features advanced security measures.",
        pros: ["Highest purity available", "Strong security features", "Lower premiums than Eagles"],
        featured: true,
    },
    {
        name: "Austrian Silver Philharmonic",
        country: "Austria",
        purity: "99.9% (.999)",
        weight: "1 troy oz",
        premium: "Low-Moderate",
        liquidity: "Very Good",
        description: "Europe's best-selling silver bullion coin. Features the Vienna Philharmonic Orchestra design. Good value option.",
        pros: ["Lower premiums", "Popular in Europe", "Beautiful design"],
        featured: false,
    },
    {
        name: "British Silver Britannia",
        country: "United Kingdom",
        purity: "99.9% (.999)",
        weight: "1 troy oz",
        premium: "Moderate",
        liquidity: "Very Good",
        description: "Royal Mint product with advanced security features. Features iconic Britannia design. Gaining popularity in US IRAs.",
        pros: ["Strong security features", "Royal Mint quality", "Unique design"],
        featured: false,
    },
    {
        name: "Australian Silver Kangaroo",
        country: "Australia",
        purity: "99.99% (.9999)",
        weight: "1 troy oz",
        premium: "Low-Moderate",
        liquidity: "Good",
        description: "Perth Mint coin with .9999 purity. Design changes annually, adding collector appeal while remaining IRA-eligible.",
        pros: ["High purity", "Annual design changes", "Perth Mint quality"],
        featured: false,
    },
    {
        name: "Mexican Silver Libertad",
        country: "Mexico",
        purity: "99.9% (.999)",
        weight: "1 troy oz",
        premium: "Moderate-High",
        liquidity: "Good",
        description: "Produced by Casa de Moneda de Mexico, one of the oldest mints in the Americas. Popular among collectors and investors.",
        pros: ["Historic mint", "Low mintage years", "Popular design"],
        featured: false,
    },
];

const approvedBars = [
    {
        name: "Johnson Matthey Silver Bars",
        sizes: ["1 oz", "10 oz", "100 oz", "1000 oz"],
        purity: "99.9% (.999)",
        premium: "Low",
        description: "Highly respected refiner with excellent reputation. No longer in production, which adds collectible value.",
    },
    {
        name: "Engelhard Silver Bars",
        sizes: ["1 oz", "10 oz", "100 oz"],
        purity: "99.9% (.999)",
        premium: "Low-Moderate",
        description: "Another legendary refiner no longer in production. Bars are sought after by investors and collectors alike.",
    },
    {
        name: "PAMP Suisse Silver Bars",
        sizes: ["1 oz", "10 oz", "100 oz", "1 kg"],
        purity: "99.9% (.999)",
        premium: "Moderate",
        description: "Premium Swiss refiner known for beautiful designs and exceptional quality. Fortuna design is iconic.",
    },
    {
        name: "Credit Suisse Silver Bars",
        sizes: ["1 oz", "10 oz", "100 oz"],
        purity: "99.9% (.999)",
        premium: "Low",
        description: "Well-known bank-branded bars with good liquidity. Simple, clean design.",
    },
    {
        name: "Sunshine Minting Silver Bars",
        sizes: ["1 oz", "10 oz", "100 oz"],
        purity: "99.9% (.999)",
        premium: "Very Low",
        description: "US-based refiner offering competitive pricing. Features MintMark SI security feature.",
    },
    {
        name: "Royal Canadian Mint Silver Bars",
        sizes: ["10 oz", "100 oz"],
        purity: "99.99% (.9999)",
        premium: "Low-Moderate",
        description: "Government mint quality with exceptional .9999 purity. Trusted worldwide.",
    },
];

const notApproved = [
    {
        name: "Pre-1965 US Silver Coins ('Junk Silver')",
        reason: "Only 90% silver - doesn't meet .999 purity requirement",
    },
    {
        name: "Sterling Silver Items",
        reason: "Sterling is 92.5% silver - below IRS minimum",
    },
    {
        name: "Numismatic/Collectible Coins",
        reason: "IRS prohibits collectibles in IRAs (with limited exceptions)",
    },
    {
        name: "Proof Coins (most)",
        reason: "Generally considered collectibles, though some exceptions exist",
    },
    {
        name: "Silver Jewelry or Silverware",
        reason: "Not bullion grade, varying purity",
    },
    {
        name: "Silver Rounds from Unknown Mints",
        reason: "Must be from approved/recognized refiner",
    },
];

const selectionGuide = [
    {
        priority: "Maximum Liquidity",
        recommendation: "American Silver Eagles",
        explanation: "Easiest to sell anywhere in the world. Best choice if you might need to liquidate quickly.",
    },
    {
        priority: "Lowest Premiums",
        recommendation: "Silver Bars (100 oz)",
        explanation: "Bars have lower premiums per ounce than coins. Larger bars have lowest premiums.",
    },
    {
        priority: "Highest Purity",
        recommendation: "Canadian Maple Leafs",
        explanation: "At .9999 fine, Maple Leafs are the purest widely available silver coins.",
    },
    {
        priority: "Balanced Approach",
        recommendation: "Mix of Eagles + Bars",
        explanation: "Coins for liquidity, bars for lower costs. Most advisors recommend this combination.",
    },
];

const faqs = [
    {
        question: "What purity does silver need for an IRA?",
        answer: "Silver must be at least .999 fine (99.9% pure) to qualify for an IRA. This excludes sterling silver (92.5%), pre-1965 US coins (90%), and most collectible coins. The purity requirement ensures you're investing in investment-grade bullion."
    },
    {
        question: "Are American Silver Eagles the best choice for IRAs?",
        answer: "American Silver Eagles are the most popular choice due to their excellent liquidity and US government backing. However, they carry higher premiums than some alternatives. Canadian Maple Leafs offer higher purity at lower premiums, while silver bars offer the lowest cost per ounce."
    },
    {
        question: "Can I put junk silver in my IRA?",
        answer: "No. Pre-1965 US coins (commonly called 'junk silver' or 'constitutional silver') are only 90% silver, which doesn't meet the IRS requirement of .999 purity. These coins must be purchased outside of an IRA."
    },
    {
        question: "What size silver bars are best for IRAs?",
        answer: "Larger bars (100 oz) typically have the lowest premiums, maximizing your silver per dollar. However, they're less flexible for partial liquidation. Many investors buy a mix of 10 oz and 100 oz bars, plus some coins for liquidity."
    },
    {
        question: "Are proof coins IRA-eligible?",
        answer: "Most proof coins are NOT IRA-eligible because the IRS considers them collectibles. However, there are exceptions: American Silver Eagle proof coins struck at West Point are specifically permitted. Check with your custodian before purchasing any proof coins."
    },
    {
        question: "Which silver products have the lowest premiums?",
        answer: "In order from lowest to highest premiums: 100 oz silver bars, 10 oz silver bars, generic silver rounds, Austrian Philharmonics, Canadian Maple Leafs, and American Silver Eagles. However, lower premium products may be slightly harder to sell."
    },
    {
        question: "Can I hold foreign silver coins in my US IRA?",
        answer: "Yes, many foreign sovereign mint coins are IRA-approved, including Canadian Maple Leafs, Austrian Philharmonics, Australian Kangaroos, British Britannias, and Mexican Libertads. They must meet the .999 purity requirement."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IRA Approved Silver Coins & Bars: Complete 2026 List",
    "description": "Complete list of IRS-approved silver coins and bars for IRAs, including purity requirements and selection guidance.",
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

export default function ApprovedCoinsPage() {
    return (
        <main className="min-h-screen bg-slate-900">
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
            <header className="py-16 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 border border-slate-400/30 rounded-full text-slate-300 font-semibold text-sm mb-6">
                            <Coins className="h-4 w-4" />
                            IRS-APPROVED PRODUCTS
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            IRA Approved Silver Coins & Bars
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Not all silver qualifies for an IRA. This complete guide covers every IRS-approved silver coin and bar, purity requirements, and how to choose the best products for your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/quiz">
                                    Start Your Silver IRA <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Purity Requirement */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10 text-center">
                            <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-amber-400">.999</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Minimum Purity Requirement</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                The IRS requires all silver in an IRA to be at least <strong className="text-white">.999 fine (99.9% pure)</strong>.
                                This ensures you're investing in investment-grade bullion, not collectibles or lower-purity items.
                                Some products, like Canadian Maple Leafs, exceed this with .9999 purity.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Approved Coins */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">IRA-Approved Silver Coins</h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Sovereign mint coins from recognized governments. All meet or exceed .999 purity.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {approvedCoins.map((coin, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-6 border ${coin.featured ? 'bg-amber-500/10 border-amber-500/30' : 'bg-white/5 border-white/10'}`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{coin.name}</h3>
                                            <p className="text-sm text-slate-400 flex items-center gap-2">
                                                <Globe className="h-4 w-4" /> {coin.country}
                                            </p>
                                        </div>
                                        {coin.featured && (
                                            <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded">
                                                POPULAR
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4">{coin.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-slate-800/50 rounded-lg p-3">
                                            <div className="text-xs text-slate-500 mb-1">Purity</div>
                                            <div className="font-semibold text-white">{coin.purity}</div>
                                        </div>
                                        <div className="bg-slate-800/50 rounded-lg p-3">
                                            <div className="text-xs text-slate-500 mb-1">Premium</div>
                                            <div className="font-semibold text-white">{coin.premium}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        {coin.pros.map((pro, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                                                {pro}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Approved Bars */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">IRA-Approved Silver Bars</h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Bars from recognized refiners. Lower premiums than coins, but require larger purchases.
                        </p>

                        <div className="space-y-4">
                            {approvedBars.map((bar, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white mb-1">{bar.name}</h3>
                                            <p className="text-sm text-slate-400 mb-2">{bar.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                                                    Purity: {bar.purity}
                                                </span>
                                                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                                                    Premium: {bar.premium}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {bar.sizes.map((size, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded">
                                                    {size}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* NOT Approved */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">Silver NOT Allowed in IRAs</h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            These products don't meet IRS requirements. Purchasing them for an IRA is a prohibited transaction.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {notApproved.map((item, index) => (
                                <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                                    <div className="flex items-start gap-3">
                                        <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold text-red-300">{item.name}</h3>
                                            <p className="text-sm text-slate-400">{item.reason}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Selection Guide */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">How to Choose the Right Silver</h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Your choice depends on your priorities: liquidity, cost efficiency, or purity.
                        </p>

                        <div className="space-y-4">
                            {selectionGuide.map((item, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Scale className="h-6 w-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs font-bold rounded">
                                                    IF YOUR PRIORITY IS
                                                </span>
                                                <h3 className="font-bold text-white">{item.priority}</h3>
                                            </div>
                                            <p className="text-slate-300 mb-1">
                                                <strong className="text-amber-400">Recommended:</strong> {item.recommendation}
                                            </p>
                                            <p className="text-sm text-slate-400">{item.explanation}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mid-page CTA */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Add Silver to Your IRA?</h2>
                        <p className="text-slate-400 mb-6">
                            A reputable Silver IRA company will help you choose the right products for your goals. Take our quiz to find your perfect match.
                        </p>
                        <Button variant="gold" size="lg" asChild>
                            <Link href="/quiz">
                                Find My Silver IRA Company <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">IRA Approved Silver FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                                >
                                    <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform">&#9660;</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Pages */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-ira/rules" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver IRA Rules</h3>
                            <p className="text-sm text-slate-400">Full IRS requirements for Silver IRAs.</p>
                        </Link>
                        <Link href="/silver-ira/companies" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver IRA Companies</h3>
                            <p className="text-sm text-slate-400">Compare top Silver IRA providers.</p>
                        </Link>
                        <Link href="/silver-ira/vs-gold-ira" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver IRA vs Gold IRA</h3>
                            <p className="text-sm text-slate-400">Compare the two metals for your IRA.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Get Expert Guidance on Silver Selection"
                        subheadline="Augusta Precious Metals offers a wide selection of IRA-approved silver and helps you choose the right products for your goals. Get a free consultation."
                        trackSource="silver-approved-coins"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
