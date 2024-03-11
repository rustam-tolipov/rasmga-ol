import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import useFollowers from "../hooks/useFollowers";
import { NavLink, useNavigate } from "react-router-dom";
import LoadingFollowers from "../features/loading/LoadingFollowers";
import useFollow from "../hooks/useFollow";

const Followers = () => {
  const { followersLoading, followers } = useFollowers();

  if (followersLoading) {
    return <LoadingFollowers title="Followers" />;
  }

  return (
    <div className="flex flex-col gap-3 xl:px-4">
      <TopHeader title="Followers" />

      <div className="mt-12 flex flex-col gap-6 px-4 py-3 sm:mt-0">
        {followers?.map((following, index) => (
          <Follower key={index} following={following} />
        ))}
      </div>
    </div>
  );
};

export default Followers;

const Follower = ({ following }) => {
  const { isFollowing, followUser } = useFollow();

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

      {!following.is_followed && (
        <button
          className="text-md ml-auto rounded-lg bg-blue-500 px-4 py-1 text-gray-50 xl:ml-20"
          onClick={() => followUser(following.id)}
          disabled={isFollowing}
        >
          {isFollowing ? "Following" : "Follow Back"}
        </button>
      )}
    </div>
  );
};
