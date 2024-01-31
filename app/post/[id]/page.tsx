import CardDetail from "@/component/card-detail";
import ActionSection from "@/section/post/action-section";

interface PropType {
  params: { id: string };
}

const Post = ({ params }: PropType) => {
  const large = "lg:w-[1024px]";
  const medium = "md:w-full";
  const small = "sm:w-[320px]";

  return (
    <main className="bg-almost-white min-h-screen px-12 py-16 flex justify-center">
      <div
        className={`flex flex-col items-center gap-20  ${large} ${medium} ${small}`}
      >
        <CardDetail
          data={{
            id: Number(params.id),
            author: "nayounsang",
            description:
              "hellodl fkldsfjksdflkjdsfjlkdfslkjdsflkjdsflkjdfslkjdfsljk world",
            url: "https://github.com/nayounsang/FEStudyThon",
          }}
        />
        <ActionSection id={Number(params.id)} />
      </div>
    </main>
  );
};

export default Post;
