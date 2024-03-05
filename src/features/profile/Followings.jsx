import React from "react";
import { HiChevronLeft } from "react-icons/hi2";
import useFollowings from "../../hooks/useFollowings";
import useUnFollow from "../../hooks/useUnFollow";
import { NavLink } from "react-router-dom";

const Followings = ({ id }) => {
  const { followings } = useFollowings(id);
  const { unFollowUser } = useUnFollow();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-gray-800">
      <div className="flex h-[26rem] w-[25rem] flex-col font-medium text-gray-50">
        <div className="flex w-full items-center justify-between border-b border-gray-700 px-2 py-2">
          <HiChevronLeft className="text-xl" />
          <span className="mx-auto">Followings</span>
        </div>
        <div className="flex flex-col overflow-y-auto pt-4">
          {followings?.map((following, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-2"
            >
              <NavLink
                className="flex items-center gap-2"
                to={`/profile/${following.username}`}
              >
                <img
                  src={following.avatar}
                  alt="profile"
                  className="h-10 w-10 rounded-[50%]"
                />
                <h3>{following.username}</h3>
              </NavLink>
              <button
                className="rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50"
                onClick={() => unFollowUser(following.id)}
              >
                Unfollow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Followings;
