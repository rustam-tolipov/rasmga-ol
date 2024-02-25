import React, { useState } from "react";
import {
  HiMiniCog6Tooth,
  HiOutlineUserPlus,
  HiMiniEllipsisHorizontal,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePaperAirplane,
  HiOutlineBookmark,
  HiChevronLeft,
} from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/apiPosts";
import { getMe } from "../services/apiUsers";
import Modal from "../ui/Modal";
import usePosts from "../hooks/usePosts";
import useProfile from "../hooks/useProfile";
import useFollowers from "../hooks/useFollowers";
import Followers from "../features/profile/Followers";
import Followings from "../features/profile/Followings";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const { isLoading, posts, error } = usePosts();

  const { meLoading, me, meError } = useProfile();

  const { followersLoading, followers, followersError } = useFollowers();

  if (isLoading || meLoading) {
    return <div>Loading...</div>;
  }

  if (error || meError) {
    return <div>Error: {error?.message || meError?.message}</div>;
  }

  const {
    avatar,
    username,
    bio,
    posts_count,
    followees_count,
    followers_count,
  } = me;

  return (
    <div className="flex flex-col xl:items-center xl:justify-center">
      {openModal && (
        <Modal openModal={openModal} onClose={setOpenModal}>
          {openModal === "followers" ? (
            <Followers followers={followers} />
          ) : (
            <Followings followings={followers} />
          )}
        </Modal>
      )}

      <TopHeader>
        <NavLink to="/account/settings">
          <HiMiniCog6Tooth className="mr-auto text-2xl" />
        </NavLink>
        <h1 className="w-full text-center text-xl">{username}</h1>
        <HiOutlineUserPlus className="text-2xl" />
      </TopHeader>

      <div className="mt-12 flex w-full items-center justify-between px-4 py-4 md:mt-0 md:h-[40dvh] md:justify-start xl:w-[70dvw]">
        <div className="flex items-center justify-center">
          <img
            src={avatar}
            alt="profile"
            className="h-[6rem] w-[6rem] rounded-[50%] md:m-24 md:h-[12rem] md:w-[12rem]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="mr-auto flex items-center gap-4 md:mr-0">
              <h3 className="text-xl font-light tracking-wide">{username}</h3>
            </div>
            <div className="flex items-center gap-2">
              <NavLink
                to="/account/edit"
                className="rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50"
              >
                Edit Profile
              </NavLink>
              <button className="rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50">
                Follow
              </button>
            </div>
          </div>

          <div className="hidden gap-6 md:flex">
            <p className="text-md font-medium">
              {posts_count} {posts_count > 1 ? "posts" : "post"}
            </p>
            <p
              className="text-md cursor-pointer font-medium"
              onClick={() => setOpenModal("followers")}
            >
              {followers_count} followers
            </p>
            <p
              className="text-md font-medium"
              onClick={() => setOpenModal("followings")}
            >
              {followees_count} following
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-md font-medium">{username}</p>
            <p className="hidden text-sm md:block">
              {bio || "Lorem ipsum dolor sit amet, consectetur"}
            </p>

            <p className="text-xs text-gray-400">
              5000 accounts reached in the last 30 <br /> days.
              <strong>View insights</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 sm:hidden">
        <p className="text-md font-medium">{username}</p>
        <p className="text-sm">
          {bio || "Lorem ipsum dolor sit amet, consectetur"}
        </p>
      </div>

      <div className="flex flex-row items-center justify-around border-y border-slate-600 p-2 px-4 sm:hidden">
        <div className="flex flex-col items-center">
          <h3 className="text-md font-semibold">{posts_count}</h3>
          <p className="text-xs text-gray-400">Posts</p>
        </div>
        <NavLink className="flex flex-col items-center" to="/followers">
          <h3 className="text-md font-semibold">{followers_count}</h3>
          <p className="cursor-pointer text-xs text-gray-400">Followers</p>
        </NavLink>
        <NavLink className="flex flex-col items-center" to="/followings">
          <h3 className="text-md font-semibold">{followees_count}</h3>
          <p className="cursor-pointer text-xs text-gray-400">Following</p>
        </NavLink>
      </div>
      <div className="flex flex-col xl:w-[70dvw]">
        <div className="flex flex-row items-center justify-around p-2 px-4 text-gray-400">
          <HiOutlineHeart className="text-2xl" />
          <HiOutlineChatBubbleOvalLeft className="text-2xl" />
          <HiOutlinePaperAirplane className="text-2xl" />
          <HiOutlineBookmark className="text-2xl" />
        </div>

        <div className="grid grid-cols-3 gap-1">
          {posts?.map((post, index) => (
            <LoadMedia key={index} media={post.image.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

const LoadMedia = ({ media }) => {
  if (media.includes("mp4")) {
    return (
      <video
        src={media}
        className="h-32 w-full object-cover xl:h-80"
        controls
      />
    );
  }

  return (
    <img src={media} alt="post" className="h-32 w-full object-cover xl:h-80" />
  );
};
