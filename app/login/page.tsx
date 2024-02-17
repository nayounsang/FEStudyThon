import Hero from "@/component/atom/hero";
import GithubSection from "@/section/login/github-section";
import Link from "next/link";

const Login = () => {
  const large = "lg:w-[1024px]";
  const medium = "md:w-full";
  const small = "sm:w-[320px]";

  return (
    <main className="bg-almost-white min-h-screen py-16 px-12 flex flex-col items-center gap-16">
      <Hero title="FE스터디톤" content="로그인" />

      <GithubSection />
    </main>
  );
};

export default Login;
