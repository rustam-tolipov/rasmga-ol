import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMe, getUser } from "../services/apiUsers";
import { useParams } from "react-router-dom";

const useCurrentUser = () => {
  const {
    isLoading: currentUserLoading,
    data: currentUser,
    error: currentUserError,
  } = useQuery({
    queryKey: ["user", "me"],
    queryFn: () => getMe(),
    retry: false,
  });

  return { currentUserLoading, currentUser, currentUserError };
};

export default useCurrentUser;
