import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";

const TopHeader = ({ title, children, go = "back" }) => {
  const navigate = useNavigate();

  const handleBack = (go) => {
    navigate(-1);
  };

  return (
    <div className="fixed z-50 flex h-[6dvh] w-full items-center gap-2 border-b border-slate-600 bg-gray-900 px-4 py-2 sm:hidden">
      {children}

      {go === "back" && (
        <HiMiniXMark className="mr-auto text-4xl" onClick={handleBack} />
      )}

      {title && <h1 className="w-full text-center text-xl">{title}</h1>}
    </div>
  );
};

export default TopHeader;
