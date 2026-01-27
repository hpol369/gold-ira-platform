import { Metadata } from "next";

export const metadata: Metadata = {
  title: "401k Calculator: Free Retirement Savings Projector (2026)",
  description:
    "Free 401k calculator to project your retirement savings. Calculate employer match, contribution growth, and see how much your 401k will be worth at retirement.",
  keywords:
    "401k calculator, 401k retirement calculator, 401k growth calculator, how much will my 401k be worth, 401k projection calculator, retirement savings calculator",
  openGraph: {
    title: "401k Calculator: Free Retirement Savings Projector (2026)",
    description:
      "Free 401k calculator to project your retirement savings. Calculate employer match, contribution growth, and see how much your 401k will be worth at retirement.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "401k Calculator: Free Retirement Savings Projector (2026)",
    description:
      "Free 401k calculator to project your retirement savings. Calculate employer match and see your retirement projections.",
  },
};

export default function Calculator401kLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
