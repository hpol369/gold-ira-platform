// Section 8: Final Push CTA
// Sprint 11: Strong closing section replacing Resources/Newsletter/TrustBadges

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  "Free info call",
  "No obligation",
  "Takes 2 minutes",
  "A+ BBB Rated Partners",
  "IRS-Approved Depositories",
];

export function ClosingCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-[rgba(197,149,46,0.1)] overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C5A55A]/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 text-center">
        <p className="text-[#C5A55A] font-bold tracking-widest uppercase text-xs mb-6">
          Don&apos;t Wait
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-4 max-w-3xl mx-auto">
          The Best Time to Protect Your Wealth Was 10 Years Ago.{" "}
          <span className="text-[#C5A55A]">The Second Best Time Is Today.</span>
        </h2>

        <div className="mt-10">
          <Link
            href="/get-started?ref=homepage-footer"
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B8860B] text-[#F6F4EF] font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(197,165,90,0.4)] hover:shadow-[0_0_60px_rgba(197,165,90,0.6)] hover:-translate-y-1 group"
          >
            Get Your Free Precious Metals Kit
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 text-sm text-blue-200">
          {trustPoints.map((point) => (
            <span key={point} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A55A]" />
              {point}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
