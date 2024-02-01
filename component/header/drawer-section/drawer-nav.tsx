import Link from "next/link";
import { navData } from "../data/nav-data";
import { useContext, useEffect } from "react";
import { DrawerContext } from ".";
import { useRouter } from "next/navigation";

const DrawerNav = () => {
  const { setIsOpen } = useContext(DrawerContext);
  const router = useRouter();

  console.log(router);

  useEffect(() => {}, []);

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
    </nav>
  );
};

export default DrawerNav;
