import React from "react";
import useUnFollow from "../hooks/useUnFollow";
import useFollow from "../hooks/useFollow";

const FollowButton = ({ is_followed, id }) => {
  const { isUnFollowing, unFollowUser } = useUnFollow();
  const { isFollowing, followUser } = useFollow();

  return (
    <button
      onClick={() => {
        if (is_followed) {
          unFollowUser(id);
        } else {
          followUser(id);
        }
      }}
      className={`rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50 ${
        is_followed ? "bg-red-500" : ""
      }`}
      disabled={isUnFollowing || isFollowing}
    >
      {is_followed ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
