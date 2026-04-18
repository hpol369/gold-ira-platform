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
        <div className="hidden lg:block sticky top-24 space-y-6">
            {/* Navigation */}
            <div className="bg-[#161828] p-6 rounded-xl border border-[#2A2D42] shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                <h3 className="font-serif font-semibold text-lg mb-4 text-[#F6F4EF] tracking-[-0.01em]">Quick Jump</h3>
                <nav className="flex flex-col gap-2 text-sm">
                    <a href="#comparison-table" className="text-[#D4A94E] hover:text-[#F6F4EF] transition-colors font-medium">
                        Compare All Companies
                    </a>
                    <a href="#augusta-review" className="text-[#A8A39A] hover:text-[#F6F4EF] transition-colors">
                        #1 Best Overall: Augusta
                    </a>
                    <a href="#goldco-review" className="text-[#A8A39A] hover:text-[#F6F4EF] transition-colors">
                        #2 Best for Service: Goldco
                    </a>
                    <a href="#ahg-review" className="text-[#A8A39A] hover:text-[#F6F4EF] transition-colors">
                        #3 Best for Families: AHG
                    </a>
                    <a href="#methodology" className="text-[#A8A39A] hover:text-[#F6F4EF] transition-colors mt-2 pt-2 border-t border-[#2A2D42]">
                        Ranking Methodology
                    </a>
                </nav>
            </div>

            {/* Persistent CTA */}
            <div className="relative bg-[rgba(197,149,46,0.06)] p-6 rounded-xl shadow-[0_16px_46px_rgba(197,149,46,0.12)] border border-[rgba(197,149,46,0.32)] text-center">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5952E] to-transparent" />

                {status === "success" ? (
                    <div className="py-8 flex flex-col items-center animate-in fade-in zoom-in">
                        <CheckCircle2 className="w-12 h-12 text-[#D4A94E] mb-4" />
                        <h3 className="font-serif font-semibold text-xl mb-2 text-[#F6F4EF] tracking-[-0.01em]">Success!</h3>
                        <p className="text-sm text-[#A8A39A]">Your guide is on its way to your inbox.</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <span className="inline-block bg-[#C5952E] text-[#0C0D18] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-[0.18em] mb-2">
                                {variant === "control" ? "Free Download" : "Limited Time Offer"}
                            </span>
                            <h3 className="font-serif font-semibold text-xl mb-1 text-[#F6F4EF] tracking-[-0.01em]">
                                {variant === "control" ? "2026 Wealth Kit" : "Free Gold Guide"}
                            </h3>
                            <p className="text-xs text-[#A8A39A] leading-[1.55]">
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
                                className="w-full px-3 py-2.5 rounded-lg text-sm text-[#F6F4EF] bg-[#0C0D18] border border-[#2A2D42] focus:outline-none focus:ring-2 focus:ring-[rgba(197,149,46,0.3)] focus:border-[rgba(197,149,46,0.55)] placeholder:text-[#7E7A72] transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                fullWidth
                                disabled={status === "loading"}
                                motionDisabled
                            >
                                {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Free PDF Guide"}
                            </Button>
                        </form>

                        <p className="text-[10px] text-[#A8A39A] mt-3">
                            Zero spam promise. Unsubscribe anytime.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
