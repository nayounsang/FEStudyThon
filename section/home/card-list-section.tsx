import CardPreview from "@/component/card/card-preview";
import Chip from "@/component/chip";
import Link from "next/link";

interface PropType {
  sort: "like" | "latest";
}

const CardListSection = ({ sort }: PropType) => {
  return (
    <section className="flex flex-col self-center gap-10 lg:w-[1000px] md:w-full">
      <div className="flex gap-5">
        <Link
          scroll={false}
          href={{ pathname: "/", query: { sort: "latest" } }}
        >
          <Chip active={sort === "latest"} text="최신순" />
        </Link>
        <Link scroll={false} href={{ pathname: "/", query: { sort: "like" } }}>
          <Chip active={sort === "like"} text="좋아요" />
        </Link>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-10">
        <CardPreview
          data={{
            id: 1,
            author: "nayounsang",
            description: "Part of the text on the next line showed because of py-2 (padding will change element height). line-clamp-{n} utility adds dots at the end of n line but it does NOT magically removes text from the DOM (you may inspect it in a browser)",
            url: "https://velog.io/@sehyunny/weired-things-engineers-believe",
          }}
        />
        <CardPreview
          data={{
            id: 1,
            author: "nayounsang",
            description: "foo bar",
            url: "https://nayounsang1.tistory.com/68",
          }}
        />
        <CardPreview
          data={{
            id: 1,
            author: "nayounsang",
            description: "foo bar",
            url: "https://github.com/nayounsang/FEStudyThon",
          }}
        />
        <CardPreview
          data={{
            id: 1,
            author: "nayounsang",
            description: "foo bar",
            url: "https://github.com/nayounsang/FEStudyThon",
          }}
        />
      </div>
    </section>
  );
};

export default CardListSection;
