"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons/@index";

export default function BtnScreenMode() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (typeof localStorage === "undefined") return;
    const saveMode = JSON.parse(localStorage.getItem("dark-mode") ?? "false");
    setMode(saveMode);
  }, []);

  useEffect(() => {
    document.querySelector("body")?.classList.toggle("dark");
  }, [mode]);

  const handleClick = () => {
    setMode((prev) => {
      localStorage.setItem("dark-mode", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <button aria-label="Screen Mode" type="button" onClick={handleClick}>
      {mode ? <Sun /> : <Moon />}
    </button>
  );
}
