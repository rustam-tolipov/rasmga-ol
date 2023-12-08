import React from "react";
import {
  HiMiniCog6Tooth,
  HiOutlineUserPlus,
  HiMiniEllipsisHorizontal,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePaperAirplane,
  HiOutlineBookmark,
} from "react-icons/hi2";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center border-b border-slate-600 px-4 py-2 sm:hidden">
        <HiMiniCog6Tooth className="mr-auto text-2xl" />
        <h1 className="w-full text-center text-xl">username</h1>
        <HiOutlineUserPlus className="text-2xl" />
      </div>

      <div className="flex items-center justify-between px-4 py-4 xl:justify-center xl:gap-12">
        <div className="h-[6rem] w-[6rem] rounded-[50%] xl:mx-16 xl:my-8 xl:h-40 xl:w-40">
          <img
            src={`https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 100,
            )}.jpg`}
            alt="profile"
            className="h-full w-full rounded-[50%]"
          />
        </div>
        <div className="flex flex-col gap-3 xl:w-[50%]">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="mr-auto flex items-center gap-4 xl:mr-0">
              <h3 className="text-xl font-light tracking-wide">username</h3>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50">
                Edit Profile
              </button>
              <button className="rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50">
                Follow
              </button>
            </div>
          </div>

          <div className="hidden gap-6 lg:flex">
            <p className="text-md font-medium">
              {Math.floor(Math.random() * 100)} posts
            </p>
            <p className="text-md font-medium">
              {Math.floor(Math.random() * 100)} followers
            </p>
            <p className="text-md font-medium">
              {Math.floor(Math.random() * 100)} following
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-md font-medium">Username</p>
            <p className="hidden text-sm xl:block">
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>

            <p className="text-xs text-gray-400">
              5000 accounts reached in the last 30 <br /> days.{" "}
              <strong>View insights</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 sm:hidden">
        <p className="text-md font-medium">Username</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
      </div>

      <div className="flex flex-row items-center justify-around border-y border-slate-600 p-2 px-4 sm:hidden">
        <div className="flex flex-col items-center">
          <h3 className="text-md font-semibold">
            {Math.floor(Math.random() * 100)}
          </h3>
          <p className="text-xs text-gray-400">Posts</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-md font-semibold">
            {Math.floor(Math.random() * 100)}
          </h3>
          <p className="text-xs text-gray-400">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-md font-semibold">
            {Math.floor(Math.random() * 100)}
          </h3>
          <p className="text-xs text-gray-400">Following</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around p-2 px-4 text-gray-400">
        <HiOutlineHeart className="text-2xl" />
        <HiOutlineChatBubbleOvalLeft className="text-2xl" />
        <HiOutlinePaperAirplane className="text-2xl" />
        <HiOutlineBookmark className="text-2xl" />
      </div>

      <div className="grid grid-cols-3">
        {Array(120)
          .fill()
          .map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/${Math.floor(
                Math.random() * 100,
              )}/800/600`}
              alt="post"
              className="h-fit w-full object-cover"
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
