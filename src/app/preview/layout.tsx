import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css"; // Import global styles but we will override variables

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
    title: "Patriot Design Preview",
    robots: { index: false, follow: false },
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cn(inter.variable, playfair.variable, "antialiased min-h-screen bg-white text-slate-900 selection:bg-[#000080] selection:text-white")}>

            {/* 
        FORCE PATRIOT THEME VARIABLES 
        We use a style block to override the :root variables locally for this route subtree.
      */}
            <style>{`
        :root {
          --color-primary: #000080; /* Navy */
          --color-secondary: #B22234; /* Red */
          --color-background: #ffffff;
          --color-text: #0f172a;
        }
        
        /* Force background cleaning */
        body {
            background-color: #ffffff !important;
            background-image: none !important;
            color: #0f172a !important;
        }
        
        /* Prose overrides for articles */
        .prose {
            --tw-prose-body: #334155;
            --tw-prose-headings: #000080;
            --tw-prose-links: #B22234;
            --tw-prose-bold: #0f172a;
            --tw-prose-quotes: #000080;
        }
      `}</style>

            {children}
        </div>
    );
}
