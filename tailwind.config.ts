import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/patterns/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f141e",
        secondary: "#878a8f",
        primary_dark: "#222C35",
        secondary_dark: "#",
        menu_primary: "",
        menu_primary_dark: "",
        bg_dark: "#0d1117",
        bg: "#ffffff",
        slide_dark: "#0f141e",
        slide: "black",
      },
    },
  },
  plugins: [],
};
export default config;
