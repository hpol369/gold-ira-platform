"use client";

import Link from "next/link";
import { ArrowRight, Menu, Phone, ShieldCheck, ChevronDown, Flag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function PatriotNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* TOP BAR: Institutional Trust */}
            <div className="bg-slate-100 border-b border-slate-200 py-2 text-xs md:text-sm text-slate-600 font-medium">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live Market: Gold $2,421.50 (+1.2%)
                        </span>
                        <span className="hidden md:inline text-slate-300">|</span>
                        <span className="hidden md:flex items-center gap-1 text-[#000080]">
                            <Flag className="h-3 w-3 fill-current" />
                            American Owned & Operated
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/login" className="hover:text-[#000080] underline">Client Login</Link>
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR: Clean White & Navy */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/preview/home" className="flex items-center gap-3 group">
                        <div className="bg-[#000080] text-white p-2 rounded-lg font-serif font-black text-xl tracking-tighter shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                            RD
                        </div>
                        <div className="leading-tight">
                            <div className="font-serif font-bold text-[#000080] text-lg tracking-tight">RICH DAD</div>
                            <div className="text-[10px] font-bold text-[#B22234] tracking-widest uppercase">Retirement</div>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-600">
                        <Link href="/preview/article" className="hover:text-[#000080] transition-colors py-2 border-b-2 border-transparent hover:border-[#B22234]">
                            Gold IRA Guide
                        </Link>
                        <Link href="/preview/review" className="hover:text-[#000080] transition-colors py-2 border-b-2 border-transparent hover:border-[#B22234]">
                            Company Reviews
                        </Link>
                        <Link href="/preview/article" className="hover:text-[#000080] transition-colors py-2 border-b-2 border-transparent hover:border-[#B22234]">
                            401k Rollover
                        </Link>
                        <Link href="/preview/article" className="hover:text-[#000080] transition-colors py-2 border-b-2 border-transparent hover:border-[#B22234]">
                            News
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <Button className="hidden md:flex bg-[#B22234] hover:bg-[#8b1c2a] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-red-900/10 transition-all transform hover:scale-105 border-b-4 border-[#8b1c2a] active:border-b-0 active:translate-y-1">
                            Get Free Gold Kit
                        </Button>
                        <button className="lg:hidden p-2 text-slate-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Simplified) */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-4 px-4 shadow-xl">
                        <div className="flex flex-col gap-4">
                            <Link href="/preview/home" className="text-slate-900 font-bold border-b border-slate-100 pb-2">Home</Link>
                            <Link href="/preview/article" className="text-slate-600 font-medium border-b border-slate-100 pb-2">Gold IRA Guide</Link>
                            <Link href="/preview/review" className="text-slate-600 font-medium border-b border-slate-100 pb-2">Reviews</Link>
                            <Button className="w-full bg-[#B22234] text-white">Get Free Kit</Button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
