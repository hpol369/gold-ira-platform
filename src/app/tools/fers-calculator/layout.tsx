import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FERS Retirement Calculator — Federal Employee Pension Estimator",
  description:
    "Free FERS calculator for federal employees. Estimate your FERS basic pension, FERS supplement, and TSP withdrawals. See your total federal retirement income and replacement ratio.",
  keywords: [
    "fers calculator",
    "fers retirement calculator",
    "federal retirement calculator",
    "fers pension calculator",
    "federal employee retirement estimator",
    "fers supplement calculator",
    "tsp retirement calculator",
    "federal pension estimator",
    "fers high 3 calculator",
  ],
  alternates: { canonical: "/tools/fers-calculator" },
  openGraph: {
    title: "FERS Retirement Calculator — Federal Employee Pension Estimator",
    description:
      "Estimate your FERS basic pension, supplement, and TSP withdrawals. Free calculator for federal employees.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "FERS Retirement Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FERS Retirement Calculator — Federal Employee Pension Estimator",
    description:
      "Estimate your FERS pension, supplement, and TSP withdrawals. Free calculator for federal employees.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={articleSchema({ title: "FERS Retirement Calculator — Federal Employee Pension Estimator", description: "Free FERS calculator for federal employees. Estimate your FERS basic pension, FERS supplement, and TSP withdrawals.", slug: "/tools/fers-calculator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "FERS Retirement Calculator", url: "/tools/fers-calculator" }])} />
      {children}
    </>
  );
}
