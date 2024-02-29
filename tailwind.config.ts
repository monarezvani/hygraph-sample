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
        calloutBackground: "#1E293B",
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
    },
  },
  plugins: [],
};
export default config;
