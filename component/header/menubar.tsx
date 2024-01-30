import Link from "next/link";

const data: { name: string; url: string; id: number }[] = [
  { name: "작성하기", url: "/write", id: 0 },
  { name: "이번 주", url: "/", id: 1 },
  { name: "이전 스터디", url: "/", id: 2 },
];

const MenuBar = () => {
  return (
    <div className="justify-around text-lg gap-11 hidden md:flex">
      {data.map((e) => (
        <Link href={e.url} key={e.id} className=" hover:bg-gray-100 rounded-md px-4">
          {e.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
