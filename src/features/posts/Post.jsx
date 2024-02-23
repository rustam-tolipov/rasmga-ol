import React, { useEffect, useRef, useState } from "react";
import {
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineFaceSmile,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

import Reveal from "../../ui/Reveal";
import { useInView } from "framer-motion";

import Like from "../../ui/Like";
import DeletePost from "./DeletePost";

const currentDate = new Date();

const ago = (created_at) => {
  const diff = currentDate - new Date(created_at);
  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours}h`;
  }
  const days = Math.floor(hours / 24);

  return `${days}d`;
};

const Post = ({ post }) => {
  const { image, likes, comments, created_at, username, avatar, content } =
    post;

  return (
    <div className="flex w-full flex-col gap-3 2xl:w-[30rem]">
      <div className="flex items-center gap-2">
        <div className="h-[2.4rem] w-[2.5rem] rounded-[50%] border border-gray-50 p-1">
          <img
            src={avatar}
            alt="profile"
            className="h-full w-full rounded-[50%] object-cover"
          />
        </div>
        <div className="flex w-full items-center gap-1">
          <h3 className="text-sm font-semibold">{username}</h3>
          <span className="text-2xl text-gray-400">·</span>
          <span className="text-sm text-gray-400">{ago(created_at)}</span>

          {/* THIS BUTTON DELETES POST */}
          <DeletePost id={post.id} />
        </div>
      </div>
      <div className="h-fit w-full rounded-lg md:w-[30rem] 2xl:h-fit ">
        <LoadMedia media={image.url} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          <Like likes={likes} id={post.id} />

          <HiOutlineChatBubbleOvalLeft className="text-2xl" />
          <HiOutlinePaperAirplane className="text-2xl" />
          <HiOutlineBookmark className="ml-auto text-2xl" />
        </div>
        <div className="text-sm font-semibold">{likes?.length} likes</div>
        <div className="flex gap-1">
          <span className="text-sm font-semibold">{username}</span>
          <p className="text-sm">{content.slice(0, 56)}</p>
          <span className="text-sm text-gray-400">...more</span>
        </div>
        {comments?.length && (
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

const LoadMedia = ({ media }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (media.includes("video")) {
        ref.current.play();
      }
    }
  }, [isInView, media]);

  if (media.includes("video")) {
    return (
      <Reveal>
        <video
          src={media}
          alt="post"
          className="h-full w-full rounded-lg object-cover lg:max-h-[80dvh]"
          ref={ref}
          onClick={() => setPlayVideo(!playVideo)}
          loop
          muted
        />
      </Reveal>
    );
  }

  return (
    <Reveal>
      <img
        src={media}
        alt="post"
        className="h-full w-full rounded-lg object-cover"
        ref={ref}
      />
    </Reveal>
  );
};
