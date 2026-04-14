import Link from "next/link";
import { Shield, DollarSign } from "lucide-react";

export function AIDisclosureBanner() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <DollarSign className="w-3.5 h-3.5 flex-shrink-0 text-amber-600" />
          We earn affiliate commissions from featured companies.{" "}
          <Link href="/editorial-policy" className="underline hover:text-slate-700">
            How we earn money
          </Link>
        </span>
        <span className="text-slate-300 hidden sm:inline">|</span>
        <span className="inline-flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 flex-shrink-0" />
          AI-assisted research, human-reviewed.{" "}
          <Link href="/editorial-standards" className="underline hover:text-slate-700">
            Our standards
          </Link>
        </span>
      </div>
    </div>
  );
}
