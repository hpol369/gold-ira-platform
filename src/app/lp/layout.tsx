"use client";

// Minimal layout for all landing pages - no nav/footer
// This is intentional for paid ads landing pages to reduce distractions

import { LeadModalProvider } from "@/context/LeadModalContext";
import LeadCaptureModal from "@/components/lp/LeadCaptureModal";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LeadModalProvider>
      {children}
      <LeadCaptureModal />
    </LeadModalProvider>
  );
}
