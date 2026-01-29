"use client";

import { ReactNode } from "react";
import { useLeadModal } from "@/context/LeadModalContext";
import { trackAffiliateClick } from "@/lib/analytics";

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
    // Fire analytics (conversion tracking happens in modal on form submit)
    trackAffiliateClick("augusta", source, "cta");

    // Open the modal
    openModal(variant, source);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
