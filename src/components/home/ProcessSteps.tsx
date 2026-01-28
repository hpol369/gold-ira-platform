"use client";

import { Container } from "@/components/ui/Container";
import { FileCheck, RefreshCw, Lock } from "lucide-react";

export function ProcessSteps() {
    const steps = [
        {
            icon: FileCheck,
            title: "1. Open Your Account",
            desc: "Complete a short application. Your Gold IRA company sets up the account with an IRS-approved custodian—typically same day."
        },
        {
            icon: RefreshCw,
            title: "2. Fund Your Account",
            desc: "Roll over funds from your existing 401(k), IRA, or other retirement account. Direct transfers are tax-free with zero penalties."
        },
        {
            icon: Lock,
            title: "3. Purchase Gold",
            desc: "Choose from IRS-approved gold coins and bars. Your metals are delivered to a secure, insured depository in your name."
        }
    ];

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-[#B22234] font-bold tracking-widest uppercase text-xs mb-2 block">
                        The Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000080] mb-4">
                        How a Gold IRA Works
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        A Gold IRA works just like your regular IRA—but instead of paper assets,
                        you own physical gold. The process is straightforward and fully IRS-compliant.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#B22234]/20 via-[#B22234]/40 to-[#B22234]/20 z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#B22234]/30 group-hover:bg-slate-50 transition-all duration-300">
                                <step.icon className="w-10 h-10 text-[#B22234]" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold text-lg border-4 border-slate-50">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#000080] mb-3">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Timeline note */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-slate-500">
                        Most rollovers complete within 1-2 weeks. Your specialist handles the paperwork.
                    </p>
                </div>
            </Container>
        </section>
    );
}
