import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFollowings } from "../services/apiUsers";

const useFollowings = () => {
  const {
    isLoading: followingsLoading,
    data: followings,
    error: followingsError,
  } = useQuery({
    queryKey: ["followings"],
    queryFn: getFollowings,
  });

  return { followingsLoading, followings, followingsError };
};

export default useFollowings;
