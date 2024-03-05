import React from "react";
import useLikeComment from "../features/posts/useLikeComment";
import useUnLikeComment from "../hooks/useUnLikeComment";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

const LikeButton = ({ isLiked, comment }) => {
  const { isLiking, likeComment } = useLikeComment();
  const { isUnLiking, unLikeComment } = useUnLikeComment();

  return isLiked ? (
    isUnLiking ? (
      <HiHeart className="ml-auto animate-pulse text-sm text-red-500" />
    ) : (
      <HiHeart
        className="ml-auto cursor-pointer text-sm text-red-500"
        onClick={() =>
          unLikeComment({ commentId: comment.id, postId: comment.post_id })
        }
      />
    )
  ) : isLiking ? (
    <HiOutlineHeart className="ml-auto animate-pulse text-sm" />
  ) : (
    <HiOutlineHeart
      className="ml-auto cursor-pointer text-sm"
      onClick={() =>
        likeComment({ commentId: comment.id, postId: comment.post_id })
      }
    />
  );
};

export default LikeButton;
