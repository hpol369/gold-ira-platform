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
        <div className="bg-white border-2 border-primary/10 rounded-2xl overflow-hidden shadow-sm my-8 not-prose">
            <div className="bg-primary/5 p-6 border-b border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-sm ${rating >= 4.5 ? 'bg-secondary' : 'bg-gray-500'}`}>
                        {rating}
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-xl text-primary m-0">The Verdict</h3>
                        <div className="flex items-center gap-1 text-secondary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                        </div>
                    </div>
                </div>
                {isRecommended ? (
                    <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-sm">
                        <CheckCircle className="w-5 h-5" /> Recommended
                    </div>
                ) : (
                    <div className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold text-sm">
                        <XCircle className="w-5 h-5" /> Not Recommended
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    {bottomLine}
                </p>

                <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-md" asChild>
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                        {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </Button>

                <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
                    Official Link • Secure & Verified
                </p>
            </div>
        </div>
    );
}
