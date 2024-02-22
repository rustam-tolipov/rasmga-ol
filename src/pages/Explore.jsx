import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../services/apiPosts";

const Explore = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div className="flex flex-col xl:items-center">
      <div className="mt-12 grid grid-cols-3 gap-1 p-8 sm:mt-0 xl:w-[70dvw]">
        {posts?.map((post, i) => (
          <LoadMedia media={post.image?.url} i={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Explore;

const LoadMedia = ({ media, i }) => {
  if (media.includes("video")) {
    return (
      <video
        src={media}
        className={
          i % 7 === 2
            ? "row-span-2 h-full w-full object-cover"
            : "h-72 w-full object-cover"
        }
      ></video>
    );
  }
  return (
    <img
      src={media}
      alt="post"
      className={
        i % 7 === 2
          ? "row-span-2 h-full w-full object-cover"
          : "h-72 w-full object-cover"
      }
    />
  );
};
