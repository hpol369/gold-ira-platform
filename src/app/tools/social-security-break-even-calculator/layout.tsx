import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Social Security Break-Even Calculator — Best Age to Claim",
  description:
    "Free Social Security break-even calculator. Compare lifetime benefits at ages 62, 67, and 70. Find your break-even age and the optimal claiming strategy based on life expectancy.",
  keywords: [
    "social security break even calculator",
    "when to claim social security",
    "social security claiming age calculator",
    "social security at 62 vs 67 vs 70",
    "best age to take social security",
    "social security break even age",
    "social security optimizer",
    "delay social security calculator",
    "social security benefit comparison",
  ],
  alternates: { canonical: "/tools/social-security-break-even-calculator" },
  openGraph: {
    title: "Social Security Break-Even Calculator — Best Age to Claim",
    description:
      "Compare lifetime Social Security benefits at 62, 67, and 70. Find your break-even age and optimal claiming strategy.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Social Security Break-Even Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Security Break-Even Calculator — Best Age to Claim",
    description:
      "Compare lifetime benefits at 62, 67, and 70. Find your optimal claiming strategy.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={articleSchema({ title: "Social Security Break-Even Calculator — Best Age to Claim", description: "Free Social Security break-even calculator. Compare lifetime benefits at ages 62, 67, and 70. Find your break-even age and the optimal claiming strategy.", slug: "/tools/social-security-break-even-calculator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "Social Security Break-Even Calculator", url: "/tools/social-security-break-even-calculator" }])} />
      {children}
    </>
  );
}
