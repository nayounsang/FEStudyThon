interface PropType {
  text?: string;
}

const DescriptionDetail = ({ text = "" }: PropType) => {
  return (
    <p className="max-h-full text-gray-700 max-w-full break-all">
      {text === "" ? "요약이 없습니다." : text}
    </p>
  );
};

export default DescriptionDetail;
