"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

export function QuizCTA() {
    return (
        <section
            className="relative overflow-hidden py-16 bg-white/5 backdrop-blur-xl border-y border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(212,175,55,0.1)]"
            style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
        >
            <FloatingOrbs variant="section" />
            {/* Ambient gold gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                    Not Sure Which Account Is Right for You?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Take our 60-second quiz to find the perfect retirement account - Gold IRA, Crypto IRA, ROBS 401k, or Self-Directed IRA.
                </p>
                <Link
                    href="/audit"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 py-4 px-10 rounded-xl font-bold text-lg
                               bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-slate-900
                               shadow-[0_0_60px_-5px_rgba(212,175,55,0.5),0_0_100px_-10px_rgba(212,175,55,0.3)]
                               hover:shadow-[0_0_80px_-5px_rgba(212,175,55,0.7),0_0_120px_-10px_rgba(212,175,55,0.4)]
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
