import React from "react";
import {
  HiOutlineHome,
  HiMagnifyingGlass,
  HiOutlineFilm,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiBars3,
  HiUserCircle,
  HiCamera,
} from "react-icons/hi2";
import { IoCompassOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Modal from "./Modal";

const Sidebar = () => {
  return (
    <aside className="fixed hidden h-full grid-rows-[4rem_auto_3rem] border-r-[0.5px] border-[#1f1e1e] px-3 py-3 pt-12 sm:grid sm:w-[4.5rem] xl:w-[16dvw] 2xl:w-[13dvw]">
      <Logo />
      <MainNav />
      <Footer />

      {/* <Modal>
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-gray-800"></div>
      </Modal> */}
    </aside>
  );
};

export default Sidebar;

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
    <li className={text == "Search" ? "sm:hidden" : ""}>
      <NavLink
        to={to}
        className="flex cursor-pointer items-center gap-4 rounded-md px-2 py-2 duration-500 hover:bg-[#1f1e1e]"
      >
        {icon} <span className="text-lg sm:hidden xl:block">{text}</span>
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
