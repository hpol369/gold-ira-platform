import { Metadata } from "next";

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
  return children;
}
