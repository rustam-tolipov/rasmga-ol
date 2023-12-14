import React from "react";
import {
  HiOutlineHome,
  HiMagnifyingGlass,
  HiOutlineFilm,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiBars3,
} from "react-icons/hi2";
import { IoCompassOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="border-r-[1px] border-slate-300 grid grid-rows-[4rem_auto_3rem] py-3 pt-12 px-3">
      <div className="px-2">
        <img src="images/logo.svg" alt="Profile" className="h-[1.5rem]" />
      </div>
      <nav className="">
        <ul className="flex flex-col gap-2">
          <LinkItem icon={<HiOutlineHome className="text-3xl" />} text="Home" />
          <LinkItem
            icon={<HiMagnifyingGlass className="text-3xl" />}
            text="Search"
          />
          <LinkItem
            icon={<IoCompassOutline className="text-3xl" />}
            text="Explore"
          />
          <LinkItem
            icon={<HiOutlineFilm className="text-3xl" />}
            text="Reels"
          />
          <LinkItem
            icon={<HiOutlineHeart className="text-3xl" />}
            text="Liked"
          />
          <LinkItem
            icon={<HiOutlinePlusCircle className="text-3xl" />}
            text="Add"
          />
        </ul>
      </nav>

      <div className="">
        <LinkItem icon={<HiBars3 className="text-3xl" />} text="Menu" />
      </div>
    </aside>
  );
};

export default Sidebar;

const LinkItem = ({ icon, text }) => {
  return (
    <li className="flex items-center gap-4 py-2 px-2 rounded-md cursor-pointer hover:bg-[#1f1e1e] duration-500">
      {icon} <span className="text-lg">{text}</span>
    </li>
  );
};
