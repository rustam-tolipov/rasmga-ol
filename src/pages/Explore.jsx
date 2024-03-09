import React from "react";
import LoadingExplore from "../features/loading/LoadingExplore";
import useInfinitePosts from "../features/posts/useInfinitePosts";
import LoadMore from "../ui/LoadMore";
import { NavLink } from "react-router-dom";
import LoadPreviewMedia from "./LoadPreviewMedia";

const Explore = () => {
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
    return <LoadingExplore />;
  }

  return (
    <div className="flex flex-col xl:items-center">
      <div className="grid grid-cols-3 gap-1 sm:mt-0 sm:p-8 xl:w-[70dvw]">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((post, index) => (
              <NavLink
                key={index}
                to={`/profile/${post.username}/post/${post.id}`}
                className="w-full overflow-hidden sm:h-72"
              >
                <LoadPreviewMedia
                  media={post.image?.thumbnail.url}
                  comments={post.comments.length}
                  likes={post.likes.length}
                />
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </div>

      <LoadMore
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};

export default Explore;
