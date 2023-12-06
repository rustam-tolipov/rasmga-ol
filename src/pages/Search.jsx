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

const Search = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 flex items-center gap-1 rounded-lg border p-1 px-2">
        <HiMagnifyingGlass className="text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm text-slate-50 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-3 border-t border-slate-600 p-1">
        {Array(120)
          .fill()
          .map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/${Math.floor(
                Math.random() * 100,
              )}/800/600`}
              alt="post"
              className="h-32 w-full object-cover"
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
