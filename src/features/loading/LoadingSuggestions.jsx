import React from 'react'
import LoadingUserItem from './LoadingUserItem';

const LoadingSuggestions = () => {
  return (
    <div className="hidden h-full flex-col gap-5 pt-8 lg:flex 2xl:w-[50%]">
      <div className="flex items-center justify-between text-gray-400">
        <h3 className="text-sm font-semibold">Suggested For You</h3>
        <span className="text-xs">See All</span>
      </div>
      <div className="flex flex-col gap-4 pl-1">
        {Array.from({ length: 5 }, (_, index) => (
          <LoadingUserItem key={index} />
        ))}
      </div>
    </div>
  );
};


export default LoadingSuggestions