import React from "react";
import { NavLink } from "react-router-dom";

const EditButton = () => {
  return (
    <NavLink
      to="/account/edit"
      className="rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50"
    >
      Edit Profile
    </NavLink>
  );
};

export default EditButton;
