import React, { useState } from "react";
import {
  HiMiniCog6Tooth,
  HiOutlineUserPlus,
  HiOutlineHeart,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import { NavLink } from "react-router-dom";
import useProfile from "../features/profile/useProfile";

import Header from "../features/profile/Header";
import LoadingProfile from "../features/loading/LoadingProfile";
import ProfilePosts from "../features/profile/ProfilePosts";
import ProfileReels from "../features/profile/ProfileReels";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("posts");

  const { userLoading, user, userError } = useProfile();

  if (userLoading) {
    return <LoadingProfile />;
  }

  if (userError) {
    return <div>Error: {userError?.message}</div>;
  }

  const { username, id } = user;

  return (
    <div className="flex flex-col xl:items-center xl:justify-center">
      <TopHeader title={username} go="/account/settings">
        <NavLink to="/account/settings" className="flex items-center gap-4">
          <HiMiniCog6Tooth className="mr-auto text-2xl" />
        </NavLink>
      </TopHeader>

      <Header />

      <div className="flex flex-col xl:w-[70dvw]">
        <div className="flex flex-row items-center justify-center gap-12 p-2 px-4 text-gray-400">
          <div
            className={`flex flex-row items-center gap-1 py-1 text-gray-400 ${currentPage === "posts" ? "border-t border-gray-200 text-gray-200" : ""}`}
            onClick={() => setCurrentPage("posts")}
          >
            <HiOutlineSquares2X2 className="text-xl" />
            Posts
          </div>

          <div
            className={`flex flex-row items-center gap-1 py-1 text-gray-400 ${currentPage === "reels" ? "border-t border-gray-200 text-gray-200" : ""}`}
            onClick={() => setCurrentPage("reels")}
          >
            <HiOutlineHeart className="text-xl" />
            Reels
          </div>
        </div>

        {currentPage === "posts" ? <ProfilePosts /> : <ProfileReels />}
      </div>
    </div>
  );
};

export default Profile;
