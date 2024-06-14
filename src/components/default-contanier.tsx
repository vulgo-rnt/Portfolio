import { roboto } from "@/styles/fonts";
import "@/styles/globals.css";
import { MenuProvider } from "@/context/menu-context";
import { PropsWithChildren } from "react";

export default function DefaultContanier({ children }: PropsWithChildren) {
  return (
    <body
      className={`${roboto.className} p-5 dark:bg-bg_dark bg-bg transition-colors duration-700`}
    >
      <MenuProvider>{children}</MenuProvider>
    </body>
  );
}
