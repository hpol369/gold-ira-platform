"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Newspaper, BookMarked, Scale, Building2 } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "BBB A+ Rated", sub: "Editorial panel" },
  { icon: Award, label: "Featured", sub: "Money Magazine" },
  { icon: Newspaper, label: "Cited by", sub: "Forbes · Investopedia" },
  { icon: BookMarked, label: "IRS Pub 590-A", sub: "Aligned guidance" },
  { icon: Scale, label: "Fiduciary-aware", sub: "Reader-first reviews" },
  { icon: Building2, label: "12 custodians", sub: "Compared head-to-head" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-[#2A2D42] bg-[rgba(18,20,35,0.55)]">
      <div className="container-x mx-auto py-10 md:py-12">
        <p className="eyebrow text-center mb-7 text-[#A8A39A]">
          Trusted by 120,000+ retirement savers · Editorially independent
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-center gap-3 group"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#2A2D42] bg-[rgba(22,24,40,0.6)] text-[#D4A94E] group-hover:border-[rgba(197,149,46,0.4)] group-hover:bg-[rgba(197,149,46,0.08)] transition-all">
                <item.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-[#F6F4EF] leading-tight truncate">
                  {item.label}
                </div>
                <div className="text-[12px] text-[#A8A39A] leading-tight truncate">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
