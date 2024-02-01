import Link from "next/link";

interface PropType {
  title: string;
  description: string;
  id: string;
}

const StudyElement = ({ id, title, description }: PropType) => {
  return (
    <Link
      href={`/study/${id}`}
      className="bg-white px-4 py-4 border-b-2 list-none w-full max-w-[768px] border-gray-300"
    >
      <p className=" text-sm md:text-base">{title}</p>
      <p className=" text-xs md:text-sm font-thin text-gray-900">
        {description}
      </p>
    </Link>
  );
};

export default StudyElement;
