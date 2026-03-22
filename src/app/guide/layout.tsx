import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTAGeneric } from "@/components/cta/StickyMobileCTAGeneric";

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <StickyMobileCTAGeneric />
      <Footer />
    </>
  );
}
