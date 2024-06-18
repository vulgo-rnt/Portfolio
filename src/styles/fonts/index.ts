import localFonts from "next/font/local";
import { Blinker, Poppins, Saira_Stencil_One, Domine } from "next/font/google";

const domine = Domine({ weight: ["400"], subsets: ["latin"] });

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

const saira = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
  adjustFontFallback: true,
});

const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });

const roboto = localFonts({
  src: [
    {
      path: "Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const sf_pro_display = localFonts({
  src: [
    {
      path: "SF-Pro-Display.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export { roboto, blinker, saira, poppins, domine, sf_pro_display };
