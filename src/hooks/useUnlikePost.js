import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unlikePost as unlikePostApi } from "../services/apiPosts";
import toast from "react-hot-toast";

const useUnlikePost = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUnLiking, mutate: unlikePost } = useMutation({
    mutationFn: unlikePostApi,
    onSuccess: () => {
      toast.success("Post unliked successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["home"],
      });

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return { isUnLiking, unlikePost };
};

export default useUnlikePost;
