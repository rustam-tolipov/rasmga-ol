import React from "react";
import { useLogout } from "../features/authentication/useLogout";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="xl:w-full rounded-md bg-red-500 sm:px-2 xl:px-4 py-2 text-center text-sm font-semibold text-white"
      disabled={isLoading}
    >
      <span className="hidden xl:block">
        {isLoading ? "Logging out..." : "Logout"}
      </span>
      <HiOutlineArrowLeftOnRectangle className="text-2xl xl:hidden" />
    </button>
  );
};

export default Logout;
