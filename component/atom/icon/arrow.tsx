import Image from "next/image";

interface PropType {
  width: number;
  height: number;
}

export const ArrowNextIcon = ({ width, height }: PropType) => {
  return (
    <Image
      src="/icon/arrow-next.svg"
      alt="next"
      width={width}
      height={height}
    />
  );
};

export const ArrowPrevIcon = ({ width, height }: PropType) => {
  return (
    <Image
      src="/icon/arrow-prev.svg"
      alt="prev"
      width={width}
      height={height}
    />
  );
};
