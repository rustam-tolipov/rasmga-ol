import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost as likePostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useLikePost = () => {
  const queryClient = useQueryClient();

  const { status, mutate: likePost } = useMutation({
    mutationFn: likePostApi,
    onSuccess: () => {
      toast.success("Post liked successfully");

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

  const isLiking = status === "pending";

  return { isLiking, likePost };
};

export default useLikePost;
