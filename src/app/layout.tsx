import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import AICustomerSupport from "@/components/ai/AICustomerSupport";
import FloatingQuickContact from "@/components/ui/FloatingQuickContact";
import { ClinicDataProvider } from "@/context/ClinicDataContext";
import { CLINIC_DATA } from "@/constants/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nitya Physiotherapy Clinic | The Best Physiotherapy Clinic in Gwalior",
    template: `%s | Nitya Physiotherapy Clinic`,
  },
  description: `Nitya Physiotherapy Clinic provides the best clinical physiotherapy & home visits in Gwalior & Thatipur. Joint & back pain rehabilitation, sports injury care, and home visit physical therapy by ${CLINIC_DATA.practitioner.name} (${CLINIC_DATA.practitioner.qualifications}).`,
  keywords: [
    "Nitya Physiotherapy Clinic",
    "The Best Physiotherapy Clinic in Gwalior",
    "Best Physiotherapy Clinic in Gwalior",
    "Best Physiotherapist in Gwalior",
    "Best Physiotherapy Clinic in Thatipur Gwalior",
    "Best Home Physiotherapy in Gwalior",
    "Physiotherapy Clinic in Gwalior",
    "Physiotherapist in Thatipur Gwalior",
    "Home physiotherapy Gwalior",
    "Sports physiotherapy Gwalior",
    "Dr Hemant Singh PT",
    "Musculoskeletal physiotherapy Gwalior",
    "Nitya Physiotherapy Gwalior",
    "Stroke Physiotherapy in Gwalior",
    "Paralysis Physiotherapy Home Visit in Gwalior",
    "Top 5 Physiotherapy clinic in Gwalior",
    "Top 10 Physiotherapy clinic in Gwalior",
    "Best Physiotherapist in Gwalior for Post-Surgery Rehab",
  ],
  applicationName: "Nitya Physiotherapy Clinic",
  authors: [{ name: "Nitya Physiotherapy Clinic" }],
  generator: "Next.js",
  publisher: "Nitya Physiotherapy Clinic",
  openGraph: {
    title: "Nitya Physiotherapy Clinic | The Best Physiotherapy Clinic in Gwalior",
    description: `Nitya Physiotherapy Clinic provides the best clinical physiotherapy & home visits in Gwalior & Thatipur. Joint & back pain rehabilitation, sports injury care, and home visit physical therapy by ${CLINIC_DATA.practitioner.name} (${CLINIC_DATA.practitioner.qualifications}).`,
    url: "https://nityaphysiotherapy.com",
    siteName: "Nitya Physiotherapy Clinic",
    images: [
      {
        url: "https://nityaphysiotherapy.com/logo.png",
        width: 1024,
        height: 1024,
        alt: "Nitya Physiotherapy Clinic Official Logo",
      },
      {
        url: "https://nityaphysiotherapy.com/images/dr-hemant-solo.jpg",
        width: 1200,
        height: 630,
        alt: "Nitya Physiotherapy Assessment and Clinical Treatment in Gwalior",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitya Physiotherapy Clinic | The Best Physiotherapy Clinic in Gwalior",
    description: `Nitya Physiotherapy Clinic provides the best physiotherapy clinic in Gwalior & Thatipur. Clinical joint & back pain rehabilitation by ${CLINIC_DATA.practitioner.name}.`,
    images: ["https://nityaphysiotherapy.com/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.png", sizes: "1024x1024", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://nityaphysiotherapy.com"),
  verification: {
    google: "0nayKM40BRNFT4UnC4S6BDzR37mVJkZWV0lOQfPCoaE",
  },
  other: {
    "site_name": "Nitya Physiotherapy Clinic",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-800 antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
        <ClinicDataProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileCTA />
          {/* Floating WhatsApp & Direct Call Widget */}
          <FloatingQuickContact />
          {/* Floating Live AI Customer Support Assistant */}
          <AICustomerSupport />
        </ClinicDataProvider>
      </body>
    </html>
  );
}