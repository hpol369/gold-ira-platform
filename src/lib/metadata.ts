import type { Metadata } from "next";

/**
 * Helper function to create consistent page metadata with Open Graph tags
 * Ensures all pages have proper og:image and og:url tags
 *
 * @param params - Page metadata parameters
 * @returns Metadata object with Open Graph tags included
 */
export function createPageMetadata(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  type?: "article" | "website";
}): Metadata {
  const {
    title,
    description,
    url,
    image = "/og-image.png",
    imageAlt = "Rich Dad Retirement - Gold IRA Reviews & Comparisons",
    type = "website",
  } = params;

  return {
    title,
    description,
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: "Rich Dad Retirement",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Helper function to generate canonical URL for a page
 * @param pathname - The page pathname (e.g., "/guide/gold-ira-guide")
 * @returns Full canonical URL
 */
export function getCanonicalUrl(pathname: string): string {
  const baseUrl = "https://www.richdadretirement.com";
  return `${baseUrl}${pathname}`;
}
