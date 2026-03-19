"use client";

import { ReactNode } from "react";
import { LeadModalProvider } from "@/context/LeadModalContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LeadModalProvider>
      {children}
    </LeadModalProvider>
  );
}
