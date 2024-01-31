import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";
import { ReactNode } from "react";
import { ArrowNextIcon, ArrowPrevIcon } from "../icon/arrow";

interface PropType {
  cur: string;
  value: string;
  pathname?: string;
  query?: string | ParsedUrlQueryInput | null | undefined;
  isNextButton?: boolean;
  isPrevButton?: boolean;
}

const getNode = (param: {
  isNextButton?: boolean;
  isPrevButton?: boolean;
  value: string;
}): ReactNode => {
  if (param.isNextButton) {
    return <ArrowNextIcon width={100} height={100} />;
  }
  if (param.isPrevButton) {
    return <ArrowPrevIcon width={100} height={100} />;
  }
  return param.value;
};

const PageButton = ({
  cur,
  value,
  pathname = "/",
  query = {},
  isNextButton,
  isPrevButton,
}: PropType) => {
  const className =
    cur === value
      ? "bg-indigo-700 text-white"
      : "text-gray-500 hover:bg-gray-100 disabled:bg-transparent";

  return (
    <Link href={{ pathname: pathname, query: query }} scroll={false}>
      <button
        name={value}
        className={`w-[2.5rem] h-[2.5rem] rounded-full ${className} text-base`}
        disabled={cur === value || Number(value) <= 0}
      >
        {getNode({
          value: value,
          isNextButton: isNextButton,
          isPrevButton: isPrevButton,
        })}
      </button>
    </Link>
  );
};

export default PageButton;
