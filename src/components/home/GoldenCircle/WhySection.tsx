// Golden Circle: WHY Section (Hero)
// Sprint 11: Conversion-focused hero with split layout, single CTA to /get-started
// Speaking to 55+ blue collar workers who HAVE saved and need protection

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronDown } from "lucide-react";

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-[#000080] min-h-[90vh] flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
      {/* Warm gold radial glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,_rgba(197,165,90,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <div className="text-center lg:text-left">
            {/* Acknowledgment Badge */}
            <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
              <span className="inline-block px-4 py-1.5 bg-[#C5A55A]/20 border border-[#C5A55A]/30 rounded-full text-[#C5A55A] text-sm font-bold mb-6">
                For Americans With $50,000+ in Retirement Savings
              </span>
            </div>

            <h1
              style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black leading-tight mb-6 text-white"
            >
              You&apos;ve Worked 30 Years for This.{" "}
              <span className="text-[#C5A55A]">
                Don&apos;t Let Wall Street Take It Now.
              </span>
            </h1>

            <p
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
              className="text-lg md:text-xl text-blue-100 leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
            >
              One market crash could wipe out decades of sacrifice.
            </p>

            <p
              style={{ animation: "fadeInUp 0.6s ease-out 0.25s both" }}
              className="text-base md:text-lg text-[#C5A55A] font-semibold mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Gold has protected wealth for 5,000 years. It can protect yours.
            </p>

            {/* Primary CTA */}
            <div
              style={{ animation: "fadeInUp 0.6s ease-out 0.35s both" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <Link
                href="/get-started?ref=homepage-hero"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B8860B] text-[#000080] font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(197,165,90,0.4)] hover:shadow-[0_0_60px_rgba(197,165,90,0.6)] hover:-translate-y-1 group"
              >
                Get Your Free Gold IRA Kit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#social-proof"
                className="inline-flex items-center justify-center px-6 py-3 text-blue-200 hover:text-white font-medium text-base transition-colors"
              >
                See How It Works
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Trust Strip */}
            <div
              style={{ animation: "fadeInUp 0.6s ease-out 0.45s both" }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-blue-200"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#C5A55A]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                50,000+ Educated
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#C5A55A]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                A+ BBB Partners
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#C5A55A]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Free, No Obligation
              </span>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/images/homepage/hero-gold-bars.jpg"
                alt="Gold bars and coins — physical assets that protect retirement wealth"
                width={640}
                height={480}
                priority
                className="w-full h-auto object-cover"
              />
              {/* Blend overlay to merge with navy bg */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#000080]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-blue-300/50">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
