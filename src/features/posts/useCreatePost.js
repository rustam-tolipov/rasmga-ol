import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createPost } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useCreatePost = () => {
  const queryClient = useQueryClient();



  const { isLoading, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["home"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return { isLoading, createPost: mutate };
};

export default useCreatePost;
