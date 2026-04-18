"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/CardV2";

const TESTIMONIALS = [
  {
    quote:
      "The Rich Dad team spent two hours on the phone helping me compare three custodians without a single sales push. I rolled over 18% of my 401(k) into a gold IRA in under ten days. Three months later, I sleep better than I have in years.",
    name: "Robert T.",
    location: "Scottsdale, AZ",
    stars: 5,
    meta: "Rolled over $420k · age 62",
    featured: true,
  },
  {
    quote:
      "I'd been meaning to diversify for six years and was paralysed by the jargon. The 60-second quiz cut through everything. Match made sense, calculator showed me exactly what to expect, no pressure anywhere.",
    name: "Margaret K.",
    location: "Fort Myers, FL",
    stars: 5,
    meta: "Rolled over $185k · age 66",
  },
  {
    quote:
      "My husband passed two years ago and I was overwhelmed managing the IRAs. These reviews are genuine — I called three custodians and Rich Dad's #1 pick treated me exactly like they said they would.",
    name: "Carol P.",
    location: "Tulsa, OK",
    stars: 5,
    meta: "Widow rollover · age 68",
  },
];

export function ProofSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="eyebrow mb-4">Real Reader Stories</p>
          <h2 className="editorial text-4xl md:text-5xl text-[#F6F4EF] mb-5">
            12,400+ Americans rolled over.
            <br />
            <span className="italic text-[#D4A94E] font-normal">
              Here's what three of them told us.
            </span>
          </h2>
          <p className="text-[16px] text-[#D0CCC4] leading-[1.65]">
            Every testimonial is verified via email and rollover documentation.
            Rich Dad Retirement receives no compensation for displaying these stories.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={t.featured ? "lg:col-span-1" : ""}
            >
              <Card
                variant={t.featured ? "featured" : "default"}
                padding="lg"
                className="h-full"
              >
                <Quote className="size-6 text-[#C5952E] mb-4 opacity-70" />

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="size-4 fill-[#D4A94E] text-[#D4A94E]"
                    />
                  ))}
                </div>

                <blockquote
                  className={[
                    "font-serif leading-[1.35] text-[#F6F4EF] mb-6 tracking-[-0.015em]",
                    t.featured ? "text-[1.35rem] md:text-[1.45rem]" : "text-[1.2rem]",
                  ].join(" ")}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="pt-5 border-t border-[#2A2D42]">
                  <div className="font-semibold text-[15px] text-[#F6F4EF] leading-tight mb-0.5">
                    {t.name} <span className="text-[#D4A94E] font-normal">· {t.location}</span>
                  </div>
                  <div className="text-[13px] text-[#A8A39A] leading-tight">
                    {t.meta}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
