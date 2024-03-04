import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getPostsByPage } from "../../services/apiPosts";

const useInfinitePosts = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["home"],
    queryFn: getPostsByPage,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.meta.next_page;
    },
  });

  return { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status };
};

export default useInfinitePosts;
