"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { LeadModalProvider } from "@/context/LeadModalContext";

const LeadCaptureModal = dynamic(
  () => import("@/components/lp/LeadCaptureModal"),
  { ssr: false }
);

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LeadModalProvider>
      {children}
      <LeadCaptureModal />
    </LeadModalProvider>
  );
}
