import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { unLikeComment as unLikeCommentApi } from "../services/apiPosts";
import toast from "react-hot-toast";

const useUnLikeComment = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUnLiking, mutate: unLikeComment } = useMutation({
    mutationFn: unLikeCommentApi,
    onSuccess: () => {
      toast.success("Comment unliked successfully");

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

  return { isUnLiking, unLikeComment };
};

export default useUnLikeComment;
