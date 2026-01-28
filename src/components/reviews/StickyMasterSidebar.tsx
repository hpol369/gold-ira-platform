"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { emailService } from "@/lib/email-service";
import { useABTest } from "@/lib/ab-testing";

export function StickyMasterSidebar() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const variant = useABTest("sidebar-offer");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            await emailService.subscribe(email, "sidebar");
            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="hidden lg:block sticky top-24 space-y-8">
            {/* Navigation */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-serif font-bold text-lg mb-4 text-[#000080]">Quick Jump</h3>
                <nav className="flex flex-col gap-2 text-sm">
                    <a href="#comparison-table" className="text-[#000080] hover:text-[#B22234] transition-colors font-medium">
                        Compare All Companies
                    </a>
                    <a href="#augusta-review" className="text-slate-500 hover:text-[#000080] transition-colors">
                        #1 Best Overall: Augusta
                    </a>
                    <a href="#goldco-review" className="text-slate-500 hover:text-[#000080] transition-colors">
                        #2 Best for Service: Goldco
                    </a>
                    <a href="#ahg-review" className="text-slate-500 hover:text-[#000080] transition-colors">
                        #3 Best for Families: AHG
                    </a>
                    <a href="#methodology" className="text-slate-500 hover:text-[#000080] transition-colors mt-2 pt-2 border-t border-slate-200">
                        Ranking Methodology
                    </a>
                </nav>
            </div>

            {/* Persistent CTA */}
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center">

                {status === "success" ? (
                    <div className="py-8 flex flex-col items-center animate-in fade-in zoom-in">
                        <CheckCircle2 className="w-12 h-12 text-[#B22234] mb-4" />
                        <h3 className="font-serif font-bold text-xl mb-2 text-[#000080]">Success!</h3>
                        <p className="text-sm text-slate-500">Your guide is on its way to your inbox.</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <span className="inline-block bg-[#B22234] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider mb-2">
                                {variant === "control" ? "Free Download" : "Limited Time Offer"}
                            </span>
                            <h3 className="font-serif font-bold text-xl mb-1 text-[#000080]">
                                {variant === "control" ? "2026 Wealth Kit" : "Free Gold Guide"}
                            </h3>
                            <p className="text-xs text-slate-500">
                                {variant === "control"
                                    ? 'Learn the "Tax-Loophole" to move your 401(k) to gold penalty-free.'
                                    : 'Protect your savings from inflation. Get the definitive PDF guide today.'
                                }
                            </p>
                        </div>

                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 rounded-md text-sm text-slate-900 bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#000080]/50 focus:border-[#000080]/50 placeholder:text-slate-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                variant="gold"
                                className="w-full font-bold shadow-md hover:scale-105 transition-transform"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Free PDF Guide"}
                            </Button>
                        </form>

                        <p className="text-[10px] text-slate-500 mt-3">
                            Zero spam promise. Unsubscribe anytime.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
