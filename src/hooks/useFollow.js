import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { followUser as followUserApi } from "../services/apiUsers";
import toast from "react-hot-toast";

const useFollow = () => {
  const queryClient = useQueryClient();

  const { isLoading: isFollowing, mutate: followUser } = useMutation({
    mutationFn: followUserApi,
    onSuccess: () => {
      toast.success("Followed successfully");

      // queryClient.invalidateQueries({
      //   queryKey: ["me"],
      // });
      // queryClient.invalidateQueries({
      //   queryKey: ["suggestions"],
      // });

      queryClient.invalidateQueries(["me"]);
      queryClient.invalidateQueries(["suggestions"]);
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return { isFollowing, followUser };
};

export default useFollow;
