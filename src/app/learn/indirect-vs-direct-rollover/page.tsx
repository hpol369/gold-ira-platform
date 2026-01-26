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
    },
};

export default function IndirectVsDirectRolloverPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            {/* Header */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 border-b border-white/10">
                <Container>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
                            <ArrowLeftRight className="h-4 w-4" />
                            Rollover Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Direct vs Indirect Rollover
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Pick the wrong method and you could lose $20,000+ to taxes you didn&apos;t need to pay. Here&apos;s how to do this right and keep more of what you&apos;ve earned.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Warning Banner */}
            <section className="bg-red-500/10 border-b border-red-500/30 py-6">
                <Container>
                    <div className="flex items-center gap-4 max-w-4xl mx-auto">
                        <AlertTriangle className="h-8 w-8 text-red-400 shrink-0" />
                        <p className="text-red-300">
                            <strong className="text-red-400">Important:</strong> An indirect rollover can trigger 20% mandatory tax withholding and a 60-day deadline. Choose the wrong method and you could lose thousands. Always use a direct rollover when possible.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Quick Answer */}
            <section className="py-12 bg-slate-800/50 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">The Short Answer</h2>
                            <p className="text-lg text-slate-300 mb-4">
                                <strong className="text-green-400">Always choose a direct rollover (trustee-to-trustee transfer).</strong> Your money goes directly from one retirement account to another without you ever touching it. No withholding. No deadline. No risk.
                            </p>
                            <p className="text-slate-400">
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
                            <h2 className="text-3xl font-bold text-white mb-8 text-center">How Each Rollover Works</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Direct Rollover */}
                                <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <Shield className="h-6 w-6 text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-400">Direct Rollover</h3>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-slate-300" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-medium">Old 401(k)/IRA</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <ArrowRight className="h-6 w-6 text-green-400" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-amber-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-medium">New Gold IRA</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-green-300 text-sm">
                                        Money transfers directly between institutions. You never touch the funds.
                                    </p>
                                </div>

                                {/* Indirect Rollover */}
                                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-red-500/20 rounded-lg">
                                            <AlertTriangle className="h-6 w-6 text-red-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-400">Indirect Rollover</h3>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-slate-300" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-medium">Old 401(k)/IRA</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <ArrowRight className="h-6 w-6 text-red-400" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                                <User className="h-5 w-5 text-red-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-medium">YOU (check in your name)</p>
                                                <p className="text-red-400 text-xs">20% withheld!</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <ArrowRight className="h-6 w-6 text-red-400" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-amber-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-medium">New Gold IRA</p>
                                                <p className="text-amber-400 text-xs">Within 60 days!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-red-300 text-sm">
                                        Check sent to you. 20% withheld. Must deposit full amount within 60 days.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-8 text-center">Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-white font-bold">Feature</th>
                                            <th className="text-left p-4 text-green-400 font-bold">Direct Rollover</th>
                                            <th className="text-left p-4 text-red-400 font-bold">Indirect Rollover</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-white">Tax Withholding</td>
                                            <td className="p-4 text-green-400">
                                                <CheckCircle2 className="inline h-4 w-4 mr-1" />
                                                None
                                            </td>
                                            <td className="p-4 text-red-400">
                                                <XCircle className="inline h-4 w-4 mr-1" />
                                                20% mandatory
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-white">Time Limit</td>
                                            <td className="p-4 text-green-400">
                                                <CheckCircle2 className="inline h-4 w-4 mr-1" />
                                                None
                                            </td>
                                            <td className="p-4 text-red-400">
                                                <XCircle className="inline h-4 w-4 mr-1" />
                                                60 days strict
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-white">Annual Limit</td>
                                            <td className="p-4 text-green-400">
                                                <CheckCircle2 className="inline h-4 w-4 mr-1" />
                                                Unlimited
                                            </td>
                                            <td className="p-4 text-red-400">
                                                <XCircle className="inline h-4 w-4 mr-1" />
                                                Once per 12 months
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-white">Check Made Out To</td>
                                            <td className="p-4">New IRA custodian</td>
                                            <td className="p-4">You personally</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-white">Risk of Penalties</td>
                                            <td className="p-4 text-green-400">None</td>
                                            <td className="p-4 text-red-400">High (miss deadline = taxes + 10% penalty)</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-medium text-white">Recommended?</td>
                                            <td className="p-4 text-green-400 font-bold">YES - Always</td>
                                            <td className="p-4 text-red-400">NO - Avoid if possible</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* The 20% Withholding Problem */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">The 20% Withholding Trap</h2>
                            <p className="text-slate-300 mb-6">
                                Here&apos;s why indirect rollovers are so problematic. Let&apos;s say you have $100,000 in your 401(k):
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                                <h4 className="font-bold text-white mb-4">Example: $100,000 Indirect Rollover</h4>
                                <div className="space-y-4 text-slate-300">
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span>Your 401(k) balance</span>
                                        <span className="font-bold text-white">$100,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                                        <span>Mandatory 20% withholding</span>
                                        <span className="font-bold text-red-400">-$20,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                                        <span>Check you receive</span>
                                        <span className="font-bold text-white">$80,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                                        <span>Amount you must deposit to avoid taxes/penalties</span>
                                        <span className="font-bold text-amber-400">$100,000</span>
                                    </div>
                                </div>
                                <p className="text-red-300 text-sm mt-4">
                                    <strong>The Problem:</strong> You only received $80,000, but you need to deposit $100,000 within 60 days. You must come up with $20,000 out of pocket!
                                </p>
                            </div>

                            <p className="text-slate-300">
                                If you don&apos;t deposit the full $100,000, the $20,000 shortfall is treated as a distribution. You&apos;ll owe income tax on it, plus a 10% early withdrawal penalty if you&apos;re under 59½. That $20,000 &quot;withheld&quot; could cost you $5,000-$8,000 in total taxes and penalties.
                            </p>
                        </div>

                        {/* The 60-Day Rule */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-xl">
                                    <Clock className="h-6 w-6 text-amber-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">The 60-Day Deadline</h2>
                            </div>
                            <p className="text-slate-300 mb-6">
                                With an indirect rollover, you have exactly <strong className="text-white">60 calendar days</strong> to deposit the funds into your new IRA. Miss this deadline by even one day, and the entire amount becomes a taxable distribution.
                            </p>
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                                <h4 className="font-bold text-amber-400 mb-3">What Can Go Wrong:</h4>
                                <ul className="space-y-2 text-amber-300">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0" />
                                        Check gets lost in the mail
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0" />
                                        Processing delays at new custodian
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0" />
                                        Holiday or weekend falls near deadline
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0" />
                                        You forget about it (life happens)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 mt-1 shrink-0" />
                                        Medical emergency or family issue
                                    </li>
                                </ul>
                                <p className="text-amber-300 text-sm mt-4">
                                    The IRS rarely grants extensions. One missed deadline can cost you tens of thousands in taxes.
                                </p>
                            </div>
                        </div>

                        {/* One Per Year Rule */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">The Once-Per-Year Rule</h2>
                            <p className="text-slate-300 mb-6">
                                There&apos;s another catch with indirect rollovers: you can only do <strong className="text-white">one indirect rollover per 12-month period</strong> across all your IRAs. Do more than one and the second becomes a taxable distribution.
                            </p>
                            <p className="text-slate-300">
                                Direct rollovers have no such limit. You can do as many direct (trustee-to-trustee) transfers as you want.
                            </p>
                        </div>

                        {/* When to Use Indirect */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">When Would You Use an Indirect Rollover?</h2>
                            <p className="text-slate-300 mb-6">
                                Honestly? Almost never. The only scenario where an indirect rollover makes sense is if you need to use the funds temporarily as a short-term loan to yourself.
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h4 className="font-bold text-white mb-3">Example &quot;Bridge Loan&quot; Scenario:</h4>
                                <p className="text-slate-300 text-sm">
                                    You&apos;re buying a house and need $50,000 for a down payment. Your old house hasn&apos;t sold yet. You could take an indirect rollover, use the $50,000 for the down payment, then redeposit it (plus the 20% withholding from your own funds) within 60 days once your old house sells.
                                </p>
                                <p className="text-amber-400 text-sm mt-3">
                                    <strong>Warning:</strong> This is risky. If your house doesn&apos;t sell in time, you&apos;ll owe taxes and penalties on the entire amount.
                                </p>
                            </div>
                        </div>

                        {/* How to Request Direct */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">How to Request a Direct Rollover</h2>
                            <p className="text-slate-300 mb-6">
                                When contacting your 401(k) administrator or IRA custodian, use these exact phrases:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                                    <p className="text-green-300 font-medium">&quot;I want to do a <strong className="text-green-400">direct rollover</strong> to my new IRA.&quot;</p>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                                    <p className="text-green-300 font-medium">&quot;Please make the check payable to <strong className="text-green-400">[New Custodian Name] FBO [Your Name]</strong>.&quot;</p>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                                    <p className="text-green-300 font-medium">&quot;I want a <strong className="text-green-400">trustee-to-trustee transfer</strong>.&quot;</p>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm mt-4">
                                &quot;FBO&quot; means &quot;For Benefit Of&quot; — this indicates the check is going to your IRA, not to you personally.
                            </p>
                        </div>

                        {/* Summary Box */}
                        <div className="mb-16">
                            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-white mb-6 text-center">Bottom Line</h2>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                                        <h4 className="font-bold text-white mb-2">Zero Risk</h4>
                                        <p className="text-slate-300 text-sm">Direct rollovers have no withholding, no deadline, and no annual limits.</p>
                                    </div>
                                    <div>
                                        <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-3" />
                                        <h4 className="font-bold text-white mb-2">No Out-of-Pocket</h4>
                                        <p className="text-slate-300 text-sm">You won&apos;t need to come up with 20% from your own funds.</p>
                                    </div>
                                    <div>
                                        <CheckCircle2 className="h-8 w-8 text-green-400 mx-auto mb-3" />
                                        <h4 className="font-bold text-white mb-2">Simple Process</h4>
                                        <p className="text-slate-300 text-sm">Your Gold IRA company handles most of the paperwork.</p>
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
            <section className="py-12 bg-slate-800/50 border-t border-white/10">
                <Container>
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Rollover Guides</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/guide/401k-to-gold-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                            <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">401(k) to Gold IRA</h3>
                            <p className="text-slate-400 text-sm">Complete guide for 401(k) holders</p>
                        </Link>
                        <Link href="/guide/tsp-to-gold-ira-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                            <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">TSP to Gold IRA</h3>
                            <p className="text-slate-400 text-sm">For federal employees</p>
                        </Link>
                        <Link href="/guide/457b-to-gold-ira-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                            <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">457(b) to Gold IRA</h3>
                            <p className="text-slate-400 text-sm">For government workers</p>
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
