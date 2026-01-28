import { PatriotNavbar } from "@/components/layout/PatriotNavbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Image from "next/image";

/* 
  PREVIEW: ARTICLE PAGE 
  Demonstrates the "Wall Street Journal" readability style.
*/

export default function PreviewArticle() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <PatriotNavbar />

            <article className="py-20">
                <div className="max-w-3xl mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
                        <span className="hover:text-[#000080] cursor-pointer">Home</span>
                        <span>/</span>
                        <span className="hover:text-[#000080] cursor-pointer">Gold IRA Guides</span>
                        <span>/</span>
                        <span className="text-[#B22234]">Rollover Guide</span>
                    </div>

                    {/* Header */}
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] leading-tight mb-6">
                        How to Move Your 401(k) to Gold Without Paying Taxes (2026 Rule Update)
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-200 pb-8 mb-8">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>By <strong>Thomas Richardson</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Updated Jan 28, 2026</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#000080] bg-blue-50 px-2 py-1 rounded">
                            <Clock className="h-4 w-4" />
                            <span>8 Min Read</span>
                        </div>
                    </div>

                    {/* Content Body (Prose) */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600">
                            With the national debt crossing $38 trillion and market volatility on the rise, millions of Americans are looking for a safe haven. The <strong>Gold IRA Rollover</strong> is the #1 strategy for protecting retirement savings in 2026.
                        </p>

                        <h3>Why The "Direct Rollover" Is Secret Weapon</h3>
                        <p>
                            Most people assume that moving money out of a 401(k) triggers a massive tax bill.
                            <span className="bg-yellow-100 px-1">This is false.</span>
                        </p>
                        <p>
                            According to <strong>IRS Publication 590-A</strong>, if you perform a "Direct Rollover" (Trustee-to-Trustee transfer), the money moves from your old custodian to your new Gold IRA custodian without you ever touching the funds.
                        </p>

                        <div className="bg-[#eff6ff] border-l-4 border-[#000080] p-6 rounded-r-xl my-8 not-prose">
                            <h4 className="font-bold text-[#000080] text-lg mb-2">Key Takeaway</h4>
                            <p className="text-slate-700 m-0">
                                A direct rollover means <strong>$0 in taxes</strong> and <strong>$0 in penalties</strong>. It is a completely tax-free event that preserves 100% of your purchasing power.
                            </p>
                        </div>

                        <h3>The 3 Steps to Owning Gold</h3>
                        <ol>
                            <li>
                                <strong>Open a Self-Directed IRA:</strong> Unlike standard IRAs, these allow you to hold alternative assets like physical metals, crypto, and real estate.
                            </li>
                            <li>
                                <strong>Fund the Account:</strong> Use the direct rollover method mentioned above.
                            </li>
                            <li>
                                <strong>Select Your Metals:</strong> Choose IRS-approved gold and silver bars or coins.
                            </li>
                        </ol>

                        <p>
                            Ready to protect your wealth? We have reviewed the top companies in the industry to help you avoid scams.
                        </p>
                    </div>

                    {/* Author Box */}
                    <div className="mt-12 bg-slate-50 p-8 rounded-xl border border-slate-200 flex items-start gap-6">
                        <div className="w-16 h-16 bg-[#000080] rounded-full flex-shrink-0"></div>
                        <div>
                            <h4 className="font-bold text-[#000080] text-lg">About Thomas Richardson</h4>
                            <p className="text-slate-600 text-sm mt-2">
                                Thomas is a senior financial analyst specializing in retirement preservation. He has helped over 10,000 Americans understand the benefits of precious metals diversification.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
