import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silver to Gold Ratio Calculator | Historical Analysis",
  description:
    "Calculate the silver to gold ratio and compare to historical averages. See what silver would be worth if the ratio normalizes. Interactive chart with 50+ years of data.",
  keywords:
    "silver to gold ratio, silver gold ratio historical, gold silver ratio calculator, precious metals ratio, silver price calculator",
  openGraph: {
    title: "Silver to Gold Ratio Calculator | Historical Analysis",
    description:
      "Calculate the silver to gold ratio and compare to historical averages. See what silver would be worth if the ratio normalizes.",
    type: "website",
    url: "/silver-squeeze/silver-to-gold-ratio-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silver to Gold Ratio Calculator",
    description:
      "Calculate the silver to gold ratio and compare to historical averages.",
  },
};

export default function SilverToGoldRatioCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
