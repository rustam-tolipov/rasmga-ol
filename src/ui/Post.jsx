import React, { useEffect, useRef, useState } from "react";
import {
  HiMiniEllipsisHorizontal,
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineFaceSmile,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { format } from "date-fns";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../services/apiPosts";
import { Deleting } from "./Loader";
import toast from "react-hot-toast";
import Reveal from "./Reveal";
import { useInView } from "framer-motion";

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

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      toast.success("Post deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  return (
    <div className="flex w-fit flex-col gap-3 2xl:w-[30rem]">
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
          <HiMiniEllipsisHorizontal
            className="ml-auto text-xl"
            onClick={() => mutate(post.id)}
          />
        </div>
      </div>
      <div className="h-fit w-[30rem] rounded-lg 2xl:h-fit ">
        {isDeleting ? <Deleting /> : <LoadMedia media={image.url} />}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          <HiOutlineHeart className="text-2xl" />
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
          className="h-full w-full rounded-lg object-cover"
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
        src={media.replace("upload", "upload/w_500,h_500,c_fill,g_face")}
        alt="post"
        className="h-full w-full rounded-lg object-cover"
        ref={ref}
      />
    </Reveal>
  );
};
