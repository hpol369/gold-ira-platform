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
    const [isToolsOpen, setIsToolsOpen] = useState(false);

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
                                            <div className="border-t border-white/10 my-2"></div>
                                            <span className="block px-4 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wide">Silver IRA</span>
                                            <Link href="/guide/silver-ira-guide" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Silver IRA Guide
                                            </Link>
                                            <Link href="/best-silver-ira-companies" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Best Silver IRA Companies
                                            </Link>
                                            <div className="border-t border-white/10 my-2"></div>
                                            <span className="block px-4 py-1 text-xs font-semibold text-blue-400 uppercase tracking-wide flex items-center gap-1">
                                                Crypto IRA <span className="text-[10px] bg-blue-500/20 px-1 rounded">New</span>
                                            </span>
                                            <Link href="/crypto-ira" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Crypto IRA Guide
                                            </Link>
                                            <Link href="/best-crypto-ira-companies" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Best Crypto IRA Companies
                                            </Link>
                                            <Link href="/reviews/itrustcapital" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                iTrustCapital Review
                                            </Link>
                                            <div className="border-t border-white/10 my-2"></div>
                                            <span className="block px-4 py-1 text-xs font-semibold text-green-400 uppercase tracking-wide flex items-center gap-1">
                                                Self-Directed IRA <span className="text-[10px] bg-green-500/20 px-1 rounded">New</span>
                                            </span>
                                            <Link href="/self-directed-ira" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Self-Directed IRA Guide
                                            </Link>
                                            <Link href="/learn/checkbook-ira" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Checkbook IRA Explained
                                            </Link>
                                            <Link href="/reviews/rocket-dollar" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Rocket Dollar Review
                                            </Link>
                                            <div className="border-t border-white/10 my-2"></div>
                                            <span className="block px-4 py-1 text-xs font-semibold text-orange-400 uppercase tracking-wide flex items-center gap-1">
                                                ROBS 401k <span className="text-[10px] bg-orange-500/20 px-1 rounded">New</span>
                                            </span>
                                            <Link href="/robs-401k" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                ROBS 401k Guide
                                            </Link>
                                            <Link href="/reviews/guidant-financial" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Guidant Financial Review
                                            </Link>
                                            <Link href="/reviews/benetrends" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Benetrends Review
                                            </Link>
                                            <div className="border-t border-white/10 my-2"></div>
                                            <span className="block px-4 py-1 text-xs font-semibold text-teal-400 uppercase tracking-wide flex items-center gap-1">
                                                Real Estate IRA <span className="text-[10px] bg-teal-500/20 px-1 rounded">New</span>
                                            </span>
                                            <Link href="/real-estate-ira" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Real Estate IRA Guide
                                            </Link>
                                            <Link href="/learn/real-estate-ira-custodians" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Best RE IRA Custodians
                                            </Link>
                                            <div className="border-t border-white/10 my-2"></div>
                                            <span className="block px-4 py-1 text-xs font-semibold text-purple-400 uppercase tracking-wide flex items-center gap-1">
                                                Solo 401k <span className="text-[10px] bg-purple-500/20 px-1 rounded">New</span>
                                            </span>
                                            <Link href="/solo-401k" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Solo 401k Guide
                                            </Link>
                                            <Link href="/learn/solo-401k-contribution-limits" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Contribution Limits 2026
                                            </Link>
                                            <Link href="/learn/solo-401k-vs-sep-ira" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Solo 401k vs SEP IRA
                                            </Link>
                                            <Link href="/learn/solo-401k-providers" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Best Providers
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/news" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                News
                            </Link>

                            {/* Tools Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsToolsOpen(true)}
                                onMouseLeave={() => setIsToolsOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                                    Tools
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isToolsOpen && (
                                    <div className="absolute top-full right-0 pt-2 z-50">
                                        <div className="w-72 bg-slate-800 border border-white/10 rounded-xl shadow-xl py-2">
                                            {/* FIRE Calculators */}
                                            <span className="block px-4 py-1 text-xs font-semibold text-orange-400 uppercase tracking-wide">FIRE Calculators</span>
                                            <Link href="/tools/fire-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                FIRE Calculator
                                            </Link>
                                            <Link href="/tools/coast-fire-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Coast FIRE Calculator
                                            </Link>

                                            <div className="border-t border-white/10 my-2"></div>

                                            {/* Retirement Planning */}
                                            <span className="block px-4 py-1 text-xs font-semibold text-blue-400 uppercase tracking-wide">Retirement Planning</span>
                                            <Link href="/tools/retirement-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Retirement Calculator
                                            </Link>
                                            <Link href="/tools/rmd-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                RMD Calculator
                                            </Link>

                                            <div className="border-t border-white/10 my-2"></div>

                                            {/* Social Security */}
                                            <span className="block px-4 py-1 text-xs font-semibold text-green-400 uppercase tracking-wide">Social Security</span>
                                            <Link href="/tools/social-security-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Social Security Calculator
                                            </Link>
                                            <Link href="/tools/wep-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                WEP Calculator
                                            </Link>

                                            <div className="border-t border-white/10 my-2"></div>

                                            {/* Gold IRA Tools */}
                                            <span className="block px-4 py-1 text-xs font-semibold text-amber-400 uppercase tracking-wide">Gold IRA Tools</span>
                                            <Link href="/tools/gold-ira-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Gold IRA Calculator
                                            </Link>
                                            <Link href="/tools/gold-allocation-calculator" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                                                Gold Allocation Calculator
                                            </Link>

                                            <div className="border-t border-white/10 my-2"></div>

                                            <Link href="/tools" className="block px-4 py-2 text-sm text-amber-400 hover:text-amber-300 hover:bg-white/5 font-medium flex items-center gap-1">
                                                View All Tools
                                                <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
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

                        {/* Silver IRA Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Silver IRA</span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/guide/silver-ira-guide" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Silver IRA Guide
                                </Link>
                                <Link href="/best-silver-ira-companies" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Best Silver IRA Companies
                                </Link>
                            </div>
                        </div>

                        {/* Crypto IRA Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide flex items-center gap-1">
                                Crypto IRA <span className="text-[10px] bg-blue-500/20 px-1 rounded">New</span>
                            </span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/crypto-ira" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Crypto IRA Guide
                                </Link>
                                <Link href="/best-crypto-ira-companies" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Best Crypto IRA Companies
                                </Link>
                                <Link href="/reviews/itrustcapital" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    iTrustCapital Review
                                </Link>
                            </div>
                        </div>

                        {/* Self-Directed IRA Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-green-400 uppercase tracking-wide flex items-center gap-1">
                                Self-Directed IRA <span className="text-[10px] bg-green-500/20 px-1 rounded">New</span>
                            </span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/self-directed-ira" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Self-Directed IRA Guide
                                </Link>
                                <Link href="/learn/checkbook-ira" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Checkbook IRA Explained
                                </Link>
                                <Link href="/reviews/rocket-dollar" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Rocket Dollar Review
                                </Link>
                            </div>
                        </div>

                        {/* ROBS 401k Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide flex items-center gap-1">
                                ROBS 401k <span className="text-[10px] bg-orange-500/20 px-1 rounded">New</span>
                            </span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/robs-401k" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    ROBS 401k Guide
                                </Link>
                                <Link href="/reviews/guidant-financial" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Guidant Financial Review
                                </Link>
                                <Link href="/reviews/benetrends" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Benetrends Review
                                </Link>
                            </div>
                        </div>

                        {/* Real Estate IRA Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wide flex items-center gap-1">
                                Real Estate IRA <span className="text-[10px] bg-teal-500/20 px-1 rounded">New</span>
                            </span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/real-estate-ira" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Real Estate IRA Guide
                                </Link>
                                <Link href="/learn/real-estate-ira-custodians" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Best RE IRA Custodians
                                </Link>
                                <Link href="/learn/buy-rental-property-with-ira" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Buy Rental Property
                                </Link>
                            </div>
                        </div>

                        {/* Solo 401k Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide flex items-center gap-1">
                                Solo 401k <span className="text-[10px] bg-purple-500/20 px-1 rounded">New</span>
                            </span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/solo-401k" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Solo 401k Guide
                                </Link>
                                <Link href="/learn/solo-401k-contribution-limits" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Contribution Limits 2026
                                </Link>
                                <Link href="/learn/solo-401k-vs-sep-ira" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Solo 401k vs SEP IRA
                                </Link>
                                <Link href="/learn/solo-401k-providers" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Best Providers
                                </Link>
                            </div>
                        </div>

                        {/* News Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide flex items-center gap-1">
                                Daily Briefing <span className="text-[10px] bg-amber-500/20 px-1 rounded">Live</span>
                            </span>
                            <div className="mt-2 flex flex-col gap-1 pl-2">
                                <Link href="/news" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    Latest News
                                </Link>
                            </div>
                        </div>

                        {/* Tools Section */}
                        <div className="py-2 border-b border-white/5">
                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">Tools</span>

                            {/* FIRE Calculators */}
                            <div className="mt-2 pl-2">
                                <span className="text-xs text-orange-400 font-medium">FIRE Calculators</span>
                                <div className="flex flex-col gap-1 pl-2 mt-1">
                                    <Link href="/tools/fire-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        FIRE Calculator
                                    </Link>
                                    <Link href="/tools/coast-fire-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        Coast FIRE Calculator
                                    </Link>
                                </div>
                            </div>

                            {/* Retirement Planning */}
                            <div className="mt-2 pl-2">
                                <span className="text-xs text-blue-400 font-medium">Retirement Planning</span>
                                <div className="flex flex-col gap-1 pl-2 mt-1">
                                    <Link href="/tools/retirement-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        Retirement Calculator
                                    </Link>
                                    <Link href="/tools/rmd-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        RMD Calculator
                                    </Link>
                                </div>
                            </div>

                            {/* Social Security */}
                            <div className="mt-2 pl-2">
                                <span className="text-xs text-green-400 font-medium">Social Security</span>
                                <div className="flex flex-col gap-1 pl-2 mt-1">
                                    <Link href="/tools/social-security-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        Social Security Calculator
                                    </Link>
                                    <Link href="/tools/wep-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        WEP Calculator
                                    </Link>
                                </div>
                            </div>

                            {/* Gold IRA Tools */}
                            <div className="mt-2 pl-2">
                                <span className="text-xs text-amber-400 font-medium">Gold IRA Tools</span>
                                <div className="flex flex-col gap-1 pl-2 mt-1">
                                    <Link href="/tools/gold-ira-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        Gold IRA Calculator
                                    </Link>
                                    <Link href="/tools/gold-allocation-calculator" className="text-sm text-slate-400 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                        Gold Allocation Calculator
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-2 pl-2">
                                <Link href="/tools" className="text-sm text-amber-400 hover:text-amber-300 py-1 font-medium flex items-center gap-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    View All Tools
                                    <ArrowRight className="h-3 w-3" />
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
