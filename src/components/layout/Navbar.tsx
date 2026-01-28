"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Menu, X, ChevronDown, Flag, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLearnOpen, setIsLearnOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);

    // Auto-update freshness badge
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const freshnessBadge = `Updated: ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            {/* Top Bar - Trust & Contact - PATRIOT STYLE */}
            <div className="bg-slate-100 py-2 text-slate-600 border-b border-slate-200">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-2 sm:flex-row text-xs sm:text-sm font-medium">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Live Market: Gold $2,421.50 (+1.2%)
                            </span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="hidden sm:flex items-center gap-1 text-[#000080]">
                                <Flag className="h-3 w-3 fill-current" />
                                American Owned & Operated
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="tel:800-123-4567" className="flex items-center gap-1 hover:text-[#000080]">
                                <Phone className="h-3 w-3" />
                                <span className="hidden sm:inline">800-123-4567</span>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
            <div className="py-4">
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo - PATRIOT STYLE (Navy/Red) */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#000080] text-white shadow-md shadow-blue-900/20 group-hover:bg-[#000060] transition-colors">
                                <span className="font-serif font-bold text-lg">R</span>
                            </div>
                            <div className="leading-tight">
                                <div className="font-serif font-bold text-[#000080] text-lg tracking-tight">RICH DAD</div>
                                <div className="text-[10px] font-bold text-[#B22234] tracking-widest uppercase">Retirement</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation - PATRIOT STYLE (Slate-600) */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href="/why-gold" className="text-sm font-semibold text-slate-600 hover:text-[#000080] transition-colors">
                                Why Gold?
                            </Link>
                            <Link href="/what-is-a-gold-ira" className="text-sm font-semibold text-slate-600 hover:text-[#000080] transition-colors">
                                How It Works
                            </Link>
                            <Link href="/best-gold-ira-companies" className="text-sm font-semibold text-slate-600 hover:text-[#000080] transition-colors">
                                Best Companies
                            </Link>

                            {/* Learn Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsLearnOpen(true)}
                                onMouseLeave={() => setIsLearnOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-[#000080] transition-colors py-2">
                                    Learn
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isLearnOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                                        <div className="w-[660px] bg-white border border-slate-200 rounded-xl shadow-xl p-6 ring-1 ring-slate-900/5">
                                            <div className="grid grid-cols-3 gap-8">
                                                {/* Column 1: Gold IRA Essentials */}
                                                <div>
                                                    <span className="block text-xs font-bold text-[#000080] uppercase tracking-wide mb-3 border-b border-slate-100 pb-1">Gold IRA Essentials</span>
                                                    <Link href="/scenarios" className="block py-1.5 text-sm text-[#B22234] hover:text-red-700 font-medium">
                                                        Crisis Scenarios
                                                    </Link>
                                                    <Link href="/scams" className="block py-1.5 text-sm text-[#B22234] hover:text-red-700 font-medium">
                                                        Scam Protection Center
                                                    </Link>
                                                    <Link href="/investigative-hub" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Industry Red Flags
                                                    </Link>
                                                    <Link href="/academy" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Gold IRA Academy
                                                    </Link>
                                                    <Link href="/learn" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Learning Center
                                                    </Link>
                                                    <Link href="/faq" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        FAQ (60+ Questions)
                                                    </Link>

                                                    <div className="border-t border-slate-100 my-3"></div>
                                                    <span className="block text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">401k & Rollovers</span>
                                                    <Link href="/rollover" className="block py-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium">
                                                        401k Rollover Hub
                                                    </Link>
                                                    <Link href="/best-gold-ira-for" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Best For Your Situation
                                                    </Link>
                                                </div>

                                                {/* Column 2: Alternative IRAs */}
                                                <div>
                                                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 border-b border-slate-100 pb-1">
                                                        Silver & Crypto
                                                    </span>
                                                    <Link href="/silver-ira" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080] font-medium">
                                                        Silver IRA Hub
                                                    </Link>
                                                    <Link href="/silver-retirement" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Silver Retirement Planning
                                                    </Link>
                                                    <Link href="/silver-coin-values" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Silver Coin Values
                                                    </Link>
                                                    <Link href="/silver-dealer-reviews" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Silver Dealer Reviews
                                                    </Link>
                                                    <Link href="/silver-price" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Silver Price Predictions
                                                    </Link>

                                                    <div className="border-t border-slate-100 my-3"></div>
                                                    <span className="block text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Crypto IRA</span>
                                                    <Link href="/crypto-ira" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Crypto IRA Guide
                                                    </Link>
                                                    <Link href="/best-crypto-ira-companies" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Best Crypto Companies
                                                    </Link>
                                                </div>

                                                {/* Column 3: Business & Real Estate */}
                                                <div>
                                                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 border-b border-slate-100 pb-1">
                                                        Self-Directed
                                                    </span>
                                                    <Link href="/robs-401k" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        ROBS 401k Guide
                                                    </Link>
                                                    <Link href="/real-estate-ira" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Real Estate IRA Guide
                                                    </Link>
                                                    <Link href="/solo-401k" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Solo 401k Guide
                                                    </Link>
                                                    <Link href="/learn/checkbook-ira" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        Checkbook IRA
                                                    </Link>
                                                    <Link href="/self-directed-ira" className="block py-1.5 text-sm text-slate-600 hover:text-[#000080]">
                                                        SDIRA Guide
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/news" className="text-sm font-semibold text-slate-600 hover:text-[#000080] transition-colors">
                                News
                            </Link>

                            {/* Tools Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsToolsOpen(true)}
                                onMouseLeave={() => setIsToolsOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-[#000080] transition-colors py-2">
                                    Tools
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isToolsOpen && (
                                    <div className="absolute top-full right-0 pt-2 z-50">
                                        <div className="w-72 bg-white border border-slate-200 rounded-xl shadow-xl py-2 ring-1 ring-slate-900/5">
                                            {/* FIRE Calculators */}
                                            <span className="block px-4 py-1 text-xs font-bold text-orange-500 uppercase tracking-wide">FIRE Calculators</span>
                                            <Link href="/tools/fire-calculator" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#000080] hover:bg-slate-50">
                                                FIRE Calculator
                                            </Link>
                                            <Link href="/tools/coast-fire-calculator" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#000080] hover:bg-slate-50">
                                                Coast FIRE Calculator
                                            </Link>

                                            <div className="border-t border-slate-100 my-2"></div>

                                            {/* Retirement Planning */}
                                            <span className="block px-4 py-1 text-xs font-bold text-blue-600 uppercase tracking-wide">Retirement Planning</span>
                                            <Link href="/tools/retirement-calculator" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#000080] hover:bg-slate-50">
                                                Retirement Calculator
                                            </Link>
                                            <Link href="/tools/rmd-calculator" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#000080] hover:bg-slate-50">
                                                RMD Calculator
                                            </Link>

                                            <div className="border-t border-slate-100 my-2"></div>

                                            {/* Gold IRA Tools */}
                                            <span className="block px-4 py-1 text-xs font-bold text-[#000080] uppercase tracking-wide">Gold IRA Tools</span>
                                            <Link href="/tools/gold-ira-calculator" className="block px-4 py-2 text-sm text-slate-600 hover:text-[#000080] hover:bg-slate-50">
                                                Gold IRA Calculator
                                            </Link>
                                            <Link href="/tools" className="block px-4 py-2 text-sm text-[#B22234] hover:text-red-700 hover:bg-slate-50 font-medium flex items-center gap-1">
                                                View All Tools
                                                <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* PATRIOT BUTTON */}
                            <Button
                                className="bg-[#B22234] hover:bg-[#8b1c2a] text-white shadow-md shadow-red-900/10 font-bold border-b-4 border-[#8b1c2a] active:border-b-0 active:translate-y-1 transition-all"
                                size="sm"
                                asChild
                            >
                                <Link href="/get-started">Get Free Gold Kit</Link>
                            </Button>
                        </nav>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                            <Button className="bg-[#B22234] text-white font-bold text-xs px-3" size="sm" asChild>
                                <Link href="/get-started">Free Kit</Link>
                            </Button>
                            {/* Mobile Menu Button */}
                            <button
                                className="p-2 text-slate-700"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-4 px-4 shadow-xl max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        <Link href="/" className="text-slate-900 font-bold border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/guide/gold-ira-guide" className="text-slate-600 font-medium border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Gold IRA Guide</Link>
                        <Link href="/reviews" className="text-slate-600 font-medium border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
                        <Link href="/news" className="text-slate-600 font-medium border-b border-slate-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
                        <Button className="w-full bg-[#B22234] text-white mt-4">Get Free Gold Kit</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
