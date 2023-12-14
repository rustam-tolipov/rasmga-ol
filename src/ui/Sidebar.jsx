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
import { IoCompassOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="border-r-[0.5px] border-[#1f1e1e] grid grid-rows-[4rem_auto_3rem] py-3 pt-12 px-3">
      <Logo />
      <MainNav />
      <Footer />
    </aside>
  );
};

export default Sidebar;

const Logo = () => {
  return (
    <div className="px-2">
      <img src="images/logo.svg" alt="Profile" className="h-[1.5rem]" />
    </div>
  );
};

const MainNav = () => {
  return (
    <nav className="">
      <ul className="flex flex-col gap-2">
        <LinkItem
          icon={<HiOutlineHome className="text-3xl" />}
          text="Home"
          to="/"
        />
        <LinkItem
          icon={<HiMagnifyingGlass className="text-3xl" />}
          text="Search"
          to="/search"
        />
        <LinkItem
          icon={<IoCompassOutline className="text-3xl" />}
          text="Explore"
          to="/explore"
        />
        <LinkItem
          icon={<HiOutlineFilm className="text-3xl" />}
          text="Reels"
          to="/reels"
        />
        <LinkItem
          icon={<HiOutlineHeart className="text-3xl" />}
          text="Notifications"
          to="/notifications"
        />
        <LinkItem
          icon={<HiOutlinePlusCircle className="text-3xl" />}
          text="Create"
          to="/create"
        />
        <LinkItem
          icon={<HiUserCircle className="text-3xl" />}
          text="Profile"
          to="/profile"
        />
      </ul>
    </nav>
  );
};

const LinkItem = ({ icon, text, to }) => {
  return (
    <li className="">
      <NavLink
        to={to}
        className="flex items-center gap-4 py-2 px-2 rounded-md cursor-pointer hover:bg-[#1f1e1e] duration-500"
      >
        {icon} <span className="text-lg">{text}</span>
      </NavLink>
    </li>
  );
};

const Footer = () => {
  return (
    <ul className="">
      <LinkItem icon={<HiBars3 className="text-3xl" />} text="Menu" />
    </ul>
  );
};
