import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, ArrowLeftRight, Building2, User, Clock, DollarSign, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Direct vs Indirect Rollover: Which Should You Choose? (2026 Guide)",
    description: "Understand the critical differences between direct and indirect rollovers. Avoid the 20% withholding trap and 60-day deadline. Expert Gold IRA rollover guide.",
    openGraph: {
        title: "Direct vs Indirect Rollover: Which Should You Choose?",
        description: "Understand the critical differences between direct and indirect rollovers. Avoid the 20% withholding trap.",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function IndirectVsDirectRolloverPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Header */}
            <header className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
                <Container>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4">
                            <ArrowLeftRight className="h-4 w-4" />
                            Rollover Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#000080]">
                            Direct vs Indirect Rollover
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Pick the wrong method and you could lose $20,000+ to taxes you didn&apos;t need to pay. Here&apos;s how to do this right and keep more of what you&apos;ve earned.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Warning Banner */}
            <section className="bg-red-50 border-b border-red-200 py-6">
                <Container>
                    <div className="flex items-center gap-4 max-w-4xl mx-auto">
                        <AlertTriangle className="h-8 w-8 text-red-600 shrink-0" />
                        <p className="text-red-800">
                            <strong className="text-red-700">Important:</strong> An indirect rollover can trigger 20% mandatory tax withholding and a 60-day deadline. Choose the wrong method and you could lose thousands. Always use a direct rollover when possible.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Quick Answer */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-[#000080] mb-4">The Short Answer</h2>
                            <p className="text-lg text-slate-600 mb-4">
                                <strong className="text-green-600">Always choose a direct rollover (trustee-to-trustee transfer).</strong> Your money goes directly from one retirement account to another without you ever touching it. No withholding. No deadline. No risk.
                            </p>
                            <p className="text-slate-500">
                                An indirect rollover is almost never necessary and creates unnecessary tax complications.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Visual Comparison */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">How Each Rollover Works</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Direct Rollover */}
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-green-100 rounded-lg">
                                            <Shield className="h-6 w-6 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-700">Direct Rollover</h3>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-slate-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#000080] font-medium">Old 401(k)/IRA</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <ArrowRight className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[#B22234]/10 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-[#B22234]" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#000080] font-medium">New Gold IRA</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-green-700 text-sm">
                                        Money transfers directly between institutions. You never touch the funds.
                                    </p>
                                </div>

                                {/* Indirect Rollover */}
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-red-100 rounded-lg">
                                            <AlertTriangle className="h-6 w-6 text-red-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-700">Indirect Rollover</h3>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-slate-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#000080] font-medium">Old 401(k)/IRA</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <ArrowRight className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                                <User className="h-5 w-5 text-red-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#000080] font-medium">YOU (check in your name)</p>
                                                <p className="text-red-600 text-xs">20% withheld!</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <ArrowRight className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[#B22234]/10 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-[#B22234]" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#000080] font-medium">New Gold IRA</p>
                                                <p className="text-[#B22234] text-xs">Within 60 days!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-red-700 text-sm">
                                        Check sent to you. 20% withheld. Must deposit full amount within 60 days.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-50">
                                            <th className="text-left p-4 text-[#000080] font-bold">Feature</th>
                                            <th className="text-left p-4 text-green-700 font-bold">Direct Rollover</th>
                                            <th className="text-left p-4 text-red-700 font-bold">Indirect Rollover</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-[#000080]">Tax Withholding</td>
                                            <td className="p-4 text-green-700">
                                                <CheckCircle2 className="inline h-4 w-4 mr-1" />
                                                None
                                            </td>
                                            <td className="p-4 text-red-700">
                                                <XCircle className="inline h-4 w-4 mr-1" />
                                                20% mandatory
                                            </td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-[#000080]">Time Limit</td>
                                            <td className="p-4 text-green-700">
                                                <CheckCircle2 className="inline h-4 w-4 mr-1" />
                                                None
                                            </td>
                                            <td className="p-4 text-red-700">
                                                <XCircle className="inline h-4 w-4 mr-1" />
                                                60 days strict
                                            </td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-[#000080]">Annual Limit</td>
                                            <td className="p-4 text-green-700">
                                                <CheckCircle2 className="inline h-4 w-4 mr-1" />
                                                Unlimited
                                            </td>
                                            <td className="p-4 text-red-700">
                                                <XCircle className="inline h-4 w-4 mr-1" />
                                                Once per 12 months
                                            </td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-[#000080]">Check Made Out To</td>
                                            <td className="p-4">New IRA custodian</td>
                                            <td className="p-4">You personally</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-[#000080]">Risk of Penalties</td>
                                            <td className="p-4 text-green-700">None</td>
                                            <td className="p-4 text-red-700">High (miss deadline = taxes + 10% penalty)</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-[#000080]">Recommended?</td>
                                            <td className="p-4 text-green-700 font-bold">YES - Always</td>
                                            <td className="p-4 text-red-700">NO - Avoid if possible</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* The 20% Withholding Problem */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">The 20% Withholding Trap</h2>
                            <p className="text-slate-600 mb-6">
                                Here&apos;s why indirect rollovers are so problematic. Let&apos;s say you have $100,000 in your 401(k):
                            </p>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                                <h4 className="font-bold text-[#000080] mb-4">Example: $100,000 Indirect Rollover</h4>
                                <div className="space-y-4 text-slate-600">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                                        <span>Your 401(k) balance</span>
                                        <span className="font-bold text-[#000080]">$100,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                                        <span>Mandatory 20% withholding</span>
                                        <span className="font-bold text-red-700">-$20,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                                        <span>Check you receive</span>
                                        <span className="font-bold text-[#000080]">$80,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                                        <span>Amount you must deposit to avoid taxes/penalties</span>
                                        <span className="font-bold text-[#B22234]">$100,000</span>
                                    </div>
                                </div>
                                <p className="text-red-700 text-sm mt-4">
                                    <strong>The Problem:</strong> You only received $80,000, but you need to deposit $100,000 within 60 days. You must come up with $20,000 out of pocket!
                                </p>
                            </div>

                            <p className="text-slate-600">
                                If you don&apos;t deposit the full $100,000, the $20,000 shortfall is treated as a distribution. You&apos;ll owe income tax on it, plus a 10% early withdrawal penalty if you&apos;re under 59½. That $20,000 &quot;withheld&quot; could cost you $5,000-$8,000 in total taxes and penalties.
                            </p>
                        </div>

                        {/* The 60-Day Rule */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-[#B22234]/10 rounded-xl">
                                    <Clock className="h-6 w-6 text-[#B22234]" />
                                </div>
                                <h2 className="text-3xl font-bold text-[#000080]">The 60-Day Deadline</h2>
                            </div>
                            <p className="text-slate-600 mb-6">
                                With an indirect rollover, you have exactly <strong className="text-[#000080]">60 calendar days</strong> to deposit the funds into your new IRA. Miss this deadline by even one day, and the entire amount becomes a taxable distribution.
                            </p>
                            <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                                <h4 className="font-bold text-[#B22234] mb-3">What Can Go Wrong:</h4>
                                <ul className="space-y-2 text-red-800">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0 text-[#B22234]" />
                                        Check gets lost in the mail
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0 text-[#B22234]" />
                                        Processing delays at new custodian
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0 text-[#B22234]" />
                                        Holiday or weekend falls near deadline
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0 text-[#B22234]" />
                                        You forget about it (life happens)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0 text-[#B22234]" />
                                        Medical emergency or family issue
                                    </li>
                                </ul>
                                <p className="text-red-800 text-sm mt-4">
                                    The IRS rarely grants extensions. One missed deadline can cost you tens of thousands in taxes.
                                </p>
                            </div>
                        </div>

                        {/* One Per Year Rule */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">The Once-Per-Year Rule</h2>
                            <p className="text-slate-600 mb-6">
                                There&apos;s another catch with indirect rollovers: you can only do <strong className="text-[#000080]">one indirect rollover per 12-month period</strong> across all your IRAs. Do more than one and the second becomes a taxable distribution.
                            </p>
                            <p className="text-slate-600">
                                Direct rollovers have no such limit. You can do as many direct (trustee-to-trustee) transfers as you want.
                            </p>
                        </div>

                        {/* When to Use Indirect */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">When Would You Use an Indirect Rollover?</h2>
                            <p className="text-slate-600 mb-6">
                                Honestly? Almost never. The only scenario where an indirect rollover makes sense is if you need to use the funds temporarily as a short-term loan to yourself.
                            </p>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                <h4 className="font-bold text-[#000080] mb-3">Example &quot;Bridge Loan&quot; Scenario:</h4>
                                <p className="text-slate-600 text-sm">
                                    You&apos;re buying a house and need $50,000 for a down payment. Your old house hasn&apos;t sold yet. You could take an indirect rollover, use the $50,000 for the down payment, then redeposit it (plus the 20% withholding from your own funds) within 60 days once your old house sells.
                                </p>
                                <p className="text-[#B22234] text-sm mt-3">
                                    <strong>Warning:</strong> This is risky. If your house doesn&apos;t sell in time, you&apos;ll owe taxes and penalties on the entire amount.
                                </p>
                            </div>
                        </div>

                        {/* How to Request Direct */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-[#000080] mb-6">How to Request a Direct Rollover</h2>
                            <p className="text-slate-600 mb-6">
                                When contacting your 401(k) administrator or IRA custodian, use these exact phrases:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                                    <p className="text-green-800 font-medium">&quot;I want to do a <strong className="text-green-700">direct rollover</strong> to my new IRA.&quot;</p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                                    <p className="text-green-800 font-medium">&quot;Please make the check payable to <strong className="text-green-700">[New Custodian Name] FBO [Your Name]</strong>.&quot;</p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                                    <p className="text-green-800 font-medium">&quot;I want a <strong className="text-green-700">trustee-to-trustee transfer</strong>.&quot;</p>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm mt-4">
                                &quot;FBO&quot; means &quot;For Benefit Of&quot; — this indicates the check is going to your IRA, not to you personally.
                            </p>
                        </div>

                        {/* Summary Box */}
                        <div className="mb-16">
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-[#000080] mb-6 text-center">Bottom Line</h2>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                                        <h4 className="font-bold text-[#000080] mb-2">Zero Risk</h4>
                                        <p className="text-slate-600 text-sm">Direct rollovers have no withholding, no deadline, and no annual limits.</p>
                                    </div>
                                    <div>
                                        <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
                                        <h4 className="font-bold text-[#000080] mb-2">No Out-of-Pocket</h4>
                                        <p className="text-slate-600 text-sm">You won&apos;t need to come up with 20% from your own funds.</p>
                                    </div>
                                    <div>
                                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-3" />
                                        <h4 className="font-bold text-[#000080] mb-2">Simple Process</h4>
                                        <p className="text-slate-600 text-sm">Your Gold IRA company handles most of the paperwork.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Move Your 401(k)?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">
                                    Let someone else handle the paperwork. No 20% taken out, no panic about missing a deadline. Just a clean transfer.
                                </p>
                                <Button variant="gold" size="xl" asChild>
                                    <Link href="/quiz">
                                        Start My Direct Rollover <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Content */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <Container>
                    <h2 className="text-2xl font-bold text-[#000080] mb-8 text-center">Related Rollover Guides</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/guide/401k-to-gold-rollover" className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-[#B22234]/50 transition-all shadow-sm">
                            <h3 className="font-bold text-[#000080] group-hover:text-[#B22234] mb-2">401(k) to Gold IRA</h3>
                            <p className="text-slate-500 text-sm">Complete guide for 401(k) holders</p>
                        </Link>
                        <Link href="/guide/tsp-to-gold-ira-rollover" className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-[#B22234]/50 transition-all shadow-sm">
                            <h3 className="font-bold text-[#000080] group-hover:text-[#B22234] mb-2">TSP to Gold IRA</h3>
                            <p className="text-slate-500 text-sm">For federal employees</p>
                        </Link>
                        <Link href="/guide/457b-to-gold-ira-rollover" className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-[#B22234]/50 transition-all shadow-sm">
                            <h3 className="font-bold text-[#000080] group-hover:text-[#B22234] mb-2">457(b) to Gold IRA</h3>
                            <p className="text-slate-500 text-sm">For government workers</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Footer CTA */}
            <section className="py-16">
                <Container>
                    <AugustaCTA variant="footer" trackSource="learn-indirect-vs-direct" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
