import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";
import { MaterialSymbols } from "@/components/MaterialSymbols";

const fraunces = Fraunces({
  variable: "--font-headline",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ledger & Co. | Architectural Financial Excellence",
  description:
    "High-precision financial management for modern enterprises. We handle the ledger, you build the legacy.",
};

// The UI is a light theme. Declaring this stops the browser from painting its
// default dark canvas (a black flash) while the page loads on devices in dark
// mode, and themes the mobile browser chrome to match the surface color.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f9fa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Warm up the Google Fonts connections so the (now non-blocking) icon
            font fetch is fast — saves a DNS + TLS round trip on mobile. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <MaterialSymbols />
        <CursorFollower />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
