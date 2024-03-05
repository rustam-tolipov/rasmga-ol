import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../../services/apiPosts";
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
