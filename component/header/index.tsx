import Link from "next/link";
import MenuBar from "./menubar";
import DrawerSection from "./drawer-section";

const Header = () => {
  return (
    <header className="bg-white w-full flex py-5 border-b-2 border-neutral-200 justify-around sticky top-0">
      <Link href="/" className="text-2xl">
        FE스터디톤
      </Link>
      <MenuBar />
      <DrawerSection />
    </header>
  );
};

export default Header;
