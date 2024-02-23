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
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/apiPosts";

const Search = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

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
        {posts?.map((post, i) => (
          <LoadMedia media={post.image?.url} i={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Search;

const LoadMedia = ({ media, i }) => {
  if (media.includes("video")) {
    return (
      <video
        src={media}
        className={
          i % 7 === 2
            ? "row-span-2 h-64 w-full object-cover"
            : "h-32 w-full object-cover"
        }
      ></video>
    );
  }
  return (
    <img
      src={media}
      alt="post"
      className={
        i % 7 === 2
          ? "h-64 row-span-2 w-full object-cover"
          : "h-32 w-full object-cover"
      }
    />
  );
};
