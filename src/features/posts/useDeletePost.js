import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deletePost as deletePostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useDeletePost = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success("Post deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return { isDeleting, deletePost };
};

export default useDeletePost;
