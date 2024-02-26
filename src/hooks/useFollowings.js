import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFollowings } from "../services/apiUsers";

const useFollowings = (id) => {
  const {
    isLoading: followingsLoading,
    data: followings,
    error: followingsError,
  } = useQuery({
    queryKey: ["followings"],
    queryFn: () => getFollowings(id),
    retry: false,
  });

  return { followingsLoading, followings, followingsError };
};

export default useFollowings;
