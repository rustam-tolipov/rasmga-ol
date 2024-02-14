import React from "react";
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

const Post = ({ post }) => {
  const { image, likes, comments, created_at, username, avatar } = post;
  const currentDate = new Date();

  const ago = () => {
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
          <span className="text-sm text-gray-400">{ago()}</span>

          {/* THIS BUTTON DELETES POST */}
          <HiMiniEllipsisHorizontal
            className="ml-auto text-xl"
            onClick={() => mutate(post.id)}
          />
        </div>
      </div>
      <div className="h-fit w-[30rem] rounded-lg 2xl:h-fit ">
        {isDeleting ? (
          <Deleting />
        ) : (
          <img
            src={image.url}
            alt="post"
            className="h-fit w-full rounded-lg object-cover"
          />
        )}
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
          <span className="text-sm font-semibold">username</span>
          <p className="text-sm">
            {`lorem ipsum dolor sit amet, consectetur adipiscing elit.fdafs`.slice(
              0,
              56,
            )}
          </p>
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
