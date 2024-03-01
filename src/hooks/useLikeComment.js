import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { likeComment as likeCommentApi } from "../services/apiPosts";
import toast from "react-hot-toast";

const useLikeComment = () => {
  const queryClient = useQueryClient();

  const { isLoading: isLiking, mutate: likeComment } = useMutation({
    mutationFn: likeCommentApi,
    onSuccess: () => {
      toast.success("Comment liked successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return { isLiking, likeComment };
};

export default useLikeComment;
