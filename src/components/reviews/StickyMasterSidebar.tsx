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
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-serif font-bold text-lg mb-4 text-primary">Quick Jump</h3>
                <nav className="flex flex-col gap-2 text-sm">
                    <a href="#comparison-table" className="text-primary hover:text-secondary transition-colors font-medium">
                        Compare All Companies
                    </a>
                    <a href="#augusta-review" className="text-gray-600 hover:text-primary transition-colors">
                        #1 Best Overall: Augusta
                    </a>
                    <a href="#goldco-review" className="text-gray-600 hover:text-primary transition-colors">
                        #2 Best for Service: Goldco
                    </a>
                    <a href="#ahg-review" className="text-gray-600 hover:text-primary transition-colors">
                        #3 Best for Families: AHG
                    </a>
                    <a href="#methodology" className="text-gray-600 hover:text-primary transition-colors mt-2 pt-2 border-t border-gray-100">
                        Ranking Methodology
                    </a>
                </nav>
            </div>

            {/* Persistent CTA */}
            <div className="bg-gradient-to-br from-primary to-[#1a2e22] p-6 rounded-xl shadow-lg border border-white/10 text-white text-center">

                {status === "success" ? (
                    <div className="py-8 flex flex-col items-center animate-in fade-in zoom-in">
                        <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mb-4" />
                        <h3 className="font-serif font-bold text-xl mb-2">Success!</h3>
                        <p className="text-sm text-gray-300">Your guide is on its way to your inbox.</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <span className="inline-block bg-[#D4AF37] text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider mb-2">
                                {variant === "control" ? "Free Download" : "Limited Time Offer"}
                            </span>
                            <h3 className="font-serif font-bold text-xl mb-1">
                                {variant === "control" ? "2026 Wealth Kit" : "Free Gold Guide"}
                            </h3>
                            <p className="text-xs text-white/80">
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
                                className="w-full px-3 py-2 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
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

                        <p className="text-[10px] text-white/40 mt-3">
                            Zero spam promise. Unsubscribe anytime.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
