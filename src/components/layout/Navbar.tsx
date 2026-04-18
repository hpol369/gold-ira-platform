"use client";

import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState, useEffect, startTransition } from "react";

// Gold price state
interface GoldPrice {
    price: number;
    changePercent: number;
}

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLearnOpen, setIsLearnOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [goldPrice, setGoldPrice] = useState<GoldPrice | null>(null);

    // Fetch live gold price on mount (non-blocking)
    useEffect(() => {
        async function fetchGoldPrice() {
            try {
                const res = await fetch("/api/spot-prices");
                const data = await res.json();
                const gold = data.prices?.find((p: { metal: string }) => p.metal === "gold");
                if (gold) {
                    startTransition(() => {
                        setGoldPrice({
                            price: gold.price,
                            changePercent: gold.changePercent24h,
                        });
                    });
                }
            } catch (error) {
                console.error("Failed to fetch gold price:", error);
            }
        }
        fetchGoldPrice();
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Format price with commas
    const formatPrice = (price: number) =>
        price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <header
            className={[
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-[rgba(12,13,24,0.88)] backdrop-blur-xl border-b border-[#2A2D42]"
                    : "bg-[rgba(12,13,24,0.4)] backdrop-blur-md border-b border-transparent",
            ].join(" ")}
        >
            {/* Top bar: live ticker + trust */}
            <div className="hidden lg:block border-b border-white/5 bg-[rgba(0,0,0,0.25)]">
                <Container>
                    <div className="flex items-center justify-between py-2 text-[12px]">
                        <div className="flex items-center gap-5 text-[#A8A39A]">
                            <span className="inline-flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#2E8B57] opacity-70 animate-ping" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ADE80]" />
                                </span>
                                <span className="text-[#D0CCC4] font-medium">Live Gold</span>
                                {goldPrice ? (
                                    <>
                                        <span className="tactical text-[#D4A94E] text-[13px]">${formatPrice(goldPrice.price)}</span>
                                        <span className={goldPrice.changePercent >= 0 ? "text-[#4ADE80]" : "text-[#FCA5A5]"}>
                                            {goldPrice.changePercent >= 0 ? "+" : ""}{goldPrice.changePercent.toFixed(2)}%
                                        </span>
                                    </>
                                ) : (
                                    <span className="tactical text-[#D4A94E] text-[13px]">$2,348.12</span>
                                )}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-[#A8A39A]">
                            <span>American-owned · Editorially independent</span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
            <div className="py-3">
                <Container>
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group shrink-0">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(197,149,46,0.35)] bg-[rgba(197,149,46,0.08)] transition-all group-hover:bg-[rgba(197,149,46,0.15)] group-hover:border-[rgba(197,149,46,0.55)]">
                                <span className="font-serif text-xl text-[#D4A94E]">R</span>
                            </div>
                            <div className="leading-tight">
                                <div className="font-serif text-lg md:text-xl text-[#F6F4EF] tracking-[-0.01em]">
                                    Rich Dad Retirement
                                </div>
                                <div className="text-[10px] uppercase tracking-[0.18em] text-[#A8A39A]">
                                    Gold &amp; Silver IRA Guidance
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <NavLink href="/why-gold">Why Gold?</NavLink>
                            <NavLink href="/what-is-a-gold-ira">How It Works</NavLink>
                            <NavLink href="/best-gold-ira-companies">Best Companies</NavLink>

                            {/* Learn Mega-Menu */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsLearnOpen(true)}
                                onMouseLeave={() => setIsLearnOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-[15px] text-[#D0CCC4] hover:text-[#F6F4EF] transition-colors py-2">
                                    Learn
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isLearnOpen ? "rotate-180" : ""}`} />
                                </button>
                                {isLearnOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                                        <div className="w-[680px] rounded-2xl border border-[#2A2D42] bg-[rgba(18,20,35,0.96)] backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.5)] p-6">
                                            <div className="grid grid-cols-3 gap-7">
                                                <div>
                                                    <MegaHead>Gold IRA Essentials</MegaHead>
                                                    <MegaLink href="/scenarios" tone="critical">Crisis Scenarios</MegaLink>
                                                    <MegaLink href="/scams" tone="critical">Scam Protection Center</MegaLink>
                                                    <MegaLink href="/investigative-hub">Industry Red Flags</MegaLink>
                                                    <MegaLink href="/academy">Gold IRA Academy</MegaLink>
                                                    <MegaLink href="/learn">Learning Center</MegaLink>
                                                    <MegaLink href="/faq">FAQ (60+ Questions)</MegaLink>
                                                    <MegaDivider />
                                                    <MegaHead>401k &amp; Rollovers</MegaHead>
                                                    <MegaLink href="/rollover" tone="gold">401k Rollover Hub</MegaLink>
                                                    <MegaLink href="/best-gold-ira-for">Best For Your Situation</MegaLink>
                                                </div>
                                                <div>
                                                    <MegaHead>Silver &amp; Crypto</MegaHead>
                                                    <MegaLink href="/silver-ira">Silver IRA Hub</MegaLink>
                                                    <MegaLink href="/silver-retirement">Silver Retirement Planning</MegaLink>
                                                    <MegaLink href="/silver-coin-values">Silver Coin Values</MegaLink>
                                                    <MegaLink href="/silver-dealer-reviews">Silver Dealer Reviews</MegaLink>
                                                    <MegaLink href="/silver-price">Silver Price Predictions</MegaLink>
                                                    <MegaDivider />
                                                    <MegaHead>Crypto IRA</MegaHead>
                                                    <MegaLink href="/crypto-ira">Crypto IRA Guide</MegaLink>
                                                    <MegaLink href="/best-crypto-ira-companies">Best Crypto Companies</MegaLink>
                                                </div>
                                                <div>
                                                    <MegaHead>Self-Directed</MegaHead>
                                                    <MegaLink href="/robs-401k">ROBS 401k Guide</MegaLink>
                                                    <MegaLink href="/real-estate-ira">Real Estate IRA Guide</MegaLink>
                                                    <MegaLink href="/solo-401k">Solo 401k Guide</MegaLink>
                                                    <MegaLink href="/learn/checkbook-ira">Checkbook IRA</MegaLink>
                                                    <MegaLink href="/self-directed-ira">SDIRA Guide</MegaLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <NavLink href="/news">News</NavLink>

                            {/* Tools Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsToolsOpen(true)}
                                onMouseLeave={() => setIsToolsOpen(false)}
                            >
                                <button className="flex items-center gap-1 text-[15px] text-[#D0CCC4] hover:text-[#F6F4EF] transition-colors py-2">
                                    Tools
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isToolsOpen ? "rotate-180" : ""}`} />
                                </button>
                                {isToolsOpen && (
                                    <div className="absolute top-full right-0 pt-3 z-50">
                                        <div className="w-72 rounded-2xl border border-[#2A2D42] bg-[rgba(18,20,35,0.96)] backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.5)] py-3">
                                            <MegaHead className="px-4">FIRE Calculators</MegaHead>
                                            <DropLink href="/tools/fire-calculator">FIRE Calculator</DropLink>
                                            <DropLink href="/tools/coast-fire-calculator">Coast FIRE Calculator</DropLink>

                                            <DropDivider />
                                            <MegaHead className="px-4">Retirement Planning</MegaHead>
                                            <DropLink href="/tools/retirement-calculator">Retirement Calculator</DropLink>
                                            <DropLink href="/tools/rmd-calculator">RMD Calculator</DropLink>

                                            <DropDivider />
                                            <MegaHead className="px-4">Gold IRA Tools</MegaHead>
                                            <DropLink href="/tools/gold-ira-calculator">Gold IRA Calculator</DropLink>
                                            <DropLink href="/tools" tone="gold" bold>
                                                <span className="flex items-center gap-1.5">View All Tools <ArrowRight className="h-3 w-3" /></span>
                                            </DropLink>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Button asChild variant="primary" size="sm">
                                <Link href="/get-started">Get Free Gold Kit</Link>
                            </Button>
                        </nav>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
                            <Button asChild variant="primary" size="sm" className="!h-10 !px-3 text-[13px]">
                                <Link href="/get-started">Free Kit</Link>
                            </Button>
                            <button
                                className="p-2 text-[#D0CCC4] hover:text-[#F6F4EF] border border-[#2A2D42] bg-[rgba(22,24,40,0.6)] rounded-lg transition-all hover:border-[rgba(197,149,46,0.45)]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[rgba(12,13,24,0.98)] backdrop-blur-xl border-b border-[#2A2D42] py-4 px-4 shadow-xl max-h-[82vh] overflow-y-auto">
                    <div className="flex flex-col gap-1">
                        <MobileNavLink href="/" onNavigate={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink href="/why-gold" onNavigate={() => setIsMobileMenuOpen(false)}>Why Gold?</MobileNavLink>
                        <MobileNavLink href="/what-is-a-gold-ira" onNavigate={() => setIsMobileMenuOpen(false)}>How It Works</MobileNavLink>
                        <MobileNavLink href="/best-gold-ira-companies" onNavigate={() => setIsMobileMenuOpen(false)}>Best Companies</MobileNavLink>
                        <MobileNavLink href="/reviews" onNavigate={() => setIsMobileMenuOpen(false)}>All Reviews</MobileNavLink>
                        <MobileNavLink href="/compare" onNavigate={() => setIsMobileMenuOpen(false)}>Compare</MobileNavLink>
                        <MobileNavLink href="/tools" onNavigate={() => setIsMobileMenuOpen(false)}>Tools &amp; Calculators</MobileNavLink>
                        <MobileNavLink href="/learn" onNavigate={() => setIsMobileMenuOpen(false)}>Learn</MobileNavLink>
                        <MobileNavLink href="/rollover" onNavigate={() => setIsMobileMenuOpen(false)}>Rollover Hub</MobileNavLink>
                        <MobileNavLink href="/news" onNavigate={() => setIsMobileMenuOpen(false)}>News</MobileNavLink>
                        <MobileNavLink href="/scenarios" onNavigate={() => setIsMobileMenuOpen(false)}>Crisis Scenarios</MobileNavLink>
                        <MobileNavLink href="/faq" onNavigate={() => setIsMobileMenuOpen(false)}>FAQ</MobileNavLink>
                        <Button asChild variant="primary" size="md" fullWidth className="mt-4">
                            <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)}>Get Free Gold Kit</Link>
                        </Button>
                        <div className="mt-4 pt-4 border-t border-[#2A2D42] flex items-center gap-4 text-xs text-[#A8A39A]">
                            <span>Gold <span className="tactical text-[#D4A94E]">${goldPrice ? formatPrice(goldPrice.price) : "2,348.12"}</span></span>
                            <span>· American-owned</span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

// --- Sub-components ---

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative text-[15px] text-[#D0CCC4] hover:text-[#F6F4EF] transition-colors py-2 group"
        >
            {children}
            <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#C5952E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </Link>
    );
}

function MegaHead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4A94E] mb-3 ${className}`}>
            {children}
        </span>
    );
}

function MegaLink({
    href,
    children,
    tone = "neutral",
}: {
    href: string;
    children: React.ReactNode;
    tone?: "neutral" | "gold" | "critical";
}) {
    const color =
        tone === "gold"
            ? "text-[#D4A94E] hover:text-[#F6F4EF] font-medium"
            : tone === "critical"
            ? "text-[#FCA5A5] hover:text-[#F6F4EF] font-medium"
            : "text-[#D0CCC4] hover:text-[#F6F4EF]";
    return (
        <Link href={href} className={`block py-[7px] text-[14px] transition-colors ${color}`}>
            {children}
        </Link>
    );
}

function MegaDivider() {
    return <div className="border-t border-[#2A2D42] my-3" />;
}

function DropLink({
    href,
    children,
    tone = "neutral",
    bold = false,
}: {
    href: string;
    children: React.ReactNode;
    tone?: "neutral" | "gold";
    bold?: boolean;
}) {
    const color = tone === "gold" ? "text-[#D4A94E] hover:text-[#F6F4EF]" : "text-[#D0CCC4] hover:text-[#F6F4EF]";
    return (
        <Link
            href={href}
            className={`block px-4 py-2 text-sm transition-colors hover:bg-[#1E2134]/5 ${color} ${bold ? "font-semibold" : ""}`}
        >
            {children}
        </Link>
    );
}

function DropDivider() {
    return <div className="border-t border-[#2A2D42] my-2" />;
}

function MobileNavLink({
    href,
    children,
    onNavigate,
}: {
    href: string;
    children: React.ReactNode;
    onNavigate: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onNavigate}
            className="flex items-center justify-between py-3 px-2 rounded-lg text-[#D0CCC4] hover:text-[#F6F4EF] hover:bg-[#1E2134]/5 transition-all text-base"
        >
            <span>{children}</span>
            <ChevronDown className="h-4 w-4 -rotate-90 opacity-50" />
        </Link>
    );
}
