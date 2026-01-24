import { Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ReviewSidebarProps {
    companyName: string;
    rating: number; // 0-5
    minInvestment: string;
    fees: string;
    bbbRating: string;
    bestFor: string;
    visitUrl: string;
    logo?: string; // Optional logo display
}

export function ReviewSidebar({
    companyName: _companyName,
    rating,
    minInvestment,
    fees,
    bbbRating,
    bestFor,
    visitUrl
}: ReviewSidebarProps) {
    return (
        <div className="hidden lg:block sticky top-24 self-start w-80 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            {/* Rating Header */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 font-bold text-2xl mb-3">
                    {rating}
                </div>
                <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-5 h-5", i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-slate-600")}
                        />
                    ))}
                </div>
                <p className="text-sm font-medium text-slate-400">Overall Rating</p>
            </div>

            {/* Quick Facts */}
            <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-sm text-slate-400">Min. Investment</span>
                    <span className="font-semibold text-white">{minInvestment}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-sm text-slate-400">Annual Fees</span>
                    <span className="font-semibold text-white">{fees}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-sm text-slate-400">BBB Rating</span>
                    <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold text-white">{bbbRating}</span>
                    </div>
                </div>
                <div className="py-3">
                    <span className="text-sm text-slate-400 block mb-1">Best For</span>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                        <Award className="w-3 h-3" />
                        {bestFor}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <Button variant="gold" size="lg" className="w-full shadow-xl shadow-amber-500/20 mb-4" asChild>
                <a href={visitUrl} target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </Button>

            <p className="text-xs text-center text-slate-500">
                Official Partner Link
            </p>
        </div>
    );
}
