import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFollowers } from "../services/apiUsers";

const useFollowers = () => {
  const {
    isLoading: followersLoading,
    data: followers,
    error: followersError,
  } = useQuery({
    queryKey: ["followers"],
    queryFn: getFollowers,
  });

  return { followersLoading, followers, followersError };
};

export default useFollowers;
