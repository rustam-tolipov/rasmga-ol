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
import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import LoadingNavigation from "../features/loading/LoadingNavigation";

const AppLayout = () => {
  return (
    <div className="grid h-screen w-full select-none grid-cols-1 text-slate-50 sm:grid-cols-[4.5rem_auto] xl:grid-cols-[16dvw_auto] 2xl:grid-cols-[13vw_auto]">
      <div className="hidden sm:block"></div>
      <Sidebar />
      <main className="overflow-scroll px-0 py-0 pt-0">
        <Outlet />
      </main>

      <div className="h-12 sm:hidden"></div>
      <Navigation />
    </div>
  );
};

export default AppLayout;

const Navigation = () => {
  const { currentUserLoading, currentUser } = useCurrentUser();

  if (currentUserLoading) {
    return <LoadingNavigation />;
  }

  return (
    <div className="z-30 block sm:hidden">
      <div className="fixed bottom-0 left-0 h-12  w-full border-t border-slate-800 bg-[#121212]">
        <div className="flex h-full items-center justify-around">
          <LinkItem icon={<HiOutlineHome className="text-3xl" />} to="/" />
          <LinkItem
            icon={<HiMagnifyingGlass className="text-3xl" />}
            to="/search"
          />
          <LinkItem icon={<HiOutlineFilm className="text-3xl" />} to="/reels" />
          <LinkItem
            icon={<HiOutlineHeart className="text-3xl" />}
            to="/notifications"
          />
          <LinkItem
            icon={
              currentUser?.avatar ? (
                <div className="h-8 w-8 overflow-hidden rounded-full">
                  <img
                    src={currentUser?.avatar}
                    alt="profile"
                    className="h-full w-full"
                  />
                </div>
              ) : (
                <HiUserCircle className="text-3xl" />
              )
            }
            to={`/profile/${currentUser?.username}`}
          />
        </div>
      </div>
    </div>
  );
};

const LinkItem = ({ icon, to }) => {
  return (
    <NavLink to={to} className="flex items-center gap-4 text-xl">
      {icon}
    </NavLink>
  );
};
