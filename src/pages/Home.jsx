import React from "react";
import {
  HiChatBubbleOvalLeft,
  HiHeart,
  HiMiniEllipsisHorizontal,
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineFaceSmile,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
  HiShare,
} from "react-icons/hi2";

const Home = () => {
  return (
    <div className="grid grid-cols-[65%_auto] gap-12">
      <div className="flex flex-col gap-6">
        <Highlights />
        <Posts />
      </div>
      <Suggestions className="" />
    </div>
  );
};

export default Home;

const Highlights = () => {
  return (
    <div className="scrollbar-hide flex gap-4 overflow-scroll whitespace-nowrap">
      {Array.from({ length: 12 }).map((_, index) => (
        <Highlight key={index} />
      ))}
    </div>
  );
};

const Highlight = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-[3.8rem] w-[3.8rem] rounded-[50%] border border-gray-50 object-cover p-1">
        <img
          src={`https://randomuser.me/api/portraits/men/${Math.floor(
            Math.random() * 100,
          )}.jpg`}
          alt="profile"
          className="h-full w-full rounded-[50%]"
        />
      </div>
      <h3 className="text-xs">username</h3>
    </div>
  );
};

const Suggestions = () => {
  return (
    // put second column of grid
    <div className="h-full border">
      <h1>Suggestions</h1>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="col-start-1 col-end-2 px-24">
      <div className="flex flex-col gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Post key={index} />
        ))}
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="h-[2.4rem] w-[2.5rem] rounded-[50%] border border-gray-50 p-1">
          <img
            src={`https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 100,
            )}.jpg`}
            alt="profile"
            className="h-full w-full rounded-[50%] object-cover"
          />
        </div>
        <div className="flex w-full items-center gap-1">
          <h3 className="text-sm font-semibold">username</h3>
          <span className="text-2xl text-gray-400">·</span>
          <span className="text-sm text-gray-400">2h</span>

          <HiMiniEllipsisHorizontal className="ml-auto text-xl" />
        </div>
      </div>
      <div className="h-[30rem] w-full rounded-lg bg-gray-500">
        <img
          src={`https://picsum.photos/seed/${Math.floor(
            Math.random() * 100,
          )}/800/600`}
          alt="post"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          <HiOutlineHeart className="text-2xl" />
          <HiOutlineChatBubbleOvalLeft className="text-2xl" />
          <HiOutlinePaperAirplane className="text-2xl" />
          <HiOutlineBookmark className="ml-auto text-2xl" />
        </div>
        <div className="text-sm font-semibold">
          {Math.floor(Math.random() * 1000)} likes
        </div>
        <div className="flex gap-1">
          <span className="text-sm font-semibold">username</span>
          <p className="text-sm">
            {`lorem ipsum dolor sit amet, consectetur adipiscing elit.fdafs`.slice(
              0,
              56,
            )}
          </p>
          <span className="text-sm text-gray-400">...more</span>
        </div>
        <div className="text-sm text-gray-400">View all 12 comments</div>
        <div className="flex justify-between text-gray-400">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full bg-transparent text-sm outline-none"
          />
          <HiOutlineFaceSmile className="text-lg" />
        </div>
      </div>
    </div>
  );
};
