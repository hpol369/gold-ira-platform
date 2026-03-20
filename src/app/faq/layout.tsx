// src/app/faq/layout.tsx
// Server layout for FAQ page — provides metadata + schema markup

import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getPageFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Gold IRA FAQ | 100+ Questions Answered (2026)",
  description:
    "Answers to the most common Gold IRA questions. Rollovers, fees, rules, taxes, and more — 100+ questions answered by retirement experts.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Gold IRA FAQ | 100+ Questions Answered",
    description:
      "Get answers to the most common questions about Gold IRAs, rollovers, taxes, and more.",
    type: "website",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ])}
      />
      <SchemaScript schema={faqSchema(getPageFAQs("faq"))} />
      {children}
    </>
  );
}
