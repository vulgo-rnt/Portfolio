"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const MenuProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
