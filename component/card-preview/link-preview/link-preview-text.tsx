import { OgTagType } from "@/type/ogtag.type";

interface PropType {
  ogTags: OgTagType;
}

const LinkPreviewText = ({ ogTags }: PropType) => {
  return (
    <div className="max-w-full px-2 py-1">
      <p className="line-limit-1 min-h-[1rem]">{ogTags.siteName}</p>
      <p className="text-sm font-normal text-black line-limit-1 min-h-[1.5rem]">
        {ogTags.title}
      </p>
      <p className="line-clamp-2">{ogTags.description}</p>
    </div>
  );
};

export default LinkPreviewText;
