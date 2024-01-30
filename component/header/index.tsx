"use client";
import HamburgerIcon from "../atom/icon/hamburger";
import MenuBar from "./menubar";

const Header = () => {
  return (
    <header className=" w-full flex px-24 py-5 border-b-2 border-neutral-200 align-middle justify-between">
      <h1 className=" text-2xl">FE스터디톤</h1>
      <MenuBar />
      <button className="md:hidden">
        <HamburgerIcon width={30} height={30} />
      </button>
    </header>
  );
};

export default Header;
