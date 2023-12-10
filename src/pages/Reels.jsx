import React from "react";
import {
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePaperAirplane,
  HiOutlineBookmark,
  HiMiniEllipsisHorizontal,
} from "react-icons/hi2";

const Reels = () => {
  return (
    <div className="flex flex-col items-center xl:gap-4 xl:py-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Reel key={index} />
      ))}
    </div>
  );
};

export default Reels;

const Reel = () => {
  return (
    <div className="relative h-[92dvh] xl:w-[30dvw]">
      <img
        src={`https://picsum.photos/seed/${Math.floor(
          Math.random() * 100,
        )}/800/600`}
        alt="post"
        className="h-full w-full object-cover xl:rounded-md"
      />

      <div className="absolute bottom-0 flex w-full flex-col items-end gap-8 px-4 pb-2">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <HiOutlineHeart className="text-2xl" />
            <span className="text-xs">{Math.floor(Math.random() * 100)}k</span>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineChatBubbleOvalLeft className="text-2xl" />
            <span className="text-xs">{Math.floor(Math.random() * 100)}</span>
          </div>
          <HiOutlinePaperAirplane className="text-2xl" />
        </div>

        <div className="flex w-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-[2.4rem] w-[2.5rem] rounded-[50%]">
                <img
                  src={`https://randomuser.me/api/portraits/men/${Math.floor(
                    Math.random() * 100,
                  )}.jpg`}
                  alt="profile"
                  className="h-full w-full rounded-[50%] object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold">username</h3>
              <span className="text-2xl text-gray-400">·</span>
              <button className="text-sm text-gray-400">Follow</button>
            </div>

            <div className="text-sm">
              lorem ipsum dolor sit amet, consectetur{" "}
              <span className="text-sm text-gray-400">...more</span>
            </div>
          </div>

          <HiMiniEllipsisHorizontal className="ml-auto text-xl" />
        </div>
      </div>
    </div>
  );
};
