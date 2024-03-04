import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../services/apiPosts";
import usePosts from "../hooks/usePosts";
import LoadingExplore from "../features/loading/LoadingExplore";
import useInfinitePosts from "../features/posts/useInfinitePosts";
import LoadMore from "../ui/LoadMore";

const Explore = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching: isLoading,
    isFetchingNextPage,
  } = useInfinitePosts();

  if (isLoading) {
    return <LoadingExplore />;
  }

  return (
    <div className="flex flex-col xl:items-center">
      <div className="mt-12 grid grid-cols-3 gap-1 p-8 sm:mt-0 xl:w-[70dvw]">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((post) => (
              <LoadMedia media={post.image?.url} i={i} key={i} />
            ))}
          </React.Fragment>
        ))}
      </div>

      <LoadMore
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isLoading}
        isFetchingNextPage={isFetchingNextPage}
      />
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
