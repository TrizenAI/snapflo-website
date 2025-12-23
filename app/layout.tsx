import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Snapflo | Smart Photo Delivery & Studio Management",
  description: "Snapflo helps photo studios deliver photos faster, bill smarter, gain insights, and communicate seamlessly — all within a secure, tenant-specific platform.",
  keywords: ["photo studio", "photography management", "photo delivery", "studio billing", "photographer software"],
  authors: [{ name: "Snapflo" }],
  openGraph: {
    title: "Snapflo | Smart Photo Delivery & Studio Management",
    description: "Snapflo helps photo studios deliver photos faster, bill smarter, gain insights, and communicate seamlessly.",
    type: "website",
    locale: "en_US",
    siteName: "Snapflo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snapflo | Smart Photo Delivery & Studio Management",
    description: "Snapflo helps photo studios deliver photos faster, bill smarter, gain insights, and communicate seamlessly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
