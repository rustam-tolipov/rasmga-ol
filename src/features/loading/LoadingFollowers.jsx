import React from "react";
import TopHeader from "../../ui/TopHeader";
import LoadingFollowerUser from "./LoadingFollowerUser";

const LoadingFollowers = ({ title }) => {
  return (
    <div className="flex flex-col gap-3 xl:px-4">
      <TopHeader title={title} />

      <div className="mt-12 flex flex-col gap-6 px-4 py-3 sm:mt-0">
        {Array.from({ length: 12 }, (_, index) => (
          <LoadingFollowerUser key={index} />
        ))}
      </div>
    </div>
  );
};

export default LoadingFollowers;
