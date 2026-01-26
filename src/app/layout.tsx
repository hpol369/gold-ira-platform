import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ExitIntentModal } from "@/components/widgets/ExitIntentModal";
import { SocialProofTicker } from "@/components/widgets/SocialProofTicker";

const GA_MEASUREMENT_ID = "G-5Q1485P9KS";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.richdadretirement.com"),
  title: "Rich Dad Retirement - Protect Your Retirement with Gold",
  description: "Compare the best Gold IRA companies and protect your wealth. Expert reviews, fee comparisons, and guides to help you choose the right gold investment.",
  verification: {
    google: "ieR8rjLZCnl3Cy2YQ_fz9YnSRnPCPdfQA9p6pENdk78",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.richdadretirement.com",
    siteName: "Rich Dad Retirement",
    title: "Rich Dad Retirement - Protect Your Retirement with Gold",
    description: "Compare the best Gold IRA companies and protect your wealth. Expert reviews, fee comparisons, and guides.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
      "url": "https://www.richdadretirement.com/get-started",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={cn(inter.variable, playfair.variable, "antialiased")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ExitIntentModal />
        <SocialProofTicker />
      </body>
    </html>
  );
}
