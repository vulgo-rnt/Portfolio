"use client";
import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}
