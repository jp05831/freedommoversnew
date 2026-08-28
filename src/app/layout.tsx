import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Freedom Moving | Miramar & Broward County Movers",
    template: "%s | Freedom Moving",
  },
  description:
    "Family-owned moving company serving Miramar and Broward County, Florida. Residential, apartment, commercial, local, and senior moving services.",
  keywords: [
    "movers Miramar FL",
    "moving company Broward County",
    "local movers South Florida",
    "residential moving Miramar Florida",
    "Freedom Moving",
    "Broward County moving services",
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
      <body className="font-sans antialiased text-dark overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
