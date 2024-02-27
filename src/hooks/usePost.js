import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "../services/apiPosts";
import { useParams } from "react-router-dom";

const usePost = () => {
  const { id } = useParams();

  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPost(id),
    retry: false,
  });

  return { isLoading, post, error };
};

export default usePost;
