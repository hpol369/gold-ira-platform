import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function AuthorVerification() {
    return (
        <div className="flex items-center gap-4 bg-[#161828] border border-[#2A2D42] p-4 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.2)] my-8 not-prose">
            <div className="relative w-12 h-12 shrink-0">
                <Image
                    src="/images/thomas-richardson.png"
                    alt="Thomas Richardson"
                    fill
                    className="object-cover rounded-full border-2 border-[#C5952E]"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#2E8B57] text-white p-0.5 rounded-full border-2 border-[#0C0D18]">
                    <ShieldCheck className="w-3 h-3" />
                </div>
            </div>
            <div>
                <div className="text-[11px] text-[#D4A94E] font-semibold uppercase tracking-[0.18em] mb-1">
                    Verified By Expert
                </div>
                <div className="font-serif font-semibold text-[#F6F4EF] leading-none tracking-[-0.01em]">
                    Thomas Richardson
                </div>
                <div className="text-xs text-[#A8A39A] mt-1">
                    Last Audited: January 2026
                </div>
            </div>
        </div>
    );
}
