import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createPost } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { status, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["userPosts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["home"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const isLoading = status === "pending";

  return { isLoading, createPost: mutate };
};

export default useCreatePost;
