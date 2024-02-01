import { BigTitle } from "@/component/typography";
import WeeklyArticle from "@/component/atom/weekly-article";
import Link from "next/link";

const MiddleSection = () => {
  return (
    <section className="flex justify-center md:justify-between w-full gap-12">
      <Link href="/study/1">
        <WeeklyArticle content="이번주 스터디 제목" />
      </Link>
      <Link
        href="/write"
        className="hidden h-fit w-fit hover:bg-gray-100 rounded-md p-4 md:block"
      >
        <BigTitle text="작성하기" />
      </Link>
    </section>
  );
};

export default MiddleSection;
