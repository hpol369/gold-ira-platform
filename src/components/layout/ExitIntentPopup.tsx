"use client";

import { useState, useEffect } from "react";
import { X, FileText, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { emailService } from "@/lib/email-service";
import { useABTest } from "@/lib/ab-testing";

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);

    const [hasTriggered, setHasTriggered] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const variant = useABTest("popup-offer");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            await emailService.subscribe(email, "exit-popup");
            setStatus("success");
            // Delay closing to show success message
            setTimeout(() => setIsVisible(false), 2000);
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasTriggered]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsVisible(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Visual Side */}
                            <div className="bg-primary p-8 text-white md:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-secondary/10 opacity-30" />
                                <div className="z-10 bg-white/10 p-4 rounded-full mb-4">
                                    <FileText className="w-10 h-10 text-secondary" />
                                </div>
                                <h3 className="z-10 font-serif font-bold text-xl mb-2">Wait!</h3>
                                <p className="z-10 text-sm opacity-90">Don't lose 30% of your savings to inflation.</p>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:w-3/5 relative">
                                {status === "success" ? (
                                    <div className="h-full flex flex-col justify-center items-center text-center animate-in fade-in zoom-in">
                                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                        <h3 className="text-2xl font-bold text-primary mb-2">Success!</h3>
                                        <p className="text-gray-600">Check your inbox for the guide.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-bold text-primary mb-2">
                                            {variant === "control" ? "Get the 2026 Gold IRA Guide" : "Free Wealth Protection Kit"}
                                        </h2>
                                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                            {variant === "control"
                                                ? <span>Learn the <span className="font-semibold text-primary">#1 tax loophole</span> the rich use to move their 401(k) to gold tax-free.</span>
                                                : <span>Don't let inflation eat your retirement. Get the complete kit to protect your hard-earned savings.</span>
                                            }
                                        </p>

                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>Avoid IRS Penalties</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>Best Companies Ranked</span>
                                            </li>
                                        </ul>

                                        <form onSubmit={handleSubscribe} className="space-y-3">
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <Button
                                                size="lg"
                                                variant="gold"
                                                className="w-full shadow-lg"
                                                type="submit"
                                                disabled={status === "loading"}
                                            >
                                                {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Download Free PDF"}
                                            </Button>
                                        </form>
                                        <p className="mt-4 text-xs text-center text-gray-400">
                                            No spam. Unsubscribe anytime.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
