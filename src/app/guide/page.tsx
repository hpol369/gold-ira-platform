import { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Gold IRA Guides | Expert Retirement Guides | Rich Dad Retirement",
  description:
    "Expert Gold IRA guides covering rollovers, tax rules, custodian selection, and retirement strategies. Free resources to protect your savings.",
  alternates: { canonical: "/guide" },
};

// Redirect /guide to /guide/gold-ira-guide
export default function GuidePage() {
  redirect('/guide/gold-ira-guide');
}
