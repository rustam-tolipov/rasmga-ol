import React, { useState } from "react";
import {
  HiOutlineHome,
  HiMagnifyingGlass,
  HiOutlineFilm,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiUserCircle,
} from "react-icons/hi2";
import { IoCompassOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Modal from "./Modal";
import CreatePostForm from "./CreatePostForm";
import useCurrentUser from "../hooks/useCurrentUser";
import LoadingItem from "../features/loading/LoadingItem";
import Notifications from "./Notifications";
import Logout from "./Logout";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <aside className="fixed hidden h-full grid-rows-[4rem_auto_3rem] border-r-[0.5px] border-[#1f1e1e] px-3 py-3 pt-12 sm:grid sm:w-[4.5rem] xl:w-[16dvw] 2xl:w-[13dvw]">
      <Logo />
      <MainNav openModal={setOpenModal} />
      <Footer />

      {openModal === "create" && (
        <Modal openModal={openModal} onClose={setOpenModal}>
          <CreatePostForm onClose={setOpenModal} />
        </Modal>
      )}

      {openModal === "notifications" && (
        <Notifications onClose={setOpenModal} />
      )}
    </aside>
  );
};

export default Sidebar;

const MainNav = ({ openModal }) => {
  const { currentUser, currentUserLoading } = useCurrentUser();

  if (currentUserLoading) {
    return (
      <ul className="flex flex-col gap-2">
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </ul>
    );
  }

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
        <li
          className="flex cursor-pointer items-center gap-4 rounded-md px-2 py-2 duration-500 hover:bg-[#1f1e1e]"
          onClick={() => openModal("notifications")}
        >
          <HiOutlineHeart className="text-3xl" />
          <span className="text-lg sm:hidden xl:block">Notifications</span>
        </li>

        <li
          className="flex cursor-pointer items-center gap-4 rounded-md px-2 py-2 duration-500 hover:bg-[#1f1e1e]"
          onClick={() => openModal("create")}
        >
          <HiOutlinePlusCircle className="text-3xl" />
          <span className="text-lg sm:hidden xl:block">Create</span>
        </li>

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
          text="Profile"
          to={`/profile/${currentUser?.username}`}
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
        className={({ isActive }) =>
          isActive
            ? "flex cursor-pointer items-center gap-4 w-fit xl:w-full rounded-md bg-[#343333] px-2 py-2 duration-500 hover:bg-[#1f1e1e]"
            : "flex cursor-pointer items-center gap-4 w-fit xl:w-full rounded-md px-2 py-2 duration-500 hover:bg-[#1f1e1e]"
        }
      >
        {icon} <span className="text-lg sm:hidden xl:block">{text}</span>
      </NavLink>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col items-center justify-center gap-4">
      <Logout />
    </footer>
  );
};
