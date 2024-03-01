import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getHighlights } from "../../services/apiUsers";
import LoadingHighlights from "../loading/LoadingHighlights";
import Highlight from "../../ui/Highlight";

const Highlights = () => {
  const {
    isLoading,
    data: highlights,
    error,
  } = useQuery({
    queryKey: ["highlights"],
    queryFn: getHighlights,
  });

  if (isLoading) {
    return <LoadingHighlights />;
  }

  return (
    <div className="flex gap-4 overflow-scroll whitespace-nowrap border-b border-gray-600 px-4 py-4 scrollbar-hide sm:border-none sm:px-4 sm:pb-0 xl:w-[45rem]">
      {highlights?.map((highlight, index) => (
        <Highlight key={index} highlight={highlight} />
      ))}
    </div>
  );
};

export default Highlights;
