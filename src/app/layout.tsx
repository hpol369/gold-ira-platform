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
    images: [
      {
        url: "https://www.richdadretirement.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rich Dad Retirement - Gold IRA Reviews & Comparisons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rich Dad Retirement - Protect Your Retirement with Gold",
    description: "Compare the best Gold IRA companies and protect your wealth. Expert reviews and guides.",
    images: ["https://www.richdadretirement.com/og-image.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rich Dad Retirement",
    "url": "https://www.richdadretirement.com",
    "logo": "https://www.richdadretirement.com/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Thomas Richardson"
    },
    "sameAs": [
      "https://twitter.com/richdadretire",
      "https://facebook.com/richdadretirement",
      "https://linkedin.com/company/richdadretirement"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable, "antialiased bg-background text-text")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
