import React from "react";
import useLikeComment from "../features/posts/useLikeComment";
import useUnLikeComment from "../hooks/useUnLikeComment";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

const LikeButton = ({ isLiked, comment }) => {
  const { likeComment } = useLikeComment();
  const { unLikeComment } = useUnLikeComment();

  return isLiked ? (
    <HiHeart
      className="ml-auto cursor-pointer text-sm text-red-500"
      onClick={() =>
        unLikeComment({ commentId: comment.id, postId: comment.post_id })
      }
    />
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
