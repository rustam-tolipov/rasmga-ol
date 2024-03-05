import React from "react";

const LoadingExplore = () => {
  return (
    <div className="flex flex-col xl:items-center">
      <div className="grid grid-cols-3 gap-1 sm:p-8 xl:w-[70dvw]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={
              i % 7 === 2
                ? "sm:row-span-2 bg-gray-800"
                : "h-40 bg-gray-800 sm:h-72"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingExplore;
