import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "White",
        textColor: "#334155",
        accentColor: "#7C3AED",
        headerColor: "#0F172A",
        calloutBg: "#1E293B",
      },
      boxShadow: {
        button: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        semiBold: "500",
        bold: "600",
        extrabold: "700",
        black: "900",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        sm: "18px",
        base: "20px",
        lg: "30px",
        xl: "60px",
      },
      lineHeight: {
        "28": "28px",
        "38": "38px",
        "30": "30px",
        "72": "72px",
      },
      letterSpacing: {
        title: "-1.2px",
      },
    },
  },
  plugins: [],
};
export default config;
