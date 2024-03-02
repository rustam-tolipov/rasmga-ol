import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { postComment as postCommentApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useCommentPost = () => {
  const queryClient = useQueryClient();

  const { isLoading: isCommenting, mutate: postComment } = useMutation({
    mutationFn: postCommentApi,
    onSuccess: () => {
      toast.success("Comment posted successfully");

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

  return { isCommenting, postComment };
};

export default useCommentPost;
