import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";

interface PropType {
  cur: string;
  value: string;
  pathname?: string;
  query?: string | ParsedUrlQueryInput | null | undefined;
}

const PageButton = ({ cur, value, pathname = "/", query = {} }: PropType) => {
  const className =
    cur === value
      ? "rounded-full bg-indigo-700 text-white"
      : "text-gray-500 hover:rounded-full hover:bg-gray-100";

  return (
    <Link href={{ pathname: pathname, query: query }} scroll={false}>
      <button
        name={value}
        className={`w-[2.5rem] h-[2.5rem] ${className}`}
        disabled={cur === value}
      >
        {value}
      </button>
    </Link>
  );
};

export default PageButton;
