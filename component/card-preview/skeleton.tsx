import PulseDiv from "@/component/atom/pulse-div";
import CardPreviewContainer from "./container/card-preview-container";
import LinkPreviewContainer from "./container/link-preview-container";

const CardPreviewSkeleton = () => {
  return (
    <CardPreviewContainer>
      <LinkPreviewContainer>
        <PulseDiv />
      </LinkPreviewContainer>
      <div className="h-[1rem] w-[5rem] mb-[0.5rem]">
        <PulseDiv />
      </div>
      <div className="flex flex-col gap-[0.25rem]">
        <div className="h-[0.875rem] w-full">
          <PulseDiv />
        </div>
        <div className="h-[0.875rem] w-full">
          <PulseDiv />
        </div>
      </div>
    </CardPreviewContainer>
  );
};

export default CardPreviewSkeleton;
