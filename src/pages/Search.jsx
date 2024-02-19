import React from "react";
import {
  HiOutlineHome,
  HiMagnifyingGlass,
  HiOutlineFilm,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiBars3,
  HiUserCircle,
} from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";

const Search = () => {
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

      <div className="mt-12 grid grid-cols-3 border-t border-slate-600 p-8 sm:mt-0 xl:w-[70dvw]">
        {Array(120)
          .fill()
          .map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/${Math.floor(
                Math.random() * 100,
              )}/800/600`}
              alt="post"
              className={
                i % 7 === 2
                  ? "row-span-2 h-full w-full object-cover"
                  : "h-full w-full object-cover"
              }
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
