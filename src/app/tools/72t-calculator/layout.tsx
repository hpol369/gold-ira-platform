import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "72(t) SEPP Calculator — Penalty-Free Early IRA Withdrawals",
  description:
    "Free 72(t) calculator. Calculate penalty-free early IRA withdrawals using all 3 IRS methods (RMD, Fixed Amortization, Fixed Annuitization). Retire before 59½ without the 10% penalty.",
  keywords: [
    "72t calculator",
    "SEPP calculator",
    "rule 72t calculator",
    "early retirement withdrawal calculator",
    "penalty free ira withdrawal",
    "substantially equal periodic payments",
    "retire before 59 and a half",
    "early ira distribution calculator",
  ],
  alternates: { canonical: "/tools/72t-calculator" },
  openGraph: {
    title: "72(t) SEPP Calculator — Penalty-Free Early IRA Withdrawals",
    description:
      "Calculate penalty-free early IRA withdrawals using all 3 IRS-approved 72(t) methods. Free tool for early retirees.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "72(t) SEPP Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "72(t) SEPP Calculator — Penalty-Free Early IRA Withdrawals",
    description:
      "Calculate penalty-free early IRA withdrawals using all 3 IRS-approved 72(t) methods.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={articleSchema({ title: "72(t) SEPP Calculator — Penalty-Free Early IRA Withdrawals", description: "Free 72(t) calculator. Calculate penalty-free early IRA withdrawals using all 3 IRS methods. Retire before 59½ without the 10% penalty.", slug: "/tools/72t-calculator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "72(t) SEPP Calculator", url: "/tools/72t-calculator" }])} />
      {children}
    </>
  );
}
