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
    title: "Physical Gold vs Paper Gold: Which Is Better for Your IRA? | Rich Dad Retirement",
    description: "Compare physical gold vs paper gold (ETFs, futures, mining stocks). Learn the key differences, risks, and why physical gold ownership matters for retirement security.",
    openGraph: {
        title: "Physical Gold vs Paper Gold: The Critical Differences",
        description: "Understand why physical gold ownership is fundamentally different from paper gold investments like ETFs and futures.",
        type: "article",
    },
};

export default function PhysicalGoldVsPaperPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Header */}
            <header className="bg-gradient-to-br from-amber-900 via-amber-800 to-slate-900 text-white py-16 md:py-20">
                <Container>
                    <Link
                        href="/why-gold"
                        className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Why Gold
                    </Link>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
                            <Scale className="h-4 w-4" />
                            Investment Comparison
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Physical Gold vs Paper Gold
                        </h1>
                        <p className="text-xl text-amber-100 leading-relaxed">
                            Not all gold investments are created equal. Understanding the difference between
                            owning real gold and owning &quot;paper gold&quot; could make or break your retirement security.
                        </p>
                    </div>
                </Container>
            </header>

            {/* The Core Difference */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                            The Fundamental Difference
                        </h2>
                        <p className="text-lg text-slate-600 text-center mb-12">
                            When you buy &quot;paper gold,&quot; you&apos;re buying a promise. When you buy physical gold,
                            you own the real thing.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Physical Gold */}
                            <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                                        <Coins className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Physical Gold</h3>
                                </div>
                                <p className="text-slate-600 mb-6">
                                    Actual gold coins and bars that you own directly. Stored in secure vaults
                                    in your name. You can take physical possession.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Real, tangible asset you own</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No counterparty risk</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Cannot be diluted or debased</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Allocated specifically to you</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Can be held in a Gold IRA</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Paper Gold */}
                            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center">
                                        <FileText className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Paper Gold</h3>
                                </div>
                                <p className="text-slate-600 mb-6">
                                    ETFs, futures contracts, mining stocks, or certificates that represent
                                    gold exposure. You don&apos;t own actual metal.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span>Financial derivative, not real gold</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span>Counterparty risk (issuer can fail)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span>Often not fully backed by gold</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span>Can&apos;t take physical possession</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Types of &quot;Paper Gold&quot; Investments
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-3">Gold ETFs (GLD, IAU, etc.)</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Exchange-traded funds that are supposed to track the price of gold. You buy shares
                                    like a stock. The fund claims to hold physical gold in vaults.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-800 text-sm mb-2">The Problem:</h4>
                                    <ul className="text-sm text-red-700 space-y-1">
                                        <li>• You own shares in a fund, not actual gold</li>
                                        <li>• Fine print often allows cash settlement instead of gold</li>
                                        <li>• In a crisis, you can&apos;t demand physical delivery</li>
                                        <li>• Fund can fail or be frozen by regulators</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-3">Gold Futures Contracts</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Agreements to buy or sell gold at a future date. Used primarily by traders
                                    and speculators for leveraged bets on gold prices.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-800 text-sm mb-2">The Problem:</h4>
                                    <ul className="text-sm text-red-700 space-y-1">
                                        <li>• Highly leveraged and speculative</li>
                                        <li>• Contracts expire and must be rolled over</li>
                                        <li>• Most are settled in cash, not gold</li>
                                        <li>• Estimated 100+ paper claims exist for each ounce of physical gold</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-3">Gold Mining Stocks</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Shares in companies that mine gold. Stock prices are influenced by gold prices
                                    but also by company management, mining costs, and geopolitical risks.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-800 text-sm mb-2">The Problem:</h4>
                                    <ul className="text-sm text-red-700 space-y-1">
                                        <li>• You own company shares, not gold</li>
                                        <li>• Company can have management problems, accidents, strikes</li>
                                        <li>• Gold prices can rise while mining stocks fall</li>
                                        <li>• Nationalization risk in foreign countries</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-3">Gold Certificates</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Certificates issued by banks or dealers claiming you own gold stored somewhere.
                                    Popular in the past, now less common.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-800 text-sm mb-2">The Problem:</h4>
                                    <ul className="text-sm text-red-700 space-y-1">
                                        <li>• Just a piece of paper—a promise</li>
                                        <li>• Bank could be selling more certificates than gold they hold</li>
                                        <li>• In a bank failure, you become an unsecured creditor</li>
                                        <li>• Historically, many certificate programs have failed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Counterparty Risk Warning */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="h-8 w-8 text-red-600" />
                                <h2 className="text-2xl font-bold text-red-900">
                                    The Counterparty Risk Problem
                                </h2>
                            </div>
                            <p className="text-red-800 mb-6">
                                &quot;Counterparty risk&quot; means depending on someone else to keep their promise.
                                Paper gold has enormous counterparty risk:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-red-900 mb-3">Paper Gold Depends On:</h4>
                                    <ul className="space-y-2 text-red-700">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Fund managers staying honest</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Brokers remaining solvent</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Banks not failing</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Exchanges operating normally</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Governments not freezing assets</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-800 mb-3">Physical Gold Depends On:</h4>
                                    <ul className="space-y-2 text-green-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Nothing—you own it directly</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>It&apos;s allocated in your name</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Stored in insured vaults</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>You can take delivery anytime</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <span>Not dependent on any institution</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Paper to Physical Ratio */}
            <section className="py-16 bg-slate-900 text-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            The &quot;Paper Gold&quot; Problem
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Experts estimate there are 100+ paper claims for every ounce of physical gold.
                        </p>
                        <div className="bg-slate-800 rounded-2xl p-8 mb-8">
                            <div className="text-6xl font-bold text-amber-400 mb-4">100:1</div>
                            <p className="text-slate-300">
                                Estimated ratio of paper gold claims to physical gold backing
                            </p>
                        </div>
                        <p className="text-slate-400">
                            In a crisis, if even a fraction of paper gold holders demanded physical delivery,
                            the system would collapse. This is why owning <strong className="text-white">physical gold</strong> is
                            fundamentally different from owning paper promises.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Why Physical Gold for IRAs */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Why Physical Gold for Your IRA?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                    <Lock className="h-8 w-8 text-amber-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">True Ownership</h3>
                                <p className="text-sm text-slate-600">
                                    In a Gold IRA, specific coins and bars are allocated to you by serial number.
                                    You own them—not shares in a fund.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="h-8 w-8 text-amber-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">IRS-Approved Storage</h3>
                                <p className="text-sm text-slate-600">
                                    Your gold is held in secure, insured, IRS-approved depositories.
                                    Regularly audited and segregated from other assets.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-8 w-8 text-amber-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Tax Advantages</h3>
                                <p className="text-sm text-slate-600">
                                    Same tax benefits as traditional IRAs. Tax-deferred growth (Traditional)
                                    or tax-free withdrawals (Roth).
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
                            <div className="flex items-start gap-4">
                                <Building2 className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Important: ETFs Are NOT Allowed in Gold IRAs</h3>
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Side-by-Side Comparison
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="p-4 font-bold text-slate-900">Feature</th>
                                        <th className="p-4 font-bold text-amber-600">Physical Gold</th>
                                        <th className="p-4 font-bold text-slate-500">Paper Gold</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-4 font-medium">Ownership</td>
                                        <td className="p-4 text-green-600">Direct, allocated to you</td>
                                        <td className="p-4 text-red-600">Shares/claims on pool</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Counterparty Risk</td>
                                        <td className="p-4 text-green-600">None</td>
                                        <td className="p-4 text-red-600">Issuer, broker, exchange</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Physical Delivery</td>
                                        <td className="p-4 text-green-600">Yes, anytime</td>
                                        <td className="p-4 text-red-600">Usually not possible</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Gold IRA Eligible</td>
                                        <td className="p-4 text-green-600">Yes</td>
                                        <td className="p-4 text-red-600">No</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Crisis Protection</td>
                                        <td className="p-4 text-green-600">Unaffected by financial system</td>
                                        <td className="p-4 text-red-600">Vulnerable to system failure</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Trading Convenience</td>
                                        <td className="p-4 text-amber-600">Less liquid, 1-3 day process</td>
                                        <td className="p-4 text-green-600">Instant trading</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Annual Fees</td>
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
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            The Bottom Line
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Paper gold can be useful for short-term trading. But for <strong>long-term retirement security</strong>,
                            there&apos;s no substitute for owning real, physical gold. When the financial system
                            is stressed, you want to own the metal—not a promise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/what-is-a-gold-ira"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all border border-slate-200"
                            >
                                Learn About Gold IRAs
                            </Link>
                            <Link
                                href="/reviews/augusta-precious-metals"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
                            >
                                Get Free Gold IRA Kit
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
                        headline="Ready to Own Real Gold?"
                        subheadline="Augusta Precious Metals specializes in helping Americans protect their retirement with physical precious metals—not paper promises."
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
