import Hero from "@/component/hero";
import ChipSection from "@/section/home/chip-section";
import MiddleSection from "@/section/home/middle-section";

interface PropType {
  searchParams: { sort?: "latest" | "like" };
}

export default function Home({ searchParams }: PropType) {
  const sort = searchParams.sort || "latest";

  return (
    <main className="bg-almost-white min-h-screen py-16 px-12 flex flex-col align-middle gap-20">
      <Hero
        title="꾸준히 프론트엔드 공부해요"
        content="매주 쌓이는 나의 지식"
      />
      <MiddleSection />
      <section className="md:px-20">
        <ChipSection sort={sort} />
      </section>
    </main>
  );
}
