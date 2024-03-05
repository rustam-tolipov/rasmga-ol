import React from "react";
import { useLogout } from "../features/authentication/useLogout";

const Logout = () => {

  const { logout, isLoading } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="w-full rounded-md bg-red-500 px-4 py-2 text-center text-sm font-semibold text-white"
    >
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default Logout;
