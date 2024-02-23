import React from "react";
import useLikePost from "../hooks/useLikePost";
import useUnlikePost from "../hooks/useUnlikePost";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

const Like = ({ likes, id }) => {
  const { likePost } = useLikePost();
  const { unlikePost } = useUnlikePost();

  const isLiked = likes?.some((like) => like.user_id === 1);

  return isLiked ? (
    <HiHeart className="text-2xl text-red-500" onClick={() => unlikePost(id)} />
  ) : (
    <HiOutlineHeart className="text-2xl" onClick={() => likePost(id)} />
  );
};

export default Like;
