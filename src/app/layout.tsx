import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ExitIntentPopup } from "@/components/layout/ExitIntentPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rich Dad Retirement - Protect Your Retirement with Gold",
  description: "Compare the best Gold IRA companies and protect your wealth. Expert reviews, fee comparisons, and guides to help you choose the right gold investment.",
  verification: {
    google: "ieR8rjLZCnl3Cy2YQ_fz9YnSRnPCPdfQA9p6pENdk78",
  },
  openGraph: {
    title: "Rich Dad Retirement - Protect Your Retirement with Gold",
    description: "Compare the best Gold IRA companies and protect your wealth. Expert reviews, fee comparisons, and guides.",
    url: "https://www.richdadretirement.com",
    siteName: "Rich Dad Retirement",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rich Dad Retirement - Protect Your Retirement with Gold",
    description: "Compare the best Gold IRA companies and protect your wealth. Expert reviews and guides.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable, "antialiased bg-background text-text")}>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
