"use client";

// Mobile Bottom Tab Bar — replaces hamburger menu + MobileStickyBar
// Pattern: Facebook/WhatsApp/banking apps — familiar to 55+ audience
// Always visible on mobile, hidden on desktop (lg:hidden)

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calculator,
  BookOpen,
  Star,
  ArrowRight,
  X,
  Newspaper,
  HelpCircle,
  GitCompare,
  Shield,
  FileText,
} from "lucide-react";

const tabs = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "tools", label: "Tools", icon: Calculator, href: "/tools" },
  { id: "learn", label: "Learn", icon: BookOpen, href: null }, // opens submenu
  { id: "reviews", label: "Reviews", icon: Star, href: "/best-gold-ira-companies" },
  { id: "kit", label: "Free Kit", icon: ArrowRight, href: "/get-started?ref=mobile-tab" },
] as const;

const learnSubmenu = [
  { label: "Learning Center", icon: BookOpen, href: "/learn" },
  { label: "Daily News", icon: Newspaper, href: "/news" },
  { label: "Gold IRA Guide", icon: FileText, href: "/guide/gold-ira-guide" },
  { label: "Company Reviews", icon: Star, href: "/reviews" },
  { label: "Compare Companies", icon: GitCompare, href: "/compare" },
  { label: "Free Gold IRA Guide", icon: Shield, href: "/guide/free" },
  { label: "Find Your Match Quiz", icon: HelpCircle, href: "/quiz" },
  { label: "FAQ", icon: HelpCircle, href: "/faq" },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const [showLearnMenu, setShowLearnMenu] = useState(false);

  const isActive = (href: string | null) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("?")[0]);
  };

  return (
    <>
      {/* Learn submenu overlay */}
      <AnimatePresence>
        {showLearnMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[59] lg:hidden"
              onClick={() => setShowLearnMenu(false)}
            />

            {/* Submenu sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-white rounded-t-2xl shadow-2xl"
              style={{ paddingBottom: "calc(72px + env(safe-area-inset-bottom, 0px))" }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-slate-300 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-[#000080]">Explore</h3>
                <button
                  onClick={() => setShowLearnMenu(false)}
                  className="p-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="px-3 py-2 max-h-[50vh] overflow-y-auto">
                {learnSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setShowLearnMenu(false)}
                    className={`flex items-center gap-3 px-3 py-3.5 rounded-xl transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-50 text-[#000080]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isActive(item.href) ? "bg-[#000080] text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      <item.icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-medium text-[15px]">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Tab Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex items-center justify-around h-[64px] max-w-lg mx-auto">
          {tabs.map((tab) => {
            const active = isActive(tab.href);
            const isKit = tab.id === "kit";
            const isLearn = tab.id === "learn";
            const learnActive = isLearn && (
              pathname.startsWith("/learn") ||
              pathname.startsWith("/news") ||
              pathname.startsWith("/guide") ||
              pathname.startsWith("/faq")
            );

            if (isKit) {
              // CTA tab — stands out
              return (
                <Link
                  key={tab.id}
                  href={tab.href!}
                  className="flex flex-col items-center justify-center gap-0.5 px-2 -mt-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B22234] flex items-center justify-center shadow-lg shadow-red-900/30">
                    <tab.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-bold text-[#B22234] mt-0.5">
                    {tab.label}
                  </span>
                </Link>
              );
            }

            if (isLearn) {
              // Learn tab — opens submenu
              return (
                <button
                  key={tab.id}
                  onClick={() => setShowLearnMenu(!showLearnMenu)}
                  className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-[56px] ${
                    learnActive || showLearnMenu ? "text-[#000080]" : "text-slate-400"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium">{tab.label}</span>
                </button>
              );
            }

            // Regular tabs
            return (
              <Link
                key={tab.id}
                href={tab.href!}
                className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-[56px] ${
                  active ? "text-[#000080]" : "text-slate-400"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
