import Image from "next/image";

interface PropType {
  width: number;
  height: number;
}

export const HeartEmptyIcon = ({ width, height }: PropType) => {
  return (
    <Image
      src="/icon/heart-empty.svg"
      alt="heart"
      width={width}
      height={height}
    />
  );
};

export const HeartFilledIcon = ({ width, height }: PropType) => {
  return (
    <Image
      src="/icon/heart-filled.svg"
      alt="next"
      width={width}
      height={height}
    />
  );
};
