import { ReactNode } from "react";

const CardDetailContainer = ({ children }: { children?: ReactNode }) => {
 
  const large = "";
  const medium = "md:flex-row md:gap-10 md:h-[250px]";
  const small = "";

  return (
    <div className={`flex flex-col ${large} ${medium} ${small} w-full h-[500px]`}>
      {children}
    </div>
  );
};

export default CardDetailContainer;
