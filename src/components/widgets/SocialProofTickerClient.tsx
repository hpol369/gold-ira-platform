"use client";

import dynamic from "next/dynamic";

const SocialProofTicker = dynamic(
  () => import("./SocialProofTicker").then(mod => ({ default: mod.SocialProofTicker })),
  { ssr: false }
);

export function SocialProofTickerClient() {
  return <SocialProofTicker />;
}
