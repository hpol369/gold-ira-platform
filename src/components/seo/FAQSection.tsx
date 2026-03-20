// src/components/seo/FAQSection.tsx
// Reusable FAQ section with automatic FAQPage JSON-LD schema

import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
  /** Set false to skip JSON-LD if parent already renders it */
  includeSchema?: boolean;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  className = "",
  includeSchema = true,
}: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className={className}>
      {includeSchema && <SchemaScript schema={faqSchema(faqs)} />}
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-8">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group border border-slate-200 rounded-xl bg-white overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
              <span className="pr-4">{faq.question}</span>
              <span className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Dark theme variant for pages with dark backgrounds */
export function FAQSectionDark({
  faqs,
  title = "Frequently Asked Questions",
  className = "",
  includeSchema = true,
}: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className={className}>
      {includeSchema && <SchemaScript schema={faqSchema(faqs)} />}
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-left font-semibold text-white hover:bg-white/10 transition-colors">
              <span className="pr-4">{faq.question}</span>
              <span className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-4 text-slate-300 leading-relaxed border-t border-white/10 pt-4">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
