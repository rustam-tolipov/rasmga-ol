import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const useResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const token = searchParams.get("token");

  const queryClient = useQueryClient();

  const {
    mutate: resetPassword,
    status,
    error,
  } = useMutation({
    mutationFn: ({ password }) => resetPasswordApi(password, token),
    onSuccess: () => {
      toast.success("Password reset successful");

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });

      navigate("/");
    },
    onError: (error) => {
      toast.error(`Login failed: ${error.response.data.error}`);
    },
  });

  const isLoading = status === "pending";

  return { resetPassword, isLoading, error };
};

export default useResetPassword;
