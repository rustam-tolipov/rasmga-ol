import React from "react";

const LoadingUserItem = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-[50%] bg-gray-400"></div>
      <div className="flex flex-col gap-1">
        <div className="h-4 w-16 rounded-md bg-gray-400"></div>
        <div className="h-3 w-12 rounded-md bg-gray-400"></div>
      </div>
      <div className="ml-auto h-6 w-20 rounded-md bg-gray-400"></div>
    </div>
  );
};

export default LoadingUserItem;
