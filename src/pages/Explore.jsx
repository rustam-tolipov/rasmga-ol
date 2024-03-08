import React from "react";
import LoadingExplore from "../features/loading/LoadingExplore";
import useInfinitePosts from "../features/posts/useInfinitePosts";
import LoadMore from "../ui/LoadMore";
import { NavLink } from "react-router-dom";

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
              >
                <LoadMedia media={post.image?.url} i={index} />
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

const LoadMedia = ({ media, i }) => {
  if (media.includes("video")) {
    return (
      <video
        src={media}
        className={
          i % 7 === 2
            ? "h-full w-full object-cover sm:row-span-2"
            : " w-full object-cover sm:h-72"
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
          ? "h-full w-full object-cover sm:row-span-2"
          : "w-full object-cover sm:h-72"
      }
    />
  );
};
