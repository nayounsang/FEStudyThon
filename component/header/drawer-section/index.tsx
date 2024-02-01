"use client";
import HamburgerIcon from "@/component/atom/icon/hamburger";
import { createContext, useState } from "react";
import Drawer from "./drawer";

export const DrawerContext = createContext<{
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}>({ isOpen: false, setIsOpen: () => {} });

const DrawerSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <DrawerContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
        <button
          name="menu"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <HamburgerIcon width={30} height={30} />
        </button>
        {isOpen && <Drawer />}
      </DrawerContext.Provider>
    </div>
  );
};

export default DrawerSection;
