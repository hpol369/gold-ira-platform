import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { AlertTriangle, Shield, Search, Phone, CheckCircle2, ArrowRight, XCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gold IRA Scams to Avoid in 2026: Protect Your Retirement",
    description: "Learn how to identify and avoid Gold IRA scams. From home storage schemes to excessive fees, we expose the tactics dishonest dealers use to separate you from your money.",
};

const takeaways = [
    "\"Home storage Gold IRA\" schemes are illegal and can trigger massive tax penalties.",
    "Excessive premiums (15%+ over spot) are a hidden way some dealers overcharge.",
    "High-pressure sales tactics are a major red flag—legitimate companies educate, not pressure.",
    "Always verify BBB ratings, online reviews, and complaint history before choosing a company.",
    "Numismatic (collectible) coins rarely belong in an IRA—they carry huge markups.",
    "\"Free\" offers usually come with hidden costs elsewhere (higher premiums).",
    "Legitimate companies provide transparent pricing and don't rush your decision."
];

const tocItems = [
    { id: "overview", label: "Why Scams Exist" },
    { id: "home-storage", label: "Home Storage Scam" },
    { id: "excessive-premiums", label: "Excessive Premiums" },
    { id: "numismatic-coins", label: "Numismatic Coin Scam" },
    { id: "high-pressure", label: "High-Pressure Tactics" },
    { id: "fake-reviews", label: "Fake Reviews" },
    { id: "red-flags", label: "Red Flags Checklist" },
    { id: "how-to-verify", label: "How to Verify Companies" },
    { id: "faq", label: "FAQs" }
];

