import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medicaid Spend-Down Calculator — Asset Protection Planning",
  description:
    "Free Medicaid spend-down calculator. Estimate your nursing home spend-down timeline, learn legal asset protection strategies, and see state-specific Medicaid limits for 2024.",
  keywords: [
    "medicaid spend down calculator",
    "medicaid asset calculator",
    "medicaid planning calculator",
    "nursing home spend down",
    "medicaid asset limit",
    "medicaid look back period calculator",
    "medicaid spend down strategies",
    "protect assets from nursing home",
    "medicaid asset protection",
  ],
  openGraph: {
    title: "Medicaid Spend-Down Calculator — Asset Protection Planning",
    description:
      "Estimate nursing home spend-down timeline and learn legal strategies to protect your assets. State-specific Medicaid limits.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Medicaid Spend-Down Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicaid Spend-Down Calculator — Asset Protection Planning",
    description:
      "Estimate nursing home spend-down timeline and learn legal asset protection strategies.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
