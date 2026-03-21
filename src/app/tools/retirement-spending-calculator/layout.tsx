import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retirement Spending Calculator — Budget Your Retirement Expenses",
  description:
    "Free retirement spending calculator. Budget expenses by category (housing, healthcare, food, travel), project 30-year inflation-adjusted costs, and see your lifetime spending total.",
  keywords: [
    "retirement spending calculator",
    "retirement budget calculator",
    "retirement expense calculator",
    "how much will i spend in retirement",
    "retirement cost calculator",
    "retirement budget planner",
    "inflation adjusted retirement spending",
    "retirement healthcare costs calculator",
    "retirement expense categories",
  ],
  openGraph: {
    title: "Retirement Spending Calculator — Budget Your Retirement Expenses",
    description:
      "Budget retirement expenses by category and project 30-year inflation-adjusted costs. Free planning tool.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Retirement Spending Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Spending Calculator — Budget Your Expenses",
    description:
      "Budget retirement expenses by category with 30-year inflation projections.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
