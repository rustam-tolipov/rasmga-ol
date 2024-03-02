import React from "react";

const LoadingItem = () => {
  return (
    <li className="flex items-center gap-4 rounded-md px-2 py-2 duration-500 hover:bg-[#1f1e1e]">
      <div className="h-8 w-8 animate-pulse rounded-full bg-gray-400"></div>
      <div className="h-4 w-16 animate-pulse rounded-md bg-gray-400 hidden xl:block"></div>
    </li>
  );
};

export default LoadingItem;
