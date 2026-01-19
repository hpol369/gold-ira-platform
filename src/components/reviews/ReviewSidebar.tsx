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
        <div className="hidden lg:block sticky top-24 self-start w-80 p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
            {/* Rating Header */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary font-bold text-2xl mb-3">
                    {rating}
                </div>
                <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-5 h-5", i < Math.floor(rating) ? "fill-secondary text-secondary" : "text-gray-300")}
                        />
                    ))}
                </div>
                <p className="text-sm font-medium text-gray-500">Overall Rating</p>
            </div>

            {/* Quick Facts */}
            <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Min. Investment</span>
                    <span className="font-semibold text-primary">{minInvestment}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Annual Fees</span>
                    <span className="font-semibold text-primary">{fees}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-500">BBB Rating</span>
                    <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold text-primary">{bbbRating}</span>
                    </div>
                </div>
                <div className="py-3">
                    <span className="text-sm text-gray-500 block mb-1">Best For</span>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                        <Award className="w-3 h-3" />
                        {bestFor}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <Button variant="gold" size="lg" className="w-full shadow-xl shadow-secondary/20 mb-4" asChild>
                <a href={visitUrl} target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </Button>

            <p className="text-xs text-center text-gray-400">
                Official Partner Link
            </p>
        </div>
    );
}
