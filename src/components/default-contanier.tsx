import { roboto } from "@/styles/fonts";
import "@/styles/globals.css";
import { MenuProvider } from "@/context/menu-context";
import { PropsWithChildren } from "react";
import { ScreenModeProvider } from "@/context/screen-mode-context";

export default function DefaultContanier({ children }: PropsWithChildren) {
  return (
    <body
      className={`${roboto.className} mx-[5%] mt-28 dark:bg-bg_dark bg-bg transition-colors duration-700`}
    >
      <MenuProvider>
        <ScreenModeProvider>{children}</ScreenModeProvider>
      </MenuProvider>
    </body>
  );
}
