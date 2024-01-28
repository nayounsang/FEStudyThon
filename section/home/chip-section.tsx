import Chip from "@/component/chip";
import Link from "next/link";

interface PropType {
  sort: "like" | "latest";
}

const ChipSection = ({ sort }: PropType) => {
  return (
    <section className="flex gap-5">
      <Link scroll={false} href={{ pathname: "/", query: { sort: "latest" } }}>
        <Chip active={sort === "latest"} text="최신순" />
      </Link>
      <Link scroll={false} href={{ pathname: "/", query: { sort: "like" } }}>
        <Chip active={sort === "like"} text="좋아요" />
      </Link>
    </section>
  );
};

export default ChipSection;
