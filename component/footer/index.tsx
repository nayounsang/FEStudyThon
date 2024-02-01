import Link from "next/link";
import Hero from "../atom/hero";
import Image from "next/image";

const gmailURL = `https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpRXcWpGDVrDBbFznwCjvnDVwZdtzBCWKwxJxkPkVTSpsVHghxkfXvXvbDjffdtmnCDLbV`;

const data: { url: string; name: string; imgURL: string; id: number }[] = [
  {
    url: gmailURL,
    name: "메일",
    imgURL: "/image/gmail-logo.png",
    id: 0,
  },
  {
    url: "https://github.com/nayounsang",
    name: "깃허브",
    imgURL: "/image/github-logo.png",
    id: 1,
  },
  {
    url: "https://discord.com/users/nayounsang",
    name: "디스코드",
    imgURL: "/image/discord-logo.png",
    id: 2,
  },
];

const Footer = () => {
  return (
    <div className="bg-white h-48 w-full border-t-2 border-neutral-200 py-5 px-10 flex flex-col md:flex-row ">
      <Hero title="FE스터디톤" content="매주 프론트엔드 공부하기" />
      <div className="flex flex-1 justify-around items-center">
        <nav className="flex flex-wrap gap-4 md:gap-10">
          <p>문의하기</p>
          {data.map((e) => (
            <Link
              target="_blank"
              href={e.url}
              key={e.id}
              className="flex gap-2 cursor-pointer items-center h-fit"
            >
              <Image
                src={e.imgURL}
                alt={e.name}
                width={20}
                height={20}
                loading="lazy"
              />

              {e.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;
