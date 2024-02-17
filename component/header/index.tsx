import Link from "next/link";
import MenuBar from "./menu-section";
import DrawerSection from "./drawer-section";
import LoginSection from "./login-section";
import { cookies } from "next/headers";
import { authFetch } from "@/util/authFetch";

const Header = async () => {
  const token = cookies().get("access_token")?.value;
  const response = await authFetch("http://localhost:3000/api/users/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const status = response.status;
  return (
    <header className="bg-white w-full flex py-5 border-b-2 border-neutral-200 justify-around sticky top-0 items-center">
      <Link href="/" className="text-2xl">
        FE스터디톤
      </Link>
      <MenuBar />
      <DrawerSection status={status}/>
      <LoginSection status={status} />
    </header>
  );
};

export default Header;
