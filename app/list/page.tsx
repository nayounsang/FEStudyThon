import Hero from "@/component/atom/hero";
import StudyElement from "@/component/atom/study-element";
import StudyListSection from "@/section/list/study-list-section";


const List = () => {
  // TODO: 무한스크롤로
  return (
    <main className="bg-almost-white min-h-screen px-6 py-8 flex flex-col gap-20">
      <Hero title="스터디 목록" content="지금까지 한 스터디들" />
      <StudyListSection/>
    </main>
  );
};

export default List;
