import React from "react";

const TopHeader = ({ children }) => {
  return (
    <div className="fixed flex z-10 h-12 w-full items-center gap-2 border-b border-slate-600 bg-gray-900 px-4 py-2 sm:hidden">
      {children}
    </div>
  );
};

export default TopHeader;
