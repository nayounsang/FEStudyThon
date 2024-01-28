import { BigTitle, H1, Sub1 } from "../typography";

interface PropType {
  content: string;
  description?: string;
}

const WeeklyArticle = ({ content, description = "" }: PropType) => {
  return (
    <div className="flex flex-col gap-2">
      <BigTitle text="이번주 주제" />
      <H1>{content}</H1>
      <Sub1>{description}</Sub1>
    </div>
  );
};

export default WeeklyArticle;
