"use client";

import { Star, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLeadModal } from "@/context/LeadModalContext";

interface VerdictBoxProps {
    companyName: string;
    companySlug?: string;
    rating: number;
    isRecommended: boolean;
    bottomLine: string;
    ctaUrl?: string;
    ctaText?: string;
}

export function VerdictBox({ companyName: _companyName, companySlug, rating, isRecommended, bottomLine, ctaUrl, ctaText = "Get Free Gold Kit" }: VerdictBoxProps) {
    const { openModal } = useLeadModal();
    const isAugusta = companySlug === "augusta-precious-metals";

    const handleCtaClick = () => {
        openModal("default", `verdict-box-${companySlug || "unknown"}`);
    };

    return (
        <div className="relative bg-[#161828] border border-[#2A2D42] rounded-2xl overflow-hidden my-8 not-prose shadow-[0_16px_48px_rgba(0,0,0,0.28)]">
            {/* Gold accent strip */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5952E] to-transparent" />

            <div className="bg-[rgba(197,149,46,0.06)] p-6 border-b border-[#2A2D42] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-[0_8px_24px_rgba(197,149,46,0.22)] ${rating >= 4.5 ? 'bg-gradient-to-br from-[#D4A94E] to-[#A67D24] text-[#0C0D18]' : 'bg-[#1E2134] text-[#D0CCC4] border border-[#2A2D42]'}`}>
                        {rating}
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-xl text-[#F6F4EF] m-0 tracking-[-0.01em]">The Verdict</h3>
                        <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-[#D4A94E] text-[#D4A94E]' : 'text-[#3F4460]'}`} />
                            ))}
                        </div>
                    </div>
                </div>
                {isRecommended ? (
                    <div className="flex items-center gap-2 bg-[rgba(46,139,87,0.12)] text-[#86EFAC] px-4 py-2 rounded-full font-bold text-sm border border-[rgba(46,139,87,0.35)]">
                        <CheckCircle className="w-5 h-5" /> Recommended
                    </div>
                ) : (
                    <div className="flex items-center gap-2 bg-[rgba(220,38,38,0.12)] text-[#FCA5A5] px-4 py-2 rounded-full font-bold text-sm border border-[rgba(220,38,38,0.35)]">
                        <XCircle className="w-5 h-5" /> Not Recommended
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8">
                <p className="text-lg text-[#D0CCC4] leading-relaxed mb-6 font-medium">
                    {bottomLine}
                </p>

                {isAugusta ? (
                    <Button variant="primary" size="xl" className="w-full sm:w-auto" onClick={handleCtaClick}>
                        {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                ) : (
                    <Button variant="primary" size="xl" className="w-full sm:w-auto" asChild>
                        <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                            {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </Button>
                )}

                <p className="text-xs text-[#A8A39A] mt-4 text-center sm:text-left">
                    Official Link • Secure &amp; Verified
                </p>
            </div>
        </div>
    );
}
