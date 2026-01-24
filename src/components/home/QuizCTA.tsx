import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function QuizCTA() {
    return (
        <section className="py-16 bg-slate-800/50 border-y border-white/10">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                    Not Sure Where to Start?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Take our 60-second quiz to find out which gold IRA company is the best match for your investment goals and portfolio size.
                </p>
                <Button variant="gold" size="xl" asChild>
                    <Link href="/quiz">
                        Find My Perfect Match <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
