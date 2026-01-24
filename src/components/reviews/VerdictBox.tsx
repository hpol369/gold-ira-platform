import { Star, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface VerdictBoxProps {
    companyName: string;
    rating: number; // 0 to 5
    isRecommended: boolean;
    bottomLine: string;
    ctaUrl: string;
    ctaText?: string;
}

export function VerdictBox({ companyName: _companyName, rating, isRecommended, bottomLine, ctaUrl, ctaText = "Get Free Gold Kit" }: VerdictBoxProps) {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden my-8 not-prose">
            <div className="bg-slate-800/50 p-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-slate-900 shadow-sm ${rating >= 4.5 ? 'bg-amber-400' : 'bg-slate-500'}`}>
                        {rating}
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-xl text-white m-0">The Verdict</h3>
                        <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'text-slate-600'}`} />
                            ))}
                        </div>
                    </div>
                </div>
                {isRecommended ? (
                    <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold text-sm border border-green-500/30">
                        <CheckCircle className="w-5 h-5" /> Recommended
                    </div>
                ) : (
                    <div className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full font-bold text-sm border border-red-500/30">
                        <XCircle className="w-5 h-5" /> Not Recommended
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6 font-medium">
                    {bottomLine}
                </p>

                <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-md" asChild>
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                        {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </Button>

                <p className="text-xs text-slate-500 mt-4 text-center sm:text-left">
                    Official Link • Secure & Verified
                </p>
            </div>
        </div>
    );
}
