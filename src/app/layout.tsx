import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SocialProofTickerClient } from "@/components/widgets/SocialProofTickerClient";
import Providers from "@/components/providers/Providers";

const GA_MEASUREMENT_ID = "G-5Q1485P9KS";
const GOOGLE_ADS_ID = "AW-17807049464";
const CLARITY_PROJECT_ID = "v816rr21t5";
const GTM_ID = "GTM-TPC628G9";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
});

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
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Rich Dad Retirement - Protect Your Retirement with Gold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rich Dad Retirement - Protect Your Retirement with Gold",
    description: "Compare the best Gold IRA companies and protect your wealth. Expert reviews and guides.",
    images: ["/og-default.jpg"],
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
        {/* Google Tag Manager - must be first */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        {/* Microsoft Clarity - Session Recording & Heatmaps */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      </head>
      <body className={cn(inter.variable, playfair.variable, "antialiased bg-white text-slate-900")}>
        {/* Google Tag Manager (noscript) - must be first in body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          {children}
          <SocialProofTickerClient />
        </Providers>
      </body>
    </html>
  );
}
