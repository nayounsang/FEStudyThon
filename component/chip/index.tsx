"use client";
import { MouseEventHandler } from "react";

interface PropType {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active: boolean;
}

const Chip = ({ text, active, onClick = () => {} }: PropType) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? "bg-indigo-600 hover:bg-indigo-500"
          : "bg-gray-300 hover:bg-gray-200"
      } text-white px-4 py-1 text-base w-fit rounded-full min-w-[60px]`}
    >
      {text}
    </button>
  );
};

export default Chip;
