import Logout from "@/component/atom/logout";
import Link from "next/link";

interface PropType {
  status: number;
}

const LoginSection = ({ status }: PropType) => {
  if (status === 200) {
    return <Logout className="hidden md:block" />;
  } else {
    return (
      <Link href="/login" className="hidden md:block">
        로그인
      </Link>
    );
  }
};

export default LoginSection;
