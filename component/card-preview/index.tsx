import { CardDataType } from "@/type/card.type";
import Author from "../atom/author";
import LinkPreview from "./link-preview";
import CardPreviewContainer from "./container/card-preview-container";
import DescriptionPreview from "./description-preview";
import { Suspense } from "react";
import CardPreviewSkeleton from "./skeleton";
import Link from "next/link";

interface PropType {
  data: CardDataType;
}

const CardPreview = ({ data }: PropType) => {
  return (
    <Suspense fallback={<CardPreviewSkeleton />}>
      <CardPreviewContainer>
        <LinkPreview url={data.url} />
        <Link href={`/`}>
          <div className="border-t-2 hover:text-indigo-800 hover:border-indigo-700 ">
            <Author text={data.author} />
            <DescriptionPreview text={data.description} />
          </div>
        </Link>
      </CardPreviewContainer>
    </Suspense>
  );
};

export default CardPreview;
