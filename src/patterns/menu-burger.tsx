"use client";

import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Hamburger
        color="#31363F"
        toggled={isOpen}
        onToggle={(toggle) => setIsOpen(toggle)}
      />
      <AnimatePresence mode="wait">
        {isOpen && <Menu handler={handleClick} />}
      </AnimatePresence>
    </div>
  );
}
