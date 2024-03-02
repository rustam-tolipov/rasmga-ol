import { useQuery } from "@tanstack/react-query";
import { getHighlights } from "../../services/apiUsers";

const useHighlights = () => {
  const {
    isLoading,
    data: highlights,
    error,
  } = useQuery({
    queryKey: ["highlights"],
    queryFn: getHighlights,
  });

  return { isLoading, highlights, error };
};

export default useHighlights;
