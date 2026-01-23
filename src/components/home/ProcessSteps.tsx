"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight, FileCheck, RefreshCw, Lock } from "lucide-react";

export function ProcessSteps() {
    const steps = [
        {
            icon: FileCheck,
            title: "1. Open Your Account",
            desc: "The paperwork is handled for you. A specialist guides you through the application in minutes, not hours."
        },
        {
            icon: RefreshCw,
            title: "2. Tax-Free Transfer",
            desc: "Move funds from your old 401(k) or IRA. It’s a penalty-free, tax-free rollover directly into your new account."
        },
        {
            icon: Lock,
            title: "3. Secure Your Gold",
            desc: "Select your metals. They are shipped securely to an insured, IRS-approved depository in your name."
        }
    ];

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-2 block animate-pulse">
                        The "Loophole" Explained
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        How to Switch in 3 Simple Steps
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        It's not complicated. You don't need to be a tax expert.
                        The process is <strong>100% IRS-approved</strong> and takes less work than opening a bank account.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-amber-100 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                                <step.icon className="w-10 h-10 text-amber-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg border-4 border-white">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Sub-CTA */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 mb-4 italic">
                        "I thought it would be hard, but the team did 95% of the work for me." — Robert T., Texas
                    </p>
                </div>
            </Container>
        </section>
    );
}
