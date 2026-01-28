import { PatriotNavbar } from "@/components/layout/PatriotNavbar";
import { Footer } from "@/components/layout/Footer";
import { Star, CheckCircle2, XCircle, Award } from "lucide-react";

/* 
  PREVIEW: REVIEW PAGE 
  Demonstrates a Trustworthy Review layout.
*/

export default function PreviewReview() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <PatriotNavbar />

            {/* Review Header */}
            <div className="bg-white border-b border-slate-200 pt-16 pb-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <Award className="h-4 w-4" /> Top Recommendation 2026
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-4">
                        Augusta Precious Metals Review
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        Is the "Zero Complaint" reputation real? We spent 40 hours auditing their fees, buyback program, and customer service.
                    </p>

                    <div className="flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Our Rating</span>
                            <div className="flex items-center gap-1 text-amber-400">
                                <Star className="h-6 w-6 fill-current" />
                                <Star className="h-6 w-6 fill-current" />
                                <Star className="h-6 w-6 fill-current" />
                                <Star className="h-6 w-6 fill-current" />
                                <Star className="h-6 w-6 fill-current" />
                                <span className="text-slate-900 font-bold ml-2 text-xl">5.0/5</span>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-slate-200"></div>
                        <div className="flex flex-col">
                            <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Best For</span>
                            <span className="text-slate-900 font-bold">High Net Worth ($50k+)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-xl border-t-4 border-green-500 shadow-sm">
                        <h3 className="font-bold text-lg text-green-700 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5" /> The Good
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Zero BBB Complaints:</strong> A perfect record since 2012.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Education First:</strong> 1-on-1 web conference with Harvard economist.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Lifetime Support:</strong> Dedicated account agent for life.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl border-t-4 border-red-500 shadow-sm">
                        <h3 className="font-bold text-lg text-red-700 mb-6 flex items-center gap-2">
                            <XCircle className="h-5 w-5" /> The Bad
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-700">
                                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>High Minimum:</strong> Requires $50,000 to start.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>No Crypto:</strong> Specialized in Gold & Silver only.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Verdict Box */}
                <div className="bg-[#000080] text-white p-8 rounded-2xl shadow-xl text-center">
                    <h3 className="text-2xl font-serif font-bold mb-4">The Verdict</h3>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        If you have $50,000 or more to protect, Augusta Precious Metals is mostly likely your best option. Their white-glove service and clean track record are unmatched in the industry.
                    </p>
                    <button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg uppercase tracking-wide transition-all transform hover:scale-105">
                        Visit Official Website
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
