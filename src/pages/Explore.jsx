import React from "react";

const Explore = () => {
  return (
    <div className="flex flex-col xl:items-center">
      <div className="mt-12 grid grid-cols-3 gap-1 p-8 sm:mt-0 xl:w-[70dvw]">
        {Array(120)
          .fill()
          .map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/${Math.floor(
                Math.random() * 100,
              )}/800/600`}
              alt="post"
              className={
                i % 7 === 2
                  ? "row-span-2 h-full w-full object-cover"
                  : "h-72 w-full object-cover"
              }
            />
          ))}
      </div>
    </div>
  );
};

export default Explore;
