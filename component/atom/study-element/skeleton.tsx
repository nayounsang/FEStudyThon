import PulseDiv from "../pulse-div";

const StudyElementSkeleton = () => {
  return (
    <div className="bg-white px-4 py-4 border-b-2 list-none w-full max-w-[768px] border-gray-300">
      <div className="h-[0.875rem] mb-[0.35rem] md:h-[1rem] md:mb-[0.5rem] w-[40%]">
        <PulseDiv />
      </div>
      <div className="h-[0.75rem] mb-[0.25rem] md:h-[0.875rem] md:mb-[0.35rem] w-[90%]">
        <PulseDiv />
      </div>
    </div>
  );
};

export default StudyElementSkeleton;
