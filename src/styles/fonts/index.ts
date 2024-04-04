import localFonts from "next/font/local";

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

export { roboto };
