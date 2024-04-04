"use client";

import { useState } from "react";
import DarkIcon from "./icons/dark-mode";
import SunIcon from "./icons/sun-mode";

export default function BtnScreenMode() {
  const [mode, setMode] = useState<boolean>(false);

  const handleClick = () => {
    setMode((prev) => !prev);
    document.querySelector("body")?.classList.toggle("dark");
  };

  return (
    <button type="button" onClick={handleClick}>
      {mode ? (
        <SunIcon className="stroke-white" />
      ) : (
        <DarkIcon className="fill-black" />
      )}
    </button>
  );
}
