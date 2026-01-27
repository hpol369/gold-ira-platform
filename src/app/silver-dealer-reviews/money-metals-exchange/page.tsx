import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ProsCons } from "@/components/reviews/ProsCons";
import { Star, Shield, Truck, Clock, Award, ArrowRight, CheckCircle, Users, Repeat, PiggyBank, Package } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Money Metals Exchange Review 2026: Best for Monthly Savings?",
    description: "Money Metals Exchange reviews. Investopedia's 'Best Overall' pick famous for Starter Portfolios and monthly accumulation programs. Complete review and analysis.",
    keywords: ["money metals exchange reviews", "money metals exchange review", "money metals depository", "money metals starter kit", "is money metals legit"],
    openGraph: {
        title: "Money Metals Exchange Review 2026: Complete Analysis",
        description: "In-depth Money Metals Exchange review. Are their monthly savings programs worth it?",
        type: "article",
    },
};

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Money Metals Exchange",
        "description": "Precious metals dealer known for Starter Portfolios and monthly accumulation programs. Named 'Best Overall' by Investopedia.",
        "foundingDate": "2010",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Eagle",
            "addressRegion": "ID",
            "addressCountry": "US"
        }
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.5,
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
            "name": "Is Money Metals Exchange legitimate?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Money Metals Exchange is a legitimate and well-respected precious metals dealer. Founded in 2010 and based in Idaho, they have an A+ BBB rating and were named 'Best Overall' precious metals dealer by Investopedia."
            }
        },
        {
            "@type": "Question",
            "name": "What are Money Metals Starter Portfolios?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Starter Portfolios are pre-assembled collections of gold, silver, platinum, and palladium that let beginners diversify across multiple metals in a single purchase. They range from a few hundred dollars to several thousand and are designed to remove the paralysis of choice for new investors."
            }
        },
        {
            "@type": "Question",
            "name": "Does Money Metals have a monthly savings program?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Money Metals offers a Monthly Savings Program where you can automatically purchase precious metals each month. You set your budget and preferred metals, and they handle the rest. This dollar-cost averaging approach is popular with long-term stackers."
            }
        },
        {
            "@type": "Question",
            "name": "What is the minimum order at Money Metals?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Money Metals Exchange has no minimum order requirement for direct purchases. You can buy as little as a single silver coin. This low barrier to entry makes them popular with beginners and small-budget investors."
            }
        },
        {
            "@type": "Question",
            "name": "Does Money Metals Exchange offer Silver IRA services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Money Metals can facilitate precious metals IRAs through partner custodians, but IRA services are not their primary focus. For dedicated Silver IRA support with integrated services, Augusta Precious Metals is recommended."
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
                            ? 'text-amber-400 fill-amber-400'
                            : star <= rating
                                ? 'text-amber-400 fill-amber-400/50'
                                : 'text-slate-600'
                        }`}
                />
            ))}
            <span className="ml-2 text-white font-bold">{rating}/5</span>
        </div>
    );
}

export default function MoneyMetalsExchangeReviewPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <SchemaScript schema={reviewSchema} />
            <SchemaScript schema={faqSchema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-16 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-bold uppercase tracking-wider mb-4">
                            <Link href="/silver-dealer-reviews" className="hover:text-white transition-colors">Silver Dealer Reviews</Link>
                            <span>/</span>
                            <span>Money Metals Exchange</span>
                        </div>
                        <div className="inline-block bg-amber-500/20 text-amber-400 text-sm font-bold px-3 py-1 rounded-full mb-4 border border-amber-500/30">
                            High CPC Keyword: $3.50
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Money Metals Exchange Review: <br />
                            <span className="text-slate-400">Investopedia&apos;s &quot;Best Overall&quot;?</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-6">
                            Named &quot;Best Overall&quot; by Investopedia and famous for their Starter Portfolios. We explore what makes them different and whether they deserve the hype.
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <StarRating rating={4.5} />
                            <div className="flex items-center gap-2 text-slate-400">
                                <Users className="w-4 h-4" />
                                <span className="text-sm">500 monthly searches</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Verdict Box */}
            <section className="py-8 bg-slate-800/50 border-b border-white/10">
                <Container>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
                                    <PiggyBank className="w-4 h-4" />
                                    BEST FOR BEGINNERS
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-white mb-4">Perfect Entry Point for New Stackers</h2>
                                <p className="text-slate-300">
                                    Money Metals Exchange excels at helping beginners get started with precious metals. Their Starter Portfolios remove decision paralysis, and the Monthly Savings Program enables consistent accumulation without large upfront investments. For experienced stackers seeking the lowest premiums, SD Bullion or JM Bullion may be better fits. For Silver IRAs, Augusta Precious Metals remains our top recommendation.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-white mb-2">4.5</div>
                                <StarRating rating={4.5} />
                                <div className="mt-4 pt-4 border-t border-white/10">
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
                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-amber-400">

                            <h2>Company Overview</h2>
                            <p>
                                <strong>Money Metals Exchange</strong> was founded in 2010 and is headquartered in Eagle, Idaho. They made waves when Investopedia named them &quot;Best Overall&quot; precious metals dealer&mdash;an accolade they proudly display.
                            </p>
                            <p>
                                What sets Money Metals apart is their focus on accessibility. No minimums, Starter Portfolios for beginners, and a Monthly Savings Program that lets anyone accumulate precious metals over time. They have carved a niche helping first-time buyers enter the market confidently.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-amber-400">2010</div>
                                    <div className="text-sm text-slate-400">Year Founded</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-amber-400">A+</div>
                                    <div className="text-sm text-slate-400">BBB Rating</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-amber-400">$0</div>
                                    <div className="text-sm text-slate-400">Minimum Order</div>
                                </div>
                            </div>

                            <h2>Pros and Cons</h2>
                        </div>

                        <ProsCons
                            pros={[
                                "No minimum order requirement",
                                "Starter Portfolios perfect for beginners",
                                "Monthly Savings Program for consistent accumulation",
                                "Named 'Best Overall' by Investopedia",
                                "Competitive, transparent pricing",
                                "Owns their own depository (Money Metals Depository)",
                                "A+ BBB rating"
                            ]}
                            cons={[
                                "IRA services are secondary focus",
                                "Higher shipping costs on small orders",
                                "Free shipping threshold ($500) higher than competitors",
                                "Premiums not as low as SD Bullion"
                            ]}
                        />

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-amber-400">

                            <h2>The Famous Starter Portfolios</h2>
                            <p>
                                Money Metals built their reputation on <strong>Starter Portfolios</strong>&mdash;pre-assembled collections that let first-time buyers diversify across gold, silver, platinum, and palladium in a single purchase.
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Package className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-2">What&apos;s in a Starter Portfolio?</h4>
                                        <p className="text-sm text-slate-400 mb-4">
                                            Starter Portfolios typically include a mix of:
                                        </p>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                Gold coins or bars
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                Silver rounds or coins
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                Platinum pieces (in larger portfolios)
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                Palladium pieces (in larger portfolios)
                                            </li>
                                        </ul>
                                        <p className="text-xs text-slate-500 mt-4">
                                            Portfolios range from a few hundred to several thousand dollars.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                For new investors, Starter Portfolios remove the paralysis of choice. Instead of agonizing over which coins or bars to buy, you get a curated mix. They update these portfolios based on market conditions.
                            </p>

                            <h2>Monthly Savings Program</h2>
                            <p>
                                Another standout feature is the <strong>Monthly Savings Program</strong>. You set a budget (as low as $100/month), choose your preferred metals allocation, and Money Metals automatically purchases for you each month.
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Repeat className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-2">Dollar-Cost Averaging Benefits</h4>
                                        <p className="text-sm text-slate-400">
                                            The Monthly Savings Program implements dollar-cost averaging: buying consistently regardless of price. When prices are high, you buy less metal. When prices are low, you buy more. Over time, this tends to smooth out market volatility and reduce the risk of buying at peaks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2>Pricing & Premiums</h2>
                            <p>
                                Money Metals offers <strong>competitive pricing</strong>, though not quite as aggressive as SD Bullion. Their premiums are transparent and regularly updated based on spot prices.
                            </p>
                            <p>
                                Key considerations:
                            </p>
                            <ul>
                                <li><strong>No Minimum:</strong> Buy as little as one coin</li>
                                <li><strong>Transparent Pricing:</strong> Real-time spot price tracking</li>
                                <li><strong>Shipping Costs:</strong> Can add up on small orders (free shipping at $500)</li>
                            </ul>

                            <h2>Product Selection</h2>
                            <p>
                                Money Metals offers a solid selection of silver products including:
                            </p>
                            <ul>
                                <li><strong>Government Coins:</strong> American Eagles, Canadian Maple Leafs, and more</li>
                                <li><strong>Silver Rounds:</strong> Generic and branded options</li>
                                <li><strong>Silver Bars:</strong> Various sizes from reputable mints</li>
                                <li><strong>Junk Silver:</strong> Constitutional silver coins</li>
                                <li><strong>Starter Portfolios:</strong> Their signature multi-metal bundles</li>
                            </ul>

                            <h2>Shipping & Delivery</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 my-8">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                <Truck className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="font-bold text-white mb-1">Free Shipping</div>
                                <div className="text-sm text-slate-400">Orders over $500</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                <div className="font-bold text-white mb-1">Processing</div>
                                <div className="text-sm text-slate-400">1-5 business days</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                <div className="font-bold text-white mb-1">Fully Insured</div>
                                <div className="text-sm text-slate-400">Every shipment</div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-amber-400">
                            <p>
                                The free shipping threshold of $500 is higher than competitors like JM Bullion ($199). For small orders, shipping costs can be a consideration. All shipments are fully insured and discretely packaged.
                            </p>

                            <h2>Money Metals Depository</h2>
                            <p>
                                Uniquely, Money Metals operates their own depository facility. If you prefer not to take physical delivery, you can store your metals securely with them. This is also useful for IRA accounts requiring third-party storage.
                            </p>

                            <h2>IRA Services</h2>
                            <p>
                                Money Metals can facilitate precious metals IRAs through partner custodians. However, this is not their core specialty&mdash;they are primarily a direct dealer focused on physical delivery.
                            </p>

                            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 my-8 not-prose">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-2">For Silver IRA Accounts</h4>
                                        <p className="text-slate-300 text-sm mb-4">
                                            If your primary goal is a Silver IRA, Money Metals can help but it is not their specialty. <strong>Augusta Precious Metals</strong> focuses exclusively on precious metals retirement accounts with dedicated support, education-first approach, and lifetime customer service.
                                        </p>
                                        <Button variant="gold" size="sm" asChild>
                                            <Link href="/quiz">Find Your Perfect IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <h2>Final Verdict</h2>
                            <p>
                                <strong>Money Metals Exchange</strong> earns its reputation as a beginner-friendly dealer. The Starter Portfolios and Monthly Savings Program are genuinely useful for new investors who feel overwhelmed by choices.
                            </p>
                            <p>
                                For experienced stackers seeking the absolute lowest premiums, SD Bullion or JM Bullion may be better options. For Silver IRAs specifically, Augusta Precious Metals provides more comprehensive support.
                            </p>
                            <p>
                                <strong>Best for:</strong> Beginners, small-budget investors, and anyone who values convenience over chasing the absolute lowest premiums.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-white mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">Is Money Metals Exchange legitimate?</h3>
                                    <p className="text-slate-400">Yes, Money Metals Exchange is a legitimate and well-respected precious metals dealer. Founded in 2010, they have an A+ BBB rating and were named &quot;Best Overall&quot; by Investopedia.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">What are Money Metals Starter Portfolios?</h3>
                                    <p className="text-slate-400">Starter Portfolios are pre-assembled collections of gold, silver, platinum, and palladium designed for beginners. They remove the paralysis of choice by providing a curated mix of metals in a single purchase.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">Does Money Metals have a monthly savings program?</h3>
                                    <p className="text-slate-400">Yes, Money Metals offers a Monthly Savings Program where you can automatically purchase precious metals each month starting from as low as $100/month.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">What is the minimum order at Money Metals?</h3>
                                    <p className="text-slate-400">Money Metals Exchange has no minimum order requirement. You can buy as little as a single silver coin, making them accessible to all budget levels.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-2">Does Money Metals Exchange offer Silver IRA services?</h3>
                                    <p className="text-slate-400">Money Metals can facilitate precious metals IRAs through partner custodians, but this is not their primary focus. For dedicated IRA support, consider Augusta Precious Metals.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-white mb-4">Money Metals Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Our Rating</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-white font-bold">4.5/5</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">BBB Rating</span>
                                        <span className="text-white font-bold">A+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Founded</span>
                                        <span className="text-white font-bold">2010</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Min Order</span>
                                        <span className="text-green-400 font-bold">None</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Free Shipping</span>
                                        <span className="text-white font-bold">$500+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Depository</span>
                                        <span className="text-green-400 font-bold">Yes</span>
                                    </div>
                                </div>
                            </div>

                            {/* Other Dealers */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-white mb-4">Compare Other Dealers</h3>
                                <div className="space-y-3">
                                    <Link href="/silver-dealer-reviews/jm-bullion" className="flex justify-between items-center text-sm hover:bg-white/5 p-2 rounded transition-colors">
                                        <span className="text-slate-300">JM Bullion</span>
                                        <span className="text-amber-400 flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400" /> 4.8</span>
                                    </Link>
                                    <Link href="/silver-dealer-reviews/apmex" className="flex justify-between items-center text-sm hover:bg-white/5 p-2 rounded transition-colors">
                                        <span className="text-slate-300">APMEX</span>
                                        <span className="text-amber-400 flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400" /> 4.7</span>
                                    </Link>
                                    <Link href="/silver-dealer-reviews/sd-bullion" className="flex justify-between items-center text-sm hover:bg-white/5 p-2 rounded transition-colors">
                                        <span className="text-slate-300">SD Bullion</span>
                                        <span className="text-amber-400 flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400" /> 4.6</span>
                                    </Link>
                                    <Link href="/silver-dealer-reviews/hero-bullion" className="flex justify-between items-center text-sm hover:bg-white/5 p-2 rounded transition-colors">
                                        <span className="text-slate-300">Hero Bullion</span>
                                        <span className="text-amber-400 flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400" /> 4.4</span>
                                    </Link>
                                </div>
                                <Link href="/silver-dealer-reviews/comparison" className="block mt-4 text-center text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors">
                                    View Full Comparison
                                </Link>
                            </div>

                            {/* Augusta CTA */}
                            <AugustaCTA variant="sidebar" linkContext="silver" trackSource="money-metals-review-sidebar" />
                        </div>
                    </aside>
                </div>
            </Container>

            {/* Bottom CTA */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        linkContext="silver"
                        trackSource="money-metals-review-footer"
                        headline="Want Silver in Your IRA?"
                        subheadline="Money Metals is great for direct purchases, but for Silver IRAs, Augusta Precious Metals offers dedicated account managers and lifetime support."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
