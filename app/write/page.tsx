"use client";
import { inputClass } from "@/component/input";
import { Body1, Sub1 } from "@/component/typography";

const Write = () => {
  return (
    <main className="bg-almost-white flex flex-col items-center gap-20 h-screen">
      <form className="w-full px-6 md:px-14 py-8 h-full md:w-[768px] bg-white flex flex-col gap-14">
        <div>
          <Sub1>주제</Sub1>
          <Body1>이번주 스터디 제목</Body1>
        </div>
        <label>
          <Body1>
            링크<span className=" text-indigo-700">*</span>
          </Body1>
          <input
            className={inputClass}
            required
            placeholder="공부 내용을 담은 링크를 공유해주세요."
          />
        </label>
        <label>
          <Body1>요약</Body1>
          <textarea
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="간단한 요약을 작성해주세요."
          />
        </label>
        <button
          type="submit"
          className="rounded-lg text-white px-4 py-1 self-end bg-indigo-600 hover:bg-indigo-500 w-[120px]"
        >
          작성하기
        </button>
      </form>
    </main>
  );
};

export default Write;
