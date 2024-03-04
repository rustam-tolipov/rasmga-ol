import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, email, password }) =>
      loginApi(username, email, password),
    onSuccess: (user) => {
      toast.success("Login successful");

      queryClient.setQueryData("me", user);

      navigate("/");
    },
    onError: (error) => {
      toast.error("Login failed");
    },
  });

  return { login, isLoading };
};

export default useLogin;
