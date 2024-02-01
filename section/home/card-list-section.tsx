import CardPreview from "@/component/card-preview";
import SortChips from "@/component/sort-chips";

interface PropType {
  sort: "like" | "latest";
}

const CardListSection = ({ sort }: PropType) => {
  return (
    <section className="flex flex-col self-center gap-10 w-full">
      <SortChips sort={sort} />
      <div className="flex flex-wrap justify-between gap-10">
        <CardPreview
          data={{
            id: 1,
            author: "nayounsang",
            description:
              "Part of the text on the next line showed because of py-2 (padding will change element height). line-clamp-{n} utility adds dots at the end of n line but it does NOT magically removes text from the DOM (you may inspect it in a browser)",
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
            description: "",
            url: "https://www.notion.so/react-hook-form-76a1bd26d83241bd8103ffbd9de700ba?pvs=4",
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
