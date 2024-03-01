import React from "react";
import LoadingPost from "./LoadingPost";

const LoadingPosts = () => {
  return (
    <div className="col-start-1 col-end-2 sm:px-24">
      <div className="flex flex-col gap-5">
        {Array(5)
          .fill()
          .map((_, index) => (
            <LoadingPost key={index} />
          ))}
      </div>
    </div>
  );
};

export default LoadingPosts;
