import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Post from "./Post";
import LoadingPosts from "../loading/LoadingPosts";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const Posts = () => {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `${BASE_URL}/home?page=${pageParam}&per_page=1`,
    );
    return response.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.meta.next_page;
    },
  });

  if (status === "loading") {
    return <LoadingPosts />;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="col-start-1 col-end-2 sm:px-24">
      <div className="flex flex-col items-center gap-4">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </React.Fragment>
        ))}

        <div>
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="rounded-full bg-gray-800 px-4 py-2 text-gray-50"
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
          </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </div>
  );
};

export default Posts;
