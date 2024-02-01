import Hero from "@/component/atom/hero";
import { BigTitle } from "@/component/typography";
import CardListSection from "@/section/home/card-list-section";
import MiddleSection from "@/section/home/middle-section";
import Link from "next/link";

interface PropType {
  searchParams: { sort?: "latest" | "like" };
}

export default function Home({ searchParams }: PropType) {
  const sort = searchParams.sort || "latest";
  const large = "lg:w-[1024px]";
  const medium = "md:w-full";
  const small = "sm:w-[320px]";

  return (
    <main className="bg-almost-white min-h-screen py-16 px-12 flex justify-center">
      <div
        className={`flex flex-col items-center gap-20  ${large} ${medium} ${small}`}
      >
        <Hero
          title="꾸준히 프론트엔드 공부해요"
          content="매주 쌓이는 나의 지식"
        />
        <MiddleSection />
        <CardListSection sort={sort} />
        <Link href="/list">
          <BigTitle text="다른 스터디들"/>
        </Link>
      </div>
    </main>
  );
}
