"use client";

import { useMenu } from "@/context/menu-context";
import Hamburger from "hamburger-react";

export default function MenuBurger() {
  const { isOpen, setIsOpen } = useMenu();

  return (
    <Hamburger
      color="#31363F"
      toggled={isOpen}
      onToggle={(toggle) => setIsOpen(toggle)}
    />
  );
}
