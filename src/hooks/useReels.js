import { useQuery } from "@tanstack/react-query";
import { getReels } from "../services/apiPosts";

const useReels = () => {
  const {
    isLoading,
    data: reels,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getReels,
  });

  return { isLoading, reels, error };
};

export default useReels;
