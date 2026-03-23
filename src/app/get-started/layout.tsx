import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Precious Metals IRA Kit | Rich Dad Retirement",
  description:
    "Request your free Gold IRA investor kit. Get expert guidance on protecting your retirement savings with precious metals. No obligation, 100% free.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
