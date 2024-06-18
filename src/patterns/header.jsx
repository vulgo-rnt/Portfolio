"use client";

import BtnScreenMode from "@/components/screen-mode-btn";
import Logo from "../components/logo";
import MenuBurger from "../components/menu-burger";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Header() {
  const { scrollY } = useScrollPosition();
  return (
    <header
      className={`${
        scrollY > 0 && "backdrop-blur-[3px] shadow-md py-2"
      } fixed inset-0 bottom-auto p-5 z-50 items-center flex justify-between bg-transparent transition-all duration-500`}
    >
      <Logo />
      <div className="flex gap-4 items-center">
        <BtnScreenMode />
        <MenuBurger />
      </div>
    </header>
  );
}
