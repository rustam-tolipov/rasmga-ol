import React from "react";
import { HiCamera, HiOutlinePlusCircle } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import Posts from "../features/posts/Posts";
import { useQuery } from "@tanstack/react-query";
import { getHighlights, getSuggestions } from "../services/apiUsers";
import Suggestion from "../ui/Suggestion";

const Home = () => {
  return (
    <>
      <TopHeader>
        <HiCamera className="text-3xl xl:hidden" />
        <HiOutlinePlusCircle className="ml-auto text-3xl" />
      </TopHeader>
      <div className="mt-12 grid grid-cols-1 gap-28 sm:mt-0 md:pt-4 lg:grid-cols-[63%_auto] xl:px-16 xl:pr-28">
        <div className="flex flex-col gap-6 2xl:ml-auto">
          <Highlights />
          <Posts />
        </div>
        <Suggestions className="" />
      </div>
    </>
  );
};

export default Home;

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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-4 overflow-scroll whitespace-nowrap border-b border-gray-600 py-4 scrollbar-hide sm:border-none sm:px-4 sm:pb-0 xl:w-[45rem]">
      {highlights?.map((highlight, index) => (
        <Highlight key={index} highlight={highlight} />
      ))}
    </div>
  );
};

const Highlight = ({ highlight }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="aspect-h-1 w-16 rounded-[50%] border border-gray-50 object-cover p-1">
        <img
          src={highlight.avatar}
          alt="profile"
          className="w-full rounded-[50%]"
        />
      </div>
      <h3 className="text-xs">{highlight.username}</h3>
    </div>
  );
};

const Suggestions = () => {
  const {
    isLoading,
    data: suggestions,
    error,
  } = useQuery({
    queryKey: ["suggestions"],
    queryFn: getSuggestions,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!suggestions?.length) {
    return <div>No suggestions</div>;
  }

  return (
    <div className="hidden h-full flex-col gap-5 pt-8 lg:flex 2xl:w-[50%]">
      <Suggestion suggestedUser={suggestions[0]?.user} />

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
