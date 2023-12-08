import React from "react";
import { HiCamera } from "react-icons/hi2";

const Logo = () => {
  return (
    <div className="px-2">
      <img
        src="images/logo.svg"
        alt="Profile"
        className="hidden h-[1.5rem] xl:block"
      />

      <HiCamera className="text-3xl xl:hidden" />
    </div>
  );
};

export default Logo;
