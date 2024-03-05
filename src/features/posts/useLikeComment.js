import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { likeComment as likeCommentApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useLikeComment = () => {
  const queryClient = useQueryClient();

  const { status, mutate: likeComment } = useMutation({
    mutationFn: likeCommentApi,
    onSuccess: () => {
      toast.success("Comment liked successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["home"],
      });

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const isLiking = status === "pending";

  return { isLiking, likeComment };
};

export default useLikeComment;
