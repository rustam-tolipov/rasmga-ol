import React from "react";
import {
  HiOutlineHome,
  HiMagnifyingGlass,
  HiOutlineFilm,
  HiOutlineHeart,
  HiUserCircle,
} from "react-icons/hi2";
import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import LoadingNavigation from "../features/loading/LoadingNavigation";
import { IoCompassOutline } from "react-icons/io5";

const AppLayout = () => {
  return (
    <div className="grid h-[100dvh] w-full select-none grid-cols-1 text-slate-50 sm:grid-cols-[4.5rem_auto] xl:grid-cols-[16dvw_auto] 2xl:grid-cols-[13vw_auto]">
      <div className="hidden sm:block"></div>
      <Sidebar />
      <main className="h-[94dvh] sm:h-full overflow-scroll">
        <Outlet />
      </main>

      <div className="h-[6dvh] sm:hidden"></div>
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
    <div className="fixed bottom-0 z-30 block h-[7dvh] w-full sm:hidden">
      <div className="h-full w-full border-t border-slate-800 bg-[#121212]">
        <div className="flex h-full items-center justify-around">
          <LinkItem icon={<HiOutlineHome className="text-3xl" />} to="/" />
          <LinkItem
            icon={<IoCompassOutline className="text-3xl" />}
            to="/explore"
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
