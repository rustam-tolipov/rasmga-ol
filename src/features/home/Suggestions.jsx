import React from "react";
import { getSuggestions } from "../../services/apiUsers";
import { useQuery } from "@tanstack/react-query";
import Suggestion from "../../ui/Suggestion";
import LoadingSuggestions from "../loading/LoadingSuggestions";
import useSuggestions from "./useSuggestions";

const Suggestions = () => {
  const { isLoading, suggestions, error } = useSuggestions();

  if (isLoading) {
    return <LoadingSuggestions />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!suggestions?.length) {
    return <div className="hidden pt-8 lg:block">No suggestions</div>;
  }

  return (
    <div className="hidden h-full flex-col gap-5 pt-8 lg:flex 2xl:w-[50%]">
      {/* <Suggestion suggestedUser={suggestions[0]?.user} /> */}

      <div className="flex items-center justify-between text-gray-400">
        <h3 className="text-sm font-semibold">Suggested For You</h3>
        <span className="text-xs">See All</span>
      </div>
      <div className="flex flex-col gap-4 pl-1">
        {suggestions?.map((suggestedUser, index) => (
          <Suggestion key={index} suggestedUser={suggestedUser?.user} />
        ))}
      </div>

      <div className="pt-6 text-start text-xs text-gray-600">
        About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top
        Accounts . Hashtags . Language . English
        <br />
        <br />
        &copy; 2024 RasmgaOl. All rights reserved.
      </div>
    </div>
  );
};

export default Suggestions;
