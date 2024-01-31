"use client";
import Link from "next/link";
import HamburgerIcon from "../atom/icon/hamburger";
import MenuBar from "./menubar";

const Header = () => {
  return (
    <header className=" w-full flex py-5 border-b-2 border-neutral-200 align-middle justify-around">
      <Link href="/" className="text-2xl">
        FE스터디톤
      </Link>
      <MenuBar />
      <button className="md:hidden">
        <HamburgerIcon width={30} height={30} />
      </button>
    </header>
  );
};

export default Header;
