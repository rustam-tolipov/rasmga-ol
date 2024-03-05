import React from "react";
import useLikePost from "../features/posts/useLikePost";
import useUnlikePost from "../hooks/useUnlikePost";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import useCurrentUser from "../hooks/useCurrentUser";

const Like = ({ likes, id }) => {
  const { likePost } = useLikePost();
  const { unlikePost } = useUnlikePost();
  const { currentUser } = useCurrentUser();

  const isLiked = likes?.some((like) => like.user_id === currentUser?.id);

  return isLiked ? (
    <HiHeart className="text-2xl text-red-500" onClick={() => unlikePost(id)} />
  ) : (
    <HiOutlineHeart className="text-2xl" onClick={() => likePost(id)} />
  );
};

export default Like;
