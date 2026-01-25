"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLearnOpen, setIsLearnOpen] = useState(false);

    // Auto-update freshness badge
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const freshnessBadge = `Updated: ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
            {/* Top Bar - Trust & Contact */}
            <div className="bg-slate-800 py-2 text-white">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-2 sm:flex-row text-xs sm:text-sm">
                        <div className="flex items-center gap-4 opacity-90">
                            <span className="flex items-center gap-1">
                                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                                <span className="text-slate-300">Secure & Private</span>
                            </span>
                            <span className="hidden sm:inline text-slate-600">|</span>
                            <span className="hidden sm:inline text-slate-400">{freshnessBadge}</span>
                        </div>
                        <a
                            href={getTrackedLink(AFFILIATE_LINKS.augusta, "navbar-cta", "augusta")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
                        >
                            <span>Get Your Free Consultation</span>
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
            <div className="py-4">
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-slate-900 group-hover:bg-amber-400 transition-colors">
                                <span className="font-serif font-bold text-lg">R</span>
                            </div>
                            <span className="text-xl font-serif font-bold text-white tracking-tight hidden sm:block">
                                Rich<span className="text-amber-400">Dad</span>Retirement
                            </span>
                        </Link>

                        {/* Desktop Navigation - Golden Circle: WHY → HOW → WHAT */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href="/why-gold" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Why Gold?
                            </Link>
                            <Link href="/what-is-a-gold-ira" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                How It Works
                            </Link>
                            <Link href="/best-gold-ira-companies" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Best Companies
                            </Link>

                            {/* Learn Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsLearnOpen(true)}
                                onMouseLeave={() => setIsLearnOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                                    Learn
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isLearnOpen && (
                                    <div className="absolute top-full left-0 pt-2 z-50">
                                        <div className="w-56 bg-slate-800 border border-white/10 rounded-xl shadow-xl py-2">
                                            <Link href="/scams" className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 font-medium">
                                                Scam Protection Center
                                            </Link>
                                            <Link href="/academy" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Gold IRA Academy
                                            </Link>
                                            <Link href="/faq" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                FAQ (60+ Questions)
                                            </Link>
                                            <Link href="/glossary" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Glossary of Terms
                                            </Link>
                                            <div className="border-t border-white/10 my-2"></div>
                                            <Link href="/best-gold-ira-for" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Best For Your Situation
                                            </Link>
                                            <Link href="/reviews" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Company Reviews
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/tools" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Tools
                            </Link>
                            <Button variant="gold" size="sm" asChild>
                                <Link href="/get-started">Get Started</Link>
                            </Button>
                        </nav>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                            <Button variant="gold" size="sm" asChild className="flex">
                                <Link href="/get-started">Get Started</Link>
                            </Button>
                            {/* Mobile Menu Button */}
                            <button
                                className="p-2 text-white"
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
                <div className="lg:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-white/10 py-4 px-4 shadow-xl max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/why-gold"
                            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Why Gold?
                        </Link>
                        <Link
                            href="/what-is-a-gold-ira"
                            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/best-gold-ira-companies"
                            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Best Companies
                        </Link>

                        {/* Learn Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">Learn</span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/scams" className="text-sm text-red-400 hover:text-red-300 py-1 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                    Scam Protection Center
                                </Link>
                                <Link href="/academy" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Gold IRA Academy
                                </Link>
                                <Link href="/faq" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    FAQ Hub
                                </Link>
                                <Link href="/glossary" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Glossary
                                </Link>
                                <Link href="/best-gold-ira-for" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Best For You
                                </Link>
                                <Link href="/reviews" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Reviews
                                </Link>
                            </div>
                        </div>

                        {/* Tools Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">Tools</span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/tools/crash-simulator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Crash Simulator
                                </Link>
                                <Link href="/tools/rmd-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    RMD Calculator
                                </Link>
                                <Link href="/tools/fees-comparison" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Fees Comparison
                                </Link>
                            </div>
                        </div>

                        <Button variant="gold" className="w-full mt-2" asChild>
                            <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
