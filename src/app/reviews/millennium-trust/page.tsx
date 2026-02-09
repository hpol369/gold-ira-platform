import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import {
    CheckCircle2,
    XCircle,
    Shield,
    DollarSign,
    Building2,
    Star,
    ArrowRight,
    RefreshCw,
    AlertTriangle,
    Briefcase,
    Clock,
    Users
} from "lucide-react";

export const metadata: Metadata = {
    title: "Millennium Trust Review: Orphaned 401k Specialist",
    description: "Comprehensive Millennium Trust review covering their automatic rollover services, orphaned 401k accounts, fee structure, and when you'd actually use them.",
    keywords: "millennium trust reviews, millennium trust company, millennium trust automatic rollover, orphaned 401k, millennium trust fees",
    openGraph: {
        title: "Millennium Trust Review 2026: Automatic Rollover Specialist",
        description: "Full Millennium Trust review - do you have an orphaned 401k? See our honest analysis of their services, fees, and when to use them.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const companyData = {
    name: "Millennium Trust Company",
    founded: "2000",
    headquarters: "Oak Brook, Illinois",
    assetsUnderCustody: "$50+ billion",
    accounts: "5+ million",
    specialty: "Automatic rollovers and orphaned 401k accounts",
    bbbRating: "B+",
    bestFor: "Those with orphaned/automatic rollover accounts",
};

export default function MillenniumTrustReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-[#000080] text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-purple-200 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="bg-purple-500/20 px-3 py-1 rounded-full">Custodian Reviews</span>
                            <span className="text-white/50">|</span>
                            <span className="text-white/70">Updated January 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Millennium Trust Review 2026: <br />
                            <span className="text-white/70">Automatic Rollover Specialist</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                            Millennium Trust handles orphaned 401k accounts and automatic rollovers. If your former employer moved your retirement funds here, this is what you need to know.
                        </p>
                    </div>
                </Container>
            </header>

            {/* Main Content */}
            <div className="flex-grow">
                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Article */}
                        <article className="lg:col-span-2">
                            <AuthorVerification />

                            <VerdictBox
                                companyName="Millennium Trust Company"
                                rating={3.5}
                                isRecommended={false}
                                bottomLine="Millennium Trust serves a specific purpose: holding orphaned 401k funds. While legitimate, their fees are higher than alternatives. If your money ended up here, consider rolling it out to a better custodian or your new employer's plan."
                                ctaUrl="https://www.mtrustcompany.com"
                                ctaText="Check Your Account"
                            />

                            {/* Important Notice */}
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-amber-800 font-bold mb-2">Important: You Likely Did Not Choose Millennium Trust</h3>
                                        <p className="text-amber-700 text-sm">
                                            Unlike other custodians, most Millennium Trust accounts are created automatically when former employers roll over unclaimed 401k funds. If you have money here, it was likely transferred without your active involvement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-8">
                                <h2 className="text-xl font-serif font-bold text-[#000080] mb-4">Millennium Trust at a Glance</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="w-5 h-5 text-purple-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Founded</p>
                                            <p className="text-slate-900 font-medium">{companyData.founded}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Assets Under Custody</p>
                                            <p className="text-slate-900 font-medium">{companyData.assetsUnderCustody}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Total Accounts</p>
                                            <p className="text-slate-900 font-medium">{companyData.accounts}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-[#B22234]" />
                                        <div>
                                            <p className="text-slate-500 text-sm">BBB Rating</p>
                                            <p className="text-slate-900 font-medium">{companyData.bbbRating}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RefreshCw className="w-5 h-5 text-teal-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Specialty</p>
                                            <p className="text-slate-900 font-medium text-sm">{companyData.specialty}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-orange-600" />
                                        <div>
                                            <p className="text-slate-500 text-sm">Headquarters</p>
                                            <p className="text-slate-900 font-medium">{companyData.headquarters}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-purple-600 hover:prose-a:text-purple-700">

                                <h2>What is Millennium Trust?</h2>
                                <p>
                                    <strong>Millennium Trust Company</strong> is a specialty custodian that primarily handles automatic rollovers - the process where employers move small, unclaimed 401k balances to an IRA when employees leave.
                                </p>
                                <p>
                                    Founded in 2000 and based in Oak Brook, Illinois, they manage over $50 billion in assets across 5+ million accounts. However, unlike Equity Trust or Rocket Dollar where you actively choose to open an account, most Millennium Trust accounts are created when your former employer automatically rolls over your 401k funds.
                                </p>

                                <h2>How Does Automatic Rollover Work?</h2>
                                <p>
                                    When you leave a job and don&apos;t take action on your 401k within a certain timeframe, your former employer may:
                                </p>
                                <ul>
                                    <li>Cash out small balances under $1,000 (minus taxes)</li>
                                    <li>Roll balances between $1,000-$7,000 into a &quot;safe harbor IRA&quot;</li>
                                    <li>Keep larger balances in the plan (if allowed)</li>
                                </ul>
                                <p>
                                    Millennium Trust is a major provider of these &quot;safe harbor&quot; automatic rollover IRAs. Your money ends up there because your employer chose them as their rollover provider - not because you selected them.
                                </p>

                                <h2>Pros & Cons</h2>
                                <ProsCons
                                    pros={[
                                        "Legitimate custodian - your money is safe",
                                        "Easy online account access",
                                        "Rollover to other providers is straightforward",
                                        "FDIC-insured up to $250,000",
                                        "No action required if balance is small"
                                    ]}
                                    cons={[
                                        "Higher fees than most alternatives",
                                        "Limited investment options (cash or stable value)",
                                        "You didn't choose to be here",
                                        "Annual fees can erode small balances",
                                        "B+ BBB rating (lower than competitors)"
                                    ]}
                                />

                                <h2>Millennium Trust Fee Structure</h2>
                                <p>
                                    This is where Millennium Trust becomes problematic for small balances:
                                </p>

                                <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden not-prose my-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="text-left p-4 text-[#000080] font-semibold">Fee Type</th>
                                                <th className="text-left p-4 text-[#000080] font-semibold">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            <tr>
                                                <td className="p-4 text-slate-600">Annual Account Fee</td>
                                                <td className="p-4 text-[#B22234] font-medium">$50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Asset-Based Fee (some plans)</td>
                                                <td className="p-4 text-slate-600">0.65% annually</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Distribution Fee</td>
                                                <td className="p-4 text-slate-600">$35 - $50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Rollover Out Fee</td>
                                                <td className="p-4 text-slate-600">$0 - $35</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-slate-600">Paper Statement Fee</td>
                                                <td className="p-4 text-slate-600">$2 per statement</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <strong>The Problem:</strong> If you have a $2,000 balance, a $50 annual fee represents 2.5% of your account - far higher than typical IRA fees. Over 5 years without action, fees could consume $250+ of your balance.
                                </p>

                                <h2>What Should You Do?</h2>
                            </div>

                            {/* Action Steps */}
                            <div className="grid gap-4 my-8">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-green-800 font-bold mb-1">Option 1: Roll to Your Current Employer&apos;s 401k</h3>
                                            <p className="text-green-700 text-sm">If your new employer allows rollovers into their plan, this consolidates your accounts and may offer lower fees.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-green-800 font-bold mb-1">Option 2: Roll to a Low-Cost IRA</h3>
                                            <p className="text-green-700 text-sm">Transfer to Fidelity, Schwab, or Vanguard where annual fees are $0 for most accounts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-blue-800 font-bold mb-1">Option 3: Leave It (Small Balances Only)</h3>
                                            <p className="text-blue-700 text-sm">If your balance is very small (under $500), the hassle of moving it may not be worth it. But fees will continue to erode the balance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#000080] prose-strong:text-slate-900 prose-a:text-purple-600">

                                <h2>How to Roll Out of Millennium Trust</h2>
                                <ol>
                                    <li><strong>Log into your account</strong> at mtrustcompany.com</li>
                                    <li><strong>Choose &quot;Rollover&quot; or &quot;Distribution&quot;</strong> from the menu</li>
                                    <li><strong>Select your destination</strong> (new 401k or IRA provider)</li>
                                    <li><strong>Request a direct rollover</strong> (trustee-to-trustee transfer to avoid taxes)</li>
                                    <li><strong>Wait 5-10 business days</strong> for processing</li>
                                </ol>
                                <p>
                                    <strong>Tip:</strong> Request a &quot;direct rollover&quot; to avoid the 20% mandatory withholding that applies to distributions paid directly to you.
                                </p>

                                <h2>When You&apos;d Actually Choose Millennium Trust</h2>
                                <p>
                                    While most people end up here by accident, Millennium Trust does offer some legitimate services:
                                </p>
                                <ul>
                                    <li><strong>Self-Directed IRAs</strong> for alternative investments</li>
                                    <li><strong>Health Savings Accounts (HSAs)</strong></li>
                                    <li><strong>529 Education Plans</strong></li>
                                </ul>
                                <p>
                                    However, for these services, competitors like Equity Trust (SDIRAs) or Lively (HSAs) typically offer better value.
                                </p>

                                <hr className="my-12 border-slate-200" />

                                <h2>Final Verdict</h2>
                                <p>
                                    <strong>Millennium Trust</strong> is a legitimate custodian, but you probably did not choose to be here. If you have money in a Millennium Trust account from an automatic rollover, seriously consider moving it to a lower-cost provider.
                                </p>
                                <p>
                                    <strong>Rating: 3.5/5</strong> (Not recommended for voluntary use)
                                </p>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is Millennium Trust legit?",
                                            a: "Yes, Millennium Trust is a legitimate South Dakota-chartered trust company. They're regulated and your funds are FDIC-insured up to $250,000. However, their B+ BBB rating is lower than competitors."
                                        },
                                        {
                                            q: "Why do I have a Millennium Trust account?",
                                            a: "Most likely, your former employer automatically rolled over your 401k balance when you left. This happens when you don't take action on small balances (typically $1,000-$7,000)."
                                        },
                                        {
                                            q: "Can I roll my Millennium Trust account to a Gold IRA?",
                                            a: "Yes, you can roll a Millennium Trust IRA into a Gold IRA. Augusta Precious Metals and other Gold IRA companies can help facilitate this transfer."
                                        },
                                        {
                                            q: "How do I find my Millennium Trust account?",
                                            a: "Visit mtrustcompany.com and click 'Account Login' or 'Register.' You'll need identifying information from your former employer or the letter Millennium Trust should have sent you."
                                        },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                                            <h3 className="font-bold text-[#000080] mb-2">{faq.q}</h3>
                                            <p className="text-slate-600 text-sm">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Augusta CTA */}
                            <div className="bg-[#000080] text-white p-8 rounded-2xl text-center mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Roll Your Orphaned 401k Into a Gold IRA</h3>
                                    <p className="mb-6 text-white/80 max-w-lg mx-auto">
                                        Instead of leaving your money in a high-fee automatic rollover account, consider converting to a Gold IRA with Augusta Precious Metals.
                                    </p>
                                    <LeadCaptureButton
                                        variant="gold"
                                        source="review-millennium-trust-cta"
                                        className="inline-flex items-center justify-center rounded-md font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:scale-105 transition-transform h-14 px-10 text-lg"
                                    >
                                        Get Augusta&apos;s Free Gold IRA Guide
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </LeadCaptureButton>
                                    <p className="text-xs text-white/60 mt-4">$50k minimum | Up to 10 years fees waived | A+ BBB Rating</p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <div className="hidden lg:block sticky top-24 space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-serif font-bold text-lg mb-4 text-[#000080]">Better Alternatives</h3>
                                    <div className="space-y-3">
                                        <Link href="/reviews/equity-trust" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Equity Trust Review
                                        </Link>
                                        <Link href="/reviews/rocket-dollar" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            Rocket Dollar Review
                                        </Link>
                                        <Link href="/rollover" className="block text-sm text-slate-600 hover:text-[#000080] transition-colors">
                                            How to Rollover Your 401k
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} className={`w-5 h-5 ${i <= 3 ? 'text-[#B22234] fill-[#B22234]' : 'text-[#B22234]/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-[#000080] font-bold">3.5 / 5</p>
                                    <p className="text-slate-500 text-xs mt-1">Our Rating</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </div>

            <Footer />

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "itemReviewed": {
                            "@type": "FinancialProduct",
                            "name": "Millennium Trust Company",
                            "description": "Automatic rollover and orphaned 401k custodian"
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "3.5",
                            "bestRating": "5"
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "Rich Dad Retirement"
                        }
                    })
                }}
            />
        </main>
    );
}
