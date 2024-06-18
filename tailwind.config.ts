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
    screens: {
      xxsm: "410px",
      xsm: "500px",
      vsm: "600px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      carousel_sm: "760px",
      card_sm: "454px",
    },
    extend: {
      colors: {
        primary: "#0f141e",
        secondary: "#878a8f",
        tertiary: "#4493f8",
        light_tertiary: "#caf0f8",
        primary_dark: "#222C35",
        secondary_dark: "#",
        tertiary_dark: "#21262d",
        light_tertiary_dark: "#30363d",
        color_btn: "#f0f9ff",
        color_btn_dark: "#c9d1d9",
        menu_primary: "#000",
        menu_primary_dark: "#c0c1c6",
        bg_dark: "#0d1117",
        bg: "#ffffff",
        slide_dark: "#0f141e",
        slide: "#f0f9ff",
      },
    },
  },
  plugins: [],
};
export default config;
