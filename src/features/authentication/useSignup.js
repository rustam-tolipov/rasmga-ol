import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useSignup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading, error } = useMutation({
    mutationFn: ({ username, email, password, passwordConfirm }) =>
    signupApi(username, email, password, passwordConfirm),
    onSuccess: (user) => {
      toast.success("Signup successful");

      queryClient.setQueryData(["me"], user);

      navigate("/");
    },
    onError: (error) => {
      toast.error(`Login failed: ${error.response.data.error}`);
    },
  });

  return { signup, isLoading, error };
};

export default useSignup;
