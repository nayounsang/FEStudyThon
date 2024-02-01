"use client";
import Link from "next/link";
import HamburgerIcon from "../atom/icon/hamburger";
import MenuBar from "./menubar";
import Drawer from "./drawer";

const Header = () => {
  return (
    <header className="bg-white w-full flex py-5 border-b-2 border-neutral-200 align-middle justify-around sticky top-0">
      <Link href="/" className="text-2xl">
        FE스터디톤
      </Link>
      <MenuBar />
      <button
        className="md:hidden"
        name="menu"
        data-drawer-target="header-drawer"
        data-drawer-show="header-drawer"
        aria-controls="header-drawer"
      >
        <HamburgerIcon width={30} height={30} />
      </button>
     
    </header>
  );
};

export default Header;
