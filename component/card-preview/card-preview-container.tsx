import { ReactNode } from "react";

const CardPreviewContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      className={`w-[250px] sm:w-[320px] h-[372px] bg-white`}
    >
      {children}
    </div>
  );
};

export default CardPreviewContainer;
