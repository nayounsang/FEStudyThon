import getOgTags from "@/util/getOgTags";
import LinkPreviewContainer from "../container/link-preview-container";
import Image from "next/image";
import Link from "next/link";
import LinkPreviewText from "./link-preview-text";

interface PropType {
  url: string;
}

const LinkPreview = async ({ url }: PropType) => {
  const ogTags = await getOgTags(url);

  return (
    <LinkPreviewContainer>
      <div
        className={`shadow 
        cursor-pointer 
        w-full h-full 
        border-2 border-gray-200
         hover:border-indigo-900
         text-xs font-extralight text-slate-600`}
      >
        <Link href={url}>
          <Image
            alt={ogTags.title}
            src={ogTags.image}
            width={316}
            height={147}
            priority
            className="h-[60%] w-auto mx-auto"
          />
          <LinkPreviewText ogTags={ogTags} />
        </Link>
      </div>
    </LinkPreviewContainer>
  );
};

export default LinkPreview;
