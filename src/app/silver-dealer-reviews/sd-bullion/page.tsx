import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ProsCons } from "@/components/reviews/ProsCons";
import { Star, Shield, Truck, Clock, Award, ArrowRight, Info, CheckCircle, Users, DollarSign, Percent } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SD Bullion Review 2026: Lowest Premiums on Silver?",
    description: "SD Bullion reviews and analysis. Known for the lowest premiums in the industry. Is their pricing too good to be true? Complete review of pricing, shipping, and service.",
    keywords: ["sd bullion reviews", "sd bullion review", "is sd bullion legit", "sd bullion silver", "sd bullion pricing"],
    openGraph: {
        title: "SD Bullion Review 2026: Complete Silver Dealer Analysis",
        description: "In-depth SD Bullion review. Are they really the lowest-priced silver dealer?",
        type: "article",
    },
};

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "SD Bullion",
        "description": "Online precious metals dealer known for having the lowest premiums in the industry.",
        "foundingDate": "2012",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Addison",
            "addressRegion": "TX",
            "addressCountry": "US"
        }
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.6,
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
            "name": "Is SD Bullion legitimate?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, SD Bullion is a legitimate and reputable precious metals dealer. Founded in 2012, they have an A+ BBB rating and thousands of satisfied customers. They are known for having some of the lowest premiums in the industry."
            }
        },
        {
            "@type": "Question",
            "name": "Does SD Bullion have the lowest prices on silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SD Bullion consistently offers some of the lowest premiums on silver products in the industry. They are often cheaper than APMEX and JM Bullion, especially on popular bullion items. They also offer a price match guarantee."
            }
        },
        {
            "@type": "Question",
            "name": "Does SD Bullion charge credit card fees?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unlike many competitors, SD Bullion does not charge additional fees for credit card payments on many products. This can save 3-4% compared to dealers who add credit card surcharges."
            }
        },
        {
            "@type": "Question",
            "name": "How is SD Bullion's shipping?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SD Bullion offers free shipping on orders over $199. Processing typically takes 1-5 business days depending on payment method. All orders are shipped fully insured with discreet packaging."
            }
        },
        {
            "@type": "Question",
            "name": "Does SD Bullion offer Silver IRA services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SD Bullion sells IRA-eligible silver products but works with third-party custodians for IRA administration. For dedicated IRA services with integrated support, consider Augusta Precious Metals."
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

export default function SDBullionReviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={reviewSchema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-16 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-600/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-slate-600 text-sm font-bold uppercase tracking-wider mb-4">
                            <Link href="/silver-dealer-reviews" className="hover:text-slate-900 transition-colors">Silver Dealer Reviews</Link>
                            <span>/</span>
                            <span>SD Bullion</span>
                        </div>
                        <div className="inline-block bg-green-500/20 text-green-700 text-sm font-bold px-3 py-1 rounded-full mb-4 border border-green-500/30">
                            High CPC Keyword: $1.90
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            SD Bullion Review 2026: <br />
                            <span className="text-slate-600">Lowest Premiums in the Industry?</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
                            Budget-conscious stackers swear by SD Bullion. They claim the lowest premiums in the business. We verify whether the pricing hype is real.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <StarRating rating={4.6} />
                            <div className="flex items-center gap-2 text-slate-600">
                                <Users className="w-4 h-4" />
                                <span className="text-sm">1,100 monthly searches</span>
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
                                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-2">
                                    <DollarSign className="w-4 h-4" />
                                    BEST FOR BUDGET STACKERS
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Lowest Premiums Verified</h2>
                                <p className="text-slate-600">
                                    SD Bullion lives up to their reputation. They consistently offer the lowest premiums on common silver products like American Eagles, generic rounds, and bars. Add in their no-credit-card-fee policy on many products, and they are hard to beat on price. Trade-off? Slightly less polished website and customer experience compared to JM Bullion. For Silver IRAs, Augusta Precious Metals remains our top choice.
                                </p>
                            </div>
                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-slate-900 mb-2">4.6</div>
                                <StarRating rating={4.6} />
                                <div className="mt-4 pt-4 border-t border-green-500/30">
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
                                <strong>SD Bullion</strong> was founded in 2012 with a simple mission: offer the lowest premiums on precious metals. Based in Addison, Texas, they have built a loyal following among budget-conscious silver stackers who prioritize price over frills.
                            </p>
                            <p>
                                Their approach is straightforward: keep overhead low, pass savings to customers. The website is functional but not flashy. Customer service is adequate but not exceptional. What they deliver is value&mdash;and lots of it.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">2012</div>
                                    <div className="text-sm text-slate-600">Year Founded</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">A+</div>
                                    <div className="text-sm text-slate-600">BBB Rating</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-green-700">Lowest</div>
                                    <div className="text-sm text-slate-600">Industry Premiums</div>
                                </div>
                            </div>

                            <h2>Pros and Cons</h2>
                        </div>

                        <ProsCons
                            pros={[
                                "Lowest premiums in the industry on common silver",
                                "No credit card fees on many products",
                                "Price match guarantee",
                                "A+ BBB rating",
                                "Good selection of IRA-eligible products",
                                "Free shipping over $199",
                                "Transparent pricing with no hidden fees"
                            ]}
                            cons={[
                                "Less polished website experience",
                                "Customer service can be slower",
                                "Smaller selection than APMEX",
                                "IRA services through third parties"
                            ]}
                        />

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">

                            <h2>Pricing & Premiums</h2>
                            <p>
                                This is where SD Bullion shines. Their premiums are consistently <strong>the lowest in the industry</strong> on popular silver products. On American Silver Eagles alone, you can save $1-3 per coin compared to APMEX.
                            </p>

                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Percent className="w-5 h-5 text-green-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Real Price Comparison</h4>
                                        <p className="text-sm text-slate-600 mb-4">
                                            Based on our price checks (premiums over spot on Silver Eagles):
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-700 font-semibold">SD Bullion:</span>
                                                <span className="text-slate-900 font-bold">$4-5 over spot</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">JM Bullion:</span>
                                                <span className="text-slate-900">$5-7 over spot</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">APMEX:</span>
                                                <span className="text-slate-900">$6-8 over spot</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-600 mt-4">
                                            *Prices fluctuate. Check current pricing before purchasing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Key pricing advantages include:
                            </p>
                            <ul>
                                <li><strong>No Credit Card Fees:</strong> Many products have the same price regardless of payment method</li>
                                <li><strong>Price Match Guarantee:</strong> They will match verified lower prices from competitors</li>
                                <li><strong>Bulk Discounts:</strong> Additional savings on larger orders</li>
                                <li><strong>Deal Section:</strong> Regular specials and closeout items</li>
                            </ul>

                            <h2>Product Selection</h2>
                            <p>
                                SD Bullion offers a solid selection covering all major silver categories, though not as vast as APMEX:
                            </p>
                            <ul>
                                <li><strong>Government Coins:</strong> American Eagles, Canadian Maple Leafs, and other sovereign mint products</li>
                                <li><strong>Silver Rounds:</strong> Generic and branded rounds at low premiums</li>
                                <li><strong>Silver Bars:</strong> From 1 oz to 100 oz from major mints</li>
                                <li><strong>Junk Silver:</strong> Pre-1965 constitutional silver coins</li>
                                <li><strong>IRA-Eligible:</strong> Products meeting IRS purity requirements</li>
                            </ul>
                            <p>
                                For stackers focused on common bullion, SD Bullion has everything needed. Collectors seeking rare or numismatic pieces should look elsewhere.
                            </p>

                            <h2>Shipping & Delivery</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 my-8">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Truck className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Free Shipping</div>
                                <div className="text-sm text-slate-600">Orders over $199</div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Clock className="w-8 h-8 text-green-700 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Processing</div>
                                <div className="text-sm text-slate-600">1-5 business days</div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Shield className="w-8 h-8 text-purple-700 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Fully Insured</div>
                                <div className="text-sm text-slate-600">Every shipment</div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
                            <p>
                                Shipping is reliable with SD Bullion. Free shipping kicks in at $199, matching industry standards. Processing can take 1-5 business days depending on payment method (wires clear faster than checks). All shipments are fully insured and discretely packaged.
                            </p>

                            <h2>Buyback Program</h2>
                            <p>
                                SD Bullion does offer buyback services, though it is not as streamlined as JM Bullion&apos;s program. You will need to contact them for a quote. Prices are typically competitive with other major dealers.
                            </p>

                            <h2>Customer Service</h2>
                            <p>
                                This is where SD Bullion shows their no-frills approach. Customer service is available via phone and email, but response times can be slower than competitors. Reviews are generally positive, though some customers note longer wait times during busy periods.
                            </p>
                            <p>
                                If premium customer service is important to you, JM Bullion may be a better fit. If you prioritize lowest price and can handle a more basic support experience, SD Bullion delivers value.
                            </p>

                            <h2>IRA Services</h2>
                            <p>
                                SD Bullion offers IRA-eligible silver products and can facilitate purchases for precious metals IRAs through partner custodians. However, this is not their specialty.
                            </p>

                            <div className="bg-amber-900/20 border border-[#B22234]/30 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">For Silver IRA Accounts</h4>
                                        <p className="text-slate-600 text-sm mb-4">
                                            SD Bullion&apos;s low prices are great for direct purchases, but for Silver IRAs, you want a specialist. <strong>Augusta Precious Metals</strong> provides dedicated IRA support, education-first approach, and lifetime customer service that makes retirement account setup seamless.
                                        </p>
                                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="sm" asChild>
                                            <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <h2>Final Verdict</h2>
                            <p>
                                <strong>SD Bullion</strong> delivers exactly what they promise: the lowest premiums on common silver products. If you are a budget-conscious stacker who prioritizes getting the most ounces for your dollars, SD Bullion is hard to beat.
                            </p>
                            <p>
                                Trade-offs include a less polished website and customer experience. If you want the best blend of price and service, JM Bullion edges them out. For Silver IRAs, Augusta Precious Metals offers specialized support that neither can match.
                            </p>
                            <p>
                                <strong>Best for:</strong> Price-focused stackers who want maximum silver for minimum premium.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Is SD Bullion legitimate?</h3>
                                    <p className="text-slate-600">Yes, SD Bullion is a legitimate and reputable precious metals dealer. Founded in 2012, they have an A+ BBB rating and thousands of satisfied customers.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does SD Bullion have the lowest prices on silver?</h3>
                                    <p className="text-slate-600">SD Bullion consistently offers some of the lowest premiums on silver products in the industry. They are often cheaper than APMEX and JM Bullion on popular bullion items.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does SD Bullion charge credit card fees?</h3>
                                    <p className="text-slate-600">Unlike many competitors, SD Bullion does not charge additional fees for credit card payments on many products. This can save 3-4% compared to dealers who add surcharges.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">How is SD Bullion&apos;s shipping?</h3>
                                    <p className="text-slate-600">SD Bullion offers free shipping on orders over $199. Processing typically takes 1-5 business days depending on payment method. All orders are shipped fully insured.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does SD Bullion offer Silver IRA services?</h3>
                                    <p className="text-slate-600">SD Bullion sells IRA-eligible silver products but works with third-party custodians for IRA administration. For dedicated IRA services, consider Augusta Precious Metals.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">SD Bullion Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Our Rating</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                            <span className="text-slate-900 font-bold">4.6/5</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">BBB Rating</span>
                                        <span className="text-slate-900 font-bold">A+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Founded</span>
                                        <span className="text-slate-900 font-bold">2012</span>
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
                                        <span className="text-slate-600">CC Fees</span>
                                        <span className="text-green-700 font-bold">Often None</span>
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
                                    <Link href="/silver-dealer-reviews/money-metals-exchange" className="flex justify-between items-center text-sm hover:bg-slate-50 p-2 rounded transition-colors">
                                        <span className="text-slate-600">Money Metals</span>
                                        <span className="text-[#B22234] flex items-center gap-1"><Star className="w-3 h-3 fill-[#B22234]" /> 4.5</span>
                                    </Link>
                                    <Link href="/silver-dealer-reviews/hero-bullion" className="flex justify-between items-center text-sm hover:bg-slate-50 p-2 rounded transition-colors">
                                        <span className="text-slate-600">Hero Bullion</span>
                                        <span className="text-[#B22234] flex items-center gap-1"><Star className="w-3 h-3 fill-[#B22234]" /> 4.4</span>
                                    </Link>
                                </div>
                                <Link href="/silver-dealer-reviews/comparison" className="block mt-4 text-center text-[#B22234] text-sm font-semibold hover:text-[#B22234] transition-colors">
                                    View Full Comparison
                                </Link>
                            </div>

                            {/* Augusta CTA */}
                            <AugustaCTA variant="sidebar" linkContext="silver" trackSource="sd-bullion-review-sidebar" />
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
                        trackSource="sd-bullion-review-footer"
                        headline="Want Silver in Your IRA?"
                        subheadline="SD Bullion has great prices for direct purchases, but for Silver IRAs, Augusta Precious Metals offers dedicated account managers and lifetime support."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
