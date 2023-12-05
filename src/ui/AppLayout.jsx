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

const AppLayout = () => {
  return (
    <div className="grid select-none h-screen w-full grid-cols-1 text-slate-50 sm:grid-cols-[18%_auto]  2xl:grid-cols-[13vw_auto]">
      <div className="hidden sm:block"></div>
      <Sidebar />
      <main className="overflow-scroll px-0 py-0 pt-0 sm:px-16 sm:pr-28">
        <Outlet />
      </main>

      <Navigation />
    </div>
  );
};

export default AppLayout;

const Navigation = () => {
  return (
    <div className="block sm:hidden">
      <div className="fixed bottom-0 left-0 w-full  border-t border-slate-800 bg-[#121212] h-[8dvh]">
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
            icon={<HiUserCircle className="text-3xl" />}
            to="/profile"
          />
        </div>
      </div>
    </div>
  );
};

const LinkItem = ({ icon, to }) => {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-4 text-xl"
      activeClassName="text-white"
    >
      {icon}
    </NavLink>
  );
};
