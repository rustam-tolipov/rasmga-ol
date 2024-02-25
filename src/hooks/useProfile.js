import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMe } from "../services/apiUsers";

const useProfile = () => {
  const {
    isLoading: meLoading,
    data: me,
    error: meError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  return { meLoading, me, meError };
};

export default useProfile;
