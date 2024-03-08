import React from "react";
import TopHeader from "../ui/TopHeader";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";

const Settings = () => {
  const navigate = useNavigate();

  const { logout, isLoading } = useLogout();

  return (
    <div className="flex h-screen flex-col">
      <TopHeader title="Settings" />

      <div className="mt-12 flex h-full flex-col pb-14 sm:mt-0">
        <h3 className="bg-gray-800 px-2 py-2 text-xl font-light tracking-wide">
          Account
        </h3>

        <ul className="flex flex-col">
          <li className="">
            <NavLink
              to="/account/edit"
              className="flex items-center justify-between border-y border-gray-600 px-2 py-2"
            >
              <span className="text-lg">Edit Profile</span>
              <HiChevronRight className="text-lg" />
            </NavLink>
          </li>
          <li className="flex items-center justify-between border-b border-gray-600 px-2 py-2 opacity-40">
            <span className="text-lg">Change Password</span>
            <HiChevronRight className="text-lg" />
          </li>
          <li className="flex items-center justify-between border-b border-gray-600 px-2 py-2 opacity-40">
            <span className="text-lg">Your Activity</span>
            <HiChevronRight className="text-lg" />
          </li>
        </ul>

        <h3 className="bg-gray-800 px-2 py-2 text-xl font-light tracking-wide">
          About
        </h3>

        <ul className="flex flex-col">
          <li className="flex items-center justify-between border-y border-gray-600 px-2 py-2 opacity-40">
            <span className="text-lg">Help</span>
            <HiChevronRight className="text-lg" />
          </li>
          <li className="flex items-center justify-between border-b border-gray-600 px-2 py-2 opacity-40">
            <span className="text-lg">Report a problem</span>
            <HiChevronRight className="text-lg" />
          </li>
        </ul>

        <button
          type="button"
          className="mt-auto flex items-center justify-between border-y border-gray-600 px-2 py-2"
          onClick={() => logout()}
        >
          <span className="text-lg text-red-500">
            {isLoading ? "Logging out..." : "Logout"}
          </span>
          <HiChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Settings;
