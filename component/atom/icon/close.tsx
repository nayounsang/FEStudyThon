import Image from "next/image";

interface PropType {
  width: number;
  height: number;
}

const CloseIcon = ({ width, height }: PropType) => {
  return (
    <Image src="/icon/close.svg" alt="Menu" width={width} height={height} />
  );
};

export default CloseIcon
