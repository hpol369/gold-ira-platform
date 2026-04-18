"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

// Each publication styled to mimic its real logo typography
const publications = [
  {
    name: "Forbes",
    className: "font-serif font-black italic tracking-tight text-[28px] md:text-[32px]",
  },
  {
    name: "CNBC",
    className: "font-sans font-extrabold tracking-wider text-[24px] md:text-[28px] uppercase",
  },
  {
    name: "Bloomberg",
    className: "font-sans font-light tracking-wide text-[24px] md:text-[28px]",
  },
  {
    name: "Fox Business",
    className: "font-sans font-extrabold tracking-tight text-[22px] md:text-[26px] uppercase",
  },
  {
    name: "Morningstar",
    className: "font-sans font-semibold tracking-normal text-[22px] md:text-[26px]",
  },
];

export function TrustBadges() {
  return (
    <section className="relative py-16 md:py-20 border-b border-[#2A2D42] bg-white overflow-hidden">
      <Container className="relative z-10">
        <FadeIn>
          <div className="flex items-center gap-4 justify-center mb-10">
            <div className="h-px w-12 bg-slate-300" />
            <p className="text-center text-xs font-bold text-[#A8A39A] uppercase tracking-[0.2em]">
              Insights Featured In
            </p>
            <div className="h-px w-12 bg-slate-300" />
          </div>
        </FadeIn>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {publications.map((pub, i) => (
            <FadeIn key={pub.name} delay={i * 0.08}>
              <div className="group flex items-center justify-center px-3 py-2 opacity-40 hover:opacity-90 transition-all duration-300">
                <span
                  className={`text-[#A8A39A] group-hover:text-[#F6F4EF] transition-colors select-none ${pub.className}`}
                >
                  {pub.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
