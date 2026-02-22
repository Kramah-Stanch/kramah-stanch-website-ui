import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://kramahstanch.com"),
  title: "Kramah Stanch | Architecting the Intelligent Enterprise",
  description: "Premier consulting for SAP transformations, AWS cloud infrastructure, and AI-driven automation. Partner with Kramah Stanch for scalable, secure enterprise solutions.",
  verification: {
    google: "HP4SHU71pGBpD1TYqRm_bAUF9DmzG4NVeF0C9XO9xgk",
  },
  openGraph: {
    title: "Kramah Stanch | Architecting the Intelligent Enterprise",
    description: "Premier consulting for SAP transformations, AWS cloud infrastructure, and AI-driven automation.",
    url: "/",
    siteName: "Kramah Stanch",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kramah Stanch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kramah Stanch | Architecting the Intelligent Enterprise",
    description: "Premier consulting for SAP transformations, AWS cloud infrastructure, and AI-driven automation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
