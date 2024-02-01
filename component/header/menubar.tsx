import Link from "next/link";
import { navData } from "./data/nav-data";

const MenuBar = () => {
  return (
    <nav className="justify-around text-lg gap-11 hidden md:flex">
      {navData.map((e) => (
        <Link
          href={e.url}
          key={e.id}
          className=" hover:bg-gray-100 rounded-md px-4"
        >
          {e.name}
        </Link>
      ))}
    </nav>
  );
};

export default MenuBar;
