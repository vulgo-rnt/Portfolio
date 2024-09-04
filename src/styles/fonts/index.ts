import localFonts from "next/font/local";
import {
  Blinker,
  Poppins,
  Saira_Stencil_One,
  Domine,
  Sora,
  Roboto,
} from "next/font/google";

const domine = Domine({ weight: ["400"], subsets: ["latin"] });

const sora = Sora({ weight: ["400", "800"], subsets: ["latin"] });

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

const roboto = Roboto({ weight: ["300", "400", "500"], subsets: ["latin"] });

const sf_pro_display = localFonts({
  src: [
    {
      path: "SF-Pro-Display.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export { roboto, blinker, saira, poppins, domine, sf_pro_display, sora };
