'use client'
import Image from "next/image";
import Link from "next/link";
const GithubSection = () => {
  const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
  return (
    <>
      <Link
        className="text-lg md:text-xl flex items-center gap-4 border-2 rounded-lg px-8 py-2"
        href={url}
      >
        <Image
          src="/image/github-logo.png"
          alt="github"
          width={30}
          height={30}
        />
        깃허브로 로그인
      </Link>
    </>
  );
};

export default GithubSection;
