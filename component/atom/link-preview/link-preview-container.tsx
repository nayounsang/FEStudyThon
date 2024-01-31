import { ReactNode } from "react";

const LinkPreviewContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="h-[220px] sm:h-[250px] w-full max-w-[320px] box-border mb-4 rounded-2xl">
      {children}
    </div>
  );
};

export default LinkPreviewContainer;
