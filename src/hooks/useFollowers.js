import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFollowers } from "../services/apiUsers";

const useFollowers = (id) => {
  const {
    isLoading: followersLoading,
    data: followers,
    error: followersError,
  } = useQuery({
    queryKey: ["followers"],
    queryFn: () => getFollowers(id),
    retry: false,
  });

  return { followersLoading, followers, followersError };
};

export default useFollowers;
