import React from "react";

const LoadingPost = () => {
  return (
    <div className="flex w-full flex-col gap-3 border-gray-800 pb-5 sm:border-b 2xl:w-[30rem]">
      <div className="flex items-center gap-3 px-2 sm:px-0">
        <div className="h-10 w-10 animate-pulse rounded-full bg-gray-400"></div>
        <div className="flex flex-col gap-1">
          <div className="h-3 w-20 animate-pulse rounded-sm bg-gray-400"></div>
          <div className="h-3 w-10 animate-pulse rounded-sm bg-gray-400"></div>
        </div>
      </div>
      <div className="h-80 w-full animate-pulse rounded-lg bg-gray-800"></div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
        <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
        <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
        <div className="ml-auto h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-3 w-60 animate-pulse rounded-sm bg-gray-400"></div>
        <div className="h-3 w-20 animate-pulse rounded-sm bg-gray-400"></div>
      </div>
    </div>
  );
};

export default LoadingPost;
