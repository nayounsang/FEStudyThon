import { BigTitle, Sub1 } from "../../typography";

interface PropType {
  title: string;
  content?: string;
}

const Hero = ({ title, content = "" }: PropType) => {
  return (
    <div className="flex flex-col align-middle w-fit self-center">
      <BigTitle text={title} />
      <Sub1>{content}</Sub1>
    </div>
  );
};

export default Hero;
