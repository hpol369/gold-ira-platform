"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function AuthorBio() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Avatar */}
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-[#F6F4EF]">TR</span>
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed mb-8">
            &ldquo;I&apos;m Thomas Richardson. After 15+ years researching retirement strategies, I built Rich Dad Retirement to give hard-working Americans the same precious metals knowledge that wealthy investors have always had. Every article on this site reflects real research, real IRS rules, and real-world scenarios &mdash; because your retirement is too important for guesswork.&rdquo;
          </blockquote>

          {/* Signature */}
          <div className="border-t border-white/10 pt-6 inline-block">
            <Link
              href="/author/thomas-richardson"
              className="group"
            >
              <p className="text-[#D4A94E] font-bold text-lg group-hover:text-amber-300 transition-colors">
                Thomas Richardson
              </p>
              <p className="text-white/50 text-sm">
                Senior Editor &amp; Founder
              </p>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
