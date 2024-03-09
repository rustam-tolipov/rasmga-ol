import { useMutation, useQueryClient } from "@tanstack/react-query";
import { followUser as followUserApi } from "../services/apiUsers";
import toast from "react-hot-toast";

const useFollow = () => {
  const queryClient = useQueryClient();

  const { status, mutate: followUser } = useMutation({
    mutationFn: followUserApi,
    onSuccess: () => {
      toast.success("Followed successfully");

      queryClient.invalidateQueries(["suggestions"]);
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const isFollowing = status === "pending";

  return { isFollowing, followUser };
};

export default useFollow;
