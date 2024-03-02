import React from "react";

const LoadingNotifications = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-3 sm:mt-0">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="h-[2.8rem] w-[2.8rem] animate-pulse rounded-[50%] bg-gray-400"></div>
          <div className="flex max-h-[10rem] max-w-[20rem] flex-col gap-1 overflow-hidden overflow-ellipsis text-gray-200">
            <div className="h-4 w-3/4 animate-pulse bg-gray-400"></div>
            <div className="h-3 w-1/2 animate-pulse bg-gray-400"></div>
          </div>
          <div className="ml-auto h-[2.8rem] w-[2.8rem] animate-pulse bg-gray-400"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingNotifications;
