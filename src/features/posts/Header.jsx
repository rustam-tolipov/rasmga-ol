import React from "react";
import { NavLink } from "react-router-dom";
import DeletePost from "./DeletePost";
import useTimeAgo from "../../hooks/useTimeAgo";

const Header = ({ username, avatar, created_at, id }) => {

  const { timeAgo } = useTimeAgo();

  return (
    <div className="flex w-full gap-2 px-2 sm:p-0">
      <NavLink to={`/profile/${username}`}>
        <div className="h-8 w-8 overflow-hidden rounded-full border border-gray-50 p-1">
          <img
            src={avatar}
            alt="profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </NavLink>
      <div className="flex w-full items-center gap-1">
        <NavLink className="text-sm font-semibold" to={`/profile/${username}`}>
          {username}
        </NavLink>
        <span className="text-2xl text-gray-400">·</span>
        <span className="text-sm text-gray-400">{timeAgo(created_at)}</span>
        {/* THIS BUTTON DELETES POST */}
        <DeletePost id={id} />
      </div>
    </div>
  );
};

export default Header;
