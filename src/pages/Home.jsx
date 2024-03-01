import React from "react";
import { HiCamera, HiOutlinePlusCircle } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import Posts from "../features/posts/Posts";
import { NavLink } from "react-router-dom";
import Suggestions from "../features/home/Suggestions";
import Highlights from "../features/home/Highlights";

const Home = () => {
  return (
    <>
      <TopHeader>
        <HiCamera className="text-3xl xl:hidden" />
        <NavLink to="/create" className="ml-auto cursor-pointer">
          <HiOutlinePlusCircle className="text-3xl" />
        </NavLink>
      </TopHeader>
      <div className="mt-12 grid grid-cols-1 gap-28 sm:mt-0 md:pt-4 lg:grid-cols-[63%_auto] xl:px-16 xl:pr-28">
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
