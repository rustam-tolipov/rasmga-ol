import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../../services/apiPosts";
import Post from "./Post";
import LoadingPosts from "../loading/LoadingPosts";
import usePosts from "../../hooks/usePosts";

const Posts = () => {
  const { isLoading, posts, error } = usePosts();

  if (isLoading) {
    return <LoadingPosts />;
  }

  return (
    <div className="col-start-1 col-end-2 sm:px-24">
      <div className="flex flex-col items-center gap-4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
