import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";

const Likes = () => {
  return (
    <div className="flex flex-col gap-3">
      <TopHeader>
        <HiMiniXMark className="mr-auto text-4xl" />
        <h1 className="w-full text-center text-xl">Likes</h1>
      </TopHeader>

      <div className="mt-12 flex flex-col gap-6 px-4 pb-3 sm:mt-0">
        {Array.from({ length: 12 }).map((_, index) => (
          <Like key={index} />
        ))}
      </div>
    </div>
  );
};

export default Likes;

const Like = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-[2.8rem] w-[2.8rem] rounded-[50%]">
        <img
          src={`https://randomuser.me/api/portraits/men/${Math.floor(
            Math.random() * 100,
          )}.jpg`}
          alt="profile"
          className="h-full w-full rounded-[50%]"
        />
      </div>
      <h3 className="text-sm font-semibold">username</h3>

      <button className="text-md ml-auto rounded-lg bg-blue-500 px-4 py-1 text-gray-50">
        Follow
      </button>
    </div>
  );
};
