import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../services/apiPosts";

const usePosts = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: false,
  });

  return { isLoading, posts, error };
};

export default usePosts;
