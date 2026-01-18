"use client";

import { useState, useEffect } from "react";
import { X, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

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
                            <div className="p-8 md:w-3/5">
                                <h2 className="text-2xl font-bold text-primary mb-2">Get the 2026 Gold IRA Guide</h2>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Learn the <span className="font-semibold text-primary">#1 tax loophole</span> the rich use to move their 401(k) to gold tax-free.
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

                                <Button size="lg" variant="gold" className="w-full shadow-lg" asChild>
                                    <Link href="/guide/gold-ira-guide" onClick={() => setIsVisible(false)}>
                                        Download Free PDF
                                    </Link>
                                </Button>
                                <p className="mt-4 text-xs text-center text-gray-400">
                                    No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
