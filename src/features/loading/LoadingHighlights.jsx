import React from "react";

const LoadingHighlights = () => {
  return (
    <div className="flex gap-4 overflow-scroll whitespace-nowrap border-b border-gray-600 px-4 py-4 scrollbar-hide sm:border-none sm:px-4 sm:pb-0 xl:w-[45rem]">
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className="h-16 w-16 min-w-16 animate-pulse rounded-[50%] border border-gray-50 p-1"
        >
          <div className="h-full w-full animate-pulse rounded-[50%] bg-gray-400"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingHighlights;
