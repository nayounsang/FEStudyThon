"use client";

import { HeartEmptyIcon, HeartFilledIcon } from "@/component/atom/icon/heart";
import { useState } from "react";

interface PropType {
  id: number;
}

const ActionSection = ({ id }: PropType) => {
  const [state, setState] = useState<Boolean>(false);

  return (
    <section className="w-full">
      <label className="flex gap-2 items-center cursor-pointer text-lg w-fit px-2 rounded-md hover:bg-gray-100">
        <button
          onClick={() => {
            setState(!state);
          }}
          name="like"
        >
          {state ? (
            <HeartFilledIcon width={18} height={18} />
          ) : (
            <HeartEmptyIcon width={18} height={18} />
          )}
        </button>
        좋아요
      </label>
    </section>
  );
};

export default ActionSection;
