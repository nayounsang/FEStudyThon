import Hero from "@/component/atom/hero";
import PagiNation from "@/component/pagination";
import CardListSection from "@/section/study/card-list-section";

interface PropType {
  params: { id: string };
  searchParams: { sort?: "latest" | "like"; page?: string };
}

const Study = ({ params, searchParams }: PropType) => {
  const sort: "latest" | "like" = searchParams.sort || "latest";
  const page: string = searchParams.page || "1";

  return (
    <main className="bg-almost-white min-h-screen py-16 px-12 flex flex-col items-center gap-20">
      <Hero title="이번주 스터디" content="스터디주제에 대한 설명" />
      <CardListSection sort={sort} studyId={params.id} />
      <PagiNation
        cur={page}
        pathname={`/study/${params.id}`}
        query={{ sort: sort, page: page }}
      />
    </main>
  );
};

export default Study;
