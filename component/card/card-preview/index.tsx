import { CardDataType } from "@/type/card.type";
import Author from "../component/author";
import LinkPreview from "../component/link-preview";
import CardPreviewContainer from "../component/container/card-preview-container";
import DescriptionPreview from "../component/description-preview";
import { Suspense } from "react";
import CardPreviewSkeleton from "./skeleton";

interface PropType {
  data: CardDataType;
}

const CardPreview = ({ data }: PropType) => {
  return (
    <Suspense fallback={<CardPreviewSkeleton />}>
      <CardPreviewContainer>
        <LinkPreview url={data.url} />
        <div className="cursor-pointer border-t-2 hover:text-indigo-800 hover:border-indigo-700 ">
          <Author text={data.author} />
          <DescriptionPreview text={data.description} />
        </div>
      </CardPreviewContainer>
    </Suspense>
  );
};

export default CardPreview;
