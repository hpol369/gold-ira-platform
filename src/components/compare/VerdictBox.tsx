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
        <div className="bg-gradient-to-br from-background-subtle to-white rounded-2xl p-8 border-2 border-primary/10 shadow-lg my-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-md">
                        <Trophy className="w-10 h-10 text-white" />
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Our Verdict</span>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                        Winner: <span className="text-secondary-dark">{winnerName}</span>
                    </h3>
                    <p className="text-text-muted mb-4 leading-relaxed">
                        {summary}
                    </p>
                    <div className="inline-block bg-primary/5 px-4 py-2 rounded-lg border border-primary/10">
                        <span className="text-sm font-semibold text-primary">Best For: {bestFor}</span>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <Button variant="gold" size="lg" asChild className="shadow-xl">
                        <Link href={ctaLink}>
                            {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
