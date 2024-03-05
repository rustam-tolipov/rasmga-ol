import { useInView } from "framer-motion";
import React, { useRef } from "react";

const LoadMore = ({
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
}) => {

  return (
    <>
      <div className="flex justify-center">
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
    </>
  );
};

export default LoadMore;