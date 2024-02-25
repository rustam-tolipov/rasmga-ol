import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { unfollowUser as unFollowUserApi } from "../services/apiUsers";
import toast from "react-hot-toast";

const useUnFollow = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUnFollowing, mutate: unFollowUser } = useMutation({
    mutationFn: unFollowUserApi,
    onSuccess: () => {
      toast.success("Unfollowed successfully");

      queryClient.invalidateQueries(["me"]);
      queryClient.invalidateQueries(["suggestions"]);
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return { isUnFollowing, unFollowUser };
};

export default useUnFollow;
