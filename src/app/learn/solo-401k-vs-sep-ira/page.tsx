import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { ArrowRight, CheckCircle, XCircle, Trophy, Users, DollarSign, Briefcase, Building2, Shield, Banknote } from "lucide-react";

export const metadata: Metadata = {
    title: "Solo 401k vs SEP IRA: Which is Better for Self-Employed? (2026)",
    description: "Compare Solo 401k vs SEP IRA contribution limits, Roth options, loan provisions, and more. Find the best retirement plan for your self-employment income.",
    keywords: "solo 401k vs sep ira, sep ira vs solo 401k, solo 401k or sep ira, best retirement plan self-employed",
    openGraph: {
        title: "Solo 401k vs SEP IRA: Complete Comparison Guide (2026)",
        description: "Compare Solo 401k vs SEP IRA contribution limits, features, and benefits. Find the best retirement plan for self-employed individuals.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function Solo401kVsSepIraPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-slate-900"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                            <Trophy className="w-4 h-4" />
                            Self-Employed Retirement Comparison
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Solo 401k vs SEP IRA:{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Complete Guide
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                            You&apos;ve been running your own shop for years—maybe you&apos;re an electrician who went solo, a nurse practitioner with your own practice, or a trucker who bought your own rig. You know there are tax-advantaged ways to save for retirement, but which one actually lets you keep more of what you&apos;ve earned? Let&apos;s break it down.
                        </p>

                        {/* Quick Verdict */}
                        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                            <h2 className="text-lg font-semibold text-white mb-3">Quick Verdict</h2>
                            <p className="text-slate-300">
                                <strong className="text-purple-400">Solo 401k wins for most self-employed individuals</strong> because
                                it allows higher contributions at lower income levels, offers Roth contributions, and includes
                                loan provisions. SEP IRA is simpler to set up but lacks these key features.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Side-by-Side Comparison */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                            Head-to-Head Comparison
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            See exactly how these two retirement plans stack up across key features.
                        </p>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                                            <th className="text-center p-4 text-purple-400 font-bold">Solo 401k</th>
                                            <th className="text-center p-4 text-blue-400 font-bold">SEP IRA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <td className="p-4 text-white font-medium">2026 Max Contribution</td>
                                            <td className="p-4 text-center text-purple-300">$70,000 ($77,500 if 50+)</td>
                                            <td className="p-4 text-center text-blue-300">$70,000</td>
                                        </tr>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <td className="p-4 text-white font-medium">Employee Deferral</td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-green-400">
                                                    <CheckCircle className="w-4 h-4" /> $23,500
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-red-400">
                                                    <XCircle className="w-4 h-4" /> None
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="p-4 text-white font-medium">Catch-Up Contributions (50+)</td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-green-400">
                                                    <CheckCircle className="w-4 h-4" /> $7,500
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-red-400">
                                                    <XCircle className="w-4 h-4" /> None
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <td className="p-4 text-white font-medium">Roth Contributions</td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-green-400">
                                                    <CheckCircle className="w-4 h-4" /> Yes
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-red-400">
                                                    <XCircle className="w-4 h-4" /> No
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="p-4 text-white font-medium">Loan Provision</td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-green-400">
                                                    <CheckCircle className="w-4 h-4" /> Up to $50K
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-red-400">
                                                    <XCircle className="w-4 h-4" /> Not Allowed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <td className="p-4 text-white font-medium">Setup Complexity</td>
                                            <td className="p-4 text-center text-amber-300">Moderate</td>
                                            <td className="p-4 text-center text-green-400">Simple</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="p-4 text-white font-medium">Annual Filing Required</td>
                                            <td className="p-4 text-center text-slate-300">Form 5500-EZ (if &gt;$250K)</td>
                                            <td className="p-4 text-center text-green-400">None</td>
                                        </tr>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <td className="p-4 text-white font-medium">Can Have Employees</td>
                                            <td className="p-4 text-center text-slate-300">No (except spouse)</td>
                                            <td className="p-4 text-center text-green-400">Yes (must cover all)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white font-medium">Best For</td>
                                            <td className="p-4 text-center text-purple-300">Max savings, flexibility</td>
                                            <td className="p-4 text-center text-blue-300">Simplicity, businesses with employees</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contribution Comparison by Income */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                            Contribution Limits by Income Level
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            The Solo 401k advantage is most significant at lower and moderate income levels.
                        </p>

                        <div className="space-y-4">
                            {[
                                { income: "$50,000", solo: "$33,500", sep: "$10,000", diff: "+$23,500", pct: "235%" },
                                { income: "$75,000", solo: "$38,500", sep: "$15,000", diff: "+$23,500", pct: "157%" },
                                { income: "$100,000", solo: "$43,500", sep: "$20,000", diff: "+$23,500", pct: "118%" },
                                { income: "$150,000", solo: "$53,500", sep: "$30,000", diff: "+$23,500", pct: "78%" },
                                { income: "$200,000", solo: "$63,500", sep: "$40,000", diff: "+$23,500", pct: "59%" },
                                { income: "$350,000+", solo: "$70,000", sep: "$70,000", diff: "$0", pct: "0%" },
                            ].map((row, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 grid grid-cols-5 gap-4 items-center ${
                                        row.diff === "$0" ? "opacity-60" : ""
                                    }`}
                                >
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">Net SE Income</div>
                                        <div className="text-white font-semibold">{row.income}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-purple-400 mb-1">Solo 401k</div>
                                        <div className="text-purple-300 font-semibold">{row.solo}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-blue-400 mb-1">SEP IRA</div>
                                        <div className="text-blue-300 font-semibold">{row.sep}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-slate-400 mb-1">Solo 401k Advantage</div>
                                        <div className={`font-bold ${row.diff === "$0" ? "text-slate-400" : "text-green-400"}`}>
                                            {row.diff}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-slate-400 mb-1">More Savings</div>
                                        <div className={`font-bold ${row.pct === "0%" ? "text-slate-400" : "text-green-400"}`}>
                                            {row.pct}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-400 text-sm text-center mt-6">
                            * Calculations for self-employed individuals under 50. Solo 401k includes $23,500 employee deferral + 20% employer contribution.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Key Differences Explained */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
                            Key Differences Explained
                        </h2>

                        <div className="space-y-8">
                            {/* Contribution Structure */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <DollarSign className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Contribution Structure</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-purple-400 font-semibold mb-2">Solo 401k</h4>
                                                <p className="text-slate-400 text-sm">
                                                    Allows <strong className="text-white">two types</strong> of contributions:
                                                    employee deferrals (up to $23,500) plus employer profit-sharing (up to 25% of compensation).
                                                    This dual structure is why you can save more at lower income levels.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">SEP IRA</h4>
                                                <p className="text-slate-400 text-sm">
                                                    Only allows <strong className="text-white">employer contributions</strong> (up to 25% of compensation
                                                    or ~20% of net SE income). No employee deferral option means you need much higher income to
                                                    maximize contributions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Roth Option */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Roth Contributions</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-purple-400 font-semibold mb-2">Solo 401k</h4>
                                                <p className="text-slate-400 text-sm">
                                                    <strong className="text-green-400">Roth option available.</strong> Your
                                                    employee deferrals ($23,500) can be designated as Roth contributions, growing
                                                    tax-free and providing tax-free withdrawals in retirement.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">SEP IRA</h4>
                                                <p className="text-slate-400 text-sm">
                                                    <strong className="text-red-400">No Roth option.</strong> All SEP IRA
                                                    contributions are pre-tax only. If you want Roth benefits, you&apos;d need
                                                    a separate Roth IRA (with its lower $7,000 limit).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Loan Provision */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                                        <Banknote className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Loan Provision</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-purple-400 font-semibold mb-2">Solo 401k</h4>
                                                <p className="text-slate-400 text-sm">
                                                    <strong className="text-green-400">Loans allowed.</strong> Borrow up to
                                                    50% of your vested balance (max $50,000) without taxes or penalties.
                                                    Great for accessing funds in emergencies while keeping your retirement on track.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">SEP IRA</h4>
                                                <p className="text-slate-400 text-sm">
                                                    <strong className="text-red-400">Loans not permitted.</strong> Any
                                                    withdrawal before age 59½ triggers income taxes plus a 10% early
                                                    withdrawal penalty (with limited exceptions).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Employees */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Having Employees</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-purple-400 font-semibold mb-2">Solo 401k</h4>
                                                <p className="text-slate-400 text-sm">
                                                    <strong className="text-amber-400">Solo owners only.</strong> You cannot
                                                    have employees (other than a spouse). If you hire employees, you&apos;ll need
                                                    to convert to a traditional 401k or use a different plan.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">SEP IRA</h4>
                                                <p className="text-slate-400 text-sm">
                                                    <strong className="text-green-400">Can have employees.</strong> However,
                                                    you must provide the same contribution percentage to all eligible employees.
                                                    If you contribute 20% for yourself, employees get 20% too.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Who Should Choose What */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
                            Which Plan Is Right For You?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Choose Solo 401k */}
                            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center">
                                        <Trophy className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Choose Solo 401k If...</h3>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You want to <strong className="text-white">maximize contributions</strong> at lower income levels</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You want <strong className="text-white">Roth contribution</strong> options for tax-free growth</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You value the ability to <strong className="text-white">take loans</strong> from your retirement funds</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You&apos;re <strong className="text-white">50 or older</strong> and want catch-up contributions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You have <strong className="text-white">no employees</strong> (or only a spouse)</span>
                                    </li>
                                </ul>

                                <div className="mt-8">
                                    <Link href="/solo-401k">
                                        <Button variant="gold" className="w-full">
                                            Learn More About Solo 401k <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Choose SEP IRA */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <Briefcase className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Choose SEP IRA If...</h3>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You prioritize <strong className="text-white">simplicity</strong> over flexibility</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You have <strong className="text-white">employees</strong> and want a retirement plan for them</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You have <strong className="text-white">very high income</strong> ($350K+) where limits are equal</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You want to <strong className="text-white">avoid paperwork</strong> (no Form 5500)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">You need to <strong className="text-white">set up quickly</strong> before tax deadline</span>
                                    </li>
                                </ul>

                                <div className="mt-8">
                                    <Link href="/self-directed-ira">
                                        <Button variant="secondary" className="w-full">
                                            Explore Self-Directed IRA Options <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Can You Have Both? */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                            <Building2 className="w-8 h-8 text-amber-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Can You Have Both a Solo 401k and SEP IRA?
                        </h2>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Technically yes, but it rarely makes sense. If you have both plans for the same business,
                            your total employer contributions across both plans are limited to 25% of compensation.
                            You don&apos;t get double the employer contribution limit.
                        </p>
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-left">
                            <p className="text-amber-200 font-medium mb-2">When it might make sense:</p>
                            <ul className="text-slate-400 text-sm space-y-2">
                                <li>• You have <strong className="text-white">two separate businesses</strong> - one with employees (SEP) and one solo (Solo 401k)</li>
                                <li>• You&apos;re <strong className="text-white">transitioning</strong> from a SEP IRA to a Solo 401k</li>
                                <li>• You want to <strong className="text-white">consolidate old SEP funds</strong> into a Solo 401k</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-purple-900/30 via-slate-900 to-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Ready to Maximize Your Self-Employed Retirement?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            For most self-employed individuals, a Solo 401k offers more flexibility and higher
                            contribution potential. Get expert guidance on setting up your plan.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={getTrackedLink(AFFILIATE_LINKS.augusta, "solo-vs-sep-cta", "augusta")}>
                                <Button variant="gold" size="xl">
                                    Get Free Retirement Guide <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/learn/solo-401k-contribution-limits">
                                <Button variant="secondary" size="xl">
                                    View 2026 Contribution Limits
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Which is better: Solo 401k or SEP IRA?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "For most self-employed individuals, a Solo 401k is better because it allows higher contributions at lower income levels, offers Roth contributions, and includes loan provisions. SEP IRA is simpler to set up but lacks these features."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I contribute more to a Solo 401k than a SEP IRA?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, at income levels below approximately $350,000. The Solo 401k allows an additional $23,500 employee deferral ($31,000 if 50+) on top of employer contributions, while SEP IRA only allows employer contributions."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I have both a Solo 401k and SEP IRA?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Technically yes, but employer contribution limits are shared across both plans. Having both rarely provides additional contribution capacity unless you have separate businesses."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Does SEP IRA have Roth option?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, SEP IRA does not offer a Roth option. All contributions are pre-tax only. If you want Roth benefits for self-employment income, you need a Solo 401k or a separate Roth IRA."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
