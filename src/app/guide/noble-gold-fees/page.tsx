import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, XCircle, DollarSign, AlertTriangle, Award, Scale, Building2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export const metadata: Metadata = {
    title: "Noble Gold Fees Breakdown 2026: Setup, Storage & Annual Costs",
    description: "Complete breakdown of Noble Gold fees. Compare setup costs, annual fees, storage charges, and spreads. See how Noble Gold compares to Augusta and Goldco.",
    openGraph: {
        title: "Noble Gold Fees Breakdown 2026: Complete Cost Analysis",
        description: "Complete breakdown of Noble Gold fees. Compare setup costs, annual fees, storage charges, and spreads.",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function NobleGoldFeesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Header */}
            <header className="bg-[#0C0D18] py-16 md:py-24 border-b border-[#2A2D42]">
                <Container>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#D4A94E] font-bold tracking-widest uppercase text-xs mb-4">
                            <DollarSign className="h-4 w-4" />
                            Fee Analysis
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#F6F4EF]">
                            Noble Gold Fees Breakdown
                        </h1>
                        <p className="text-xl text-[#D0CCC4] leading-relaxed">
                            Complete cost analysis of Noble Gold Investments. We break down every fee so you know exactly what you&apos;ll pay—and how it compares to competitors.
                        </p>
                        <p className="text-sm text-[#A8A39A] mt-4">Last Updated: January 2026</p>
                    </div>
                </Container>
            </header>

            {/* Quick Summary */}
            <section className="py-12 bg-[#121423] border-b border-[#2A2D42]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Setup Fee</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$80</p>
                            </div>
                            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Annual Fee</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$80</p>
                            </div>
                            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Storage Fee</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$150/yr</p>
                            </div>
                            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5 text-center">
                                <p className="text-[#D0CCC4] text-sm mb-1">Minimum</p>
                                <p className="text-2xl font-bold text-[#F6F4EF]">$20,000</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Detailed Fee Breakdown */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-8">Noble Gold Fee Structure</h2>

                            <div className="space-y-6">
                                {/* Setup Fee */}
                                <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Account Setup Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">One-time fee when you open your Gold IRA</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$80</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm">
                                        This covers the administrative costs of establishing your self-directed IRA with their custodian partner. Some competitors charge $50-$100 for this service.
                                    </p>
                                </div>

                                {/* Annual Fee */}
                                <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Annual Maintenance Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">Charged yearly by the custodian</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$80/year</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm">
                                        This is the IRA custodian&apos;s fee for maintaining your account, handling paperwork, and providing statements. Industry average is $75-$100.
                                    </p>
                                </div>

                                {/* Storage Fee */}
                                <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Storage Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">Annual fee for IRS-approved depository</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$150/year</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm mb-4">
                                        Your physical gold must be stored at an IRS-approved depository. Noble Gold uses Delaware Depository, one of the most reputable facilities. This flat fee applies regardless of how much gold you hold.
                                    </p>
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                                        <p className="text-amber-800 text-sm">
                                            <strong className="text-[#D4A94E]">Note:</strong> Some companies charge percentage-based storage (0.5% of holdings), which becomes much more expensive as your portfolio grows. Noble Gold&apos;s flat fee is an advantage for larger accounts.
                                        </p>
                                    </div>
                                </div>

                                {/* Wire Fee */}
                                <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Wire Transfer Fee</h3>
                                            <p className="text-[#D0CCC4] text-sm">For incoming/outgoing wire transfers</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">$30</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm">
                                        Standard industry fee for wire transfers. Only applies when you move money in or out via wire.
                                    </p>
                                </div>

                                {/* Spreads */}
                                <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F6F4EF]">Spreads (Markup)</h3>
                                            <p className="text-[#D0CCC4] text-sm">Difference between buy and sell price</p>
                                        </div>
                                        <span className="text-2xl font-bold text-[#D4A94E]">Varies</span>
                                    </div>
                                    <p className="text-[#D0CCC4] text-sm mb-4">
                                        This is where the real cost is. Noble Gold (like all dealers) charges a spread—the difference between what you pay to buy gold and what they&apos;ll pay when you sell. This is typically 5-8% above spot price.
                                    </p>
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                                        <p className="text-red-800 text-sm">
                                            <strong className="text-red-700">Important:</strong> Spreads are the largest cost in any Gold IRA and are often not clearly disclosed. Always ask for a price quote on specific products before purchasing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Total Annual Cost Example */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">Total Annual Cost Example</h2>
                            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-2xl p-6">
                                <h4 className="font-bold text-[#F6F4EF] mb-4">For a $50,000 Gold IRA with Noble Gold:</h4>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center p-3 bg-[#121423] rounded-lg">
                                        <span className="text-[#D0CCC4]">Year 1 Setup Fee</span>
                                        <span className="font-bold text-[#F6F4EF]">$80</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[#121423] rounded-lg">
                                        <span className="text-[#D0CCC4]">Annual Maintenance Fee</span>
                                        <span className="font-bold text-[#F6F4EF]">$80</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[#121423] rounded-lg">
                                        <span className="text-[#D0CCC4]">Storage Fee</span>
                                        <span className="font-bold text-[#F6F4EF]">$150</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                                        <span className="text-amber-800 font-medium">First Year Total (excluding spreads)</span>
                                        <span className="font-bold text-[#D4A94E]">$310</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                                        <span className="text-green-800 font-medium">Ongoing Annual Cost</span>
                                        <span className="font-bold text-green-700">$230/year</span>
                                    </div>
                                </div>
                                <p className="text-[#D0CCC4] text-sm">
                                    This equals about 0.46% of a $50,000 portfolio annually—competitive with industry averages.
                                </p>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">How Noble Gold Compares</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[#2A2D42]">
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Company</th>
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Setup</th>
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Annual</th>
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Storage</th>
                                            <th className="text-left p-4 text-[#F6F4EF] font-bold">Minimum</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#D0CCC4]">
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Noble Gold</td>
                                            <td className="p-4">$80</td>
                                            <td className="p-4">$80</td>
                                            <td className="p-4">$150</td>
                                            <td className="p-4">$20,000</td>
                                        </tr>
                                        <tr className="border-b border-white/5 bg-amber-500/5">
                                            <td className="p-4 font-medium text-[#D4A94E]">
                                                Augusta Precious Metals
                                                <span className="ml-2 text-xs bg-amber-500 text-[#F6F4EF] px-2 py-0.5 rounded">Our #1</span>
                                            </td>
                                            <td className="p-4">$50</td>
                                            <td className="p-4">$80</td>
                                            <td className="p-4">$100</td>
                                            <td className="p-4">$50,000</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Goldco</td>
                                            <td className="p-4">$50</td>
                                            <td className="p-4">$80</td>
                                            <td className="p-4">$150</td>
                                            <td className="p-4">$25,000</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">Birch Gold</td>
                                            <td className="p-4">$50</td>
                                            <td className="p-4">$100</td>
                                            <td className="p-4">$150</td>
                                            <td className="p-4">$10,000</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-[#F6F4EF]">American Hartford</td>
                                            <td className="p-4">$0*</td>
                                            <td className="p-4">$75</td>
                                            <td className="p-4">$100</td>
                                            <td className="p-4">$10,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-[#A8A39A] text-sm mt-4">
                                *Some companies waive setup fees but have higher spreads. Always compare total cost.
                            </p>
                        </div>

                        {/* Pros and Cons */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">Noble Gold Fees: Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                                    <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        Advantages
                                    </h3>
                                    <ul className="space-y-3 text-green-800">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Flat storage fee (better for large accounts)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Lower minimum ($20k) than Augusta
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Competitive annual fees
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            Delaware Depository (top-tier storage)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-1 shrink-0" />
                                            No hidden fees (transparent pricing)
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                                    <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                                        <XCircle className="h-5 w-5" />
                                        Disadvantages
                                    </h3>
                                    <ul className="space-y-3 text-red-800">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            Higher setup fee than some competitors
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            Spreads not publicly disclosed
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            $150 storage fee higher than some
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 mt-1 shrink-0" />
                                            Less educational content than Augusta
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Recommendation */}
                        <div className="mb-16">
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Award className="h-8 w-8 text-[#D4A94E]" />
                                    <h2 className="text-2xl font-bold text-[#F6F4EF]">Our Recommendation</h2>
                                </div>
                                <p className="text-[#D0CCC4] mb-6">
                                    Noble Gold&apos;s fees are competitive but not the lowest. Their $20,000 minimum makes them accessible to more investors than Augusta ($50,000 minimum). However, for serious retirement investors with $50,000+, we recommend <strong className="text-[#D4A94E]">Augusta Precious Metals</strong> for their superior education, lower storage fees, and transparent pricing.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <LeadCaptureButton variant="default" source="guide-noble-fees" className="bg-amber-500 hover:bg-amber-600 text-[#F6F4EF] px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                                        Compare with Augusta <ArrowRight className="ml-2 h-4 w-4" />
                                    </LeadCaptureButton>
                                    <Button variant="outline" size="lg" asChild className="border-white/20 text-[#F6F4EF] hover:bg-slate-200">
                                        <Link href="/reviews/noble-gold">
                                            Full Noble Gold Review
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <details className="group bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <summary className="flex cursor-pointer items-center justify-between text-[#F6F4EF] font-bold">
                                        Does Noble Gold waive fees for larger accounts?
                                        <span className="text-[#D4A94E]">+</span>
                                    </summary>
                                    <p className="mt-4 text-[#D0CCC4]">
                                        Noble Gold occasionally offers promotions that waive the first year&apos;s fees for larger accounts. Ask your representative about current promotions when you call.
                                    </p>
                                </details>
                                <details className="group bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <summary className="flex cursor-pointer items-center justify-between text-[#F6F4EF] font-bold">
                                        Are Noble Gold&apos;s spreads competitive?
                                        <span className="text-[#D4A94E]">+</span>
                                    </summary>
                                    <p className="mt-4 text-[#D0CCC4]">
                                        Noble Gold doesn&apos;t publicly disclose spreads, which is common in the industry. Before purchasing, request a quote for specific products and compare with spot prices. Typical industry spreads are 5-8% for gold coins.
                                    </p>
                                </details>
                                <details className="group bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <summary className="flex cursor-pointer items-center justify-between text-[#F6F4EF] font-bold">
                                        Can I transfer to Noble Gold from another Gold IRA company?
                                        <span className="text-[#D4A94E]">+</span>
                                    </summary>
                                    <p className="mt-4 text-[#D0CCC4]">
                                        Yes, you can transfer your existing Gold IRA to Noble Gold. They typically waive the setup fee for transfers. Your existing metals can be transferred in-kind (without selling).
                                    </p>
                                </details>
                                <details className="group bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                                    <summary className="flex cursor-pointer items-center justify-between text-[#F6F4EF] font-bold">
                                        Is segregated storage available?
                                        <span className="text-[#D4A94E]">+</span>
                                    </summary>
                                    <p className="mt-4 text-[#D0CCC4]">
                                        Yes, Noble Gold offers segregated storage (your metals stored separately, not commingled) for an additional fee. Standard storage is commingled but fully insured.
                                    </p>
                                </details>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#F6F4EF] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#F6F4EF]">Want the Lowest Fees?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">
                                    Get a personalized fee comparison from Augusta Precious Metals—they&apos;ll show you exactly what you&apos;ll pay with no hidden costs.
                                </p>
                                <Button variant="gold" size="xl" asChild>
                                    <Link href="/quiz">
                                        Get Free Fee Comparison <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-[#121423]">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-noble-gold-fees" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
