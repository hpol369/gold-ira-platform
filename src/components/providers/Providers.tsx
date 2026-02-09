"use client";

import { ReactNode } from "react";
import { LeadModalProvider } from "@/context/LeadModalContext";
import LeadCaptureModal from "@/components/lp/LeadCaptureModal";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LeadModalProvider>
      {children}
      <LeadCaptureModal />
    </LeadModalProvider>
  );
}
