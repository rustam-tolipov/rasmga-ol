
const LoadMore = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
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
    </div>
  );
};

export default LoadMore;
