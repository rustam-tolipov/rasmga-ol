import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "../services/apiAuth";

const useCurrentUser = () => {
  const {
    isLoading: currentUserLoading,
    data: currentUser,
    error: currentUserError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUser,
  });

  return { currentUserLoading, currentUser, currentUserError };
};

export default useCurrentUser;
