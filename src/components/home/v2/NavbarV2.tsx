"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/BadgeV2";

const NAV_ITEMS = [
  { label: "Reviews", href: "/reviews" },
  { label: "Compare", href: "/compare" },
  { label: "Calculators", href: "/tools" },
  { label: "Guides", href: "/guide" },
  { label: "Rollover", href: "/rollover" },
];

export function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(12,13,24,0.82)] backdrop-blur-xl border-b border-[#2A2D42]"
          : "bg-[rgba(12,13,24,0.35)] backdrop-blur-md border-b border-transparent",
      ].join(" ")}
    >
      {/* Top bar: live ticker */}
      <div className="hidden lg:block border-b border-white/5 bg-[rgba(0,0,0,0.2)]">
        <div className="container-x mx-auto flex items-center justify-between py-2 text-[12px]">
          <div className="flex items-center gap-5 text-[#A8A39A]">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2E8B57] animate-pulse" />
              <span className="text-[#D0CCC4] font-medium">Spot Gold</span>
              <span className="tactical text-[#D4A94E] text-[13px]">$2,348.12</span>
              <span className="text-[#2E8B57]">+0.84%</span>
            </span>
            <span className="hidden xl:inline-flex items-center gap-2">
              <span className="text-[#D0CCC4] font-medium">Silver</span>
              <span className="tactical text-[#F6F4EF] text-[13px]">$28.41</span>
              <span className="text-[#FCA5A5]">-0.22%</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#A8A39A]">
            <span>American-owned • Editorially independent</span>
            <span>•</span>
            <span>Est. 2018</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x mx-auto">
        <nav className="flex items-center justify-between h-[72px] md:h-[80px]">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(197,149,46,0.35)] bg-[rgba(197,149,46,0.08)] transition-all group-hover:bg-[rgba(197,149,46,0.15)] group-hover:border-[rgba(197,149,46,0.55)]">
              <span className="font-serif text-xl text-[#D4A94E]">R</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg md:text-xl text-[#F6F4EF] tracking-[-0.01em]">
                Rich Dad Retirement
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#A8A39A]">
                Gold &amp; Silver IRA Guidance
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[15px] text-[#D0CCC4] hover:text-[#F6F4EF] transition-colors py-2 group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#C5952E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="primary" size="sm" className="hidden md:inline-flex">
              <Link href="/quiz">Find My Match</Link>
            </Button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2A2D42] bg-[rgba(22,24,40,0.6)] text-[#D0CCC4] hover:text-[#F6F4EF] hover:border-[rgba(197,149,46,0.5)] transition-all"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#2A2D42] bg-[rgba(12,13,24,0.98)] backdrop-blur-xl">
          <div className="container-x mx-auto py-5 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3 px-2 rounded-lg text-[#D0CCC4] hover:text-[#F6F4EF] hover:bg-[#1E2134]/5 transition-all text-base"
              >
                <span>{item.label}</span>
                <ChevronDown size={16} className="-rotate-90 opacity-50" />
              </Link>
            ))}
            <div className="pt-3 pb-2">
              <Button asChild variant="primary" size="md" fullWidth>
                <Link href="/quiz" onClick={() => setMenuOpen(false)}>Find My Match</Link>
              </Button>
            </div>
            <div className="pt-4 pb-1 flex items-center gap-4 text-xs text-[#A8A39A] border-t border-[#2A2D42] mt-3">
              <span>Spot Gold <span className="tactical text-[#D4A94E]">$2,348.12</span></span>
              <span>Silver <span className="tactical text-[#F6F4EF]">$28.41</span></span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
