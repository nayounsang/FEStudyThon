interface PropType {
  text?: string;
}

const DescriptionPreview = ({ text = "" }: PropType) => {
  return (
    <p className=" text-gray-700 line-clamp-4 text-sm min-h-[40px] w-full">
      {text === "" ? "요약이 없습니다." : text}
    </p>
  );
};

export default DescriptionPreview;
