import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Security Calculator 2026 — Estimate Your Monthly Benefit",
  description:
    "Free Social Security benefits calculator. Estimate your monthly benefit at 62, 67, or 70. See how delaying affects your lifetime income and compare spousal benefit strategies.",
  keywords:
    "social security calculator, social security benefits calculator, estimate social security, social security at 62, social security at 67, when to take social security, social security spousal benefits, maximize social security",
  openGraph: {
    title: "Social Security Calculator 2026 — Estimate Your Monthly Benefit",
    description:
      "Estimate your Social Security benefit at different claiming ages. Free calculator with spousal benefit comparison.",
    type: "website",
    url: "/tools/social-security-calculator",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Social Security Calculator — Rich Dad Retirement" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Security Calculator 2026",
    description:
      "Estimate your monthly Social Security benefit. Compare claiming at 62, 67, or 70.",
  },
};

export default function SocialSecurityCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
