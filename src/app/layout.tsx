import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Freedom Moving | Bucks County's Most Trusted Movers",
    template: "%s | Freedom Moving",
  },
  description:
    "Family-owned moving company in Bucks County, PA. Voted Best of Bucks 4 years in a row. Residential, apartment, local, and senior moving services. Free estimates.",
  keywords: [
    "movers Bucks County PA",
    "moving company Doylestown",
    "local movers Bucks County",
    "residential moving Newtown PA",
    "Freedom Moving",
    "Best of Bucks movers",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-dark overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
