"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface LeadModalContextType {
  isOpen: boolean;
  variant: string;
  source: string;
  openModal: (variant: string, source: string) => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState("default");
  const [source, setSource] = useState("");

  const openModal = useCallback((newVariant: string, newSource: string) => {
    window.location.href = "https://learn.augustapreciousmetals.com/company-checklist-1/?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LeadModalContext.Provider value={{ isOpen, variant, source, openModal, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (context === undefined) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
