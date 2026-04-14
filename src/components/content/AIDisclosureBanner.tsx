import Link from "next/link";
import { Shield } from "lucide-react";

export function AIDisclosureBanner() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-xs text-slate-500">
        <Shield className="w-3.5 h-3.5 flex-shrink-0" />
        <span>
          Content researched with AI assistance, reviewed and fact-checked by our editorial board.{" "}
          <Link href="/editorial-standards" className="underline hover:text-slate-700">
            Read our standards
          </Link>
        </span>
      </div>
    </div>
  );
}
