import { ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export function AuthorVerification() {
    return (
        <div className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm my-8 not-prose">
            <div className="relative w-12 h-12 shrink-0 bg-slate-100 rounded-full flex items-center justify-center border-2 border-secondary">
                <Users className="w-6 h-6 text-slate-600" />
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-0.5 rounded-full border-2 border-white">
                    <ShieldCheck className="w-3 h-3" />
                </div>
            </div>
            <div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                    Verified By Editorial Board
                </div>
                <Link href="/editorial-board" className="font-serif font-bold text-primary leading-none hover:text-[#B22234]">
                    Rich Dad Retirement Team
                </Link>
                <div className="text-xs text-gray-400 mt-1">
                    Last Audited: March 2026
                </div>
            </div>
        </div>
    );
}
