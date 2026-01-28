"use client";

import { ReactNode } from "react";
import { useLeadModal } from "@/context/LeadModalContext";
import { trackAffiliateClick, trackGoogleAdsConversion } from "@/lib/analytics";

interface LeadCaptureButtonProps {
  variant: string;
  source: string;
  className?: string;
  children: ReactNode;
}

export default function LeadCaptureButton({
  variant,
  source,
  className,
  children,
}: LeadCaptureButtonProps) {
  const { openModal } = useLeadModal();

  const handleClick = () => {
    // Fire analytics
    trackAffiliateClick("augusta", source, "cta");
    trackGoogleAdsConversion();

    // Open the modal
    openModal(variant, source);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
