import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import useFollowings from "../hooks/useFollowings";
import { NavLink, useNavigate } from "react-router-dom";
import LoadingFollowers from "../features/loading/LoadingFollowers";
import useUnFollow from "../hooks/useUnFollow";

const Followings = () => {
  const { followingsLoading, followings } = useFollowings();

  if (followingsLoading) {
    return <LoadingFollowers title="Followings" />;
  }

  return (
    <div className="flex flex-col gap-3 xl:px-4">
      <TopHeader title="Followings" />

      <div className="mt-12 flex flex-col gap-6 px-4 py-3 sm:mt-0">
        {followings?.map((following, index) => (
          <Follower key={index} following={following} />
        ))}
      </div>
    </div>
  );
};

export default Followings;

const Follower = ({ following }) => {
  const { isUnFollowing, unFollowUser } = useUnFollow();

  return (
    <div className="flex items-center gap-4">
      <div className="h-[2.8rem] w-[2.8rem] rounded-[50%]">
        <img
          src={following.avatar}
          alt="profile"
          className="h-full w-full rounded-[50%]"
        />
      </div>
      <NavLink to={`/profile/${following.username}`}>
        <h3 className="text-sm font-semibold">{following.username}</h3>
      </NavLink>

      <button
        className="text-md ml-auto rounded-lg bg-gray-500 px-4 py-1 text-gray-50 xl:ml-20"
        onClick={() => unFollowUser(following.id)}
        disabled={isUnFollowing}
      >
        {isUnFollowing ? "Unfollowing" : "Unfollow"}
      </button>
    </div>
  );
};
