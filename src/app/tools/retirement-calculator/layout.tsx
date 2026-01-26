import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can I Retire Calculator - See If Your Savings Last",
  description:
    "Free retirement calculator to answer 'can I retire?' Calculate if $300k, $500k, or $1 million is enough to retire. See how long your savings will last and get personalized recommendations.",
  keywords: [
    "can i retire with 300k",
    "can i retire with 500k",
    "is 1 million enough to retire",
    "can i retire calculator",
    "retirement savings calculator",
    "how long will my retirement savings last",
    "can i retire at 55",
    "can i retire at 60",
    "can i retire at 62",
    "can i retire at 65",
    "retirement readiness calculator",
    "do i have enough to retire",
    "will my money last in retirement",
    "4 percent rule calculator",
    "retirement withdrawal calculator",
    "how much do i need to retire",
    "retirement income calculator",
    "can i afford to retire",
    "early retirement calculator",
    "retirement planning calculator",
  ],
  openGraph: {
    title: "Can I Retire Calculator - See If Your Savings Will Last",
    description:
      "Free calculator to see if you can retire. Find out if $300k, $500k, or $1 million is enough for your retirement goals.",
    type: "website",
  },
};

export default function RetirementCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
