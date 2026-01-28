import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, XCircle, Star, Trophy, ChevronDown } from "lucide-react";
import SocialProofToast from "@/components/lp/SocialProofToast";
import TrackedLPLink from "@/components/lp/TrackedLPLink";

export const metadata: Metadata = {
    title: "Gold IRA Company Fees Compared: Birch vs Goldco vs Augusta | 2026",
    description: "Comparing fees from Birch Gold, Goldco, Noble Gold, and Augusta. See which Gold IRA company has the lowest fees and best transparency.",
    robots: {
        index: false,
        follow: false,
    },
};

// Company data
const companies = [
    {
        name: "Augusta Precious Metals",
        minInvestment: "$50,000",
        annualFee: "$180",
        setupFee: "$0",
        bbbRating: "A+",
        complaints: "0",
        highlight: true,
        pros: ["Zero BBB complaints in 10+ years", "Flat $180/yr covers all fees", "Up to 10 years fees waived ($50K+)", "Fair buyback pricing in writing", "Education-first, no pressure sales"],
        cons: ["Higher minimum investment", "Not ideal for small accounts"],
    },
    {
        name: "Birch Gold Group",
        minInvestment: "$10,000",
        annualFee: "$200-$250",
        setupFee: "$50",
        bbbRating: "A+",
        complaints: "15+",
        highlight: false,
        pros: ["Lower minimum investment", "Wide product selection", "Multiple storage options"],
        cons: ["Higher annual fees", "Some BBB complaints", "Less transparent markup pricing"],
    },
    {
        name: "Goldco",
        minInvestment: "$25,000",
        annualFee: "$225-$275",
        setupFee: "$50",
        bbbRating: "A+",
        complaints: "50+",
        highlight: false,
        pros: ["First year storage often waived", "Strong customer service reputation", "Silver IRA options"],
        cons: ["Higher ongoing fees", "Notable BBB complaints", "Aggressive sales reported"],
    },
    {
        name: "Noble Gold",
        minInvestment: "$20,000",
        annualFee: "$225-$250",
        setupFee: "$80",
        bbbRating: "A+",
        complaints: "10+",
        highlight: false,
        pros: ["Royal Survival Packs available", "Texas depository option", "Moderate minimum"],
        cons: ["Higher setup fee", "Less fee transparency", "Limited buyback info upfront"],
    },
    {
        name: "American Hartford Gold",
        minInvestment: "$10,000",
        annualFee: "$180-$230",
        setupFee: "$0",
        bbbRating: "A+",
        complaints: "20+",
        highlight: false,
        pros: ["Low minimum investment", "No setup fee", "Competitive annual fees"],
        cons: ["BBB complaints exist", "Markup transparency varies", "Some aggressive sales tactics"],
    },
    {
        name: "Advantage Gold",
        minInvestment: "$10,000",
        annualFee: "$150-$200",
        setupFee: "$50",
        bbbRating: "A",
        complaints: "5+",
        highlight: false,
        pros: ["Lowest minimum investment", "Competitive annual fees", "Good for smaller accounts"],
        cons: ["Less established", "Limited product selection", "Fewer reviews available"],
    },
];

