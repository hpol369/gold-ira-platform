import { Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface VerdictBoxProps {
    winnerName: string;
    summary: string;
    bestFor: string;
    ctaText?: string;
    ctaLink?: string;
}

export function VerdictBox({ winnerName, summary, bestFor, ctaText = "Get Started", ctaLink = "/quiz" }: VerdictBoxProps) {
    return (
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 my-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#B22234] rounded-full flex items-center justify-center shadow-md">
                        <Trophy className="w-10 h-10 text-white" />
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <span className="text-[#B22234] font-bold tracking-widest uppercase text-xs mb-2 block">Our Verdict</span>
                    <h3 className="text-2xl font-serif font-bold text-[#000080] mb-3">
                        Winner: <span className="text-[#B22234]">{winnerName}</span>
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        {summary}
                    </p>
                    <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">
                        <span className="text-sm font-semibold text-slate-900">Best For: {bestFor}</span>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <Button variant="gold" size="lg" asChild className="shadow-xl bg-[#B22234] hover:bg-[#8b1c2a]">
                        <Link href={ctaLink}>
                            {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
