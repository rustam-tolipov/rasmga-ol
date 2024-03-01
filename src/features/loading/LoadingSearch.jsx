import React from "react";
import TopHeader from "../../ui/TopHeader";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LoadingMedia from "./LoadingMedia";

const LoadingSearch = () => {
  return (
    <div className="flex flex-col xl:items-center">
      <TopHeader>
        <HiMagnifyingGlass className="text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm text-slate-50 focus:outline-none"
        />
      </TopHeader>

      <div className="mt-12 grid grid-cols-3 gap-1 sm:mt-0 xl:w-[70dvw]">
        {Array(12)
          .fill()
          .map((_, index) => (
            <LoadingMedia key={index} />
          ))}
      </div>
    </div>
  );
};

export default LoadingSearch;
