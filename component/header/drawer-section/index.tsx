"use client";
import HamburgerIcon from "@/component/atom/icon/hamburger";
import { createContext, useState } from "react";
import Drawer from "./drawer";

interface PropType {
  status: number;
}

export const DrawerContext = createContext<{
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  status: number;
}>({ isOpen: false, setIsOpen: () => {}, status: 401 });

const DrawerSection = ({ status }: PropType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <DrawerContext.Provider
        value={{ isOpen: isOpen, setIsOpen: setIsOpen, status: status }}
      >
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
