import { CardDataType } from "@/type/card.type";
import CardDetailContainer from "./card-detail-container";
import LinkPreview from "../atom/link-preview";
import Author from "../atom/author";
import DescriptionDetail from "./descrption-detail";
import { Sub1 } from "../typography";

interface PropType {
  data: CardDataType;
}

const CardDetail = ({ data }: PropType) => {
  return (
    <CardDetailContainer>
      <LinkPreview url={data.url} />
      <div className="max-h-full flex-1 flex flex-col gap-8">
        <div>
          <Sub1>작성자</Sub1>
          <Author text={data.author} />
        </div>
        <div>
          <Sub1>요약</Sub1>
          <DescriptionDetail text={data.description} />
        </div>
      </div>
    </CardDetailContainer>
  );
};

export default CardDetail;
