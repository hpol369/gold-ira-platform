"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LPFooterProps {
  className?: string;
}

export function LPFooter({ className }: LPFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-slate-950 border-t border-white/10 py-6",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>
            &copy; {currentYear} Rich Dad Retirement. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/editorial-policy"
              className="hover:text-white transition-colors"
            >
              Editorial Policy
            </Link>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-600 text-center">
          <p>
            This site is for informational purposes only. Always consult with a
            qualified financial advisor before making investment decisions.
            Affiliate disclosure: We may receive compensation when you click on
            links to products we recommend.
          </p>
        </div>
      </div>
    </footer>
  );
}
