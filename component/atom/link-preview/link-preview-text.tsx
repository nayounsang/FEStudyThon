import { OgTagType } from "@/type/ogtag.type";

interface PropType {
  ogTags: OgTagType;
}

const LinkPreviewText = ({ ogTags }: PropType) => {
  return (
    <div className="max-w-full px-2 py-1">
      <p className="line-limit-1">
        {ogTags.siteName !== "" ? ogTags.siteName : "사이트명이 없습니다."}
      </p>
      <p className="text-sm font-normal text-black line-limit-1 min-h-[1.5rem]">
        {ogTags.title !== "" ? ogTags.title : "제목이 없습니다."}
      </p>
      <p className="line-clamp-2">
        {ogTags.description !== "" ? ogTags.description : "설명이 없습니다."}
      </p>
    </div>
  );
};

export default LinkPreviewText;
