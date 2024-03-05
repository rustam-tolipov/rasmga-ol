import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/apiPosts";

const usePosts = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { isLoading, posts, error };
};

export default usePosts;
