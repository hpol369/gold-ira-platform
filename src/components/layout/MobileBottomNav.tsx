"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Calculator, BookOpen, Star, ArrowRight, X, Newspaper, HelpCircle, GitCompare, Shield, FileText } from "lucide-react";

const learnLinks = [
  { label: "Learning Center", href: "/learn", icon: BookOpen },
  { label: "Daily News", href: "/news", icon: Newspaper },
  { label: "Gold IRA Guide", href: "/guide/gold-ira-guide", icon: FileText },
  { label: "Compare Companies", href: "/compare", icon: GitCompare },
  { label: "Free Guide Download", href: "/guide/free", icon: Shield },
  { label: "Find Your Match Quiz", href: "/quiz", icon: HelpCircle },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const learnActive = pathname.startsWith("/learn") || pathname.startsWith("/news") || pathname.startsWith("/guide") || pathname.startsWith("/faq");

  return (
    <>
      {/* Learn submenu */}
      {showMenu && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 998, background: "rgba(0,0,0,0.5)" }}
          className="lg:hidden"
          onClick={() => setShowMenu(false)}
        >
          <div
            style={{
              position: "absolute",
              bottom: 64,
              left: 0,
              right: 0,
              background: "#fff",
              borderRadius: "16px 16px 0 0",
              boxShadow: "0 -8px 30px rgba(0,0,0,0.15)",
              maxHeight: "60vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px 12px", borderBottom: "1px solid #e2e8f0" }}>
              <span style={{ fontWeight: 700, color: "#000080", fontSize: 18 }}>Explore</span>
              <button onClick={() => setShowMenu(false)} style={{ padding: 8, color: "#94a3b8" }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: "8px 12px 16px" }}>
              {learnLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setShowMenu(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 12px",
                    borderRadius: 12,
                    color: isActive(item.href) ? "#000080" : "#334155",
                    background: isActive(item.href) ? "#eff6ff" : "transparent",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isActive(item.href) ? "#000080" : "#f1f5f9",
                    color: isActive(item.href) ? "#fff" : "#64748b",
                    flexShrink: 0,
                  }}>
                    <item.icon size={18} />
                  </div>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Tab Bar — inline styles to guarantee rendering */}
      <nav
        className="lg:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: "#ffffff",
          borderTop: "2px solid #e2e8f0",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", height: 64, maxWidth: 500, margin: "0 auto" }}>
          {/* Home */}
          <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "4px 12px", color: isActive("/") ? "#000080" : "#94a3b8", textDecoration: "none" }}>
            <Home size={22} />
            <span style={{ fontSize: 10, fontWeight: 500 }}>Home</span>
          </Link>

          {/* Tools */}
          <Link href="/tools" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "4px 12px", color: isActive("/tools") ? "#000080" : "#94a3b8", textDecoration: "none" }}>
            <Calculator size={22} />
            <span style={{ fontSize: 10, fontWeight: 500 }}>Tools</span>
          </Link>

          {/* Learn (button, opens submenu) */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "4px 12px", color: learnActive || showMenu ? "#000080" : "#94a3b8", background: "none", border: "none", cursor: "pointer" }}
          >
            <BookOpen size={22} />
            <span style={{ fontSize: 10, fontWeight: 500 }}>Learn</span>
          </button>

          {/* Reviews */}
          <Link href="/best-gold-ira-companies" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "4px 12px", color: isActive("/best-gold-ira-companies") || isActive("/reviews") ? "#000080" : "#94a3b8", textDecoration: "none" }}>
            <Star size={22} />
            <span style={{ fontSize: 10, fontWeight: 500 }}>Reviews</span>
          </Link>

          {/* Free Kit — CTA button */}
          <Link href="/get-started?ref=mobile-tab" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "0 8px", marginTop: -12, textDecoration: "none" }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#B22234",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(178,34,52,0.4)",
            }}>
              <ArrowRight size={22} color="#fff" />
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#B22234" }}>Free Kit</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
