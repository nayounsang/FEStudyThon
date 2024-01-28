import Image from "next/image";

interface PropType {
  width: number;
  height: number;
}

const HamburgerIcon = ({ width, height }: PropType) => {
  return (
    <Image src="/icon/hamburger.svg" alt="Menu" width={width} height={height} />
  );
};

export default HamburgerIcon;
