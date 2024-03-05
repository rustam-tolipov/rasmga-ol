import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserPosts } from "../../services/apiPosts";
import useProfile from "../profile/useProfile";
import { useParams } from "react-router-dom";

const useUserPosts = () => {
  const { username } = useParams();

  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["userPosts"],
    queryFn: () => getUserPosts(username),
  });

  return { isLoading, posts, error };
};

export default useUserPosts;
