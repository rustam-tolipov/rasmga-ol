import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMe, getUser } from "../../services/apiUsers";
import { useParams } from "react-router-dom";

const useProfile = () => {
  const { username } = useParams();

  const {
    isLoading: userLoading,
    data: user,
    error: userError,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUser(username),
  });

  return { userLoading, user, userError };
};

export default useProfile;