// FAQ content
const faqs = [
    {
        question: "What are Birch Gold fees?",
        answer: "Birch Gold charges a $50 setup fee and $200-$250 per year in combined custodian and storage fees. Their metal premiums vary, and buyback pricing isn't always disclosed upfront. They have 15+ BBB complaints on record.",
    },
    {
        question: "What are Goldco fees?",
        answer: "Goldco charges a $50 setup fee and $225-$275 per year for storage and custodian fees. They often waive first year storage as a promotion. However, they have 50+ BBB complaints, which is higher than most competitors.",
    },
    {
        question: "What are Noble Gold fees?",
        answer: "Noble Gold has the highest setup fee at $80, plus $225-$250 per year in ongoing fees. They offer unique products like Royal Survival Packs, but have 10+ BBB complaints and less transparent pricing.",
    },
    {
        question: "What are American Hartford Gold fees?",
        answer: "American Hartford Gold charges no setup fee and $180-$230 per year in storage/custodian fees. While their minimum is low ($10K), they have 20+ BBB complaints and some reports of aggressive sales tactics.",
    },
    {
        question: "What are Augusta Precious Metals fees?",
        answer: "Augusta charges a flat $180/year that covers both storage and custodian fees with no setup fee. For accounts over $50K, they waive up to 10 years of fees. They have zero BBB complaints in 10+ years—the best record in the industry.",
    },
    {
        question: "Which Gold IRA company has the lowest fees?",
        answer: "Advantage Gold has the lowest advertised annual fees ($150-$200), but the lowest fees don't always mean best value. Augusta's $180/year flat fee, combined with zero BBB complaints and up to 10 years waived, often provides better long-term value for accounts over $50K.",
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

export default function GoldIRACompanyFeesPage() {
    const faqSchema = generateFAQSchema();
    const affiliateLink = "https://learn.augustapreciousmetals.com/gold-ira-2?apmtrkr_cid=1696&aff_id=5129";

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Alert Bar */}
            <div className="bg-[#000080] text-white p-2.5 text-center font-bold text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    Comparing Gold IRA Companies? Here&apos;s What They Actually Charge
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#000080]/10 text-[#000080] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#000080] animate-pulse"></span>
                        2026 Fee Comparison
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight">
                        Gold IRA Company Fees <span className="text-[#B22234]">Compared</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto">
                        We analyzed fees from Birch Gold, Goldco, Noble Gold, American Hartford, and Augusta. Here&apos;s what we found.
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[#000080]">6</div>
                            <div className="text-sm text-slate-600">Companies Analyzed</div>
                        </div>
                        <div className="text-center border-l border-slate-300 pl-6 md:pl-12">
                            <div className="text-3xl md:text-4xl font-bold text-amber-600">Fee Transparency</div>
                            <div className="text-sm text-slate-600">Ranked</div>
                        </div>
                        <div className="text-center border-l border-slate-300 pl-6 md:pl-12">
                            <div className="text-3xl md:text-4xl font-bold text-green-600">1</div>
                            <div className="text-sm text-slate-600">Clear Winner</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <TrackedLPLink
                        href={affiliateLink}
                        source="lp-gold-ira-company-fees-hero"
                        className="inline-flex items-center gap-3 bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        See The Comparison
                        <ArrowRight className="h-6 w-6" />
                    </TrackedLPLink>
                    <p className="text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        Free Comparison Guide - Zero Obligation
                    </p>
                </div>
            </header>

            {/* Trust Bar */}
            <section className="py-6 bg-slate-100 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-slate-500 uppercase tracking-widest text-xs mb-3">Trusted By 50,000+ Americans</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale">
                        <span className="text-lg md:text-xl font-bold text-slate-800">FOX NEWS</span>
                        <span className="text-lg md:text-xl font-bold text-slate-800">NEWSMAX</span>
                        <span className="text-lg md:text-xl font-bold text-slate-800">FORBES</span>
                        <span className="text-lg md:text-xl font-bold text-slate-800">WSJ</span>
                    </div>
                </div>
            </section>

            {/* Big Comparison Table */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] text-center mb-4">2026 Gold IRA Fee Comparison</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Side-by-side comparison of fees, minimums, and BBB records from the top Gold IRA companies.</p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                            <thead className="bg-[#000080] text-white">
                                <tr>
                                    <th className="p-4 text-left font-bold">Company</th>
                                    <th className="p-4 text-center font-bold">Min Investment</th>
                                    <th className="p-4 text-center font-bold">Setup Fee</th>
                                    <th className="p-4 text-center font-bold">Annual Fee</th>
                                    <th className="p-4 text-center font-bold">BBB Rating</th>
                                    <th className="p-4 text-center font-bold">Complaints</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {companies.map((company, index) => (
                                    <tr
                                        key={index}
                                        className={company.highlight ? "bg-green-50 border-l-4 border-green-500" : index % 2 === 1 ? "bg-slate-50" : ""}
                                    >
                                        <td className="p-4 font-bold text-slate-800">
                                            {company.name}
                                            {company.highlight && (
                                                <span className="ml-2 inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                                                    <Trophy className="h-4 w-4" /> Best Value
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center text-slate-600">{company.minInvestment}</td>
                                        <td className="p-4 text-center">
                                            <span className={company.setupFee === "$0" ? "text-green-600 font-semibold" : "text-slate-600"}>
                                                {company.setupFee}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={company.highlight ? "text-green-600 font-semibold" : "text-slate-600"}>
                                                {company.annualFee}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center gap-1 text-amber-600 font-semibold">
                                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                                {company.bbbRating}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={company.complaints === "0" ? "text-green-600 font-bold" : "text-[#B22234]"}>
                                                {company.complaints}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-slate-500">
                            *BBB complaint data as of January 2026. Annual fees include custodian + storage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Deep Dive: Each Company */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] text-center mb-10">Company-by-Company Breakdown</h2>

                    <div className="space-y-6">
                        {companies.map((company, index) => (
                            <details
                                key={index}
                                className={`group bg-white rounded-xl shadow-md border ${company.highlight ? "border-green-300" : "border-slate-200"} overflow-hidden`}
                                open={company.highlight}
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        {company.highlight && (
                                            <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                <Trophy className="h-5 w-5 text-green-600" />
                                            </span>
                                        )}
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800">{company.name}</h3>
                                            <p className="text-sm text-slate-500">
                                                {company.annualFee}/yr • {company.complaints} complaints
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                                </summary>

                                <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4" /> Pros
                                            </h4>
                                            <ul className="space-y-2">
                                                {company.pros.map((pro, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#B22234] mb-3 flex items-center gap-2">
                                                <XCircle className="h-4 w-4" /> Cons
                                            </h4>
                                            <ul className="space-y-2">
                                                {company.cons.map((con, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <XCircle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {company.highlight && (
                                        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                                            <TrackedLPLink
                                                href={affiliateLink}
                                                source="lp-gold-ira-company-fees-augusta"
                                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                            >
                                                Learn More About Augusta
                                                <ArrowRight className="h-4 w-4" />
                                            </TrackedLPLink>
                                        </div>
                                    )}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Augusta Wins Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] text-center mb-4">Why Augusta Has The Best Fee Structure</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">After comparing all major Gold IRA companies, Augusta stands out on three key factors.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-green-600">0</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Zero BBB Complaints</h3>
                            <p className="text-slate-600 text-sm">The only major Gold IRA company with zero BBB complaints in 10+ years. That&apos;s unheard of in this industry.</p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-blue-600">$180</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Flat Annual Fee</h3>
                            <p className="text-slate-600 text-sm">One simple price covers BOTH custodian and storage. No percentage-based fees that grow with your account.</p>
                        </div>

                        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-amber-600">10yr</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Fees Waived</h3>
                            <p className="text-slate-600 text-sm">For accounts $50K+, Augusta waives up to 10 years of fees. That&apos;s $1,800 in savings.</p>
                        </div>
                    </div>

                    <div className="mt-10 bg-slate-100 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">The Bottom Line</h3>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                            While other companies may have lower minimums or advertise lower fees, Augusta&apos;s combination of transparency, zero complaints, and fee waivers makes them the best long-term value for serious investors ($50K+).
                        </p>
                        <TrackedLPLink
                            href={affiliateLink}
                            source="lp-gold-ira-company-fees-mid"
                            className="inline-flex items-center gap-3 bg-[#000080] hover:bg-[#000060] text-white text-lg font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Get Your Free Consultation
                            <ArrowRight className="h-5 w-5" />
                        </TrackedLPLink>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] text-center mb-10">Company Fee FAQs</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#000080] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get Your Free Consultation
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Stop wondering about fees. Talk to Augusta&apos;s team and get transparent pricing for your specific situation—no obligation.
                    </p>
                    <TrackedLPLink
                        href={affiliateLink}
                        source="lp-gold-ira-company-fees-footer"
                        className="inline-flex items-center gap-3 bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-all border-2 border-white/20"
                    >
                        Get Your Free Consultation
                        <ArrowRight className="h-6 w-6" />
                    </TrackedLPLink>
                    <p className="text-slate-400 mt-6 text-sm">
                        Strictly confidential. We respect your privacy.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Gold and precious metals involve risk. Past performance is not indicative of future results.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}
            <SocialProofToast variant="gold" />
        </div>
    );
}
