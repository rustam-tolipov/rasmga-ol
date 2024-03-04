import React from "react";
import Post from "./Post";
import LoadingPosts from "../loading/LoadingPosts";
import useInfinitePosts from "./useInfinitePosts";
import LoadMore from "../../ui/LoadMore";

const Posts = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfinitePosts();

  if (status === "pending") {
    return <LoadingPosts />;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  console.log(status);

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

        <LoadMore
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </div>
  );
};

export default Posts;
