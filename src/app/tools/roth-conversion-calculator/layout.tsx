import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roth Conversion Calculator 2026 — Is Converting Worth It?",
  description:
    "Free Roth conversion calculator. See the tax impact of converting your traditional IRA or 401(k) to a Roth. Compare scenarios with different conversion amounts and tax brackets.",
  keywords:
    "roth conversion calculator, roth ira conversion calculator, traditional to roth conversion, roth conversion tax calculator, is roth conversion worth it, backdoor roth calculator",
  openGraph: {
    title: "Roth Conversion Calculator 2026 — Is Converting Worth It?",
    description:
      "Free Roth conversion calculator. See the tax impact and long-term benefits of converting your traditional IRA or 401(k) to a Roth.",
    type: "website",
    url: "/tools/roth-conversion-calculator",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Roth Conversion Calculator — Rich Dad Retirement" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roth Conversion Calculator 2026",
    description:
      "See the tax impact of converting to a Roth IRA. Free calculator with side-by-side comparison.",
  },
};

export default function RothConversionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
