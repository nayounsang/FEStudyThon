import { BigTitle } from "@/component/typography";
import WeeklyArticle from "@/component/atom/weekly-article";
import Link from "next/link";

const MiddleSection = () => {

  return (
    <section className="flex flex-col md:flex-row justify-evenly w-full gap-12">
      <WeeklyArticle
        content="프론트엔드의 테스트"
      />
        <Link href="/write" className="hidden h-fit w-fit hover:bg-gray-100 rounded-md p-4 md:block">
        <BigTitle text="작성하기" />
      </Link>
    </section>
  );
};

export default MiddleSection;
