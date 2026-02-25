"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";

const AUGUSTA_LINK =
  "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3?apmtrkr_cid=1696&aff_id=5129&apmtrkr_cph=844-405-3908";

export default function GetStartedPage() {
  useEffect(() => {
    window.location.href = AUGUSTA_LINK;
  }, []);

  return (
    <div className="min-h-screen bg-[#000080] flex items-center justify-center">
      <Loader2 className="h-8 w-8 text-white animate-spin" />
    </div>
  );
}
