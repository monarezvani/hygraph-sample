import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "@/config/Constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
export const metadata: Metadata = {
  title: "Hygraph Sample",
  //   template: `%s | Explorer`,
  // },
  description:
    "A coding challenge including connecting website to a headless CMS and fetch data",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFont.variable} font-sans`}>
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
