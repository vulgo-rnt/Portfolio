"use client";

import { useState } from "react";
import { Moon, Sun } from "./icons/@index";

export default function BtnScreenMode() {
  const [mode, setMode] = useState<boolean>(false);

  const handleClick = () => {
    setMode((prev) => !prev);
    document.querySelector("body")?.classList.toggle("dark");
  };

  return (
    <button aria-label="Screen Mode" type="button" onClick={handleClick}>
      {mode ? <Sun /> : <Moon />}
    </button>
  );
}
