import React from "react";

const LoadingExplore = () => {
  return (
    <div className="flex flex-col xl:items-center">
      <div className="grid grid-cols-3 gap-1 p-8 xl:w-[70dvw]">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={
              i % 7 === 2 ? "row-span-2 bg-gray-800" : "h-72 bg-gray-800"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingExplore;
