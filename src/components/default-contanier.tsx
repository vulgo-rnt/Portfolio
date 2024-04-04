import { roboto } from "@/styles/fonts";
import { ChildrenProps } from "@/types/children";
import "@/styles/globals.css";

export default function DefaultContanier({ children }: ChildrenProps) {
  return (
    <body
      className={`${roboto.className} p-5 dark:bg-bg_dark bg-bg transition-colors duration-700`}
    >
      {children}
    </body>
  );
}
