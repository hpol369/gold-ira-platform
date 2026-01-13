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
                                <span className="font-serif font-bold text-lg">G</span>
                            </div>
                            <span className="text-xl font-serif font-bold text-primary tracking-tight">
                                Gold<span className="text-secondary">IRA</span>Guide
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/rich-dad-strategy" className="text-sm font-medium text-text hover:text-primary transition-colors relative group">
                                The Strategy
                                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                            <Link href="/best-gold-ira-companies" className="text-sm font-medium text-text hover:text-primary transition-colors">
                                Best Companies
                            </Link>
                            <Link href="/reviews" className="text-sm font-medium text-text hover:text-primary transition-colors">
                                Reviews
                            </Link>
                            <Link href="/resources" className="text-sm font-medium text-text hover:text-primary transition-colors">
                                Resources
                            </Link>
                            <Button variant="gold" size="sm" asChild>
                                <Link href="/quiz">Check Eligibility</Link>
                            </Button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-primary"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4 px-4 shadow-xl">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/rich-dad-strategy"
                            className="text-sm font-medium text-text hover:text-primary py-2 border-b border-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            The Rich Dad Strategy
                        </Link>
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
                        <Link
                            href="/resources"
                            className="text-sm font-medium text-text hover:text-primary py-2 border-b border-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Resources
                        </Link>
                        <Button variant="gold" className="w-full mt-2" asChild>
                            <Link href="/quiz" onClick={() => setIsMobileMenuOpen(false)}>
                                Check Eligibility
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
