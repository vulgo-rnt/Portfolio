"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ScreenModeContextType {
  mode: boolean;
  setMode: (mode: boolean) => void;
  handleClick: () => void;
  loading: boolean;
}

const ScreenModeContext = createContext<ScreenModeContextType>({
  mode: false,
  setMode: () => {},
  handleClick: () => {},
  loading: true,
});

export const ScreenModeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [mode, setMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof localStorage === "undefined") return;
    const prefersColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const saveMode = JSON.parse(
      localStorage.getItem("dark-mode") ?? `${prefersColorScheme.matches}`
    );
    setMode(() => {
      setLoading(false);
      return saveMode;
    });
  }, []);

  useEffect(() => {
    if (typeof localStorage === "undefined" || loading) return;
    if (mode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [mode]);

  const handleClick = () => {
    setMode((prev) => {
      localStorage.setItem("dark-mode", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <ScreenModeContext.Provider value={{ mode, setMode, handleClick, loading }}>
      {children}
    </ScreenModeContext.Provider>
  );
};

export const useScreenMode = () => useContext(ScreenModeContext);
