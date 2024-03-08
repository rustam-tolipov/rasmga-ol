import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useDeletePost = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { status, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success("Post deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["home"],
      });

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });

      navigate("/");
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const isDeleting = status === "pending";

  return { isDeleting, deletePost };
};

export default useDeletePost;
