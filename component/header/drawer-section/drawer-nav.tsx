import Link from "next/link";
import { navData } from "../data/nav-data";
import { useContext, useEffect } from "react";
import { DrawerContext } from ".";
import { useRouter } from "next/navigation";
import Logout from "@/component/atom/logout";

const DrawerNav = () => {
  const { setIsOpen, status } = useContext(DrawerContext);
  const router = useRouter();

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    router.push(url);
    setIsOpen(false);
  };
  return (
    <nav className="gap-6 flex flex-col items-center justify-evenly flex-1">
      {navData.map((e) => (
        <Link
          href={e.url}
          key={e.id}
          className="text-2xl  rounded-sm text-center"
          onClick={(event) => {
            handleClick(event, e.url);
          }}
        >
          {e.name}
        </Link>
      ))}
      {status === 200 ? (
        <Logout className="text-2xl rounded-sm text-center text-indigo-700 font-semibold" />
      ) : (
        <Link
          onClick={(event) => {
            handleClick(event, "/login");
          }}
          href="/login"
          className="text-2xl rounded-sm text-center text-indigo-700 font-semibold"
        >
          로그인
        </Link>
      )}
    </nav>
  );
};

export default DrawerNav;
