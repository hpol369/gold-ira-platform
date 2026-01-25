// src/components/cta/TrackedAffiliateLink.tsx
// Affiliate link component with both GA4 and Telegram tracking

"use client";

import { trackAffiliateClick } from "@/lib/analytics";
import { ReactNode } from "react";

interface TrackedAffiliateLinkProps {
  href: string;
  company: string;
  source: string;
  linkType?: 'cta' | 'sidebar' | 'inline' | 'mobile' | 'navbar' | 'hero';
  className?: string;
  children: ReactNode;
}

export function TrackedAffiliateLink({
  href,
  company,
  source,
  linkType = 'cta',
  className,
  children,
}: TrackedAffiliateLinkProps) {
  const handleClick = () => {
    // Fire GA4 event
    trackAffiliateClick(company, source, linkType);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
