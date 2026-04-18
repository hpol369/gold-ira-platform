import Link from "next/link";
import { Shield, DollarSign } from "lucide-react";

export function AIDisclosureBanner() {
  return (
    <div className="bg-[#0C0D18] border-b border-[#2A2D42] py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#A8A39A]">
        <span className="inline-flex items-center gap-1.5">
          <DollarSign className="w-3.5 h-3.5 flex-shrink-0 text-[#D4A94E]" />
          We earn affiliate commissions from featured companies.{" "}
          <Link href="/editorial-policy" className="underline hover:text-[#F6F4EF]">
            How we earn money
          </Link>
        </span>
        <span className="text-[#3F4460] hidden sm:inline">|</span>
        <span className="inline-flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 flex-shrink-0" />
          AI-assisted research, human-reviewed.{" "}
          <Link href="/editorial-standards" className="underline hover:text-[#F6F4EF]">
            Our standards
          </Link>
        </span>
      </div>
    </div>
  );
}
