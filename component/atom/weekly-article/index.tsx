import { BigTitle, H1, Sub1 } from "../../typography";

interface PropType {
  content: string;
}

const WeeklyArticle = ({ content}: PropType) => {
  return (
    <div className="flex flex-col gap-2">
      <BigTitle text="이번주 스터디" />
      <Sub1>{content}</Sub1>
    </div>
  );
};

export default WeeklyArticle;
