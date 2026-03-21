import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Money Longevity Calculator — Will Your Retirement Savings Last?",
  description:
    "Free calculator to see how long your retirement savings will last. Projects year-by-year depletion with inflation, Social Security, pensions, and withdrawal rates. Find your money's expiration date.",
  keywords: [
    "how long will my money last in retirement",
    "retirement money longevity calculator",
    "will my retirement savings last",
    "retirement withdrawal calculator",
    "how long will 500k last in retirement",
    "retirement savings depletion calculator",
    "4 percent rule calculator",
    "sustainable withdrawal rate calculator",
    "retirement runway calculator",
  ],
  alternates: { canonical: "/tools/money-longevity-calculator" },
  openGraph: {
    title: "Money Longevity Calculator — Will Your Retirement Savings Last?",
    description:
      "See how long your retirement savings will last. Year-by-year projections with inflation and withdrawal analysis.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Money Longevity Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Longevity Calculator — Will Your Savings Last?",
    description:
      "See how long your retirement savings will last with year-by-year projections.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={articleSchema({ title: "Money Longevity Calculator — Will Your Retirement Savings Last?", description: "Free calculator to see how long your retirement savings will last. Projects year-by-year depletion with inflation, Social Security, pensions, and withdrawal rates.", slug: "/tools/money-longevity-calculator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "Money Longevity Calculator", url: "/tools/money-longevity-calculator" }])} />
      {children}
    </>
  );
}
