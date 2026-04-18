import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold IRA Glossary | Retirement Terms Explained | Rich Dad Retirement",
  description:
    "Plain-English definitions of Gold IRA, 401(k), Roth conversion, custodian fees, and every retirement investing term you need to know.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
