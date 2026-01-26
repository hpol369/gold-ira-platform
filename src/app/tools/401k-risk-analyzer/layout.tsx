import { Metadata } from "next";

export const metadata: Metadata = {
  title: "401(k) Risk Analyzer - Check Your Portfolio Exposure",
  description:
    "Free 401(k) risk analyzer. See how much you could lose in a market crash and learn how to protect your savings.",
  keywords: [
    "401k risk calculator",
    "what is my 401k invested in",
    "am i heavily invested in stocks",
    "does 401k lose money if market crashes",
    "how to check 401k allocation",
    "401k stock exposure",
    "retirement portfolio risk",
    "401k diversification",
    "401k market crash",
    "check 401k investments",
    "401k allocation checker",
  ],
  openGraph: {
    title: "401(k) Risk Analyzer - Check Your Portfolio Exposure",
    description:
      "Free tool to analyze your 401(k) risk exposure. See how much you could lose in a market crash.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function RiskAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
