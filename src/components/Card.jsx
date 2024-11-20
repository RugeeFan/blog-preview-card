import React, { memo } from "react";

const Card = memo(() => {
  return (
    <div className="group h-[522px] w-[384px] border border-black rounded-[20px] bg-white p-[24px] shadow-card relative max-lg:w-[327px] hover:shadow-card-hover
    transition-all
    duration-1000 ">
      <img
        src="/assets/images/illustration-article.svg"
        alt="Article Illustration"
        className="mb-6 rounded-[10px]"
      />
      <div className="w-full h-[194px] flex flex-col gap-2">
        <div className="bg-yellow font-figtree w-[82px] h-[29px] flex justify-center items-center">
          <div className="font-extrabold text-[14px]">Learning</div>
        </div>
        <div className="text-preset-3">Published 21 Dec 2023</div>
        <div
          className="text-preset-1 font-extrabold text-black transition-colors duration-1000 group-hover:text-yellow"
        >
          HTML & CSS foundations
        </div>
        <div className="text-preset-2 text-gray-500 text-[16px]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </div>
      </div>
      <div className="flex justify-start items-center gap-3 mt-5 max-lg:mt-12">
        <img
          src="/assets/images/image-avatar.webp"
          alt="avatar"
          className="w-[32px] h-[32px]"
        />
        <div className="text-preset-3 font-bold">Greg Hooper</div>
      </div>
    </div>
  );
});

export default Card;