export default function GoldIraScamsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Consumer Protection
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Gold IRA Scams to Avoid in 2026
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            Protect your retirement savings from dishonest dealers. Learn the warning signs before it&apos;s too late.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                The gold IRA industry has legitimate, reputable companies—but it also attracts bad actors looking to take advantage of investors. Understanding <strong>Gold IRA scams</strong> is essential to protecting your retirement savings.
                            </p>
                            <p>
                                The unfortunate reality: because gold IRA transactions involve large sums (often $50,000-$500,000+), even small deceptions can cost you thousands. A 10% excessive markup on a $100,000 investment is $10,000 out of your pocket.
                            </p>
                            <p>
                                This guide exposes the most common scams and teaches you how to identify trustworthy companies.
                            </p>
                        </section>

                        {/* Home Storage Scam */}
                        <section id="home-storage" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Scam #1: The &quot;Home Storage Gold IRA&quot;</h2>
                            </div>
                            <p>
                                <strong>The Pitch:</strong> &quot;Keep your IRA gold at home! Set up an LLC and store your metals in your own safe!&quot;
                            </p>
                            <p>
                                <strong>The Reality:</strong> This is <strong>illegal</strong> under IRS rules. The IRS requires precious metals in an IRA to be held by an approved custodian at an approved depository—not in your basement.
                            </p>

                            <div className="bg-red-50 rounded-2xl p-6 border border-red-100 not-prose my-8">
                                <h4 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    The IRS Position on Home Storage
                                </h4>
                                <p className="text-red-700 mb-4">
                                    The IRS considers taking personal possession of IRA metals as a <strong>distribution</strong>. This means:
                                </p>
                                <ul className="space-y-2 text-red-700">
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span>Immediate income taxes on the full value</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span>10% early withdrawal penalty if under 59½</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span>Potential additional penalties for prohibited transactions</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-red-600 mt-4">
                                    A $100,000 home storage scheme could cost you $30,000+ in taxes and penalties.
                                </p>
                            </div>

                            <p>
                                <strong>How to Protect Yourself:</strong> Any company promoting home storage should be avoided entirely. Legitimate companies always use IRS-approved depositories like Delaware Depository, Brink&apos;s, or IDS.
                            </p>
                        </section>

                        {/* Excessive Premiums */}
                        <section id="excessive-premiums" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Scam #2: Excessive Premiums</h2>
                            </div>
                            <p>
                                <strong>The Pitch:</strong> &quot;We have the lowest fees in the industry!&quot; (While charging 15-30% over spot price for metals)
                            </p>
                            <p>
                                <strong>The Reality:</strong> Low fees mean nothing if the company makes up for it with outrageous premiums. The &quot;premium&quot; is the markup over the spot price of gold—and it&apos;s where most companies make their money.
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-6 border border-primary/5 not-prose my-8">
                                <h4 className="font-bold text-primary text-lg mb-4">What Premiums Should You Expect?</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-medium">Gold Bars</span>
                                        <span className="text-green-600 font-bold">2-5% over spot</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-medium">Gold Eagles/Maples</span>
                                        <span className="text-green-600 font-bold">4-8% over spot</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-medium">Silver Bars</span>
                                        <span className="text-green-600 font-bold">3-8% over spot</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-medium">Silver Eagles</span>
                                        <span className="text-amber-600 font-bold">8-15% over spot</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                                        <span className="font-medium text-red-700">Red Flag Territory</span>
                                        <span className="text-red-600 font-bold">15%+ over spot</span>
                                    </div>
                                </div>
                            </div>

                            <p>
                                <strong>How to Protect Yourself:</strong> Always ask for the <strong>total price</strong> including premiums, not just fees. Compare quotes from multiple companies. Check the current spot price before purchasing.
                            </p>
                        </section>

                        {/* Numismatic Coins */}
                        <section id="numismatic-coins" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Scam #3: The Numismatic Coin Push</h2>
                            </div>
                            <p>
                                <strong>The Pitch:</strong> &quot;These rare, collectible coins are worth much more than their gold content! They&apos;re better investments and could double in value!&quot;
                            </p>
                            <p>
                                <strong>The Reality:</strong> Numismatic (collectible) coins typically carry premiums of 30-100%+ over spot price. While they can appreciate, the collectible value is highly subjective and illiquid. When it&apos;s time to sell, you often get far less than you paid.
                            </p>

                            <Callout type="warning" title="Why Dealers Push Numismatic Coins">
                                The reason is simple: <strong>higher margins</strong>. A dealer might make $50-100 selling you a standard Gold Eagle, but $500-2,000+ selling you a &quot;rare&quot; coin. It&apos;s not about your best interest—it&apos;s about their profit.
                            </Callout>

                            <p>
                                <strong>What Belongs in a Gold IRA:</strong> Standard bullion coins (American Eagles, Canadian Maple Leafs) and bars. These have low premiums, high liquidity, and their value tracks the gold price directly.
                            </p>
                            <p>
                                <strong>How to Protect Yourself:</strong> Stick to IRS-approved bullion. If a salesperson is pushing expensive collectibles, find a different company.
                            </p>
                        </section>

                        {/* High-Pressure Tactics */}
                        <section id="high-pressure" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Scam #4: High-Pressure Sales Tactics</h2>
                            </div>
                            <p>
                                <strong>The Pitch:</strong> &quot;Gold is about to skyrocket! You need to act NOW before prices go through the roof! This special deal expires today!&quot;
                            </p>
                            <p>
                                <strong>The Reality:</strong> No one can reliably predict short-term gold prices. Urgency and fear are classic manipulation tactics. Legitimate companies provide education and let you make decisions at your own pace.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-red-50 border border-red-100">
                                    <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                                        <XCircle className="w-5 h-5" />
                                        Red Flags
                                    </h4>
                                    <ul className="space-y-2 text-sm text-red-600">
                                        <li>• &quot;Limited time offer&quot; pressure</li>
                                        <li>• Predicting imminent price changes</li>
                                        <li>• Calling multiple times per day</li>
                                        <li>• Refusing to send written information</li>
                                        <li>• Getting angry when you want to think</li>
                                        <li>• Using fear-based language</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                    <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Green Flags
                                    </h4>
                                    <ul className="space-y-2 text-sm text-green-600">
                                        <li>• Patiently answering all questions</li>
                                        <li>• Providing educational materials</li>
                                        <li>• Encouraging you to take your time</li>
                                        <li>• Transparent about all costs</li>
                                        <li>• No pressure to buy specific products</li>
                                        <li>• Happy to put information in writing</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Fake Reviews */}
                        <section id="fake-reviews" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Scam #5: Fake Reviews & Testimonials</h2>
                            </div>
                            <p>
                                <strong>The Problem:</strong> Some companies manufacture positive reviews or cherry-pick testimonials while suppressing negative feedback.
                            </p>
                            <p>
                                <strong>What to Watch For:</strong>
                            </p>
                            <ul>
                                <li>Reviews that sound too similar or use the same phrases</li>
                                <li>All 5-star reviews with no criticism</li>
                                <li>Reviews that lack specific details</li>
                                <li>Testimonials without verifiable names or locations</li>
                                <li>Company website with only positive quotes</li>
                            </ul>

                            <p>
                                <strong>How to Protect Yourself:</strong> Check multiple independent review sources (BBB, Trustpilot, Google Reviews, Consumer Affairs). Look for patterns in complaints. A few negative reviews are normal; a pattern of similar complaints is a red flag.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find Trustworthy Gold IRA Companies</h3>
                                <p className="mb-6 text-gray-200">Our quiz matches you with vetted, reputable companies based on your needs.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Red Flags Checklist */}
                        <section id="red-flags" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Complete Red Flags Checklist</h2>
                            </div>
                            <p>
                                Before working with any Gold IRA company, watch for these warning signs:
                            </p>

                            <div className="bg-red-50 rounded-2xl p-6 border border-red-100 not-prose my-8">
                                <h4 className="font-bold text-red-700 text-lg mb-4">Run Away If You See:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>Home storage claims</strong> — &quot;Keep your IRA gold at home&quot;</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>No clear pricing</strong> — Refusing to provide written quotes</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>F or no BBB rating</strong> — Serious unresolved complaints</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>Urgency tactics</strong> — &quot;You must act today&quot;</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>Guaranteed returns</strong> — No one can guarantee gold prices</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>Pushy rare coin sales</strong> — Focusing on numismatics over bullion</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>Celebrity endorsements only</strong> — No educational substance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-red-700"><strong>Upfront payment requests</strong> — Before account is set up</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* How to Verify */}
                        <section id="how-to-verify" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">How to Verify a Gold IRA Company</h2>
                            </div>
                            <p>
                                Follow this verification process before committing:
                            </p>

                            <div className="not-prose my-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Check BBB Rating & Complaints</h4>
                                            <p className="text-text-muted mt-1">Visit bbb.org and look up the company. Look for A+ or A rating. Read complaint history—not just the rating. How did the company respond to complaints?</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Read Independent Reviews</h4>
                                            <p className="text-text-muted mt-1">Check Google Reviews, Trustpilot, Consumer Affairs, and Business Consumer Alliance. Look for patterns in both positive and negative reviews.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Verify Business History</h4>
                                            <p className="text-text-muted mt-1">How long have they been in business? Check state business registrations. Newer companies aren&apos;t automatically bad, but longevity is a positive sign.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Request Written Information</h4>
                                            <p className="text-text-muted mt-1">Ask for fee schedules, pricing, and all terms in writing. Reputable companies provide transparent documentation. Avoid companies that won&apos;t put things in writing.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">5</div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">Compare Multiple Companies</h4>
                                            <p className="text-text-muted mt-1">Get quotes from at least 2-3 companies. Compare total costs (fees + premiums), not just one metric. This also helps you identify outliers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold IRA Scam FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Are Gold IRAs legitimate?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Yes—Gold IRAs are completely legitimate and authorized under the Taxpayer Relief Act of 1997. The industry includes many reputable companies. The key is avoiding the bad actors while working with established, well-reviewed firms. See our <Link href="/reviews" className="text-secondary hover:underline">company reviews</Link> for vetted recommendations.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">How do I report a Gold IRA scam?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        If you&apos;ve been victimized, report to: (1) BBB — file a complaint at bbb.org, (2) FTC — report at reportfraud.ftc.gov, (3) Your state attorney general, (4) CFPB — Consumer Financial Protection Bureau. Also leave honest reviews to warn others.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">What&apos;s a reasonable premium to pay for gold?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        For gold bars: 2-5% over spot. For gold coins (Eagles, Maples): 4-8% over spot. For silver bars: 3-8%. For silver coins: 8-15%. Anything significantly higher should be questioned. Always compare the total cost (premium + fees) between companies.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Why do some companies push rare coins?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Simple: higher profit margins. A dealer might make 3-5% selling bullion coins but 30-100%+ selling &quot;rare&quot; numismatic coins. The collectible premium is largely subjective, and when you sell, you often get far less than you paid. Stick to standard bullion for IRA purposes.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Find a Trustworthy Gold IRA Company</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Our quiz matches you with vetted companies that have excellent track records and transparent pricing.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/reviews">Read Company Reviews</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
