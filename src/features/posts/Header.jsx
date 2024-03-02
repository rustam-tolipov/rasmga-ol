import React from "react";
import { NavLink } from "react-router-dom";
import useFollow from "../../hooks/useFollow";
import DeletePost from "./DeletePost";
import useTimeAgo from "../../hooks/useTimeAgo";

const Header = ({
  username,
  avatar,
  created_at,
  user_id,
  is_followed,
  id,
}) => {
  const { isFollowing, followUser } = useFollow();

  const { timeAgo } = useTimeAgo();

  return (
    <div className="flex items-center gap-2 px-2 sm:p-0">
      <NavLink
        className="aspect-h-1 w-10 overflow-hidden rounded-full border border-gray-50 p-1"
        to={`/profile/${username}`}
      >
        <img
          src={avatar}
          alt="profile"
          className="h-full w-full rounded-full object-cover"
        />
      </NavLink>
      <div className="flex w-full items-center gap-1">
        <NavLink className="text-sm font-semibold" to={`/profile/${username}`}>
          {username}
        </NavLink>
        <span className="text-2xl text-gray-400">·</span>
        <span className="text-sm text-gray-400">{timeAgo(created_at)}</span>
        {!is_followed && (
          <>
            <span className="text-2xl text-gray-400">·</span>
            <button
              className="text-sm font-semibold text-blue-500"
              onClick={() => followUser(user_id)}
              disabled={isFollowing}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </>
        )}
        {/* THIS BUTTON DELETES POST */}
        <DeletePost id={id} />
      </div>
    </div>
  );
};

export default Header;
