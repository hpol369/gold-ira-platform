import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Gold IRA Guide | Download Your 2026 Investor Kit",
  description:
    "Download your free 2026 Gold IRA investor guide. Learn how to protect your retirement with precious metals, avoid common mistakes, and choose the right custodian.",
  alternates: { canonical: "/guide/free" },
};

export default function FreeGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
