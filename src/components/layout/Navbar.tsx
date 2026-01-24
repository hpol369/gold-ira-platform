"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                            <span className="hidden sm:inline text-slate-400">Updated: January 2026</span>
                        </div>
                        <a
                            href={AFFILIATE_LINKS.augusta}
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

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/best-gold-ira-companies" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Best Companies
                            </Link>
                            <Link href="/reviews" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Reviews
                            </Link>
                            <Link href="/compare" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Compare
                            </Link>
                            <Link href="/rollover" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Rollover
                            </Link>
                            <Button variant="gold" size="sm" asChild>
                                <Link href="/guide/gold-ira-guide">Free PDF Guide</Link>
                            </Button>
                        </nav>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                            <Button variant="gold" size="sm" asChild className="flex">
                                <Link href="/guide/gold-ira-guide">Free Guide</Link>
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
                <div className="lg:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-white/10 py-4 px-4 shadow-xl">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/best-gold-ira-companies"
                            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Best Gold IRA Companies
                        </Link>
                        <Link
                            href="/reviews"
                            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Company Reviews
                        </Link>
                        <Link
                            href="/compare"
                            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Compare Companies
                        </Link>
                        <Link
                            href="/rollover"
                            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Rollover Guide
                        </Link>
                        <Button variant="gold" className="w-full mt-2" asChild>
                            <Link href="/guide/gold-ira-guide" onClick={() => setIsMobileMenuOpen(false)}>
                                Free PDF Guide
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
