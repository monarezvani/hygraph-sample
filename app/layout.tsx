import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "@/config/Variables";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
