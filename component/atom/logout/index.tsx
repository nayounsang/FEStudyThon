"use client";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

interface PropType {
  className?: string | undefined;
}
const Logout = ({ className }: PropType) => {
  const router = useRouter();
  const handleLogoutClick = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    router.refresh();
  };
  return (
    <button className={className} onClick={handleLogoutClick}>
      로그아웃
    </button>
  );
};

export default Logout;
