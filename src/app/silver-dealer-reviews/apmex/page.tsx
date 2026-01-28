import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ProsCons } from "@/components/reviews/ProsCons";
import { Star, Shield, Truck, DollarSign, Award, ArrowRight, Package, Clock, Phone, Info, CheckCircle, Users } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "APMEX Review 2026: Honest Analysis of America's Largest Silver Dealer",
    description: "APMEX silver review. Is America's largest online precious metals dealer worth the higher premiums? We analyze their selection, pricing, shipping, and IRA services.",
    keywords: ["apmex silver", "apmex review", "apmex reviews", "is apmex legit", "apmex silver coins", "buy silver apmex"],
    openGraph: {
        title: "APMEX Review 2026: Complete Silver Dealer Analysis",
        description: "In-depth APMEX review covering selection, pricing, shipping, and customer service.",
        type: "article",
    },
};

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "APMEX",
        "description": "America's largest online precious metals dealer specializing in gold, silver, platinum, and palladium products.",
        "foundingDate": "2000",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oklahoma City",
            "addressRegion": "OK",
            "addressCountry": "US"
        }
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.7,
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
            "name": "Is APMEX a legitimate silver dealer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, APMEX is one of the most established and reputable precious metals dealers in the United States. Founded in 2000, they have an A+ BBB rating and have served millions of customers. They are headquartered in Oklahoma City with a 50,000+ square foot facility."
            }
        },
        {
            "@type": "Question",
            "name": "Does APMEX have good prices on silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "APMEX prices tend to be slightly higher than discount dealers like SD Bullion or JM Bullion. However, APMEX justifies this with the largest selection in the industry, excellent customer service, and reliable fulfillment. For rare or hard-to-find silver products, APMEX often has the best availability."
            }
        },
        {
            "@type": "Question",
            "name": "Does APMEX offer IRA services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "APMEX sells IRA-eligible precious metals products, but they partner with third-party custodians for IRA administration. For a more integrated Silver IRA experience with dedicated support, consider specialists like Augusta Precious Metals."
            }
        },
        {
            "@type": "Question",
            "name": "How fast does APMEX ship silver orders?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "APMEX typically processes orders within 1-3 business days. Once shipped, delivery usually takes 3-5 business days via insured carriers. Free shipping is available on orders over $199."
            }
        },
        {
            "@type": "Question",
            "name": "Does APMEX buy back silver?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, APMEX has a buyback program where they purchase precious metals from customers. They typically pay competitive rates near spot price for standard bullion products."
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

export default function APMEXReviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaScript schema={reviewSchema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-slate-50 text-slate-900 py-16 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-600/20 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-slate-600 text-sm font-bold uppercase tracking-wider mb-4">
                            <Link href="/silver-dealer-reviews" className="hover:text-slate-900 transition-colors">Silver Dealer Reviews</Link>
                            <span>/</span>
                            <span>APMEX</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            APMEX Review 2026: <br />
                            <span className="text-slate-600">America&apos;s Largest Silver Dealer</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
                            With 20,000+ products and 24 years in business, APMEX is the Walmart of precious metals. But are their premiums worth it? We dig into the details.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <StarRating rating={4.7} />
                            <div className="flex items-center gap-2 text-slate-600">
                                <Users className="w-4 h-4" />
                                <span className="text-sm">8,800 monthly searches</span>
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
                                <div className="flex items-center gap-2 text-[#B22234] font-semibold text-sm mb-2">
                                    <Award className="w-4 h-4" />
                                    THE VERDICT
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Best for Selection, Not Price</h2>
                                <p className="text-slate-600">
                                    APMEX is the undisputed king of selection. If you want variety, rare coins, or hard-to-find items, APMEX is unmatched. However, their premiums are typically 3-7% higher than discount competitors. For straightforward silver stacking, consider JM Bullion or SD Bullion. For Silver IRAs, Augusta Precious Metals offers a more comprehensive experience.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-slate-900 mb-2">4.7</div>
                                <StarRating rating={4.7} />
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
                                <strong>APMEX</strong> (American Precious Metals Exchange) was founded in 2000 and is headquartered in Oklahoma City. They operate from a 50,000+ square foot facility and have served over 1.5 million customers since inception.
                            </p>
                            <p>
                                What sets APMEX apart is their massive product catalog. With over 20,000 different precious metals products, they offer everything from basic silver rounds to rare numismatic coins. If it is made of gold, silver, platinum, or palladium, chances are APMEX stocks it.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">2000</div>
                                    <div className="text-sm text-slate-600">Year Founded</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">A+</div>
                                    <div className="text-sm text-slate-600">BBB Rating</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#B22234]">20,000+</div>
                                    <div className="text-sm text-slate-600">Products</div>
                                </div>
                            </div>

                            <h2>Pros and Cons</h2>
                        </div>

                        <ProsCons
                            pros={[
                                "Largest product selection in the industry (20,000+ items)",
                                "Established reputation with 24 years in business",
                                "A+ BBB rating with minimal complaints",
                                "IRA-eligible products available",
                                "Excellent website with detailed product information",
                                "Secure checkout and insured shipping",
                                "Strong buyback program"
                            ]}
                            cons={[
                                "Higher premiums than discount competitors",
                                "Can be overwhelming for beginners",
                                "IRA services through third-party partners",
                                "Customer service wait times during busy periods"
                            ]}
                        />

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">

                            <h2>Pricing & Premiums</h2>
                            <p>
                                Let us be direct: APMEX is <strong>not the cheapest option</strong>. Their premiums on common silver products like American Silver Eagles or generic rounds typically run 3-7% higher than competitors like SD Bullion or JM Bullion.
                            </p>
                            <p>
                                However, APMEX justifies higher prices with:
                            </p>
                            <ul>
                                <li>Unmatched product variety and availability</li>
                                <li>Rigorous authentication for all products</li>
                                <li>Detailed product descriptions and photos</li>
                                <li>Reliable inventory on popular items</li>
                            </ul>
                            <p>
                                For budget-conscious stackers buying common bullion, other dealers offer better value. But for collectors seeking specific coins or varieties, APMEX often has items no one else stocks.
                            </p>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Info className="w-5 h-5 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Premium Comparison (Approximate)</h4>
                                        <p className="text-sm text-slate-600 mb-4">
                                            Example: American Silver Eagle premiums over spot
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-slate-600">APMEX:</span>
                                                <span className="text-slate-900 font-semibold ml-2">$6-8 over spot</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-600">JM Bullion:</span>
                                                <span className="text-slate-900 font-semibold ml-2">$5-7 over spot</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-600">SD Bullion:</span>
                                                <span className="text-slate-900 font-semibold ml-2">$4-6 over spot</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-600">Hero Bullion:</span>
                                                <span className="text-slate-900 font-semibold ml-2">$5-7 over spot</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2>Product Selection</h2>
                            <p>
                                This is where APMEX truly shines. Their silver inventory includes:
                            </p>
                            <ul>
                                <li><strong>Government Coins:</strong> American Eagles, Canadian Maple Leafs, Austrian Philharmonics, British Britannias, and dozens more from mints worldwide</li>
                                <li><strong>Silver Rounds:</strong> Generic rounds, branded rounds, and specialty designs</li>
                                <li><strong>Silver Bars:</strong> From 1 oz to 100 oz bars from major refiners</li>
                                <li><strong>Junk Silver:</strong> Pre-1965 US coins, 90% silver bags</li>
                                <li><strong>Rare Coins:</strong> Numismatic pieces, limited editions, graded coins</li>
                                <li><strong>IRA-Eligible:</strong> Products meeting IRS purity requirements</li>
                            </ul>
                            <p>
                                Whether you collect World coins, want specific mint years, or need a bulk order of generic silver, APMEX likely has it in stock.
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
                                <div className="font-bold text-slate-900 mb-1">Processing</div>
                                <div className="text-sm text-slate-600">1-3 business days</div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                <div className="font-bold text-slate-900 mb-1">Fully Insured</div>
                                <div className="text-sm text-slate-600">Every shipment</div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-[#B22234]">
                            <p>
                                APMEX ships via UPS with full insurance. Orders over $199 qualify for free shipping. Most orders ship within 1-3 business days, with delivery in 3-5 days depending on location. Discreet packaging ensures no one knows what is inside.
                            </p>

                            <h2>Buyback Program</h2>
                            <p>
                                APMEX offers a competitive buyback program. They will purchase back precious metals you previously bought or acquired elsewhere. Prices are typically near spot for standard bullion, with premiums for rare or collectible pieces.
                            </p>
                            <p>
                                The process is straightforward: get a quote online, ship your metals, receive payment once verified. APMEX pays via check or ACH transfer.
                            </p>

                            <h2>Customer Service</h2>
                            <p>
                                APMEX offers phone support (800-375-9006), email, and live chat during business hours. Reviews generally praise their knowledgeable staff, though wait times can be long during market volatility or sales events.
                            </p>

                            <h2>IRA Services</h2>
                            <p>
                                APMEX sells plenty of IRA-eligible silver products, but they are not an IRA custodian themselves. They partner with third-party custodians like Equity Trust and GoldStar Trust to facilitate precious metals IRAs.
                            </p>

                            <div className="bg-amber-900/20 border border-[#B22234]/30 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-[#B22234] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">For Silver IRA Accounts</h4>
                                        <p className="text-slate-600 text-sm mb-4">
                                            If your primary goal is a Silver IRA, consider working with a company that specializes in precious metals retirement accounts. <strong>Augusta Precious Metals</strong> offers an education-first approach with lifetime customer support, making the IRA setup process much smoother than coordinating between a dealer and separate custodian.
                                        </p>
                                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="sm" asChild>
                                            <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <h2>Final Verdict</h2>
                            <p>
                                <strong>APMEX</strong> is the gold standard (pun intended) for product selection. If you need variety, rare items, or just want to browse the largest catalog in the industry, APMEX delivers.
                            </p>
                            <p>
                                However, if you are simply stacking common silver bullion and want the best price per ounce, consider SD Bullion or JM Bullion instead. And for Silver IRA accounts, specialized providers like Augusta Precious Metals offer a more integrated experience.
                            </p>
                            <p>
                                <strong>Best for:</strong> Collectors, variety seekers, and anyone who values selection over price.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Is APMEX a legitimate silver dealer?</h3>
                                    <p className="text-slate-600">Yes, APMEX is one of the most established and reputable precious metals dealers in the United States. Founded in 2000, they have an A+ BBB rating and have served millions of customers.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does APMEX have good prices on silver?</h3>
                                    <p className="text-slate-600">APMEX prices tend to be slightly higher than discount dealers like SD Bullion or JM Bullion. However, APMEX justifies this with the largest selection in the industry and excellent customer service.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does APMEX offer IRA services?</h3>
                                    <p className="text-slate-600">APMEX sells IRA-eligible precious metals products, but they partner with third-party custodians for IRA administration. For a more integrated Silver IRA experience, consider specialists like Augusta Precious Metals.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">How fast does APMEX ship silver orders?</h3>
                                    <p className="text-slate-600">APMEX typically processes orders within 1-3 business days. Once shipped, delivery usually takes 3-5 business days via insured carriers. Free shipping is available on orders over $199.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Does APMEX buy back silver?</h3>
                                    <p className="text-slate-600">Yes, APMEX has a buyback program where they purchase precious metals from customers. They typically pay competitive rates near spot price for standard bullion products.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">APMEX Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Our Rating</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-[#B22234] fill-[#B22234]" />
                                            <span className="text-slate-900 font-bold">4.7/5</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">BBB Rating</span>
                                        <span className="text-slate-900 font-bold">A+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Founded</span>
                                        <span className="text-slate-900 font-bold">2000</span>
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
                                        <span className="text-slate-600">Products</span>
                                        <span className="text-slate-900 font-bold">20,000+</span>
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
                            <AugustaCTA variant="sidebar" linkContext="silver" trackSource="apmex-review-sidebar" />
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
                        trackSource="apmex-review-footer"
                        headline="Want Silver in Your IRA?"
                        subheadline="While APMEX is great for direct purchases, Augusta Precious Metals specializes in Silver IRAs with dedicated account managers and lifetime support."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
