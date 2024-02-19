import React from "react";
import { HiCamera, HiOutlinePlusCircle } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import Posts from "../ui/Posts";

const Home = () => {
  return (
    <>
      <TopHeader>
        <HiCamera className="text-3xl xl:hidden" />
        <HiOutlinePlusCircle className="ml-auto text-3xl" />
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

const Highlights = () => {
  return (
    <div className="flex gap-4 overflow-scroll whitespace-nowrap border-b border-gray-600 py-4 scrollbar-hide sm:border-none sm:px-4 sm:pb-0 xl:w-[45rem]">
      {Array.from({ length: 12 }).map((_, index) => (
        <Highlight key={index} />
      ))}
    </div>
  );
};

const Highlight = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-16 w-16 rounded-[50%] border border-gray-50 object-cover p-1">
        <img
          src={`https://randomuser.me/api/portraits/men/${Math.floor(
            Math.random() * 100,
          )}.jpg`}
          alt="profile"
          className="h-full w-full rounded-[50%]"
        />
      </div>
      <h3 className="text-xs">username</h3>
    </div>
  );
};

const Suggestions = () => {
  return (
    <div className="hidden h-full flex-col gap-5 pt-8 lg:flex 2xl:w-[50%]">
      <Suggestion />

      <div className="flex items-center justify-between text-gray-400">
        <h3 className="text-sm font-semibold">Suggested For You</h3>
        <span className="text-xs">See All</span>
      </div>
      <div className="flex flex-col gap-4 pl-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Suggestion key={index} />
        ))}
      </div>

      <div className="pt-6 text-start text-xs text-gray-600">
        About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top
        Accounts . Hashtags . Language . English
        <br />
        <br />
        &copy; 2024 RasmgaOl. All rights reserved.
      </div>
    </div>
  );
};

const Suggestion = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-[50%]">
        <img
          src={`https://randomuser.me/api/portraits/men/${Math.floor(
            Math.random() * 100,
          )}.jpg`}
          alt="profile"
          className="h-full w-full rounded-[50%] object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold">username</h3>
        <span className="text-xs text-gray-400">Follows you</span>
      </div>
      <button className="ml-auto text-sm font-semibold text-blue-500">
        Follow
      </button>
    </div>
  );
};
