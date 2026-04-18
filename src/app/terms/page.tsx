import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import {
  ChevronRight,
  FileText,
  Shield,
  Copyright,
  AlertCircle,
  Handshake,
  Lock,
  Scale,
  RefreshCw,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Rich Dad Retirement",
  description:
    "Terms of Service for Rich Dad Retirement (richdadretirement.com). Read our terms covering use of the site, intellectual property, limitation of liability, and affiliate relationships.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Rich Dad Retirement",
    description:
      "Terms of Service for Rich Dad Retirement. Read our terms covering use of the site, intellectual property, and limitations.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Rich Dad Retirement",
      },
    ],
  },
};

const schema = articleSchema({
  title: "Terms of Service",
  description:
    "Terms of Service for Rich Dad Retirement covering use of the site, intellectual property, limitation of liability, and affiliate relationships.",
  slug: "/terms",
  datePublished: "2024-06-01",
  dateModified: "2026-03-19",
});

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Terms of Service", url: "/terms" },
]);

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={schema} />
      <SchemaScript schema={breadcrumbs} />

      {/* Header */}
      <header className="bg-[#0C0D18] py-20 border-b border-[#2A2D42]">
        <Container>
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-4">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#D0CCC4]">Terms of Service</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6 border border-blue-200">
              <FileText className="h-4 w-4" />
              Legal
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-[#D0CCC4] leading-relaxed">
              These Terms of Service govern your use of richdadretirement.com. By
              accessing or using this website, you agree to be bound by these
              terms. Please read them carefully.
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-12">
        <div className="max-w-3xl prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-li:text-[#D0CCC4] prose-strong:text-[#F6F4EF]">
          {/* Use of Site */}
          <div className="not-prose flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] m-0">
              1. Use of This Website
            </h2>
          </div>
          <p>
            Rich Dad Retirement provides educational content about retirement
            planning, precious metals investing, IRA rules, and related
            financial topics. You may access and use this website for personal,
            non-commercial, informational purposes.
          </p>
          <p>By using this site, you agree that:</p>
          <ul>
            <li>You are at least 18 years of age</li>
            <li>
              You will not use the site for any unlawful purpose or in violation
              of these terms
            </li>
            <li>
              You will not attempt to interfere with the proper functioning of
              the website
            </li>
            <li>
              You will not scrape, copy, or redistribute our content without
              written permission
            </li>
            <li>
              You understand that the content is educational and does not
              constitute financial advice (see our{" "}
              <Link href="/disclaimer">Disclaimer</Link>)
            </li>
          </ul>

          {/* Intellectual Property */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Copyright className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] m-0">
              2. Intellectual Property
            </h2>
          </div>
          <p>
            All content on richdadretirement.com &mdash; including text,
            graphics, logos, images, data compilations, calculators, tools, and
            software &mdash; is the property of Rich Dad Retirement or its
            content suppliers and is protected by United States and international
            copyright laws.
          </p>
          <p>
            You may share links to our articles and reference short excerpts
            with proper attribution. However, reproducing substantial portions
            of our content, republishing articles, or creating derivative works
            without written permission is prohibited.
          </p>
          <p>
            The &quot;Rich Dad Retirement&quot; name, logo, and related brand
            elements are our trademarks. Use of these marks without prior
            written consent is not permitted.
          </p>

          {/* Limitation of Liability */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <AlertCircle className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] m-0">
              3. Limitation of Liability
            </h2>
          </div>
          <p>
            Rich Dad Retirement and its owners, employees, and affiliates shall
            not be held liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from:
          </p>
          <ul>
            <li>
              Your use of, or inability to use, this website or its content
            </li>
            <li>
              Any investment decisions you make based on information found on
              this site
            </li>
            <li>
              Any errors, omissions, or inaccuracies in our content
            </li>
            <li>
              Any losses resulting from interactions with third-party companies
              linked from this site
            </li>
            <li>
              Unauthorized access to or alteration of your data or transmissions
            </li>
          </ul>
          <p>
            This site is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, either express
            or implied. We do not warrant that the site will be uninterrupted,
            error-free, or free of viruses or other harmful components.
          </p>

          {/* Affiliate Relationships */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Handshake className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] m-0">
              4. Affiliate Relationships
            </h2>
          </div>
          <p>
            Rich Dad Retirement participates in affiliate programs with Gold IRA
            companies and other financial service providers. When you click
            certain links on our site and take a qualifying action (such as
            requesting a free kit or opening an account), we may receive
            compensation from the company.
          </p>
          <p>
            This relationship does not increase your cost. Affiliate
            compensation does not influence our editorial ratings or rankings.
            For a detailed explanation of how we research and rank companies,
            see our{" "}
            <Link href="/editorial-standards">Editorial Standards</Link>.
          </p>

          {/* Privacy */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Lock className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] m-0">
              5. Privacy &amp; Data Collection
            </h2>
          </div>
          <p>
            We collect certain information when you use our website, including
            through analytics tools, contact forms, and newsletter sign-ups.
            Information you submit through our lead forms (name, email, phone)
            may be shared with the Gold IRA company you are requesting
            information from.
          </p>
          <p>
            We use Google Analytics, Microsoft Clarity, and similar tools to
            understand how visitors use our site so we can improve it. These
            tools may use cookies and collect anonymized usage data.
          </p>
          <p>
            We will never sell your personal information to third parties. For
            full details, please refer to our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          {/* Governing Law */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Scale className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] m-0">
              6. Governing Law
            </h2>
          </div>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of Virginia, United States,
            without regard to its conflict of law principles.
          </p>
          <p>
            Any disputes arising from or related to the use of this website
            shall be resolved in the state or federal courts located in
            Virginia. By using this site, you consent to the jurisdiction of
            these courts.
          </p>

          {/* Changes to Terms */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <RefreshCw className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] m-0">
              7. Changes to These Terms
            </h2>
          </div>
          <p>
            We may update these Terms of Service from time to time to reflect
            changes in our practices or legal requirements. When we make
            significant changes, we will update the &quot;last updated&quot;
            date at the bottom of this page.
          </p>
          <p>
            Your continued use of the website after any changes constitutes your
            acceptance of the updated terms. We encourage you to review this
            page periodically.
          </p>

          {/* Contact & Related Links */}
          <div className="not-prose mt-12 pt-8 border-t border-[#2A2D42]">
            <p className="text-sm text-[#A8A39A] mb-6">
              <strong>Last updated:</strong> March 19, 2026
            </p>

            <h3 className="font-bold text-[#F6F4EF] mb-4">Related Pages</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <AlertCircle className="h-4 w-4" /> Investment Disclaimer
              </Link>
              <Link
                href="/editorial-standards"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <Shield className="h-4 w-4" /> Editorial Standards
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <FileText className="h-4 w-4" /> About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <Handshake className="h-4 w-4" /> Contact
              </Link>
            </div>
          </div>

          {/* SMS/Text Messaging Terms */}
          <div className="mt-12 bg-[#161828] border border-[#2A2D42] rounded-xl p-8">
            <h2 className="text-xl font-bold text-[#F6F4EF] mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5" /> SMS/Text Messaging Terms
            </h2>
            <div className="prose prose-slate max-w-none text-sm space-y-3">
              <p><strong>Program Name:</strong> Rich Dad Retirement Gold IRA Notifications</p>
              <p><strong>What You&apos;ll Receive:</strong> After submitting a Gold IRA information request form on our website, you may receive up to 3 transactional text messages related to your request. These include: (1) a confirmation of your form submission, (2) a reminder about an upcoming informational phone call from our partner, and (3) a follow-up if the call was missed.</p>
              <p><strong>Message Frequency:</strong> Up to 3 text messages total per form submission. This is not a recurring subscription.</p>
              <p><strong>Message and Data Rates:</strong> Message and data rates may apply. Check with your wireless carrier for details about your text messaging plan.</p>
              <p><strong>Opt-In:</strong> You consent to receive text messages by submitting the Gold IRA information request form at <a href="/get-started" className="text-[#D4A94E] hover:underline">richdadretirement.com/get-started</a> and providing your phone number. Consent is not a condition of purchase.</p>
              <p><strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any message to unsubscribe from all future text messages. You will receive a one-time confirmation of your opt-out.</p>
              <p><strong>Help:</strong> Reply <strong>HELP</strong> for support, or email us at <a href="mailto:hello@richdadretirement.com" className="text-[#D4A94E] hover:underline">hello@richdadretirement.com</a>.</p>
              <p><strong>Supported Carriers:</strong> Compatible with all major US carriers including AT&amp;T, Verizon, T-Mobile, Sprint, and others.</p>
              <p><strong>Privacy:</strong> Your phone number is only used for the purpose described above and is never sold to third parties. See our <Link href="/privacy-policy" className="text-[#D4A94E] hover:underline">Privacy Policy</Link> for details.</p>
              <p><strong>Contact:</strong> CCC Impact BV, Apeldoorn, Netherlands. Email: <a href="mailto:hello@richdadretirement.com" className="text-[#D4A94E] hover:underline">hello@richdadretirement.com</a></p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
