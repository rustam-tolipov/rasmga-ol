import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment as deleteCommentApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { status, mutate: deleteComment } = useMutation({
    mutationFn: ({ postId, commentId }) =>
      deleteCommentApi({ postId, commentId }),
    onSuccess: () => {
      toast.success("Comment deleted");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["home"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const isDeleting = status === "pending";

  return { isDeleting, deleteComment };
};

export default useDeleteComment;
