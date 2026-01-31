import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ProsCons } from "@/components/reviews/ProsCons";
import { Star, Shield, Truck, Clock, Award, ArrowRight, CheckCircle, Users, Package } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bold Precious Metals Review 2026: Low Shipping Threshold Dealer",
    description: "Bold Precious Metals reviews and analysis. No minimum orders and free shipping at just $99. Is this dealer right for small-budget stackers?",
    keywords: ["bold precious metals reviews", "bold precious metals review", "is bold precious metals legit", "bold precious metals silver"],
    openGraph: {
        title: "Bold Precious Metals Review 2026: Complete Analysis",
        description: "In-depth Bold Precious Metals review covering pricing, shipping, and customer service.",
        type: "article",
    },
};

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Bold Precious Metals",
        "description": "Online precious metals dealer with no minimum order and low free shipping threshold.",
        "foundingDate": "2014",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.3,
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
            "name": "Is Bold Precious Metals legitimate?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Bold Precious Metals is a legitimate precious metals dealer. Founded in 2014, they have built a solid reputation with positive customer reviews and reliable service."
            }
        },
        {
            "@type": "Question",
            "name": "What is Bold Precious Metals' minimum order?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bold Precious Metals has no minimum order requirement. You can purchase as little as a single silver coin, making them accessible to all budget levels."
            }
        },
        {
            "@type": "Question",
            "name": "When does Bold Precious Metals offer free shipping?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bold Precious Metals offers free shipping on orders of $99 or more. This is one of the lowest free shipping thresholds in the industry, making them ideal for smaller orders."
            }
        },
        {
            "@type": "Question",
            "name": "How are Bold Precious Metals' prices?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bold Precious Metals offers competitive pricing, though not always the absolute lowest. Their value proposition is the combination of no minimum and low free shipping threshold rather than rock-bottom premiums."
            }
        },
        {
            "@type": "Question",
            "name": "Does Bold Precious Metals offer Silver IRA services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bold Precious Metals sells IRA-eligible products but works with partner custodians for IRA setup. For dedicated Silver IRA services, Augusta Precious Metals is recommended."
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

export default function BoldPreciousMetalsReviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={reviewSchema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-16 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-slate-600 text-sm font-bold uppercase tracking-wider mb-4">
                            <Link href="/silver-dealer-reviews" className="hover:text-slate-900 transition-colors">Silver Dealer Reviews</Link>
                            <span>/</span>
                            <span>Bold Precious Metals</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Bold Precious Metals Review: <br />
                            <span className="text-slate-600">Best for Small Orders?</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
                            No minimum orders and free shipping at just $99. Bold Precious Metals caters to budget-conscious stackers and small-order buyers. We review their full offering.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <StarRating rating={4.3} />
                            <div className="flex items-center gap-2 text-slate-600">
                                <Users className="w-4 h-4" />
                                <span className="text-sm">90 monthly searches</span>
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
                                <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm mb-2">
                                    <Package className="w-4 h-4" />
                                    BEST FOR SMALL ORDERS
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Lowest Free Shipping Threshold</h2>
                                <p className="text-slate-600">
                                    Bold Precious Metals stands out with their $99 free shipping threshold&mdash;the lowest among major dealers. Combined with no minimum order, they are ideal for small-budget stackers making frequent small purchases. Premiums are competitive though not always the lowest. For Silver IRAs, Augusta Precious Metals offers specialized support.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-slate-900 mb-2">4.3</div>
                                <StarRating rating={4.3} />
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <div className="flex items-center justify-center gap-2 text-green-700">
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
                                <strong>Bold Precious Metals</strong> was founded in 2014 with a focus on accessibility. Their key differentiator is the lowest free shipping threshold in the industry ($99) combined with no minimum order requirement.
                            </p>
                            <p>
                                This makes them particularly appealing to small-budget stackers who want to make regular small purchases without paying shipping fees that eat into their investment. While larger dealers may have better premiums, Bold fills an important niche.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">2014</div>
                                    <div className="text-sm text-slate-600">Year Founded</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-green-700">$0</div>
                                    <div className="text-sm text-slate-600">Minimum Order</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-orange-400">$99</div>
                                    <div className="text-sm text-slate-600">Free Ship Threshold</div>
                                </div>
                            </div>

                            <h2>Pros and Cons</h2>
                        </div>

                        <ProsCons
                            pros={[
                                "No minimum order requirement",
                                "Free shipping at just $99 (lowest in industry)",
                                "Competitive pricing on silver products",
                                "Good selection of popular bullion items",
                                "Clean, functional website",
                                "IRA-eligible products available",
                                "Reliable shipping and packaging"
                            ]}
                            cons={[
                                "Less name recognition than major dealers",
                                "Smaller selection than APMEX or JM Bullion",
                                "Premiums not always the absolute lowest",
                                "IRA services through third parties"
                            ]}
                        />

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">

                            <h2>Pricing & Premiums</h2>
                            <p>
                                Bold Precious Metals offers <strong>competitive pricing</strong> on silver products, though they are not always the absolute cheapest. Their value proposition is the combination of good prices with no minimum and low free shipping threshold.
                            </p>
                            <p>
                                Consider the math: if you are ordering $150 worth of silver from a dealer with a $199 free shipping threshold, you might pay $8-15 in shipping. At Bold, that same order ships free, which can make them cheaper overall despite slightly higher per-ounce premiums.
                            </p>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Truck className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Free Shipping Comparison</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between items-center">
                                                <span className="text-orange-400 font-semibold">Bold Precious Metals:</span>
                                                <span className="text-slate-900 font-bold">$99</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">JM Bullion:</span>
                                                <span className="text-slate-900">$199</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">APMEX:</span>
                                                <span className="text-slate-900">$199</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">SD Bullion:</span>
                                                <span className="text-slate-900">$199</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">Money Metals:</span>
                                                <span className="text-slate-900">$500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2>Product Selection</h2>
                            <p>
                                Bold Precious Metals offers a solid selection covering standard stacking products:
                            </p>
                            <ul>
                                <li><strong>Government Coins:</strong> American Eagles, Canadian Maple Leafs, and other sovereign mint coins</li>
                                <li><strong>Silver Rounds:</strong> Generic and branded options</li>
                                <li><strong>Silver Bars:</strong> Popular sizes from reputable mints</li>
                                <li><strong>Junk Silver:</strong> Constitutional silver coins</li>
                                <li><strong>IRA-Eligible:</strong> Products meeting IRS requirements</li>
                            </ul>
                            <p>
                                The selection is not as vast as APMEX, but covers most stackers&apos; needs.
                            </p>

                            <h2>Shipping & Delivery</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 my-8">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Truck className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Free Shipping</div>
                                <div className="text-sm text-slate-600">Orders over $99</div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Clock className="w-8 h-8 text-green-700 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Processing</div>
                                <div className="text-sm text-slate-600">1-3 business days</div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Shield className="w-8 h-8 text-purple-700 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Fully Insured</div>
                                <div className="text-sm text-slate-600">Every shipment</div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
                            <p>
                                The $99 free shipping threshold is Bold&apos;s standout feature. For stackers making regular smaller purchases, this can save significant money over time. Processing times are standard at 1-3 business days, and all shipments are fully insured.
                            </p>

                            <h2>Customer Service</h2>
                            <p>
                                Bold Precious Metals offers customer support via phone and email. Reviews are generally positive, with customers praising reliable fulfillment and responsive service. As a smaller dealer, they can often provide more personalized attention.
                            </p>

                            <h2>IRA Services</h2>
                            <p>
                                Bold sells IRA-eligible products but partners with third-party custodians for retirement account setup. This is typical for direct dealers.
                            </p>

                            <div className="bg-amber-900/20 border border-[#B22234]/30 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">For Silver IRA Accounts</h4>
                                        <p className="text-slate-600 text-sm mb-4">
                                            Bold Precious Metals is great for small direct purchases, but for Silver IRAs, you want a specialist. <strong>Augusta Precious Metals</strong> focuses exclusively on precious metals retirement accounts with dedicated support and lifetime customer service.
                                        </p>
                                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="sm" asChild>
                                            <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <h2>Final Verdict</h2>
                            <p>
                                <strong>Bold Precious Metals</strong> fills an important niche for small-budget stackers and those who prefer making frequent smaller purchases. Their $99 free shipping threshold is the lowest in the industry, and combined with no minimum order, they make precious metals accessible to everyone.
                            </p>
                            <p>
                                For large orders, dealers like SD Bullion or JM Bullion may offer better premiums. But for orders in the $99-$200 range, Bold often comes out ahead when you factor in shipping costs.
                            </p>
                            <p>
                                <strong>Best for:</strong> Small-budget stackers, frequent small purchasers, and anyone who wants free shipping on smaller orders.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Is Bold Precious Metals legitimate?</h3>
                                    <p className="text-slate-600">Yes, Bold Precious Metals is a legitimate precious metals dealer. Founded in 2014, they have built a solid reputation with positive customer reviews and reliable service.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">What is Bold Precious Metals&apos; minimum order?</h3>
                                    <p className="text-slate-600">Bold Precious Metals has no minimum order requirement. You can purchase as little as a single silver coin.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">When does Bold Precious Metals offer free shipping?</h3>
                                    <p className="text-slate-600">Bold Precious Metals offers free shipping on orders of $99 or more&mdash;the lowest threshold among major dealers.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">How are Bold Precious Metals&apos; prices?</h3>
                                    <p className="text-slate-600">Bold offers competitive pricing, though not always the absolute lowest. Their value is the combination of good prices with no minimum and low free shipping threshold.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does Bold Precious Metals offer Silver IRA services?</h3>
                                    <p className="text-slate-600">Bold sells IRA-eligible products but works with partner custodians for IRA setup. For dedicated IRA services, Augusta Precious Metals is recommended.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">Bold Precious Metals Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Our Rating</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                            <span className="text-slate-900 font-bold">4.3/5</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Founded</span>
                                        <span className="text-slate-900 font-bold">2014</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Min Order</span>
                                        <span className="text-green-700 font-bold">None</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Free Shipping</span>
                                        <span className="text-orange-400 font-bold">$99+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Best For</span>
                                        <span className="text-slate-900 font-bold">Small Orders</span>
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
                            <AugustaCTA variant="sidebar" linkContext="silver" trackSource="bold-precious-metals-review-sidebar" />
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
                        trackSource="bold-precious-metals-review-footer"
                        headline="Want Silver in Your IRA?"
                        subheadline="Bold Precious Metals is great for small direct purchases, but for Silver IRAs, Augusta Precious Metals offers dedicated account managers and lifetime support."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
