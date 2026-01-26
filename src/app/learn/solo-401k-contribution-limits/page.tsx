import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { ArrowRight, Calculator, Calendar, DollarSign, TrendingUp, AlertCircle, CheckCircle, Users, Percent } from "lucide-react";

export const metadata: Metadata = {
    title: "Solo 401k Contribution Limits 2026 | Max Contribution",
    description: "2026 Solo 401k contribution limits explained. Employee deferral ($23,500), employer profit-sharing, and $70,000-$77,500 total maximums with calculation examples.",
    keywords: "solo 401k contribution limits, solo 401k max contribution, solo 401k contribution limits 2026, solo 401k employer contribution",
    openGraph: {
        title: "Solo 401k Contribution Limits 2026 | Maximum Contributions Guide",
        description: "2026 Solo 401k contribution limits explained. Employee deferral ($23,500), employer profit-sharing, and $70,000-$77,500 total maximums.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function Solo401kContributionLimitsPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-slate-900"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                            <Calendar className="w-4 h-4" />
                            Updated for 2026 Tax Year
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Solo 401k Contribution Limits{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                                2026
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                            Ran your own plumbing business for 20 years? Electrician who went independent? Contractor tired of working for someone else? A Solo 401k lets you save up to <strong className="text-white">$70,000</strong> a year (or <strong className="text-white">$77,500</strong> if you&apos;re 50+)—way more than a regular IRA. Here&apos;s how it works.
                        </p>

                        {/* Quick Limits Summary */}
                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-1">$23,500</div>
                                <div className="text-sm text-slate-400">Employee Deferral</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-1">25%</div>
                                <div className="text-sm text-slate-400">Employer Contribution</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-1">$70,000</div>
                                <div className="text-sm text-slate-400">Total Maximum</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 2026 Limits Breakdown */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                            2026 Solo 401k Contribution Limits
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            The IRS sets annual limits for Solo 401k contributions. Here&apos;s everything you need to know for 2026.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Under 50 */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Under Age 50</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                                        <span className="text-slate-300">Employee Deferral</span>
                                        <span className="text-white font-semibold">$23,500</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                                        <span className="text-slate-300">Employer Contribution</span>
                                        <span className="text-white font-semibold">Up to 25%*</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                                        <span className="text-slate-300">Catch-Up Contribution</span>
                                        <span className="text-slate-500">N/A</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 bg-purple-500/10 rounded-lg px-4 -mx-4">
                                        <span className="text-purple-300 font-semibold">Total Maximum</span>
                                        <span className="text-purple-400 font-bold text-xl">$70,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* 50 and Over */}
                            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Age 50 and Over</h3>
                                        <span className="text-xs text-purple-400">Catch-Up Eligible</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                                        <span className="text-slate-300">Employee Deferral</span>
                                        <span className="text-white font-semibold">$23,500</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                                        <span className="text-slate-300">Employer Contribution</span>
                                        <span className="text-white font-semibold">Up to 25%*</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                                        <span className="text-slate-300">Catch-Up Contribution</span>
                                        <span className="text-green-400 font-semibold">+ $7,500</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 bg-purple-500/20 rounded-lg px-4 -mx-4">
                                        <span className="text-purple-300 font-semibold">Total Maximum</span>
                                        <span className="text-purple-400 font-bold text-xl">$77,500</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-amber-200 font-medium mb-1">*Important Note on Employer Contributions</p>
                                    <p className="text-slate-400 text-sm">
                                        The employer contribution is calculated as 25% of W-2 wages (for S-corps/C-corps) or
                                        approximately 20% of net self-employment income (for sole proprietors/partnerships).
                                        The percentage difference is due to how self-employment income is calculated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Two Types of Contributions */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                            Understanding the Two Contribution Types
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Solo 401k plans allow you to contribute as both an employee AND employer, maximizing your tax-advantaged savings.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Employee Deferral */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                                    <DollarSign className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Employee Deferral</h3>
                                <p className="text-slate-400 mb-6">
                                    This is the portion you elect to defer from your compensation. It&apos;s the same limit
                                    that applies to traditional 401k plans.
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Fixed at $23,500 for 2026</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Can be Traditional (pre-tax) or Roth</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">No income requirement to max out</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">+$7,500 catch-up if 50+</span>
                                    </div>
                                </div>
                            </div>

                            {/* Employer Contribution */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                                    <Percent className="w-7 h-7 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Employer Contribution</h3>
                                <p className="text-slate-400 mb-6">
                                    As the employer, you can make profit-sharing contributions up to 25% of compensation
                                    (or ~20% of net self-employment earnings).
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Up to 25% of W-2 wages</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">~20% of net SE income (sole props)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Always pre-tax (Traditional only)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Scales with your business income</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Calculation Examples */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 justify-center mb-4">
                            <Calculator className="w-8 h-8 text-purple-400" />
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                                Contribution Calculation Examples
                            </h2>
                        </div>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            See how much you can contribute based on your income level and business structure.
                        </p>

                        {/* Example 1: High Income */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Example 1: High-Income Consultant (Under 50)</h3>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">Max Contribution</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-400 mb-4">
                                        <strong className="text-white">Scenario:</strong> Self-employed consultant with
                                        $200,000 net self-employment income (after SE tax deduction).
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Net SE Income</span>
                                            <span className="text-white">$200,000</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Employee Deferral</span>
                                            <span className="text-white">$23,500</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Employer (20% of $200K)</span>
                                            <span className="text-white">$40,000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-purple-500/10 rounded-xl p-6 flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="text-sm text-slate-400 mb-1">Total Contribution</div>
                                        <div className="text-4xl font-bold text-purple-400 mb-2">$63,500</div>
                                        <div className="text-sm text-slate-400">
                                            $6,500 below $70K max (needs ~$232K income for full max)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Example 2: Moderate Income */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Example 2: Part-Time Freelancer (Age 52)</h3>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">Catch-Up Eligible</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-400 mb-4">
                                        <strong className="text-white">Scenario:</strong> Freelance designer with
                                        $75,000 net self-employment income.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Net SE Income</span>
                                            <span className="text-white">$75,000</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Employee Deferral</span>
                                            <span className="text-white">$23,500</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Catch-Up (50+)</span>
                                            <span className="text-green-400">+ $7,500</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Employer (20% of $75K)</span>
                                            <span className="text-white">$15,000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-purple-500/10 rounded-xl p-6 flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="text-sm text-slate-400 mb-1">Total Contribution</div>
                                        <div className="text-4xl font-bold text-purple-400 mb-2">$46,000</div>
                                        <div className="text-sm text-slate-400">
                                            61% of their income saved tax-advantaged!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Example 3: S-Corp */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Example 3: S-Corp Owner (Under 50)</h3>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">W-2 Wages</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-400 mb-4">
                                        <strong className="text-white">Scenario:</strong> S-Corp owner paying themselves
                                        $120,000 in W-2 wages.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">W-2 Wages</span>
                                            <span className="text-white">$120,000</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Employee Deferral</span>
                                            <span className="text-white">$23,500</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/10">
                                            <span className="text-slate-400">Employer (25% of $120K)</span>
                                            <span className="text-white">$30,000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-purple-500/10 rounded-xl p-6 flex flex-col justify-center">
                                    <div className="text-center">
                                        <div className="text-sm text-slate-400 mb-1">Total Contribution</div>
                                        <div className="text-4xl font-bold text-purple-400 mb-2">$53,500</div>
                                        <div className="text-sm text-slate-400">
                                            S-Corps use 25% (vs 20%) for employer portion
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contribution Deadlines */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                            Contribution Deadlines for 2026
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Different deadlines apply to different types of contributions. Plan ahead to maximize your savings.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <Calendar className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Employee Deferral Deadline</h3>
                                <div className="text-2xl font-bold text-blue-400 mb-3">December 31, 2026</div>
                                <p className="text-slate-400 text-sm">
                                    Employee salary deferrals must be made by the end of the calendar year. You cannot
                                    retroactively elect to defer income after December 31st.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Calendar className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Employer Contribution Deadline</h3>
                                <div className="text-2xl font-bold text-purple-400 mb-3">Tax Filing Deadline*</div>
                                <p className="text-slate-400 text-sm">
                                    Employer profit-sharing contributions can be made up until your tax filing deadline,
                                    including extensions. For most: April 15, 2027 (or October 15 with extension).
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-green-200 font-medium mb-1">Pro Tip: Plan Establishment Deadline</p>
                                    <p className="text-slate-400 text-sm">
                                        Your Solo 401k plan must be established by December 31st of the tax year for which
                                        you want to make contributions. The actual funding can occur later, but the plan
                                        documents must be in place before year-end.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Solo 401k vs SEP IRA Comparison */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                            Solo 401k vs SEP IRA Contribution Limits
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Why Solo 401k often allows higher contributions than a SEP IRA at the same income level.
                        </p>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-slate-400 font-medium">Net SE Income</th>
                                            <th className="text-center p-4 text-purple-400 font-medium">Solo 401k Max</th>
                                            <th className="text-center p-4 text-blue-400 font-medium">SEP IRA Max</th>
                                            <th className="text-center p-4 text-green-400 font-medium">Difference</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <td className="p-4 text-white">$50,000</td>
                                            <td className="p-4 text-center text-purple-300">$33,500</td>
                                            <td className="p-4 text-center text-blue-300">$10,000</td>
                                            <td className="p-4 text-center text-green-400 font-semibold">+$23,500</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="p-4 text-white">$100,000</td>
                                            <td className="p-4 text-center text-purple-300">$43,500</td>
                                            <td className="p-4 text-center text-blue-300">$20,000</td>
                                            <td className="p-4 text-center text-green-400 font-semibold">+$23,500</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="p-4 text-white">$150,000</td>
                                            <td className="p-4 text-center text-purple-300">$53,500</td>
                                            <td className="p-4 text-center text-blue-300">$30,000</td>
                                            <td className="p-4 text-center text-green-400 font-semibold">+$23,500</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">$350,000+</td>
                                            <td className="p-4 text-center text-purple-300">$70,000</td>
                                            <td className="p-4 text-center text-blue-300">$70,000</td>
                                            <td className="p-4 text-center text-slate-400">$0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm text-center mt-6">
                            * Examples shown for individuals under 50. Solo 401k advantage comes from the employee deferral component.
                        </p>

                        <div className="mt-8 text-center">
                            <Link href="/learn/solo-401k-vs-sep-ira">
                                <Button variant="secondary" size="lg">
                                    Full Solo 401k vs SEP IRA Comparison <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-purple-900/30 via-slate-900 to-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Ready to Maximize Your Retirement Contributions?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            A Solo 401k can help you save significantly more than other retirement accounts.
                            Speak with a specialist to set up your plan.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={getTrackedLink(AFFILIATE_LINKS.augusta, "solo-401k-limits-cta", "augusta")}>
                                <Button variant="gold" size="xl">
                                    Get Free Solo 401k Guide <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/solo-401k">
                                <Button variant="secondary" size="xl">
                                    Learn More About Solo 401k
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
                                name: "What is the Solo 401k contribution limit for 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The 2026 Solo 401k contribution limit is $70,000 for those under 50, and $77,500 for those 50 and older (includes $7,500 catch-up contribution). This consists of a $23,500 employee deferral plus employer profit-sharing contributions up to 25% of compensation."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How is the Solo 401k employer contribution calculated?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "For S-corps and C-corps, the employer contribution is up to 25% of W-2 wages. For sole proprietors and partnerships, it's approximately 20% of net self-employment income (after the self-employment tax deduction)."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What is the deadline for Solo 401k contributions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Employee deferrals must be made by December 31st of the tax year. Employer profit-sharing contributions can be made until your tax filing deadline, including extensions (typically April 15th or October 15th with extension)."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I contribute to both a Solo 401k and SEP IRA?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can have both accounts, but your total employer contributions across all plans cannot exceed the annual limit. Most self-employed individuals choose one or the other, with Solo 401k typically allowing higher contributions at lower income levels."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
