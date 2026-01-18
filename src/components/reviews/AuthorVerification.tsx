import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function AuthorVerification() {
    return (
        <div className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm my-8 not-prose">
            <div className="relative w-12 h-12 shrink-0">
                <Image
                    src="/images/thomas-richardson.png"
                    alt="Thomas Richardson"
                    fill
                    className="object-cover rounded-full border-2 border-secondary"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-0.5 rounded-full border-2 border-white">
                    <ShieldCheck className="w-3 h-3" />
                </div>
            </div>
            <div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                    Verified By Expert
                </div>
                <div className="font-serif font-bold text-primary leading-none">
                    Thomas Richardson
                </div>
                <div className="text-xs text-gray-400 mt-1">
                    Last Audited: January 2026
                </div>
            </div>
        </div>
    );
}
