import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, XCircle, Award } from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export const metadata: Metadata = {
    title: "IRA-Approved Silver: What the IRS Allows | 2026 Guide",
    description: "Only .999 fine silver qualifies for IRAs. See IRS-approved coins and bars including American Eagles and Canadian Maple Leafs. Free silver guide.",
    robots: {
        index: false,
        follow: false,
    },
};

// FAQ data for schema
const faqs = [
    {
        question: "What makes silver 'IRA-approved'?",
        answer: "The IRS requires silver in retirement accounts to be at least .999 fine (99.9% pure) and produced by a national government mint or an accredited refiner. The silver must also be stored in an approved depository - not at home. Examples include American Silver Eagles (.999) and Canadian Maple Leafs (.9999).",
    },
    {
        question: "Why can't I hold silver at home in my IRA?",
        answer: "IRS regulations require IRA assets to be held by a qualified custodian in an approved depository. This ensures proper record-keeping, prevents premature distributions, and maintains the tax-advantaged status of your retirement account. Home storage would be considered a distribution and trigger taxes and penalties.",
    },
    {
        question: "What's the difference between coins and bars?",
        answer: "Government-minted coins (Eagles, Maple Leafs) carry higher premiums but are highly recognizable and liquid. Silver bars typically have lower premiums over spot price, making them more cost-efficient for larger investments. Both are equally IRA-approved if they meet purity requirements.",
    },
    {
        question: "Are collectible silver coins IRA-approved?",
        answer: "No. Collectible, numismatic, or proof coins are NOT IRA-approved, even if made of pure silver. The IRS specifically excludes coins valued primarily for rarity or condition. Stick to bullion coins like American Eagles (not proof versions) and standard bars.",
    },
    {
        question: "Can I buy junk silver (90% constitutional coins) for my IRA?",
        answer: "No. Pre-1965 US coins (commonly called 'junk silver') are 90% silver and don't meet the .999 purity requirement. While these are popular for personal collections, they cannot be held in an IRA. You need .999+ fine silver bullion products.",
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

// Approved products
const approvedCoins = [
    {
        name: "American Silver Eagle",
        purity: ".999 Fine",
        mint: "U.S. Mint",
        description: "The most popular IRA silver coin. Backed by the U.S. government with iconic Walking Liberty design.",
    },
    {
        name: "Canadian Silver Maple Leaf",
        purity: ".9999 Fine",
        mint: "Royal Canadian Mint",
        description: "One of the purest silver coins available. Features advanced security features and maple leaf design.",
    },
    {
        name: "Austrian Silver Philharmonic",
        purity: ".999 Fine",
        mint: "Austrian Mint",
        description: "Europe's most popular silver bullion coin. Features the Vienna Philharmonic Orchestra instruments.",
    },
    {
        name: "Australian Silver Kangaroo",
        purity: ".9999 Fine",
        mint: "Perth Mint",
        description: "High purity coin from the renowned Perth Mint with annual design changes.",
    },
];

const approvedBars = [
    {
        name: "PAMP Suisse Silver Bars",
        sizes: "1oz, 10oz, 100oz, 1kg",
        description: "Premium Swiss refiner bars with Lady Fortuna design and assay certificate.",
    },
    {
        name: "Credit Suisse Silver Bars",
        sizes: "1oz, 10oz, 100oz",
        description: "World-renowned Swiss bank quality with serial numbers and certificates.",
    },
    {
        name: "Johnson Matthey Silver Bars",
        sizes: "1oz, 10oz, 100oz",
        description: "Historic refiner known for quality. Highly collectible and liquid.",
    },
    {
        name: "Engelhard Silver Bars",
        sizes: "1oz, 10oz, 100oz",
        description: "Premium American refiner bars. Discontinued but still IRA-eligible.",
    },
];

const notApproved = [
    "Pre-1965 U.S. Coins (90% 'Junk Silver')",
    "Proof Coins and Collector Editions",
    "Numismatic or Rare Coins",
    "Sterling Silver (.925 purity)",
    "Any Silver Below .999 Fineness",
    "Home-Stored Silver (even if pure)",
];

export default function SilverIRAApprovedPatriotPage() {
    const faqSchema = generateFAQSchema();

    return (
        <div className="min-h-screen bg-white text-slate-900 font-serif">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Top Warning Bar */}
            <div className="bg-[#B22234] text-white p-2 text-center font-bold uppercase tracking-wider text-sm">
                <span className="flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    IRS Alert: Only .999 Fine Silver Qualifies for IRAs
                </span>
            </div>

            {/* Hero Section */}
            <header className="relative py-12 md:py-20 bg-slate-50 border-b-4 border-[#000080]">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    {/* Headline Group */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#000080] mb-6 leading-tight uppercase">
                        IRA-Approved Silver: <br />
                        <span className="text-[#B22234] underline decoration-4 underline-offset-8">What the IRS Allows</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 font-sans mb-8 max-w-2xl mx-auto">
                        Don't make a <strong>costly mistake</strong>. Only specific silver products qualify for your retirement account. Here's the complete IRS-approved list.
                    </p>

                    {/* Quick Facts Box */}
                    <div className="bg-white border-2 border-[#000080] rounded-xl p-6 mb-10 max-w-2xl mx-auto text-left shadow-lg">
                        <h2 className="text-lg font-bold text-[#000080] mb-4 font-sans uppercase tracking-wide">IRS Purity Requirements:</h2>
                        <ul className="space-y-3 font-sans text-slate-700">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                <span><strong>.999 Fine Silver Minimum</strong> (99.9% pure)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                <span><strong>Government Mint or LBMA-Approved Refiner</strong></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                <span><strong>Must Be Stored in Approved Depository</strong></span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Area */}
                    <div className="flex flex-col items-center gap-4">
                        <LeadCaptureButton
                            variant="silver"
                            source="lp-silver-ira-approved-hero"
                            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-2xl md:text-3xl font-bold py-6 px-12 rounded-lg shadow-[0_5px_0_rgb(100,0,0)] hover:shadow-[0_2px_0_rgb(100,0,0)] hover:translate-y-[3px] transition-all uppercase flex items-center gap-3 font-sans"
                        >
                            Get Your Free Silver Guide
                            <ArrowRight className="h-8 w-8" />
                        </LeadCaptureButton>
                        <p className="text-sm text-slate-500 font-sans flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            Free Expert Consultation Included
                        </p>
                    </div>
                </div>
            </header>

            {/* As Seen On / Trust */}
            <section className="py-8 bg-slate-100 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-slate-500 font-sans uppercase tracking-widest text-xs mb-4">Trusted By 50,000+ Americans</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                        <span className="text-2xl font-black text-slate-800">FOX NEWS</span>
                        <span className="text-2xl font-black text-slate-800">NEWSMAX</span>
                        <span className="text-2xl font-black text-slate-800">BEN SHAPIRO</span>
                        <span className="text-2xl font-black text-slate-800">FORBES</span>
                    </div>
                </div>
            </section>

            {/* Approved Coins Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif mb-4">
                            IRS-Approved Silver Coins
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            These government-minted coins meet all IRS requirements for your Silver IRA.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {approvedCoins.map((coin) => (
                            <div key={coin.name} className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:border-[#000080] transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#000080] text-white p-3 rounded-lg flex-shrink-0">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#000080] mb-1">{coin.name}</h3>
                                        <p className="text-sm text-[#B22234] font-semibold mb-2">
                                            {coin.purity} | {coin.mint}
                                        </p>
                                        <p className="text-slate-600">{coin.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approved Bars Section */}
            <section className="py-16 bg-slate-50 font-sans">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif mb-4">
                            IRS-Approved Silver Bars
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Premium silver bars with lower premiums than coins. Great for larger investments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {approvedBars.map((bar) => (
                            <div key={bar.name} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-[#000080] transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-200 text-[#000080] p-3 rounded-lg flex-shrink-0">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#000080] mb-1">{bar.name}</h3>
                                        <p className="text-sm text-[#B22234] font-semibold mb-2">
                                            Available Sizes: {bar.sizes}
                                        </p>
                                        <p className="text-slate-600">{bar.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NOT Approved Warning Section */}
            <section className="py-16 bg-[#B22234]/5 border-y-4 border-[#B22234] font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-[#B22234] text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-4">
                            <AlertTriangle className="h-4 w-4" />
                            Warning
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#B22234] font-serif mb-4">
                            Silver That Is NOT IRA-Approved
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Buying the wrong silver can disqualify your IRA and trigger penalties. Avoid these products:
                        </p>
                    </div>

                    <div className="bg-white rounded-xl border-2 border-[#B22234] p-8 shadow-lg">
                        <ul className="grid md:grid-cols-2 gap-4">
                            {notApproved.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-800">
                                    <XCircle className="h-6 w-6 text-[#B22234] flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-center mt-8 text-slate-600 italic">
                        Not sure if your silver qualifies? Get a free consultation with an IRA specialist.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white font-sans">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000080] font-serif mb-10 text-center">
                        Common Questions About IRA Silver
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-[#000080] mb-3">{faq.question}</h3>
                                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#000080] text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                        Get Your Free Silver IRA Guide
                    </h2>
                    <p className="text-slate-300 mb-8 text-lg font-sans">
                        Learn exactly which silver products belong in your retirement account - and which ones to avoid.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-sans flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            IRS-Approved Products Only
                        </span>
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-sans flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            Expert Guidance
                        </span>
                        <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-sans flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            Secure Depository Storage
                        </span>
                    </div>

                    <LeadCaptureButton
                        variant="silver"
                        source="lp-silver-ira-approved-footer"
                        className="inline-block bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-transform uppercase font-sans border-2 border-white/20"
                    >
                        Send Me The Free Guide
                    </LeadCaptureButton>
                    <p className="text-slate-400 mt-6 text-sm font-sans">
                        100% Free. Zero Obligation. Your privacy is protected.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-600 py-8 text-center text-xs font-sans">
                <div className="max-w-4xl mx-auto px-4">
                    <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
                    <p className="mt-2">Disclaimer: We are not financial advisors. Precious metals investing involves risk. Past performance does not guarantee future results.</p>
                </div>
            </footer>

            {/* Social Proof Toast */}

            {/* Exit Intent Popup */}
        </div>
    );
}
