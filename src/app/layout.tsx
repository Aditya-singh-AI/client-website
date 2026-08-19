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
    default: "Nitya Physiotherapy | The Best Physiotherapy Clinic in Gwalior",
    template: `%s | The Best Physiotherapy Clinic in Gwalior - ${CLINIC_DATA.shortName}`,
  },
  description: `Nitya Physiotherapy provides the best physiotherapy clinic in Gwalior & Thatipur. Clinical joint & back pain rehabilitation, sports injury care, and home visit physiotherapy by ${CLINIC_DATA.practitioner.name} (${CLINIC_DATA.practitioner.qualifications}).`,
  keywords: [
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
    "Top 10 Physiotherapy clinic in Gwalior"
  ],
  openGraph: {
    title: "Nitya Physiotherapy | The Best Physiotherapy Clinic in Gwalior",
    description: `Nitya Physiotherapy provides the best physiotherapy clinic in Gwalior & Thatipur. Clinical joint & back pain rehabilitation, sports injury care, and home visit physiotherapy by ${CLINIC_DATA.practitioner.name} (${CLINIC_DATA.practitioner.qualifications}).`,
    images: [
      {
        url: "https://nityaphysiotherapy.com/images/dr-hemant-solo.jpg",
        width: 1200,
        height: 630,
        alt: "Nitya Physiotherapy Assessment and Clinical Treatment in Gwalior",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitya Physiotherapy | The Best Physiotherapy Clinic in Gwalior",
    description: `Nitya Physiotherapy provides the best physiotherapy clinic in Gwalior & Thatipur. Clinical joint & back pain rehabilitation by ${CLINIC_DATA.practitioner.name}.`,
    images: ["https://nityaphysiotherapy.com/images/dr-hemant-solo.jpg"],
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  metadataBase: new URL("https://nityaphysiotherapy.com"),
  verification: {
    google: "0nayKM40BRNFT4UnC4S6BDzR37mVJkZWV0lOQfPCoaE",
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