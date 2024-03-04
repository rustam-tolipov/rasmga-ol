import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

const useUser = () => {
  const { isLoading: isLoading, data: user } = useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user };
};

export default useUser;
