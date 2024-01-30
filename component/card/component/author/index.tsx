interface PropType {
  text: string;
}

const Author = ({ text }: PropType) => {
  return (
    <p className="text-base text-black line-limit-1 min-h-[1rem] font-bold max-w-full">
      {text}
    </p>
  );
};

export default Author;
