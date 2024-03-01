import React from "react";
import {
  HiMiniEllipsisHorizontal,
  HiMiniPlay,
  HiMiniSpeakerWave,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

const LoadingReel = () => {
  return (
    <div className="flex w-full animate-pulse flex-col border xl:w-[30dvw]">
      <div className="relative h-[93dvh] w-full bg-slate-300">
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
          <HiMiniPlay className="text-8xl text-white" />
        </div>

        <HiMiniSpeakerWave className="absolute right-4 top-4 text-2xl text-white" />

        <div className="absolute bottom-4 flex w-full flex-col items-end gap-8 px-4 pb-2">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 animate-pulse rounded-full bg-slate-300"></div>
              <span className="text-xs">0</span>
            </div>
            <div className="flex flex-col items-center">
              <HiOutlineChatBubbleOvalLeft className="text-2xl" />
              <span className="text-xs">0</span>
            </div>
            <HiOutlinePaperAirplane className="text-2xl" />
          </div>

          <div className="flex w-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 animate-pulse rounded-full bg-slate-300"></div>
                <h3 className="text-sm font-semibold">username</h3>
                <span className="text-2xl text-gray-400">·</span>
                <button className="text-sm text-gray-400">Follow</button>
              </div>

              <div className="text-sm">
                <div className="h-4 w-24 animate-pulse rounded-lg bg-slate-900"></div>
              </div>
            </div>

            <HiMiniEllipsisHorizontal className="ml-auto text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingReels = () => {
  return (
    <div className="flex flex-col items-center xl:gap-8 xl:py-4">
      {Array.from({ length: 12 }, (_, index) => (
        <LoadingReel key={index} />
      ))}
    </div>
  );
};

export default LoadingReels;
