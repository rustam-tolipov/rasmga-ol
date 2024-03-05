import React from "react";
import LoadingMedia from "./LoadingMedia";
import TopHeader from "../../ui/TopHeader";
import { NavLink } from "react-router-dom";
import { HiMiniCog6Tooth, HiOutlineUserPlus } from "react-icons/hi2";

const LoadingProfile = () => {
  return (
    <div className="flex flex-col xl:items-center xl:justify-center">
      <TopHeader>
        <NavLink to="/account/settings">
          <HiMiniCog6Tooth className="mr-auto text-2xl" />
        </NavLink>
        <h1 className="w-full text-center text-xl">User</h1>
        <HiOutlineUserPlus className="text-2xl" />
      </TopHeader>
      <LoadingHeader />
    </div>
  );
};

export const LoadingProfilePosts = () => {
  return (
    <div className="flex flex-col xl:w-[70dvw]">
      <div className="grid w-full grid-cols-3 gap-1">
        {Array.from({ length: 12 }, (_, index) => (
          <LoadingMedia key={index} />
        ))}
      </div>
    </div>
  );
};

const LoadingHeader = () => {
  return (
    <div className="mt-12 flex w-full items-center justify-between px-4 py-4 md:mt-0 md:h-[40dvh] md:justify-start xl:w-[70dvw]">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full md:m-24 md:h-48 md:w-48">
        <div className="h-full w-full animate-pulse bg-slate-300"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="mr-auto flex items-center gap-4 md:mr-0">
            <div className="h-8 w-8 animate-pulse rounded-full bg-slate-300"></div>
            <div className="h-8 w-8 animate-pulse rounded-full bg-slate-300"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-24 animate-pulse rounded-lg bg-slate-300"></div>
          </div>
        </div>

        <div className="hidden gap-6 md:flex">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-slate-300"></div>
          <div className="h-8 w-24 animate-pulse rounded-lg bg-slate-300"></div>
          <div className="h-8 w-24 animate-pulse rounded-lg bg-slate-300"></div>
        </div>

        <div className="flex flex-col">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-slate-300"></div>
          <div className="h-8 w-24 animate-pulse rounded-lg bg-slate-300"></div>
          <div className="h-8 w-24 animate-pulse rounded-lg bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProfile;
