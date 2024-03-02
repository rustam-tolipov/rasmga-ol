import React from "react";
import { NavLink } from "react-router-dom";

const Highlight = ({ highlight }) => {
  return (
    <NavLink
      className="flex cursor-pointer flex-col items-center gap-1"
      to={`/profile/${highlight.username}`}
    >
      <div className="h-16 w-16 overflow-hidden rounded-full border border-gray-50 p-1">
        <img
          src={highlight.avatar}
          alt="profile"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-xs">{highlight.username}</h3>
    </NavLink>
  );
};

export default Highlight;
