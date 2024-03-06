import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useForgotPassword = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    mutate: forgotPassword,
    status,
    error,
  } = useMutation({
    mutationFn: ({ email }) => forgotPasswordApi(email),
    onSuccess: () => {
      toast.success("Password reset email sent");

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
      navigate("/login");
    },
    onError: (error) => {
      toast.error(`Password reset failed: ${error.response.data.error}`);
    },
  });

  const isLoading = status === "pending";

  return { forgotPassword, isLoading, error };
};

export default useForgotPassword;
