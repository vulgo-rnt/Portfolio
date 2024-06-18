import Link from "next/link";
import { LogoIcon } from "./icons/logo";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex gap-4 items-center"
      aria-label="Logo Go Home"
    >
      <LogoIcon />
      <span className="flex flex-col max-xsm:hidden transition-colors duration-700">
        <span className="font-medium text-3xl dark:text-color_btn_dark text-primary">
          Renan Toniolo
        </span>
        <span className="text-sm text-secondary tracking-[4px]">
          Desenvolvedor Web
        </span>
      </span>
    </Link>
  );
}
