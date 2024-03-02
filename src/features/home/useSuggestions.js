import React from "react";
import { getSuggestions } from "../../services/apiUsers";
import { useQuery } from "@tanstack/react-query";

const useSuggestions = () => {
  const {
    isLoading,
    data: suggestions,
    error,
  } = useQuery({
    queryKey: ["suggestions"],
    queryFn: getSuggestions,
  });

  return { isLoading, suggestions, error };
};

export default useSuggestions;
