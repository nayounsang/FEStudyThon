import Link from "next/link";
import Chip from "../atom/chip";

interface PropType {
  sort: "like" | "latest";
  baseURL?: string;
}

const SortChips = ({ sort, baseURL = "/" }: PropType) => {
  return (
    <div className="flex gap-5">
      <Link
        scroll={false}
        href={{ pathname: baseURL, query: { sort: "latest" } }}
      >
        <Chip active={sort === "latest"} text="최신순" />
      </Link>
      <Link
        scroll={false}
        href={{ pathname: baseURL, query: { sort: "like" } }}
      >
        <Chip active={sort === "like"} text="좋아요" />
      </Link>
    </div>
  );
};

export default SortChips;
