import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Stone Facility Management | Security, Housekeeping & Manpower Services",
  description:
    "Black Stone Facility Management Pvt Ltd — ISO 9001:2015 Certified, PSARA Licensed. Trained security guards, housekeeping, and all manpower services across Delhi NCR and Pan India.",
  keywords: [
    "Black Stone Facility Management",
    "security services Delhi",
    "housekeeping services",
    "manpower services",
    "PSARA licensed",
    "security guards NCR",
    "facility management",
  ],
  authors: [{ name: "Black Stone Facility Management Pvt Ltd" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Black Stone Facility Management | Security, Housekeeping & Manpower Services",
    description:
      "Black Stone Facility Management Pvt Ltd — ISO 9001:2015 Certified, PSARA Licensed. Trained security guards, housekeeping, and all manpower services across Delhi NCR and Pan India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
