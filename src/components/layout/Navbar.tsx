"use client";

import Link from "next/link";
import { Phone, ShieldCheck, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            {/* Top Bar - Trust & Contact */}
            <div className="bg-primary py-2 text-white">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-2 sm:flex-row text-xs sm:text-sm">
                        <div className="flex items-center gap-4 opacity-90">
                            <span className="flex items-center gap-1">
                                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                                <span>Secure & Private</span>
                            </span>
                            <span className="hidden sm:inline text-primary-light">|</span>
                            <span className="hidden sm:inline">Updated: January 2026</span>
                        </div>
                        <a
                            href="tel:+18005550123"
                            className="flex items-center gap-2 font-semibold hover:text-secondary transition-colors"
                        >
                            <Phone className="h-3 w-3 sm:h-4 sm:w-4 fill-secondary text-secondary" />
                            <span>Free Consultation: (800) 555-0123</span>
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
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-secondary group-hover:bg-primary-dark transition-colors">
                                <span className="font-serif font-bold text-lg">R</span>
                            </div>
                            <span className="text-xl font-serif font-bold text-primary tracking-tight hidden sm:block">
                                Rich<span className="text-secondary">Dad</span>Retirement
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/best-gold-ira-companies" className="text-sm font-medium text-text hover:text-primary transition-colors">
                                Best Companies
                            </Link>
                            <Link href="/reviews" className="text-sm font-medium text-text hover:text-primary transition-colors">
                                Company Reviews
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
                                className="p-2 text-primary"
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
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4 px-4 shadow-xl">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/best-gold-ira-companies"
                            className="text-sm font-medium text-text hover:text-primary py-2 border-b border-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Best Gold IRA Companies
                        </Link>
                        <Link
                            href="/reviews"
                            className="text-sm font-medium text-text hover:text-primary py-2 border-b border-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Company Reviews
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
