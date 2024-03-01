import React from "react";

const LoadingNavigation = () => {
  return (
    <div className="z-30 block sm:hidden">
      <div className="fixed bottom-0 left-0 h-12  w-full border-t border-slate-800 bg-[#121212]">
        <div className="flex h-full items-center justify-around">
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingNavigation;
