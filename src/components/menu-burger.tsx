"use client";
import "@/styles/burger-menu.css";
import { useMenu } from "@/context/menu-context";
import { Squash as Hamburger } from "hamburger-react";

export default function MenuBurger() {
  const { isOpen, setIsOpen } = useMenu();

  return (
    <Hamburger
      aria-label="Menu Button"
      rounded
      toggled={isOpen}
      onToggle={(toggle) => setIsOpen(toggle)}
    />
  );
}
