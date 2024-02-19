import React from "react";
import {
  HiMiniEllipsisHorizontal,
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineFaceSmile,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

const Post = ({ post }) => {
  const { image, user, likes, comments } = post;

  return (
    <div className="ml-auto flex flex-col gap-3 2xl:w-[30rem]">
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
          <h3 className="text-sm font-semibold">{user.username}</h3>
          <span className="text-2xl text-gray-400">·</span>
          <span className="text-sm text-gray-400">2h</span>

          <HiMiniEllipsisHorizontal className="ml-auto text-xl" />
        </div>
      </div>
      <div className="h-[30rem] w-full rounded-lg bg-gray-500 2xl:h-fit ">
        {/* <img
          src={`https://picsum.photos/seed/${Math.floor(
            Math.random() * 100,
          )}/800/600`}
          alt="post"
          className="h-full w-full rounded-lg object-cover"
        /> */}
        <img
          src={image.url}
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
        <div className="text-sm font-semibold">{likes.length} likes</div>
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
        {comments.length > 0 && (
          <div className="text-sm text-gray-400">
            View all {comments.length} comments
          </div>
        )}
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

export default Post;
