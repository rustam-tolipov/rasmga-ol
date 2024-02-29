import React from "react";
import { NavLink } from "react-router-dom";
import useFollow from "../../hooks/useFollow";
import useUnFollow from "../../hooks/useUnFollow";
import DeletePost from "./DeletePost";

const currentDate = new Date();

const ago = (created_at) => {
  const diff = currentDate - new Date(created_at);
  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours}h`;
  }
  const days = Math.floor(hours / 24);

  return `${days}d`;
};

const Header = ({
  username,
  avatar,
  created_at,
  post,
  user_id,
  is_followed,
  id,
}) => {
  const { isFollowing, followUser } = useFollow();
  const { isUnFollowing, unFollowUser } = useUnFollow();

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
        <span className="text-sm text-gray-400">{ago(created_at)}</span>
        {!is_followed ? (
          <button
            className="text-sm font-semibold text-blue-500"
            onClick={() => followUser(user_id)}
          >
            Follow
          </button>
        ) : (
          <button
            className="text-sm font-semibold text-blue-500"
            onClick={() => unFollowUser(user_id)}
          >
            Unfollow
          </button>
        )}
        {/* THIS BUTTON DELETES POST */}
        <DeletePost id={id} />
      </div>
    </div>
  );
};

export default Header;
