import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ProsCons } from "@/components/reviews/ProsCons";
import { Star, Shield, Truck, Clock, Award, ArrowRight, CheckCircle, Users, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hero Bullion Review 2026: Rising Star in Silver Dealing",
    description: "Hero Bullion reviews and analysis. The competitive newcomer making waves with low premiums and fast shipping. Is this newer dealer worth your trust?",
    keywords: ["hero bullion reviews", "hero bullion review", "is hero bullion legit", "hero bullion silver", "hero bullion pricing"],
    openGraph: {
        title: "Hero Bullion Review 2026: Complete Silver Dealer Analysis",
        description: "In-depth Hero Bullion review. Can this newer dealer compete with established names?",
        type: "article",
    },
};

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Hero Bullion",
        "description": "Newer precious metals dealer known for competitive pricing and excellent customer service.",
        "foundingDate": "2017",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.4,
        "bestRating": 5,
        "worstRating": 1
    },
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
            "name": "Is Hero Bullion a legitimate silver dealer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Hero Bullion is a legitimate precious metals dealer. Though newer than competitors (founded 2017), they have built a strong reputation for competitive pricing, fast shipping, and excellent customer service with positive reviews."
            }
        },
        {
            "@type": "Question",
            "name": "How are Hero Bullion's prices compared to other dealers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hero Bullion offers very competitive pricing, often matching or beating established dealers like JM Bullion and APMEX. Their low overhead allows them to pass savings to customers."
            }
        },
        {
            "@type": "Question",
            "name": "How fast does Hero Bullion ship orders?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hero Bullion is known for fast shipping. Most orders process within 1-2 business days and arrive within 3-5 days of shipping. Free shipping is available on orders over $199."
            }
        },
        {
            "@type": "Question",
            "name": "Does Hero Bullion have a buyback program?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Hero Bullion offers a buyback program where they purchase precious metals from customers at competitive rates. Contact them for current buyback prices."
            }
        },
        {
            "@type": "Question",
            "name": "Does Hero Bullion offer Silver IRA services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hero Bullion sells IRA-eligible silver products but works with partner custodians for IRA setup. For dedicated Silver IRA services with integrated support, Augusta Precious Metals is recommended."
            }
        }
    ]
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-5 h-5 ${star <= Math.floor(rating)
                            ? 'text-[#B22234] fill-[#B22234]'
                            : star <= rating
                                ? 'text-[#B22234] fill-[#B22234]/50'
                                : 'text-slate-600'
                        }`}
                />
            ))}
            <span className="ml-2 text-slate-900 font-bold">{rating}/5</span>
        </div>
    );
}

export default function HeroBullionReviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={reviewSchema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-16 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-slate-600 text-sm font-bold uppercase tracking-wider mb-4">
                            <Link href="/silver-dealer-reviews" className="hover:text-slate-900 transition-colors">Silver Dealer Reviews</Link>
                            <span>/</span>
                            <span>Hero Bullion</span>
                        </div>
                        <div className="inline-block bg-purple-500/20 text-purple-400 text-sm font-bold px-3 py-1 rounded-full mb-4 border border-purple-500/30">
                            High CPC Keyword: $2.50
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Hero Bullion Review 2026: <br />
                            <span className="text-slate-600">The Competitive Newcomer</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
                            A newer dealer making waves with competitive pricing and lightning-fast shipping. But can they compete with industry veterans? We investigate.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <StarRating rating={4.4} />
                            <div className="flex items-center gap-2 text-slate-600">
                                <Users className="w-4 h-4" />
                                <span className="text-sm">300 monthly searches</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Verdict Box */}
            <section className="py-8 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 md:p-8">
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2">
                                    <TrendingUp className="w-4 h-4" />
                                    RISING STAR
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Impressive Newcomer Worth Watching</h2>
                                <p className="text-slate-600">
                                    Hero Bullion has quickly earned a reputation for competitive pricing and outstanding customer service. While they lack the decades of history that APMEX or JM Bullion have, their track record since 2017 is solid. Great option for stackers willing to try a newer dealer. For Silver IRAs, Augusta Precious Metals remains our top recommendation due to their specialized expertise.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-slate-900 mb-2">4.4</div>
                                <StarRating rating={4.4} />
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <div className="flex items-center justify-center gap-2 text-green-400">
                                        <CheckCircle className="w-5 h-5" />
                                        <span className="font-semibold">Recommended</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <Container className="py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">

                            <h2>Company Overview</h2>
                            <p>
                                <strong>Hero Bullion</strong> entered the precious metals market in 2017 and has been steadily building a reputation as a reliable, customer-focused dealer. While they cannot match the decades of history that APMEX or JM Bullion have, they compensate with competitive pricing, fast shipping, and responsive customer service.
                            </p>
                            <p>
                                Their approach is simple: offer quality products at low prices with excellent service. This formula has earned them loyal customers and positive reviews despite their relatively short history.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">2017</div>
                                    <div className="text-sm text-slate-600">Year Founded</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-green-400">Fast</div>
                                    <div className="text-sm text-slate-600">Shipping Speed</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-purple-400">Growing</div>
                                    <div className="text-sm text-slate-600">Reputation</div>
                                </div>
                            </div>

                            <h2>Pros and Cons</h2>
                        </div>

                        <ProsCons
                            pros={[
                                "Very competitive pricing on silver products",
                                "Fast order processing and shipping",
                                "Excellent customer service reputation",
                                "Free shipping on orders over $199",
                                "Clean, easy-to-navigate website",
                                "Good selection of popular bullion items",
                                "Responsive to customer inquiries"
                            ]}
                            cons={[
                                "Newer company with less track record",
                                "Smaller selection than established dealers",
                                "Less name recognition",
                                "IRA services through third parties"
                            ]}
                        />

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">

                            <h2>Pricing & Premiums</h2>
                            <p>
                                Hero Bullion&apos;s competitive pricing is one of their biggest strengths. Their premiums often <strong>match or beat</strong> established dealers like JM Bullion, and they are competitive with discount leaders like SD Bullion.
                            </p>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Why Hero Bullion Can Offer Low Prices</h4>
                                        <p className="text-sm text-slate-600">
                                            As a newer, leaner operation, Hero Bullion has lower overhead costs than legacy dealers. They pass these savings to customers through competitive premiums. Without massive warehouses and decades of infrastructure costs, they can price aggressively while maintaining quality.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Key pricing features:
                            </p>
                            <ul>
                                <li><strong>Competitive Premiums:</strong> Often matching JM Bullion and close to SD Bullion</li>
                                <li><strong>Transparent Pricing:</strong> No hidden fees or surprise charges</li>
                                <li><strong>Regular Deals:</strong> Frequent promotions and special offers</li>
                            </ul>

                            <h2>Product Selection</h2>
                            <p>
                                Hero Bullion focuses on popular silver products rather than trying to stock everything:
                            </p>
                            <ul>
                                <li><strong>Government Coins:</strong> American Eagles, Canadian Maple Leafs, Austrian Philharmonics</li>
                                <li><strong>Silver Rounds:</strong> Generic and branded options at low premiums</li>
                                <li><strong>Silver Bars:</strong> Popular sizes from major mints</li>
                                <li><strong>Junk Silver:</strong> Constitutional silver coins</li>
                                <li><strong>IRA-Eligible:</strong> Products meeting IRS requirements</li>
                            </ul>
                            <p>
                                If you need rare numismatic pieces or obscure world coins, look to APMEX. For standard stacking products, Hero Bullion has you covered.
                            </p>

                            <h2>Shipping & Delivery</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 my-8">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Truck className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Free Shipping</div>
                                <div className="text-sm text-slate-600">Orders over $199</div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Fast Processing</div>
                                <div className="text-sm text-slate-600">1-2 business days</div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Fully Insured</div>
                                <div className="text-sm text-slate-600">Every shipment</div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
                            <p>
                                One area where Hero Bullion shines is shipping speed. Customer reviews frequently praise their <strong>fast processing times</strong>&mdash;often 1-2 business days versus the industry-standard 1-5 days. Free shipping kicks in at $199, matching most competitors.
                            </p>

                            <h2>Buyback Program</h2>
                            <p>
                                Hero Bullion does offer a buyback program where they will purchase precious metals from customers. While not as streamlined as JM Bullion&apos;s system, they offer competitive rates. Contact them directly for current buyback quotes.
                            </p>

                            <h2>Customer Service</h2>
                            <p>
                                Customer service is a standout for Hero Bullion. Reviews consistently praise their <strong>responsive, helpful staff</strong>. As a smaller operation, they can often provide more personalized attention than larger dealers where you might be just another order number.
                            </p>
                            <p>
                                Support is available via phone, email, and live chat during business hours.
                            </p>

                            <h2>IRA Services</h2>
                            <p>
                                Hero Bullion sells IRA-eligible silver products but works with partner custodians for retirement account setup. This is typical for direct dealers focused on physical delivery.
                            </p>

                            <div className="bg-amber-900/20 border border-[#B22234]/30 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">For Silver IRA Accounts</h4>
                                        <p className="text-slate-600 text-sm mb-4">
                                            Hero Bullion works great for direct silver purchases, but for Silver IRAs, you want a specialist. <strong>Augusta Precious Metals</strong> focuses exclusively on precious metals retirement accounts with dedicated support, education-first approach, and lifetime customer service.
                                        </p>
                                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="sm" asChild>
                                            <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <h2>Final Verdict</h2>
                            <p>
                                <strong>Hero Bullion</strong> is an impressive newcomer that deserves consideration. Their combination of competitive pricing, fast shipping, and excellent customer service makes up for their shorter track record.
                            </p>
                            <p>
                                If you prefer the security of decades-old dealers, JM Bullion or APMEX may be better choices. But if you are comfortable with a proven newer dealer and want competitive prices with great service, Hero Bullion delivers.
                            </p>
                            <p>
                                <strong>Best for:</strong> Stackers who want competitive prices, fast shipping, and great customer service from a growing dealer.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Is Hero Bullion a legitimate silver dealer?</h3>
                                    <p className="text-slate-600">Yes, Hero Bullion is a legitimate precious metals dealer. Though newer than competitors (founded 2017), they have built a strong reputation for competitive pricing and excellent customer service.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">How are Hero Bullion&apos;s prices compared to other dealers?</h3>
                                    <p className="text-slate-600">Hero Bullion offers very competitive pricing, often matching or beating established dealers like JM Bullion and APMEX. Their low overhead allows them to pass savings to customers.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">How fast does Hero Bullion ship orders?</h3>
                                    <p className="text-slate-600">Hero Bullion is known for fast shipping. Most orders process within 1-2 business days and arrive within 3-5 days of shipping. Free shipping is available on orders over $199.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does Hero Bullion have a buyback program?</h3>
                                    <p className="text-slate-600">Yes, Hero Bullion offers a buyback program where they purchase precious metals from customers at competitive rates. Contact them for current buyback prices.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does Hero Bullion offer Silver IRA services?</h3>
                                    <p className="text-slate-600">Hero Bullion sells IRA-eligible silver products but works with partner custodians for IRA setup. For dedicated Silver IRA services, Augusta Precious Metals is recommended.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">Hero Bullion Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Our Rating</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                            <span className="text-slate-900 font-bold">4.4/5</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Founded</span>
                                        <span className="text-slate-900 font-bold">2017</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Min Order</span>
                                        <span className="text-slate-900 font-bold">$99</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Free Shipping</span>
                                        <span className="text-slate-900 font-bold">$199+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Ship Speed</span>
                                        <span className="text-green-400 font-bold">Very Fast</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Service</span>
                                        <span className="text-green-400 font-bold">Excellent</span>
                                    </div>
                                </div>
                            </div>

                            {/* Other Dealers */}
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">Compare Other Dealers</h3>
                                <div className="space-y-3">
                                    <Link href="/silver-dealer-reviews/jm-bullion" className="flex justify-between items-center text-sm hover:bg-slate-50 p-2 rounded transition-colors">
                                        <span className="text-slate-600">JM Bullion</span>
                                        <span className="text-[#B22234] flex items-center gap-1"><Star className="w-3 h-3 fill-[#B22234]" /> 4.8</span>
                                    </Link>
                                    <Link href="/silver-dealer-reviews/apmex" className="flex justify-between items-center text-sm hover:bg-slate-50 p-2 rounded transition-colors">
                                        <span className="text-slate-600">APMEX</span>
                                        <span className="text-[#B22234] flex items-center gap-1"><Star className="w-3 h-3 fill-[#B22234]" /> 4.7</span>
                                    </Link>
                                    <Link href="/silver-dealer-reviews/sd-bullion" className="flex justify-between items-center text-sm hover:bg-slate-50 p-2 rounded transition-colors">
                                        <span className="text-slate-600">SD Bullion</span>
                                        <span className="text-[#B22234] flex items-center gap-1"><Star className="w-3 h-3 fill-[#B22234]" /> 4.6</span>
                                    </Link>
                                    <Link href="/silver-dealer-reviews/money-metals-exchange" className="flex justify-between items-center text-sm hover:bg-slate-50 p-2 rounded transition-colors">
                                        <span className="text-slate-600">Money Metals</span>
                                        <span className="text-[#B22234] flex items-center gap-1"><Star className="w-3 h-3 fill-[#B22234]" /> 4.5</span>
                                    </Link>
                                </div>
                                <Link href="/silver-dealer-reviews/comparison" className="block mt-4 text-center text-[#B22234] text-sm font-semibold hover:text-[#B22234] transition-colors">
                                    View Full Comparison
                                </Link>
                            </div>

                            {/* Augusta CTA */}
                            <AugustaCTA variant="sidebar" linkContext="silver" trackSource="hero-bullion-review-sidebar" />
                        </div>
                    </aside>
                </div>
            </Container>

            {/* Bottom CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        linkContext="silver"
                        trackSource="hero-bullion-review-footer"
                        headline="Want Silver in Your IRA?"
                        subheadline="Hero Bullion is great for direct purchases, but for Silver IRAs, Augusta Precious Metals offers dedicated account managers and lifetime support."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
