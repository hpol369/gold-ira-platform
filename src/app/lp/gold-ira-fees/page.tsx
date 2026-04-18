import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, XCircle, DollarSign, Building2, Percent, Info } from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export const metadata: Metadata = {
    title: "Gold IRA Fees Exposed: What Companies Don't Tell You | 2026",
    description: "Discover the real cost of a Gold IRA. We break down storage fees, custodian fees, and hidden markups. See which company has the most transparent pricing.",
    robots: {
        index: false,
        follow: false,
    },
};

// Fee-specific FAQ content for schema
const faqs = [
    {
        question: "What are the 3 main types of Gold IRA fees?",
        answer: "Gold IRA fees typically fall into 3 categories: (1) Setup fees ($0-$50 one-time), (2) Annual storage/custodian fees ($150-$300 per year), and (3) Dealer markup on metals (varies by company, typically 2-10% over spot). The most transparent companies like Augusta charge a flat $180/year with no hidden markups.",
    },
    {
        question: "How much does gold IRA storage cost per year?",
        answer: "Gold IRA storage typically costs $100-$300 per year depending on the company and whether you choose segregated or commingled storage. Some companies charge a percentage of holdings (0.5%+) which can cost thousands more for larger accounts. Augusta's flat $180/year fee covers both custodian and storage costs.",
    },
    {
        question: "Are there hidden fees in gold IRAs?",
        answer: "Yes, many companies hide fees through: excessive dealer markups (15-30% over spot), buyback spreads (paying you less when you sell), wire transfer fees ($25-50 each), liquidation fees, and percentage-based storage that grows with your account. Always ask for a complete fee schedule in writing.",
    },
    {
        question: "What's the cheapest gold IRA company?",
        answer: "Don't chase the 'cheapest' option - low fees often mean hidden costs elsewhere. The best value is a company with transparent, flat-rate fees AND competitive metal pricing. Augusta charges $180/year flat with no hidden markups and zero BBB complaints in 10+ years.",
    },
    {
        question: "Can I avoid gold IRA fees entirely?",
        answer: "You can't avoid all fees - storage and custodian fees are required for IRA-held metals. However, Augusta waives up to 10 years of fees for accounts over $50,000, potentially saving you $1,800+. You'll still pay premiums on metal purchases, but these are competitive and transparent.",
    },
    {
        question: "What fees does Augusta Precious Metals charge?",
        answer: "Augusta charges a flat $180/year that covers both custodian and storage fees. There are no setup fees, no liquidation fees, no wire fees, and no hidden markups. For accounts over $50,000, they often waive fees for up to 10 years. This makes them one of the most transparent companies in the industry.",
    },
];

