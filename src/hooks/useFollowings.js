import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFollowings } from "../services/apiUsers";
import useProfile from "./useProfile";

const useFollowings = () => {
  const { user } = useProfile();


  const {
    isLoading: followingsLoading,
    data: followings,
    error: followingsError,
  } = useQuery({
    queryKey: ["followings"],
    queryFn: () => getFollowings(user?.id),
  });

  return { followingsLoading, followings, followingsError };
};

export default useFollowings;
