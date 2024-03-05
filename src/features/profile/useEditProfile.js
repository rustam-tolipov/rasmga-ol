import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile as editProfileApi } from "../../services/apiUsers";
import toast from "react-hot-toast";

const useEditProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: editProfile } = useMutation({
    mutationFn: editProfileApi,
    onSuccess: () => {
      toast.success("Profile updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return { editProfile };
};

export default useEditProfile;
