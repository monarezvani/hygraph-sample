import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "@/config/Constants";

export const metadata: Metadata = {
  title: {
    default: "Hygraph Sample",
    template: `%s | Explorer`,
  },
  description:
    "A coding challenge including connecting website to a headless CMS and fetch data",
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
