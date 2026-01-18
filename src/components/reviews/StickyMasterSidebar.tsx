"use client";

import { Link } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StickyMasterSidebar() {
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
                <div className="mb-4">
                    <span className="inline-block bg-[#D4AF37] text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider mb-2">
                        Free Download
                    </span>
                    <h3 className="font-serif font-bold text-xl mb-1">2026 Wealth Kit</h3>
                    <p className="text-xs text-white/80">
                        Learn the "Tax-Loophole" to move your 401(k) to gold penalty-free.
                    </p>
                </div>
                <Button variant="gold" className="w-full font-bold shadow-md hover:scale-105 transition-transform">
                    Get Free PDF Guide
                </Button>
                <p className="text-[10px] text-white/40 mt-3">
                    Zero spam promise. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
}
