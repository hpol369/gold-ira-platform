"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

export function QuizCTA() {
    return (
        <section
            className="relative overflow-hidden py-16 bg-[#000080] border-y border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
        >
            <FloatingOrbs variant="section" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                    Not Sure Which Account Is Right for You?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                    Take our 60-second quiz to find the perfect retirement account - Gold IRA, Crypto IRA, ROBS 401k, or Self-Directed IRA.
                </p>
                <Link
                    href="/audit"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 py-4 px-10 rounded-xl font-bold text-lg
                               bg-[#B22234] text-white
                               shadow-[0_4px_20px_rgba(178,34,52,0.3)]
                               hover:bg-[#8b1c2a] hover:shadow-[0_4px_25px_rgba(178,34,52,0.4)]
                               hover:scale-105 transition-all duration-300"
                >
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    <span className="relative z-10 flex items-center gap-2">
                        Find My Perfect Account <ArrowRight className="w-5 h-5" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
