import { ParsedUrlQueryInput } from "querystring";
import PageButton from "../atom/page-button";

interface PropType {
  cur: string;
  pathname?: string;
  query?: ParsedUrlQueryInput;
}

const PagiNation = ({ cur, pathname = "/", query = {} }: PropType) => {
  const curNum = Number(cur);
  const basePage = curNum - ((curNum - 1) % 5); // 5*x + 1
  const pageNumArr = [0, 1, 2, 3, 4].map((e) => String(basePage + e));
  return (
    <div className="flex gap-5 w-full justify-center">
      {pageNumArr.map((e, i) => (
        <PageButton
          key={i}
          cur={cur}
          value={e}
          pathname={pathname}
          query={{ ...query, page: e }}
        />
      ))}
    </div>
  );
};

export default PagiNation;
