import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
    ArrowLeft,
    ArrowRight,
    ShieldCheck,
    AlertTriangle,
    Coins,
    FileText,
    CheckCircle2,
    XCircle,
    Scale,
    Lock,
    TrendingUp,
    Building2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Physical Gold vs Paper Gold: Which Is Better for IRAs?",
    description: "Compare physical gold vs paper gold (ETFs, futures, mining stocks). Learn the key differences, risks, and why physical gold ownership matters for retirement security.",
    openGraph: {
        title: "Physical Gold vs Paper Gold: The Critical Differences",
        description: "Understand why physical gold ownership is fundamentally different from paper gold investments like ETFs and futures.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function PhysicalGoldVsPaperPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Header */}
            <header className="bg-slate-50 text-[#000080] py-16 md:py-20">
                <Container>
                    <Link
                        href="/why-gold"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-[#000080] transition-colors mb-6"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Why Gold
                    </Link>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4">
                            <Scale className="h-4 w-4" />
                            Paper vs Real
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Real Gold You Own vs Paper Promises
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Enron employees had stock certificates. Lehman Brothers employees had company shares.
                            They trusted paper. You&apos;ve worked too hard to make the same mistake. Here&apos;s why
                            owning real gold is completely different from owning Wall Street&apos;s paper version.
                        </p>
                    </div>
                </Container>
            </header>

            {/* The Core Difference */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-6 text-center">
                            The Question Nobody Asks
                        </h2>
                        <p className="text-lg text-slate-600 text-center mb-12">
                            When someone says they &quot;own gold&quot; through an ETF, do they really own gold?
                            Or do they own a piece of paper that says someone else might have gold somewhere?
                            That difference matters more than most people realize.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Physical Gold */}
                            <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#B22234] flex items-center justify-center">
                                        <Coins className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#000080]">Real Gold</h3>
                                </div>
                                <p className="text-slate-600 mb-6">
                                    Actual gold coins and bars with your name on them. Stored in a secure vault.
                                    You can drive there and pick them up if you want. That&apos;s ownership.
                                </p>
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>You own it. Period. No middle man.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Nobody can go bankrupt and take it</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Can&apos;t be printed or diluted</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Serial numbers in your name</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>IRS-approved for Gold IRAs</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Paper Gold */}
                            <div className="bg-white rounded-xl p-8 border-2 border-slate-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center">
                                        <FileText className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#000080]">Paper &quot;Gold&quot;</h3>
                                </div>
                                <p className="text-slate-600 mb-6">
                                    ETFs, futures, mining stocks - fancy ways of saying &quot;we promise there&apos;s
                                    gold somewhere.&quot; You own a piece of paper about gold, not actual gold.
                                </p>
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span>Just a promise from Wall Street</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span>If they fail, you&apos;re in line with creditors</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span>May not have enough gold to cover claims</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span>Try asking for your gold - they&apos;ll laugh</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span>NOT allowed in a Gold IRA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Types of Paper Gold */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">
                            What Wall Street Is Actually Selling You
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-[#000080] mb-3">Gold ETFs (GLD, IAU, etc.)</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Your broker might mention these. They track the price of gold. Sound good?
                                    Read the fine print. You don&apos;t own gold. You own shares in a fund.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <h4 className="font-semibold text-red-700 text-sm mb-2">What they don&apos;t tell you:</h4>
                                    <ul className="text-sm text-red-600 space-y-1">
                                        <li>You own shares, not gold - big difference</li>
                                        <li>In a crisis, they can pay you cash instead of gold</li>
                                        <li>Try demanding &quot;your&quot; gold - see what happens</li>
                                        <li>If the fund fails, you&apos;re just another creditor</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-[#000080] mb-3">Gold Futures Contracts</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    This is Vegas-style betting on gold prices. Speculators and traders use these.
                                    Not for someone protecting 30 years of savings.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <h4 className="font-semibold text-red-700 text-sm mb-2">The real problem:</h4>
                                    <ul className="text-sm text-red-600 space-y-1">
                                        <li>Leveraged gambling - you can lose more than you put in</li>
                                        <li>Contracts expire - constant management required</li>
                                        <li>When you cash out, you get dollars, not gold</li>
                                        <li>There are 100+ paper claims for every ounce of real gold</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-[#000080] mb-3">Gold Mining Stocks</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Shares in companies that dig gold out of the ground. Sounds like owning gold, right?
                                    Wrong. You own stock in a company, with all the risks that come with it.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <h4 className="font-semibold text-red-700 text-sm mb-2">Why it&apos;s not the same:</h4>
                                    <ul className="text-sm text-red-600 space-y-1">
                                        <li>Company stock, not gold - Enron was a company too</li>
                                        <li>Bad management can tank the stock even if gold goes up</li>
                                        <li>Strikes, accidents, lawsuits - company problems become your problems</li>
                                        <li>Foreign governments can seize mines - it happens</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-[#000080] mb-3">Gold Certificates</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    A piece of paper that says &quot;you own gold&quot; stored somewhere. Banks used to
                                    issue these. Some still do. It&apos;s exactly what it sounds like - paper.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <h4 className="font-semibold text-red-700 text-sm mb-2">The obvious problem:</h4>
                                    <ul className="text-sm text-red-600 space-y-1">
                                        <li>It&apos;s paper. A promise. From a bank.</li>
                                        <li>Banks can sell more certificates than gold they have</li>
                                        <li>If the bank fails, good luck getting your gold</li>
                                        <li>This exact scheme has failed multiple times in history</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Counterparty Risk Warning */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="h-8 w-8 text-red-600" />
                                <h2 className="text-2xl font-bold text-[#000080]">
                                    The Question You Need to Ask
                                </h2>
                            </div>
                            <p className="text-slate-600 mb-6">
                                When you &quot;own&quot; paper gold, you&apos;re trusting a lot of people to do the right thing.
                                Remember 2008? How&apos;d that trust work out for Lehman employees?
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-red-700 mb-3">Paper Gold Requires Trusting:</h4>
                                    <ul className="space-y-2 text-red-600">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Wall Street fund managers staying honest</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Your broker not going bankrupt</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Banks staying solvent</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Markets staying open when you need them</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>The government not freezing things</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-700 mb-3">Physical Gold Requires Trusting:</h4>
                                    <ul className="space-y-2 text-green-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Nobody. You own it. That&apos;s it.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Coins and bars with YOUR name on them</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Insured vault storage - verified</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Walk in and pick it up anytime you want</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>No bank, broker, or fund can take it</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Paper to Physical Ratio */}
            <section className="py-16 bg-slate-50 text-[#000080]">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Here&apos;s What Keeps Gold Experts Up at Night
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            For every ounce of real gold, there are over 100 paper claims saying &quot;I own that gold.&quot;
                            Think about that for a second.
                        </p>
                        <div className="bg-white rounded-2xl p-8 mb-8 border border-slate-200 shadow-sm">
                            <div className="text-6xl font-bold text-[#B22234] mb-4">100:1</div>
                            <p className="text-slate-600">
                                Paper claims to actual gold - like a game of musical chairs with 100 people and 1 chair
                            </p>
                        </div>
                        <p className="text-slate-500">
                            If even 2% of paper gold holders said &quot;I want my actual gold&quot; at the same time,
                            the whole system falls apart. That&apos;s why Dave, a retired steelworker from Pennsylvania,
                            told us: &quot;Paper promises are fine until everyone wants their promise kept at once.
                            I wanted the real thing.&quot;
                        </p>
                    </div>
                </Container>
            </section>

            {/* Why Physical Gold for IRAs */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">
                            Why Physical Gold for Your IRA?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                    <Lock className="h-8 w-8 text-[#B22234]" />
                                </div>
                                <h3 className="font-bold text-[#000080] mb-2">True Ownership</h3>
                                <p className="text-sm text-slate-600">
                                    In a Gold IRA, specific coins and bars are allocated to you by serial number.
                                    You own them—not shares in a fund.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="h-8 w-8 text-[#B22234]" />
                                </div>
                                <h3 className="font-bold text-[#000080] mb-2">IRS-Approved Storage</h3>
                                <p className="text-sm text-slate-600">
                                    Your gold is held in secure, insured, IRS-approved depositories.
                                    Regularly audited and segregated from other assets.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-8 w-8 text-[#B22234]" />
                                </div>
                                <h3 className="font-bold text-[#000080] mb-2">Tax Advantages</h3>
                                <p className="text-sm text-slate-600">
                                    Same tax benefits as traditional IRAs. Tax-deferred growth (Traditional)
                                    or tax-free withdrawals (Roth).
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
                            <div className="flex items-start gap-4">
                                <Building2 className="h-8 w-8 text-[#B22234] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-[#000080] mb-2">Important: ETFs Are NOT Allowed in Gold IRAs</h3>
                                    <p className="text-slate-600">
                                        The IRS requires that Gold IRAs hold actual physical precious metals—not ETFs,
                                        futures, or other paper gold. This is actually a benefit, as it ensures you
                                        have real gold, not just paper promises, protecting your retirement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">
                            Side-by-Side Comparison
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white rounded-xl border border-slate-200 shadow-sm">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-4 font-bold text-[#000080]">Feature</th>
                                        <th className="p-4 font-bold text-[#B22234]">Physical Gold</th>
                                        <th className="p-4 font-bold text-slate-500">Paper Gold</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 text-slate-600">
                                    <tr>
                                        <td className="p-4 font-medium text-[#000080]">Ownership</td>
                                        <td className="p-4 text-green-600">Direct, allocated to you</td>
                                        <td className="p-4 text-red-600">Shares/claims on pool</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-[#000080]">Counterparty Risk</td>
                                        <td className="p-4 text-green-600">None</td>
                                        <td className="p-4 text-red-600">Issuer, broker, exchange</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-[#000080]">Physical Delivery</td>
                                        <td className="p-4 text-green-600">Yes, anytime</td>
                                        <td className="p-4 text-red-600">Usually not possible</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-[#000080]">Gold IRA Eligible</td>
                                        <td className="p-4 text-green-600">Yes</td>
                                        <td className="p-4 text-red-600">No</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-[#000080]">Crisis Protection</td>
                                        <td className="p-4 text-green-600">Unaffected by financial system</td>
                                        <td className="p-4 text-red-600">Vulnerable to system failure</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-[#000080]">Trading Convenience</td>
                                        <td className="p-4 text-amber-600">Less liquid, 1-3 day process</td>
                                        <td className="p-4 text-green-600">Instant trading</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-[#000080]">Annual Fees</td>
                                        <td className="p-4 text-amber-600">Storage fees (~$100-300/yr)</td>
                                        <td className="p-4 text-green-600">Lower expense ratios</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Bottom Line */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-[#000080] mb-6">
                            The Choice Is Simple
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            You worked 30+ years. You didn&apos;t do it to own somebody&apos;s promise.
                            For day traders playing games, paper gold is fine. For protecting what you&apos;ve built?
                            You want the real thing. Something you actually own. Something no bank, broker,
                            or fund manager can take from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/what-is-a-gold-ira"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-[#000080] font-bold rounded-xl hover:bg-slate-200 transition-all border border-slate-200"
                            >
                                How Gold IRAs Work
                            </Link>
                            <Link
                                href="/reviews/augusta-precious-metals"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B22234] text-white font-bold rounded-xl hover:bg-[#8B0000] transition-all shadow-lg"
                            >
                                Get Free Info Kit
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Questions About Real vs Paper Gold?"
                        subheadline="Augusta Precious Metals helps workers move their retirement savings into real, physical gold they actually own. No paper promises. Just real gold with your name on it."
                        trackSource="why-gold-physical-vs-paper"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
