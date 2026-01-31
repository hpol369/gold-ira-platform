import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ProsCons } from "@/components/reviews/ProsCons";
import { Star, Shield, Truck, Clock, Award, ArrowRight, Info, CheckCircle, Users, RefreshCw, CreditCard } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "JM Bullion Review 2026: Best Overall Silver Dealer?",
    description: "JM Bullion reviews and analysis. Discover why JM Bullion is consistently rated one of the best online silver dealers. Pricing, shipping, buyback program review.",
    keywords: ["jm bullion reviews", "jm bullion review", "is jm bullion legit", "jm bullion silver", "jm bullion shipping"],
    openGraph: {
        title: "JM Bullion Review 2026: Complete Silver Dealer Analysis",
        description: "In-depth JM Bullion review covering pricing, shipping, customer service, and buyback program.",
        type: "article",
    },
};

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "JM Bullion",
        "description": "One of the largest and most trusted online precious metals dealers in the United States.",
        "foundingDate": "2011",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "addressCountry": "US"
        }
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.8,
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
            "name": "Is JM Bullion legitimate and trustworthy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, JM Bullion is one of the most trusted precious metals dealers in the United States. Founded in 2011, they have an A+ BBB rating with thousands of positive reviews. They are headquartered in Dallas, Texas."
            }
        },
        {
            "@type": "Question",
            "name": "How are JM Bullion's prices compared to other dealers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "JM Bullion offers very competitive pricing, typically lower than APMEX and comparable to SD Bullion. They frequently run sales and special promotions. Their prices are transparent with no hidden fees."
            }
        },
        {
            "@type": "Question",
            "name": "Does JM Bullion have a buyback program?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, JM Bullion has one of the best buyback programs in the industry. They offer competitive prices on precious metals and make the selling process straightforward. You can get a quote online before committing."
            }
        },
        {
            "@type": "Question",
            "name": "How fast does JM Bullion ship orders?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "JM Bullion typically ships orders within 1-3 business days of payment clearing. Free shipping is available on orders over $199. All shipments are fully insured and discretely packaged."
            }
        },
        {
            "@type": "Question",
            "name": "Does JM Bullion offer Silver IRA services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "JM Bullion sells IRA-eligible products but partners with third-party custodians for IRA administration. For a more integrated IRA experience with dedicated support, Augusta Precious Metals is recommended."
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

export default function JMBullionReviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={reviewSchema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-16 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-slate-600 text-sm font-bold uppercase tracking-wider mb-4">
                            <Link href="/silver-dealer-reviews" className="hover:text-slate-900 transition-colors">Silver Dealer Reviews</Link>
                            <span>/</span>
                            <span>JM Bullion</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            JM Bullion Review 2026: <br />
                            <span className="text-slate-600">Best Overall Experience?</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
                            Competitive pricing, fast shipping, excellent customer service, and a strong buyback program. JM Bullion checks all the boxes for serious silver stackers.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <StarRating rating={4.8} />
                            <div className="flex items-center gap-2 text-slate-600">
                                <Users className="w-4 h-4" />
                                <span className="text-sm">1,500 monthly searches</span>
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
                                    <Award className="w-4 h-4" />
                                    EDITOR&apos;S CHOICE
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Best Overall Silver Dealer</h2>
                                <p className="text-slate-600">
                                    JM Bullion delivers the perfect balance of competitive pricing, excellent selection, fast shipping, and top-tier customer service. Their buyback program is among the best in the industry, and their website experience is smooth. For direct silver purchases, they are our top pick. For Silver IRAs, we recommend Augusta Precious Metals.
                                </p>
                            </div>
                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-slate-900 mb-2">4.8</div>
                                <StarRating rating={4.8} />
                                <div className="mt-4 pt-4 border-t border-green-500/30">
                                    <div className="flex items-center justify-center gap-2 text-green-700">
                                        <CheckCircle className="w-5 h-5" />
                                        <span className="font-semibold">Highly Recommended</span>
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
                                <strong>JM Bullion</strong> was founded in 2011 and has quickly become one of the most trusted names in online precious metals. Based in Dallas, Texas, they have built a reputation for competitive pricing, excellent customer service, and reliable fulfillment.
                            </p>
                            <p>
                                Unlike some competitors who prioritize volume over experience, JM Bullion focuses on making the buying process as smooth as possible. Their website is clean and intuitive, product descriptions are thorough, and checkout is straightforward.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">2011</div>
                                    <div className="text-sm text-slate-600">Year Founded</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">A+</div>
                                    <div className="text-sm text-slate-600">BBB Rating</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">Thousands</div>
                                    <div className="text-sm text-slate-600">5-Star Reviews</div>
                                </div>
                            </div>

                            <h2>Pros and Cons</h2>
                        </div>

                        <ProsCons
                            pros={[
                                "Competitive pricing on silver products",
                                "Fast shipping with free delivery over $199",
                                "Excellent customer service and support",
                                "Strong buyback program with fair prices",
                                "Clean, easy-to-use website",
                                "Wide selection of IRA-eligible products",
                                "Price match guarantee on identical products"
                            ]}
                            cons={[
                                "Selection smaller than APMEX",
                                "Credit card payments incur fees",
                                "IRA services through third-party partners"
                            ]}
                        />

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">

                            <h2>Pricing & Premiums</h2>
                            <p>
                                JM Bullion consistently offers <strong>competitive pricing</strong> on silver products. Their premiums are typically lower than APMEX and comparable to discount leaders like SD Bullion.
                            </p>
                            <p>
                                Key pricing features include:
                            </p>
                            <ul>
                                <li><strong>Price Match Guarantee:</strong> They will match lower prices from major competitors</li>
                                <li><strong>Bulk Discounts:</strong> Better pricing on larger quantities</li>
                                <li><strong>Regular Sales:</strong> Frequent promotions and deals</li>
                                <li><strong>No Hidden Fees:</strong> Transparent pricing throughout</li>
                            </ul>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <CreditCard className="w-5 h-5 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Payment Methods</h4>
                                        <p className="text-sm text-slate-600 mb-4">
                                            JM Bullion accepts multiple payment methods with different pricing:
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-green-700 font-semibold">Bank Wire:</span>
                                                <span className="text-slate-900 ml-2">Best price (no fee)</span>
                                            </div>
                                            <div>
                                                <span className="text-green-700 font-semibold">Check:</span>
                                                <span className="text-slate-900 ml-2">Best price (no fee)</span>
                                            </div>
                                            <div>
                                                <span className="text-[#B22234] font-semibold">PayPal:</span>
                                                <span className="text-slate-900 ml-2">Slight premium</span>
                                            </div>
                                            <div>
                                                <span className="text-[#B22234] font-semibold">Credit Card:</span>
                                                <span className="text-slate-900 ml-2">~4% fee</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2>Product Selection</h2>
                            <p>
                                While not as vast as APMEX, JM Bullion offers an excellent selection covering all major silver categories:
                            </p>
                            <ul>
                                <li><strong>Government Coins:</strong> American Eagles, Canadian Maple Leafs, Austrian Philharmonics, and more</li>
                                <li><strong>Silver Rounds:</strong> Generic rounds and branded designs</li>
                                <li><strong>Silver Bars:</strong> From 1 oz to 100 oz bars from reputable mints</li>
                                <li><strong>Junk Silver:</strong> Pre-1965 US constitutional silver</li>
                                <li><strong>IRA-Eligible:</strong> Products meeting IRS requirements for retirement accounts</li>
                            </ul>
                            <p>
                                For most stackers, JM Bullion has everything you need. You only need a larger dealer like APMEX if you collect rare numismatic pieces.
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
                                <div className="font-bold text-slate-900 mb-1">Fast Processing</div>
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
                                JM Bullion excels at shipping. Orders typically process within 1-3 business days, with delivery in 3-5 business days. All shipments are fully insured and arrive in discreet packaging with no indication of contents.
                            </p>

                            <h2>Buyback Program</h2>
                            <p>
                                One of JM Bullion&apos;s strongest features is their <strong>excellent buyback program</strong>. Unlike some dealers who make selling back difficult, JM Bullion streamlines the process:
                            </p>
                            <ul>
                                <li>Get an instant quote online</li>
                                <li>Lock in your price before shipping</li>
                                <li>Receive payment quickly after verification</li>
                                <li>Competitive prices near spot for standard bullion</li>
                            </ul>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <RefreshCw className="w-5 h-5 text-green-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Why Buyback Programs Matter</h4>
                                        <p className="text-sm text-slate-600">
                                            A strong buyback program is essential for precious metals investors. It provides liquidity when you need it and demonstrates the dealer&apos;s confidence in their products. JM Bullion&apos;s willingness to buy back what they sell is a testament to their reputation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2>Customer Service</h2>
                            <p>
                                JM Bullion offers multiple support channels including phone (800-276-6508), email, and live chat. Response times are generally quick, and staff are knowledgeable about their products. Customer reviews consistently praise the helpful and patient service team.
                            </p>

                            <h2>IRA Services</h2>
                            <p>
                                JM Bullion sells IRA-eligible silver products but does not offer in-house IRA custodian services. They partner with third-party custodians for retirement accounts.
                            </p>

                            <div className="bg-amber-900/20 border border-[#B22234]/30 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">For Silver IRA Accounts</h4>
                                        <p className="text-slate-600 text-sm mb-4">
                                            JM Bullion is fantastic for direct silver purchases, but for Silver IRAs, consider working with a specialist. <strong>Augusta Precious Metals</strong> offers dedicated IRA support with lifetime customer service and an education-first approach that makes the process straightforward.
                                        </p>
                                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="sm" asChild>
                                            <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <h2>Final Verdict</h2>
                            <p>
                                <strong>JM Bullion</strong> earns our highest rating for online silver dealers. They deliver competitive pricing without sacrificing customer experience, offer fast and reliable shipping, and back it all up with an excellent buyback program.
                            </p>
                            <p>
                                If you want the best overall experience buying silver online, JM Bullion is our top recommendation. For Silver IRAs specifically, Augusta Precious Metals offers specialized services that make retirement account setup easier.
                            </p>
                            <p>
                                <strong>Best for:</strong> Most silver buyers who want the best balance of price, selection, service, and reliability.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Is JM Bullion legitimate and trustworthy?</h3>
                                    <p className="text-slate-600">Yes, JM Bullion is one of the most trusted precious metals dealers in the United States. Founded in 2011, they have an A+ BBB rating with thousands of positive reviews.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">How are JM Bullion&apos;s prices compared to other dealers?</h3>
                                    <p className="text-slate-600">JM Bullion offers very competitive pricing, typically lower than APMEX and comparable to SD Bullion. They frequently run sales and special promotions.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does JM Bullion have a buyback program?</h3>
                                    <p className="text-slate-600">Yes, JM Bullion has one of the best buyback programs in the industry. They offer competitive prices and make the selling process straightforward with instant online quotes.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">How fast does JM Bullion ship orders?</h3>
                                    <p className="text-slate-600">JM Bullion typically ships orders within 1-3 business days of payment clearing. Free shipping is available on orders over $199. All shipments are fully insured.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does JM Bullion offer Silver IRA services?</h3>
                                    <p className="text-slate-600">JM Bullion sells IRA-eligible products but partners with third-party custodians for IRA administration. For a more integrated IRA experience, Augusta Precious Metals is recommended.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">JM Bullion Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Our Rating</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                            <span className="text-slate-900 font-bold">4.8/5</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">BBB Rating</span>
                                        <span className="text-slate-900 font-bold">A+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Founded</span>
                                        <span className="text-slate-900 font-bold">2011</span>
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
                                        <span className="text-slate-600">Price Match</span>
                                        <span className="text-green-700 font-bold">Yes</span>
                                    </div>
                                </div>
                            </div>

                            {/* Other Dealers */}
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">Compare Other Dealers</h3>
                                <div className="space-y-3">
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
                            <AugustaCTA variant="sidebar" linkContext="silver" trackSource="jm-bullion-review-sidebar" />
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
                        trackSource="jm-bullion-review-footer"
                        headline="Want Silver in Your IRA?"
                        subheadline="JM Bullion excels at direct purchases, but for Silver IRAs, Augusta Precious Metals provides dedicated account managers and lifetime support."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
