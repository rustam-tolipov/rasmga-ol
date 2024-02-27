import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePaperAirplane,
  HiOutlineBookmark,
  HiMiniEllipsisHorizontal,
} from "react-icons/hi2";
import { getPosts } from "../services/apiPosts";
import { useInView } from "framer-motion";
import Reveal from "../ui/Reveal";
import Like from "../ui/Like";

const Reels = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const reels = posts.filter((post) => post.image?.url.includes("mp4"));

  return (
    <div className="flex flex-col items-center xl:gap-8 xl:py-4">
      {reels.map((reel, index) => (
        <Reel key={index} reel={reel} />
      ))}
    </div>
  );
};

export default Reels;

const Reel = ({ reel }) => {
  const { id, image, likes, comments, created_at, username, avatar, content } =
    reel;

  return (
    <div className="relative h-full w-full xl:w-[30dvw]" key={id}>
      <LoadMedia media={image?.url} />

      <div className="absolute bottom-4 flex w-full flex-col items-end gap-8 px-4 pb-2">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <Like likes={likes} id={id} />
            <span className="text-xs">{likes.length}</span>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineChatBubbleOvalLeft className="text-2xl" />
            <span className="text-xs">{comments.length}</span>
          </div>
          <HiOutlinePaperAirplane className="text-2xl" />
        </div>

        <div className="flex w-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="aspect-h-1 w-10">
                <img src={avatar} alt="profile" className="rounded-full" />
              </div>
              <h3 className="text-sm font-semibold">username</h3>
              <span className="text-2xl text-gray-400">·</span>
              <button className="text-sm text-gray-400">Follow</button>
            </div>

            <div className="text-sm">
              lorem ipsum dolor sit amet, consectetur{" "}
              <span className="text-sm text-gray-400">...more</span>
            </div>
          </div>

          <HiMiniEllipsisHorizontal className="ml-auto text-xl" />
        </div>
      </div>
    </div>
  );
};

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

  return (
    <Reveal>
      <video
        src={media}
        alt="post"
        className="h-[93dvh] w-full object-cover md:h-[100dvh] xl:rounded-lg"
        ref={ref}
        onClick={() => setPlayVideo(!playVideo)}
        loop
        muted
      />
    </Reveal>
  );
};
