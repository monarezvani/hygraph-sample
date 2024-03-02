import { Inter } from "next/font/google";

export const MODEL_ID = "clt691v82edup07ujmezi5axn";

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const navItems = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "Features", link: "/features" },
  { id: 2, title: "Pricing", link: "/pricing" },
  { id: 3, title: "About", link: "/about" },
];
export const footerItems = [
  { id: 0, title: "Terms", link: "/terms" },
  { id: 1, title: "Privacy", link: "/privacy" },
  { id: 2, title: "Cookies", link: "/cookies" },
];
