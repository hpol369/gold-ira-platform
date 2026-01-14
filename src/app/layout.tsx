import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rich Dad Retirement - Protect Your Retirement with Gold",
  description: "Compare the best Gold IRA companies and protect your wealth.",
  verification: {
    google: "ieR8rjLZCnl3Cy2YQ_fz9YnSRnPCPdfQA9p6pENdk78",
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
      </body>
    </html>
  );
}
