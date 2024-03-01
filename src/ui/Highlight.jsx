import React from "react";
import { NavLink } from "react-router-dom";

const Highlight = ({ highlight }) => {
  return (
    <NavLink
      className="flex cursor-pointer flex-col items-center gap-1"
      to={`/profile/${highlight.username}`}
    >
      <div className="aspect-h-1 w-16 rounded-[50%] border border-gray-50 object-cover p-1">
        <img
          src={highlight.avatar}
          alt="profile"
          className="w-full rounded-[50%]"
        />
      </div>
      <h3 className="text-xs">{highlight.username}</h3>
    </NavLink>
  );
};

export default Highlight;
