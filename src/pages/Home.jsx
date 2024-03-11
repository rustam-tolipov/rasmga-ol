import React from "react";
import { HiCamera, HiOutlineHeart, HiOutlinePlusCircle } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import Posts from "../features/posts/Posts";
import { NavLink } from "react-router-dom";
import Suggestions from "../features/home/Suggestions";
import Highlights from "../features/home/Highlights";

const Home = () => {
  return (
    <>
      <TopHeader go="/">
        <div className="flex w-full">
          <HiCamera className="text-3xl xl:hidden" />
          <div className="ml-auto flex items-center gap-1">
            <NavLink to="/create" className="cursor-pointer">
              <HiOutlinePlusCircle className="text-3xl" />
            </NavLink>
            <NavLink to="/notifications" className="cursor-pointer">
              <HiOutlineHeart className="text-3xl" />
            </NavLink>
          </div>
        </div>
      </TopHeader>

      <div className="h-[6dvh] sm:hidden"></div>

      <div className="grid grid-cols-1 gap-28 sm:mt-0 md:pt-4 xl:grid-cols-[63%_auto] xl:px-16 xl:pr-28">
        <div className="flex flex-col gap-6 2xl:ml-auto">
          <Highlights />
          <Posts />
        </div>
        <Suggestions className="" />
      </div>
    </>
  );
};

export default Home;
