"use client";

import { Moon, Sun } from "./icons/@index";
import { useScreenMode } from "@/context/screen-mode-context";

export default function BtnScreenMode() {
  const { handleClick, mode } = useScreenMode();
  return (
    <button aria-label="Screen Mode" type="button" onClick={handleClick}>
      {mode ? <Sun /> : <Moon />}
    </button>
  );
}