// Generate FAQPage schema
function generateFAQSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export default function GoldIRAFeesLandingPage() {
    const faqSchema = generateFAQSchema();

    return (
        <div className="min-h-screen bg-[#0C0D18] text-[#F6F4EF] font-sans">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Alert Bar */}
            <div className="bg-[#161828]0 text-[#F6F4EF] p-2.5 text-center font-bold text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Fee Alert: Some Gold IRA Companies Charge Hidden Markups of 30%+
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-[#0C0D18] border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Badge - Clickable */}
                    <LeadCaptureButton
                        variant="fees"
                        source="lp-fees-badge-click"
                        className="inline-flex items-center gap-2 bg-[rgba(197,149,46,0.08)] text-[#F6F4EF] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 hover:bg-[rgba(197,149,46,0.14)] transition-colors cursor-pointer"
                    >
                        <span className="w-2 h-2 rounded-full bg-[rgba(197,149,46,0.1)] animate-pulse"></span>
                        2026 Fee Guide
                    </LeadCaptureButton>

                    {/* Headline - Clickable */}
                    <LeadCaptureButton
                        variant="fees"
                        source="lp-fees-headline-click"
                        className="block cursor-pointer hover:opacity-90 transition-opacity"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F6F4EF] mb-6 leading-tight">
                            Gold IRA Fees <span className="text-[#D4A94E]">Exposed</span>: <br className="hidden md:block" />
                            What They Don&apos;t Tell You
                        </h1>
                    </LeadCaptureButton>

                    {/* Subheadline - Clickable */}
                    <LeadCaptureButton
                        variant="fees"
                        source="lp-fees-subheadline-click"
                        className="block cursor-pointer hover:opacity-80 transition-opacity mb-8"
                    >
                        <p className="text-xl md:text-2xl text-[#D0CCC4] max-w-2xl mx-auto">
                            Not all Gold IRA companies are transparent about fees. Here&apos;s what you need to know before investing.
                        </p>
                    </LeadCaptureButton>

                    {/* Stats Row - Clickable */}
                    <LeadCaptureButton
                        variant="fees"
                        source="lp-fees-stats-click"
                        className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[#F6F4EF]">3</div>
                            <div className="text-sm text-[#D0CCC4]">Fee Types</div>
                        </div>
                        <div className="text-center border-l border-[#3F4460] pl-6 md:pl-12">
                            <div className="text-3xl md:text-4xl font-bold text-green-600">$180</div>
                            <div className="text-sm text-[#D0CCC4]">/yr (Augusta)</div>
                        </div>
                        <div className="text-center border-l border-[#3F4460] pl-6 md:pl-12">
                            <div className="text-3xl md:text-4xl font-bold text-[#D4A94E]">0</div>
                            <div className="text-sm text-[#D0CCC4]">Hidden Fees</div>
                        </div>
                    </LeadCaptureButton>

                    {/* CTA */}
                    <LeadCaptureButton
                        variant="fees"
                        source="lp-gold-ira-fees-hero"
                        className="inline-flex items-center gap-3 bg-[#C5952E] hover:bg-[#D4A94E] text-[#0C0D18] text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        See Full Fee Breakdown
                        <ArrowRight className="h-6 w-6" />
                    </LeadCaptureButton>
                    <p className="text-sm text-[#A8A39A] mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        Free Guide - Zero Obligation
                    </p>
                </div>
            </header>

            {/* Trust Bar */}
            <section className="py-6 bg-[#121423] border-b border-[#2A2D42]">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-[#A8A39A] uppercase tracking-widest text-xs mb-3">Trusted By 50,000+ Americans</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale">
                        <span className="text-lg md:text-xl font-bold text-[#F6F4EF]">FOX NEWS</span>
                        <span className="text-lg md:text-xl font-bold text-[#F6F4EF]">NEWSMAX</span>
                        <span className="text-lg md:text-xl font-bold text-[#F6F4EF]">FORBES</span>
                        <span className="text-lg md:text-xl font-bold text-[#F6F4EF]">WSJ</span>
                    </div>
                </div>
            </section>

            {/* The 3 Fee Types Section */}
            <section className="py-16 bg-[#0C0D18]">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F6F4EF] text-center mb-4">Understanding Gold IRA Fees</h2>
                    <p className="text-center text-[#D0CCC4] mb-12 max-w-2xl mx-auto">Every Gold IRA involves three main fee categories. Here&apos;s what they are and what you should expect to pay.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Fee Card 1 */}
                        <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)]/30 transition-colors">
                            <div className="w-14 h-14 bg-[rgba(197,149,46,0.08)] rounded-xl flex items-center justify-center mb-4">
                                <DollarSign className="h-7 w-7 text-[#F6F4EF]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#F6F4EF] mb-2">Setup Fee</h3>
                            <div className="text-2xl font-bold text-green-600 mb-3">$0 - $50</div>
                            <p className="text-[#D0CCC4] text-sm">One-time fee to open your account. Many companies waive this fee entirely, especially for larger accounts.</p>
                        </div>

                        {/* Fee Card 2 */}
                        <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)]/30 transition-colors">
                            <div className="w-14 h-14 bg-[rgba(197,149,46,0.08)] rounded-xl flex items-center justify-center mb-4">
                                <Building2 className="h-7 w-7 text-[#F6F4EF]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#F6F4EF] mb-2">Annual Storage/Custodian</h3>
                            <div className="text-2xl font-bold text-[#D4A94E] mb-3">$150 - $300/yr</div>
                            <p className="text-[#D0CCC4] text-sm">Covers secure vault storage, insurance, IRS reporting, and account maintenance. Best companies charge flat rates.</p>
                        </div>

                        {/* Fee Card 3 */}
                        <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)]/30 transition-colors">
                            <div className="w-14 h-14 bg-[rgba(197,149,46,0.08)] rounded-xl flex items-center justify-center mb-4">
                                <Percent className="h-7 w-7 text-[#F6F4EF]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#F6F4EF] mb-2">Dealer Markup</h3>
                            <div className="text-2xl font-bold text-[#D4A94E] mb-3">Varies Wildly</div>
                            <p className="text-[#D0CCC4] text-sm">Premium over spot price for metals. This is where shady companies hide their biggest profits. Can range from 2% to 30%+.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fee Comparison Table */}
            <section className="py-16 bg-[#0C0D18]">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F6F4EF] text-center mb-4">What Do Gold IRAs Really Cost?</h2>
                    <p className="text-center text-[#D0CCC4] mb-10 max-w-2xl mx-auto">Side-by-side comparison of fees from top Gold IRA companies.</p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-[#161828] rounded-xl shadow-lg border border-[#2A2D42] overflow-hidden">
                            <thead className="bg-[rgba(197,149,46,0.1)] text-white">
                                <tr>
                                    <th className="p-4 text-left font-bold">Company</th>
                                    <th className="p-4 text-center font-bold">Setup Fee</th>
                                    <th className="p-4 text-center font-bold">Annual Fee</th>
                                    <th className="p-4 text-center font-bold">Markup Transparency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2A2D42]">
                                <tr className="bg-[rgba(46,139,87,0.08)] border-l-4 border-green-500">
                                    <td className="p-4 font-bold text-[#F6F4EF]">Augusta Precious Metals ⭐</td>
                                    <td className="p-4 text-center text-green-600 font-semibold">$0</td>
                                    <td className="p-4 text-center text-green-600 font-semibold">$180</td>
                                    <td className="p-4 text-center">
                                        <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                                            <CheckCircle2 className="h-4 w-4" /> Fully Transparent
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#D0CCC4]">Goldco</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$50</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$225-$275</td>
                                    <td className="p-4 text-center text-[#D4A94E]">Moderate</td>
                                </tr>
                                <tr className="bg-[#0C0D18]">
                                    <td className="p-4 font-semibold text-[#D0CCC4]">Birch Gold Group</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$50</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$200-$250</td>
                                    <td className="p-4 text-center text-[#D4A94E]">Moderate</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#D0CCC4]">Noble Gold</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$80</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$225-$250</td>
                                    <td className="p-4 text-center text-[#D4A94E]">Moderate</td>
                                </tr>
                                <tr className="bg-[#0C0D18]">
                                    <td className="p-4 font-semibold text-[#D0CCC4]">American Hartford Gold</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$0</td>
                                    <td className="p-4 text-center text-[#D0CCC4]">$180-$230</td>
                                    <td className="p-4 text-center text-[#D4A94E]">Moderate</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex items-start gap-3 bg-[#121423] p-4 rounded-lg border border-blue-200">
                        <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800"><strong>Pro Tip:</strong> Annual fees are just part of the picture. The REAL cost difference is in dealer markup and buyback pricing. Augusta is the only company that shows you exactly what you&apos;ll pay—and what they&apos;ll pay you when you sell.</p>
                    </div>
                </div>
            </section>

            {/* Hidden Fee Warning Section */}
            <section className="py-16 bg-[#0C0D18]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#D4A94E] text-center mb-4">Watch Out For These Hidden Fees</h2>
                    <p className="text-center text-[#D0CCC4] mb-10 max-w-2xl mx-auto">These &quot;hidden&quot; costs can drain your retirement savings without you even noticing.</p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 bg-[rgba(220,38,38,0.08)] border-l-4 border-[#B22234] p-5 rounded-r-lg">
                            <XCircle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-[#F6F4EF] mb-1">Excessive Dealer Markup (15-30%+)</h4>
                                <p className="text-[#D0CCC4] text-sm">Some companies charge huge premiums over spot price, hidden in &quot;per ounce&quot; pricing. On $50K, that&apos;s $7,500-$15,000 you&apos;ll never see again.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-[rgba(220,38,38,0.08)] border-l-4 border-[#B22234] p-5 rounded-r-lg">
                            <XCircle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-[#F6F4EF] mb-1">Buyback Spreads (10-30% Loss)</h4>
                                <p className="text-[#D0CCC4] text-sm">When you sell, many companies pay you 10-30% LESS than spot price. This is the single biggest hidden cost in the industry.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-[rgba(220,38,38,0.08)] border-l-4 border-[#B22234] p-5 rounded-r-lg">
                            <XCircle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-[#F6F4EF] mb-1">Wire Transfer Fees ($25-50 Each)</h4>
                                <p className="text-[#D0CCC4] text-sm">Charged on every transaction. Multiple purchases or distributions can add up to hundreds in hidden fees.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-[rgba(220,38,38,0.08)] border-l-4 border-[#B22234] p-5 rounded-r-lg">
                            <XCircle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-[#F6F4EF] mb-1">Liquidation Fees ($50-250)</h4>
                                <p className="text-[#D0CCC4] text-sm">Some companies charge you just to sell YOUR own gold. They profit when you buy AND when you sell.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-[rgba(220,38,38,0.08)] border-l-4 border-[#B22234] p-5 rounded-r-lg">
                            <XCircle className="h-6 w-6 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-[#F6F4EF] mb-1">Percentage-Based Storage</h4>
                                <p className="text-[#D0CCC4] text-sm">Instead of flat fees, some charge 0.5%+ of your holdings. As gold rises, your fees grow too—they profit from YOUR success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Augusta Fee Transparency Section */}
            <section className="py-16 bg-[#121423]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F6F4EF] text-center mb-4">Why Augusta Has the Most Transparent Pricing</h2>
                    <p className="text-center text-[#D0CCC4] mb-10 max-w-2xl mx-auto">After analyzing 15+ Gold IRA companies, Augusta stands out for one reason: radical transparency.</p>

                    <div className="bg-[#161828] rounded-2xl shadow-xl border-2 border-green-200 p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-[#F6F4EF] mb-4">What Augusta Charges:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>$180/year flat fee</strong> - covers BOTH custodian and storage</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>$0 setup fee</strong> - no account opening costs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>$0 liquidation fees</strong> - sell when YOU want</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Competitive premiums</strong> - shown upfront, never hidden</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#F6F4EF] mb-4">Why It Matters:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Zero BBB complaints</strong> in 10+ years of business</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Up to 10 years fees waived</strong> for accounts $50K+</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Education-first approach</strong> - no pressure sales</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Fair buyback pricing</strong> - in writing, before you invest</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#2A2D42] text-center">
                            <LeadCaptureButton
                                variant="fees"
                                source="lp-gold-ira-fees-mid"
                                className="inline-flex items-center gap-3 bg-[rgba(197,149,46,0.1)] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors"
                            >
                                Get Augusta&apos;s Free Fee Guide
                                <ArrowRight className="h-5 w-5" />
                            </LeadCaptureButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-[#0C0D18]">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F6F4EF] text-center mb-10">Gold IRA Fees FAQ</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-[#2A2D42] pb-6">
                                <h3 className="text-xl font-bold text-[#F6F4EF] mb-3">{faq.question}</h3>
                                <p className="text-[#D0CCC4] leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[rgba(197,149,46,0.1)] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get Your Free Fee Comparison Guide
                    </h2>
                    <p className="text-[#3F4460] text-lg mb-8">
                        See exactly what each company charges—including the fees they don&apos;t advertise. Make an informed decision with complete transparency.
                    </p>
                    <LeadCaptureButton
                        variant="fees"
                        source="lp-gold-ira-fees-footer"
                        className="inline-flex items-center gap-3 bg-[#C5952E] hover:bg-[#D4A94E] text-[#0C0D18] text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-all border-2 border-white/20"
                    >
                        Get Your Free Guide Now
                        <ArrowRight className="h-6 w-6" />
                    </LeadCaptureButton>
                    <p className="text-[#A8A39A] mt-6 text-sm">
                        Strictly confidential. We respect your privacy.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-[#D0CCC4] py-8 text-center text-xs">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Gold and precious metals involve risk. Past performance is not indicative of future results.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}
        </div>
    );
}
